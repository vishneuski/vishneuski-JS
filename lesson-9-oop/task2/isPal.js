function isPal(string) {
  if (typeof string !== 'string' || string === '') {
    return 'Type Error! Please enter the correct data!!!';
  } else {
    if (string.toLowerCase().split(' ').join('') === string.toLowerCase().split(' ').join('').split('').reverse().join('')) {
      return 'It is Palindrome!!!';
    } else {
      return 'It is NOT Palindrome!!!';
    }
  }
}

module.exports = isPal;
