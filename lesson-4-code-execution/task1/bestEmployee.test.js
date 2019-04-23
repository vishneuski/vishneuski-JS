const bestEmployee = require('./bestEmployee');

describe('Best employee function tests', () => {
  it('Possitive test', () => {
    const obj = {
      Anna: 29,
      Serg: 35,
      Elena: 98,
      Anton: 98
    };
    expect(bestEmployee(obj)).toEqual('Elena');
  });
  it('Object contain string and undefined test', () => {
    const obj = {
      Ivan: undefined,
      Anna: 29,
      Serg: '101',
      Elena: '98',
      Anton: 95
    };
    expect(bestEmployee(obj)).toEqual('Anton');
  });
});
