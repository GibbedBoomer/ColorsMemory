export class Toolbox {


    getRandomIndex(array) {
        return Math.floor(
            Math.random() * array.length
        );
    }


    getRandomItem(array) {
        let randomIndex = this.getRandomIndex(array);
        return array[randomIndex];
    }

    shuffleArray(array) {
        let shuffled = [];

        let howManyTimesToPush = array.length;

        for(let i = 0; i < howManyTimesToPush; i++) {
            let randomIndex = this.getRandomIndex(array);
            let removed = array.splice(randomIndex , 1 ) 
            
            shuffled.push(removed[0]);
        }
        return shuffled;
    }

    getRandomColor() {
        let color = "#";
        let chars = [
            "0", "1", "2", "3",
            "4", "5", "6", "7",
            "8", "9", "a", "b",
            "c", "d", "e", "f",
        ];

        for(let i = 0; i < 6; i++) {
            color += this.getRandomItem(chars);
        }

        return color;
    }

    isWithinRect(clickX, clickY, x, y, width, height) {
    return (
        clickX >= x &&
        clickX <= x + width &&
        clickY >= y &&
        clickY <= y + height
    );
    }
}
