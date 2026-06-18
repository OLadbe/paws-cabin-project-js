const openModalBtn = document.querySelector('.burger-btn');
const closeModalBtn = document.querySelector('.backdrop-btn-close');
const backdrop = document.querySelector('.backdrop');
const modalLinks = document.querySelectorAll('.modal-link, .nav-modal-btn-take');

openModalBtn.addEventListener('click', () => {
  backdrop.classList.remove('is-hidden');
  document.body.style.overflow = 'hidden';
});

closeModalBtn.addEventListener('click', () => {
  backdrop.classList.add('is-hidden');
  document.body.style.overflow = '';
});

modalLinks.forEach(link => {
  link.addEventListener('click', () => {
    backdrop.classList.add('is-hidden');
      document.body.style.overflow = '';
    const targetId = link.getAttribute('href'); 
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
      setTimeout(() => {
        targetSection.scrollIntoView({
          behavior: 'smooth', 
          block: 'start'
        });
      }, 50);
    }
  });
});
