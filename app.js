

// ### variable for each btn ###

var oneBtn = document.getElementById('calc-one');
var oneBtn = document.getElementById('calc-two');
var oneBtn = document.getElementById('calc-three');
var oneBtn = document.getElementById('calc-four');
var oneBtn = document.getElementById('calc-five');
var oneBtn = document.getElementById('calc-six');
var oneBtn = document.getElementById('calc-seven');
var oneBtn = document.getElementById('calc-eight');
var oneBtn = document.getElementById('calc-nine');
var oneBtn = document.getElementById('calc-zero');

var decimalBtn = document.getElementById('calc-decimal');
var clearBtn = document.getElementById('calc-clear');
var backspaceBtn = document.getElementById('calc-backspace');
var displayValElement = document.getElementById('calc-display-val');

var calcNumBtns = document.getElementsByClassName('calc-btn-num');
var calcOperatorBtns = documenet.getElementsByClassName('calc-btn-operator);


// ### create Even Listner for each button  ###

var displayVal = '0';
var pendingVal;
var evalStringArray = [];

var updateDisplayVal = (clickObj) => {
    var btnTxt = clickObj.target.innerText;


}

for (let i = 0; i < calcNumBtns.length; i++) {
    calcNumBtns[i].addEventListener('click', updateDisplayVal, false);
}

// for (let i = 0; i < calcOperatorBtns.length; i++) {
//     calcOperatorBtns[i].addEventListener('click', performOperation, false);

// }

clearBtn.onclick = () => {
    displayVal = '0';
    
}