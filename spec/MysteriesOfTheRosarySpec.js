describe("Player", function() {
  var MysteriesOfTheRosary = require('../src/MysteriesOfTheRosary');
  beforeEach(function() {
  });

  it("should return current mystery of the Rosary", function() {
    var mysteriesOfTheRosary = new MysteriesOfTheRosary("Zwiastowanie Maryi", new Date(2019, 1, 1))
    var currentMystery = mysteriesOfTheRosary.getCurrentMystery();
    expect(currentMystery).toEqual("Narodzenie Pana Jezusa");
  });
});
