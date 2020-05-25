"use strict";

//touchstart - при возникновении касания по элементу
//touchmove - когда палец при касании к элементу начинает двигаться
//touchend - когда палец оторвался от элемента
//touchenter - когда мы ведём пальцем по экрану и наскакиваем на эл-т, на кот. навешено данное событие
//touchleave - палец продолжает скользить по экрану и уходит за пределы этого события
//touchcancel - когда точка соприкосновения больше не регистрируется на событии (н-р палец вышел за пределы браузера)

window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (e) => {
        e.preventDefault();

        console.log('Start');
        console.log(e.touches);                 //выдаёт список всех пальцев, кот. сейчас взаимодействуют с экраном
        console.log(e.targetTouches[0].pageX);  //обращаемся к конкретному пальцу, чтобы посмотреть его координаты
    });

    box.addEventListener('touchmove', (e) => {
        e.preventDefault();

        console.log('Move');
    });

    box.addEventListener('touchend', (e) => {
        e.preventDefault();

        console.log('End');
    });
});

//СВОЙСТВА У ОБЪЕКТА СОБЫТИЯ (e или event)
//touches выдаёт список всех пальцев, кот. сейчас взаимодействуют с экраном
//targetTouches - пальцы кот. взаимодействуют с конкретным элементом
//changedTouches - пальцы, кот. совершили определенное назначенное действие