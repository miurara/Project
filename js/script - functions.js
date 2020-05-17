"use strict";

let num = 20;

function showFirstMassage(text) {
    console.log(text)
    let num = 10;
}

showFirstMassage("Hello World!");
console.log(num);

function calc(a, b) {
    return (a + b);
}

console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(10, 6));

function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);

// Function Expression
const  logger = function () {
    console.log('Hello!')
};

logger();

// Стрелочные функции
const calc = (a, b) => a + b;
// Варианты написания
const calc = (a, b) => { return a + b };
const calc = a => a + b ;
const calc = (a, b) => {
    console.log('1');
    return a + b;
};