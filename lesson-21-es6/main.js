var StorageHash = {};
var Server = "http://fe.it-academy.by/AjaxStringStorage2.php";

window.onhashchange = renderNewState;

function renderNewState() {
  var hash = window.location.hash;
  var state = decodeURIComponent(hash.substr(1));
  if (state === '') {
    state = {
      page: 'main',
      key: null
    }
  } else {
    state = JSON.parse(state);
  }
  var page = '';

  switch (state.page) {
    case 'main':
      getArticlesList();
      page += "<div class='container'>";
      page += "<h1>Энциклопедия</h1>";
      page += "<a onclick=\"switchToArticleList()\">Список статей</a>";
      page += "</div>";
      break;

    case 'articleList':
      getArticlesList();
      page += '<div class="container">';
      page += '<h2>Оглавление</h2>';
      for (var key in StorageHash) {
        page += `<a onclick="switchToArticle('${key}')">${key}</a></br>`;
      }
      page += '</div>';
      break;

    case 'article':
      getArticlesList();
      console.log(state.key);
      page += '<div class="container">';
      page += '<h2>Название статьи</h2>';
      for (var prop in StorageHash) {
        if (prop === state.key) {
          for (var keys in StorageHash[prop]) {
            page += `${StorageHash[prop][keys]}`
          }
        }
      }
      page += '</div>';
      break;
  }

  document.getElementById('page').innerHTML = page;

}

function switchToState(state) {
  location.hash = encodeURIComponent(JSON.stringify(state));
}

function switchToArticleList() {
  switchToState({page: 'articleList'});
}

function switchToArticle(key) {
  switchToState({page: 'article', key: key});
}

renderNewState();

function getArticlesList() {
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
    if (data !== '') {
      StorageHash = JSON.parse(data.result);
      console.log('Data from server - ' + data.result);
    } else if (data === '') {
      $.ajax(Server,
          {
            type: "POST",
            cache: false,
            data: {f: "INSERT", n: "VISHNEUSKI_TEST_DRINKSTORAGE", v: JSON.stringify(StorageHash)},
            success: InsertData,
            error: ErrorHandler
          }
      );

      function InsertData(data) {
        console.log(data.result);
      }
    }
  }

  function ErrorHandler(jqXHR, StatusStr, ErrorStr) {
    console.log(StatusStr + ' ' + ErrorStr);
  }
};
