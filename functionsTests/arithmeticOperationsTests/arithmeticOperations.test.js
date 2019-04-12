const add = require('../../functions/arithmeticOperations/add');
const sub = require('../../functions/arithmeticOperations/sub');
const mult = require('../../functions/arithmeticOperations/mult');
const div = require('../../functions/arithmeticOperations/div');
const addAssign = require('../../functions/arithmeticOperations/additionAssignment');
const subAssign = require('../../functions/arithmeticOperations/subtractionAssignment');
const multAssign = require('../../functions/arithmeticOperations/multiplicationAssignment');
const divAssign = require('../../functions/arithmeticOperations/divisionAssignment');
const signChange = require('../../functions/arithmeticOperations/signChange');
const modulo = require('../../functions/arithmeticOperations/modulo');

describe('Arithmetic operations tests', () => {
  test('Positive addition operation test', () => {
    expect(add(1, 2)).toBe(3);
  });
  test('Negative addition operation test', () => {
    expect(add(1, 2)).not.toBe(4);
  });

  test('Positive subtraction operation test', () => {
    expect(sub(5, 2)).toBe(3);
  });
  test('Positive subtraction operation test', () => {
    expect(sub(5, 3)).not.toBe(4);
  });

  test('Positive multiplication operation test', () => {
    expect(mult(5, 2)).toBe(10);
  });
  test('Negative multiplication operation test', () => {
    expect(mult(5, 3)).not.toBe(10);
  });

  test('Positive division operation test', () => {
    expect(div(12, 2)).toBe(6);
  });
  test('Positive division operation test', () => {
    expect(div(15, 3)).not.toBe(4);
  });

  test('Positive addition assignment operation test', () => {
    expect(addAssign(1, 2)).toBe(3);
  });
  test('Negative addition assignment operation test', () => {
    expect(addAssign(1, 2)).not.toBe(4);
  });

  test('Positive subtraction assignment operation test', () => {
    expect(subAssign(5, 2)).toBe(3);
  });
  test('Positive subtraction assignment operation test', () => {
    expect(subAssign(8, 2)).not.toBe(5);
  });

  test('Positive multiplication assignment operation test', () => {
    expect(multAssign(7, 2)).toBe(14);
  });
  test('Negative multiplication assignment operation test', () => {
    expect(multAssign(1, 5)).not.toBe(4);
  });

  test('Positive division assignment operation test', () => {
    expect(divAssign(22, 2)).toBe(11);
  });
  test('Negative division assignment operation test', () => {
    expect(divAssign(21, 2)).not.toBe(11);
  });

  test('Positive sign change operation test', () => {
    expect(signChange(5)).toBe(-5);
  });
  test('Negative sign change operation test', () => {
    expect(signChange(5)).not.toBe(5);
  });

  test('Positive modulo operation test', () => {
    expect(modulo(12, 5)).toBe(2);
  });
  test('Positive modulo operation test', () => {
    expect(modulo(15, 3)).not.toBe(3);
  });
});