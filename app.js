function getInputValue() {
  const userInput = document.getElementById('hours').value;
  var inputMinutes = 60 * userInput,
      display = document.getElementById('time');
  startTimer(inputMinutes, display);
}

const submitButton = document.getElementById('submit');

submitButton.addEventListener('click', getInputValue);

// start robbmj's code
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
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
// end robbmj's code
