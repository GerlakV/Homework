function mult(...operands) {
  return operands.reduce((result , operandN) => (result *= operandN));
}

module.exports = mult;