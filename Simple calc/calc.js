let currentInput = '';

function appendToDisplay(value) {
    currentInput += value;
    document.getElementById("display").value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    document.getElementById("display").value = '';
}

function calculateResult() {
    try {
        let result = new Function('return ' + currentInput)();
        document.getElementById("display").value = result;
        currentInput = result.toString();  // Save the result for future calculations
    } catch (error) {
        document.getElementById("display").value = 'Error';
        currentInput = '';
    }
}