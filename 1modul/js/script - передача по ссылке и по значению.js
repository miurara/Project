"use strict";

const obj = {
    a: 5,
    b: 1
};

/*const copy = obj; //здесь в переменную передаются не значения объекта, а ссылка на объект

copy.a = 10;

console.log(copy); //модифицируя копию, мы модифицируем сам объект, потому что работаем с ссылкой на него */

// Создание поверхностную копию объекта
//1. Копия при помощи цикла. Фун-я при помощи цикла создаст новый объект, перебирая старые св-ва, кот. были в объекте
function copy(mainObj) {
    let objCopy = {}

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers);

newNumbers.a = 10;

console.log(newNumbers);
console.log(numbers);

//2. Метод соединения нескольких объектов
const add = {
    d: 17,
    e: 20
};
//соединяем объект add c объектом numbers. В итогу создаётся независимая копия объекта
console.log(Object.assign(numbers, add));
//также чтобы создать независимую отдельную копию, можно записать
const clone = Object.assign({}, add);
clone.d = 20;      //в клоне меняем объект
console.log(add);
console.log(clone);

//3.Копия массива
const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'abracadabra'; //у первого элемента в масиве меняем значение
console.log(newArray);
console.log(oldArray);

//4. Используем оператор разворота - он разворачивает структуру и превращает её в набор каких-то данных
const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];  //в этой переменной будут складироваться значения переменной video, blogs и какие-то свои значения
console.log(internet);

//другой пример - как в ф-ю принять массив
function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];
log(...num);

//Используем оператор разворота для объекта
const array = ["a", "b"];

const newAarray = [...array];

const q = {
    one:1,
    two: 2
};

const newObj = {...q};
