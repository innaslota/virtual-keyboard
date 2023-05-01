//add content to the page
const keyboard = document.createElement('div');
keyboard.classList.add('keyboard');

const input = document.createElement('textarea');
input.classList.add('text-input');

const keys = [
  {value: '`', code: 'Backquote'},  
  {value: 1, code: 'Digit1'}, 
  {value: 2, code: 'Digit2'}, 
  {value: 3, code: 'Digit3'},
  {value: 4, code: 'Digit4'},
  {value: 5, code: 'Digit5'},
  {value: 6, code: 'Digit6'},
  {value: 7, code: 'Digit7'}, 
  {value: 8, code: 'Digit8'},
  {value: 9, code: 'Digit9'},
  {value: 0, code: 'Digit0'},
  {value: '-', code: 'Minus'},
  {value: '=', code: 'Equal'}, 
  {value: '⌫', code: 'Backspace'},
  {value: 'Del', code: 'Delete'},
  {value: 'Tab', code: 'Tab'},
  {value: 'q', code: 'KeyQ'},
  {value: 'w', code: 'KeyW'},
  {value: 'e', code: 'KeyE'},
  {value: 'r', code: 'KeyR'},
  {value: 't', code: 'KeyT'},
  {value: 'y', code: 'KeyY'},
  {value: 'u', code: 'KeyU'},
  {value: 'i', code: 'KeyI'},
  {value: 'o', code: 'KeyO'},
  {value: 'p', code: 'KeyP'},
  {value: '[', code: 'BracketLeft'},
  {value: ']', code: 'BracketRight'},
  {value: '\\', code: 'Backslash'},
  {value: 'CapsLock', code: 'CapsLock'},
  {value: 'a', code: 'KeyA'},
  {value: 's', code: 'KeyS'},
  {value: 'd', code: 'KeyD'},
  {value: 'f', code: 'KeyF'},
  {value: 'g', code: 'KeyG'},
  {value: 'h', code: 'KeyH'},
  {value: 'j', code: 'KeyJ'},
  {value: 'k', code: 'KeyK'},
  {value: 'l', code: 'KeyL'},
  {value: ';', code: 'Semicolon'},
  {value: '\'', code: 'Quote'},
  {value: 'Enter', code: 'Enter'},
  {value: 'Shift', code: 'ShiftLeft'},
  {value: 'z', code: 'KeyZ'},
  {value: 'x', code: 'KeyX'},
  {value: 'c', code: 'KeyC'},
  {value: 'v', code: 'KeyV'},
  {value: 'b', code: 'KeyB'},
  {value: 'n', code: 'KeyN'},
  {value: 'm', code: 'KeyM'},
  {value: ',', code: 'Comma'},
  {value: '.', code: 'Period'},
  {value: '/', code: 'Slash'},
  {value: '↑', code: 'ArrowUp'}, 
  {value: 'Shift', code: 'ShiftRight'},
  {value: 'Ctrl', code: 'ControlLeft'}, 
  {value: 'Win', code: 'MetaLeft'}, 
  {value: 'Alt', code: 'AltLeft'}, 
  {value: 'Space', code: 'Space'}, 
  {value: 'Alt', code: 'AltRight'}, 
  {value: '←', code: 'ArrowLeft'}, 
  {value: '↓', code: 'ArrowDown'}, 
  {value: '→', code: 'ArrowRight'},
  {value: 'Ctrl', code: 'ControlRight'}
];

keys.forEach(key => {
  const button = document.createElement('button');
  button.classList.add(`key`);
  button.classList.add(`${key.code}`);
  button.textContent = key.value;
  button.setAttribute('data-code', `${key.code}`);

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

//add to input
document.addEventListener('keydown', event => {
    const keyPressed = event.key;
    if (keyPressed === 'Shift' || 
        keyPressed === 'Enter' || 
        keyPressed === 'Alt' || 
        keyPressed === 'Control' || 
        keyPressed === 'Space' || 
        keyPressed === 'Backspace' || 
        keyPressed === 'Tab' ||
        keyPressed === 'CapsLock' ||
        keyPressed === 'ArrowUp' ||
        keyPressed === 'ArrowLeft' ||
        keyPressed === 'ArrowDown' ||
        keyPressed === 'ArrowRight' ||
        keyPressed === 'Delete') {
          input.value += ''
    } else {
      input.value += keyPressed;
    }

    if (event.code === 'Backspace') {
      const inputValue = input.value;
      input.value = inputValue.substring(0, inputValue.length - 1);
    } else if (event.code === 'Delete') {
      // eslint-disable-next-line no-undef
      input.value = value.substring(0, position) + value.substring(position + 1);
    }else if (event.code === 'Space') {
      input.value += ' '; 
    }  else if (event.code === 'Tab') {
      input.value += '    '; 
    } else if (event.code === 'ArrowUp') {
      input.value += '↑'; 
    } else if (event.code === 'ArrowLeft') {
      input.value += '←'; 
    } else if (event.code === 'ArrowDown') {
      input.value += '↓'; 
    } else if (event.code === 'ArrowRight') {
      input.value += '→'; 
    } else if (event.getModifierState('CapsLock')) {
      let keysToUp = document.querySelectorAll('.key[data-code^="Key"]');
      keysToUp.forEach(key => {
        key.textContent = key.textContent.toUpperCase();
      });
    } else if (!event.getModifierState('CapsLock')) {
      let keysToUp = document.querySelectorAll('.key[data-code^="Key"]');
      keysToUp.forEach(key => {
        key.textContent = key.textContent.toLowerCase();
      });
    }
  });


