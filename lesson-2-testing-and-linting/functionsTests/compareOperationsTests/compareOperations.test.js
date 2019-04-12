const greater = require('../../functions/compareOperations/greater');
const lessOrEqual = require('../../functions/compareOperations/lessOrEqual');
const less = require('../../functions/compareOperations/less');
const greaterOrEqual = require('../../functions/compareOperations/greaterOrEqual');
const equality = require('../../functions/compareOperations/equality');
const inequality = require('../../functions/compareOperations/inequality');
const identity = require('../../functions/compareOperations/identity');
const nonIdentity = require('../../functions/compareOperations/nonIdentity');

describe('Comparison operations', () => {
  test('True result', () => {
    expect(greater(5, 3)).toBeTruthy();
  });
  test('False result', () => {
    expect(greater(3, 5)).toBeFalsy();
  });
  test('True result', () => {
    expect(greaterOrEqual(5, 5)).toBeTruthy();
  });
  test('False result', () => {
    expect(greaterOrEqual(3, 5)).toBeFalsy();
  });
  test('True result', () => {
    expect(less(3, 4)).toBeTruthy();
  });
  test('False result', () => {
    expect(less(6, 5)).toBeFalsy();
  });
  test('True result', () => {
    expect(lessOrEqual(5, 5)).toBeTruthy();
  });
  test('False result', () => {
    expect(lessOrEqual(5, 2)).toBeFalsy();
  });
  test('True result', () => {
    expect(equality(null, undefined)).toBeTruthy();
  });
  test('False result', () => {
    expect(equality(5, 'five')).toBeFalsy();
  });
  test('True result', () => {
    expect(inequality(5, 'five')).toBeTruthy();
  });
  test('False result', () => {
    expect(inequality(null, undefined)).toBeFalsy();
  });
  test('True result', () => {
    expect(inequality(5, 'five')).toBeTruthy();
  });
  test('False result', () => {
    expect(inequality(null, undefined)).toBeFalsy();
  });
  test('True result', () => {
    expect(identity(null, null)).toBeTruthy();
  });
  test('False result', () => {
    expect(identity(NaN, NaN)).toBeFalsy();
  });
  test('True result', () => {
    expect(nonIdentity(NaN, NaN)).toBeTruthy();
  });
  test('False result', () => {
    expect(nonIdentity(null, null)).toBeFalsy();
  });
});