
// defines all operation related functions for the calculator to perform

class Calculator {

    static buttons = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "+", "-", "*", "/"];

    static currentValue = [];

    static add(a, b) {
        return a + b;
    };

    static subtract(a, b) {
        return a - b;
    };

    static multiply(a, b) {
        return a * b;
    };

    static divide(a, b) {
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
        this.#setui();
    };

    #createMainDiv() {
        const body = document.querySelector('body');
        const mainDiv = document.createElement('div');
        mainDiv.id = 'main-div';
        body.appendChild(mainDiv);
        return mainDiv;
    };

    #createScreenArea(mainDiv) {
        const screenArea = document.createElement('div');
        screenArea.id = 'screen-area';
        mainDiv.appendChild(screenArea);
        const currentValue = document.createElement('p');
        currentValue.id = 'current-value';
        currentValue.textContent = '';
        const outputValue = document.createElement('p');
        outputValue.id = 'output-value';
        outputValue.textContent = 0;
        screenArea.appendChild(currentValue);
        screenArea.appendChild(outputValue);
    };

    #createButtonArea(mainDiv) {
        const buttonArea = document.createElement('div');
        buttonArea.id = 'button-area';
        mainDiv.appendChild(buttonArea);
        return buttonArea;
    };

    #createButtons(array) {
        return array.map((button) => {
            const myButton = document.createElement('button');
            myButton.value = button;
            myButton.textContent = button;
            return myButton;
        });
    };

    #updateCurrentValue(array) {
        
        if (array[0] === 0) {
            array.splice(0, 1);
        };

        const value = array.join('');
        const currentValue = document.getElementById('current-value');
        currentValue.textContent = value;
    };

    #setButtonEventListener(button) {
        button.addEventListener('click', () => {
            const value = parseInt(button.value);

            if (!isNaN(value)) {
                Calculator.currentValue.push(value);
                this.#updateCurrentValue(Calculator.currentValue);
            };
            
        });
    };

    #setui() { 
        const mainDIV = this.#createMainDiv();
        this.#createScreenArea(mainDIV);
        const buttonArea = this.#createButtonArea(mainDIV);
        let buttons = this.#createButtons(Calculator.buttons);
        buttons = buttons.forEach((button) => {
            this.#setButtonEventListener(button);
            buttonArea.appendChild(button);
        });
    };

};

const ui = new UI();