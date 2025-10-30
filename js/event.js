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