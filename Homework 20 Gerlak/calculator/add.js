function add(...operands) {
  return operands.reduce((total, operandN) => (total += operandN));
}

module.exports = add;