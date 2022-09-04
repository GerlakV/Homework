const action = getAction('Enter action');
const quantityOperands =  getQuantityOperands('Enter quantity of operands');
const operandA = getOperand('Enter operand #1');
let operandsList = operandA;
let result = Number(operandA);
const obj = calculate();
showResult(obj.operandsList, obj.result);

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

function getQuantityOperands(label) {
    let quantity;

    do {
        quantity = prompt(label);
    } while (isQuantityOperandsInvalid(quantity));

    return Number(quantity);
}

function isQuantityOperandsInvalid(val) {
    return val === null || val.trim() === '' || isNaN(val) || val < 2;
}

function getOperand(label) {
    let operand;

    do {
        operand = prompt(label);
    } while (isOperandInvalid(operand));

    return operand;
}

function isOperandInvalid(val) {
    return val === null || val.trim() === '' || isNaN(val);
}

function calculate(){

    let calcObj = {};

    for (let i = 2 ; i <= quantityOperands; i++) {
        let operandN= getOperand('Enter operand #' + i);

        operandsList = operandsList + ' ' + action + ' ' + operandN;

        operandN = Number(operandN);

        switch (action) {
            case '+' : result = result + operandN; break;
            case '-' : result = result - operandN; break;
            case '*' : result = result * operandN; break;
            case '/' : result = result / operandN; break;
        }
    }

    calcObj = {
        operandsList: operandsList,
        result: result,
    }
    
    return calcObj;
}

function showResult(description, value) {
    const expression = description + " = " + value;
    alert(expression);
}
