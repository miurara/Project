"use strict";

//создли объект со свойствами
const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function () {   //создаём свой метод
        console.log("Test");
    }
};

options.makeTest();

//* получаем массив со всеми ключами объекта при помощи свойства object keys
//* и чтобы получить количество элементов, которое сод. в объекте, пишем length
//console.log(Object.keys(options).length);
// console.log(options.name);

//* Деструктуризация объекта
const {border, bg} = options.colors;
console.log(border);

// //удаляем параметр из объекта
// delete  options.name;
// console.log(options);

//* чтобы посчитать сколько свойств было внутри объекта, мы создаём переменную counter
let counter = 0;

//чтобы "перебрать" все свойства в объекте и посмотреть что там "завалялось"
for (let key in options) {
    if (typeof(options[key]) === 'object') {  // проверяем тип данных и проверяем объект, который внутри объекта
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
            counter++;
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
        counter++;
    }
}

console.log(counter);
