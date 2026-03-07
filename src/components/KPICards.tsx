import { motion } from "framer-motion";
import type { DerivedFundRow } from "../types";
import { mean, median } from "../utils/calculations";
import { fmtX, fmtPct, fmtUSDm } from "../utils/format";

type Props = { rows: DerivedFundRow[] };

export default function KPICards({ rows }: Props) {
  const withTVPI = rows.filter((r) => r.netTVPI != null);
  const withDPI = rows.filter((r) => r.netDPI != null);
  const withIRR = rows.filter((r) => r.irrToLP != null);
  const withPME = rows.filter((r) => r.pme != null);
  const topQuartile = rows.filter((r) => r.quartile === "Top");

  const cards = [
    { label: "Median TVPI", value: fmtX(median(withTVPI.map((r) => r.netTVPI))), sub: `${withTVPI.length} funds` },
    { label: "Avg DPI", value: fmtX(mean(withDPI.map((r) => r.netDPI))), sub: `${withDPI.length} reporting` },
    { label: "Avg IRR", value: fmtPct(mean(withIRR.map((r) => r.irrToLP))), sub: `${withIRR.length} funds` },
    { label: "Avg PME", value: (mean(withPME.map((r) => r.pme)) ?? 0).toFixed(2) + "x", sub: "vs S&P 500" },
    { label: "Top Quartile", value: `${topQuartile.length}`, sub: `of ${withTVPI.length} funds` },
    { label: "Total Capital", value: fmtUSDm(rows.reduce((s, r) => s + (r.fundSizeUSDm ?? 0), 0)), sub: `${rows.length} funds` },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
      {cards.map((c, i) => (
        <motion.div
          key={c.label}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.05 }}
          className="bg-white rounded-xl border border-slate-200 p-4"
        >
          <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">{c.label}</p>
          <p className="text-2xl font-bold text-slate-900 mt-1">{c.value}</p>
          <p className="text-xs text-slate-400 mt-0.5">{c.sub}</p>
        </motion.div>
      ))}
    </div>
  );
}
