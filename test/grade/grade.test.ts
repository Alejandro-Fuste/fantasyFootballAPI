import { describe, expect, test } from '@jest/globals';
import { Grade } from '../../src/models/grade.model';

const gradeObject = new Grade();

const testInputs = {
  blank: undefined,
  empty_string: '',
  negative_number: -72,
  too_large_number: 2000,
  empty_array: [],
  array: [75, 100, 75, 50, 50, 200],
  array2: [117, 117, 117],
  sum1: 550,
  sum2: 506,
  percentages: [
    96, 98, 90, 94, 95.99, 86, 88, 89.99, 80, 83, 85.99, 70, 75, 79.99, 60, 65,
    69.99, 59.99, 50,
  ],
};

let testObject = {
  zero: 0,
  arraySum: 550,
  arraySum2: 351,
  percentage1: 100,
  percentage2: 92,
  letters: ['A+', 'A', 'B+', 'B', 'C', 'D', 'F'],
  descriptions: [
    'Elite',
    'Great',
    'Good',
    'Above Average',
    'Average',
    'Below Average',
    'Not Good Enough',
  ],
  notAvailable: 'N/A',
  notAvailableDescription:
    'Oops, something went wrong..could not calculate grade',
};

describe('grade model tests', () => {
  /********** negative tests **********/
  // bad input method
  test('badInput method returns 0 for missing input', () => {
    expect(gradeObject.badInput(testInputs.blank)).toBe(testObject.zero);
  });

  test('badInput method returns 0 for string input', () => {
    expect(gradeObject.badInput(testInputs.empty_string)).toBe(testObject.zero);
  });

  test('badInput method returns 0 for negative number', () => {
    expect(gradeObject.badInput(testInputs.negative_number)).toBe(
      testObject.zero
    );
  });

  // percentage method
  test('percentage method returns error message when sum is greater than total', () => {
    expect(gradeObject.percentage(100, 50)).toBe(
      'Oops, could not calculate...sum is greater than total'
    );
  });

  // criteriaGrade method
  test('criteriaGrade method returns N/A for string input', () => {
    expect(gradeObject.criteriaGrade(testInputs.empty_string).letter).toBe(
      testObject.notAvailable
    );
  });

  test('criteriaGrade method returns N/A for empty string input', () => {
    expect(gradeObject.criteriaGrade(testInputs.empty_string).letter).toBe(
      testObject.notAvailable
    );
  });

  test('criteriaGrade method returns N/A for undefined input', () => {
    expect(gradeObject.criteriaGrade(testInputs.blank).letter).toBe(
      testObject.notAvailable
    );
  });

  test('criteriaGrade method returns Oops, something went wrong..could not calculate grade for empty string input', () => {
    expect(gradeObject.criteriaGrade(testInputs.empty_string).description).toBe(
      testObject.notAvailableDescription
    );
  });

  test('criteriaGrade method returns Oops, something went wrong..could not calculate grade for undefined input', () => {
    expect(gradeObject.criteriaGrade(testInputs.blank).description).toBe(
      testObject.notAvailableDescription
    );
  });

  /******** positive tests *********/

  // badInput
  test('badInput method returns input', () => {
    expect(gradeObject.badInput(testInputs.array)).toBe(testInputs.array);
  });

  // sumCriteriaPoints

  test('sumCriteriaPoints method returns sum of 550', () => {
    expect(gradeObject.sumCriteriaPoints(testInputs.array)).toBe(
      testObject.arraySum
    );
  });

  test('sumCriteriaPoints method returns sum of 351', () => {
    expect(gradeObject.sumCriteriaPoints(testInputs.array2)).toBe(
      testObject.arraySum2
    );
  });

  // percentage

  test('percentage method returns 100 for 550 sum and 550 total inputs', () => {
    expect(gradeObject.percentage(testInputs.sum1, testObject.arraySum)).toBe(
      testObject.percentage1
    );
  });

  test('percentage method returns 92 for 506 sum and 550 total inputs', () => {
    expect(gradeObject.percentage(testInputs.sum2, testObject.arraySum)).toBe(
      testObject.percentage2
    );
  });

  // criteriaGrade

  test('criteriaGrade method returns A+ for 96 input', () => {
    expect(gradeObject.criteriaGrade(testInputs.percentages[0]).letter).toBe(
      testObject.letters[0]
    );
  });

  test('criteriaGrade method description returns Elite for 96 input', () => {
    expect(
      gradeObject.criteriaGrade(testInputs.percentages[0]).description
    ).toBe(testObject.descriptions[0]);
  });

  test('criteriaGrade method returns A+ for 98 input', () => {
    expect(gradeObject.criteriaGrade(testInputs.percentages[1]).letter).toBe(
      testObject.letters[0]
    );
  });

  test('criteriaGrade method description returns Elite for 98 input', () => {
    expect(
      gradeObject.criteriaGrade(testInputs.percentages[1]).description
    ).toBe(testObject.descriptions[0]);
  });

  test('criteriaGrade method returns A for 90 input', () => {
    expect(gradeObject.criteriaGrade(testInputs.percentages[2]).letter).toBe(
      testObject.letters[1]
    );
  });

  test('criteriaGrade method description returns Great for 90 input', () => {
    expect(
      gradeObject.criteriaGrade(testInputs.percentages[2]).description
    ).toBe(testObject.descriptions[1]);
  });

  test('criteriaGrade method returns A for 94 input', () => {
    expect(gradeObject.criteriaGrade(testInputs.percentages[3]).letter).toBe(
      testObject.letters[1]
    );
  });

  test('criteriaGrade method description returns Great for 94 input', () => {
    expect(
      gradeObject.criteriaGrade(testInputs.percentages[3]).description
    ).toBe(testObject.descriptions[1]);
  });

  test('criteriaGrade method returns A for 95.99 input', () => {
    expect(gradeObject.criteriaGrade(testInputs.percentages[4]).letter).toBe(
      testObject.letters[1]
    );
  });

  test('criteriaGrade method description returns Great for 95.99 input', () => {
    expect(
      gradeObject.criteriaGrade(testInputs.percentages[4]).description
    ).toBe(testObject.descriptions[1]);
  });

  test('criteriaGrade method returns B+ for 86 input', () => {
    expect(gradeObject.criteriaGrade(testInputs.percentages[5]).letter).toBe(
      testObject.letters[2]
    );
  });

  test('criteriaGrade method description returns Good for 86 input', () => {
    expect(
      gradeObject.criteriaGrade(testInputs.percentages[5]).description
    ).toBe(testObject.descriptions[2]);
  });

  test('criteriaGrade method returns B+ for 88 input', () => {
    expect(gradeObject.criteriaGrade(testInputs.percentages[6]).letter).toBe(
      testObject.letters[2]
    );
  });

  test('criteriaGrade method description returns Good for 88 input', () => {
    expect(
      gradeObject.criteriaGrade(testInputs.percentages[6]).description
    ).toBe(testObject.descriptions[2]);
  });

  test('criteriaGrade method returns B+ for 89.99 input', () => {
    expect(gradeObject.criteriaGrade(testInputs.percentages[7]).letter).toBe(
      testObject.letters[2]
    );
  });

  test('criteriaGrade method description returns Good for 89.99 input', () => {
    expect(
      gradeObject.criteriaGrade(testInputs.percentages[7]).description
    ).toBe(testObject.descriptions[2]);
  });

  test('criteriaGrade method returns B for 80 input', () => {
    expect(gradeObject.criteriaGrade(testInputs.percentages[8]).letter).toBe(
      testObject.letters[3]
    );
  });

  test('criteriaGrade method description returns Above Average for 80 input', () => {
    expect(
      gradeObject.criteriaGrade(testInputs.percentages[8]).description
    ).toBe(testObject.descriptions[3]);
  });

  test('criteriaGrade method returns B for 83 input', () => {
    expect(gradeObject.criteriaGrade(testInputs.percentages[9]).letter).toBe(
      testObject.letters[3]
    );
  });

  test('criteriaGrade method description returns Above Average for 83 input', () => {
    expect(
      gradeObject.criteriaGrade(testInputs.percentages[9]).description
    ).toBe(testObject.descriptions[3]);
  });

  test('criteriaGrade method returns B for 85.99 input', () => {
    expect(gradeObject.criteriaGrade(testInputs.percentages[10]).letter).toBe(
      testObject.letters[3]
    );
  });

  test('criteriaGrade method description returns Above Average for 85.99 input', () => {
    expect(
      gradeObject.criteriaGrade(testInputs.percentages[10]).description
    ).toBe(testObject.descriptions[3]);
  });

  test('criteriaGrade method letter returns C for 70 input', () => {
    expect(gradeObject.criteriaGrade(testInputs.percentages[11]).letter).toBe(
      testObject.letters[4]
    );
  });

  test('criteriaGrade method description returns Average for 70 input', () => {
    expect(
      gradeObject.criteriaGrade(testInputs.percentages[11]).description
    ).toBe(testObject.descriptions[4]);
  });

  test('criteriaGrade method returns C for 75 input', () => {
    expect(gradeObject.criteriaGrade(testInputs.percentages[12]).letter).toBe(
      testObject.letters[4]
    );
  });

  test('criteriaGrade method description returns Average for 75 input', () => {
    expect(
      gradeObject.criteriaGrade(testInputs.percentages[12]).description
    ).toBe(testObject.descriptions[4]);
  });

  test('criteriaGrade method returns C for 79.99 input', () => {
    expect(gradeObject.criteriaGrade(testInputs.percentages[13]).letter).toBe(
      testObject.letters[4]
    );
  });

  test('criteriaGrade method description returns Average for 79.99 input', () => {
    expect(
      gradeObject.criteriaGrade(testInputs.percentages[13]).description
    ).toBe(testObject.descriptions[4]);
  });

  test('criteriaGrade method returns D for 60 input', () => {
    expect(gradeObject.criteriaGrade(testInputs.percentages[14]).letter).toBe(
      testObject.letters[5]
    );
  });

  test('criteriaGrade method description returns Below Average for 60 input', () => {
    expect(
      gradeObject.criteriaGrade(testInputs.percentages[14]).description
    ).toBe(testObject.descriptions[5]);
  });

  test('criteriaGrade method returns D for 65 input', () => {
    expect(gradeObject.criteriaGrade(testInputs.percentages[15]).letter).toBe(
      testObject.letters[5]
    );
  });

  test('criteriaGrade method description returns Below Average for 65 input', () => {
    expect(
      gradeObject.criteriaGrade(testInputs.percentages[15]).description
    ).toBe(testObject.descriptions[5]);
  });

  test('criteriaGrade method letter returns D for 69.99 input', () => {
    expect(gradeObject.criteriaGrade(testInputs.percentages[16]).letter).toBe(
      testObject.letters[5]
    );
  });

  test('criteriaGrade method description returns Below Average for 69.99 input', () => {
    expect(
      gradeObject.criteriaGrade(testInputs.percentages[16]).description
    ).toBe(testObject.descriptions[5]);
  });

  test('criteriaGrade method returns F for 59.99 input', () => {
    expect(gradeObject.criteriaGrade(testInputs.percentages[17]).letter).toBe(
      testObject.letters[6]
    );
  });

  test('criteriaGrade method description returns Not Good Enough for 59.99 input', () => {
    expect(
      gradeObject.criteriaGrade(testInputs.percentages[17]).description
    ).toBe(testObject.descriptions[6]);
  });

  test('criteriaGrade method letter returns F for 50 input', () => {
    expect(gradeObject.criteriaGrade(testInputs.percentages[18]).letter).toBe(
      testObject.letters[6]
    );
  });

  test('criteriaGrade method description returns Not Good Enough for 50 input', () => {
    expect(
      gradeObject.criteriaGrade(testInputs.percentages[18]).description
    ).toBe(testObject.descriptions[6]);
  });
});
