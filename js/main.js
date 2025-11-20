'use strict';

let student = {
    name: 'Diana',
    age: 28,
    city: 'Brovaru',
    sayGoodbye() {
        alert(`Time to say Goodbye`);
    }
}

let student_2 = {
    name: 'Ihor',
    age: 29,
    city: 'Dnipro',
    sayGoodbye() {
        alert(`Time to say Goodbye`);
    }
}
// console.log(student.constructor());

// ----------------- DRY ----------------
// -------- До Класів було так -------------------

function Student(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
    this.sayGoodbye = function () {
        alert(`time to say Goodbye ${this.course}!`)
    }
}


let student_3 = new Student('Ihor', 33, 'Kyiv');
let student_4 = new Student('Natalie', 23, 'Lviv');
let student_5 = new Student('Iruna', 33, 'Kherson');

// console.log(student_3);
// console.log(student_4);


// -------------------------- Нарешті з'явилися Class ----------

// Class === Function

// id, name, course, city, langProgr

class StudentIT {
    constructor(id, name, course = 'fornt-end', city, langProgr = 'Javascript') {
        this.id = id;
        this.name = name;
        this.course = course;
        this.city = city;
        this.langProgr = langProgr;
    }

    sayHello() {
        console.log(`Hello ${this.name} from ${this.city}`)
    }
}

let student_8 = new StudentIT(1, 'Vova', undefined, 'Kyiv');

// console.log(student_8);

// ----------------- Class Expression ------------

let Car = class{
    constructor(title, model, color, speed, age) {
        this.title = title;
        this.model = model;
        this.color = color;
        this.speed = speed;
        this.age = age;
    }

    maxSpeed() {
        console.log(`${this.speed * 2.5} km/h `);
    }

    get fullTitle() {
        return `${this.title} ${this.model}`;
    }
};

let audiCar = new Car('Audi', 'RS Q8', 'Grey', '100', '2 years');

// console.log(audiCar);
// console.log(audiCar.fullTitle);
// console.log(audiCar.maxSpeed());

// audiCar.fullTitle = 'BMW X5';
// console.log(audiCar.fullTitle);
audiCar.title = 'BMW';
// console.log(audiCar.title);
// console.log(audiCar.fullTitle);

// -----------------------------------

class Food {
    constructor(title,price,amount) {
        this.title = title;
        this.price = price;
        this.amount = amount;
    }

    get price() {
        return this._price;
    }

    set price(value) {
        if(value <= 0)  throw new Error(`Ціна має бути більше 0!`);
        this._price = value
    }

    getTotalPrice() {
        return this._price * this.amount;
    }
}

let meat = new Food('beaf',10, 2);
// meat._price = 0;
// console.log(meat.getTotalPrice());
// console.log(meat.price);

// ---------------------------------------------

class Button {
    constructor(value, width, height, padding, className, borderRadius, background, type) {
        this.value = value;
        this.width = width;
        this.height = height;
        this.padding = padding;
        this.className = className;
        this.borderRadius = borderRadius;
        this.background = background;
        this.type = type;
    }

    render() {
        let btn = document.createElement('button');

        btn.style.width = `${this.width}px`;
        btn.style.height = `${this.height}px`;
        btn.style.padding = `${this.padding}px`;
        btn.style.borderRadius = `${this.borderRadius}px`;
        btn.style.background = this.background;

        btn.innerText = this.value;
        btn.classList.add(this.className);
        btn.setAttribute('type', this.type);

        return btn;
    }
}
const blockForButtons = document.querySelector('#block-buttons');

const btnSend = new Button('Send', 120, 50, 10, 'btn', 8, '#ffddff', 'submit');
const btnRemove = new Button('Remove', 120, 50, 10, 'btn', 8, 'red', 'reset');
console.log(btnSend);

blockForButtons.append(btnSend.render());
blockForButtons.append(btnRemove.render());


