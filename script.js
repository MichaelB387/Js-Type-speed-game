const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");

// global variable for timer set to zero
// global timer variable an array for minutes, seconds, hundreths of seconds, thousandths of seconds
var timer = [0, 0, 0, 0];
var interval
var timerRunning = false
// Add leading zero to numbers 9 or below (purely for aesthetics):
function leadingZero(time) {
  //conditional statement to get a leding zero
  if (time <= 9) {
    // will display a leading zero 0 for numbers 1 through 9
    time = "0" + time;
  }
  return time;
}

// Run a standard minute/second/hundredths timer:
function runTimer() {
  let currentTime =
    leadingZero(timer[0]) +
    ":" +
    leadingZero(timer[1]) +
    ":" +
    leadingZero(timer[2]);
  theTimer.innerHTML = currentTime;
  //Update last position of timer array
  timer[3]++;

  // Math equations for timer
  // Minutes
  timer[0] = Math.floor(timer[3] / 100 / 60);
  // Seconds
  timer[1] = Math.floor(timer[3] / 100 - timer[0] * 60);
  //Hundreth of a second
  timer[2] = Math.floor(timer[3] - timer[1] * 100 - timer[0] * 6000);
}

// Match the text entered with the provided text on the page:
function spellCheck() {
  let textEntered = testArea.value;
  //substring treats a string of text as an array and allows you to pull out text to be used as a substring
  // Two arguments, 0 where to start, textEntered.length the length of the text
  let originTextMatch = originText.substring(0, textEntered.length);

  //Test if textEntered and originText are the same
  if (textEntered === originText) {
      clearInterval(interval)
    //Border colour will change to green if text matches exactly
    testWrapper.style.borderColor = "#429890";
  } else {
    if (textEntered === originTextMatch) {
      //If text matches wrapper will be blue
      testWrapper.style.borderColor = "#65CCf3";
    } else {
      //If text doesn't match wrapper will be orange
      testWrapper.style.borderColor = "#E95D0F";
    }
  }
}

// Start the timer:
function start() {
  //Detect just the very first key press
  let textEnteredLength = testArea.value.length;
  if (textEnteredLength === 0 && !timerRunning) {
      timerRunning = true
    // When first key pressed this will start timer setInterval will run every thousandth of a second
    interval = setInterval(runTimer, 10);
  }
  console.log(textEnteredLength);
}

// Reset everything:
function reset() {

    //Backend 
    // clears the interval
    clearInterval(interval)
    interval = null
    // Reset timer array back to zero
    timer = [0,0,0,0]
    timerRunning = false

    //Front end
    testArea.value = ""
    timer.innerHTML = "00:00:00"
    testWrapper.style.borderColor = "grey"
}

// Event listeners for keyboard input and the reset button:
// Event listener "keypress" listens out for when key is pressed
testArea.addEventListener("keypress", start, false);
// Event listener "keyup" listens out for when you let go of the key and spellCheck function will run
testArea.addEventListener("keyup", spellCheck, false);
// Event listener "click" listens out for when reset button is clicked to run reset function
resetButton.addEventListener("click", reset, false);
