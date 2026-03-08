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
  // TIGER GLOBAL (1 fund) — Source: CalPERS
  // ═══════════════════════════════════════════════
  { firm: "Tiger Global", fundName: "Tiger Global PIP XV", vintage: 2022, fundSizeUSDm: 300, grossTVPI: null, netTVPI: 0.8, netDPI: null, irrToLP: -0.078, strategyType: "Growth" },

  // ═══════════════════════════════════════════════
  // USV (8 funds) — Source: The Information, UTIMCO
  // ═══════════════════════════════════════════════
  { firm: "USV", fundName: "USV 2004", vintage: 2004, fundSizeUSDm: 125, grossTVPI: null, netTVPI: 13.8, netDPI: null, irrToLP: 0.67, strategyType: "Early" },
  { firm: "USV", fundName: "USV 2008", vintage: 2008, fundSizeUSDm: 156, grossTVPI: null, netTVPI: null, netDPI: null, irrToLP: 0.22, strategyType: "Early" },
  { firm: "USV", fundName: "USV Opportunity 2010", vintage: 2010, fundSizeUSDm: 165, grossTVPI: null, netTVPI: null, netDPI: null, irrToLP: 0.60, strategyType: "Growth" },
  { firm: "USV", fundName: "USV 2012", vintage: 2012, fundSizeUSDm: 200, grossTVPI: null, netTVPI: 22.8, netDPI: null, irrToLP: 0.40, strategyType: "Early" },
  { firm: "USV", fundName: "USV 2014", vintage: 2014, fundSizeUSDm: 166, grossTVPI: null, netTVPI: null, netDPI: null, irrToLP: 0.17, strategyType: "Early" },
  { firm: "USV", fundName: "USV Opportunity 2014", vintage: 2014, fundSizeUSDm: 174, grossTVPI: null, netTVPI: null, netDPI: null, irrToLP: 0.21, strategyType: "Growth" },
  { firm: "USV", fundName: "USV 2016", vintage: 2016, fundSizeUSDm: 175, grossTVPI: null, netTVPI: null, netDPI: null, irrToLP: 0.40, strategyType: "Early" },
  { firm: "USV", fundName: "USV 2019", vintage: 2019, fundSizeUSDm: null, grossTVPI: null, netTVPI: null, netDPI: null, irrToLP: 0.571, strategyType: "Early" },

  // ═══════════════════════════════════════════════
  // TCV (2 funds) — Source: CalPERS
  // ═══════════════════════════════════════════════
  { firm: "TCV", fundName: "TCV X", vintage: 2019, fundSizeUSDm: 157, grossTVPI: null, netTVPI: null, netDPI: null, irrToLP: 0.222, strategyType: "Growth" },
  { firm: "TCV", fundName: "TCV XI", vintage: 2021, fundSizeUSDm: 261, grossTVPI: null, netTVPI: null, netDPI: null, irrToLP: 0.043, strategyType: "Growth" },

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
  // TPG GROWTH (2 funds) — Source: CalPERS
  // ═══════════════════════════════════════════════
  { firm: "TPG Growth", fundName: "TPG Growth IV", vintage: 2018, fundSizeUSDm: 75, grossTVPI: null, netTVPI: null, netDPI: null, irrToLP: 0.143, strategyType: "Growth" },
  { firm: "TPG Growth", fundName: "TPG Growth V", vintage: 2021, fundSizeUSDm: 200, grossTVPI: null, netTVPI: null, netDPI: null, irrToLP: 0.140, strategyType: "Growth" },

  // ═══════════════════════════════════════════════
  // GENERAL ATLANTIC (1 fund) — Source: CalPERS
  // ═══════════════════════════════════════════════
  { firm: "General Atlantic", fundName: "Managed Account", vintage: 2020, fundSizeUSDm: 1050, grossTVPI: null, netTVPI: 1.3, netDPI: null, irrToLP: 0.081, strategyType: "Growth" },

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
  // SEQUOIA (1 fund) — Source: PitchBook
  // ═══════════════════════════════════════════════
  { firm: "Sequoia", fundName: "US Venture XVII", vintage: 2020, fundSizeUSDm: null, grossTVPI: null, netTVPI: 1.34, netDPI: null, irrToLP: null, strategyType: "Core" },

  // ═══════════════════════════════════════════════
  // GGV / GRANITE ASIA (1 fund aggregate) — Source: UTIMCO
  // ═══════════════════════════════════════════════
  { firm: "GGV Capital", fundName: "GGV (agg)", vintage: 2014, fundSizeUSDm: null, grossTVPI: null, netTVPI: null, netDPI: null, irrToLP: 0.173, strategyType: "Growth" },

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
];
