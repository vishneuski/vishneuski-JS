const isString = require('../../functions/dataTypes/isString');

describe('Tests for strings', () => {
  test('Is string', () => {
    expect(isString('aaa')).toBeTruthy();
  });
  test('Is not string', () => {
    expect(isString(15)).toBeFalsy();
  });
});