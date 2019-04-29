function summ(a) {
  return function innerFunction(b) {
    return a + b;
  }
}

console.log(summ(5)(-1));