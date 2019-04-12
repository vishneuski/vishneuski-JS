const concatination = require('../../functions/stringOperations/concat');
const concatAssign = require('../../functions/stringOperations/concatAssignment');

describe('String operation', () => {
  test('Concat result', () => {
    expect(concatination('Java', 'Script')).toBe('JavaScript');
  });
  test('Wrong result', () => {
    expect(concatination('Java', 'Script')).not.toBe('Java');
  });
  test('Concat assignment correct test', () => {
    expect(concatAssign('Ecma', 'Script')).toBe('EcmaScript');
  });
  test('Concat assignment negative test', () => {
    expect(concatAssign('Ecma', 'Script')).not.toBe('JavaScript');
  });
});