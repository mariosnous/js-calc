const display = document.getElementById("display");
let expression = "";
let operator = "";

function press(option) {
  if (Number.isInteger(option) || option === ".") {
    expression += option;
  } else if (option === "=") {
    calculate();
  } else {
    operator = option;
    expression += " " + operator + " ";
  }
  display.value = expression;
}

const TOLERANCE = 0.001;

function calculate() {
  const parts = expression.split(" ");
  const num1 = parseFloat(parts[0]);
  const num2 = parseFloat(parts[2]);

  let result;

  switch (operator) {
    case "+":
      result = add(num1, num2);
      break;
    case "-":
      result = subtract(num1, num2);
      break;
    case "*":
      result = multiply(num1, num2);
      break;
    case "/":
      if (Math.abs(num2) < TOLERANCE) {
        result = "Error: Division by 0";
      } else {
        result = divide(num1, num2);
      }
      break;
    case "^":
      result = power(num1, num2);
      break;
    case "%":
      result = percentage(num1, num2);
      break;
    default:
      result = "Error: Invalid Operator";
  }

  if (typeof result === "number") {
    result = result.toFixed(1); // 1decimal point
  }

  expression = result.toString();
  display.value = expression;
}

function erase() {
  expression = "";
  display.value = expression;
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function power(base, exponent) {
  return Math.pow(base, exponent);
}

function percentage(num, percent) {
  return (num * percent) / 100;
}

// Keyboard event listener
document.addEventListener("keydown", function (event) {
  const key = event.key;

  // Map keys to calculator operations
  switch (key) {
    case "1":
      press(1);
      break;
    case "2":
      press(2);
      break;
    case "3":
      press(3);
      break;
    case "4":
      press(4);
      break;
    case "5":
      press(5);
      break;
    case "6":
      press(6);
      break;
    case "7":
      press(7);
      break;
    case "8":
      press(8);
      break;
    case "9":
      press(9);
      break;
    case "0":
      press(0);
      break;
    case ".":
      press(".");
      break;
    case "+":
      press("+");
      break;
    case "-":
      press("-");
      break;
    case "*":
      press("*");
      break;
    case "/":
      press("/");
      break;
    case "=":
      press("=");
      break;
    case "%":
      press("%");
      break;
    case "^":
      press("^");
      break;
    case "Backspace":
      erase();
      break;
    default:
      // Ignore other keys
      break;
  }
});
