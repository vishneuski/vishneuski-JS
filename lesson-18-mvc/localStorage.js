function LocalStorage(idKey) {
  var self = this;
  var StorageHash = {};
  var ls = window.localStorage;
  self.idKey = idKey;

  self.reset = function () {
    if (ls[self.idKey]) {
      StorageHash = JSON.parse(ls[self.idKey]);
    }
  };

  self.addValue = function (key, value) {
    StorageHash[key] = value;
    ls.setItem(self.idKey, JSON.stringify(StorageHash));
  };

  self.getValue = function (key) {
    return StorageHash[key];
  };

  self.deleteValue = function (key) {
    delete StorageHash[key];
    ls.setItem(self.idKey, JSON.stringify(StorageHash));
  };

  self.getKeys = function () {
    return (Object.keys(StorageHash));
  };
}
