const numberWindow = document.getElementById("numberWindow");
const minusNumber = document.getElementById("minusButton");
const resetNumber = document.getElementById("resetButton");
const plusNumber = document.getElementById("plusButton");

let currentNumber = 0;

minusNumber.addEventListener("click", () => {
  currentNumber--;
  numberWindow.textContent = currentNumber;
});

resetNumber.addEventListener("click", () => {
  currentNumber = 0;
  numberWindow.textContent = currentNumber;
});

plusNumber.addEventListener("click", () => {
  currentNumber++;
  numberWindow.textContent = currentNumber;
});
