import{a as v,S as L,i as m}from"./assets/vendor-D6ZjRfWz.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();const M="46823434-044aaff3f806d325c686b1cda";async function f(r,t=1){const{data:i}=await v.get("https://pixabay.com/api/",{params:{key:M,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}});return i}let d;function y(r){return r.hits.map(({largeImageURL:i,webformatURL:n,tags:e,likes:o,views:s,comments:h,downloads:b})=>`<li class="list-item">
                        <a href='${i}' class="image-link"> 
                            <img src='${n}' alt="${e}">
                        </a>
                        <div class="list-item-info">
                            <div class="image-info">
                                <h2>Likes</h2>
                                <p>${o}</p>
                            </div>
                            <div class="image-info">
                                <h2>Views</h2>
                                <p>${s}</p>
                            </div>
                            <div class="image-info">
                                <h2>Comments</h2>
                                <p>${h}</p>
                            </div>
                            <div class="image-info">
                                <h2>Downloads</h2>
                                <p>${b}</p>
                            </div>
                        </div>                 
                    </li> `).join("")}function g(){d&&d.destroy(),d=new L(".list-item a",{captionsData:"alt",captionDelay:250})}const S=document.querySelector("form"),u=document.querySelector("ul"),a=document.querySelector(".load-more-btn");let l,p,c;S.addEventListener("submit",q);a.addEventListener("click",w);async function q(r){if(r.preventDefault(),l=r.target.elements.search.value,c=1,!!l){u.innerHTML="",document.querySelector(".loader").style.display="block";try{const t=await f(l);if(!t.total){a.style.display="none",m.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}p=Math.ceil(Number(t.total)/15);const i=y(t);u.insertAdjacentHTML("beforeend",i),p>1&&(a.style.display="block"),g()}catch(t){console.log(t)}finally{document.querySelector(".loader").style.display="none"}}}async function w(){a.style.display="none",document.querySelector(".loader").style.display="block",c+=1;try{const r=await f(l,c),t=y(r);u.insertAdjacentHTML("beforeend",t),window.scrollBy({top:720,left:0,behavior:"smooth"}),g()}catch(r){console.log(r)}finally{document.querySelector(".loader").style.display="none",c>=p?m.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}):a.style.display="block"}}
//# sourceMappingURL=index.js.map
