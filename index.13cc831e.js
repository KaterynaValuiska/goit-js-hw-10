!function(){var e=document.querySelector(".breed-select"),n=document.querySelector(".cat-info"),t=document.querySelector(".loader"),r=document.querySelector(".error");var o=document.querySelector(".loader"),c=document.querySelector(".error");o.classList.add("hide"),c.classList.add("hide"),fetch("https://api.thecatapi.com/v1/breeds").then((function(e){if(!e.ok)throw new Error(e.status);return e.json()})).then((function(n){!function(n){var t=n.map((function(e){return'\n      <option value="'.concat(e.id,'">').concat(e.name,"</option>\n      ")})).join("");e.innerHTML=t}(n)})).catch((function(e){return console.log(e)})),e.addEventListener("change",(function(){t.classList.remove("hide"),setTimeout((function(){fetch("https://api.thecatapi.com/v1/images/search?breed_ids=beng&api_key=live_R01pkXHrQNXKQvYeJccUarYSnPmiUXkBylskayNCHe0VBB6reFt08aZBMVBfbdKf").then((function(e){if(!e.ok)throw new Error(e.status);return e.json()})).then((function(e){return function(e){var t=e.map((function(e){var n=e.url,t=e.breeds,r=!0,o=!1,c=void 0;try{for(var a,i=t[Symbol.iterator]();!(r=(a=i.next()).done);r=!0){var u=a.value;return'\n      <img src="'.concat(n,'" alt="').concat(u.name,'" width="300"/>\n      <div> <b>').concat(u.name,"</b>\n      <p>").concat(u.description," </p>\n      <p> <b>Temperament:</b> ").concat(u.temperament,"   </p>\n      </div>")}}catch(e){o=!0,c=e}finally{try{r||null==i.return||i.return()}finally{if(o)throw c}}})).join("");n.innerHTML=t}(e)})).catch((function(e){console.log(e),r.classList.remove("hide")})),t.classList.add("hide")}),1e3)}))}();
//# sourceMappingURL=index.13cc831e.js.map
