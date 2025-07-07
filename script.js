<<<<<<< HEAD
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let currentInput = '';
let resultDisplayed = false;

buttons.forEach(button => {
  button.addEventListener('click', () => handleInput(button.dataset.value));
});

function handleInput(value) {
  if (value === 'C') {
    currentInput = '';
    display.innerText = '0';
  } else if (value === '=') {
    try {
      currentInput = eval(currentInput).toString();
      display.innerText = currentInput;
      resultDisplayed = true;
    } catch {
      display.innerText = 'Error';
      currentInput = '';
    }
  } else {
    if (resultDisplayed && /[0-9.]/.test(value)) {
      currentInput = value;
    } else {
      currentInput += value;
    }
    display.innerText = currentInput;
    resultDisplayed = false;
  }
}

// Keyboard support
document.addEventListener('keydown', e => {
  const validKeys = '0123456789+-*/.=cC';
  if (validKeys.includes(e.key)) {
    if (e.key === 'c' || e.key === 'C') handleInput('C');
    else if (e.key === '=') handleInput('=');
    else if (e.key === 'Enter') handleInput('=');
    else handleInput(e.key);
  } else if (e.key === 'Backspace') {
    currentInput = currentInput.slice(0, -1);
    display.innerText = currentInput || '0';
  }
});
=======
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let currentInput = '';
let resultDisplayed = false;

buttons.forEach(button => {
  button.addEventListener('click', () => handleInput(button.dataset.value));
});

function handleInput(value) {
  if (value === 'C') {
    currentInput = '';
    display.innerText = '0';
  } else if (value === '=') {
    try {
      currentInput = eval(currentInput).toString();
      display.innerText = currentInput;
      resultDisplayed = true;
    } catch {
      display.innerText = 'Error';
      currentInput = '';
    }
  } else {
    if (resultDisplayed && /[0-9.]/.test(value)) {
      currentInput = value;
    } else {
      currentInput += value;
    }
    display.innerText = currentInput;
    resultDisplayed = false;
  }
}

// Keyboard support
document.addEventListener('keydown', e => {
  const validKeys = '0123456789+-*/.=cC';
  if (validKeys.includes(e.key)) {
    if (e.key === 'c' || e.key === 'C') handleInput('C');
    else if (e.key === '=') handleInput('=');
    else if (e.key === 'Enter') handleInput('=');
    else handleInput(e.key);
  } else if (e.key === 'Backspace') {
    currentInput = currentInput.slice(0, -1);
    display.innerText = currentInput || '0';
  }
});
>>>>>>> 846c108505dcb095b2aca6da52a25810ce0666d7
