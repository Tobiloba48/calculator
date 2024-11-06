let display = "0";
let equation = "";
let hasResult = false;

const equationElement = document.getElementById("equation");
const displayElement = document.getElementById("display");

function updateDisplay() {
  equationElement.textContent = equation || "0";
  displayElement.textContent = display;
}

function handleNumber(num) {
  if (hasResult) {
    display = num;
    equation = num;
    hasResult = false;
  } else {
    display = display === "0" ? num : display + num;
    equation += num;
  }
  updateDisplay();
}

function handleOperator(operators) {
  if (!equation.endsWith(" ") && equation !== "") {
    equation += " " + operators + " ";
    display = "0";
    hasResult = false;
    updateDisplay();
  }
}

function handleDelete(del) {
  if (display !== "0" && !hasResult) {
    equation = equation.slice(0, -1);
    display = display.slice(0, -1);
    if (display === "") {
      display = "0";
    }
    updateDisplay();
  }
}
function handleClear(clear) {
  display = "0";
  equation = "";
  hasResult = false;
  updateDisplay();
}

// function calculate(equals) {
//   const result = eval(equation);
//   display = Number(result);
//   equation = Number(result);
//   hasResult = true;
//   updateDisplay();
// }
// Or you can use try and catch to define the error message you will get

function calculate(equals) {
  try {
    const result = eval(equation);
    display = Number(result);
    equation = Number(result);
    hasResult = true;
    updateDisplay();
  } catch (error) {
    display = "Error";
    equation = "";
    updateDisplay();
  }
}

document.addEventListener("keydown", (event) => {
  if ((event.key >= "0" && event.key <= "9") || event.key === ".") {
    handleNumber(event.key);
    console.log(event.key);
  } else if (
    event.key === "+" ||
    event.key === "-" ||
    event.key === "*" ||
    event.key === "/"
  ) {
    handleOperator(event.key)
  }
  else if (event.key === "Backspace") {
    handleDelete()
  }
  else if (event.key === "Escape") {
    handleClear()
  }
  else if (event.key === "Enter") {
    calculate()
  }
});
