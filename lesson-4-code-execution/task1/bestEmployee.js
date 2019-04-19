'use strict';

function bestEmloyee(obj) {

  var maxNumberOfTasks = 0;
  var bestEmployeeName = '';

  for (var employeeName in obj) {
    if (obj[employeeName] > maxNumberOfTasks && typeof (obj[employeeName]) !== 'string') {
      maxNumberOfTasks = obj[employeeName];
      bestEmployeeName = employeeName;
    }
  }
  return bestEmployeeName;
}

module.exports = bestEmloyee;
