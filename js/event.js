'use strict';

// BOM 
// navigator 

// const langBrowser = navigator.language;
// const systemComp = navigator.userAgentData.platform;
// const allDataComp = navigator.userAgent;
// // const geoPositionUser = navigator.geolocation.getCurrentPosition();

// console.log(langBrowser);
// console.log(systemComp);
// console.log(allDataComp);
// // console.log(geoPositionUser);

// navigator.geolocation.getCurrentPosition(function(position) {
//     console.log('Latitude', position.coords.latitude);
//     console.log('Longitude', position.coords.longitude);
// })

// ---------- 1. Події миші ----------
// ---------- 2. Події клавіатури ----------
// ---------- 3. Події форми ----------
// ---------- 4. Події документа ----------
// ---------- 5. Події CSS ----------

const btnChangeColor = document.querySelector('#btn-change-color');
const btnResetColor = document.querySelector('#btn-reset-color');
const bodyEl = document.body;

function changeColorBody() {
    bodyEl.classList.add('background-blue');
    // bodyEl.style.background = '#178fd4';
}
function resetColorBody() {
    bodyEl.classList.remove('background-blue');
}

function alertInfo() {
    alert(`Color is Changed`);
}

// btnChangeColor.onclick = alertInfo;
// btnChangeColor.onclick = changeColorBody;

// btnResetColor.onclick = resetColorBody;

btnChangeColor.addEventListener('click', changeColorBody);
btnChangeColor.addEventListener('click', alertInfo);


// -------------------------------- Event Об'єкт ----------------------


const btnsAction = document.querySelectorAll('a[data-purpose]');

let btnStart;

for(let btn of btnsAction) {
    if(btn.textContent === 'Start') {
        btnStart = btn;
    }
}

// document.body.addEventListener('click', function(event) {
//     // console.log(event);
//     console.log(event.currentTarget);
//     console.log(event.target);
//     console.log(event.type);
//     console.log(event.clientX);
// })

const linkGoogle = document.querySelector('#link_google');

linkGoogle.addEventListener('click', (e) => {
    e.preventDefault();
    alert(`Переходу на Гугл не буде!`)
})

// --------------------------- Занурення, Всплиття -----------------

// 1 window → document → html → body → div.parent → div.child → button.   // занурення
// 2 target                          
// 3 button → div.child → div.parent → body → html → document → window   // всплиття

const parentEl = document.querySelector('#parent');
const childEl = document.querySelector('#child');
const btnClick = document.querySelector('#btn_click');

// parentEl.addEventListener('click', () => console.log('Parent'));
// childEl.addEventListener('click', () => console.log('Child'));
// btnClick.addEventListener('click', () => console.log('Btn-click'));

parentEl.addEventListener('click', (e) => {
    if(e.target.classList.contains('btn-click')) {
        console.log(`Ви клікнули по кнопці: ${e.target.textContent}`);
    }
})