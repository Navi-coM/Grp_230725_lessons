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

 console.log(bodyBlock);
 console.log(headBlock);
 
 const btnChangeLang = document.querySelector('#btn_lang');

//  --------------------------

const textSection = document.querySelectorAll('.text');
console.log(textSection);
textSection.forEach((item) => console.log(item));

let arrTextSection = Array.from(textSection);
console.log(arrTextSection);


// let arr = [1,2,3]
// console.log(arr);

// ---------------------------------
const blockBtns = document.getElementById('btns-action');
const btns = document.getElementsByClassName('btn_action');
const btns_2 = document.querySelectorAll('.btn_action');

const newBtnActionDel = document.createElement('a');

newBtnActionDel.textContent = 'Delete';
newBtnActionDel.classList.add('btn_action');

blockBtns.appendChild(newBtnActionDel);
// ---------------------------------------

const listLessons = document.getElementsByClassName('lesson-list')[0];
console.log(listLessons);

const newListLessonsItem = document.createElement('li');
newListLessonsItem.textContent = 'JS DOM_2.0';
newListLessonsItem.classList.add('.lesson-list__item');
listLessons.appendChild(newListLessonsItem);
