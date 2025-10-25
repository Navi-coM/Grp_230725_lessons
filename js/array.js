'use strict';

// ----------------------- Array ----------------------

// 1. Індекси замість ключів
// 2. Масив - це як правило однотипні дані
// 3. length = останный індекс + 1

// Як створити масив ---------------

// 1) let arr = [];                  літерал
// 2) let arr_2 = new Array();  

let arrFoods = ['milk', 'beer', 'sausage', 'bread'];

let user = {
    name: 'Ihor',
    age: 28,
}

// console.log(arrFoods);
// console.log(typeof arrFoods);
// console.log(typeof user);
// console.log(Array.isArray(user));
// console.log(Array.isArray(arrFoods));
// console.log(arrFoods[0]);

arrFoods[arrFoods.length] = 'meat';
// delete arrFoods[2];     // краще не використовувати
// console.log(arrFoods[2]);

arrFoods[99] = 'water';
console.log(arrFoods);

// -----------------Як додавати дані в масив--------------------

let arrDrinks = ['whiskey', 'rom', 'gin'];

arrDrinks.push('vodka');
arrDrinks.push(arrFoods);
// arrDrinks.push(...arrFoods);
console.log(arrDrinks[4][1]);


// -----------------------------------------------------------

let arrFoods_2 = [
    {
        name: 'bread',
        amount: 2,
        isBought: false
    },
    {
        name: 'milk',
        amount: 3,
        isBought: true
    },
    {
        name: 'beer',
        amount: 2,
        isBought: false
    }
]

// console.log(arrFoods_2);
// console.log(arrFoods_2[1].name);
// --------------------------------------------------------
const btnAddFood = document.getElementById('btn_amount');
const blockAmount = document.getElementById('amount');
const nameFood = document.getElementById('name-food');
const amountFood = document.getElementById('amount-food');
const boughtStatus = document.getElementById('bought-food');

function checkAmountFood() {
    let nameFoodValue = nameFood.value;
    let amountFoodValue = amountFood.value;
    let boughtStatus = false;

    arrFoods_2.push({
        'name': nameFoodValue,
        'amount': amountFoodValue,
        'isBought': boughtStatus
    })

    for(let title of arrFoods_2) {
        blockAmount.insertAdjacentHTML('beforeEnd', `<p>${title.name}: ${title.amount} <input type='checkbox'></p>`);

        // let inputBoughtStatus = document.createElement('input');
        // console.log(inputBoughtStatus);
    }
}

btnAddFood.addEventListener('click', checkAmountFood);

// ---------------------- ДЗ -----------------------------
// При натискані на кнопку , поля інпутів повинні очищатися від тексту.



// ------------------------------------------ пепребор масива (Цикли)---------------
// 1 For 

// for(let i = 0; i < arrFoods_2.length; i++) {
//     if(arrFoods_2[i].name === 'milk') {
//         console.log(arrFoods_2[i]);
//     }
// }

// 2 For of 
for(let title of arrFoods_2) {
    if(title.isBought === false) {
        console.log(title)
    }
}

// 3   Метод forEach ------------------

arrFoods_2.forEach(function(item) {
    let nameFoodUpper = item.name.toUpperCase();
    let namefoodLength = item.name.length;
    blockAmount.innerHTML += `<p>${nameFoodUpper} - складається з ${namefoodLength} літер</p>`
})