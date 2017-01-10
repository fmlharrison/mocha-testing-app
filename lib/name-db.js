var mk = require('mortalkombat');

exports.getRandomNames = function getRandomNames(num) {
  var randomNames = [];

  for (var i = 0; i < num; i++) {
    randomNames.push(mk.get());
  }

  return randomNames;
};
