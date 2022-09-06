// Global Variables

// variables to save values for calculations
let previousNumber;
previousOperand = [];
let isRunning = false;

const screen = document.querySelector(".screen");
const numButtons = document.querySelectorAll(".num-pad");
const allClearButton = document.querySelector(".all-clear");
const deleteButton = document.querySelector(".delete");
const equalButton = document.querySelector(".equal");
const operationButtons = document.querySelectorAll(".ops");


// Event Listeners
numButtons.forEach(button => button.addEventListener("click", appendNum));
operationButtons.forEach(button => button.addEventListener("click", operations));
allClearButton.addEventListener("click", clear);
deleteButton.addEventListener("click", removeNum);
equalButton.addEventListener("click", operate);








// Functions

// Figure out a way to get buttons to display value on screen
function appendNum() {

    if (screen.textContent == 0 || isRunning) {
        isRunning = false;
        screen.textContent = this.textContent;

    }

    else if (screen.textContent.length < 13) {
        screen.textContent += this.textContent;
    }

}

// Clear and delete buttons
// display errors when appropriate.

// Clear all numbers on screen
function clear() {
    screen.textContent = "0";
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

// Do calculations with the values selected
function operations() {
    isRunning = true;
    console.log(this.textContent);
           if (previousOperand.length > 0 && previousNumber) { 
                operate();
                previousNumber = screen.textContent;
                previousOperand.push(this.textContent);
            }

            else {
                console.log("word")
                previousNumber = screen.textContent;
                previousOperand.push(this.textContent);
            }
        }

// get math operations to do perform correctly
function operate() {
    let result = 0
    switch (previousOperand[0]) {

        case "+":
            result = parseFloat(previousNumber) + parseFloat(screen.textContent);
            screen.textContent = result.toString();
            previousNumber = null;
            previousOperand.shift();
            break;

        case "-":
            result = parseFloat(previousNumber) - parseFloat(screen.textContent);
            screen.textContent = result.toString();
            previousNumber = null;
            previousOperand.shift();
            break;

        case "*":
            result = parseFloat(previousNumber) * parseFloat(screen.textContent);
            screen.textContent = result.toString();
            previousNumber = null;
            previousOperand.shift();
            break;

        case "÷":
            result = parseFloat(previousNumber) / parseFloat(screen.textContent);
            screen.textContent = result.toString();
            previousNumber = null;
            previousOperand.shift();
            break;

    }

}