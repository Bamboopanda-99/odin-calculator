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

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    bgColor = btn.value;
  });
});
