const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");

// global variable for timer set to zero
// global timer variable an array for minutes, seconds, hundreths of seconds, thousandths of seconds
var timer = [0,0,0,0] 
// Add leading zero to numbers 9 or below (purely for aesthetics):


// Run a standard minute/second/hundredths timer:
function runTimer(){
    let currentTime = timer[0] + ":" + timer[1] + ":" + timer[2]
    theTimer.innerHTML = currentTime
    //Update last position of timer array
    timer[3]++
}


// Match the text entered with the provided text on the page:
function spellCheck(){
    let textEntered = testArea.value
      console.log(textEntered)
}


// Start the timer:
function start() {
    //Detect just the very first key press
    let textEnteredLength = testArea.value.length
    if (textEnteredLength === 0) {
        // When first key pressed this will start timer setInterval will run every thousandth of a second
        setInterval(runTimer, 10)
    }
    console.log(textEnteredLength)
}


// Reset everything:
function reset(){
    console.log("reset button has been pressed")
}


// Event listeners for keyboard input and the reset button:
// Event listener "keypress" listens out for when key is pressed
testArea.addEventListener("keypress", start, false)
// Event listener "keyup" listens out for when you let go of the key and spellCheck function will run
testArea.addEventListener("keyup", spellCheck, false)
// Event listener "click" listens out for when reset button is clicked to run reset function
resetButton.addEventListener("click", reset, false)

