function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
const S="modulepreload",v=function(g){return"/js-note/"+g},p={},y=function(e,n,r){let u=Promise.resolve();if(n&&n.length>0){const i=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),h=o?.nonce||o?.getAttribute("nonce");u=Promise.all(n.map(c=>{if(c=v(c),c in p)return;p[c]=!0;const m=c.endsWith(".css"),s=m?'[rel="stylesheet"]':"";if(!!r)for(let a=i.length-1;a>=0;a--){const l=i[a];if(l.href===c&&(!m||l.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${s}`))return;const t=document.createElement("link");if(t.rel=m?"stylesheet":S,m||(t.as="script",t.crossOrigin=""),t.href=c,h&&t.setAttribute("nonce",h),document.head.appendChild(t),m)return new Promise((a,l)=>{t.addEventListener("load",a),t.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${c}`)))})}))}return u.then(()=>e()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})};class b extends HTMLElement{constructor(){super();const e=this.querySelector("button[data-open-modal]"),n=this.querySelector("button[data-close-modal]"),r=this.querySelector("dialog"),u=this.querySelector(".dialog-frame"),i=t=>{("href"in(t.target||{})||document.body.contains(t.target)&&!u.contains(t.target))&&h()},o=t=>{r.showModal(),document.body.toggleAttribute("data-search-modal-open",!0),this.querySelector("input")?.focus(),t?.stopPropagation(),window.addEventListener("click",i)},h=()=>r.close();e.addEventListener("click",o),e.disabled=!1,n.addEventListener("click",h),r.addEventListener("close",()=>{document.body.toggleAttribute("data-search-modal-open",!1),window.removeEventListener("click",i)}),window.addEventListener("keydown",t=>{const a=document.activeElement instanceof HTMLElement&&(["input","select","textarea"].includes(document.activeElement.tagName.toLowerCase())||document.activeElement.isContentEditable);(t.metaKey===!0||t.ctrlKey===!0)&&t.key==="k"?(r.open?h():o(),t.preventDefault()):t.key==="/"&&!r.open&&!a&&(o(),t.preventDefault())});let c={};try{c=JSON.parse(this.dataset.translations||"{}")}catch{}const d=this.dataset.stripTrailingSlash!==void 0?t=>t.replace(/(.)\/(#.*)?$/,"$1$2"):t=>t;window.addEventListener("DOMContentLoaded",()=>{(window.requestIdleCallback||(a=>setTimeout(a,1)))(async()=>{const{PagefindUI:a}=await y(()=>import("./ui-core.B4jlVubt.js"),__vite__mapDeps([]));new a({element:"#starlight__search",baseUrl:"/js-note",bundlePath:"/js-note".replace(/\/$/,"")+"/pagefind/",showImages:!1,translations:c,showSubResults:!0,processResult:l=>{l.url=d(l.url),l.sub_results=l.sub_results.map(f=>(f.url=d(f.url),f))}})})})}}customElements.define("site-search",b);class w extends HTMLElement{constructor(){super();const e=this.querySelector("select");e&&e.addEventListener("change",n=>{n.currentTarget instanceof HTMLSelectElement&&(window.location.pathname=n.currentTarget.value)})}}customElements.define("starlight-lang-select",w);class L extends HTMLElement{#e="starlight-theme";constructor(){super(),this.#n(this.#o());const e=this.querySelector("select");e&&e.addEventListener("change",n=>{n.currentTarget instanceof HTMLSelectElement&&this.#n(this.#t(n.currentTarget.value))})}#t(e){return e==="auto"||e==="dark"||e==="light"?e:"auto"}#s(){return matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"}#n(e){StarlightThemeProvider.updatePickers(e),document.documentElement.dataset.theme=e==="auto"?this.#s():e,this.#r(e)}#r(e){typeof localStorage<"u"&&(e==="light"||e==="dark"?localStorage.setItem(this.#e,e):localStorage.removeItem(this.#e))}#o(){const e=typeof localStorage<"u"&&localStorage.getItem(this.#e);return this.#t(e)}}customElements.define("starlight-theme-select",L);const T="_top";class E extends HTMLElement{constructor(){super(),this._current=this.querySelector('a[aria-current="true"]'),this.minH=parseInt(this.dataset.minH||"2",10),this.maxH=parseInt(this.dataset.maxH||"3",10);const e=[...this.querySelectorAll("a")],n=s=>{if(s instanceof HTMLHeadingElement){if(s.id===T)return!0;const d=s.tagName[1];if(d){const t=parseInt(d,10);if(t>=this.minH&&t<=this.maxH)return!0}}return!1},r=s=>{if(!s)return null;const d=s;for(;s;){if(n(s))return s;for(s=s.previousElementSibling;s?.lastElementChild;)s=s.lastElementChild;const t=r(s);if(t)return t}return r(d.parentElement)},u=s=>{for(const{isIntersecting:d,target:t}of s){if(!d)continue;const a=r(t);if(!a)continue;const l=e.find(f=>f.hash==="#"+encodeURIComponent(a.id));if(l){this.current=l;break}}},i=document.querySelectorAll("main [id], main [id] ~ *, main .content > *");let o;const h=()=>{o&&o.disconnect(),o=new IntersectionObserver(u,{rootMargin:this.getRootMargin()}),i.forEach(s=>o.observe(s))};h();const c=window.requestIdleCallback||(s=>setTimeout(s,1));let m;window.addEventListener("resize",()=>{o&&o.disconnect(),clearTimeout(m),m=setTimeout(()=>c(h),200)})}set current(e){e!==this._current&&(this._current&&this._current.removeAttribute("aria-current"),e.setAttribute("aria-current","true"),this._current=e)}getRootMargin(){const e=document.querySelector("header")?.getBoundingClientRect().height||0,n=this.querySelector("summary")?.getBoundingClientRect().height||0,r=e+n+32,u=r+53,i=document.documentElement.clientHeight;return`-${r}px 0% ${u-i}px`}}customElements.define("starlight-toc",E);class k extends E{set current(e){super.current=e;const n=this.querySelector(".display-current");n&&(n.textContent=e.textContent)}constructor(){super();const e=this.querySelector("details");if(!e)return;const n=()=>{e.open=!1};e.querySelectorAll("a").forEach(r=>{r.addEventListener("click",n)}),window.addEventListener("click",r=>{e.contains(r.target)||n()}),window.addEventListener("keydown",r=>{if(r.key==="Escape"&&e.open){const u=e.contains(document.activeElement);if(n(),u){const i=e.querySelector("summary");i&&i.focus()}}})}}customElements.define("mobile-starlight-toc",k);class x extends HTMLElement{constructor(){super(),this.btn=this.querySelector("button"),this.btn.addEventListener("click",()=>this.toggleExpanded());const e=this.closest("nav");e&&e.addEventListener("keyup",n=>this.closeOnEscape(n))}setExpanded(e){this.setAttribute("aria-expanded",String(e)),document.body.toggleAttribute("data-mobile-menu-expanded",e)}toggleExpanded(){this.setExpanded(this.getAttribute("aria-expanded")!=="true")}closeOnEscape(e){e.code==="Escape"&&(this.setExpanded(!1),this.btn.focus())}}customElements.define("starlight-menu-button",x);export{y as _};
