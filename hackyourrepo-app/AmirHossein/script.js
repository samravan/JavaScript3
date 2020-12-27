"use strict";

/*
  Write here your JavaScript for HackYourRepo!
*/
window.onload = main;

function main() {
  const url = 'https://api.github.com/orgs/HackYourFuture/repos?per_page=100'; // The repositories API
  const elFactory = (type, attributes, ...children) => {    // Function for creating elements
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

  const container = elFactory('div', {class: 'container'});
  const header = elFactory('section', {id: 'header'},
    elFactory('p', {}, 'HYF Repositories'),
    elFactory('select', {class: 'selectMenu'}
    ));
  const bottomBox = elFactory('div', {class: 'bottom-box'});
  const errorBox = elFactory('div', {id: 'error'});
  const leftSide = elFactory('section', {id: 'left-side'});
  const card = elFactory('div', {class: 'card'},    // Cards that inserted to the left box.
      elFactory('table', {},
        elFactory('tr', {},
          elFactory('td', {class: 'col-left'}, 'Repositories: '),
          elFactory('td', {class: 'col-right rep-text'}, elFactory('a', {href: '#', class: 'repo-link'}, ))),
        elFactory('tr', {},
          elFactory('td', {class: 'col-left'}, 'Description: '),
          elFactory('td', {class: 'col-right rep-description'}, '')),
        elFactory('tr', {},
          elFactory('td', {class: 'col-left'}, 'Forks: '),
          elFactory('td', {class: 'col-right rep-fork'}, '')),
        elFactory('tr', {},
          elFactory('td', {class: 'col-left'}, 'Update: '),
          elFactory('td', {class: 'col-right rep-update'}, ''))));

  const rightSide = elFactory('section', {id: 'right-side'},
    elFactory('div', {id: 'contributor'}, 'Contributors'));
  const select = header.querySelector('select');
  const cardName = elFactory('div', {id: 'cardNameBox'}); // Box to add small cards of contributors
  container.appendChild(header);
  container.appendChild(errorBox);
  bottomBox.appendChild(leftSide);
  bottomBox.appendChild(rightSide);
  leftSide.appendChild(card);
  rightSide.appendChild(cardName);
  container.appendChild(bottomBox);
  document.body.appendChild(container)

  // Adding repository names to the select element.
  function addrepoNames(data) {
    data.forEach(element => {
      const option = elFactory('option', {value: ''})
      option.innerHTML = element.name;
      option.value = element.name;

      select.appendChild(option);
    });

    // Function to fetch data for items in select elemen.
    select.addEventListener('input', () => {
      document.querySelector('#left-side').style.display = 'block';
      document.querySelector('#contributor').style.display = 'block';
      cardName.innerHTML = ''
      // IF the value of option is equal to element name this function will work.
      // Despite showing error this section still works! I don't know how should I fix it.
      data.forEach(element => {
        if(select.value == element.name) {
          // Adding items to description part
          const repoDescription = card.querySelector('.rep-description');
          const repoName = card.querySelector('.repo-link');
          const forks = card.querySelector('.rep-fork');
          const update = card.querySelector('.rep-update');
          repoDescription.innerHTML = element.description;
          repoName.innerHTML = element.name;
          repoName.href = element.html_url;
          forks.innerHTML = element.forks;
          update.innerHTML = element.updated_at;

          const contributorsUrl = element.contributors_url;   // URL of contributors
          fetch(contributorsUrl)
          .then(response => response.json())

          // Creat and adding contributors name to the right side of the page.
          .then(data2 => {
            data2.forEach(element2 => {
              const smallCard = elFactory('div', {class: 'card small-card'},
              elFactory('img', {src: '', class: 'userPhoto', width: '50px'}),
              elFactory('a', {href: '', class: 'userName'}, ''),
              elFactory('div', {class: 'badge'}, ''));
              const userName = smallCard.querySelector('.userName');
              const image = smallCard.querySelector('img');
              const badge = smallCard.querySelector('.badge');
              image.src = element2.avatar_url;
              userName.innerHTML = element2.login;
              userName.href = element2.html_url;
              badge.innerHTML = element2.contributions;
              document.getElementById('error').style.display = 'none';
              cardName.appendChild(smallCard)
            })
            })
            .catch(error => {
              errorBox.innerHTML = error;
              document.getElementById('error').style.display = 'block';
            })
            console.log(container)
        }
      })
    })

  };
  function fetchData() {
    fetch(url)
    .then(res => res.json())
    .then(data => addrepoNames(data))
    .catch(error => {
      errorBox.innerHTML = error;
      document.getElementById('error').style.display = 'block';
    })
  }
  fetchData();

}












