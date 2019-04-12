const absMath = require('../../functions/objectMath/absMath');
const ceilMath = require('../../functions/objectMath/ceilMath');
const cosMath = require('../../functions/objectMath/cosMath');
const floorMath = require('../../functions/objectMath/floorMath');
const maxMath = require('../../functions/objectMath/maxMath');
const minMath = require('../../functions/objectMath/minMath');
const piMath = require('../../functions/objectMath/piMath');
const randomMath = require('../../functions/objectMath/randomMath');
const roundMath = require('../../functions/objectMath/roundMath');
const sinMath = require('../../functions/objectMath/sinMath');
const sqrtMath = require('../../functions/objectMath/sqrtMath');
const tanMath = require('../../functions/objectMath/tanMath');

describe('Test for Math object', () => {
  test('Possitive Math.abs() test', () => {
    expect(absMath(-7.5)).toBe(7.5);
  });
  test('Negative Math.abs() test', () => {
    expect(absMath(-7.5)).not.toBe(-7.5);
  });

  test('Possitive Math.ceil() test', () => {
    expect(ceilMath(7.7)).toBe(8);
  });
  test('Negative Math.ceil() test', () => {
    expect(ceilMath(7.7)).not.toBe(7);
  });

  test('Possitive Math.cos() test', () => {
    expect(cosMath(1)).toBe(0.5403023058681398);
  });
  test('Negative Math.cos() test', () => {
    expect(cosMath(1)).not.toBe(0);
  });

  test('Possitive Math.floor() test', () => {
    expect(floorMath(7.7)).toBe(7);
  });
  test('Negative Math.floor() test', () => {
    expect(floorMath(7.7)).not.toBe(8);
  });

  test('Possitive Math.max() test', () => {
    expect(maxMath(7, 5)).toBe(7);
  });
  test('Negative Math.max() test', () => {
    expect(maxMath(7, 5)).not.toBe(5);
  });

  test('Possitive Math.min() test', () => {
    expect(minMath(7, 5)).toBe(5);
  });
  test('Negative Math.min() test', () => {
    expect(minMath(7, 5)).not.toBe(7);
  });

  test('Possitive Math.PI test', () => {
    expect(piMath()).toBe(3.141592653589793);
  });
  test('Negative Math.PI test', () => {
    expect(piMath()).not.toBe(1);
  });

  test('Possitive Math.random() test', () => {
    expect(randomMath()).toBeTruthy();
  });
  test('Negative Math.random() test', () => {
    expect(randomMath()).not.toBeFalsy();
  });

  test('Possitive Math.round() test', () => {
    expect(roundMath(7.7)).toBe(8);
  });
  test('Negative Math.round() test', () => {
    expect(roundMath(7.7)).not.toBe(7);
  });

  test('Possitive Math.sin() test', () => {
    expect(sinMath(1)).toBe(0.8414709848078965);
  });
  test('Negative Math.sin() test', () => {
    expect(sinMath(1)).not.toBe(1);
  });

  test('Possitive Math.sqrt() test', () => {
    expect(sqrtMath(25)).toBe(5);
  });
  test('Negative Math.sqrt() test', () => {
    expect(sqrtMath(25)).not.toBe(4);
  });

  test('Possitive Math.tan() test', () => {
    expect(tanMath(1)).toBe(1.5574077246549023);
  });
  test('Negative Math.tan() test', () => {
    expect(tanMath(1)).not.toBe(1);
  });
});