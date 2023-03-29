const pokemons = [
	{name: "Bulbasaur", description: "Bulbasaur puede ser visto durmiendo bajo una luz solar intensa. Existen bulbos en su espalda que crecen desde que nace. Al absorber nutrientes, los bulbos florecen lentamente en flores hermosas.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"},
	{name: "Charmander", description: "Charmander prefiere las cosas calientes. Si está lloviendo, el fuego en su punta de cola se apagará.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"},
	{name: "Squirtle", description: "Squirtle tiene una concha que cubre su cuerpo. Cuando se siente en peligro, se esconde dentro de la concha y rocía agua desde su boca.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"},
];  

let currentPokemon = 0;

const pokeImage = document.getElementById("poke-image");
const pokeName = document.getElementById("poke-name");
const pokeDescription = document.getElementById("poke-description");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");

function displayPokemon() {
	pokeImage.src = pokemons[currentPokemon].image;
	pokeName.innerText = pokemons[currentPokemon].name;
	pokeDescription.innerText = pokemons[currentPokemon].description;
}

function nextPokemon() {
	currentPokemon++;
	if (currentPokemon >= pokemons.length) {
		currentPokemon = 0;
	}
	displayPokemon();
}

function prevPokemon() {
	currentPokemon--;
	if (currentPokemon < 0) {
		currentPokemon = pokemons.length - 1;
	}
	displayPokemon();
}

displayPokemon();
