import { motion } from "framer-motion";
import { ScatterChart, Scatter, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, ReferenceLine } from "recharts";
import type { DerivedFundRow } from "../types";
import { firmColor } from "./chartColors";

type Props = { rows: DerivedFundRow[] };

export default function ScaleVsReturns({ rows }: Props) {
  // Filter out extreme outliers (>$25B funds like SoftBank Vision) that break the scale
  const data = rows
    .filter((r) => r.netTVPI != null && r.fundSizeUSDm != null && r.fundSizeUSDm! <= 25000)
    .map((r) => ({
      size: r.fundSizeUSDm!,
      tvpi: r.netTVPI!,
      name: `${r.firm} — ${r.fundName}`,
      firm: r.firm,
      vintage: r.vintage,
    }));

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl border border-slate-200 p-6"
    >
      <h2 className="text-lg font-semibold text-slate-900 mb-1">Fund Size vs Returns</h2>
      <p className="text-xs text-slate-400 mb-4">
        Does size kill returns? The Kauffman Foundation found funds over $500M historically underperform.
        Dot size = vintage recency. Funds right of the $500M line face structural headwinds.
      </p>

      <ResponsiveContainer width="100%" height={350}>
        <ScatterChart margin={{ top: 10, right: 10, bottom: 10, left: 10 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
          <XAxis
            dataKey="size"
            type="number"
            tick={{ fontSize: 11, fill: "#64748b" }}
            tickFormatter={(v) => v >= 1000 ? `$${(v / 1000).toFixed(1)}B` : `$${v}M`}
            name="Fund Size"
          />
          <YAxis
            dataKey="tvpi"
            tick={{ fontSize: 11, fill: "#64748b" }}
            tickFormatter={(v) => `${v}x`}
            name="TVPI"
          />
          <ReferenceLine x={500} stroke="#e11d48" strokeDasharray="6 3" label={{ value: "$500M", position: "top", fill: "#e11d48", fontSize: 11 }} />
          <Tooltip
            content={({ payload }) => {
              if (!payload?.length) return null;
              const d = payload[0]?.payload;
              if (!d) return null;
              return (
                <div className="bg-white border border-slate-200 rounded-lg p-3 shadow-lg text-xs">
                  <p className="font-semibold text-slate-900">{d.name}</p>
                  <p className="text-slate-500">Vintage {d.vintage}</p>
                  <p className="text-slate-700 mt-1">Size: <span className="font-mono">${d.size >= 1000 ? `${(d.size / 1000).toFixed(1)}B` : `${d.size}M`}</span></p>
                  <p className="text-slate-700">TVPI: <span className="font-mono font-bold">{d.tvpi.toFixed(1)}x</span></p>
                </div>
              );
            }}
          />
          <Scatter data={data} name="Funds">
            {data.map((d, i) => (
              <circle
                key={i}
                r={5}
                fill={firmColor(d.firm)}
                stroke="#fff"
                strokeWidth={1.5}
                opacity={0.8}
              />
            ))}
          </Scatter>
        </ScatterChart>
      </ResponsiveContainer>
    </motion.div>
  );
}
