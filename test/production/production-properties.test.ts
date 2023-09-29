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

describe('production model tests', () => {
  // production property tests

  // QB

  test('QB production criteria property has passing yards property', () => {
    expect(qbSample.passing_yards).toBe(passingYards);
  });

  test('QB production criteria property has passing touchdowns property', () => {
    expect(qbSample.passing_touchdowns).toBe(passingTouchdowns);
  });

  test('QB production criteria property has rushing yards property', () => {
    expect(qbSample.rushing_yards).toBe(rushingYards);
  });

  test('QB production criteria property has touchdowns property', () => {
    expect(qbSample.touchdowns).toBe(touchdowns);
  });

  // RB

  test('RB production criteria property has rushing yards property', () => {
    expect(rbSample.rushing_yards).toBe(rushingYards);
  });

  test('RB production criteria property has receiving yards property', () => {
    expect(rbSample.receiving_yards).toBe(receivingYards);
  });

  test('RB production criteria property has touchdowns property', () => {
    expect(rbSample.touchdowns).toBe(touchdowns2);
  });

  test('RB production criteria property has receptions property', () => {
    expect(rbSample.receptions).toBe(receptions);
  });

  // WR

  test('WR production criteria property has rushing yards property', () => {
    expect(wrSample.rushing_yards).toBe(rushingYards2);
  });

  test('WR production criteria property has receiving yards property', () => {
    expect(wrSample.receiving_yards).toBe(receivingYards2);
  });

  test('WR production criteria property has touchdowns property', () => {
    expect(wrSample.touchdowns).toBe(touchdowns3);
  });

  test('WR production criteria property has receptions property', () => {
    expect(wrSample.receptions).toBe(receptions2);
  });

  // TE

  test('TE production criteria property has rushing yards property', () => {
    expect(teSample.rushing_yards).toBe(rushingYards2);
  });

  test('TE production criteria property has receiving yards property', () => {
    expect(teSample.receiving_yards).toBe(receivingYards2);
  });

  test('TE production criteria property has touchdowns property', () => {
    expect(teSample.touchdowns).toBe(touchdowns3);
  });

  test('TE production criteria property has receptions property', () => {
    expect(teSample.receptions).toBe(receptions2);
  });
});
