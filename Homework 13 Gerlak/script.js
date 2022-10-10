'use strict'

const SIZE_SMALL = { price: 50, callories: 20 };
const SIZE_MEDIUM = { price: 75, callories: 30 };
const SIZE_BIG = { price: 100, callories: 40 };

const TOPPING_CHEESE = { price: 10, callories: 20 };
const TOPPING_SALAD = { price: 20, callories: 5 };
const TOPPING_POTATO = { price: 15, callories: 10 };
const TOPPING_SPICE = { price: 15, callories: 0 };
const TOPPING_MAYO = { price: 20, callories: 5 };

const yourHamburger = new Hamburger(SIZE_SMALL);

function Hamburger(size) {
    this.burger = {...size};
}

Hamburger.prototype.addTopping = function(topping) {
    this.burger.price += topping.price;
    this.burger.callories += topping.callories;
}

Hamburger.prototype.getPrice = function() {
    return this.burger.price;
}

Hamburger.prototype.getCallories = function() {
    return this.burger.callories;
}

yourHamburger.addTopping(TOPPING_MAYO);
yourHamburger.addTopping(TOPPING_POTATO);

console.log("Price with sauce: " + yourHamburger.getPrice());
console.log("Callories with sauce: " + yourHamburger.getCallories());