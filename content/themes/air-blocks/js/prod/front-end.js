(()=>{var e={9498:e=>{"use strict";var t=function(){var e={tolerance:0,duration:800,easing:"easeOutQuart",container:window,callback:function(){}};function t(e,t,n,o){return e/=o,-n*(--e*e*e*e-1)+t}function n(e,t){var n={};return Object.keys(e).forEach((function(t){n[t]=e[t]})),Object.keys(t).forEach((function(e){n[e]=t[e]})),n}function o(e){return e instanceof HTMLElement?e.scrollTop:e.pageYOffset}function r(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.options=n(e,o),this.easeFunctions=n({easeOutQuart:t},r)}return r.prototype.registerTrigger=function(e,t){var o=this;if(e){var r=e.getAttribute("href")||e.getAttribute("data-target"),i=r&&"#"!==r?document.getElementById(r.substring(1)):document.body,a=n(this.options,function(e,t){var n={};return Object.keys(t).forEach((function(t){var o=e.getAttribute("data-mt-".concat(t.replace(/([A-Z])/g,(function(e){return"-"+e.toLowerCase()}))));o&&(n[t]=isNaN(o)?o:parseInt(o,10))})),n}(e,this.options));"function"==typeof t&&(a.callback=t);var s=function(e){e.preventDefault(),o.move(i,a)};return e.addEventListener("click",s,!1),function(){return e.removeEventListener("click",s,!1)}}},r.prototype.move=function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(0===e||e){r=n(this.options,r);var i,a="number"==typeof e?e:e.getBoundingClientRect().top,s=o(r.container),c=null;a-=r.tolerance;var l=function n(l){var d=o(t.options.container);c||(c=l-1);var u=l-c;if(i&&(a>0&&i>d||a<0&&i<d))return r.callback(e);i=d;var f=t.easeFunctions[r.easing](u,s,a,r.duration);r.container.scroll(0,f),u<r.duration?window.requestAnimationFrame(n):(r.container.scroll(0,a+s),r.callback(e))};window.requestAnimationFrame(l)}},r.prototype.addEaseFunction=function(e,t){this.easeFunctions[e]=t},r}();e.exports=t},4786:function(e){e.exports=function(){"use strict";function e(){return e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},e.apply(this,arguments)}var t="undefined"!=typeof window,n=t&&!("onscroll"in window)||"undefined"!=typeof navigator&&/(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),o=t&&"IntersectionObserver"in window,r=t&&"classList"in document.createElement("p"),i=t&&window.devicePixelRatio>1,a={elements_selector:".lazy",container:n||t?document:null,threshold:300,thresholds:null,data_src:"src",data_srcset:"srcset",data_sizes:"sizes",data_bg:"bg",data_bg_hidpi:"bg-hidpi",data_bg_multi:"bg-multi",data_bg_multi_hidpi:"bg-multi-hidpi",data_poster:"poster",class_applied:"applied",class_loading:"loading",class_loaded:"loaded",class_error:"error",class_entered:"entered",class_exited:"exited",unobserve_completed:!0,unobserve_entered:!1,cancel_on_exit:!0,callback_enter:null,callback_exit:null,callback_applied:null,callback_loading:null,callback_loaded:null,callback_error:null,callback_finish:null,callback_cancel:null,use_native:!1},s=function(t){return e({},a,t)},c=function(e,t){var n,o="LazyLoad::Initialized",r=new e(t);try{n=new CustomEvent(o,{detail:{instance:r}})}catch(e){(n=document.createEvent("CustomEvent")).initCustomEvent(o,!1,!1,{instance:r})}window.dispatchEvent(n)},l="src",d="srcset",u="sizes",f="poster",g="llOriginalAttrs",p="loading",h="loaded",v="applied",m="error",w="native",b="data-",y="ll-status",x=function(e,t){return e.getAttribute(b+t)},_=function(e){return x(e,y)},E=function(e,t){return function(e,t,n){var o="data-ll-status";null!==n?e.setAttribute(o,n):e.removeAttribute(o)}(e,0,t)},k=function(e){return E(e,null)},L=function(e){return null===_(e)},A=function(e){return _(e)===w},N=[p,h,v,m],C=function(e,t,n,o){e&&(void 0===o?void 0===n?e(t):e(t,n):e(t,n,o))},O=function(e,t){r?e.classList.add(t):e.className+=(e.className?" ":"")+t},I=function(e,t){r?e.classList.remove(t):e.className=e.className.replace(new RegExp("(^|\\s+)"+t+"(\\s+|$)")," ").replace(/^\s+/,"").replace(/\s+$/,"")},T=function(e){return e.llTempImage},S=function(e,t){if(t){var n=t._observer;n&&n.unobserve(e)}},R=function(e,t){e&&(e.loadingCount+=t)},M=function(e,t){e&&(e.toLoadCount=t)},j=function(e){for(var t,n=[],o=0;t=e.children[o];o+=1)"SOURCE"===t.tagName&&n.push(t);return n},D=function(e,t){var n=e.parentNode;n&&"PICTURE"===n.tagName&&j(n).forEach(t)},P=function(e,t){j(e).forEach(t)},q=[l],B=[l,f],z=[l,d,u],W=function(e){return!!e[g]},F=function(e){return e[g]},H=function(e){return delete e[g]},K=function(e,t){if(!W(e)){var n={};t.forEach((function(t){n[t]=e.getAttribute(t)})),e[g]=n}},Q=function(e,t){if(W(e)){var n=F(e);t.forEach((function(t){!function(e,t,n){n?e.setAttribute(t,n):e.removeAttribute(t)}(e,t,n[t])}))}},U=function(e,t,n){O(e,t.class_loading),E(e,p),n&&(R(n,1),C(t.callback_loading,e,n))},V=function(e,t,n){n&&e.setAttribute(t,n)},G=function(e,t){V(e,u,x(e,t.data_sizes)),V(e,d,x(e,t.data_srcset)),V(e,l,x(e,t.data_src))},Y={IMG:function(e,t){D(e,(function(e){K(e,z),G(e,t)})),K(e,z),G(e,t)},IFRAME:function(e,t){K(e,q),V(e,l,x(e,t.data_src))},VIDEO:function(e,t){P(e,(function(e){K(e,q),V(e,l,x(e,t.data_src))})),K(e,B),V(e,f,x(e,t.data_poster)),V(e,l,x(e,t.data_src)),e.load()}},$=["IMG","IFRAME","VIDEO"],X=function(e,t){!t||function(e){return e.loadingCount>0}(t)||function(e){return e.toLoadCount>0}(t)||C(e.callback_finish,t)},Z=function(e,t,n){e.addEventListener(t,n),e.llEvLisnrs[t]=n},J=function(e,t,n){e.removeEventListener(t,n)},ee=function(e){return!!e.llEvLisnrs},te=function(e){if(ee(e)){var t=e.llEvLisnrs;for(var n in t){var o=t[n];J(e,n,o)}delete e.llEvLisnrs}},ne=function(e,t,n){!function(e){delete e.llTempImage}(e),R(n,-1),function(e){e&&(e.toLoadCount-=1)}(n),I(e,t.class_loading),t.unobserve_completed&&S(e,n)},oe=function(e,t,n){var o=T(e)||e;ee(o)||function(e,t,n){ee(e)||(e.llEvLisnrs={});var o="VIDEO"===e.tagName?"loadeddata":"load";Z(e,o,t),Z(e,"error",n)}(o,(function(r){!function(e,t,n,o){var r=A(t);ne(t,n,o),O(t,n.class_loaded),E(t,h),C(n.callback_loaded,t,o),r||X(n,o)}(0,e,t,n),te(o)}),(function(r){!function(e,t,n,o){var r=A(t);ne(t,n,o),O(t,n.class_error),E(t,m),C(n.callback_error,t,o),r||X(n,o)}(0,e,t,n),te(o)}))},re=function(e,t,n){!function(e){e.llTempImage=document.createElement("IMG")}(e),oe(e,t,n),function(e){W(e)||(e[g]={backgroundImage:e.style.backgroundImage})}(e),function(e,t,n){var o=x(e,t.data_bg),r=x(e,t.data_bg_hidpi),a=i&&r?r:o;a&&(e.style.backgroundImage='url("'.concat(a,'")'),T(e).setAttribute(l,a),U(e,t,n))}(e,t,n),function(e,t,n){var o=x(e,t.data_bg_multi),r=x(e,t.data_bg_multi_hidpi),a=i&&r?r:o;a&&(e.style.backgroundImage=a,function(e,t,n){O(e,t.class_applied),E(e,v),n&&(t.unobserve_completed&&S(e,t),C(t.callback_applied,e,n))}(e,t,n))}(e,t,n)},ie=function(e,t,n){!function(e){return $.indexOf(e.tagName)>-1}(e)?re(e,t,n):function(e,t,n){oe(e,t,n),function(e,t,n){var o=Y[e.tagName];o&&(o(e,t),U(e,t,n))}(e,t,n)}(e,t,n)},ae=function(e){e.removeAttribute(l),e.removeAttribute(d),e.removeAttribute(u)},se=function(e){D(e,(function(e){Q(e,z)})),Q(e,z)},ce={IMG:se,IFRAME:function(e){Q(e,q)},VIDEO:function(e){P(e,(function(e){Q(e,q)})),Q(e,B),e.load()}},le=function(e,t){(function(e){var t=ce[e.tagName];t?t(e):function(e){if(W(e)){var t=F(e);e.style.backgroundImage=t.backgroundImage}}(e)})(e),function(e,t){L(e)||A(e)||(I(e,t.class_entered),I(e,t.class_exited),I(e,t.class_applied),I(e,t.class_loading),I(e,t.class_loaded),I(e,t.class_error))}(e,t),k(e),H(e)},de=["IMG","IFRAME","VIDEO"],ue=function(e){return e.use_native&&"loading"in HTMLImageElement.prototype},fe=function(e,t,n){e.forEach((function(e){return function(e){return e.isIntersecting||e.intersectionRatio>0}(e)?function(e,t,n,o){var r=function(e){return N.indexOf(_(e))>=0}(e);E(e,"entered"),O(e,n.class_entered),I(e,n.class_exited),function(e,t,n){t.unobserve_entered&&S(e,n)}(e,n,o),C(n.callback_enter,e,t,o),r||ie(e,n,o)}(e.target,e,t,n):function(e,t,n,o){L(e)||(O(e,n.class_exited),function(e,t,n,o){n.cancel_on_exit&&function(e){return _(e)===p}(e)&&"IMG"===e.tagName&&(te(e),function(e){D(e,(function(e){ae(e)})),ae(e)}(e),se(e),I(e,n.class_loading),R(o,-1),k(e),C(n.callback_cancel,e,t,o))}(e,t,n,o),C(n.callback_exit,e,t,o))}(e.target,e,t,n)}))},ge=function(e){return Array.prototype.slice.call(e)},pe=function(e){return e.container.querySelectorAll(e.elements_selector)},he=function(e){return function(e){return _(e)===m}(e)},ve=function(e,t){return function(e){return ge(e).filter(L)}(e||pe(t))},me=function(e,n){var r=s(e);this._settings=r,this.loadingCount=0,function(e,t){o&&!ue(e)&&(t._observer=new IntersectionObserver((function(n){fe(n,e,t)}),function(e){return{root:e.container===document?null:e.container,rootMargin:e.thresholds||e.threshold+"px"}}(e)))}(r,this),function(e,n){t&&window.addEventListener("online",(function(){!function(e,t){var n;(n=pe(e),ge(n).filter(he)).forEach((function(t){I(t,e.class_error),k(t)})),t.update()}(e,n)}))}(r,this),this.update(n)};return me.prototype={update:function(e){var t,r,i=this._settings,a=ve(e,i);M(this,a.length),!n&&o?ue(i)?function(e,t,n){e.forEach((function(e){-1!==de.indexOf(e.tagName)&&function(e,t,n){e.setAttribute("loading","lazy"),oe(e,t,n),function(e,t){var n=Y[e.tagName];n&&n(e,t)}(e,t),E(e,w)}(e,t,n)})),M(n,0)}(a,i,this):(r=a,function(e){e.disconnect()}(t=this._observer),function(e,t){t.forEach((function(t){e.observe(t)}))}(t,r)):this.loadAll(a)},destroy:function(){this._observer&&this._observer.disconnect(),pe(this._settings).forEach((function(e){H(e)})),delete this._observer,delete this._settings,delete this.loadingCount,delete this.toLoadCount},loadAll:function(e){var t=this,n=this._settings;ve(e,n).forEach((function(e){S(e,t),ie(e,n,t)}))},restoreAll:function(){var e=this._settings;pe(e).forEach((function(t){le(t,e)}))}},me.load=function(e,t){var n=s(t);ie(e,n)},me.resetStatus=function(e){k(e)},t&&function(e,t){if(t)if(t.length)for(var n,o=0;n=t[o];o+=1)c(e,n);else c(e,t)}(me,window.lazyLoadOptions),me}()},4928:function(e){var t;t=function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,n),r.loaded=!0,r.exports}return n.m=e,n.c=t,n.p="",n(0)}([function(e,t){"use strict";e.exports=function(){if("undefined"==typeof document||"undefined"==typeof window)return{ask:function(){return"initial"},element:function(){return null},ignoreKeys:function(){},specificKeys:function(){},registerOnChange:function(){},unRegisterOnChange:function(){}};var e=document.documentElement,t=null,n="initial",o=n,r=Date.now(),i="false",a=["button","input","select","textarea"],s=[],c=[16,17,18,91,93],l=[],d={keydown:"keyboard",keyup:"keyboard",mousedown:"mouse",mousemove:"mouse",MSPointerDown:"pointer",MSPointerMove:"pointer",pointerdown:"pointer",pointermove:"pointer",touchstart:"touch",touchend:"touch"},u=!1,f={x:null,y:null},g={2:"touch",3:"touch",4:"mouse"},p=!1;try{var h=Object.defineProperty({},"passive",{get:function(){p=!0}});window.addEventListener("test",null,h)}catch(e){}var v=function(){var e=!!p&&{passive:!0};document.addEventListener("DOMContentLoaded",m),window.PointerEvent?(window.addEventListener("pointerdown",w),window.addEventListener("pointermove",y)):window.MSPointerEvent?(window.addEventListener("MSPointerDown",w),window.addEventListener("MSPointerMove",y)):(window.addEventListener("mousedown",w),window.addEventListener("mousemove",y),"ontouchstart"in window&&(window.addEventListener("touchstart",w,e),window.addEventListener("touchend",w))),window.addEventListener(A(),y,e),window.addEventListener("keydown",w),window.addEventListener("keyup",w),window.addEventListener("focusin",x),window.addEventListener("focusout",_)},m=function(){if(i=!(e.getAttribute("data-whatpersist")||"false"===document.body.getAttribute("data-whatpersist")))try{window.sessionStorage.getItem("what-input")&&(n=window.sessionStorage.getItem("what-input")),window.sessionStorage.getItem("what-intent")&&(o=window.sessionStorage.getItem("what-intent"))}catch(e){}b("input"),b("intent")},w=function(e){var t=e.which,r=d[e.type];"pointer"===r&&(r=k(e));var i=!l.length&&-1===c.indexOf(t),s=l.length&&-1!==l.indexOf(t),u="keyboard"===r&&t&&(i||s)||"mouse"===r||"touch"===r;if(L(r)&&(u=!1),u&&n!==r&&(E("input",n=r),b("input")),u&&o!==r){var f=document.activeElement;f&&f.nodeName&&(-1===a.indexOf(f.nodeName.toLowerCase())||"button"===f.nodeName.toLowerCase()&&!O(f,"form"))&&(E("intent",o=r),b("intent"))}},b=function(t){e.setAttribute("data-what"+t,"input"===t?n:o),N(t)},y=function(e){var t=d[e.type];"pointer"===t&&(t=k(e)),C(e),(!u&&!L(t)||u&&"wheel"===e.type||"mousewheel"===e.type||"DOMMouseScroll"===e.type)&&o!==t&&(E("intent",o=t),b("intent"))},x=function(n){n.target.nodeName?(t=n.target.nodeName.toLowerCase(),e.setAttribute("data-whatelement",t),n.target.classList&&n.target.classList.length&&e.setAttribute("data-whatclasses",n.target.classList.toString().replace(" ",","))):_()},_=function(){t=null,e.removeAttribute("data-whatelement"),e.removeAttribute("data-whatclasses")},E=function(e,t){if(i)try{window.sessionStorage.setItem("what-"+e,t)}catch(e){}},k=function(e){return"number"==typeof e.pointerType?g[e.pointerType]:"pen"===e.pointerType?"touch":e.pointerType},L=function(e){var t=Date.now(),o="mouse"===e&&"touch"===n&&t-r<200;return r=t,o},A=function(){return"onwheel"in document.createElement("div")?"wheel":void 0!==document.onmousewheel?"mousewheel":"DOMMouseScroll"},N=function(e){for(var t=0,r=s.length;t<r;t++)s[t].type===e&&s[t].fn.call(void 0,"input"===e?n:o)},C=function(e){f.x!==e.screenX||f.y!==e.screenY?(u=!1,f.x=e.screenX,f.y=e.screenY):u=!0},O=function(e,t){var n=window.Element.prototype;if(n.matches||(n.matches=n.msMatchesSelector||n.webkitMatchesSelector),n.closest)return e.closest(t);do{if(e.matches(t))return e;e=e.parentElement||e.parentNode}while(null!==e&&1===e.nodeType);return null};return"addEventListener"in window&&Array.prototype.indexOf&&(d[A()]="mouse",v()),{ask:function(e){return"intent"===e?o:n},element:function(){return t},ignoreKeys:function(e){c=e},specificKeys:function(e){l=e},registerOnChange:function(e,t){s.push({fn:e,type:t||"input"})},unRegisterOnChange:function(e){var t=function(e){for(var t=0,n=s.length;t<n;t++)if(s[t].fn===e)return t}(e);(t||0===t)&&s.splice(t,1)},clearStorage:function(){window.sessionStorage.clear()}}}()}])},e.exports=t()},7468:()=>{var e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(e,"px")),window.addEventListener("resize",(function(){var e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(e,"px"))}))}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o].call(i.exports,i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function t(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(t,n){if(t){if("string"==typeof t)return e(t,n);var o=Object.prototype.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?e(t,n):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var o=n(9498),r=n.n(o),i=n(4786),a=n.n(i);function s(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var o=Array(e),r=0;for(t=0;t<n;t++)for(var i=arguments[t],a=0,s=i.length;a<s;a++,r++)o[r]=i[a];return o}const c=function(e,t){return void 0===t&&(t="js-reframe"),("string"==typeof e?s(document.querySelectorAll(e)):"length"in e?s(e):[e]).forEach((function(e){var n,o;if(!(-1!==e.className.split(" ").indexOf(t)||e.style.width.indexOf("%")>-1)){var r=e.getAttribute("height")||e.offsetHeight,i=e.getAttribute("width")||e.offsetWidth,a=("string"==typeof r?parseInt(r):r)/("string"==typeof i?parseInt(i):i)*100,s=document.createElement("div");s.className=t;var c=s.style;c.position="relative",c.width="100%",c.paddingTop=a+"%";var l=e.style;l.position="absolute",l.width="100%",l.height="100%",l.left="0",l.top="0",null===(n=e.parentNode)||void 0===n||n.insertBefore(s,e),null===(o=e.parentNode)||void 0===o||o.removeChild(e),s.appendChild(e)}}))};function l(e){return void 0===window.airblocks_screenReaderText||void 0===window.airblocks_screenReaderText[e]?(console.error("Missing translation for ".concat(e)),""):window.airblocks_screenReaderText[e]}function d(e){var n=t(e.children);if(0===n.length)return"";var o=n.filter((function(e){return"img"===e.tagName.toLowerCase()}));if(n.length!==o.length)return"";var r=o.filter((function(e){return e.alt&&""!==e.alt})).map((function(e){return e.alt}));return r.length?r.join(", "):""}function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}var f=function(e){var t=e.querySelector("img");t&&"object"===u(t)&&"clientWidth"in t&&e.style.setProperty("--width-child-img","".concat(t.clientWidth,"px"))},g=function(e){"figure"===e.parentElement.tagName&&f(e.parentElement)};n(4928);!function(e){var n,o,r,i,a,s,c,l,d,u,f,g,p=960;document.querySelectorAll(".menu-item").forEach((function(e){e.addEventListener("mouseover",(function(){this.classList.add("hover-intent"),this.parentNode.classList.add("hover-intent"),document.addEventListener("keydown",(function(t){"Escape"===t.key&&(e.classList.remove("hover-intent"),e.parentNode.classList.remove("hover-intent"),e.parentNode.parentNode.classList.remove("hover-intent"))}))})),e.addEventListener("mouseleave",(function(){this.classList.remove("hover-intent"),this.parentNode.classList.remove("hover-intent"),document.addEventListener("keydown",(function(t){"Escape"===t.key&&(e.classList.remove("hover-intent"),e.parentNode.classList.remove("hover-intent"),e.parentNode.parentNode.classList.remove("hover-intent"))}))}))}));var h=e(".nav-container"),v=h.find("#nav-toggle"),m=h.find("#main-navigation-wrapper"),w=h.find("#nav");if(e(".menu-item a, .dropdown button").on("keyup",(function(t){var n=e(this).parent().parent().parent().find(".sub-menu").prev(".dropdown-toggle").attr("aria-expanded"),o=e(this).closest(".menu-item").find(".dropdown-toggle").attr("aria-expanded"),r=e(this).parent().parent().hasClass("sub-menu");if(("true"===n||"true"===o)&&0!==e(".dropdown").find(":focus").length&&"Escape"===t.code){var i=e(this).parent().parent().parent(),a=i.find(".screen-reader-text"),s=i.find(".dropdown-toggle");i.find(".sub-menu").removeClass("toggled-on"),i.find(".dropdown-toggle").removeClass("toggled-on"),i.find(".dropdown").removeClass("toggled-on"),s.attr("aria-expanded","false"),a.text(airblocks_screenReaderText.expand),!0===r&&i.find(".dropdown-toggle:first").trigger("focus")}if(window.innerWidth>p){var c=e(this).parent().prev(),l=c.find(".screen-reader-text"),d=c.find(".dropdown-toggle");c.find(".sub-menu").removeClass("toggled-on"),c.find(".dropdown-toggle").removeClass("toggled-on"),c.find(".dropdown").removeClass("toggled-on"),d.attr("aria-expanded","false"),l.text(airblocks_screenReaderText.expand);var u=e(this).parent().next(),f=u.find(".screen-reader-text"),g=u.find(".dropdown-toggle");u.find(".sub-menu").removeClass("toggled-on"),u.find(".dropdown-toggle").removeClass("toggled-on"),u.find(".dropdown").removeClass("toggled-on"),g.attr("aria-expanded","false"),f.text(airblocks_screenReaderText.expand)}})),m.find(".menu-item-has-children").attr("aria-haspopup","true"),e(".dropdown-toggle").each((function(){e(this).attr("aria-label","".concat(airblocks_screenReaderText.expand_for," ").concat(e(this).prev().text()))})),m.find(".dropdown-toggle").on("click",(function(t){var n=e(this).nextAll(".sub-menu");e(this).toggleClass("toggled-on"),n.toggleClass("toggled-on"),e(this).attr("aria-expanded","false"===e(this).attr("aria-expanded")?"true":"false"),e(this).attr("aria-label",e(this).attr("aria-label")==="".concat(airblocks_screenReaderText.collapse_for," ").concat(e(this).prev().text())?"".concat(airblocks_screenReaderText.expand_for," ").concat(e(this).prev().text()):"".concat(airblocks_screenReaderText.collapse_for," ").concat(e(this).prev().text()))})),e(".sub-menu .menu-item-has-children").parent(".sub-menu").addClass("has-sub-menu"),e(".menu-item a, button.dropdown-toggle").on("keydown",(function(t){if(-1!=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(t.code))switch(t.code){case"ArrowLeft":t.stopPropagation(),e(this).hasClass("dropdown-toggle")?e(this).prev("a").trigger("focus"):e(this).parent().prev().children("button.dropdown-toggle").length?e(this).parent().prev().children("button.dropdown-toggle").trigger("focus"):e(this).parent().prev().children("a").trigger("focus"),e(this).is("ul ul ul.sub-menu.toggled-on li:first-child a")&&e(this).parents("ul.sub-menu.toggled-on li").children("button.dropdown-toggle").trigger("focus");break;case"ArrowRight":t.stopPropagation(),e(this).next("button.dropdown-toggle").length?e(this).next("button.dropdown-toggle").trigger("focus"):e(this).parent().next().find("input").length?e(this).parent().next().find("input").trigger("focus"):e(this).parent().next().children("a").trigger("focus"),e(this).is("ul.sub-menu .dropdown-toggle.toggled-on")&&e(this).parent().find("ul.sub-menu li:first-child a").trigger("focus");break;case"ArrowDown":t.stopPropagation(),e(this).next().length?e(this).next().find("li:first-child a").first().trigger("focus"):e(this).parent().next().find("input").length?e(this).parent().next().find("input").trigger("focus"):e(this).parent().next().children("a").trigger("focus"),e(this).is("ul.sub-menu a")&&e(this).next("button.dropdown-toggle").length&&e(this).parent().next().children("a").trigger("focus"),e(this).is("ul.sub-menu .dropdown-toggle")&&e(this).parent().next().children(".dropdown-toggle").length&&e(this).parent().next().children(".dropdown-toggle").trigger("focus");break;case"ArrowUp":t.stopPropagation(),e(this).parent().prev().length?e(this).parent().prev().children("a").trigger("focus"):e(this).parents("ul").first().prev(".dropdown-toggle.toggled-on").trigger("focus"),e(this).is("ul.sub-menu .dropdown-toggle")&&e(this).parent().prev().children(".dropdown-toggle").length&&e(this).parent().prev().children(".dropdown-toggle").trigger("focus")}})),(r=document.getElementById("nav"))&&void 0!==(i=document.getElementById("nav-toggle"))){for(n=document.getElementsByTagName("html")[0],o=document.getElementsByTagName("body")[0],a=r.getElementsByTagName("ul")[0],s=document.getElementById("main-navigation-wrapper"),window.innerWidth<p&&b(),c=a.getElementsByTagName("a"),a.getElementsByTagName("ul"),l=0,d=c.length;l<d;l++)c[l].addEventListener("focus",x,!0),c[l].addEventListener("blur",x,!0);e(window).on("resize",(function(){window.innerWidth>p&&-1!==o.className.indexOf("js-nav-active")?y():window.innerWidth<p&&void 0===window.mobileNavInstance&&b()}))}function b(){if(v.length)if(window.innerWidth<p&&v.add(w).attr("aria-expanded","false"),v.on("click",(function(){e(this).add(m).toggleClass("toggled-on"),e(this).attr("aria-expanded","false"===e(this).attr("aria-expanded")?"true":"false"),e("#nav-toggle-label").text(e("#nav-toggle-label").text()===airblocks_screenReaderText.expand_toggle?airblocks_screenReaderText.collapse_toggle:airblocks_screenReaderText.expand_toggle),e(this).attr("aria-label",e(this).attr("aria-label")===airblocks_screenReaderText.expand_toggle?airblocks_screenReaderText.collapse_toggle:airblocks_screenReaderText.expand_toggle),e(this).add(w).attr("aria-expanded","false"===e(this).add(w).attr("aria-expanded")?"true":"false")})),void 0!==a){if(window.innerWidth<p&&a.setAttribute("aria-expanded","false"),-1===a.className.indexOf("nav-menu")&&(a.className+=" nav-menu"),window.innerWidth<p){f=null,g=null;for(var t=r.querySelectorAll([".nav-primary a[href]",".nav-primary button"]),c=0;c<t.length;c++)t[c].addEventListener("keydown",_)}i.onclick=function(){-1!==r.className.indexOf("is-active")?y():(n.className+=" disable-scroll",o.className+=" js-nav-active",r.className+=" is-active",i.className+=" is-active",i.setAttribute("aria-expanded","true"),a.setAttribute("aria-expanded","true"),i.addEventListener("keydown",_,!1))},document.addEventListener("keyup",(function(e){"Escape"!=e.code&&"Esc"!=e.code||-1!==r.className.indexOf("is-active")&&y()})),s.onclick=function(e){e.target==s&&-1!==r.className.indexOf("is-active")&&y()}}else i.style.display="none"}function y(){i.removeEventListener("keydown",_,!1),n.className=n.className.replace(" disable-scroll",""),o.className=o.className.replace(" js-nav-active",""),r.className=r.className.replace(" is-active",""),i.className=i.className.replace(" is-active",""),i.setAttribute("aria-expanded","false"),a.setAttribute("aria-expanded","false"),e("#nav-toggle-label").text(airblocks_screenReaderText.expand_toggle),i.focus()}function x(){for(var e=this;-1===e.className.indexOf("nav-menu");)"li"===e.tagName.toLowerCase()&&(-1!==e.className.indexOf("focus")?e.className=e.className.replace(" focus",""):e.className+=" focus"),e=e.parentElement}function _(e){u=t(r.querySelectorAll('a, button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])')).filter((function(e){return!e.hasAttribute("disabled")})).filter((function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)})),f=u[0],(g=u[u.length-1])!==e.target||"Tab"!==e.code||e.shiftKey||i.focus(),f===e.target&&"Tab"===e.code&&e.shiftKey&&i.focus(),i===e.target&&"Tab"===e.code&&e.shiftKey&&g.focus()}}(jQuery);n(7468);document.body.classList.remove("no-js"),document.body.classList.add("js"),c(".wp-has-aspect-ratio iframe"),function(){var e=[window.location.host];void 0!==window.airblocks_externalLinkDomains&&(e=e.concat(window.airblocks_externalLinkDomains));var n=t(document.querySelectorAll("a")).filter((function(t){return function(e,t){if(!e.length)return!1;var n;if(["#","tel:","mailto:","/"].some((function(t){return new RegExp("^".concat(t),"g").test(e)})))return!1;try{n=new URL(e)}catch(t){return console.log("Invalid URL: ".concat(e)),!1}return!t.some((function(e){return n.host===e}))}(t.href,e)}));n.forEach((function(e){var t=e.textContent.trim().length?e.textContent.trim():d(e),n="_blank"===e.target?"".concat(t,": ").concat(l("external_link"),", ").concat(l("target_blank")):"".concat(t,": ").concat(l("external_link"));e.setAttribute("aria-label",n),e.classList.add("is-external-link")}))}(),function(e){e.forEach((function(e){f(e)}))}(document.querySelectorAll("figure"));var p,h,v,m=document.querySelector("#filter-airblocks"),w=document.querySelector(".air-blocks-list").getElementsByTagName("section");m.addEventListener("keyup",(function(e){for(var t=e.target.value,n=new RegExp(t,"i"),o=0;o<w.length;o++){var r=w[o];n.test(r.classList)?r.classList.remove("hidden"):r.classList.add("hidden")}})),document.addEventListener("DOMContentLoaded",(function(){for(var e=0;e<w.length;e++){var t=w[e],n=t.classList.value.split("-")[1].split("block")[0].split(" ")[0],o="<p>".concat(n,"</p>"),r=document.createElement("div");r.classList.add("hero-name-tag"),r.innerHTML=o,t.appendChild(r,t.nextSibling)}document.querySelector(".toggle-outlines").addEventListener("click",(function(e){[].map.call(document.querySelectorAll(".site"),(function(e){e.classList.toggle("has-decorations")}))}))})),new(a())({callback_loaded:function(e){return g}}).update(),p=jQuery,h=p(".back-to-top").offset(),v=p(".block, .site-footer"),p(document).scroll((function(){v.each((function(e){var t=p(this).offset().top-p(window).scrollTop();if(t<h.top&&t+p(this).height()>0)return p(".back-to-top").removeClass("has-light-bg has-dark-bg").addClass(p(this).hasClass("has-light-bg")?"has-light-bg":"has-dark-bg"),!1}))})),p.fn.isInViewport=function(){var e=p(this).offset().top,t=e+p(this).outerHeight(),n=p(window).scrollTop(),o=n+p(window).height();return t>n&&e<o},p(window).on("resize scroll",(function(){p(".block, .site-footer").each((function(){p(this).isInViewport()&&p(".back-to-top").removeClass("has-light-bg has-dark-bg").addClass(p(this).hasClass("has-light-bg")?"has-light-bg":"has-dark-bg")}))})),p(window).scroll((function(){var e=".back-to-top";p(this).scrollTop()>300?p(e).addClass("is-visible"):p(e).removeClass("is-visible"),p(this).scrollTop()>1200?p(e).addClass("fade-out"):p(e).removeClass("fade-out")})),p((function(){})),document.addEventListener("DOMContentLoaded",(function(){for(var e=new(r())({ease:"easeInQuad"},{easeInQuad:function(e,t,n,o){return n*(e/=o)*e+t},easeOutQuad:function(e,t,n,o){return-n*(e/=o)*(e-2)+t}}),t=document.getElementsByClassName("js-trigger"),n=0;n<t.length;n++)e.registerTrigger(t[n])}));t(document.querySelectorAll("a")).forEach((function(e){if(""===e.textContent.trim()&&!e.ariaLabel){var t=d(e);""!==t&&(e.ariaLabel=t)}}))})()})();