'use strict';
const baseRadius = 300; // диаметр часов
const numbersBaseRadius = baseRadius / 2.5; //радиус оси цифр циферблата
const circleRadius = 15; // радиус кружков с цифрами
const digitalClockWidth = 100;
const digitalClockHeight = 30;
const hourHandLength = 80;
const minuteHandLength = 110;
const secondHandLength = 130;
const hourHandWidth = 10;
const minuteHandWidth = 5;
const secondHandWidth = 2;


setInterval(tickTimer, 1000);

// UI

var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
context.translate(baseRadius / 2, baseRadius / 2);

createWatch();
setInterval(tickTimer, 1000);

function createWatch() {
  createCanvasClockFace(context);
  createCanvasClockFaceGroup(context);
  createCanvasDigitalWatch(context);
  createHourHands(context, hourHandLength, hourHandWidth);
  createMinuteHands(context, minuteHandLength, minuteHandWidth);
  createSecondHands(context, secondHandLength, secondHandWidth);
}

function createCanvasClockFace(context) {
  context.fillStyle = 'gray';
  context.beginPath();
  context.arc(0, 0, baseRadius / 2, 0, Math.PI * 2, false);
  context.fill();
}

function createCanvasClockFaceGroup(context) {
  for (var number = 1; number <= 12; number++) {
    var angle = number * 30 / 180 * Math.PI;
    var x = Math.round(Math.sin(angle) * numbersBaseRadius);
    var y = Math.round(Math.cos(angle) * numbersBaseRadius);
    context.beginPath();
    context.arc(x, y, circleRadius, 0, 2 * Math.PI, true);
    context.fillStyle = 'white';
    context.font = 'italic bold 1em Arial';
    context.fillText(number, x, y);
    context.fill();
  }
}

function createCanvasDigitalWatch(context) {
  context.beginPath();
  context.strokeStyle = 'white';
  context.fillRect(digitalClockWidth - baseRadius / 2, numbersBaseRadius / 2 - baseRadius / 2, digitalClockWidth, digitalClockHeight);
}

function createHourHands(context, length, width) {
  context.beginPath();
  context.lineWidth = width;
  context.lineCap = "round";
  context.moveTo(0, 0);
  context.lineTo(0, -length);
  context.strokeStyle = 'lightblue';
  context.stroke();
}

function createMinuteHands(context, length, width) {
  context.beginPath();
  context.lineWidth = width;
  context.lineCap = "round";
  context.moveTo(0, 0);
  context.lineTo(0, -length);
  context.strokeStyle = 'lightblue';
  context.stroke();
}

function createSecondHands(context, length, width) {
  context.beginPath();
  context.lineWidth = width;
  context.lineCap = "round";
  context.moveTo(0, 0);
  context.lineTo(0, -length);
  context.strokeStyle = 'lightblue';
  context.stroke();
}

// Logic

function tickTimer() {
  var now = new Date();
  var thisSecond = now.getSeconds();
  var thisMinute = now.getMinutes();
  var thisHour = now.getHours();
  updateWatch(thisHour, thisMinute, thisSecond);
  updateDigitalWatch(thisHour, thisMinute, thisSecond);
}

function updateWatch(hour, minute, second) {
  var thisSecondRotate = (second / 60) * 360 - 90;
  var thisMinuteRotate = (minute) / 60 * 360 - 90;
  var thisHourRotate = (hour + minute / 60) / 12 * 360 - 90;
  rotateHandle('seconds', thisSecondRotate);
  rotateHandle('minutes', thisMinuteRotate);
  rotateHandle('hours', thisHourRotate);
}

function rotateHandle(handle, degree) {
  var arrow = document.querySelector(`.${handle}`);
  arrow.style.transform = `rotate(${degree}deg)`;
}

function updateDigitalWatch(hour, minute, second) {
  var digitalWatchSeconds = document.querySelector('#secondstext');
  var digitalWatchMinutes = document.querySelector('#minutestext');
  var digitalWatchHours = document.querySelector('#hourstext');
  digitalWatchSeconds.textContent = addZeroToNumber(second);
  digitalWatchMinutes.textContent = addZeroToNumber(minute);
  digitalWatchHours.textContent = addZeroToNumber(hour);
}

function addZeroToNumber(currentTime) {
  return (`${currentTime}`.length < 2) ? (`0${currentTime}`) : currentTime;
}