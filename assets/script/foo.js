/**
 * Simple ECMAScript stuff, demonstrating basic stuff
 * 
 * @author Sven Schrodt
 * @since 2026-01-26
 */

class Rectangle {

    // Private properties
     #height = 0   
     #width = 0
    constructor(height, width) {
        this.#height = height;
        this.#width = width;
    }

    set width(val) {
         this.#width = val;
    }

    get width() {
         return this.#width;
    }

    set height(val) {
         this.#height = val;
    }

    get height() {
         return this.#height;
    }

    // Getter calculating area with current height and width
    get area() {
        return this.calcArea();
    }
    // Method
    calcArea() {
        return this.#height * this.#width;
    }
    *getSides() {
        yield this.#height;
        yield this.#width;
    }
}

// Starting after DOM has been filly loaded
document.addEventListener("DOMContentLoaded", (event) => {
    msg = "DOM fully loaded and parsed";
    console.log(msg);
    const square = new Rectangle(10, 10);

    console.log(square.area); // 100
    console.log([...square.getSides()]); // [10, 10, 10, 10]
    //alert(msg);
});



