import './css/styles.css';

import './js/about.js';
import './js/catalog.js';
import './js/faq.js';
import './js/navbar.js';
import './js/reviews.js';

import { initModals } from './js/modals.js';

initModals();
// ===== LOADER CONTROL =====
const loader = document.getElementById('loader');

let activeRequests = 0;

function showLoader() {
  loader.style.display = 'flex';
}

function hideLoader() {
  loader.style.display = 'none';
}

function startRequest() {
  activeRequests++;
  showLoader();
}

function endRequest() {
  activeRequests--;

  if (activeRequests <= 0) {
    activeRequests = 0;
    hideLoader();
  }
}

async function api(url, options = {}) {
  startRequest();

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('API error:', error);
    throw error;
  } finally {
    endRequest();
  }
}

const petsSection = document.querySelector('.pets-section');

if (petsSection) {
  petsSection.addEventListener('click', async () => {
    try {
      const data = await api('/api/pets');

      console.log('Pets data:', data);
    } catch (err) {
      console.log('Не вдалося завантажити pets');
    }
  });
}

window.addEventListener('load', () => {
  hideLoader();
});
