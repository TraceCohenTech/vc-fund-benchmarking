import { useState } from "react";
import { motion } from "framer-motion";
import type { DerivedFundRow } from "../types";
import { fmtX, fmtPct, fmtUSDm } from "../utils/format";
import { firmColor, QUARTILE_COLORS } from "./chartColors";
import InfoTooltip from "./InfoTooltip";

type Props = { rows: DerivedFundRow[] };
type SortKey = "firm" | "vintage" | "netTVPI" | "netDPI" | "irrToLP" | "pme" | "fundSizeUSDm" | "quartile" | "percentile";

type EnrichedRow = DerivedFundRow & { percentile: number | null };

export default function FundTable({ rows }: Props) {
  const [sortKey, setSortKey] = useState<SortKey>("netDPI");
  const [sortAsc, setSortAsc] = useState(false);

  // Compute percentile rank within same-vintage peers
  const enriched: EnrichedRow[] = (() => {
    const byVintage = new Map<number, DerivedFundRow[]>();
    for (const r of rows) {
      if (r.netTVPI != null) {
        const arr = byVintage.get(r.vintage) || [];
        arr.push(r);
        byVintage.set(r.vintage, arr);
      }
    }
    return rows.map((r) => {
      if (r.netTVPI == null) return { ...r, percentile: null };
      const peers = byVintage.get(r.vintage) || [];
      if (peers.length < 2) return { ...r, percentile: null };
      const rank = peers.filter((p) => p.netTVPI! <= r.netTVPI!).length;
      return { ...r, percentile: Math.round((rank / peers.length) * 100) };
    });
  })();

  const handleSort = (key: SortKey) => {
    if (key === sortKey) setSortAsc(!sortAsc);
    else { setSortKey(key); setSortAsc(false); }
  };

  const sorted = [...enriched].sort((a, b) => {
    const av = a[sortKey as keyof EnrichedRow];
    const bv = b[sortKey as keyof EnrichedRow];
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
              <th onClick={() => handleSort("netTVPI")} className="py-2 px-3 text-right text-xs font-medium text-slate-400 uppercase tracking-wider cursor-pointer hover:text-slate-600 select-none">
                TVPI<InfoTooltip term="TVPI" /> {sortKey === "netTVPI" ? (sortAsc ? "\u25B2" : "\u25BC") : ""}
              </th>
              <th onClick={() => handleSort("netDPI")} className="py-2 px-3 text-right text-xs font-medium text-slate-400 uppercase tracking-wider cursor-pointer hover:text-slate-600 select-none">
                DPI<InfoTooltip term="DPI" /> {sortKey === "netDPI" ? (sortAsc ? "\u25B2" : "\u25BC") : ""}
              </th>
              <th onClick={() => handleSort("irrToLP")} className="py-2 px-3 text-right text-xs font-medium text-slate-400 uppercase tracking-wider cursor-pointer hover:text-slate-600 select-none">
                IRR<InfoTooltip term="IRR" /> {sortKey === "irrToLP" ? (sortAsc ? "\u25B2" : "\u25BC") : ""}
              </th>
              <th onClick={() => handleSort("pme")} className="py-2 px-3 text-right text-xs font-medium text-slate-400 uppercase tracking-wider cursor-pointer hover:text-slate-600 select-none">
                PME<InfoTooltip term="PME" /> {sortKey === "pme" ? (sortAsc ? "\u25B2" : "\u25BC") : ""}
              </th>
              <th onClick={() => handleSort("quartile")} className="py-2 px-3 text-right text-xs font-medium text-slate-400 uppercase tracking-wider cursor-pointer hover:text-slate-600 select-none">
                Quartile<InfoTooltip term="Quartile" /> {sortKey === "quartile" ? (sortAsc ? "\u25B2" : "\u25BC") : ""}
              </th>
              {th("Percentile", "percentile")}
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
                  <span className="inline-flex items-center gap-1.5">
                    {r.quartile ? (
                      <span
                        className="px-2 py-0.5 rounded-full text-xs font-medium text-white"
                        style={{ backgroundColor: QUARTILE_COLORS[r.quartile] ?? "#94a3b8" }}
                      >
                        {r.quartile}
                      </span>
                    ) : r.netTVPI == null ? (
                      <span className="text-slate-300 text-xs">No TVPI</span>
                    ) : (
                      <span className="text-slate-400 text-xs">Pre-benchmark</span>
                    )}
                    {r.percentile != null && r.percentile >= 90 && (
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-700 border border-amber-200 whitespace-nowrap">
                        Top 10%
                      </span>
                    )}
                  </span>
                </td>
                <td className="py-2 px-3 text-right">
                  {r.percentile != null ? (
                    <div className="flex items-center gap-2 justify-end">
                      <div className="w-20 h-2 rounded-full overflow-hidden" style={{ background: "linear-gradient(to right, #ef4444, #f59e0b, #22c55e)" }}>
                        <div
                          className="h-full relative"
                          style={{ width: `${r.percentile}%` }}
                        >
                          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-white border-2 border-slate-700 shadow-sm" />
                        </div>
                      </div>
                      <span className="font-mono text-xs text-slate-600 w-8 text-right">{r.percentile}%</span>
                    </div>
                  ) : (
                    <span className="text-slate-300 text-xs">{"\u2014"}</span>
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
