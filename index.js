import{S as I,N as T,P as D,a as P,A as z,b as k}from"./assets/vendor-Bca1vd2s.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const d of r)if(d.type==="childList")for(const u of d.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function s(r){const d={};return r.integrity&&(d.integrity=r.integrity),r.referrerPolicy&&(d.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?d.credentials="include":r.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function i(r){if(r.ep)return;r.ep=!0;const d=s(r);fetch(r.href,d)}})();new I(".about-swiper",{modules:[T,D],slidesPerView:1,spaceBetween:24,pagination:{el:".about-swiper-pagination",clickable:!0},navigation:{nextEl:".about-swiper-button-next",prevEl:".about-swiper-button-prev"}});const A=P.create({baseURL:"https://paw-hut.b.goit.study/api",timeout:5e3,headers:{"Content-Type":"application/json"}});document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("categories-container"),a=document.getElementById("pets-grid"),s=document.getElementById("load-more-btn");let i="all",r=1;function d(){return window.innerWidth>=1440?9:8}async function u(){try{const t=await A.get("/categories");f(t.data)}catch(t){console.error("Помилка при завантаженні категорій:",t)}}function f(t){if(!e)return;e.innerHTML="";const c=document.createElement("button");c.classList.add("filter-btn","active"),c.setAttribute("type","button"),c.setAttribute("data-category","all"),c.textContent="Всі",e.appendChild(c),t.forEach(m=>{const l=document.createElement("button");l.classList.add("filter-btn"),l.setAttribute("type","button"),l.setAttribute("data-category",m._id),l.textContent=m.name,e.appendChild(l)})}async function S(t=!1){try{t||(r=1,a&&(a.innerHTML=""));const c={page:r,limit:d()};i!=="all"&&(c.categoryId=i);const m=await A.get("/animals",{params:c}),{animals:l,totalItems:h,page:y,limit:v}=m.data;if(l.forEach(g=>{a&&a.appendChild(M(g))}),s){const g=Math.ceil(h/v);s.disabled=y>=g}r+=1}catch(c){console.error("Помилка при завантаженні тварин:",c)}}function M(t){var $;const c=document.createElement("div");c.classList.add("pet-card");const m=t._id||t.id||"",l=t.img||t.image||t.photo||"",h=t.species||t.type||"",y=t.name||"",v=t.age||"",g=t.sex||t.gender||"",C=t.description||t.fullDescription||t.shortDescription||"",N=t.health||t.healthDescription||"Інформація про здоров’я уточнюється.",j=t.behavior||t.behaviorDescription||"Інформація про поведінку уточнюється.",_=($=t.categories)!=null&&$.length?t.categories.map(V=>`<span class="pet-tag">${V.name}</span>`).join(""):`<span class="pet-tag">${h}</span>`;return c.innerHTML=`
      <div class="pet-image-wrapper">
        <img src="${l}" alt="${y}" loading="lazy">
      </div>

      <div class="pet-info-block">
        <div class="pet-card-top-type">${h}</div>

        <h3 class="pet-name">${y}</h3>

        <div class="pet-tags-container">${_}</div>

        <div class="pet-meta-tags">
          <span>${v}</span>
          <span>${g}</span>
        </div>

        <p class="pet-desc">${t.shortDescription||C}</p>

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
          data-animal-description="${C}"
          data-animal-health="${N}"
          data-animal-behavior="${j}"
        >
          Дізнатись більше
        </button>
      </div>
    `,c}function H(){e&&e.addEventListener("click",t=>{const c=t.target.closest(".filter-btn");c&&(document.querySelectorAll(".filter-btn").forEach(m=>m.classList.remove("active")),c.classList.add("active"),i=c.getAttribute("data-category"),S(!1))})}s&&s.addEventListener("click",()=>{S(!0)}),H(),u(),S(!1)});new z(".faq-list",{duration:300,showMultiple:!1,openOnInit:[],collapse:!0});const K=document.querySelector(".burger-btn"),R=document.querySelector(".backdrop-btn-close"),B=document.querySelector(".backdrop"),U=document.querySelectorAll(".modal-link, .nav-modal-btn-take");K.addEventListener("click",()=>{B.classList.remove("is-hidden"),document.body.style.overflow="hidden"});R.addEventListener("click",()=>{B.classList.add("is-hidden"),document.body.style.overflow=""});U.forEach(e=>{e.addEventListener("click",()=>{B.classList.add("is-hidden"),document.body.style.overflow="";const a=e.getAttribute("href"),s=document.querySelector(a);s&&setTimeout(()=>{s.scrollIntoView({behavior:"smooth",block:"start"})},50)})});const E="/paws-cabin-project-js/assets/sprite-BBjMloQY.svg",O=document.querySelector("#feedback-list");O&&G();async function G(){try{const e=await fetch("https://paw-hut.b.goit.study/api/feedbacks");if(!e.ok)throw new Error(`HTTP error: ${e.status}`);const a=await e.json();W(a.feedbacks),Y()}catch(e){console.error(e)}}function Q(e){let a="";for(let i=1;i<=5;i++)e>=i?a+=`
        <svg class="star-icon" width="24" height="24">
          <use href="${E}#icon-star-filled"></use> 
        </svg>`:e>=i-.5?a+=`
        <svg class="star-icon" width="24" height="24">
          <use href="${E}#icon-star-half"></use>
        </svg>`:a+=`
        <svg class="star-icon" width="24" height="24">
          <use href="${E}#icon-star-outline"></use>
        </svg>`;return a}function W(e){const a=e.map(({author:s,rate:i,description:r})=>`
      <li class="swiper-slide testimonial-card">
        <div class="raty-stars">
          ${Q(i)}
        </div>

        <p class="testimonial-text">
          ${r}
        </p>

        <p class="testimonial-author">
          ${s}
        </p>
      </li>
    `).join("");O.innerHTML=a}function Y(){new I(".testimonials-swiper",{modules:[T,D],slidesPerView:1,spaceBetween:16,navigation:{nextEl:".next-btn",prevEl:".prev-btn"},pagination:{el:".swiper-pagination",clickable:!0,dynamicBullets:!0},breakpoints:{768:{slidesPerView:2,spaceBetween:32}}})}const J=P.create({baseURL:"https://paw-hut.b.goit.study"}),n=document.querySelector("[data-animal-modal]"),p=document.querySelector("[data-order-modal]"),o={animalModal:n,orderModal:p,animalCloseBtn:n==null?void 0:n.querySelector("[data-animal-close]"),orderCloseBtn:p==null?void 0:p.querySelector("[data-order-close]"),adoptBtn:n==null?void 0:n.querySelector("[data-adopt-btn]"),orderForm:p==null?void 0:p.querySelector("[data-order-form]"),animalImg:n==null?void 0:n.querySelector("[data-animal-img]"),animalType:n==null?void 0:n.querySelector("[data-animal-type]"),animalName:n==null?void 0:n.querySelector("[data-animal-name]"),animalAge:n==null?void 0:n.querySelector("[data-animal-age]"),animalSex:n==null?void 0:n.querySelector("[data-animal-sex]"),animalDescription:n==null?void 0:n.querySelector("[data-animal-description]"),animalHealth:n==null?void 0:n.querySelector("[data-animal-health]"),animalBehavior:n==null?void 0:n.querySelector("[data-animal-behavior]")};let x=null,q=!1;function X(){var e,a,s;if(!o.animalModal||!o.orderModal||!o.orderForm){console.warn("Модальні вікна або форма не знайдені в DOM");return}q||(q=!0,document.addEventListener("click",Z),(e=o.animalCloseBtn)==null||e.addEventListener("click",b),(a=o.orderCloseBtn)==null||a.addEventListener("click",L),o.animalModal.addEventListener("click",oe),o.orderModal.addEventListener("click",re),(s=o.adoptBtn)==null||s.addEventListener("click",ae),o.orderForm.addEventListener("submit",se))}function Z(e){const a=e.target.closest("[data-open-animal-modal]");if(!a)return;const s=ee(a);if(!s._id){console.warn("На кнопці не знайдено data-animal-id");return}te(s)}function ee(e){return{_id:e.dataset.animalId||"",img:e.dataset.animalImg||"",species:e.dataset.animalSpecies||"",name:e.dataset.animalName||"",age:e.dataset.animalAge||"",sex:e.dataset.animalSex||"",description:e.dataset.animalDescription||"",health:e.dataset.animalHealth||"",behavior:e.dataset.animalBehavior||""}}function te(e){x=e._id,ce(e),o.animalModal.classList.add("is-open"),document.body.classList.add("no-scroll"),document.addEventListener("keydown",w)}function b(){o.animalModal.classList.remove("is-open"),F()||(document.body.classList.remove("no-scroll"),document.removeEventListener("keydown",w))}function ne(){o.orderModal.classList.add("is-open"),document.body.classList.add("no-scroll"),document.addEventListener("keydown",w)}function L(){o.orderModal.classList.remove("is-open"),o.orderForm.reset(),F()||(document.body.classList.remove("no-scroll"),document.removeEventListener("keydown",w))}function ae(){b(),ne()}function oe(e){e.target===e.currentTarget&&b()}function re(e){e.target===e.currentTarget&&L()}function w(e){if(e.key==="Escape"){if(o.orderModal.classList.contains("is-open")){L();return}o.animalModal.classList.contains("is-open")&&b()}}async function se(e){var r,d,u;e.preventDefault();const a=new FormData(o.orderForm),s={name:((r=a.get("name"))==null?void 0:r.trim())||"",phone:((d=a.get("phone"))==null?void 0:d.trim())||"",animalId:x,comment:((u=a.get("comment"))==null?void 0:u.trim())||""};if(!s.name||!s.phone||!s.animalId){k.fire({icon:"warning",title:"Заповніть обов’язкові поля",text:"Ім’я, телефон та тваринка є обов’язковими.",confirmButtonText:"Добре"});return}const i=o.orderForm.querySelector('[type="submit"]');try{i.disabled=!0,i.textContent="Надсилання...";const f=await ie(s);k.fire({icon:"success",title:"Заявку надіслано",text:f.orderNum?`Номер заявки: ${f.orderNum}`:"Ми зв’яжемося з вами найближчим часом.",confirmButtonText:"Добре"}),L(),x=null}catch(f){console.error("Помилка при створенні заявки:",f),k.fire({icon:"error",title:"Помилка",text:"Не вдалося надіслати заявку. Спробуйте ще раз.",confirmButtonText:"Добре"})}finally{i.disabled=!1,i.textContent="Надіслати"}}async function ie(e){return(await J.post("/api/orders",e)).data}function ce(e){o.animalImg.src=e.img,o.animalImg.alt=e.name||"Фото тваринки",o.animalType.textContent=e.species,o.animalName.textContent=e.name,o.animalAge.textContent=e.age,o.animalSex.textContent=e.sex,o.animalDescription.textContent=e.description,o.animalHealth.textContent=e.health,o.animalBehavior.textContent=e.behavior}function F(){return o.animalModal.classList.contains("is-open")||o.orderModal.classList.contains("is-open")}X();
//# sourceMappingURL=index.js.map
