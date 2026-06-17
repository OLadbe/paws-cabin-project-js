import{S as a,N as c,P as l,A as p}from"./assets/vendor-Dmbo2n0v.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(e){if(e.ep)return;e.ep=!0;const i=n(e);fetch(e.href,i)}})();const u=document.querySelector("#feedback-list");u&&d();async function d(){try{const s=await fetch("https://paw-hut.b.goit.study/api/feedbacks");if(!s.ok)throw new Error(`HTTP error: ${s.status}`);const t=await s.json();g(t.feedbacks),m()}catch(s){console.error(s)}}function f(s){let t="";for(let r=1;r<=5;r++)s>=r?t+=`
        <svg class="star-icon" width="24" height="24">
          <use href="img/sprite.svg#icon-star-filled"></use>
        </svg>`:s>=r-.5?t+=`
        <svg class="star-icon" width="24" height="24">
          <use href="img/sprite.svg#icon-star-half"></use>
        </svg>`:t+=`
        <svg class="star-icon" width="24" height="24">
          <use href="img/sprite.svg#icon-star-outline"></use>
        </svg>`;return t}function g(s){const t=s.map(({author:n,rate:r,description:e})=>`
      <li class="swiper-slide testimonial-card">
        <div class="raty-stars">
          ${f(r)}
        </div>

        <p class="testimonial-text">
          ${e}
        </p>

        <p class="testimonial-author">
          ${n}
        </p>
      </li>
    `).join("");u.innerHTML=t}function m(){new a(".testimonials-swiper",{modules:[c,l],slidesPerView:1,spaceBetween:16,navigation:{nextEl:".next-btn",prevEl:".prev-btn"},pagination:{el:".swiper-pagination",clickable:!0,dynamicBullets:!0},breakpoints:{768:{slidesPerView:2,spaceBetween:32}}})}new p(".faq-list",{duration:300,showMultiple:!1,openOnInit:[],collapse:!0});new a(".about-swiper",{modules:[c,l],slidesPerView:1,spaceBetween:24,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});
//# sourceMappingURL=index.js.map
