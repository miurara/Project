'use strict';

//Классы это красивая обвёртка ф-ий конструкторов
//Пишем class далее имя с большой буквы
class Rectangle {
	//свойства
	constructor(height, width) {
		this.height = height;
		this.width = width;
	}

	//методы
	calcArea() {   //например расчитывем прощадь
		return this.height * this.width;
	}
}

class ColoredRectangleWithText extends Rectangle {

}

const square = new Rectangle(10, 10);
const long = new Rectangle(20, 100);

consol.log(square.calcArea);
consol.log(long.calcArea);

//ПРИНЦИПЫ
//1. Абстракция - когда мы отделяем концепцию от её экземпляра.
//т.е. создаём шаблон и на его основе экземпляры (как было сделано выше)

//2. Наследование - способность нашего объекта или класса базироваться на другом объекте или классе
//например, создаём новый класс, кот. будет наследовать св-ва от предыдущего
class ColoredRectangleWithText extends Rectangle {
	constructor(height, width, text, bgColor) {
		super(height, width);  //вызывает конструктор родителя. В () пишем параметры, кот. нужны от родителя
		this.text = text;
		this.bgColor = bgColor;
	}

	showMyProps() {
		consol.log(`Текст ${this.text}, цвет ${this.bgColor}`);
	}
}

const div = new ColoredRectangleWithText(25, 10, 'Hello World', 'red');

div.showMyProps();
consol.log(div.calcArea());