const popArray = require('../../functions/classArray/popArray');
const pushArray = require('../../functions/classArray/pushArray');
const concatArray = require('../../functions/classArray/concatArray');
const joinArray = require('../../functions/classArray/joinArray');
const reverseArray = require('../../functions/classArray/reverseArray');
const sortArray = require('../../functions/classArray/sortArray');
const lengthArray = require('../../functions/classArray/lengthArray');
const shiftArray = require('../../functions/classArray/shiftArray');
const unshiftArray = require('../../functions/classArray/unshiftArray');
const sliceArray = require('../../functions/classArray/sliceArray');
const spliceArray = require('../../functions/classArray/spliceArray');

describe('Tests for Array class', () => {
  test('Possitive pop() test', () => {
    expect(popArray(['one', 'two', 'three'])).toBe('three');
  });
  test('Possitive push() test', () => {
    expect(pushArray(['one', 'two', 'three'], 'four')).toBe(4);
  });
  test('Possitive concat() test', () => {
    expect(concatArray([1, 2, 3], [4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
  });
  test('Possitive join() test', () => {
    expect(joinArray(['one', 'two', 'three'])).toEqual('one/two/three');
  });
  test('Possitive reverse() test', () => {
    expect(reverseArray(['one', 'two', 'three'])).toEqual(['three', 'two', 'one']);
  });
  test('Possitive sort() test', () => {
    expect(sortArray(['one', 'two', 'three'])).toEqual(['one', 'three', 'two']);
  });
  test('Possitive length array test', () => {
    expect(lengthArray(['one', 'two', 'three', 'four'])).toBe(4);
  });
  test('Possitive shift() test', () => {
    expect(shiftArray(['one', 'two', 'three', 'four'])).toBe('one');
  });
  test('Possitive unshift() test', () => {
    expect(unshiftArray(['one', 'two', 'three', 'four'], 'zero')).toBe(5);
  });
  test('Possitive slice() test', () => {
    expect(sliceArray(['one', 'two', 'three', 'four'], 1)).toEqual(['two', 'three', 'four']);
  });
  test('Possitive splice() test', () => {
    expect(spliceArray(['one', 'two', 'three', 'four'], 1, 2)).toBe(['two', 'three']);
  })
});