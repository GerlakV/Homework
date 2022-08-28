let numberA = null;
let numberB = null;
let action = null;
let result = null;
let answer = null;

do {
    numberA = prompt("First number:");
} while (isInvalid(numberA));

do {
    numberB = prompt("Second number:");
} while (isInvalid(numberB));

function isInvalid(str) {
    return isNaN(str) || str === null || str.trim() === "";
}

do {
    action = prompt("Action (+ - * /):");
} while ((action !== "+") && (action !== "-") && (action !== "*") && (action !== "/"));

numberA = Number (numberA);
numberB = Number (numberB);

switch (action) {
    case '+' : result = numberA + numberB; break;
    case '-' : result = numberA - numberB; break;
    case '*' : result = numberA * numberB; break;
    case '/' : result = numberA / numberB; break;
}

answer = numberA + action + numberB + "=" + result;

alert (answer);