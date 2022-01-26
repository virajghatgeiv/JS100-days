let sum = 0
let cards = []
let hasBlackJack = false
let isAlive = false
let msg = ""
let messageEl = document.querySelector ("#message-el")
let cardsEl = document.querySelector ("#cards-el")
let sumEl = document.querySelector ("#sum-el")


function getRandomCard() {
 
 let randomNumber = Math.floor(Math.random()*13) + 1
 if (randomNumber === 1){
   return 11
 }
 else if(randomNumber >10){
   return 10
 }
 else {
   return randomNumber
 }

 
}


function startGame() {
 isAlive = true
 let firstCard = getRandomCard()
 let secodCard = getRandomCard()
 cards = [firstCard,secodCard]
 sum = firstCard + secodCard
 
 renderGame()
}


function renderGame() {

 cardsEl.textContent = "Cards:"
 
 for (let i=0; i<cards.length;i++) {
  cardsEl.textContent += cards[i] + " "
 }


  sumEl.textContent = "Sum:" + sum
  if (sum <= 20) {
   msg = "Do you want to draw a new card?"
  }
  else if (sum === 21) {
   msg = "You have got blackjack"
   hasBlackJack = true
  }
  else {
   msg = "you are out of the game!"
  isAlive = false
  }

  messageEl.textContent = msg
}

function newCard(){
  if (isAlive === true && hasBlackJack === false) {
 let newCard = getRandomCard()
 cards.push(newCard)
 
 sum += newCard

 renderGame()
  }
}