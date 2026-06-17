const openModalBtn = document.querySelector('.burger-btn');
const closeModalBtn = document.querySelector('.backdrop-btn-close');
const backdrop = document.querySelector('.backdrop');

openModalBtn.addEventListener('click', () => {
  backdrop.classList.remove('is-hidden');
  document.body.style.overflow = 'hidden';
});

closeModalBtn.addEventListener('click', () => {
  backdrop.classList.add('is-hidden');
  document.body.style.overflow = '';
});
