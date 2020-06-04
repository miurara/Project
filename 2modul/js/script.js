window.addEventListener('DOMContentLoaded', () => {

	//ДЕЛАЕМ ТАБЫ

	let tabs = document.querySelectorAll('.tabheader__item'), //получаем меню, на кот. будем нажимать
		tabsContent = document.querySelectorAll('.tabcontent'), //получаем контент табов
		tabsParent = document.querySelector('.tabheader__items'); //родитель, кот. будет содержать все табы

	//ф-я скрытия контекта табов
	function hideTabContent() {
		tabsContent.forEach(item => {
			item.classList.add('hide');
			item.classList.remove('show', 'fade');
		});

		//также убираем класс активности у меню
		tabs.forEach(item => {
			item.classList.remove('tabheader__item_active');
		});
	}

	//показываем табы
	//ps i = 0 означает, что если ф-я вызывается без аргумента, то по умолчанию будет 0
	function showTabContent(i = 0) {
		tabsContent[i].classList.add('show', 'fade');
		tabsContent[i].classList.remove('hide');
		tabs[i].classList.add('tabheader__item_active');
	}

	hideTabContent();
	showTabContent();

	tabsParent.addEventListener('click', (event) => {
		const target = event.target;

		if (target && target.classList.contains('tabheader__item')) {
			tabs.forEach((item, i) => {
				if (target == item) {
					hideTabContent();
					showTabContent(i);
				}
			});
		}
	});

	//ДЕЛАЕМ ТАЙМЕР

	const deadLine = '2020-06-30'; //устанавливаем deadLine

	//ф-я определяющая разницу между deadLine и нашим текущим временем
	function getTimeRemaning(endtime) {
		const t = Date.parse(endtime) - Date.parse(new Date()), //получаем разницу в ms
			days = Math.floor((t / (1000 * 60 * 60 * 24))),
			seconds = Math.floor((t / 1000) % 60),
			minutes = Math.floor((t / 1000 / 60) % 60),
			hours = Math.floor((t / (1000 * 60 * 60) % 24));

		return { //возвращаем объект
			'total': t,
			'days': days,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		};
	}

	//ф-я чтобы, если число меньше 10, то перед ним ставился 0
	function getZero(num) {
		if (num >= 0 && num < 10) {
			return '0' + num;
		} else {
			return num;
		}
	}

	//устанавливаем часы на страницу
	function setClock(selector, endtime) {
		const timer = document.querySelector(selector),
			days = timer.querySelector("#days"),
			hours = timer.querySelector('#hours'),
			minutes = timer.querySelector('#minutes'),
			seconds = timer.querySelector('#seconds'),
			timeInterval = setInterval(updateClock, 1000);

		updateClock();

		//ф-я обновления таймера каждую секунду
		function updateClock() {
			const t = getTimeRemaning(endtime); //расчёт того времени который остался на эту секунду

			//выводим данные на страницу
			days.innerHTML = getZero(t.days);
			hours.innerHTML = getZero(t.hours);
			minutes.innerHTML = getZero(t.minutes);
			seconds.innerHTML = getZero(t.seconds);

			//останавливаем таймер когда кончится время
			if (t.total <= 0) {
				clearInterval(timeInterval);
			}
		}
	}

	setClock('.timer', deadLine);

	//МОДАЛЬНОЕ ОКНО

	const modalTrigger = document.querySelectorAll('[data-modal]'),
		modal = document.querySelector('.modal'),
		modalCloseBtn = document.querySelector('[data-close]');

	function openModal() {
		modal.classList.add('show');
		modal.classList.remove('hide');
		//modal.classList.toggle('show'); варианты
		document.body.style.overflow = 'hidden';
		clearInterval(modalTimerId);
	}

	modalTrigger.forEach(btn => {
		btn.addEventListener('click', openModal);
	});

	function closeModal() {
		modal.classList.add('hide');
		modal.classList.remove('show');
		//modal.classList.toggle('show');
		document.body.style.overflow = '';
	}
	modalCloseBtn.addEventListener('click', closeModal);

	//ф-я закрытия модального окна при нажатии на любое место вне окна
	modal.addEventListener('click', (e) => {
		if (e.target === modal) {
			closeModal();
		}
	});

	//ф-я закрытия окна кнопкой Esc
	document.addEventListener('keydown', (e) => {
		if (e.code === "Escape" && modal.classList.contains('show')) {
			closeModal();
		}
	});

	//Открытие окна через какое-то время
	//const modalTimerId = setTimeout(openModal, 6000);

	//Если пользователь долистал до конца страиницы - отроется модальное окно
	function showModalByScroll() {
		if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
			openModal();
			window.removeEventListener('scroll', showModalByScroll);
		}
	}
	window.addEventListener('scroll', showModalByScroll);

	//ИСПОЛЬЗУЕМ КЛАССЫ ДЛЯ КАРТОЧЕК

	//...classes - rest оператор, т.к. мы не знаем сколько классов ещё может быть

	class MenuCard {
		constructor(src, alt, title, descr, price, parentSelector, ...classes) {
			this.src = src;
			this.alt = alt;
			this.title = title;
			this.descr = descr;
			this.price = price;
			this.classes = classes;
			this.parent = document.querySelector(parentSelector);
			this.transfer = 27; //для конвертации из $ в гривны
			this.changeToUAH();
		}

		//метод для конвертации
		changeToUAH() {
			this.price = this.price * this.transfer;
		}

		//метод для формирования вёрстки
		render() {
			const element = document.createElement('div');

			//чтобы menu__item появился по умолчанию, если он не установлен
			if (this.classes.length === 0) {
				this.classes = "menu__item";
				element.classList.add(this.classes);
			} else {
				this.classes.forEach(className => element.classList.add(className));
			}

			element.innerHTML = `
                <img src=${this.src} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>
            `;
			this.parent.append(element);
		}
	}

	new MenuCard(
		"img/tabs/vegy.jpg",
		"vegy",
		'Меню "Фитнес"',
		'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
		9,
		".menu .container"
	).render();

	new MenuCard(
		"img/tabs/post.jpg",
		"post",
		'Меню "Постное"',
		'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
		14,
		".menu .container",
	).render();

	new MenuCard(
		"img/tabs/elite.jpg",
		"elite",
		'Меню “Премиум”',
		'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
		21,
		".menu .container",
	).render();
});