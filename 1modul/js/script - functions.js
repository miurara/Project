"use strict";
// ФУНКЦИИ

//function declaration Ф-я работает ещё до того, как она была вызвана
//ф-ю можно вызвать несколько раз
let num = 20;

function showFirstMassage(text) {
    console.log(text);
    let num = 10;
}

showFirstMassage("Hello World!");
console.log(num);

//return - ф-я завершает своё действие (окончание ф-ии)
function calc(a, b) {
    return (a + b);
}

console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(10, 6));

//также с помощью return мы можем вернуть во внешний мир значение переменной
function ret() {
    let num = 50;

    //

    return num;
}

const anotherNum = ret();
console.log(anotherNum);

//====== Function Expression - перед ф-ей создаём переменную. Её можно вызвать только после объявления
const  logger = function () {
    console.log('Hello!')
};

logger();

//====== Стрелочные функции
const calc = (a, b) => a + b;
// Варианты написания
const calc = (a, b) => { return a + b };
const calc = a => a + b ;
const calc = (a, b) => {
    console.log('1');
    return a + b;
};

//====== Callback функции

function first() {
    // Do something
    setTimeout(function () {   // задаёт задержку функции
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();
//Запись функции
function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}

function done() {
    console.log('Я прошёл этот урок!');
}

learnJS('JavaScript', done);