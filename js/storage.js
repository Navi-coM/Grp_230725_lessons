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
console.log(localStorage.length);

if(localStorage.length !== 0) {
    let someKeyData = JSON.parse(localStorage.getItem(localStorage.key(2)));
    let someKey = localStorage.key(localStorage.length - 1);
    console.log(someKey);
} else {
    console.log(`LocalStorage is Empty!`);
}

// ----------------------- Отримання наявних ключів у storage ---------

let storageKeys = Object.keys(localStorage);

console.log(storageKeys);
