export type StrategyType = "Early" | "Core" | "Growth" | "Unknown";

export type FundRow = {
  firm: string;
  fundName: string;
  vintage: number;
  fundSizeUSDm: number | null;
  grossTVPI: number | null;
  netTVPI: number | null;
  netDPI: number | null;
  irrToLP: number | null;
  strategyType: StrategyType;
};

export type DerivedFundRow = FundRow & {
  age: number;
  dpiRatio: number | null;
  performanceTier: PerformanceTier;
  macroRegime: MacroRegime;
  quartile: Quartile | null;
  pme: number | null;
};

export type PerformanceTier =
  | "Generational (5x+)"
  | "Strong (3-5x)"
  | "Institutional (2-3x)"
  | "Capital Preservation (1-2x)"
  | "Value Destruction (<1x)"
  | "Unknown";

export type MacroRegime =
  | "Pre-GFC (< 2009)"
  | "Post-GFC Recovery (2009-12)"
  | "SaaS Expansion (2013-18)"
  | "ZIRP Bubble (2019-21)"
  | "Rate Reset (2022+)";

export type Quartile = "Top" | "Second" | "Third" | "Bottom";

export type BenchmarkData = {
  vintage: number;
  topQuartileTVPI: number;
  medianTVPI: number;
  bottomQuartileTVPI: number;
  topQuartileIRR: number;
  medianIRR: number;
  bottomQuartileIRR: number;
  topQuartileDPI: number;
  medianDPI: number;
  bottomQuartileDPI: number;
};

export type FirmSummary = {
  firm: string;
  fundCount: number;
  totalCapitalM: number;
  avgNetTVPI: number | null;
  medianNetTVPI: number | null;
  avgDPI: number | null;
  avgIRR: number | null;
  bestFund: string;
  bestTVPI: number | null;
};

export type WaterfallRow = {
  label: string;
  firm: string;
  committed: number;
  managementFees: number;
  investedCapital: number;
  totalValue: number;
  returnOfCapital: number;
  lpProfit: number;
  gpCarry: number;
  lpTotal: number;
  gpTotal: number;
  gpTakePercent: number;
};
