const logicalAnd = require('../../functions/logicalOperations/logicalAnd');
const logicalOr = require('../../functions/logicalOperations/logicalOr');
const logicalNot = require('../../functions/logicalOperations/logicalNot');

describe('Logical operation tests', () => {
  test('Possitive logical AND test', () => {
    expect(logicalAnd(1, 'one')).toBeTruthy();
  });
  test('Negative logical AND test', () => {
    expect(logicalAnd(1, null)).toBeFalsy();
  });
  test('Possitive logical OR test', () => {
    expect(logicalOr(1, undefined)).toBeTruthy();
  });
  test('Negative logical OR test', () => {
    expect(logicalOr(undefined, null)).toBeFalsy();
  });
  test('Possitive logical NOT test', () => {
    expect(logicalNot(true)).toBe(false);
  });
  test('Negative logical NOT test', () => {
    expect(logicalNot(true)).not.toBe(true);
  });
});