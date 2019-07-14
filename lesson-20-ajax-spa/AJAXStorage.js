function AJAXStorage() {
  var self = this;
  self.StorageHash = {};

  var Server = "http://fe.it-academy.by/AjaxStringStorage2.php";
  var UpdatePassword;

  $.ajax(Server,
      {
        type: "POST",
        cache: false,
        data: {f: "READ", n: "VISHNEUSKI_TEST_DRINKSTORAGE"},
        success: LoadData,
        error: ErrorHandler
      }
  );

  function LoadData(data) {
    if (data !== ' ') {
      self.StorageHash = JSON.parse(data.result);
      console.log('Data from server - ' + data.result);
    } else if (data === ' ') {
      $.ajax(Server,
          {
            type: "POST",
            cache: false,
            data: {f: "INSERT", n: "VISHNEUSKI_TEST_DRINKSTORAGE", v: JSON.stringify(self.StorageHash)},
            success: InsertData,
            error: ErrorHandler
          }
      );

      function InsertData(data) {
        console.log(data.result);
      }
    }
  }

  self.addValue = function (key, value) {
    self.StorageHash[key] = value;
    addValueInStorage(self.StorageHash);
  };

  self.getValue = function (key) {
    if (key in self.StorageHash) {
      return self.StorageHash[key];
    }
  };

  self.deleteValue = function (key) {
    if (key in self.StorageHash) {
      delete self.StorageHash[key];
      addValueInStorage(self.StorageHash);
    }
  };

  self.getKeys = function () {
    return (Object.keys(self.StorageHash));
  };

  function addValueInStorage(StorageHash) {
    UpdatePassword = Math.random();

    $.ajax(
        {
          url: Server,
          type: 'POST',
          data: {
            f: 'LOCKGET', n: 'VISHNEUSKI_TEST_DRINKSTORAGE', p: UpdatePassword
          },
          cache: false,
          success: LockGetReady,
          error: ErrorHandler
        }
    );

    function LockGetReady(data) {
      if (data.error !== undefined) {
        alert(data.error);
      }
    }

    $.ajax(
        {
          url: Server,
          type: 'POST',
          data: {
            f: 'UPDATE', n: 'VISHNEUSKI_TEST_DRINKSTORAGE',
            v: JSON.stringify(StorageHash), p: UpdatePassword
          },
          cache: false,
          success: UpdateData,
          error: ErrorHandler
        }
    );
  }
}

function UpdateData(data) {
  if (data.error != undefined)
    alert(data.error);
}

function ErrorHandler(jqXHR, StatusStr, ErrorStr) {
  console.log(StatusStr + ' ' + ErrorStr);
}
