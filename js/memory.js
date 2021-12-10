class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    // add the rest of the class properties here
  }

  shuffleCards(cards) {
    if(!this.cards) return undefined;
    let buffer = [...this.cards];
    this.cards = [];
    let currentIndex = buffer.length;
    let randomIndex = 0;
    while (currentIndex > 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
      this.cards.push(buffer[randomIndex]);
      console.log("cards contient", this.cards)
      buffer.splice(randomIndex, 1);
      console.log("apres le splice buffer contient :", buffer);
      console.log("apres le splice cards contient :", this.cards);
      currentIndex--;
    }
    return this.cards;
  }

  checkIfPair(card1, card2) {
    // ... write your code here
  }

  checkIfFinished() {
    // ... write your code here
  }
}
console.log("coucou");
// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
