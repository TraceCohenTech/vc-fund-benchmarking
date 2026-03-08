import { motion } from "framer-motion";
import type { DerivedFundRow } from "../types";
import { mean, median } from "../utils/calculations";
import { fmtX, fmtPct } from "../utils/format";

type Props = { rows: DerivedFundRow[] };

export default function KPICards({ rows }: Props) {
  const withTVPI = rows.filter((r) => r.netTVPI != null);
  const withDPI = rows.filter((r) => r.netDPI != null);
  const withIRR = rows.filter((r) => r.irrToLP != null);
  const withPME = rows.filter((r) => r.pme != null);
  const topQuartile = rows.filter((r) => r.quartile === "Top");

  // Count top decile funds (top 10% within their vintage)
  const topDecileCount = (() => {
    const byVintage = new Map<number, DerivedFundRow[]>();
    for (const r of withTVPI) {
      const arr = byVintage.get(r.vintage) || [];
      arr.push(r);
      byVintage.set(r.vintage, arr);
    }
    let count = 0;
    for (const r of withTVPI) {
      const peers = byVintage.get(r.vintage) || [];
      if (peers.length < 2) continue;
      const rank = peers.filter((p) => p.netTVPI! <= r.netTVPI!).length;
      if (rank / peers.length >= 0.9) count++;
    }
    return count;
  })();

  const cards: { label: string; value: string; sub: string; highlight?: boolean }[] = [
    { label: "Median TVPI", value: fmtX(median(withTVPI.map((r) => r.netTVPI))), sub: `${withTVPI.length} funds` },
    { label: "Avg DPI", value: fmtX(mean(withDPI.map((r) => r.netDPI))), sub: `${withDPI.length} reporting` },
    { label: "Avg IRR", value: fmtPct(mean(withIRR.map((r) => r.irrToLP))), sub: `${withIRR.length} funds` },
    { label: "Avg PME", value: (mean(withPME.map((r) => r.pme)) ?? 0).toFixed(2) + "x", sub: "vs S&P 500" },
    { label: "Top Quartile", value: `${topQuartile.length}`, sub: `of ${withTVPI.length} funds` },
    { label: "Top Decile", value: `${topDecileCount}`, sub: "elite performers", highlight: true },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
      {cards.map((c, i) => (
        <motion.div
          key={c.label}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.05 }}
          className={`rounded-xl border p-4 ${
            c.highlight
              ? "bg-gradient-to-br from-amber-50 to-amber-100/50 border-amber-200"
              : "bg-white border-slate-200"
          }`}
        >
          <p className={`text-xs font-medium uppercase tracking-wider ${c.highlight ? "text-amber-600" : "text-slate-400"}`}>{c.label}</p>
          <p className={`text-2xl font-bold mt-1 ${c.highlight ? "text-amber-700" : "text-slate-900"}`}>{c.value}</p>
          <p className={`text-xs mt-0.5 ${c.highlight ? "text-amber-500" : "text-slate-400"}`}>{c.sub}</p>
        </motion.div>
      ))}
    </div>
  );
}
