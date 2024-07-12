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
  let result;
  if (operator === "+") result = add(a, b);
  else if (operator === "-") result = substract(a, b);
  else if (operator === "*") result = multiply(a, b);
  else if (operator === "/") result = divide(a, b);

  return result;
}

let a, b, operator, result;
let displayValue;

const display = document.querySelector(".display");
const digits = document.querySelectorAll(".digit");

//////////

digits.forEach((e) => {
  e.addEventListener("click", () => {
    if (display.textContent === "0") display.textContent = e.textContent;
    else display.textContent += e.textContent;

    displayValue = display.textContent;
    console.log(displayValue);
  });
});

/////////////

const operators = document.querySelectorAll(".operator");

operators.forEach((e) => {
  e.addEventListener("click", () => {
    operator = e.textContent;
    console.log(operator);
    a = Number(displayValue);
    console.log("first number : ", a);
    display.textContent = "0";
  });
});

const equals = document.querySelector(".equals");

equals.addEventListener("click", (e) => {
  const equal = e.target.textContent;
  console.log(equal);

  b = Number(displayValue);
  console.log("second number : ", b);
  equals;
  result = operate(operator, a, b);
  console.log(result);
  display.textContent = String(result);
  displayValue = display.textContent;
  //   a = result;
});
