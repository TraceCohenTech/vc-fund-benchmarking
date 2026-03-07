import type { BenchmarkData } from "../types";

// Cambridge Associates US Venture Capital benchmark data
// Sources: CA quarterly benchmark PDFs, Carta fund performance reports
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
  { vintage: 2017, topQuartileTVPI: 2.5, medianTVPI: 1.6, bottomQuartileTVPI: 1.0, topQuartileIRR: 0.20, medianIRR: 0.11, bottomQuartileIRR: 0.00, topQuartileDPI: 0.6, medianDPI: 0.2, bottomQuartileDPI: 0.05 },
  { vintage: 2018, topQuartileTVPI: 2.3, medianTVPI: 1.5, bottomQuartileTVPI: 0.9, topQuartileIRR: 0.20, medianIRR: 0.10, bottomQuartileIRR: -0.02, topQuartileDPI: 0.4, medianDPI: 0.1, bottomQuartileDPI: 0.0 },
  { vintage: 2019, topQuartileTVPI: 2.1, medianTVPI: 1.4, bottomQuartileTVPI: 0.9, topQuartileIRR: 0.22, medianIRR: 0.10, bottomQuartileIRR: -0.05, topQuartileDPI: 0.3, medianDPI: 0.05, bottomQuartileDPI: 0.0 },
  { vintage: 2020, topQuartileTVPI: 1.8, medianTVPI: 1.3, bottomQuartileTVPI: 0.8, topQuartileIRR: 0.18, medianIRR: 0.08, bottomQuartileIRR: -0.08, topQuartileDPI: 0.2, medianDPI: 0.0, bottomQuartileDPI: 0.0 },
  { vintage: 2021, topQuartileTVPI: 1.5, medianTVPI: 1.1, bottomQuartileTVPI: 0.7, topQuartileIRR: 0.15, medianIRR: 0.03, bottomQuartileIRR: -0.15, topQuartileDPI: 0.1, medianDPI: 0.0, bottomQuartileDPI: 0.0 },
  { vintage: 2022, topQuartileTVPI: 1.4, medianTVPI: 1.1, bottomQuartileTVPI: 0.8, topQuartileIRR: 0.14, medianIRR: 0.04, bottomQuartileIRR: -0.10, topQuartileDPI: 0.05, medianDPI: 0.0, bottomQuartileDPI: 0.0 },
  { vintage: 2023, topQuartileTVPI: 1.2, medianTVPI: 1.0, bottomQuartileTVPI: 0.8, topQuartileIRR: 0.10, medianIRR: 0.02, bottomQuartileIRR: -0.08, topQuartileDPI: 0.0, medianDPI: 0.0, bottomQuartileDPI: 0.0 },
  { vintage: 2024, topQuartileTVPI: 1.1, medianTVPI: 0.9, bottomQuartileTVPI: 0.7, topQuartileIRR: 0.05, medianIRR: -0.05, bottomQuartileIRR: -0.15, topQuartileDPI: 0.0, medianDPI: 0.0, bottomQuartileDPI: 0.0 },
];
