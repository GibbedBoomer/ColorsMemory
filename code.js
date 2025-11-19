import { Toolbox } from "./toolbox.js";
import { Card } from "./card.js";

let canvas = document.getElementById("myCanvas");
let pencil = canvas.getContext("2d");
let toolbox = new Toolbox();
let winScreen = document.getElementById("win_screen")

let cards = [];
let flippedCards = [];
let lockBoard = false;
let gameWon = false;

function gameInitialize() {
    let numberOfColors = 8;
    let colors = [];

    for (let i = 0; i < numberOfColors; i++) {
        colors.push(toolbox.getRandomColor());
    }

    // Duplicate and shuffle
    let cardColors = [];
    colors.forEach(c => {
        cardColors.push(c);
        cardColors.push(c);
    });
    cardColors = toolbox.shuffleArray(cardColors);

    // Create card objects
    let cardX = 50;
    let cardY = 50;
    let cardsPerRow = 8;
    let cardSpacing = 150;

    for (let i = 0; i < cardColors.length; i++) {
        let card = new Card(canvas, pencil, cardX, cardY, cardColors[i], flipCard);
        cards.push(card);

        cardX += cardSpacing;
        if ((i + 1) % cardsPerRow === 0) {
            cardX = 50;
            cardY += 200;
        }
    }
}

function flipCard(card) {
    if (lockBoard || flippedCards.includes(card)) return;

    card.isFaceUp = true;
    flippedCards.push(card);

    if (flippedCards.length === 2) {
        checkMatch();
    }
}

function checkMatch() {
    lockBoard = true;

    let [card1, card2] = flippedCards;

    if (card1.color === card2.color) {
        flippedCards = [];
        lockBoard = false;
        checkWin();
    } else {
        setTimeout(() => {
            card1.isFaceUp = false;
            card2.isFaceUp = false;
            flippedCards = [];
            lockBoard = false;
        }, 1000);
    }
}

function checkWin() {
    let allFaceUp = cards.every(function(card) {
        return card.isFaceUp;
    });

    if (allFaceUp) {
        gameWon = true;
    }
}
function gameLoop() {
    pencil.clearRect(0, 0, canvas.width, canvas.height);
    cards.forEach(card => card.draw());

    if (gameWon == true){
        pencil.drawImage(
            winScreen,
            canvas.width / 2 - winScreen.naturalWidth / 2,
            canvas.height / 2 - winScreen.naturalHeight / 2
        );
    }
}

// Initialize game
gameInitialize();
setInterval(gameLoop, 1000 / 60);