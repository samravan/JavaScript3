import { addBasicsToDOM } from './addBasicsToDOM.js';
import { fetchData } from './fetchData.js';
import { displayError } from './displayError.js';
import { addListToDOM } from './addListToDOM.js';
import { addDescriptionToDOM } from './addDescriptionToDOM.js';
import { secondFetchAndAddToDOM } from './secondFetchAndAddToDOM.js';

window.onload = main;

async function main() {
  try {
    const elements = addBasicsToDOM();
    const selectElement = elements.selectElement;
    const contributersSection = elements.contributersSection;
    const bodyTable = elements.bodyTable;
    const buttonArea = elements.buttonArea;

    const url1 = 'https://api.github.com/orgs/HackYourFuture/repos?per_page=100';

    const myJson = await fetchData(url1);

    addListToDOM(myJson, selectElement);

    selectElement.addEventListener('change', () => {
      myJson.forEach(element => {
        if (element.name == selectElement.value) {
          addDescriptionToDOM(bodyTable, element);
          const url2 = element.contributors_url;
          secondFetchAndAddToDOM(url2, contributersSection, buttonArea);
        }
      })
    })
  }

  catch (error) {
    displayError(error);
  }
}
