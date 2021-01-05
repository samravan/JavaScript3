import { addBasicsToDOM } from './addBasicsToDOM.js';
import { fetchData } from './fetchData.js';
import { displayError } from './displayError.js';
import { addListToDOM } from './addListToDOM.js';
import { addContributersToDOM } from './addContributersToDOM.js';
import { addDescriptionToDOM } from './addDescriptionToDOM.js';

window.onload = main;

export function main() {

  const elements = addBasicsToDOM();
  const selectElement = elements.selectElement;
  const contributersSection = elements.contributersSection;
  const bodyTable = elements.bodyTable;
  const buttonArea = elements.buttonArea;

  const url = 'https://api.github.com/orgs/HackYourFuture/repos?per_page=100';

  fetchData(url).then(myJson => {
    addListToDOM(myJson, selectElement);

    selectElement.addEventListener('change', () => {


      myJson.forEach(element => {
        if (element.name == selectElement.value) {
          addDescriptionToDOM(bodyTable, element);

          const url = element.contributors_url;

          fetchData(url).then(myJson => {
            addContributersToDOM(myJson, contributersSection, buttonArea);
          })
            .catch(error => {
              displayError(error);
            })
        }
      })
    })
  })
    .catch(error => {
      displayError(error);
    })
};