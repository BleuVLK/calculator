
// defines all operation related functions for the calculator to perform
class Calculator {

    buttons = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "+", "-", "*", "/"],

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
                output =this.divide(int1, int2);
                break;
        };
        return output;
    };

};

