"use strict";

/*
  Write here your JavaScript for HackYourRepo!
*/
window.onload = main;

function main() {

}
const url = 'https://api.github.com/orgs/HackYourFuture/repos?per_page=100';
const elFactory = (type, attributes, ...children) => {
  const el = document.createElement(type);
  let key;
  for (key in attributes) {
    el.setAttribute(key, attributes[key]);
  };

  children.forEach(child => {
    if (typeof child === 'string') {
      el.appendChild(document.createTextNode(child));
    } else {
      el.appendChild(child);
    }
  });

  return el
};

const container = elFactory('div', {calss: 'container'});
const header = elFactory('section', {id: 'header'}, //Header section
  elFactory('p', {}, 'HYF Repositories'),
  elFactory('select', {calss: 'selectMenu'}
  ));
const bottomBox = elFactory('div', {class: 'bottom-box'});
const leftSide = elFactory('section', {id: 'left-side'});
const card = elFactory('div', {calss: 'card'},    // Leftside table
    elFactory('table', {},
      elFactory('tr', {},
        elFactory('td', {class: 'col-left'}, 'Repositories: '),
        elFactory('td', {class: 'col-right rep-text'}, elFactory('a', {href: '#', class: 'repo-link'}, ))),
      elFactory('tr', {},
        elFactory('td', {class: 'col-left'}, 'Description: '),
        elFactory('td', {class: 'col-right rep-description'}, 'Lorem ipsom')),
      elFactory('tr', {},
        elFactory('td', {class: 'col-left'}, 'Forks: '),
        elFactory('td', {class: 'col-right rep-fork'}, '5')),
      elFactory('tr', {},
        elFactory('td', {class: 'col-left'}, 'Update: '),
        elFactory('td', {class: 'col-right rep-update'}, '2020-05-27 12:00:00'))));


        const rightSide = elFactory('section', {id: 'right-side'},
        elFactory('div', {id: 'contributor'}, 'Contributors'));

// const smallCard = elFactory('div', {class: 'card samll-card'},
//     elFactory('img', {src: '', calss: 'userPhoto', width: '50px'}),
//     elFactory('a', {href: '', class: 'userName'}, ''),
//     elFactory('div', {class: 'badge'}, ''));




leftSide.appendChild(card);
// rightSide.appendChild(smallCard);
container.appendChild(header);
bottomBox.appendChild(leftSide);
bottomBox.appendChild(rightSide)
container.appendChild(bottomBox);
document.body.appendChild(container)

const select = header.querySelector('select');



function addrepoNames(data) {

  data.forEach(element => {
    const option = elFactory('option', {value: ''})
    option.innerHTML = element.name;
    option.value = element.name;
    select.appendChild(option);
  });




  select.addEventListener('input', () => {

    rightSide.innerHTML = ''

    data.forEach(element => {

      if(select.value === element.name) {
        const repoDescription = card.querySelector('.rep-description');
        const repoName = card.querySelector('.repo-link');
        const forks = card.querySelector('.rep-fork');
        const update = card.querySelector('.rep-update');
        repoDescription.innerHTML = element.description;
        repoName.innerHTML = element.name;
        repoName.href = element.html_url;
        forks.innerHTML = element.forks;
        update.innerHTML = element.updated_at;



        const contributorsUrl = element.contributors_url;
        console.log(contributorsUrl);

        fetch(contributorsUrl)
        .then(response => response.json())
        .then(data2 => {
          console.log(data2)
          data2.forEach(element2 => {

            const smallCard = elFactory('div', {class: 'card samll-card'},
            elFactory('img', {src: '', calss: 'userPhoto', width: '50px'}),
            elFactory('a', {href: '', class: 'userName'}, ''),
            elFactory('div', {class: 'badge'}, ''));

            const userName = smallCard.querySelector('.userName');
            const image = smallCard.querySelector('img');
            const badge = smallCard.querySelector('.badge');
            image.src = element2.avatar_url;
            userName.innerHTML = element2.login;
            userName.href = element2.html_url;
            badge.innerHTML = element2.contributions;

            rightSide.appendChild(smallCard)

          })


          })

          // .catch(error => console.log(error))
      }


    })
  })

};



function fetchData(url) {

  fetch(url)
  .then(res => res.json())
  .then(data => addrepoNames(data))


}
fetchData(url);











