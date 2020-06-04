'use strict';

//ФУНКЦИИ КОНСТРУКТОРЫ - позволяют создать новый объект
//с их помощью мы можем, например, создавать новых пользователей
//внутри можно помещать как свойства, так  и методы

/*Имя функции-конструктора должно начинаться с большой буквы.
Функция-конструктор должна вызываться при помощи оператора "new".*/
function User(name, id) {
	this.name = name;  
	this.id = id;
	this.humal = true;
	this.hello = function() {
		console.log(`Hello ${this.name}`);
		
	};
}

User.prototype.exit = function() {
	console.log(`Пользователь ${this.name} ушёл`);
};

//внутри этой переменной находится не ф-я, а объект и создаётся новый объект
const ivan = new User('Ivan', 28);
const alex = new User('Alex', 20);

ivan.exit();

ivan.hello();
alex.hello();

console.log('ivan');
console.log('alex');

