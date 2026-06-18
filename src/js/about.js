import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const aboutSwiper = new Swiper('.about-swiper', {
  modules: [Navigation, Pagination],

  slidesPerView: 1,
  spaceBetween: 24,

  pagination: {
    el: '.about-swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.about-swiper-button-next',
    prevEl: '.about-swiper-button-prev',
  },
});
