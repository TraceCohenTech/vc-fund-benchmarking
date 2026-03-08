import { useMemo } from "react";
import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend, Line, Area, ComposedChart } from "recharts";
import type { DerivedFundRow } from "../types";
import { median } from "../utils/calculations";

type Props = { rows: DerivedFundRow[] };

type StrategyLabel = "Early-Stage VC" | "Multi-Stage" | "Growth Equity";

function classifyStrategy(strategyType: string): StrategyLabel {
  if (strategyType === "Early") return "Early-Stage VC";
  if (strategyType === "Core") return "Multi-Stage";
  return "Growth Equity";
}

const STRATEGY_COLORS: Record<StrategyLabel, string> = {
  "Early-Stage VC": "#059669",
  "Multi-Stage": "#2563eb",
  "Growth Equity": "#f59e0b",
};

export default function VCvsPE({ rows }: Props) {
  const stats = useMemo(() => {
    const groups: Record<StrategyLabel, DerivedFundRow[]> = {
      "Early-Stage VC": [],
      "Multi-Stage": [],
      "Growth Equity": [],
    };

    for (const r of rows) {
      groups[classifyStrategy(r.strategyType)].push(r);
    }

    return (Object.keys(groups) as StrategyLabel[]).map((label) => {
      const funds = groups[label];
      const tvpis = funds.map((f) => f.netTVPI).filter((v): v is number => v != null);
      const dpis = funds.map((f) => f.netDPI).filter((v): v is number => v != null);
      const irrs = funds.map((f) => f.irrToLP).filter((v): v is number => v != null);
      const sizes = funds.map((f) => f.fundSizeUSDm).filter((v): v is number => v != null);

      return {
        strategy: label,
        count: funds.length,
        medianTVPI: median(tvpis) ?? 0,
        medianDPI: median(dpis) ?? 0,
        medianIRR: (median(irrs) ?? 0) * 100,
        avgSize: sizes.length > 0 ? Math.round(sizes.reduce((a, b) => a + b, 0) / sizes.length) : 0,
        pctAbove3x: tvpis.length > 0 ? Math.round((tvpis.filter((v) => v >= 3).length / tvpis.length) * 100) : 0,
        pctBelow1x: tvpis.length > 0 ? Math.round((tvpis.filter((v) => v < 1).length / tvpis.length) * 100) : 0,
      };
    });
  }, [rows]);

  // Reshape data for bar chart: metrics as rows, strategies as separate bars
  const barData = useMemo(() => [
    {
      metric: "TVPI",
      "Early-Stage VC": stats.find((s) => s.strategy === "Early-Stage VC")?.medianTVPI ?? 0,
      "Multi-Stage": stats.find((s) => s.strategy === "Multi-Stage")?.medianTVPI ?? 0,
      "Growth Equity": stats.find((s) => s.strategy === "Growth Equity")?.medianTVPI ?? 0,
    },
    {
      metric: "DPI",
      "Early-Stage VC": stats.find((s) => s.strategy === "Early-Stage VC")?.medianDPI ?? 0,
      "Multi-Stage": stats.find((s) => s.strategy === "Multi-Stage")?.medianDPI ?? 0,
      "Growth Equity": stats.find((s) => s.strategy === "Growth Equity")?.medianDPI ?? 0,
    },
  ], [stats]);

  // Vintage-by-vintage comparison (2004+ only)
  const vintageData = useMemo(() => {
    const vintages = [...new Set(rows.filter((r) => r.vintage >= 2004 && r.vintage <= 2024).map((r) => r.vintage))].sort();

    return vintages.map((v) => {
      const byVintage = rows.filter((r) => r.vintage === v);
      const early = byVintage.filter((r) => r.strategyType === "Early");
      const growth = byVintage.filter((r) => r.strategyType === "Growth");
      const core = byVintage.filter((r) => r.strategyType === "Core");

      return {
        vintage: v,
        "Early-Stage VC": median(early.map((r) => r.netTVPI)) ?? null,
        "Multi-Stage": median(core.map((r) => r.netTVPI)) ?? null,
        "Growth Equity": median(growth.map((r) => r.netTVPI)) ?? null,
      };
    }).filter((d) => d["Early-Stage VC"] != null || d["Growth Equity"] != null);
  }, [rows]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl border border-slate-200 p-6"
    >
      <h2 className="text-lg font-semibold text-slate-900 mb-1">Early-Stage VC vs Growth Equity</h2>
      <p className="text-xs text-slate-400 mb-5">
        Early-stage VC funds target higher multiples with more variance. Growth equity deploys more capital
        with lower risk but compressed upside. The data shows the classic risk/return tradeoff.
      </p>

      {/* Summary cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {stats.map((s, idx) => (
          <motion.div
            key={s.strategy}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="rounded-lg border p-4 hover:shadow-md transition-shadow duration-200"
            style={{
              borderColor: STRATEGY_COLORS[s.strategy] + "40",
              background: `linear-gradient(135deg, ${STRATEGY_COLORS[s.strategy]}08 0%, transparent 60%)`,
            }}
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: STRATEGY_COLORS[s.strategy] }} />
              <span className="text-sm font-semibold text-slate-900">{s.strategy}</span>
            </div>
            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between">
                <span className="text-slate-500"># Funds</span>
                <span className="font-mono font-bold text-slate-900">{s.count}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Median TVPI</span>
                <span className="font-mono font-bold text-slate-900">{s.medianTVPI.toFixed(1)}x</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Median DPI</span>
                <span className="font-mono font-bold text-slate-900">{s.medianDPI.toFixed(1)}x</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Median IRR</span>
                <span className="font-mono font-bold text-slate-900">{s.medianIRR.toFixed(1)}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Avg Fund Size</span>
                <span className="font-mono text-slate-700">${s.avgSize >= 1000 ? `${(s.avgSize / 1000).toFixed(1)}B` : `${s.avgSize}M`}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Hit Rate (3x+)</span>
                <span className="font-mono font-bold" style={{ color: STRATEGY_COLORS[s.strategy] }}>{s.pctAbove3x}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Loss Rate (&lt;1x)</span>
                <span className="font-mono text-red-500">{s.pctBelow1x}%</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Bar chart — key metrics side by side */}
        <div>
          <h3 className="text-sm font-medium text-slate-700 mb-2">Median Returns by Strategy</h3>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart
              data={barData}
              margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="metric" tick={{ fontSize: 11, fill: "#64748b", fontWeight: 600 }} />
              <YAxis tick={{ fontSize: 10, fill: "#64748b" }} tickFormatter={(v) => `${v}x`} />
              <Tooltip
                content={({ active, payload, label }) => {
                  if (!active || !payload?.length) return null;
                  return (
                    <div className="bg-white border border-slate-200 rounded-lg p-3 shadow-lg text-xs">
                      <p className="font-semibold text-slate-900 mb-1">Median {label}</p>
                      {payload.map((p, i) => (
                        <p key={i} style={{ color: p.color }}>
                          {p.name}: <span className="font-mono font-bold">{Number(p.value).toFixed(2)}x</span>
                        </p>
                      ))}
                    </div>
                  );
                }}
              />
              <Legend />
              <Bar dataKey="Early-Stage VC" fill={STRATEGY_COLORS["Early-Stage VC"]} radius={[4, 4, 0, 0]} animationDuration={800} />
              <Bar dataKey="Multi-Stage" fill={STRATEGY_COLORS["Multi-Stage"]} radius={[4, 4, 0, 0]} animationDuration={900} />
              <Bar dataKey="Growth Equity" fill={STRATEGY_COLORS["Growth Equity"]} radius={[4, 4, 0, 0]} animationDuration={1000} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Line chart — vintage-by-vintage TVPI comparison */}
        <div>
          <h3 className="text-sm font-medium text-slate-700 mb-2">Median TVPI by Vintage Year</h3>
          <ResponsiveContainer width="100%" height={280}>
            <ComposedChart data={vintageData} margin={{ top: 10, right: 10, bottom: 10, left: 10 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="vintage" tick={{ fontSize: 10, fill: "#64748b" }} />
              <YAxis tick={{ fontSize: 10, fill: "#64748b" }} tickFormatter={(v) => `${v}x`} />
              <Tooltip
                content={({ active, payload, label }) => {
                  if (!active || !payload?.length) return null;
                  const items = payload.filter((p) => p.value != null);
                  return (
                    <div className="bg-white border border-slate-200 rounded-lg p-3 shadow-lg text-xs">
                      <p className="font-semibold text-slate-900 mb-1">Vintage {label}</p>
                      {items.map((p, i) => (
                        <p key={i} style={{ color: p.color }} className="font-medium">
                          {p.name}: <span className="font-mono font-bold">{Number(p.value).toFixed(1)}x</span>
                        </p>
                      ))}
                    </div>
                  );
                }}
              />
              <Legend />
              <Area
                type="monotone"
                dataKey="Early-Stage VC"
                stroke="none"
                fill={STRATEGY_COLORS["Early-Stage VC"]}
                fillOpacity={0.06}
                connectNulls
                legendType="none"
              />
              <Area
                type="monotone"
                dataKey="Multi-Stage"
                stroke="none"
                fill={STRATEGY_COLORS["Multi-Stage"]}
                fillOpacity={0.06}
                connectNulls
                legendType="none"
              />
              <Area
                type="monotone"
                dataKey="Growth Equity"
                stroke="none"
                fill={STRATEGY_COLORS["Growth Equity"]}
                fillOpacity={0.06}
                connectNulls
                legendType="none"
              />
              <Line
                type="monotone"
                dataKey="Early-Stage VC"
                stroke={STRATEGY_COLORS["Early-Stage VC"]}
                strokeWidth={2.5}
                dot={{ r: 4, fill: STRATEGY_COLORS["Early-Stage VC"], stroke: "#fff", strokeWidth: 2 }}
                activeDot={{ r: 6, fill: STRATEGY_COLORS["Early-Stage VC"], stroke: "#fff", strokeWidth: 2 }}
                connectNulls
                animationDuration={1200}
              />
              <Line
                type="monotone"
                dataKey="Multi-Stage"
                stroke={STRATEGY_COLORS["Multi-Stage"]}
                strokeWidth={2.5}
                dot={{ r: 4, fill: STRATEGY_COLORS["Multi-Stage"], stroke: "#fff", strokeWidth: 2 }}
                activeDot={{ r: 6, fill: STRATEGY_COLORS["Multi-Stage"], stroke: "#fff", strokeWidth: 2 }}
                connectNulls
                animationDuration={1200}
              />
              <Line
                type="monotone"
                dataKey="Growth Equity"
                stroke={STRATEGY_COLORS["Growth Equity"]}
                strokeWidth={2.5}
                dot={{ r: 4, fill: STRATEGY_COLORS["Growth Equity"], stroke: "#fff", strokeWidth: 2 }}
                activeDot={{ r: 6, fill: STRATEGY_COLORS["Growth Equity"], stroke: "#fff", strokeWidth: 2 }}
                connectNulls
                animationDuration={1200}
              />
            </ComposedChart>
          </ResponsiveContainer>
          <p className="text-xs text-slate-400 mt-1 text-center">
            Early-stage consistently outperforms on multiples but with wider dispersion.
            Post-2020 vintages converge as all strategies face markdowns.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
