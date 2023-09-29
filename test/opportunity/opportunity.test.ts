import { describe, expect, test } from '@jest/globals';
import { Opportunity } from '../../src/models/opportunity.model';

const position = 'QB';
const position2 = 'RB';
const depthChart = 86;
const experience = 0;
const experience2 = 4;
const games = 80;
const snaps = 75;
const carries = 60;
const targets = 50;

const letter = 'B+';
const description = 'Good';
const letter2 = 'C';
const description2 = 'Average';
const rbPoints = 351;
const rbPercentage = 70.2;
const qbPoints = 301;
const qbPercentage = 75.25;

const rookieSample = new Opportunity(experience, depthChart, position);
const rookieObject = rookieSample.returnObject();

const nonRookieSampleRB = new Opportunity(
  experience2,
  depthChart,
  position2,
  games,
  snaps,
  carries,
  targets
);
const nonRookieObjectRB = nonRookieSampleRB.returnObject();

const nonRookieSampleQB = new Opportunity(
  experience2,
  depthChart,
  position,
  games,
  snaps,
  carries
);
const nonRookieObjectQB = nonRookieSampleQB.returnObject();

describe('opportunity tests', () => {
  // rookie opportunity property tests
  test('return object has points property of 86', () => {
    expect(rookieObject.points).toBe(depthChart);
  });

  test('return object has percentage property of 86', () => {
    expect(rookieObject.percentage).toBe(depthChart);
  });

  test('return object has letter property of B+', () => {
    expect(rookieObject.letter).toBe(letter);
  });

  test('return object has description property of Good', () => {
    expect(rookieObject.description).toBe(description);
  });

  test('return object has experience property', () => {
    expect(rookieObject.propertyValues.experience).toBe(experience);
  });

  test('return object has depth chart property of 86', () => {
    expect(rookieObject.propertyValues.depthChart).toBe(depthChart);
  });

  test('return object has position property', () => {
    expect(rookieObject.propertyValues.position).toBe(position);
  });

  // nonRookie RB opportunity property tests
  test('return object has letter property of C', () => {
    expect(nonRookieObjectRB.letter).toBe(letter2);
  });

  test('return object has description property of Average', () => {
    expect(nonRookieObjectRB.description).toBe(description2);
  });

  test('return object has points property of 351', () => {
    expect(nonRookieObjectRB.points).toBe(rbPoints);
  });

  test('return object has percentage property of 70.2', () => {
    expect(nonRookieObjectRB.percentage).toBe(rbPercentage);
  });

  test('return object has experience property', () => {
    expect(nonRookieObjectRB.propertyValues.experience).toBe(experience2);
  });

  test('return object has depth chart property', () => {
    expect(nonRookieObjectRB.propertyValues.depthChart).toBe(depthChart);
  });

  test('return object has position property', () => {
    expect(nonRookieObjectRB.propertyValues.position).toBe(position2);
  });

  test('return object has games property', () => {
    expect(nonRookieObjectRB.propertyValues.games).toBe(games);
  });

  test('return object has snaps property', () => {
    expect(nonRookieObjectRB.propertyValues.snaps).toBe(snaps);
  });

  test('return object has carries property', () => {
    expect(nonRookieObjectRB.propertyValues.carries).toBe(carries);
  });

  test('return object has targets property', () => {
    expect(nonRookieObjectRB.propertyValues.targets).toBe(targets);
  });

  // nonRookie QB opportunity property tests

  test('return object has letter property of C', () => {
    expect(nonRookieObjectQB.letter).toBe(letter2);
  });

  test('return object has description property of Average', () => {
    expect(nonRookieObjectQB.description).toBe(description2);
  });

  test('return object has points property of 301', () => {
    expect(nonRookieObjectQB.points).toBe(qbPoints);
  });

  test('return object has percentage property of 75.25', () => {
    expect(nonRookieObjectQB.percentage).toBe(qbPercentage);
  });

  test('return object has experience property', () => {
    expect(nonRookieObjectQB.propertyValues.experience).toBe(experience2);
  });

  test('return object has depth chart property', () => {
    expect(nonRookieObjectQB.propertyValues.depthChart).toBe(depthChart);
  });

  test('return object has position property', () => {
    expect(nonRookieObjectQB.propertyValues.position).toBe(position);
  });

  test('return object has games property', () => {
    expect(nonRookieObjectQB.propertyValues.games).toBe(games);
  });

  test('return object has snaps property', () => {
    expect(nonRookieObjectQB.propertyValues.snaps).toBe(snaps);
  });

  test('return object has carries property', () => {
    expect(nonRookieObjectQB.propertyValues.carries).toBe(carries);
  });
});
