var drinkStorage = new HashStorage();

drinkStorage.addValue('Маргарита', {
  'алкогольный': 'да',
  'рецепт приготовления': 'текила, лайм, сахарный сироп',
  'время приготовления': '10 мин.'
});
drinkStorage.addValue('Кровавая Мэри', {
  'алкогольный': 'да',
  'рецепт приготовления': 'водка, лимонный сок, соус тобаско',
  'время приготовления': '8 мин'
});
drinkStorage.addValue('Молочный коктейль', {
  'алкогольный': 'нет',
  'рецепт приготовления': 'молоко, мороженое, джем',
  'время приготовления': '5 мин'
});

console.log(drinkStorage);

document.querySelector('.setDrinkInfo').addEventListener('click', function () {
  var setList = '';
  var cocktaile = prompt('Введите название напитка', '');
  var isAlcohol = prompt('Алкогольный напиток или нет', '');
  var receipe = prompt('Введите рецепт приготовления напитка', '');
  var timeToPrepare = prompt('Введите время приготовления напитка', '');
  var setDrink = drinkStorage.addValue(cocktaile, {
    'алкогольный': isAlcohol,
    'рецепт приготовления': receipe,
    'время приготовления': timeToPrepare,
  });
  for (var prop in setDrink) {
    setList += prop + ': ' + setDrink[prop] + ';';
  }
  document.querySelector('.info').textContent = setList;
});

document.querySelector('.getDrinkInfo').addEventListener('click', function () {
  var getDrinkPrompt = prompt('Введите название напитка', '');
  var getList = '';
  var getDrink = drinkStorage.getValue(getDrinkPrompt);
  if (typeof(getDrink) !== 'object') {
    document.querySelector('.info').textContent = 'Нет такого напитка!';
  } else {
    for (var prop in getDrink) {
      getList += prop + ' : ' + getDrink[prop] + '; ';
    }
    document.querySelector('.info').textContent = getDrinkPrompt + ' : ' + getList;
  }
});

document.querySelector('.deleteDrinkInfo').addEventListener('click', function () {
  var deleteDrinkPrompt = prompt('Введите название коктейля', '');
  var deleteDrink = drinkStorage.deleteValue(deleteDrinkPrompt);
  document.querySelector('.info').textContent = deleteDrink;
});

document.querySelector('.drinkList').addEventListener('click', function () {
  var drinkList = drinkStorage.getKeys();
  document.querySelector('.info').textContent = drinkList;
});
