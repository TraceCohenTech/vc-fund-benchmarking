import { motion } from "framer-motion";
import { ScatterChart, Scatter, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, ReferenceLine } from "recharts";
import type { DerivedFundRow } from "../types";
import { firmColor } from "./chartColors";

type Props = { rows: DerivedFundRow[] };

export default function PMEChart({ rows }: Props) {
  // Only show funds from 2004+ (where we have reliable S&P 500 data)
  // and cap at current year to avoid future vintages
  const data = rows
    .filter((r) => r.pme != null && r.netTVPI != null && r.vintage >= 2004 && r.vintage <= 2025)
    .map((r) => ({
      vintage: r.vintage,
      pme: r.pme!,
      tvpi: r.netTVPI!,
      name: `${r.firm} — ${r.fundName}`,
      firm: r.firm,
      size: r.fundSizeUSDm ?? 100,
    }));

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl border border-slate-200 p-6"
    >
      <h2 className="text-lg font-semibold text-slate-900 mb-1">Public Market Equivalent (PME)</h2>
      <p className="text-xs text-slate-400 mb-4">
        PME compares fund returns to simply investing in the S&P 500 over the same period.
        Above 1.0x (green line) means the fund beat public markets. Below means an index fund was better.
      </p>

      <ResponsiveContainer width="100%" height={350}>
        <ScatterChart margin={{ top: 10, right: 10, bottom: 10, left: 10 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
          <XAxis
            dataKey="vintage"
            type="number"
            domain={[2004, 2025]}
            tick={{ fontSize: 11, fill: "#64748b" }}
            name="Vintage"
            allowDataOverflow
          />
          <YAxis
            dataKey="pme"
            tick={{ fontSize: 11, fill: "#64748b" }}
            tickFormatter={(v) => `${v.toFixed(1)}x`}
            name="PME"
          />
          <ReferenceLine y={1} stroke="#059669" strokeWidth={2} strokeDasharray="6 3" label={{ value: "Beat S&P 500", position: "right", fill: "#059669", fontSize: 11 }} />
          <Tooltip
            formatter={(value, name) => {
              if (name === "pme") return [`${Number(value).toFixed(2)}x`, "PME"];
              return [value, name];
            }}
            labelFormatter={() => ""}
            content={({ payload }) => {
              if (!payload?.length) return null;
              const d = payload[0]?.payload;
              if (!d) return null;
              return (
                <div className="bg-white border border-slate-200 rounded-lg p-3 shadow-lg text-xs">
                  <p className="font-semibold text-slate-900">{d.name}</p>
                  <p className="text-slate-500">Vintage {d.vintage}</p>
                  <p className="text-slate-700 mt-1">PME: <span className="font-mono font-bold">{d.pme.toFixed(2)}x</span></p>
                  <p className="text-slate-700">TVPI: <span className="font-mono">{d.tvpi.toFixed(1)}x</span></p>
                </div>
              );
            }}
          />
          <Scatter data={data} name="Funds">
            {data.map((d, i) => (
              <circle
                key={i}
                r={Math.min(Math.max(Math.sqrt(d.size / 50), 3), 10)}
                fill={firmColor(d.firm)}
                stroke="#fff"
                strokeWidth={1.5}
                opacity={0.8}
              />
            ))}
          </Scatter>
        </ScatterChart>
      </ResponsiveContainer>

      <div className="flex flex-wrap gap-3 mt-3 justify-center">
        {[...new Set(data.map((d) => d.firm))].map((firm) => (
          <div key={firm} className="flex items-center gap-1.5 text-xs text-slate-500">
            <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: firmColor(firm) }} />
            {firm}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
