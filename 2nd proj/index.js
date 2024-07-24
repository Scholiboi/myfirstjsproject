let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let buttonEl = document.getElementById("button-el")
let playerEL = document.getElementById("player-el")

let my_cards = []
let sum = 0
let has_blackjack = false
let game = false
let message = ""

buttonEl.style.display = "none"

let player = {
    name: "Per",
    chips: 145
}
playerEL.textContent = player.name + ": $" + player.chips

function startGame() {
    buttonEl.style.display = "inline"
    game = true
    let p_first_card = pickRandomCard()
    let p_second_card = pickRandomCard()
    my_cards = [p_first_card, p_second_card]
    sum = p_first_card + p_second_card
    renderGame()
}


function pickRandomCard() {
    let random_number = Math.floor(Math.random()*13) + 1
    if (random_number > 10) 
    {
        return 10
    } 
    else if (random_number === 1) 
    {
        return 11
    } 
    else 
    {
        return random_number
    }
}


function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < my_cards.length; i++) 
    {
        cardsEl.textContent += my_cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) 
    {
        message = "Do you want to draw a card?"
    }
    else if (sum === 21) 
    {
        message = "You've got Blackjack!"
        has_blackjack = true
    } 
    else 
    {
        message = "You lost!"
        game = false
    }
    messageEl.textContent = message
}


function newCard() {
    if (sum <= 21){
    let card = pickRandomCard()
    sum += card
    my_cards.push(card)
    renderGame()
    }
    else{
        buttonEl.style.display = "none"
    }
}
