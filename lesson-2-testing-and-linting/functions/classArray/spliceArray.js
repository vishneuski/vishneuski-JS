function spliceArray(arrOne, index, num, elem) {
  var a = arrOne.slice(index, num, elem);
  return a;
}
module.exports = spliceArray;