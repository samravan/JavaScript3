export function addButtonsToDOM(buttonArea, i) {
  const button = document.createElement('button');
  button.classList.add('button');
  button.textContent = i + 1;
  buttonArea.appendChild(button);
  return button;
}