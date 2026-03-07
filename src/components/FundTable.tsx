import { useState } from "react";
import { motion } from "framer-motion";
import type { DerivedFundRow } from "../types";
import { fmtX, fmtPct, fmtUSDm } from "../utils/format";
import { firmColor, QUARTILE_COLORS } from "./chartColors";

type Props = { rows: DerivedFundRow[] };
type SortKey = "firm" | "vintage" | "netTVPI" | "netDPI" | "irrToLP" | "pme" | "fundSizeUSDm" | "quartile";

export default function FundTable({ rows }: Props) {
  const [sortKey, setSortKey] = useState<SortKey>("netDPI");
  const [sortAsc, setSortAsc] = useState(false);

  const handleSort = (key: SortKey) => {
    if (key === sortKey) setSortAsc(!sortAsc);
    else { setSortKey(key); setSortAsc(false); }
  };

  const sorted = [...rows].sort((a, b) => {
    const av = a[sortKey as keyof DerivedFundRow];
    const bv = b[sortKey as keyof DerivedFundRow];
    if (av == null && bv == null) return 0;
    if (av == null) return 1;
    if (bv == null) return -1;
    const cmp = av < bv ? -1 : av > bv ? 1 : 0;
    return sortAsc ? cmp : -cmp;
  });

  const th = (label: string, key: SortKey) => (
    <th
      onClick={() => handleSort(key)}
      className="py-2 px-3 text-right text-xs font-medium text-slate-400 uppercase tracking-wider cursor-pointer hover:text-slate-600 select-none"
    >
      {label} {sortKey === key ? (sortAsc ? "\u25B2" : "\u25BC") : ""}
    </th>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl border border-slate-200 p-6"
    >
      <h2 className="text-lg font-semibold text-slate-900 mb-1">All Funds</h2>
      <p className="text-xs text-slate-400 mb-4">Click any column header to sort. DPI-first by default — what LPs actually received back.</p>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-100">
              <th className="py-2 px-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider cursor-pointer hover:text-slate-600" onClick={() => handleSort("firm")}>Firm</th>
              <th className="py-2 px-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">Fund</th>
              {th("Vintage", "vintage")}
              {th("Size", "fundSizeUSDm")}
              {th("TVPI", "netTVPI")}
              {th("DPI", "netDPI")}
              {th("IRR", "irrToLP")}
              {th("PME", "pme")}
              {th("Quartile", "quartile")}
            </tr>
          </thead>
          <tbody>
            {sorted.map((r) => (
              <tr key={r.fundName} className="border-b border-slate-50 hover:bg-slate-50">
                <td className="py-2 px-3 font-medium" style={{ color: firmColor(r.firm) }}>{r.firm}</td>
                <td className="py-2 px-3 text-slate-700">{r.fundName}</td>
                <td className="py-2 px-3 text-right text-slate-600 font-mono">{r.vintage}</td>
                <td className="py-2 px-3 text-right text-slate-600 font-mono">{fmtUSDm(r.fundSizeUSDm)}</td>
                <td className="py-2 px-3 text-right text-slate-900 font-mono font-medium">{fmtX(r.netTVPI)}</td>
                <td className="py-2 px-3 text-right text-slate-900 font-mono font-bold">{fmtX(r.netDPI)}</td>
                <td className="py-2 px-3 text-right text-slate-600 font-mono">{fmtPct(r.irrToLP)}</td>
                <td className="py-2 px-3 text-right text-slate-600 font-mono">{r.pme != null ? `${r.pme.toFixed(2)}x` : "\u2014"}</td>
                <td className="py-2 px-3 text-right">
                  {r.quartile ? (
                    <span
                      className="px-2 py-0.5 rounded-full text-xs font-medium text-white"
                      style={{ backgroundColor: QUARTILE_COLORS[r.quartile] ?? "#94a3b8" }}
                    >
                      {r.quartile}
                    </span>
                  ) : (
                    <span className="text-slate-300">\u2014</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}
