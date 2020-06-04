//анимация
const btn = document.querySelector('.btn');
let timerID,
	i = 0;

function myAnimation() {
	const elem = document.querySelector('.box'); //элемент с кот. мы взаимодействуем
	let pos = 0;   //начальная позиция

	const id = setInterval(frame, 10);
	function frame() {
		if (pos == 300) {   //конечная позиция
			clearInterval(id);
		} else {
			pos++;
			elem.style.top = pos + "px";
			elem.style.left = pos + "px";
		}
	}
}

btn.addEventListener('click', myAnimation);
