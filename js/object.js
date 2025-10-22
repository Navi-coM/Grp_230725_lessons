'use strict';

// ----------------- Object ----------------


const obj = {};              //літерал об'єкту
const obj_1 = new Object();  // конструктор об'єкту

// function Object() {
//     return let obj = {};
// }

let student = {
    // key: value ,    property (властивості)
    name: 'Diana',
    city: 'Kyiv',
    age: 24,
    isProgrammer: true,
    skills: ['html', 'scss', 'js', 'ReactJS'],

    //methods

    sayHello: function() {
        alert(`Hello my dear ${this.name}`)
    }
}

// console.log(student);
// console.log(typeof student);
// console.log(student.name);
// console.log(student.sayHello);
// console.log(student['isProgrammer']);

student.mentorEnglish = true;
console.log(student);

const student_2 = student; // передача по посиланню на той самий об'єкт
student_2.name = 'Vova';
console.log(student.name);

delete student.age;
console.log(student);

// student = {};
// console.log(student);

// // -------------------------- перевірка властивостей в об'єкті -----------------
// in  
// console.log('skills' in student);

// function findKey(key) {
//     let getSomeKey = (key in student)
//     if(getSomeKey) {
//         return true
//     };
// }
// console.log(findKey('gender'));


// // --------------Object.keys, Object.values, Object.entries-----------------------------------------

const  car = {
    title: 'Audi',
    model: 'RS Q8',
    price: 70000,
    year: 2022,
    clickFaFa: function() {
        alert(`Fa Fa fa`)
    }
}
// console.log(Object.keys(car));
// console.log(Object.values(car));
// console.log(Object.entries(car));


// ---------------for in----------

for(let key in car) {
    if(key === 'model') console.log(`${key}: ${car[key]}`);
}

// -------------- Копіювання об'єктів ------------

// 1. Через for in -----

let newCar = {};

for(let key in car ) {
    newCar[key] = car[key]
}
console.log(newCar);

console.log(newCar === car);

// 2. Object.assign() -----------------

let newCar_2 = Object.assign({}, car, student);

console.log(newCar_2 === car);

newCar_2.model = 'RS 5';
console.log(newCar_2);

