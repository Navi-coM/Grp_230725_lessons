'use strict';

// --------------------- Operators (Оператори) ------------------

// Математичні оператори --------------
// +, -, *, /, **, % -------------


let remaindNumb = 2 ** 3;
let remaindNumb_2 = 10 % 4;
// console.log(remaindNumb);


let arrNumbs = [1,2,3,4,5,6,7,8];

// arrNumbs.forEach(numb => {
//     if(numb % 2 === 0) {
//         console.log(numb);
//     }
// })


// -----Логічні оператори--------------------------------------

// || - або, працює до першої істини (true), якщо немає true 
// ,то повретає останнє значення

// && - i, працює до першої лжи (false), якщо немає false , 
// то поверне останнє значення

let someVar = 0 || '' || -0;
// console.log(someVar);

let someVar_2 = true && NaN  && 'MArina' ;
// console.log(someVar_2);



// if (-1 || 0) {
//     alert( 'перший' );
// };

// if (-1 && 0) { 
//     alert( 'другий' )
// } 

// if (null || -1 && 1) {alert( 'третій' )};

// 1) -1 && 1 = 1
// 2) null || 1 = 1


// alert( alert(1) && alert(2) );


// Оперпатори порівняння -------------
// >, <, >=, <=, ==, ===, !=, !==

// console.log(3 < 5);

let res_1 = 3 <= 3;  // 3 < 3, 3 == 3
let res_2 = 3 >= 5;  // 3 > 5, 3 == 5
let res_3 = 10 <= 10; 

// console.log(res_1);
// console.log(res_2);
// console.log(res_3);

// true false - true
// false true - true
// false false - false

let res_4 = '8' == 8;
let res_5 = '8' === 8;

// console.log(res_4);
// console.log(res_5);

let res_6 = null == undefined;
let res_7 = null === undefined;

// console.log(res_6);
// console.log(res_7);

let res_8 = NaN;
let res_9 = NaN;

console.log(res_8 === res_9);

console.log(undefined === undefined);

let res_10 = 'sup';
let res_11 = 'sub';
console.log(res_10 > res_11);


// ------------// increment, decrement---------------
// i++, i--

let a = 10;
// a = a + 1;
// a += 1;
// a++;
// ++a;
// console.log(a);

let b = 8;
// b = b - 1;
// b -= 1;
// b--;
// --b;

// console.log(b--);
// console.log(b);
// let res_12 = a++ - --b + b--;
// //           10  - 7   + 7
// console.log(res_12);
// console.log(a);
// console.log(b);

let res_13 = ++a - ( --a + b-- ) * --b;
//                  (10 + 8)
//          11 -   (18) * 6
// 10 - 102 = -92

console.log(res_13);
