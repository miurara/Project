"use strict";

//мы создаём 1 прототип, который по умолчанию содержит определённые свойства
const soldier = {
    health: 400,
    armor: 100,
    sayHello: function () {
        console.log("Hello");
    }
};
const jonh = {    //от прототипа можем создавать много разных объектов, которые будут отличаться какими-то параметрами,
    health: 100   //но и принимает параметры основного прототипа
};

//создаём прототип Jonh, который будет прототипно наследоваться от soldier
const jonh = Object.create(soldier);

//jonh.__proto__ = soldier; //уже не используется
Object.setPrototypeOf(jonh, soldier);
console.log(jonh.armor);
jonh.sayHello();