import { addContributerToDOM } from './addContributerToDOM.js'

export function showContributers(contributersSection, dataArray, data, button, i) {
  button.addEventListener('click', creatElements);

  function creatElements() {
    contributersSection.innerHTML = '';
    let showArray;
    if (i == 0) {
      showArray = dataArray.slice(i, i + 5);
    } else {
      showArray = dataArray.slice((i * 5), (i * 5) + 5);
    }
    addContributerToDOM(contributersSection, data, showArray);
  }
}