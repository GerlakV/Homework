const action = getAction('Enter action (+ - / *)');
const arrOperands = getOperands('Enter operands').split(',');
const expression = calculateExpression(arrOperands, action);
alert(expression);

function getAction(label) {
    let symbol;

    do {
        symbol = prompt(label);
    } while (isActionInvalid(symbol));

    return symbol;
}

function isActionInvalid(val) {
    return val !== '+' && val !== '-' && val !== '*' && val !== '/';
}

function getOperands(label) {
    let operand;

    do {
        operand = prompt(label);
    } while (isOperandInvalid(operand));

    return operand;
}

function isOperandInvalid(val) {
    return val === null || val.trim() === '';
}

function calculateExpression(arr, action) {
    let result = Number(arr[0]);

    for (let i = 1 ; i < arr.length ; i++) {
        result = calculateResult(result, Number(arr[i]), action);
    }

    return result;
}

function calculateResult(a, b, action) {
    switch (action) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return a / b;
    }
}
