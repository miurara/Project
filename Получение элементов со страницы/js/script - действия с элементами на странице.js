'use strict';

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      wrapper = document.querySelector('.wrapper'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart'),
//также можно задавать внутри чего (какого тега) мы именно ищем эелемент
    hearts = wrapper.querySelectorAll('.heart'),
    oneHeart = wrapper.querySelector('.heart');
//чтобы посмотреть на элемент в виде объекта, пользуется dir
//console.dir(box);    это позволяет увидеть все св-ва и методы объекта

//МЕНЯЕМ СТИЛИ
box.style.backgroundColor = 'blue';    //все значения пишем в ''
box.style.width = '500px';
//как назначить несколько инлайн стилей
box.style.cssText = 'background- color: blue; width: 500px';
//также мы можем вставлять в cssText переменные: пример
//box.style.cssText = `background- color: blue; width: ${num}`;

//т.к. элементы ниже являются псевдоэлементами, то мы жлдэны прописывать индекс конкретного элемента
btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

//НАЗНАЧИТЬ СТИЛИ НЕСКОЛЬКИМ ЭЛЕМЕНТАМ
//1. Цикл
for (let i = 0; i < hearts.length; i++) {        // в () пишем начало элемента; колличество элементов, кот. есть в этом массиве
    hearts[i].style.backgroundColor = 'blue';    // (цикл будет работать пока элементы есть в массиве); i++
}    //Данный метод почти не используется

//2. Метод for each
hearts.forEach(item => {           //(пишем любое название элементов)
    item.style.backgroundColor = 'blue';
});

//МЕТОДЫ ДЛЯ РАБОТЫ С ЭЛЕМЕНТАМИ НА СТРАНИЦЕ
//1. Создание нового элемента
const div = document.createElement('div');  //тег создаётся внутри JS файла и на странице не отображается

//создание элемента без оболочки тега (текстовые узлы)
const text = document.createTextNode('Здесь был я'); //в () пишем текст который появится на странице

//создаём действия с нашим элементом
div.classList.add('black');   //добавляем класс black

//добавляем элемент на страницу
document.body.append(div); //в () пишем элемент, который добавляем. Эл-т добавится в конец body
//как вариант, если элемент не будет больше нигде использоваться или ранее переменная не задана
//document.querySelector('.wrapper').append(div);
wrapper.append(div);  //это если переменная ранее задана

//ставим эелемент перед родителем. Сначала пишем перед/после какого эелемента ставим новый
hearts[0].before(div);
hearts[0].after(div);  //ставим после родителя

//удаляем элемент
circles[0].remove();

//заменяем эл-т другим. Сначала пишем какой эл-т хотим заменить и далее на какой
hearts[0].replaceWith(circles[0]);

//УСТАРЕВШИЕ МЕТОДЫ
wrapper.appendChild(div);  //делает то же самое что и append
wrapper.insertBefore(div, hearts[1]); //в () пишем какой элемент вставляем и далее перед каким
wrapper.removeChild(hearts[1]);  //сначала обращ. к родителю, а в () пишем что удаляем
wrapper.replaceChild(circles[0], hearts[0]); //в () пишем сначала элемент на который меняем, и элемент на какой меняем

//РЕДАКТИРОВАНИЕ ЭЛЕМЕНТА
// мы создали новый элемент
const div = document.createElement('div');
div.classList.add('black');
wrapper.append(div);

//вставляем текст
div.innerHTML = 'Hello World';
div.textContent = 'Hello World';   //второй вариант, но работает только с текстом

//также можем добавлять HTML структуру
div.innerHTML = "<h1>Hello World</h1>";

//HTML код перед или после тега
div.insertAdjacentHTML('beforebegin', "<h2>Hello</h2>");  //ставим HTML код перед элементом
div.insertAdjacentHTML('afterbegin', "<h2>Hello</h2>"); //в начале элемента
div.insertAdjacentHTML('beforeend', "<h2>Hello</h2>");  //в конец элемента
div.insertAdjacentHTML('afterend', "<h2>Hello</h2>");   //после эелемента







