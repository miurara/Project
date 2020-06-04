'use strict';

/* Задания на урок:
1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" -
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.
2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки
3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)
4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение:
"Добавляем любимый фильм"
5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

document.addEventListener('DOMContentLoaded', () => {

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const adv = document.querySelectorAll('.promo__adv img'),
        poster = document.querySelector('.promo__bg'),
        genre = poster.querySelector('.promo__genre'),
        movieList = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('form.add'),
        addInput = addForm.querySelector('.adding__input'),
        checkbox = addForm.querySelector('[type="checkbox"]');

    addForm.addEventListener('submit', (event) => {   //отследить отправку форму
        event.preventDefault();                                           //чтобы страница не перезагружалась

        let newFilm = addInput.value;           //чтобы посмотреть то, что ввёл пользователь
        const favorite = checkbox.checked;      //отмечена галочка или нет. Значение будет true или false

        if (newFilm) {                          //условие, для того, чтобы не отображалась пустая строка в списке

            if (newFilm.length > 21) {          //вторая задача
                newFilm = `${newFilm.substring(0 ,22)}...`;
            }

            if (favorite) {
                console.log("Добавляем новый фильм");
            }

            movieDB.movies.push(newFilm);       //добавляем новые вписанные в форму фильмы
            sortArr(movieDB.movies);            //отсортирвовали по алфавиту

            creatMoviesList(movieDB.movies, movieList);
        }

        event.target.reset();      //сбрасываем форму
    });

    //ф-я для удаления рекламы
    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };

    //ф-я для изменений на страницу
    const makeChanges = () => {
        genre.textContent = 'драма';

        poster.style.backgroundImage = 'url("img/bg.jpg")';
    };

    //ф-я сортировки
    const sortArr = (arr) => {
        arr.sort();
    };

    //ф-я для выведения новых фильмов в список
    function creatMoviesList(films, parent) {
        parent.innerHTML = "";
        sortArr(films);          //чтобы элементы нормально сортировались при удалении

        films.forEach((film, i) => {
            parent.innerHTML += `
    <li class="promo__interactive-item">${i + 1} ${film}
       <div class="delete"></div>
     </li>
    `;
        });

        //задача №3
        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);

                creatMoviesList(films, parent);   //чтобы список заново отсортировался по нумерации
            });
        });
    }

    makeChanges();
    deleteAdv(adv);
    creatMoviesList(movieDB.movies, movieList);
});