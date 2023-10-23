let displayValue = '';
let currentOperator = '';
let firstValue = '';

function appendToDisplay(value) {
    displayValue += value;
    updateDisplay();
}

function clearDisplay() {
    displayValue = '';
    firstValue = '';
    currentOperator = '';
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = displayValue;
}

function operate(operator) {
    if (firstValue === '') {
        firstValue = displayValue;
        displayValue = '';
        currentOperator = operator;
    } else if (displayValue !== '') {
        firstValue = calculate(firstValue, displayValue, currentOperator);
        displayValue = '';
        currentOperator = operator;
        updateDisplay();
    }
}

function calculateResult() {
    if (firstValue !== '' && displayValue !== '') {
        firstValue = calculate(firstValue, displayValue, currentOperator);
        displayValue = firstValue;
        currentOperator = '';
        updateDisplay();
    }
}

function calculate(a, b, operator) {
    a = parseFloat(a);
    b = parseFloat(b);
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            if (b === 0) {
                alert("Division by zero is not allowed");
                clearDisplay();
                return '';
            }
            return a / b;
        default:
            return b;
    }
}

updateDisplay();
