const calc = {

    screenValue: 0,

    add(a, b) {
        return a + b;
    },

    sub(a, b) {
        return a - b;
    },

    mult(a, b) {
        return a * b;
    },

    div(a, b) {
        return a / b;
    },

    
};


function operate(operator, value1, value2) {
    switch(true) {
        case operator === '+':
            return calc.add(value1, value2);
        case operator === '-':
            return calc.sub(value1, value2);
        case operator === '*':
            return calc.mult(value1, value2);
        case operator === '/':
            return calc.div(value1, value2);          
    }
}


// screen display

function updateScreen() {
    const screen = document.querySelector('.screen');
    screen.textContent = calc.screenValue;
}

updateScreen()

// buttons 

/* example listener event to update screen
make a loop inspired on this to add it to all buttons
except for nun-numeric value ones */

const button1 = document.getElementById('1');
button1.addEventListener('click', () => {
    calc.screenValue = button1.id;
    updateScreen();
})
