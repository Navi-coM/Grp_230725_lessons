'use strict'

// localstorage - об'єкт, який зберігає дані в браузері навіть після закриття сторінки
// sessionstorage - об'єкт, який зберігає дані в браузері до закриття сторінки

// Вони не відправляють дані на сервер
// Приблизний об'єм 5 Мб


// -----------------1. LocalStorage----------------


// localStorage.setItem('','') - додати key > value
// localStorage.getItem('')     - зчитати по key
// localStorage.removeItem(''); - видалити по key
// localStorage.clear();       - очистити повністю
// localStorage.key();        - перевірити наявність key
// localStorage.length;       - подивитися чи є щось в st0rage


// userName = navicom
// userFirstName = Ivan

const arrMyStudents = ['Iryna', 'Natallja', 'Diana', 'Vova', 'Ihor', 'Danjia'];
const arrAdress = [
    {
        city: 'Dnipro',
        street: 'Shevchenko'
    },
    {
        city: 'Kyiv',
        street: 'Khrestchatuk'
    },
];

const userAdmin = {
    adminName: 'Ivan',
    role: 'admin',
    password: '123456'
}
const userIsFrontEnd = true;

localStorage.setItem('studentList', arrMyStudents);
localStorage.setItem('adressList', JSON.stringify(arrAdress))
localStorage.setItem('adminData', JSON.stringify(userAdmin));
localStorage.setItem('userDataIsFrontEnd', userIsFrontEnd);

console.log(JSON.parse(localStorage.getItem('adressList')));
// console.log(JSON.parse(localStorage.getItem('studentList')));
console.log(JSON.parse(localStorage.getItem('userDataIsFrontEnd')));

localStorage.removeItem('studentList');
// localStorage.clear();
// console.log(localStorage.length);

// if(localStorage.length !== 0) {
//     let someKeyData = JSON.parse(localStorage.getItem(localStorage.key(2)));
//     let someKey = localStorage.key(localStorage.length - 1);
//     console.log(someKey);
// } else {
//     console.log(`LocalStorage is Empty!`);
// }

// ----------------------- Отримання наявних ключів у storage ---------

let storageKeys = Object.keys(localStorage);

// console.log(storageKeys);

// ---------------------------- Click Storage -----

const btnClick = document.querySelector('#btn-click');
const btnClearStore = document.querySelector('#btn-clear');
const clickCountTitle = document.querySelector('#click-count');

let clickCount = localStorage.getItem('clickCounter') || 0;

function checkClickCountStorage() {
    clickCountTitle.innerHTML = clickCount;
}

function clickCountStorage() {
    clickCount++;
    localStorage.setItem('clickCounter', clickCount);

    let clickStorageCount = localStorage.getItem('clickCounter');
    clickCountTitle.innerHTML = clickStorageCount;
}

function clrearCountStorage() {
    localStorage.removeItem('clickCounter');
    clickCountTitle.innerHTML = clickCount = 0;
}

document.addEventListener('DOMContentLoaded', checkClickCountStorage);
btnClick.addEventListener('click', clickCountStorage);
btnClearStore.addEventListener('click', clrearCountStorage);

// -----------------------------Емуляція зміним теми за допомогою localstorage ------

const btnChangeTheme = document.querySelector('#btn-change-theme');
const btnResetTheme = document.querySelector('#btn-reset-theme');
const blockBody = document.body;

function changeTheme() {
    blockBody.classList.toggle('body_dark');

    if (blockBody.classList.contains('body_dark')) {
        localStorage.setItem('pageTheme', 'dark')
    } else {
        localStorage.setItem('pageTheme', 'light')
    }
}
function resetPageTheme() {
    if (blockBody.classList.contains('body_dark')) {
        localStorage.removeItem('pageTheme');
        blockBody.classList.remove('body_dark');
    }
}
function checkPageThemeStorage() {
    const savedTheme = localStorage.getItem('pageTheme');

    if (savedTheme === 'dark') {
        blockBody.classList.add('body_dark');
    }
}

document.addEventListener('DOMContentLoaded', checkPageThemeStorage);
btnChangeTheme.addEventListener('click', changeTheme);
btnResetTheme.addEventListener('click', resetPageTheme);