window.onload = main;
function main() {
    const url = 'https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20'
    const btn = document.createElement('button');
    btn.innerHTML = 'Get Pokemon!'
    document.body.appendChild(btn);
    const select = document.createElement('select');
    document.body.appendChild(select);
    btn.addEventListener('click', () => [
        fetchData(url, select)
    ]);
}

function addPokemonToDOM(data, select) {
    data.results.forEach(element => {
        const option = document.createElement('option');
        option.innerHTML = element.name;
        option.value = element.name;
        select.appendChild(option);

    });
    let image = document.createElement('img');
    select.addEventListener('input', () => {
        data.results.forEach(element => {
            if(select.value == element.name) {
                const pokUrl = element.url;
                image.src = ''
                fetch(pokUrl)
                .then(response => response.json())
                .then(data => {
                    image.src = data.sprites.front_default;
                    document.body.appendChild(image);
                })
                .catch(error => console.log(error))
            }


        })
    } )
}

function fetchData(url, select) {
    fetch(url)
    .then(res => res.json())
    .then(data => addPokemonToDOM(data, select))
    .catch(error => console.log(error));

}

