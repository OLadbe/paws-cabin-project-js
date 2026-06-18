import Swal from 'sweetalert2';
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://paw-hut.b.goit.study',
});

const animalModal = document.querySelector('[data-animal-modal]');
const orderModal = document.querySelector('[data-order-modal]');

const refs = {
  animalModal,
  orderModal,

  animalCloseBtn: animalModal?.querySelector('[data-animal-close]'),
  orderCloseBtn: orderModal?.querySelector('[data-order-close]'),

  adoptBtn: animalModal?.querySelector('[data-adopt-btn]'),
  orderForm: orderModal?.querySelector('[data-order-form]'),

  animalImg: animalModal?.querySelector('[data-animal-img]'),
  animalType: animalModal?.querySelector('[data-animal-type]'),
  animalName: animalModal?.querySelector('[data-animal-name]'),
  animalAge: animalModal?.querySelector('[data-animal-age]'),
  animalSex: animalModal?.querySelector('[data-animal-sex]'),
  animalDescription: animalModal?.querySelector('[data-animal-description]'),
  animalHealth: animalModal?.querySelector('[data-animal-health]'),
  animalBehavior: animalModal?.querySelector('[data-animal-behavior]'),
};

let currentAnimalId = null;
let initialized = false;

export function initModals() {
  if (!refs.animalModal || !refs.orderModal || !refs.orderForm) {
    console.warn('Модальні вікна або форма не знайдені в DOM');
    return;
  }

  if (initialized) return;
  initialized = true;

  document.addEventListener('click', onDocumentClick);

  refs.animalCloseBtn?.addEventListener('click', closeAnimalModal);
  refs.orderCloseBtn?.addEventListener('click', closeOrderModal);

  refs.animalModal.addEventListener('click', onAnimalBackdropClick);
  refs.orderModal.addEventListener('click', onOrderBackdropClick);

  refs.adoptBtn?.addEventListener('click', onAdoptBtnClick);
  refs.orderForm.addEventListener('submit', onOrderFormSubmit);
}

function onDocumentClick(event) {
  const openAnimalBtn = event.target.closest('[data-open-animal-modal]');

  if (!openAnimalBtn) return;

  const animal = getAnimalFromButton(openAnimalBtn);

  if (!animal._id) {
    console.warn('На кнопці не знайдено data-animal-id');
    return;
  }

  openAnimalModal(animal);
}

function getAnimalFromButton(button) {
  return {
    _id: button.dataset.animalId || '',
    img: button.dataset.animalImg || '',
    species: button.dataset.animalSpecies || '',
    name: button.dataset.animalName || '',
    age: button.dataset.animalAge || '',
    sex: button.dataset.animalSex || '',
    description: button.dataset.animalDescription || '',
    health: button.dataset.animalHealth || '',
    behavior: button.dataset.animalBehavior || '',
  };
}

function openAnimalModal(animal) {
  currentAnimalId = animal._id;

  renderAnimalModal(animal);

  refs.animalModal.classList.add('is-open');
  document.body.classList.add('no-scroll');

  document.addEventListener('keydown', onEscKeyPress);
}

function closeAnimalModal() {
  refs.animalModal.classList.remove('is-open');

  if (!isAnyModalOpen()) {
    document.body.classList.remove('no-scroll');
    document.removeEventListener('keydown', onEscKeyPress);
  }
}

function openOrderModal() {
  refs.orderModal.classList.add('is-open');
  document.body.classList.add('no-scroll');

  document.addEventListener('keydown', onEscKeyPress);
}

function closeOrderModal() {
  refs.orderModal.classList.remove('is-open');
  refs.orderForm.reset();

  if (!isAnyModalOpen()) {
    document.body.classList.remove('no-scroll');
    document.removeEventListener('keydown', onEscKeyPress);
  }
}

function onAdoptBtnClick() {
  closeAnimalModal();
  openOrderModal();
}

function onAnimalBackdropClick(event) {
  if (event.target === event.currentTarget) {
    closeAnimalModal();
  }
}

function onOrderBackdropClick(event) {
  if (event.target === event.currentTarget) {
    closeOrderModal();
  }
}

function onEscKeyPress(event) {
  if (event.key !== 'Escape') return;

  if (refs.orderModal.classList.contains('is-open')) {
    closeOrderModal();
    return;
  }

  if (refs.animalModal.classList.contains('is-open')) {
    closeAnimalModal();
  }
}

async function onOrderFormSubmit(event) {
  event.preventDefault();

  const formData = new FormData(refs.orderForm);
  const orderData = {
  name: formData.get('name')?.trim() || '',
  phone: formData.get('phone')?.trim() || '',
  animalId: currentAnimalId,
};

const comment = formData.get('comment')?.trim();
if (comment) {
  orderData.comment = comment;
};

const phoneRegex = /^380\d{9}$/;
const nameRegex = /^[A-Za-zА-Яа-яІіЇїЄєҐґ'\-\s]{2,50}$/;

if (!orderData.name) {
  showValidationError("Введіть ім’я.");
  return;
}

if (!nameRegex.test(orderData.name)) {
  showValidationError(
    "Ім’я повинно містити від 2 до 50 літер."
  );
  return;
}

if (!orderData.phone) {
  showValidationError('Введіть номер телефону.');
  return;
}

if (!phoneRegex.test(orderData.phone)) {
  showValidationError(
    'Номер телефону має бути у форматі 380XXXXXXXXX.'
  );
  return;
}

if (!orderData.animalId) {
  showValidationError('Не вибрано тваринку.');
  return;
}

  const submitBtn = refs.orderForm.querySelector('[type="submit"]');

  try {
    submitBtn.disabled = true;
    submitBtn.textContent = 'Надсилання...';

    const result = await createOrder(orderData);

    Swal.fire({
      icon: 'success',
      title: 'Заявку надіслано',
      text: result.orderNum
        ? `Номер заявки: ${result.orderNum}`
        : 'Ми зв’яжемося з вами найближчим часом.',
      confirmButtonText: 'Добре',
    });

    closeOrderModal();
    currentAnimalId = null;
  } catch (error) {
    console.error('Помилка при створенні заявки:', error);

    Swal.fire({
      icon: 'error',
      title: 'Помилка',
      text: 'Не вдалося надіслати заявку. Спробуйте ще раз.',
      confirmButtonText: 'Добре',
    });
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = 'Надіслати';
  }
}

function showValidationError(message) {
  Swal.fire({
    icon: 'warning',
    title: 'Некоректні дані',
    text: message,
    confirmButtonText: 'Добре',
  });
}


async function createOrder(orderData) {
  const response = await instance.post('/api/orders', orderData);
  return response.data;
}

function renderAnimalModal(animal) {
  refs.animalImg.src = animal.img;
  refs.animalImg.alt = animal.name || 'Фото тваринки';

  refs.animalType.textContent = animal.species;
  refs.animalName.textContent = animal.name;
  refs.animalAge.textContent = animal.age;
  refs.animalSex.textContent = animal.sex;
  refs.animalDescription.textContent = animal.description;
  refs.animalHealth.textContent = animal.health;
  refs.animalBehavior.textContent = animal.behavior;
}

function isAnyModalOpen() {
  return (
    refs.animalModal.classList.contains('is-open') ||
    refs.orderModal.classList.contains('is-open')
  );
}
