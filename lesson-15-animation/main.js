'use strict';

var wrapper = document.getElementById('wrapper'); // контейнер для игры
var gameField;  // игровое поле целиком - кнопка старт + счет + поле
var startButton; // кнопка старт
var gameScore; // счет
var field; // поле на котором мы играем

//************************************      Constants        *************************************
const GameFieldWidth = 700;
const GameFieldHeight = 500;
const StartButtonWidth = 100;
const StartButtonHeight = 30;
const GameScoreWidth = 700;
const GameScoreHeight = 70;
const FieldWidth = 700;
const FieldHeight = 430;
const RacketWidth = 10;
const RacketHeight = 100;
const BallWidth = 30;
const BallHeight = 30;

var score1 = 0; // счет первого игрока
var score2 = 0; // счет вторго игрока

wrapper.appendChild(createGame());
requestAnimationFrame(tick);

// ********************************               BALL            *****************************
function Ball(width, height, x, y, speedX, speedY) {
  var self = this;
  self.width = width;
  self.height = height;
  self.PosX = x;
  self.PosY = y;
  self.SpeedX = speedX;
  self.SpeedY = speedY;

  self.update = function () {
    var BallObj = document.getElementById('ball');
    BallObj.style.left = self.PosX + "px";
    BallObj.style.top = self.PosY + "px";
  }
}

function BallArea(width, height) {
  var self = this;
  self.width = width;
  self.height = height;
}

var BallH = new Ball(BallWidth, BallHeight, FieldWidth / 2 - BallWidth / 2, FieldHeight / 2 - BallHeight / 2, 0, 0);
var BallHArea = new BallArea(FieldWidth, FieldHeight);

//*************************************         RACKETS         *****************************
function Racket(width, height, posX, posY, speed, id) {
  var self = this;
  self.width = width;
  self.height = height;
  self.posX = posX;
  self.posY = posY;
  self.speed = speed;
  self.id = id;

  self.update = function () {
    var racketObj = document.getElementById(self.id);
    racketObj.style.left = self.posX + "px";
    racketObj.style.top = self.posY + "px";
  }
}

function RacketArea(width, height) {
  var self = this;
  self.width = width;
  self.height = height;
}

var racket1 = new Racket(RacketWidth, RacketHeight, field.getBoundingClientRect().left, FieldHeight / 2 - RacketHeight / 2, 0, 'racket1');
var racket2 = new Racket(RacketWidth, RacketHeight, FieldWidth - RacketWidth, FieldHeight / 2 - RacketHeight / 2, 0, 'racket2');
var RacketHArea = new RacketArea(FieldWidth, FieldHeight);

racket1.update();
racket2.update();

//*******************************   UI    ********************************************
function createGame() {
  gameField = document.createElement('div');
  gameField.style.width = GameFieldWidth + 'px';
  gameField.style.height = GameFieldHeight + 'px';
  gameField.appendChild(createStartButton());
  gameField.appendChild(createScore());
  gameField.appendChild(createField());
  return gameField;
}

function createStartButton() {
  var startButton = document.createElement('input');
  startButton.id = 'startButton';
  startButton.type = 'button';
  startButton.value = 'старт!';
  startButton.style.position = 'absolute';
  startButton.style.width = StartButtonWidth + 'px';
  startButton.style.height = StartButtonHeight + 'px';
  startButton.style.top = GameScoreHeight / 2 - StartButtonHeight / 2 + 'px';
  startButton.addEventListener("click", startGame, false);
  return startButton;

}

function showScore() {
  gameScore.textContent = score1 + ':' + score2;
}

function createScore() {
  gameScore = document.createElement('div');
  gameScore.id = 'gameScore';
  gameScore.style.width = GameScoreWidth + 'px';
  gameScore.style.height = GameScoreHeight + 'px';
  showScore();
  return gameScore;
}

function createField() {
  field = document.createElement('div');
  field.id = 'field';
  field.style.position = 'relative';
  field.style.width = FieldWidth + 'px';
  field.style.height = FieldHeight + 'px';
  field.appendChild(createRackets(racket1, 'racket1'));
  field.appendChild(createRackets(racket2, 'racket2'));
  field.appendChild(createBall());
  return field;
}

function createRackets(racket, racketId) {
  var racket = document.createElement('div');
  racket.id = racketId;
  racket.style.position = 'absolute';
  racket.style.width = RacketWidth + 'px';
  racket.style.height = RacketHeight + 'px';
  return racket;
}

function createBall() {
  var ball = document.createElement('div');
  ball.id = 'ball';
  ball.style.position = 'absolute';
  ball.style.width = BallWidth + 'px';
  ball.style.height = BallHeight + 'px';
  return ball;
}

//*************************  keyDown & keyUp *************************
window.addEventListener("keydown", keyDownFunction, false);
window.addEventListener("keyup", keyUpFunction, false);

function keyDownFunction(EO) {
  EO = EO || window.event;

  EO.preventDefault();
  if (EO.keyCode === 17) {
    racket1.speed = 5;

  }
  if (EO.keyCode === 16) {
    racket1.speed = -5;

  }
  if (EO.keyCode === 40) {
    racket2.speed = 5;

  }
  if (EO.keyCode === 38) {
    racket2.speed = -5;
  }
}

function keyUpFunction(EO) {
  EO = EO || window.event;
  EO.preventDefault();

  if (EO.keyCode === 17) {
    racket1.speed = 0;

  }
  if (EO.keyCode === 16) {
    racket1.speed = 0;

  }
  if (EO.keyCode === 40) {
    racket2.speed = 0;

  }
  if (EO.keyCode === 38) {
    racket2.speed = 0;
  }
}

//**********************************   Logic   **************************************
function startGame() {
  BallH.PosX = BallHArea.width / 2 - BallH.width / 2;
  BallH.PosY = BallHArea.height / 2 - BallH.height / 2;
  BallH.SpeedX = 5;
  BallH.SpeedY = 4;
}

function tick() {
  BallH.PosX += BallH.SpeedX;
  if (BallH.PosX + BallH.width > BallHArea.width - RacketWidth) {
    if (BallH.PosY + BallH.height < racket2.posY || BallH.PosY > racket2.posY + RacketHeight) {
      score1 += 1;
      BallH.SpeedX = 0;
      BallH.SpeedY = 0;
      showScore();
    }
    BallH.SpeedX = -BallH.SpeedX;
    BallH.PosX = BallHArea.width - BallH.width - RacketWidth;
  }

  if (BallH.PosX < RacketWidth) {
    if (BallH.PosY + BallH.height < racket1.posY || BallH.PosY > racket1.posY + RacketHeight) {
      score2 += 1;
      BallH.SpeedX = 0;
      BallH.SpeedY = 0;
      showScore();
    }
    BallH.SpeedX = -BallH.SpeedX;
    BallH.PosX = RacketWidth;
  }

  BallH.PosY += BallH.SpeedY;

  if (BallH.PosY + BallHeight > BallHArea.height) {
    BallH.SpeedY = -BallH.SpeedY;
  }
  if (BallH.PosY < 0) {
    BallH.SpeedY = -BallH.SpeedY;
    BallH.PosY = 0;
  }

  BallH.update();


  racket1.posY += racket1.speed;

  if (racket1.posY + RacketHeight > RacketHArea.height) {
    racket1.posY = RacketHArea.height - RacketHeight;
  }
  if (racket1.posY < 0) {
    racket1.posY = 0;
  }

  racket2.posY += racket2.speed;
  if (racket2.posY + RacketHeight > RacketHArea.height) {
    racket2.posY = RacketHArea.height - RacketHeight;
  }

  if (racket2.posY < 0) {
    racket2.posY = 0;
  }
  racket1.update();
  racket2.update();
  requestAnimationFrame(tick);
}
