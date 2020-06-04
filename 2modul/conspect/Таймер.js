//ДЕЛАЕМ ТАЙМЕР

	const deadLine = '2020-06-30';  //устанавливаем deadLine

	//ф-я определяющая разницу между deadLine и нашим текущим временем
	function getTimeRemaning(endtime) {
		const t = Date.parse(endtime) - Date.parse(new Date()),  //получаем разницу в ms
			days = Math.floor((t / (1000 * 60 * 60 * 24))),
			seconds = Math.floor((t / 1000) % 60),
			minutes = Math.floor((t / 1000 / 60) % 60),
			hours = Math.floor((t / (1000 * 60 * 60) % 24));

		return {           //возвращаем объект
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