const checkIsNan = require('../../functions/typeConversion/checkIsNaN');
const checkIsFinite = require('../../functions/typeConversion/checkIsFinite');

describe('Check type conversion result', () => {
  test('Positive isNaN function type conversion result', () => {
    expect(checkIsNan('123')).toBeFalsy();
  });
  test('Negative isNaN function type conversion result', () => {
    expect(checkIsNan('123q')).toBeTruthy();
  });
  test('Positive isFinite function type conversion result', () => {
    expect(checkIsFinite('123')).toBeTruthy();
  });
  test('Negative isFinite function type conversion result', () => {
    expect(checkIsFinite('123q')).toBeFalsy();
  });
});