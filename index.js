import{S as m,N as h,P as b,A as B,a as C}from"./assets/vendor-CWvqPx2T.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function o(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(t){if(t.ep)return;t.ep=!0;const a=o(t);fetch(t.href,a)}})();const f="/paws-cabin-project-js/assets/sprite-BBjMloQY.svg",v=document.querySelector("#feedback-list");v&&M();async function M(){try{const s=await fetch("https://paw-hut.b.goit.study/api/feedbacks");if(!s.ok)throw new Error(`HTTP error: ${s.status}`);const r=await s.json();k(r.feedbacks),A()}catch(s){console.error(s)}}function x(s){let r="";for(let n=1;n<=5;n++)s>=n?r+=`
        <svg class="star-icon" width="24" height="24">
          <use href="${f}#icon-star-filled"></use> 
        </svg>`:s>=n-.5?r+=`
        <svg class="star-icon" width="24" height="24">
          <use href="${f}#icon-star-half"></use>
        </svg>`:r+=`
        <svg class="star-icon" width="24" height="24">
          <use href="${f}#icon-star-outline"></use>
        </svg>`;return r}function k(s){const r=s.map(({author:o,rate:n,description:t})=>`
      <li class="swiper-slide testimonial-card">
        <div class="raty-stars">
          ${x(n)}
        </div>

        <p class="testimonial-text">
          ${t}
        </p>

        <p class="testimonial-author">
          ${o}
        </p>
      </li>
    `).join("");v.innerHTML=r}function A(){new m(".testimonials-swiper",{modules:[h,b],slidesPerView:1,spaceBetween:16,navigation:{nextEl:".next-btn",prevEl:".prev-btn"},pagination:{el:".swiper-pagination",clickable:!0,dynamicBullets:!0},breakpoints:{768:{slidesPerView:2,spaceBetween:32}}})}new B(".faq-list",{duration:300,showMultiple:!1,openOnInit:[],collapse:!0});new m(".about-swiper",{modules:[h,b],slidesPerView:1,spaceBetween:24,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});const g=C.create({baseURL:"https://paw-hut.b.goit.study/api",timeout:5e3,headers:{"Content-Type":"application/json"}});document.addEventListener("DOMContentLoaded",()=>{const s=document.getElementById("categories-container"),r=document.getElementById("pets-grid"),o=document.getElementById("load-more-btn");let n="all",t=1;function a(){return window.innerWidth>=1440?9:8}async function d(){try{const e=await g.get("/categories");w(e.data)}catch(e){console.error(e)}}function w(e){if(!s)return;s.innerHTML="";const i=document.createElement("button");i.classList.add("filter-btn","active"),i.setAttribute("data-category","all"),i.textContent="Всі",s.appendChild(i),e.forEach(c=>{const l=document.createElement("button");l.classList.add("filter-btn"),l.setAttribute("data-category",c._id),l.textContent=c.name,s.appendChild(l)}),L()}async function p(e=!1){try{e||(t=1,r&&(r.innerHTML=""));const i={page:t,limit:a()};n!=="all"&&(i.categoryId=n);const c=await g.get("/animals",{params:i}),{animals:l,totalItems:E,page:$,limit:P}=c.data;if(l.forEach(u=>{r&&r.appendChild(y(u))}),o){const u=Math.ceil(E/P);o.disabled=$>=u}t++}catch(i){console.error(i)}}function y(e){const i=document.createElement("div");i.classList.add("pet-card");const c=e.categories?e.categories.map(l=>l.name).join(" &bull; "):e.species;return i.innerHTML=`
      <div class="pet-image-wrapper">
        <img src="${e.image}" alt="${e.name}" loading="lazy">
      </div>
      <div class="pet-info-block">
        <div class="pet-card-top-type">${e.species}</div>
        <h3 class="pet-name">${e.name}</h3>
        <div class="pet-tags-text">${c}</div>
        
        <div class="pet-meta-tags">
          <span><strong>Вік:</strong> ${e.age}</span>
          <span><strong>Стать:</strong> ${e.gender}</span>
        </div>
        
        <p class="pet-desc">${e.shortDescription||e.description}</p>
        <button class="btn-more" data-id="${e._id}">Дізнатись більше</button>
      </div>
    `,i}function L(){s&&s.addEventListener("click",e=>{const i=e.target.closest(".filter-btn");i&&(document.querySelectorAll(".filter-btn").forEach(c=>c.classList.remove("active")),i.classList.add("active"),n=i.getAttribute("data-category"),p(!1))})}o&&o.addEventListener("click",()=>{p(!0)}),d(),p(!1)});
//# sourceMappingURL=index.js.map
