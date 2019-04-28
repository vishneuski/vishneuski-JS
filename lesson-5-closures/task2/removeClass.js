function removeClass(obj, cls) {
  var splitString;
  for (var key in obj) {
    if (key === 'className') {
      splitString = obj[key].split(' ');
      obj[key] = splitString.filter(function (elem) {
        return elem !== cls;
      }).join(' ');
      console.log(obj[key]);
    }
  }
}

var obj = {
  className: 'menu open menu close write menu menu'
};

removeClass(obj, 'menu');
