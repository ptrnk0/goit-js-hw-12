import{a as L,S as M,i as m}from"./assets/vendor-D6ZjRfWz.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const S="46823434-044aaff3f806d325c686b1cda";async function f(r,t=1){const{data:s}=await L.get("https://pixabay.com/api/",{params:{key:S,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}});return s}let u;function y(r){return r.hits.map(({largeImageURL:s,webformatURL:n,tags:e,likes:o,views:i,comments:h,downloads:b})=>`<li class="list-item">
                        <a href='${s}' class="image-link"> 
                            <img src='${n}' alt="${e}">
                        </a>
                        <div class="list-item-info">
                            <section class="image-info">
                                <h2>Likes</h2>
                                <p>${o}</p>
                            </section>
                        
                            <section class="image-info">
                                <h2>Views</h2>
                                <p>${i}</p>
                            </section>
                        
                            <section class="image-info">
                                <h2>Comments</h2>
                                <p>${h}</p>
                            </section>
                        
                            <section class="image-info">
                                <h2>Downloads</h2>
                                <p>${b}</p>
                            </section>
                        </div>                 
                    </li> `).join("")}function g(){u&&u.destroy(),u=new M(".list-item a",{captionsData:"alt",captionDelay:250})}const q=document.querySelector("form"),d=document.querySelector("ul"),a=document.querySelector(".load-more-btn");let c,p,l;q.addEventListener("submit",w);a.addEventListener("click",v);async function w(r){if(r.preventDefault(),c=r.target.elements.search.value,l=1,!!c){d.innerHTML="",document.querySelector(".loader").style.display="block";try{const t=await f(c);if(!t.total){a.style.display="none",m.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}p=Math.ceil(Number(t.total)/15);const s=y(t);d.insertAdjacentHTML("beforeend",s),p>1&&(a.style.display="block"),g()}catch(t){console.log(t)}finally{document.querySelector(".loader").style.display="none"}}}async function v(){a.style.display="none",document.querySelector(".loader").style.display="block",l+=1;try{const r=await f(c,l),t=y(r);d.insertAdjacentHTML("beforeend",t),window.scrollBy({top:720,left:0,behavior:"smooth"}),g()}catch(r){console.log(r)}finally{document.querySelector(".loader").style.display="none",l>=p?m.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}):a.style.display="block"}}
//# sourceMappingURL=index.js.map
