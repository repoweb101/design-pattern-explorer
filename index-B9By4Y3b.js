(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();var Me=!1,Le=!1,B=[],ke=-1;function Gn(e){Kn(e)}function Kn(e){B.includes(e)||B.push(e),Zn()}function Jn(e){let t=B.indexOf(e);t!==-1&&t>ke&&B.splice(t,1)}function Zn(){!Le&&!Me&&(Me=!0,queueMicrotask(Yn))}function Yn(){Me=!1,Le=!0;for(let e=0;e<B.length;e++)B[e](),ke=e;B.length=0,ke=-1,Le=!1}var W,N,V,Mt,Pe=!0;function Xn(e){Pe=!1,e(),Pe=!0}function Qn(e){W=e.reactive,V=e.release,N=t=>e.effect(t,{scheduler:n=>{Pe?Gn(n):n()}}),Mt=e.raw}function ht(e){N=e}function ea(e){let t=()=>{};return[a=>{let r=N(a);return e._x_effects||(e._x_effects=new Set,e._x_runEffects=()=>{e._x_effects.forEach(i=>i())}),e._x_effects.add(r),t=()=>{r!==void 0&&(e._x_effects.delete(r),V(r))},r},()=>{t()}]}function Lt(e,t){let n=!0,a,r=N(()=>{let i=e();JSON.stringify(i),n?a=i:queueMicrotask(()=>{t(i,a),a=i}),n=!1});return()=>V(r)}var kt=[],Pt=[],Bt=[];function ta(e){Bt.push(e)}function Je(e,t){typeof t=="function"?(e._x_cleanups||(e._x_cleanups=[]),e._x_cleanups.push(t)):(t=e,Pt.push(t))}function Ft(e){kt.push(e)}function Rt(e,t,n){e._x_attributeCleanups||(e._x_attributeCleanups={}),e._x_attributeCleanups[t]||(e._x_attributeCleanups[t]=[]),e._x_attributeCleanups[t].push(n)}function Tt(e,t){e._x_attributeCleanups&&Object.entries(e._x_attributeCleanups).forEach(([n,a])=>{(t===void 0||t.includes(n))&&(a.forEach(r=>r()),delete e._x_attributeCleanups[n])})}function na(e){for(e._x_effects?.forEach(Jn);e._x_cleanups?.length;)e._x_cleanups.pop()()}var Ze=new MutationObserver(et),Ye=!1;function Xe(){Ze.observe(document,{subtree:!0,childList:!0,attributes:!0,attributeOldValue:!0}),Ye=!0}function zt(){aa(),Ze.disconnect(),Ye=!1}var Y=[];function aa(){let e=Ze.takeRecords();Y.push(()=>e.length>0&&et(e));let t=Y.length;queueMicrotask(()=>{if(Y.length===t)for(;Y.length>0;)Y.shift()()})}function g(e){if(!Ye)return e();zt();let t=e();return Xe(),t}var Qe=!1,be=[];function ra(){Qe=!0}function ia(){Qe=!1,et(be),be=[]}function et(e){if(Qe){be=be.concat(e);return}let t=[],n=new Set,a=new Map,r=new Map;for(let i=0;i<e.length;i++)if(!e[i].target._x_ignoreMutationObserver&&(e[i].type==="childList"&&(e[i].removedNodes.forEach(o=>{o.nodeType===1&&o._x_marker&&n.add(o)}),e[i].addedNodes.forEach(o=>{if(o.nodeType===1){if(n.has(o)){n.delete(o);return}o._x_marker||t.push(o)}})),e[i].type==="attributes")){let o=e[i].target,s=e[i].attributeName,c=e[i].oldValue,l=()=>{a.has(o)||a.set(o,[]),a.get(o).push({name:s,value:o.getAttribute(s)})},u=()=>{r.has(o)||r.set(o,[]),r.get(o).push(s)};o.hasAttribute(s)&&c===null?l():o.hasAttribute(s)?(u(),l()):u()}r.forEach((i,o)=>{Tt(o,i)}),a.forEach((i,o)=>{kt.forEach(s=>s(o,i))});for(let i of n)t.some(o=>o.contains(i))||Pt.forEach(o=>o(i));for(let i of t)i.isConnected&&Bt.forEach(o=>o(i));t=null,n=null,a=null,r=null}function Nt(e){return ie(H(e))}function re(e,t,n){return e._x_dataStack=[t,...H(n||e)],()=>{e._x_dataStack=e._x_dataStack.filter(a=>a!==t)}}function H(e){return e._x_dataStack?e._x_dataStack:typeof ShadowRoot=="function"&&e instanceof ShadowRoot?H(e.host):e.parentNode?H(e.parentNode):[]}function ie(e){return new Proxy({objects:e},oa)}var oa={ownKeys({objects:e}){return Array.from(new Set(e.flatMap(t=>Object.keys(t))))},has({objects:e},t){return t==Symbol.unscopables?!1:e.some(n=>Object.prototype.hasOwnProperty.call(n,t)||Reflect.has(n,t))},get({objects:e},t,n){return t=="toJSON"?sa:Reflect.get(e.find(a=>Reflect.has(a,t))||{},t,n)},set({objects:e},t,n,a){const r=e.find(o=>Object.prototype.hasOwnProperty.call(o,t))||e[e.length-1],i=Object.getOwnPropertyDescriptor(r,t);return i?.set&&i?.get?i.set.call(a,n)||!0:Reflect.set(r,t,n)}};function sa(){return Reflect.ownKeys(this).reduce((t,n)=>(t[n]=Reflect.get(this,n),t),{})}function Dt(e){let t=a=>typeof a=="object"&&!Array.isArray(a)&&a!==null,n=(a,r="")=>{Object.entries(Object.getOwnPropertyDescriptors(a)).forEach(([i,{value:o,enumerable:s}])=>{if(s===!1||o===void 0||typeof o=="object"&&o!==null&&o.__v_skip)return;let c=r===""?i:`${r}.${i}`;typeof o=="object"&&o!==null&&o._x_interceptor?a[i]=o.initialize(e,c,i):t(o)&&o!==a&&!(o instanceof Element)&&n(o,c)})};return n(e)}function Ht(e,t=()=>{}){let n={initialValue:void 0,_x_interceptor:!0,initialize(a,r,i){return e(this.initialValue,()=>ca(a,r),o=>Be(a,r,o),r,i)}};return t(n),a=>{if(typeof a=="object"&&a!==null&&a._x_interceptor){let r=n.initialize.bind(n);n.initialize=(i,o,s)=>{let c=a.initialize(i,o,s);return n.initialValue=c,r(i,o,s)}}else n.initialValue=a;return n}}function ca(e,t){return t.split(".").reduce((n,a)=>n[a],e)}function Be(e,t,n){if(typeof t=="string"&&(t=t.split(".")),t.length===1)e[t[0]]=n;else{if(t.length===0)throw error;return e[t[0]]||(e[t[0]]={}),Be(e[t[0]],t.slice(1),n)}}var Ut={};function j(e,t){Ut[e]=t}function Fe(e,t){let n=la(t);return Object.entries(Ut).forEach(([a,r])=>{Object.defineProperty(e,`$${a}`,{get(){return r(t,n)},enumerable:!1})}),e}function la(e){let[t,n]=Zt(e),a={interceptor:Ht,...t};return Je(e,n),a}function ua(e,t,n,...a){try{return n(...a)}catch(r){ae(r,e,t)}}function ae(e,t,n=void 0){e=Object.assign(e??{message:"No error message given."},{el:t,expression:n}),console.warn(`Alpine Expression Error: ${e.message}

${n?'Expression: "'+n+`"

`:""}`,t),setTimeout(()=>{throw e},0)}var me=!0;function Wt(e){let t=me;me=!1;let n=e();return me=t,n}function F(e,t,n={}){let a;return S(e,t)(r=>a=r,n),a}function S(...e){return Vt(...e)}var Vt=Gt;function da(e){Vt=e}function Gt(e,t){let n={};Fe(n,e);let a=[n,...H(e)],r=typeof t=="function"?pa(a,t):fa(a,t,e);return ua.bind(null,e,t,r)}function pa(e,t){return(n=()=>{},{scope:a={},params:r=[],context:i}={})=>{let o=t.apply(ie([a,...e]),r);ge(n,o)}}var Ae={};function ma(e,t){if(Ae[e])return Ae[e];let n=Object.getPrototypeOf(async function(){}).constructor,a=/^[\n\s]*if.*\(.*\)/.test(e.trim())||/^(let|const)\s/.test(e.trim())?`(async()=>{ ${e} })()`:e,i=(()=>{try{let o=new n(["__self","scope"],`with (scope) { __self.result = ${a} }; __self.finished = true; return __self.result;`);return Object.defineProperty(o,"name",{value:`[Alpine] ${e}`}),o}catch(o){return ae(o,t,e),Promise.resolve()}})();return Ae[e]=i,i}function fa(e,t,n){let a=ma(t,n);return(r=()=>{},{scope:i={},params:o=[],context:s}={})=>{a.result=void 0,a.finished=!1;let c=ie([i,...e]);if(typeof a=="function"){let l=a.call(s,a,c).catch(u=>ae(u,n,t));a.finished?(ge(r,a.result,c,o,n),a.result=void 0):l.then(u=>{ge(r,u,c,o,n)}).catch(u=>ae(u,n,t)).finally(()=>a.result=void 0)}}}function ge(e,t,n,a,r){if(me&&typeof t=="function"){let i=t.apply(n,a);i instanceof Promise?i.then(o=>ge(e,o,n,a)).catch(o=>ae(o,r,t)):e(i)}else typeof t=="object"&&t instanceof Promise?t.then(i=>e(i)):e(t)}var tt="x-";function G(e=""){return tt+e}function ba(e){tt=e}var he={};function v(e,t){return he[e]=t,{before(n){if(!he[n]){console.warn(String.raw`Cannot find directive \`${n}\`. \`${e}\` will use the default order of execution`);return}const a=P.indexOf(n);P.splice(a>=0?a:P.indexOf("DEFAULT"),0,e)}}}function ga(e){return Object.keys(he).includes(e)}function nt(e,t,n){if(t=Array.from(t),e._x_virtualDirectives){let i=Object.entries(e._x_virtualDirectives).map(([s,c])=>({name:s,value:c})),o=Kt(i);i=i.map(s=>o.find(c=>c.name===s.name)?{name:`x-bind:${s.name}`,value:`"${s.value}"`}:s),t=t.concat(i)}let a={};return t.map(Qt((i,o)=>a[i]=o)).filter(tn).map(ya(a,n)).sort(Ca).map(i=>va(e,i))}function Kt(e){return Array.from(e).map(Qt()).filter(t=>!tn(t))}var Re=!1,ee=new Map,Jt=Symbol();function ha(e){Re=!0;let t=Symbol();Jt=t,ee.set(t,[]);let n=()=>{for(;ee.get(t).length;)ee.get(t).shift()();ee.delete(t)},a=()=>{Re=!1,n()};e(n),a()}function Zt(e){let t=[],n=s=>t.push(s),[a,r]=ea(e);return t.push(r),[{Alpine:oe,effect:a,cleanup:n,evaluateLater:S.bind(S,e),evaluate:F.bind(F,e)},()=>t.forEach(s=>s())]}function va(e,t){let n=()=>{},a=he[t.type]||n,[r,i]=Zt(e);Rt(e,t.original,i);let o=()=>{e._x_ignore||e._x_ignoreSelf||(a.inline&&a.inline(e,t,r),a=a.bind(a,e,t,r),Re?ee.get(Jt).push(a):a())};return o.runCleanups=i,o}var Yt=(e,t)=>({name:n,value:a})=>(n.startsWith(e)&&(n=n.replace(e,t)),{name:n,value:a}),Xt=e=>e;function Qt(e=()=>{}){return({name:t,value:n})=>{let{name:a,value:r}=en.reduce((i,o)=>o(i),{name:t,value:n});return a!==t&&e(a,t),{name:a,value:r}}}var en=[];function at(e){en.push(e)}function tn({name:e}){return nn().test(e)}var nn=()=>new RegExp(`^${tt}([^:^.]+)\\b`);function ya(e,t){return({name:n,value:a})=>{let r=n.match(nn()),i=n.match(/:([a-zA-Z0-9\-_:]+)/),o=n.match(/\.[^.\]]+(?=[^\]]*$)/g)||[],s=t||e[n]||n;return{type:r?r[1]:null,value:i?i[1]:null,modifiers:o.map(c=>c.replace(".","")),expression:a,original:s}}}var Te="DEFAULT",P=["ignore","ref","data","id","anchor","bind","init","for","model","modelable","transition","show","if",Te,"teleport"];function Ca(e,t){let n=P.indexOf(e.type)===-1?Te:e.type,a=P.indexOf(t.type)===-1?Te:t.type;return P.indexOf(n)-P.indexOf(a)}function te(e,t,n={}){e.dispatchEvent(new CustomEvent(t,{detail:n,bubbles:!0,composed:!0,cancelable:!0}))}function z(e,t){if(typeof ShadowRoot=="function"&&e instanceof ShadowRoot){Array.from(e.children).forEach(r=>z(r,t));return}let n=!1;if(t(e,()=>n=!0),n)return;let a=e.firstElementChild;for(;a;)z(a,t),a=a.nextElementSibling}function w(e,...t){console.warn(`Alpine Warning: ${e}`,...t)}var vt=!1;function Sa(){vt&&w("Alpine has already been initialized on this page. Calling Alpine.start() more than once can cause problems."),vt=!0,document.body||w("Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?"),te(document,"alpine:init"),te(document,"alpine:initializing"),Xe(),ta(t=>E(t,z)),Je(t=>J(t)),Ft((t,n)=>{nt(t,n).forEach(a=>a())});let e=t=>!ye(t.parentElement,!0);Array.from(document.querySelectorAll(on().join(","))).filter(e).forEach(t=>{E(t)}),te(document,"alpine:initialized"),setTimeout(()=>{$a()})}var rt=[],an=[];function rn(){return rt.map(e=>e())}function on(){return rt.concat(an).map(e=>e())}function sn(e){rt.push(e)}function cn(e){an.push(e)}function ye(e,t=!1){return K(e,n=>{if((t?on():rn()).some(r=>n.matches(r)))return!0})}function K(e,t){if(e){if(t(e))return e;if(e._x_teleportBack&&(e=e._x_teleportBack),!!e.parentElement)return K(e.parentElement,t)}}function _a(e){return rn().some(t=>e.matches(t))}var ln=[];function xa(e){ln.push(e)}var wa=1;function E(e,t=z,n=()=>{}){K(e,a=>a._x_ignore)||ha(()=>{t(e,(a,r)=>{a._x_marker||(n(a,r),ln.forEach(i=>i(a,r)),nt(a,a.attributes).forEach(i=>i()),a._x_ignore||(a._x_marker=wa++),a._x_ignore&&r())})})}function J(e,t=z){t(e,n=>{na(n),Tt(n),delete n._x_marker})}function $a(){[["ui","dialog",["[x-dialog], [x-popover]"]],["anchor","anchor",["[x-anchor]"]],["sort","sort",["[x-sort]"]]].forEach(([t,n,a])=>{ga(n)||a.some(r=>{if(document.querySelector(r))return w(`found "${r}", but missing ${t} plugin`),!0})})}var ze=[],it=!1;function ot(e=()=>{}){return queueMicrotask(()=>{it||setTimeout(()=>{Ne()})}),new Promise(t=>{ze.push(()=>{e(),t()})})}function Ne(){for(it=!1;ze.length;)ze.shift()()}function ja(){it=!0}function st(e,t){return Array.isArray(t)?yt(e,t.join(" ")):typeof t=="object"&&t!==null?Aa(e,t):typeof t=="function"?st(e,t()):yt(e,t)}function yt(e,t){let n=r=>r.split(" ").filter(i=>!e.classList.contains(i)).filter(Boolean),a=r=>(e.classList.add(...r),()=>{e.classList.remove(...r)});return t=t===!0?t="":t||"",a(n(t))}function Aa(e,t){let n=s=>s.split(" ").filter(Boolean),a=Object.entries(t).flatMap(([s,c])=>c?n(s):!1).filter(Boolean),r=Object.entries(t).flatMap(([s,c])=>c?!1:n(s)).filter(Boolean),i=[],o=[];return r.forEach(s=>{e.classList.contains(s)&&(e.classList.remove(s),o.push(s))}),a.forEach(s=>{e.classList.contains(s)||(e.classList.add(s),i.push(s))}),()=>{o.forEach(s=>e.classList.add(s)),i.forEach(s=>e.classList.remove(s))}}function Ce(e,t){return typeof t=="object"&&t!==null?Ea(e,t):qa(e,t)}function Ea(e,t){let n={};return Object.entries(t).forEach(([a,r])=>{n[a]=e.style[a],a.startsWith("--")||(a=Oa(a)),e.style.setProperty(a,r)}),setTimeout(()=>{e.style.length===0&&e.removeAttribute("style")}),()=>{Ce(e,n)}}function qa(e,t){let n=e.getAttribute("style",t);return e.setAttribute("style",t),()=>{e.setAttribute("style",n||"")}}function Oa(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function De(e,t=()=>{}){let n=!1;return function(){n?t.apply(this,arguments):(n=!0,e.apply(this,arguments))}}v("transition",(e,{value:t,modifiers:n,expression:a},{evaluate:r})=>{typeof a=="function"&&(a=r(a)),a!==!1&&(!a||typeof a=="boolean"?Ma(e,n,t):Ia(e,a,t))});function Ia(e,t,n){un(e,st,""),{enter:r=>{e._x_transition.enter.during=r},"enter-start":r=>{e._x_transition.enter.start=r},"enter-end":r=>{e._x_transition.enter.end=r},leave:r=>{e._x_transition.leave.during=r},"leave-start":r=>{e._x_transition.leave.start=r},"leave-end":r=>{e._x_transition.leave.end=r}}[n](t)}function Ma(e,t,n){un(e,Ce);let a=!t.includes("in")&&!t.includes("out")&&!n,r=a||t.includes("in")||["enter"].includes(n),i=a||t.includes("out")||["leave"].includes(n);t.includes("in")&&!a&&(t=t.filter((b,h)=>h<t.indexOf("out"))),t.includes("out")&&!a&&(t=t.filter((b,h)=>h>t.indexOf("out")));let o=!t.includes("opacity")&&!t.includes("scale"),s=o||t.includes("opacity"),c=o||t.includes("scale"),l=s?0:1,u=c?X(t,"scale",95)/100:1,p=X(t,"delay",0)/1e3,m=X(t,"origin","center"),y="opacity, transform",q=X(t,"duration",150)/1e3,se=X(t,"duration",75)/1e3,d="cubic-bezier(0.4, 0.0, 0.2, 1)";r&&(e._x_transition.enter.during={transformOrigin:m,transitionDelay:`${p}s`,transitionProperty:y,transitionDuration:`${q}s`,transitionTimingFunction:d},e._x_transition.enter.start={opacity:l,transform:`scale(${u})`},e._x_transition.enter.end={opacity:1,transform:"scale(1)"}),i&&(e._x_transition.leave.during={transformOrigin:m,transitionDelay:`${p}s`,transitionProperty:y,transitionDuration:`${se}s`,transitionTimingFunction:d},e._x_transition.leave.start={opacity:1,transform:"scale(1)"},e._x_transition.leave.end={opacity:l,transform:`scale(${u})`})}function un(e,t,n={}){e._x_transition||(e._x_transition={enter:{during:n,start:n,end:n},leave:{during:n,start:n,end:n},in(a=()=>{},r=()=>{}){He(e,t,{during:this.enter.during,start:this.enter.start,end:this.enter.end},a,r)},out(a=()=>{},r=()=>{}){He(e,t,{during:this.leave.during,start:this.leave.start,end:this.leave.end},a,r)}})}window.Element.prototype._x_toggleAndCascadeWithTransitions=function(e,t,n,a){const r=document.visibilityState==="visible"?requestAnimationFrame:setTimeout;let i=()=>r(n);if(t){e._x_transition&&(e._x_transition.enter||e._x_transition.leave)?e._x_transition.enter&&(Object.entries(e._x_transition.enter.during).length||Object.entries(e._x_transition.enter.start).length||Object.entries(e._x_transition.enter.end).length)?e._x_transition.in(n):i():e._x_transition?e._x_transition.in(n):i();return}e._x_hidePromise=e._x_transition?new Promise((o,s)=>{e._x_transition.out(()=>{},()=>o(a)),e._x_transitioning&&e._x_transitioning.beforeCancel(()=>s({isFromCancelledTransition:!0}))}):Promise.resolve(a),queueMicrotask(()=>{let o=dn(e);o?(o._x_hideChildren||(o._x_hideChildren=[]),o._x_hideChildren.push(e)):r(()=>{let s=c=>{let l=Promise.all([c._x_hidePromise,...(c._x_hideChildren||[]).map(s)]).then(([u])=>u?.());return delete c._x_hidePromise,delete c._x_hideChildren,l};s(e).catch(c=>{if(!c.isFromCancelledTransition)throw c})})})};function dn(e){let t=e.parentNode;if(t)return t._x_hidePromise?t:dn(t)}function He(e,t,{during:n,start:a,end:r}={},i=()=>{},o=()=>{}){if(e._x_transitioning&&e._x_transitioning.cancel(),Object.keys(n).length===0&&Object.keys(a).length===0&&Object.keys(r).length===0){i(),o();return}let s,c,l;La(e,{start(){s=t(e,a)},during(){c=t(e,n)},before:i,end(){s(),l=t(e,r)},after:o,cleanup(){c(),l()}})}function La(e,t){let n,a,r,i=De(()=>{g(()=>{n=!0,a||t.before(),r||(t.end(),Ne()),t.after(),e.isConnected&&t.cleanup(),delete e._x_transitioning})});e._x_transitioning={beforeCancels:[],beforeCancel(o){this.beforeCancels.push(o)},cancel:De(function(){for(;this.beforeCancels.length;)this.beforeCancels.shift()();i()}),finish:i},g(()=>{t.start(),t.during()}),ja(),requestAnimationFrame(()=>{if(n)return;let o=Number(getComputedStyle(e).transitionDuration.replace(/,.*/,"").replace("s",""))*1e3,s=Number(getComputedStyle(e).transitionDelay.replace(/,.*/,"").replace("s",""))*1e3;o===0&&(o=Number(getComputedStyle(e).animationDuration.replace("s",""))*1e3),g(()=>{t.before()}),a=!0,requestAnimationFrame(()=>{n||(g(()=>{t.end()}),Ne(),setTimeout(e._x_transitioning.finish,o+s),r=!0)})})}function X(e,t,n){if(e.indexOf(t)===-1)return n;const a=e[e.indexOf(t)+1];if(!a||t==="scale"&&isNaN(a))return n;if(t==="duration"||t==="delay"){let r=a.match(/([0-9]+)ms/);if(r)return r[1]}return t==="origin"&&["top","right","left","center","bottom"].includes(e[e.indexOf(t)+2])?[a,e[e.indexOf(t)+2]].join(" "):a}var I=!1;function L(e,t=()=>{}){return(...n)=>I?t(...n):e(...n)}function ka(e){return(...t)=>I&&e(...t)}var pn=[];function Se(e){pn.push(e)}function Pa(e,t){pn.forEach(n=>n(e,t)),I=!0,mn(()=>{E(t,(n,a)=>{a(n,()=>{})})}),I=!1}var Ue=!1;function Ba(e,t){t._x_dataStack||(t._x_dataStack=e._x_dataStack),I=!0,Ue=!0,mn(()=>{Fa(t)}),I=!1,Ue=!1}function Fa(e){let t=!1;E(e,(a,r)=>{z(a,(i,o)=>{if(t&&_a(i))return o();t=!0,r(i,o)})})}function mn(e){let t=N;ht((n,a)=>{let r=t(n);return V(r),()=>{}}),e(),ht(t)}function fn(e,t,n,a=[]){switch(e._x_bindings||(e._x_bindings=W({})),e._x_bindings[t]=n,t=a.includes("camel")?Wa(t):t,t){case"value":Ra(e,n);break;case"style":za(e,n);break;case"class":Ta(e,n);break;case"selected":case"checked":Na(e,t,n);break;default:bn(e,t,n);break}}function Ra(e,t){if(vn(e))e.attributes.value===void 0&&(e.value=t),window.fromModel&&(typeof t=="boolean"?e.checked=fe(e.value)===t:e.checked=Ct(e.value,t));else if(ct(e))Number.isInteger(t)?e.value=t:!Array.isArray(t)&&typeof t!="boolean"&&![null,void 0].includes(t)?e.value=String(t):Array.isArray(t)?e.checked=t.some(n=>Ct(n,e.value)):e.checked=!!t;else if(e.tagName==="SELECT")Ua(e,t);else{if(e.value===t)return;e.value=t===void 0?"":t}}function Ta(e,t){e._x_undoAddedClasses&&e._x_undoAddedClasses(),e._x_undoAddedClasses=st(e,t)}function za(e,t){e._x_undoAddedStyles&&e._x_undoAddedStyles(),e._x_undoAddedStyles=Ce(e,t)}function Na(e,t,n){bn(e,t,n),Ha(e,t,n)}function bn(e,t,n){[null,void 0,!1].includes(n)&&Ga(t)?e.removeAttribute(t):(gn(t)&&(n=t),Da(e,t,n))}function Da(e,t,n){e.getAttribute(t)!=n&&e.setAttribute(t,n)}function Ha(e,t,n){e[t]!==n&&(e[t]=n)}function Ua(e,t){const n=[].concat(t).map(a=>a+"");Array.from(e.options).forEach(a=>{a.selected=n.includes(a.value)})}function Wa(e){return e.toLowerCase().replace(/-(\w)/g,(t,n)=>n.toUpperCase())}function Ct(e,t){return e==t}function fe(e){return[1,"1","true","on","yes",!0].includes(e)?!0:[0,"0","false","off","no",!1].includes(e)?!1:e?!!e:null}var Va=new Set(["allowfullscreen","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","inert","ismap","itemscope","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected","shadowrootclonable","shadowrootdelegatesfocus","shadowrootserializable"]);function gn(e){return Va.has(e)}function Ga(e){return!["aria-pressed","aria-checked","aria-expanded","aria-selected"].includes(e)}function Ka(e,t,n){return e._x_bindings&&e._x_bindings[t]!==void 0?e._x_bindings[t]:hn(e,t,n)}function Ja(e,t,n,a=!0){if(e._x_bindings&&e._x_bindings[t]!==void 0)return e._x_bindings[t];if(e._x_inlineBindings&&e._x_inlineBindings[t]!==void 0){let r=e._x_inlineBindings[t];return r.extract=a,Wt(()=>F(e,r.expression))}return hn(e,t,n)}function hn(e,t,n){let a=e.getAttribute(t);return a===null?typeof n=="function"?n():n:a===""?!0:gn(t)?!![t,"true"].includes(a):a}function ct(e){return e.type==="checkbox"||e.localName==="ui-checkbox"||e.localName==="ui-switch"}function vn(e){return e.type==="radio"||e.localName==="ui-radio"}function yn(e,t){let n;return function(){const a=this,r=arguments,i=function(){n=null,e.apply(a,r)};clearTimeout(n),n=setTimeout(i,t)}}function Cn(e,t){let n;return function(){let a=this,r=arguments;n||(e.apply(a,r),n=!0,setTimeout(()=>n=!1,t))}}function Sn({get:e,set:t},{get:n,set:a}){let r=!0,i,o=N(()=>{let s=e(),c=n();if(r)a(Ee(s)),r=!1;else{let l=JSON.stringify(s),u=JSON.stringify(c);l!==i?a(Ee(s)):l!==u&&t(Ee(c))}i=JSON.stringify(e()),JSON.stringify(n())});return()=>{V(o)}}function Ee(e){return typeof e=="object"?JSON.parse(JSON.stringify(e)):e}function Za(e){(Array.isArray(e)?e:[e]).forEach(n=>n(oe))}var k={},St=!1;function Ya(e,t){if(St||(k=W(k),St=!0),t===void 0)return k[e];k[e]=t,Dt(k[e]),typeof t=="object"&&t!==null&&t.hasOwnProperty("init")&&typeof t.init=="function"&&k[e].init()}function Xa(){return k}var _n={};function Qa(e,t){let n=typeof t!="function"?()=>t:t;return e instanceof Element?xn(e,n()):(_n[e]=n,()=>{})}function er(e){return Object.entries(_n).forEach(([t,n])=>{Object.defineProperty(e,t,{get(){return(...a)=>n(...a)}})}),e}function xn(e,t,n){let a=[];for(;a.length;)a.pop()();let r=Object.entries(t).map(([o,s])=>({name:o,value:s})),i=Kt(r);return r=r.map(o=>i.find(s=>s.name===o.name)?{name:`x-bind:${o.name}`,value:`"${o.value}"`}:o),nt(e,r,n).map(o=>{a.push(o.runCleanups),o()}),()=>{for(;a.length;)a.pop()()}}var wn={};function tr(e,t){wn[e]=t}function nr(e,t){return Object.entries(wn).forEach(([n,a])=>{Object.defineProperty(e,n,{get(){return(...r)=>a.bind(t)(...r)},enumerable:!1})}),e}var ar={get reactive(){return W},get release(){return V},get effect(){return N},get raw(){return Mt},version:"3.15.1",flushAndStopDeferringMutations:ia,dontAutoEvaluateFunctions:Wt,disableEffectScheduling:Xn,startObservingMutations:Xe,stopObservingMutations:zt,setReactivityEngine:Qn,onAttributeRemoved:Rt,onAttributesAdded:Ft,closestDataStack:H,skipDuringClone:L,onlyDuringClone:ka,addRootSelector:sn,addInitSelector:cn,interceptClone:Se,addScopeToNode:re,deferMutations:ra,mapAttributes:at,evaluateLater:S,interceptInit:xa,setEvaluator:da,mergeProxies:ie,extractProp:Ja,findClosest:K,onElRemoved:Je,closestRoot:ye,destroyTree:J,interceptor:Ht,transition:He,setStyles:Ce,mutateDom:g,directive:v,entangle:Sn,throttle:Cn,debounce:yn,evaluate:F,initTree:E,nextTick:ot,prefixed:G,prefix:ba,plugin:Za,magic:j,store:Ya,start:Sa,clone:Ba,cloneNode:Pa,bound:Ka,$data:Nt,watch:Lt,walk:z,data:tr,bind:Qa},oe=ar;function rr(e,t){const n=Object.create(null),a=e.split(",");for(let r=0;r<a.length;r++)n[a[r]]=!0;return r=>!!n[r]}var ir=Object.freeze({}),or=Object.prototype.hasOwnProperty,_e=(e,t)=>or.call(e,t),R=Array.isArray,ne=e=>$n(e)==="[object Map]",sr=e=>typeof e=="string",lt=e=>typeof e=="symbol",xe=e=>e!==null&&typeof e=="object",cr=Object.prototype.toString,$n=e=>cr.call(e),jn=e=>$n(e).slice(8,-1),ut=e=>sr(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,lr=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},ur=lr(e=>e.charAt(0).toUpperCase()+e.slice(1)),An=(e,t)=>e!==t&&(e===e||t===t),We=new WeakMap,Q=[],A,T=Symbol("iterate"),Ve=Symbol("Map key iterate");function dr(e){return e&&e._isEffect===!0}function pr(e,t=ir){dr(e)&&(e=e.raw);const n=br(e,t);return t.lazy||n(),n}function mr(e){e.active&&(En(e),e.options.onStop&&e.options.onStop(),e.active=!1)}var fr=0;function br(e,t){const n=function(){if(!n.active)return e();if(!Q.includes(n)){En(n);try{return hr(),Q.push(n),A=n,e()}finally{Q.pop(),qn(),A=Q[Q.length-1]}}};return n.id=fr++,n.allowRecurse=!!t.allowRecurse,n._isEffect=!0,n.active=!0,n.raw=e,n.deps=[],n.options=t,n}function En(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}var U=!0,dt=[];function gr(){dt.push(U),U=!1}function hr(){dt.push(U),U=!0}function qn(){const e=dt.pop();U=e===void 0?!0:e}function $(e,t,n){if(!U||A===void 0)return;let a=We.get(e);a||We.set(e,a=new Map);let r=a.get(n);r||a.set(n,r=new Set),r.has(A)||(r.add(A),A.deps.push(r),A.options.onTrack&&A.options.onTrack({effect:A,target:e,type:t,key:n}))}function M(e,t,n,a,r,i){const o=We.get(e);if(!o)return;const s=new Set,c=u=>{u&&u.forEach(p=>{(p!==A||p.allowRecurse)&&s.add(p)})};if(t==="clear")o.forEach(c);else if(n==="length"&&R(e))o.forEach((u,p)=>{(p==="length"||p>=a)&&c(u)});else switch(n!==void 0&&c(o.get(n)),t){case"add":R(e)?ut(n)&&c(o.get("length")):(c(o.get(T)),ne(e)&&c(o.get(Ve)));break;case"delete":R(e)||(c(o.get(T)),ne(e)&&c(o.get(Ve)));break;case"set":ne(e)&&c(o.get(T));break}const l=u=>{u.options.onTrigger&&u.options.onTrigger({effect:u,target:e,key:n,type:t,newValue:a,oldValue:r,oldTarget:i}),u.options.scheduler?u.options.scheduler(u):u()};s.forEach(l)}var vr=rr("__proto__,__v_isRef,__isVue"),On=new Set(Object.getOwnPropertyNames(Symbol).map(e=>Symbol[e]).filter(lt)),yr=In(),Cr=In(!0),_t=Sr();function Sr(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const a=f(this);for(let i=0,o=this.length;i<o;i++)$(a,"get",i+"");const r=a[t](...n);return r===-1||r===!1?a[t](...n.map(f)):r}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){gr();const a=f(this)[t].apply(this,n);return qn(),a}}),e}function In(e=!1,t=!1){return function(a,r,i){if(r==="__v_isReactive")return!e;if(r==="__v_isReadonly")return e;if(r==="__v_raw"&&i===(e?t?Pr:Pn:t?kr:kn).get(a))return a;const o=R(a);if(!e&&o&&_e(_t,r))return Reflect.get(_t,r,i);const s=Reflect.get(a,r,i);return(lt(r)?On.has(r):vr(r))||(e||$(a,"get",r),t)?s:Ge(s)?!o||!ut(r)?s.value:s:xe(s)?e?Bn(s):bt(s):s}}var _r=xr();function xr(e=!1){return function(n,a,r,i){let o=n[a];if(!e&&(r=f(r),o=f(o),!R(n)&&Ge(o)&&!Ge(r)))return o.value=r,!0;const s=R(n)&&ut(a)?Number(a)<n.length:_e(n,a),c=Reflect.set(n,a,r,i);return n===f(i)&&(s?An(r,o)&&M(n,"set",a,r,o):M(n,"add",a,r)),c}}function wr(e,t){const n=_e(e,t),a=e[t],r=Reflect.deleteProperty(e,t);return r&&n&&M(e,"delete",t,void 0,a),r}function $r(e,t){const n=Reflect.has(e,t);return(!lt(t)||!On.has(t))&&$(e,"has",t),n}function jr(e){return $(e,"iterate",R(e)?"length":T),Reflect.ownKeys(e)}var Ar={get:yr,set:_r,deleteProperty:wr,has:$r,ownKeys:jr},Er={get:Cr,set(e,t){return console.warn(`Set operation on key "${String(t)}" failed: target is readonly.`,e),!0},deleteProperty(e,t){return console.warn(`Delete operation on key "${String(t)}" failed: target is readonly.`,e),!0}},pt=e=>xe(e)?bt(e):e,mt=e=>xe(e)?Bn(e):e,ft=e=>e,we=e=>Reflect.getPrototypeOf(e);function ce(e,t,n=!1,a=!1){e=e.__v_raw;const r=f(e),i=f(t);t!==i&&!n&&$(r,"get",t),!n&&$(r,"get",i);const{has:o}=we(r),s=a?ft:n?mt:pt;if(o.call(r,t))return s(e.get(t));if(o.call(r,i))return s(e.get(i));e!==r&&e.get(t)}function le(e,t=!1){const n=this.__v_raw,a=f(n),r=f(e);return e!==r&&!t&&$(a,"has",e),!t&&$(a,"has",r),e===r?n.has(e):n.has(e)||n.has(r)}function ue(e,t=!1){return e=e.__v_raw,!t&&$(f(e),"iterate",T),Reflect.get(e,"size",e)}function xt(e){e=f(e);const t=f(this);return we(t).has.call(t,e)||(t.add(e),M(t,"add",e,e)),this}function wt(e,t){t=f(t);const n=f(this),{has:a,get:r}=we(n);let i=a.call(n,e);i?Ln(n,a,e):(e=f(e),i=a.call(n,e));const o=r.call(n,e);return n.set(e,t),i?An(t,o)&&M(n,"set",e,t,o):M(n,"add",e,t),this}function $t(e){const t=f(this),{has:n,get:a}=we(t);let r=n.call(t,e);r?Ln(t,n,e):(e=f(e),r=n.call(t,e));const i=a?a.call(t,e):void 0,o=t.delete(e);return r&&M(t,"delete",e,void 0,i),o}function jt(){const e=f(this),t=e.size!==0,n=ne(e)?new Map(e):new Set(e),a=e.clear();return t&&M(e,"clear",void 0,void 0,n),a}function de(e,t){return function(a,r){const i=this,o=i.__v_raw,s=f(o),c=t?ft:e?mt:pt;return!e&&$(s,"iterate",T),o.forEach((l,u)=>a.call(r,c(l),c(u),i))}}function pe(e,t,n){return function(...a){const r=this.__v_raw,i=f(r),o=ne(i),s=e==="entries"||e===Symbol.iterator&&o,c=e==="keys"&&o,l=r[e](...a),u=n?ft:t?mt:pt;return!t&&$(i,"iterate",c?Ve:T),{next(){const{value:p,done:m}=l.next();return m?{value:p,done:m}:{value:s?[u(p[0]),u(p[1])]:u(p),done:m}},[Symbol.iterator](){return this}}}}function O(e){return function(...t){{const n=t[0]?`on key "${t[0]}" `:"";console.warn(`${ur(e)} operation ${n}failed: target is readonly.`,f(this))}return e==="delete"?!1:this}}function qr(){const e={get(i){return ce(this,i)},get size(){return ue(this)},has:le,add:xt,set:wt,delete:$t,clear:jt,forEach:de(!1,!1)},t={get(i){return ce(this,i,!1,!0)},get size(){return ue(this)},has:le,add:xt,set:wt,delete:$t,clear:jt,forEach:de(!1,!0)},n={get(i){return ce(this,i,!0)},get size(){return ue(this,!0)},has(i){return le.call(this,i,!0)},add:O("add"),set:O("set"),delete:O("delete"),clear:O("clear"),forEach:de(!0,!1)},a={get(i){return ce(this,i,!0,!0)},get size(){return ue(this,!0)},has(i){return le.call(this,i,!0)},add:O("add"),set:O("set"),delete:O("delete"),clear:O("clear"),forEach:de(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=pe(i,!1,!1),n[i]=pe(i,!0,!1),t[i]=pe(i,!1,!0),a[i]=pe(i,!0,!0)}),[e,n,t,a]}var[Or,Ir]=qr();function Mn(e,t){const n=e?Ir:Or;return(a,r,i)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?a:Reflect.get(_e(n,r)&&r in a?n:a,r,i)}var Mr={get:Mn(!1)},Lr={get:Mn(!0)};function Ln(e,t,n){const a=f(n);if(a!==n&&t.call(e,a)){const r=jn(e);console.warn(`Reactive ${r} contains both the raw and reactive versions of the same object${r==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}var kn=new WeakMap,kr=new WeakMap,Pn=new WeakMap,Pr=new WeakMap;function Br(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Fr(e){return e.__v_skip||!Object.isExtensible(e)?0:Br(jn(e))}function bt(e){return e&&e.__v_isReadonly?e:Fn(e,!1,Ar,Mr,kn)}function Bn(e){return Fn(e,!0,Er,Lr,Pn)}function Fn(e,t,n,a,r){if(!xe(e))return console.warn(`value cannot be made reactive: ${String(e)}`),e;if(e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=r.get(e);if(i)return i;const o=Fr(e);if(o===0)return e;const s=new Proxy(e,o===2?a:n);return r.set(e,s),s}function f(e){return e&&f(e.__v_raw)||e}function Ge(e){return!!(e&&e.__v_isRef===!0)}j("nextTick",()=>ot);j("dispatch",e=>te.bind(te,e));j("watch",(e,{evaluateLater:t,cleanup:n})=>(a,r)=>{let i=t(a),s=Lt(()=>{let c;return i(l=>c=l),c},r);n(s)});j("store",Xa);j("data",e=>Nt(e));j("root",e=>ye(e));j("refs",e=>(e._x_refs_proxy||(e._x_refs_proxy=ie(Rr(e))),e._x_refs_proxy));function Rr(e){let t=[];return K(e,n=>{n._x_refs&&t.push(n._x_refs)}),t}var qe={};function Rn(e){return qe[e]||(qe[e]=0),++qe[e]}function Tr(e,t){return K(e,n=>{if(n._x_ids&&n._x_ids[t])return!0})}function zr(e,t){e._x_ids||(e._x_ids={}),e._x_ids[t]||(e._x_ids[t]=Rn(t))}j("id",(e,{cleanup:t})=>(n,a=null)=>{let r=`${n}${a?`-${a}`:""}`;return Nr(e,r,t,()=>{let i=Tr(e,n),o=i?i._x_ids[n]:Rn(n);return a?`${n}-${o}-${a}`:`${n}-${o}`})});Se((e,t)=>{e._x_id&&(t._x_id=e._x_id)});function Nr(e,t,n,a){if(e._x_id||(e._x_id={}),e._x_id[t])return e._x_id[t];let r=a();return e._x_id[t]=r,n(()=>{delete e._x_id[t]}),r}j("el",e=>e);Tn("Focus","focus","focus");Tn("Persist","persist","persist");function Tn(e,t,n){j(t,a=>w(`You can't use [$${t}] without first installing the "${e}" plugin here: https://alpinejs.dev/plugins/${n}`,a))}v("modelable",(e,{expression:t},{effect:n,evaluateLater:a,cleanup:r})=>{let i=a(t),o=()=>{let u;return i(p=>u=p),u},s=a(`${t} = __placeholder`),c=u=>s(()=>{},{scope:{__placeholder:u}}),l=o();c(l),queueMicrotask(()=>{if(!e._x_model)return;e._x_removeModelListeners.default();let u=e._x_model.get,p=e._x_model.set,m=Sn({get(){return u()},set(y){p(y)}},{get(){return o()},set(y){c(y)}});r(m)})});v("teleport",(e,{modifiers:t,expression:n},{cleanup:a})=>{e.tagName.toLowerCase()!=="template"&&w("x-teleport can only be used on a <template> tag",e);let r=At(n),i=e.content.cloneNode(!0).firstElementChild;e._x_teleport=i,i._x_teleportBack=e,e.setAttribute("data-teleport-template",!0),i.setAttribute("data-teleport-target",!0),e._x_forwardEvents&&e._x_forwardEvents.forEach(s=>{i.addEventListener(s,c=>{c.stopPropagation(),e.dispatchEvent(new c.constructor(c.type,c))})}),re(i,{},e);let o=(s,c,l)=>{l.includes("prepend")?c.parentNode.insertBefore(s,c):l.includes("append")?c.parentNode.insertBefore(s,c.nextSibling):c.appendChild(s)};g(()=>{o(i,r,t),L(()=>{E(i)})()}),e._x_teleportPutBack=()=>{let s=At(n);g(()=>{o(e._x_teleport,s,t)})},a(()=>g(()=>{i.remove(),J(i)}))});var Dr=document.createElement("div");function At(e){let t=L(()=>document.querySelector(e),()=>Dr)();return t||w(`Cannot find x-teleport element for selector: "${e}"`),t}var zn=()=>{};zn.inline=(e,{modifiers:t},{cleanup:n})=>{t.includes("self")?e._x_ignoreSelf=!0:e._x_ignore=!0,n(()=>{t.includes("self")?delete e._x_ignoreSelf:delete e._x_ignore})};v("ignore",zn);v("effect",L((e,{expression:t},{effect:n})=>{n(S(e,t))}));function Ke(e,t,n,a){let r=e,i=c=>a(c),o={},s=(c,l)=>u=>l(c,u);if(n.includes("dot")&&(t=Hr(t)),n.includes("camel")&&(t=Ur(t)),n.includes("passive")&&(o.passive=!0),n.includes("capture")&&(o.capture=!0),n.includes("window")&&(r=window),n.includes("document")&&(r=document),n.includes("debounce")){let c=n[n.indexOf("debounce")+1]||"invalid-wait",l=ve(c.split("ms")[0])?Number(c.split("ms")[0]):250;i=yn(i,l)}if(n.includes("throttle")){let c=n[n.indexOf("throttle")+1]||"invalid-wait",l=ve(c.split("ms")[0])?Number(c.split("ms")[0]):250;i=Cn(i,l)}return n.includes("prevent")&&(i=s(i,(c,l)=>{l.preventDefault(),c(l)})),n.includes("stop")&&(i=s(i,(c,l)=>{l.stopPropagation(),c(l)})),n.includes("once")&&(i=s(i,(c,l)=>{c(l),r.removeEventListener(t,i,o)})),(n.includes("away")||n.includes("outside"))&&(r=document,i=s(i,(c,l)=>{e.contains(l.target)||l.target.isConnected!==!1&&(e.offsetWidth<1&&e.offsetHeight<1||e._x_isShown!==!1&&c(l))})),n.includes("self")&&(i=s(i,(c,l)=>{l.target===e&&c(l)})),(Vr(t)||Nn(t))&&(i=s(i,(c,l)=>{Gr(l,n)||c(l)})),r.addEventListener(t,i,o),()=>{r.removeEventListener(t,i,o)}}function Hr(e){return e.replace(/-/g,".")}function Ur(e){return e.toLowerCase().replace(/-(\w)/g,(t,n)=>n.toUpperCase())}function ve(e){return!Array.isArray(e)&&!isNaN(e)}function Wr(e){return[" ","_"].includes(e)?e:e.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/[_\s]/,"-").toLowerCase()}function Vr(e){return["keydown","keyup"].includes(e)}function Nn(e){return["contextmenu","click","mouse"].some(t=>e.includes(t))}function Gr(e,t){let n=t.filter(i=>!["window","document","prevent","stop","once","capture","self","away","outside","passive","preserve-scroll"].includes(i));if(n.includes("debounce")){let i=n.indexOf("debounce");n.splice(i,ve((n[i+1]||"invalid-wait").split("ms")[0])?2:1)}if(n.includes("throttle")){let i=n.indexOf("throttle");n.splice(i,ve((n[i+1]||"invalid-wait").split("ms")[0])?2:1)}if(n.length===0||n.length===1&&Et(e.key).includes(n[0]))return!1;const r=["ctrl","shift","alt","meta","cmd","super"].filter(i=>n.includes(i));return n=n.filter(i=>!r.includes(i)),!(r.length>0&&r.filter(o=>((o==="cmd"||o==="super")&&(o="meta"),e[`${o}Key`])).length===r.length&&(Nn(e.type)||Et(e.key).includes(n[0])))}function Et(e){if(!e)return[];e=Wr(e);let t={ctrl:"control",slash:"/",space:" ",spacebar:" ",cmd:"meta",esc:"escape",up:"arrow-up",down:"arrow-down",left:"arrow-left",right:"arrow-right",period:".",comma:",",equal:"=",minus:"-",underscore:"_"};return t[e]=e,Object.keys(t).map(n=>{if(t[n]===e)return n}).filter(n=>n)}v("model",(e,{modifiers:t,expression:n},{effect:a,cleanup:r})=>{let i=e;t.includes("parent")&&(i=e.parentNode);let o=S(i,n),s;typeof n=="string"?s=S(i,`${n} = __placeholder`):typeof n=="function"&&typeof n()=="string"?s=S(i,`${n()} = __placeholder`):s=()=>{};let c=()=>{let m;return o(y=>m=y),qt(m)?m.get():m},l=m=>{let y;o(q=>y=q),qt(y)?y.set(m):s(()=>{},{scope:{__placeholder:m}})};typeof n=="string"&&e.type==="radio"&&g(()=>{e.hasAttribute("name")||e.setAttribute("name",n)});let u=e.tagName.toLowerCase()==="select"||["checkbox","radio"].includes(e.type)||t.includes("lazy")?"change":"input",p=I?()=>{}:Ke(e,u,t,m=>{l(Oe(e,t,m,c()))});if(t.includes("fill")&&([void 0,null,""].includes(c())||ct(e)&&Array.isArray(c())||e.tagName.toLowerCase()==="select"&&e.multiple)&&l(Oe(e,t,{target:e},c())),e._x_removeModelListeners||(e._x_removeModelListeners={}),e._x_removeModelListeners.default=p,r(()=>e._x_removeModelListeners.default()),e.form){let m=Ke(e.form,"reset",[],y=>{ot(()=>e._x_model&&e._x_model.set(Oe(e,t,{target:e},c())))});r(()=>m())}e._x_model={get(){return c()},set(m){l(m)}},e._x_forceModelUpdate=m=>{m===void 0&&typeof n=="string"&&n.match(/\./)&&(m=""),window.fromModel=!0,g(()=>fn(e,"value",m)),delete window.fromModel},a(()=>{let m=c();t.includes("unintrusive")&&document.activeElement.isSameNode(e)||e._x_forceModelUpdate(m)})});function Oe(e,t,n,a){return g(()=>{if(n instanceof CustomEvent&&n.detail!==void 0)return n.detail!==null&&n.detail!==void 0?n.detail:n.target.value;if(ct(e))if(Array.isArray(a)){let r=null;return t.includes("number")?r=Ie(n.target.value):t.includes("boolean")?r=fe(n.target.value):r=n.target.value,n.target.checked?a.includes(r)?a:a.concat([r]):a.filter(i=>!Kr(i,r))}else return n.target.checked;else{if(e.tagName.toLowerCase()==="select"&&e.multiple)return t.includes("number")?Array.from(n.target.selectedOptions).map(r=>{let i=r.value||r.text;return Ie(i)}):t.includes("boolean")?Array.from(n.target.selectedOptions).map(r=>{let i=r.value||r.text;return fe(i)}):Array.from(n.target.selectedOptions).map(r=>r.value||r.text);{let r;return vn(e)?n.target.checked?r=n.target.value:r=a:r=n.target.value,t.includes("number")?Ie(r):t.includes("boolean")?fe(r):t.includes("trim")?r.trim():r}}})}function Ie(e){let t=e?parseFloat(e):null;return Jr(t)?t:e}function Kr(e,t){return e==t}function Jr(e){return!Array.isArray(e)&&!isNaN(e)}function qt(e){return e!==null&&typeof e=="object"&&typeof e.get=="function"&&typeof e.set=="function"}v("cloak",e=>queueMicrotask(()=>g(()=>e.removeAttribute(G("cloak")))));cn(()=>`[${G("init")}]`);v("init",L((e,{expression:t},{evaluate:n})=>typeof t=="string"?!!t.trim()&&n(t,{},!1):n(t,{},!1)));v("text",(e,{expression:t},{effect:n,evaluateLater:a})=>{let r=a(t);n(()=>{r(i=>{g(()=>{e.textContent=i})})})});v("html",(e,{expression:t},{effect:n,evaluateLater:a})=>{let r=a(t);n(()=>{r(i=>{g(()=>{e.innerHTML=i,e._x_ignoreSelf=!0,E(e),delete e._x_ignoreSelf})})})});at(Yt(":",Xt(G("bind:"))));var Dn=(e,{value:t,modifiers:n,expression:a,original:r},{effect:i,cleanup:o})=>{if(!t){let c={};er(c),S(e,a)(u=>{xn(e,u,r)},{scope:c});return}if(t==="key")return Zr(e,a);if(e._x_inlineBindings&&e._x_inlineBindings[t]&&e._x_inlineBindings[t].extract)return;let s=S(e,a);i(()=>s(c=>{c===void 0&&typeof a=="string"&&a.match(/\./)&&(c=""),g(()=>fn(e,t,c,n))})),o(()=>{e._x_undoAddedClasses&&e._x_undoAddedClasses(),e._x_undoAddedStyles&&e._x_undoAddedStyles()})};Dn.inline=(e,{value:t,modifiers:n,expression:a})=>{t&&(e._x_inlineBindings||(e._x_inlineBindings={}),e._x_inlineBindings[t]={expression:a,extract:!1})};v("bind",Dn);function Zr(e,t){e._x_keyExpression=t}sn(()=>`[${G("data")}]`);v("data",(e,{expression:t},{cleanup:n})=>{if(Yr(e))return;t=t===""?"{}":t;let a={};Fe(a,e);let r={};nr(r,a);let i=F(e,t,{scope:r});(i===void 0||i===!0)&&(i={}),Fe(i,e);let o=W(i);Dt(o);let s=re(e,o);o.init&&F(e,o.init),n(()=>{o.destroy&&F(e,o.destroy),s()})});Se((e,t)=>{e._x_dataStack&&(t._x_dataStack=e._x_dataStack,t.setAttribute("data-has-alpine-state",!0))});function Yr(e){return I?Ue?!0:e.hasAttribute("data-has-alpine-state"):!1}v("show",(e,{modifiers:t,expression:n},{effect:a})=>{let r=S(e,n);e._x_doHide||(e._x_doHide=()=>{g(()=>{e.style.setProperty("display","none",t.includes("important")?"important":void 0)})}),e._x_doShow||(e._x_doShow=()=>{g(()=>{e.style.length===1&&e.style.display==="none"?e.removeAttribute("style"):e.style.removeProperty("display")})});let i=()=>{e._x_doHide(),e._x_isShown=!1},o=()=>{e._x_doShow(),e._x_isShown=!0},s=()=>setTimeout(o),c=De(p=>p?o():i(),p=>{typeof e._x_toggleAndCascadeWithTransitions=="function"?e._x_toggleAndCascadeWithTransitions(e,p,o,i):p?s():i()}),l,u=!0;a(()=>r(p=>{!u&&p===l||(t.includes("immediate")&&(p?s():i()),c(p),l=p,u=!1)}))});v("for",(e,{expression:t},{effect:n,cleanup:a})=>{let r=Qr(t),i=S(e,r.items),o=S(e,e._x_keyExpression||"index");e._x_prevKeys=[],e._x_lookup={},n(()=>Xr(e,r,i,o)),a(()=>{Object.values(e._x_lookup).forEach(s=>g(()=>{J(s),s.remove()})),delete e._x_prevKeys,delete e._x_lookup})});function Xr(e,t,n,a){let r=o=>typeof o=="object"&&!Array.isArray(o),i=e;n(o=>{ei(o)&&o>=0&&(o=Array.from(Array(o).keys(),d=>d+1)),o===void 0&&(o=[]);let s=e._x_lookup,c=e._x_prevKeys,l=[],u=[];if(r(o))o=Object.entries(o).map(([d,b])=>{let h=Ot(t,b,d,o);a(C=>{u.includes(C)&&w("Duplicate key on x-for",e),u.push(C)},{scope:{index:d,...h}}),l.push(h)});else for(let d=0;d<o.length;d++){let b=Ot(t,o[d],d,o);a(h=>{u.includes(h)&&w("Duplicate key on x-for",e),u.push(h)},{scope:{index:d,...b}}),l.push(b)}let p=[],m=[],y=[],q=[];for(let d=0;d<c.length;d++){let b=c[d];u.indexOf(b)===-1&&y.push(b)}c=c.filter(d=>!y.includes(d));let se="template";for(let d=0;d<u.length;d++){let b=u[d],h=c.indexOf(b);if(h===-1)c.splice(d,0,b),p.push([se,d]);else if(h!==d){let C=c.splice(d,1)[0],x=c.splice(h-1,1)[0];c.splice(d,0,x),c.splice(h,0,C),m.push([C,x])}else q.push(b);se=b}for(let d=0;d<y.length;d++){let b=y[d];b in s&&(g(()=>{J(s[b]),s[b].remove()}),delete s[b])}for(let d=0;d<m.length;d++){let[b,h]=m[d],C=s[b],x=s[h],D=document.createElement("div");g(()=>{x||w('x-for ":key" is undefined or invalid',i,h,s),x.after(D),C.after(x),x._x_currentIfEl&&x.after(x._x_currentIfEl),D.before(C),C._x_currentIfEl&&C.after(C._x_currentIfEl),D.remove()}),x._x_refreshXForScope(l[u.indexOf(h)])}for(let d=0;d<p.length;d++){let[b,h]=p[d],C=b==="template"?i:s[b];C._x_currentIfEl&&(C=C._x_currentIfEl);let x=l[h],D=u[h],Z=document.importNode(i.content,!0).firstElementChild,gt=W(x);re(Z,gt,i),Z._x_refreshXForScope=Un=>{Object.entries(Un).forEach(([Wn,Vn])=>{gt[Wn]=Vn})},g(()=>{C.after(Z),L(()=>E(Z))()}),typeof D=="object"&&w("x-for key cannot be an object, it must be a string or an integer",i),s[D]=Z}for(let d=0;d<q.length;d++)s[q[d]]._x_refreshXForScope(l[u.indexOf(q[d])]);i._x_prevKeys=u})}function Qr(e){let t=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,n=/^\s*\(|\)\s*$/g,a=/([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,r=e.match(a);if(!r)return;let i={};i.items=r[2].trim();let o=r[1].replace(n,"").trim(),s=o.match(t);return s?(i.item=o.replace(t,"").trim(),i.index=s[1].trim(),s[2]&&(i.collection=s[2].trim())):i.item=o,i}function Ot(e,t,n,a){let r={};return/^\[.*\]$/.test(e.item)&&Array.isArray(t)?e.item.replace("[","").replace("]","").split(",").map(o=>o.trim()).forEach((o,s)=>{r[o]=t[s]}):/^\{.*\}$/.test(e.item)&&!Array.isArray(t)&&typeof t=="object"?e.item.replace("{","").replace("}","").split(",").map(o=>o.trim()).forEach(o=>{r[o]=t[o]}):r[e.item]=t,e.index&&(r[e.index]=n),e.collection&&(r[e.collection]=a),r}function ei(e){return!Array.isArray(e)&&!isNaN(e)}function Hn(){}Hn.inline=(e,{expression:t},{cleanup:n})=>{let a=ye(e);a._x_refs||(a._x_refs={}),a._x_refs[t]=e,n(()=>delete a._x_refs[t])};v("ref",Hn);v("if",(e,{expression:t},{effect:n,cleanup:a})=>{e.tagName.toLowerCase()!=="template"&&w("x-if can only be used on a <template> tag",e);let r=S(e,t),i=()=>{if(e._x_currentIfEl)return e._x_currentIfEl;let s=e.content.cloneNode(!0).firstElementChild;return re(s,{},e),g(()=>{e.after(s),L(()=>E(s))()}),e._x_currentIfEl=s,e._x_undoIf=()=>{g(()=>{J(s),s.remove()}),delete e._x_currentIfEl},s},o=()=>{e._x_undoIf&&(e._x_undoIf(),delete e._x_undoIf)};n(()=>r(s=>{s?i():o()})),a(()=>e._x_undoIf&&e._x_undoIf())});v("id",(e,{expression:t},{evaluate:n})=>{n(t).forEach(r=>zr(e,r))});Se((e,t)=>{e._x_ids&&(t._x_ids=e._x_ids)});at(Yt("@",Xt(G("on:"))));v("on",L((e,{value:t,modifiers:n,expression:a},{cleanup:r})=>{let i=a?S(e,a):()=>{};e.tagName.toLowerCase()==="template"&&(e._x_forwardEvents||(e._x_forwardEvents=[]),e._x_forwardEvents.includes(t)||e._x_forwardEvents.push(t));let o=Ke(e,t,n,s=>{i(()=>{},{scope:{$event:s},params:[s]})});r(()=>o())}));$e("Collapse","collapse","collapse");$e("Intersect","intersect","intersect");$e("Focus","trap","focus");$e("Mask","mask","mask");function $e(e,t,n){v(t,a=>w(`You can't use [x-${t}] without first installing the "${e}" plugin here: https://alpinejs.dev/plugins/${n}`,a))}oe.setEvaluator(Gt);oe.setReactivityEngine({reactive:bt,effect:pr,release:mr,raw:f});var ti=oe,je=ti;const ni=[{name:"Singleton",type:"Creacional",description:"El patrón Singleton es un patrón de diseño creacional que garantiza que una clase tenga una sola instancia, a la vez que proporciona un único punto de acceso global a dicha instancia. Esto se logra haciendo que el constructor sea privado para evitar la instanciación directa y creando un método estático que maneja la creación y recuperación de la instancia. La primera vez que se llama a este método, crea la instancia; en cada llamada posterior, devuelve la misma instancia ya creada.",useCase:"Este patrón es ideal para escenarios donde se necesita exactamente un objeto para coordinar acciones en todo el sistema. Ejemplos comunes incluyen un gestor de configuración centralizado que proporciona ajustes consistentes a todas las partes de una aplicación, un servicio de logging que canaliza todos los mensajes de registro a un único archivo, o un pool de conexiones de base de datos que gestiona un conjunto finito de conexiones para evitar el agotamiento de recursos. Usar un Singleton asegura que todas las partes de la aplicación compartan la misma instancia de recurso, previniendo conflictos y estados inconsistentes.",codeExample:{php:`
    <?php

    class Singleton
    {
        private static ?Singleton $instance = null;

        // The constructor is private to prevent direct instantiation.
        private function __construct() { }

        // Cloning and unserialization are not permitted.
        protected function __clone() { }
        public function __wakeup()
        {
            throw new Exception("Cannot unserialize a singleton.");
        }

        public static function getInstance(): Singleton
        {
            if (self::$instance === null) {
                self::$instance = new self();
            }
            return self::$instance;
        }

        public function someBusinessLogic(): void
        {
            echo "Singleton business logic is running.\\n";
        }
    }

    // Client code
    $s1 = Singleton::getInstance();
    $s2 = Singleton::getInstance();

    if ($s1 === $s2) {
        echo "Singleton works, both variables contain the same instance.\\n";
    } else {
        echo "Singleton failed, variables contain different instances.\\n";
    }

    $s1->someBusinessLogic();
    `,java:`
    public class Singleton {
        // The volatile keyword ensures that multiple threads handle the instance variable correctly.
        private static volatile Singleton instance;
        public String value;

        // The constructor is private to prevent direct instantiation.
        private Singleton(String value) {
            this.value = value;
        }

        public static Singleton getInstance(String value) {
            // The double-checked locking pattern is used to avoid expensive locking
            // once the instance is initialized.
            if (instance == null) {
                synchronized (Singleton.class) {
                    if (instance == null) {
                        instance = new Singleton(value);
                    }
                }
            }
            return instance;
        }
        
        public void someBusinessLogic() {
            System.out.println("Singleton business logic is running.");
        }
    }

    // Client code
    class Application {
        public static void main(String[] args) {
            Singleton s1 = Singleton.getInstance("FOO");
            Singleton s2 = Singleton.getInstance("BAR");
            System.out.println(s1.value); // FOO
            System.out.println(s2.value); // FOO (The second call ignores the value)
            
            if (s1 == s2) {
                System.out.println("Singleton works, both variables contain the same instance.");
            } else {
                System.out.println("Singleton failed, variables contain different instances.");
            }
        }
    }
    `,csharp:`
    public sealed class Singleton
    {
        private static readonly Lazy<Singleton> lazy =
            new Lazy<Singleton>(() => new Singleton());

        public static Singleton Instance { get { return lazy.Value; } }
        
        // The constructor is private to prevent direct instantiation.
        private Singleton()
        {
            // Initialization code here
        }

        public void SomeBusinessLogic()
        {
            Console.WriteLine("Singleton business logic is running.");
        }
    }

    // Client code
    public class Application
    {
        public static void Main(string[] args)
        {
            Singleton s1 = Singleton.Instance;
            Singleton s2 = Singleton.Instance;

            if (s1 == s2)
            {
                Console.WriteLine("Singleton works, both variables contain the same instance.");
            }
            else
            {
                Console.WriteLine("Singleton failed, variables contain different instances.");
            }
            
            s1.SomeBusinessLogic();
        }
    }
    `},codeExplanation:"La idea central es hacer el constructor `private`, previniendo la creación directa del objeto. Se expone un método o propiedad `static` (como `getInstance()` o `Instance`) para proporcionar el punto de acceso global. Este método es responsable de crear la instancia si no existe y luego devolverla. Los ejemplos muestran implementaciones seguras para hilos (thread-safe): el enfoque de PHP es generalmente seguro en su arquitectura típica de 'nada compartido', mientras que el ejemplo de Java usa bloqueo de doble verificación y el ejemplo de C# utiliza `Lazy<T>` para una inicialización simple y robusta a prueba de hilos."},{name:"Factory Method",type:"Creacional",description:"El Factory Method es un patrón creacional que proporciona una interfaz para crear objetos en una superclase, pero permite a las subclases alterar el tipo de objetos que se crearán. Encapsula la lógica de instanciación, lo que significa que el código cliente que utiliza la fábrica no necesita saber qué clase específica está obteniendo; solo sabe que obtendrá un objeto que se ajusta a una interfaz particular.",useCase:"Usa este patrón cuando una clase no puede anticipar la clase de objetos que necesita crear, o cuando una clase quiere que sus subclases especifiquen los objetos que crea. Es muy común en frameworks y bibliotecas donde el código de la biblioteca necesita crear objetos de tipos definidos por la aplicación cliente. Por ejemplo, un framework de UI podría proporcionar un creador genérico de `Button`, pero permitirte crear `WindowsButton`, `MacButton` o `LinuxButton` en tu aplicación extendiendo el creador.",codeExample:{php:`
    <?php

    interface Product {
        public function operation(): string;
    }

    class ConcreteProductA implements Product {
        public function operation(): string {
            return "{Result of the ConcreteProductA}";
        }
    }

    class ConcreteProductB implements Product {
        public function operation(): string {
            return "{Result of the ConcreteProductB}";
        }
    }

    abstract class Creator {
        abstract public function factoryMethod(): Product;

        public function someOperation(): string {
            $product = $this->factoryMethod();
            return "Creator: The same creator's code has just worked with " . $product->operation();
        }
    }

    class ConcreteCreatorA extends Creator {
        public function factoryMethod(): Product {
            return new ConcreteProductA();
        }
    }

    class ConcreteCreatorB extends Creator {
        public function factoryMethod(): Product {
            return new ConcreteProductB();
        }
    }

    // Client code
    function clientCode(Creator $creator) {
        echo $creator->someOperation() . "\\n";
    }

    clientCode(new ConcreteCreatorA());
    clientCode(new ConcreteCreatorB());
    `,java:`
    // Product interface
    interface Product {
        String operation();
    }

    // Concrete Products
    class ConcreteProductA implements Product {
        public String operation() {
            return "{Result of ConcreteProductA}";
        }
    }

    class ConcreteProductB implements Product {
        public String operation() {
            return "{Result of ConcreteProductB}";
        }
    }

    // Creator
    abstract class Creator {
        // This is the factory method
        public abstract Product factoryMethod();

        public String someOperation() {
            Product product = factoryMethod();
            return "Creator: The same creator's code has just worked with " + product.operation();
        }
    }

    // Concrete Creators
    class ConcreteCreatorA extends Creator {
        public Product factoryMethod() {
            return new ConcreteProductA();
        }
    }

    class ConcreteCreatorB extends Creator {
        public Product factoryMethod() {
            return new ConcreteProductB();
        }
    }

    // Client code
    class Application {
        public static void main(String[] args) {
            clientCode(new ConcreteCreatorA());
            clientCode(new ConcreteCreatorB());
        }

        static void clientCode(Creator creator) {
            System.out.println(creator.someOperation());
        }
    }
    `,csharp:`
    // Product interface
    public interface IProduct
    {
        string Operation();
    }

    // Concrete Products
    public class ConcreteProductA : IProduct
    {
        public string Operation()
        {
            return "{Result of ConcreteProductA}";
        }
    }

    public class ConcreteProductB : IProduct
    {
        public string Operation()
        {
            return "{Result of ConcreteProductB}";
        }
    }

    // Creator
    public abstract class Creator
    {
        // This is the factory method
        public abstract IProduct FactoryMethod();

        public string SomeOperation()
        {
            var product = FactoryMethod();
            return "Creator: The same creator's code has just worked with " + product.Operation();
        }
    }

    // Concrete Creators
    public class ConcreteCreatorA : Creator
    {
        public override IProduct FactoryMethod()
        {
            return new ConcreteProductA();
        }
    }

    public class ConcreteCreatorB : Creator
    {
        public override IProduct FactoryMethod()
        {
            return new ConcreteProductB();
        }
    }

    // Client code
    class Program
    {
        static void Main(string[] args)
        {
            ClientCode(new ConcreteCreatorA());
            ClientCode(new ConcreteCreatorB());
        }

        static void ClientCode(Creator creator)
        {
            Console.WriteLine(creator.SomeOperation());
        }
    }
    `},codeExplanation:"El código define una interfaz `Product`, que es implementada por `ConcreteProductA` y `ConcreteProductB`. La clase abstracta `Creator` declara el `factoryMethod`, que debe devolver un `Product`. Las subclases `ConcreteCreatorA` y `ConcreteCreatorB` sobrescriben este método para devolver instancias de sus respectivos productos concretos. La función `clientCode` trabaja con cualquier creador a través de la interfaz abstracta `Creator`. Llama a `someOperation`, que a su vez utiliza el `factoryMethod` para crear un producto, demostrando que el cliente está desacoplado de las clases de productos específicas."},{name:"Abstract Factory",type:"Creacional",description:"El patrón Abstract Factory proporciona una interfaz para crear familias de objetos relacionados o dependientes sin especificar sus clases concretas. Es como una 'fábrica de fábricas'. Mientras que un Factory Method produce un único objeto, una Abstract Factory produce un conjunto de objetos relacionados (una familia). Esto asegura que los productos creados por una fábrica dada sean compatibles entre sí.",useCase:"Usa este patrón cuando tu sistema necesita ser independiente de cómo se crean, componen y representan sus productos. Esto es particularmente útil cuando tienes varias 'familias' de productos y quieres asegurar que el código cliente solo utilice productos de una familia a la vez. Por ejemplo, una aplicación GUI podría soportar múltiples temas de apariencia (por ejemplo, Moderno, Victoriano, Clásico). Se podría usar una fábrica abstracta para crear todos los elementos de la interfaz de usuario (botones, ventanas, casillas de verificación) para un tema específico, garantizando la consistencia.",codeExample:{php:`
    <?php

    interface Chair { public function sitOn(): string; }
    interface Sofa { public function lieOn(): string; }

    class ModernChair implements Chair {
        public function sitOn(): string { return 'Sitting on a modern chair.'; }
    }
    class VictorianChair implements Chair {
        public function sitOn(): string { return 'Sitting on a victorian chair.'; }
    }

    class ModernSofa implements Sofa {
        public function lieOn(): string { return 'Lying on a modern sofa.'; }
    }
    class VictorianSofa implements Sofa {
        public function lieOn(): string { return 'Lying on a victorian sofa.'; }
    }

    interface FurnitureFactory {
        public function createChair(): Chair;
        public function createSofa(): Sofa;
    }

    class ModernFurnitureFactory implements FurnitureFactory {
        public function createChair(): Chair { return new ModernChair(); }
        public function createSofa(): Sofa { return new ModernSofa(); }
    }

    class VictorianFurnitureFactory implements FurnitureFactory {
        public function createChair(): Chair { return new VictorianChair(); }
        public function createSofa(): Sofa { return new VictorianSofa(); }
    }

    // Client code
    function clientCode(FurnitureFactory $factory) {
        $chair = $factory->createChair();
        $sofa = $factory->createSofa();
        echo $chair->sitOn() . "\\n";
        echo $sofa->lieOn() . "\\n";
    }

    clientCode(new ModernFurnitureFactory());
    clientCode(new VictorianFurnitureFactory());
    `,java:`
    // Abstract Products
    interface Chair { String sitOn(); }
    interface Sofa { String lieOn(); }

    // Concrete Products
    class ModernChair implements Chair {
        public String sitOn() { return "Sitting on a modern chair."; }
    }
    class VictorianChair implements Chair {
        public String sitOn() { return "Sitting on a victorian chair."; }
    }

    class ModernSofa implements Sofa {
        public String lieOn() { return "Lying on a modern sofa."; }
    }
    class VictorianSofa implements Sofa {
        public String lieOn() { return "Lying on a victorian sofa."; }
    }

    // Abstract Factory
    interface FurnitureFactory {
        Chair createChair();
        Sofa createSofa();
    }

    // Concrete Factories
    class ModernFurnitureFactory implements FurnitureFactory {
        public Chair createChair() { return new ModernChair(); }
        public Sofa createSofa() { return new ModernSofa(); }
    }
    class VictorianFurnitureFactory implements FurnitureFactory {
        public Chair createChair() { return new VictorianChair(); }
        public Sofa createSofa() { return new VictorianSofa(); }
    }

    // Client code
    class Application {
        public static void main(String[] args) {
            clientCode(new ModernFurnitureFactory());
            clientCode(new VictorianFurnitureFactory());
        }

        static void clientCode(FurnitureFactory factory) {
            Chair chair = factory.createChair();
            Sofa sofa = factory.createSofa();
            System.out.println(chair.sitOn());
            System.out.println(sofa.lieOn());
        }
    }
    `,csharp:`
    // Abstract Products
    public interface IChair { string SitOn(); }
    public interface ISofa { string LieOn(); }

    // Concrete Products
    public class ModernChair : IChair {
        public string SitOn() => "Sitting on a modern chair.";
    }
    public class VictorianChair : IChair {
        public string SitOn() => "Sitting on a victorian chair.";
    }
    public class ModernSofa : ISofa {
        public string LieOn() => "Lying on a modern sofa.";
    }
    public class VictorianSofa : ISofa {
        public string LieOn() => "Lying on a victorian sofa.";
    }

    // Abstract Factory
    public interface IFurnitureFactory {
        IChair CreateChair();
        ISofa CreateSofa();
    }

    // Concrete Factories
    public class ModernFurnitureFactory : IFurnitureFactory {
        public IChair CreateChair() => new ModernChair();
        public ISofa CreateSofa() => new ModernSofa();
    }
    public class VictorianFurnitureFactory : IFurnitureFactory {
        public IChair CreateChair() => new VictorianChair();
        public ISofa CreateSofa() => new VictorianSofa();
    }

    // Client code
    public class Program {
        public static void Main(string[] args) {
            ClientCode(new ModernFurnitureFactory());
            ClientCode(new VictorianFurnitureFactory());
        }

        public static void ClientCode(IFurnitureFactory factory) {
            var chair = factory.CreateChair();
            var sofa = factory.CreateSofa();
            Console.WriteLine(chair.SitOn());
            Console.WriteLine(sofa.LieOn());
        }
    }
    `},codeExplanation:"El código define productos abstractos (`Chair`, `Sofa`) y sus implementaciones concretas para dos familias: `Modern` y `Victorian`. La interfaz `FurnitureFactory` declara un conjunto de métodos de creación para estos productos abstractos. `ModernFurnitureFactory` y `VictorianFurnitureFactory` son fábricas concretas que implementan estos métodos para producir un conjunto completo de productos que pertenecen a una sola familia. El código cliente está escrito para funcionar con cualquier fábrica que se ajuste a la interfaz `FurnitureFactory`, lo que le permite crear un conjunto consistente de muebles sin estar atado a clases concretas específicas."},{name:"Builder",type:"Creacional",description:"El patrón Builder separa la construcción de un objeto complejo de su representación, permitiendo que el mismo proceso de construcción pueda crear diferentes representaciones. Está diseñado para proporcionar una solución flexible a varios problemas de creación de objetos en la programación orientada a objetos. La intención del patrón de diseño Builder es abstraer los pasos de construcción de objetos para que diferentes implementaciones de estos pasos puedan construir diferentes representaciones de objetos.",useCase:"Este patrón es particularmente efectivo cuando un objeto requiere un gran número de parámetros en su constructor, algunos de los cuales pueden ser opcionales. En lugar de crear numerosos constructores complejos, puedes usar un constructor para construir el objeto paso a paso. También es útil cuando necesitas crear diferentes variaciones de un objeto. Por ejemplo, construir un objeto `Car` puede ser complejo; podrías necesitar configurar el motor, número de asientos, GPS y computadora de viaje. El patrón Builder te permite crear un `SportsCarBuilder` y un `FamilyCarBuilder` que reutilizan el mismo proceso de construcción pero producen diferentes configuraciones de `Car`.",codeExample:{php:`
    <?php
    class Car {
        public array $parts = [];
        public function listParts(): void {
            echo "Car parts: " . implode(', ', $this->parts) . "\\n";
        }
    }

    interface Builder {
        public function reset(): void;
        public function setSeats(int $count): Builder;
        public function setEngine(string $type): Builder;
        public function setGPS(): Builder;
    }

    class CarBuilder implements Builder {
        private Car $car;
        public function __construct() { $this->reset(); }
        public function reset(): void { $this->car = new Car(); }
        public function setSeats(int $count): Builder {
            $this->car->parts[] = "{$count} seats";
            return $this; // Enable fluent interface
        }
        public function setEngine(string $type): Builder {
            $this->car->parts[] = "{$type} engine";
            return $this;
        }
        public function setGPS(): Builder {
            $this->car->parts[] = 'GPS';
            return $this;
        }
        public function getProduct(): Car {
            $result = $this->car;
            $this->reset();
            return $result;
        }
    }

    // Client Code
    $builder = new CarBuilder();
    $car = $builder->setSeats(4)->setEngine('V8')->setGPS()->getProduct();
    $car->listParts();
    `,java:`
    import java.util.ArrayList;
    import java.util.List;

    // The Product
    class Car {
        private List<String> parts = new ArrayList<>();
        public void add(String part) {
            parts.add(part);
        }
        public void show() {
            System.out.println("Car parts: " + String.join(", ", parts));
        }
    }

    // The Builder
    interface Builder {
        void reset();
        void setSeats(int count);
        void setEngine(String type);
        void setGPS();
    }

    class CarBuilder implements Builder {
        private Car car;
        public CarBuilder() { this.reset(); }
        public void reset() { this.car = new Car(); }
        public void setSeats(int count) { car.add(count + " seats"); }
        public void setEngine(String type) { car.add(type + " engine"); }
        public void setGPS() { car.add("GPS"); }
        public Car getProduct() {
            Car product = this.car;
            this.reset();
            return product;
        }
    }

    // Client Code
    class Application {
        public static void main(String[] args) {
            CarBuilder builder = new CarBuilder();
            builder.setSeats(4);
            builder.setEngine("V8");
            builder.setGPS();
            Car car = builder.getProduct();
            car.show();
        }
    }
    `,csharp:`
    using System.Collections.Generic;

    // The Product
    public class Car
    {
        private readonly List<string> _parts = new List<string>();
        public void Add(string part) => _parts.Add(part);
        public void ListParts() => Console.WriteLine($"Car parts: {string.Join(", ", _parts)}");
    }

    // The Builder interface
    public interface IBuilder
    {
        void Reset();
        void SetSeats(int number);
        void SetEngine(string engine);
        void SetGPS();
    }

    public class CarBuilder : IBuilder
    {
        private Car _car = new Car();
        public CarBuilder() => this.Reset();
        public void Reset() => this._car = new Car();
        public void SetSeats(int number) => this._car.Add($"{number} seats");
        public void SetEngine(string engine) => this._car.Add($"{engine} engine");
        public void SetGPS() => this._car.Add("GPS");
        public Car GetProduct()
        {
            Car result = this._car;
            this.Reset();
            return result;
        }
    }

    // Client Code
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = new CarBuilder();
            builder.SetSeats(4);
            builder.SetEngine("V8");
            builder.SetGPS();
            Car car = builder.GetProduct();
            car.ListParts();
        }
    }
    `},codeExplanation:"La interfaz `Builder` define los pasos de construcción requeridos para construir un `Car`. La clase `CarBuilder` implementa esta interfaz, proporcionando métodos concretos para cada paso (`setSeats`, `setEngine`, etc.). Cada uno de estos métodos modifica el objeto `car` interno que se está construyendo. El método `getProduct` finaliza y devuelve el objeto `Car` construido y luego resetea el constructor para el próximo uso. El código cliente interactúa directamente con el constructor, llamando a los pasos de construcción necesarios en cualquier orden antes de finalmente recuperar el objeto complejo. Esto desacopla al cliente de la lógica de construcción interna del `Car`."},{name:"Prototype",type:"Creacional",description:"El patrón Prototype especifica los tipos de objetos a crear usando una instancia prototípica, y crea nuevos objetos copiando este prototipo. Este patrón se utiliza para evitar los costos de crear objetos complejos desde cero. En lugar de instanciar un nuevo objeto, puedes clonar uno existente y modificar su estado según sea necesario. Esto es particularmente útil cuando el proceso de crear una nueva instancia es computacionalmente costoso.",useCase:"Usa este patrón cuando tu código no deba depender de las clases concretas de los objetos que necesitas copiar. Por ejemplo, si tienes un registro de objetos preconfigurados (por ejemplo, formas en una aplicación de diseño), puedes clonarlos en lugar de recrearlos con todos sus atributos específicos (color, tamaño, posición). Esto evita acoplar al cliente a las clases específicas de las formas que está copiando y puede mejorar significativamente el rendimiento si la creación de objetos implica operaciones pesadas como consultas a bases de datos o solicitudes de red.",codeExample:{php:`
    <?php
    abstract class Shape {
        public int $x;
        public int $y;
        public string $color;

        public function __construct(Shape $source = null) {
            if ($source) {
                $this->x = $source->x;
                $this->y = $source->y;
                $this->color = $source->color;
            }
        }

        abstract public function clone(): Shape;
    }

    class Rectangle extends Shape {
        public int $width;
        public int $height;

        public function __construct(Rectangle $source = null) {
            parent::__construct($source);
            if ($source) {
                $this->width = $source->width;
                $this->height = $source->height;
            }
        }

        public function clone(): Shape {
            return new Rectangle($this);
        }
    }

    // Client code
    $rect1 = new Rectangle();
    $rect1->width = 10;
    $rect1->height = 20;
    $rect1->color = "blue";

    $rect2 = $rect1->clone();

    echo "rect1 color: {$rect1->color}\\n"; // blue
    echo "rect2 color: {$rect2->color}\\n"; // blue
    var_dump($rect1 !== $rect2); // true, they are different objects
    `,java:`
    import java.util.Objects;

    abstract class Shape {
        public int x;
        public int y;
        public String color;

        public Shape() {}

        public Shape(Shape target) {
            if (target != null) {
                this.x = target.x;
                this.y = target.y;
                this.color = target.color;
            }
        }

        public abstract Shape clone();
    }

    class Rectangle extends Shape {
        public int width;
        public int height;

        public Rectangle() {}

        public Rectangle(Rectangle target) {
            super(target);
            if (target != null) {
                this.width = target.width;
                this.height = target.height;
            }
        }

        @Override
        public Shape clone() {
            return new Rectangle(this);
        }
    }

    // Client code
    class Application {
        public static void main(String[] args) {
            Rectangle rect1 = new Rectangle();
            rect1.width = 10;
            rect1.height = 20;
            rect1.color = "blue";
            
            Rectangle rect2 = (Rectangle) rect1.clone();

            System.out.println("rect1 color: " + rect1.color);
            System.out.println("rect2 color: " + rect2.color);
            System.out.println("Are they different objects? " + (rect1 != rect2));
        }
    }
    `,csharp:`
    public abstract class Shape
    {
        public int X;
        public int Y;
        public string Color;

        public Shape() { }

        public Shape(Shape source)
        {
            if (source != null)
            {
                this.X = source.X;
                this.Y = source.Y;
                this.Color = source.Color;
            }
        }

        public abstract Shape Clone();
    }

    public class Rectangle : Shape
    {
        public int Width;
        public int Height;

        public Rectangle() { }

        public Rectangle(Rectangle source) : base(source)
        {
            if (source != null)
            {
                this.Width = source.Width;
                this.Height = source.Height;
            }
        }

        public override Shape Clone()
        {
            return new Rectangle(this);
        }
    }

    // Client code
    public class Program
    {
        public static void Main(string[] args)
        {
            var rect1 = new Rectangle
            {
                Width = 10,
                Height = 20,
                Color = "blue"
            };

            var rect2 = (Rectangle)rect1.Clone();
            
            Console.WriteLine($"rect1 color: {rect1.Color}");
            Console.WriteLine($"rect2 color: {rect2.Color}");
            Console.WriteLine($"Are they different objects? {rect1 != rect2}");
        }
    }
    `},codeExplanation:"La clase abstracta `Shape` define un método `clone`, que todas las formas concretas deben implementar. La clase `Rectangle` proporciona una implementación concreta de `clone`. Su método `clone` crea una nueva instancia de `Rectangle` pasándose a sí misma (`this`) a un constructor de copia especial. Este constructor se encarga de copiar todas las propiedades del objeto de origen. El código cliente crea un rectángulo inicial (`rect1`), lo configura y luego crea un segundo rectángulo (`rect2`) clonando el primero. La salida muestra que `rect2` tiene las mismas propiedades que `rect1`, pero son objetos distintos en memoria."},{name:"Adapter",type:"Estructural",description:"El patrón Adapter actúa como un puente entre dos interfaces incompatibles. Convierte la interfaz de una clase en otra interfaz que un cliente espera. Esto permite que objetos con interfaces incompatibles colaboren, lo que de otro modo sería imposible. El Adaptador envuelve una clase existente con una nueva interfaz, haciéndola compatible con el código del cliente.",useCase:"Este patrón es muy común cuando se trabaja con bibliotecas de terceros o sistemas heredados. Imagina que tienes un sistema nuevo que espera trabajar con una interfaz específica, pero necesitas integrar un componente antiguo que tiene una interfaz diferente. En lugar de reescribir el componente antiguo, puedes crear un adaptador que se sitúe entre tu código y el componente heredado, traduciendo las llamadas de una interfaz a la otra.",codeExample:{php:`
    <?php

    class OldSystem {
        public function specificRequest(): string {
            return 'Old system response';
        }
    }

    interface Target {
        public function request(): string;
    }

    class Adapter implements Target {
        private OldSystem $adaptee;

        public function __construct(OldSystem $adaptee) {
            $this->adaptee = $adaptee;
        }

        public function request(): string {
            $result = $this->adaptee->specificRequest();
            return "Adapter: (TRANSLATED) {$result}";
        }
    }

    // Client code
    $oldSystem = new OldSystem();
    $adapter = new Adapter($oldSystem);

    echo "Client: I can work with the Target interface:\\n";
    echo $adapter->request();
    `,java:`
    // The Adaptee (the old, incompatible class)
    class OldSystem {
        public String specificRequest() {
            return "Old system response";
        }
    }

    // The Target interface (what the client expects)
    interface Target {
        String request();
    }

    // The Adapter
    class Adapter implements Target {
        private OldSystem adaptee;

        public Adapter(OldSystem adaptee) {
            this.adaptee = adaptee;
        }

        @Override
        public String request() {
            String result = adaptee.specificRequest();
            return "Adapter: (TRANSLATED) " + result;
        }
    }

    // Client code
    class Application {
        public static void main(String[] args) {
            OldSystem oldSystem = new OldSystem();
            Target adapter = new Adapter(oldSystem);

            System.out.println("Client: I can work with the Target interface:");
            System.out.println(adapter.request());
        }
    }
    `,csharp:`
    // The Adaptee (the old, incompatible class)
    public class OldSystem
    {
        public string SpecificRequest()
        {
            return "Old system response";
        }
    }

    // The Target interface (what the client expects)
    public interface ITarget
    {
        string Request();
    }

    // The Adapter
    public class Adapter : ITarget
    {
        private readonly OldSystem _adaptee;

        public Adapter(OldSystem adaptee)
        {
            this._adaptee = adaptee;
        }

        public string Request()
        {
            string result = _adaptee.SpecificRequest();
            return $"Adapter: (TRANSLATED) {result}";
        }
    }

    // Client code
    public class Program
    {
        public static void Main(string[] args)
        {
            OldSystem oldSystem = new OldSystem();
            ITarget adapter = new Adapter(oldSystem);

            Console.WriteLine("Client: I can work with the Target interface:");
            Console.WriteLine(adapter.Request());
        }
    }
    `},codeExplanation:"El código cliente espera trabajar con objetos que implementan la interfaz `Target`, que tiene un método `request()`. Sin embargo, la clase `OldSystem` tiene un método incompatible llamado `specificRequest()`. La clase `Adapter` implementa la interfaz `Target`. Mantiene una referencia a una instancia de `OldSystem` (el 'adaptee'). Cuando el cliente llama a `request()` en el adaptador, este traduce internamente esta llamada en una llamada a `specificRequest()` en el objeto `OldSystem` envuelto y devuelve el resultado en un formato que el cliente entiende."},{name:"Bridge",type:"Estructural",description:"El patrón Bridge es un patrón de diseño estructural que desacopla una abstracción de su implementación para que ambas puedan variar de forma independiente. Divide una clase grande o un conjunto de clases estrechamente relacionadas en dos jerarquías separadas —abstracción e implementación— que pueden desarrollarse independientemente una de la otra. La abstracción contiene una referencia a un objeto de implementación y delega el trabajo real a este.",useCase:"Este patrón es particularmente útil cuando necesitas gestionar múltiples dimensiones de variación. Por ejemplo, considera una aplicación GUI con diferentes formas (ej. `Circle`, `Square`) que deben renderizarse en varios sistemas operativos (ej. `Windows`, `Linux`). Sin Bridge, podrías crear clases como `WindowsCircle` y `LinuxSquare`. Con Bridge, creas dos jerarquías separadas: una para las formas (la abstracción) y otra para los renderizadores (la implementación). El objeto de forma mantendrá una referencia a un objeto renderizador, permitiéndote combinar cualquier forma con cualquier renderizador en tiempo de ejecución.",codeExample:{php:`
    <?php
    interface Implementation {
        public function operationImplementation(): string;
    }

    class Abstraction {
        protected Implementation $implementation;

        public function __construct(Implementation $implementation) {
            $this->implementation = $implementation;
        }

        public function operation(): string {
            $result = $this->implementation->operationImplementation();
            return "Abstraction: Base operation with: {$result}";
        }
    }

    class ConcreteImplementationA implements Implementation {
        public function operationImplementation(): string {
            return 'ConcreteImplementationA: Here is the result on platform A.';
        }
    }
    class ConcreteImplementationB implements Implementation {
        public function operationImplementation(): string {
            return 'ConcreteImplementationB: Here is the result on platform B.';
        }
    }

    // Client code
    $implementationA = new ConcreteImplementationA();
    $abstractionA = new Abstraction($implementationA);
    echo $abstractionA->operation() . "\\n";

    $implementationB = new ConcreteImplementationB();
    $abstractionB = new Abstraction($implementationB);
    echo $abstractionB->operation() . "\\n";
    `,java:`
    // Implementation interface
    interface Implementation {
        String operationImplementation();
    }

    // Abstraction
    class Abstraction {
        protected Implementation implementation;

        public Abstraction(Implementation implementation) {
            this.implementation = implementation;
        }

        public String operation() {
            String result = implementation.operationImplementation();
            return "Abstraction: Base operation with: " + result;
        }
    }

    // Concrete Implementations
    class ConcreteImplementationA implements Implementation {
        public String operationImplementation() {
            return "ConcreteImplementationA: Here is the result on platform A.";
        }
    }
    class ConcreteImplementationB implements Implementation {
        public String operationImplementation() {
            return "ConcreteImplementationB: Here is the result on platform B.";
        }
    }

    // Client code
    class Application {
        public static void main(String[] args) {
            Implementation implementationA = new ConcreteImplementationA();
            Abstraction abstractionA = new Abstraction(implementationA);
            System.out.println(abstractionA.operation());

            Implementation implementationB = new ConcreteImplementationB();
            Abstraction abstractionB = new Abstraction(implementationB);
            System.out.println(abstractionB.operation());
        }
    }
    `,csharp:`
    // Implementation interface
    public interface IImplementation
    {
        string OperationImplementation();
    }

    // Abstraction
    public class Abstraction
    {
        protected readonly IImplementation _implementation;

        public Abstraction(IImplementation implementation)
        {
            _implementation = implementation;
        }

        public virtual string Operation()
        {
            string result = _implementation.OperationImplementation();
            return $"Abstraction: Base operation with: {result}";
        }
    }

    // Concrete Implementations
    public class ConcreteImplementationA : IImplementation
    {
        public string OperationImplementation() => "ConcreteImplementationA: Result on platform A.";
    }
    public class ConcreteImplementationB : IImplementation
    {
        public string OperationImplementation() => "ConcreteImplementationB: Result on platform B.";
    }

    // Client code
    public class Program
    {
        public static void Main(string[] args)
        {
            IImplementation implementationA = new ConcreteImplementationA();
            var abstractionA = new Abstraction(implementationA);
            Console.WriteLine(abstractionA.Operation());

            IImplementation implementationB = new ConcreteImplementationB();
            var abstractionB = new Abstraction(implementationB);
            Console.WriteLine(abstractionB.Operation());
        }
    }
    `},codeExplanation:"La clase `Abstraction` define la lógica de control de alto nivel y mantiene una referencia a un objeto `Implementation`. La interfaz `Implementation` define el trabajo de bajo nivel. `ConcreteImplementationA` y `ConcreteImplementationB` proporcionan lógica específica dependiente de la plataforma. El código cliente crea un objeto de implementación y lo pasa al constructor de la abstracción. Cuando el cliente llama a `operation()` en la abstracción, esta delega la llamada a `operationImplementation()` a su objeto de implementación. Esto permite al cliente cambiar de implementación sin cambiar la abstracción, y viceversa."},{name:"Composite",type:"Estructural",description:"El patrón Composite te permite componer objetos en estructuras de árbol para representar jerarquías de parte-todo. Permite a los clientes tratar objetos individuales (hojas) y composiciones de objetos (compuestos) de manera uniforme. Esto significa que un cliente puede ejecutar una operación en una estructura de árbol compleja de la misma manera que lo haría en un solo objeto, sin necesidad de saber la diferencia.",useCase:"Este patrón se utiliza siempre que necesites representar una jerarquía de objetos. Un ejemplo clásico es una interfaz gráfica de usuario, donde una ventana puede contener paneles, que a su vez pueden contener botones, campos de texto y otros paneles. Otro ejemplo es un sistema de archivos, donde un directorio puede contener archivos y otros directorios. En ambos casos, a menudo quieres realizar una operación (como `render` o `getSize`) en todo el árbol, y el patrón Composite simplifica esto al permitirte tratar tanto los elementos individuales como los contenedores de la misma manera.",codeExample:{php:`
    <?php
    abstract class Component {
        public abstract function operation(): string;
        public function add(Component $component): void {}
        public function remove(Component $component): void {}
        public function isComposite(): bool { return false; }
    }

    class Leaf extends Component {
        public function operation(): string {
            return 'Leaf';
        }
    }

    class Composite extends Component {
        protected SplObjectStorage $children;
        public function __construct() { $this->children = new SplObjectStorage(); }
        public function add(Component $component): void { $this->children->attach($component); }
        public function remove(Component $component): void { $this->children->detach($component); }
        public function isComposite(): bool { return true; }

        public function operation(): string {
            $results = [];
            foreach ($this->children as $child) {
                $results[] = $child->operation();
            }
            return "Branch(" . implode('+', $results) . ")";
        }
    }

    // Client code
    $tree = new Composite();
    $branch1 = new Composite();
    $branch1->add(new Leaf());
    $branch1->add(new Leaf());
    $tree->add($branch1);
    $tree->add(new Leaf());
    echo $tree->operation(); // Branch(Branch(Leaf+Leaf)+Leaf)
    `,java:`
    import java.util.ArrayList;
    import java.util.List;

    // Component interface
    interface Component {
        String operation();
    }

    // Leaf
    class Leaf implements Component {
        public String operation() {
            return "Leaf";
        }
    }

    // Composite
    class Composite implements Component {
        private List<Component> children = new ArrayList<>();

        public void add(Component component) {
            children.add(component);
        }
        public void remove(Component component) {
            children.remove(component);
        }

        public String operation() {
            List<String> results = new ArrayList<>();
            for (Component child : children) {
                results.add(child.operation());
            }
            return "Branch(" + String.join("+", results) + ")";
        }
    }

    // Client code
    class Application {
        public static void main(String[] args) {
            Composite tree = new Composite();
            Composite branch1 = new Composite();
            branch1.add(new Leaf());
            branch1.add(new Leaf());
            tree.add(branch1);
            tree.add(new Leaf());
            System.out.println(tree.operation()); // Branch(Branch(Leaf+Leaf)+Leaf)
        }
    }
    `,csharp:`
    using System.Collections.Generic;
    using System.Linq;

    // Component
    public abstract class Component
    {
        public abstract string Operation();
        public virtual void Add(Component component) => throw new NotImplementedException();
        public virtual void Remove(Component component) => throw new NotImplementedException();
        public virtual bool IsComposite() => false;
    }

    // Leaf
    public class Leaf : Component
    {
        public override string Operation() => "Leaf";
    }

    // Composite
    public class Composite : Component
    {
        private readonly List<Component> _children = new List<Component>();
        public override void Add(Component component) => _children.Add(component);
        public override void Remove(Component component) => _children.Remove(component);
        public override bool IsComposite() => true;

        public override string Operation()
        {
            var results = _children.Select(child => child.Operation());
            return $"Branch({string.Join("+", results)})";
        }
    }

    // Client code
    public class Program
    {
        public static void Main(string[] args)
        {
            var tree = new Composite();
            var branch1 = new Composite();
            branch1.Add(new Leaf());
            branch1.Add(new Leaf());
            tree.Add(branch1);
            tree.Add(new Leaf());
            Console.WriteLine(tree.Operation()); // Branch(Branch(Leaf+Leaf)+Leaf)
        }
    }
    `},codeExplanation:"El código define una interfaz común `Component` que declara un método `operation`. La clase `Leaf` es un bloque de construcción básico que implementa esta operación directamente. La clase `Composite` también implementa la interfaz `Component`, pero contiene una colección de objetos `Component` hijos. Su método `operation` itera sobre sus hijos, llama a sus respectivos métodos `operation` y luego combina los resultados. Esta estructura recursiva permite al cliente construir un árbol complejo y llamar a `operation` en el compuesto de nivel superior, lo que propagará la llamada por toda la jerarquía."},{name:"Decorator",type:"Estructural",description:"El patrón Decorator es un patrón de diseño estructural que te permite adjuntar nuevos comportamientos a objetos colocándolos dentro de objetos envolventes especiales que contienen los comportamientos. Permite añadir funcionalidad a un objeto individual, de forma dinámica, sin afectar al comportamiento de otros objetos de la misma clase. Es una alternativa flexible a la herencia de subclases para extender la funcionalidad.",useCase:"Usa este patrón cuando quieras añadir responsabilidades a objetos en tiempo de ejecución. Por ejemplo, en una aplicación de editor de texto, podrías tener un componente base `TextView` y luego envolverlo con decoradores como `ScrollableDecorator`, `BorderDecorator` y `SpellCheckDecorator`. Puedes combinar estos decoradores en cualquier orden para crear una vista de texto con todas las funciones. Otro caso de uso común es en los flujos de E/S, donde puedes envolver un flujo de archivo base with decoradores para almacenamiento en búfer, compresión o encriptación.",codeExample:{php:`
    <?php
    interface Notifier {
        public function send(string $message): void;
    }

    class EmailNotifier implements Notifier {
        public function send(string $message): void {
            echo "Sending email: {$message}\\n";
        }
    }

    abstract class BaseDecorator implements Notifier {
        protected Notifier $wrappee;
        public function __construct(Notifier $notifier) { $this->wrappee = $notifier; }
        public function send(string $message): void { $this->wrappee->send($message); }
    }

    class SMSDecorator extends BaseDecorator {
        public function send(string $message): void {
            parent::send($message);
            echo "Sending SMS: {$message}\\n";
        }
    }

    class SlackDecorator extends BaseDecorator {
        public function send(string $message): void {
            parent::send($message);
            echo "Sending Slack message: {$message}\\n";
        }
    }

    // Client code
    $notifier = new EmailNotifier();
    $smsNotifier = new SMSDecorator($notifier);
    $slackNotifier = new SlackDecorator($smsNotifier);
    $slackNotifier->send("Your order has shipped!");
    `,java:`
    // Component interface
    interface Notifier {
        void send(String message);
    }

    // Concrete Component
    class EmailNotifier implements Notifier {
        @Override
        public void send(String message) {
            System.out.println("Sending email: " + message);
        }
    }

    // Base Decorator
    abstract class BaseDecorator implements Notifier {
        protected Notifier wrappee;
        public BaseDecorator(Notifier notifier) { this.wrappee = notifier; }
        
        @Override
        public void send(String message) { wrappee.send(message); }
    }

    // Concrete Decorators
    class SMSDecorator extends BaseDecorator {
        public SMSDecorator(Notifier notifier) { super(notifier); }
        @Override
        public void send(String message) {
            super.send(message);
            System.out.println("Sending SMS: " + message);
        }
    }
    class SlackDecorator extends BaseDecorator {
        public SlackDecorator(Notifier notifier) { super(notifier); }
        @Override
        public void send(String message) {
            super.send(message);
            System.out.println("Sending Slack message: " + message);
        }
    }

    // Client code
    class Application {
        public static void main(String[] args) {
            Notifier notifier = new EmailNotifier();
            Notifier smsNotifier = new SMSDecorator(notifier);
            Notifier slackNotifier = new SlackDecorator(smsNotifier);
            slackNotifier.send("Your order has shipped!");
        }
    }
    `,csharp:`
    // Component interface
    public interface INotifier
    {
        void Send(string message);
    }

    // Concrete Component
    public class EmailNotifier : INotifier
    {
        public void Send(string message)
        {
            Console.WriteLine($"Sending email: {message}");
        }
    }

    // Base Decorator
    public abstract class BaseDecorator : INotifier
    {
        protected readonly INotifier _wrappee;
        public BaseDecorator(INotifier notifier) => _wrappee = notifier;
        public virtual void Send(string message) => _wrappee.Send(message);
    }

    // Concrete Decorators
    public class SMSDecorator : BaseDecorator
    {
        public SMSDecorator(INotifier notifier) : base(notifier) { }
        public override void Send(string message)
        {
            base.Send(message);
            Console.WriteLine($"Sending SMS: {message}");
        }
    }
    public class SlackDecorator : BaseDecorator
    {
        public SlackDecorator(INotifier notifier) : base(notifier) { }
        public override void Send(string message)
        {
            base.Send(message);
            Console.WriteLine($"Sending Slack message: {message}");
        }
    }

    // Client code
    public class Program
    {
        public static void Main(string[] args)
        {
            INotifier notifier = new EmailNotifier();
            INotifier smsNotifier = new SMSDecorator(notifier);
            INotifier slackNotifier = new SlackDecorator(smsNotifier);
            slackNotifier.Send("Your order has shipped!");
        }
    }
    `},codeExplanation:"El componente central es `EmailNotifier`, que implementa la interfaz `Notifier`. El `BaseDecorator` también implementa esta interfaz y mantiene una referencia a un objeto `Notifier` (el 'wrappee'). Decoradores concretos como `SMSDecorator` y `SlackDecorator` extienden `BaseDecorator`. En sus métodos `send`, primero llaman al método padre (`super.send()` o `parent::send()`), que delega la llamada al objeto envuelto, y luego añaden su propia funcionalidad (enviar un SMS o un mensaje de Slack). El código cliente demuestra cómo se pueden apilar los decoradores: `slackNotifier` envuelve a `smsNotifier`, que a su vez envuelve al `notifier` original, creando una cadena de responsabilidad."},{name:"Facade",type:"Estructural",description:"El patrón Facade proporciona una interfaz simplificada y de nivel superior para una biblioteca, un framework o cualquier otro conjunto complejo de clases. Oculta la complejidad subyacente de un subsistema al cliente, facilitando el uso del subsistema. Un Facade puede ser una única clase que encapsula las interacciones con múltiples objetos más complejos.",useCase:"Este patrón es ideal cuando tienes un subsistema complejo con muchas partes móviles y quieres proporcionar una forma sencilla para que los clientes interactúen con él. Por ejemplo, iniciar un sistema de cine en casa podría implicar encender el televisor, el reproductor de Blu-ray, el sistema de sonido envolvente y configurar las entradas correctas. Un `HomeTheaterFacade` podría proporcionar un método simple `watchMovie()` que maneje todas estas interacciones complejas tras bambalinas, para que el cliente no tenga que gestionarlas individualmente.",codeExample:{php:`
    <?php
    class Subsystem1 {
        public function operation1(): string { return 'Subsystem1: Ready!\\n'; }
        public function operationN(): string { return 'Subsystem1: Go!\\n'; }
    }
    class Subsystem2 {
        public function operation1(): string { return 'Subsystem2: Get ready!\\n'; }
        public function operationZ(): string { return 'Subsystem2: Fire!\\n'; }
    }

    class Facade {
        protected Subsystem1 $subsystem1;
        protected Subsystem2 $subsystem2;
        public function __construct() {
            $this->subsystem1 = new Subsystem1();
            $this->subsystem2 = new Subsystem2();
        }
        public function operation(): string {
            $result = 'Facade initializes subsystems:\\n';
            $result .= $this->subsystem1->operation1();
            $result .= $this->subsystem2->operation1();
            $result .= 'Facade orders subsystems to perform the action:\\n';
            $result .= $this->subsystem1->operationN();
            $result .= $this->subsystem2->operationZ();
            return $result;
        }
    }

    // Client code
    $facade = new Facade();
    echo $facade->operation();
    `,java:`
    // Complex Subsystem parts
    class Subsystem1 {
        public String operation1() { return "Subsystem1: Ready!\\n"; }
        public String operationN() { return "Subsystem1: Go!\\n"; }
    }
    class Subsystem2 {
        public String operation1() { return "Subsystem2: Get ready!\\n"; }
        public String operationZ() { return "Subsystem2: Fire!\\n"; }
    }

    // Facade
    class Facade {
        protected Subsystem1 subsystem1;
        protected Subsystem2 subsystem2;

        public Facade() {
            this.subsystem1 = new Subsystem1();
            this.subsystem2 = new Subsystem2();
        }

        public String operation() {
            StringBuilder result = new StringBuilder();
            result.append("Facade initializes subsystems:\\n");
            result.append(this.subsystem1.operation1());
            result.append(this.subsystem2.operation1());
            result.append("Facade orders subsystems to perform the action:\\n");
            result.append(this.subsystem1.operationN());
            result.append(this.subsystem2.operationZ());
            return result.toString();
        }
    }

    // Client code
    class Application {
        public static void main(String[] args) {
            Facade facade = new Facade();
            System.out.println(facade.operation());
        }
    }
    `,csharp:`
    // Complex Subsystem parts
    public class Subsystem1
    {
        public string Operation1() => "Subsystem1: Ready!\\n";
        public string OperationN() => "Subsystem1: Go!\\n";
    }
    public class Subsystem2
    {
        public string Operation1() => "Subsystem2: Get ready!\\n";
        public string OperationZ() => "Subsystem2: Fire!\\n";
    }

    // Facade
    public class Facade
    {
        protected Subsystem1 _subsystem1;
        protected Subsystem2 _subsystem2;

        public Facade()
        {
            _subsystem1 = new Subsystem1();
            _subsystem2 = new Subsystem2();
        }

        public string Operation()
        {
            string result = "Facade initializes subsystems:\\n";
            result += _subsystem1.Operation1();
            result += _subsystem2.Operation1();
            result += "Facade orders subsystems to perform the action:\\n";
            result += _subsystem1.OperationN();
            result += _subsystem2.OperationZ();
            return result;
        }
    }

    // Client code
    public class Program
    {
        public static void Main(string[] args)
        {
            Facade facade = new Facade();
            Console.WriteLine(facade.Operation());
        }
    }
    `},codeExplanation:"El código muestra dos clases complejas, `Subsystem1` y `Subsystem2`, cada una con sus propios métodos. La clase `Facade` encapsula la creación e interacción con estos subsistemas. Proporciona un único y simple método `operation()`. Cuando el cliente llama a este método, el Facade orquesta las llamadas necesarias a los objetos del subsistema en el orden correcto. El código cliente solo necesita conocer la clase `Facade`, ocultando por completo la complejidad del subsistema subyacente."},{name:"Observer",type:"De Comportamiento",description:"El patrón Observer es un patrón de diseño de comportamiento que define una dependencia de uno a muchos entre objetos. Cuando un objeto (el 'sujeto' u 'observable') cambia su estado, todos sus dependientes (los 'observadores') son notificados y actualizados automáticamente. Este patrón promueve un acoplamiento bajo, ya que el sujeto solo conoce una lista de observadores, no sus clases concretas.",useCase:"Este patrón es ampliamente utilizado en sistemas controlados por eventos. Por ejemplo, en una arquitectura Modelo-Vista-Controlador (MVC), el Modelo es el sujeto y la Vista es el observador. Cuando los datos en el modelo cambian, notifica a la vista, que luego se actualiza para reflejar los nuevos datos. Otro ejemplo es una aplicación de hoja de cálculo: cuando el valor de una celda cambia, todas las demás celdas que dependen de ella son notificadas y recalculan sus propios valores. También es la base de los sistemas de escucha de eventos en muchos lenguajes de programación y frameworks.",codeExample:{php:`
    <?php
    class Subject implements SplSubject {
        public int $state;
        private SplObjectStorage $observers;

        public function __construct() {
            $this->observers = new SplObjectStorage();
        }
        public function attach(SplObserver $observer): void { $this->observers->attach($observer); }
        public function detach(SplObserver $observer): void { $this->observers->detach($observer); }
        public function notify(): void {
            foreach ($this->observers as $observer) {
                $observer->update($this);
            }
        }
        public function someBusinessLogic(): void {
            $this->state = rand(0, 10);
            echo "Subject: My state has changed to: {$this->state}\\n";
            $this->notify();
        }
    }

    class ConcreteObserverA implements SplObserver {
        public function update(SplSubject $subject): void {
            if ($subject->state < 5) {
                echo "ConcreteObserverA: Reacted to the event.\\n";
            }
        }
    }

    // Client code
    $subject = new Subject();
    $observer1 = new ConcreteObserverA();
    $subject->attach($observer1);
    $subject->someBusinessLogic();
    $subject->someBusinessLogic();
    `,java:`
    import java.util.ArrayList;
    import java.util.List;

    interface Observer {
        void update(Subject subject);
    }

    class Subject {
        private List<Observer> observers = new ArrayList<>();
        public int state;

        public void attach(Observer observer) { observers.add(observer); }
        public void detach(Observer observer) { observers.remove(observer); }
        public void notifyObservers() {
            for (Observer observer : observers) {
                observer.update(this);
            }
        }

        public void someBusinessLogic() {
            this.state = (int) (Math.random() * 10);
            System.out.println("Subject: My state has changed to: " + this.state);
            this.notifyObservers();
        }
    }

    class ConcreteObserverA implements Observer {
        public void update(Subject subject) {
            if (subject.state < 5) {
                System.out.println("ConcreteObserverA: Reacted to the event.");
            }
        }
    }

    // Client code
    class Application {
        public static void main(String[] args) {
            Subject subject = new Subject();
            Observer observer1 = new ConcreteObserverA();
            subject.attach(observer1);
            subject.someBusinessLogic();
            subject.someBusinessLogic();
        }
    }
    `,csharp:`
    // C# makes this pattern very easy with events.
    public class Subject
    {
        // The 'event' keyword provides encapsulation for the delegate.
        public event Action<Subject> StateChanged;

        private int _state;
        public int State
        {
            get => _state;
            set
            {
                _state = value;
                OnStateChanged();
            }
        }

        protected virtual void OnStateChanged()
        {
            StateChanged?.Invoke(this);
        }
        
        public void SomeBusinessLogic()
        {
            this.State = new Random().Next(0, 10);
            Console.WriteLine($"Subject: My state has changed to: {this.State}");
        }
    }

    public class ConcreteObserverA
    {
        public void Subscribe(Subject subject)
        {
            subject.StateChanged += HandleStateChange;
        }
        
        private void HandleStateChange(Subject subject)
        {
            if (subject.State < 5)
            {
                Console.WriteLine("ConcreteObserverA: Reacted to the event.");
            }
        }
    }

    // Client code
    public class Program
    {
        public static void Main(string[] args)
        {
            var subject = new Subject();
            var observerA = new ConcreteObserverA();
            observerA.Subscribe(subject);
            
            subject.SomeBusinessLogic();
            subject.SomeBusinessLogic();
        }
    }
    `},codeExplanation:"El `Subject` mantiene una lista de `Observer`s. Cuando su estado cambia (en `someBusinessLogic`), llama a un método `notify`, que itera a través de todos los observadores registrados y llama a su método `update`. El ejemplo de C# muestra una implementación más idiomática usando `events` y `delegates`, que proporciona una versión incorporada y segura de tipos del patrón Observer. El ejemplo de PHP usa las interfaces incorporadas `SplSubject` y `SplObserver` para una implementación estándar. En todos los casos, el Sujeto no está fuertemente acoplado a sus observadores; solo los conoce a través de una interfaz común o firma de delegado."},{name:"Strategy",type:"De Comportamiento",description:"El patrón Strategy es un patrón de diseño de comportamiento que permite seleccionar un algoritmo en tiempo de ejecución. En lugar de implementar un único algoritmo directamente, el código recibe instrucciones en tiempo de ejecución sobre cuál de una familia de algoritmos usar. Te permite definir una familia de algoritmos, poner cada uno en una clase separada y hacer que sus objetos sean intercambiables. Esto permite que el algoritmo varíe independientemente de los clientes que lo usan.",useCase:"Este patrón es útil cuando tienes múltiples formas de realizar una tarea y quieres cambiar entre ellas dinámicamente. Por ejemplo, una aplicación de mapas podría ofrecer diferentes estrategias de enrutamiento: para coches, para peatones o para transporte público. Una utilidad de ordenación podría usar diferentes algoritmos de ordenación (ej. QuickSort, MergeSort) según el tamaño del conjunto de datos. El patrón Strategy permite que el objeto principal (el 'contexto') delegue la tarea a un objeto de estrategia específico, que puede ser reemplazado en cualquier momento.",codeExample:{php:`
    <?php
    interface Strategy {
        public function execute(int $a, int $b): int;
    }

    class ConcreteStrategyAdd implements Strategy {
        public function execute(int $a, int $b): int { return $a + $b; }
    }
    class ConcreteStrategySubtract implements Strategy {
        public function execute(int $a, int $b): int { return $a - $b; }
    }

    class Context {
        private Strategy $strategy;
        public function __construct(Strategy $strategy) { $this->strategy = $strategy; }
        public function setStrategy(Strategy $strategy) { $this->strategy = $strategy; }
        public function executeStrategy(int $a, int $b): void {
            $result = $this->strategy->execute($a, $b);
            echo "Result: {$result}\\n";
        }
    }

    // Client code
    $context = new Context(new ConcreteStrategyAdd());
    $context->executeStrategy(10, 5); // Result: 15

    $context->setStrategy(new ConcreteStrategySubtract());
    $context->executeStrategy(10, 5); // Result: 5
    `,java:`
    // Strategy interface
    interface Strategy {
        int execute(int a, int b);
    }

    // Concrete Strategies
    class ConcreteStrategyAdd implements Strategy {
        public int execute(int a, int b) { return a + b; }
    }
    class ConcreteStrategySubtract implements Strategy {
        public int execute(int a, int b) { return a - b; }
    }

    // Context
    class Context {
        private Strategy strategy;
        public Context(Strategy strategy) { this.strategy = strategy; }
        public void setStrategy(Strategy strategy) { this.strategy = strategy; }
        public void executeStrategy(int a, int b) {
            int result = this.strategy.execute(a, b);
            System.out.println("Result: " + result);
        }
    }

    // Client code
    class Application {
        public static void main(String[] args) {
            Context context = new Context(new ConcreteStrategyAdd());
            context.executeStrategy(10, 5); // Result: 15

            context.setStrategy(new ConcreteStrategySubtract());
            context.executeStrategy(10, 5); // Result: 5
        }
    }
    `,csharp:`
    // Strategy interface
    public interface IStrategy
    {
        int Execute(int a, int b);
    }

    // Concrete Strategies
    public class ConcreteStrategyAdd : IStrategy
    {
        public int Execute(int a, int b) => a + b;
    }
    public class ConcreteStrategySubtract : IStrategy
    {
        public int Execute(int a, int b) => a - b;
    }

    // Context
    public class Context
    {
        private IStrategy _strategy;
        public Context(IStrategy strategy) => _strategy = strategy;
        public void SetStrategy(IStrategy strategy) => _strategy = strategy;
        public void ExecuteStrategy(int a, int b)
        {
            int result = _strategy.Execute(a, b);
            Console.WriteLine($"Result: {result}");
        }
    }

    // Client code
    public class Program
    {
        public static void Main(string[] args)
        {
            var context = new Context(new ConcreteStrategyAdd());
            context.ExecuteStrategy(10, 5); // Result: 15

            context.SetStrategy(new ConcreteStrategySubtract());
            context.ExecuteStrategy(10, 5); // Result: 5
        }
    }
    `},codeExplanation:"La interfaz `Strategy` define un método común `execute` para todos los algoritmos. `ConcreteStrategyAdd` y `ConcreteStrategySubtract` son implementaciones concretas de esta interfaz. La clase `Context` mantiene una referencia a un objeto `Strategy`. El contexto no realiza el cálculo por sí mismo; en su lugar, llama al método `execute` en su objeto de estrategia. El código cliente demuestra esto creando primero un `Context` con la estrategia de 'suma', y luego cambiando la estrategia a 'resta' usando el método `setStrategy`, lo que altera el comportamiento del contexto sin cambiar su código."},{name:"Command",type:"De Comportamiento",description:"El patrón Command es un patrón de diseño de comportamiento que convierte una solicitud en un objeto independiente que contiene toda la información sobre la solicitud. Esta transformación te permite parametrizar métodos con diferentes solicitudes, retrasar o encolar la ejecución de una solicitud y admitir operaciones que se pueden deshacer. Desacopla el objeto que invoca una operación (el Invocador) del objeto que sabe cómo realizarla (el Receptor).",useCase:"Este patrón es ampliamente utilizado para implementar la funcionalidad de deshacer/rehacer, donde cada objeto de comando puede tener un método `unexecute`. También es útil para construir colas de operaciones, como en un planificador de tareas o un sistema de transacciones. En una aplicación GUI, cada elemento de menú o botón puede ser un objeto de comando, lo que te permite centralizar el manejo de acciones y agregar fácilmente nuevas acciones sin cambiar el invocador (el menú o el botón).",codeExample:{php:`
    <?php
    interface Command {
        public function execute(): void;
    }

    class SimpleCommand implements Command {
        private string $payload;
        public function __construct(string $payload) { $this->payload = $payload; }
        public function execute(): void {
            echo "SimpleCommand: Printing ({$this->payload})\\n";
        }
    }

    class Receiver {
        public function doSomething(string $a): void {
            echo "Receiver: Working on ({$a}.)\\n";
        }
    }

    class ComplexCommand implements Command {
        private Receiver $receiver;
        private string $a;
        public function __construct(Receiver $receiver, string $a) {
            $this->receiver = $receiver;
            $this->a = $a;
        }
        public function execute(): void {
            $this->receiver->doSomething($this->a);
        }
    }

    class Invoker {
        private ?Command $onStart = null;
        public function setOnStart(Command $command): void { $this->onStart = $command; }
        public function doSomethingImportant(): void {
            if ($this->onStart) {
                $this->onStart->execute();
            }
        }
    }

    // Client Code
    $invoker = new Invoker();
    $receiver = new Receiver();
    $invoker->setOnStart(new ComplexCommand($receiver, 'Send email'));
    $invoker->doSomethingImportant();
    `,java:`
    // Command interface
    interface Command {
        void execute();
    }

    // Simple Command
    class SimpleCommand implements Command {
        private String payload;
        public SimpleCommand(String payload) { this.payload = payload; }
        public void execute() {
            System.out.println("SimpleCommand: Printing (" + this.payload + ")");
        }
    }

    // Receiver
    class Receiver {
        public void doSomething(String a) {
            System.out.println("Receiver: Working on (" + a + ".)");
        }
    }

    // Complex Command
    class ComplexCommand implements Command {
        private Receiver receiver;
        private String a;
        public ComplexCommand(Receiver receiver, String a) {
            this.receiver = receiver;
            this.a = a;
        }
        public void execute() {
            this.receiver.doSomething(this.a);
        }
    }

    // Invoker
    class Invoker {
        private Command onStart;
        public void setOnStart(Command command) { this.onStart = command; }
        public void doSomethingImportant() {
            if (this.onStart != null) {
                this.onStart.execute();
            }
        }
    }

    // Client Code
    class Application {
        public static void main(String[] args) {
            Invoker invoker = new Invoker();
            Receiver receiver = new Receiver();
            invoker.setOnStart(new ComplexCommand(receiver, "Send email"));
            invoker.doSomethingImportant();
        }
    }
    `,csharp:`
    // Command interface
    public interface ICommand
    {
        void Execute();
    }

    // Simple Command
    public class SimpleCommand : ICommand
    {
        private readonly string _payload;
        public SimpleCommand(string payload) => _payload = payload;
        public void Execute() => Console.WriteLine($"SimpleCommand: Printing ({_payload})");
    }

    // Receiver
    public class Receiver
    {
        public void DoSomething(string a) => Console.WriteLine($"Receiver: Working on ({a}.)");
    }

    // Complex Command
    public class ComplexCommand : ICommand
    {
        private readonly Receiver _receiver;
        private readonly string _a;
        public ComplexCommand(Receiver receiver, string a)
        {
            _receiver = receiver;
            _a = a;
        }
        public void Execute() => _receiver.DoSomething(_a);
    }

    // Invoker
    public class Invoker
    {
        private ICommand _onStart;
        public void SetOnStart(ICommand command) => _onStart = command;
        public void DoSomethingImportant() => _onStart?.Execute();
    }

    // Client Code
    public class Program
    {
        public static void Main(string[] args)
        {
            var invoker = new Invoker();
            var receiver = new Receiver();
            invoker.SetOnStart(new ComplexCommand(receiver, "Send email"));
            invoker.DoSomethingImportant();
        }
    }
    `},codeExplanation:"La interfaz `Command` declara un único método `execute`. `SimpleCommand` y `ComplexCommand` son clases de comando concretas que encapsulan una solicitud. `ComplexCommand` también mantiene una referencia a un `Receiver`, que es el objeto que realizará el trabajo real. El `Invoker` mantiene un objeto de comando y es responsable de activarlo llamando a `execute`. La clave aquí es que el `Invoker` no sabe qué hace el comando ni quién es el receptor; solo sabe cómo ejecutarlo. Esto desacopla al invocador de las acciones concretas."},{name:"State",type:"De Comportamiento",description:"El patrón State es un patrón de diseño de comportamiento que permite a un objeto alterar su comportamiento cuando su estado interno cambia. El objeto parece cambiar de clase. Este patrón encapsula comportamientos específicos del estado en clases separadas y obliga al objeto principal (el Contexto) a delegar su trabajo a una instancia de una clase de estado. Esto evita tener grandes declaraciones condicionales monolíticas (if/else o switch) basadas en el estado actual del objeto.",useCase:"Este patrón es útil cuando tienes un objeto que se comporta de manera diferente dependiendo de su estado actual, el número de estados es grande y el código específico del estado cambia con frecuencia. Un ejemplo clásico es un documento en un sistema de flujo de trabajo, que puede estar en estado `Draft` (borrador), `InReview` (en revisión) o `Published` (publicado). Las acciones disponibles (ej. `edit`, `approve`, `publish`) dependen del estado actual. El patrón State implementaría cada estado como una clase separada, y el objeto `Document` simplemente delegaría las acciones a su objeto de estado actual.",codeExample:{php:`
    <?php
    class Context {
        private State $state;
        public function __construct(State $state) { $this->transitionTo($state); }
        public function transitionTo(State $state): void {
            echo "Context: Transition to " . get_class($state) . ".\\n";
            $this->state = $state;
            $this->state->setContext($this);
        }
        public function request1(): void { $this->state->handle1(); }
        public function request2(): void { $this->state->handle2(); }
    }

    abstract class State {
        protected Context $context;
        public function setContext(Context $context) { $this->context = $context; }
        public abstract function handle1(): void;
        public abstract function handle2(): void;
    }

    class ConcreteStateA extends State {
        public function handle1(): void {
            $this->context->transitionTo(new ConcreteStateB());
        }
        public function handle2(): void { /* Do nothing */ }
    }

    class ConcreteStateB extends State {
        public function handle1(): void { /* Do nothing */ }
        public function handle2(): void {
            $this->context->transitionTo(new ConcreteStateA());
        }
    }

    // Client code
    $context = new Context(new ConcreteStateA());
    $context->request1(); // State changes to B
    $context->request2(); // State changes back to A
    `,java:`
    // Context
    class Context {
        private State state;
        public Context(State state) { this.transitionTo(state); }
        public void transitionTo(State state) {
            System.out.println("Context: Transition to " + state.getClass().getSimpleName() + ".");
            this.state = state;
            this.state.setContext(this);
        }
        public void request1() { this.state.handle1(); }
        public void request2() { this.state.handle2(); }
    }

    // State interface
    abstract class State {
        protected Context context;
        public void setContext(Context context) { this.context = context; }
        public abstract void handle1();
        public abstract void handle2();
    }

    class ConcreteStateA extends State {
        public void handle1() {
            this.context.transitionTo(new ConcreteStateB());
        }
        public void handle2() { /* Do nothing */ }
    }

    class ConcreteStateB extends State {
        public void handle1() { /* Do nothing */ }
        public void handle2() {
            this.context.transitionTo(new ConcreteStateA());
        }
    }

    // Client code
    class Application {
        public static void main(String[] args) {
            Context context = new Context(new ConcreteStateA());
            context.request1(); // State changes to B
            context.request2(); // State changes back to A
        }
    }
    `,csharp:`
    // Context
    public class Context
    {
        private State _state = null;
        public Context(State state) => this.TransitionTo(state);
        public void TransitionTo(State state)
        {
            Console.WriteLine($"Context: Transition to {state.GetType().Name}.");
            this._state = state;
            this._state.SetContext(this);
        }
        public void Request1() => this._state.Handle1();
        public void Request2() => this._state.Handle2();
    }

    // State abstract class
    public abstract class State
    {
        protected Context _context;
        public void SetContext(Context context) => this._context = context;
        public abstract void Handle1();
        public abstract void Handle2();
    }

    public class ConcreteStateA : State
    {
        public override void Handle1() => this._context.TransitionTo(new ConcreteStateB());
        public override void Handle2() { /* Do nothing */ }
    }

    public class ConcreteStateB : State
    {
        public override void Handle1() { /* Do nothing */ }
        public override void Handle2() => this._context.TransitionTo(new ConcreteStateA());
    }

    // Client code
    public class Program
    {
        public static void Main(string[] args)
        {
            var context = new Context(new ConcreteStateA());
            context.Request1(); // State changes to B
            context.Request2(); // State changes back to A
        }
    }
    `},codeExplanation:"La clase `Context` mantiene una referencia a un objeto `State`, que representa su estado actual. Todas las solicitudes al contexto (`request1`, `request2`) se delegan a los métodos manejadores del objeto de estado actual (`handle1`, `handle2`). Las clases de estado concretas (`ConcreteStateA`, `ConcreteStateB`) implementan el comportamiento específico para cada estado. De manera crucial, los propios objetos de estado pueden desencadenar una transición de estado en el contexto llamando a `context.transitionTo()`, que intercambia el objeto de estado actual por uno nuevo, cambiando así el comportamiento del contexto para las solicitudes posteriores."},{name:"Template Method",type:"De Comportamiento",description:"El Template Method es un patrón de diseño de comportamiento que define el esqueleto de un algoritmo en una superclase pero permite que las subclases sobrescriban pasos específicos del algoritmo sin cambiar su estructura. La superclase define el flujo general del algoritmo, mientras que las subclases pueden redefinir ciertos pasos, o 'ganchos', para proporcionar sus propios detalles de implementación específicos.",useCase:"Este patrón es útil cuando tienes varias clases que contienen algoritmos casi idénticos con algunas pequeñas diferencias. Puedes extraer las partes comunes de estos algoritmos en una superclase. Por ejemplo, una aplicación de procesamiento de datos podría tener un método de plantilla para procesar archivos: `abrir archivo -> leer datos -> procesar datos -> cerrar archivo`. Los pasos `abrir` y `cerrar` podrían ser los mismos para todos los tipos de archivo, pero el paso `procesar datos` podría ser diferente para archivos XML, CSV y JSON. Las subclases pueden sobrescribir el paso `procesar datos` mientras heredan la lógica común de manejo de archivos.",codeExample:{php:`
    <?php
    abstract class AbstractClass {
        // This is the template method
        public final function templateMethod(): void {
            $this->baseOperation1();
            $this->requiredOperation1();
            $this->baseOperation2();
            $this->hook1();
        }

        protected function baseOperation1(): void { echo "AbstractClass: Doing base operation 1\\n"; }
        protected function baseOperation2(): void { echo "AbstractClass: Doing base operation 2\\n"; }
        
        // These operations have to be implemented by subclasses
        protected abstract function requiredOperation1(): void;

        // This is a "hook". Subclasses may override them, but it's not mandatory.
        protected function hook1(): void { }
    }

    class ConcreteClass1 extends AbstractClass {
        protected function requiredOperation1(): void { echo "ConcreteClass1: Implemented Operation1\\n"; }
    }

    class ConcreteClass2 extends AbstractClass {
        protected function requiredOperation1(): void { echo "ConcreteClass2: Implemented Operation1\\n"; }
        protected function hook1(): void { echo "ConcreteClass2: Overridden Hook1\\n"; }
    }

    // Client code
    (new ConcreteClass1())->templateMethod();
    (new ConcreteClass2())->templateMethod();
    `,java:`
    abstract class AbstractClass {
        // This is the template method
        public final void templateMethod() {
            baseOperation1();
            requiredOperation1();
            baseOperation2();
            hook1();
        }

        protected void baseOperation1() { System.out.println("AbstractClass: Doing base operation 1"); }
        protected void baseOperation2() { System.out.println("AbstractClass: Doing base operation 2"); }
        
        // These operations have to be implemented by subclasses
        protected abstract void requiredOperation1();

        // This is a "hook". Subclasses may override them, but it's not mandatory.
        protected void hook1() { }
    }

    class ConcreteClass1 extends AbstractClass {
        protected void requiredOperation1() { System.out.println("ConcreteClass1: Implemented Operation1"); }
    }

    class ConcreteClass2 extends AbstractClass {
        protected void requiredOperation1() { System.out.println("ConcreteClass2: Implemented Operation1"); }
        protected void hook1() { System.out.println("ConcreteClass2: Overridden Hook1"); }
    }

    // Client code
    class Application {
        public static void main(String[] args) {
            new ConcreteClass1().templateMethod();
            new ConcreteClass2().templateMethod();
        }
    }
    `,csharp:`
    public abstract class AbstractClass
    {
        // This is the template method
        public void TemplateMethod() // Can be non-virtual
        {
            BaseOperation1();
            RequiredOperation1();
            BaseOperation2();
            Hook1();
        }

        protected void BaseOperation1() => Console.WriteLine("AbstractClass: Doing base operation 1");
        protected void BaseOperation2() => Console.WriteLine("AbstractClass: Doing base operation 2");
        
        // These operations have to be implemented by subclasses
        protected abstract void RequiredOperation1();

        // This is a "hook". Subclasses may override them, but it's not mandatory.
        protected virtual void Hook1() { }
    }

    public class ConcreteClass1 : AbstractClass
    {
        protected override void RequiredOperation1() => Console.WriteLine("ConcreteClass1: Implemented Operation1");
    }

    public class ConcreteClass2 : AbstractClass
    {
        protected override void RequiredOperation1() => Console.WriteLine("ConcreteClass2: Implemented Operation1");
        protected override void Hook1() => Console.WriteLine("ConcreteClass2: Overridden Hook1");
    }

    // Client code
    public class Program
    {
        public static void Main(string[] args)
        {
            new ConcreteClass1().TemplateMethod();
            new ConcreteClass2().TemplateMethod();
        }
    }
    `},codeExplanation:"La `AbstractClass` define el `templateMethod`, que sirve como el esqueleto del algoritmo. Este método llama a una secuencia de otros métodos. Algunos métodos, como `baseOperation1`, son concretos y están definidos en la propia clase abstracta. Otros, como `requiredOperation1`, se declaran `abstract`, forzando a las subclases a proporcionar una implementación. También hay 'ganchos' (`hook1`), que son métodos opcionales (virtual en C#) que las subclases pueden sobrescribir. `ConcreteClass1` y `ConcreteClass2` proporcionan las implementaciones requeridas y, en el caso de `ConcreteClass2`, sobrescriben el gancho, personalizando el algoritmo sin alterar su estructura fundamental."},{name:"Mediator",type:"De Comportamiento",description:"El patrón Mediator es un patrón de diseño de comportamiento que reduce el acoplamiento entre componentes al hacer que se comuniquen indirectamente, a través de un objeto mediador especial. En lugar de que los componentes se refieran entre sí directamente, solo se refieren al mediador. Esto promueve un acoplamiento bajo al evitar que los objetos se refieran explícitamente entre sí, y te permite variar su interacción de forma independiente.",useCase:"Este patrón es útil cuando tienes un conjunto de objetos que se comunican de formas complejas y de muchos a muchos. Por ejemplo, en un formulario GUI complejo con muchos elementos interdependientes (casillas de verificación, campos de texto, botones), habilitar o deshabilitar un elemento podría afectar a varios otros. Sin un mediador, cada elemento necesitaría tener referencias directas a todos los demás, lo que llevaría a un enredo de dependencias. Con un mediador, cada elemento solo notifica al mediador de su cambio de estado, y el mediador luego maneja la lógica de actualizar todos los demás elementos afectados.",codeExample:{php:`
    <?php
    interface Mediator {
        public function notify(object $sender, string $event): void;
    }

    class BaseComponent {
        protected ?Mediator $mediator = null;
        public function setMediator(Mediator $mediator): void { $this->mediator = $mediator; }
    }

    class Component1 extends BaseComponent {
        public function doA(): void { $this->mediator->notify($this, 'A'); }
        public function doB(): void { echo "Component 1 does B.\\n"; }
    }

    class Component2 extends BaseComponent {
        public function doC(): void { echo "Component 2 does C.\\n"; }
        public function doD(): void { $this->mediator->notify($this, 'D'); }
    }

    class ConcreteMediator implements Mediator {
        private Component1 $component1;
        private Component2 $component2;

        public function __construct(Component1 $c1, Component2 $c2) {
            $this->component1 = $c1;
            $this->component1->setMediator($this);
            $this->component2 = $c2;
            $this->component2->setMediator($this);
        }

        public function notify(object $sender, string $event): void {
            if ($event === 'A') {
                $this->component2->doC();
            }
            if ($event === 'D') {
                $this->component1->doB();
            }
        }
    }

    // Client code
    $c1 = new Component1();
    $c2 = new Component2();
    $mediator = new ConcreteMediator($c1, $c2);
    $c1->doA();
    $c2->doD();
    `,java:`
    // Mediator interface
    interface Mediator {
        void notify(Object sender, String event);
    }

    class BaseComponent {
        protected Mediator mediator;
        public void setMediator(Mediator mediator) { this.mediator = mediator; }
    }

    class Component1 extends BaseComponent {
        public void doA() { mediator.notify(this, "A"); }
        public void doB() { System.out.println("Component 1 does B."); }
    }

    class Component2 extends BaseComponent {
        public void doC() { System.out.println("Component 2 does C."); }
        public void doD() { mediator.notify(this, "D"); }
    }

    class ConcreteMediator implements Mediator {
        private Component1 component1;
        private Component2 component2;

        public ConcreteMediator(Component1 c1, Component2 c2) {
            this.component1 = c1;
            this.component1.setMediator(this);
            this.component2 = c2;
            this.component2.setMediator(this);
        }

        @Override
        public void notify(Object sender, String event) {
            if (event.equals("A")) {
                component2.doC();
            }
            if (event.equals("D")) {
                component1.doB();
            }
        }
    }

    // Client code
    class Application {
        public static void main(String[] args) {
            Component1 c1 = new Component1();
            Component2 c2 = new Component2();
            new ConcreteMediator(c1, c2);
            c1.doA();
            c2.doD();
        }
    }
    `,csharp:`
    // Mediator interface
    public interface IMediator
    {
        void Notify(object sender, string ev);
    }

    public class BaseComponent
    {
        protected IMediator _mediator;
        public BaseComponent(IMediator mediator = null) => _mediator = mediator;
        public void SetMediator(IMediator mediator) => _mediator = mediator;
    }

    public class Component1 : BaseComponent
    {
        public void DoA() => _mediator.Notify(this, "A");
        public void DoB() => Console.WriteLine("Component 1 does B.");
    }

    public class Component2 : BaseComponent
    {
        public void DoC() => Console.WriteLine("Component 2 does C.");
        public void DoD() => _mediator.Notify(this, "D");
    }

    public class ConcreteMediator : IMediator
    {
        private readonly Component1 _component1;
        private readonly Component2 _component2;

        public ConcreteMediator(Component1 c1, Component2 c2)
        {
            _component1 = c1;
            _component1.SetMediator(this);
            _component2 = c2;
            _component2.SetMediator(this);
        }

        public void Notify(object sender, string ev)
        {
            if (ev == "A") _component2.DoC();
            if (ev == "D") _component1.DoB();
        }
    }

    // Client code
    public class Program
    {
        public static void Main(string[] args)
        {
            var c1 = new Component1();
            var c2 = new Component2();
            new ConcreteMediator(c1, c2);
            c1.DoA();
            c2.DoD();
        }
    }
    `},codeExplanation:"En este ejemplo, `Component1` y `Component2` no se conocen entre sí. Cada uno mantiene una referencia a un objeto `Mediator`. Cuando ocurre un evento importante (como `doA()` en `Component1`), el componente notifica al mediador. El `ConcreteMediator` mantiene referencias a todos los componentes y contiene la lógica de cómo deben interactuar. Cuando recibe una notificación, decide qué otros componentes deben ser activados. Por ejemplo, cuando recibe el evento 'A' de `Component1`, llama a `doC()` en `Component2`, centralizando efectivamente la lógica de comunicación."},{name:"Chain of Responsibility",type:"De Comportamiento",description:"El Chain of Responsibility (Cadena de Responsabilidad) es un patrón de diseño de comportamiento que te permite pasar solicitudes a lo largo de una cadena de manejadores. Al recibir una solicitud, cada manejador decide si procesar la solicitud o pasarla al siguiente manejador en la cadena. Esto desacopla al emisor de una solicitud de su receptor, y permite que múltiples objetos tengan la oportunidad de manejar la solicitud sin que el emisor necesite saber qué objeto la manejará finalmente.",useCase:"Este patrón es útil cuando quieres dar a más de un objeto la oportunidad de manejar una solicitud, o cuando el manejador de una solicitud no se conoce de antemano. Un ejemplo común es en el middleware para un servidor web, donde una solicitud pasa a través de una cadena de manejadores para registro (logging), autenticación, almacenamiento en caché y, finalmente, procesamiento. Otro ejemplo es un sistema de burbujeo de eventos de la interfaz de usuario, donde un evento en un botón puede ser manejado por el propio botón, su contenedor padre o la ventana principal.",codeExample:{php:`
    <?php
    interface Handler {
        public function setNext(Handler $handler): Handler;
        public function handle(string $request): ?string;
    }

    abstract class AbstractHandler implements Handler {
        private ?Handler $nextHandler = null;
        public function setNext(Handler $handler): Handler {
            $this->nextHandler = $handler;
            return $handler;
        }
        public function handle(string $request): ?string {
            if ($this->nextHandler) {
                return $this->nextHandler->handle($request);
            }
            return null;
        }
    }

    class MonkeyHandler extends AbstractHandler {
        public function handle(string $request): ?string {
            if ($request === 'Banana') {
                return "Monkey: I'll eat the {$request}.";
            }
            return parent::handle($request);
        }
    }

    class SquirrelHandler extends AbstractHandler {
        public function handle(string $request): ?string {
            if ($request === 'Nut') {
                return "Squirrel: I'll eat the {$request}.";
            }
            return parent::handle($request);
        }
    }

    // Client code
    $monkey = new MonkeyHandler();
    $squirrel = new SquirrelHandler();
    $monkey->setNext($squirrel);
    echo $monkey->handle('Nut') . "\\n";
    echo $monkey->handle('Banana') . "\\n";
    echo $monkey->handle('Coffee') ?? 'Nobody handled it' . "\\n";
    `,java:`
    interface Handler {
        void setNext(Handler handler);
        void handle(String request);
    }

    abstract class AbstractHandler implements Handler {
        private Handler nextHandler;
        public void setNext(Handler handler) {
            this.nextHandler = handler;
        }
        public void handle(String request) {
            if (nextHandler != null) {
                nextHandler.handle(request);
            } else {
                System.out.println("Nobody handled it.");
            }
        }
    }

    class MonkeyHandler extends AbstractHandler {
        public void handle(String request) {
            if (request.equals("Banana")) {
                System.out.println("Monkey: I'll eat the " + request);
            } else {
                super.handle(request);
            }
        }
    }
    class SquirrelHandler extends AbstractHandler {
        public void handle(String request) {
            if (request.equals("Nut")) {
                System.out.println("Squirrel: I'll eat the " + request);
            } else {
                super.handle(request);
            }
        }
    }

    // Client code
    class Application {
        public static void main(String[] args) {
            Handler monkey = new MonkeyHandler();
            Handler squirrel = new SquirrelHandler();
            monkey.setNext(squirrel);
            
            monkey.handle("Nut");
            monkey.handle("Banana");
            monkey.handle("Coffee");
        }
    }
    `,csharp:`
    public interface IHandler
    {
        IHandler SetNext(IHandler handler);
        object Handle(object request);
    }

    public abstract class AbstractHandler : IHandler
    {
        private IHandler _nextHandler;
        public IHandler SetNext(IHandler handler)
        {
            _nextHandler = handler;
            return handler;
        }
        public virtual object Handle(object request) => _nextHandler?.Handle(request);
    }

    public class MonkeyHandler : AbstractHandler
    {
        public override object Handle(object request)
        {
            if ((request as string) == "Banana")
            {
                return $"Monkey: I'll eat the {request}.\\n";
            }
            return base.Handle(request);
        }
    }

    public class SquirrelHandler : AbstractHandler
    {
        public override object Handle(object request)
        {
            if ((request as string) == "Nut")
            {
                return $"Squirrel: I'll eat the {request}.\\n";
            }
            return base.Handle(request);
        }
    }

    // Client code
    public class Program
    {
        public static void Main(string[] args)
        {
            var monkey = new MonkeyHandler();
            var squirrel = new SquirrelHandler();
            monkey.SetNext(squirrel);
            
            Console.WriteLine(monkey.Handle("Nut"));
            Console.WriteLine(monkey.Handle("Banana"));
            Console.WriteLine(monkey.Handle("Coffee") ?? "Nobody handled it.\\n");
        }
    }
    `},codeExplanation:"La interfaz `Handler` define el contrato para todos los manejadores en la cadena: un método `handle` y un método `setNext` para enlazar los manejadores. `AbstractHandler` proporciona una implementación predeterminada para pasar la solicitud al siguiente manejador. `MonkeyHandler` y `SquirrelHandler` son manejadores concretos. Cada uno verifica si puede manejar la solicitud. Si puede, la procesa y devuelve un resultado. Si no, llama al método `handle` base, que pasa la solicitud al siguiente manejador de la cadena. El código cliente construye la cadena enlazando a `monkey` con `squirrel` y luego inicia el proceso enviando una solicitud al primer manejador (`monkey`)."},{name:"Visitor",type:"De Comportamiento",description:"El patrón Visitor es una forma de separar un algoritmo de una estructura de objetos sobre la que opera. Un resultado práctico de esta separación es la capacidad de agregar nuevas operaciones a estructuras de objetos existentes sin modificar las propias estructuras. Es una forma de seguir el principio de abierto/cerrado. El patrón funciona utilizando una técnica llamada doble despacho, donde la operación que se ejecuta depende tanto del tipo del visitante como del tipo del elemento que visita.",useCase:"Este patrón es muy útil cuando tienes una estructura de objetos compleja (como un árbol compuesto) y necesitas realizar varias operaciones no relacionadas en sus elementos. Por ejemplo, considera un modelo de objetos de documento (DOM) compuesto por diferentes tipos de nodos (texto, párrafo, imagen). Es posible que desees realizar operaciones como exportar a XML, exportar a Markdown o realizar una revisión ortográfica. En lugar de agregar un método para cada una de estas operaciones a cada clase de nodo, puedes crear clases Visitor separadas (`XMLExportVisitor`, `MarkdownExportVisitor`, etc.), lo que mantiene limpias las clases de nodo y te permite agregar nuevas operaciones fácilmente.",codeExample:{php:`
    <?php
    interface Visitor {
        public function visitConcreteComponentA(ConcreteComponentA $element): void;
        public function visitConcreteComponentB(ConcreteComponentB $element): void;
    }

    interface Component {
        public function accept(Visitor $visitor): void;
    }

    class ConcreteComponentA implements Component {
        public function accept(Visitor $visitor): void { $visitor->visitConcreteComponentA($this); }
        public function exclusiveMethodOfA(): string { return 'A'; }
    }

    class ConcreteComponentB implements Component {
        public function accept(Visitor $visitor): void { $visitor->visitConcreteComponentB($this); }
        public function specialMethodOfB(): string { return 'B'; }
    }

    class ConcreteVisitor1 implements Visitor {
        public function visitConcreteComponentA(ConcreteComponentA $element): void { echo $element->exclusiveMethodOfA() . " + ConcreteVisitor1\\n"; }
        public function visitConcreteComponentB(ConcreteComponentB $element): void { echo $element->specialMethodOfB() . " + ConcreteVisitor1\\n"; }
    }

    // Client code
    $components = [new ConcreteComponentA(), new ConcreteComponentB()];
    $visitor1 = new ConcreteVisitor1();
    foreach ($components as $component) {
        $component->accept($visitor1);
    }
    `,java:`
    import java.util.ArrayList;
    import java.util.List;

    // Visitor interface
    interface Visitor {
        void visitConcreteComponentA(ConcreteComponentA element);
        void visitConcreteComponentB(ConcreteComponentB element);
    }

    // Component interface
    interface Component {
        void accept(Visitor visitor);
    }

    class ConcreteComponentA implements Component {
        public void accept(Visitor visitor) { visitor.visitConcreteComponentA(this); }
        public String exclusiveMethodOfA() { return "A"; }
    }

    class ConcreteComponentB implements Component {
        public void accept(Visitor visitor) { visitor.visitConcreteComponentB(this); }
        public String specialMethodOfB() { return "B"; }
    }

    class ConcreteVisitor1 implements Visitor {
        public void visitConcreteComponentA(ConcreteComponentA element) { System.out.println(element.exclusiveMethodOfA() + " + ConcreteVisitor1"); }
        public void visitConcreteComponentB(ConcreteComponentB element) { System.out.println(element.specialMethodOfB() + " + ConcreteVisitor1"); }
    }

    // Client code
    class Application {
        public static void main(String[] args) {
            List<Component> components = new ArrayList<>();
            components.add(new ConcreteComponentA());
            components.add(new ConcreteComponentB());
            
            Visitor visitor1 = new ConcreteVisitor1();
            for (Component component : components) {
                component.accept(visitor1);
            }
        }
    }
    `,csharp:`
    // Visitor interface
    public interface IVisitor
    {
        void VisitConcreteComponentA(ConcreteComponentA element);
        void VisitConcreteComponentB(ConcreteComponentB element);
    }

    // Component interface
    public interface IComponent
    {
        void Accept(IVisitor visitor);
    }

    public class ConcreteComponentA : IComponent
    {
        public void Accept(IVisitor visitor) => visitor.VisitConcreteComponentA(this);
        public string ExclusiveMethodOfA() => "A";
    }

    public class ConcreteComponentB : IComponent
    {
        public void Accept(IVisitor visitor) => visitor.VisitConcreteComponentB(this);
        public string SpecialMethodOfB() => "B";
    }

    public class ConcreteVisitor1 : IVisitor
    {
        public void VisitConcreteComponentA(ConcreteComponentA e) => Console.WriteLine($"{e.ExclusiveMethodOfA()} + ConcreteVisitor1");
        public void VisitConcreteComponentB(ConcreteComponentB e) => Console.WriteLine($"{e.SpecialMethodOfB()} + ConcreteVisitor1");
    }

    // Client code
    public class Program
    {
        public static void Main(string[] args)
        {
            var components = new List<IComponent> { new ConcreteComponentA(), new ConcreteComponentB() };
            var visitor1 = new ConcreteVisitor1();
            foreach (var component in components)
            {
                component.Accept(visitor1);
            }
        }
    }
    `},codeExplanation:"La interfaz `Component` tiene un método `accept` que toma un `Visitor` como argumento. La interfaz `Visitor` tiene un método `visit` separado para cada tipo de componente concreto (`visitConcreteComponentA`, `visitConcreteComponentB`). Cuando se llama a `accept` en un `ConcreteComponentA`, este a su vez llama al método `visitConcreteComponentA` en el visitante, pasándose a sí mismo como argumento. Este es el mecanismo de 'doble despacho'. El `ConcreteVisitor1` contiene la lógica real para operar en cada tipo de componente. El código cliente itera a través de una lista de componentes y le dice a cada uno que 'acepte' al visitante, aplicando así la operación a toda la estructura."},{name:"Iterator",type:"De Comportamiento",description:"El patrón Iterator proporciona una forma de acceder a los elementos de un objeto agregado (como una lista o una colección) secuencialmente sin exponer su representación subyacente. El iterador es responsable de gestionar el recorrido de la colección, manteniendo un registro de la posición actual. Esto separa la lógica de recorrido de la propia colección, permitiendo diferentes tipos de iteradores para la misma colección.",useCase:"Usa este patrón para recorrer estructuras de datos complejas o cuando quieras proporcionar una forma uniforme de iterar sobre diferentes estructuras de datos. Por ejemplo, podrías tener una estructura de datos personalizada como un árbol. En lugar de que el cliente escriba código recursivo complejo para recorrerlo, puedes proporcionar un iterador (por ejemplo, un `DepthFirstIterator` o `BreadthFirstIterator`) que oculte la complejidad. Esto también permite al cliente usar un bucle simple (como `while` o `for...of`) para procesar elementos de diferentes tipos de colecciones (arrays, listas, árboles) de manera consistente.",codeExample:{php:`
    <?php
    // PHP has a built-in Iterator interface which is very convenient.
    class WordsCollection implements IteratorAggregate {
        private array $items = [];
        public function getItems(): array { return $this->items; }
        public function addItem(string $item): void { $this->items[] = $item; }
        public function getIterator(): Traversable {
            return new ArrayIterator($this->items);
        }
    }

    // Client code
    $collection = new WordsCollection();
    $collection->addItem('First');
    $collection->addItem('Second');
    $collection->addItem('Third');

    foreach ($collection as $item) {
        echo $item . "\\n";
    }
    `,java:`
    import java.util.ArrayList;
    import java.util.List;
    import java.util.Iterator;

    // The collection class implements the Iterable interface
    class WordsCollection implements Iterable<String> {
        private List<String> items = new ArrayList<>();
        public void addItem(String item) { this.items.add(item); }

        @Override
        public Iterator<String> iterator() {
            return items.iterator();
        }
    }

    // Client code
    class Application {
        public static void main(String[] args) {
            WordsCollection collection = new WordsCollection();
            collection.addItem("First");
            collection.addItem("Second");
            collection.addItem("Third");
            
            // The for-each loop works automatically because the class is Iterable
            for (String item : collection) {
                System.out.println(item);
            }
        }
    }
    `,csharp:`
    using System.Collections;
    using System.Collections.Generic;

    // In C#, the 'yield' keyword makes creating iterators very simple.
    public class WordsCollection : IEnumerable<string>
    {
        private readonly List<string> _items = new List<string>();
        public void AddItem(string item) => _items.Add(item);

        // This method is the iterator block.
        public IEnumerator<string> GetEnumerator()
        {
            foreach (var item in _items)
            {
                yield return item;
            }
        }

        IEnumerator IEnumerable.GetEnumerator()
        {
            return GetEnumerator();
        }
    }

    // Client code
    public class Program
    {
        public static void Main(string[] args)
        {
            var collection = new WordsCollection();
            collection.AddItem("First");
            collection.AddItem("Second");
            collection.AddItem("Third");
            
            // The foreach loop works automatically because the class is IEnumerable
            foreach (var item in collection)
            {
                Console.WriteLine(item);
            }
        }
    }
    `},codeExplanation:"Los lenguajes modernos a menudo tienen soporte incorporado para el patrón Iterator. Los ejemplos muestran cómo implementar este modismo de forma idiomática en cada lenguaje. Al implementar las interfaces de iterador estándar (`IteratorAggregate` en PHP, `Iterable` en Java, `IEnumerable` en C#), la clase personalizada `WordsCollection` se vuelve compatible con la construcción de bucle `foreach` nativa. El código cliente puede entonces recorrer la colección de una manera simple y estandarizada sin necesidad de saber nada sobre su almacenamiento interno (por ejemplo, que usa un array o una lista). El ejemplo de C# con `yield return` es particularmente elegante, ya que el compilador genera automáticamente la máquina de estados para el iterador."},{name:"Memento",type:"De Comportamiento",description:"El patrón Memento proporciona la capacidad de restaurar un objeto a su estado anterior (deshacer mediante rollback) sin violar su encapsulación. El patrón involucra tres objetos: el Originator (el objeto con el estado interno que queremos guardar), el Memento (un objeto que almacena el estado del Originator) y el Caretaker (un objeto que es responsable de mantener el Memento seguro pero nunca opera sobre su contenido ni lo examina).",useCase:"Este patrón es ideal para implementar la funcionalidad de deshacer/rehacer en aplicaciones como editores de texto o programas de gráficos. También se puede utilizar para crear puntos de control en procesos o transacciones de larga duración, permitiéndote retroceder a un estado bueno conocido si algo sale mal. El beneficio clave es que el estado se guarda en un objeto Memento externo, por lo que la clase Originator no necesita estar sobrecargada con lógica de gestión de historial, y su estado interno permanece encapsulado.",codeExample:{php:`
    <?php
    class Memento {
        private string $state;
        public function __construct(string $state) { $this->state = $state; }
        public function getState(): string { return $this->state; }
    }

    class Originator {
        private string $state;
        public function setState(string $state): void {
            echo "Originator: Setting state to {$state}\\n";
            $this->state = $state;
        }
        public function save(): Memento { return new Memento($this->state); }
        public function restore(Memento $m): void {
            $this->state = $m->getState();
            echo "Originator: State restored to {$this->state}\\n";
        }
    }

    class Caretaker {
        private array $mementos = [];
        private Originator $originator;
        public function __construct(Originator $originator) { $this->originator = $originator; }
        public function backup(): void { $this->mementos[] = $this->originator->save(); }
        public function undo(): void {
            if (empty($this->mementos)) return;
            $memento = array_pop($this->mementos);
            $this->originator->restore($memento);
        }
    }

    // Client Code
    $originator = new Originator();
    $caretaker = new Caretaker($originator);
    $originator->setState("State #1");
    $caretaker->backup();
    $originator->setState("State #2");
    $caretaker->backup();
    $caretaker->undo(); // Restores State #1
    `,java:`
    import java.util.Stack;

    // Memento
    class Memento {
        private final String state;
        public Memento(String state) { this.state = state; }
        public String getState() { return state; }
    }

    // Originator
    class Originator {
        private String state;
        public void setState(String state) {
            System.out.println("Originator: Setting state to " + state);
            this.state = state;
        }
        public Memento save() { return new Memento(this.state); }
        public void restore(Memento m) {
            this.state = m.getState();
            System.out.println("Originator: State restored to " + this.state);
        }
    }

    // Caretaker
    class Caretaker {
        private final Stack<Memento> mementos = new Stack<>();
        private final Originator originator;
        public Caretaker(Originator originator) { this.originator = originator; }
        public void backup() { this.mementos.push(this.originator.save()); }
        public void undo() {
            if (mementos.isEmpty()) return;
            Memento memento = this.mementos.pop();
            this.originator.restore(memento);
        }
    }

    // Client Code
    class Application {
        public static void main(String[] args) {
            Originator originator = new Originator();
            Caretaker caretaker = new Caretaker(originator);
            originator.setState("State #1");
            caretaker.backup();
            originator.setState("State #2");
            caretaker.backup();
            caretaker.undo(); // Restores State #1
        }
    }
    `,csharp:`
    // Memento
    public class Memento
    {
        public string State { get; }
        public Memento(string state) => State = state;
    }

    // Originator
    public class Originator
    {
        private string _state;
        public void SetState(string state)
        {
            Console.WriteLine($"Originator: Setting state to {state}");
            _state = state;
        }
        public Memento Save() => new Memento(_state);
        public void Restore(Memento m)
        {
            _state = m.State;
            Console.WriteLine($"Originator: State restored to {_state}");
        }
    }

    // Caretaker
    public class Caretaker
    {
        private readonly Stack<Memento> _mementos = new Stack<Memento>();
        private readonly Originator _originator;
        public Caretaker(Originator originator) => _originator = originator;
        public void Backup() => _mementos.Push(_originator.Save());
        public void Undo()
        {
            if (_mementos.Count == 0) return;
            var memento = _mementos.Pop();
            _originator.Restore(memento);
        }
    }

    // Client Code
    public class Program
    {
        public static void Main(string[] args)
        {
            var originator = new Originator();
            var caretaker = new Caretaker(originator);
            originator.SetState("State #1");
            caretaker.Backup();
            originator.SetState("State #2");
            caretaker.Backup();
            caretaker.Undo(); // Restores State #1
        }
    }
    `},codeExplanation:"El `Originator` es el objeto cuyo estado cambia. Su método `save()` crea un objeto `Memento` que contiene una instantánea de su estado actual. El `Memento` en sí es un objeto de datos simple con un getter para el estado. El `Caretaker` es responsable de gestionar el historial. Mantiene una lista o pila de mementos. Cuando el cliente quiere guardar el estado, llama a `caretaker.backup()`, que le pide al `originator` que cree un memento y luego lo almacena. Para deshacer, el cliente llama a `caretaker.undo()`, que saca el último memento de su historial y lo devuelve al método `restore()` del `originator`."},{name:"Flyweight",type:"Estructural",description:"El patrón Flyweight es un patrón de diseño estructural que minimiza el uso de memoria al compartir la mayor cantidad de datos posible con otros objetos similares. Es una forma de usar objetos en grandes cantidades cuando una representación repetida simple usaría una cantidad inaceptable de memoria. Esto se logra separando el estado de un objeto en dos partes: estado intrínseco (compartido) y estado extrínseco (único). El estado intrínseco se almacena en el objeto flyweight, mientras que el estado extrínseco se pasa a los métodos del flyweight por parte del cliente.",useCase:"Este patrón se utiliza en entornos con recursos limitados o en aplicaciones que necesitan instanciar una gran cantidad de objetos. Por ejemplo, en un videojuego, podrías necesitar renderizar millones de árboles. Cada árbol tiene una parte compartida (malla, textura - el estado intrínseco) y una parte única (posición, tamaño - el estado extrínseco). En lugar de crear un millón de objetos de árbol completos, creas un objeto flyweight para el modelo del árbol y luego lo renderizas un millón de veces, pasando la posición y el tamaño únicos para cada llamada de renderizado. Esto reduce drásticamente el consumo de memoria.",codeExample:{php:`
    <?php
    class Flyweight {
        private string $sharedState;
        public function __construct(string $sharedState) { $this->sharedState = $sharedState; }
        public function operation(string $uniqueState): void {
            echo "Flyweight: Displaying shared ({$this->sharedState}) and unique ({$uniqueState}) state.\\n";
        }
    }

    class FlyweightFactory {
        private array $flyweights = [];
        public function getFlyweight(string $key): Flyweight {
            if (!isset($this->flyweights[$key])) {
                $this->flyweights[$key] = new Flyweight($key);
            }
            return $this->flyweights[$key];
        }
    }

    // Client Code
    $factory = new FlyweightFactory();
    $flyweight1 = $factory->getFlyweight('CarTypeA_red');
    $flyweight2 = $factory->getFlyweight('CarTypeA_red'); // Reuses
    $flyweight3 = $factory->getFlyweight('CarTypeB_blue'); // Creates new

    $flyweight1->operation('Owner1_Plate123');
    $flyweight2->operation('Owner2_Plate456');
    `,java:`
    import java.util.HashMap;
    import java.util.Map;

    // The Flyweight
    class Flyweight {
        private final String sharedState; // Intrinsic state
        public Flyweight(String sharedState) { this.sharedState = sharedState; }
        public void operation(String uniqueState) {
            System.out.printf("Flyweight: Displaying shared (%s) and unique (%s) state.\\n", sharedState, uniqueState);
        }
    }

    // The Flyweight Factory
    class FlyweightFactory {
        private Map<String, Flyweight> flyweights = new HashMap<>();
        public Flyweight getFlyweight(String key) {
            if (!flyweights.containsKey(key)) {
                flyweights.put(key, new Flyweight(key));
            }
            return flyweights.get(key);
        }
    }

    // Client Code
    class Application {
        public static void main(String[] args) {
            FlyweightFactory factory = new FlyweightFactory();
            Flyweight flyweight1 = factory.getFlyweight("CarTypeA_red");
            Flyweight flyweight2 = factory.getFlyweight("CarTypeA_red"); // Reuses
            
            flyweight1.operation("Owner1_Plate123");
            flyweight2.operation("Owner2_Plate456");
            
            System.out.println("Are flyweight1 and 2 the same object? " + (flyweight1 == flyweight2));
        }
    }
    `,csharp:`
    // The Flyweight
    public class Flyweight
    {
        private readonly string _sharedState; // Intrinsic state
        public Flyweight(string sharedState) => _sharedState = sharedState;
        public void Operation(string uniqueState) => 
            Console.WriteLine($"Flyweight: Displaying shared ({_sharedState}) and unique ({uniqueState}) state.");
    }

    // The Flyweight Factory
    public class FlyweightFactory
    {
        private readonly Dictionary<string, Flyweight> _flyweights = new Dictionary<string, Flyweight>();
        public Flyweight GetFlyweight(string key)
        {
            if (!_flyweights.ContainsKey(key))
            {
                _flyweights[key] = new Flyweight(key);
            }
            return _flyweights[key];
        }
    }

    // Client Code
    public class Program
    {
        public static void Main(string[] args)
        {
            var factory = new FlyweightFactory();
            var flyweight1 = factory.GetFlyweight("CarTypeA_red");
            var flyweight2 = factory.GetFlyweight("CarTypeA_red"); // Reuses
            
            flyweight1.Operation("Owner1_Plate123");
            flyweight2.Operation("Owner2_Plate456");
            
            Console.WriteLine($"Are flyweight1 and 2 the same object? {Object.ReferenceEquals(flyweight1, flyweight2)}");
        }
    }
    `},codeExplanation:"La clase `Flyweight` almacena el `sharedState` (estado intrínseco). La `FlyweightFactory` es el componente clave; mantiene un pool de objetos flyweight. Cuando un cliente solicita un flyweight a través de `getFlyweight`, la fábrica utiliza una clave basada en el estado compartido. Si ya existe un flyweight con esa clave en el pool, devuelve la instancia existente. De lo contrario, crea una nueva, la almacena en el pool y la devuelve. El código cliente muestra que solicitar un flyweight con el mismo estado compartido (`CarTypeA_red`) devuelve la misma instancia de objeto. El estado único (`Owner_Plate`) se pasa al método `operation` en el momento del uso."},{name:"Proxy",type:"Estructural",description:"El patrón Proxy proporciona un sustituto o marcador de posición para otro objeto para controlar el acceso a él. Crea un objeto envolvente (el proxy) que tiene la misma interfaz que el objeto real. Esto permite que el proxy sea sustituido por el objeto real. El proxy puede entonces agregar lógica extra antes o después de delegar la solicitud al objeto real, como control de acceso, almacenamiento en caché o registro (logging).",useCase:"Este patrón es útil para una variedad de escenarios. Un 'proxy virtual' puede usarse para la inicialización perezosa, donde el objeto real no se crea hasta que realmente se necesita, lo cual es útil para objetos que consumen muchos recursos. Un 'proxy de protección' puede controlar el acceso al objeto real, por ejemplo, verificando los permisos del usuario. Un 'proxy de caché' puede almacenar los resultados de operaciones costosas y devolver el resultado almacenado en caché para llamadas posteriores con los mismos argumentos. Un 'proxy de registro' puede interceptar las llamadas al objeto real para registrarlas con fines de auditoría.",codeExample:{php:`
    <?php
    interface Subject {
        public function request(): void;
    }

    class RealSubject implements Subject {
        public function request(): void { echo "RealSubject: Handling request.\\n"; }
    }

    class Proxy implements Subject {
        private RealSubject $realSubject;
        public function request(): void {
            if ($this->checkAccess()) {
                // Lazy initialization
                if (!isset($this->realSubject)) {
                    $this->realSubject = new RealSubject();
                }
                $this->realSubject->request();
                $this->logAccess();
            }
        }
        private function checkAccess(): bool {
            echo "Proxy: Checking access.\\n";
            return true;
        }
        private function logAccess(): void { echo "Proxy: Logging the request.\\n"; }
    }

    // Client Code
    $proxy = new Proxy();
    $proxy->request();
    `,java:`
    // Subject interface
    interface Subject {
        void request();
    }

    class RealSubject implements Subject {
        public void request() { System.out.println("RealSubject: Handling request."); }
    }

    class Proxy implements Subject {
        private RealSubject realSubject; // Lazy initialization
        public void request() {
            if (checkAccess()) {
                if (realSubject == null) {
                    realSubject = new RealSubject();
                }
                realSubject.request();
                logAccess();
            }
        }
        private boolean checkAccess() {
            System.out.println("Proxy: Checking access.");
            return true;
        }
        private void logAccess() { System.out.println("Proxy: Logging the request."); }
    }

    // Client Code
    class Application {
        public static void main(String[] args) {
            Subject proxy = new Proxy();
            proxy.request();
        }
    }
    `,csharp:`
    // Subject interface
    public interface ISubject
    {
        void Request();
    }

    public class RealSubject : ISubject
    {
        public void Request() => Console.WriteLine("RealSubject: Handling request.");
    }

    public class Proxy : ISubject
    {
        private RealSubject _realSubject; // Lazy initialization
        public void Request()
        {
            if (CheckAccess())
            {
                if (_realSubject == null)
                {
                    _realSubject = new RealSubject();
                }
                _realSubject.Request();
                LogAccess();
            }
        }
        private bool CheckAccess()
        {
            Console.WriteLine("Proxy: Checking access.");
            return true;
        }
        private void LogAccess() => Console.WriteLine("Proxy: Logging the request.");
    }

    // Client Code
    public class Program
    {
        public static void Main(string[] args)
        {
            ISubject proxy = new Proxy();
            proxy.Request();
        }
    }
    `},codeExplanation:"Tanto el `Proxy` como el `RealSubject` implementan la interfaz `Subject`, por lo que el cliente puede usarlos indistintamente. El `Proxy` mantiene una referencia al `RealSubject`. Cuando el cliente llama al método `request` en el `Proxy`, el proxy no pasa inmediatamente la llamada al sujeto real. En su lugar, primero realiza su propia lógica (en este caso, `checkAccess`). Si la verificación de acceso pasa, entonces instancia el `RealSubject` (inicialización perezosa) si es necesario y delega la llamada a su método `request()`. Después de que el sujeto real ha terminado, el proxy realiza otra acción, `logAccess`. Esto demuestra cómo el proxy puede envolver al objeto real para agregar lógica de pre y post-procesamiento."},{name:"Dependency Injection",type:"Creacional",description:"La Inyección de Dependencias (DI) es un patrón de diseño utilizado para implementar la Inversión de Control (IoC). Permite la creación de objetos dependientes fuera de una clase y proporciona esos objetos a la clase a través de diferentes maneras. En lugar de que un componente cree sus propias dependencias, las dependencias se le 'inyectan' desde una fuente externa. Esto desacopla al componente de la responsabilidad de crear o localizar sus dependencias, haciendo el sistema más modular, flexible y fácil de probar.",useCase:"La DI es una piedra angular de los frameworks de software modernos (como Spring, Angular y NestJS). Se utiliza para desacoplar componentes y mejorar la modularidad y la capacidad de prueba. Por ejemplo, un `DataService` podría depender de un `Logger`. En lugar de que `DataService` cree un `new ConsoleLogger()`, declara que necesita un objeto que implemente la interfaz `ILogger`. Un contenedor de DI (o el código de configuración de la aplicación) es entonces responsable de crear una instancia específica de logger (como `ConsoleLogger` o `FileLogger`) e 'inyectarla' en el `DataService`. Esto facilita el cambio de la implementación del logger o el suministro de un logger simulado durante las pruebas sin cambiar el código de `DataService`.",codeExample:{php:`
    <?php
    interface ILogger {
        public function log(string $message): void;
    }

    class ConsoleLogger implements ILogger {
        public function log(string $message): void {
            echo "[Console]: {$message}\\n";
        }
    }

    class MyService {
        private ILogger $logger;

        // Dependency is injected via the constructor
        public function __construct(ILogger $logger) {
            $this->logger = $logger;
        }

        public function doWork(): void {
            $this->logger->log('Service is doing work.');
        }
    }

    // Client Code / Composition Root
    $logger = new ConsoleLogger();
    $service = new MyService($logger);
    $service->doWork();
    `,java:`
    // Dependency interface
    interface ILogger {
        void log(String message);
    }

    // Concrete dependency
    class ConsoleLogger implements ILogger {
        public void log(String message) {
            System.out.println("[Console]: " + message);
        }
    }

    // Dependent class
    class MyService {
        private final ILogger logger;

        // Dependency is injected via the constructor
        public MyService(ILogger logger) {
            this.logger = logger;
        }

        public void doWork() {
            logger.log("Service is doing work.");
        }
    }

    // Client Code / Composition Root
    class Application {
        public static void main(String[] args) {
            ILogger logger = new ConsoleLogger();
            MyService service = new MyService(logger);
            service.doWork();
        }
    }
    `,csharp:`
    // Dependency interface
    public interface ILogger
    {
        void Log(string message);
    }

    // Concrete dependency
    public class ConsoleLogger : ILogger
    {
        public void Log(string message)
        {
            Console.WriteLine($"[Console]: {message}");
        }
    }

    // Dependent class
    public class MyService
    {
        private readonly ILogger _logger;

        // Dependency is injected via the constructor
        public MyService(ILogger logger)
        {
            _logger = logger;
        }

        public void DoWork()
        {
            _logger.Log("Service is doing work.");
        }
    }

    // Client Code / Composition Root
    public class Program
    {
        public static void Main(string[] args)
        {
            ILogger logger = new ConsoleLogger();
            var service = new MyService(logger);
            service.DoWork();
        }
    }
    `},codeExplanation:"La clase `MyService` tiene una dependencia de un `ILogger`. En lugar de crear una instancia de logger por sí misma, acepta un objeto `ILogger` a través de su constructor (esto se conoce como 'inyección por constructor'). Esto significa que `MyService` no está acoplado a ninguna implementación específica de logger. El código cliente, también conocido como la 'raíz de composición', es responsable de crear las dependencias (`ConsoleLogger`) e inyectarlas al crear la instancia de `MyService`. Esto demuestra cómo se invierte la responsabilidad de la creación de dependencias: se traslada del componente al cliente."},{name:"Null Object",type:"De Comportamiento",description:"El patrón Null Object es un patrón de diseño de comportamiento que proporciona un objeto especial como sustituto de la falta de un objeto de un tipo dado. En lugar de utilizar una referencia `null`, que requiere que los clientes realicen comprobaciones explícitas de nulos, este patrón proporciona un objeto predeterminado que 'no hace nada'. El objeto nulo implementa la misma interfaz que el objeto real, por lo que el cliente puede tratarlos de manera uniforme.",useCase:"Este patrón se utiliza para simplificar el código del cliente al evitar las comprobaciones condicionales de `null`. Es particularmente útil cuando un objeto puede tener una dependencia opcional. Por ejemplo, un objeto `Customer` podría tener un objeto `Discount` opcional. Si no hay descuento, en lugar de devolver `null`, puedes devolver un objeto `NullDiscount` cuyo método `apply` no hace nada y devuelve el precio original. Esto evita que el código del cliente se llene de comprobaciones `if (discount !== null)` y reduce el riesgo de errores de `NullReferenceException`.",codeExample:{php:`
    <?php
    interface User {
        public function getName(): string;
        public function hasAccess(): bool;
    }

    class RealUser implements User {
        private string $name;
        public function __construct(string $name) { $this->name = $name; }
        public function getName(): string { return $this->name; }
        public function hasAccess(): bool { return true; }
    }

    class NullUser implements User {
        public function getName(): string { return "Guest"; }
        public function hasAccess(): bool { return false; }
    }

    class UserService {
        public function getUser(int $id): User {
            if ($id === 1) {
                return new RealUser("John Doe");
            }
            return new NullUser();
        }
    }

    // Client Code
    $userService = new UserService();
    $user1 = $userService->getUser(1);
    $user2 = $userService->getUser(2);

    echo "User 1: {$user1->getName()}, Access: " . ($user1->hasAccess() ? 'Yes' : 'No') . "\\n";
    echo "User 2: {$user2->getName()}, Access: " . ($user2->hasAccess() ? 'Yes' : 'No') . "\\n";
    `,java:`
    // Abstract Object
    interface User {
        String getName();
        boolean hasAccess();
    }

    // Real Object
    class RealUser implements User {
        private String name;
        public RealUser(String name) { this.name = name; }
        public String getName() { return this.name; }
        public boolean hasAccess() { return true; }
    }

    // Null Object
    class NullUser implements User {
        public String getName() { return "Guest"; }
        public boolean hasAccess() { return false; }
    }

    class UserService {
        public User getUser(int id) {
            if (id == 1) {
                return new RealUser("John Doe");
            }
            return new NullUser();
        }
    }

    // Client Code
    class Application {
        public static void main(String[] args) {
            UserService userService = new UserService();
            User user1 = userService.getUser(1);
            User user2 = userService.getUser(2);

            System.out.printf("User 1: %s, Access: %b\\n", user1.getName(), user1.hasAccess());
            System.out.printf("User 2: %s, Access: %b\\n", user2.getName(), user2.hasAccess());
        }
    }
    `,csharp:`
    // Abstract Object
    public interface IUser
    {
        string GetName();
        bool HasAccess();
    }

    // Real Object
    public class RealUser : IUser
    {
        private readonly string _name;
        public RealUser(string name) => _name = name;
        public string GetName() => _name;
        public bool HasAccess() => true;
    }

    // Null Object
    public class NullUser : IUser
    {
        public string GetName() => "Guest";
        public bool HasAccess() => false;
    }

    public class UserService
    {
        public IUser GetUser(int id)
        {
            if (id == 1)
            {
                return new RealUser("John Doe");
            }
            return new NullUser();
        }
    }

    // Client Code
    public class Program
    {
        public static void Main(string[] args)
        {
            var userService = new UserService();
            var user1 = userService.GetUser(1);
            var user2 = userService.GetUser(2);

            Console.WriteLine($"User 1: {user1.GetName()}, Access: {user1.HasAccess()}");
            Console.WriteLine($"User 2: {user2.GetName()}, Access: {user2.HasAccess()}");
        }
    }
    `},codeExplanation:"La interfaz `User` define el contrato para los objetos de usuario. `RealUser` es la implementación real para un usuario existente. `NullUser` es la implementación especial de objeto nulo; proporciona un comportamiento predeterminado de 'no hacer nada' (devuelve 'Guest' y `false` para el acceso). `UserService` devuelve un `RealUser` si se encuentra el usuario, pero crucialmente, devuelve un `NullUser` en lugar de `null` si el usuario no se encuentra. Como ambas clases implementan la interfaz `User`, el código cliente puede llamar a métodos como `getName()` y `hasAccess()` en el objeto devuelto sin necesidad de una comprobación de nulos."},{name:"Module",type:"Estructural",description:"El patrón Module es un patrón de diseño estructural utilizado para mantener partes del código independientes y organizadas. En lenguajes como PHP, Java y C#, este concepto se implementa a través de características incorporadas como espacios de nombres (namespaces) y paquetes (packages). Estas características proporcionan una forma de agrupar clases, interfaces y otras estructuras de código relacionadas, controlando su visibilidad y evitando colisiones de nombres en aplicaciones grandes. Esto logra los mismos objetivos de encapsulación y organización que el patrón Module original de JavaScript.",useCase:"Este patrón es fundamental para organizar cualquier aplicación no trivial. En Java, agruparías clases relacionadas en un `package` (p. ej., `com.mycompany.shoppingcart`). En C# y PHP, usas `namespace` (p. ej., `MyCompany.ShoppingCart`). Esto te permite encapsular el funcionamiento interno de una característica, como un carrito de compras, y exponer solo una API pública (p. ej., `CartService`). Esto evita que otras partes de la aplicación dependan de los detalles de implementación internos, haciendo que el código sea más mantenible y robusto.",codeExample:{php:`
    <?php
    // File: MyProject/ShoppingCart/Cart.php
    namespace MyProject\\ShoppingCart;

    class Cart {
        private array $items = [];

        public function addItem(string $item): void {
            $this->items[] = $item;
            echo "Added {$item} to cart.\\n";
        }

        public function getItems(): array {
            return $this->items;
        }
    }

    // File: main.php
    // use MyProject\\ShoppingCart\\Cart; // (with an autoloader)

    // For this example, we'll just require the file.
    require_once 'MyProject/ShoppingCart/Cart.php';

    $cart = new MyProject\\ShoppingCart\\Cart();
    $cart->addItem("Apple");
    `,java:`
    // File: com/mycompany/shoppingcart/Cart.java
    package com.mycompany.shoppingcart;

    import java.util.ArrayList;
    import java.util.List;

    public class Cart {
        private List<String> items = new ArrayList<>();

        public void addItem(String item) {
            this.items.add(item);
            System.out.println("Added " + item + " to cart.");
        }

        public List<String> getItems() {
            return this.items;
        }
    }

    // File: com/mycompany/Application.java
    package com.mycompany;

    import com.mycompany.shoppingcart.Cart;

    public class Application {
        public static void main(String[] args) {
            Cart cart = new Cart();
            cart.addItem("Apple");
        }
    }
    `,csharp:`
    // File: MyProject/ShoppingCart/Cart.cs
    namespace MyProject.ShoppingCart
    {
        public class Cart
        {
            private readonly List<string> _items = new List<string>();

            public void AddItem(string item)
            {
                _items.Add(item);
                Console.WriteLine($"Added {item} to cart.");
            }

            public IEnumerable<string> GetItems()
            {
                return _items;
            }
        }
    }

    // File: MyProject/Program.cs
    using MyProject.ShoppingCart; // Import the namespace

    namespace MyProject
    {
        public class Program
        {
            public static void Main(string[] args)
            {
                var cart = new Cart();
                cart.AddItem("Apple");
            }
        }
    }
    `},codeExplanation:"Estos ejemplos muestran cómo se utilizan los espacios de nombres (PHP, C#) y los paquetes (Java) para organizar el código en módulos lógicos. La clase `Cart` se coloca dentro de un módulo `ShoppingCart`. El estado interno, como la lista `items`, se mantiene `private`. La clase `Application` o `Program`, que reside en un espacio de nombres/paquete diferente, puede entonces usar o importar la clase `Cart` para interactuar con su API pública (`addItem`, `getItems`) sin tener acceso a sus detalles de implementación privados. Esto demuestra la encapsulación y la organización del código, que son los principios básicos del patrón Module."}],ai=()=>({is_sidebar_open:!1,patterns:ni,selected_pattern:null,selected_language:"php",pattern_type_styles:{Creacional:"bg-green-500/10 text-green-400 border-green-500/20",Estructural:"bg-blue-500/10 text-blue-400 border-blue-500/20","De Comportamiento":"bg-purple-500/10 text-purple-400 border-purple-500/20"},pattern_groups:[],available_languages:[],patternGroups(){const e=this.patterns.reduce((n,a)=>(n[a.type]||(n[a.type]=[]),n[a.type].push(a),n),{}),t={Creacional:"text-green-400",Estructural:"text-blue-400","De Comportamiento":"text-purple-400"};return Object.keys(e).map(n=>({type:n,patterns:e[n],color:t[n]||"text-gray-400"}))},availableLanguages(){return this.selected_pattern?Object.keys(this.selected_pattern.codeExample):[]},selectPattern(e){this.selected_pattern=e,this.updateSelectedLanguage()},updateSelectedLanguage(){if(!this.selected_pattern)return;const e=this.availableLanguages(),n=["php","java","csharp"].find(a=>e.includes(a))||e[0];n&&(this.selected_language=n)},init(){this.selectPattern(this.patterns[0]),this.pattern_groups=this.patternGroups(),this.available_languages=this.availableLanguages()}}),_={string:{type:"string",pattern:/`[^`]*`|"[^"]*"|'[^']*'/},comment:{type:"comment",pattern:/\/\*[\s\S]*?\*\/|\/\/.*/},number:{type:"number",pattern:/\b\d+(?:\.\d+)?\b/}},It=[_.comment,_.string,_.number,{type:"keyword",pattern:/\b(?:class|const|let|var|function|if|else|return|import|export|from|new|this|extends|super|while|for|switch|case|default|break|continue|async|await|try|catch|finally|throw|typeof|instanceof|delete|void)\b/},{type:"keyword",pattern:/\b(?:public|private|protected|static|implements|interface|type|enum|get|set|constructor|readonly|declare|abstract)\b/},{type:"boolean",pattern:/\b(?:true|false|null|undefined)\b/},{type:"class-name",pattern:/\b[A-Z][\w]*/},{type:"function",pattern:/[a-zA-Z_]\w*(?=\()/},{type:"operator",pattern:/=>|[=+\-*\/%&|<>!^~?:.]+/},{type:"punctuation",pattern:/[{}[\]();,:]/}],ri=[_.comment,_.string,_.number,{type:"variable",pattern:/\$[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/},{type:"keyword",pattern:/\b(?:__halt_compiler|abstract|and|array|as|break|callable|case|catch|class|clone|const|continue|declare|default|die|do|echo|else|elseif|empty|enddeclare|endfor|endforeach|endif|endswitch|endwhile|eval|exit|extends|final|finally|fn|for|foreach|function|global|goto|if|implements|include|include_once|instanceof|insteadof|interface|isset|list|namespace|new|or|print|private|protected|public|require|require_once|return|static|switch|throw|trait|try|unset|use|var|while|xor|yield|echo|new)\b/i},{type:"boolean",pattern:/\b(?:true|false|null)\b/i},{type:"class-name",pattern:/\b[A-Z][\w]*/},{type:"function",pattern:/[a-zA-Z_]\w*(?=\()/},{type:"operator",pattern:/=>|[=+\-*\/%&|<>!^~?:.]+/},{type:"punctuation",pattern:/[{}[\]();,:]/}],ii=[_.comment,_.number,{type:"string",pattern:/b?"(?:\\.|[^\\"])*"/},{type:"lifetime",pattern:/'[\w_]+/},{type:"keyword",pattern:/\b(?:fn|let|mut|if|else|loop|while|for|in|match|return|struct|enum|pub|use|mod|const|static|as|break|continue|crate|extern|impl|ref|self|super|trait|type|unsafe|where|async|await|dyn)\b/},{type:"type",pattern:/\b(?:i8|i16|i32|i64|i128|isize|u8|u16|u32|u64|u128|usize|f32|f64|bool|char|str|String|Vec|Option|Result|Box|&)\b/},{type:"macro",pattern:/\b\w+!/},{type:"boolean",pattern:/\b(?:true|false)\b/},{type:"class-name",pattern:/\b[A-Z][\w]*/},{type:"function",pattern:/[a-zA-Z_]\w*(?=\()/},{type:"operator",pattern:/[=+\-*\/%&|<>!^~?:.]+/},{type:"punctuation",pattern:/[{}[\]();,:]/}],oi=[_.comment,_.string,{type:"keyword",pattern:/\b(?:abstract|assert|break|case|catch|class|const|continue|default|do|else|enum|extends|final|finally|for|goto|if|implements|import|instanceof|interface|native|new|package|private|protected|public|return|static|strictfp|super|switch|synchronized|this|throw|throws|transient|try|volatile|while)\b/},{type:"type",pattern:/\b(?:boolean|byte|char|double|float|int|long|short|void|String|System|Integer|List|Map|Object)\b/},{type:"boolean",pattern:/\b(?:true|false|null)\b/},{type:"class-name",pattern:/\b[A-Z][\w]*/},{type:"function",pattern:/[a-zA-Z_]\w*(?=\()/},{type:"operator",pattern:/[=+\-*\/%&|<>!^~?:.]+/},{type:"punctuation",pattern:/[{}[\]();,:]/},{type:"comment",pattern:/@[\w]+/}],si=[_.comment,_.number,{type:"string",pattern:/@"[^"]*"|"[^"]*"/},{type:"keyword",pattern:/\b(?:abstract|as|base|break|case|catch|class|const|continue|default|delegate|do|else|enum|event|explicit|extern|finally|fixed|for|foreach|goto|if|implicit|in|interface|internal|is|lock|namespace|new|operator|out|override|params|private|protected|public|readonly|ref|return|sealed|sizeof|stackalloc|static|struct|switch|this|throw|try|typeof|unchecked|unsafe|using|virtual|void|volatile|while)\b/},{type:"type",pattern:/\b(?:bool|byte|char|decimal|double|float|int|long|sbyte|short|string|uint|ulong|ushort|var|void|object|Action|Func|IEnumerable|List|Dictionary|Console)\b/},{type:"keyword",pattern:/\b(?:get|set|value|add|remove)\b/},{type:"boolean",pattern:/\b(?:true|false|null)\b/},{type:"class-name",pattern:/\b[A-Z][\w]*/},{type:"function",pattern:/[a-zA-Z_]\w*(?=\()/},{type:"operator",pattern:/=>|[=+\-*\/%&|<>!^~?:.]+/},{type:"punctuation",pattern:/[{}[\]();,:]/},{type:"comment",pattern:/#[\w]+/}],ci=[{type:"comment",pattern:/<!--[\s\S]*?-->/},{type:"tag-punctuation",pattern:/<\/?/},{type:"tag-name",pattern:/[\w-]+/},{type:"tag-punctuation",pattern:/>/},{type:"attr-name",pattern:/[\w-]+(?==)/},{type:"operator",pattern:/=/},{type:"attr-value",pattern:/"[^"]*"|'[^']*'/},{type:"entity",pattern:/&[\w#]+;/}],li=[_.comment,_.number,{type:"string",pattern:/"[^"]*"|'[^']*'/},{type:"at-rule",pattern:/@[\w-]+/},{type:"selector",pattern:/(?:[.#&]?)[\w-]+(?:[:\[][\w\s"'-=]+\]?)*/},{type:"property",pattern:/[\w-]+(?=\s*:)/},{type:"function",pattern:/\b(?:url|rgb|rgba|hsl|hsla|var)\(/},{type:"punctuation",pattern:/[{};:,()]/}];class ui{grammars={};constructor(){this.grammars={javascript:this.createGrammar(It),typescript:this.createGrammar(It),php:this.createGrammar(ri),rust:this.createGrammar(ii),java:this.createGrammar(oi),csharp:this.createGrammar(si),html:this.createGrammar(ci),css:this.createGrammar(li)}}createGrammar(t){return t.filter(Boolean)}tokenize(t,n){const a=this.grammars[n]||[];if(a.length===0)return[{type:"plaintext",content:t}];let r=t;const i=[];for(;r.length>0;){let o=!1;for(const s of a){const c=s.pattern.exec(r);if(c&&c.index===0){i.push({type:s.type,content:c[0]}),r=r.slice(c[0].length),o=!0;break}}if(!o){let s=r.length;for(const c of a){const l=c.pattern.exec(r);l&&(s=Math.min(s,l.index))}s>0?(i.push({type:"plaintext",content:r.slice(0,s)}),r=r.slice(s)):(i.push({type:"plaintext",content:r[0]}),r=r.slice(1))}}return i}escapeHtml(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}}const di=()=>({code:"",language:null,highlighted_code:"",lines:[],syntax_engine:new ui,getLines(){return this.code?this.code.trim().split(`
`):[]},initializeCode(e,t){this.code=e,this.language=t,this.lines=this.getLines(),this.highlight()},highlight(){const e=this.lines.map(t=>this.syntax_engine.tokenize(t,this.language));this.highlighted_code=e.map(t=>`<div class="code-line">${t.length===0?" ":t.map(a=>`<span class="token token-${a.type.replace(/[^a-zA-Z0-9-]/g,"")}">${this.syntax_engine.escapeHtml(a.content)}</span>`).join("")}</div>`).join("")}});window.Alpine=je;je.data("design_patterns_data",ai);je.data("code_block_data",di);je.start();
