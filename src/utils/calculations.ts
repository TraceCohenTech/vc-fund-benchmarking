import type { FundRow, DerivedFundRow, PerformanceTier, MacroRegime, Quartile, BenchmarkData, FirmSummary, WaterfallRow } from "../types";

const CURRENT_YEAR = 2026;

// S&P 500 approximate annual returns by year (for PME calculation)
const SP500_RETURNS: Record<number, number> = {
  2004: 0.109, 2005: 0.049, 2006: 0.158, 2007: 0.055, 2008: -0.370,
  2009: 0.265, 2010: 0.151, 2011: 0.021, 2012: 0.160, 2013: 0.323,
  2014: 0.137, 2015: 0.014, 2016: 0.120, 2017: 0.218, 2018: -0.044,
  2019: 0.314, 2020: 0.184, 2021: 0.287, 2022: -0.182, 2023: 0.262,
  2024: 0.250, 2025: 0.100,
};

export function performanceTier(netTVPI: number | null): PerformanceTier {
  if (netTVPI == null) return "Unknown";
  if (netTVPI >= 5) return "Generational (5x+)";
  if (netTVPI >= 3) return "Strong (3-5x)";
  if (netTVPI >= 2) return "Institutional (2-3x)";
  if (netTVPI >= 1) return "Capital Preservation (1-2x)";
  return "Value Destruction (<1x)";
}

export function macroRegime(vintage: number): MacroRegime {
  if (vintage >= 2022) return "Rate Reset (2022+)";
  if (vintage >= 2019) return "ZIRP Bubble (2019-21)";
  if (vintage >= 2013) return "SaaS Expansion (2013-18)";
  if (vintage >= 2009) return "Post-GFC Recovery (2009-12)";
  return "Pre-GFC (< 2009)";
}

export function calculatePME(vintage: number, netTVPI: number | null): number | null {
  if (netTVPI == null) return null;
  let sp500Multiple = 1;
  for (let y = vintage; y < CURRENT_YEAR; y++) {
    sp500Multiple *= 1 + (SP500_RETURNS[y] ?? 0.08);
  }
  return netTVPI / sp500Multiple;
}

export function assignQuartile(
  fund: FundRow,
  benchmarks: BenchmarkData[]
): Quartile | null {
  if (fund.netTVPI == null) return null;
  const bm = benchmarks.find((b) => b.vintage === fund.vintage);
  if (!bm) return null;
  if (fund.netTVPI >= bm.topQuartileTVPI) return "Top";
  if (fund.netTVPI >= bm.medianTVPI) return "Second";
  if (fund.netTVPI >= bm.bottomQuartileTVPI) return "Third";
  return "Bottom";
}

export function deriveFundRows(rows: FundRow[], benchmarks: BenchmarkData[]): DerivedFundRow[] {
  return rows.map((r) => {
    const age = CURRENT_YEAR - r.vintage;
    const dpiRatio =
      r.netDPI != null && r.netTVPI != null && r.netTVPI > 0
        ? r.netDPI / r.netTVPI
        : null;
    return {
      ...r,
      age,
      dpiRatio,
      performanceTier: performanceTier(r.netTVPI),
      macroRegime: macroRegime(r.vintage),
      quartile: assignQuartile(r, benchmarks),
      pme: calculatePME(r.vintage, r.netTVPI),
    };
  });
}

function nums(arr: (number | null | undefined)[]): number[] {
  return arr.filter((v): v is number => v != null);
}

export function mean(arr: (number | null | undefined)[]): number | null {
  const valid = nums(arr);
  if (valid.length === 0) return null;
  return valid.reduce((s, v) => s + v, 0) / valid.length;
}

export function median(arr: (number | null | undefined)[]): number | null {
  const valid = nums(arr).sort((a, b) => a - b);
  if (valid.length === 0) return null;
  const mid = Math.floor(valid.length / 2);
  return valid.length % 2 === 0 ? (valid[mid - 1] + valid[mid]) / 2 : valid[mid];
}

export function uniq<T>(arr: T[]): T[] {
  return [...new Set(arr)];
}

export function computeFirmSummary(rows: DerivedFundRow[]): FirmSummary[] {
  const byFirm = new Map<string, DerivedFundRow[]>();
  for (const r of rows) {
    const arr = byFirm.get(r.firm) || [];
    arr.push(r);
    byFirm.set(r.firm, arr);
  }
  return Array.from(byFirm.entries()).map(([firm, funds]) => {
    const withTVPI = funds.filter((f) => f.netTVPI != null);
    const best = withTVPI.length > 0 ? withTVPI.reduce((a, b) => (a.netTVPI! > b.netTVPI! ? a : b)) : null;
    return {
      firm,
      fundCount: funds.length,
      totalCapitalM: funds.reduce((s, f) => s + (f.fundSizeUSDm || 0), 0),
      avgNetTVPI: mean(funds.map((f) => f.netTVPI)),
      medianNetTVPI: median(funds.map((f) => f.netTVPI)),
      avgDPI: mean(funds.map((f) => f.netDPI)),
      avgIRR: mean(funds.map((f) => f.irrToLP)),
      bestFund: best?.fundName ?? "\u2014",
      bestTVPI: best?.netTVPI ?? null,
    };
  });
}

export function computeWaterfall(
  fund: DerivedFundRow,
  mgmtFeeRate = 0.02,
  carryRate = 0.20,
  fundLifeYears = 10
): WaterfallRow | null {
  if (fund.fundSizeUSDm == null || fund.netTVPI == null) return null;
  const committed = fund.fundSizeUSDm;
  const life = Math.min(Math.max(fund.age, 5), fundLifeYears);
  const managementFees = mgmtFeeRate * committed * life;
  const investedCapital = committed - managementFees;
  const totalValue = fund.netTVPI * committed;
  const returnOfCapital = Math.min(totalValue, committed);
  const profit = Math.max(0, totalValue - committed);
  const gpCarry = profit * carryRate;
  const lpProfit = profit * (1 - carryRate);
  const lpTotal = returnOfCapital + lpProfit;
  const gpTotal = gpCarry + managementFees;
  const gpTakePercent = (totalValue + managementFees) > 0 ? gpTotal / (totalValue + managementFees) : 0;
  return { label: fund.fundName, firm: fund.firm, committed, managementFees, investedCapital, totalValue, returnOfCapital, lpProfit, gpCarry, lpTotal, gpTotal, gpTakePercent };
}
