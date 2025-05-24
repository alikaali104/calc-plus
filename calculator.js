// Adds a value (number/operator) to the display
function appendValue(value) {
    document.getElementById('display').value += value;
}

// Clears the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Calculates the result of the expression in the display
function calculateResult() {
    try {
        const display = document.getElementById('display');
        display.value = eval(display.value); // Evaluates the expression
    } catch (error) {
        alert('Invalid Calculation');
        clearDisplay();
    }
}

// Calculates the square root of the current value
function calculateSquareRoot() {
    try {
        const display = document.getElementById('display');
        display.value = Math.sqrt(eval(display.value));
    } catch (error) {
        alert('Invalid Input for Square Root');
        clearDisplay();
    }
}

// Converts current value to a percentage (divides by 100)
function calculatePercentage() {
    try {
        const display = document.getElementById('display');
        display.value = eval(display.value) / 100;
    } catch (error) {
        alert('Invalid Input for Percentage');
        clearDisplay();
    }
}

// Inserts the value of π (up to 8 decimal places) into the display
function insertPi() {
    const display = document.getElementById('display');
    display.value += Math.PI.toFixed(8);
}
