export class Grade {
  constructor() {}

  badInput(input: any): any {
    if (!input || typeof input === 'string' || input < 0 || input.length === 0)
      return 0;

    if (Array.isArray(input)) {
      let a = input.filter((a) => typeof a !== 'number');

      if (a.length > 0) return 0;
    }

    return input;
  }

  sumCriteriaPoints(array: Array<number | undefined>): number {
    let list = this.badInput(array);

    let sum: number = list.reduce((a: number, b: number) => a + b);
    return sum;
  }

  percentage(sum: number, total: number): number | string {
    let sum1 = this.badInput(sum);
    let total1 = this.badInput(total);

    if (sum1 > total1)
      return 'Oops, could not calculate...sum is greater than total';

    let result = (sum1 / total1) * 100;
    return parseFloat(result.toFixed(2));
  }

  criteriaGrade(value: number | any): { letter: string; description: string } {
    if (value >= 96) {
      return { letter: 'A+', description: 'Elite' };
    } else if (value >= 90 && value <= 95.99) {
      return { letter: 'A', description: 'Great' };
    } else if (value >= 86 && value <= 89.99) {
      return { letter: 'B+', description: 'Good' };
    } else if (value >= 80 && value <= 85.99) {
      return { letter: 'B', description: 'Above Average' };
    } else if (value >= 70 && value <= 79.99) {
      return { letter: 'C', description: 'Average' };
    } else if (value >= 60 && value <= 69.99) {
      return { letter: 'D', description: 'Below Average' };
    } else if (value > 1 && value <= 59.99) {
      return { letter: 'F', description: 'Not Good Enough' };
    } else {
      return {
        letter: 'N/A',
        description: 'Oops, something went wrong..could not calculate grade',
      };
    }
  }
}
