'use strict';


// ------------ Перетворення типів даних ---------

//`1.   Number ---------------
let a = '10';
// console.log(a);
// console.log(Number(a)); 
// console.log(+a); 


let b = '8'; 
let c = '2';
let d = +b + +c; 

let e = b - c;

// console.log(d);
// console.log(e);
// console.log(typeof e);
// console.log(typeof b);



// 1) -, *, /, ** - перетворюють строку на число, якщо це можливо
// 2) +(), Number(), parseFloat() - перетворюють строку на число, явне перетворення

// 3) undefined - NaN
// 4) null - 0
// 5) true - 1, false - 0;
// 6) '', ' ' - 0;


// let some_2 = 1 - null * 100 - true;
// console.log(some_2);


// let some_3 = 1 + (' ' + 500) / 100; 
// console.log(some_3);

// let some_4 = 1 + ('!' + 500) / 100; 
// console.log(some_4);


// 2     String ----------

let numb_11 = 10;
numb_11 = String(numb_11);

// console.log(typeof numb_11);
// console.log(numb_11);

let sum = 5 + numb_11;

// console.log(sum);

let age_2 = 20;
let someRez = age_2 + 10 - '2' + 5 - true;
// console.log(someRez);

//  3    Boolean -------------

// -0, 0, null, undefined, '', NaN - false   
// все інше - true   

console.log(0 === -0);

console.log(Boolean(NaN));

let finishExirs = 0 - Boolean('false') + (Number(Boolean(' ')) + 5) * 100 / 50 + Boolean(0);

let finishExirs_2 = (5 + +(' '));
console.log(finishExirs_2);


