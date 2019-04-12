const charAtString = require('../../functions/classString/charAtString');
const indexOfString = require('../../functions/classString/indexOfString');
const indexString = require('../../functions/classString/indexString');
const lastIndexOfString = require('../../functions/classString/lastIndexOfString');
const lengthString = require('../../functions/classString/lengthString');
const replaceString = require('../../functions/classString/replaceString');
const sliceString = require('../../functions/classString/sliceString');
const splitString = require('../../functions/classString/splitString');
const substrString = require('../../functions/classString/substrString');
const toLowerCaseString = require('../../functions/classString/toLowerCaseString');
const toUpperCaseString = require('../../functions/classString/toUpperCaseString');
const trimString = require('../../functions/classString/trimString');

describe('Tests for String class', () => {
  test('Possitive charAt() test', () => {
    expect(charAtString('I am loving it!', 0)).toBe('I');
  });
  test('Negative charAt() test', () => {
    expect(charAtString('I am loving it!', 0)).not.toBe(' ');
  });

  test('Possitive indexOf() test', () => {
    expect(indexOfString('I am loving it!', 'am')).toBe(2);
  });
  test('Negative indexOf() test', () => {
    expect(indexOfString('I am loving it!', 'am')).not.toBe(1);
  });

  test('Possitive [index] test', () => {
    expect(indexString('I am loving it!', 5)).toBe('l');
  });
  test('Negative [index] test', () => {
    expect(indexString('I am loving it!', 5)).not.toBe('a');
  });

  test('Possitive lastIndexOf() test', () => {
    expect(lastIndexOfString('I am loving it!', 'i')).toBe(12);
  });
  test('Negative lastIndexOf() test', () => {
    expect(lastIndexOfString('I am loving it!', 'i')).not.toBe(8);
  });

  test('Possitive length of string test', () => {
    expect(lengthString('I am loving it!')).toBe(15);
  });
  test('Negative length of string test', () => {
    expect(lengthString('I am loving it!')).not.toBe(14);
  });

  test('Possitive replace() test', () => {
    expect(replaceString('I am loving it!', 'loving', 'hating')).toBe('I am hating it!');
  });
  test('Negative replace() test', () => {
    expect(replaceString('I am loving it!', 'loving', 'hating')).not.toBe('I am booking it!');
  });

  test('Possitive slise() test', () => {
    expect(sliceString('I am loving it!', 5)).toBe('loving it!');
  });
  test('Negative slice() test', () => {
    expect(sliceString('I am loving it!', 5)).not.toBe(' loving it!');
  });

  test('Possitive split() test', () => {
    expect(splitString('I am loving it!', ' ')).toEqual(['I', 'am', 'loving', 'it!']);
  });
  test('Negative split() test', () => {
    expect(splitString('I am loving it!', ' ')).not.toBe('I am loving it!');
  });

  test('Possitive substr() test', () => {
    expect(substrString('I am loving it!', 5)).toBe('loving it!');
  });
  test('Negative substr() test', () => {
    expect(substrString('I am loving it!', 5)).not.toBe(' loving it!');
  });

  test('Possitive toLowerCase() test', () => {
    expect(toLowerCaseString('I am loving it!')).toBe('i am loving it!');
  });
  test('Negative toLowerCase() test', () => {
    expect(toLowerCaseString('I am loving it!')).not.toBe('I Am Loving It!');
  });

  test('Possitive toUpperCase() test', () => {
    expect(toUpperCaseString('I am loving it!')).toBe('I AM LOVING IT!');
  });
  test('Negative toUpperCase() test', () => {
    expect(toUpperCaseString('I am loving it!')).not.toBe('I Am Loving It!');
  });

  test('Possitive trim() test', () => {
    expect(trimString(' \n\n\nI am loving it!  \n\n\n')).toBe('I am loving it!');
  });
  test('Negative trim() test', () => {
    expect(trimString(' \n\n\nI am loving it!  \n\n\n')).not.toBe('I Am Loving It!   ');
  });
});