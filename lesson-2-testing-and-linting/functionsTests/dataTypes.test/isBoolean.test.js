const isBoolean = require('../../functions/dataTypes/isBoolean');

describe('Test for boolean', () => {
  test('Is boolean', () => {
    expect(isBoolean(true)).toBeTruthy();
  });
  test('Is not boolean', () => {
    expect(isBoolean(15)).toEqual(false);
  });
});