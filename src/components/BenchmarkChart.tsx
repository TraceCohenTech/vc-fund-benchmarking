import { motion } from "framer-motion";
import { ComposedChart, Area, Scatter, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, CartesianGrid } from "recharts";
import type { DerivedFundRow, BenchmarkData } from "../types";
import { firmColor } from "./chartColors";

type Props = {
  rows: DerivedFundRow[];
  benchmarks: BenchmarkData[];
};

export default function BenchmarkChart({ rows, benchmarks }: Props) {
  // Build chart data: benchmark bands + fund scatter points
  const vintages = [...new Set([...benchmarks.map((b) => b.vintage), ...rows.map((r) => r.vintage)])].sort();

  const chartData = vintages.map((v) => {
    const bm = benchmarks.find((b) => b.vintage === v);
    return {
      vintage: v,
      topQ: bm?.topQuartileTVPI ?? null,
      median: bm?.medianTVPI ?? null,
      bottomQ: bm?.bottomQuartileTVPI ?? null,
    };
  });

  // Fund scatter points
  const scatterData = rows
    .filter((r) => r.netTVPI != null)
    .map((r) => ({
      vintage: r.vintage,
      tvpi: r.netTVPI!,
      name: `${r.firm} — ${r.fundName}`,
      firm: r.firm,
    }));

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
      </p>

      <ResponsiveContainer width="100%" height={400}>
        <ComposedChart data={chartData} margin={{ top: 10, right: 10, bottom: 10, left: 10 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
          <XAxis dataKey="vintage" tick={{ fontSize: 11, fill: "#64748b" }} />
          <YAxis tick={{ fontSize: 11, fill: "#64748b" }} tickFormatter={(v) => `${v}x`} domain={[0, "auto"]} />
          <Tooltip
            formatter={(value, name) => {
              if (name === "tvpi") return [`${Number(value).toFixed(1)}x`, "Net TVPI"];
              return [`${Number(value).toFixed(1)}x`, name];
            }}
            labelFormatter={(v) => `Vintage ${v}`}
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

          {/* Fund scatter */}
          <Scatter
            data={scatterData}
            dataKey="tvpi"
            name="Funds"
          >
            {scatterData.map((d, i) => (
              <circle
                key={i}
                r={5}
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
