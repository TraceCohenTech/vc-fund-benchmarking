export const FIRM_COLORS: Record<string, string> = {
  Thrive: "#2563eb",
  a16z: "#0f172a",
  "Founders Fund": "#f59e0b",
  Lightspeed: "#059669",
  Insight: "#0891b2",
  Khosla: "#d97706",
  "Tiger Global": "#e11d48",
  USV: "#6366f1",
  TCV: "#7c3aed",
  "Francisco Partners": "#0d9488",
  Summit: "#ea580c",
  "TPG Growth": "#4f46e5",
  "General Atlantic": "#16a34a",
  BlueYard: "#0ea5e9",
  "IA Ventures": "#a855f7",
  "Foundry Group": "#dc2626",
  Sequoia: "#b91c1c",
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
