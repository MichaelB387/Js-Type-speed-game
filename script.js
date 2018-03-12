const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");


// Add leading zero to numbers 9 or below (purely for aesthetics):


// Run a standard minute/second/hundredths timer:


// Match the text entered with the provided text on the page:
function spellCheck(){
    let textEntered = testArea.value
      console.log(textEntered)
}


// Start the timer:
function start() {
    //Detect just the very first key press
    let textEnteredLength = testArea.value.length
    console.log(textEnteredLength)
}


// Reset everything:


// Event listeners for keyboard input and the reset button:
// Event listener "keypress" listens out for when key is pressed
testArea.addEventListener("keypress", start, false)
// Event listenr "keyup" listens out for when you let go of the key and spellCheck function will run
testArea.addEventListener("keyup", spellCheck, false)
resetButton.addEventListener("click", reset, false)

