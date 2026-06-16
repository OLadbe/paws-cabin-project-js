

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



const feedbackList = document.querySelector('#feedback-list');

 if (feedbackList) {
  getFeedbacks();
}


async function getFeedbacks() {
  try {
    const response = await fetch(
  'https://paw-hut.b.goit.study/api/feedbacks'
);

if (!response.ok) {
  throw new Error(`HTTP error: ${response.status}`);
}

    const data = await response.json();

    renderFeedbacks(data.feedbacks);
    initSwiper();
  } catch (error) {
    console.error(error);
  }
}




function renderFeedbacks(feedbacks) {
  const markup = feedbacks
    .map(
      ({ author, rate, description }) => `
      <li class="swiper-slide testimonial-card">
        <div class="rating">${rate}</div>

        <p class="testimonial-text">
          ${description}
        </p>

        <p class="testimonial-author">
          ${author}
        </p>
      </li>
    `
    )
    .join('');

  feedbackList.innerHTML = markup;
}

function initSwiper() {
  new Swiper('.testimonials-swiper', {
    modules: [Navigation, Pagination],

    slidesPerView: 1,
    spaceBetween: 16,

    navigation: {
      nextEl: '.next-btn',
      prevEl: '.prev-btn',
    },

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },

    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 32,
      },
    },
  });
}
