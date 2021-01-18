export function addContributerToDOM(contributersSection, data, showArray) {
  showArray.forEach(element => {
    const contItem = document.createElement('div');
    const image = document.createElement('img');
    const link = document.createElement('a');
    const gitName = document.createElement('h3');
    const contributionsNum = document.createElement('h4');

    link.appendChild(image);
    contItem.appendChild(link);
    contItem.appendChild(gitName);
    contItem.appendChild(contributionsNum);
    contributersSection.appendChild(contItem);

    link.style.width = '100px'
    link.href = data[element].html_url;
    image.src = data[element].avatar_url;
    gitName.textContent = data[element].login;
    contributionsNum.textContent = data[element].contributions;
    contItem.classList.add('items');
  })
}