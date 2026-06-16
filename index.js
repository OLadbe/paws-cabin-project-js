import{S as a,N as c,P as l,A as u}from"./assets/vendor-Dmbo2n0v.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const p=document.querySelector("#feedback-list");p&&d();async function d(){try{const i=await fetch("https://paw-hut.b.goit.study/api/feedbacks");if(!i.ok)throw new Error(`HTTP error: ${i.status}`);const r=await i.json();console.log(r.feedbacks),f(r.feedbacks),w()}catch(i){console.error(i)}}function f(i){const r=i.map(({author:n,rate:s,description:e})=>`
      <li class="swiper-slide testimonial-card">
        <div class="rating">${s}</div>

        <p class="testimonial-text">
          ${e}
        </p>

        <p class="testimonial-author">
          ${n}
        </p>
      </li>
    `).join("");p.innerHTML=r}function w(){new a(".testimonials-swiper",{modules:[c,l],slidesPerView:1,spaceBetween:16,navigation:{nextEl:".next-btn",prevEl:".prev-btn"},pagination:{el:".swiper-pagination",clickable:!0,dynamicBullets:!0},breakpoints:{768:{slidesPerView:2,spaceBetween:32}}})}new u(".faq-list",{duration:300,showMultiple:!1,openOnInit:[],collapse:!0});new a(".about-swiper",{modules:[c,l],slidesPerView:1,spaceBetween:24,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});
//# sourceMappingURL=index.js.map
