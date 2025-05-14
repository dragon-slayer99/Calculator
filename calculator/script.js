let displayValue = '0';
let waitingForoperator = false;
let waitingForOperand = true;
let operand = '';
let expression = [];

function updateDisplay() {
    const display = document.getElementById('display');
    display.textContent = displayValue;
    if (displayValue.length <= 11) {
        display.style.fontSize = '3.5rem';
    }
    else if (displayValue.length <= 15) {
        display.style.fontSize = '3rem';
    }
    else if (displayValue.length <= 20) {
        display.style.fontSize = '2rem';
    }
    else {
        display.style.fontSize = '2rem';
    }
    display.style.transition = 'font-size 0.3s ease';
    //console.log(operand);

}


function appendNumber(number) {
    if (displayValue === '0') {
        displayValue = '';
    }
    if (waitingForOperand) {
        displayValue += number;
        operand += number;
        waitingForoperator = true;
    }
    updateDisplay();

}

function appendOperator(operator) {
    if (waitingForoperator) {
        displayValue += operator;
        waitingForOperand = true;
        waitingForoperator = false;
        operand = '';
    }
    updateDisplay();

}

function clearDisplay() {
    displayValue = '0';
    waitingForoperator = false;
    waitingForOperand = true;
    operand = '';
    expression = [];

    updateDisplay();
}

function appendDecimal() {
    if (!operand.includes(".")) {
        displayValue += ".";
        operand += ".";
    }
    updateDisplay();

}

function deleteNumber() {
    displayValue = displayValue.slice(0, -1);
    if (displayValue.length === 0) {
        displayValue = '0';
    }
    
    updateDisplay();
}

function calculate(){
    displayValue = eval(displayValue);
    updateDisplay();
}