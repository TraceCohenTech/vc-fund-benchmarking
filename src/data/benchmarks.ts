import type { BenchmarkData } from "../types";

// US Venture Capital benchmark data
// Sources: Cambridge Associates (2004-2016), AngelList Fund Benchmarks Report 2025 (2017-2024, data as of Jan 1 2026)
// Quartile cutoffs by vintage year for Net TVPI, Net IRR, DPI
export const BENCHMARKS: BenchmarkData[] = [
  { vintage: 2004, topQuartileTVPI: 3.2, medianTVPI: 1.8, bottomQuartileTVPI: 0.9, topQuartileIRR: 0.25, medianIRR: 0.12, bottomQuartileIRR: -0.02, topQuartileDPI: 2.8, medianDPI: 1.5, bottomQuartileDPI: 0.6 },
  { vintage: 2005, topQuartileTVPI: 3.0, medianTVPI: 1.7, bottomQuartileTVPI: 0.8, topQuartileIRR: 0.22, medianIRR: 0.10, bottomQuartileIRR: -0.04, topQuartileDPI: 2.6, medianDPI: 1.4, bottomQuartileDPI: 0.5 },
  { vintage: 2006, topQuartileTVPI: 3.5, medianTVPI: 1.9, bottomQuartileTVPI: 1.0, topQuartileIRR: 0.24, medianIRR: 0.11, bottomQuartileIRR: -0.01, topQuartileDPI: 2.9, medianDPI: 1.5, bottomQuartileDPI: 0.7 },
  { vintage: 2007, topQuartileTVPI: 3.8, medianTVPI: 2.0, bottomQuartileTVPI: 1.0, topQuartileIRR: 0.22, medianIRR: 0.10, bottomQuartileIRR: -0.03, topQuartileDPI: 3.2, medianDPI: 1.6, bottomQuartileDPI: 0.6 },
  { vintage: 2008, topQuartileTVPI: 4.2, medianTVPI: 2.3, bottomQuartileTVPI: 1.1, topQuartileIRR: 0.28, medianIRR: 0.14, bottomQuartileIRR: 0.01, topQuartileDPI: 3.5, medianDPI: 1.8, bottomQuartileDPI: 0.8 },
  { vintage: 2009, topQuartileTVPI: 4.5, medianTVPI: 2.5, bottomQuartileTVPI: 1.2, topQuartileIRR: 0.30, medianIRR: 0.16, bottomQuartileIRR: 0.03, topQuartileDPI: 3.5, medianDPI: 2.0, bottomQuartileDPI: 0.9 },
  { vintage: 2010, topQuartileTVPI: 4.0, medianTVPI: 2.3, bottomQuartileTVPI: 1.3, topQuartileIRR: 0.28, medianIRR: 0.15, bottomQuartileIRR: 0.04, topQuartileDPI: 3.0, medianDPI: 1.7, bottomQuartileDPI: 0.8 },
  { vintage: 2011, topQuartileTVPI: 3.8, medianTVPI: 2.2, bottomQuartileTVPI: 1.2, topQuartileIRR: 0.26, medianIRR: 0.14, bottomQuartileIRR: 0.03, topQuartileDPI: 2.5, medianDPI: 1.4, bottomQuartileDPI: 0.6 },
  { vintage: 2012, topQuartileTVPI: 3.5, medianTVPI: 2.1, bottomQuartileTVPI: 1.2, topQuartileIRR: 0.25, medianIRR: 0.14, bottomQuartileIRR: 0.03, topQuartileDPI: 2.2, medianDPI: 1.2, bottomQuartileDPI: 0.5 },
  { vintage: 2013, topQuartileTVPI: 3.2, medianTVPI: 2.0, bottomQuartileTVPI: 1.1, topQuartileIRR: 0.24, medianIRR: 0.13, bottomQuartileIRR: 0.02, topQuartileDPI: 1.8, medianDPI: 0.9, bottomQuartileDPI: 0.3 },
  { vintage: 2014, topQuartileTVPI: 3.0, medianTVPI: 1.9, bottomQuartileTVPI: 1.1, topQuartileIRR: 0.22, medianIRR: 0.12, bottomQuartileIRR: 0.01, topQuartileDPI: 1.5, medianDPI: 0.7, bottomQuartileDPI: 0.2 },
  { vintage: 2015, topQuartileTVPI: 2.8, medianTVPI: 1.8, bottomQuartileTVPI: 1.0, topQuartileIRR: 0.22, medianIRR: 0.13, bottomQuartileIRR: 0.02, topQuartileDPI: 1.2, medianDPI: 0.5, bottomQuartileDPI: 0.1 },
  { vintage: 2016, topQuartileTVPI: 2.7, medianTVPI: 1.7, bottomQuartileTVPI: 1.0, topQuartileIRR: 0.21, medianIRR: 0.12, bottomQuartileIRR: 0.01, topQuartileDPI: 0.9, medianDPI: 0.4, bottomQuartileDPI: 0.1 },
  // AngelList Fund Benchmarks Report 2025 — emerging managers, <$250M funds, data as of Jan 1 2026
  { vintage: 2017, topQuartileTVPI: 6.37, medianTVPI: 3.30, bottomQuartileTVPI: 2.22, topQuartileIRR: 0.260, medianIRR: 0.167, bottomQuartileIRR: 0.109, topQuartileDPI: 0.72, medianDPI: 0.31, bottomQuartileDPI: 0.07 },
  { vintage: 2018, topQuartileTVPI: 3.79, medianTVPI: 2.76, bottomQuartileTVPI: 1.60, topQuartileIRR: 0.209, medianIRR: 0.156, bottomQuartileIRR: 0.074, topQuartileDPI: 0.67, medianDPI: 0.38, bottomQuartileDPI: 0.06 },
  { vintage: 2019, topQuartileTVPI: 4.02, medianTVPI: 2.48, bottomQuartileTVPI: 1.53, topQuartileIRR: 0.267, medianIRR: 0.156, bottomQuartileIRR: 0.076, topQuartileDPI: 0.30, medianDPI: 0.09, bottomQuartileDPI: 0.01 },
  { vintage: 2020, topQuartileTVPI: 2.47, medianTVPI: 1.59, bottomQuartileTVPI: 1.23, topQuartileIRR: 0.195, medianIRR: 0.107, bottomQuartileIRR: 0.042, topQuartileDPI: 0.19, medianDPI: 0.06, bottomQuartileDPI: 0.00 },
  { vintage: 2021, topQuartileTVPI: 1.31, medianTVPI: 1.09, bottomQuartileTVPI: 0.96, topQuartileIRR: 0.072, medianIRR: 0.022, bottomQuartileIRR: -0.011, topQuartileDPI: 0.05, medianDPI: 0.01, bottomQuartileDPI: 0.00 },
  { vintage: 2022, topQuartileTVPI: 1.34, medianTVPI: 1.07, bottomQuartileTVPI: 0.93, topQuartileIRR: 0.116, medianIRR: 0.027, bottomQuartileIRR: -0.026, topQuartileDPI: 0.06, medianDPI: 0.00, bottomQuartileDPI: 0.00 },
  { vintage: 2023, topQuartileTVPI: 1.34, medianTVPI: 1.06, bottomQuartileTVPI: 0.92, topQuartileIRR: 0.161, medianIRR: 0.036, bottomQuartileIRR: -0.050, topQuartileDPI: 0.00, medianDPI: 0.00, bottomQuartileDPI: 0.00 },
  { vintage: 2024, topQuartileTVPI: 1.10, medianTVPI: 1.02, bottomQuartileTVPI: 0.93, topQuartileIRR: 0.125, medianIRR: 0.023, bottomQuartileIRR: -0.080, topQuartileDPI: 0.00, medianDPI: 0.00, bottomQuartileDPI: 0.00 },
];
