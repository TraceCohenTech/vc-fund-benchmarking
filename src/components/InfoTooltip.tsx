import { useState } from "react";
import { Info } from "lucide-react";

const TERMS: Record<string, string> = {
  TVPI: "Total Value to Paid-In. Total fund value (realized + unrealized) divided by capital called. A 3.0x TVPI means $3 returned per $1 invested.",
  DPI: "Distributions to Paid-In. Cash actually returned to LPs divided by capital called. Unlike TVPI, DPI only counts realized returns — money in the bank.",
  IRR: "Internal Rate of Return. The annualized return accounting for the timing of cash flows. Higher IRR means faster compounding, but can be misleading for young funds.",
  PME: "Public Market Equivalent. Compares fund performance to investing the same capital in the S&P 500. A PME above 1.0x means the fund beat public markets.",
  Quartile: "Ranking vs. peer funds of the same vintage year. Top quartile = top 25% of funds. Based on Cambridge Associates benchmark data.",
};

type Props = {
  term: string;
  className?: string;
};

export default function InfoTooltip({ term, className = "" }: Props) {
  const [show, setShow] = useState(false);
  const text = TERMS[term];
  if (!text) return null;

  return (
    <span className={`relative inline-flex ${className}`}>
      <button
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        onClick={() => setShow(!show)}
        className="text-slate-300 hover:text-slate-500 transition-colors ml-1"
        aria-label={`What is ${term}?`}
      >
        <Info className="w-3.5 h-3.5" />
      </button>
      {show && (
        <div className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 px-3 py-2.5 bg-slate-900 text-white text-xs leading-relaxed rounded-lg shadow-xl pointer-events-none">
          <span className="font-semibold text-emerald-400">{term}</span>
          <span className="text-slate-300"> — {text}</span>
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900" />
        </div>
      )}
    </span>
  );
}
