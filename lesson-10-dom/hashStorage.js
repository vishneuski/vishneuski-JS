function HashStorage() {

  var drinkList = {};
  var self = this;

  self.addValue = function (key, value) {
    return drinkList[key] = value;
  };

  self.getValue = function (key) {
    if (key in drinkList) {
      return drinkList[key];
    } else {
      return 'Рецепта такого напитка нет!';
    }
  };

  self.deleteValue = function (key) {
    if (Object.keys(drinkList).length === 0) {
      return 'Хранилище рецептов напитков пусто!';
    } else {
      if (key in drinkList) {
        delete drinkList[key];
        return 'Удален рецепт напитка ' + key;
      } else {
        return 'Нет такого напитка!'
      }
    }
  };

  self.getKeys = function () {
    if (Object.keys(drinkList).length !== 0) {
      return Object.keys(drinkList);
    } else {
      return 'Хранилище рецептов напитков пусто!'
    }
  };
}
