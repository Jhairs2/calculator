// Global Variables
// variables to save values for calculations
let previousNumber = null;
previousOperand = [];
let isRunning = false;

const screen = document.querySelector(".screen");
const numButtons = document.querySelectorAll(".num-pad");
const allClearButton = document.querySelector(".all-clear");
const deleteButton = document.querySelector(".delete");
const equalButton = document.querySelector(".equal");
const operationButtons = document.querySelectorAll(".ops");
const decimalButton = document.querySelector(".decimal");


// Event Listeners
numButtons.forEach(button => button.addEventListener("click", appendNum));
operationButtons.forEach(button => button.addEventListener("click", operations));
allClearButton.addEventListener("click", clear);
deleteButton.addEventListener("click", removeNum);
equalButton.addEventListener("click", operate);
decimalButton.addEventListener("click", inputDecimal);


// Functions

// Append numbers to screen when button is pressed
// Will clear screen and start new entry if operand has been pressed
function appendNum() {

    if ((screen.textContent == "0" && screen.textContent != "0.") || isRunning) {
        isRunning = false;
        screen.textContent = this.textContent;

    }

    else if (screen.textContent.length < 13) {
        screen.textContent += this.textContent;
    }

}

// Clear and delete buttons

// Clear all numbers on screen and reset saved values
function clear() {
    screen.textContent = "0";
    previousNumber = null;
    previousOperand = [];
}

// Remove last number inputted on screen
function removeNum() {

    if (screen.textContent.length == 1) {
        screen.textContent = "0";
    }
    else {
        screen.textContent = screen.textContent.slice(0, screen.textContent.length - 1);
    }
}


/* If operand is selected it will save previous values and it will call operate function if an
    operand has previously been selected */
function operations() {

    if (previousOperand.length > 0 && previousNumber != null) {
        operate();
        previousNumber = screen.textContent;
        previousOperand.push(this.textContent);
    }

    else {
        isRunning = true;
        previousNumber = screen.textContent;
        previousOperand.push(this.textContent);
    }
}

// take saved values and decide what math operations to perform 
function operate() {
    isRunning = true;
    let result = 0
    switch (previousOperand[0]) {

        case "+":
            result = parseFloat(previousNumber) + parseFloat(screen.textContent);
            screen.textContent = scientificNotation(result.toPrecision(10));
            previousNumber = null;
            previousOperand.shift();
            break;

        case "-":
            result = parseFloat(previousNumber) - parseFloat(screen.textContent);
            screen.textContent = scientificNotation(result.toPrecision(10));
            previousNumber = null;
            previousOperand.shift();
            break;

        case "*":
            result = parseFloat(previousNumber) * parseFloat(screen.textContent);
            screen.textContent = scientificNotation(result.toPrecision(10));
            previousNumber = null;
            previousOperand.shift();
            break;

        case "÷":
            // Error if divide by zero
            if (screen.textContent == 0) {
                previousNumber = null;
                previousOperand.shift();
                return screen.textContent = "ERROR";
            }
            result = parseFloat(previousNumber) / parseFloat(screen.textContent);
            screen.textContent = scientificNotation(result.toPrecision(10));
            previousNumber = null;
            previousOperand.shift();
            break;

    }

}

// Will turn big numbers into scientific notation to prevent overflow
function scientificNotation(result) {
    length = (result + '').replace('.', '').length
    isSciNot = screen.textContent.includes('e');

    if (length > 13 || isSciNot) {
        return result = result.toExponential(3);
    }

    else {
        return result = parseFloat(result);
    }

}

// Will allow for decimal to be placed if decimal is not already there
function inputDecimal() {
    if (screen.textContent == null || isRunning) {
        isRunning = false;
        screen.textContent = "0";
        screen.textContent += this.textContent;

    } else if (!screen.textContent.includes(this.textContent)) {
        screen.textContent += this.textContent;
    }
}


