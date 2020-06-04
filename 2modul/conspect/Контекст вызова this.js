'use strict';

//THIS это то, что окружает ф-ю и в каких условиях она вызывается
//МЕТОДЫ вызова ф-ии
//1. Обычная ф-я: this = window, но если стоит 'use strict', то будет undefined
function  showThis(a, b) {
	console.log(this);	
	function sum() {
		console.log(this);
		return a + b;
	}

	console.log(sum());
}
showThis(4, 5);

//2. Контекст (this) у методов объекта - сам объект
const obj = {
	a: 20,
	b: 15,
	sum: function() {
		console.log(this);	
	}
};
obj.sum();

//3. Ф-ии конструкты через оператор new. Когда она будет вызвана - она создаст новый объект
//this в конструкторах и классах будет новый экзепляр объекта
function User(name, id) {
	this.name = name;  
	this.id = id;
	this.humal = true;
	this.hello = function() {
		console.log("Hello" + this.name);
	};
}
let ivan = new User('Ivan', 23);

//4.Ручное присвоение this с помощью call и apply
function sayName(surname) {
	console.log(this);
	console.log(this.name + surname);
}

const user = {
	name: 'John'
};

//call и apply делают одно и тоже, но синтаксис аргументов разный
sayName.call(user, 'Smith');
sayName.apply(user, ['Smith']);

//bind() создаёт новую ф-ю связанную с определённым контекстом
function count(num) {
	return this*num;
}

const double = count.bind(2); //то что в () будет передаваться в this
console.log(double(3));
console.log(double(13));

//Пример
//контекстом вызова this будет сам эл-т на котором произошло событие, т.е. кнопка
const btn = document.querySelector('button');

btn.addEventListener('click', function() {
	this.style.background-color = 'red';
});

//у стрелочной ф-ии нет своего контекста вызова. Она его будет брать у своего родителя
const obj = {
	num: 5,
	sayNumber: function() {
		const say = () => {
			console.log(this);  //значение this будет = 5
		};

		say();	
	}
};

obj.sayNumber(); 

//здесь пример того как стрелочная ф-я помогает сократить код
//она предполагает что return будет a * 2
//если ф-я принимает только 1 аргумент, то он может быть написан без ()
const double = a => a * 2;
