const isObject = require('../../functions/dataTypes/isObject');

describe('Test for object', () => {
  test('Is object', () => {
    expect(isObject()).toBeTruthy();
  });
  // test('Is not object', () => {
  //   expect(isObject(1)).toBeFalsy();
  // });
});