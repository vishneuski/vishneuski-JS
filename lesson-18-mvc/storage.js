var drinkStorage = new LocalStorage('drinks');
drinkStorage.reset();

document.querySelector('.setDrinkInfo').addEventListener('click', addDrink, false);
document.querySelector('.getDrinkInfo').addEventListener('click', getDrink, false);
document.querySelector('.deleteDrinkInfo').addEventListener('click', deleteDrink, false);
document.querySelector('.drinkList').addEventListener('click', getDrinkList, false);

function addDrink() {
  var tempHash = {};
  var cocktaile = prompt('Введите название напитка', 'ром').toLowerCase();
  tempHash.isAlcohol = prompt('Алкогольный напиток или нет', 'да');
  tempHash.receipe = prompt('Введите рецепт приготовления напитка', 'налить, смешать, выпить');
  tempHash.timeToPrepare = prompt('Введите время приготовления напитка', '5 мин');
  drinkStorage.addValue(cocktaile, tempHash);
  document.querySelector('.info').innerHTML = '<span>Добавлен напиток</span>' + ' ' + cocktaile;
};

function getDrink() {
  var getDrinkPrompt = prompt('Введите название напитка', 'ром').toLowerCase();
  var getList = '';
  var getDrink = drinkStorage.getValue(getDrinkPrompt);
  if (typeof(getDrink) !== 'object') {
    document.querySelector('.info').textContent = 'Нет такого напитка!';
  } else {
    for (var prop in getDrink) {
      getList += prop + ' : ' + getDrink[prop] + ';' + '<br>';
    }
    document.querySelector('.info').innerHTML = getDrinkPrompt + ' : ' + '<br>' + '<br>' + getList;
  }
};

function deleteDrink() {
  var deleteDrinkPrompt = prompt('Введите название коктейля', 'ром');

  if (deleteDrinkPrompt) {
    drinkStorage.deleteValue(deleteDrinkPrompt);
    document.querySelector('.info').innerHTML = '<span>Удален напиток</span>' + ' ' + deleteDrinkPrompt;
  }
};

function getDrinkList() {
  var resultList = '';
  var drinkList = drinkStorage.getKeys();
  for (var key in drinkList) {
    resultList += drinkList[key] + '<br>';
  }
  document.querySelector('.info').innerHTML = resultList;


};
var dishStorage = new LocalStorage('dish');
dishStorage.reset();

document.querySelector('.setDishInfo').addEventListener('click', addDish, false);
document.querySelector('.getDishInfo').addEventListener('click', getDish, false);
document.querySelector('.deleteDishInfo').addEventListener('click', deleteDish, false);
document.querySelector('.dishList').addEventListener('click', getDishList, false);

function addDish() {
  var tempHash = {};
  var dish = prompt('Введите название блюда', 'оливье').toLowerCase();
  tempHash.isDelicious = prompt('Вкусное блюдо или нет', 'да');
  tempHash.receipe = prompt('Введите рецепт приготовления блюда', 'нарезать, смешать, сьесть');
  tempHash.timeToPrepare = prompt('Введите время приготовления блюда', '20 мин');
  dishStorage.addValue(dish, tempHash);
  document.querySelector('.info').innerHTML = '<span>Добавлено блюдо</span>' + ' ' + dish;
};

function getDish() {
  var getDishPrompt = prompt('Введите название блюда', 'оливье').toLowerCase();
  var getList = '';
  var getDish = dishStorage.getValue(getDishPrompt);
  if (typeof(getDish) !== 'object') {
    document.querySelector('.info').textContent = 'Нет такого блюда!';
  } else {
    for (var prop in getDish) {
      getList += prop + ' : ' + getDish[prop] + ';' + '<br>';
    }
    document.querySelector('.info').innerHTML = getDishPrompt + ' : ' + '<br>' + '<br>' + getList;
  }
};

function deleteDish() {
  var deleteDishPrompt = prompt('Введите название блюда', 'оливье');

  if (deleteDishPrompt) {
    dishStorage.deleteValue(deleteDishPrompt);
    document.querySelector('.info').innerHTML = '<span>Удалено блюдо</span>' + ' ' + deleteDishPrompt;
  }
};

function getDishList() {
  var resultList = '';
  var dishList = dishStorage.getKeys();
  for (var key in dishList) {
    resultList += dishList[key] + '<br>';
  }
  document.querySelector('.info').innerHTML = resultList;
};
