import { motion } from "framer-motion";
import type { DerivedFundRow } from "../types";
import { fmtX } from "../utils/format";
import { firmColor } from "./chartColors";

type Props = { rows: DerivedFundRow[] };

export default function DPILeaderboard({ rows }: Props) {
  const withDPI = rows
    .filter((r) => r.netDPI != null && r.netDPI > 0)
    .sort((a, b) => b.netDPI! - a.netDPI!);

  const maxDPI = withDPI.length > 0 ? withDPI[0].netDPI! : 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl border border-slate-200 p-6"
    >
      <h2 className="text-lg font-semibold text-slate-900 mb-1">DPI Leaderboard</h2>
      <p className="text-xs text-slate-400 mb-4">
        Ranked by cash actually returned to LPs. DPI is the metric that matters most to allocators today
        — 60% of LPs now prioritize DPI over TVPI. Paper gains don't pay distributions.
      </p>

      <div className="space-y-2">
        {withDPI.slice(0, 15).map((r, i) => (
          <div key={r.fundName} className="flex items-center gap-3">
            <span className="text-xs text-slate-400 w-5 text-right font-mono">{i + 1}</span>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-slate-700">
                  <span style={{ color: firmColor(r.firm) }}>{r.firm}</span> — {r.fundName}
                </span>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-slate-400">TVPI {fmtX(r.netTVPI)}</span>
                  <span className="text-xs text-slate-400">
                    {r.dpiRatio != null ? `${(r.dpiRatio * 100).toFixed(0)}% realized` : ""}
                  </span>
                  <span className="text-sm font-bold text-slate-900 font-mono w-12 text-right">
                    {fmtX(r.netDPI)}
                  </span>
                </div>
              </div>
              <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all"
                  style={{
                    width: `${(r.netDPI! / maxDPI) * 100}%`,
                    backgroundColor: firmColor(r.firm),
                    opacity: 0.7,
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
