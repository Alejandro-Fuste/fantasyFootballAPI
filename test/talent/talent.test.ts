import { describe, expect, test } from '@jest/globals';
import { Talent } from '../../src/models/talent.model';

const velocity = 75;
const accelartion = 100;
const agility = 60;
const age = 50;
const height = 20;
const weight = 20;
const skillPoints = 181;
// const missingInput = undefined;
let talentSample = new Talent(
  velocity,
  accelartion,
  agility,
  age,
  height,
  weight,
  skillPoints
);

// let badTalentSample = new Talent(
//   velocity,
//   accelartion,
//   agility,
//   age,
//   height,
//   weight,
//   missingInput
// );

let talentSampleObject = talentSample.returnObject();
// let badTalentSampleObject = badTalentSample.returnObject();

let testObject = {
  letter: 'A',
  description: 'Great',
  points: 506,
  percentage: 92,
  naLetter: 'N/A',
  missingInputMessage: 'Oops, something went wrong..could not calculate grade',
};

describe('talent model tests for talent properties', () => {
  test('can instantiate talent instance', () => {
    expect(typeof talentSample).toBe('object');
  });

  // talent property tests

  test('talent property has velocity property', () => {
    expect(talentSample.velocity).toBe(velocity);
  });

  test('talent property has acceleration property', () => {
    expect(talentSample.acceleration).toBe(accelartion);
  });

  test('talent property has agility property', () => {
    expect(talentSample.agility).toBe(agility);
  });

  test('talent property has age property', () => {
    expect(talentSample.age).toBe(age);
  });

  test('talent property has height property', () => {
    expect(talentSample.height).toBe(height);
  });

  test('talent property has weight property', () => {
    expect(talentSample.weight).toBe(weight);
  });

  test('talent property has skills property', () => {
    expect(talentSample.skill_points).toBe(skillPoints);
  });
});

// talent method tests
describe('talent model tests for talent methods', () => {
  test('talent model returns a string representing letter grade', () => {
    expect(typeof talentSampleObject.letter).toBe('string');
  });

  test('talent model returns a number representing percentage', () => {
    expect(typeof talentSampleObject.percentage).toBe('number');
  });

  test('talent model returns a number representing point total', () => {
    expect(typeof talentSampleObject.points).toBe('number');
  });

  test('example scenario returns a letter grade of A', () => {
    expect(talentSampleObject.letter).toBe(testObject.letter);
  });

  test('example scenario returns a description grade of Great', () => {
    expect(talentSampleObject.description).toBe(testObject.description);
  });

  test('example scenario returns a 92 percentage', () => {
    expect(talentSampleObject.percentage).toBe(testObject.percentage);
  });

  test('example scenario returns a 506 point total', () => {
    expect(talentSampleObject.points).toBe(testObject.points);
  });

  test('return object has property for velocity that returns a number grade', () => {
    expect(talentSampleObject.propertyValues.velocity).toBe(velocity);
  });

  test('return object has property for acceleration that returns a number grade', () => {
    expect(talentSampleObject.propertyValues.acceleration).toBe(accelartion);
  });

  test('return object has property for agility returns a number grade', () => {
    expect(talentSampleObject.propertyValues.agility).toBe(agility);
  });

  test('return object has property for age returns a number grade', () => {
    expect(talentSampleObject.propertyValues.age).toBe(age);
  });

  test('return object has property for height returns a number grade', () => {
    expect(talentSampleObject.propertyValues.height).toBe(height);
  });

  test('return object has property for weight returns a number grade', () => {
    expect(talentSampleObject.propertyValues.weight).toBe(weight);
  });

  test('return object has property for skill points returns a number grade', () => {
    expect(talentSampleObject.propertyValues.skill_points).toBe(skillPoints);
  });

  // test('Something went wrong message is returned with missing input ', () => {
  //   expect(badTalentSampleObject.description).toBe(testObject.description);
  // });

  // test('N/A is returned for letter grade with missing input', () => {
  //   expect(badTalentSampleObject.letter).toBe(testObject.naLetter);
  // });
});
