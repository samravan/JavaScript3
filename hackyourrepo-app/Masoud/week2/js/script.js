window.onload = main;

function main() {
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

  fetchRepoList(selectElement, bodyTable, contributersSection);
};


function fetchRepoList(selectElement, bodyTable, contributersSection) {
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
      const errElement = document.createElement('h3');
      errElement.style.backgroundColor = 'orange';
      errElement.style.color = 'white';
      errElement.style.display = 'block';
      errElement.style.padding = '10px';
      errElement.innerHTML = `
      network request failed
      <br>
      ${error}`;
      bodyTable.parentNode.insertBefore(errElement, bodyTable);
    });
};

function addDataToDOM(data, selectElement, bodyTable, contributersSection) {
  selectElement.addEventListener('change', () => {
    contributersSection.innerHTML = '';
    data.forEach(element => {
      if (element.name == selectElement.value) {
        const table = ` 
        <tr>
          <td>Repository</td>
          <td>${element.name}</td>
        </tr>
        <tr>
          <td>Description</td>
          <td>${element.description}</td>
         </tr>
         <tr>
          <td>Forks</td>
          <td>${element.forks}</td>
         </tr>
         <tr>
          <td>Updated</td>
          <td>${element.updated_at}</td>
        </tr>`;
        bodyTable.innerHTML = table;

        const url = element.contributors_url;
        fetchContributers(url, contributersSection);
      }
    })
  })
};

function fetchContributers(url, contributersSection) {
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (myJson) {

      myJson.forEach(element => {
        const contItem = document.createElement('div');
        const image = document.createElement('img');
        const gitName = document.createElement('h3');
        const contributionsNum = document.createElement('h4');

        contItem.appendChild(image);
        contItem.appendChild(gitName);
        contItem.appendChild(contributionsNum);

        contributersSection.appendChild(contItem);

        image.src = element.avatar_url;
        gitName.textContent = element.login;
        contributionsNum.textContent = element.contributions;
        contItem.classList.add('items');
      })

    })
    .catch(function (error) {
      const errElement = document.createElement('h3');
      errElement.style.backgroundColor = 'orange';
      errElement.style.color = 'white';
      errElement.style.display = 'block';
      errElement.style.padding = '10px';
      errElement.innerHTML = `
      network request failed
      <br>
      ${error}`;
      contributersSection.parentNode.insertBefore(errElement, contributersSection);
    });
};