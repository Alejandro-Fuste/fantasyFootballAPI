import { describe, expect, test } from '@jest/globals';
import { Production } from '../../src/models/production.model';

const position = 'QB';
const position2 = 'RB';
const position3 = 'WR';
const position4 = 'TE';

const receptions = 55;
const receptions2 = 136;
const rushingYards = 95;
const rushingYards2 = 55;
const receivingYards = 55;
const receivingYards2 = 147;
const touchdowns = 75;
const touchdowns2 = 95;
const touchdowns3 = 147;
const passingTouchdowns = 110;
const passingYards = 127;

let testObject = {
  qbSum: 407,
  rbSum: 300,
  wrSum: 485,
  teSum: 485,
  qbPercentage: 61.02,
  rbPercentage: 60,
  wrPercentage: 97,
  tePercentage: 97,
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

const qbSample = new Production(
  position,
  passingYards,
  rushingYards,
  undefined,
  passingTouchdowns,
  touchdowns,
  undefined
);

const rbSample = new Production(
  position2,
  undefined,
  rushingYards,
  receivingYards,
  undefined,
  touchdowns2,
  receptions
);

const wrSample = new Production(
  position3,
  undefined,
  rushingYards2,
  receivingYards2,
  undefined,
  touchdowns3,
  receptions2
);

const teSample = new Production(
  position4,
  undefined,
  rushingYards2,
  receivingYards2,
  undefined,
  touchdowns3,
  receptions2
);

const qbObject = qbSample.arrayConstructor('QB');
const qbArray = qbObject[3];

describe('production model tests', () => {
  // array constructor tests

  test('array constructor method returns array with passing_touchdowns for QB', () => {
    expect(qbArray).toBe(passingTouchdowns);
  });

  test('array constructor method returns array with RB touchdowns', () => {
    expect(rbSample.arrayConstructor('RB')[1]).toBe(touchdowns2);
  });

  // property value constructor tests

  test('property value constructor method returns object with passing_yards for QB', () => {
    expect(qbSample.returnObject().propertyValues.passing_yards).toBe(
      passingYards
    );
  });

  test('property value constructor method returns object with passing_touchdowns for QB', () => {
    expect(qbSample.returnObject().propertyValues.passing_touchdowns).toBe(
      passingTouchdowns
    );
  });

  test('property value constructor method returns object with rushing_yards for RB', () => {
    expect(rbSample.returnObject().propertyValues.rushing_yards).toBe(
      rushingYards
    );
  });

  test('property value constructor method returns object with receiving_yards for WR', () => {
    expect(wrSample.returnObject().propertyValues.receiving_yards).toBe(
      receivingYards2
    );
  });

  test('property value constructor method returns object with touchdowns for TE', () => {
    expect(teSample.returnObject().propertyValues.touchdowns).toBe(touchdowns3);
  });

  // return object tests

  test('letter property for QB should be D', () => {
    expect(qbSample.returnObject().letter).toBe(testObject.letters[5]);
  });

  test('letter property for RB should be D', () => {
    expect(rbSample.returnObject().letter).toBe(testObject.letters[5]);
  });

  test('letter property for WR should be A+', () => {
    expect(wrSample.returnObject().letter).toBe(testObject.letters[0]);
  });

  test('letter property for TE should be A+', () => {
    expect(teSample.returnObject().letter).toBe(testObject.letters[0]);
  });

  test('description property for QB should be below average', () => {
    expect(qbSample.returnObject().description).toBe(
      testObject.descriptions[5]
    );
  });

  test('description property for RB should be below average', () => {
    expect(rbSample.returnObject().description).toBe(
      testObject.descriptions[5]
    );
  });

  test('description property for WR should be elite', () => {
    expect(wrSample.returnObject().description).toBe(
      testObject.descriptions[0]
    );
  });

  test('description property for TE should be elite', () => {
    expect(teSample.returnObject().description).toBe(
      testObject.descriptions[0]
    );
  });

  test('points property for QB should be 407', () => {
    expect(qbSample.returnObject().points).toBe(testObject.qbSum);
  });

  test('points property for RB should be 300', () => {
    expect(rbSample.returnObject().points).toBe(testObject.rbSum);
  });

  test('points property for WR should be 485', () => {
    expect(wrSample.returnObject().points).toBe(testObject.wrSum);
  });

  test('points property for TE should be 485', () => {
    expect(teSample.returnObject().points).toBe(testObject.teSum);
  });

  test('percentage property for QB should be 61.02', () => {
    expect(qbSample.returnObject().percentage).toBe(testObject.qbPercentage);
  });

  test('percentage property for RB should be 60', () => {
    expect(rbSample.returnObject().percentage).toBe(testObject.rbPercentage);
  });

  test('percentage property for TE should be 97', () => {
    expect(wrSample.returnObject().percentage).toBe(testObject.wrPercentage);
  });

  test('percentage property for TE should be 97', () => {
    expect(teSample.returnObject().percentage).toBe(testObject.tePercentage);
  });
});
