function sub(...operands) {
  return operands.reduce((result , operandN) => (result -= operandN));
}

module.exports = sub;