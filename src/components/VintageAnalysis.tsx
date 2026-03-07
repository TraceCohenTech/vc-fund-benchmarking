import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, CartesianGrid } from "recharts";
import type { DerivedFundRow } from "../types";
import { mean, median } from "../utils/calculations";

type Props = { rows: DerivedFundRow[] };

const REGIME_COLORS: Record<string, string> = {
  "Pre-GFC (< 2009)": "#64748b",
  "Post-GFC Recovery (2009-12)": "#059669",
  "SaaS Expansion (2013-18)": "#2563eb",
  "ZIRP Bubble (2019-21)": "#f59e0b",
  "Rate Reset (2022+)": "#e11d48",
};

export default function VintageAnalysis({ rows }: Props) {
  const withTVPI = rows.filter((r) => r.netTVPI != null);
  const vintages = [...new Set(withTVPI.map((r) => r.vintage))].sort();

  const data = vintages.map((v) => {
    const funds = withTVPI.filter((r) => r.vintage === v);
    const regime = funds[0]?.macroRegime ?? "Pre-GFC (< 2009)";
    return {
      vintage: v,
      avgTVPI: mean(funds.map((f) => f.netTVPI)) ?? 0,
      medianTVPI: median(funds.map((f) => f.netTVPI)) ?? 0,
      count: funds.length,
      regime,
    };
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl border border-slate-200 p-6"
    >
      <h2 className="text-lg font-semibold text-slate-900 mb-1">Vintage Year Performance</h2>
      <p className="text-xs text-slate-400 mb-4">
        Average TVPI by vintage year, color-coded by macro regime. Post-GFC and SaaS-era vintages
        produced the strongest returns. ZIRP-era funds are still early but showing stress.
      </p>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
          <XAxis dataKey="vintage" tick={{ fontSize: 11, fill: "#64748b" }} />
          <YAxis tick={{ fontSize: 11, fill: "#64748b" }} tickFormatter={(v) => `${v}x`} />
          <Tooltip
            formatter={(v) => [`${Number(v).toFixed(1)}x`, "Avg TVPI"]}
            labelFormatter={(v) => `Vintage ${v}`}
          />
          <Bar dataKey="avgTVPI" name="Avg TVPI" radius={[4, 4, 0, 0]}>
            {data.map((d, i) => (
              <Cell key={i} fill={REGIME_COLORS[d.regime] ?? "#64748b"} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>

      <div className="flex flex-wrap gap-3 mt-4 justify-center">
        {Object.entries(REGIME_COLORS).map(([regime, color]) => (
          <div key={regime} className="flex items-center gap-1.5 text-xs text-slate-500">
            <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: color }} />
            {regime}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
