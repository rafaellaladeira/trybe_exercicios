const image = document.querySelector('#img'); 
const button = document.querySelector('#btn');
const input = document.querySelector('#input');
const name = document.querySelector('#name');

const fetchPokemon = async () => {
    const pokemonName = input.value;
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon}`);
    const { name: pokeName, sprites } = await response.json();
   
    name.innerText = pokeName;
    image.src = sprites.front_default;
}

button.addEventListener('click', fetchPokemon); 