const startButton = document.getElementById('calculate');
const inputElement = document.getElementById('hours');
const display = document.getElementById('time');

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

  //roll minutes into hours
  let endMinutes = nowMins + minutes;
  let endHours = nowHours + hours;
  if (endMinutes > 60) {
    endMinutes -= 60;
    endHours += 1;
  }

  //roll seconds into minutes
  let endSeconds = nowSecs + seconds;
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

  //set AM or PM
  let ampm = "AM";
  if (endHours >= 12 && endHours < 24) {
    ampm = "PM";
  }

  //show result on the page
  display.textContent = (endHours % 12 || 12) + ":" + endMinutes + " " + ampm;
}

//event listeners
startButton.addEventListener('click', function (e) {
  e.preventDefault();
  setTime();
  document.getElementById("stopMessage").style.display = "block";
});

inputElement.addEventListener('keyup', function (e) {
  if (e.keyCode === 13) {
    startButton.click();
  }
});


//********** TO DO *********//
//make it prettier
//make AM/PM work infinitely
//add input validation
//*******************//
