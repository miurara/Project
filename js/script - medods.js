"use strict";

// свойство length - длина строки или других типов данных
const str = 'test';
const arr = [1, 2, 4];

//console.log(arr,length);
//console.log(str[2]);

// СТРОЧНЫЕ МЕТОДЫ
//Методы изменения регистра
//console.log(str.toLocaleUpperCase());
console.log(str.toLocaleLowerCase());
console.log(str);

const fruit = "Some fruit";

console.log(fruit.indexOf('fruit'));

//Модификация строки, если она неизменяема
const logg = 'Hello world';

console.log(logg.slice(6, 11));
// пример с 1 аргументом
// console.log(logg.slice(6));

console.log(logg.substring(6, 11)); //также как и предыдущая, но не может принимать значения с минусом

// Вместо второго аргумента конца, мы указ. длину - сколько символов необходимо вырезать
console.log(logg.substr(6, 5));

//ЧИСЛОВЫЕ МЕТОДЫ
// Округление
const num = 12.2;
console.log(Math.round(num));

//Переводит число в другую систему исчисления
const test = "12.2px";
console.log(parseInt(test));
//Переводит число или строку в десятичный вариант
console.log(parseFloat(test));