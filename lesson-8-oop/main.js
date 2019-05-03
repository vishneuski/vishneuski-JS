(function () {

  var arr = [];
  var randomQuestion;
  var userInput;

  var questionOne = new Question('questionOne', 'How much is 2 * 4?', {'1.': '6', '2.': '8', '3.': '10'}, 2);
  var questionTwo = new Question('questionTwo', 'How much is 4 * 4?', {'1.': '0', '2.': '5', '3.': '16'}, 3);
  var questionThree = new Question('questionThree', 'How much is 3 * 3?', {'1.': '9', '2.': '5', '3.': '10'}, 1);

  arr.push(questionOne, questionTwo, questionThree);

  randomQuestion = Math.floor(Math.random() * arr.length);

  arr[randomQuestion].showQuestion();

  userInput = parseInt(prompt('Input the right answer: ', ''));

  arr[randomQuestion].checkUserInput();

  function Question(name, question, answerVariants, correctAnswer) {
    var self = this;
    self.name = name;
    self.question = question;
    self.answerVariants = answerVariants;
    self.correctAnswer = correctAnswer;

    self.showQuestion = function () {
      console.log(self.question);
      for (var key in self.answerVariants) {
        console.log(key + ' ' + self.answerVariants[key]);
      }
    };

    self.checkUserInput = function () {
      if (self.correctAnswer !== userInput) {
        console.log('No!!! You\'re wrong!!!');
      } else {
        console.log('Yes!!! You\'re right!!!');
      }
    };
  }
})();
