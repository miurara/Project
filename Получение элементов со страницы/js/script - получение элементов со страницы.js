'use strict';

//СТАРЫЕ МЕТОДЫ
//1. Получение элемента по ID
//создаём вместилище информации
const box = document.getElementById('box');

console.log(box);

//2.Получение элемента по названию тега
const btns = document.getElementsByTagName('button');
console.log(btns);    //мы получаем псевдомассив

/*если хотим получить определённый элемент, то: 1ый способ - нужно написать его индекс
const btns = document.getElementsByTagName('button')[1];*/

/*2ой вариант - поставить индекс при вызове метода
console.log(btns[1]); */

//НО, даже если элемент по тегу только 1 на странице, то мы всё равно должны поставить его индекс
const btns = document.getElementsByTagName('button');
console.log(btns[0]);

//3. ПОлучение элемента по названию класса
const circles = document.getElementsByClassName('circle');
console.log(circles);    //мы также получаем псевдомассив

//4. НОВЫЕ МЕТОДЫ
//4.1 Метод тестировки. Здесь в () мы указываем селекторы (дивы, классы ит.п.)
const hearts = document.querySelectorAll('.heart');   //тут мы тоже получаем псевдомассив, но уже можем использовать callbach ф-ю для получения конкретного элемента

hearts.forEach(item => {
    console.log(item);
});

//4.2 Здесь мы получаем первый элемент селектора, если их несколько
const oneHeart = document.querySelector('.heart');   //или const oneHeart = document.querySelector('div');
console.log(oneHeart);


