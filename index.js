import{S as P,N as O,P as F,a as M,A as R,b as C}from"./assets/vendor-Bca1vd2s.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))c(s);new MutationObserver(s=>{for(const d of s)if(d.type==="childList")for(const l of d.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function r(s){const d={};return s.integrity&&(d.integrity=s.integrity),s.referrerPolicy&&(d.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?d.credentials="include":s.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function c(s){if(s.ep)return;s.ep=!0;const d=r(s);fetch(s.href,d)}})();new P(".about-swiper",{modules:[O,F],slidesPerView:1,spaceBetween:24,pagination:{el:".about-swiper-pagination",clickable:!0},navigation:{nextEl:".about-swiper-button-next",prevEl:".about-swiper-button-prev"}});const T=M.create({baseURL:"https://paw-hut.b.goit.study/api",timeout:5e3,headers:{"Content-Type":"application/json"}});document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("categories-container"),a=document.getElementById("pets-grid"),r=document.getElementById("load-more-btn");let c="all",s=1;function d(){return window.innerWidth>=1440?9:8}async function l(){try{const t=await T.get("/categories");L(t.data)}catch(t){console.error("Помилка при завантаженні категорій:",t)}}function L(t){if(!e)return;e.innerHTML="";const i=document.createElement("button");i.classList.add("filter-btn","active"),i.setAttribute("type","button"),i.setAttribute("data-category","all"),i.textContent="Всі",e.appendChild(i),t.forEach(m=>{const u=document.createElement("button");u.classList.add("filter-btn"),u.setAttribute("type","button"),u.setAttribute("data-category",m._id),u.textContent=m.name,e.appendChild(u)})}async function f(t=!1){try{t||(s=1,a&&(a.innerHTML=""));const i={page:s,limit:d()};c!=="all"&&(i.categoryId=c);const m=await T.get("/animals",{params:i}),{animals:u,totalItems:y,page:v,limit:S}=m.data;if(u.forEach(h=>{a&&a.appendChild(w(h))}),r){const h=Math.ceil(y/S);r.disabled=v>=h}s+=1}catch(i){console.error("Помилка при завантаженні тварин:",i)}}function w(t){var I;const i=document.createElement("div");i.classList.add("pet-card");const m=t._id||t.id||"",u=t.img||t.image||t.photo||"",y=t.species||t.type||"",v=t.name||"",S=t.age||"",h=t.sex||t.gender||"",q=t.description||t.fullDescription||t.shortDescription||"",X=t.health||t.healthDescription||"Інформація про здоров’я уточнюється.",j=t.behavior||t.behaviorDescription||"Інформація про поведінку уточнюється.",V=(I=t.categories)!=null&&I.length?t.categories.map(_=>`<span class="pet-tag">${_.name}</span>`).join(""):`<span class="pet-tag">${y}</span>`;return i.innerHTML=`
      <div class="pet-image-wrapper">
        <img src="${u}" alt="${v}" loading="lazy">
      </div>

      <div class="pet-info-block">
        <div class="pet-card-top-type">${y}</div>

        <h3 class="pet-name">${v}</h3>

        <div class="pet-tags-container">${V}</div>

        <div class="pet-meta-tags">
          <span>${S}</span>
          <span>${h}</span>
        </div>

        <p class="pet-desc">${t.shortDescription||q}</p>

        <button
          class="btn-more"
          type="button"
          data-open-animal-modal
          data-animal-id="${m}"
          data-animal-img="${u}"
          data-animal-species="${y}"
          data-animal-name="${v}"
          data-animal-age="${S}"
          data-animal-sex="${h}"
          data-animal-description="${q}"
          data-animal-health="${X}"
          data-animal-behavior="${j}"
        >
          Дізнатись більше
        </button>
      </div>
    `,i}function g(){e&&e.addEventListener("click",t=>{const i=t.target.closest(".filter-btn");i&&(document.querySelectorAll(".filter-btn").forEach(m=>m.classList.remove("active")),i.classList.add("active"),c=i.getAttribute("data-category"),f(!1))})}r&&r.addEventListener("click",()=>{f(!0)}),g(),l(),f(!1)});new R(".faq-list",{duration:300,showMultiple:!1,openOnInit:[],collapse:!0});const z=document.querySelector(".burger-btn"),K=document.querySelector(".backdrop-btn-close"),A=document.querySelector(".backdrop"),U=document.querySelectorAll(".modal-link, .nav-modal-btn-take");z.addEventListener("click",()=>{A.classList.remove("is-hidden"),document.body.style.overflow="hidden"});K.addEventListener("click",()=>{A.classList.add("is-hidden"),document.body.style.overflow=""});U.forEach(e=>{e.addEventListener("click",()=>{A.classList.add("is-hidden"),document.body.style.overflow="";const a=e.getAttribute("href"),r=document.querySelector(a);r&&setTimeout(()=>{r.scrollIntoView({behavior:"smooth",block:"start"})},50)})});const B="/paws-cabin-project-js/assets/sprite-BBjMloQY.svg",H=document.querySelector("#feedback-list");H&&G();async function G(){try{const e=await fetch("https://paw-hut.b.goit.study/api/feedbacks");if(!e.ok)throw new Error(`HTTP error: ${e.status}`);const a=await e.json();W(a.feedbacks),Y()}catch(e){console.error(e)}}function Q(e){let a="";for(let c=1;c<=5;c++)e>=c?a+=`
        <svg class="star-icon" width="24" height="24">
          <use href="${B}#icon-star-filled"></use> 
        </svg>`:e>=c-.5?a+=`
        <svg class="star-icon" width="24" height="24">
          <use href="${B}#icon-star-half"></use>
        </svg>`:a+=`
        <svg class="star-icon" width="24" height="24">
          <use href="${B}#icon-star-outline"></use>
        </svg>`;return a}function W(e){const a=e.map(({author:r,rate:c,description:s})=>`
      <li class="swiper-slide testimonial-card">
        <div class="raty-stars">
          ${Q(c)}
        </div>

        <p class="testimonial-text">
          ${s}
        </p>

        <p class="testimonial-author">
          ${r}
        </p>
      </li>
    `).join("");H.innerHTML=a}function Y(){new P(".testimonials-swiper",{modules:[O,F],slidesPerView:1,spaceBetween:16,navigation:{nextEl:".next-btn",prevEl:".prev-btn"},pagination:{el:".swiper-pagination",clickable:!0,dynamicBullets:!0},breakpoints:{768:{slidesPerView:2,spaceBetween:32}}})}const Z=M.create({baseURL:"https://paw-hut.b.goit.study"}),n=document.querySelector("[data-animal-modal]"),p=document.querySelector("[data-order-modal]"),o={animalModal:n,orderModal:p,animalCloseBtn:n==null?void 0:n.querySelector("[data-animal-close]"),orderCloseBtn:p==null?void 0:p.querySelector("[data-order-close]"),adoptBtn:n==null?void 0:n.querySelector("[data-adopt-btn]"),orderForm:p==null?void 0:p.querySelector("[data-order-form]"),animalImg:n==null?void 0:n.querySelector("[data-animal-img]"),animalType:n==null?void 0:n.querySelector("[data-animal-type]"),animalName:n==null?void 0:n.querySelector("[data-animal-name]"),animalAge:n==null?void 0:n.querySelector("[data-animal-age]"),animalSex:n==null?void 0:n.querySelector("[data-animal-sex]"),animalDescription:n==null?void 0:n.querySelector("[data-animal-description]"),animalHealth:n==null?void 0:n.querySelector("[data-animal-health]"),animalBehavior:n==null?void 0:n.querySelector("[data-animal-behavior]")};let $=null,D=!1;function J(){var e,a,r;if(!o.animalModal||!o.orderModal||!o.orderForm){console.warn("Модальні вікна або форма не знайдені в DOM");return}D||(D=!0,document.addEventListener("click",ee),(e=o.animalCloseBtn)==null||e.addEventListener("click",x),(a=o.orderCloseBtn)==null||a.addEventListener("click",E),o.animalModal.addEventListener("click",re),o.orderModal.addEventListener("click",se),(r=o.adoptBtn)==null||r.addEventListener("click",oe),o.orderForm.addEventListener("submit",ie))}function ee(e){const a=e.target.closest("[data-open-animal-modal]");if(!a)return;const r=te(a);if(!r._id){console.warn("На кнопці не знайдено data-animal-id");return}ne(r)}function te(e){return{_id:e.dataset.animalId||"",img:e.dataset.animalImg||"",species:e.dataset.animalSpecies||"",name:e.dataset.animalName||"",age:e.dataset.animalAge||"",sex:e.dataset.animalSex||"",description:e.dataset.animalDescription||"",health:e.dataset.animalHealth||"",behavior:e.dataset.animalBehavior||""}}function ne(e){$=e._id,de(e),o.animalModal.classList.add("is-open"),document.body.classList.add("no-scroll"),document.addEventListener("keydown",k)}function x(){o.animalModal.classList.remove("is-open"),N()||(document.body.classList.remove("no-scroll"),document.removeEventListener("keydown",k))}function ae(){o.orderModal.classList.add("is-open"),document.body.classList.add("no-scroll"),document.addEventListener("keydown",k)}function E(){o.orderModal.classList.remove("is-open"),o.orderForm.reset(),N()||(document.body.classList.remove("no-scroll"),document.removeEventListener("keydown",k))}function oe(){x(),ae()}function re(e){e.target===e.currentTarget&&x()}function se(e){e.target===e.currentTarget&&E()}function k(e){if(e.key==="Escape"){if(o.orderModal.classList.contains("is-open")){E();return}o.animalModal.classList.contains("is-open")&&x()}}async function ie(e){var L,f,w;e.preventDefault();const a=new FormData(o.orderForm),r={name:((L=a.get("name"))==null?void 0:L.trim())||"",phone:((f=a.get("phone"))==null?void 0:f.trim())||"",animalId:$},c=(w=a.get("comment"))==null?void 0:w.trim();c&&(r.comment=c);const s=/^380\d{9}$/,d=/^[A-Za-zА-Яа-яІіЇїЄєҐґ'\-\s]{2,50}$/;if(!r.name){b("Введіть ім’я.");return}if(!d.test(r.name)){b("Ім’я повинно містити від 2 до 50 літер.");return}if(!r.phone){b("Введіть номер телефону.");return}if(!s.test(r.phone)){b("Номер телефону має бути у форматі 380XXXXXXXXX.");return}if(!r.animalId){b("Не вибрано тваринку.");return}const l=o.orderForm.querySelector('[type="submit"]');try{l.disabled=!0,l.textContent="Надсилання...";const g=await ce(r);C.fire({icon:"success",title:"Заявку надіслано",text:g.orderNum?`Номер заявки: ${g.orderNum}`:"Ми зв’яжемося з вами найближчим часом.",confirmButtonText:"Добре"}),E(),$=null}catch(g){console.error("Помилка при створенні заявки:",g),C.fire({icon:"error",title:"Помилка",text:"Не вдалося надіслати заявку. Спробуйте ще раз.",confirmButtonText:"Добре"})}finally{l.disabled=!1,l.textContent="Надіслати"}}function b(e){C.fire({icon:"warning",title:"Некоректні дані",text:e,confirmButtonText:"Добре"})}async function ce(e){return(await Z.post("/api/orders",e)).data}function de(e){o.animalImg.src=e.img,o.animalImg.alt=e.name||"Фото тваринки",o.animalType.textContent=e.species,o.animalName.textContent=e.name,o.animalAge.textContent=e.age,o.animalSex.textContent=e.sex,o.animalDescription.textContent=e.description,o.animalHealth.textContent=e.health,o.animalBehavior.textContent=e.behavior}function N(){return o.animalModal.classList.contains("is-open")||o.orderModal.classList.contains("is-open")}J();
//# sourceMappingURL=index.js.map
