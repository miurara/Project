console.log(document.body);
console.log(document.head);
console.log(document.documentElement); //получаем весь HTML
console.log(document.body.childNodes); //узлы, которые являются детьми у body, в том числе textNode (перенос строки)
console.log(document.body.firstChild); //первый элемент родителя
console.log(document.body.lastChild);  //последний элемент родителя

//Методы получения родителей, соседей и детей
//1.
console.log(document.querySelector('#current').parentNode);  //получаем родителя
console.log(document.querySelector('#current').parentNode.parentNode);  //получаем родителя родителя

//Получаем Data артрибуты
console.log(document.querySelector('[data-current="3"]'));
console.log(document.querySelector('[data-current="3"]').nextSibling); //получаем следующий за датой элемент
console.log(document.querySelector('[data-current="3"]').previousSibling); //получаем эл-т перед датой
//НО мы может получить просто перенос строки

//ПОЭТОМУ, чтобы получить именно эелемент
console.log(document.querySelector('#current').parentElement);
console.log(document.querySelector('[data-current="3"]').nextElementSibling);
console.log(document.querySelector('[data-current="3"]').previousElementSibling);
console.log(document.body.firstElementChild);
console.log(document.body.lastElementChild);

//для childNodes нет аналогов, поэтому нужно использовать ф-ю перебора и чтобы не попадалось переноса строки (text node) написать условие, чтобы цикл пропустил text node и продолжил дальше
for (let node of document.body.childNodes) {
    if (node.nodeName == '#text') {
        continue;
    }
    console.log(node);
}


