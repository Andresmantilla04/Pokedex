// Constantes y variables
const apiUrl = 'https://storage.googleapis.com/campus-cvs/00000000000-images-lectures/pokemons.json';
let pokemons = [];
let filteredPokemons = [];

// Obtener elementos del DOM
const searchInput = document.getElementById('search');
const cardsContainer = document.getElementById('cards-container');
const modal = document.getElementById('modal');
const modalContent = document.getElementById('modal-content');

// Funciones auxiliares
const fetchPokemons = async () => {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    pokemons = data;
    filteredPokemons = pokemons;
    renderCards();
  } catch (error) {
    console.error(error);
  }
};

const renderCards = () => {
  cardsContainer.innerHTML = '';

  if (filteredPokemons.length === 0) {
    cardsContainer.innerHTML = '<p>No se encontraron resultados.</p>';
    return;
  }

  filteredPokemons.forEach(pokemon => {
    const { name, type, image } = pokemon;
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <div class="card-image">
        <img src="${image}" alt="${name}">
      </div>
      <div class="card-content">
        <h3>${name}</h3>
        <p>${type}</p>
      </div>
    `;
    card.addEventListener('click', () => openModal(pokemon));
    cardsContainer.appendChild(card);
  });
};

const openModal = (pokemon) => {
  const { name, weight, height, type, image, abilities, moves } = pokemon;
  modalContent.innerHTML = `
    <div class="modal-image">
      <img src="${image}" alt="${name}">
    </div>
    <div class="modal-content">
      <h2>${name}</h2>
      <p><strong>Tipo:</strong> ${type}</p>
      <p><strong>Peso:</strong> ${weight} kg</p>
      <p><strong>Altura:</strong> ${height} m</p>
      <p><strong>Habilidades:</strong> ${abilities.join(', ')}</p>
      <p><strong>Movimientos:</strong> ${moves.join(', ')}</p>
    </div>
  `;
  modal.classList.add('active');
};

const closeModal = () => {
  modal.classList.remove('active');
};

const filterPokemons = (searchText) => {
  filteredPokemons = pokemons.filter((pokemon) => {
    const name = pokemon.name.toLowerCase();
    const type = pokemon.type.toLowerCase();
    const searchTerm = searchText.toLowerCase();
    return name.includes(searchTerm) || type.includes(searchTerm);
  });
  renderCards();
};

// Eventos
searchInput.addEventListener('input', (event) => {
  const searchText = event.target.value;
  filterPokemons(searchText);
});

modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

// Inicialización
fetchPokemons();
