const isUndefined = require('../../functions/dataTypes/isUndefined');

describe('Tests for undefined', () => {
  test('Is undefined', () => {
    expect(isUndefined(undefined)).toBeTruthy();
  });
  test('Is not undefined', () => {
    expect(isUndefined(null)).toBeFalsy();
  });
});