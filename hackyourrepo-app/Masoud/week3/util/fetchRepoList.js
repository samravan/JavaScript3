import { displayError } from './displayError.js';
import { addDataToDOM } from './addDataToDOM.js';

export function fetchRepoList(selectElement, bodyTable, contributersSection) {
  const url = 'https://api.github.com/orgs/HackYourFuture/repos?per_page=100';
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (myJson) {
      myJson.forEach(element => {
        const option = document.createElement('option');
        option.value = element.name;
        option.textContent = element.name;
        selectElement.appendChild(option);
      })
      addDataToDOM(myJson, selectElement, bodyTable, contributersSection);
    })
    .catch(function (error) {
      displayError(error);
    });
};
