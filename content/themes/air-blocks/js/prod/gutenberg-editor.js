(()=>{var t={4786:function(t){t.exports=function(){"use strict";function t(){return t=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t},t.apply(this,arguments)}var n="undefined"!=typeof window,e=n&&!("onscroll"in window)||"undefined"!=typeof navigator&&/(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),o=n&&"IntersectionObserver"in window,i=n&&"classList"in document.createElement("p"),r=n&&window.devicePixelRatio>1,a={elements_selector:".lazy",container:e||n?document:null,threshold:300,thresholds:null,data_src:"src",data_srcset:"srcset",data_sizes:"sizes",data_bg:"bg",data_bg_hidpi:"bg-hidpi",data_bg_multi:"bg-multi",data_bg_multi_hidpi:"bg-multi-hidpi",data_poster:"poster",class_applied:"applied",class_loading:"loading",class_loaded:"loaded",class_error:"error",class_entered:"entered",class_exited:"exited",unobserve_completed:!0,unobserve_entered:!1,cancel_on_exit:!0,callback_enter:null,callback_exit:null,callback_applied:null,callback_loading:null,callback_loaded:null,callback_error:null,callback_finish:null,callback_cancel:null,use_native:!1},c=function(n){return t({},a,n)},l=function(t,n){var e,o="LazyLoad::Initialized",i=new t(n);try{e=new CustomEvent(o,{detail:{instance:i}})}catch(t){(e=document.createEvent("CustomEvent")).initCustomEvent(o,!1,!1,{instance:i})}window.dispatchEvent(e)},u="src",s="srcset",f="sizes",d="poster",_="llOriginalAttrs",v="loading",p="loaded",g="applied",b="error",m="native",h="data-",E="ll-status",y=function(t,n){return t.getAttribute(h+n)},w=function(t){return y(t,E)},I=function(t,n){return function(t,n,e){var o="data-ll-status";null!==e?t.setAttribute(o,e):t.removeAttribute(o)}(t,0,n)},k=function(t){return I(t,null)},A=function(t){return null===w(t)},x=function(t){return w(t)===m},L=[v,p,g,b],O=function(t,n,e,o){t&&(void 0===o?void 0===e?t(n):t(n,e):t(n,e,o))},N=function(t,n){i?t.classList.add(n):t.className+=(t.className?" ":"")+n},C=function(t,n){i?t.classList.remove(n):t.className=t.className.replace(new RegExp("(^|\\s+)"+n+"(\\s+|$)")," ").replace(/^\s+/,"").replace(/\s+$/,"")},M=function(t){return t.llTempImage},S=function(t,n){if(n){var e=n._observer;e&&e.unobserve(t)}},z=function(t,n){t&&(t.loadingCount+=n)},R=function(t,n){t&&(t.toLoadCount=n)},G=function(t){for(var n,e=[],o=0;n=t.children[o];o+=1)"SOURCE"===n.tagName&&e.push(n);return e},P=function(t,n){var e=t.parentNode;e&&"PICTURE"===e.tagName&&G(e).forEach(n)},j=function(t,n){G(t).forEach(n)},D=[u],T=[u,d],V=[u,s,f],F=function(t){return!!t[_]},q=function(t){return t[_]},U=function(t){return delete t[_]},W=function(t,n){if(!F(t)){var e={};n.forEach((function(n){e[n]=t.getAttribute(n)})),t[_]=e}},$=function(t,n){if(F(t)){var e=q(t);n.forEach((function(n){!function(t,n,e){e?t.setAttribute(n,e):t.removeAttribute(n)}(t,n,e[n])}))}},B=function(t,n,e){N(t,n.class_loading),I(t,v),e&&(z(e,1),O(n.callback_loading,t,e))},H=function(t,n,e){e&&t.setAttribute(n,e)},J=function(t,n){H(t,f,y(t,n.data_sizes)),H(t,s,y(t,n.data_srcset)),H(t,u,y(t,n.data_src))},K={IMG:function(t,n){P(t,(function(t){W(t,V),J(t,n)})),W(t,V),J(t,n)},IFRAME:function(t,n){W(t,D),H(t,u,y(t,n.data_src))},VIDEO:function(t,n){j(t,(function(t){W(t,D),H(t,u,y(t,n.data_src))})),W(t,T),H(t,d,y(t,n.data_poster)),H(t,u,y(t,n.data_src)),t.load()}},Q=["IMG","IFRAME","VIDEO"],X=function(t,n){!n||function(t){return t.loadingCount>0}(n)||function(t){return t.toLoadCount>0}(n)||O(t.callback_finish,n)},Y=function(t,n,e){t.addEventListener(n,e),t.llEvLisnrs[n]=e},Z=function(t,n,e){t.removeEventListener(n,e)},tt=function(t){return!!t.llEvLisnrs},nt=function(t){if(tt(t)){var n=t.llEvLisnrs;for(var e in n){var o=n[e];Z(t,e,o)}delete t.llEvLisnrs}},et=function(t,n,e){!function(t){delete t.llTempImage}(t),z(e,-1),function(t){t&&(t.toLoadCount-=1)}(e),C(t,n.class_loading),n.unobserve_completed&&S(t,e)},ot=function(t,n,e){var o=M(t)||t;tt(o)||function(t,n,e){tt(t)||(t.llEvLisnrs={});var o="VIDEO"===t.tagName?"loadeddata":"load";Y(t,o,n),Y(t,"error",e)}(o,(function(i){!function(t,n,e,o){var i=x(n);et(n,e,o),N(n,e.class_loaded),I(n,p),O(e.callback_loaded,n,o),i||X(e,o)}(0,t,n,e),nt(o)}),(function(i){!function(t,n,e,o){var i=x(n);et(n,e,o),N(n,e.class_error),I(n,b),O(e.callback_error,n,o),i||X(e,o)}(0,t,n,e),nt(o)}))},it=function(t,n,e){!function(t){t.llTempImage=document.createElement("IMG")}(t),ot(t,n,e),function(t){F(t)||(t[_]={backgroundImage:t.style.backgroundImage})}(t),function(t,n,e){var o=y(t,n.data_bg),i=y(t,n.data_bg_hidpi),a=r&&i?i:o;a&&(t.style.backgroundImage='url("'.concat(a,'")'),M(t).setAttribute(u,a),B(t,n,e))}(t,n,e),function(t,n,e){var o=y(t,n.data_bg_multi),i=y(t,n.data_bg_multi_hidpi),a=r&&i?i:o;a&&(t.style.backgroundImage=a,function(t,n,e){N(t,n.class_applied),I(t,g),e&&(n.unobserve_completed&&S(t,n),O(n.callback_applied,t,e))}(t,n,e))}(t,n,e)},rt=function(t,n,e){!function(t){return Q.indexOf(t.tagName)>-1}(t)?it(t,n,e):function(t,n,e){ot(t,n,e),function(t,n,e){var o=K[t.tagName];o&&(o(t,n),B(t,n,e))}(t,n,e)}(t,n,e)},at=function(t){t.removeAttribute(u),t.removeAttribute(s),t.removeAttribute(f)},ct=function(t){P(t,(function(t){$(t,V)})),$(t,V)},lt={IMG:ct,IFRAME:function(t){$(t,D)},VIDEO:function(t){j(t,(function(t){$(t,D)})),$(t,T),t.load()}},ut=function(t,n){(function(t){var n=lt[t.tagName];n?n(t):function(t){if(F(t)){var n=q(t);t.style.backgroundImage=n.backgroundImage}}(t)})(t),function(t,n){A(t)||x(t)||(C(t,n.class_entered),C(t,n.class_exited),C(t,n.class_applied),C(t,n.class_loading),C(t,n.class_loaded),C(t,n.class_error))}(t,n),k(t),U(t)},st=["IMG","IFRAME","VIDEO"],ft=function(t){return t.use_native&&"loading"in HTMLImageElement.prototype},dt=function(t,n,e){t.forEach((function(t){return function(t){return t.isIntersecting||t.intersectionRatio>0}(t)?function(t,n,e,o){var i=function(t){return L.indexOf(w(t))>=0}(t);I(t,"entered"),N(t,e.class_entered),C(t,e.class_exited),function(t,n,e){n.unobserve_entered&&S(t,e)}(t,e,o),O(e.callback_enter,t,n,o),i||rt(t,e,o)}(t.target,t,n,e):function(t,n,e,o){A(t)||(N(t,e.class_exited),function(t,n,e,o){e.cancel_on_exit&&function(t){return w(t)===v}(t)&&"IMG"===t.tagName&&(nt(t),function(t){P(t,(function(t){at(t)})),at(t)}(t),ct(t),C(t,e.class_loading),z(o,-1),k(t),O(e.callback_cancel,t,n,o))}(t,n,e,o),O(e.callback_exit,t,n,o))}(t.target,t,n,e)}))},_t=function(t){return Array.prototype.slice.call(t)},vt=function(t){return t.container.querySelectorAll(t.elements_selector)},pt=function(t){return function(t){return w(t)===b}(t)},gt=function(t,n){return function(t){return _t(t).filter(A)}(t||vt(n))},bt=function(t,e){var i=c(t);this._settings=i,this.loadingCount=0,function(t,n){o&&!ft(t)&&(n._observer=new IntersectionObserver((function(e){dt(e,t,n)}),function(t){return{root:t.container===document?null:t.container,rootMargin:t.thresholds||t.threshold+"px"}}(t)))}(i,this),function(t,e){n&&window.addEventListener("online",(function(){!function(t,n){var e;(e=vt(t),_t(e).filter(pt)).forEach((function(n){C(n,t.class_error),k(n)})),n.update()}(t,e)}))}(i,this),this.update(e)};return bt.prototype={update:function(t){var n,i,r=this._settings,a=gt(t,r);R(this,a.length),!e&&o?ft(r)?function(t,n,e){t.forEach((function(t){-1!==st.indexOf(t.tagName)&&function(t,n,e){t.setAttribute("loading","lazy"),ot(t,n,e),function(t,n){var e=K[t.tagName];e&&e(t,n)}(t,n),I(t,m)}(t,n,e)})),R(e,0)}(a,r,this):(i=a,function(t){t.disconnect()}(n=this._observer),function(t,n){n.forEach((function(n){t.observe(n)}))}(n,i)):this.loadAll(a)},destroy:function(){this._observer&&this._observer.disconnect(),vt(this._settings).forEach((function(t){U(t)})),delete this._observer,delete this._settings,delete this.loadingCount,delete this.toLoadCount},loadAll:function(t){var n=this,e=this._settings;gt(t,e).forEach((function(t){S(t,n),rt(t,e,n)}))},restoreAll:function(){var t=this._settings;vt(t).forEach((function(n){ut(n,t)}))}},bt.load=function(t,n){var e=c(n);rt(t,e)},bt.resetStatus=function(t){k(t)},n&&function(t,n){if(n)if(n.length)for(var e,o=0;e=n[o];o+=1)l(t,e);else l(t,n)}(bt,window.lazyLoadOptions),bt}()}},n={};function e(o){var i=n[o];if(void 0!==i)return i.exports;var r=n[o]={exports:{}};return t[o].call(r.exports,r,r.exports,e),r.exports}e.n=t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},e.d=(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},e.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n),(()=>{"use strict";var t=e(4786),n=e.n(t);function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}var i=function(t){var n=t.querySelector("img");n&&"object"===o(n)&&"clientWidth"in n&&t.style.setProperty("--width-child-img","".concat(n.clientWidth,"px"))};wp.blocks.registerBlockStyle("core/paragraph",{name:"boxed",label:"Laatikko"});var r=new(n())({callback_loaded:function(t){"figure"===t.parentElement.tagName&&i(t.parentElement)}});window.addEventListener("load",(function(){r.update(),function(t){t.forEach((function(t){i(t)}))}(document.querySelectorAll("figure")),window.acf&&window.acf.addAction("render_block_preview",(function(t){r.update()}))}))})()})();