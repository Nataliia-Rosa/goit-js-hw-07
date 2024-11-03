const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

inputName.addEventListener('input', event => {
  const inputText = event.currentTarget.value.trim();
  outputName.textContent = inputText === '' ? 'Anonymous' : inputText;
});
