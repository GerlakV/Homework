'use strict'

function createCalculator(base) {
    this.result = base;

    this.add = (b) => (this.result += b);
    this.sub = (b) => (this.result -= b);
    this.div = (b) =>  (this.result /= b);
    this.mult = (b) => (this.result *= b);
    this.set = (b) => (this.result = b);
}

const calc = new createCalculator(10);