import { Twitter, Mail } from "lucide-react";

const SOURCES = [
  { name: "CalPERS PEP Fund Performance", note: "Insight, Khosla, Tiger Global, Lightspeed" },
  { name: "Lightspeed Venture Partners", note: "Early-stage track record (Sep 2024)" },
  { name: "The Information", note: "USV fund IRR performance" },
  { name: "Cambridge Associates", note: "VC quartile benchmarks" },
  { name: "Newcomer", note: "Thrive, a16z performance data" },
  { name: "Arfur Rock", note: "Founders Fund performance data" },
  { name: "Carta Fund Performance Reports", note: "Quarterly quartile data" },
];

export default function Footer() {
  return (
    <footer className="mt-16 pb-8">
      <div className="border-t border-slate-200 pt-6 mb-6">
        <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
          Data Sources
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {SOURCES.map((s) => (
            <span key={s.name} className="text-[11px] text-slate-400">
              <span className="font-medium text-slate-500">{s.name}</span>
              {" \u2014 "}
              {s.note}
            </span>
          ))}
        </div>
      </div>
      <p className="text-center text-xs text-slate-400 mb-4">
        Benchmark quartile data derived from Cambridge Associates and Carta quarterly reports.
        Individual fund data from public pension disclosures and published reports. All values net to LP unless noted.
      </p>
      <div className="flex items-center justify-center gap-6 text-sm text-slate-400">
        <a
          href="https://x.com/Trace_Cohen"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 hover:text-slate-600 transition-colors"
        >
          <Twitter className="w-4 h-4" />
          @Trace_Cohen
        </a>
        <a
          href="mailto:t@nyvp.com"
          className="flex items-center gap-1.5 hover:text-slate-600 transition-colors"
        >
          <Mail className="w-4 h-4" />
          t@nyvp.com
        </a>
      </div>
    </footer>
  );
}
