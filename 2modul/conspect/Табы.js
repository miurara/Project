//ДЕЛАЕМ ТАБЫ

	let tabs = document.querySelectorAll('.tabheader__item'),   //получаем меню, на кот. будем нажимать
		tabsContent = document.querySelectorAll('.tabcontent'),   //получаем контент табов
		tabsParent = document.querySelector('.tabheader__items');  //родитель, кот. будет содержать все табы

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