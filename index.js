import{S as m,N as h,P as b,A as B,a as M}from"./assets/vendor-CWvqPx2T.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function a(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=a(t);fetch(t.href,o)}})();const f="/paws-cabin-project-js/assets/sprite-BBjMloQY.svg",v=document.querySelector("#feedback-list");v&&C();async function C(){try{const s=await fetch("https://paw-hut.b.goit.study/api/feedbacks");if(!s.ok)throw new Error(`HTTP error: ${s.status}`);const n=await s.json();x(n.feedbacks),A()}catch(s){console.error(s)}}function S(s){let n="";for(let i=1;i<=5;i++)s>=i?n+=`
        <svg class="star-icon" width="24" height="24">
          <use href="${f}#icon-star-filled"></use> 
        </svg>`:s>=i-.5?n+=`
        <svg class="star-icon" width="24" height="24">
          <use href="${f}#icon-star-half"></use>
        </svg>`:n+=`
        <svg class="star-icon" width="24" height="24">
          <use href="${f}#icon-star-outline"></use>
        </svg>`;return n}function x(s){const n=s.map(({author:a,rate:i,description:t})=>`
      <li class="swiper-slide testimonial-card">
        <div class="raty-stars">
          ${S(i)}
        </div>

        <p class="testimonial-text">
          ${t}
        </p>

        <p class="testimonial-author">
          ${a}
        </p>
      </li>
    `).join("");v.innerHTML=n}function A(){new m(".testimonials-swiper",{modules:[h,b],slidesPerView:1,spaceBetween:16,navigation:{nextEl:".next-btn",prevEl:".prev-btn"},pagination:{el:".swiper-pagination",clickable:!0,dynamicBullets:!0},breakpoints:{768:{slidesPerView:2,spaceBetween:32}}})}new B(".faq-list",{duration:300,showMultiple:!1,openOnInit:[],collapse:!0});new m(".about-swiper",{modules:[h,b],slidesPerView:1,spaceBetween:24,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});const T=document.querySelector(".burger-btn"),O=document.querySelector(".backdrop-btn-close"),y=document.querySelector(".backdrop");T.addEventListener("click",()=>{y.classList.remove("is-hidden"),document.body.style.overflow="hidden"});O.addEventListener("click",()=>{y.classList.add("is-hidden"),document.body.style.overflow=""});const g=M.create({baseURL:"httpі://paw-hut.b.goit.study/api",timeout:5e3,headers:{"Content-Type":"application/json"}});document.addEventListener("DOMContentLoaded",()=>{const s=document.getElementById("categories-container"),n=document.getElementById("pets-grid"),a=document.getElementById("load-more-btn");let i="all",t=1;function o(){return window.innerWidth>=1440?9:8}async function l(){try{const e=await g.get("/categories");w(e.data)}catch(e){console.error(e)}}function w(e){if(!s)return;s.innerHTML="";const r=document.createElement("button");r.classList.add("filter-btn","active"),r.setAttribute("data-category","all"),r.textContent="Всі",s.appendChild(r),e.forEach(c=>{const d=document.createElement("button");d.classList.add("filter-btn"),d.setAttribute("data-category",c._id),d.textContent=c.name,s.appendChild(d)}),E()}async function p(e=!1){try{e||(t=1,n&&(n.innerHTML=""));const r={page:t,limit:o()};i!=="all"&&(r.categoryId=i);const c=await g.get("/animals",{params:r}),{animals:d,totalItems:$,page:P,limit:k}=c.data;if(d.forEach(u=>{n&&n.appendChild(L(u))}),a){const u=Math.ceil($/k);a.disabled=P>=u}t++}catch(r){console.error(r)}}function L(e){const r=document.createElement("div");r.classList.add("pet-card");const c=e.categories?e.categories.map(d=>d.name).join(" &bull; "):e.species;return r.innerHTML=`
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
    `,r}function E(){s&&s.addEventListener("click",e=>{const r=e.target.closest(".filter-btn");r&&(document.querySelectorAll(".filter-btn").forEach(c=>c.classList.remove("active")),r.classList.add("active"),i=r.getAttribute("data-category"),p(!1))})}a&&a.addEventListener("click",()=>{p(!0)}),l(),p(!1)});
//# sourceMappingURL=index.js.map
