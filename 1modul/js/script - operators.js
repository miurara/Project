"use strict";

// сложением получаем строку
// если перед строкой ставим +, то тип будет числовым
console.log('arr' + " - object");
console.log(4 + "5");

// инкримент и декримент
let incr = 10,
    decr = 10;
//префиксная форма
++incr; //>увеличение значения на 1
--decr; //>уменьшение значения на 1
//постфиксная форма - данная форма сначала возвращает старое значение, а потом его увеличивает или уменьшаеь
console.log(incr++);
console.log(decr++);

//% - возвращает остаток от деления двух чисел
console.log(5%2);

// = присваивание; == сравнение по значение; === строгое сравнение (сравнение по типу данных)
console.log(2+4 == 8);
console.log(2+4 == '8');
console.log(2+4 === 8);

// || - оператор или (получаем правду даже если одно выжание правда); && - оператор и (и это и это правда, то тогда вернётся правдивое выражение)
const isChecked = true,
      isClose = true;

console.log(isChecked && isClose);

//const isChecked = true,
//      isClose = false;

//console.log(isChecked || isClose);

//* Отрицание ! - обращает значение в обратное
console.log(2 + 2 * 2 === 8);
console.log(2 + 2 * 2 != 8); //>не равен
console.log(2 + 2 * 2 !== '6');




