const startButton = document.getElementById('start');
const inputElement = document.getElementById('hours');
const pauseButton = document.getElementById('pause');
const display = document.getElementById('time');
let isPaused = false;

function setTime() {
  //get current time
  const now = new Date();
  const nowHours = now.getHours();
  const nowMins = now.getMinutes();
  const nowSecs = now.getSeconds();

  //convert decimal input into time
  const userInput = parseFloat(inputElement.value);
  let totalSeconds = userInput * 3600;
  let hours = Math.floor(userInput);
  let minutes = Math.floor((totalSeconds / 60) - (hours * 60));
  let seconds = Math.floor(totalSeconds - ((hours * 3600) + (minutes * 60)));

  //change from military to standard time
  let endHours = (nowHours + hours)
    if (endHours > 12) {
      endHours = (endHours - 12);
    }

  //roll minutes into hours
  let endMinutes = (nowMins + minutes);
    if (endMinutes > 60) {
      endMinutes -= 60;
      endHours += 1;
    }

  //roll seconds into minutes
  let endSeconds = (nowSecs + seconds);
    if (endSeconds > 60) {
      endMinutes += 1;
    }

  //add leading zeros, if needed
  if (endMinutes < 10) {
    endMinutes = "0" + endMinutes;
  }
  if (endHours < 10) {
    endHours = "0" + endHours;
  }

    display.textContent = (endHours) + ":" + (endMinutes);


  }

//********** TO DO *********//
//add AM or PM
//fix 24 hour rollover
//make it prettier
//*******************//


  //*********COUNTDOWN ATTEMPT***********//
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
  document.getElementById("stopMessage").style.display = "block";
});

inputElement.addEventListener('keyup', function (e) {
  if (e.keyCode === 13) {
    startButton.click();
  }
});
