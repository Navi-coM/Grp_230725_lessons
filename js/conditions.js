'use strict';

// --------------------- Умовний оператор ------------------

// ----------1. If else -----------------

// if(умова) { блок виконаня} -------------
// else if(умова) { блок виконаня} (опціонально, може бути не один)
// else { блок виконаня }   (опціонально)

// let yourItAcademy = prompt(`Enter your name IT Academy`);

// if(yourItAcademy === 'Beetroot' || yourItAcademy === 'beetroot' || yourItAcademy === 'BEETROOT' || yourItAcademy === 'Бітрут') {
//     alert(`Hello our Student!`)
// } else if(!yourItAcademy) {
//     alert(`Лошара, ти що не вмієш писати!`)
// } else {
//     alert(`Друже, швидко переходь в Beetroot!`)
// }

// let arrNameBeetroot = ['Beetroot','beetroot']

// ------2 оператор ? - тернарний оператор --------------  

// умова ? дія_1 (true) : дія_2 (false);

// let userAge = +prompt(`Enter your Age`);

// userAge >= 18 ? alert(`Ми раді вас бачити, насолоджуйтесь`) : alert(`Малюк, бігом до мамки, ще не доріс!`);

// let isNumber = +prompt(`Enter some number`);

// let resIsNumber = isNumber > 0 ? 'Number is Positive' :
//     isNumber === 0 ?
//         'Number is 0' :
//         'Number is Negative';

// console.log(resIsNumber);


// ----------3. Switch Case ------------

let colorTrafficLight = prompt(`Enter color traffic light`);

switch(colorTrafficLight) {
    case 'red' : alert(`Stop!`);
        break
    case 'yellow' : alert(`Ready to Go, but Stop!`);
        break
    case 'green' : alert(`Go!`);
        break
    default: alert(`Немає такого кольору у світлофора!`)
}


