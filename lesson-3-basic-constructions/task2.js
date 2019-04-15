var lastName = prompt('Введите Вашу фамилию', '');
while (lastName === '' || lastName === null || isFinite(lastName)) {
  alert('Введите корректные данные!');
  lastName = prompt('Введите Вашу фамилию', '');
}

var firstName = prompt('Введите Ваше имя', '');
while (firstName === '' || firstName === null || isFinite(firstName)) {
  alert('Введите корректные данные!');
  firstName = prompt('Введите Ваше имя', '');
}

var middleName = prompt('Введите Ваше отчество', '');
while (middleName === '' || middleName === null || isFinite(middleName)) {
  alert('Введите корректные данные!');
  middleName = prompt('Введите Ваше отчество', '');
}

var age = prompt('Введите ваш возраст в годах', '');
while (age === '' || age === null || !isFinite(age)) {
  alert('Введите корректные данные!');
  age = prompt('Введите Ваш возраст', '');
}

var gender = confirm('Ваш пол мужской?');

var fullName = lastName + ' ' + firstName + ' ' + middleName;
var ageInDays = age * 365;
var ageAfter = parseInt(age, 10) + 5;
var isRetired;

(age >= 60) ? isRetired = 'да' : isRetired = 'нет';
(gender) ? gender = 'мужской' : gender = 'женский';

alert('Ваше ФИО: ' + fullName + '\n' +
    'Ваш возраст в годах: ' + age + '\n' +
    'Ваш возраст в днях: ' + ageInDays + '\n' +
    'Через 5 лет Вам будет: ' + ageAfter + '\n' +
    'Ваш пол: ' + gender + '\n' +
    'Вы на пенсии: ' + isRetired);
