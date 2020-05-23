"use strict";

//Превращаем что-то в строку To String

//1. Почти не используется typeof(String)
console.log(typeof(String(null)));
console.log(typeof(String(4)));

//2. Что-то складываем со строкой
console.log(typeof(null + ''));

//пример, для чего это нужно
const num = 5;

console.log("https://vk.com/catalog/" + num);

const fontSize = 26 + 'px';

//Превращаем в число To number

//1. typeof(Number) - почти не используется
console.log(typeof(Number(4)));

//2. Унарный +
console.log(typeof(+'5'));

//3. Числовой метод parseInt
console.log(parseInt("15px", 10));

//Пример использования
let answ = +prompt("Hello", "");

//Превращаем в будиновое значение To boolean

//1. Нативное преобразование. То, что всегда превращается в false: 0, '', null, undefined, NaN;   Всё остальное будет true

let switcher = null;

if (switcher) {
    console.log('Working...');  //здесь switcher не будет выполняться, т.к. null это false, т.е. значение не существует
}
// т.е. если поменять значение переменной, то она останет из false, true
switcher = 1;    //так будет выполнятся

if (switcher) {
    console.log('Working...');
}

//2. С помощью typeof
console.log(typeof(Boolean('4')));

//3. С помощью !! - 2 знака отрицания
console.log(typeof(!!"4444"));