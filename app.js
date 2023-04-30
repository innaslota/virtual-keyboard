const keyboard = document.createElement('div');
keyboard.classList.add('keyboard');


const keys = [
  '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\',
  'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter',
  'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Shift',
  'Ctrl', 'Alt', 'Space', 'Alt', 'Ctrl'
];

keys.forEach(key => {
  const button = document.createElement('button');
  button.classList.add('key');
  button.textContent = key;
  keyboard.appendChild(button);
});

document.body.appendChild(keyboard);
