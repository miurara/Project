"use strict";

//ТИПЫ ДАННЫХ

//Числовые
let number = 5;

console.log(-5/0); // получим бесконечность
console.log('string' * 9); // получим NaN>не число

//Строка
const persone = "Alex";

//Логические типы (boolean значения) true/false
const bool = false;

//null и undefiend
console.log(something); //> получим null

let und;
console.log(und); //> получим undefiend

// Объекты
const obj = {      //например описываем человека >внутри его свойства
    name: "John",
    age: 25,
    isMarried: false
};
console.log(obj.name); //>чтобы добраться до определённого свойства в объекте

// Массив - исп. для типов данных, кот. идут строго по порядку
let arr = ['plam.png', 'orange.jpg', 6, 'apple.bmp', {}, []];
console.log(arr[1]);