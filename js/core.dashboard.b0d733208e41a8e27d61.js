(window.webpackJsonp=window.webpackJsonp||[]).push([["dashboard"],{755:function(e,t,r){var n,o,i,a,c,u,s;window,e.exports=(n=r(0),o=r(4),i=r(6),a=r(2),c=r(20),u=r(5),s=r(15),function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=29)}([function(e,t){e.exports=n},function(e,t){e.exports=o},function(e,t){e.exports=i},function(e,t){e.exports=a},function(e,t,r){"use strict";(function(e){r.d(t,"d",(function(){return o})),r.d(t,"c",(function(){return i})),r.d(t,"b",(function(){return a})),r.d(t,"a",(function(){return u}));var n=r(0);function o(){var e=function(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,o,i=r.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(n=i.next()).done;)a.push(n.value)}catch(e){o={error:e}}finally{try{n&&!n.done&&(r=i.return)&&r.call(i)}finally{if(o)throw o.error}}return a}(Object(n.useState)(0),2)[1];return Object(n.useCallback)((function(){e((function(e){return e+1}))}),[])}function i(e){if(!e||"object"!=typeof e)return!1;var t=Object.getPrototypeOf(e);return!t||t===Object.prototype}function a(e){return"function"==typeof Symbol?Symbol.for(e):"__$mobx-react "+e+"__"}var c={};function u(){return"undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:c}}).call(this,r(14))},function(e,t,r){"use strict";var n,o=function(){var e={};return function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}e[t]=r}return e[t]}}(),i=[];function a(e){for(var t=-1,r=0;r<i.length;r++)if(i[r].identifier===e){t=r;break}return t}function c(e,t){for(var r={},n=[],o=0;o<e.length;o++){var c=e[o],u=t.base?c[0]+t.base:c[0],s=r[u]||0,l="".concat(u," ").concat(s);r[u]=s+1;var f=a(l),d={css:c[1],media:c[2],sourceMap:c[3]};-1!==f?(i[f].references++,i[f].updater(d)):i.push({identifier:l,updater:g(d,t),references:1}),n.push(l)}return n}function u(e){var t=document.createElement("style"),n=e.attributes||{};if(void 0===n.nonce){var i=r.nc;i&&(n.nonce=i)}if(Object.keys(n).forEach((function(e){t.setAttribute(e,n[e])})),"function"==typeof e.insert)e.insert(t);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var s,l=(s=[],function(e,t){return s[e]=t,s.filter(Boolean).join("\n")});function f(e,t,r,n){var o=r?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(e.styleSheet)e.styleSheet.cssText=l(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function d(e,t,r){var n=r.css,o=r.media,i=r.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var p=null,b=0;function g(e,t){var r,n,o;if(t.singleton){var i=b++;r=p||(p=u(t)),n=f.bind(null,r,i,!1),o=f.bind(null,r,i,!0)}else r=u(t),n=d.bind(null,r,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n));var r=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var n=0;n<r.length;n++){var o=a(r[n]);i[o].references--}for(var u=c(e,t),s=0;s<r.length;s++){var l=a(r[s]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}r=u}}}},function(e,t,r){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r=function(e,t){var r,n,o,i=e[1]||"",a=e[3];if(!a)return i;if(t&&"function"==typeof btoa){var c=(r=a,n=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(n),"/*# ".concat(o," */")),u=a.sources.map((function(e){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(e," */")}));return[i].concat(u).concat([c]).join("\n")}return[i].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(r,"}"):r})).join("")},t.i=function(e,r,n){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(n)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<e.length;c++){var u=[].concat(e[c]);n&&o[u[0]]||(r&&(u[2]?u[2]="".concat(r," and ").concat(u[2]):u[2]=r),t.push(u))}},t}},function(e,t){e.exports=c},function(e,t){e.exports=u},function(e,t){e.exports=s},function(e,t,r){var n=r(5),o=r(11);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]),n(o,{insert:"head",singleton:!1}),e.exports=o.locals||{}},function(e,t,r){(t=r(6)(!1)).push([e.i,"html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,input,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}html{height:100%;font-size:10px}body{line-height:1;height:100%}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:'';content:none}table{border-collapse:collapse;border-spacing:0}strong{font-weight:bold}\n",""]),e.exports=t},function(e,t,r){var n=r(5),o=r(13);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]),n(o,{insert:"head",singleton:!1}),e.exports=o.locals||{}},function(e,t,r){(t=r(6)(!1)).push([e.i,":host,:root{--text-size-xxxs: 1rem;--text-size-xxs: 1.2rem;--text-size-xs: 1.4rem;--text-size-s: 1.6rem;--text-size-xsm: 1.8rem;--text-size-sm: 2rem;--text-size-m: 2.4rem;--text-size-l: 3.2rem;--text-size-xl: 4.8rem;--text-size-xxl: 6.4rem;--text-lh-xs: 1.25;--text-lh-s: 1.4;--text-lh-m: 1.5;--text-lh-l: 1.75;--text-lh-xl: 2;--text-weight-lighter: lighter;--text-weight-normal: normal;--text-weight-bold: bold;--text-weight-bolder: bolder;--text-align-left: start;--text-align-right: right;--text-align-center: center;--brand-dark-grey: #0e0e0e;--brand-red-coral: #ff444f;--brand-orange: #ff6444;--brand-secondary: #85acb0;--wallet-airtm: linear-gradient(90deg, #1a8fff 0%, #0083ff 100%);--wallet-bitcoin: linear-gradient(90deg, #f89e32 0%, #f7931b 103.12%);--wallet-credit: linear-gradient(274.73deg, #464750 3.82%, #0e0f11 88.49%);--wallet-dp2p: linear-gradient(90deg, #ff444f 0%, #211d1e 95.22%);--wallet-jeton: linear-gradient(90deg, #ff7635 0%, #ff671f 100%);--wallet-mastercard: linear-gradient(90deg, #eb001b 0%, #f79e1b 100%);--wallet-neteller: linear-gradient(90deg, #98cc53 0%, #8dc640 100%);--wallet-skrill: linear-gradient(274.73deg, #5a205d 3.82%, #7f3883 88.49%);--wallet-sticpay: linear-gradient(90deg, #f36938 0%, #f25822 100%);--wallet-virtual: linear-gradient(90deg, #ff6444 0%, #ff444f 100%);--wallet-visa: linear-gradient(274.73deg, #1a205e 3.82%, #122d96 88.49%);--wallet-webmoney: linear-gradient(90deg, #1a77ac 0%, #0068a3 100%)}:host .theme--light,:root .theme--light{--general-main-1: #fff;--general-main-2: #fff;--general-section-1: #f2f3f4;--general-section-2: #f2f3f4;--general-disabled: #eaeced;--general-hover: #e6e9e9;--general-active: #d6dadb;--text-prominent: #333;--text-general: #333;--text-less-prominent: #999;--text-disabled: #d6d6d6;--text-profit-success: #4bb4b3;--text-loss-danger: #ec3f3f;--text-colored-background: #fff;--purchase-main-1: #4bb4b3;--purchase-section-1: #3d9494;--purchase-main-2: #ec3f3f;--purchase-section-2: #d33636;--purchase-disabled-main: #eaeced;--purchase-disabled-section: #e6e9e9;--button-primary-default: var(--brand-red-coral);--button-secondary-default: #999;--button-tertiary-default: transparent;--button-primary-hover: #eb3e48;--button-secondary-hover: rgba(0,0,0,0.08);--button-tertiary-hover: rgba(255,68,79,0.08);--overlay-outside-dialog: rgba(0,0,0,0.72);--overlay-inside-dialog: rgba(255,255,255,0.96);--shadow-menu: rgba(0,0,0,0.16);--shadow-menu-2: rgba(0,0,0,0.16);--shadow-drop: rgba(0,0,0,0.08);--state-normal: #fff;--state-hover: #e6e9e9;--state-active: #d6dadb;--state-disabled: #eaeced;--border-normal: #d6dadb;--border-hover: #999;--border-active: var(--brand-secondary);--border-disabled: #eaeced;--fill-normal: #fff;--fill-hover: #999;--fill-active: var(--brand-secondary);--fill-disabled: #eaeced;--status-default: #eaeced;--status-adjustment: #999;--status-danger: #ec3f3f;--status-success: #4bb4b3;--status-warning: #ffad3a;--status-info: #377cfc;--status-colored-background: #fff;--transparent-success: rgba(75,180,179,0.92);--transparent-info: rgba(55,124,252,0.16);--gradient-success: linear-gradient(to top, #fff, rgba(75,180,179,0.16));--gradient-danger: linear-gradient(to top, #fff, rgba(255,68,79,0.16));--gradient-right-edge: linear-gradient(to right, rgba(255,255,255,0) -5%, #fff 71%)}:host .theme--dark,:root .theme--dark{--general-main-1: #0e0e0e;--general-main-2: #151717;--general-section-1: #151717;--general-section-2: #0e0e0e;--general-disabled: #1d1f20;--general-hover: #242828;--general-active: #323738;--text-prominent: #fff;--text-general: #c2c2c2;--text-less-prominent: #6e6e6e;--text-disabled: #3e3e3e;--text-profit-success: #00a79e;--text-loss-danger: #cc2e3d;--text-colored-background: #fff;--purchase-main-1: #00a79e;--purchase-section-1: #008079;--purchase-main-2: #cc2e3d;--purchase-section-2: #a32430;--purchase-disabled-main: #1d1f20;--purchase-disabled-section: #0e0e0e;--button-primary-default: var(--brand-red-coral);--button-secondary-default: #6e6e6e;--button-tertiary-default: transparent;--button-primary-hover: #eb3e48;--button-secondary-hover: rgba(255,255,255,0.08);--button-tertiary-hover: rgba(255,68,79,0.08);--overlay-outside-dialog: rgba(0,0,0,0.72);--overlay-inside-dialog: rgba(14,14,14,0.96);--shadow-menu: rgba(0,0,0,0.84);--shadow-menu-2: rgba(0,0,0,0.72);--shadow-drop: rgba(0,0,0,0.64);--state-normal: #0e0e0e;--state-hover: #242828;--state-active: #323738;--state-disabled: #1d1f20;--border-normal: #323738;--border-hover: #6e6e6e;--border-active: var(--brand-secondary);--border-disabled: #1d1f20;--fill-normal: #0e0e0e;--fill-hover: #6e6e6e;--fill-active: var(--brand-secondary);--fill-disabled: #1d1f20;--status-default: #eaeced;--status-adjustment: #999;--status-danger: #cc2e3d;--status-warning: #ffad3a;--status-success: #00a79e;--status-info: #377cfc;--status-colored-background: #fff;--transparent-success: rgba(0,167,158,0.92);--transparent-info: rgba(55,124,252,0.16);--gradient-success: linear-gradient(to top, #0e0e0e, rgba(0,167,158,0.16));--gradient-danger: linear-gradient(to top, #0e0e0e, rgba(255,68,79,0.16));--gradient-right-edge: linear-gradient(to right, rgba(14,14,14,0) -5%, #0e0e0e 71%)}\n",""]),e.exports=t},function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(e){"object"==typeof window&&(r=window)}e.exports=r},function(e,t,r){var n=r(5),o=r(16);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]),n(o,{insert:"head",singleton:!1}),e.exports=o.locals||{}},function(e,t,r){(t=r(6)(!1)).push([e.i,".dw-frame{border:1px solid var(--border-normal);box-shadow:0 4px 16px 0 var(--shadow-menu);-o-object-fit:cover;object-fit:cover;width:100%}\n",""]),e.exports=t},function(e,t,r){var n=r(5),o=r(18);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]),n(o,{insert:"head",singleton:!1}),e.exports=o.locals||{}},function(e,t,r){(t=r(6)(!1)).push([e.i,".dw-about-us{display:flex;align-items:center;justify-content:center;margin:0 auto;flex-direction:column;background:var(--general-section-1)}.dw-about-us__text{width:80%}.dw-about-us__title{margin-top:3.2rem;margin-bottom:2.4rem}.dw-about-us__subtitle{margin-bottom:4rem}.dw-about-us__wrapper{display:grid;grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));grid-gap:1.6rem;width:80%}\n",""]),e.exports=t},function(e,t,r){var n=r(5),o=r(20);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]),n(o,{insert:"head",singleton:!1}),e.exports=o.locals||{}},function(e,t,r){(t=r(6)(!1)).push([e.i,".dw-temp-buttons{margin-top:1.6rem}\n",""]),e.exports=t},function(e,t,r){var n=r(5),o=r(22);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]),n(o,{insert:"head",singleton:!1}),e.exports=o.locals||{}},function(e,t,r){(t=r(6)(!1)).push([e.i,".dw-home{height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center}.dw-home__button{margin-top:1.6rem}\n",""]),e.exports=t},function(e,t,r){var n=r(5),o=r(24);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]),n(o,{insert:"head",singleton:!1}),e.exports=o.locals||{}},function(e,t,r){(t=r(6)(!1)).push([e.i,".dw-explore{height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center}\n",""]),e.exports=t},function(e,t,r){var n=r(5),o=r(26);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]),n(o,{insert:"head",singleton:!1}),e.exports=o.locals||{}},function(e,t,r){(t=r(6)(!1)).push([e.i,".dw-resources{height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center}\n",""]),e.exports=t},function(e,t,r){var n=r(5),o=r(28);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]),n(o,{insert:"head",singleton:!1}),e.exports=o.locals||{}},function(e,t,r){(t=r(6)(!1)).push([e.i,".dw-dashboard{height:100%;background-color:var(--general-disabled)}\n",""]),e.exports=t},function(e,t,r){"use strict";r.r(t),r(10),r(12);var n=r(8),o=r.n(n),i=r(0),a=r.n(i),c=r(1);if(!i.useState)throw new Error("mobx-react-lite requires React with Hooks support");if(!c.spy)throw new Error("mobx-react-lite requires mobx at least version 4 to be available");var u=r(9),s=r(4),l=Object(s.b)("observerBatching");function f(e){return Object(c.getDependencyTree)(e)}var d,p=new Set;function b(){void 0===d&&(d=setTimeout(g,1e4))}function g(){d=void 0;var e=Date.now();p.forEach((function(t){var r=t.current;r&&e>=r.cleanAt&&(r.reaction.dispose(),t.current=null,p.delete(t))})),p.size>0&&b()}var h=!1,m=[],y={};function v(e){return"observer"+e}function _(e,t,r){void 0===t&&(t="observed"),void 0===r&&(r=y);var n,o=function(e){return function(){h?m.push(e):e()}}((r.useForceUpdate||s.d)()),i=a.a.useRef(null);if(!i.current){var u=new c.Reaction(v(t),(function(){l.mounted?o():(u.dispose(),i.current=null)})),l=function(e){return{cleanAt:Date.now()+1e4,reaction:e}}(u);i.current=l,n=i,p.add(n),b()}var d=i.current.reaction;return a.a.useDebugValue(d,f),a.a.useEffect((function(){var e;return e=i,p.delete(e),i.current?i.current.mounted=!0:(i.current={reaction:new c.Reaction(v(t),(function(){o()})),cleanAt:1/0},o()),function(){i.current.reaction.dispose(),i.current=null}}),[]),function(e){h=!0,m=[];try{var t=e();h=!1;var r=m.length>0?m:void 0;return a.a.useLayoutEffect((function(){r&&r.forEach((function(e){return e()}))}),[r]),t}finally{h=!1}}((function(){var t,r;if(d.track((function(){try{t=e()}catch(e){r=e}})),r)throw r;return t}))}var w=function(){return(w=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function x(e,t){var r,n,o,a=w({forwardRef:!1},t),c=e.displayName||e.name,u=function(t,r){return _((function(){return e(t,r)}),c)};return u.displayName=c,r=a.forwardRef?Object(i.memo)(Object(i.forwardRef)(u)):Object(i.memo)(u),n=e,o=r,Object.keys(n).forEach((function(e){O[e]||Object.defineProperty(o,e,Object.getOwnPropertyDescriptor(n,e))})),r.displayName=c,r}var j,O={$$typeof:!0,render:!0,compare:!0,type:!0};function E(e){var t=e.children,r=e.render,n=t||r;return"function"!=typeof n?null:_(n)}function R(e,t,r,n,o){var i="children"===t?"render":"children",a="function"==typeof e[t],c="function"==typeof e[i];return a&&c?new Error("MobX Observer: Do not use children and render in the same time in`"+r):a||c?null:new Error("Invalid prop `"+o+"` of type `"+typeof e[t]+"` supplied to `"+r+"`, expected `function`.")}E.propTypes={children:R,render:R},E.displayName="Observer",(j=u.unstable_batchedUpdates)||(j=function(e){e()}),Object(c.configure)({reactionScheduler:j}),Object(s.a)()[l]=!0;var k,z,S,P=r(2),T=r(7),q=r(3),C=(r(15),function(e){var t=e.src,r=e.alt,n=e.className,a=i.createRef();return i.createElement("img",{draggable:!0,ref:a,className:o()("dw-frame",n),src:t,alt:r,width:"200",height:"200"})}),N=function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.root_store=void 0,this.root_store=t};function M(e){return(M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function L(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function D(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function A(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function B(e,t){return(B=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function F(e,t){return!t||"object"!==M(t)&&"function"!=typeof t?U(e):t}function U(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function H(e){return(H=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function I(e,t,r,n,o){var i={};return Object.keys(n).forEach((function(e){i[e]=n[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=r.slice().reverse().reduce((function(r,n){return n(e,t,r)||r}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}var J=(z=I((k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&B(e,t)}(o,e);var t,r,n=function(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=H(e);if(t){var o=H(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return F(this,r)}}(o);function o(){var e;D(this,o);for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return L(e=n.call.apply(n,[this].concat(r)),"loginid",z,U(e)),L(e,"is_logged_in",S,U(e)),e}return t=o,(r=[{key:"init",value:function(e){this.is_logged_in=e.is_logged_in,this.loginid=e.loginid}}])&&A(t.prototype,r),o}(N)).prototype,"loginid",[c.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),S=I(k.prototype,"is_logged_in",[c.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),I(k.prototype,"init",[c.action],Object.getOwnPropertyDescriptor(k.prototype,"init"),k.prototype),k);function $(e){return($="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function G(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function V(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function W(e,t){return(W=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function X(e,t){return!t||"object"!==$(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function K(e){return(K=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var Q,Y,Z=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&W(e,t)}(o,e);var t,r,n=function(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=K(e);if(t){var o=K(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return X(this,r)}}(o);function o(){var e;G(this,o);for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return(e=n.call.apply(n,[this].concat(r))).has_router=!1,e.is_deriv_crypto=!1,e.asset_path="",e.routes={home:"/",explore:"/explore",about_us:"/about-us",resources:"/resources"},e}return t=o,(r=[{key:"setConfig",value:function(e){this.has_router=e.has_router,this.is_deriv_crypto=e.is_deriv_crypto,this.asset_path=e.asset_path,this.routes=e.routes}}])&&V(t.prototype,r),o}(N);function ee(e){return(ee="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function te(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function re(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ne(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function oe(e,t){return(oe=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ie(e,t){return!t||"object"!==ee(t)&&"function"!=typeof t?ae(e):t}function ae(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ce(e){return(ce=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ue(e,t,r,n,o){var i={};return Object.keys(n).forEach((function(e){i[e]=n[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=r.slice().reverse().reduce((function(r,n){return n(e,t,r)||r}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}var se,le,fe=(Y=ue((Q=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&oe(e,t)}(o,e);var t,r,n=function(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=ce(e);if(t){var o=ce(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return ie(this,r)}}(o);function o(){var e;re(this,o);for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return(e=n.call.apply(n,[this].concat(r))).components={},te(e,"is_dark_mode_on",Y,ae(e)),e}return t=o,(r=[{key:"init",value:function(e){this.components=e.components,this.is_dark_mode_on=e.is_dark_mode_on}}])&&ne(t.prototype,r),o}(N)).prototype,"is_dark_mode_on",[c.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),ue(Q.prototype,"init",[c.action],Object.getOwnPropertyDescriptor(Q.prototype,"init"),Q.prototype),Q),de=function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.ui_store=void 0,this.client_store=void 0,this.config_store=void 0,this.ws=void 0,this.ws=t,this.ui_store=new fe(this),this.client_store=new J(this),this.config_store=new Z(this)},pe=function(e){if(!se){var t=new de(e);se=i.createContext({ui_store:t.ui_store,client_store:t.client_store,config_store:t.config_store})}return i.useContext(se)},be=(r(17),function(){var e=pe().config_store;return i.createElement("div",{className:"dw-about-us"},i.createElement(P.Text,{className:"dw-about-us__text dw-about-us__title",as:"h1",size:"l",color:"general",align:"center"},Object(q.localize)("HALL OF FAME")),i.createElement(P.Text,{className:"dw-about-us__text dw-about-us__subtitle",as:"p",size:"m",color:"less-prominent",align:"center"},Object(q.localize)("Our front-end evolution has been powered by these amazing people")),i.createElement("div",{className:"dw-about-us__wrapper"},Array.from(new Array(27).keys()).map((function(t){return i.createElement(C,{src:"".concat(e.asset_path,"/images/p").concat(t+1,".jpeg"),key:t,alt:"p".concat(t+1)})}))))}),ge=(r(19),function(){var e=Object(T.useHistory)(),t=pe().config_store;return i.createElement("div",{className:"dw-temp-buttons"},i.createElement(P.Button.Group,null,i.createElement(P.Button,{primary:!0,large:!0,onClick:function(){return e.push(t.routes.explore)}},i.createElement(q.Localize,{i18n_default_text:"Explore"})),i.createElement(P.Button,{primary:!0,large:!0,onClick:function(){return e.push(t.routes.about_us)}},i.createElement(q.Localize,{i18n_default_text:"About us"})),i.createElement(P.Button,{primary:!0,large:!0,onClick:function(){return e.push(t.routes.resources)}},i.createElement(q.Localize,{i18n_default_text:"Resources"}))))}),he=(r(21),function(){return i.createElement(i.Fragment,null,i.createElement("div",{className:"dw-home"},i.createElement(P.Text,{as:"p",size:"l",color:"less-prominent",align:"center"},"Home"),i.createElement(ge,null)))}),me=(r(23),function(){return i.createElement("div",{className:"dw-explore"},i.createElement(P.Text,{as:"p",size:"l",color:"less-prominent",align:"center"},"Explore"),i.createElement(ge,null))}),ye=(r(25),function(){return i.createElement("div",{className:"dw-resources"},i.createElement(P.Text,{as:"p",size:"l",color:"less-prominent",align:"center"},"Resources"),i.createElement(ge,null))}),ve=function(e){var t=e.has_router,r=e.children;return t?i.createElement(i.Fragment,null,r):i.createElement(T.BrowserRouter,null,r)};function _e(){return(_e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var we=x((function(){var e=pe(),t=e.ui_store,r=e.config_store;return i.createElement(i.Suspense,{fallback:function(){return i.createElement("div",null,i.createElement(q.Localize,{i18n_default_text:"Loading..."}))}},i.createElement(ve,{has_router:r.has_router},i.createElement(T.Switch,null,function(e){var t=e.consumer_routes,r=e.is_deriv_crypto,n=e.Page404;if(!le){var o={component:n,getTitle:function(){return Object(q.localize)("Error 404")}};(le=function(e){var t=e.consumer_routes;return[{component:me,getTitle:function(){return Object(q.localize)("Explore")},is_authenticated:!1,path:t.explore},{component:be,getTitle:function(){return Object(q.localize)("About us")},is_authenticated:!1,path:t.about_us},{component:ye,getTitle:function(){return Object(q.localize)("Resources")},is_authenticated:!1,path:t.resources},{component:he,getTitle:function(){return Object(q.localize)("Dashboard")},is_authenticated:!1,path:t.home}]}({consumer_routes:t,is_deriv_crypto:r})).push(o)}return le}({consumer_routes:r.routes,is_deriv_crypto:r.is_deriv_crypto,Page404:t.components.Page404}).map((function(e,r){return i.createElement(P.RouteWithSubroutes,_e({key:r,Component404:t.components.Page404,LoginPrompt:t.components.LoginPrompt},e))})))))})),xe=(r(27),x((function(e){var t=e.className,r=e.client,n=e.config,a=e.ui,c=e.ws,u=pe(c),s=u.client_store,l=u.config_store,f=u.ui_store,d=a.height_offset?"calc(100vh - ".concat(a.height_offset,")"):"100vh";return Object(P.useDeepEffect)((function(){f.init(a),s.init(r),l.setConfig(n)}),[r,a]),i.createElement("main",{style:{height:d},className:o()("dashboard",t,{"theme--light":!f.is_dark_mode_on,"theme--dark":f.is_dark_mode_on})},i.createElement("div",{className:"dw-dashboard"},i.createElement(we,null)))})));t.default=xe}]).default)},774:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return m}));var n=r(0),o=r(1),i=r.n(o),a=r(755),c=r.n(a),u=r(3),s=r(2),l=r(14),f=r(9),d=r(117),p=r.n(d),b=r(264),g=r(278),h=function(e){var t=e.client,r=e.config,o=e.ui;return n.createElement(c.a,{client:t,server_time:p.a,ui:o,ws:l.b,config:r})};h.propTypes={client:i.a.shape({is_logged_in:i.a.bool.isRequired,loginid:i.a.string.isRequired}).isRequired,config:{asset_path:i.a.string.isRequired,has_router:i.a.bool.isRequired,is_deriv_crypto:i.a.bool.isRequired,routes:i.a.shape({home:i.a.string.isRequired,about_us:i.a.string.isRequired,explore:i.a.string.isRequired,resources:i.a.string.isRequired}).isRequired},ui:i.a.shape({height_offset:i.a.string,is_dark_mode_on:i.a.bool.isRequired,language:i.a.string.isRequired,components:i.a.shape({LoginPrompt:o.any,Page404:o.any}).isRequired}).isRequired};var m=Object(f.b)((function(e){var t=e.client,r=e.ui;return{client:{is_logged_in:t.is_logged_in,loginid:t.loginid},config:{asset_path:"".concat(Object(u.websiteUrl)(),"js/dashboard/assets"),has_router:!0,is_deriv_crypto:!1,routes:{home:u.routes.dashboard,about_us:u.routes.about_us,explore:u.routes.explore,resources:u.routes.resources}},ui:{height_offset:"84px",is_dark_mode_on:r.is_dark_mode_on,language:Object(s.getLanguage)(),components:{LoginPrompt:b.a,Page404:g.default}}}}))(h)}}]);
//# sourceMappingURL=core.dashboard.b0d733208e41a8e27d61.js.map