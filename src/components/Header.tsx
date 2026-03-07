import { motion } from "framer-motion";
import { Scale } from "lucide-react";

type Props = {
  fundCount: number;
  firmCount: number;
};

export default function Header({ fundCount, firmCount }: Props) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-8"
    >
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
          <Scale className="w-5 h-5 text-white" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          VC Fund Benchmarking
        </h1>
      </div>
      <p className="text-slate-500 text-sm ml-[52px]">
        Compare venture fund performance side-by-side. DPI-first analysis with
        quartile benchmarks, PME, and LP economics.
      </p>
      <div className="flex gap-2 mt-3 ml-[52px]">
        <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700">
          {fundCount} Funds
        </span>
        <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-teal-50 text-teal-700">
          {firmCount} Firms
        </span>
        <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-sky-50 text-sky-700">
          Free &amp; Open
        </span>
      </div>
    </motion.header>
  );
}
