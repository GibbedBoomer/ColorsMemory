import { Toolbox } from "./toolbox.js";
import { Card } from "./card.js";

let canvas = document.getElementById("myCanvas");
let pencil = canvas.getContext("2d"); // This gives you the drawing context, like a pencil
let toolbox = new Toolbox();

function gameInitialize() {
    let numberOfColors = 8;
    let colors = [];

    for (let i = 0; i < numberOfColors; i++){
        let colorAdd = toolbox.getRandomColor();
        colors.push(colorAdd)
    }
    console.log(colors)

    let cardSpot = [];

    for (let i = 0; i < colors.length; i++) {
        cardSpot.push(colors[i])
        cardSpot.push(colors[i])
    };

    cardSpot = toolbox.shuffleArray(cardSpot)
    console.log(cardSpot)
    
    let cardX = 50;
    let cardY = 50;
    let cardsPerRow = 8;
    let cardSpacing = 150;

    for (let i = 0; i < cardSpot.length; i++) {
        // Draw the card
        let cardDraw = new Card(canvas, pencil, cardX, cardY, cardSpot[i]);
        cardDraw.draw();

        
        cardX += cardSpacing;

        // Check if we’ve reached the end of a row
        if ((i + 1) % cardsPerRow === 0) {
            cardX = 50; // reset to first X
            cardY += 200; // move down next row
        }
}
    
}

gameInitialize()

function gameLoop() {

};
