import { Toolbox } from "./toolbox.js";
import { Card } from "./card.js";

let canvas = document.getElementById("myCanvas");
let pencil = canvas.getContext("2d"); // This gives you the drawing context, like a pencil
let toolbox = new Toolbox();

let colors = ["red", "blue", "yellow", "green", "purple", "orange", "pink", "brown"];
let cardSpot =[

];
for (let i = 0; i < colors.length; i++) {
    cardSpot.push(colors[i])
    cardSpot.push(colors[i])
};

cardSpot = toolbox.shuffleArray(cardSpot)

function gameLoop() {

};
