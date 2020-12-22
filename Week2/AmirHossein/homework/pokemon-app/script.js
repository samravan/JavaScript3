function main(fetchData, addPokemonToDOM) {

}


function fetchData() {
    fetch('https://pokeapi.co/api/v2/pokemon/1')
    .then(function(res){
        console.log(res)
    })

}