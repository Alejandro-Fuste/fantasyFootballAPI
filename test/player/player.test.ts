import { describe, expect, test } from '@jest/globals';
import { Player } from '../../src/models/player.model';

const p = new Player(
  'xyz',
  'John',
  'Doe',
  'QB',
  'NE',
  21,
  '6\'4"',
  '220',
  14,
  1,
  {}
);

describe('player model', () => {
  test('can instantiate player instance', () => {
    expect(typeof p).toBe('object');
  });

  test('can set first name via constructor arguments', () => {
    const fName = 'John';
    expect(p.firstName).toBe(fName);
  });

  test('can set last name via constructor arguments', () => {
    const lName = 'Doe';
    expect(p.lastName).toBe(lName);
  });

  test('can set position via constructor arguments', () => {
    const position = 'QB';
    expect(p.position).toBe(position);
  });

  test('can set team via constructor arguments', () => {
    const team = 'NE';
    expect(p.team).toBe(team);
  });

  test('can set age via constructor arguments', () => {
    const age = 21;
    expect(p.age).toBe(age);
  });

  test('can set height via constructor arguments', () => {
    const height = '6\'4"';
    expect(p.height).toBe(height);
  });

  test('can set weight via constructor arguments', () => {
    const weight = '220';
    expect(p.weight).toBe(weight);
  });

  test('can set years_exp via constructor arguments', () => {
    const yearsExp = 14;
    expect(p.yearsExp).toBe(yearsExp);
  });

  test('can set depth_chart_order via constructor arguments', () => {
    const depthChartOrder = 1;
    expect(p.depthChartOrder).toBe(depthChartOrder);
  });

  test('grades is empty object', () => {
    expect(typeof p.grades).toBe('object');
  });

  test('can set id via constructor arguments', () => {
    const id = 'xyz';
    expect(p.id).toBe(id);
  });
});
