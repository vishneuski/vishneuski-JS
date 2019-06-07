'use strict';
const baseRadius = 300; // радиус часов
const clockCenterX = baseRadius / 2; // x центрa
const clockCenterY = baseRadius / 2; // y центра
const numbersBaseRadius = baseRadius / 2.5; //радиус оси цифр циферблата
const circleRadius = 15; // радиус кружков с цифрами
const wrapper = document.getElementById('wrapper');
const digitalClockWidth = 100;
const digitalClockHeight = 30;
const hourHandLength = 80;
const minuteHandLength = 110;
const secondHandLength = 130;

wrapper.appendChild(createWatch());
setInterval(tickTimer, 1000);

// UI

function createWatch() {
  var svgObj = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svgObj.setAttribute('class', 'svg');
  svgObj.setAttribute('width', baseRadius);
  svgObj.setAttribute('height', baseRadius);
  svgObj.appendChild(createSVGClockFace());
  svgObj.appendChild(createSVGClockFaceGroup());
  svgObj.appendChild(createSVGDigitalWatch());
  svgObj.appendChild(createSVGHourHand());
  svgObj.appendChild(createSVGMinuteHand());
  svgObj.appendChild(createSVGSecondHand());
  return svgObj;
}

function createSVGClockFace() {
  var clockFace = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  clockFace.setAttribute('fill', 'gray');
  clockFace.setAttribute('r', baseRadius / 2);
  clockFace.setAttribute('cx', baseRadius / 2);
  clockFace.setAttribute('cy', baseRadius / 2);
  return clockFace;
}

function createSVGClockFaceGroup() {
  var clockFaceGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
  for (var number = 1; number <= 12; number++) {
    var angle = number * 30 / 180 * Math.PI;
    var x = ((baseRadius - circleRadius / 2) / 2) + Math.sin(angle) * numbersBaseRadius;
    var y = ((baseRadius - circleRadius / 2) / 2) - Math.cos(angle) * numbersBaseRadius;
    clockFaceGroup.appendChild(createSVGHourCircle(x, y, number));
  }
  return clockFaceGroup;
}

function createSVGHourCircle(circleX, circleY, number) {
  var smallCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");

  smallCircle.setAttribute('id', 'number');
  smallCircle.setAttribute('fill', 'white');
  smallCircle.setAttribute('cy', circleY);
  smallCircle.setAttribute('cx', circleX);
  smallCircle.setAttribute('r', circleRadius);
  smallCircle.setAttribute('transform', 'translate(5 5)');
  smallCircle.textContent = number;

  return smallCircle;
}

function createSVGDigitalWatch() {

  var textClock = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  textClock.setAttribute('x', baseRadius / 2 - digitalClockWidth / 2);
  textClock.setAttribute('y', baseRadius / 2 - numbersBaseRadius / 2);
  textClock.setAttribute("fill", "white");
  textClock.setAttribute("width", digitalClockWidth);
  textClock.setAttribute("height", digitalClockHeight);

  return textClock;
}

function createSVGHourHand() {
  var hourHand = document.createElementNS("http://www.w3.org/2000/svg", "line");
  hourHand.setAttribute('x1', clockCenterX);
  hourHand.setAttribute('y1', clockCenterY);
  hourHand.setAttribute('x2', baseRadius / 2);
  hourHand.setAttribute('y2', baseRadius / 2 - hourHandLength);
  hourHand.setAttribute('stroke-width', 10);
  hourHand.setAttribute('stroke', 'lightblue');
  hourHand.setAttribute('stroke-linecap', 'round');

  return hourHand;
}

function createSVGMinuteHand() {
  var minuteHand = document.createElementNS("http://www.w3.org/2000/svg", "line");
  minuteHand.setAttribute('x1', clockCenterX);
  minuteHand.setAttribute('y1', clockCenterY);
  minuteHand.setAttribute('x2', baseRadius / 2);
  minuteHand.setAttribute('y2', baseRadius / 2 - minuteHandLength);
  minuteHand.setAttribute('stroke-width', 5);
  minuteHand.setAttribute('stroke', 'lightblue');
  minuteHand.setAttribute('stroke-linecap', 'round');

  return minuteHand;
}

function createSVGSecondHand() {
  var secondHand = document.createElementNS("http://www.w3.org/2000/svg", "line");
  secondHand.setAttribute('x1', clockCenterX);
  secondHand.setAttribute('y1', clockCenterY);
  secondHand.setAttribute('x2', baseRadius / 2);
  secondHand.setAttribute('y2', baseRadius / 2 - secondHandLength);
  secondHand.setAttribute('stroke-width', 2);
  secondHand.setAttribute('stroke', 'lightblue');
  secondHand.setAttribute('stroke-linecap', 'round');

  return secondHand;
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