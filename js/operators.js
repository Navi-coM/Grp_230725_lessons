'use strict';

// --------------------- Operators (Оператори) ------------------

// Математичні оператори --------------
// +, -, *, /, **, % -------------


let remaindNumb = 2 ** 3;
let remaindNumb_2 = 10 % 4;
console.log(remaindNumb);


let arrNumbs = [1,2,3,4,5,6,7,8];

arrNumbs.forEach(numb => {
    if(numb % 2 === 0) {
        console.log(numb);
    }
})


// -----Логічні оператори--------------------------------------

// || - або, працює до першої істини (true), якщо немає true 
// ,то повретає останнє значення

// && - i, працює до першої лжи (false), якщо немає false , 
// то поверне останнє значення

let someVar = 0 || '' || -0;
console.log(someVar);

let someVar_2 = true && NaN  && 'MArina' ;
console.log(someVar_2);