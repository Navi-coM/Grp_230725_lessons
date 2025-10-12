'use strict';
// userName = 'Ihor';

// function test(userAge, userAge) {
//     return userAge;
// }

// delete userName;

// console.log(userName);

let userName;
// console.log(userName);
// console.log(userAge);

// Назва змінної повина інтуітивно вказувати на те що всередині 
// a-Z, 0-9, _, $
// Назва зміної не може починатися з цифри

// let user_first_name = 'Daniil';
// let userFirstName = 'Daniil';

// let $ = '100$';
// let _;
// // let a;

// console.log($);

// ------------------ Варіанти створення змінних ----------
// var, let, const 

// 1) var - застарілий варіант
// console.log(titleItSchool);

var titleItSchool = 'Beetroot';
var titleItSchool = 'Hillel';
var titleItSchool = 'Step';

function sum() {
    var numb_1 = 2;
    var numb_2 = 6;
    var rez = numb_1 + numb_2;
    console.log(rez);
    for (var i = 0; i <= 10; i++) {
        console.log(i)
    }
    // console.log(i);
}
// console.log(i);
// sum();
// console.log(numb_1);

// console.log(titleItSchool);

// 2) let - сучасний варіант (блокова область видимості)
// console.log(nameMentorIt);

let nameMentorIt = 'Ivan';
nameMentorIt = 'Vova';

// for (let i = 0; i <= 10; i++) {
//     console.log(i)
// }
// console.log(i)

// 3) const - сучасний варіант (блокова область видимості)

const currentYear = 2025;
//   currentYear = 2026;

// console.log(currentYear);
// ------------передача даних по значенню------------------------------------


let priceFood = 100;
    // priceFood = 'one hundred';
let newPriceFood = priceFood;

console.log(newPriceFood);

newPriceFood = 200;

console.log(priceFood);

// ------ СЗ -----------------

// Створити назви змінних :
// 1. Назва нашої планети
// 2. Назва міста з якого користувач
// 3. Назвау любленого фільму користувача
// 4. Дата народження Студента
// 5. Прізвище ментора

// let planet;
// let city;
// let film;
// let birthday;
// let birthday_ivan

// let planetName 
// let userCity
// let userFavoriteMovie
// let userDateBirth
// let mentorLastName

// let ourPlanet
// let studentCity
// let favouriteMovie
// const dateOfBirth 
// let mentorName

// ----------------------------------------------