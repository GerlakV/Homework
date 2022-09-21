const btn = document.querySelector('#сalculate');
const operandA = document.querySelector('#operandA');
const operandB = document.querySelector('#operandB');
const resultDiv = document.querySelector('#result');
const action = document.querySelector('#action');

function calculateResult(a, b, action) {
    switch (action) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return a / b;
    }
}

function onBtnCalculate() {
    resultDiv.textContent = operandA.value + action.value + operandB.value + "=" + calculateResult(+operandA.value, +operandB.value, action.value);
}

btn.addEventListener('click', onBtnCalculate);