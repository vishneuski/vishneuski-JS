var form = document.forms['myForm'];
var arr = [{
  'label': 'Разработчики :',
  'type': 'text',
  'width': 400
},
  {
    'label': 'Название сайта :',
    'type': 'text',
    'width': 400
  },
  {
    'label': 'URL сайта :',
    'type': 'url',
    'width': 300

  },
  {
    'label': 'Дата запуска сайта :',
    'type': 'text',
    'width': 100

  },
  {
    'label': 'Посетителей в сутки :',
    'type': 'number',
    'width': 100

  },
  {
    'label': 'E-mail для связи :',
    'type': 'email',
    'width': 100

  },
  {
    'label': 'Рубрики каталога :',
    'type': 'select',
    'width': 100,
    'variants': {
      1: 'здоровье',
      2: 'домашний уют',
      3: 'бытовая техника'
    },
    'selected': '3',
  },
  {
    'label': 'Размещение :',
    'type': 'radio',
    'variants': {
      1: 'бесплатное',
      2: 'платное',
      3: 'VIP'
    }
  },
  {
    'label': 'Разрешить отзывы',
    'type': 'checkbox',
    'checked': 'true',
  }, {
    'label': 'Описание сайта',
    'type': 'textarea',
    'cols': '70',
    'rows': '5',
  }, {
    'label': 'Опубликовать',
    'type': 'submit',
  },

];

function buildForm(arr, form) {

  var labels = [];
  var fields = [];
  var linebreak;

  for (var i = 0; i < arr.length; i++) {

    if (arr[i].type !== 'submit') {

      labels[i] = document.createElement('label');
      labels[i].textContent = arr[i].label;
      form.appendChild(labels[i]);
    }

    switch (arr[i].type) {
      case 'text':
      case 'url':
      case 'number':
      case 'email':

        fields[i] = document.createElement('input');
        fields[i].setAttribute('type', arr[i].type);
        fields[i].style.width = arr[i].width + 'px';
        form.appendChild(fields[i]);
        linebreak = document.createElement('br');
        form.appendChild(linebreak);

        break;

      case 'select':

        var options = [];
        fields[i] = document.createElement('select');
        fields[i].setAttribute('type', arr[i].type);
        fields[i].style.width = arr[i].width + 'px';

        for (keys in arr[i].variants) {
          options[i] = document.createElement('option');
          options[i].appendChild(document.createTextNode(arr[i].variants[keys]));
          options[i].value = keys;
          fields[i].appendChild(options[i]);
        }

        fields[i].selectedIndex = arr[i].selected;
        form.appendChild(fields[i]);
        linebreak = document.createElement('br');
        form.appendChild(linebreak);

        break;

      case 'radio':

        var text = [];

        for (keys in arr[i].variants) {
          fields[i] = document.createElement('input');
          fields[i].setAttribute('type', arr[i].type);
          fields[i].setAttribute('value', keys);
          text[i] = document.createElement('span');
          text[i].appendChild(document.createTextNode(arr[i].variants[keys]));
          form.appendChild(fields[i]);
          form.appendChild(text[i]);
        }

        linebreak = document.createElement('br');
        form.appendChild(linebreak);

        break;

      case 'checkbox':

        fields[i] = document.createElement('input');
        fields[i].setAttribute('type', arr[i].type);
        fields[i].setAttribute('checked', arr[i].checked);
        form.appendChild(fields[i]);
        linebreak = document.createElement('br');
        form.appendChild(linebreak);

        break;

      case 'textarea':

        linebreak = document.createElement('br');
        form.appendChild(linebreak);
        fields[i] = document.createElement('textarea');
        fields[i].setAttribute('type', arr[i].type);
        fields[i].cols = arr[i].cols;
        fields[i].rows = arr[i].rows;
        form.appendChild(fields[i]);
        linebreak = document.createElement('br');
        form.appendChild(linebreak);

        break;

      case 'submit':

        fields[i] = document.createElement('input');
        fields[i].setAttribute('type', arr[i].type);
        fields[i].setAttribute('value', arr[i].label);
        form.appendChild(fields[i]);
        linebreak = document.createElement('br');
        form.appendChild(linebreak);

        break;

    }
  }
}

buildForm(arr, form);
