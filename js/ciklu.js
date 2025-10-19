'use strict';

let someNumber;
someNumber = 8;


alert('Загадай число від 0 до 100');

let minNumber = 0;
let maxNumber = 100;

while (true) {
  let guess = Math.floor((minNumber + maxNumber) / 2);
  let reply = prompt(`Твоє число більше, менше чи дорівнює ${guess}? (>, <, =)`);

  if (reply === '=') {
    alert(`Твоє число: ${guess}`);
    break;
  } else if (reply === '>') {
    minNumber = guess + 1;
  } else if (reply === '<') {
    maxNumber = guess - 1;
  }
}

// ---------------------- Ciklu ----------------
// 1. While(умова) --------

// let numb = 0;
// ++numb
// ++numb
// ++numb
// ++numb
// ++numb
// ++numb
// ++numb
// ++numb
// ++numb
// ++numb

// console.log(numb);
// let i = 11;
//      true

// while(i <= 10) {   // умова перевірки
//   console.log(i);  // тіло виконання циклу
//   i++;             // крок збільшення
// }

// 2.  Do While ---------------

// do {
//   console.log(i);  // тіло виконання циклу
//   i++;              // крок збільшення
// } while (i <= 10);   // умова перевірки

// 3. FOR ------------------------

// for(start; condition; step) {
//   block loop
// } - схема робота циклу

// for (let i = 0; i <= 10; i++) {
//   if (i ** 2 !== 16) {
//     console.log(i);
//   }
// }


// 4. FOR OF (Array) -------------------

let arrStudents = ['Diana', 'Iryna', 'Ihor'];

// for(let student of arrStudents) {
//   console.log(student);
// }

// 5. FOR  IN (Object) -----------------

let studentDaniil = {
  name: 'Daniil',
  isProgrammer: false,
  city: 'Kyiv',
  age: 15
}

for(let key in studentDaniil) {
  if(key === 'city') {
    console.log(studentDaniil[key]);
    break;
  }
  // console.log(`${key}: ${studentDaniil[key]}`);
  // console.log(studentDaniil[key]);
}

// HW пошук випадкового числа від 0 до 100 -----------

// const secretNumb = Math.floor(Math.random() * 101);

// let userNumb = 24;
// let attempts = 0;

// while(userNumb !== secretNumb) {
//   userNumb = +prompt(`Введи число від 0 до 100`);
//   attempts++;

//   if(userNumb > secretNumb) {
//     alert(`Число за велике , спробуй менше`)
//   } else if (userNumb > secretNumb) {
//      alert(`Число замаленьке , спробуй більше`)
//   } else {
//     alert(`Вітаю! Ти вгадав число`)
//   }
// }

