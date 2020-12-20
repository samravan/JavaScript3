//Calling main function after window load
window.onload = main;

//Define main function
function main(data) {
  // Define input element
  const input = document.createElement('input');
  input.type = 'number';
  input.min = '1';
  input.max = '895';
  input.style.width = '110px';
  input.placeholder = 'Insert a number';
  document.body.appendChild(input);

  //Define button element
  const btn = document.createElement('button');
  btn.textContent = 'start';
  btn.style.display = 'block';
  document.body.appendChild(btn);

  //When button is clicked
  btn.addEventListener('click', () => {
    if (input.value > 0 && input.value < 896) { //Check input
      const url = `https://pokeapi.co/api/v2/pokemon/${input.value}`;//Define API URL
      fetchData(url); // Get data from API and insert to DOM
    } else {
      alert('Your input number must be between 0 and 895!')
    };
  });
};

// Add data to DOM
function addPokemonToDOM(data) {
  // Define img element
  const imgSRC = data.sprites.back_default
  const image = document.createElement('img');
  image.src = imgSRC;
  document.body.appendChild(image);
  //disapear img element after 1.5 second
  window.setTimeout(() => {
    document.body.removeChild(image);
  }, 1500);
};

//Get data from API by using fetch API
function fetchData(url) {
  fetch(url) // First getting data
    .then(function (response) {
      return response.json();
    })
    .then(function (myJson) {
      addPokemonToDOM(myJson); // Add data to DOM
      return fetch(url); //Second getting data
    })
    .then((response => {
      return response.json();
    }))
    .then((myJson) => {
      addPokemonToDOM(myJson);// Add data to DOM
    })
    .catch(function (error) {
      console.log('error:' + error);
    });
};