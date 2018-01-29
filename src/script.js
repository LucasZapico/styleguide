// TOGGLE SIDEBAR SCRIPT
const SIDEBAR = document.querySelector('#sidebar');
const TOGGLEBTN = document.getElementById('toggle-sidebar');

TOGGLEBTN.addEventListener('click', function(event) {
  if(SIDEBAR.className === 'sidebar hide'){
    SIDEBAR.className = 'sidebar';
  } else {
    SIDEBAR.className = 'sidebar hide';
  }
});

//PRIMARY
const swatchContainer = document.querySelector('.color-container');
//COLOR INPUTS
const newColorOne = document.querySelector('#input-color-one');
const newColorTwo = document.querySelector('#input-color-two');
const newColorThree = document.querySelector('#input-color-three');
//SWATCH
const swatchOne = document.querySelector('#swatch-one');
const swatchTwo = document.querySelector('#swatch-two');
const swatchThree = document.querySelector('#swatch-three');
//HEX CODES
const swatchOneCode = document.querySelector('#swatch-one-code');
const swatchTwoCode = document.querySelector('#swatch-two-code');
const swatchThreeCode = document.querySelector('#swatch-three-code');

//SECONDARY SWATCH
const swatchFour = document.querySelector('#swatch-four');
const swatchFive = document.querySelector('#swatch-five');
const swatchSix = document.querySelector('#swatch-six');
const swatchSeven = document.querySelector('#swatch-seven');


newColorOne.addEventListener('input', function(){checkLength(newColorOne, swatchOne, swatchOneCode)}, false);
newColorTwo.addEventListener('input', function(){checkLength(newColorTwo, swatchTwo, swatchTwoCode)}, false);
newColorThree.addEventListener('input', function(){checkLength(newColorThree, swatchThree, swatchThreeCode)}, false);

  swatchOne.style.backgroundColor = '#254691';
  swatchTwo.style.backgroundColor = '#912546';
  swatchThree.style.backgroundColor = '#2D6B3A';

function checkLength(colorInput, swatch, code){
  if(colorInput.value.length == 7){
    let newColor = colorInput.value;
    updateSwatch(newColor, swatch, code);
  }
};

function updateSwatch(newColor, swatch, code){
  swatch.style.backgroundColor = newColor;
  code.innerHTML = newColor;

};


/************
** SWATCH COLOR DEFAULTS
**
*************/

swatchOne.style.backgroundColor = '#254691';
swatchTwo.style.backgroundColor = '#912546';
swatchThree.style.backgroundColor = '#2D6B3A';

swatchFour.style.backgroundColor = '#333030';
swatchFive.style.backgroundColor = '#fafafa';
swatchSix.style.backgroundColor = '#FFFFFF';
swatchSeven.style.backgroundColor = '#000000';
