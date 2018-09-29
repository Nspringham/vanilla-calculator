// JS Calculator 
// Author: Nick Springham

// calc numbers
var oneBtn = document.getElementById('calc-one');
var twoBtn = document.getElementById('calc-two');
var threeBtn = document.getElementById('calc-three');
var fourBtn = document.getElementById('calc-four');
var fiveBtn = document.getElementById('calc-five');
var sixBtn = document.getElementById('calc-six');
var sevenBtn = document.getElementById('calc-seven');
var eightBtn = document.getElementById('calc-eight');
var nineBtn = document.getElementById('calc-nine');
var zeroBtn = document.getElementById('calc-zero');

// calc operators
var divideBtn = document.getElementById('calc-divide');
var multiplyBtn = document.getElementById('calc-multiply');
var subtractBtn = document.getElementById('calc-subtract');
var addBtn = document.getElementById('calc-add');

// calc functions
var clearBtn = document.getElementById('calc-clear');
var backspaceBtn = document.getElementById('calc-backspace');
var decimalBtn = document.getElementById('calc-decimal');
var calculateBtn = document.getElementById('calc-calculate');

// calc display
var displayValElement = document.getElementById('display-val');
var displayVal = '0';
var pendingVal;
var evalStringArray = [];

var calcNumBtns = document.getElementsByClassName('calc-num');
var calcOperatorBtns = document.getElementsByClassName('calc-operator');

var updateDisplayVal = (clickObj) => {
  var btnText = clickObj.target.innerText;
  if (displayVal === '0') 
    displayVal = '';

  displayVal += btnText
  displayValElement.innerText = displayVal;
}

for (let i = 0; i < calcNumBtns.length; i++) {
  calcNumBtns[i].addEventListener('click', updateDisplayVal, false);
}
// for (let i = 0; i < calcOperatorBtns.length; i++) {
//   calcOperatorBtns[i].addEventListener('click', performOperation, false);
// }