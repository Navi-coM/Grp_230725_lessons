'use strict';

// -------- Type Data (Типи даних) -------

// ------- Примитіви ---------
    // 1. Number(число)
    // 2. Bigint(великі числа)
    // 3. String(строка)
    // 4. Boolean(булево значення, логічний тип)
    // 5. Null(нул)
    // 6. undefined(невизначений)
    // 7. Symbol(унікальний id проперті об'єктів)

// --------- Складні типи ---------
    // 8. Object(Об'єкт)

    // object
    // array
    //function
    // class


    
// 1. Number(число) -------
let numb = 8;
let numb_2 = 4.3;
let numb_3 = 5e8;
let numb_4 = Infinity;
let numb_5 = 10 - '2 year';  // NaN - Not a number

// console.log(typeof numb_5);
// console.log(numb_5);

// 2. BigInt (великі числа) 2 в 53 - 1 ----------

let bigNumb = 10000000000000000000000000000n;

// console.log(typeof bigNumb);


// 3. String (Строка) ----------------
// '', "", ``

let str = 'I like';
let str_2 = "Beetroot";
let currentYear = new Date().getFullYear();


let fullStr = `${str} - ${str_2} from ${currentYear + 1} years`;
let fullStr_2 = str +' - '+ str_2  +' from '+ (+currentYear + 1) + ' years';


// console.log(fullStr);
// console.log(fullStr_2);


// 4. Boolean (булево значення) ---------------
// true, false

let boolean_1 = true;
let boolean_2 = false;
let number = 'a';


// console.log(boolean_1);
// console.log(typeof boolean_1);
// console.log(Boolean(number));

// 5. Null (нулл) порожнє значення (явна пустота)----------

let amountStudent = null;

console.log(typeof amountStudent);


// 6. Undefined - змінна без значення ------------

let dataFinishCourse;

console.log(dataFinishCourse);
console.log(typeof dataFinishCourse);

// 7. Symbol (Символ)--------------

let id_1 = Symbol('universalID');
let id_2 = Symbol('universalID');

let id_3 = 'universalID';
let id_4 = 'universalID';

console.log(id_1 === id_2);
console.log(id_3 === id_4);
console.log(typeof id_1);

// -----------
// 8. Object (об'єкт) -------------

// object
// array
// function
// class-------------------------------

let student = {
    name: 'Diana',
    age: 23,
    city: 'Kyiv',
    itAcademy: 'Beetroot',
    sayHello: function() {
        alert(`Hello World!`)
    }
}

console.log(typeof student);


let arrNumb = [1,2,'Ihor',4,5];

console.log(typeof arrNumb);
