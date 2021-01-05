import { showContributersPageOne } from './showContributersPageOne.js';
import { showContributers } from './showContributers.js';
import { addButtonsToDOM } from './addButtonsToDOM.js';
import { changeArrayToIndex } from './changeArrayToIndex.js';

export function addContributersToDOM(data, contributersSection, buttonArea) {

  buttonArea.innerHTML = '';
  const dataArray = changeArrayToIndex(data);
  for (let i = 0; i < Math.ceil(data.length / 5); i++) {
    const button = addButtonsToDOM(buttonArea, i);
    showContributersPageOne(contributersSection, dataArray, data);
    showContributers(contributersSection, dataArray, data, button, i);
  }
}

