function add(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(operator, a, b) {
  if (operator === "+") add(a, b);
  else if (operator === "-") substract(a, b);
  else if (operator === "*") multiply(a, b);
  else if (operator === "/") divide(a, b);
}

let a, b, operator;
let displayValue;

const display = document.querySelector(".display");
const digits = document.querySelectorAll(".digit");

digits.forEach((e) => {
  e.addEventListener("click", () => {
    if (display.textContent === "0") display.textContent = e.textContent;
    else display.textContent += e.textContent;

    displayValue = display.textContent;
    console.log(displayValue);
  });
});
