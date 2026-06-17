import{S as q,N as I,P as D,a as P,A as z,b as S}from"./assets/vendor-Bca1vd2s.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const d of o)if(d.type==="childList")for(const u of d.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function s(o){const d={};return o.integrity&&(d.integrity=o.integrity),o.referrerPolicy&&(d.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?d.credentials="include":o.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function i(o){if(o.ep)return;o.ep=!0;const d=s(o);fetch(o.href,d)}})();new q(".about-swiper",{modules:[I,D],slidesPerView:1,spaceBetween:24,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});const $=P.create({baseURL:"https://paw-hut.b.goit.study/api",timeout:5e3,headers:{"Content-Type":"application/json"}});document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("categories-container"),r=document.getElementById("pets-grid"),s=document.getElementById("load-more-btn");let i="all",o=1;function d(){return window.innerWidth>=1440?9:8}async function u(){try{const t=await $.get("/categories");f(t.data)}catch(t){console.error("Помилка при завантаженні категорій:",t)}}function f(t){if(!e)return;e.innerHTML="";const c=document.createElement("button");c.classList.add("filter-btn","active"),c.setAttribute("type","button"),c.setAttribute("data-category","all"),c.textContent="Всі",e.appendChild(c),t.forEach(m=>{const l=document.createElement("button");l.classList.add("filter-btn"),l.setAttribute("type","button"),l.setAttribute("data-category",m._id),l.textContent=m.name,e.appendChild(l)})}async function x(t=!1){try{t||(o=1,r&&(r.innerHTML=""));const c={page:o,limit:d()};i!=="all"&&(c.categoryId=i);const m=await $.get("/animals",{params:c}),{animals:l,totalItems:h,page:y,limit:v}=m.data;if(l.forEach(g=>{r&&r.appendChild(M(g))}),s){const g=Math.ceil(h/v);s.disabled=y>=g}o+=1}catch(c){console.error("Помилка при завантаженні тварин:",c)}}function M(t){var C;const c=document.createElement("div");c.classList.add("pet-card");const m=t._id||t.id||"",l=t.img||t.image||t.photo||"",h=t.species||t.type||"",y=t.name||"",v=t.age||"",g=t.sex||t.gender||"",k=t.description||t.fullDescription||t.shortDescription||"",H=t.health||t.healthDescription||"Інформація про здоров’я уточнюється.",j=t.behavior||t.behaviorDescription||"Інформація про поведінку уточнюється.",_=(C=t.categories)!=null&&C.length?t.categories.map(V=>V.name).join(" &bull; "):h;return c.innerHTML=`
      <div class="pet-image-wrapper">
        <img src="${l}" alt="${y}" loading="lazy">
      </div>

      <div class="pet-info-block">
        <div class="pet-card-top-type">${h}</div>

        <h3 class="pet-name">${y}</h3>

        <div class="pet-tags-text">${_}</div>

        <div class="pet-meta-tags">
          <span><strong>Вік:</strong> ${v}</span>
          <span><strong>Стать:</strong> ${g}</span>
        </div>

        <p class="pet-desc">${t.shortDescription||k}</p>

        <button
          class="btn-more"
          type="button"
          data-open-animal-modal
          data-animal-id="${m}"
          data-animal-img="${l}"
          data-animal-species="${h}"
          data-animal-name="${y}"
          data-animal-age="${v}"
          data-animal-sex="${g}"
          data-animal-description="${k}"
          data-animal-health="${H}"
          data-animal-behavior="${j}"
        >
          Дізнатись більше
        </button>
      </div>
    `,c}function N(){e&&e.addEventListener("click",t=>{const c=t.target.closest(".filter-btn");c&&(document.querySelectorAll(".filter-btn").forEach(m=>m.classList.remove("active")),c.classList.add("active"),i=c.getAttribute("data-category"),x(!1))})}s&&s.addEventListener("click",()=>{x(!0)}),N(),u(),x(!1)});new z(".faq-list",{duration:300,showMultiple:!1,openOnInit:[],collapse:!0});const K=document.querySelector(".burger-btn"),R=document.querySelector(".backdrop-btn-close"),T=document.querySelector(".backdrop");K.addEventListener("click",()=>{T.classList.remove("is-hidden"),document.body.style.overflow="hidden"});R.addEventListener("click",()=>{T.classList.add("is-hidden"),document.body.style.overflow=""});const B="/paws-cabin-project-js/assets/sprite-BBjMloQY.svg",O=document.querySelector("#feedback-list");O&&U();async function U(){try{const e=await fetch("https://paw-hut.b.goit.study/api/feedbacks");if(!e.ok)throw new Error(`HTTP error: ${e.status}`);const r=await e.json();Q(r.feedbacks),W()}catch(e){console.error(e)}}function G(e){let r="";for(let i=1;i<=5;i++)e>=i?r+=`
        <svg class="star-icon" width="24" height="24">
          <use href="${B}#icon-star-filled"></use> 
        </svg>`:e>=i-.5?r+=`
        <svg class="star-icon" width="24" height="24">
          <use href="${B}#icon-star-half"></use>
        </svg>`:r+=`
        <svg class="star-icon" width="24" height="24">
          <use href="${B}#icon-star-outline"></use>
        </svg>`;return r}function Q(e){const r=e.map(({author:s,rate:i,description:o})=>`
      <li class="swiper-slide testimonial-card">
        <div class="raty-stars">
          ${G(i)}
        </div>

        <p class="testimonial-text">
          ${o}
        </p>

        <p class="testimonial-author">
          ${s}
        </p>
      </li>
    `).join("");O.innerHTML=r}function W(){new q(".testimonials-swiper",{modules:[I,D],slidesPerView:1,spaceBetween:16,navigation:{nextEl:".next-btn",prevEl:".prev-btn"},pagination:{el:".swiper-pagination",clickable:!0,dynamicBullets:!0},breakpoints:{768:{slidesPerView:2,spaceBetween:32}}})}const Y=P.create({baseURL:"https://paw-hut.b.goit.study"}),n=document.querySelector("[data-animal-modal]"),p=document.querySelector("[data-order-modal]"),a={animalModal:n,orderModal:p,animalCloseBtn:n==null?void 0:n.querySelector("[data-animal-close]"),orderCloseBtn:p==null?void 0:p.querySelector("[data-order-close]"),adoptBtn:n==null?void 0:n.querySelector("[data-adopt-btn]"),orderForm:p==null?void 0:p.querySelector("[data-order-form]"),animalImg:n==null?void 0:n.querySelector("[data-animal-img]"),animalType:n==null?void 0:n.querySelector("[data-animal-type]"),animalName:n==null?void 0:n.querySelector("[data-animal-name]"),animalAge:n==null?void 0:n.querySelector("[data-animal-age]"),animalSex:n==null?void 0:n.querySelector("[data-animal-sex]"),animalDescription:n==null?void 0:n.querySelector("[data-animal-description]"),animalHealth:n==null?void 0:n.querySelector("[data-animal-health]"),animalBehavior:n==null?void 0:n.querySelector("[data-animal-behavior]")};let E=null,A=!1;function J(){var e,r,s;if(!a.animalModal||!a.orderModal||!a.orderForm){console.warn("Модальні вікна або форма не знайдені в DOM");return}A||(A=!0,document.addEventListener("click",X),(e=a.animalCloseBtn)==null||e.addEventListener("click",b),(r=a.orderCloseBtn)==null||r.addEventListener("click",L),a.animalModal.addEventListener("click",ae),a.orderModal.addEventListener("click",re),(s=a.adoptBtn)==null||s.addEventListener("click",ne),a.orderForm.addEventListener("submit",oe))}function X(e){const r=e.target.closest("[data-open-animal-modal]");if(!r)return;const s=Z(r);if(!s._id){console.warn("На кнопці не знайдено data-animal-id");return}ee(s)}function Z(e){return{_id:e.dataset.animalId||"",img:e.dataset.animalImg||"",species:e.dataset.animalSpecies||"",name:e.dataset.animalName||"",age:e.dataset.animalAge||"",sex:e.dataset.animalSex||"",description:e.dataset.animalDescription||"",health:e.dataset.animalHealth||"",behavior:e.dataset.animalBehavior||""}}function ee(e){E=e._id,ie(e),a.animalModal.classList.add("is-open"),document.body.classList.add("no-scroll"),document.addEventListener("keydown",w)}function b(){a.animalModal.classList.remove("is-open"),F()||(document.body.classList.remove("no-scroll"),document.removeEventListener("keydown",w))}function te(){a.orderModal.classList.add("is-open"),document.body.classList.add("no-scroll"),document.addEventListener("keydown",w)}function L(){a.orderModal.classList.remove("is-open"),a.orderForm.reset(),F()||(document.body.classList.remove("no-scroll"),document.removeEventListener("keydown",w))}function ne(){b(),te()}function ae(e){e.target===e.currentTarget&&b()}function re(e){e.target===e.currentTarget&&L()}function w(e){if(e.key==="Escape"){if(a.orderModal.classList.contains("is-open")){L();return}a.animalModal.classList.contains("is-open")&&b()}}async function oe(e){var o,d,u;e.preventDefault();const r=new FormData(a.orderForm),s={name:((o=r.get("name"))==null?void 0:o.trim())||"",phone:((d=r.get("phone"))==null?void 0:d.trim())||"",animalId:E,comment:((u=r.get("comment"))==null?void 0:u.trim())||""};if(!s.name||!s.phone||!s.animalId){S.fire({icon:"warning",title:"Заповніть обов’язкові поля",text:"Ім’я, телефон та тваринка є обов’язковими.",confirmButtonText:"Добре"});return}const i=a.orderForm.querySelector('[type="submit"]');try{i.disabled=!0,i.textContent="Надсилання...";const f=await se(s);S.fire({icon:"success",title:"Заявку надіслано",text:f.orderNum?`Номер заявки: ${f.orderNum}`:"Ми зв’яжемося з вами найближчим часом.",confirmButtonText:"Добре"}),L(),E=null}catch(f){console.error("Помилка при створенні заявки:",f),S.fire({icon:"error",title:"Помилка",text:"Не вдалося надіслати заявку. Спробуйте ще раз.",confirmButtonText:"Добре"})}finally{i.disabled=!1,i.textContent="Надіслати"}}async function se(e){return(await Y.post("/api/orders",e)).data}function ie(e){a.animalImg.src=e.img,a.animalImg.alt=e.name||"Фото тваринки",a.animalType.textContent=e.species,a.animalName.textContent=e.name,a.animalAge.textContent=e.age,a.animalSex.textContent=e.sex,a.animalDescription.textContent=e.description,a.animalHealth.textContent=e.health,a.animalBehavior.textContent=e.behavior}function F(){return a.animalModal.classList.contains("is-open")||a.orderModal.classList.contains("is-open")}J();
//# sourceMappingURL=index.js.map
