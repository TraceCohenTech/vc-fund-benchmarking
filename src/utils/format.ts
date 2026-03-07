export function fmtX(n: number | null | undefined): string {
  if (n == null) return "\u2014";
  return `${n.toFixed(1)}x`;
}

export function fmtPct(n: number | null | undefined): string {
  if (n == null) return "\u2014";
  return `${(n * 100).toFixed(0)}%`;
}

export function fmtUSDm(n: number | null | undefined): string {
  if (n == null) return "\u2014";
  if (Math.abs(n) >= 1000) return `$${(n / 1000).toFixed(1)}B`;
  return `$${Math.round(n).toLocaleString()}M`;
}

export function fmtInt(n: number | null | undefined): string {
  if (n == null) return "\u2014";
  return Math.round(n).toLocaleString();
}
