function add(a, b) {
  return (a + b).toFixed(2);
}

function substract(a, b) {
  return (a - b).toFixed(2);
}

function multiply(a, b) {
  return (a * b).toFixed(2);
}

function divide(a, b) {
  return (a / b).toFixed(2);
}

function operate(operator, a, b) {
  let result;
  if (operator === "+") result = add(a, b);
  else if (operator === "-") result = substract(a, b);
  else if (operator === "*") result = multiply(a, b);
  else if (operator === "/") {
    if (b === 0) result = "Math Error";
    else result = divide(a, b);
  }
  return result;
}

let a, b, operator, result;
let displayValue;

const display = document.querySelector(".display");
const digits = document.querySelectorAll(".digit");
let decimalActivation = document.getElementById("decimal");

//////////

digits.forEach((e) => {
  e.addEventListener("click", () => {
    decimalActivation.style.pointerEvents = "auto";
    if (display.textContent === "0") {
      if (e.textContent.trim() === ".") {
        display.textContent += ".";
      } else display.textContent = e.textContent;
    } else if (display.textContent != "0") {
      if (!display.textContent.includes(".")) {
        display.textContent += e.textContent.trim();
      } else if (display.textContent.includes(".")) {
        console.log(display.textContent);
        decimalActivation.style.pointerEvents = "none";
        display.textContent += e.textContent;
      }
    }
    displayValue = display.textContent;
    console.log(displayValue);
  });
});

/////////////

const operators = document.querySelectorAll(".operator");
operators.forEach((e) => {
  e.addEventListener("click", () => {
    // if (operator === undefined && a === undefined) {
    operator = e.textContent;
    console.log(operator);
    a = Number(displayValue);
    console.log("first number : ", a);
    display.textContent = "0";
    // }
  });
});

const equals = document.querySelector(".equals");
equals.addEventListener("click", (e) => {
  const equal = e.target.textContent;
  console.log(equal);

  if (operator === undefined || a === undefined) {
    alert("You haven't entered any number or did any operation!");
  } else {
    b = Number(displayValue);
    console.log("second number : ", b);

    result = operate(operator, a, b);
    console.log(result);
    display.textContent = String(result);
    displayValue = display.textContent;
  }
});

const clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
  display.textContent = "0";
  (a = undefined), (b = undefined);
  operator = undefined;
  console.clear();
});

const del = document.querySelector(".delete");
del.addEventListener("click", () => {
  let displayArray = display.textContent.split("");
  displayArray.splice(-1, 1);
  displayValue = displayArray.join("");
  display.textContent = displayArray.join("");
  console.log(displayArray);

  // a = Number(display.textContent);
});
