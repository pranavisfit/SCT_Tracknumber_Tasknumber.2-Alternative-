
let display = document.getElementById("display");

function appendValue(value) {
  display.value += value;
  adjustFontSize();
}


function clearDisplay() {
  display.value = "";
  adjustFontSize();
}


function backspace() {
  display.value = display.value.slice(0, -1);
  adjustFontSize();
}

function calculate() {
  try {
    display.value = eval(display.value);
    adjustFontSize();
  } catch (error) {
    alert("Invalid Input");
  }
}

function adjustFontSize() {
  if (display.value.length > 10) {
    display.style.fontSize = "1em";
  } else {
    display.style.fontSize = "1.5em";
  }
}

document.addEventListener("keydown", function(event) {
  if ((event.key >= 0 && event.key <= 9) || ['+', '-', '*', '/', '.'].includes(event.key)) {
    appendValue(event.key);
  } else if (event.key === "Enter") {
    calculate();
  } else if (event.key === "Backspace") {
    backspace();
  } else if (event.key === "Escape") {
    clearDisplay();
  }
});