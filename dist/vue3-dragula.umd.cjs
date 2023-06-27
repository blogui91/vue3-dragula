(function(C,P){typeof exports=="object"&&typeof module<"u"?module.exports=P():typeof define=="function"&&define.amd?define(P):(C=typeof globalThis<"u"?globalThis:C||self,C["vue3-dragula"]=P())})(this,function(){"use strict";var C=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function P(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ne=function(t,r){return Array.prototype.slice.call(t,r)},_e=typeof setImmediate=="function",V;_e?V=function(e){setImmediate(e)}:V=function(e){setTimeout(e,0)};var Ie=V,Xe=Ie,Ye=function(t,r,n){t&&Xe(function(){t.apply(n||null,r||[])})},te=Ne,De=Ye,Fe=function(t,r){var n=r||{},a={};return t===void 0&&(t={}),t.on=function(o,s){return a[o]?a[o].push(s):a[o]=[s],t},t.once=function(o,s){return s._once=!0,t.on(o,s),t},t.off=function(o,s){var c=arguments.length;if(c===1)delete a[o];else if(c===0)a={};else{var d=a[o];if(!d)return t;d.splice(d.indexOf(s),1)}return t},t.emit=function(){var o=te(arguments);return t.emitterSnapshot(o.shift()).apply(this,o)},t.emitterSnapshot=function(o){var s=(a[o]||[]).slice(0);return function(){var c=te(arguments),d=this||t;if(o==="error"&&n.throws!==!1&&!s.length)throw c.length===1?c[0]:c;return s.forEach(function(b){n.async?De(b,c,d):b.apply(d,c),b._once&&t.off(o,b)}),t}},t},ne=C.CustomEvent;function Pe(){try{var e=new ne("cat",{detail:{foo:"bar"}});return e.type==="cat"&&e.detail.foo==="bar"}catch{}return!1}var $e=Pe()?ne:typeof document<"u"&&typeof document.createEvent=="function"?function(t,r){var n=document.createEvent("CustomEvent");return r?n.initCustomEvent(t,r.bubbles,r.cancelable,r.detail):n.initCustomEvent(t,!1,!1,void 0),n}:function(t,r){var n=document.createEventObject();return n.type=t,r?(n.bubbles=!!r.bubbles,n.cancelable=!!r.cancelable,n.detail=r.detail):(n.bubbles=!1,n.cancelable=!1,n.detail=void 0),n},re=[],k="",Re=/^on/;for(k in C)Re.test(k)&&re.push(k.slice(2));var Ae=re,je=$e,He=Ae,H=C.document,ie=Ve,ae=ze,$=[];C.addEventListener||(ie=ke,ae=Ge);var Le={add:ie,remove:ae,fabricate:Je};function Ve(e,t,r,n){return e.addEventListener(t,r,n)}function ke(e,t,r){return e.attachEvent("on"+t,Ue(e,t,r))}function ze(e,t,r,n){return e.removeEventListener(t,r,n)}function Ge(e,t,r){var n=oe(e,t,r);if(n)return e.detachEvent("on"+t,n)}function Je(e,t,r){var n=He.indexOf(t)===-1?o():a();e.dispatchEvent?e.dispatchEvent(n):e.fireEvent("on"+t,n);function a(){var s;return H.createEvent?(s=H.createEvent("Event"),s.initEvent(t,!0,!0)):H.createEventObject&&(s=H.createEventObject()),s}function o(){return new je(t,{detail:r})}}function Ke(e,t,r){return function(a){var o=a||C.event;o.target=o.target||o.srcElement,o.preventDefault=o.preventDefault||function(){o.returnValue=!1},o.stopPropagation=o.stopPropagation||function(){o.cancelBubble=!0},o.which=o.which||o.keyCode,r.call(e,o)}}function Ue(e,t,r){var n=oe(e,t,r)||Ke(e,t,r);return $.push({wrapper:n,element:e,type:t,fn:r}),n}function oe(e,t,r){var n=qe(e,t,r);if(n){var a=$[n].wrapper;return $.splice(n,1),a}}function qe(e,t,r){var n,a;for(n=0;n<$.length;n++)if(a=$[n],a.element===e&&a.type===t&&a.fn===r)return n}var ue={},We="(?:^|\\s)",Qe="(?:\\s|$)";function le(e){var t=ue[e];return t?t.lastIndex=0:ue[e]=t=new RegExp(We+e+Qe,"g"),t}function Ze(e,t){var r=e.className;r.length?le(t).test(r)||(e.className+=" "+t):e.className=t}function et(e,t){e.className=e.className.replace(le(t)," ").trim()}var tt={add:Ze,rm:et},nt=Fe,Y=Le,T=tt,D=document,B=D.documentElement;function rt(e,t){var r=arguments.length;r===1&&Array.isArray(e)===!1&&(t=e,e=[]);var n,a,o,s,c,d,p,b,O,g,J,I=null,j,l=t||{};l.moves===void 0&&(l.moves=de),l.accepts===void 0&&(l.accepts=de),l.invalid===void 0&&(l.invalid=ht),l.containers===void 0&&(l.containers=e||[]),l.isContainer===void 0&&(l.isContainer=at),l.copy===void 0&&(l.copy=!1),l.copySortSource===void 0&&(l.copySortSource=!1),l.revertOnSpill===void 0&&(l.revertOnSpill=!1),l.removeOnSpill===void 0&&(l.removeOnSpill=!1),l.direction===void 0&&(l.direction="vertical"),l.ignoreInputTextSelection===void 0&&(l.ignoreInputTextSelection=!0),l.mirrorContainer===void 0&&(l.mirrorContainer=D.body);var m=nt({containers:l.containers,start:pt,end:we,cancel:Oe,remove:Me,destroy:dt,canMove:gt,dragging:!1});return l.removeOnSpill===!0&&m.on("over",bt).on("out",Et),he(),m;function K(i){return m.containers.indexOf(i)!==-1||l.isContainer(i)}function he(i){var u=i?"remove":"add";R(B,u,"mousedown",vt),R(B,u,"mouseup",W)}function U(i){var u=i?"remove":"add";R(B,u,"mousemove",mt)}function be(i){var u=i?"remove":"add";Y[u](B,"selectstart",Ee),Y[u](B,"click",Ee)}function dt(){he(!0),W({})}function Ee(i){j&&i.preventDefault()}function vt(i){d=i.clientX,p=i.clientY;var u=se(i)!==1||i.metaKey||i.ctrlKey;if(!u){var f=i.target,v=q(f);v&&(j=v,U(),i.type==="mousedown"&&(ge(f)?f.focus():i.preventDefault()))}}function mt(i){if(j){if(se(i)===0){W({});return}if(!(i.clientX!==void 0&&Math.abs(i.clientX-d)<=(l.slideFactorX||0)&&i.clientY!==void 0&&Math.abs(i.clientY-p)<=(l.slideFactorY||0))){if(l.ignoreInputTextSelection){var u=x("clientX",i)||0,f=x("clientY",i)||0,v=D.elementFromPoint(u,f);if(ge(v))return}var w=j;U(!0),be(),we(),ye(w);var h=it(o);s=x("pageX",i)-h.left,c=x("pageY",i)-h.top,T.add(g||o,"gu-transit"),yt(),ee(i)}}}function q(i){if(!(m.dragging&&n)&&!K(i)){for(var u=i;y(i)&&K(y(i))===!1;)if(l.invalid(i,u)||(i=y(i),!i))return;var f=y(i);if(f&&!l.invalid(i,u)){var v=l.moves(i,f,u,A(i));if(v)return{item:i,source:f}}}}function gt(i){return!!q(i)}function pt(i){var u=q(i);u&&ye(u)}function ye(i){Ct(i.item,i.source)&&(g=i.item.cloneNode(!0),m.emit("cloned",g,i.item,"copy")),a=i.source,o=i.item,b=O=A(i.item),m.dragging=!0,m.emit("drag",o,a)}function ht(){return!1}function we(){if(m.dragging){var i=g||o;Se(i,y(i))}}function Ce(){j=!1,U(!0),be(!0)}function W(i){if(Ce(),!!m.dragging){var u=g||o,f=x("clientX",i)||0,v=x("clientY",i)||0,w=ce(n,f,v),h=Be(w,f,v);h&&(g&&l.copySortSource||!g||h!==a)?Se(u,h):l.removeOnSpill?Me():Oe()}}function Se(i,u){var f=y(i);g&&l.copySortSource&&u===a&&f.removeChild(o),Z(u)?m.emit("cancel",i,a,a):m.emit("drop",i,u,a,O),Q()}function Me(){if(m.dragging){var i=g||o,u=y(i);u&&u.removeChild(i),m.emit(g?"cancel":"remove",i,u,a),Q()}}function Oe(i){if(m.dragging){var u=arguments.length>0?i:l.revertOnSpill,f=g||o,v=y(f),w=Z(v);w===!1&&u&&(g?v&&v.removeChild(g):a.insertBefore(f,b)),w||u?m.emit("cancel",f,a,a):m.emit("drop",f,v,a,O),Q()}}function Q(){var i=g||o;Ce(),wt(),i&&T.rm(i,"gu-transit"),J&&clearTimeout(J),m.dragging=!1,I&&m.emit("out",i,I,a),m.emit("dragend",i),a=o=g=b=O=J=I=null}function Z(i,u){var f;return u!==void 0?f=u:n?f=O:f=A(g||o),i===a&&f===b}function Be(i,u,f){for(var v=i;v&&!w();)v=y(v);return v;function w(){var h=K(v);if(h===!1)return!1;var F=Te(v,i),E=xe(v,F,u,f),N=Z(v,E);return N?!0:l.accepts(o,v,a,E)}}function ee(i){if(!n)return;i.preventDefault();var u=x("clientX",i)||0,f=x("clientY",i)||0,v=u-s,w=f-c;n.style.left=v+"px",n.style.top=w+"px";var h=g||o,F=ce(n,u,f),E=Be(F,u,f),N=E!==null&&E!==I;(N||E===null)&&(Mt(),I=E,St());var S=y(h);if(E===a&&g&&!l.copySortSource){S&&S.removeChild(h);return}var M,X=Te(E,F);if(X!==null)M=xe(E,X,u,f);else if(l.revertOnSpill===!0&&!g)M=b,E=a;else{g&&S&&S.removeChild(h);return}(M===null&&N||M!==h&&M!==A(h))&&(O=M,E.insertBefore(h,M),m.emit("shadow",h,E,a));function _(Ot){m.emit(Ot,h,I,a)}function St(){N&&_("over")}function Mt(){I&&_("out")}}function bt(i){T.rm(i,"gu-hide")}function Et(i){m.dragging&&T.add(i,"gu-hide")}function yt(){if(!n){var i=o.getBoundingClientRect();n=o.cloneNode(!0),n.style.width=ve(i)+"px",n.style.height=me(i)+"px",T.rm(n,"gu-transit"),T.add(n,"gu-mirror"),l.mirrorContainer.appendChild(n),R(B,"add","mousemove",ee),T.add(l.mirrorContainer,"gu-unselectable"),m.emit("cloned",n,o,"mirror")}}function wt(){n&&(T.rm(l.mirrorContainer,"gu-unselectable"),R(B,"remove","mousemove",ee),y(n).removeChild(n),n=null)}function Te(i,u){for(var f=u;f!==i&&y(f)!==i;)f=y(f);return f===B?null:f}function xe(i,u,f,v){var w=l.direction==="horizontal",h=u!==i?E():F();return h;function F(){var S=i.children.length,M,X,_;for(M=0;M<S;M++)if(X=i.children[M],_=X.getBoundingClientRect(),w&&_.left+_.width/2>f||!w&&_.top+_.height/2>v)return X;return null}function E(){var S=u.getBoundingClientRect();return N(w?f>S.left+ve(S)/2:v>S.top+me(S)/2)}function N(S){return S?A(u):u}}function Ct(i,u){return typeof l.copy=="boolean"?l.copy:l.copy(i,u)}}function R(e,t,r,n){var a={mouseup:"touchend",mousedown:"touchstart",mousemove:"touchmove"},o={mouseup:"pointerup",mousedown:"pointerdown",mousemove:"pointermove"},s={mouseup:"MSPointerUp",mousedown:"MSPointerDown",mousemove:"MSPointerMove"};C.navigator.pointerEnabled?Y[t](e,o[r],n):C.navigator.msPointerEnabled?Y[t](e,s[r],n):(Y[t](e,a[r],n),Y[t](e,r,n))}function se(e){if(e.touches!==void 0)return e.touches.length;if(e.which!==void 0&&e.which!==0)return e.which;if(e.buttons!==void 0)return e.buttons;var t=e.button;if(t!==void 0)return t&1?1:t&2?3:t&4?2:0}function it(e){var t=e.getBoundingClientRect();return{left:t.left+fe("scrollLeft","pageXOffset"),top:t.top+fe("scrollTop","pageYOffset")}}function fe(e,t){return typeof C[t]<"u"?C[t]:B.clientHeight?B[e]:D.body[e]}function ce(e,t,r){e=e||{};var n=e.className||"",a;return e.className+=" gu-hide",a=D.elementFromPoint(t,r),e.className=n,a}function at(){return!1}function de(){return!0}function ve(e){return e.width||e.right-e.left}function me(e){return e.height||e.bottom-e.top}function y(e){return e.parentNode===D?null:e.parentNode}function ge(e){return e.tagName==="INPUT"||e.tagName==="TEXTAREA"||e.tagName==="SELECT"||pe(e)}function pe(e){return!e||e.contentEditable==="false"?!1:e.contentEditable==="true"?!0:pe(y(e))}function A(e){return e.nextElementSibling||t();function t(){var r=e;do r=r.nextSibling;while(r&&r.nodeType!==1);return r}}function ot(e){return e.targetTouches&&e.targetTouches.length?e.targetTouches[0]:e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:e}function x(e,t){var r=ot(t),n={pageX:"clientX",pageY:"clientY"};return e in n&&!(e in r)&&n[e]in r&&(e=n[e]),r[e]}var ut=rt;const L=P(ut);function lt(e){return{all:e=e||new Map,on:function(t,r){var n=e.get(t);n?n.push(r):e.set(t,[r])},off:function(t,r){var n=e.get(t);n&&(r?n.splice(n.indexOf(r)>>>0,1):e.set(t,[]))},emit:function(t,r){var n=e.get(t);n&&n.slice().map(function(a){a(r)}),(n=e.get("*"))&&n.slice().map(function(a){a(t,r)})}}}if(!L)throw new Error("[vue-dragula] cannot locate dragula.");const z=window.requestAnimationFrame,st=z?function(e){z(()=>{z(e)})}:function(e){window.setTimeout(e,50)};class ft{constructor(t){this.bags=[],this.eventBus=new lt,this.events=["cancel","cloned","drag","dragend","drop","out","over","remove","shadow","dropModel","removeModel"]}add(t,r){let n=this.find(t);if(n)throw new Error('Bag named: "'+t+'" already exists.');return n={name:t,drake:r},this.bags.push(n),r.models&&this.handleModels(t,r),n.initEvents||this.setupEvents(n),n}find(t){let r=this.bags;for(var n=0;n<r.length;n++)if(r[n].name===t)return r[n]}handleModels(t,r){if(r.registered)return;let n,a,o,s;r.on("remove",(c,d,p)=>{r.models&&(s=this.findModelForContainer(p,r),s.splice(a,1),r.cancel(!0),this.eventBus.emit("removeModel",[t,c,p,a]))}),r.on("drag",(c,d)=>{n=c,a=this.domIndexOf(c,d)}),r.on("drop",(c,d,p)=>{if(!(!r.models||!d)){if(o=this.domIndexOf(c,d),s=this.findModelForContainer(p,r),d===p)s.splice(o,0,s.splice(a,1)[0]);else{let b=n===c,O=this.findModelForContainer(d,r),g=b?s[a]:JSON.parse(JSON.stringify(s[a]));b&&st(()=>{s.splice(a,1)}),O.splice(o,0,g),r.cancel(!0)}this.eventBus.emit("dropModel",[t,c,d,p,o])}}),r.registered=!0}destroy(t){let r=this.find(t);if(!r)return;let n=this.bags.indexOf(r);this.bags.splice(n,1),r.drake.destroy()}setOptions(t,r){let n=this.add(t,L(r));this.handleModels(t,n.drake)}setupEvents(t){t.initEvents=!0;let r=this,n=a=>{function o(){let s=Array.prototype.slice.call(arguments);r.eventBus.emit(a,[t.name].concat(s))}t.drake.on(a,o)};this.events.forEach(n)}domIndexOf(t,r){return Array.prototype.indexOf.call(r.children,t)}findModelForContainer(t,r){return(this.findModelContainerByContainer(t,r)||{}).model}findModelContainerByContainer(t,r){if(r.models)return r.models.find(n=>n.container===t)}}if(!L)throw new Error("[vue-dragula] cannot locate dragula.");function ct(e){const t=new ft(e);let r="globalBag",n;e.vueDragula={options:t.setOptions.bind(t),find:t.find.bind(t),eventBus:t.eventBus},e.directive("dragula",{params:["bag"],bind(a,o,s){const c=s?s.data.attrs.bag:this.params.bag;s||(a=this.el),c!==void 0&&c.length!==0&&(r=c);const d=t.find(r);if(d){n=d.drake,n.containers.push(a);return}n=L({containers:[a]}),t.add(r,n),t.handleModels(r,n)},update(a,o,s,c){const d=s?o.value:a;if(!d)return;const p=s?s.data.attrs.bag:this.params.bag;p!==void 0&&p.length!==0&&(r=p),n=t.find(r).drake,n.models||(n.models=[]),s||(a=this.el);let O=t.findModelContainerByContainer(a,n);O?O.model=d:n.models.push({model:d,container:a})},unbind(a,o,s){let c="globalBag";const d=s?s.data.attrs.bag:this.params.bag;s||(a=this.el),d!==void 0&&d.length!==0&&(c=d);var p=t.find(c).drake;if(p){var b=p.containers.indexOf(a);b>-1&&p.containers.splice(b,1),p.containers.length===0&&t.destroy(c)}}})}function G(e,t={}){G.installed&&console.warn("[vue-dragula] already installed."),ct(e)}return G.version="2.0.0",G});
