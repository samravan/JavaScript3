//Calling main function after window load
window.onload = main;

//Define main function
function main() {
  //Define button element
  const btn = document.createElement('button');
  btn.textContent = 'start';
  btn.style.display = 'block';
  document.body.appendChild(btn);

  // Define select element
  const select = document.createElement('select');
  select.style.display = 'block';
  document.body.appendChild(select);

  //Define image
  const img = document.createElement('img');

  //When button is clicked
  btn.addEventListener('click', () => {
    const url = `https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20`;//Define API URL
    fetchData(url, select, img); // Get data from API and insert to DOM
  });
}

// Add data to DOM
function addPokemonToDOM(data, select, img) {

  //Add list to select tag
  data.results.forEach(element => {
    const option = document.createElement('option');
    option.value = element.name;
    option.textContent = element.name;
    select.appendChild(option);
  });

  //User selection 
  select.addEventListener('input', () => {
    data.results.forEach(element => {
      if (select.value == element.name) {
        const imgURL = element.url;
        fetch(imgURL) // second API request to get image
          .then(function (response) {
            return response.json();
          })
          .then(function (myJson) {
            img.src = myJson.sprites.back_default;
            document.body.appendChild(img);
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    })
  })
};

//Get data from API by using fetch API
function fetchData(url, select, img) {
  fetch(url) // First getting data
    .then(function (response) {
      return response.json();
    })
    .then(function (myJson) {
      addPokemonToDOM(myJson, select, img); // Add data to DOM
    })
    .catch(function (error) {
      console.log(error);
    });
};