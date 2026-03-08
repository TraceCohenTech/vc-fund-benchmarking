import { motion } from "framer-motion";
import { ScatterChart, Scatter, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, ReferenceLine } from "recharts";
import type { DerivedFundRow } from "../types";
import { firmColor } from "./chartColors";

type Props = { rows: DerivedFundRow[] };

type DataPoint = {
  size: number;
  tvpi: number;
  name: string;
  firm: string;
  vintage: number;
};

function ChartTooltip({ payload }: { payload?: Array<{ payload: DataPoint }> }) {
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
}

export default function ScaleVsReturns({ rows }: Props) {
  const all = rows
    .filter((r) => r.netTVPI != null && r.fundSizeUSDm != null && r.fundSizeUSDm! > 0)
    .map((r) => ({
      size: r.fundSizeUSDm!,
      tvpi: r.netTVPI!,
      name: `${r.firm} — ${r.fundName}`,
      firm: r.firm,
      vintage: r.vintage,
    }));

  const small = all.filter((d) => d.size <= 1000);
  const large = all.filter((d) => d.size > 1000 && d.size <= 25000);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl border border-slate-200 p-6"
    >
      <h2 className="text-lg font-semibold text-slate-900 mb-1">Fund Size vs Returns</h2>
      <p className="text-xs text-slate-400 mb-4">
        Does size kill returns? The Kauffman Foundation found funds over $500M historically underperform.
        Split into two views so smaller funds aren't compressed by mega-funds.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Sub-$1B */}
        <div>
          <h3 className="text-sm font-medium text-slate-700 mb-2">
            Sub-$1B Funds
            <span className="text-xs text-slate-400 font-normal ml-2">({small.length} funds)</span>
          </h3>
          <ResponsiveContainer width="100%" height={320}>
            <ScatterChart margin={{ top: 10, right: 10, bottom: 10, left: 10 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis
                dataKey="size"
                type="number"
                domain={[0, 1000]}
                tick={{ fontSize: 10, fill: "#64748b" }}
                tickFormatter={(v) => `$${v}M`}
                name="Fund Size"
              />
              <YAxis
                dataKey="tvpi"
                tick={{ fontSize: 10, fill: "#64748b" }}
                tickFormatter={(v) => `${v}x`}
                name="TVPI"
              />
              <ReferenceLine x={500} stroke="#e11d48" strokeDasharray="6 3" label={{ value: "$500M", position: "top", fill: "#e11d48", fontSize: 10 }} />
              <Tooltip content={({ payload }) => <ChartTooltip payload={payload as unknown as Array<{ payload: DataPoint }>} />} />
              <Scatter data={small} name="Funds">
                {small.map((d, i) => (
                  <circle
                    key={i}
                    r={4.5}
                    fill={firmColor(d.firm)}
                    stroke="#fff"
                    strokeWidth={1.5}
                    opacity={0.8}
                  />
                ))}
              </Scatter>
            </ScatterChart>
          </ResponsiveContainer>
          <p className="text-xs text-slate-400 mt-1 text-center">
            Smaller funds cluster at higher multiples. Many 5x+ returns come from sub-$500M funds.
          </p>
        </div>

        {/* $1B+ */}
        <div>
          <h3 className="text-sm font-medium text-slate-700 mb-2">
            $1B+ Mega-Funds
            <span className="text-xs text-slate-400 font-normal ml-2">({large.length} funds)</span>
          </h3>
          <ResponsiveContainer width="100%" height={320}>
            <ScatterChart margin={{ top: 10, right: 10, bottom: 10, left: 10 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis
                dataKey="size"
                type="number"
                tick={{ fontSize: 10, fill: "#64748b" }}
                tickFormatter={(v) => v >= 1000 ? `$${(v / 1000).toFixed(0)}B` : `$${v}M`}
                name="Fund Size"
              />
              <YAxis
                dataKey="tvpi"
                tick={{ fontSize: 10, fill: "#64748b" }}
                tickFormatter={(v) => `${v}x`}
                name="TVPI"
              />
              <ReferenceLine x={3000} stroke="#f59e0b" strokeDasharray="6 3" label={{ value: "$3B", position: "top", fill: "#f59e0b", fontSize: 10 }} />
              <Tooltip content={({ payload }) => <ChartTooltip payload={payload as unknown as Array<{ payload: DataPoint }>} />} />
              <Scatter data={large} name="Funds">
                {large.map((d, i) => (
                  <circle
                    key={i}
                    r={4.5}
                    fill={firmColor(d.firm)}
                    stroke="#fff"
                    strokeWidth={1.5}
                    opacity={0.8}
                  />
                ))}
              </Scatter>
            </ScatterChart>
          </ResponsiveContainer>
          <p className="text-xs text-slate-400 mt-1 text-center">
            Mega-funds rarely exceed 3x. Scale compresses returns — more capital, fewer outlier outcomes.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
