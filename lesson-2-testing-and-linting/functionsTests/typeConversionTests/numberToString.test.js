const stringFunc = require('../../functions/typeConversion/stringFunc');
const toStrMeth = require('../../functions/typeConversion/parseFloat');
const emptyStringConcat = require('../../functions/typeConversion/emptyStringConcat');

describe('Type conversion operation tests', () => {
  test('Possitive String() function test', () => {
    expect(stringFunc(-5.5)).toBe('-5.5');
  });
  test('Negative String() function test', () => {
    expect(stringFunc(-5.5)).not.toBe(-5.5);
  });
  test('Possitive toString() test', () => {
    expect(toStrMeth(-5.5)).toBeFalsy();
  });
  test('Negative toString() test', () => {
    expect(toStrMeth(0)).not.toBe('0');
  });
  test('Possitive concatination with empty string test', () => {
    expect(emptyStringConcat(-5.5)).toBe('-5.5');
  });
  test('Negative concatination with empty string test', () => {
    expect(emptyStringConcat(-5.5)).not.toBe('5.5');
  });
});