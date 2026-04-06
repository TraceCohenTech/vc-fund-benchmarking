import type { FundRow } from "../types";

export const FUNDS: FundRow[] = [
  // ═══════════════════════════════════════════════
  // THRIVE CAPITAL (12 funds) — Source: Newcomer
  // ═══════════════════════════════════════════════
  { firm: "Thrive", fundName: "Thrive II", vintage: 2011, fundSizeUSDm: 40, grossTVPI: null, netTVPI: 5.7, netDPI: 1.3, irrToLP: null, strategyType: "Early" },
  { firm: "Thrive", fundName: "Thrive III", vintage: 2012, fundSizeUSDm: 148, grossTVPI: null, netTVPI: 6.1, netDPI: 1.5, irrToLP: null, strategyType: "Early" },
  { firm: "Thrive", fundName: "Thrive IV", vintage: 2014, fundSizeUSDm: 404, grossTVPI: null, netTVPI: 5.4, netDPI: 2.3, irrToLP: null, strategyType: "Early" },
  { firm: "Thrive", fundName: "Thrive V", vintage: 2016, fundSizeUSDm: 714, grossTVPI: null, netTVPI: 3.5, netDPI: 2.4, irrToLP: null, strategyType: "Early" },
  { firm: "Thrive", fundName: "Thrive VI", vintage: 2018, fundSizeUSDm: 408, grossTVPI: null, netTVPI: 2.5, netDPI: null, irrToLP: null, strategyType: "Core" },
  { firm: "Thrive", fundName: "Thrive VI-G", vintage: 2018, fundSizeUSDm: 612, grossTVPI: null, netTVPI: 2.3, netDPI: 0.2, irrToLP: null, strategyType: "Growth" },
  { firm: "Thrive", fundName: "Thrive VII", vintage: 2021, fundSizeUSDm: 519, grossTVPI: null, netTVPI: 1.3, netDPI: null, irrToLP: null, strategyType: "Core" },
  { firm: "Thrive", fundName: "Thrive VII-G", vintage: 2021, fundSizeUSDm: 1560, grossTVPI: null, netTVPI: 1.2, netDPI: null, irrToLP: null, strategyType: "Growth" },
  { firm: "Thrive", fundName: "Thrive VIII", vintage: 2022, fundSizeUSDm: 516, grossTVPI: null, netTVPI: 2.2, netDPI: null, irrToLP: null, strategyType: "Core" },
  { firm: "Thrive", fundName: "Thrive VIII-G", vintage: 2022, fundSizeUSDm: 2900, grossTVPI: null, netTVPI: 1.8, netDPI: 0.2, irrToLP: null, strategyType: "Growth" },
  { firm: "Thrive", fundName: "Thrive IX", vintage: 2024, fundSizeUSDm: 1000, grossTVPI: null, netTVPI: 0.9, netDPI: null, irrToLP: null, strategyType: "Core" },
  { firm: "Thrive", fundName: "Thrive IX-G", vintage: 2024, fundSizeUSDm: 3600, grossTVPI: null, netTVPI: 2.8, netDPI: null, irrToLP: 0.345, strategyType: "Growth" },

  // ═══════════════════════════════════════════════
  // A16Z (6 funds) — Source: Newcomer, CalPERS
  // ═══════════════════════════════════════════════
  { firm: "a16z", fundName: "AH I", vintage: 2009, fundSizeUSDm: 300, grossTVPI: 9.3, netTVPI: 6.9, netDPI: 5.4, irrToLP: null, strategyType: "Early" },
  { firm: "a16z", fundName: "AH II", vintage: 2010, fundSizeUSDm: 656, grossTVPI: 4.9, netTVPI: 3.7, netDPI: 3.5, irrToLP: null, strategyType: "Early" },
  { firm: "a16z", fundName: "AH Annex", vintage: 2011, fundSizeUSDm: 204, grossTVPI: 7.2, netTVPI: 5.4, netDPI: 5.1, irrToLP: null, strategyType: "Early" },
  { firm: "a16z", fundName: "AH III", vintage: 2012, fundSizeUSDm: 997, grossTVPI: 15.7, netTVPI: 9.4, netDPI: 5.5, irrToLP: null, strategyType: "Early" },
  { firm: "a16z", fundName: "AH IV", vintage: 2014, fundSizeUSDm: 1173, grossTVPI: 5.5, netTVPI: 4.1, netDPI: 3.0, irrToLP: null, strategyType: "Core" },
  { firm: "a16z", fundName: "AH V", vintage: 2017, fundSizeUSDm: 1189, grossTVPI: 4.0, netTVPI: 3.1, netDPI: 0.3, irrToLP: null, strategyType: "Core" },

  // ═══════════════════════════════════════════════
  // FOUNDERS FUND (10 funds) — Source: Arfur Rock
  // ═══════════════════════════════════════════════
  { firm: "Founders Fund", fundName: "FFI", vintage: 2005, fundSizeUSDm: 50, grossTVPI: null, netTVPI: 7.8, netDPI: 7.7, irrToLP: 0.36, strategyType: "Early" },
  { firm: "Founders Fund", fundName: "FFII", vintage: 2007, fundSizeUSDm: 227, grossTVPI: null, netTVPI: 18.7, netDPI: 18.6, irrToLP: 0.31, strategyType: "Early" },
  { firm: "Founders Fund", fundName: "FFIII", vintage: 2010, fundSizeUSDm: 250, grossTVPI: null, netTVPI: 9.9, netDPI: 6.0, irrToLP: 0.25, strategyType: "Early" },
  { firm: "Founders Fund", fundName: "FFIV", vintage: 2011, fundSizeUSDm: 625, grossTVPI: null, netTVPI: 10.2, netDPI: 6.2, irrToLP: 0.33, strategyType: "Early" },
  { firm: "Founders Fund", fundName: "FFV", vintage: 2014, fundSizeUSDm: 1100, grossTVPI: null, netTVPI: 4.0, netDPI: 2.9, irrToLP: 0.27, strategyType: "Core" },
  { firm: "Founders Fund", fundName: "FFVI", vintage: 2017, fundSizeUSDm: 1400, grossTVPI: null, netTVPI: 3.1, netDPI: 0.03, irrToLP: 0.24, strategyType: "Core" },
  { firm: "Founders Fund", fundName: "FFVII", vintage: 2020, fundSizeUSDm: 1500, grossTVPI: null, netTVPI: 1.5, netDPI: null, irrToLP: 0.13, strategyType: "Core" },
  { firm: "Founders Fund", fundName: "FFVIII", vintage: 2023, fundSizeUSDm: 979, grossTVPI: null, netTVPI: 1.3, netDPI: null, irrToLP: 0.47, strategyType: "Core" },
  { firm: "Founders Fund", fundName: "FF Growth I", vintage: 2020, fundSizeUSDm: 1700, grossTVPI: null, netTVPI: 1.2, netDPI: null, irrToLP: 0.07, strategyType: "Growth" },
  { firm: "Founders Fund", fundName: "FF Growth II", vintage: 2023, fundSizeUSDm: 3400, grossTVPI: null, netTVPI: 1.0, netDPI: null, irrToLP: 0.07, strategyType: "Growth" },

  // ═══════════════════════════════════════════════
  // LIGHTSPEED (13 funds) — Source: Firm disclosure, CalPERS
  // ═══════════════════════════════════════════════
  { firm: "Lightspeed", fundName: "Select I", vintage: 2014, fundSizeUSDm: 432, grossTVPI: null, netTVPI: 2.4, netDPI: 1.8, irrToLP: null, strategyType: "Growth" },
  { firm: "Lightspeed", fundName: "Select II", vintage: 2016, fundSizeUSDm: 500, grossTVPI: null, netTVPI: 2.1, netDPI: 0.7, irrToLP: null, strategyType: "Growth" },
  { firm: "Lightspeed", fundName: "Select III", vintage: 2018, fundSizeUSDm: 1400, grossTVPI: null, netTVPI: 1.6, netDPI: null, irrToLP: null, strategyType: "Growth" },
  { firm: "Lightspeed", fundName: "VII", vintage: 2006, fundSizeUSDm: 480, grossTVPI: null, netTVPI: 3.1, netDPI: 2.8, irrToLP: null, strategyType: "Early" },
  { firm: "Lightspeed", fundName: "VIII", vintage: 2008, fundSizeUSDm: 808, grossTVPI: null, netTVPI: 2.9, netDPI: 2.5, irrToLP: null, strategyType: "Early" },
  { firm: "Lightspeed", fundName: "IX", vintage: 2012, fundSizeUSDm: 685, grossTVPI: null, netTVPI: 5.7, netDPI: 3.7, irrToLP: null, strategyType: "Early" },
  { firm: "Lightspeed", fundName: "X", vintage: 2014, fundSizeUSDm: 635, grossTVPI: null, netTVPI: 3.2, netDPI: 0.8, irrToLP: null, strategyType: "Early" },
  { firm: "Lightspeed", fundName: "XI", vintage: 2016, fundSizeUSDm: 715, grossTVPI: null, netTVPI: 2.4, netDPI: 0.5, irrToLP: null, strategyType: "Early" },
  { firm: "Lightspeed", fundName: "XII", vintage: 2018, fundSizeUSDm: 752, grossTVPI: null, netTVPI: 1.9, netDPI: null, irrToLP: null, strategyType: "Early" },
  { firm: "Lightspeed", fundName: "XIII", vintage: 2020, fundSizeUSDm: null, grossTVPI: null, netTVPI: null, netDPI: 0.09, irrToLP: null, strategyType: "Early" },
  { firm: "Lightspeed", fundName: "Opportunity Fund II", vintage: 2022, fundSizeUSDm: 200, grossTVPI: null, netTVPI: 1.4, netDPI: null, irrToLP: 0.201, strategyType: "Growth" },
  { firm: "Lightspeed", fundName: "Select V", vintage: 2022, fundSizeUSDm: 100, grossTVPI: null, netTVPI: 1.2, netDPI: null, irrToLP: 0.108, strategyType: "Growth" },
  { firm: "Lightspeed", fundName: "XIV-A (Inception)", vintage: 2022, fundSizeUSDm: 45, grossTVPI: null, netTVPI: 1.4, netDPI: null, irrToLP: 0.169, strategyType: "Early" },

  // ═══════════════════════════════════════════════
  // INSIGHT PARTNERS (6 funds) — Source: CalPERS, WSIB
  // ═══════════════════════════════════════════════
  { firm: "Insight", fundName: "Growth-Buyout Coinvest (B)", vintage: 2015, fundSizeUSDm: 400, grossTVPI: null, netTVPI: 3.5, netDPI: null, irrToLP: 0.258, strategyType: "Growth" },
  { firm: "Insight", fundName: "Partners IX", vintage: 2015, fundSizeUSDm: 100, grossTVPI: null, netTVPI: 3.9, netDPI: null, irrToLP: 0.231, strategyType: "Core" },
  { firm: "Insight", fundName: "Partners X", vintage: 2018, fundSizeUSDm: 250, grossTVPI: null, netTVPI: 2.8, netDPI: null, irrToLP: 0.224, strategyType: "Core" },
  { firm: "Insight", fundName: "Partners XI", vintage: 2020, fundSizeUSDm: 400, grossTVPI: null, netTVPI: 1.7, netDPI: null, irrToLP: 0.129, strategyType: "Growth" },
  { firm: "Insight", fundName: "Partners XII", vintage: 2021, fundSizeUSDm: 600, grossTVPI: null, netTVPI: 1.0, netDPI: null, irrToLP: 0.015, strategyType: "Growth" },
  { firm: "Insight", fundName: "XII Buyout Annex", vintage: 2021, fundSizeUSDm: 150, grossTVPI: null, netTVPI: 1.3, netDPI: null, irrToLP: 0.088, strategyType: "Growth" },

  // ═══════════════════════════════════════════════
  // KHOSLA VENTURES (2 funds) — Source: CalPERS
  // ═══════════════════════════════════════════════
  { firm: "Khosla", fundName: "Khosla Ventures III", vintage: 2009, fundSizeUSDm: 200, grossTVPI: null, netTVPI: 1.85, netDPI: null, irrToLP: 0.097, strategyType: "Early" },
  { firm: "Khosla", fundName: "Khosla Ventures Seed", vintage: 2009, fundSizeUSDm: 60, grossTVPI: null, netTVPI: 1.18, netDPI: null, irrToLP: 0.014, strategyType: "Early" },

  // ═══════════════════════════════════════════════
  // TIGER GLOBAL (3 funds) — Source: CalPERS, NJ Pension
  // ═══════════════════════════════════════════════
  { firm: "Tiger Global", fundName: "Tiger Global PIP XV", vintage: 2022, fundSizeUSDm: 300, grossTVPI: null, netTVPI: 0.8, netDPI: null, irrToLP: -0.078, strategyType: "Growth" },
  { firm: "Tiger Global", fundName: "PIP XI", vintage: 2018, fundSizeUSDm: 3750, grossTVPI: null, netTVPI: 1.9, netDPI: 0.4, irrToLP: 0.18, strategyType: "Growth" },
  { firm: "Tiger Global", fundName: "PIP XIV", vintage: 2021, fundSizeUSDm: 6700, grossTVPI: null, netTVPI: 0.6, netDPI: null, irrToLP: -0.22, strategyType: "Growth" },

  // ═══════════════════════════════════════════════
  // USV (8 funds) — Source: The Information, UTIMCO, OPERF
  // ═══════════════════════════════════════════════
  { firm: "USV", fundName: "USV 2004", vintage: 2004, fundSizeUSDm: 125, grossTVPI: null, netTVPI: 13.8, netDPI: null, irrToLP: 0.67, strategyType: "Early" },
  { firm: "USV", fundName: "USV 2008", vintage: 2008, fundSizeUSDm: 156, grossTVPI: null, netTVPI: 7.2, netDPI: 6.8, irrToLP: 0.22, strategyType: "Early" },
  { firm: "USV", fundName: "USV Opportunity 2010", vintage: 2010, fundSizeUSDm: 165, grossTVPI: null, netTVPI: 8.5, netDPI: 7.9, irrToLP: 0.60, strategyType: "Growth" },
  { firm: "USV", fundName: "USV 2012", vintage: 2012, fundSizeUSDm: 200, grossTVPI: null, netTVPI: 23.8, netDPI: 22.5, irrToLP: 0.536, strategyType: "Early" },
  { firm: "USV", fundName: "USV 2014", vintage: 2014, fundSizeUSDm: 166, grossTVPI: null, netTVPI: 4.8, netDPI: 3.2, irrToLP: 0.17, strategyType: "Early" },
  { firm: "USV", fundName: "USV Opportunity 2014", vintage: 2014, fundSizeUSDm: 174, grossTVPI: null, netTVPI: 3.5, netDPI: 2.1, irrToLP: 0.21, strategyType: "Growth" },
  { firm: "USV", fundName: "USV 2016", vintage: 2016, fundSizeUSDm: 175, grossTVPI: null, netTVPI: 5.3, netDPI: 2.8, irrToLP: 0.40, strategyType: "Early" },
  { firm: "USV", fundName: "USV 2019", vintage: 2019, fundSizeUSDm: 250, grossTVPI: null, netTVPI: 3.2, netDPI: 0.4, irrToLP: 0.571, strategyType: "Early" },

  // ═══════════════════════════════════════════════
  // TCV (4 funds) — Source: CalPERS, OPERF
  // ═══════════════════════════════════════════════
  { firm: "TCV", fundName: "TCV VIII", vintage: 2014, fundSizeUSDm: 2500, grossTVPI: null, netTVPI: 3.1, netDPI: 2.4, irrToLP: 0.28, strategyType: "Growth" },
  { firm: "TCV", fundName: "TCV IX", vintage: 2016, fundSizeUSDm: 3000, grossTVPI: null, netTVPI: 2.4, netDPI: 1.1, irrToLP: 0.22, strategyType: "Growth" },
  { firm: "TCV", fundName: "TCV X", vintage: 2019, fundSizeUSDm: 4000, grossTVPI: null, netTVPI: 1.8, netDPI: 0.3, irrToLP: 0.222, strategyType: "Growth" },
  { firm: "TCV", fundName: "TCV XI", vintage: 2021, fundSizeUSDm: 4600, grossTVPI: null, netTVPI: 1.1, netDPI: null, irrToLP: 0.043, strategyType: "Growth" },

  // ═══════════════════════════════════════════════
  // FRANCISCO PARTNERS (3 funds) — Source: CalPERS
  // ═══════════════════════════════════════════════
  { firm: "Francisco Partners", fundName: "FP II", vintage: 2006, fundSizeUSDm: 175, grossTVPI: null, netTVPI: 1.7, netDPI: null, irrToLP: 0.104, strategyType: "Growth" },
  { firm: "Francisco Partners", fundName: "FP III", vintage: 2011, fundSizeUSDm: 100, grossTVPI: null, netTVPI: 3.4, netDPI: null, irrToLP: 0.230, strategyType: "Growth" },
  { firm: "Francisco Partners", fundName: "FP VI", vintage: 2021, fundSizeUSDm: 250, grossTVPI: null, netTVPI: null, netDPI: null, irrToLP: 0.141, strategyType: "Growth" },

  // ═══════════════════════════════════════════════
  // SUMMIT PARTNERS (2 funds) — Source: CalPERS
  // ═══════════════════════════════════════════════
  { firm: "Summit", fundName: "Growth Equity X-A", vintage: 2020, fundSizeUSDm: 250, grossTVPI: null, netTVPI: null, netDPI: null, irrToLP: 0.128, strategyType: "Growth" },
  { firm: "Summit", fundName: "Growth Equity XI-A", vintage: 2022, fundSizeUSDm: 400, grossTVPI: null, netTVPI: null, netDPI: null, irrToLP: 0.020, strategyType: "Growth" },

  // ═══════════════════════════════════════════════
  // TPG GROWTH (4 funds) — Source: CalPERS, OPERF
  // ═══════════════════════════════════════════════
  { firm: "TPG Growth", fundName: "TPG Growth II", vintage: 2012, fundSizeUSDm: 2500, grossTVPI: null, netTVPI: 2.1, netDPI: 1.8, irrToLP: 0.15, strategyType: "Growth" },
  { firm: "TPG Growth", fundName: "TPG Growth III", vintage: 2015, fundSizeUSDm: 3200, grossTVPI: null, netTVPI: 2.5, netDPI: 1.3, irrToLP: 0.19, strategyType: "Growth" },
  { firm: "TPG Growth", fundName: "TPG Growth IV", vintage: 2018, fundSizeUSDm: 3500, grossTVPI: null, netTVPI: 1.7, netDPI: 0.5, irrToLP: 0.143, strategyType: "Growth" },
  { firm: "TPG Growth", fundName: "TPG Growth V", vintage: 2021, fundSizeUSDm: 4500, grossTVPI: null, netTVPI: 1.1, netDPI: null, irrToLP: 0.140, strategyType: "Growth" },

  // ═══════════════════════════════════════════════
  // GENERAL ATLANTIC (3 funds) — Source: CalPERS, NJ Pension
  // ═══════════════════════════════════════════════
  { firm: "General Atlantic", fundName: "Managed Account", vintage: 2020, fundSizeUSDm: 1050, grossTVPI: null, netTVPI: 1.3, netDPI: null, irrToLP: 0.081, strategyType: "Growth" },
  { firm: "General Atlantic", fundName: "GA Fund", vintage: 2017, fundSizeUSDm: null, grossTVPI: null, netTVPI: 2.1, netDPI: 0.9, irrToLP: 0.16, strategyType: "Growth" },
  { firm: "General Atlantic", fundName: "GA Fund II", vintage: 2021, fundSizeUSDm: null, grossTVPI: null, netTVPI: 1.0, netDPI: null, irrToLP: 0.02, strategyType: "Growth" },

  // ═══════════════════════════════════════════════
  // BLUEYARD CAPITAL (1 fund) — Source: UTIMCO, Newcomer
  // ═══════════════════════════════════════════════
  { firm: "BlueYard", fundName: "BlueYard Fund I", vintage: 2016, fundSizeUSDm: 130, grossTVPI: null, netTVPI: null, netDPI: 3.4, irrToLP: 0.49, strategyType: "Early" },

  // ═══════════════════════════════════════════════
  // IA VENTURES (1 fund aggregate) — Source: UTIMCO
  // ═══════════════════════════════════════════════
  { firm: "IA Ventures", fundName: "IA Ventures (agg)", vintage: 2012, fundSizeUSDm: null, grossTVPI: null, netTVPI: null, netDPI: null, irrToLP: 0.43, strategyType: "Early" },

  // ═══════════════════════════════════════════════
  // FOUNDRY GROUP (1 fund) — Source: UTIMCO
  // ═══════════════════════════════════════════════
  { firm: "Foundry Group", fundName: "Foundry 2007", vintage: 2007, fundSizeUSDm: null, grossTVPI: null, netTVPI: null, netDPI: null, irrToLP: 0.77, strategyType: "Early" },

  // ═══════════════════════════════════════════════
  // SEQUOIA (8 funds) — Source: PitchBook, OPERF, CalPERS
  // ═══════════════════════════════════════════════
  { firm: "Sequoia", fundName: "US Growth Fund VII", vintage: 2012, fundSizeUSDm: 500, grossTVPI: null, netTVPI: 4.8, netDPI: 4.2, irrToLP: 0.35, strategyType: "Growth" },
  { firm: "Sequoia", fundName: "US Venture XIV", vintage: 2014, fundSizeUSDm: 375, grossTVPI: null, netTVPI: 5.6, netDPI: 3.8, irrToLP: 0.42, strategyType: "Early" },
  { firm: "Sequoia", fundName: "US Growth Fund VIII", vintage: 2016, fundSizeUSDm: 800, grossTVPI: null, netTVPI: 3.2, netDPI: 1.5, irrToLP: 0.28, strategyType: "Growth" },
  { firm: "Sequoia", fundName: "US Venture XV", vintage: 2016, fundSizeUSDm: 300, grossTVPI: null, netTVPI: 4.1, netDPI: 2.2, irrToLP: 0.38, strategyType: "Early" },
  { firm: "Sequoia", fundName: "US Venture XVI", vintage: 2018, fundSizeUSDm: 450, grossTVPI: null, netTVPI: 2.8, netDPI: 0.6, irrToLP: 0.30, strategyType: "Early" },
  { firm: "Sequoia", fundName: "US Venture XVII", vintage: 2020, fundSizeUSDm: 800, grossTVPI: null, netTVPI: 1.34, netDPI: null, irrToLP: null, strategyType: "Core" },
  { firm: "Sequoia", fundName: "US Growth Fund IX", vintage: 2020, fundSizeUSDm: 1350, grossTVPI: null, netTVPI: 1.5, netDPI: 0.2, irrToLP: 0.12, strategyType: "Growth" },
  { firm: "Sequoia", fundName: "US Growth Fund X", vintage: 2022, fundSizeUSDm: 2250, grossTVPI: null, netTVPI: 1.2, netDPI: null, irrToLP: null, strategyType: "Growth" },

  // ═══════════════════════════════════════════════
  // GGV CAPITAL (6 funds) — Source: UTIMCO, OPERF
  // ═══════════════════════════════════════════════
  { firm: "GGV Capital", fundName: "GGV V", vintage: 2011, fundSizeUSDm: 625, grossTVPI: null, netTVPI: 3.8, netDPI: 3.2, irrToLP: 0.28, strategyType: "Growth" },
  { firm: "GGV Capital", fundName: "GGV VI", vintage: 2014, fundSizeUSDm: 620, grossTVPI: null, netTVPI: 2.9, netDPI: 1.8, irrToLP: 0.22, strategyType: "Growth" },
  { firm: "GGV Capital", fundName: "GGV VII", vintage: 2016, fundSizeUSDm: 1000, grossTVPI: null, netTVPI: 2.3, netDPI: 0.9, irrToLP: 0.18, strategyType: "Growth" },
  { firm: "GGV Capital", fundName: "GGV Discovery I", vintage: 2018, fundSizeUSDm: 460, grossTVPI: null, netTVPI: 1.7, netDPI: 0.3, irrToLP: 0.14, strategyType: "Early" },
  { firm: "GGV Capital", fundName: "GGV VIII", vintage: 2020, fundSizeUSDm: 1520, grossTVPI: null, netTVPI: 1.3, netDPI: null, irrToLP: 0.08, strategyType: "Growth" },
  { firm: "GGV Capital", fundName: "GGV Discovery II", vintage: 2021, fundSizeUSDm: 550, grossTVPI: null, netTVPI: 0.9, netDPI: null, irrToLP: -0.05, strategyType: "Early" },

  // ═══════════════════════════════════════════════
  // HONGSHAN / SEQUOIA CHINA (2 funds) — Source: CalPERS
  // ═══════════════════════════════════════════════
  { firm: "HongShan", fundName: "Seed Fund III", vintage: 2022, fundSizeUSDm: 12, grossTVPI: null, netTVPI: null, netDPI: null, irrToLP: -0.096, strategyType: "Early" },
  { firm: "HongShan", fundName: "Venture Fund IX", vintage: 2022, fundSizeUSDm: 32, grossTVPI: null, netTVPI: null, netDPI: null, irrToLP: -0.085, strategyType: "Early" },

  // ═══════════════════════════════════════════════
  // BOND (1 fund) — Source: CalPERS
  // ═══════════════════════════════════════════════
  { firm: "BOND", fundName: "BOND III", vintage: 2022, fundSizeUSDm: 75, grossTVPI: null, netTVPI: null, netDPI: null, irrToLP: -0.030, strategyType: "Growth" },

  // ═══════════════════════════════════════════════
  // BASE10 (1 fund) — Source: CalPERS
  // ═══════════════════════════════════════════════
  { firm: "Base10", fundName: "Partners III", vintage: 2022, fundSizeUSDm: 50, grossTVPI: null, netTVPI: null, netDPI: null, irrToLP: 0.004, strategyType: "Early" },

  // ═══════════════════════════════════════════════
  // OAK HC/FT (1 fund) — Source: CalPERS
  // ═══════════════════════════════════════════════
  { firm: "Oak HC/FT", fundName: "Partners V", vintage: 2022, fundSizeUSDm: 200, grossTVPI: null, netTVPI: null, netDPI: null, irrToLP: 0.164, strategyType: "Core" },

  // ═══════════════════════════════════════════════
  // PSG (2 funds) — Source: CalPERS
  // ═══════════════════════════════════════════════
  { firm: "PSG", fundName: "PSG V", vintage: 2021, fundSizeUSDm: 100, grossTVPI: null, netTVPI: null, netDPI: null, irrToLP: 0.104, strategyType: "Growth" },
  { firm: "PSG", fundName: "PSG Encore", vintage: 2022, fundSizeUSDm: 100, grossTVPI: null, netTVPI: null, netDPI: null, irrToLP: 0.081, strategyType: "Growth" },

  // ═══════════════════════════════════════════════
  // TA ASSOCIATES (2 funds) — Source: CalPERS
  // ═══════════════════════════════════════════════
  { firm: "TA Associates", fundName: "TA XIV-A", vintage: 2021, fundSizeUSDm: 150, grossTVPI: null, netTVPI: null, netDPI: null, irrToLP: 0.079, strategyType: "Growth" },
  { firm: "TA Associates", fundName: "TA Select Opp II-A", vintage: 2021, fundSizeUSDm: 50, grossTVPI: null, netTVPI: null, netDPI: null, irrToLP: 0.025, strategyType: "Growth" },

  // ═══════════════════════════════════════════════
  // PERMIRA (1 fund) — Source: CalPERS
  // ═══════════════════════════════════════════════
  { firm: "Permira", fundName: "Growth Opp II", vintage: 2022, fundSizeUSDm: 155, grossTVPI: null, netTVPI: null, netDPI: null, irrToLP: 0.015, strategyType: "Growth" },

  // ═══════════════════════════════════════════════
  // ARSENAL CAPITAL (1 fund) — Source: CalPERS
  // ═══════════════════════════════════════════════
  { firm: "Arsenal Capital", fundName: "Growth Fund", vintage: 2022, fundSizeUSDm: 50, grossTVPI: null, netTVPI: null, netDPI: null, irrToLP: -0.219, strategyType: "Growth" },

  // ═══════════════════════════════════════════════
  // ADVENT (1 fund) — Source: CalPERS
  // ═══════════════════════════════════════════════
  { firm: "Advent", fundName: "Global Technology II", vintage: 2022, fundSizeUSDm: 150, grossTVPI: null, netTVPI: null, netDPI: null, irrToLP: 0.150, strategyType: "Growth" },

  // ═══════════════════════════════════════════════
  // BRV LOTUS (1 fund) — Source: CalPERS
  // ═══════════════════════════════════════════════
  { firm: "BRV Lotus", fundName: "Fund III", vintage: 2022, fundSizeUSDm: 100, grossTVPI: null, netTVPI: null, netDPI: null, irrToLP: 0.049, strategyType: "Early" },

  // ═══════════════════════════════════════════════
  // OREGON ANGEL FUND (3 funds) — Source: Oregon Growth Account
  // ═══════════════════════════════════════════════
  { firm: "Oregon Angel Fund", fundName: "OAF 2011", vintage: 2011, fundSizeUSDm: 1.5, grossTVPI: null, netTVPI: 2.85, netDPI: null, irrToLP: 0.278, strategyType: "Early" },
  { firm: "Oregon Angel Fund", fundName: "OAF 2016", vintage: 2016, fundSizeUSDm: 1.5, grossTVPI: null, netTVPI: 4.84, netDPI: null, irrToLP: 0.292, strategyType: "Early" },
  { firm: "Oregon Angel Fund", fundName: "OAF 2017", vintage: 2017, fundSizeUSDm: 1.5, grossTVPI: null, netTVPI: 0.96, netDPI: null, irrToLP: -0.008, strategyType: "Early" },

  // ═══════════════════════════════════════════════
  // BENCHMARK CAPITAL (8 funds) — Source: OPERF, NJ Pension, media
  // ═══════════════════════════════════════════════
  { firm: "Benchmark", fundName: "Benchmark V", vintage: 2004, fundSizeUSDm: 400, grossTVPI: null, netTVPI: 4.5, netDPI: 4.3, irrToLP: 0.32, strategyType: "Early" },
  { firm: "Benchmark", fundName: "Benchmark VI", vintage: 2006, fundSizeUSDm: 500, grossTVPI: null, netTVPI: 3.1, netDPI: 2.9, irrToLP: 0.20, strategyType: "Early" },
  { firm: "Benchmark", fundName: "Benchmark VII", vintage: 2008, fundSizeUSDm: 500, grossTVPI: null, netTVPI: 6.2, netDPI: 5.8, irrToLP: 0.38, strategyType: "Early" },
  { firm: "Benchmark", fundName: "Benchmark VIII", vintage: 2011, fundSizeUSDm: 425, grossTVPI: null, netTVPI: 11.2, netDPI: 9.5, irrToLP: 0.52, strategyType: "Early" },
  { firm: "Benchmark", fundName: "Benchmark IX", vintage: 2015, fundSizeUSDm: 425, grossTVPI: null, netTVPI: 3.8, netDPI: 2.1, irrToLP: 0.30, strategyType: "Early" },
  { firm: "Benchmark", fundName: "Benchmark X", vintage: 2018, fundSizeUSDm: 425, grossTVPI: null, netTVPI: 2.6, netDPI: 0.8, irrToLP: 0.25, strategyType: "Early" },
  { firm: "Benchmark", fundName: "Benchmark XI", vintage: 2020, fundSizeUSDm: 425, grossTVPI: null, netTVPI: 1.8, netDPI: 0.3, irrToLP: 0.18, strategyType: "Early" },
  { firm: "Benchmark", fundName: "Benchmark XII", vintage: 2022, fundSizeUSDm: 425, grossTVPI: null, netTVPI: 1.4, netDPI: null, irrToLP: null, strategyType: "Early" },

  // ═══════════════════════════════════════════════
  // ACCEL PARTNERS (10 funds) — Source: OPERF, WSIB, NJ Pension
  // ═══════════════════════════════════════════════
  { firm: "Accel", fundName: "Accel IX", vintage: 2003, fundSizeUSDm: 440, grossTVPI: null, netTVPI: 8.2, netDPI: 8.0, irrToLP: 0.48, strategyType: "Early" },
  { firm: "Accel", fundName: "Accel X", vintage: 2006, fundSizeUSDm: 520, grossTVPI: null, netTVPI: 5.4, netDPI: 5.1, irrToLP: 0.35, strategyType: "Early" },
  { firm: "Accel", fundName: "Accel XI", vintage: 2008, fundSizeUSDm: 475, grossTVPI: null, netTVPI: 4.1, netDPI: 3.7, irrToLP: 0.28, strategyType: "Early" },
  { firm: "Accel", fundName: "Accel XII", vintage: 2011, fundSizeUSDm: 475, grossTVPI: null, netTVPI: 6.8, netDPI: 5.5, irrToLP: 0.42, strategyType: "Early" },
  { firm: "Accel", fundName: "Accel Growth III", vintage: 2013, fundSizeUSDm: 1500, grossTVPI: null, netTVPI: 2.9, netDPI: 2.2, irrToLP: 0.22, strategyType: "Growth" },
  { firm: "Accel", fundName: "Accel XIII", vintage: 2014, fundSizeUSDm: 475, grossTVPI: null, netTVPI: 3.5, netDPI: 1.8, irrToLP: 0.25, strategyType: "Early" },
  { firm: "Accel", fundName: "Accel XIV", vintage: 2016, fundSizeUSDm: 500, grossTVPI: null, netTVPI: 3.2, netDPI: 1.5, irrToLP: 0.30, strategyType: "Early" },
  { firm: "Accel", fundName: "Accel Leaders I", vintage: 2018, fundSizeUSDm: 1200, grossTVPI: null, netTVPI: 2.1, netDPI: 0.5, irrToLP: 0.18, strategyType: "Growth" },
  { firm: "Accel", fundName: "Accel XV", vintage: 2019, fundSizeUSDm: 550, grossTVPI: null, netTVPI: 2.4, netDPI: 0.6, irrToLP: 0.28, strategyType: "Early" },
  { firm: "Accel", fundName: "Accel Leaders II", vintage: 2021, fundSizeUSDm: 3000, grossTVPI: null, netTVPI: 1.1, netDPI: null, irrToLP: 0.03, strategyType: "Growth" },

  // ═══════════════════════════════════════════════
  // NEA (8 funds) — Source: OPERF, CalSTRS, NJ Pension
  // ═══════════════════════════════════════════════
  { firm: "NEA", fundName: "NEA 13", vintage: 2006, fundSizeUSDm: 2500, grossTVPI: null, netTVPI: 2.0, netDPI: 1.9, irrToLP: 0.11, strategyType: "Core" },
  { firm: "NEA", fundName: "NEA 14", vintage: 2009, fundSizeUSDm: 2600, grossTVPI: null, netTVPI: 4.2, netDPI: 3.8, irrToLP: 0.28, strategyType: "Core" },
  { firm: "NEA", fundName: "NEA 15", vintage: 2012, fundSizeUSDm: 2600, grossTVPI: null, netTVPI: 3.5, netDPI: 2.6, irrToLP: 0.25, strategyType: "Core" },
  { firm: "NEA", fundName: "NEA 16", vintage: 2017, fundSizeUSDm: 3300, grossTVPI: null, netTVPI: 2.3, netDPI: 0.7, irrToLP: 0.20, strategyType: "Core" },
  { firm: "NEA", fundName: "NEA 17", vintage: 2019, fundSizeUSDm: 3600, grossTVPI: null, netTVPI: 1.8, netDPI: 0.3, irrToLP: 0.16, strategyType: "Core" },
  { firm: "NEA", fundName: "NEA 18", vintage: 2021, fundSizeUSDm: 3600, grossTVPI: null, netTVPI: 1.1, netDPI: null, irrToLP: 0.04, strategyType: "Core" },
  { firm: "NEA", fundName: "NEA Venture Growth", vintage: 2014, fundSizeUSDm: 420, grossTVPI: null, netTVPI: 2.8, netDPI: 1.4, irrToLP: 0.20, strategyType: "Growth" },
  { firm: "NEA", fundName: "NEA Seed II", vintage: 2020, fundSizeUSDm: 165, grossTVPI: null, netTVPI: 1.9, netDPI: 0.2, irrToLP: 0.22, strategyType: "Early" },

  // ═══════════════════════════════════════════════
  // GREYLOCK PARTNERS (7 funds) — Source: OPERF, CalSTRS
  // ═══════════════════════════════════════════════
  { firm: "Greylock", fundName: "Greylock XIII", vintage: 2006, fundSizeUSDm: 400, grossTVPI: null, netTVPI: 5.5, netDPI: 5.2, irrToLP: 0.32, strategyType: "Early" },
  { firm: "Greylock", fundName: "Greylock XIV", vintage: 2009, fundSizeUSDm: 400, grossTVPI: null, netTVPI: 7.8, netDPI: 7.1, irrToLP: 0.45, strategyType: "Early" },
  { firm: "Greylock", fundName: "Greylock XV", vintage: 2014, fundSizeUSDm: 400, grossTVPI: null, netTVPI: 4.2, netDPI: 2.5, irrToLP: 0.30, strategyType: "Early" },
  { firm: "Greylock", fundName: "Greylock XVI", vintage: 2018, fundSizeUSDm: 500, grossTVPI: null, netTVPI: 2.8, netDPI: 0.7, irrToLP: 0.25, strategyType: "Early" },
  { firm: "Greylock", fundName: "Greylock XVII", vintage: 2020, fundSizeUSDm: 500, grossTVPI: null, netTVPI: 1.6, netDPI: 0.2, irrToLP: 0.14, strategyType: "Early" },
  { firm: "Greylock", fundName: "Growth I", vintage: 2016, fundSizeUSDm: 1000, grossTVPI: null, netTVPI: 2.4, netDPI: 0.9, irrToLP: 0.19, strategyType: "Growth" },
  { firm: "Greylock", fundName: "Growth II", vintage: 2020, fundSizeUSDm: 1000, grossTVPI: null, netTVPI: 1.3, netDPI: null, irrToLP: 0.06, strategyType: "Growth" },

  // ═══════════════════════════════════════════════
  // INDEX VENTURES (6 funds) — Source: OPERF, CalSTRS
  // ═══════════════════════════════════════════════
  { firm: "Index Ventures", fundName: "Index VII", vintage: 2010, fundSizeUSDm: 450, grossTVPI: null, netTVPI: 5.8, netDPI: 5.2, irrToLP: 0.40, strategyType: "Early" },
  { firm: "Index Ventures", fundName: "Index Growth I", vintage: 2011, fundSizeUSDm: 500, grossTVPI: null, netTVPI: 4.5, netDPI: 3.8, irrToLP: 0.35, strategyType: "Growth" },
  { firm: "Index Ventures", fundName: "Index VIII", vintage: 2014, fundSizeUSDm: 580, grossTVPI: null, netTVPI: 3.4, netDPI: 1.6, irrToLP: 0.28, strategyType: "Early" },
  { firm: "Index Ventures", fundName: "Index Growth III", vintage: 2016, fundSizeUSDm: 910, grossTVPI: null, netTVPI: 2.8, netDPI: 1.2, irrToLP: 0.22, strategyType: "Growth" },
  { firm: "Index Ventures", fundName: "Index Growth IV", vintage: 2019, fundSizeUSDm: 1600, grossTVPI: null, netTVPI: 2.1, netDPI: 0.4, irrToLP: 0.20, strategyType: "Growth" },
  { firm: "Index Ventures", fundName: "Index Growth V", vintage: 2021, fundSizeUSDm: 3100, grossTVPI: null, netTVPI: 1.0, netDPI: null, irrToLP: -0.02, strategyType: "Growth" },

  // ═══════════════════════════════════════════════
  // KLEINER PERKINS (7 funds) — Source: CalSTRS, OPERF
  // ═══════════════════════════════════════════════
  { firm: "Kleiner Perkins", fundName: "KP XII", vintage: 2004, fundSizeUSDm: 400, grossTVPI: null, netTVPI: 2.8, netDPI: 2.6, irrToLP: 0.18, strategyType: "Early" },
  { firm: "Kleiner Perkins", fundName: "KP XIII", vintage: 2006, fundSizeUSDm: 600, grossTVPI: null, netTVPI: 1.4, netDPI: 1.2, irrToLP: 0.05, strategyType: "Early" },
  { firm: "Kleiner Perkins", fundName: "KP XIV (Green)", vintage: 2008, fundSizeUSDm: 500, grossTVPI: null, netTVPI: 0.7, netDPI: 0.5, irrToLP: -0.08, strategyType: "Early" },
  { firm: "Kleiner Perkins", fundName: "KP XV", vintage: 2010, fundSizeUSDm: 650, grossTVPI: null, netTVPI: 1.9, netDPI: 1.5, irrToLP: 0.10, strategyType: "Core" },
  { firm: "Kleiner Perkins", fundName: "KP XVI", vintage: 2014, fundSizeUSDm: 400, grossTVPI: null, netTVPI: 3.1, netDPI: 1.6, irrToLP: 0.22, strategyType: "Early" },
  { firm: "Kleiner Perkins", fundName: "KP XVII", vintage: 2016, fundSizeUSDm: 400, grossTVPI: null, netTVPI: 2.5, netDPI: 0.8, irrToLP: 0.18, strategyType: "Early" },
  { firm: "Kleiner Perkins", fundName: "KP XVIII", vintage: 2019, fundSizeUSDm: 700, grossTVPI: null, netTVPI: 2.1, netDPI: 0.4, irrToLP: 0.20, strategyType: "Early" },

  // ═══════════════════════════════════════════════
  // BATTERY VENTURES (6 funds) — Source: CalSTRS, NJ Pension
  // ═══════════════════════════════════════════════
  { firm: "Battery Ventures", fundName: "Battery IX", vintage: 2008, fundSizeUSDm: 750, grossTVPI: null, netTVPI: 2.8, netDPI: 2.5, irrToLP: 0.18, strategyType: "Core" },
  { firm: "Battery Ventures", fundName: "Battery X", vintage: 2011, fundSizeUSDm: 850, grossTVPI: null, netTVPI: 3.5, netDPI: 2.8, irrToLP: 0.24, strategyType: "Core" },
  { firm: "Battery Ventures", fundName: "Battery XI", vintage: 2014, fundSizeUSDm: 930, grossTVPI: null, netTVPI: 2.9, netDPI: 1.6, irrToLP: 0.21, strategyType: "Core" },
  { firm: "Battery Ventures", fundName: "Battery XII", vintage: 2016, fundSizeUSDm: 1100, grossTVPI: null, netTVPI: 2.4, netDPI: 0.9, irrToLP: 0.18, strategyType: "Core" },
  { firm: "Battery Ventures", fundName: "Battery XIII", vintage: 2019, fundSizeUSDm: 1700, grossTVPI: null, netTVPI: 1.8, netDPI: 0.4, irrToLP: 0.16, strategyType: "Core" },
  { firm: "Battery Ventures", fundName: "Battery XIV", vintage: 2022, fundSizeUSDm: 2300, grossTVPI: null, netTVPI: 1.2, netDPI: null, irrToLP: null, strategyType: "Core" },

  // ═══════════════════════════════════════════════
  // BESSEMER VENTURE PARTNERS (6 funds) — Source: CalSTRS, SFERS
  // ═══════════════════════════════════════════════
  { firm: "Bessemer", fundName: "BVP VII", vintage: 2007, fundSizeUSDm: 350, grossTVPI: null, netTVPI: 4.8, netDPI: 4.5, irrToLP: 0.30, strategyType: "Early" },
  { firm: "Bessemer", fundName: "BVP VIII", vintage: 2011, fundSizeUSDm: 675, grossTVPI: null, netTVPI: 5.2, netDPI: 4.1, irrToLP: 0.35, strategyType: "Early" },
  { firm: "Bessemer", fundName: "BVP IX", vintage: 2014, fundSizeUSDm: 700, grossTVPI: null, netTVPI: 3.1, netDPI: 1.5, irrToLP: 0.22, strategyType: "Early" },
  { firm: "Bessemer", fundName: "BVP X", vintage: 2016, fundSizeUSDm: 850, grossTVPI: null, netTVPI: 2.6, netDPI: 0.9, irrToLP: 0.20, strategyType: "Early" },
  { firm: "Bessemer", fundName: "BVP XI", vintage: 2019, fundSizeUSDm: 1850, grossTVPI: null, netTVPI: 1.9, netDPI: 0.3, irrToLP: 0.18, strategyType: "Core" },
  { firm: "Bessemer", fundName: "Century III", vintage: 2020, fundSizeUSDm: 1800, grossTVPI: null, netTVPI: 1.4, netDPI: null, irrToLP: 0.10, strategyType: "Growth" },

  // ═══════════════════════════════════════════════
  // GENERAL CATALYST (6 funds) — Source: OPERF, CalSTRS
  // ═══════════════════════════════════════════════
  { firm: "General Catalyst", fundName: "GC VII", vintage: 2013, fundSizeUSDm: 625, grossTVPI: null, netTVPI: 3.8, netDPI: 2.5, irrToLP: 0.28, strategyType: "Core" },
  { firm: "General Catalyst", fundName: "GC VIII", vintage: 2015, fundSizeUSDm: 775, grossTVPI: null, netTVPI: 3.2, netDPI: 1.8, irrToLP: 0.25, strategyType: "Core" },
  { firm: "General Catalyst", fundName: "GC IX", vintage: 2017, fundSizeUSDm: 1375, grossTVPI: null, netTVPI: 2.5, netDPI: 0.8, irrToLP: 0.20, strategyType: "Core" },
  { firm: "General Catalyst", fundName: "GC X", vintage: 2019, fundSizeUSDm: 2300, grossTVPI: null, netTVPI: 1.9, netDPI: 0.4, irrToLP: 0.18, strategyType: "Core" },
  { firm: "General Catalyst", fundName: "GC XI", vintage: 2021, fundSizeUSDm: 4600, grossTVPI: null, netTVPI: 1.1, netDPI: null, irrToLP: 0.03, strategyType: "Growth" },
  { firm: "General Catalyst", fundName: "Endurance I", vintage: 2022, fundSizeUSDm: 15000, grossTVPI: null, netTVPI: 1.0, netDPI: null, irrToLP: null, strategyType: "Growth" },

  // ═══════════════════════════════════════════════
  // SPARK CAPITAL (6 funds) — Source: UTIMCO, OPERF
  // ═══════════════════════════════════════════════
  { firm: "Spark Capital", fundName: "Spark I", vintage: 2005, fundSizeUSDm: 200, grossTVPI: null, netTVPI: 6.2, netDPI: 5.8, irrToLP: 0.38, strategyType: "Early" },
  { firm: "Spark Capital", fundName: "Spark II", vintage: 2009, fundSizeUSDm: 375, grossTVPI: null, netTVPI: 4.5, netDPI: 4.0, irrToLP: 0.30, strategyType: "Early" },
  { firm: "Spark Capital", fundName: "Spark III", vintage: 2012, fundSizeUSDm: 350, grossTVPI: null, netTVPI: 5.8, netDPI: 4.2, irrToLP: 0.38, strategyType: "Early" },
  { firm: "Spark Capital", fundName: "Spark IV", vintage: 2014, fundSizeUSDm: 400, grossTVPI: null, netTVPI: 3.5, netDPI: 1.8, irrToLP: 0.25, strategyType: "Early" },
  { firm: "Spark Capital", fundName: "Spark Growth II", vintage: 2016, fundSizeUSDm: 400, grossTVPI: null, netTVPI: 2.8, netDPI: 1.2, irrToLP: 0.22, strategyType: "Growth" },
  { firm: "Spark Capital", fundName: "Spark V", vintage: 2018, fundSizeUSDm: 450, grossTVPI: null, netTVPI: 2.2, netDPI: 0.5, irrToLP: 0.18, strategyType: "Early" },

  // ═══════════════════════════════════════════════
  // IVP (6 funds) — Source: CalSTRS, OPERF
  // ═══════════════════════════════════════════════
  { firm: "IVP", fundName: "IVP XIV", vintage: 2008, fundSizeUSDm: 800, grossTVPI: null, netTVPI: 3.2, netDPI: 2.9, irrToLP: 0.22, strategyType: "Growth" },
  { firm: "IVP", fundName: "IVP XV", vintage: 2012, fundSizeUSDm: 1000, grossTVPI: null, netTVPI: 4.1, netDPI: 3.2, irrToLP: 0.30, strategyType: "Growth" },
  { firm: "IVP", fundName: "IVP XVI", vintage: 2016, fundSizeUSDm: 1400, grossTVPI: null, netTVPI: 2.6, netDPI: 1.2, irrToLP: 0.20, strategyType: "Growth" },
  { firm: "IVP", fundName: "IVP XVII", vintage: 2018, fundSizeUSDm: 1600, grossTVPI: null, netTVPI: 2.0, netDPI: 0.6, irrToLP: 0.16, strategyType: "Growth" },
  { firm: "IVP", fundName: "IVP XVIII", vintage: 2020, fundSizeUSDm: 1800, grossTVPI: null, netTVPI: 1.5, netDPI: 0.2, irrToLP: 0.12, strategyType: "Growth" },
  { firm: "IVP", fundName: "IVP XIX", vintage: 2022, fundSizeUSDm: 2000, grossTVPI: null, netTVPI: 1.1, netDPI: null, irrToLP: null, strategyType: "Growth" },

  // ═══════════════════════════════════════════════
  // COATUE MANAGEMENT (5 funds) — Source: CalSTRS, NJ Pension
  // ═══════════════════════════════════════════════
  { firm: "Coatue", fundName: "Coatue Ventures I", vintage: 2019, fundSizeUSDm: 700, grossTVPI: null, netTVPI: 2.8, netDPI: 0.5, irrToLP: 0.35, strategyType: "Early" },
  { firm: "Coatue", fundName: "Coatue Early Stage", vintage: 2021, fundSizeUSDm: 500, grossTVPI: null, netTVPI: 0.9, netDPI: null, irrToLP: -0.05, strategyType: "Early" },
  { firm: "Coatue", fundName: "Structured VI", vintage: 2020, fundSizeUSDm: 2000, grossTVPI: null, netTVPI: 1.4, netDPI: 0.3, irrToLP: 0.10, strategyType: "Growth" },
  { firm: "Coatue", fundName: "Structured VII", vintage: 2021, fundSizeUSDm: 3500, grossTVPI: null, netTVPI: 0.8, netDPI: null, irrToLP: -0.12, strategyType: "Growth" },
  { firm: "Coatue", fundName: "Structured VIII", vintage: 2022, fundSizeUSDm: 2000, grossTVPI: null, netTVPI: 1.3, netDPI: null, irrToLP: null, strategyType: "Growth" },

  // ═══════════════════════════════════════════════
  // ALTIMETER CAPITAL (3 funds) — Source: CalPERS, NJ
  // ═══════════════════════════════════════════════
  { firm: "Altimeter", fundName: "Growth I", vintage: 2018, fundSizeUSDm: 720, grossTVPI: null, netTVPI: 3.5, netDPI: 1.2, irrToLP: 0.35, strategyType: "Growth" },
  { firm: "Altimeter", fundName: "Growth II", vintage: 2020, fundSizeUSDm: 3200, grossTVPI: null, netTVPI: 1.2, netDPI: 0.1, irrToLP: 0.05, strategyType: "Growth" },
  { firm: "Altimeter", fundName: "Growth III", vintage: 2022, fundSizeUSDm: 1500, grossTVPI: null, netTVPI: 1.3, netDPI: null, irrToLP: null, strategyType: "Growth" },

  // ═══════════════════════════════════════════════
  // RIBBIT CAPITAL (4 funds) — Source: CalSTRS, OPERF
  // ═══════════════════════════════════════════════
  { firm: "Ribbit Capital", fundName: "Ribbit I", vintage: 2013, fundSizeUSDm: 100, grossTVPI: null, netTVPI: 8.5, netDPI: 7.0, irrToLP: 0.50, strategyType: "Early" },
  { firm: "Ribbit Capital", fundName: "Ribbit II", vintage: 2015, fundSizeUSDm: 250, grossTVPI: null, netTVPI: 4.2, netDPI: 2.5, irrToLP: 0.35, strategyType: "Early" },
  { firm: "Ribbit Capital", fundName: "Ribbit III", vintage: 2018, fundSizeUSDm: 420, grossTVPI: null, netTVPI: 2.8, netDPI: 0.8, irrToLP: 0.28, strategyType: "Core" },
  { firm: "Ribbit Capital", fundName: "Ribbit IV", vintage: 2020, fundSizeUSDm: 600, grossTVPI: null, netTVPI: 1.6, netDPI: 0.2, irrToLP: 0.12, strategyType: "Core" },

  // ═══════════════════════════════════════════════
  // MERITECH CAPITAL (4 funds) — Source: CalSTRS
  // ═══════════════════════════════════════════════
  { firm: "Meritech", fundName: "Meritech V", vintage: 2014, fundSizeUSDm: 550, grossTVPI: null, netTVPI: 3.2, netDPI: 2.0, irrToLP: 0.25, strategyType: "Growth" },
  { firm: "Meritech", fundName: "Meritech VI", vintage: 2018, fundSizeUSDm: 900, grossTVPI: null, netTVPI: 2.1, netDPI: 0.6, irrToLP: 0.18, strategyType: "Growth" },
  { firm: "Meritech", fundName: "Meritech VII", vintage: 2020, fundSizeUSDm: 1350, grossTVPI: null, netTVPI: 1.4, netDPI: 0.2, irrToLP: 0.08, strategyType: "Growth" },
  { firm: "Meritech", fundName: "Meritech VIII", vintage: 2022, fundSizeUSDm: 1700, grossTVPI: null, netTVPI: 1.1, netDPI: null, irrToLP: null, strategyType: "Growth" },

  // ═══════════════════════════════════════════════
  // SAPPHIRE VENTURES (4 funds) — Source: OPERF, CalSTRS
  // ═══════════════════════════════════════════════
  { firm: "Sapphire Ventures", fundName: "Sapphire I", vintage: 2011, fundSizeUSDm: 525, grossTVPI: null, netTVPI: 3.8, netDPI: 3.0, irrToLP: 0.28, strategyType: "Growth" },
  { firm: "Sapphire Ventures", fundName: "Sapphire II", vintage: 2015, fundSizeUSDm: 1000, grossTVPI: null, netTVPI: 2.5, netDPI: 1.2, irrToLP: 0.20, strategyType: "Growth" },
  { firm: "Sapphire Ventures", fundName: "Sapphire III", vintage: 2018, fundSizeUSDm: 1400, grossTVPI: null, netTVPI: 1.8, netDPI: 0.4, irrToLP: 0.15, strategyType: "Growth" },
  { firm: "Sapphire Ventures", fundName: "Sapphire IV", vintage: 2021, fundSizeUSDm: 2000, grossTVPI: null, netTVPI: 1.0, netDPI: null, irrToLP: 0.01, strategyType: "Growth" },

  // ═══════════════════════════════════════════════
  // REDPOINT VENTURES (5 funds) — Source: CalSTRS, OPERF
  // ═══════════════════════════════════════════════
  { firm: "Redpoint", fundName: "Redpoint IV", vintage: 2007, fundSizeUSDm: 400, grossTVPI: null, netTVPI: 3.5, netDPI: 3.2, irrToLP: 0.22, strategyType: "Early" },
  { firm: "Redpoint", fundName: "Redpoint V", vintage: 2012, fundSizeUSDm: 400, grossTVPI: null, netTVPI: 4.8, netDPI: 3.8, irrToLP: 0.35, strategyType: "Early" },
  { firm: "Redpoint", fundName: "Omega III", vintage: 2014, fundSizeUSDm: 725, grossTVPI: null, netTVPI: 2.9, netDPI: 1.5, irrToLP: 0.22, strategyType: "Growth" },
  { firm: "Redpoint", fundName: "Redpoint VI", vintage: 2016, fundSizeUSDm: 400, grossTVPI: null, netTVPI: 2.6, netDPI: 0.9, irrToLP: 0.20, strategyType: "Early" },
  { firm: "Redpoint", fundName: "Omega V", vintage: 2019, fundSizeUSDm: 575, grossTVPI: null, netTVPI: 1.8, netDPI: 0.3, irrToLP: 0.15, strategyType: "Growth" },

  // ═══════════════════════════════════════════════
  // SCALE VENTURE PARTNERS (4 funds) — Source: CalSTRS
  // ═══════════════════════════════════════════════
  { firm: "Scale VP", fundName: "Scale IV", vintage: 2011, fundSizeUSDm: 335, grossTVPI: null, netTVPI: 3.5, netDPI: 2.8, irrToLP: 0.25, strategyType: "Core" },
  { firm: "Scale VP", fundName: "Scale V", vintage: 2015, fundSizeUSDm: 335, grossTVPI: null, netTVPI: 2.8, netDPI: 1.5, irrToLP: 0.22, strategyType: "Core" },
  { firm: "Scale VP", fundName: "Scale VI", vintage: 2018, fundSizeUSDm: 400, grossTVPI: null, netTVPI: 2.1, netDPI: 0.5, irrToLP: 0.18, strategyType: "Core" },
  { firm: "Scale VP", fundName: "Scale VII", vintage: 2021, fundSizeUSDm: 500, grossTVPI: null, netTVPI: 1.2, netDPI: null, irrToLP: 0.05, strategyType: "Core" },

  // ═══════════════════════════════════════════════
  // MENLO VENTURES (5 funds) — Source: CalSTRS, OPERF
  // ═══════════════════════════════════════════════
  { firm: "Menlo Ventures", fundName: "Menlo XI", vintage: 2006, fundSizeUSDm: 400, grossTVPI: null, netTVPI: 1.8, netDPI: 1.6, irrToLP: 0.08, strategyType: "Core" },
  { firm: "Menlo Ventures", fundName: "Menlo XII", vintage: 2008, fundSizeUSDm: 500, grossTVPI: null, netTVPI: 2.5, netDPI: 2.2, irrToLP: 0.15, strategyType: "Core" },
  { firm: "Menlo Ventures", fundName: "Menlo XIII", vintage: 2013, fundSizeUSDm: 400, grossTVPI: null, netTVPI: 3.2, netDPI: 2.0, irrToLP: 0.24, strategyType: "Core" },
  { firm: "Menlo Ventures", fundName: "Menlo XIV", vintage: 2017, fundSizeUSDm: 450, grossTVPI: null, netTVPI: 2.4, netDPI: 0.8, irrToLP: 0.18, strategyType: "Core" },
  { firm: "Menlo Ventures", fundName: "Menlo XV", vintage: 2021, fundSizeUSDm: 500, grossTVPI: null, netTVPI: 1.3, netDPI: null, irrToLP: 0.06, strategyType: "Core" },

  // ═══════════════════════════════════════════════
  // NORWEST VENTURE PARTNERS (4 funds) — Source: OPERF
  // ═══════════════════════════════════════════════
  { firm: "Norwest", fundName: "NVP XII", vintage: 2012, fundSizeUSDm: 1200, grossTVPI: null, netTVPI: 2.8, netDPI: 2.2, irrToLP: 0.20, strategyType: "Core" },
  { firm: "Norwest", fundName: "NVP XIII", vintage: 2015, fundSizeUSDm: 1500, grossTVPI: null, netTVPI: 2.3, netDPI: 1.1, irrToLP: 0.17, strategyType: "Core" },
  { firm: "Norwest", fundName: "NVP XIV", vintage: 2018, fundSizeUSDm: 2000, grossTVPI: null, netTVPI: 1.9, netDPI: 0.5, irrToLP: 0.15, strategyType: "Core" },
  { firm: "Norwest", fundName: "NVP XV", vintage: 2020, fundSizeUSDm: 2000, grossTVPI: null, netTVPI: 1.4, netDPI: 0.2, irrToLP: 0.10, strategyType: "Core" },

  // ═══════════════════════════════════════════════
  // MAYFIELD (5 funds) — Source: OPERF
  // ═══════════════════════════════════════════════
  { firm: "Mayfield", fundName: "Mayfield XIV", vintage: 2013, fundSizeUSDm: 265, grossTVPI: null, netTVPI: 3.9, netDPI: 2.8, irrToLP: 0.30, strategyType: "Early" },
  { firm: "Mayfield", fundName: "Mayfield XV", vintage: 2015, fundSizeUSDm: 335, grossTVPI: null, netTVPI: 3.2, netDPI: 1.8, irrToLP: 0.25, strategyType: "Early" },
  { firm: "Mayfield", fundName: "Mayfield Select I", vintage: 2017, fundSizeUSDm: 190, grossTVPI: null, netTVPI: 2.5, netDPI: 0.8, irrToLP: 0.20, strategyType: "Growth" },
  { firm: "Mayfield", fundName: "Mayfield XVI", vintage: 2019, fundSizeUSDm: 200, grossTVPI: null, netTVPI: 2.1, netDPI: 0.4, irrToLP: 0.22, strategyType: "Early" },
  { firm: "Mayfield", fundName: "Mayfield XVII", vintage: 2021, fundSizeUSDm: 225, grossTVPI: null, netTVPI: 1.3, netDPI: null, irrToLP: 0.06, strategyType: "Early" },

  // ═══════════════════════════════════════════════
  // MADRONA (3 funds) — Source: OPERF
  // ═══════════════════════════════════════════════
  { firm: "Madrona", fundName: "Madrona V", vintage: 2012, fundSizeUSDm: 175, grossTVPI: null, netTVPI: 4.5, netDPI: 3.8, irrToLP: 0.32, strategyType: "Early" },
  { firm: "Madrona", fundName: "Madrona VI", vintage: 2016, fundSizeUSDm: 300, grossTVPI: null, netTVPI: 2.8, netDPI: 1.2, irrToLP: 0.22, strategyType: "Early" },
  { firm: "Madrona", fundName: "Madrona VII", vintage: 2020, fundSizeUSDm: 375, grossTVPI: null, netTVPI: 1.5, netDPI: 0.2, irrToLP: 0.12, strategyType: "Early" },

  // ═══════════════════════════════════════════════
  // ICONIQ GROWTH (3 funds) — Source: CalSTRS, NJ
  // ═══════════════════════════════════════════════
  { firm: "ICONIQ", fundName: "Growth I", vintage: 2016, fundSizeUSDm: 600, grossTVPI: null, netTVPI: 3.5, netDPI: 1.8, irrToLP: 0.30, strategyType: "Growth" },
  { firm: "ICONIQ", fundName: "Growth II", vintage: 2018, fundSizeUSDm: 750, grossTVPI: null, netTVPI: 2.4, netDPI: 0.6, irrToLP: 0.22, strategyType: "Growth" },
  { firm: "ICONIQ", fundName: "Growth III", vintage: 2020, fundSizeUSDm: 1800, grossTVPI: null, netTVPI: 1.3, netDPI: null, irrToLP: 0.08, strategyType: "Growth" },

  // ═══════════════════════════════════════════════
  // ANDREESSEN HOROWITZ GROWTH (4 funds) — Source: CalPERS
  // ═══════════════════════════════════════════════
  { firm: "a16z", fundName: "AH Growth I", vintage: 2018, fundSizeUSDm: 2000, grossTVPI: null, netTVPI: 1.8, netDPI: 0.3, irrToLP: 0.14, strategyType: "Growth" },
  { firm: "a16z", fundName: "AH Growth II", vintage: 2020, fundSizeUSDm: 2750, grossTVPI: null, netTVPI: 1.2, netDPI: null, irrToLP: 0.05, strategyType: "Growth" },
  { firm: "a16z", fundName: "AH Bio I", vintage: 2015, fundSizeUSDm: 200, grossTVPI: null, netTVPI: 2.8, netDPI: 1.5, irrToLP: 0.22, strategyType: "Early" },
  { firm: "a16z", fundName: "AH Crypto I", vintage: 2018, fundSizeUSDm: 300, grossTVPI: null, netTVPI: 5.2, netDPI: 2.8, irrToLP: 0.55, strategyType: "Early" },

  // ═══════════════════════════════════════════════
  // FIRST ROUND CAPITAL (4 funds) — Source: UTIMCO, media
  // ═══════════════════════════════════════════════
  { firm: "First Round", fundName: "FRC II", vintage: 2007, fundSizeUSDm: 40, grossTVPI: null, netTVPI: 3.5, netDPI: 3.2, irrToLP: 0.22, strategyType: "Early" },
  { firm: "First Round", fundName: "FRC III", vintage: 2010, fundSizeUSDm: 125, grossTVPI: null, netTVPI: 7.8, netDPI: 6.5, irrToLP: 0.45, strategyType: "Early" },
  { firm: "First Round", fundName: "FRC IV", vintage: 2014, fundSizeUSDm: 185, grossTVPI: null, netTVPI: 3.2, netDPI: 1.5, irrToLP: 0.22, strategyType: "Early" },
  { firm: "First Round", fundName: "FRC V", vintage: 2018, fundSizeUSDm: 300, grossTVPI: null, netTVPI: 2.0, netDPI: 0.4, irrToLP: 0.16, strategyType: "Early" },

  // ═══════════════════════════════════════════════
  // FELICIS VENTURES (4 funds) — Source: UTIMCO, SFERS
  // ═══════════════════════════════════════════════
  { firm: "Felicis", fundName: "Felicis II", vintage: 2012, fundSizeUSDm: 70, grossTVPI: null, netTVPI: 7.5, netDPI: 5.8, irrToLP: 0.48, strategyType: "Early" },
  { firm: "Felicis", fundName: "Felicis III", vintage: 2015, fundSizeUSDm: 150, grossTVPI: null, netTVPI: 4.2, netDPI: 2.5, irrToLP: 0.32, strategyType: "Early" },
  { firm: "Felicis", fundName: "Felicis IV", vintage: 2018, fundSizeUSDm: 300, grossTVPI: null, netTVPI: 2.8, netDPI: 0.8, irrToLP: 0.25, strategyType: "Early" },
  { firm: "Felicis", fundName: "Felicis V", vintage: 2021, fundSizeUSDm: 600, grossTVPI: null, netTVPI: 1.2, netDPI: null, irrToLP: 0.04, strategyType: "Core" },

  // ═══════════════════════════════════════════════
  // EMERGENCE CAPITAL (3 funds) — Source: CalSTRS
  // ═══════════════════════════════════════════════
  { firm: "Emergence", fundName: "Emergence III", vintage: 2014, fundSizeUSDm: 225, grossTVPI: null, netTVPI: 5.5, netDPI: 3.5, irrToLP: 0.38, strategyType: "Early" },
  { firm: "Emergence", fundName: "Emergence IV", vintage: 2017, fundSizeUSDm: 325, grossTVPI: null, netTVPI: 2.8, netDPI: 0.8, irrToLP: 0.22, strategyType: "Early" },
  { firm: "Emergence", fundName: "Emergence V", vintage: 2021, fundSizeUSDm: 450, grossTVPI: null, netTVPI: 1.1, netDPI: null, irrToLP: 0.02, strategyType: "Early" },

  // ═══════════════════════════════════════════════
  // SOFTBANK VISION (2 funds) — Source: Public filings
  // ═══════════════════════════════════════════════
  { firm: "SoftBank", fundName: "Vision Fund I", vintage: 2017, fundSizeUSDm: 98600, grossTVPI: null, netTVPI: 1.4, netDPI: 0.5, irrToLP: 0.06, strategyType: "Growth" },
  { firm: "SoftBank", fundName: "Vision Fund II", vintage: 2019, fundSizeUSDm: 56000, grossTVPI: null, netTVPI: 0.6, netDPI: 0.1, irrToLP: -0.20, strategyType: "Growth" },

  // ═══════════════════════════════════════════════
  // D1 CAPITAL (2 funds) — Source: NJ Pension
  // ═══════════════════════════════════════════════
  { firm: "D1 Capital", fundName: "D1 Venture I", vintage: 2020, fundSizeUSDm: 1500, grossTVPI: null, netTVPI: 1.1, netDPI: null, irrToLP: 0.03, strategyType: "Growth" },
  { firm: "D1 Capital", fundName: "D1 Venture II", vintage: 2021, fundSizeUSDm: 1000, grossTVPI: null, netTVPI: 0.7, netDPI: null, irrToLP: -0.15, strategyType: "Growth" },

  // ═══════════════════════════════════════════════
  // ADDITION (2 funds) — Source: CalSTRS
  // ═══════════════════════════════════════════════
  { firm: "Addition", fundName: "Addition I", vintage: 2020, fundSizeUSDm: 700, grossTVPI: null, netTVPI: 1.0, netDPI: null, irrToLP: -0.01, strategyType: "Growth" },
  { firm: "Addition", fundName: "Addition II", vintage: 2021, fundSizeUSDm: 1200, grossTVPI: null, netTVPI: 0.8, netDPI: null, irrToLP: -0.10, strategyType: "Growth" },

  // ═══════════════════════════════════════════════
  // FORERUNNER VENTURES (3 funds) — Source: OPERF
  // ═══════════════════════════════════════════════
  { firm: "Forerunner", fundName: "Forerunner II", vintage: 2014, fundSizeUSDm: 75, grossTVPI: null, netTVPI: 4.5, netDPI: 3.0, irrToLP: 0.35, strategyType: "Early" },
  { firm: "Forerunner", fundName: "Forerunner III", vintage: 2016, fundSizeUSDm: 122, grossTVPI: null, netTVPI: 3.2, netDPI: 1.5, irrToLP: 0.28, strategyType: "Early" },
  { firm: "Forerunner", fundName: "Forerunner IV", vintage: 2019, fundSizeUSDm: 360, grossTVPI: null, netTVPI: 1.8, netDPI: 0.3, irrToLP: 0.15, strategyType: "Early" },

  // ═══════════════════════════════════════════════
  // LSVP — LIGHTSTONE (3 funds) — Source: OPERF
  // ═══════════════════════════════════════════════
  { firm: "LSVP", fundName: "Lightstone I", vintage: 2013, fundSizeUSDm: 100, grossTVPI: null, netTVPI: 4.2, netDPI: 3.2, irrToLP: 0.32, strategyType: "Early" },
  { firm: "LSVP", fundName: "Lightstone II", vintage: 2016, fundSizeUSDm: 165, grossTVPI: null, netTVPI: 3.0, netDPI: 1.2, irrToLP: 0.24, strategyType: "Early" },
  { firm: "LSVP", fundName: "Lightstone III", vintage: 2019, fundSizeUSDm: 200, grossTVPI: null, netTVPI: 1.9, netDPI: 0.3, irrToLP: 0.16, strategyType: "Early" },

  // ═══════════════════════════════════════════════
  // LERER HIPPEAU (3 funds) — Source: CalSTRS
  // ═══════════════════════════════════════════════
  { firm: "Lerer Hippeau", fundName: "LH IV", vintage: 2015, fundSizeUSDm: 50, grossTVPI: null, netTVPI: 3.8, netDPI: 2.5, irrToLP: 0.30, strategyType: "Early" },
  { firm: "Lerer Hippeau", fundName: "LH V", vintage: 2017, fundSizeUSDm: 90, grossTVPI: null, netTVPI: 2.5, netDPI: 0.8, irrToLP: 0.20, strategyType: "Early" },
  { firm: "Lerer Hippeau", fundName: "LH VI", vintage: 2020, fundSizeUSDm: 122, grossTVPI: null, netTVPI: 1.5, netDPI: 0.2, irrToLP: 0.12, strategyType: "Early" },

  // ═══════════════════════════════════════════════
  // GREENOAKS CAPITAL (3 funds) — Source: NJ Pension
  // ═══════════════════════════════════════════════
  { firm: "Greenoaks", fundName: "Greenoaks III", vintage: 2016, fundSizeUSDm: 650, grossTVPI: null, netTVPI: 4.8, netDPI: 2.5, irrToLP: 0.38, strategyType: "Growth" },
  { firm: "Greenoaks", fundName: "Greenoaks IV", vintage: 2019, fundSizeUSDm: 1500, grossTVPI: null, netTVPI: 2.2, netDPI: 0.5, irrToLP: 0.22, strategyType: "Growth" },
  { firm: "Greenoaks", fundName: "Greenoaks V", vintage: 2021, fundSizeUSDm: 4500, grossTVPI: null, netTVPI: 0.9, netDPI: null, irrToLP: -0.05, strategyType: "Growth" },

  // ═══════════════════════════════════════════════
  // ANDREESSEN BIO & CRYPTO (additional) — Source: CalPERS
  // ═══════════════════════════════════════════════
  { firm: "a16z", fundName: "AH Crypto II", vintage: 2020, fundSizeUSDm: 515, grossTVPI: null, netTVPI: 3.2, netDPI: 1.0, irrToLP: 0.40, strategyType: "Early" },
  { firm: "a16z", fundName: "AH Crypto III", vintage: 2022, fundSizeUSDm: 4500, grossTVPI: null, netTVPI: 1.4, netDPI: null, irrToLP: null, strategyType: "Growth" },

  // ═══════════════════════════════════════════════
  // PARADIGM (2 funds) — Source: CalSTRS, media
  // ═══════════════════════════════════════════════
  { firm: "Paradigm", fundName: "Paradigm One", vintage: 2021, fundSizeUSDm: 2500, grossTVPI: null, netTVPI: 1.8, netDPI: 0.3, irrToLP: 0.20, strategyType: "Early" },
  { firm: "Paradigm", fundName: "Paradigm Two", vintage: 2023, fundSizeUSDm: 850, grossTVPI: null, netTVPI: 1.4, netDPI: null, irrToLP: null, strategyType: "Early" },

  // ═══════════════════════════════════════════════
  // 8VC (3 funds) — Source: OPERF, CalSTRS
  // ═══════════════════════════════════════════════
  { firm: "8VC", fundName: "8VC I", vintage: 2016, fundSizeUSDm: 410, grossTVPI: null, netTVPI: 3.8, netDPI: 1.8, irrToLP: 0.28, strategyType: "Early" },
  { firm: "8VC", fundName: "8VC II", vintage: 2018, fundSizeUSDm: 640, grossTVPI: null, netTVPI: 2.5, netDPI: 0.6, irrToLP: 0.22, strategyType: "Early" },
  { firm: "8VC", fundName: "8VC III", vintage: 2021, fundSizeUSDm: 1100, grossTVPI: null, netTVPI: 1.2, netDPI: null, irrToLP: 0.04, strategyType: "Core" },

  // ═══════════════════════════════════════════════
  // CRAFT VENTURES (3 funds) — Source: CalSTRS, media
  // ═══════════════════════════════════════════════
  { firm: "Craft Ventures", fundName: "Craft I", vintage: 2017, fundSizeUSDm: 350, grossTVPI: null, netTVPI: 3.5, netDPI: 1.5, irrToLP: 0.28, strategyType: "Early" },
  { firm: "Craft Ventures", fundName: "Craft II", vintage: 2019, fundSizeUSDm: 450, grossTVPI: null, netTVPI: 2.2, netDPI: 0.5, irrToLP: 0.22, strategyType: "Early" },
  { firm: "Craft Ventures", fundName: "Craft III", vintage: 2021, fundSizeUSDm: 500, grossTVPI: null, netTVPI: 1.3, netDPI: null, irrToLP: 0.06, strategyType: "Early" },

  // ═══════════════════════════════════════════════
  // DRAGONEER (3 funds) — Source: NJ Pension, WSIB
  // ═══════════════════════════════════════════════
  { firm: "Dragoneer", fundName: "Growth Opp III", vintage: 2018, fundSizeUSDm: 870, grossTVPI: null, netTVPI: 2.2, netDPI: 0.5, irrToLP: 0.20, strategyType: "Growth" },
  { firm: "Dragoneer", fundName: "Growth Opp IV", vintage: 2020, fundSizeUSDm: 2100, grossTVPI: null, netTVPI: 1.3, netDPI: 0.1, irrToLP: 0.08, strategyType: "Growth" },
  { firm: "Dragoneer", fundName: "Growth Opp V", vintage: 2021, fundSizeUSDm: 3500, grossTVPI: null, netTVPI: 0.8, netDPI: null, irrToLP: -0.10, strategyType: "Growth" },

  // ═══════════════════════════════════════════════
  // FOUNDER COLLECTIVE (3 funds) — Source: UTIMCO
  // ═══════════════════════════════════════════════
  { firm: "Founder Collective", fundName: "FC I", vintage: 2009, fundSizeUSDm: 40, grossTVPI: null, netTVPI: 8.2, netDPI: 7.5, irrToLP: 0.45, strategyType: "Early" },
  { firm: "Founder Collective", fundName: "FC II", vintage: 2013, fundSizeUSDm: 75, grossTVPI: null, netTVPI: 4.5, netDPI: 3.0, irrToLP: 0.32, strategyType: "Early" },
  { firm: "Founder Collective", fundName: "FC III", vintage: 2017, fundSizeUSDm: 75, grossTVPI: null, netTVPI: 2.5, netDPI: 0.8, irrToLP: 0.20, strategyType: "Early" },

  // ═══════════════════════════════════════════════
  // INITIALIZED CAPITAL (3 funds) — Source: UTIMCO
  // ═══════════════════════════════════════════════
  { firm: "Initialized", fundName: "Initialized II", vintage: 2014, fundSizeUSDm: 115, grossTVPI: null, netTVPI: 5.5, netDPI: 3.5, irrToLP: 0.38, strategyType: "Early" },
  { firm: "Initialized", fundName: "Initialized III", vintage: 2016, fundSizeUSDm: 165, grossTVPI: null, netTVPI: 3.2, netDPI: 1.2, irrToLP: 0.25, strategyType: "Early" },
  { firm: "Initialized", fundName: "Initialized IV", vintage: 2019, fundSizeUSDm: 230, grossTVPI: null, netTVPI: 2.0, netDPI: 0.3, irrToLP: 0.18, strategyType: "Early" },

  // ═══════════════════════════════════════════════
  // ANDREESSEN BIO ADDITIONAL — Source: CalPERS
  // ═══════════════════════════════════════════════
  { firm: "a16z", fundName: "AH Bio II", vintage: 2018, fundSizeUSDm: 450, grossTVPI: null, netTVPI: 1.8, netDPI: 0.4, irrToLP: 0.14, strategyType: "Core" },
  { firm: "a16z", fundName: "AH Bio III", vintage: 2020, fundSizeUSDm: 750, grossTVPI: null, netTVPI: 1.3, netDPI: null, irrToLP: 0.06, strategyType: "Core" },

  // ═══════════════════════════════════════════════
  // KHOSLA VENTURES (expanded, 10 funds) — Source: NJ Division of Investment Khosla Memorandum
  // ═══════════════════════════════════════════════
  { firm: "Khosla", fundName: "Khosla Ventures IV", vintage: 2011, fundSizeUSDm: 600, grossTVPI: null, netTVPI: 4.60, netDPI: 3.23, irrToLP: 0.23, strategyType: "Early" },
  { firm: "Khosla", fundName: "Khosla Ventures V", vintage: 2014, fundSizeUSDm: 700, grossTVPI: null, netTVPI: 3.12, netDPI: 1.48, irrToLP: 0.195, strategyType: "Early" },
  { firm: "Khosla", fundName: "Khosla Ventures VI", vintage: 2018, fundSizeUSDm: 800, grossTVPI: null, netTVPI: 2.57, netDPI: 0.05, irrToLP: 0.239, strategyType: "Early" },
  { firm: "Khosla", fundName: "Khosla Ventures VII", vintage: 2021, fundSizeUSDm: 1400, grossTVPI: null, netTVPI: 1.15, netDPI: null, irrToLP: 0.063, strategyType: "Early" },
  { firm: "Khosla", fundName: "Khosla Ventures VIII", vintage: 2023, fundSizeUSDm: 1800, grossTVPI: null, netTVPI: 1.04, netDPI: null, irrToLP: 0.143, strategyType: "Early" },
  { firm: "Khosla", fundName: "Khosla Seed B", vintage: 2012, fundSizeUSDm: 100, grossTVPI: null, netTVPI: 3.80, netDPI: 3.24, irrToLP: 0.189, strategyType: "Early" },
  { firm: "Khosla", fundName: "Khosla Seed C", vintage: 2015, fundSizeUSDm: 140, grossTVPI: null, netTVPI: 3.52, netDPI: 1.66, irrToLP: 0.192, strategyType: "Early" },
  { firm: "Khosla", fundName: "Khosla Seed D", vintage: 2018, fundSizeUSDm: 200, grossTVPI: null, netTVPI: 2.34, netDPI: null, irrToLP: 0.213, strategyType: "Early" },
  { firm: "Khosla", fundName: "Khosla Seed E", vintage: 2021, fundSizeUSDm: 300, grossTVPI: null, netTVPI: 1.30, netDPI: null, irrToLP: 0.143, strategyType: "Early" },
  { firm: "Khosla", fundName: "Khosla Seed F", vintage: 2023, fundSizeUSDm: 400, grossTVPI: null, netTVPI: 1.20, netDPI: null, irrToLP: 0.357, strategyType: "Early" },

  // ═══════════════════════════════════════════════
  // TCV (expanded) — Source: NJ Division of Investment TCV Memorandum
  // ═══════════════════════════════════════════════
  { firm: "TCV", fundName: "TCV V", vintage: 2003, fundSizeUSDm: 775, grossTVPI: null, netTVPI: 1.62, netDPI: 1.62, irrToLP: 0.11, strategyType: "Growth" },
  { firm: "TCV", fundName: "TCV VI", vintage: 2006, fundSizeUSDm: 1400, grossTVPI: null, netTVPI: 1.45, netDPI: 1.45, irrToLP: 0.08, strategyType: "Growth" },
  { firm: "TCV", fundName: "TCV VII", vintage: 2008, fundSizeUSDm: 1650, grossTVPI: null, netTVPI: 1.53, netDPI: 1.53, irrToLP: 0.199, strategyType: "Growth" },

  // ═══════════════════════════════════════════════
  // IVP (additional detail) — Source: NJ Division of Investment IVP Memorandum
  // IVP XV-XVII aggregate: net IRR 25%, net TVPI 2.1x, DPI 0.8x
  // ═══════════════════════════════════════════════

  // ═══════════════════════════════════════════════
  // SUMMIT PARTNERS (expanded) — Source: NJ Division of Investment Summit Memorandum
  // ═══════════════════════════════════════════════
  { firm: "Summit", fundName: "Growth Equity VIII", vintage: 2012, fundSizeUSDm: 2000, grossTVPI: null, netTVPI: 2.51, netDPI: 2.08, irrToLP: 0.259, strategyType: "Growth" },
  { firm: "Summit", fundName: "Growth Equity IX", vintage: 2016, fundSizeUSDm: 2200, grossTVPI: null, netTVPI: 2.21, netDPI: 1.10, irrToLP: 0.276, strategyType: "Growth" },
  { firm: "Summit", fundName: "Growth Equity XII-A", vintage: 2024, fundSizeUSDm: 5500, grossTVPI: null, netTVPI: null, netDPI: null, irrToLP: null, strategyType: "Growth" },

  // ═══════════════════════════════════════════════
  // TPG GROWTH (Rise Fund) — Source: NJ Division of Investment TPG Memorandum
  // ═══════════════════════════════════════════════
  { firm: "TPG Growth", fundName: "The Rise Fund", vintage: 2017, fundSizeUSDm: 2100, grossTVPI: null, netTVPI: 1.47, netDPI: 0.5, irrToLP: 0.08, strategyType: "Growth" },

  // ═══════════════════════════════════════════════
  // AMERICAN INDUSTRIAL PARTNERS — Source: NJ Division of Investment (tech buyout/growth)
  // ═══════════════════════════════════════════════
  { firm: "AIP", fundName: "AIP Fund III", vintage: 2000, fundSizeUSDm: 200, grossTVPI: null, netTVPI: 2.4, netDPI: 2.4, irrToLP: 0.416, strategyType: "Growth" },
  { firm: "AIP", fundName: "AIP Fund IV", vintage: 2007, fundSizeUSDm: 500, grossTVPI: null, netTVPI: 2.9, netDPI: 2.1, irrToLP: 0.212, strategyType: "Growth" },
  { firm: "AIP", fundName: "AIP Fund VI", vintage: 2016, fundSizeUSDm: 1800, grossTVPI: null, netTVPI: 3.0, netDPI: 1.0, irrToLP: 0.262, strategyType: "Growth" },

  // ═══════════════════════════════════════════════
  // VISTA EQUITY PARTNERS (tech growth/buyout) — Source: NJ Division of Investment
  // ═══════════════════════════════════════════════
  { firm: "Vista Equity", fundName: "Vista Fund VIII", vintage: 2020, fundSizeUSDm: 7500, grossTVPI: null, netTVPI: 1.3, netDPI: null, irrToLP: 0.10, strategyType: "Growth" },

  // ═══════════════════════════════════════════════
  // PSG EQUITY (software growth) — Source: NJ Division of Investment
  // ═══════════════════════════════════════════════
  { firm: "PSG", fundName: "PSG VI", vintage: 2023, fundSizeUSDm: 4000, grossTVPI: null, netTVPI: null, netDPI: null, irrToLP: null, strategyType: "Growth" },

  // ═══════════════════════════════════════════════
  // BAIN CAPITAL LIFE SCIENCES — Source: NJ Division of Investment Memorandum
  // ═══════════════════════════════════════════════
  { firm: "Bain Capital LS", fundName: "Life Sciences I", vintage: 2016, fundSizeUSDm: 720, grossTVPI: 1.88, netTVPI: 1.60, netDPI: null, irrToLP: 0.28, strategyType: "Growth" },
  { firm: "Bain Capital LS", fundName: "Life Sciences II", vintage: 2019, fundSizeUSDm: 1100, grossTVPI: null, netTVPI: 1.50, netDPI: null, irrToLP: 0.20, strategyType: "Growth" },
  { firm: "Bain Capital LS", fundName: "Life Sciences III", vintage: 2021, fundSizeUSDm: 1900, grossTVPI: null, netTVPI: 1.15, netDPI: null, irrToLP: 0.06, strategyType: "Growth" },
  { firm: "Bain Capital LS", fundName: "Life Sciences IV", vintage: 2024, fundSizeUSDm: 3000, grossTVPI: null, netTVPI: null, netDPI: null, irrToLP: null, strategyType: "Growth" },

  // ═══════════════════════════════════════════════
  // SILVER LAKE (tech growth/buyout) — Source: NJ Division of Investment
  // ═══════════════════════════════════════════════
  { firm: "Silver Lake", fundName: "Silver Lake V", vintage: 2017, fundSizeUSDm: 15000, grossTVPI: null, netTVPI: 1.9, netDPI: 0.6, irrToLP: 0.16, strategyType: "Growth" },
  { firm: "Silver Lake", fundName: "Silver Lake VI", vintage: 2020, fundSizeUSDm: 18000, grossTVPI: null, netTVPI: 1.3, netDPI: 0.1, irrToLP: 0.08, strategyType: "Growth" },
  { firm: "Silver Lake", fundName: "Silver Lake VII", vintage: 2024, fundSizeUSDm: 20000, grossTVPI: null, netTVPI: null, netDPI: null, irrToLP: null, strategyType: "Growth" },

  // ═══════════════════════════════════════════════
  // LIGHTSPEED (CalPERS additions) — Source: CalPERS PEP Fund Performance Review
  // ═══════════════════════════════════════════════
  { firm: "Lightspeed", fundName: "XIV-B (Ignite)", vintage: 2022, fundSizeUSDm: 55, grossTVPI: null, netTVPI: 1.44, netDPI: null, irrToLP: 0.246, strategyType: "Early" },
  { firm: "Lightspeed", fundName: "XV-A (Inception)", vintage: 2025, fundSizeUSDm: 45, grossTVPI: null, netTVPI: null, netDPI: null, irrToLP: -0.021, strategyType: "Early" },
  { firm: "Lightspeed", fundName: "XV-B (Ignite)", vintage: 2025, fundSizeUSDm: 55, grossTVPI: null, netTVPI: null, netDPI: null, irrToLP: null, strategyType: "Early" },

  // ═══════════════════════════════════════════════
  // ALTIMETER (Texas TRS addition) — Source: Texas TRS commitments
  // ═══════════════════════════════════════════════
  { firm: "Altimeter", fundName: "Venture Partners VII", vintage: 2024, fundSizeUSDm: 553, grossTVPI: null, netTVPI: null, netDPI: null, irrToLP: null, strategyType: "Early" },

  // ═══════════════════════════════════════════════
  // RADICAL VENTURES (AI growth) — Source: Texas TRS commitments
  // ═══════════════════════════════════════════════
  { firm: "Radical Ventures", fundName: "Radical Fund IV", vintage: 2024, fundSizeUSDm: 500, grossTVPI: null, netTVPI: null, netDPI: null, irrToLP: null, strategyType: "Growth" },

  // ═══════════════════════════════════════════════
  // MATRIX PARTNERS — Source: Virginia Retirement System
  // ═══════════════════════════════════════════════
  { firm: "Matrix Partners", fundName: "Matrix XII", vintage: 2022, fundSizeUSDm: 450, grossTVPI: null, netTVPI: null, netDPI: null, irrToLP: null, strategyType: "Early" },

  // ═══════════════════════════════════════════════
  // VOLITION CAPITAL — Source: SFERS commitments
  // ═══════════════════════════════════════════════
  { firm: "Volition Capital", fundName: "Volition V", vintage: 2024, fundSizeUSDm: 350, grossTVPI: null, netTVPI: null, netDPI: null, irrToLP: null, strategyType: "Growth" },

  // ═══════════════════════════════════════════════
  // NOTABLE CAPITAL (fka True Ventures spinout) — Source: SFERS
  // ═══════════════════════════════════════════════
  { firm: "Notable Capital", fundName: "Notable (agg)", vintage: 2016, fundSizeUSDm: 273, grossTVPI: null, netTVPI: null, netDPI: null, irrToLP: null, strategyType: "Early" },

  // ═══════════════════════════════════════════════
  // BARINGS NJ EMERGING MANAGER — Source: NJ Division of Investment
  // ═══════════════════════════════════════════════
  { firm: "Barings (NJ EM)", fundName: "NJ Emerging Mgr Program I", vintage: 2020, fundSizeUSDm: 200, grossTVPI: null, netTVPI: 1.52, netDPI: 0.11, irrToLP: 0.179, strategyType: "Early" },

  // ═══════════════════════════════════════════════
  // Y COMBINATOR CONTINUITY (3 funds) — Source: UTIMCO, Newcomer
  // ═══════════════════════════════════════════════
  { firm: "Y Combinator", fundName: "YC Continuity I", vintage: 2015, fundSizeUSDm: 700, grossTVPI: null, netTVPI: null, netDPI: null, irrToLP: null, strategyType: "Growth" },
  { firm: "Y Combinator", fundName: "YC Continuity II", vintage: 2018, fundSizeUSDm: 3000, grossTVPI: null, netTVPI: null, netDPI: null, irrToLP: null, strategyType: "Growth" },
  { firm: "Y Combinator", fundName: "YC Continuity III", vintage: 2020, fundSizeUSDm: 2000, grossTVPI: null, netTVPI: null, netDPI: null, irrToLP: null, strategyType: "Growth" },

  // ═══════════════════════════════════════════════
  // TRUE VENTURES (4 funds) — Source: UTIMCO, Newcomer
  // ═══════════════════════════════════════════════
  { firm: "True Ventures", fundName: "True V", vintage: 2015, fundSizeUSDm: 285, grossTVPI: null, netTVPI: null, netDPI: null, irrToLP: null, strategyType: "Early" },
  { firm: "True Ventures", fundName: "True VI", vintage: 2018, fundSizeUSDm: 405, grossTVPI: null, netTVPI: null, netDPI: null, irrToLP: null, strategyType: "Early" },
  { firm: "True Ventures", fundName: "True VII", vintage: 2020, fundSizeUSDm: 500, grossTVPI: null, netTVPI: null, netDPI: null, irrToLP: null, strategyType: "Early" },
  { firm: "True Ventures", fundName: "True VIII", vintage: 2023, fundSizeUSDm: 570, grossTVPI: null, netTVPI: null, netDPI: null, irrToLP: null, strategyType: "Early" },

  // ═══════════════════════════════════════════════
  // PEAK XV / SEQUOIA INDIA (3 funds) — Source: UTIMCO, Newcomer
  // ═══════════════════════════════════════════════
  { firm: "Peak XV", fundName: "SEA Growth II", vintage: 2020, fundSizeUSDm: 825, grossTVPI: null, netTVPI: null, netDPI: null, irrToLP: null, strategyType: "Growth" },
  { firm: "Peak XV", fundName: "Growth III", vintage: 2022, fundSizeUSDm: 2850, grossTVPI: null, netTVPI: null, netDPI: null, irrToLP: null, strategyType: "Growth" },
  { firm: "Peak XV", fundName: "Principals IV", vintage: 2022, fundSizeUSDm: 400, grossTVPI: null, netTVPI: null, netDPI: null, irrToLP: null, strategyType: "Early" },

  // ═══════════════════════════════════════════════
  // UPFRONT VENTURES (3 funds) — Source: UTIMCO, Newcomer
  // ═══════════════════════════════════════════════
  { firm: "Upfront Ventures", fundName: "Upfront V", vintage: 2015, fundSizeUSDm: 280, grossTVPI: null, netTVPI: null, netDPI: null, irrToLP: null, strategyType: "Early" },
  { firm: "Upfront Ventures", fundName: "Upfront VI", vintage: 2018, fundSizeUSDm: 400, grossTVPI: null, netTVPI: null, netDPI: null, irrToLP: null, strategyType: "Early" },
  { firm: "Upfront Ventures", fundName: "Upfront VII", vintage: 2021, fundSizeUSDm: 400, grossTVPI: null, netTVPI: null, netDPI: null, irrToLP: null, strategyType: "Early" },

  // ═══════════════════════════════════════════════
  // MENLO VENTURES (additional WSIB funds) — Source: WSIB quarterly reports
  // ═══════════════════════════════════════════════
  { firm: "Menlo Ventures", fundName: "Menlo XVI", vintage: 2019, fundSizeUSDm: 500, grossTVPI: null, netTVPI: null, netDPI: null, irrToLP: null, strategyType: "Core" },
  { firm: "Menlo Ventures", fundName: "Menlo XVII", vintage: 2024, fundSizeUSDm: 175, grossTVPI: null, netTVPI: null, netDPI: null, irrToLP: null, strategyType: "Early" },
  { firm: "Menlo Ventures", fundName: "Menlo Inflection IV", vintage: 2024, fundSizeUSDm: 225, grossTVPI: null, netTVPI: null, netDPI: null, irrToLP: null, strategyType: "Growth" },

  // ═══════════════════════════════════════════════
  // SEQUOIA (additional — Global Growth) — Source: WSIB, CalPERS
  // ═══════════════════════════════════════════════
  { firm: "Sequoia", fundName: "Global Growth Fund III", vintage: 2018, fundSizeUSDm: 8000, grossTVPI: null, netTVPI: 1.7, netDPI: null, irrToLP: 0.16, strategyType: "Growth" },

  // ═══════════════════════════════════════════════════════════════
  // WSIB DATA — Source: Washington State Investment Board Q3 2024
  // As of Sept 30, 2024 (one-quarter lag). Calculated by Hamilton Lane.
  // ═══════════════════════════════════════════════════════════════

  // ── WARBURG PINCUS (14 funds) ──
  { firm: "Warburg Pincus", fundName: "WP Ventures", vintage: 1994, fundSizeUSDm: 100, grossTVPI: null, netTVPI: 5.1, netDPI: 5.1, irrToLP: 0.482, strategyType: "Growth" },
  { firm: "Warburg Pincus", fundName: "WP Equity Partners", vintage: 1998, fundSizeUSDm: 400, grossTVPI: null, netTVPI: 1.7, netDPI: 1.7, irrToLP: 0.103, strategyType: "Growth" },
  { firm: "Warburg Pincus", fundName: "WP Intl Partners", vintage: 2000, fundSizeUSDm: 100, grossTVPI: null, netTVPI: 1.8, netDPI: 1.8, irrToLP: 0.105, strategyType: "Growth" },
  { firm: "Warburg Pincus", fundName: "WP PE VIII", vintage: 2001, fundSizeUSDm: 300, grossTVPI: null, netTVPI: 2.2, netDPI: 2.2, irrToLP: 0.145, strategyType: "Growth" },
  { firm: "Warburg Pincus", fundName: "WP PE IX", vintage: 2005, fundSizeUSDm: 700, grossTVPI: null, netTVPI: 1.7, netDPI: 1.7, irrToLP: 0.096, strategyType: "Growth" },
  { firm: "Warburg Pincus", fundName: "WP PE X", vintage: 2007, fundSizeUSDm: 750, grossTVPI: null, netTVPI: 1.8, netDPI: 1.8, irrToLP: 0.095, strategyType: "Growth" },
  { firm: "Warburg Pincus", fundName: "WP PE XI", vintage: 2012, fundSizeUSDm: 750, grossTVPI: null, netTVPI: 1.8, netDPI: 1.8, irrToLP: 0.120, strategyType: "Growth" },
  { firm: "Warburg Pincus", fundName: "WP PE XII", vintage: 2015, fundSizeUSDm: 700, grossTVPI: null, netTVPI: 2.1, netDPI: 1.4, irrToLP: 0.165, strategyType: "Growth" },
  { firm: "Warburg Pincus", fundName: "WP China", vintage: 2016, fundSizeUSDm: 190, grossTVPI: null, netTVPI: 1.3, netDPI: 0.6, irrToLP: 0.058, strategyType: "Growth" },
  { firm: "Warburg Pincus", fundName: "WP Financial Sector I", vintage: 2018, fundSizeUSDm: 200, grossTVPI: null, netTVPI: 2.0, netDPI: 1.2, irrToLP: 0.186, strategyType: "Growth" },
  { firm: "Warburg Pincus", fundName: "WP Global Growth", vintage: 2019, fundSizeUSDm: 750, grossTVPI: null, netTVPI: 1.6, netDPI: 0.5, irrToLP: 0.147, strategyType: "Growth" },
  { firm: "Warburg Pincus", fundName: "WP China-SEA II", vintage: 2019, fundSizeUSDm: 300, grossTVPI: null, netTVPI: 1.1, netDPI: 0.2, irrToLP: 0.042, strategyType: "Growth" },
  { firm: "Warburg Pincus", fundName: "WP Financial Sector II", vintage: 2021, fundSizeUSDm: 200, grossTVPI: null, netTVPI: 1.5, netDPI: 0.3, irrToLP: 0.234, strategyType: "Growth" },
  { firm: "Warburg Pincus", fundName: "WP Global Growth 14", vintage: 2022, fundSizeUSDm: 600, grossTVPI: null, netTVPI: 1.2, netDPI: null, irrToLP: 0.16, strategyType: "Growth" },

  // ── TA ASSOCIATES (3 funds — WSIB) ──
  { firm: "TA Associates", fundName: "TA XI", vintage: 2010, fundSizeUSDm: 150, grossTVPI: null, netTVPI: 3.6, netDPI: 3.6, irrToLP: 0.267, strategyType: "Growth" },
  { firm: "TA Associates", fundName: "TA XII", vintage: 2016, fundSizeUSDm: 250, grossTVPI: null, netTVPI: 2.8, netDPI: 1.8, irrToLP: 0.349, strategyType: "Growth" },
  { firm: "TA Associates", fundName: "TA XIII", vintage: 2019, fundSizeUSDm: 355, grossTVPI: null, netTVPI: 1.8, netDPI: 0.5, irrToLP: 0.238, strategyType: "Growth" },

  // ── INSIGHT PARTNERS (1 additional — WSIB) ──
  { firm: "Insight", fundName: "Partners VIII", vintage: 2013, fundSizeUSDm: 150, grossTVPI: null, netTVPI: 3.2, netDPI: 2.8, irrToLP: 0.207, strategyType: "Growth" },

  // ── MENLO VENTURES (WSIB — 16 historic funds with exact data) ──
  { firm: "Menlo Ventures", fundName: "Menlo Partners I", vintage: 1981, fundSizeUSDm: 3, grossTVPI: null, netTVPI: 1.3, netDPI: 1.3, irrToLP: 0.061, strategyType: "Early" },
  { firm: "Menlo Ventures", fundName: "Menlo III", vintage: 1983, fundSizeUSDm: 20, grossTVPI: null, netTVPI: 1.6, netDPI: 1.6, irrToLP: 0.072, strategyType: "Early" },
  { firm: "Menlo Ventures", fundName: "Menlo IV", vintage: 1988, fundSizeUSDm: 25, grossTVPI: null, netTVPI: 5.1, netDPI: 5.1, irrToLP: 0.422, strategyType: "Early" },
  { firm: "Menlo Ventures", fundName: "Menlo VI", vintage: 1993, fundSizeUSDm: 2.6, grossTVPI: null, netTVPI: 3.1, netDPI: 3.1, irrToLP: 0.408, strategyType: "Early" },
  { firm: "Menlo Ventures", fundName: "Menlo VII", vintage: 1997, fundSizeUSDm: 25, grossTVPI: null, netTVPI: 4.7, netDPI: 4.7, irrToLP: 1.356, strategyType: "Early" },
  { firm: "Menlo Ventures", fundName: "Menlo VIII", vintage: 1999, fundSizeUSDm: 50, grossTVPI: null, netTVPI: 0.5, netDPI: 0.5, irrToLP: -0.089, strategyType: "Early" },
  { firm: "Menlo Ventures", fundName: "Menlo IX", vintage: 2001, fundSizeUSDm: 200, grossTVPI: null, netTVPI: 1.0, netDPI: 1.0, irrToLP: 0.003, strategyType: "Core" },
  { firm: "Menlo Ventures", fundName: "Menlo X", vintage: 2006, fundSizeUSDm: 150, grossTVPI: null, netTVPI: 2.1, netDPI: 2.1, irrToLP: 0.105, strategyType: "Core" },
  { firm: "Menlo Ventures", fundName: "Menlo XIV", vintage: 2017, fundSizeUSDm: 100, grossTVPI: null, netTVPI: 2.4, netDPI: 0.8, irrToLP: 0.214, strategyType: "Core" },
  { firm: "Menlo Ventures", fundName: "Menlo Inflection I", vintage: 2016, fundSizeUSDm: 131, grossTVPI: null, netTVPI: 2.8, netDPI: 1.5, irrToLP: 0.173, strategyType: "Growth" },
  { firm: "Menlo Ventures", fundName: "Menlo Inflection II", vintage: 2019, fundSizeUSDm: 200, grossTVPI: null, netTVPI: 1.6, netDPI: 0.4, irrToLP: 0.135, strategyType: "Growth" },
  { firm: "Menlo Ventures", fundName: "Menlo Inflection III", vintage: 2022, fundSizeUSDm: 250, grossTVPI: null, netTVPI: 1.0, netDPI: null, irrToLP: -0.028, strategyType: "Growth" },
  { firm: "Menlo Ventures", fundName: "Menlo Olympic I", vintage: 2023, fundSizeUSDm: 225, grossTVPI: null, netTVPI: 0.9, netDPI: null, irrToLP: -0.109, strategyType: "Core" },

  // ── KHOSLA VENTURES (10 funds — NJ Pension) ──
  { firm: "Khosla", fundName: "Khosla Ventures IV", vintage: 2011, fundSizeUSDm: 349, grossTVPI: null, netTVPI: 4.6, netDPI: 3.8, irrToLP: 0.23, strategyType: "Early" },
  { firm: "Khosla", fundName: "Khosla Ventures V", vintage: 2014, fundSizeUSDm: 400, grossTVPI: null, netTVPI: 2.8, netDPI: 1.5, irrToLP: 0.18, strategyType: "Early" },
  { firm: "Khosla", fundName: "Khosla Ventures VI", vintage: 2017, fundSizeUSDm: 400, grossTVPI: null, netTVPI: 2.2, netDPI: 0.6, irrToLP: 0.16, strategyType: "Early" },
  { firm: "Khosla", fundName: "Khosla Ventures VII", vintage: 2020, fundSizeUSDm: 625, grossTVPI: null, netTVPI: 1.6, netDPI: 0.2, irrToLP: 0.13, strategyType: "Core" },
  { firm: "Khosla", fundName: "Khosla Ventures VIII", vintage: 2022, fundSizeUSDm: 700, grossTVPI: null, netTVPI: 1.2, netDPI: null, irrToLP: null, strategyType: "Core" },
  { firm: "Khosla", fundName: "Khosla Seed B", vintage: 2014, fundSizeUSDm: 125, grossTVPI: null, netTVPI: 3.5, netDPI: 2.2, irrToLP: 0.25, strategyType: "Early" },
  { firm: "Khosla", fundName: "Khosla Seed C", vintage: 2017, fundSizeUSDm: 150, grossTVPI: null, netTVPI: 2.1, netDPI: 0.5, irrToLP: 0.15, strategyType: "Early" },
  { firm: "Khosla", fundName: "Khosla Seed D", vintage: 2019, fundSizeUSDm: 200, grossTVPI: null, netTVPI: 1.8, netDPI: 0.3, irrToLP: 0.18, strategyType: "Early" },
  { firm: "Khosla", fundName: "Khosla Seed E", vintage: 2021, fundSizeUSDm: 250, grossTVPI: null, netTVPI: 1.3, netDPI: null, irrToLP: 0.06, strategyType: "Early" },
  { firm: "Khosla", fundName: "Khosla Seed F", vintage: 2023, fundSizeUSDm: 300, grossTVPI: null, netTVPI: 1.2, netDPI: null, irrToLP: 0.357, strategyType: "Early" },

  // ── TPG GROWTH (3 additional WSIB) ──
  { firm: "TPG Growth", fundName: "TPG STAR", vintage: 2007, fundSizeUSDm: 100, grossTVPI: null, netTVPI: 1.3, netDPI: 1.3, irrToLP: 0.062, strategyType: "Growth" },
  { firm: "TPG Growth", fundName: "TPG Growth VI", vintage: 2024, fundSizeUSDm: 400, grossTVPI: null, netTVPI: 1.2, netDPI: null, irrToLP: 0.178, strategyType: "Growth" },
  { firm: "TPG Growth", fundName: "Rise Fund III", vintage: 2023, fundSizeUSDm: 250, grossTVPI: null, netTVPI: 1.2, netDPI: null, irrToLP: 0.242, strategyType: "Growth" },

  // ── PERMIRA (update with WSIB data) ──
  { firm: "Permira", fundName: "Growth Opp II (WSIB)", vintage: 2022, fundSizeUSDm: 200, grossTVPI: null, netTVPI: 0.9, netDPI: null, irrToLP: -0.051, strategyType: "Growth" },

  // ── CENTURIUM CAPITAL (WSIB) ──
  { firm: "Centurium", fundName: "Centurium Capital 2018", vintage: 2019, fundSizeUSDm: 200, grossTVPI: null, netTVPI: 1.4, netDPI: 0.5, irrToLP: 0.081, strategyType: "Growth" },

  // ── FOUNTAINVEST (3 funds — WSIB) ──
  { firm: "FountainVest", fundName: "China Growth I", vintage: 2008, fundSizeUSDm: 50, grossTVPI: null, netTVPI: 1.4, netDPI: 1.4, irrToLP: 0.067, strategyType: "Growth" },
  { firm: "FountainVest", fundName: "China Growth II", vintage: 2013, fundSizeUSDm: 150, grossTVPI: null, netTVPI: 1.4, netDPI: 1.0, irrToLP: 0.117, strategyType: "Growth" },
  { firm: "FountainVest", fundName: "China Partners III", vintage: 2017, fundSizeUSDm: 200, grossTVPI: null, netTVPI: 1.3, netDPI: 0.4, irrToLP: 0.075, strategyType: "Growth" },

  // ── SIXTH STREET (WSIB) ──
  { firm: "Sixth Street", fundName: "Growth Partners II", vintage: 2022, fundSizeUSDm: 200, grossTVPI: null, netTVPI: 1.1, netDPI: null, irrToLP: 0.078, strategyType: "Growth" },

  // ── TOWERBROOK (WSIB) ──
  { firm: "TowerBrook", fundName: "Delta Onshore", vintage: 2023, fundSizeUSDm: 100, grossTVPI: null, netTVPI: 0.8, netDPI: null, irrToLP: -0.256, strategyType: "Growth" },

  // ── WSIB VENTURE CAPITAL FUNDS ──

  // Austin Ventures
  { firm: "Austin Ventures", fundName: "AV IV", vintage: 1994, fundSizeUSDm: 15, grossTVPI: null, netTVPI: 8.4, netDPI: 8.4, irrToLP: 0.732, strategyType: "Early" },
  { firm: "Austin Ventures", fundName: "AV V", vintage: 1997, fundSizeUSDm: 15, grossTVPI: null, netTVPI: 2.0, netDPI: 2.0, irrToLP: 0.319, strategyType: "Early" },
  { firm: "Austin Ventures", fundName: "AV VI", vintage: 1998, fundSizeUSDm: 24, grossTVPI: null, netTVPI: 0.6, netDPI: 0.6, irrToLP: -0.079, strategyType: "Early" },
  { firm: "Austin Ventures", fundName: "AV VII", vintage: 1999, fundSizeUSDm: 74, grossTVPI: null, netTVPI: 0.8, netDPI: 0.8, irrToLP: -0.028, strategyType: "Early" },
  { firm: "Austin Ventures", fundName: "AV VIII", vintage: 2001, fundSizeUSDm: 66, grossTVPI: null, netTVPI: 1.6, netDPI: 1.6, irrToLP: 0.068, strategyType: "Early" },

  // Oak Investment Partners
  { firm: "Oak Investment", fundName: "Oak VIII", vintage: 1998, fundSizeUSDm: 20, grossTVPI: null, netTVPI: 1.8, netDPI: 1.8, irrToLP: 0.553, strategyType: "Early" },
  { firm: "Oak Investment", fundName: "Oak IX", vintage: 1999, fundSizeUSDm: 60, grossTVPI: null, netTVPI: 0.7, netDPI: 0.7, irrToLP: -0.067, strategyType: "Early" },
  { firm: "Oak Investment", fundName: "Oak X", vintage: 2001, fundSizeUSDm: 100, grossTVPI: null, netTVPI: 1.3, netDPI: 1.3, irrToLP: 0.035, strategyType: "Core" },
  { firm: "Oak Investment", fundName: "Oak XI", vintage: 2004, fundSizeUSDm: 100, grossTVPI: null, netTVPI: 0.8, netDPI: 0.8, irrToLP: -0.025, strategyType: "Core" },

  // InterWest Partners
  { firm: "InterWest", fundName: "InterWest VI", vintage: 1997, fundSizeUSDm: 10, grossTVPI: null, netTVPI: 3.0, netDPI: 3.0, irrToLP: 0.488, strategyType: "Early" },

  // USVP (US Venture Partners)
  { firm: "USVP", fundName: "USVP V", vintage: 1996, fundSizeUSDm: 10, grossTVPI: null, netTVPI: 2.3, netDPI: 2.3, irrToLP: 0.262, strategyType: "Early" },
  { firm: "USVP", fundName: "USVP VI", vintage: 1999, fundSizeUSDm: 15.5, grossTVPI: null, netTVPI: 1.2, netDPI: 1.2, irrToLP: 0.043, strategyType: "Early" },
  { firm: "USVP", fundName: "USVP VII", vintage: 2000, fundSizeUSDm: 39, grossTVPI: null, netTVPI: 0.7, netDPI: 0.7, irrToLP: -0.025, strategyType: "Early" },
  { firm: "USVP", fundName: "USVP VIII", vintage: 2001, fundSizeUSDm: 54, grossTVPI: null, netTVPI: 1.3, netDPI: 1.3, irrToLP: 0.035, strategyType: "Core" },

  // Essex Woodlands
  { firm: "Essex Woodlands", fundName: "Health Ventures V", vintage: 2000, fundSizeUSDm: 25, grossTVPI: null, netTVPI: 1.2, netDPI: 1.2, irrToLP: 0.030, strategyType: "Early" },
  { firm: "Essex Woodlands", fundName: "Health Ventures VI", vintage: 2004, fundSizeUSDm: 25, grossTVPI: null, netTVPI: 1.4, netDPI: 1.4, irrToLP: 0.035, strategyType: "Early" },

  // Frazier Healthcare
  { firm: "Frazier Healthcare", fundName: "Frazier II", vintage: 1996, fundSizeUSDm: 10, grossTVPI: null, netTVPI: 1.5, netDPI: 1.5, irrToLP: 0.069, strategyType: "Early" },
  { firm: "Frazier Healthcare", fundName: "Frazier III", vintage: 1998, fundSizeUSDm: 40, grossTVPI: null, netTVPI: 0.5, netDPI: 0.5, irrToLP: -0.111, strategyType: "Early" },
  { firm: "Frazier Healthcare", fundName: "Frazier IV", vintage: 2001, fundSizeUSDm: 40, grossTVPI: null, netTVPI: 1.0, netDPI: 1.0, irrToLP: 0.007, strategyType: "Core" },

  // OVP Venture Partners
  { firm: "OVP", fundName: "OVP VI", vintage: 2001, fundSizeUSDm: 40, grossTVPI: null, netTVPI: 0.3, netDPI: 0.3, irrToLP: -0.156, strategyType: "Early" },
  { firm: "OVP", fundName: "OVP VII", vintage: 2006, fundSizeUSDm: 40, grossTVPI: null, netTVPI: 3.2, netDPI: 3.2, irrToLP: 0.089, strategyType: "Early" },

  // Sprout Group / DLJ
  { firm: "Sprout Group", fundName: "Sprout VII", vintage: 1995, fundSizeUSDm: 18, grossTVPI: null, netTVPI: 2.7, netDPI: 2.7, irrToLP: 0.215, strategyType: "Early" },
  { firm: "Sprout Group", fundName: "Sprout VIII", vintage: 1998, fundSizeUSDm: 55, grossTVPI: null, netTVPI: 0.9, netDPI: 0.9, irrToLP: -0.009, strategyType: "Early" },
  { firm: "Sprout Group", fundName: "Sprout IX", vintage: 2000, fundSizeUSDm: 75, grossTVPI: null, netTVPI: 1.4, netDPI: 1.4, irrToLP: 0.057, strategyType: "Core" },

  // Evergreen Ventures (WSIB)
  { firm: "Evergreen", fundName: "Evergreen I", vintage: 1984, fundSizeUSDm: 25, grossTVPI: null, netTVPI: 2.8, netDPI: 2.8, irrToLP: 0.126, strategyType: "Early" },
  { firm: "Evergreen", fundName: "Evergreen III", vintage: 1987, fundSizeUSDm: 25, grossTVPI: null, netTVPI: 1.5, netDPI: 1.5, irrToLP: 0.078, strategyType: "Early" },

  // NEA (WSIB — older funds)
  { firm: "NEA", fundName: "NEA 10", vintage: 2000, fundSizeUSDm: 110, grossTVPI: null, netTVPI: 1.2, netDPI: 1.2, irrToLP: 0.023, strategyType: "Core" },
  { firm: "NEA", fundName: "NEA 12", vintage: 2006, fundSizeUSDm: 50, grossTVPI: null, netTVPI: 1.4, netDPI: 1.4, irrToLP: 0.064, strategyType: "Core" },

  // General Catalyst (WSIB)
  { firm: "General Catalyst", fundName: "GC XII", vintage: 2024, fundSizeUSDm: 200, grossTVPI: null, netTVPI: 1.1, netDPI: null, irrToLP: 0.138, strategyType: "Core" },

  // ═══════════════════════════════════════════════════════
  // NEW ENTRIES — Added from OPERF Q1 2025 & WSIB Sep 2024
  // ═══════════════════════════════════════════════════════

  // ── OPERF Q1 2025: NEW VC-RELEVANT FUNDS ──
  // Source: Oregon Public Employees Retirement Fund, Private Equity Portfolio, As of March 31, 2025

  // Union Square Ventures (OPERF — additional funds not in dataset)
  { firm: "USV", fundName: "USV 2021", vintage: 2021, fundSizeUSDm: 15, grossTVPI: null, netTVPI: 0.88, netDPI: null, irrToLP: -0.048, strategyType: "Early" },
  { firm: "USV", fundName: "USV 2022", vintage: 2022, fundSizeUSDm: 15, grossTVPI: null, netTVPI: 1.15, netDPI: null, irrToLP: null, strategyType: "Early" },
  { firm: "USV", fundName: "USV 2024", vintage: 2024, fundSizeUSDm: 13, grossTVPI: null, netTVPI: 0.94, netDPI: null, irrToLP: null, strategyType: "Early" },
  { firm: "USV", fundName: "USV Climate 2021", vintage: 2020, fundSizeUSDm: 15, grossTVPI: null, netTVPI: 1.13, netDPI: null, irrToLP: 0.047, strategyType: "Early" },
  { firm: "USV", fundName: "USV Climate 2022", vintage: 2022, fundSizeUSDm: 15, grossTVPI: null, netTVPI: 0.85, netDPI: null, irrToLP: null, strategyType: "Early" },
  { firm: "USV", fundName: "USV Opportunity 2019", vintage: 2019, fundSizeUSDm: 18.8, grossTVPI: null, netTVPI: 0.96, netDPI: null, irrToLP: -0.010, strategyType: "Growth" },
  { firm: "USV", fundName: "USV Opportunity 2022", vintage: 2022, fundSizeUSDm: 18.8, grossTVPI: null, netTVPI: 1.15, netDPI: null, irrToLP: null, strategyType: "Growth" },

  // Mayfield (OPERF — additional funds)
  { firm: "Mayfield", fundName: "Mayfield Select II", vintage: 2021, fundSizeUSDm: 20, grossTVPI: null, netTVPI: 1.37, netDPI: null, irrToLP: 0.166, strategyType: "Growth" },
  { firm: "Mayfield", fundName: "Mayfield Select III", vintage: 2023, fundSizeUSDm: 20, grossTVPI: null, netTVPI: 0.00, netDPI: null, irrToLP: null, strategyType: "Growth" },

  // GGV Capital / Notable Capital (OPERF — additional funds)
  { firm: "GGV Capital", fundName: "GGV Capital IV", vintage: 2011, fundSizeUSDm: 50, grossTVPI: null, netTVPI: 1.72, netDPI: null, irrToLP: 0.084, strategyType: "Growth" },
  { firm: "GGV Capital", fundName: "GGV Capital IX", vintage: 2024, fundSizeUSDm: 90, grossTVPI: null, netTVPI: 1.30, netDPI: null, irrToLP: null, strategyType: "Growth" },
  { firm: "GGV Capital", fundName: "GGV Capital IX Plus", vintage: 2023, fundSizeUSDm: 22.5, grossTVPI: null, netTVPI: 1.00, netDPI: null, irrToLP: null, strategyType: "Growth" },
  { firm: "GGV Capital", fundName: "GGV Capital Select", vintage: 2015, fundSizeUSDm: 50, grossTVPI: null, netTVPI: 1.20, netDPI: null, irrToLP: 0.030, strategyType: "Growth" },
  { firm: "GGV Capital", fundName: "GGV Capital V", vintage: 2014, fundSizeUSDm: 50, grossTVPI: null, netTVPI: 4.83, netDPI: null, irrToLP: 0.241, strategyType: "Growth" },
  { firm: "GGV Capital", fundName: "GGV Capital VI", vintage: 2016, fundSizeUSDm: 45, grossTVPI: null, netTVPI: 1.63, netDPI: null, irrToLP: 0.084, strategyType: "Growth" },
  { firm: "GGV Capital", fundName: "GGV Capital VI Plus", vintage: 2018, fundSizeUSDm: 15, grossTVPI: null, netTVPI: 1.88, netDPI: null, irrToLP: 0.157, strategyType: "Growth" },
  { firm: "GGV Capital", fundName: "GGV Capital VII", vintage: 2019, fundSizeUSDm: 64, grossTVPI: null, netTVPI: 1.09, netDPI: null, irrToLP: 0.018, strategyType: "Growth" },
  { firm: "GGV Capital", fundName: "GGV Capital VII Plus", vintage: 2019, fundSizeUSDm: 16, grossTVPI: null, netTVPI: 1.19, netDPI: null, irrToLP: 0.036, strategyType: "Growth" },
  { firm: "GGV Capital", fundName: "GGV Capital VIII", vintage: 2021, fundSizeUSDm: 72, grossTVPI: null, netTVPI: 1.05, netDPI: null, irrToLP: 0.018, strategyType: "Growth" },
  { firm: "GGV Capital", fundName: "GGV Capital VIII Plus", vintage: 2021, fundSizeUSDm: 18, grossTVPI: null, netTVPI: 1.07, netDPI: null, irrToLP: 0.028, strategyType: "Growth" },
  { firm: "GGV Capital", fundName: "GGV Discovery III", vintage: 2021, fundSizeUSDm: 30, grossTVPI: null, netTVPI: 1.22, netDPI: null, irrToLP: 0.078, strategyType: "Early" },
  { firm: "GGV Capital", fundName: "GGV Discovery IV Asia", vintage: 2024, fundSizeUSDm: 18.8, grossTVPI: null, netTVPI: 0.82, netDPI: null, irrToLP: null, strategyType: "Early" },
  { firm: "GGV Capital", fundName: "GGV Discovery IV US", vintage: 2024, fundSizeUSDm: 18.8, grossTVPI: null, netTVPI: 0.94, netDPI: null, irrToLP: null, strategyType: "Early" },

  // TCV (OPERF — additional funds)
  { firm: "TCV", fundName: "TCV V", vintage: 2006, fundSizeUSDm: 25, grossTVPI: null, netTVPI: 1.58, netDPI: null, irrToLP: 0.124, strategyType: "Growth" },
  { firm: "TCV", fundName: "TCV VI", vintage: 2006, fundSizeUSDm: 25, grossTVPI: null, netTVPI: 1.58, netDPI: null, irrToLP: 0.124, strategyType: "Growth" },
  { firm: "TCV", fundName: "TCV VII", vintage: 2007, fundSizeUSDm: 75, grossTVPI: null, netTVPI: 2.93, netDPI: null, irrToLP: 0.227, strategyType: "Growth" },

  // ── WSIB Sep 2024: NEW VC-RELEVANT FUNDS ──
  // Source: Washington State Investment Board, Private Equity Portfolio, As of September 30, 2024
  // Note: WSIB reports "Total Value Multiple" (net TVPI) and "Net Since Inception IRR"
  // Fund sizes shown are WSIB commitment amounts (not total fund size)

  // Madrona Venture Group (WSIB — additional funds)
  { firm: "Madrona", fundName: "Madrona VIII", vintage: 2021, fundSizeUSDm: 347, grossTVPI: null, netTVPI: 1.30, netDPI: null, irrToLP: 0.133, strategyType: "Early" },

  // Menlo Ventures (WSIB — additional OPERF vintages)
  // Already covered extensively — checking for any missing from WSIB:
  // Menlo Ventures IV, VI, VII, VIII, IX through XVII — most already in dataset

  // Matrix Partners (WSIB)
  { firm: "Matrix Partners", fundName: "Matrix XII", vintage: 2019, fundSizeUSDm: 450, grossTVPI: null, netTVPI: 1.88, netDPI: null, irrToLP: 0.140, strategyType: "Early" },

  // Sequoia Capital (OPERF — additional Sequoia-related: HongShan, Peak XV)
  // Already have HongShan Seed Fund III and Venture Fund IX

  // Focus Ventures (OPERF)
  { firm: "Focus Ventures", fundName: "Focus Ventures III", vintage: 2006, fundSizeUSDm: 40, grossTVPI: null, netTVPI: 0.54, netDPI: 0.54, irrToLP: -0.100, strategyType: "Early" },

  // Sofinnova Venture Partners (OPERF)
  { firm: "Sofinnova", fundName: "Sofinnova VII", vintage: 2007, fundSizeUSDm: 25, grossTVPI: null, netTVPI: 1.71, netDPI: 1.71, irrToLP: 0.147, strategyType: "Early" },
  { firm: "Sofinnova", fundName: "Sofinnova VIII", vintage: 2011, fundSizeUSDm: 50, grossTVPI: null, netTVPI: 1.66, netDPI: 1.66, irrToLP: 0.219, strategyType: "Early" },

  // VantagePoint Venture Partners (OPERF)
  { firm: "VantagePoint", fundName: "VantagePoint VP IV", vintage: 2000, fundSizeUSDm: 50, grossTVPI: null, netTVPI: 0.95, netDPI: 0.95, irrToLP: -0.007, strategyType: "Early" },
  { firm: "VantagePoint", fundName: "VantagePoint Cleantech II", vintage: 2008, fundSizeUSDm: 50, grossTVPI: null, netTVPI: 0.24, netDPI: null, irrToLP: -0.174, strategyType: "Early" },
  { firm: "VantagePoint", fundName: "VantagePoint 2006", vintage: 2006, fundSizeUSDm: 50, grossTVPI: null, netTVPI: 0.33, netDPI: null, irrToLP: -0.125, strategyType: "Early" },

  // Olympic Venture Partners (OPERF)
  { firm: "Olympic Venture", fundName: "Olympic III", vintage: 1994, fundSizeUSDm: 10, grossTVPI: null, netTVPI: 2.22, netDPI: 2.22, irrToLP: 0.271, strategyType: "Early" },
  { firm: "Olympic Venture", fundName: "Olympic IV", vintage: 1997, fundSizeUSDm: 14, grossTVPI: null, netTVPI: 2.62, netDPI: 2.62, irrToLP: 0.639, strategyType: "Early" },
  { firm: "Olympic Venture", fundName: "Olympic V", vintage: 2000, fundSizeUSDm: 25, grossTVPI: null, netTVPI: 0.27, netDPI: 0.27, irrToLP: -0.167, strategyType: "Early" },

  // ── WSIB Sep 2024: VENTURE CAPITAL FUNDS (pages 5-6 screenshots) ──

  // Mohr Davidow Ventures (WSIB)
  { firm: "Mohr Davidow", fundName: "MDV VII", vintage: 2001, fundSizeUSDm: 25, grossTVPI: null, netTVPI: 0.89, netDPI: 0.89, irrToLP: -0.015, strategyType: "Early" },

  // Mobius Venture Capital (WSIB — notable for early VC vintage data)
  { firm: "Mobius Venture", fundName: "Mobius VI", vintage: 2000, fundSizeUSDm: 25, grossTVPI: null, netTVPI: 0.57, netDPI: 0.57, irrToLP: -0.091, strategyType: "Early" },

  // Morgan Stanley Venture Partners (WSIB)
  { firm: "Morgan Stanley VP", fundName: "MSVP III", vintage: 1997, fundSizeUSDm: 100, grossTVPI: null, netTVPI: 1.20, netDPI: 1.20, irrToLP: null, strategyType: "Early" },

  // Doll Capital Management / DCM (WSIB)
  // Note: DCM is a venture firm, not to be confused with DCVC
  { firm: "DCM", fundName: "DCM IV", vintage: 2004, fundSizeUSDm: 15, grossTVPI: null, netTVPI: 1.48, netDPI: 1.48, irrToLP: 0.095, strategyType: "Early" },

  // New Enterprise Associates (WSIB — additional older funds)
  { firm: "NEA", fundName: "NEA Seed II", vintage: 2013, fundSizeUSDm: 20, grossTVPI: null, netTVPI: 2.50, netDPI: 1.80, irrToLP: 0.200, strategyType: "Early" },
  { firm: "NEA", fundName: "NEA Venture Growth", vintage: 2018, fundSizeUSDm: 35, grossTVPI: null, netTVPI: 1.40, netDPI: null, irrToLP: 0.090, strategyType: "Growth" },

  // Paragon Venture Partners (WSIB)
  { firm: "Paragon Ventures", fundName: "Paragon V", vintage: 1998, fundSizeUSDm: 6, grossTVPI: null, netTVPI: 3.05, netDPI: 3.05, irrToLP: 0.317, strategyType: "Early" },

  // ── WSIB Sep 2024: ADDITIONAL VC FUNDS (pages 5-6 screenshots) ──

  // Maveron (WSIB — Seattle VC)
  { firm: "Maveron", fundName: "Maveron III", vintage: 2006, fundSizeUSDm: 25, grossTVPI: null, netTVPI: 1.19, netDPI: 1.19, irrToLP: 0.028, strategyType: "Early" },
  { firm: "Maveron", fundName: "Maveron IV", vintage: 2012, fundSizeUSDm: 111, grossTVPI: null, netTVPI: 2.05, netDPI: null, irrToLP: 0.120, strategyType: "Early" },

  // Ignition Partners (WSIB — Seattle VC)
  { firm: "Ignition Partners", fundName: "Ignition II", vintage: 2001, fundSizeUSDm: 25, grossTVPI: null, netTVPI: 1.09, netDPI: 1.09, irrToLP: 0.010, strategyType: "Early" },
  { firm: "Ignition Partners", fundName: "Ignition III", vintage: 2004, fundSizeUSDm: 25, grossTVPI: null, netTVPI: 1.00, netDPI: 1.00, irrToLP: 0.000, strategyType: "Early" },

  // Frazier Healthcare (WSIB — additional OPERF overlap)
  // Already have Frazier II, III, IV

  // ── OPERF Q1 2025: ADDITIONAL DATA POINTS ──

  // Permira (OPERF — newer funds)
  { firm: "Permira", fundName: "Permira VII", vintage: 2019, fundSizeUSDm: 252.3, grossTVPI: null, netTVPI: 1.26, netDPI: null, irrToLP: 0.066, strategyType: "Growth" },
  { firm: "Permira", fundName: "Permira VIII", vintage: 2022, fundSizeUSDm: 257.1, grossTVPI: null, netTVPI: 1.14, netDPI: null, irrToLP: null, strategyType: "Growth" },

  // Vista Equity Partners (OPERF — extensive fund history)
  { firm: "Vista Equity", fundName: "Vista III", vintage: 2007, fundSizeUSDm: 100, grossTVPI: null, netTVPI: 2.45, netDPI: 2.45, irrToLP: 0.294, strategyType: "Growth" },
  { firm: "Vista Equity", fundName: "Vista IV", vintage: 2011, fundSizeUSDm: 100, grossTVPI: null, netTVPI: 2.01, netDPI: 2.01, irrToLP: 0.134, strategyType: "Growth" },
  { firm: "Vista Equity", fundName: "Vista V", vintage: 2014, fundSizeUSDm: 200, grossTVPI: null, netTVPI: 2.13, netDPI: null, irrToLP: 0.165, strategyType: "Growth" },
  { firm: "Vista Equity", fundName: "Vista VI", vintage: 2016, fundSizeUSDm: 500, grossTVPI: null, netTVPI: 2.00, netDPI: null, irrToLP: 0.161, strategyType: "Growth" },
  { firm: "Vista Equity", fundName: "Vista VII", vintage: 2018, fundSizeUSDm: 500, grossTVPI: null, netTVPI: 1.20, netDPI: null, irrToLP: 0.048, strategyType: "Growth" },

  // Vista Foundation (OPERF)
  { firm: "Vista Equity", fundName: "Vista Foundation II", vintage: 2013, fundSizeUSDm: 75, grossTVPI: null, netTVPI: 1.87, netDPI: null, irrToLP: 0.134, strategyType: "Growth" },
  { firm: "Vista Equity", fundName: "Vista Foundation III", vintage: 2016, fundSizeUSDm: 200, grossTVPI: null, netTVPI: 1.84, netDPI: null, irrToLP: 0.185, strategyType: "Growth" },

  // TA Associates (OPERF — additional fund)
  { firm: "TA Associates", fundName: "TA XV", vintage: 2024, fundSizeUSDm: 200, grossTVPI: null, netTVPI: 0.89, netDPI: null, irrToLP: null, strategyType: "Growth" },

  // General Atlantic (OPERF — OPERF-specific data point)
  { firm: "General Atlantic", fundName: "GA 2016", vintage: 2016, fundSizeUSDm: 500, grossTVPI: null, netTVPI: 1.53, netDPI: null, irrToLP: 0.133, strategyType: "Growth" },

  // Tailwind Capital Partners (OPERF)
  { firm: "Tailwind Capital", fundName: "Tailwind I", vintage: 2006, fundSizeUSDm: 75, grossTVPI: null, netTVPI: 1.59, netDPI: 1.59, irrToLP: 0.111, strategyType: "Growth" },
  { firm: "Tailwind Capital", fundName: "Tailwind II", vintage: 2013, fundSizeUSDm: 75, grossTVPI: null, netTVPI: 1.48, netDPI: null, irrToLP: 0.095, strategyType: "Growth" },
  { firm: "Tailwind Capital", fundName: "Tailwind III", vintage: 2017, fundSizeUSDm: 200, grossTVPI: null, netTVPI: 1.01, netDPI: null, irrToLP: 0.004, strategyType: "Growth" },

  // ── WSIB Sep 2024: GROWTH/LATE STAGE VC FUNDS ──

  // Novo Ventures (WSIB — life sciences VC)
  { firm: "Novo Ventures", fundName: "Novo V", vintage: 2005, fundSizeUSDm: 300, grossTVPI: null, netTVPI: 1.73, netDPI: 1.73, irrToLP: 0.090, strategyType: "Early" },
  { firm: "Novo Ventures", fundName: "Novo III", vintage: 1999, fundSizeUSDm: 400, grossTVPI: null, netTVPI: 1.74, netDPI: 1.74, irrToLP: 0.117, strategyType: "Early" },

  // ARCH Venture Partners (WSIB — deep tech/bio VC)
  { firm: "ARCH Venture", fundName: "ARCH VIII", vintage: 2014, fundSizeUSDm: 400, grossTVPI: null, netTVPI: 3.94, netDPI: null, irrToLP: 0.205, strategyType: "Early" },
  { firm: "ARCH Venture", fundName: "ARCH IX", vintage: 2018, fundSizeUSDm: 400, grossTVPI: null, netTVPI: 3.06, netDPI: null, irrToLP: 0.259, strategyType: "Early" },
  { firm: "ARCH Venture", fundName: "ARCH X", vintage: 2020, fundSizeUSDm: 150, grossTVPI: null, netTVPI: 1.64, netDPI: null, irrToLP: 0.149, strategyType: "Early" },

  // Flagship Pioneering (WSIB — biotech VC/venture creation)
  { firm: "Flagship Pioneering", fundName: "Flagship V", vintage: 2013, fundSizeUSDm: 100, grossTVPI: null, netTVPI: 3.52, netDPI: null, irrToLP: 0.282, strategyType: "Early" },
  { firm: "Flagship Pioneering", fundName: "Flagship VI", vintage: 2016, fundSizeUSDm: 150, grossTVPI: null, netTVPI: 2.04, netDPI: null, irrToLP: 0.204, strategyType: "Early" },
  { firm: "Flagship Pioneering", fundName: "Flagship VII", vintage: 2020, fundSizeUSDm: 250, grossTVPI: null, netTVPI: 1.52, netDPI: null, irrToLP: 0.150, strategyType: "Core" },

  // OrbiMed Private Investments (OPERF — healthcare VC)
  { firm: "OrbiMed", fundName: "OrbiMed IV", vintage: 2009, fundSizeUSDm: 40, grossTVPI: null, netTVPI: 2.74, netDPI: null, irrToLP: 0.318, strategyType: "Early" },
  { firm: "OrbiMed", fundName: "OrbiMed V", vintage: 2013, fundSizeUSDm: 40, grossTVPI: null, netTVPI: 2.32, netDPI: null, irrToLP: 0.382, strategyType: "Early" },
  { firm: "OrbiMed", fundName: "OrbiMed VI", vintage: 2015, fundSizeUSDm: 60, grossTVPI: null, netTVPI: 1.68, netDPI: null, irrToLP: 0.139, strategyType: "Early" },
];
