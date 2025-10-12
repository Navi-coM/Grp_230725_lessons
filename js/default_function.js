'use strict';

// ------------- Вбудовані функції ------

// alert, confirm, prompt

// 1) alert() - виводить модальне вікно з повідомленням
// alert(`Hello JavaScript!`);

// 2) confirm() - виводить модальне вікно з можливістю вибрати один з двох варіантів
// let userFromUkraine = confirm('Are you form Ukraine?');
// console.log(userFromUkraine);

// if(userFromUkraine) {
//     alert(`Вітаю Українців дома!`)
// } else {
//     alert(`Lets go for Ukraine!`)
// }

// let userIsProgrammer = confirm('Are you Programmer?');
// console.log(userIsProgrammer);


// 3) prompt - виводить модальне вікно з можливістю вводити дані

// let userName = prompt('Enter your name ?');
// alert(`Hello my friend ${userName}`);
// console.log(userName);
// ---------

// let squareWidth = prompt('Enter width square', '');

// let squarePerimetr = squareWidth * 4;
// alert(`Perimentr of square = ${squarePerimetr} sm`);

// -------------------- СЗ з Домашки --------------
// Запитай рік народження користувача, порахуй його/її вік і виведи результат. Поточний рік вкажи в коді як константу;

let userBirthYear = prompt('Enter your birthYear', '');
const currentYear = new Date().getFullYear();
let userAge = currentYear - userBirthYear;

alert(`Hello my friend, you are ${userAge} years`);
// console.log(currentYear);


