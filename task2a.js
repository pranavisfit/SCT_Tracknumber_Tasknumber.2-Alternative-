// Get display element
let display = document.getElementById("display");

// Function to append value to display
function appendValue(value) {
  display.value += value;
  adjustFontSize();
}

// Function to clear display
function clearDisplay() {
  display.value = "";
  adjustFontSize();
}

// Function to delete last character
function backspace() {
  display.value = display.value.slice(0, -1);
  adjustFontSize();
}

// Function to calculate result
function calculate() {
  try {
    display.value = eval(display.value);
    adjustFontSize();
  } catch (error) {
    alert("Invalid Input");
  }
}

// Adjust font size based on length to prevent hiding
function adjustFontSize() {
  if (display.value.length > 10) {
    display.style.fontSize = "1em";
  } else {
    display.style.fontSize = "1.5em";
  }
}

// Handling keyboard input
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