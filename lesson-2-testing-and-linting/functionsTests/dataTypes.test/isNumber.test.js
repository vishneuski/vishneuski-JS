const isNumber = require('../../functions/dataTypes/isNumber');

describe('Tests for numbers', () => {
  test('Is Number', () => {
    expect(isNumber(5)).toBeTruthy();
  });
  test('Is not Number', () => {
    expect(isNumber('a')).toBeFalsy();
  });
});

