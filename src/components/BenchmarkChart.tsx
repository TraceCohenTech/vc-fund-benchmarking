import { motion } from "framer-motion";
import { ComposedChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, CartesianGrid, Scatter, Cell } from "recharts";
import type { DerivedFundRow, BenchmarkData } from "../types";
import { firmColor } from "./chartColors";

type Props = {
  rows: DerivedFundRow[];
  benchmarks: BenchmarkData[];
};

export default function BenchmarkChart({ rows, benchmarks }: Props) {
  const bmVintages = benchmarks.map((b) => b.vintage).sort();
  const minVintage = bmVintages[0] ?? 2004;
  const maxVintage = bmVintages[bmVintages.length - 1] ?? 2024;

  // Merge benchmark bands + fund dots into one dataset keyed by vintage
  // Each vintage row has the benchmark band values + an array of fund TVPIs
  const scatterData = rows
    .filter((r) => r.netTVPI != null && r.vintage >= minVintage && r.vintage <= maxVintage)
    .map((r) => ({
      vintage: r.vintage,
      tvpi: r.netTVPI!,
      name: `${r.firm} — ${r.fundName}`,
      firm: r.firm,
    }));

  const chartData = bmVintages.map((v) => {
    const bm = benchmarks.find((b) => b.vintage === v)!;
    return {
      vintage: v,
      topQ: bm.topQuartileTVPI,
      median: bm.medianTVPI,
      bottomQ: bm.bottomQuartileTVPI,
    };
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl border border-slate-200 p-6"
    >
      <h2 className="text-lg font-semibold text-slate-900 mb-1">Quartile Benchmarks by Vintage</h2>
      <p className="text-xs text-slate-400 mb-4">
        Shaded bands show top quartile (green), median (blue), and bottom quartile (amber) TVPI by vintage year.
        Each dot is a fund in the dataset. Funds above the green line are generational performers.
        <br />
        <span className="text-slate-500 font-medium">Sources: Cambridge Associates (2004–2016) · AngelList Fund Benchmarks Report 2025 (2017–2024, as of Jan 1, 2026)</span>
      </p>

      <ResponsiveContainer width="100%" height={400}>
        <ComposedChart data={chartData} margin={{ top: 10, right: 10, bottom: 10, left: 10 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
          <XAxis
            dataKey="vintage"
            type="number"
            domain={[minVintage, maxVintage]}
            tick={{ fontSize: 11, fill: "#64748b" }}
            tickCount={11}
          />
          <YAxis tick={{ fontSize: 11, fill: "#64748b" }} tickFormatter={(v) => `${v}x`} domain={[0, "auto"]} />
          <Tooltip
            content={({ active, payload, label }) => {
              if (!active || !payload?.length) return null;
              const items = payload.filter((p) => p.value != null);
              return (
                <div className="bg-white border border-slate-200 rounded-lg p-3 shadow-lg text-xs">
                  <p className="font-semibold text-slate-900 mb-1">Vintage {label}</p>
                  {items.map((p, i) => (
                    <p key={i} className="text-slate-600">
                      {p.name}: <span className="font-mono font-bold">{Number(p.value).toFixed(1)}x</span>
                    </p>
                  ))}
                </div>
              );
            }}
          />
          <Legend />

          {/* Benchmark bands */}
          <Area
            dataKey="topQ"
            name="Top Quartile"
            stroke="#059669"
            fill="#059669"
            fillOpacity={0.08}
            strokeWidth={2}
            strokeDasharray="6 3"
            dot={false}
            connectNulls
          />
          <Area
            dataKey="median"
            name="Median"
            stroke="#2563eb"
            fill="#2563eb"
            fillOpacity={0.05}
            strokeWidth={2}
            dot={false}
            connectNulls
          />
          <Area
            dataKey="bottomQ"
            name="Bottom Quartile"
            stroke="#f59e0b"
            fill="#f59e0b"
            fillOpacity={0.05}
            strokeWidth={1}
            strokeDasharray="4 4"
            dot={false}
            connectNulls
          />

          {/* Fund scatter — separate dataset, no line connecting them */}
          <Scatter
            data={scatterData}
            dataKey="tvpi"
            name="Funds"
            legendType="circle"
            line={false}
            isAnimationActive={false}
          >
            {scatterData.map((d, i) => (
              <Cell
                key={i}
                fill={firmColor(d.firm)}
                stroke="#fff"
                strokeWidth={1.5}
                opacity={0.85}
              />
            ))}
          </Scatter>
        </ComposedChart>
      </ResponsiveContainer>
    </motion.div>
  );
}
