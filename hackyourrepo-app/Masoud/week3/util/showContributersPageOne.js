import { addContributerToDOM } from './addContributerToDOM.js'

export function showContributersPageOne(contributersSection, dataArray, data) {
  contributersSection.innerHTML = '';
  const showArray = dataArray.slice(0, 5);
  addContributerToDOM(contributersSection, data, showArray);
}