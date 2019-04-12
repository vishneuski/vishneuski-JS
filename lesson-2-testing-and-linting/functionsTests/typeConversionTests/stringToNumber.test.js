const intParse = require('../../functions/typeConversion/parseInt');
const floatParse = require('../../functions/typeConversion/parseFloat');
const num = require('../../functions/typeConversion/num');
const mathOperation = require('../../functions/typeConversion/mathOperation');

describe('Type conversion operation tests', () => {
  test('Possitive parseInt test', () => {
    expect(intParse('321rew')).toBe(321);
  });
  test('Negative parseInt test', () => {
    expect(intParse('b123rew')).not.toBe(123);
  });
  test('Possitive parseFloat test', () => {
    expect(floatParse('321.1.2qwe')).toBe(321.1);
  });
  test('Negative parseFloat test', () => {
    expect(floatParse('321.1.2qwe')).not.toBe(321.2);
  });
  test('Possitive num test', () => {
    expect(num('321.2qwe')).toBe(NaN);
  });
  test('Negative num test', () => {
    expect(num('321')).not.toBe(NaN);
  });
  test('Possitive math operation test', () => {
    expect(mathOperation('5', 2)).toBe(10);
  });
  test('Negative math operation test', () => {
    expect(mathOperation('5', 2)).not.toBe('10');
  });
});