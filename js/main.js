'use strict';

// _ - protected (іншому програмісту не можна це змінювати);
// # - private(захищена властивість JS, не змінюється);


class Student {
    constructor(name, city, course = 'front-end') {
        this.name = name;
        this.city = city;
        this.course = course;
    }
    sayHello() {
        alert(`Hello ${this.name}`)
    }
}


let studentIvan = new Student(undefined, 'Dnipro', undefined);
let studentIhor = new Student(undefined, 'Dnipro', undefined);


class Bachelor extends Student {
    constructor(name, city, course = 'front-end', age, isBachelor) {
        super(name, city, course);
        this.age = age;
        this.isBachelor = isBachelor;
    }
    #itAcademy = 'Beetroot Academy';
    _country = 'Ukr';

    sayHello() {
        alert(`Hello ${this.name} and ${this.city}`)
    }
}

let bachelorDiana = new Bachelor('Diana', 'Kyiv', undefined, 25, true);
bachelorDiana.sayHello();
studentIvan.sayHello();
console.log(bachelorDiana);
bachelorDiana.city = 'Browaru';
bachelorDiana._country = 'Great Britain';
// bachelorDiana.#itAcademy = 'Hillel';  // Змінити неможливо

// ------------------------- User практика -------------

// name, email, password, id
// #password, #id - private

class User {
    #password;
    #id;

    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.#password = password;
        this.#id = crypto.randomUUID();  // генеруємо унікальний ID
    }

    getPublicInfo() {
        return {
            id: this.#id,
            name: this.name,
            email: this.email,
        }
    }

    _validatePassword(password) {
        return this.#password = password;
    }

    changePassword(oldPassword, newPassword) {
        if (!this._validatePassword(oldPassword)) {
            console.log(`Невірний пароль`);
            return;
        }
        this.#password = newPassword;
        console.log(`Пароль оновлено!`); 
    }
}

class Admin extends User {
     constructor(name, email, password) {
        super(name, email, password);
        this.role = 'admin';
    }

    blockUser(user) {
        console.log(`Користувач ${user.name} заблооковано Адміном ${this.name}`);
    }

    getPublicInfo() {
        const baseGetPublic = super.getPublicInfo();

        return {
            ...baseGetPublic,
            role: this.role
        }
    }
}

const admin = new Admin('Ihor', 'test@gmail.com', '123456');
const user = new User('Vova', 'test2@gmail.com', '54321');

console.log(admin);
console.log(user);

admin.blockUser(user);

admin.changePassword('asdasd', 'abcde');

console.log(admin);

