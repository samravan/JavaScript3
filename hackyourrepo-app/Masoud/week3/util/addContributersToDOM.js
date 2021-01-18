import { showContributersPageOne } from './showContributersPageOne.js';
import { showContributers } from './showContributers.js';
import { addButtonsToDOM } from './addButtonsToDOM.js';
import { changeArrayToIndex } from './changeArrayToIndex.js';
import { addContributerToDOM } from './addContributerToDOM.js';

export function addContributersToDOM(data, contributersSection, buttonArea) {

  buttonArea.innerHTML = '';
  const dataArray = changeArrayToIndex(data);

  let i = 0;
  const preButton = document.createElement('button');
  preButton.classList.add('button');
  preButton.textContent = '<';
  buttonArea.appendChild(preButton);

  preButton.addEventListener('click', () => {
    if (i < 0 || i > Math.ceil(data.length / 5) - 1) { i = Math.ceil(data.length / 5) - 1; }
    contributersSection.innerHTML = '';
    let showArray;
    if (i == 0) {
      showArray = dataArray.slice(i, i + 5);
    } else {
      showArray = dataArray.slice((i * 5), (i * 5) + 5);
    }
    addContributerToDOM(contributersSection, data, showArray);
    i--;
  });

  for (let i = 0; i < Math.ceil(data.length / 5); i++) {
    const button = addButtonsToDOM(buttonArea, i);
    showContributersPageOne(contributersSection, dataArray, data);
    showContributers(contributersSection, dataArray, data, button, i);
  }

  const nexButton = document.createElement('button');
  nexButton.classList.add('button');
  nexButton.textContent = '>';
  buttonArea.appendChild(nexButton);
  nexButton.addEventListener('click', () => {
    if (i > Math.ceil(data.length / 5) - 1) { i = 0; }
    contributersSection.innerHTML = '';
    let showArray;
    if (i == 0) {
      showArray = dataArray.slice(i, i + 5);
    } else {
      showArray = dataArray.slice((i * 5), (i * 5) + 5);
    }
    addContributerToDOM(contributersSection, data, showArray);
    i++;
  });
}

