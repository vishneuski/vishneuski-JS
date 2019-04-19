const multiplyNumeric = require('./multiplyNumeric');

describe('Multiply numeric function tests', () => {
  it('Possitive test', () => {
    const obj = {
      Anna: 29,
      Serg: 35,
      Elena: 99,
      Anton: 98
    };
    expect(multiplyNumeric(obj)).toEqual({
      Anna: 58,
      Serg: 70,
      Elena: 198,
      Anton: 196
    });
  });
  it('Object contain null test', () => {
    const obj = {
      Anna: 29,
      Serg: null,
      Elena: 99,
      Anton: 98
    };
    expect(multiplyNumeric(obj)).toEqual({
      Anna: 58,
      Serg: null,
      Elena: 198,
      Anton: 196
    });
  });
  it('Object contain string test', () => {
    const obj = {
      Anna: 29,
      Serg: '20',
      Elena: 99,
      Anton: 98
    };
    expect(multiplyNumeric(obj)).toEqual({
      Anna: 58,
      Serg: '20',
      Elena: 198,
      Anton: 196
    });
  });
});
