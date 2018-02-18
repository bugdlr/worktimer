const startButton = document.getElementById('start');
const inputElement = document.getElementById('hours');
const pauseButton = document.getElementById('pause');
let isPaused = false;


// start robbmj's code
function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    if (isPaused === false) {
      setInterval(function () {
          minutes = parseInt(timer / 60, 10)
          seconds = parseInt(timer % 60, 10);

          minutes = minutes < 10 ? "0" + minutes : minutes;
          seconds = seconds < 10 ? "0" + seconds : seconds;

          display.textContent = minutes + ":" + seconds;

          if (--timer < 0) {
              timer = duration;
          }
      }, 1000);
    }

}
// end robbmj's code

function getInputValue() {
  const userInput = inputElement.value;
  const inputMinutes = 60 * userInput,
      display = document.getElementById('time');
  startTimer(inputMinutes, display);
}

startButton.addEventListener('click', getInputValue);

pauseButton.addEventListener('click', function (e) {
  e.preventDefault();
  isPaused = true;
});

inputElement.addEventListener('keyup', function (e) {
  if (e.keyCode === 13) {
    startButton.click();
  }
});
