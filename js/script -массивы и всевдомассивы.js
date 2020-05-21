"use strict";

//создаём массив
const arr = [1, 2, 3, 4, 8];
//* Метод sort, кот. сортирует элементы. Если это числа, нужно в () указать как именно их сортировать
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) { //создаём ф-ю, чтобы отсортировать числа
    return a - b;
}

//метод, кот. удаляет последний элемент из массива
arr.pop();
//кот. добавляет последний элемент в массив
arr.push(10);

console.log(arr);

//* Чтобы перебрать элементы в массиве: 1. исп. цикл
for (let i = 0; i < arr.length; i++){  //i < arr.length - чтобы перебрать все элементы массива
    console.log(arr[1]);     //в [] обращаемся к индексы массива
}

//* Конструкция перебора for of
for (let value of arr) {    //в () пишем название переменной, кот. будет отоборажать каждый отдельный эл-т этого массива и после of пишем название массива
    console.log(value);
}

//* Конструкция перебора for Each. Метож принимает в себя ф-ю callback
arr.forEach(function (item, i, arr) {
    console.log(`${i}: ${item} внутри массива ${arr}`);
})

//* Метод split(), кот. превращает строку в массив
const str = prompt("", ""); //н-р задаём пользователю вопрос про товары
const products = str.split(", ");  //в () пишем через какой разделить будут элементы в строке
//* Метод sort, кот. сортирует элементы по алфавиту
products.sort();
//* Метод join кот. массив преобразует в строку. В () пишем через какой разделить будут выводится элементы
console.log(products.join('; '));