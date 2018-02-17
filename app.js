function getInputValue() {
  const userInput = document.getElementById('hours').value;
  console.log(userInput);
}

const submitButton = document.getElementById('submit');

submitButton.addEventListener('click', getInputValue);
