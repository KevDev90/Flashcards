const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectAnswers = [];
  }

  returnCurrentCard() {
    return this.deck.cards[this.turns];
  }

  takeTurn(guess) {
    // after round 30, make sure turn has no current card
    const turn = new Turn(guess, this.returnCurrentCard());
    !turn.evaluateGuess() ? this.incorrectAnswers.push(this.returnCurrentCard().id) : null;
    this.turns++;
    console.log(`You are on turn ${this.turns} / 30`)
    if(this.turns === 30){
      console.log(this.endRound());
      return turn.giveFeedback()
    } else {
      return turn.giveFeedback();
    }
  }


  calculatePercentCorrect() {
    const incorrect = this.incorrectAnswers.length;
    return Math.round(incorrect / this.turns * 100);
  }

  endRound() {
   return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
  }

}




  module.exports = Round;
