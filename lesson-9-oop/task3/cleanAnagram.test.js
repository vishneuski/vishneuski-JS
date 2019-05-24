const cleanAnagram = require('./cleanAnagram');

describe('test cleanAnagram function', () => {
  it('if array contain anagram', () => {
    expect(cleanAnagram(['jaVaScript', 'scripTJaVa', 'pHp', 'JavaScript', 'Java'])).toEqual(['JavaScript', 'pHp', 'Java']);
  });

  it('if array contain anagram', () => {
    expect(cleanAnagram(['воз', 'киборг', 'корсет', 'ЗОВ', 'гроБик', 'костер', 'сектор'])).toEqual(['ЗОВ', 'гроБик', 'сектор']);
  });

  it('if array not contain anagram', () => {
    expect(cleanAnagram(['jaVaScript', 'pHp', 'Java'])).toEqual(['jaVaScript', 'pHp', 'Java']);
  });

  it('if array contain not string', () => {
    expect(cleanAnagram([null, 'pHp', 'JavaScript'])).toBe('Type Error!!! Input correct data!!!');
  });

  it('if array contain not string', () => {
    expect(cleanAnagram([5, 'pHp', 'JavaScript'])).toBe('Type Error!!! Input correct data!!!');
  });
});
