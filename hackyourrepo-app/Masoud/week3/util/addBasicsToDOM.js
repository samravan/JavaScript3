export function addBasicsToDOM() {
  //Create header element and its children
  const header = document.createElement('header');
  const imgLink = document.createElement('a');
  const imgHeader = document.createElement('img');

  imgLink.href = '#';
  imgHeader.src = 'img/hyf.png';
  imgHeader.alt = 'HYF logo';
  document.body.appendChild(header);
  header.appendChild(imgLink);
  imgLink.appendChild(imgHeader);

  //Create container and main tag
  const container = document.createElement('div');
  const main = document.createElement('main');

  container.classList.add('container');
  document.body.appendChild(container);
  container.appendChild(main);

  //Create section for select repositories
  const selectorSection = document.createElement('section');
  selectorSection.classList.add('selector');
  main.appendChild(selectorSection);

  const labelElement = document.createElement('label');
  labelElement.for = 'repo-items';
  labelElement.textContent = 'Hack Your Future Repositories:';
  selectorSection.appendChild(labelElement);

  const selectElement = document.createElement('select');
  selectElement.id = 'repo-items';
  selectorSection.appendChild(selectElement);


  //Create description and contributers
  //Description
  const desconElement = document.createElement('div');
  desconElement.classList.add('des-con');
  main.appendChild(desconElement);

  const descriptionSection = document.createElement('section');
  descriptionSection.classList.add('description');
  desconElement.appendChild(descriptionSection);

  const desTable = document.createElement('table');
  descriptionSection.appendChild(desTable);

  const bodyTable = document.createElement('tbody');
  desTable.appendChild(bodyTable);

  //Contributers
  const contributersSection = document.createElement('section');
  contributersSection.classList.add('contributers');
  desconElement.appendChild(contributersSection);

  const buttonArea = document.createElement('div');
  buttonArea.classList.add('button-area');
  descriptionSection.appendChild(buttonArea);

  return { selectElement, bodyTable, contributersSection, buttonArea };
}