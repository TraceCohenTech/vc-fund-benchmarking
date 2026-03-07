type Props = {
  firms: string[];
  strategies: string[];
  selectedFirm: string;
  selectedStrategy: string;
  onFirmChange: (v: string) => void;
  onStrategyChange: (v: string) => void;
};

export default function FilterBar({
  firms, strategies, selectedFirm, selectedStrategy, onFirmChange, onStrategyChange,
}: Props) {
  const select = "bg-white border border-slate-200 rounded-lg px-3 py-1.5 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500";
  return (
    <div className="flex flex-wrap gap-3 mb-6">
      <select className={select} value={selectedFirm} onChange={(e) => onFirmChange(e.target.value)}>
        <option value="All">All Firms</option>
        {firms.map((f) => <option key={f} value={f}>{f}</option>)}
      </select>
      <select className={select} value={selectedStrategy} onChange={(e) => onStrategyChange(e.target.value)}>
        <option value="All">All Strategies</option>
        {strategies.map((s) => <option key={s} value={s}>{s}</option>)}
      </select>
    </div>
  );
}
