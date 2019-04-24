const isNull = require('../../functions/dataTypes/isNull');

describe('Tests for null', () => {
  test('Is null', () => {
    expect(isNull(null)).toBeNull();
  });
  test('Is not null', () => {
    expect(isNull(undefined)).toBeFalsy();
  });
});