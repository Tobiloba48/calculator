let display = "0";
let equation = "";
let hasResult = false;
let history = [];
let isRadiantMode = true;
let memoryActive = false;
let memory = 0;

function updateDisplay() {
  document.getElementById("display").textContent = display;
  document.getElementById("equation").textContent = equation;
  updateHistory();
}
function updateHistory() {
  const historyElement = document.getElementById("history");
  historyElement.innerHTML = history
    .slice(-3)
    .map((item) => `<div class="text-right">${item}</div>`)
    .join("");
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

function handleOperator(op) {
  if (!equation.endsWith(" ") && equation !== "") {
    display = "0";
    equation += " " + op + " ";
    hasResult = false;
  }
  updateDisplay();
}

function handleClear(clear) {
  display = "0";
  equation = "";
  hasResult = false;
  updateDisplay()
}

function handleDelete(del) {
if (!equation = '0' && !hasResult) {
    display = display.slice(0, -1) || '0'
    equation = equation.slice(0, -1) || ''
    updateDisplay()
}
}
