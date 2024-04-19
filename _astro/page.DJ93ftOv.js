function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["_astro/SwupA11yPlugin.D4H5V1DI.js","_astro/Swup.CJ_aIkp9.js","_astro/index.modern.CkIAsQri.js","_astro/SwupPreloadPlugin.CinulUaA.js","_astro/SwupScrollPlugin.BsBqKDQ5.js","_astro/SwupBodyClassPlugin.aa8fLSdp.js","_astro/SwupHeadPlugin.FjGODCox.js","_astro/SwupScriptsPlugin.o5PkFIdr.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
const E="modulepreload",P=function(n){return"/"+n},p={},l=function(t,r,u){let f=Promise.resolve();if(r&&r.length>0){const s=document.getElementsByTagName("link"),i=document.querySelector("meta[property=csp-nonce]"),_=i?.nonce||i?.getAttribute("nonce");f=Promise.all(r.map(e=>{if(e=P(e),e in p)return;p[e]=!0;const a=e.endsWith(".css"),h=a?'[rel="stylesheet"]':"";if(!!u)for(let d=s.length-1;d>=0;d--){const w=s[d];if(w.href===e&&(!a||w.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${h}`))return;const o=document.createElement("link");if(o.rel=a?"stylesheet":E,a||(o.as="script",o.crossOrigin=""),o.href=e,_&&o.setAttribute("nonce",_),document.head.appendChild(o),a)return new Promise((d,w)=>{o.addEventListener("load",d),o.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${e}`)))})}))}return f.then(()=>t()).catch(s=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=s,window.dispatchEvent(i),!i.defaultPrevented)throw s})};function c(n){return JSON.parse(n,g)}function g(n,t){if(Array.isArray(t)&&t.length===2&&typeof t[1]=="string"){const r=t[0];if(t=t[1],r===":regex:"){const u=t.match(/\/(.*?)\/([a-z]*)?$/i)||[];return new RegExp(u[1],u[2]||"")}if(r===":function:")return new Function(`return (${t}).apply(this, arguments);`)}return t}function m(n,{timeoutFallback:t=1e3}={}){"requestIdleCallback"in window?window.requestIdleCallback(()=>n()):setTimeout(()=>n(),t)}function S(n){document.readyState==="complete"?setTimeout(()=>n(),0):window.addEventListener("load",()=>n())}function y(n,{delayAfterLoad:t=0}={}){S(()=>{t>0?setTimeout(()=>m(n),t):m(n)})}async function L(){const[n,t,r,u,f,s,i]=await Promise.all([l(()=>import("./Swup.CJ_aIkp9.js").then(e=>e.S),__vite__mapDeps([])).then(e=>e.default),l(()=>import("./SwupA11yPlugin.D4H5V1DI.js"),__vite__mapDeps([0,1,2])).then(e=>e.default),l(()=>import("./SwupPreloadPlugin.CinulUaA.js"),__vite__mapDeps([3,2,1])).then(e=>e.default),l(()=>import("./SwupScrollPlugin.BsBqKDQ5.js"),__vite__mapDeps([4,2,1])).then(e=>e.default),l(()=>import("./SwupBodyClassPlugin.aa8fLSdp.js"),__vite__mapDeps([5,2])).then(e=>e.default),l(()=>import("./SwupHeadPlugin.FjGODCox.js"),__vite__mapDeps([6,2])).then(e=>e.default),l(()=>import("./SwupScriptsPlugin.o5PkFIdr.js"),__vite__mapDeps([7,2])).then(e=>e.default)]),_=new n({animationSelector:'[class*="transition-"]',containers:["main"],cache:!0,plugins:[new t(c("{}")),new r(c('{"preloadHoveredLinks":true,"preloadVisibleLinks":false}')),new u(c("{}")),new f(c("{}")),new s(c('{"awaitAssets":true}')),new i(c("{}"))]});window.swup=_}y(L);
