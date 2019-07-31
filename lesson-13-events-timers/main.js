var CircleRad = 10; //clock face radius
var NumRad = 2; //clock numbers 1-12 container radius
var FromNumToClock = 8; // distance between clockface centre and clock numbers center
var HourHandLength = 4.5; // lengths and heights of clock's hands
var HourHandWidth = 0.55; //--
var MinuteHandLength = 8; //--
var MinuteHandWidth = 0.35; //--
var SecondHandLength = 9; //--
var SecondHandWidth = 0.15; //--
var DigitalWatchHeight = 2; //height digital watch container
var DigitalWatchWidth = 8; //width digital watch container
var DistanceToDigitalWatch = 6; // distance between clockface centre and digital watch
var AngleBetween = Math.PI / 6; // the angle between adjacent numbers
var CurrTime = new Date();
var numbers = []; // array of clock's numbers
var angle = Math.PI / 6; // 1/12 part of 2*PI rad.

var hourHandPosition = (Math.PI / 6) * (CurrTime.getHours() + (1 / 60) * CurrTime.getMinutes()); // еhe starting position of the hour hand is dependent on the current time.
var minuteHandPosition = (Math.PI / 30) * (CurrTime.getMinutes() + (1 / 60) * CurrTime.getSeconds()); //The starting position of the minute hand is dependent on the current time.
var secondHandPosition = (Math.PI / 30) * CurrTime.getSeconds(); //The starting position of the second hand is dependent on the current time.

var divCont = document.createElement('div');

divCont.style.width = '30em';
divCont.style.height = '30em';
document.body.appendChild(divCont);

//Clock container - full clock - циферблат
var clock = document.createElement('div');
clock.style.height = CircleRad * 2 + 'em';
clock.style.width = CircleRad * 2 + 'em';
clock.className = 'clockFace';
divCont.appendChild(clock);

//find clock center coordinates
var clockCenterX = clock.offsetLeft + clock.offsetWidth / 2;
var clockCenterY = clock.offsetTop + clock.offsetHeight / 2;

for (var i = 1; i <= 12; i++) {
  numbers[i] = document.createElement('div');
  numbers[i].innerHTML = i;
  numbers[i].className = 'numbers';
  numbers[i].style.height = NumRad + 'em';
  numbers[i].style.width = NumRad + 'em';
  clock.appendChild(numbers[i]);
  setClockNumberLocation(numbers[i]);
}

function setClockNumberLocation(number) {

  var numberCenterX = clockCenterX + FromNumToClock * 16 * Math.sin(angle);
  var numberCenterY = clockCenterY - FromNumToClock * 16 * Math.cos(angle);

  number.style.left = Math.round(numberCenterX - number.offsetWidth / 2) + 'px';
  number.style.top = Math.round(numberCenterY - number.offsetHeight / 2) + 'px';

  angle += AngleBetween;
}

var hourHand = document.createElement('div');
var minuteHand = document.createElement('div');
var secondHand = document.createElement('div');

hourHand.style.height = HourHandLength + 'em';
hourHand.style.width = HourHandWidth + 'em';

minuteHand.style.height = MinuteHandLength + 'em';
minuteHand.style.width = MinuteHandWidth + 'em';

secondHand.style.height = SecondHandLength + 'em';
secondHand.style.width = SecondHandWidth + 'em';


hourHand.className = 'clockHand';
minuteHand.className = 'clockHand';
secondHand.className = 'clockHand';

clock.appendChild(hourHand);
clock.appendChild(minuteHand);
clock.appendChild(secondHand);

hourHand.style.transformOrigin = 'center 4em';
minuteHand.style.transformOrigin = 'center 7.5em';
secondHand.style.transformOrigin = 'center 8.5em';

handLocation(hourHand);
handLocation(minuteHand);
handLocation(secondHand);

//clock hand location function
function handLocation(hand) {
  hand.style.top = clockCenterY - hand.offsetHeight + 'px';
  hand.style.left = clockCenterX - hand.offsetWidth / 2 + 'px';
}

//digital watch location
var digitalWatch = document.createElement('div');
digitalWatch.style.width = DigitalWatchWidth + 'em';
digitalWatch.style.height = DigitalWatchHeight + 'em';
digitalWatch.className = 'digitalWatch';
clock.appendChild(digitalWatch);

digitalWatch.style.top = clockCenterY - DistanceToDigitalWatch * 16 + digitalWatch.offsetHeight / 2 + 'px';
digitalWatch.style.left = clockCenterX - digitalWatch.offsetWidth / 2 + 'px';

function updateTime() {
  var timeNow = new Date();
  var CurrTimeStr = FormatDateTime(timeNow);
  document.querySelector('.digitalWatch').innerHTML = CurrTimeStr;
}

function FormatDateTime(DT) {
  var Hours = DT.getHours();
  var Minutes = DT.getMinutes();
  var Seconds = DT.getSeconds();
  return Str0L(Hours, 2) + ':' + Str0L(Minutes, 2) + ':' + Str0L(Seconds, 2);
}

function Str0L(Val, Len) {
  var StrVal = Val.toString();
  while (StrVal.length < Len)
    StrVal = '0' + StrVal;
  return StrVal;
}

function clockHands() {

  //every second the clock changes its position to
  hourHandPosition += Math.PI / 30 * (1 / 360);
  minuteHandPosition += Math.PI / 30 * (1 / 60);
  secondHandPosition += Math.PI / 30;

  secondHand.style.transform = "rotate(" + secondHandPosition + "rad)";
  minuteHand.style.transform = "rotate(" + minuteHandPosition + "rad)";
  hourHand.style.transform = "rotate(" + hourHandPosition + "rad)";
}

function run() {
  clockHands();
  updateTime();
}

setInterval(run, 1000);
