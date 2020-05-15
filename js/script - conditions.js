"use strict";

if (4 == 9) {
    console.log('Ok!');
}else{
    console.log('Error');
}

//const num = 50;

//f (num < 49){
//   console.log('Error');
//} else if (num>100){
//    console.log('Много');
//} else {
//   console.log('Ok!');
//}

// Тернарный оператор
//(num === 50) ? console.log('Ok!') : console.log('Error');

// Свитч - модификация if, которая поддерживает несколько проверок и условий
const num = 50;

switch (num) {
    case 49:
        console.log('Неверно');
        break;
    case 100:
        console.log('Неверно');
        break;
    case 50:
        console.log('В точку');
        break;  
    default:
        console.log('Не в этот раз');
        break;    
}