const operandA = getOperand('Enter operand');
const uneven = sumNumbers('Uneven', operandA);
const even = sumNumbers('Even', operandA);

showResult(even, uneven);

function getOperand(label) {
    let operand;

    do {
        operand = prompt(label);
    } while (isOperandInvalid(operand));

    return Number(operand);
}

function isOperandInvalid(val) {
    return val === null || val.trim() === '' || isNaN(val) || val <= 0;
}

function sumNumbers(sumType, numberValue) {

    let sum = 0;
    
    if (sumType === 'Uneven') {
        
        for (let i = 1 ; i <= numberValue; i+=2) {
            sum = sum + i
        }

    } else {

        for (let i = 2 ; i <= numberValue; i+=2) {
            sum = sum + i;
        }

    }

    return sum;
}

function showResult(resultEven, resultUneven) {
    alert("Сумма четных: " + resultEven);
    alert("Сумма нечетных: " + resultUneven);
}
