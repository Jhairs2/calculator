// Global Variables
let previousNumber, previousOperand;
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


// save values for calculations
// Do calculations with the values selected
// get math operations to do perform correctly
// Clear and delete buttons
// display errors when appropriate.


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


// Clear all numbers on screen
function clear() {
    screen.textContent = "0";
}

// Remove last number inputted on screen
function removeNum() {
    
    if(screen.textContent.length == 1) {
        screen.textContent = "0";
    }
    else {
    screen.textContent = screen.textContent.slice(0, screen.textContent.length - 1);
    }

}


function operations() {
    isRunning = true;
    switch(this.textContent) {
        
        case "+":
            previousNumber = screen.textContent;
            previousOperand = this.textContent;

            break;

        case "-":
            previousNumber = screen.textContent;
            previousOperand = this.textContent;
            break;

    }

}


function operate() {
    let sum = 0;
    previousNum = previousNumber;
    previousOp = previousOperand;
   console.log(previousOp);
   console.log(previousNum);
    if (previousOp == "+") {
        sum = parseFloat(previousNum) + parseFloat(screen.textContent);
        screen.textContent = sum.toString(); 
    }
}