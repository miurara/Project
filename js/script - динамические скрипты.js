"use strict";

//Если добавляем скрипт в начало body HTML, то ставим ему defer или async
//Также можно добавить скрипт в HTML через JS. Поведение будет такое же как и у async

function loadScript(src) {
    const script = document.createElement('script');
    script.src = src;
    script.async = false;    //чтобы убрать асинхронность и скрипты загружались по порядку
    document.body.append(script);
}

loadScript("js/script.js");
loadScript("js/test.js");
