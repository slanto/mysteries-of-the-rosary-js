describe("Player", function() {
  var MysteriesOfTheRosary = require('../src/MysteriesOfTheRosary');
  beforeEach(function() {
  });

  it("should return current mystery of the Rosary", function() {
    var mysteriesOfTheRosary = new MysteriesOfTheRosary("Nawiedzenie św. Elżbiety", new Date(2019, 3, 1))
    var currentMystery = mysteriesOfTheRosary.getCurrentMystery();
    expect(currentMystery).toEqual("Odnalezienie Pana Jezusa w świątyni");
  });
});
