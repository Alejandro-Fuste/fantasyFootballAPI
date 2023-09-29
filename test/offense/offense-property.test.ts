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

describe('grade model tests for offense properties', () => {
  test('offense criteria property has quarterback property', () => {
    expect(offenseSample.quarterback).toBe(quarterback);
  });

  test('offense criteria property has offensive coordinator property', () => {
    expect(offenseSample.offensive_coordinator).toBe(offensiveCoordinator);
  });

  test('offense criteria property has offensive line property', () => {
    expect(offenseSample.offensive_line).toBe(offensiveLine);
  });
});
