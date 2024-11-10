import{a as v,S as L,i as m}from"./assets/vendor-D6ZjRfWz.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();const M="46823434-044aaff3f806d325c686b1cda";async function f(r,t=1){const{data:i}=await v.get("https://pixabay.com/api/",{params:{key:M,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}});return i}let d;function y(r){return r.hits.map(({largeImageURL:i,webformatURL:s,tags:e,likes:o,views:a,comments:h,downloads:b})=>`<li class="list-item">
                        <a href='${i}' class="image-link"> 
                            <img src='${s}' alt="${e}">
                        </a>
                        <div class="list-item-info">
                            <div class="image-info">
                                <h2>Likes</h2>
                                <p>${o}</p>
                            </div>
                            <div class="image-info">
                                <h2>Views</h2>
                                <p>${a}</p>
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
                    </li> `).join("")}function g(){d&&d.destroy(),d=new L(".list-item a",{captionsData:"alt",captionDelay:250})}const S=document.querySelector("form"),u=document.querySelector("ul"),c=document.querySelector(".load-more-btn");let n,p,l;S.addEventListener("submit",q);c.addEventListener("click",w);async function q(r){if(r.preventDefault(),n=r.target.elements.search.value,l=1,!!n){u.innerHTML="",document.querySelector(".loader").style.display="block";try{const t=await f(n);if(!t.total){m.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}p=Math.ceil(Number(t.total)/15);const i=y(t);u.insertAdjacentHTML("beforeend",i),p>1&&(c.style.display="block"),g()}catch(t){console.log(t)}finally{document.querySelector(".loader").style.display="none"}}}async function w(){c.style.display="none",document.querySelector(".loader").style.display="block",l+=1;try{const r=await f(n,l),t=y(r);u.insertAdjacentHTML("beforeend",t),window.scrollBy({top:720,left:0,behavior:"smooth"}),g()}catch(r){console.log(r)}finally{document.querySelector(".loader").style.display="none",l>=p?m.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}):c.style.display="block"}}
//# sourceMappingURL=index.js.map
