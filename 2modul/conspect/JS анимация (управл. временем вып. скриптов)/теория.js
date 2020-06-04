//УПРАВЛЕНИЕ ВРЕМЕНЕМ ВЫПОЛНЕНИЯ СКРИПТОВ
const btn = document.querySelector('.btn');
let timerID,
	i = 0;  //переменная счётчик для интервала

btn.addEventListener('click', () => {
	timerID = setTimeout(logger, 2000);  //время устанавливается в ms
});


//Чтобы скрипт повторялся через определённый интервал.
//Выглядит также как и setTimeout
btn.addEventListener('click', () => {
	timerID = setInterval(logger, 2000);
});  //чтобы удалить, также используем clearInterval

function logger() {      //будем отслеживать сколько раз повторился setInterval
	if (i === 3) {
		clearInterval(timerID);    //сбрасываем setTimeout
	}
	console.log('text');
	i++;
}

//РЕКУРСИВНЫЙ МЕТОД setTimeout (если ф-я тяжёлая и вып. дольше чем интервал)
let id = setTimeout(function log() {
	console.log('Hello');
	id = setTimeout(log, 500);
}, 500);