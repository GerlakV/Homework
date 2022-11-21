function div(...operands) {
  return operands.reduce((result, operandN) => (result  /= operandN));
}

module.exports = div;