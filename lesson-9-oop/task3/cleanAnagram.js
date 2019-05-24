function cleanAnagram(arr) {
  var newObj = {};
  var newArr = [];
  var newStr;
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'string') {
      return 'Type Error!!! Input correct data!!!';
    } else {
      newStr = arr[i].toLowerCase().split('').sort().join('');
      newObj[newStr] = arr[i];
    }
  }
  for (var key in newObj) {
    newArr.push(newObj[key]);
  }
  return newArr;
}

module.exports = cleanAnagram;
