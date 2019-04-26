function buildString(row, column) {
  var stringOdd = '';
  var stringEven = '';
  var firstSym = '#';
  var secondSym = ' ';
  var tempSym = firstSym;
  var rowCounter = 0;
  var resultString = '';
  var isOdd = true;
  while (rowCounter < row) {
    while (stringOdd.length < column) {
      stringOdd += tempSym;
      tempSym !== firstSym ? tempSym = firstSym : tempSym = secondSym;
      stringEven += tempSym;
    }
    if (isOdd) {
      resultString += stringOdd + '\n';
      isOdd = false;
      rowCounter += 1;
    } else if (!isOdd) {
      resultString += stringEven + '\n';
      isOdd = true;
      rowCounter += 1;
    }
  }
  return resultString;
}

console.log(buildString(8, 8));
console.log(buildString(7, 5));
console.log(buildString(4, 9));
