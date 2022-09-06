// Figure out a way to get buttons to display value on screen
// Variables
const screen = document.querySelector(".screen");
const numButtons = document.querySelectorAll(".num-pad");

// Event Listeners
numButtons.forEach(button => {
    button.addEventListener("click", appendNum) 
})



// save values for calculations
// Do calculations with the values selected
// get math operations to do perform correctly
// Clear and delete buttons
// display errors when appropriate.


// Functions

function appendNum() {
    if (screen.textContent == 0) {
        screen.textContent = this.textContent;
    } 
    else {
    screen.textContent += this.textContent;
    }
}