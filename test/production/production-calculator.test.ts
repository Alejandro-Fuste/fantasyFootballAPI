import { describe, expect, test } from '@jest/globals';
import ProductionCalculator from '../../src/utils/productionCalculator';

const testInputs = {
  qb: {
    passing: [
      5013, 5000, 4500, 4788, 4999, 4000, 4327, 4499, 3500, 3617, 3999, 3000,
      3288, 3499, 1000, 1345, 2999, 891,
    ],
    rushing: [
      1123, 1000, 900, 951, 999, 800, 817, 899, 700, 742, 799, 600, 617, 699,
      400, 500, 599, 312,
    ],
    passing_touchdowns: [
      50, 48, 40, 45, 47, 30, 33, 39, 20, 25, 29, 10, 13, 19, 8,
    ],
    rushing_touchdowns: [14, 12, 10, 11, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
  },
  rb: {
    rushing: [
      1850, 1800, 1500, 1644, 1799, 1200, 1359, 1499, 900, 1045, 1199, 600, 756,
      899, 300, 455, 599, 299,
    ],
    receiving: [
      1001, 900, 800, 856, 899, 700, 756, 799, 600, 656, 699, 500, 545, 599,
      400, 444, 499, 300,
    ],
    touchdowns: [
      27, 25, 20, 23, 24, 15, 16, 19, 10, 13, 14, 5, 7, 9, 2, 3, 4, 1,
    ],
    receptions: [
      111, 100, 90, 91, 99, 80, 84, 89, 70, 74, 79, 60, 64, 69, 50, 54, 59, 44,
    ],
  },
  wr_te: {
    receiving: [
      1990, 1850, 1549, 1607, 1849, 1248, 1400, 1548, 1000, 1101, 1247, 800,
      913, 999, 500, 554, 799, 456,
    ],
    touchdowns: [22, 20, 15, 17, 19, 10, 12, 14, 5, 7, 9, 2, 3, 4, 1, 0],
    receptions: [
      141, 135, 114, 124, 134, 93, 107, 113, 72, 84, 92, 51, 60, 71, 30, 44, 50,
      25,
    ],
  },
};

const grades = {
  tier167: 167,
  tier157: 157,
  tier147: 147,
  tier137: 137,
  tier127: 127,
  tier117: 117,
  tier110: 110,
  tier99: 99,
  tier98: 98,
  tier166: 166,
  tier156: 156,
  tier146: 146,
  tier136: 136,
  tier126: 126,
  tier116: 116,
  tier125: 125,
  tier115: 115,
  tier105: 105,
  tier95: 95,
  tier85: 85,
  tier75: 75,
  tier55: 55,
};

describe('QB production tests', () => {
  describe('production calculator tests for qb passing_yards', () => {
    /********** QB Passing Yards **********/

    test('QB production calculator for 5013 passing yards returns 167', () => {
      expect(
        ProductionCalculator.QB.passing_yards(testInputs.qb.passing[0])
      ).toBe(grades.tier167);
    });

    test('QB production calculator for 5000 passing yards returns 167', () => {
      expect(
        ProductionCalculator.QB.passing_yards(testInputs.qb.passing[1])
      ).toBe(grades.tier167);
    });

    test('QB production calculator for 4500 passing yards returns 157', () => {
      expect(
        ProductionCalculator.QB.passing_yards(testInputs.qb.passing[2])
      ).toBe(grades.tier157);
    });

    test('QB production calculator for 4788 passing yards returns 157', () => {
      expect(
        ProductionCalculator.QB.passing_yards(testInputs.qb.passing[3])
      ).toBe(grades.tier157);
    });

    test('QB production calculator for 4999 passing yards returns 157', () => {
      expect(
        ProductionCalculator.QB.passing_yards(testInputs.qb.passing[4])
      ).toBe(grades.tier157);
    });

    test('QB production calculator for 4000 passing yards returns 147', () => {
      expect(
        ProductionCalculator.QB.passing_yards(testInputs.qb.passing[5])
      ).toBe(grades.tier147);
    });

    test('QB production calculator for 4327 passing yards returns 147', () => {
      expect(
        ProductionCalculator.QB.passing_yards(testInputs.qb.passing[6])
      ).toBe(grades.tier147);
    });

    test('QB production calculator for 4499 passing yards returns 147', () => {
      expect(
        ProductionCalculator.QB.passing_yards(testInputs.qb.passing[7])
      ).toBe(grades.tier147);
    });

    test('QB production calculator for 3500 passing yards returns 137', () => {
      expect(
        ProductionCalculator.QB.passing_yards(testInputs.qb.passing[8])
      ).toBe(grades.tier137);
    });

    test('QB production calculator for 3617 passing yards returns 137', () => {
      expect(
        ProductionCalculator.QB.passing_yards(testInputs.qb.passing[9])
      ).toBe(grades.tier137);
    });

    test('QB production calculator for 3999 passing yards returns 137', () => {
      expect(
        ProductionCalculator.QB.passing_yards(testInputs.qb.passing[10])
      ).toBe(grades.tier137);
    });

    test('QB production calculator for 3000 passing yards returns 127', () => {
      expect(
        ProductionCalculator.QB.passing_yards(testInputs.qb.passing[11])
      ).toBe(grades.tier127);
    });

    test('QB production calculator for 3288 passing yards returns 127', () => {
      expect(
        ProductionCalculator.QB.passing_yards(testInputs.qb.passing[12])
      ).toBe(grades.tier127);
    });

    test('QB production calculator for 3499 passing yards returns 127', () => {
      expect(
        ProductionCalculator.QB.passing_yards(testInputs.qb.passing[13])
      ).toBe(grades.tier127);
    });

    test('QB production calculator for 1000 passing yards returns 110', () => {
      expect(
        ProductionCalculator.QB.passing_yards(testInputs.qb.passing[14])
      ).toBe(grades.tier110);
    });

    test('QB production calculator for 1345 passing yards returns 110', () => {
      expect(
        ProductionCalculator.QB.passing_yards(testInputs.qb.passing[15])
      ).toBe(grades.tier110);
    });

    test('QB production calculator for 2999 passing yards returns 110', () => {
      expect(
        ProductionCalculator.QB.passing_yards(testInputs.qb.passing[16])
      ).toBe(grades.tier110);
    });

    test('QB production calculator for 891 passing yards returns 99', () => {
      expect(
        ProductionCalculator.QB.passing_yards(testInputs.qb.passing[17])
      ).toBe(grades.tier99);
    });
  });

  describe('production calculator tests for qb rushing_yards', () => {
    /********** QB rushing yards **********/

    test('QB production calculator for 1123 rushing yards returns 166', () => {
      expect(
        ProductionCalculator.QB.rushing_yards(testInputs.qb.rushing[0])
      ).toBe(grades.tier166);
    });

    test('QB production calculator for 1000 rushing yards returns 166', () => {
      expect(
        ProductionCalculator.QB.rushing_yards(testInputs.qb.rushing[1])
      ).toBe(grades.tier166);
    });

    test('QB production calculator for 900 rushing yards returns 156', () => {
      expect(
        ProductionCalculator.QB.rushing_yards(testInputs.qb.rushing[2])
      ).toBe(grades.tier156);
    });

    test('QB production calculator for 951 rushing yards returns 156', () => {
      expect(
        ProductionCalculator.QB.rushing_yards(testInputs.qb.rushing[3])
      ).toBe(grades.tier156);
    });

    test('QB production calculator for 999 rushing yards returns 156', () => {
      expect(
        ProductionCalculator.QB.rushing_yards(testInputs.qb.rushing[4])
      ).toBe(grades.tier156);
    });

    test('QB production calculator for 800 rushing yards returns 146', () => {
      expect(
        ProductionCalculator.QB.rushing_yards(testInputs.qb.rushing[5])
      ).toBe(grades.tier146);
    });

    test('QB production calculator for 817 rushing yards returns 146', () => {
      expect(
        ProductionCalculator.QB.rushing_yards(testInputs.qb.rushing[6])
      ).toBe(grades.tier146);
    });

    test('QB production calculator for 899 rushing yards returns 146', () => {
      expect(
        ProductionCalculator.QB.rushing_yards(testInputs.qb.rushing[7])
      ).toBe(grades.tier146);
    });

    test('QB production calculator for 700 rushing yards returns 136', () => {
      expect(
        ProductionCalculator.QB.rushing_yards(testInputs.qb.rushing[8])
      ).toBe(grades.tier136);
    });

    test('QB production calculator for 742 rushing yards returns 136', () => {
      expect(
        ProductionCalculator.QB.rushing_yards(testInputs.qb.rushing[9])
      ).toBe(grades.tier136);
    });

    test('QB production calculator for 799 rushing yards returns 136', () => {
      expect(
        ProductionCalculator.QB.rushing_yards(testInputs.qb.rushing[10])
      ).toBe(grades.tier136);
    });

    test('QB production calculator for 600 rushing yards returns 126', () => {
      expect(
        ProductionCalculator.QB.rushing_yards(testInputs.qb.rushing[11])
      ).toBe(grades.tier126);
    });

    test('QB production calculator for 617 rushing yards returns 126', () => {
      expect(
        ProductionCalculator.QB.rushing_yards(testInputs.qb.rushing[12])
      ).toBe(grades.tier126);
    });

    test('QB production calculator for 699 rushing yards returns 126', () => {
      expect(
        ProductionCalculator.QB.rushing_yards(testInputs.qb.rushing[13])
      ).toBe(grades.tier126);
    });

    test('QB production calculator for 400 rushing yards returns 116', () => {
      expect(
        ProductionCalculator.QB.rushing_yards(testInputs.qb.rushing[14])
      ).toBe(grades.tier116);
    });

    test('QB production calculator for 500 rushing yards returns 116', () => {
      expect(
        ProductionCalculator.QB.rushing_yards(testInputs.qb.rushing[15])
      ).toBe(grades.tier116);
    });

    test('QB production calculator for 599 rushing yards returns 116', () => {
      expect(
        ProductionCalculator.QB.rushing_yards(testInputs.qb.rushing[16])
      ).toBe(grades.tier116);
    });

    test('QB production calculator for 312 rushing yards returns 99', () => {
      expect(
        ProductionCalculator.QB.rushing_yards(testInputs.qb.rushing[17])
      ).toBe(grades.tier99);
    });
  });

  describe('production calculator tests for qb passing_touchdowns', () => {
    /********** QB Passing Touchdowns **********/

    test('QB production calculator for 50 passing_touchdowns returns 167', () => {
      expect(
        ProductionCalculator.QB.passing_touchdowns(
          testInputs.qb.passing_touchdowns[0]
        )
      ).toBe(grades.tier167);
    });

    test('QB production calculator for 48 passing_touchdowns returns 167', () => {
      expect(
        ProductionCalculator.QB.passing_touchdowns(
          testInputs.qb.passing_touchdowns[1]
        )
      ).toBe(grades.tier167);
    });

    test('QB production calculator for 40 passing_touchdowns returns 157', () => {
      expect(
        ProductionCalculator.QB.passing_touchdowns(
          testInputs.qb.passing_touchdowns[2]
        )
      ).toBe(grades.tier157);
    });

    test('QB production calculator for 45 passing_touchdowns returns 157', () => {
      expect(
        ProductionCalculator.QB.passing_touchdowns(
          testInputs.qb.passing_touchdowns[3]
        )
      ).toBe(grades.tier157);
    });

    test('QB production calculator for 47 passing_touchdowns returns 157', () => {
      expect(
        ProductionCalculator.QB.passing_touchdowns(
          testInputs.qb.passing_touchdowns[4]
        )
      ).toBe(grades.tier157);
    });

    test('QB production calculator for 30 passing_touchdowns returns 147', () => {
      expect(
        ProductionCalculator.QB.passing_touchdowns(
          testInputs.qb.passing_touchdowns[5]
        )
      ).toBe(grades.tier147);
    });

    test('QB production calculator for 33 passing_touchdowns returns 147', () => {
      expect(
        ProductionCalculator.QB.passing_touchdowns(
          testInputs.qb.passing_touchdowns[6]
        )
      ).toBe(grades.tier147);
    });

    test('QB production calculator for 39 passing_touchdowns returns 147', () => {
      expect(
        ProductionCalculator.QB.passing_touchdowns(
          testInputs.qb.passing_touchdowns[7]
        )
      ).toBe(grades.tier147);
    });

    test('QB production calculator for 20 passing_touchdowns returns 137', () => {
      expect(
        ProductionCalculator.QB.passing_touchdowns(
          testInputs.qb.passing_touchdowns[8]
        )
      ).toBe(grades.tier137);
    });

    test('QB production calculator for 25 passing_touchdowns returns 137', () => {
      expect(
        ProductionCalculator.QB.passing_touchdowns(
          testInputs.qb.passing_touchdowns[9]
        )
      ).toBe(grades.tier137);
    });

    test('QB production calculator for 29 passing_touchdowns returns 137', () => {
      expect(
        ProductionCalculator.QB.passing_touchdowns(
          testInputs.qb.passing_touchdowns[10]
        )
      ).toBe(grades.tier137);
    });

    test('QB production calculator for 10 passing_touchdowns returns 127', () => {
      expect(
        ProductionCalculator.QB.passing_touchdowns(
          testInputs.qb.passing_touchdowns[11]
        )
      ).toBe(grades.tier127);
    });

    test('QB production calculator for 13 passing_touchdowns returns 127', () => {
      expect(
        ProductionCalculator.QB.passing_touchdowns(
          testInputs.qb.passing_touchdowns[12]
        )
      ).toBe(grades.tier127);
    });

    test('QB production calculator for 19 passing_touchdowns returns 127', () => {
      expect(
        ProductionCalculator.QB.passing_touchdowns(
          testInputs.qb.passing_touchdowns[13]
        )
      ).toBe(grades.tier127);
    });

    test('QB production calculator for 8 passing_touchdowns returns 99', () => {
      expect(
        ProductionCalculator.QB.passing_touchdowns(
          testInputs.qb.passing_touchdowns[14]
        )
      ).toBe(grades.tier99);
    });
  });

  describe('production calculator tests for qb rushing_touchdowns', () => {
    /********** QB Rushing Touchdowns **********/

    test('QB production calculator for 14 rushing_touchdowns returns 167', () => {
      expect(
        ProductionCalculator.QB.rushing_touchdowns(
          testInputs.qb.rushing_touchdowns[0]
        )
      ).toBe(grades.tier167);
    });

    test('QB production calculator for 12 rushing_touchdowns returns 167', () => {
      expect(
        ProductionCalculator.QB.rushing_touchdowns(
          testInputs.qb.rushing_touchdowns[1]
        )
      ).toBe(grades.tier167);
    });

    test('QB production calculator for 10 rushing_touchdowns returns 157', () => {
      expect(
        ProductionCalculator.QB.rushing_touchdowns(
          testInputs.qb.rushing_touchdowns[2]
        )
      ).toBe(grades.tier157);
    });

    test('QB production calculator for 11 rushing_touchdowns returns 157', () => {
      expect(
        ProductionCalculator.QB.rushing_touchdowns(
          testInputs.qb.rushing_touchdowns[3]
        )
      ).toBe(grades.tier157);
    });

    test('QB production calculator for 9 rushing_touchdowns returns 147', () => {
      expect(
        ProductionCalculator.QB.rushing_touchdowns(
          testInputs.qb.rushing_touchdowns[4]
        )
      ).toBe(grades.tier147);
    });

    test('QB production calculator for 8 rushing_touchdowns returns 147', () => {
      expect(
        ProductionCalculator.QB.rushing_touchdowns(
          testInputs.qb.rushing_touchdowns[5]
        )
      ).toBe(grades.tier147);
    });

    test('QB production calculator for 7 rushing_touchdowns returns 137', () => {
      expect(
        ProductionCalculator.QB.rushing_touchdowns(
          testInputs.qb.rushing_touchdowns[6]
        )
      ).toBe(grades.tier137);
    });

    test('QB production calculator for 6 rushing_touchdowns returns 137', () => {
      expect(
        ProductionCalculator.QB.rushing_touchdowns(
          testInputs.qb.rushing_touchdowns[7]
        )
      ).toBe(grades.tier137);
    });

    test('QB production calculator for 5 rushing_touchdowns returns 137', () => {
      expect(
        ProductionCalculator.QB.rushing_touchdowns(
          testInputs.qb.rushing_touchdowns[8]
        )
      ).toBe(grades.tier137);
    });

    test('QB production calculator for 4 rushing_touchdowns returns 127', () => {
      expect(
        ProductionCalculator.QB.rushing_touchdowns(
          testInputs.qb.rushing_touchdowns[9]
        )
      ).toBe(grades.tier127);
    });

    test('QB production calculator for 3 rushing_touchdowns returns 127', () => {
      expect(
        ProductionCalculator.QB.rushing_touchdowns(
          testInputs.qb.rushing_touchdowns[10]
        )
      ).toBe(grades.tier127);
    });

    test('QB production calculator for 2 rushing_touchdowns returns 127', () => {
      expect(
        ProductionCalculator.QB.rushing_touchdowns(
          testInputs.qb.rushing_touchdowns[11]
        )
      ).toBe(grades.tier127);
    });

    test('QB production calculator for 1 rushing_touchdowns returns 99', () => {
      expect(
        ProductionCalculator.QB.rushing_touchdowns(
          testInputs.qb.rushing_touchdowns[12]
        )
      ).toBe(grades.tier99);
    });

    test('QB production calculator for 0 rushing_touchdowns returns 99', () => {
      expect(
        ProductionCalculator.QB.rushing_touchdowns(
          testInputs.qb.rushing_touchdowns[13]
        )
      ).toBe(grades.tier99);
    });
  });
});

describe('RB production tests', () => {
  describe('production calculator tests for rb rushing_yards', () => {
    /********** RB rushing yards **********/

    test('RB production calculator for 1850 rushing yards returns 125', () => {
      expect(
        ProductionCalculator.RB.rushing_yards(testInputs.rb.rushing[0])
      ).toBe(grades.tier125);
    });

    test('RB production calculator for 1800 rushing yards returns 125', () => {
      expect(
        ProductionCalculator.RB.rushing_yards(testInputs.rb.rushing[1])
      ).toBe(grades.tier125);
    });

    test('RB production calculator for 1500 rushing yards returns 115', () => {
      expect(
        ProductionCalculator.RB.rushing_yards(testInputs.rb.rushing[2])
      ).toBe(grades.tier115);
    });

    test('RB production calculator for 1644 rushing yards returns 115', () => {
      expect(
        ProductionCalculator.RB.rushing_yards(testInputs.rb.rushing[3])
      ).toBe(grades.tier115);
    });

    test('RB production calculator for 1799 rushing yards returns 115', () => {
      expect(
        ProductionCalculator.RB.rushing_yards(testInputs.rb.rushing[4])
      ).toBe(grades.tier115);
    });

    test('RB production calculator for 1200 rushing yards returns 105', () => {
      expect(
        ProductionCalculator.RB.rushing_yards(testInputs.rb.rushing[5])
      ).toBe(grades.tier105);
    });

    test('RB production calculator for 1359 rushing yards returns 105', () => {
      expect(
        ProductionCalculator.RB.rushing_yards(testInputs.rb.rushing[6])
      ).toBe(grades.tier105);
    });

    test('RB production calculator for 1499 rushing yards returns 105', () => {
      expect(
        ProductionCalculator.RB.rushing_yards(testInputs.rb.rushing[7])
      ).toBe(grades.tier105);
    });

    test('RB production calculator for 900 rushing yards returns 95', () => {
      expect(
        ProductionCalculator.RB.rushing_yards(testInputs.rb.rushing[8])
      ).toBe(grades.tier95);
    });

    test('RB production calculator for 1045 rushing yards returns 95', () => {
      expect(
        ProductionCalculator.RB.rushing_yards(testInputs.rb.rushing[9])
      ).toBe(grades.tier95);
    });

    test('RB production calculator for 1199 rushing yards returns 95', () => {
      expect(
        ProductionCalculator.RB.rushing_yards(testInputs.rb.rushing[10])
      ).toBe(grades.tier95);
    });

    test('RB production calculator for 600 rushing yards returns 85', () => {
      expect(
        ProductionCalculator.RB.rushing_yards(testInputs.rb.rushing[11])
      ).toBe(grades.tier85);
    });

    test('RB production calculator for 756 rushing yards returns 85', () => {
      expect(
        ProductionCalculator.RB.rushing_yards(testInputs.rb.rushing[12])
      ).toBe(grades.tier85);
    });

    test('RB production calculator for 899 rushing yards returns 85', () => {
      expect(
        ProductionCalculator.RB.rushing_yards(testInputs.rb.rushing[13])
      ).toBe(grades.tier85);
    });

    test('RB production calculator for 300 rushing yards returns 75', () => {
      expect(
        ProductionCalculator.RB.rushing_yards(testInputs.rb.rushing[14])
      ).toBe(grades.tier75);
    });

    test('RB production calculator for 455 rushing yards returns 75', () => {
      expect(
        ProductionCalculator.RB.rushing_yards(testInputs.rb.rushing[15])
      ).toBe(grades.tier75);
    });

    test('RB production calculator for 599 rushing yards returns 75', () => {
      expect(
        ProductionCalculator.RB.rushing_yards(testInputs.rb.rushing[16])
      ).toBe(grades.tier75);
    });

    test('RB production calculator for 299 rushing yards returns 55', () => {
      expect(
        ProductionCalculator.RB.rushing_yards(testInputs.rb.rushing[17])
      ).toBe(grades.tier55);
    });
  });

  describe('production calculator tests for rb receiving_yards', () => {
    /********** RB receiving_yards **********/

    test('RB production calculator for 1001 receiving yards returns 125', () => {
      expect(
        ProductionCalculator.RB.receiving_yards(testInputs.rb.receiving[0])
      ).toBe(grades.tier125);
    });

    test('RB production calculator for 900 receiving yards returns 125', () => {
      expect(
        ProductionCalculator.RB.receiving_yards(testInputs.rb.receiving[1])
      ).toBe(grades.tier125);
    });

    test('RB production calculator for 800 receiving yards returns 115', () => {
      expect(
        ProductionCalculator.RB.receiving_yards(testInputs.rb.receiving[2])
      ).toBe(grades.tier115);
    });

    test('RB production calculator for 856 receiving yards returns 115', () => {
      expect(
        ProductionCalculator.RB.receiving_yards(testInputs.rb.receiving[3])
      ).toBe(grades.tier115);
    });

    test('RB production calculator for 899 receiving yards returns 115', () => {
      expect(
        ProductionCalculator.RB.receiving_yards(testInputs.rb.receiving[4])
      ).toBe(grades.tier115);
    });

    test('RB production calculator for 700 receiving yards returns 105', () => {
      expect(
        ProductionCalculator.RB.receiving_yards(testInputs.rb.receiving[5])
      ).toBe(grades.tier105);
    });

    test('RB production calculator for 756 receiving yards returns 105', () => {
      expect(
        ProductionCalculator.RB.receiving_yards(testInputs.rb.receiving[6])
      ).toBe(grades.tier105);
    });

    test('RB production calculator for 799 receiving yards returns 105', () => {
      expect(
        ProductionCalculator.RB.receiving_yards(testInputs.rb.receiving[7])
      ).toBe(grades.tier105);
    });

    test('RB production calculator for 600 receiving yards returns 95', () => {
      expect(
        ProductionCalculator.RB.receiving_yards(testInputs.rb.receiving[8])
      ).toBe(grades.tier95);
    });

    test('RB production calculator for 656 receiving yards returns 95', () => {
      expect(
        ProductionCalculator.RB.receiving_yards(testInputs.rb.receiving[9])
      ).toBe(grades.tier95);
    });

    test('RB production calculator for 699 receiving yards returns 95', () => {
      expect(
        ProductionCalculator.RB.receiving_yards(testInputs.rb.receiving[10])
      ).toBe(grades.tier95);
    });

    test('RB production calculator for 500 receiving yards returns 85', () => {
      expect(
        ProductionCalculator.RB.receiving_yards(testInputs.rb.receiving[11])
      ).toBe(grades.tier85);
    });

    test('RB production calculator for 545 receiving yards returns 85', () => {
      expect(
        ProductionCalculator.RB.receiving_yards(testInputs.rb.receiving[12])
      ).toBe(grades.tier85);
    });

    test('RB production calculator for 599 receiving yards returns 85', () => {
      expect(
        ProductionCalculator.RB.receiving_yards(testInputs.rb.receiving[13])
      ).toBe(grades.tier85);
    });

    test('RB production calculator for 400 receiving yards returns 75', () => {
      expect(
        ProductionCalculator.RB.receiving_yards(testInputs.rb.receiving[14])
      ).toBe(grades.tier75);
    });

    test('RB production calculator for 444 receiving yards returns 75', () => {
      expect(
        ProductionCalculator.RB.receiving_yards(testInputs.rb.receiving[15])
      ).toBe(grades.tier75);
    });

    test('RB production calculator for 499 receiving yards returns 55', () => {
      expect(
        ProductionCalculator.RB.receiving_yards(testInputs.rb.receiving[16])
      ).toBe(grades.tier75);
    });

    test('RB production calculator for 300 receiving yards returns 55', () => {
      expect(
        ProductionCalculator.RB.receiving_yards(testInputs.rb.receiving[17])
      ).toBe(grades.tier55);
    });
  });

  describe('production calculator tests for rb touchdowns', () => {
    /********** RB touchdowns **********/

    test('RB production calculator for 27 touchdowns returns 125', () => {
      expect(
        ProductionCalculator.RB.touchdowns(testInputs.rb.touchdowns[0])
      ).toBe(grades.tier125);
    });

    test('RB production calculator for 25 touchdowns returns 125', () => {
      expect(
        ProductionCalculator.RB.touchdowns(testInputs.rb.touchdowns[1])
      ).toBe(grades.tier125);
    });

    test('RB production calculator for 20 touchdowns returns 115', () => {
      expect(
        ProductionCalculator.RB.touchdowns(testInputs.rb.touchdowns[2])
      ).toBe(grades.tier115);
    });

    test('RB production calculator for 23 touchdowns returns 115', () => {
      expect(
        ProductionCalculator.RB.touchdowns(testInputs.rb.touchdowns[3])
      ).toBe(grades.tier115);
    });

    test('RB production calculator for 24 touchdowns returns 115', () => {
      expect(
        ProductionCalculator.RB.touchdowns(testInputs.rb.touchdowns[4])
      ).toBe(grades.tier115);
    });

    test('RB production calculator for 15 touchdowns returns 105', () => {
      expect(
        ProductionCalculator.RB.touchdowns(testInputs.rb.touchdowns[5])
      ).toBe(grades.tier105);
    });

    test('RB production calculator for 16 touchdowns returns 105', () => {
      expect(
        ProductionCalculator.RB.touchdowns(testInputs.rb.touchdowns[6])
      ).toBe(grades.tier105);
    });

    test('RB production calculator for 19 touchdowns returns 105', () => {
      expect(
        ProductionCalculator.RB.touchdowns(testInputs.rb.touchdowns[7])
      ).toBe(grades.tier105);
    });

    test('RB production calculator for 10 touchdowns returns 95', () => {
      expect(
        ProductionCalculator.RB.touchdowns(testInputs.rb.touchdowns[8])
      ).toBe(grades.tier95);
    });

    test('RB production calculator for 13 touchdowns returns 95', () => {
      expect(
        ProductionCalculator.RB.touchdowns(testInputs.rb.touchdowns[9])
      ).toBe(grades.tier95);
    });

    test('RB production calculator for 14 touchdowns returns 95', () => {
      expect(
        ProductionCalculator.RB.touchdowns(testInputs.rb.touchdowns[10])
      ).toBe(grades.tier95);
    });

    test('RB production calculator for 5 touchdowns returns 85', () => {
      expect(
        ProductionCalculator.RB.touchdowns(testInputs.rb.touchdowns[11])
      ).toBe(grades.tier85);
    });

    test('RB production calculator for 7 touchdowns returns 85', () => {
      expect(
        ProductionCalculator.RB.touchdowns(testInputs.rb.touchdowns[12])
      ).toBe(grades.tier85);
    });

    test('RB production calculator for 9 touchdowns returns 85', () => {
      expect(
        ProductionCalculator.RB.touchdowns(testInputs.rb.touchdowns[13])
      ).toBe(grades.tier85);
    });

    test('RB production calculator for 2 touchdowns returns 75', () => {
      expect(
        ProductionCalculator.RB.touchdowns(testInputs.rb.touchdowns[14])
      ).toBe(grades.tier75);
    });

    test('RB production calculator for 3 touchdowns returns 75', () => {
      expect(
        ProductionCalculator.RB.touchdowns(testInputs.rb.touchdowns[15])
      ).toBe(grades.tier75);
    });

    test('RB production calculator for 4 touchdowns returns 55', () => {
      expect(
        ProductionCalculator.RB.touchdowns(testInputs.rb.touchdowns[16])
      ).toBe(grades.tier75);
    });

    test('RB production calculator for 1 touchdowns returns 55', () => {
      expect(
        ProductionCalculator.RB.touchdowns(testInputs.rb.touchdowns[17])
      ).toBe(grades.tier55);
    });
  });

  describe('production calculator tests for rb receptions', () => {
    /********** RB receptions **********/

    test('RB production calculator for 111 receptions returns 125', () => {
      expect(
        ProductionCalculator.RB.receptions(testInputs.rb.receptions[0])
      ).toBe(grades.tier125);
    });

    test('RB production calculator for 100 receptions returns 125', () => {
      expect(
        ProductionCalculator.RB.receptions(testInputs.rb.receptions[1])
      ).toBe(grades.tier125);
    });

    test('RB production calculator for 90 receptions returns 115', () => {
      expect(
        ProductionCalculator.RB.receptions(testInputs.rb.receptions[2])
      ).toBe(grades.tier115);
    });

    test('RB production calculator for 91 receptions returns 115', () => {
      expect(
        ProductionCalculator.RB.receptions(testInputs.rb.receptions[3])
      ).toBe(grades.tier115);
    });

    test('RB production calculator for 99 receptions returns 115', () => {
      expect(
        ProductionCalculator.RB.receptions(testInputs.rb.receptions[4])
      ).toBe(grades.tier115);
    });

    test('RB production calculator for 80 receptions returns 105', () => {
      expect(
        ProductionCalculator.RB.receptions(testInputs.rb.receptions[5])
      ).toBe(grades.tier105);
    });

    test('RB production calculator for 84 receptions returns 105', () => {
      expect(
        ProductionCalculator.RB.receptions(testInputs.rb.receptions[6])
      ).toBe(grades.tier105);
    });

    test('RB production calculator for 89 receptions returns 105', () => {
      expect(
        ProductionCalculator.RB.receptions(testInputs.rb.receptions[7])
      ).toBe(grades.tier105);
    });

    test('RB production calculator for 70 receptions returns 95', () => {
      expect(
        ProductionCalculator.RB.receptions(testInputs.rb.receptions[8])
      ).toBe(grades.tier95);
    });

    test('RB production calculator for 74 receptions returns 95', () => {
      expect(
        ProductionCalculator.RB.receptions(testInputs.rb.receptions[9])
      ).toBe(grades.tier95);
    });

    test('RB production calculator for 79 receptions returns 95', () => {
      expect(
        ProductionCalculator.RB.receptions(testInputs.rb.receptions[10])
      ).toBe(grades.tier95);
    });

    test('RB production calculator for 60 receptions returns 85', () => {
      expect(
        ProductionCalculator.RB.receptions(testInputs.rb.receptions[11])
      ).toBe(grades.tier85);
    });

    test('RB production calculator for 64 receptions returns 85', () => {
      expect(
        ProductionCalculator.RB.receptions(testInputs.rb.receptions[12])
      ).toBe(grades.tier85);
    });

    test('RB production calculator for 69 receptions returns 85', () => {
      expect(
        ProductionCalculator.RB.receptions(testInputs.rb.receptions[13])
      ).toBe(grades.tier85);
    });

    test('RB production calculator for 50 receptions returns 75', () => {
      expect(
        ProductionCalculator.RB.receptions(testInputs.rb.receptions[14])
      ).toBe(grades.tier75);
    });

    test('RB production calculator for 54 receptions returns 75', () => {
      expect(
        ProductionCalculator.RB.receptions(testInputs.rb.receptions[15])
      ).toBe(grades.tier75);
    });

    test('RB production calculator for 59 receptions returns 55', () => {
      expect(
        ProductionCalculator.RB.receptions(testInputs.rb.receptions[16])
      ).toBe(grades.tier75);
    });

    test('RB production calculator for 44 receptions returns 55', () => {
      expect(
        ProductionCalculator.RB.receptions(testInputs.rb.receptions[17])
      ).toBe(grades.tier55);
    });
  });
});

describe('WR_TE productions tests', () => {
  describe('production calculator tests for wr_te receiving_yards', () => {
    /********** WR_TE receiving yards **********/

    test('WR_TE production calculator for 1990 receiving yards returns 167', () => {
      expect(
        ProductionCalculator.WR_TE.receiving_yards(
          testInputs.wr_te.receiving[0]
        )
      ).toBe(grades.tier167);
    });

    test('WR_TE production calculator for 1850 receiving yards returns 167', () => {
      expect(
        ProductionCalculator.WR_TE.receiving_yards(
          testInputs.wr_te.receiving[1]
        )
      ).toBe(grades.tier167);
    });

    test('WR_TE production calculator for 1549 receiving yards returns 157', () => {
      expect(
        ProductionCalculator.WR_TE.receiving_yards(
          testInputs.wr_te.receiving[2]
        )
      ).toBe(grades.tier157);
    });

    test('WR_TE production calculator for 1607 receiving yards returns 157', () => {
      expect(
        ProductionCalculator.WR_TE.receiving_yards(
          testInputs.wr_te.receiving[3]
        )
      ).toBe(grades.tier157);
    });

    test('WR_TE production calculator for 1849 receiving yards returns 157', () => {
      expect(
        ProductionCalculator.WR_TE.receiving_yards(
          testInputs.wr_te.receiving[4]
        )
      ).toBe(grades.tier157);
    });

    test('WR_TE production calculator for 1248 receiving yards returns 147', () => {
      expect(
        ProductionCalculator.WR_TE.receiving_yards(
          testInputs.wr_te.receiving[5]
        )
      ).toBe(grades.tier147);
    });

    test('WR_TE production calculator for 1400 receiving yards returns 147', () => {
      expect(
        ProductionCalculator.WR_TE.receiving_yards(
          testInputs.wr_te.receiving[6]
        )
      ).toBe(grades.tier147);
    });

    test('WR_TE production calculator for 1548 receiving yards returns 147', () => {
      expect(
        ProductionCalculator.WR_TE.receiving_yards(
          testInputs.wr_te.receiving[7]
        )
      ).toBe(grades.tier147);
    });

    test('WR_TE production calculator for 1000 receiving yards returns 137', () => {
      expect(
        ProductionCalculator.WR_TE.receiving_yards(
          testInputs.wr_te.receiving[8]
        )
      ).toBe(grades.tier137);
    });

    test('WR_TE production calculator for 1101 receiving yards returns 137', () => {
      expect(
        ProductionCalculator.WR_TE.receiving_yards(
          testInputs.wr_te.receiving[9]
        )
      ).toBe(grades.tier137);
    });

    test('WR_TE production calculator for 1247 receiving yards returns 137', () => {
      expect(
        ProductionCalculator.WR_TE.receiving_yards(
          testInputs.wr_te.receiving[10]
        )
      ).toBe(grades.tier137);
    });

    test('WR_TE production calculator for 800 receiving yards returns 127', () => {
      expect(
        ProductionCalculator.WR_TE.receiving_yards(
          testInputs.wr_te.receiving[11]
        )
      ).toBe(grades.tier127);
    });

    test('WR_TE production calculator for 913 receiving yards returns 127', () => {
      expect(
        ProductionCalculator.WR_TE.receiving_yards(
          testInputs.wr_te.receiving[12]
        )
      ).toBe(grades.tier127);
    });

    test('WR_TE production calculator for 999 receiving yards returns 127', () => {
      expect(
        ProductionCalculator.WR_TE.receiving_yards(
          testInputs.wr_te.receiving[13]
        )
      ).toBe(grades.tier127);
    });

    test('WR_TE production calculator for 500 receiving yards returns 117', () => {
      expect(
        ProductionCalculator.WR_TE.receiving_yards(
          testInputs.wr_te.receiving[14]
        )
      ).toBe(grades.tier117);
    });

    test('WR_TE production calculator for 554 receiving yards returns 117', () => {
      expect(
        ProductionCalculator.WR_TE.receiving_yards(
          testInputs.wr_te.receiving[15]
        )
      ).toBe(grades.tier117);
    });

    test('WR_TE production calculator for 799 receiving yards returns 117', () => {
      expect(
        ProductionCalculator.WR_TE.receiving_yards(
          testInputs.wr_te.receiving[16]
        )
      ).toBe(grades.tier117);
    });

    test('WR_TE production calculator for 456 receiving yards returns 99', () => {
      expect(
        ProductionCalculator.WR_TE.receiving_yards(
          testInputs.wr_te.receiving[17]
        )
      ).toBe(grades.tier99);
    });
  });

  describe('production calculator tests for wr_te touchdowns', () => {
    /********** WR_TE touchdowns **********/

    test('WR_TE production calculator for 22 touchdowns returns 167', () => {
      expect(
        ProductionCalculator.WR_TE.touchdowns(testInputs.wr_te.touchdowns[0])
      ).toBe(grades.tier167);
    });

    test('WR_TE production calculator for 20 touchdowns returns 167', () => {
      expect(
        ProductionCalculator.WR_TE.touchdowns(testInputs.wr_te.touchdowns[1])
      ).toBe(grades.tier167);
    });

    test('WR_TE production calculator for 15 touchdowns returns 157', () => {
      expect(
        ProductionCalculator.WR_TE.touchdowns(testInputs.wr_te.touchdowns[2])
      ).toBe(grades.tier157);
    });

    test('WR_TE production calculator for 17 touchdowns returns 157', () => {
      expect(
        ProductionCalculator.WR_TE.touchdowns(testInputs.wr_te.touchdowns[3])
      ).toBe(grades.tier157);
    });

    test('WR_TE production calculator for 19 touchdowns returns 157', () => {
      expect(
        ProductionCalculator.WR_TE.touchdowns(testInputs.wr_te.touchdowns[4])
      ).toBe(grades.tier157);
    });

    test('WR_TE production calculator for 10 touchdowns returns 147', () => {
      expect(
        ProductionCalculator.WR_TE.touchdowns(testInputs.wr_te.touchdowns[5])
      ).toBe(grades.tier147);
    });

    test('WR_TE production calculator for 12 touchdowns returns 147', () => {
      expect(
        ProductionCalculator.WR_TE.touchdowns(testInputs.wr_te.touchdowns[6])
      ).toBe(grades.tier147);
    });

    test('WR_TE production calculator for 14 touchdowns returns 147', () => {
      expect(
        ProductionCalculator.WR_TE.touchdowns(testInputs.wr_te.touchdowns[7])
      ).toBe(grades.tier147);
    });

    test('WR_TE production calculator for 5 touchdowns returns 137', () => {
      expect(
        ProductionCalculator.WR_TE.touchdowns(testInputs.wr_te.touchdowns[8])
      ).toBe(grades.tier137);
    });

    test('WR_TE production calculator for 7 touchdowns returns 137', () => {
      expect(
        ProductionCalculator.WR_TE.touchdowns(testInputs.wr_te.touchdowns[9])
      ).toBe(grades.tier137);
    });

    test('WR_TE production calculator for 9 touchdowns returns 137', () => {
      expect(
        ProductionCalculator.WR_TE.touchdowns(testInputs.wr_te.touchdowns[10])
      ).toBe(grades.tier137);
    });

    test('WR_TE production calculator for 2 touchdowns returns 127', () => {
      expect(
        ProductionCalculator.WR_TE.touchdowns(testInputs.wr_te.touchdowns[11])
      ).toBe(grades.tier127);
    });

    test('WR_TE production calculator for 3 touchdowns returns 127', () => {
      expect(
        ProductionCalculator.WR_TE.touchdowns(testInputs.wr_te.touchdowns[12])
      ).toBe(grades.tier127);
    });

    test('WR_TE production calculator for 4 touchdowns returns 127', () => {
      expect(
        ProductionCalculator.WR_TE.touchdowns(testInputs.wr_te.touchdowns[13])
      ).toBe(grades.tier127);
    });

    test('WR_TE production calculator for 1 touchdowns returns 99', () => {
      expect(
        ProductionCalculator.WR_TE.touchdowns(testInputs.wr_te.touchdowns[14])
      ).toBe(grades.tier99);
    });

    test('WR_TE production calculator for 0 touchdowns returns 99', () => {
      expect(
        ProductionCalculator.WR_TE.touchdowns(testInputs.wr_te.touchdowns[15])
      ).toBe(grades.tier99);
    });
  });

  describe('production calculator tests for wr_te receptions', () => {
    /********** WR_TE receptions **********/

    test('WR_TE production calculator for 141 receptions returns 166', () => {
      expect(
        ProductionCalculator.WR_TE.receptions(testInputs.wr_te.receptions[0])
      ).toBe(grades.tier166);
    });

    test('WR_TE production calculator for 135 receptions returns 166', () => {
      expect(
        ProductionCalculator.WR_TE.receptions(testInputs.wr_te.receptions[1])
      ).toBe(grades.tier166);
    });

    test('WR_TE production calculator for 114 receptions returns 156', () => {
      expect(
        ProductionCalculator.WR_TE.receptions(testInputs.wr_te.receptions[2])
      ).toBe(grades.tier156);
    });

    test('WR_TE production calculator for 124 receptions returns 156', () => {
      expect(
        ProductionCalculator.WR_TE.receptions(testInputs.wr_te.receptions[3])
      ).toBe(grades.tier156);
    });

    test('WR_TE production calculator for 134 receptions returns 156', () => {
      expect(
        ProductionCalculator.WR_TE.receptions(testInputs.wr_te.receptions[4])
      ).toBe(grades.tier156);
    });

    test('WR_TE production calculator for 93 receptions returns 146', () => {
      expect(
        ProductionCalculator.WR_TE.receptions(testInputs.wr_te.receptions[5])
      ).toBe(grades.tier146);
    });

    test('WR_TE production calculator for 107 receptions returns 146', () => {
      expect(
        ProductionCalculator.WR_TE.receptions(testInputs.wr_te.receptions[6])
      ).toBe(grades.tier146);
    });

    test('WR_TE production calculator for 113 receptions returns 146', () => {
      expect(
        ProductionCalculator.WR_TE.receptions(testInputs.wr_te.receptions[7])
      ).toBe(grades.tier146);
    });

    test('WR_TE production calculator for 72 receptions returns 136', () => {
      expect(
        ProductionCalculator.WR_TE.receptions(testInputs.wr_te.receptions[8])
      ).toBe(grades.tier136);
    });

    test('WR_TE production calculator for 84 receptions returns 136', () => {
      expect(
        ProductionCalculator.WR_TE.receptions(testInputs.wr_te.receptions[9])
      ).toBe(grades.tier136);
    });

    test('WR_TE production calculator for 92 receptions returns 136', () => {
      expect(
        ProductionCalculator.WR_TE.receptions(testInputs.wr_te.receptions[10])
      ).toBe(grades.tier136);
    });

    test('WR_TE production calculator for 51 receptions returns 126', () => {
      expect(
        ProductionCalculator.WR_TE.receptions(testInputs.wr_te.receptions[11])
      ).toBe(grades.tier126);
    });

    test('WR_TE production calculator for 60 receptions returns 126', () => {
      expect(
        ProductionCalculator.WR_TE.receptions(testInputs.wr_te.receptions[12])
      ).toBe(grades.tier126);
    });

    test('WR_TE production calculator for 71 receptions returns 126', () => {
      expect(
        ProductionCalculator.WR_TE.receptions(testInputs.wr_te.receptions[13])
      ).toBe(grades.tier126);
    });

    test('WR_TE production calculator for 30 receptions returns 116', () => {
      expect(
        ProductionCalculator.WR_TE.receptions(testInputs.wr_te.receptions[14])
      ).toBe(grades.tier116);
    });

    test('WR_TE production calculator for 44 receptions returns 116', () => {
      expect(
        ProductionCalculator.WR_TE.receptions(testInputs.wr_te.receptions[15])
      ).toBe(grades.tier116);
    });

    test('WR_TE production calculator for 50 receptions returns 116', () => {
      expect(
        ProductionCalculator.WR_TE.receptions(testInputs.wr_te.receptions[16])
      ).toBe(grades.tier116);
    });

    test('WR_TE production calculator for 25 receptions returns 98', () => {
      expect(
        ProductionCalculator.WR_TE.receptions(testInputs.wr_te.receptions[17])
      ).toBe(grades.tier98);
    });
  });
});
