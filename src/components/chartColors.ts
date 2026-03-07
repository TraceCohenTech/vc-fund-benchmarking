export const FIRM_COLORS: Record<string, string> = {
  Thrive: "#2563eb",
  a16z: "#0f172a",
  "Founders Fund": "#f59e0b",
  Lightspeed: "#059669",
  Insight: "#0891b2",
  Khosla: "#d97706",
  "Tiger Global": "#e11d48",
  USV: "#6366f1",
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
