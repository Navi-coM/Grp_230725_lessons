'use strict';

//  DOM - document object model -------------

// Node - вузол -----------------
// Кожен вузол дерева є об'єктом -----------

// window.alert(`Window - Global`);


// HTML - найвищий вузол-----------------

// console.log(window.innerWidth);

// ------- Варіанти отримання доступу до елементів ------------

        // 1 NodeList
// document.querySelector
// document.querySelectorAll
 
     // 2 HTML Collection       
// document.getElementById     
// document.getElementsByClassName 
// document.getElementsByTagName

const htmlNode = document.getElementsByTagName('html');
// console.log(htmlNode);
// 

function changeAttrLang(language) {
    const htmlBlock = document.documentElement;
    htmlBlock.setAttribute('lang', language);
}
// changeAttrLang('uk');

 const bodyBlock = document.body;
 const headBlock = document.head;

//  console.log(bodyBlock);
//  console.log(headBlock);
 
 const btnChangeLang = document.querySelector('#btn_lang');

//  --------------------------

const textSection = document.querySelectorAll('.text');
// console.log(textSection);
// textSection.forEach((item) => console.log(item));

let arrTextSection = Array.from(textSection);
// console.log(arrTextSection);


// let arr = [1,2,3]
// console.log(arr);

// ---------------------------------
// const blockBtns = document.getElementById('btns-action');
// const btns = document.getElementsByClassName('btn_action');
// const btns_2 = document.querySelectorAll('.btn_action');

// const newBtnActionDel = document.createElement('a');

// newBtnActionDel.textContent = 'Delete';
// newBtnActionDel.classList.add('btn_action');

// blockBtns.appendChild(newBtnActionDel);
// ---------------------------------------

// const listLessons = document.getElementsByClassName('lesson-list')[0];
// console.log(listLessons);

// const newListLessonsItem = document.createElement('li');
// newListLessonsItem.textContent = 'JS DOM_2.0';
// newListLessonsItem.classList.add('.lesson-list__item');
// listLessons.appendChild(newListLessonsItem);

// ----------------------- HTML Coll VS Node List ----------------------

const blockBtns = document.getElementById('btns-action');
const blockBtns_2 = document.querySelectorAll('#btns-action');
const btns_2 = document.querySelectorAll('.btn_action');
const btns_3 = document.getElementsByClassName('btn_action');

console.log(btns_2);
console.log(btns_3);


const newBtnActionDel = document.createElement('a');

newBtnActionDel.textContent = 'Delete';
newBtnActionDel.classList.add('btn', 'btn_action');
newBtnActionDel.setAttribute('href', '#');

blockBtns.appendChild(newBtnActionDel);

// console.log(blockBtns.children);
// console.log(blockBtns.childNodes);
// console.log(blockBtns.firstChild);
// console.log(blockBtns.firstElementChild);
// console.log(blockBtns.childElementCount);
// console.log(blockBtns_2.childrenElements);

blockBtns.firstElementChild.style = 'font-weight: 800;';

// ---------------------------------------------

const btnsAll = document.getElementsByTagName('a');
console.log(btnsAll);

let arrBtnsCurrency = [];

for(let dataLink of btnsAll) {
    if(dataLink.dataset.currency) {
        arrBtnsCurrency.push(dataLink);
    }
}

console.log(arrBtnsCurrency);
// ------------------------------------------------

let btnsCurrency = document.querySelectorAll('a[data-currency]');
let blockCurrency = document.querySelector('#btns-currency');

let btnsCurrency_2 = [...btnsCurrency];
console.log(btnsCurrency_2);

btnsCurrency.forEach(item => {
    item.addEventListener('click', () => {
        let courseCurrency = item.getAttribute('data-currency');
        let nameCurrency = item.getAttribute('data-title');
        blockCurrency.insertAdjacentHTML('beforeend', `<p>Course: ${nameCurrency} - ${courseCurrency}</p>`);

    })
})
// console.log(btnsCurrency);

// -----------------приклад створення коротких функцій з аргументами--------------------------

// function createEl(tagName) {
//     return document.createElement(tagName);
// }

let createEl = tagName => document.createElement(tagName);

function addClass(tagName, className) {
    let newEl = createEl(tagName);
    newEl.classList.add(className);
    return newEl;
}

function addTextContent(tagName, content) {
    let newEl = createEl(tagName);
    newEl.textContent = content;
    return newEl;
}


console.log(createEl('div'));
console.log(addClass('p', 'text'));
console.log(addTextContent('p', 'Lorem ipsum dolor'));
