import { useState } from "react";
import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, CartesianGrid } from "recharts";
import { fmtUSDm } from "../utils/format";

export default function LPCalculator() {
  const [commitment, setCommitment] = useState(10); // $M
  const [mgmtFee, setMgmtFee] = useState(2.0);
  const [carry, setCarry] = useState(20);
  const [fundLife, setFundLife] = useState(10);
  const [tvpi, setTvpi] = useState(3.0);

  const totalFees = (mgmtFee / 100) * commitment * fundLife;
  const totalValue = tvpi * commitment;
  const profit = Math.max(0, totalValue - commitment);
  const gpCarry = profit * (carry / 100);
  const lpProfit = profit * (1 - carry / 100);
  const lpTotal = commitment + lpProfit;
  const gpTotal = gpCarry + totalFees;

  const netToLP = lpTotal / commitment;
  const feeDrag = ((tvpi - netToLP) / tvpi * 100);

  // Scenario comparison
  const scenarios = [
    { name: "Bear (1.5x)", tvpi: 1.5 },
    { name: "Base (2.5x)", tvpi: 2.5 },
    { name: "Bull (4.0x)", tvpi: 4.0 },
    { name: "Outlier (8x)", tvpi: 8.0 },
  ].map((s) => {
    const tv = s.tvpi * commitment;
    const p = Math.max(0, tv - commitment);
    const gp = p * (carry / 100) + (mgmtFee / 100) * commitment * fundLife;
    const lp = tv - p * (carry / 100);
    return { ...s, lpReturn: lp, gpReturn: gp, feeDragPct: ((s.tvpi - lp / commitment) / s.tvpi * 100) };
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl border border-slate-200 p-6"
    >
      <h2 className="text-lg font-semibold text-slate-900 mb-1">LP Economics Calculator</h2>
      <p className="text-xs text-slate-400 mb-4">
        Model how fees and carry eat into returns. Adjust the sliders to see the real impact
        on what LPs take home. Most LPs underestimate fee drag on mediocre funds.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Controls */}
        <div className="space-y-5">
          {[
            { label: "Commitment", value: commitment, set: setCommitment, min: 1, max: 100, step: 1, fmt: (v: number) => `$${v}M` },
            { label: "Management Fee", value: mgmtFee, set: setMgmtFee, min: 0, max: 3, step: 0.25, fmt: (v: number) => `${v}%` },
            { label: "Carry", value: carry, set: setCarry, min: 0, max: 30, step: 5, fmt: (v: number) => `${v}%` },
            { label: "Fund Life", value: fundLife, set: setFundLife, min: 5, max: 15, step: 1, fmt: (v: number) => `${v} yrs` },
            { label: "Gross TVPI", value: tvpi, set: setTvpi, min: 0.5, max: 10, step: 0.5, fmt: (v: number) => `${v}x` },
          ].map((s) => (
            <div key={s.label}>
              <div className="flex justify-between mb-1">
                <label className="text-sm font-medium text-slate-600">{s.label}</label>
                <span className="text-sm font-bold text-slate-900 font-mono">{s.fmt(s.value)}</span>
              </div>
              <input
                type="range"
                min={s.min}
                max={s.max}
                step={s.step}
                value={s.value}
                onChange={(e) => s.set(Number(e.target.value))}
                className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-emerald-600"
              />
            </div>
          ))}

          {/* Results */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="bg-emerald-50 rounded-lg p-3">
              <p className="text-xs text-emerald-600 font-medium">LP Total Return</p>
              <p className="text-xl font-bold text-emerald-700">{fmtUSDm(lpTotal)}</p>
              <p className="text-xs text-emerald-500">{netToLP.toFixed(2)}x net</p>
            </div>
            <div className="bg-amber-50 rounded-lg p-3">
              <p className="text-xs text-amber-600 font-medium">GP Total Take</p>
              <p className="text-xl font-bold text-amber-700">{fmtUSDm(gpTotal)}</p>
              <p className="text-xs text-amber-500">{feeDrag.toFixed(1)}% fee drag</p>
            </div>
            <div className="bg-slate-50 rounded-lg p-3">
              <p className="text-xs text-slate-500 font-medium">Mgmt Fees Paid</p>
              <p className="text-lg font-bold text-slate-700">{fmtUSDm(totalFees)}</p>
            </div>
            <div className="bg-slate-50 rounded-lg p-3">
              <p className="text-xs text-slate-500 font-medium">GP Carry</p>
              <p className="text-lg font-bold text-slate-700">{fmtUSDm(gpCarry)}</p>
            </div>
          </div>
        </div>

        {/* Scenario chart */}
        <div>
          <h3 className="text-sm font-medium text-slate-700 mb-2">LP vs GP by Scenario</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={scenarios}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="name" tick={{ fontSize: 11, fill: "#64748b" }} />
              <YAxis tick={{ fontSize: 11, fill: "#64748b" }} tickFormatter={(v) => `$${v}M`} />
              <Tooltip
                content={({ active, payload, label }) => {
                  if (!active || !payload?.length) return null;
                  return (
                    <div className="bg-white border border-slate-200 rounded-lg p-3 shadow-lg text-xs">
                      <p className="font-semibold text-slate-900 mb-1">{label}</p>
                      {payload.map((p, i) => (
                        <p key={i} style={{ color: p.color }} className="font-medium">
                          {p.name}: <span className="font-mono font-bold">${Number(p.value).toFixed(1)}M</span>
                        </p>
                      ))}
                    </div>
                  );
                }}
              />
              <Legend />
              <Bar dataKey="lpReturn" name="LP Return" fill="#059669" radius={[4, 4, 0, 0]} />
              <Bar dataKey="gpReturn" name="GP Take" fill="#f59e0b" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
          <p className="text-xs text-slate-400 mt-2 text-center">
            At 2x TVPI, GPs take ~{scenarios[0]?.feeDragPct.toFixed(0)}% of total value through fees + carry.
            At 8x, the GP take shrinks to ~{scenarios[3]?.feeDragPct.toFixed(0)}% — alignment improves with performance.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
