const startButton = document.getElementById('start');
const inputElement = document.getElementById('hours');
const pauseButton = document.getElementById('pause');
const display = document.getElementById('time');
let isPaused = false;


function floatToHoursMinutesSeconds() {
  const userInput = parseFloat(inputElement.value);
  const totalSeconds = userInput * 3600;
  let hours = Math.floor(userInput);
  let minutes = Math.floor((totalSeconds / 60) - (hours * 60));
  let seconds = Math.floor(totalSeconds - ((hours * 3600) + (minutes * 60)));

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  // display.textContent = hours + ":" + minutes + ":" + seconds;

    setInterval(function () {
      if (isPaused === false) {
        --seconds;
        if (seconds < 0) {
          seconds = 59;
          --minutes;
        }
        if (minutes < 0) {
          minutes = 59;
          --hours;
        }

        if (seconds < 10) {
          seconds = "0" + seconds;
        }
        // if (minutes < 10) {
        //   minutes = "0" + minutes;
        // }
        // if (hours < 10) {
        //   hours = "0" + hours;
        // }

        display.textContent = hours + ":" + minutes + ":" + seconds;
      }
    }, 1000);
}

startButton.addEventListener('click', function (e) {
  e.preventDefault();
  if (isPaused === false) {
    floatToHoursMinutesSeconds();
  } else {
    isPaused = false;
  }
});

pauseButton.addEventListener('click', function (e) {
  e.preventDefault();
  isPaused = true;
});

inputElement.addEventListener('keyup', function (e) {
  if (e.keyCode === 13) {
    startButton.click();
  }
});
