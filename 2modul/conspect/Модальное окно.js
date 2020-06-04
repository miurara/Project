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
	const modalTimerId = setTimeout(openModal, 6000);

	//Если пользователь долистал до конца страиницы - отроется модальное окно
	function showModalByScroll() {
		if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
			openModal();
			window.removeEventListener('scroll', showModalByScroll);
		}
	}
	window.addEventListener('scroll', showModalByScroll);