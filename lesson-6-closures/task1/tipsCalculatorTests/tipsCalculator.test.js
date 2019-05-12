const tipsAverage = require('../tipsCalculator/tipsCalculator');

describe('Tips average function', () => {

  const arr = [5, 10, 15, 20, 25];
  const str = '5 , 10, 15, 20, 25';
  const obj = {
    1: 5,
    2: 10,
    3: 15,
    4: 20,
    5: 25,
  };

  it('Recieved 15 after transfer of the current array', () => {
    expect(tipsAverage(arr)).toBe(15);
  });

  it('Not recieved 10 after transfer of the current array', () => {
    expect(tipsAverage(arr)).not.toBe(10);
  });

  it('Recieved error after transfer string', () => {
    expect(tipsAverage(str)).toBe('You transfer not an array!!!');
  });

  it('Recieved error after transfer an object', () => {
    expect(tipsAverage(obj)).toBe('You transfer not an array!!!');
  });
});
