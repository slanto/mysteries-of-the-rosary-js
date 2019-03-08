function MysteriesOfTheRosary(initialMystery, currentDate) {
  this.initialMystery = initialMystery;
  this.currentDate = currentDate;
}

MysteriesOfTheRosary.prototype.getCurrentMystery = function() {
  return "Narodzenie Pana Jezusa";
};

module.exports = MysteriesOfTheRosary;
