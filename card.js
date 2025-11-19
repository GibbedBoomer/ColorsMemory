import { Toolbox } from "./toolbox.js";

export class Card {
    x = 0;
    y = 0;
    width = 100;
    height = 100;
    color;
    isFaceUp = false;
    canvas;
    pencil;
    toolbox = new Toolbox();
    flipCall; 

    constructor(canvas, pencil, x, y, color, flipCall) {
        this.canvas = canvas;
        this.pencil = pencil;
        this.x = x;
        this.y = y;
        this.color = color;
        this.flipCall = flipCall;

        canvas.addEventListener("click", (e) => this.onClick(e));
    }

    draw() {
        if (this.isFaceUp) {
            this.pencil.fillStyle = this.color;
            this.pencil.fillRect(this.x, this.y, this.width, this.height);
        } else {
            this.pencil.strokeStyle = "gray";
            this.pencil.lineWidth = 5;
            this.pencil.strokeRect(this.x, this.y, this.width, this.height);
        }
    }

    onClick(event) {
        let clickX = event.offsetX;
        let clickY = event.offsetY;

        if (!this.isFaceUp && this.toolbox.isWithinRect(clickX, clickY, this.x, this.y, this.width, this.height)) {
            this.flipCall(this);
        }
    }
}