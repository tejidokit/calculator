
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




// ### create Even Listner for each button  ###

var displayVal = '0';
var pendingVal;
var evalStringArray = [];

var calcNumBtns = document.getElementsByClassName('calc-btn-num');
var calcOperatorBtns = document.getElementsByClassName('calc-btn-operator');


// show input to screen

var updateDisplayVal = (clickObj) => {
    // when a button is pressed it will pass that info to btnText
    var btnText = clickObj.target.innerText;

    // value added to string if it's not zero
    if(displayVal === '0')
        displayVal = '';

    // displayVal will not show the button that is pressed
    displayVal += btnText;
    displayValElement.innerText = displayVal;

}


// whenever calcNumBtns gets clicked, updateDisplayVal will trigger, 
// and the click event (clickObj) will automatically pass to the updateDisplayVal function
for (let i = 0; i < calcNumBtns.length; i++) {
    calcNumBtns[i].addEventListener('click', updateDisplayVal, false);
}

// for (let i = 0; i < calcOperatorBtns.length; i++) {
//     calcOperatorBtns[i].addEventListener('click', performOperation, false);

// }


// clear button
clearBtn.onclick = () => {
    displayVal = '0';
    pendingVal = undefined;
    evalStringArray = [];
    displayValElement.innerHTML = displayVal;
}

backspaceBtn.onclick = () => {
    let lengthOfDisplayVal = displayVal.length;
    
}