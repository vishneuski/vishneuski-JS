var drinkStorage = new AJAXStorage();

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
}