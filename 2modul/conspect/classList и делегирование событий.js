const btns = document.querySelectorAll('button'),
	wrapper = document.querySelector('.btn-block');

console.log(btns[0].classList.length); //с помощью свойства length можно посмотреть сколько классов у элемента button
console.log(btns[0].classList.item(1)); //метод item позволяет получить класс, кот. распологается под определенным индексом
console.log(btns[0].classList.add('red', 'fz')); //метод add позволяет добавить класс
console.log(btns[0].classList.remove('blue')); //метод кот. удаляет классы
console.log(btns[0].classList.toggle('blue')); //если данный класс есть на элементе, то он удаляется, а если нету - добавляется

if (btns[1].classList.contains('red')) {   //позволяет определить наличие класса на определенном элементе и возвращает булиновое значение
	console.log('red');
}

//Пример: при нажатии на первую кнопку - если у второй кнопки нету класса red, то мы его добавляем, а если есть - удаляем
btns[0].addEventListener('click', () => {
	if (!btns[1].classList.contains('red')) {
		btns[1].classList.add('red');
	} else {
		btns[1].classList.remove('red');
	}
});
//Либо можно использовать toggle, но для простых скриптов
btns[0].addEventListener('click', () => {
	btns[1].classList.toggle('red');
});


//ДЕЛИГИРОВАНИЕ СОБЫТИЙ - берём эл-т, кот. является родителем, а внутри проверяем, на что мы кликнули
wrapper.addEventListener('click', (event) => {
	if (event.target && event.target.tagName == "BUTTON") {   //проверяем условие, что мы точно попали на кнопку
		console.log('Hello');
	}
	//или, например
	//if (event.target && event.target.classList.contains('blue') {
	//	console.log('Hello');
	//});
});
//т.е. если элемент подходит под условие, то на нём будет срабатывать ф-я

const btn = document.createElement('button'); //создаём новый элемент
btn.classList.add('red');  //добавляем ему класс
wrapper.append(btn);   //добавляем его на страницу

//Проверяем на определенное совпадение с помощью matches (какой-то элемент совпадает с чем-то)
//с чем сравниваем, пишем в ()
wrapper.addEventListener('click', (event) => {
	if (event.target && event.target.matches("button.red")) {
		console.log('Hello');
	}
});