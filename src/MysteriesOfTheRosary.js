class MysteriesOfTheRosary {
  
  constructor(initialMystery, initialDate, currentDate) {
    this.initialMystery = initialMystery;
    this.initialDate = initialDate;
    this.currentDate = currentDate;

    this.mysteries = ["Zwiastowanie Najświętszej Maryi Panny", "Nawiedzenie św. Elżbiety", "Narodzenie Pana Jezusa", "Ofiarowanie Pana Jezusa w świątyni", "Odnalezienie Pana Jezusa w świątyni",
      "Chrzest Pana Jezusa w Jordanie", "Objawienie Pana Jezusa na weselu w Kanie", "Głoszenie przez Pana Jezusa Królestwa Bożego i wzywanie do nawrócenia", "Przemienienie Pana Jezusa na górze Tabor","Ustanowienie przez Pana Jezusa Eucharystii",
      "Modlitwa i konanie Pana Jezusa w Ogrójcu", "Biczowanie Pana Jezusa", "Cierniem ukoronowanie Pana Jezusa", "Dźwiganie krzyża na Kalwarię", "Śmierć Pana Jezusa na krzyżu",
      "Zmartwychwstanie Pana Jezusa", "Wniebowstąpienie Pana Jezusa", "Zesłanie Ducha Świętego", "Wniebowzięcie Matki Bożej", "Ukoronowanie Matki Bożej w niebie"];
  }
  
  getCurrentMystery() {
    var indexOfInitialMystery = this.mysteries.indexOf(this.initialMystery);
    var diffMonths =  this._diffMonths(this.currentDate,this.initialDate);
    return this.mysteries[indexOfInitialMystery + diffMonths];
  };

  _diffMonths(dt2, dt1) {
    var diff =(dt2.getTime() - dt1.getTime()) / 1000;
    diff /= (60 * 60 * 24 * 7 * 4);
    return Math.abs(Math.round(diff));
 }
}

module.exports = MysteriesOfTheRosary;
