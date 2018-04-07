const startButton = document.getElementById('calculate'),
  inputElement = document.getElementById('hours'),
  display = document.getElementById('time');

function setTime() {
  if (inputElement.value === "") {
    alert('Please enter a number');
    return false;
  }
  //get current time
  const now = new Date(),
    nowHours = now.getHours(),
    nowMins = now.getMinutes(),
    nowSecs = now.getSeconds();

  //convert decimal input into time
  const userInput = parseFloat(inputElement.value);
  let totalSeconds = userInput * 3600,
    hours = Math.floor(userInput),
    minutes = Math.floor((totalSeconds / 60) - (hours * 60)),
    seconds = Math.floor(totalSeconds - ((hours * 3600) + (minutes * 60)));

  //roll minutes into hours
  let endMinutes = nowMins + minutes,
    endHours = nowHours + hours;
  if (endMinutes > 60) {
    endMinutes -= 60;
    endHours += 1;
  }

  //roll seconds into minutes
  let endSeconds = nowSecs + seconds;
  if (endSeconds > 60) {
    endMinutes += 1;
  }

  //set AM or PM
  let ampm = "AM";
  if (endHours >= 12 && endHours < 24) {
    ampm = "PM";
  }

  //show result on the page
  document.getElementById("stopMessage").style.display = "block";
  display.textContent = (endHours % 12 || 12) + ":" + endMinutes.toString().padStart(2, "0") + " " + ampm;
}

//event listeners
startButton.addEventListener('click', e => {
  e.preventDefault();
  setTime();
});

inputElement.addEventListener('keyup', e => {
  if (e.keyCode === 13) {
    startButton.click();
  }
});


//********** TO DO *********//
//make it prettier
//make AM/PM work infinitely
//*******************//
