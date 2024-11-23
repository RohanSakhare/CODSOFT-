// Append value to the display
function appendValue(value) {
    const display = document.getElementById('display');
    if (display.value === "0") {
        display.value = value;
    } else {
        display.value += value;
    }
}

// Clear the display
function clearDisplay() {
    document.getElementById('display').value = "0";
}

// Perform calculation
function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = "Error";
    }
}
