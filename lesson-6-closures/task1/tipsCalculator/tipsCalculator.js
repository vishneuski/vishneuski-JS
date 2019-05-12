'use strict';

var John = {
  name: 'John',
  bill: [124, 48, 268, 180, 42],
  tipCalc: function () {
    var percentage;
    var arrTips = [];
    var arrTipsBills = [];
    var tips;
    for (var i = 0; i < this.bill.length; i++) {
      if (this.bill[i] < 50) {
        percentage = 0.2;
      } else if (this.bill[i] >= 50 && this.bill[i] < 200) {
        percentage = 0.15;
      } else {
        percentage = 0.1;
      }

      tips = Math.floor(this.bill[i] * percentage);
      arrTips.push(tips);
      arrTipsBills.push(this.bill[i] + tips);
    }

    console.log(this.name, ' bills list ', this.bill);
    console.log(this.name, ' tips list ', arrTips);
    console.log(this.name, ' bills & tips list ', arrTipsBills);
    console.log('----------------------------');

    return arrTips;
  }
};

var Mark = {
  name: 'Mark',
  bill: [77, 375, 110, 45],
  tipCalc: function () {
    var percentage;
    var arrTips = [];
    var arrTipsBills = [];
    var tips;
    for (var i = 0; i < this.bill.length; i++) {
      if (this.bill[i] < 100) {
        percentage = 0.2;
      } else if (this.bill[i] >= 100 && this.bill[i] < 300) {
        percentage = 0.1;
      } else {
        percentage = 0.25;
      }

      tips = Math.floor(this.bill[i] * percentage);
      arrTips.push(tips);
      arrTipsBills.push(this.bill[i] + tips);
    }

    console.log(this.name, ' bills list ', this.bill);
    console.log(this.name, ' tips list ', arrTips);
    console.log(this.name, ' bills & tips list ', arrTipsBills);
    console.log('----------------------------');

    return arrTips;
  }
};

function tipsAverage(arr) {
  var summ = 0;
  var average;

  if (Array.isArray(arr)) {
    for (var j = 0; j < arr.length; j++) {
      summ += arr[j];
    }
    average = summ / arr.length;
    console.log('Average = ', average);
    console.log('----------------------------');
    return average;
  } else {
    return 'You transfer not an array!!!';
  }
}

var JohnAverage = tipsAverage(John.tipCalc());
var MarkAverage = tipsAverage(Mark.tipCalc());

JohnAverage > MarkAverage ? console.log('John\'s family paid the highest tips on average') : console.log('Mark\'s family paid the highest tips on average');

module.exports = tipsAverage;
