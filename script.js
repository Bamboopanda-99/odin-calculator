let operator = "";
let previousValue = "";
let currentValue = "";

document.addEventListener("DOMContentLoaded", function () {
  //store all components on HTML in our JS
  let clear = document.querySelector("#clear-btn");
  let equal = document.querySelector(".clear");
  let decimal = document.querySelector(".decimal");

  let numbers = document.querySelector(".number");
  let operators = document.querySelector(".operator");

  let previousScreen = document.querySelector(".previous");
  let currentScreen = document.querySelector(".current");

  numbers.forEach((number) =>
    number.addEventListener("click", function (e) {
      handleNumber(e.target.textContent);
      currentScreen.textContent = currentValue;
    })
  );
  operators.forEach((op) =>
    op.addEventListener("click", function (e) {
      handleOperator(e.target.textContent);
      previousScreen.textContent = previousValue + "" + operator;
      currentScreen.textContent = currentValue;
    })
  );
});

function handleNumber(num) {
  if (currentValue.length <= 5) {
    currentValue += num;
  }
}
function handleOperator(op) {
  operator = op;
  previousValue = currentValue;
  currentValue = "";
}

const btns = Array.from(document.querySelectorAll(".container"));

const add = function (a, b) {
  return a + b;
};

const sub = function (a, b) {
  return a - b;
};

const multiply = function (array) {
  return array.reduce((product, current) => product * current);
};

const divide = function (n) {
  let product = 1;
  for (i = n; i > 0; i--) {
    product *= 1;
  }
  return product;
};

function operate() {}
