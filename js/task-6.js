function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxesContainer = document.querySelector('#boxes');
function createBoxes(amount) {
  const boxes = [];

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    const size = 30 + i * 10;
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
  }
  boxesContainer.append(...boxes);
}

const input = document.querySelector('#controls input');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');

createButton.addEventListener('click', () => {
  if (input.value < 1 || input.value > 100) {
    return alert('Введіть число від 1 до 100');
  }

  document.querySelector('#boxes').innerHTML = '';
  createBoxes(input.value);
  input.value = '';
});

destroyButton.addEventListener('click', () => {
  boxesContainer.innerHTML = '';
});
