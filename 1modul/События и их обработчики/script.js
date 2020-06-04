//СПОСОБЫ НАЗНАЧЕНИЯ СОБЫТИЙ

//1. НЕ ИСПОЛЬЗУЕТСЯ
//прямо в вёрстве пишем событие. Н-р
// <button onclick = "alert('click')" id="btn">Нажми меня</button>

//2. Используем Dom дерево для событий. ПОЧТИ НЕ ИСПОЛЬЗУЕТСЯ
const btn = document.querySelector('button');
btn.onclick = function () {   //в ф-ии пишем действие, которое будет происходить после события
    alert('Click');
};

//3. addEventListener - в () пишем название события и далее передаём callback ф-ю в кот. пишем действие
// мы можем назначать несколько событий на 1 действие, они будут выполняться по порядку
btn.addEventListener('click', () => {
    alert('Click');
});

btn.addEventListener('click', () => {
    alert('Second click');
});
// событие наведения мышкой на кнопку
btn.addEventListener('mouseenter', () => {
    console.log('Hover');
});

//event позволяет увидеть что произошло с событием. Назначается как аргумент в call back ф-ю
//название м/б любое, но обычно event или e
//важное что мы можем посмотреть через event - это type - тот тип события, кот. произошёл и target - тот элемент на котором произошло событие
btn.addEventListener('mouseenter', (e) => {
    console.log(e.target);   //или console.log(e);
                             //мы можем выполнять с элементом всё что хотим
});

//чтобы УДАЛИТЬ обработчики событий с элементов, нам надо вынести ф-ю в отдельную переменную
const deleteElement = (e) => {
    e.target.remove();
};

btn.addEventListener('click', deleteElement);

//вариант лучше
const deleteElement = (e) => {
    consol.log(e.target);
};
btn.removeEventListener('click', deleteElement);

//вариант с условием - н-р когда что-то произошло, то обработчик нам больше не нужен
let i = 0;
const deleteElement = (e) => {
    consol.log(e.target);
    i++;
    if (i == 1) {
        btn.removeEventListener('click', deleteElement);
    }
};

const overlay = document.querySelector('.overlay');

//Сплытие событий - сначала событие происходит с элементом который внутри родителя, а потом на самом родителе
const deleteElement = (e) => {
    consol.log(e.target);
    consol.log(e.type);
};
btn.removeEventListener('click', deleteElement);
overlay.removeEventListener('click', deleteElement);

//ОТМЕНА стандартного поведения браузера/ Н-р запрещение отмены перехода по ссылке
const link = document.querySelector('a');

link.addEventListener('click', function (event) {
    event.preventDefault();
    console.log(event.target);    //задаём другое действие с сылкой
});

//НАВЕСИТЬ СОБЫТИЕ НА НЕСКОЛЬКО ЭЛЕМЕНТОВ. Нужно перебрать все элементы в псевдомассиве
const btns = document.querySelectorAll('button');

btns.forEach(btn => {
    btn.addEventListener('click', deleteElement, {once: true});
});
//addEventListener третим аргументом будет стоять ОПЦИЯ события. Н-р once - чтобы событие произошло только 1 раз

//для того чтобы script не начал грузиться раньше, чем закгрузится всё DOM дерево, пишем событие
//document.addEventListener('DOMContentLoaded', () => {}    //в callbake ф-ю помещаем весь наш код
