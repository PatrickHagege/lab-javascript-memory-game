const cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' }
];

const memoryGame = new MemoryGame(cards);

window.addEventListener('load', (event) => {
  let html = '';
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach(function (card) {
    
    card.addEventListener('click',(e) => {
      //TODO: write some code here
      card.classList.toggle('turned');
    // let backDiv = document.querySelector(".back");
    // let frontDiv = document.querySelector(".front");
    //console.log(backDiv);
    //e.currentTarget.classList.toggle('turned');
    memoryGame.pickedCards.push(card);
    console.log(memoryGame.pickedCards);
    if(memoryGame.pickedCards.length === 2) memoryGame.checkIfPair(memoryGame.pickedCards[0], memoryGame.pickedCards[1]);
    console.log(memoryGame.checkIfPair(memoryGame.pickedCards[0], memoryGame.pickedCards[1]))
    //  console.log("card => ", card,"e.target = ",e.target, "e.currentTarget = ", e.currentTarget, "e.eventPhase = ",e.eventPhase, "e =>",e);
    // console.log(e.composedPath());
    // console.log(memoryGame.checkIfPair());
     //backDiv.classList.toggle("back");
    // frontDiv.classList.add("back");
    // backDiv.classList.remove("back");
    // frontDiv.classList.remove("front");
    //console.log(e.target);
    //console.log(document);
      console.log(`Card clicked: ${card}`);
    });
  });
});