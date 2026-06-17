import{S as c,N as l,P as u,A as d}from"./assets/vendor-Dmbo2n0v.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const a="/paws-cabin-project-js/assets/sprite-BBjMloQY.svg",p=document.querySelector("#feedback-list");p&&f();async function f(){try{const s=await fetch("https://paw-hut.b.goit.study/api/feedbacks");if(!s.ok)throw new Error(`HTTP error: ${s.status}`);const t=await s.json();g(t.feedbacks),h()}catch(s){console.error(s)}}function w(s){let t="";for(let i=1;i<=5;i++)s>=i?t+=`
        <svg class="star-icon" width="24" height="24">
          <use href="${a}#icon-star-full"></use> 
        </svg>`:s>=i-.5?t+=`
        <svg class="star-icon" width="24" height="24">
          <use href="${a}#icon-star-half"></use>
        </svg>`:t+=`
        <svg class="star-icon" width="24" height="24">
          <use href="${a}#icon-star-empty"></use>
        </svg>`;return t}function g(s){const t=s.map(({author:n,rate:i,description:e})=>`
      <li class="swiper-slide testimonial-card">
        <div class="raty-stars">
          ${w(i)}
        </div>

        <p class="testimonial-text">
          ${e}
        </p>

        <p class="testimonial-author">
          ${n}
        </p>
      </li>
    `).join("");p.innerHTML=t}function h(){new c(".testimonials-swiper",{modules:[l,u],slidesPerView:1,spaceBetween:16,navigation:{nextEl:".next-btn",prevEl:".prev-btn"},pagination:{el:".swiper-pagination",clickable:!0,dynamicBullets:!0},breakpoints:{768:{slidesPerView:2,spaceBetween:32}}})}new d(".faq-list",{duration:300,showMultiple:!1,openOnInit:[],collapse:!0});new c(".about-swiper",{modules:[l,u],slidesPerView:1,spaceBetween:24,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});
//# sourceMappingURL=index.js.map
