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
var racket1; // первая ракетка
var racket2; // вторая ракетка

wrapper.appendChild(createGame());
requestAnimationFrame(tick);

// ********************************               BALL            *****************************
var BallH = {
  PosX: field.getBoundingClientRect().width / 2 - BallHeight / 2,
  PosY: field.getBoundingClientRect().height / 2 - BallWidth / 2,
  SpeedX: 0,
  SpeedY: 0,
  width: BallWidth,
  height: BallHeight,
  update: function () {
    var BallObj = document.getElementById('ball');
    BallObj.style.left = this.PosX + "px";
    BallObj.style.top = this.PosY + "px";
  }
};

var BallHArea = {
  width: field.getBoundingClientRect().width,
  height: field.getBoundingClientRect().height,
};


//*************************************         RACKETS         *****************************
var RacketH = {
  width: RacketWidth,
  height: RacketHeight,
  racket1PosX: field.getBoundingClientRect().left,
  racket1PosY: FieldHeight / 2 - RacketHeight / 2,
  racket1Speed: 0,

  racket2PosX: FieldWidth - RacketWidth,
  racket2PosY: FieldHeight / 2 - RacketHeight / 2,
  racket2Speed: 0,

  update: function () {
    var racket1Obj = document.getElementById('racket1');
    var racket2Obj = document.getElementById('racket2');
    racket1Obj.style.left = this.racket1PosX + "px";
    racket1Obj.style.top = this.racket1PosY + "px";
    racket2Obj.style.left = this.racket2PosX + "px";
    racket2Obj.style.top = this.racket2PosY + "px";
  }
};

var RacketHArea = {
  width: field.getBoundingClientRect().width,
  height: field.getBoundingClientRect().height,
};

RacketH.update();


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
    RacketH.racket1Speed = 5;

  }
  if (EO.keyCode === 16) {
    RacketH.racket1Speed = -5;

  }
  if (EO.keyCode === 40) {
    RacketH.racket2Speed = 5;

  }
  if (EO.keyCode === 38) {
    RacketH.racket2Speed = -5;
  }
}

function keyUpFunction(EO) {
  EO = EO || window.event;
  EO.preventDefault();

  if (EO.keyCode === 17) {
    RacketH.racket1Speed = 0;
  }

  if (EO.keyCode === 16) {
    RacketH.racket1Speed = 0;
  }

  if (EO.keyCode === 40) {
    RacketH.racket2Speed = 0;
  }

  if (EO.keyCode === 38) {
    RacketH.racket2Speed = 0;
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
  if (BallH.PosX + BallH.width > BallHArea.width - RacketH.width) {
    if (BallH.PosY + BallH.height < RacketH.racket2PosY || BallH.PosY > RacketH.racket2PosY + RacketH.height) {
      score1 += 1;
      BallH.SpeedX = 0;
      BallH.SpeedY = 0;
      showScore();
    }
    BallH.SpeedX = -BallH.SpeedX;
    BallH.PosX = BallHArea.width - BallH.width - RacketH.width;
  }

  if (BallH.PosX < RacketH.width) {
    if (BallH.PosY + BallH.height < RacketH.racket1PosY || BallH.PosY > RacketH.racket1PosY + RacketH.height) {
      score2 += 1;
      BallH.SpeedX = 0;
      BallH.SpeedY = 0;
      showScore();
    }
    BallH.SpeedX = -BallH.SpeedX;
    BallH.PosX = RacketH.width;
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

  RacketH.racket1PosY += RacketH.racket1Speed;

  if (RacketH.racket1PosY + RacketH.height > RacketHArea.height) {
    RacketH.racket1PosY = RacketHArea.height - RacketH.height - 2;
  }
  if (RacketH.racket1PosY < 0) {
    RacketH.racket1PosY = 0;
  }

  RacketH.racket2PosY += RacketH.racket2Speed;
  if (RacketH.racket2PosY + RacketH.height > RacketHArea.height) {
    RacketH.racket2PosY = RacketHArea.height - RacketH.height - 2;
  }

  if (RacketH.racket2PosY < 0) {
    RacketH.racket2PosY = 0;
  }
  RacketH.update();
  requestAnimationFrame(tick);
}
