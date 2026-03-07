import { useState } from "react";
import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, Legend, RadarChart, PolarGrid, PolarAngleAxis, Radar } from "recharts";
import type { DerivedFundRow } from "../types";
import { fmtX, fmtPct, fmtUSDm } from "../utils/format";
import { firmColor } from "./chartColors";
import { computeWaterfall } from "../utils/calculations";

type Props = { rows: DerivedFundRow[] };

export default function ComparisonView({ rows }: Props) {
  const [selected, setSelected] = useState<string[]>([]);
  const maxPicks = 5;

  const toggleFund = (name: string) => {
    setSelected((prev) =>
      prev.includes(name)
        ? prev.filter((n) => n !== name)
        : prev.length < maxPicks
        ? [...prev, name]
        : prev
    );
  };

  const picked = rows.filter((r) => selected.includes(r.fundName));
  const hasData = picked.length >= 2;

  // Bar chart data
  const barData = picked.map((r) => ({
    name: r.fundName,
    firm: r.firm,
    TVPI: r.netTVPI ?? 0,
    DPI: r.netDPI ?? 0,
    IRR: r.irrToLP != null ? r.irrToLP * 100 : 0,
  }));

  // Radar data — normalize metrics to 0-100 scale
  const maxTVPI = Math.max(...picked.map((r) => r.netTVPI ?? 0), 1);
  const maxDPI = Math.max(...picked.map((r) => r.netDPI ?? 0), 1);
  const maxIRR = Math.max(...picked.map((r) => (r.irrToLP ?? 0) * 100), 1);
  const maxPME = Math.max(...picked.map((r) => r.pme ?? 0), 1);

  const radarMetrics = ["TVPI", "DPI", "IRR", "PME", "DPI Ratio"];
  const radarData = radarMetrics.map((metric) => {
    const point: Record<string, string | number> = { metric };
    picked.forEach((r) => {
      switch (metric) {
        case "TVPI": point[r.fundName] = ((r.netTVPI ?? 0) / maxTVPI) * 100; break;
        case "DPI": point[r.fundName] = ((r.netDPI ?? 0) / maxDPI) * 100; break;
        case "IRR": point[r.fundName] = (((r.irrToLP ?? 0) * 100) / maxIRR) * 100; break;
        case "PME": point[r.fundName] = ((r.pme ?? 0) / maxPME) * 100; break;
        case "DPI Ratio": point[r.fundName] = (r.dpiRatio ?? 0) * 100; break;
      }
    });
    return point;
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white rounded-xl border border-slate-200 p-6 mb-8"
    >
      <h2 className="text-lg font-semibold text-slate-900 mb-1">Side-by-Side Comparison</h2>
      <p className="text-xs text-slate-400 mb-4">Select 2-5 funds to compare across all metrics. DPI and PME tell you what LPs actually received.</p>

      {/* Fund picker */}
      <div className="flex flex-wrap gap-1.5 mb-6 max-h-32 overflow-y-auto">
        {rows
          .filter((r) => r.netTVPI != null)
          .sort((a, b) => a.firm.localeCompare(b.firm))
          .map((r) => (
            <button
              key={r.fundName}
              onClick={() => toggleFund(r.fundName)}
              className={`px-2.5 py-1 rounded-full text-xs font-medium transition-all ${
                selected.includes(r.fundName)
                  ? "text-white shadow-sm"
                  : "bg-slate-50 text-slate-600 hover:bg-slate-100"
              }`}
              style={
                selected.includes(r.fundName)
                  ? { backgroundColor: firmColor(r.firm) }
                  : undefined
              }
            >
              {r.firm} — {r.fundName}
            </button>
          ))}
      </div>

      {!hasData && (
        <div className="text-center py-12 text-slate-400 text-sm">
          Pick at least 2 funds above to compare
        </div>
      )}

      {hasData && (
        <>
          {/* Comparison table */}
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-100">
                  <th className="text-left py-2 px-3 text-xs font-medium text-slate-400">Metric</th>
                  {picked.map((r) => (
                    <th key={r.fundName} className="text-right py-2 px-3 text-xs font-medium" style={{ color: firmColor(r.firm) }}>
                      {r.fundName}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { label: "Firm", fn: (r: DerivedFundRow) => r.firm },
                  { label: "Vintage", fn: (r: DerivedFundRow) => String(r.vintage) },
                  { label: "Fund Size", fn: (r: DerivedFundRow) => fmtUSDm(r.fundSizeUSDm) },
                  { label: "Strategy", fn: (r: DerivedFundRow) => r.strategyType },
                  { label: "Net TVPI", fn: (r: DerivedFundRow) => fmtX(r.netTVPI) },
                  { label: "Net DPI", fn: (r: DerivedFundRow) => fmtX(r.netDPI) },
                  { label: "IRR to LP", fn: (r: DerivedFundRow) => fmtPct(r.irrToLP) },
                  { label: "PME vs S&P", fn: (r: DerivedFundRow) => r.pme != null ? `${r.pme.toFixed(2)}x` : "\u2014" },
                  { label: "DPI/TVPI Ratio", fn: (r: DerivedFundRow) => r.dpiRatio != null ? `${(r.dpiRatio * 100).toFixed(0)}%` : "\u2014" },
                  { label: "Quartile", fn: (r: DerivedFundRow) => r.quartile ?? "\u2014" },
                  { label: "Age (years)", fn: (r: DerivedFundRow) => String(r.age) },
                  { label: "GP Take", fn: (r: DerivedFundRow) => { const w = computeWaterfall(r); return w ? `${(w.gpTakePercent * 100).toFixed(0)}%` : "\u2014"; } },
                ].map((row) => (
                  <tr key={row.label} className="border-b border-slate-50 hover:bg-slate-50">
                    <td className="py-2 px-3 text-slate-600 font-medium">{row.label}</td>
                    {picked.map((r) => (
                      <td key={r.fundName} className="py-2 px-3 text-right text-slate-900 font-mono">
                        {row.fn(r)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* TVPI + DPI bars */}
            <div>
              <h3 className="text-sm font-medium text-slate-700 mb-2">TVPI vs DPI (cash returned)</h3>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={barData} barGap={4}>
                  <XAxis dataKey="name" tick={{ fontSize: 11, fill: "#64748b" }} />
                  <YAxis tick={{ fontSize: 11, fill: "#64748b" }} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="TVPI" name="Net TVPI" radius={[4, 4, 0, 0]}>
                    {barData.map((d, i) => (
                      <Cell key={i} fill={firmColor(d.firm)} />
                    ))}
                  </Bar>
                  <Bar dataKey="DPI" name="Net DPI" radius={[4, 4, 0, 0]}>
                    {barData.map((d, i) => (
                      <Cell key={i} fill={firmColor(d.firm)} opacity={0.4} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Radar chart */}
            <div>
              <h3 className="text-sm font-medium text-slate-700 mb-2">Multi-Metric Radar (normalized)</h3>
              <ResponsiveContainer width="100%" height={250}>
                <RadarChart data={radarData}>
                  <PolarGrid stroke="#e2e8f0" />
                  <PolarAngleAxis dataKey="metric" tick={{ fontSize: 11, fill: "#64748b" }} />
                  {picked.map((r) => (
                    <Radar
                      key={r.fundName}
                      name={r.fundName}
                      dataKey={r.fundName}
                      stroke={firmColor(r.firm)}
                      fill={firmColor(r.firm)}
                      fillOpacity={0.1}
                      strokeWidth={2}
                    />
                  ))}
                  <Legend />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </>
      )}
    </motion.div>
  );
}
