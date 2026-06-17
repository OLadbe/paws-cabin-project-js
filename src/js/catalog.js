// import "/css/styles.css";
// import axios from "axios";

// const api = axios.create({
//   baseURL: "https://paw-hut.b.goit.study/api",
//   timeout: 5000,
//   headers: { "Content-Type": "application/json" },
// });

// document.addEventListener("DOMContentLoaded", () => {
//   const categoriesContainer = document.getElementById("categories-container");
//   const petsGrid = document.getElementById("pets-grid");
//   const loadMoreBtn = document.getElementById("load-more-btn");

//   let currentCategory = "all";
//   let currentPage = 1;

//   function getLimitPerPage() {
//     return window.innerWidth >= 1440 ? 9 : 8;
//   }

//   async function fetchCategories() {
//     try {
//       const response = await api.get("/categories");
//       renderCategories(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   function renderCategories(categories) {
//     if (!categoriesContainer) return;

//     categoriesContainer.innerHTML = "";

//     const allBtn = document.createElement("button");
//     allBtn.classList.add("filter-btn", "active");
//     allBtn.setAttribute("data-category", "all");
//     allBtn.textContent = "Всі";
//     categoriesContainer.appendChild(allBtn);

//     categories.forEach((cat) => {
//       const btn = document.createElement("button");
//       btn.classList.add("filter-btn");
//       btn.setAttribute("data-category", cat._id);
//       btn.textContent = cat.name;
//       categoriesContainer.appendChild(btn);
//     });

//     initFilterListeners();
//   }

//   async function fetchAnimals(append = false) {
//     try {
//       if (!append) {
//         currentPage = 1;
//         if (petsGrid) petsGrid.innerHTML = "";
//       }

//       const params = {
//         page: currentPage,
//         limit: getLimitPerPage(),
//       };

//       if (currentCategory !== "all") {
//         params.categoryId = currentCategory;
//       }

//       const response = await api.get("/animals", { params });
//       const { animals, totalItems, page, limit } = response.data;

//       animals.forEach((animal) => {
//         if (petsGrid) petsGrid.appendChild(createAnimalCard(animal));
//       });

//       if (loadMoreBtn) {
//         const totalPages = Math.ceil(totalItems / limit);
//         loadMoreBtn.disabled = page >= totalPages;
//       }

//       currentPage++;
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   function createAnimalCard(animal) {
//     const card = document.createElement("div");
//     card.classList.add("pet-card");

//     const categoryNames = animal.categories
//       ? animal.categories.map((c) => c.name).join(" &bull; ")
//       : animal.species;

//     card.innerHTML = `
//       <div class="pet-image-wrapper">
//         <img src="${animal.image}" alt="${animal.name}" loading="lazy">
//       </div>
//       <div class="pet-info-block">
//         <div class="pet-card-top-type">${animal.species}</div>
//         <h3 class="pet-name">${animal.name}</h3>
//         <div class="pet-tags-text">${categoryNames}</div>

//         <div class="pet-meta-tags">
//           <span><strong>Вік:</strong> ${animal.age}</span>
//           <span><strong>Стать:</strong> ${animal.gender}</span>
//         </div>

//         <p class="pet-desc">${animal.shortDescription || animal.description}</p>
//         <button class="btn-more" data-id="${animal._id}">Дізнатись більше</button>
//       </div>
//     `;

//     return card;
//   }

//   function initFilterListeners() {
//     if (!categoriesContainer) return;
//     categoriesContainer.addEventListener("click", (e) => {
//       const targetButton = e.target.closest(".filter-btn");
//       if (!targetButton) return;

//       document
//         .querySelectorAll(".filter-btn")
//         .forEach((btn) => btn.classList.remove("active"));
//       targetButton.classList.add("active");

//       currentCategory = targetButton.getAttribute("data-category");
//       fetchAnimals(false);
//     });
//   }

//   if (loadMoreBtn) {
//     loadMoreBtn.addEventListener("click", () => {
//       fetchAnimals(true);
//     });
//   }

//   fetchCategories();
//   fetchAnimals(false);
// });

import '/css/styles.css';
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://paw-hut.b.goit.study/api',
  timeout: 5000,
  headers: { 'Content-Type': 'application/json' },
});

document.addEventListener('DOMContentLoaded', () => {
  const categoriesContainer = document.getElementById('categories-container');
  const petsGrid = document.getElementById('pets-grid');
  const loadMoreBtn = document.getElementById('load-more-btn');

  let currentCategory = 'all';
  let currentPage = 1;

  function getLimitPerPage() {
    return window.innerWidth >= 1440 ? 9 : 8;
  }

  async function fetchCategories() {
    try {
      const response = await api.get('/categories');
      renderCategories(response.data);
    } catch (error) {
      console.error('Помилка при завантаженні категорій:', error);
    }
  }

  function renderCategories(categories) {
    if (!categoriesContainer) return;

    categoriesContainer.innerHTML = '';

    const allBtn = document.createElement('button');
    allBtn.classList.add('filter-btn', 'active');
    allBtn.setAttribute('type', 'button');
    allBtn.setAttribute('data-category', 'all');
    allBtn.textContent = 'Всі';
    categoriesContainer.appendChild(allBtn);

    categories.forEach(cat => {
      const btn = document.createElement('button');
      btn.classList.add('filter-btn');
      btn.setAttribute('type', 'button');
      btn.setAttribute('data-category', cat._id);
      btn.textContent = cat.name;
      categoriesContainer.appendChild(btn);
    });
  }

  async function fetchAnimals(append = false) {
    try {
      if (!append) {
        currentPage = 1;

        if (petsGrid) {
          petsGrid.innerHTML = '';
        }
      }

      const params = {
        page: currentPage,
        limit: getLimitPerPage(),
      };

      if (currentCategory !== 'all') {
        params.categoryId = currentCategory;
      }

      const response = await api.get('/animals', { params });
      const { animals, totalItems, page, limit } = response.data;

      animals.forEach(animal => {
        if (petsGrid) {
          petsGrid.appendChild(createAnimalCard(animal));
        }
      });

      if (loadMoreBtn) {
        const totalPages = Math.ceil(totalItems / limit);
        loadMoreBtn.disabled = page >= totalPages;
      }

      currentPage += 1;
    } catch (error) {
      console.error('Помилка при завантаженні тварин:', error);
    }
  }

  function createAnimalCard(animal) {
    const card = document.createElement('div');
    card.classList.add('pet-card');

    const animalId = animal._id || animal.id || '';
    const animalImg = animal.img || animal.image || animal.photo || '';
    const animalSpecies = animal.species || animal.type || '';
    const animalName = animal.name || '';
    const animalAge = animal.age || '';
    const animalSex = animal.sex || animal.gender || '';
    const animalDescription =
      animal.description ||
      animal.fullDescription ||
      animal.shortDescription ||
      '';
    const animalHealth =
      animal.health ||
      animal.healthDescription ||
      'Інформація про здоров’я уточнюється.';
    const animalBehavior =
      animal.behavior ||
      animal.behaviorDescription ||
      'Інформація про поведінку уточнюється.';

    const categoryNames = animal.categories?.length
      ? animal.categories.map(category => category.name).join(' &bull; ')
      : animalSpecies;

    card.innerHTML = `
      <div class="pet-image-wrapper">
        <img src="${animalImg}" alt="${animalName}" loading="lazy">
      </div>

      <div class="pet-info-block">
        <div class="pet-card-top-type">${animalSpecies}</div>

        <h3 class="pet-name">${animalName}</h3>

        <div class="pet-tags-text">${categoryNames}</div>

        <div class="pet-meta-tags">
          <span><strong>Вік:</strong> ${animalAge}</span>
          <span><strong>Стать:</strong> ${animalSex}</span>
        </div>

        <p class="pet-desc">${animal.shortDescription || animalDescription}</p>

        <button
          class="btn-more"
          type="button"
          data-open-animal-modal
          data-animal-id="${animalId}"
          data-animal-img="${animalImg}"
          data-animal-species="${animalSpecies}"
          data-animal-name="${animalName}"
          data-animal-age="${animalAge}"
          data-animal-sex="${animalSex}"
          data-animal-description="${animalDescription}"
          data-animal-health="${animalHealth}"
          data-animal-behavior="${animalBehavior}"
        >
          Дізнатись більше
        </button>
      </div>
    `;

    return card;
  }

  function initFilterListeners() {
    if (!categoriesContainer) return;

    categoriesContainer.addEventListener('click', event => {
      const targetButton = event.target.closest('.filter-btn');

      if (!targetButton) return;

      document
        .querySelectorAll('.filter-btn')
        .forEach(btn => btn.classList.remove('active'));

      targetButton.classList.add('active');

      currentCategory = targetButton.getAttribute('data-category');
      fetchAnimals(false);
    });
  }

  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
      fetchAnimals(true);
    });
  }

  initFilterListeners();
  fetchCategories();
  fetchAnimals(false);
});
