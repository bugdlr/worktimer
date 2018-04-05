const startButton = document.getElementById('start');
const inputElement = document.getElementById('hours');
const pauseButton = document.getElementById('pause');
const display = document.getElementById('time');
let isPaused = false;

function setTime() {
  const now = new Date();
  const nowHours = now.getHours();
  const nowMins = now.getMinutes();
  const nowSecs = now.getSeconds();
  const userInput = parseFloat(inputElement.value);
    let totalSeconds = userInput * 3600;
    let hours = Math.floor(userInput);
    let minutes = Math.floor((totalSeconds / 60) - (hours * 60));
    let seconds = Math.floor(totalSeconds - ((hours * 3600) + (minutes * 60)));

    display.textContent = (nowHours + hours) + ":" + (nowMins + minutes) + ":" + (nowSecs + seconds);
  }



    // if (seconds < 10) {
    //   seconds = "0" + seconds;
    // }
    // if (minutes < 10) {
    //   minutes = "0" + minutes;
    // }
    // if (hours < 10) {
    //   hours = "0" + hours;
    // }

  //   hours = hours < 10 ? "0" + hours : hours;
  //   minutes = minutes < 10 ? "0" + minutes : minutes;
  //   seconds = seconds < 10 ? "0" + seconds : seconds;
  //
  //   display.textContent = hours + ":" + minutes + ":" + seconds;
  //
  //     setInterval(function () {
  //       if (isPaused === false) {
  //         // --totalSeconds;
  //         // this function needs to increment the totalSeconds, not just the displayed  seconds, then the new value needs to be passed to the floatToHoursMinutesSeconds function, which needs to run every second
  //         if (seconds < 10) {
  //           seconds = "0" + seconds;
  //         }
  //       // } if (seconds === 0) {
  //       //     seconds = 59;
  //           // --minutes;
  //         }
  //         // if (minutes < 0) {
  //         //   minutes = 59;
  //         //   --hours;
  //         // }
  //
  //
  //         display.textContent = hours + ":" + minutes + ":" + seconds;
  //
  //     }, 1000);



startButton.addEventListener('click', function (e) {
  e.preventDefault();
  if (isPaused === false) {
    setTime();
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
