'use strict';

function calculator() {

  var userInput;
  var arrayForInputResult = [];
  var summOfInput = 0;

  do {
    userInput = prompt('Введите число');
    if (isFinite(userInput) && userInput !== '' && userInput !== null) {
      arrayForInputResult.push(parseFloat(userInput));
      summOfInput += parseFloat(userInput);
    } else {
      break;
    }
  } while (userInput !== null);
  return summOfInput;
}

calculator();
