const e=document.querySelector(".breed-select"),t=document.querySelector(".cat-info"),n=document.querySelector(".loader"),r=document.querySelector(".error");const o=document.querySelector(".loader"),c=document.querySelector(".error");o.classList.add("hide"),c.classList.add("hide"),fetch("https://api.thecatapi.com/v1/breeds").then((e=>{if(!e.ok)throw new Error(e.status);return e.json()})).then((t=>{!function(t){const n=t.map((e=>`\n      <option value="${e.id}">${e.name}</option>\n      `)).join("");e.innerHTML=n}(t)})).catch((e=>console.log(e))).finally((()=>{})),e.addEventListener("change",(function(){n.classList.remove("hide"),t.classList.add("hide"),t.innerHTML="",setTimeout((()=>{(function(){const e=new URLSearchParams({breed_ids:"beng",api_key:"live_R01pkXHrQNXKQvYeJccUarYSnPmiUXkBylskayNCHe0VBB6reFt08aZBMVBfbdKf"});return fetch(`https://api.thecatapi.com/v1/images/search?${e}`).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()}))})().then((e=>{!function(e){const n=e.map((({url:e,breeds:t})=>{for(const n of t)return`\n      <img src="${e}" alt="${n.name}" width="300"/>\n      <div> <b>${n.name}</b>\n      <p>${n.description} </p>\n      <p> <b>Temperament:</b> ${n.temperament}   </p>\n      </div>`})).join("");t.innerHTML=n}(e)})).catch((e=>{console.log(e),r.classList.remove("hide")})).finally((()=>{t.classList.remove("hide"),n.classList.add("hide")}))}),500)}));
//# sourceMappingURL=index.9a177ab8.js.map
