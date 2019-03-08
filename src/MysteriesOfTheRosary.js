class MysteriesOfTheRosary {
  constructor(initialMystery, currentDate) {
    this.initialMystery = initialMystery;
    this.currentDate = currentDate;
  }
  getCurrentMystery() {
    return "Narodzenie Pana Jezusa";
  };
}

module.exports = MysteriesOfTheRosary;
