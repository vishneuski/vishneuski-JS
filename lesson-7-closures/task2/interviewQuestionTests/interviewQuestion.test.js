const interviewQuestion = require('../interviewQuestion/interviewQuestion');

describe('Interview question method', () => {
  const profession = 'teacher';
  const name = 'John';

  it('Recieved correct question after transfer teacher as argument', () => {
    expect(interviewQuestion(profession)(name)).toBe('What subject do you teach John?');
  });

  it('Recieved correct question after transfer designer as argument', () => {
    expect(interviewQuestion(profession)(name)).toBe('John can you please explain what UX design is?');
  });

  it('Recieved correct question after transfer some other profession as argument', () => {
    expect(interviewQuestion(profession)(name)).toBe('Hello John, what do you do?');
  });
});
