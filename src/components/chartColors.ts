export const FIRM_COLORS: Record<string, string> = {
  // Tier 1 — Iconic VC
  Thrive: "#2563eb",
  a16z: "#0f172a",
  "Founders Fund": "#f59e0b",
  Sequoia: "#b91c1c",
  Benchmark: "#dc2626",
  Accel: "#7c3aed",
  NEA: "#0369a1",
  Greylock: "#475569",
  "Kleiner Perkins": "#059669",
  "Index Ventures": "#6366f1",
  Lightspeed: "#059669",

  // Tier 2 — Growth & Crossover
  Insight: "#0891b2",
  "Tiger Global": "#e11d48",
  TCV: "#7c3aed",
  "General Atlantic": "#16a34a",
  Coatue: "#1e40af",
  Altimeter: "#9333ea",
  Dragoneer: "#0e7490",
  "D1 Capital": "#334155",
  Greenoaks: "#166534",
  ICONIQ: "#1d4ed8",
  SoftBank: "#64748b",

  // Tier 3 — Established VC
  USV: "#6366f1",
  "Spark Capital": "#ea580c",
  "Battery Ventures": "#0d9488",
  Bessemer: "#4f46e5",
  "General Catalyst": "#15803d",
  IVP: "#a855f7",
  "Ribbit Capital": "#be185d",
  Meritech: "#0284c7",
  "Sapphire Ventures": "#2563eb",
  Redpoint: "#dc2626",
  "Scale VP": "#0891b2",
  "Menlo Ventures": "#7e22ce",
  Norwest: "#ca8a04",
  Mayfield: "#c2410c",
  Madrona: "#0f766e",
  Felicis: "#ea580c",

  // Tier 4 — Seed/Early Specialists
  "First Round": "#f97316",
  "Founder Collective": "#84cc16",
  Initialized: "#14b8a6",
  "Lerer Hippeau": "#ec4899",
  Emergence: "#8b5cf6",
  Forerunner: "#f472b6",
  LSVP: "#06b6d4",
  "Craft Ventures": "#78716c",
  "8VC": "#1e3a5f",
  Addition: "#94a3b8",
  Paradigm: "#a78bfa",

  // Tier 5 — PE/Growth & Others
  Khosla: "#d97706",
  "Francisco Partners": "#0d9488",
  Summit: "#ea580c",
  "TPG Growth": "#4f46e5",
  BlueYard: "#0ea5e9",
  "IA Ventures": "#a855f7",
  "Foundry Group": "#dc2626",
  "GGV Capital": "#15803d",
  HongShan: "#c2410c",
  BOND: "#7e22ce",
  Base10: "#0369a1",
  "Oak HC/FT": "#0e7490",
  PSG: "#4338ca",
  "TA Associates": "#9333ea",
  Permira: "#c026d3",
  "Arsenal Capital": "#be123c",
  Advent: "#0284c7",
  "BRV Lotus": "#65a30d",
  "Oregon Angel Fund": "#059669",

  // Tier 6 — Agent-discovered firms
  AIP: "#374151",
  "Vista Equity": "#1e293b",
  "Bain Capital LS": "#7c3aed",
  "Silver Lake": "#334155",
  "Radical Ventures": "#10b981",
  "Matrix Partners": "#f43f5e",
  "Volition Capital": "#3b82f6",
  "Notable Capital": "#8b5cf6",
  "Barings (NJ EM)": "#6b7280",
  "Y Combinator": "#f97316",
  "True Ventures": "#0d9488",
  "Peak XV": "#dc2626",
  "Upfront Ventures": "#2563eb",
};

export const QUARTILE_COLORS: Record<string, string> = {
  Top: "#059669",
  Second: "#2563eb",
  Third: "#f59e0b",
  Bottom: "#ef4444",
};

export const TIER_COLORS: Record<string, string> = {
  "Generational (5x+)": "#059669",
  "Strong (3-5x)": "#2563eb",
  "Institutional (2-3x)": "#0891b2",
  "Capital Preservation (1-2x)": "#f59e0b",
  "Value Destruction (<1x)": "#ef4444",
  Unknown: "#94a3b8",
};

export function firmColor(firm: string): string {
  return FIRM_COLORS[firm] ?? "#64748b";
}
