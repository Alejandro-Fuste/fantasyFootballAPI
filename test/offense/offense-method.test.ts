import { describe, expect, test } from '@jest/globals';
import { Offense } from '../../src/models/offense.model';

let quarterback = 70;
let offensiveCoordinator = 76;
let offensiveLine = 78.8;
let offenseSample = new Offense(
  quarterback,
  offensiveCoordinator,
  offensiveLine
);

const offenseObject = offenseSample.returnObject();

const testResults = {
  sum: 224.8,
  percentage: 74.93,
  letter: 'C',
  description: 'Average',
};

describe('grade model tests for offense methods', () => {
  test('return object has sum property that returns sum of 224.8', () => {
    expect(offenseObject.points).toBe(testResults.sum);
  });

  test('return object has percentage property that returns 74.93', () => {
    expect(offenseObject.percentage).toBe(testResults.percentage);
  });

  test('return object has letter property that returns C', () => {
    expect(offenseObject.letter).toBe(testResults.letter);
  });

  test('return object has description property that returns Average', () => {
    expect(offenseObject.description).toBe(testResults.description);
  });

  test('return object has property for quarterback that returns a number grade', () => {
    expect(offenseObject.propertyValues.quarterback).toBe(quarterback);
  });

  test('return object has property for offensive coordinator that returns a number grade', () => {
    expect(offenseObject.propertyValues.offensive_coordinator).toBe(
      offensiveCoordinator
    );
  });

  test('return object has property for offensive line returns a number grade', () => {
    expect(offenseObject.propertyValues.offensive_line).toBe(offensiveLine);
  });
});
