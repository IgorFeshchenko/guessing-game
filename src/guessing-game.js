class GuessingGame {
      
    constructor() {var min;
                   var max;
                   var c;  }

    setRange(min, max) {
      this.min=min;
      this.max=max;
      return 1;
    }

    guess() {
       return this.c = Math.round((this.max+this.min)/2);
    }

    lower() {
     this.max = this.c;
     return 1;
    }

    greater() {
     this.min = this.c;
     return 1;
    }
}

module.exports = GuessingGame;
