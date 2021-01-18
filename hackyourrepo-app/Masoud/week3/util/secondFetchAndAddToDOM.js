import { fetchData } from "./fetchData.js";
import { addContributersToDOM } from './addContributersToDOM.js';
import { displayError } from './displayError.js';

export async function secondFetchAndAddToDOM(url, contributersSection, buttonArea) {
  try {
    const myJson = await fetchData(url);
    addContributersToDOM(myJson, contributersSection, buttonArea);
  }

  catch (error) {
    displayError(error);
  }

}