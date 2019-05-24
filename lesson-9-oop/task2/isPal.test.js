const isPal = require('./isPal');

describe('test IsPal function', () => {
  it('if transfer Palindrome string', () => {
    expect(isPal('А роза упала на лапу Азора')).toBe('It is Palindrome!!!');
  });

  it('if transfer Palindrome string', () => {
    expect(isPal('OoC c Oo')).toBe('It is Palindrome!!!');
  });

  it('if transfer not Palindrome string', () => {
    expect(isPal('javascript')).toBe('It is NOT Palindrome!!!');
  });

  it('if transfer empty string', () => {
    expect(isPal('')).toBe('Type Error! Please enter the correct data!!!');
  });

  it('if transfer not string', () => {
    expect(isPal(121)).toBe('Type Error! Please enter the correct data!!!');
  });

  it('if transfer null', () => {
    expect(isPal(null)).toBe('Type Error! Please enter the correct data!!!');
  });

  it('if transfer undefined', () => {
    expect(isPal(undefined)).toBe('Type Error! Please enter the correct data!!!');
  });

  it('if transfer object', () => {
    expect(isPal({})).toBe('Type Error! Please enter the correct data!!!');
  });
});
