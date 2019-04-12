const booleanFunc = require('../../functions/typeConversion/booleanFunc');
const twiceNo = require('../../functions/typeConversion/twiceNo');

describe('Type conversion operation tests', () => {
  test('Possitive Boolean() function test', () => {
    expect(booleanFunc(5)).toBeTruthy();
  });
  test('Negative Boolean() function test', () => {
    expect(booleanFunc(null)).toBeFalsy();
  });
  test('Possitive twice no test', () => {
    expect(twiceNo(5)).toBe(true);
  });
  test('Negative twice no test', () => {
    expect(twiceNo(undefined)).not.toBe(true);
  });
});
