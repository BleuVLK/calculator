
// defines all operation related functions for the calculator to perform

class Calculator {

    static buttons = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "+", "-", "*", "/"];

    add(a, b) {
        return a + b;
    };

    subtract(a, b) {
        return a - b;
    };

    multiply(a, b) {
        return a * b;
    };

    divide(a, b) {
        return a / b;
    };

    static operate(operator, int1, int2) {
        let output
        switch(true) {
            case (operator === "+"):
                output = this.add(int1, int2);
                break;
            case (operator === "-"):
                output = this.subtract(int1, int2);
                break;
            case (operator === "*"):
                output = this.multiply(int1, int2);
                break;
            case (operator === "/"):
                output = this.divide(int1, int2);
                break;
        };
        return output;
    };

};


// creates main UI sections

class UI {

    constructor() {
        this.#setui;
    };

    #createMainDiv() {
        const body = document.querySelector('body');
        const mainDiv = document.createElement('div');
        mainDiv.classList.toggle('main-div');
        body.appendChild(mainDiv);
        return mainDiv;
    };

    #createScreenArea(mainDiv) {
        const screenArea = document.createElement('div');
        screenArea.classList.toggle('screen-area');
        mainDiv.appendChild(screenArea);
        return screenArea
    };

    #setui() { 
        const mainDIV = this.#createMainDiv();
        const screenArea = this.#createScreenArea(mainDIV);
    }

}

const ui = new UI();
