import { useState, useMemo } from "react";
import { FUNDS, BENCHMARKS } from "./data";
import { deriveFundRows, uniq } from "./utils/calculations";
import type { DerivedFundRow } from "./types";

import Header from "./components/Header";
import FilterBar from "./components/FilterBar";
import KPICards from "./components/KPICards";
import ComparisonView from "./components/ComparisonView";
import BenchmarkChart from "./components/BenchmarkChart";
import VintageAnalysis from "./components/VintageAnalysis";
import DPILeaderboard from "./components/DPILeaderboard";
import PMEChart from "./components/PMEChart";
import ScaleVsReturns from "./components/ScaleVsReturns";
import LPCalculator from "./components/LPCalculator";
import VCvsPE from "./components/VCvsPE";
import FundTable from "./components/FundTable";
import Footer from "./components/Footer";

export default function App() {
  const allDerived = useMemo(() => deriveFundRows(FUNDS, BENCHMARKS), []);

  const firms = useMemo(() => uniq(FUNDS.map((f) => f.firm)), []);
  const strategies = useMemo(() => uniq(FUNDS.map((f) => f.strategyType)), []);

  const [selectedFirm, setSelectedFirm] = useState("All");
  const [selectedStrategy, setSelectedStrategy] = useState("All");

  const filtered = useMemo(() => {
    let rows: DerivedFundRow[] = allDerived;
    if (selectedFirm !== "All") rows = rows.filter((r) => r.firm === selectedFirm);
    if (selectedStrategy !== "All") rows = rows.filter((r) => r.strategyType === selectedStrategy);
    return rows;
  }, [allDerived, selectedFirm, selectedStrategy]);

  const firmCount = useMemo(() => uniq(filtered.map((r) => r.firm)).length, [filtered]);

  return (
    <div className="min-h-screen px-4 py-8 md:px-8 lg:px-12 max-w-[1400px] mx-auto">
      <Header fundCount={filtered.length} firmCount={firmCount} />

      <FilterBar
        firms={firms}
        strategies={strategies}
        selectedFirm={selectedFirm}
        selectedStrategy={selectedStrategy}
        onFirmChange={setSelectedFirm}
        onStrategyChange={setSelectedStrategy}
      />

      <KPICards rows={filtered} />

      {/* Side-by-Side Comparison */}
      <ComparisonView rows={filtered} />

      {/* Benchmark + Vintage */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <BenchmarkChart rows={filtered} benchmarks={BENCHMARKS} />
        <VintageAnalysis rows={filtered} />
      </div>

      {/* DPI + PME */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <DPILeaderboard rows={filtered} />
        <PMEChart rows={filtered} />
      </div>

      {/* VC vs Growth Equity */}
      <div className="mb-8">
        <VCvsPE rows={filtered} />
      </div>

      {/* Scale vs Returns */}
      <div className="mb-8">
        <ScaleVsReturns rows={filtered} />
      </div>

      {/* LP Calculator */}
      <div className="mb-8">
        <LPCalculator />
      </div>

      {/* Full Data Table */}
      <div className="mb-8">
        <FundTable rows={filtered} />
      </div>

      <Footer />
    </div>
  );
}
