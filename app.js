//add content to the page
const keyboard = document.createElement('div');
keyboard.classList.add('keyboard');

const input = document.createElement('input');
input.classList.add('text-input');

const keys = [
  '~', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\',
  'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter',
  'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Shift', '↑',
  'Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Ctrl', '←', '↓', '→'
];

keys.forEach(key => {
  const button = document.createElement('button');
  button.classList.add('key');
  button.textContent = key;
  console.log(key);
  button.setAttribute('data-code', key);
  button.addEventListener('click', () => {
    input.value += button.textContent;
  });
  keyboard.appendChild(button);
});

document.body.appendChild(input);
document.body.appendChild(keyboard);

//highlight button on press
const keyState = {};

document.addEventListener('keydown', event => {
  const keyCode = event.code;
  console.log(keyCode);
  if (keyState[keyCode]) {
    return;
  }
  
  const button = document.querySelector(`.key[data-code="${keyCode}"]`);
  if (button) {
    button.classList.add('active');
  }
  keyState[keyCode] = true;
});

document.addEventListener('keyup', event => {
  const keyCode = event.code;
  const button = document.querySelector(`.key[data-code="${keyCode}"]`);
  if (button) {
    button.classList.remove('active');
  }
  keyState[keyCode] = false;
});

document.addEventListener('keydown', event => {
    const keyPressed = event.key;
    input.value += keyPressed;
  });

