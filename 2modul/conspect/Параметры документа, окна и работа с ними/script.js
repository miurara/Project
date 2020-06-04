'use strict';

//ПАРАМЕТРЫ ЭЛЕМЕНТОВ
const box = document.querySelector('.box'),
	btn = document.querySelector('button');

/*получаем ширину и высоту элемента без учёта margin и border
const width = box.clientWidth;
const height = box.clientHeight;

console.log(width, height);

//высота и ширина с учётом border и margin
const width = box.offsetWidth;
const height = box.offsetHeight;*/

//высота и ширина с учётом scroll
const width = box.scrollWidth;
const height = box.scrollHeight;

//чтобы при нажатии наш текст полностью раскрылся
btn.addEventListener('click', () => {
	box.style.height = box.scrollHeight + 'px';
});

//посмотреть сколько контента не показывается (отлистанного) scrollTop
//scrollTop и scrollleft могут быть модифицированны
btn.addEventListener('click', () => {
	console.log(box.scrollTop);    //н-р посмотреть сколько контента уже отлистано
});

//Получить все координаты элемента со страницы. Координаты начинаются в вурхнем левом углу экрана
console.log(box.getBoundingClientRect());
console.log(box.getBoundingClientRect().top);

//Получить стили кот. были применены к элементу с помощью css
const style = window.getComputedStyle(box);
console.log(style.display);
//PS стили псевдоэлементов с помощью JS мы изменить не можем, но можем их получить
//const style = window.getComputedStyle(box, пишем псевдоэлемент);

//ПАРАМЕТРЫ ГЛОБАЛЬНЫХ ОБЪЕКТОВ
console.log(document.documentElement.clientWidth);
console.log(document.documentElement.scrollTop);
document.documentElement.scrollTop = 0; //модификация

//метод скролла от текущего положения на странице
window.scrollBy(0, 400); //в() указываем координаты x и y
//относительно всей страницы
window.scrollTo(0, 400);