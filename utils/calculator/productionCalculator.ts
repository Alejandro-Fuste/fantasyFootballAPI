export default {
  QB: {
    passing_yards: (value: number): number => {
      if (value >= 5000) {
        return 167;
      } else if (value >= 4500 && value <= 4999) {
        return 157;
      } else if (value >= 4000 && value <= 4499) {
        return 147;
      } else if (value >= 3500 && value <= 3999) {
        return 137;
      } else if (value >= 3000 && value <= 3499) {
        return 127;
      } else if (value >= 1000 && value <= 2999) {
        return 110;
      } else {
        return 99;
      }
    },
    rushing_yards: (value: number): number => {
      if (value >= 1000) {
        return 166;
      } else if (value >= 900 && value <= 999) {
        return 156;
      } else if (value >= 800 && value <= 899) {
        return 146;
      } else if (value >= 700 && value <= 799) {
        return 136;
      } else if (value >= 600 && value <= 699) {
        return 126;
      } else if (value >= 400 && value <= 599) {
        return 116;
      } else {
        return 99;
      }
    },
    passing_touchdowns: (value: number): number => {
      if (value >= 48) {
        return 167;
      } else if (value >= 40 && value <= 47) {
        return 157;
      } else if (value >= 30 && value <= 39) {
        return 147;
      } else if (value >= 20 && value <= 29) {
        return 137;
      } else if (value >= 10 && value <= 19) {
        return 127;
      } else {
        return 99;
      }
    },
    rushing_touchdowns: (value: number): number => {
      if (value >= 12) {
        return 167;
      } else if (value >= 10 && value <= 11) {
        return 157;
      } else if (value >= 8 && value <= 9) {
        return 147;
      } else if (value >= 5 && value <= 7) {
        return 137;
      } else if (value >= 2 && value <= 4) {
        return 127;
      } else {
        return 99;
      }
    },
  },
  RB: {
    rushing_yards: (value: number): number => {
      if (value >= 1800) {
        return 125;
      } else if (value >= 1500 && value <= 1799) {
        return 115;
      } else if (value >= 1200 && value <= 1499) {
        return 105;
      } else if (value >= 900 && value <= 1199) {
        return 95;
      } else if (value >= 600 && value <= 899) {
        return 85;
      } else if (value >= 300 && value <= 599) {
        return 75;
      } else {
        return 55;
      }
    },
    receiving_yards: (value: number): number => {
      if (value >= 900) {
        return 125;
      } else if (value >= 800 && value <= 899) {
        return 115;
      } else if (value >= 700 && value <= 799) {
        return 105;
      } else if (value >= 600 && value <= 699) {
        return 95;
      } else if (value >= 500 && value <= 599) {
        return 85;
      } else if (value >= 400 && value <= 499) {
        return 75;
      } else {
        return 55;
      }
    },
    touchdowns: (value: number): number => {
      if (value >= 25) {
        return 125;
      } else if (value >= 20 && value <= 24) {
        return 115;
      } else if (value >= 15 && value <= 19) {
        return 105;
      } else if (value >= 10 && value <= 14) {
        return 95;
      } else if (value >= 5 && value <= 9) {
        return 85;
      } else if (value >= 2 && value <= 4) {
        return 75;
      } else {
        return 55;
      }
    },
    receptions: (value: number): number => {
      if (value >= 100) {
        return 125;
      } else if (value >= 90 && value <= 99) {
        return 115;
      } else if (value >= 80 && value <= 89) {
        return 105;
      } else if (value >= 70 && value <= 79) {
        return 95;
      } else if (value >= 60 && value <= 69) {
        return 85;
      } else if (value >= 50 && value <= 59) {
        return 75;
      } else {
        return 55;
      }
    },
  },
  WR_TE: {
    receiving_yards: (value: number): number => {
      if (value >= 1850) {
        return 167;
      } else if (value >= 1549 && value <= 1849) {
        return 157;
      } else if (value >= 1248 && value <= 1548) {
        return 147;
      } else if (value >= 1000 && value <= 1247) {
        return 137;
      } else if (value >= 800 && value <= 999) {
        return 127;
      } else if (value >= 500 && value <= 799) {
        return 117;
      } else {
        return 99;
      }
    },
    touchdowns: (value: number): number => {
      if (value >= 20) {
        return 167;
      } else if (value >= 15 && value <= 19) {
        return 157;
      } else if (value >= 10 && value <= 14) {
        return 147;
      } else if (value >= 5 && value <= 9) {
        return 137;
      } else if (value >= 2 && value <= 4) {
        return 127;
      } else {
        return 99;
      }
    },
    receptions: (value: number): number => {
      if (value >= 135) {
        return 166;
      } else if (value >= 114 && value <= 134) {
        return 156;
      } else if (value >= 93 && value <= 113) {
        return 146;
      } else if (value >= 72 && value <= 92) {
        return 136;
      } else if (value >= 51 && value <= 71) {
        return 126;
      } else if (value >= 30 && value <= 50) {
        return 116;
      } else {
        return 98;
      }
    },
  },
};
