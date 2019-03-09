describe("Player", function() {
  var MysteriesOfTheRosary = require('../src/MysteriesOfTheRosary');
  beforeEach(function() {
  });

  it("should return current mystery of the Rosary when initial and current date are in the same year", function() {
    var mysteriesOfTheRosary = new MysteriesOfTheRosary("Nawiedzenie św. Elżbiety", new Date(2019, 1, 1), new Date(2019, 3, 1))
    var currentMystery = mysteriesOfTheRosary.getCurrentMystery();
    expect(currentMystery).toEqual("Ofiarowanie Pana Jezusa w świątyni");
  });
});
