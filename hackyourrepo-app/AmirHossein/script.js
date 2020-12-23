"use strict";

/*
  Write here your JavaScript for HackYourRepo!
*/
const elFactory = (type, attributes, ...children) => {
  const el = document.createElement(type)
  let key;
  for (key in attributes) {
    el.setAttribute(key, attributes[key])
  }

  children.forEach(child => {
    if (typeof child === 'string') {
      el.appendChild(document.createTextNode(child))
    } else {
      el.appendChild(child)
    }
  })

  return el
}

const container = elFactory('div', {calss: 'container'},
  elFactory('section', {id: 'header'},
    elFactory('p', {}, 'HYF Repositories'),
    elFactory('select', {calss: 'selectMenu'},
    elFactory('option', {value: ''}, 'alumni'))),
  elFactory('div', {class: 'bottom-box'},
    elFactory('section', {id: 'left-side'},
      elFactory('div', {calss: 'card'},
        elFactory('table', {},
          elFactory('tr', {},
            elFactory('td', {class: 'col-left'}, 'Repositories: '),
            elFactory('td', {class: 'col-right rep-text'}, elFactory('a', {href: '#', class: 'repo-link'}, 'SampleRepo1')) ),
          elFactory('tr', {},
            elFactory('td', {class: 'col-left'}, 'Description: '),
            elFactory('td', {class: 'col-right rep-description'}, 'Lorem ipsom')),
          elFactory('tr', {},
            elFactory('td', {class: 'col-left'}, 'Forks: '),
            elFactory('td', {class: 'col-right rep-fork'}, '5')),
          elFactory('tr', {},
            elFactory('td', {class: 'col-left'}, 'Update: '),
            elFactory('td', {class: 'col-right rep-update'}, '2020-05-27 12:00:00'))))))
    );

  console.log(container);
const select = container.querySelector('select')
const para = container.querySelector('p')
console.log(para)


const header = container.querySelector('p')


document.body.appendChild(container)










// const container = document.createElement('div');
// container.classList.add('container');
// const header = document.createElement('section');
// const title = document.createElement('')
// const selectMenu = document.createElement('select');

