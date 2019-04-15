var userInput = prompt('Введите строку пожалуйста', 'Введите cтроку');
while (userInput === null) {
  userInput = prompt('Введите корректные данные', 'Введите строку');
}

function lettersCounter(str) {
  var russianVawels = ['а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я'];
  var counter = 0;
  var splitString = str.split('');

  splitString.filter(function (elem) {
    for (var i = 0; i < russianVawels.length; i++) {
      if (elem === russianVawels[i]) {
        counter += 1;
      }
    }
  });
  return counter;
}

lettersCounter(userInput);
