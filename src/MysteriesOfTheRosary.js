class MysteriesOfTheRosary {
  
  constructor(initialMystery, currentDate) {
    this.initialMystery = initialMystery;
    this.currentDate = currentDate;

    this.mysteries = ["Zwiastowanie Najświętszej Maryi Panny", "Nawiedzenie św. Elżbiety", "Narodzenie Pana Jezusa", "Ofiarowanie Pana Jezusa w świątyni", "Odnalezienie Pana Jezusa w świątyni",
      "Chrzest Pana Jezusa w Jordanie", "Objawienie Pana Jezusa na weselu w Kanie", "Głoszenie przez Pana Jezusa Królestwa Bożego i wzywanie do nawrócenia", "Przemienienie Pana Jezusa na górze Tabor","Ustanowienie przez Pana Jezusa Eucharystii",
      "Modlitwa i konanie Pana Jezusa w Ogrójcu", "Biczowanie Pana Jezusa", "Cierniem ukoronowanie Pana Jezusa", "Dźwiganie krzyża na Kalwarię", "Śmierć Pana Jezusa na krzyżu",
      "Zmartwychwstanie Pana Jezusa", "Wniebowstąpienie Pana Jezusa", "Zesłanie Ducha Świętego", "Wniebowzięcie Matki Bożej", "Ukoronowanie Matki Bożej w niebie"];
  }
  getCurrentMystery() {
    return "Narodzenie Pana Jezusa";
  };
}

module.exports = MysteriesOfTheRosary;
