'use strict';

// ----------------- Function ----------------

// Онсновнмй будівельний блок коду, який повторно можна використовувати.

// 1) Function Declaration -  оголошення функції
// 2) Function expression -  функціональний вираз
// 3) Arrow Function -  стрілкова функція

// sayHelloMessage();

// 1) Function Declaration --------------------

// function name(params) {block function}

// function sayHelloMessage() {
//   let textMessage = `Hello my favorite students!`;

//   alert(textMessage);
// }

// setTimeout(sayHelloMessage, 3000);

// sayHelloMessage();   // виклик функції

// const btnStartFunction = document.querySelector('#btn_start');
// btnStartFunction.addEventListener('click', sayHelloMessage);


// function sayHelloUserMessage() {
//   let userName = prompt(`Enter your name`);
//   let textMessage = `Hello ${userName}!`;

//   alert(textMessage);
// }

// sayHelloUserMessage();


// 2) Function Espression --------------

// let sum = function() {
//     let num_1 = 3;
//     let num_2 = 10;

//     return num_1 + num_2;
// }

// let sum_2 = sum;

// console.log(sum_2());
// console.log(sum_3(1,2,4,5)); // так не можна
let sum_3 = function() {
    let result = 0;
    for(let numb of arguments) {
        result += numb;
    }
    return result;
}


// console.log(sum_3(1,2,4,5));
// console.log(sum_3(1,2,4,5,100));

// [1,2,3,4,5]

// 3) Arrow Function (стрілкова функція) ------------// 
// 
// let multiply = function(numb_5 , numb_6) {
//     return numb_5 * numb_6
// }

let multiply_2 = (numb_5, numb_6) => numb_5 * numb_6;

console.log(multiply_2(3, 4));


// 4) Самовикликаюча функція ---------------

let multiply_3 = ((numb_5, numb_6) => console.log(numb_5 ** numb_6))(10, 2);


// --------------------------- Рекурсивна функція ---------------------

// Функція викликає сама себе до моменту припинення виконання (base case) - умова зупинки

// 1  5

// 1 * 2 * 3 = 6  
// 1 * 2 * 3 * 4 * 5 = 120 

function factorial(numb) {
    if(numb === 0 || numb === 1) {
        return 1;
    } else if ( numb < 0) {
        console.log(`Такого факторіалу не існує`);
        return;
    }
    return numb * factorial(numb - 1);
}

console.log(factorial(100));
// function User(name) {
//     this.name = name;
// }

// let userIvan = new User('Ivan');

// console.log(userIvan);
