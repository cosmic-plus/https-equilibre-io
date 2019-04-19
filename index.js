!function(e){function t(t){for(var n,o,i=t[0],a=t[1],c=0,u=[];c<i.length;c++)o=i[c],r[o]&&u.push(r[o][0]),r[o]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);for(s&&s(t);u.length;)u.shift()()}var n={},r={2:0};function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise(function(t,o){n=r[e]=[t,o]});t.push(n[2]=i);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=function(e){return o.p+""+({0:"app",1:"ledger",3:"vendors~app",4:"vendors~ledger"}[e]||e)+".js"}(e),a=function(t){c.onerror=c.onload=null,clearTimeout(s);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src,a=new Error("Loading chunk "+e+" failed.\n("+o+": "+i+")");a.type=o,a.request=i,n[1](a)}r[e]=void 0}};var s=setTimeout(function(){a({type:"timeout",target:c})},12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(t)},o.m=e,o.c=n,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o.oe=function(e){throw console.error(e),e};var i=window.webpackJsonp=window.webpackJsonp||[],a=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var s=a;o(o.s=12)}([function(e,t,n){"use strict";var r=t;r.delay=function(e){var t,n=!0;return function(){return n&&(n=!1,t=new Promise(function(t){return t(e())})),t}},r.timeout=function(e){return new Promise(function(t){return setTimeout(t,e)})},r.capitalize=function(e){return e.substr(0,1).toUpperCase()+e.slice(1)},r.shorter=function(e){return e.length>50?e.substr(0,5)+"..."+e.substr(-5):e},r.setHiddenProperty=function(e,t,n){Object.defineProperty(e,t,{value:n,enumerable:!1,configurable:!0})},r.deprecated=function(e,t,n){console.error("Warning: ".concat(t," is deprecated and will be removed after ").concat(e,". Please use ").concat(n," instead."))},r.useExtra=function(e){return e[o]||r.setHiddenProperty(e,o,{}),e[o]};var o="@cosmic-plus";r.isUtf8=function(e){return!e.match(/[\0-\x1F\x7F-\x9F\xAD\uD7FC-\uF8FF]/)},r.isBase64=function(e){return!!e.match(/^[0-9a-zA-Z+\/]*=*$/)},r.day=function(e){return(e?new Date(e):new Date).toISOString().replace(/T.*/,"")},r.copy=function(){return console.error("misc.copy() have been moved to html.copyString()")}},function(e,t,n){var r=t,o=n(0).deprecated,i=n(2),a=i.window?i.window.document:void 0;i.isNode&&console.error("@cosmic-plus/jsutils/html is a browser-only module"),r.addStyles=function(e){var t=r.create("style",{type:"text/css"},e);r.append(a.head,t)},r.append=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];n.forEach(function(t){return e.appendChild(r.convert(t))})},r.addClass=function(e,t){-1===e.className.split(" ").indexOf(t)&&(e.className+=" ".concat(t))},r.appendClass=function(e,t){return o("2019-07-16","html.appendClass()","html.addClass()"),r.addClass(e,t)},r.clear=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(e){return e.innerHTML=""})},r.convert=function(e){return e instanceof Element||e instanceof HTMLDocument||e instanceof Text?e:null==e?a.createTextNode(""):e.domNode||a.createTextNode(e)},r.copyContent=function(e){if(e.selectionStart===e.selectionEnd){if(e.select)e.select();else{if(!window.getSelection)return;var t=a.createRange();t.selectNode(e),window.getSelection().removeAllRanges(),window.getSelection().addRange(t)}return a.execCommand("copy")}},r.copyString=function(e){var t=r.create("textarea",{},e);r.append(a.body,t),r.copyContent(t),r.destroy(t)},r.create=function(e,t){var n=a.createElement(e);if("string"==typeof t)switch(t.substr(0,1)){case"#":n.id=t.substr(1);break;case".":n.className=t.substr(1);break;default:throw new Error("Unhandled attribute")}else Object.assign(n,t);for(var o=arguments.length,i=new Array(o>2?o-2:0),c=2;c<o;c++)i[c-2]=arguments[c];return i.length>0&&r.append.apply(r,[n].concat(i)),n},r.destroy=function(e){try{e.parentNode&&e.parentNode.removeChild(e),e.innerHTML=""}catch(e){console.error(e)}},r.grab=function(e){return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:a).querySelector(e)},r.hide=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(e){return e.hidden=!0})},r.replace=function(e,t){var n=r.convert(t);return e.parentNode.replaceChild(n,e),n},r.rewrite=function(e){r.clear(e);for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];r.append.apply(r,[e].concat(n))},r.show=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(e){return e.hidden=!1})}},function(module,exports,__webpack_require__){(function(process,global){var env=exports;if(env.isBrowser="undefined"!=typeof window&&void 0!==window.document,env.isNode=void 0!==process&&process.versions&&process.versions.node,env.isEmbedded=env.isBrowser&&window.self!==window.top,env.window=env.isBrowser&&window,env.global=env.isNode&&global,env.nodeRequire=function(){},env.isNode){var stealth_require=eval("require");env.nodeRequire=function(e){return stealth_require(e)}}}).call(this,__webpack_require__(14),__webpack_require__(7))},function(e,t,n){e.exports=n(13)},function(e,t,n){var r,o=n(2);if(o.isBrowser){var i=n(15);e.exports=r=new i}else{var a=o.nodeRequire("y18n");e.exports=r=a({updateFiles:!1})}r.__t=o.isBrowser&&function(e){var t=document.createElement("i18n");return t.textContent=r.__(e),t},r.systemLocale=function(){if(o.isBrowser)return navigator.languages&&navigator.languages[0]?navigator.languages[0]:navigator.language||navigator.browserLanguage;var e=process.env,t=e.LC_ALL||e.LC_MESSAGES||e.LANG||e.LANGUAGE,n=t&&t.replace(/[.:].*/,"").replace("_","-");return n||void 0},r._setLocale=r.setLocale,r.setLocale=function(e){r._setLocale(e),"undefined"!=typeof document&&r.translateDom()},r.useSystemLocale=function(){r.setLocale(r.systemLocale().replace(/-.*/,""))},r.addTranslation=function(e,t){var n=r.getLocale();r.setLocale(e),r.updateLocale(t),r.setLocale(n)},r.translateDom=o.isBrowser&&function(){(arguments.length>0&&void 0!==arguments[0]?arguments[0]:document).querySelectorAll("i18n").forEach(function(e){e.textContent=r.__(e.textContent)})}},function(e,t,n){var r=n(6),o=n(4),i=e.exports=new r;i.currency=localStorage.currency||"USD",i.project("currency",localStorage),i.language=localStorage.language||o.systemLocale().replace(/-.*/,"")||"us",i.project("language",localStorage),i.portfolio=void 0,i.balanceShareDeviation=.2,i.minOfferValue=1,i.maxSpread=.05,i.spreadTightening=.01,i.skipMarginalOffers=.1,i.tabs=null},function(e,t,n){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var c=n(0).setHiddenProperty,s=n(11),u={},l=".trapped";function f(e){if(!e.hasOwnProperty(l)){var t=e[l];c(e,l,{}),t&&Object.assign(e[l],t)}}u.project=function(e,t,n){var r=this;p(this,e,function(e){r.link(e,t,e,n)})},u.link=function(e,t){var n=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e,o=arguments.length>3?arguments[3]:void 0,i=this!==t&&t,a=o?function(){return t[r]=o(n[e])}:function(){return t[r]=n[e]};this.trap(e,a,{crossReference:i})},u.define=function(e,t,n){var r=function(){this[e]=n.call(this)};this.trap(t,r),this.listen("outdate:".concat(e),r),this.trigger&&r()},u.compute=function(e){var t=this;p(this,e,function(e){return t.trigger("outdate:".concat(e))})},u.watch=function(e,t,n){e.trap(t,n,{crossReference:this})},u.trap=function(e,t){var n=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};void 0===r.init&&(r.init=!0),p(this,e,function(e){!function(e,t){e.hasOwnProperty("prototype")&&(e=e.prototype);if(e[l]&&e[l].hasOwnProperty(t))return;f(e),e[l][t]=e[t],Object.defineProperty(e,t,{get:function(){return this[l][t]},set:function(e){!function(e,t,n){f(e);var r=e[l][t];if(n!==r){e[l][t]=n;var o={object:e,key:t,value:n,old:r};e.trigger("change:".concat(t),o),e.trigger("change",e)}}(this,t,e)},configurable:!0,enumerable:!0})}(n,e),t&&(n.listen("change:".concat(e),t,r.crossReference),!n.hasOwnProperty("prototype")&&r.init&&t.call(n,{object:n,key:e,value:n[e]}))})},u.untrap=function(e){var t=this;p(this,e,function(e){return t.forget("change:".concat(e))})},u.set=function(e,t){var n=this;p(this,e,function(e){n[l]&&delete n[l][e],n[e]=t})};var h=e.exports=function(e){"use strict";function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o(this,i(t).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}(t,s),t}();function p(e,t,n){"*"===t&&(t=Object.keys(e)),t instanceof Array?t.forEach(function(e){return n(e)}):"string"==typeof t&&n(t)}h.constructorMethods=Object.assign({define:u.define,trap:u.trap},s.constructorMethods),h.instanceMethods=Object.assign(u,s.instanceMethods),h.extend(h),h.trapped=l},function(e,t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(e){"object"===("undefined"==typeof window?"undefined":n(window))&&(r=window)}e.exports=r},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t,n){var r=t,o=n(1),i=n(2),a=i.window?i.window.document:void 0;i.isNode&&console.error("@cosmic-plus/jsutils/dom is a browser-only module"),Object.defineProperty(r,"ingest",{value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a;e.id&&(r[e.id]=e);var t=e.querySelectorAll("[id]");for(var n in t){var o=t[n];o.id&&(r[o.id]=o)}},enumerable:!1,writable:!1}),r.html=o.grab("html"),r.head=o.grab("head"),r.body=o.grab("body"),r.header=o.grab("header"),r.nav=o.grab("nav"),r.main=o.grab("main"),r.footer=o.grab("footer"),r.ingest()},function(e,t,n){var r=n(3);function o(e,t,n,r,o,i,a){try{var c=e[i](a),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,o)}function i(e){return function(){var t=this,n=arguments;return new Promise(function(r,i){var a=e.apply(t,n);function c(e){o(a,r,i,c,s,"next",e)}function s(e){o(a,r,i,c,s,"throw",e)}c(void 0)})}}var a=t,c=n(1);a.css=function(){var e=i(r.mark(function e(t){return r.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(e,n){var r=c.create("link",{rel:"stylesheet",type:"text/css",href:t,onload:e,onerror:n});c.append(document.head,r)}));case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.js=function(){var e=i(r.mark(function e(t){return r.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(e,n){var r=c.create("script",{src:t,onload:e,onerror:n});c.append(document.head,r)}));case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},function(e,t,n){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=n(0).setHiddenProperty,i={},a=".listeners";function c(e,t,n){if(t)for(var r in t)try{t[r].call(e,n)}catch(e){console.error(e)}}i.listen=function(e,t,n){var r=this;if(this.hasOwnProperty(a)||o(this,a,{}),this[a][e]||(this[a][e]=[]),this[a][e].push(t),n&&n.listen){var i=function(){n.forget("destroy",c)},c=function(){r.forget(e,t),r.forget("destroy",i)};this.listen("destroy",i),n.listen("destroy",c)}},i.forget=function(e,t){this.hasOwnProperty(a)&&(e?t?this[a][e]&&(this[a][e]=this[a][e].filter(function(e){return e!==t})):delete this[a][e]:this[a]={})},i.trigger=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this;this.constructor[a]&&c(this,this.constructor[a][e],t),this.hasOwnProperty(a)&&c(this,this[a][e],t)},i.destroy=function(){var e=this;this.trigger("destroy"),Object.getOwnPropertyNames(this).forEach(function(t){return delete e[t]})};var s=e.exports=function(){"use strict";function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,o;return t=e,o=[{key:"extend",value:function(e){e.hasOwnProperty("prototype")?(Object.assign(e,this.constructorMethods),this.extend(e.prototype)):Object.assign(e,this.instanceMethods)}}],(n=null)&&r(t.prototype,n),o&&r(t,o),e}();s.constructorMethods={listen:i.listen,forget:i.forget},s.instanceMethods=i,s.extend(s)},function(e,t,n){var r=n(3);function o(e,t,n,r,o,i,a){try{var c=e[i](a),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,o)}var i=n(9),a=n(1),c=n(4),s=n(10),u=n(5);function l(){var e;return e=r.mark(function e(){return r.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return navigator.serviceWorker&&navigator.serviceWorker.register("worker.js"),c.addTranslation("fr",n(17)),c.setLocale(u.language),a.show(i.loading),e.next=6,s.js("stellar-sdk.js");case 6:return e.next=8,Promise.all([n.e(3),n.e(0)]).then(n.t.bind(null,18,7));case 8:a.hide(i.loading);case 9:case"end":return e.stop()}},e)}),(l=function(){var t=this,n=arguments;return new Promise(function(r,i){var a=e.apply(t,n);function c(e){o(a,r,i,c,s,"next",e)}function s(e){o(a,r,i,c,s,"throw",e)}c(void 0)})}).apply(this,arguments)}!function(){l.apply(this,arguments)}()},function(e,t,n){(function(e){function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var n=function(e){"use strict";var n,r=Object.prototype,o=r.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function u(e,t,n,r){var o=t&&t.prototype instanceof g?t:g,i=Object.create(o.prototype),a=new j(r||[]);return i._invoke=function(e,t,n){var r=f;return function(o,i){if(r===p)throw new Error("Generator is already running");if(r===d){if("throw"===o)throw i;return T()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=O(a,n);if(c){if(c===y)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var s=l(e,t,n);if("normal"===s.type){if(r=n.done?d:h,s.arg===y)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=d,n.method="throw",n.arg=s.arg)}}}(e,n,a),i}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var f="suspendedStart",h="suspendedYield",p="executing",d="completed",y={};function g(){}function v(){}function m(){}var b={};b[a]=function(){return this};var w=Object.getPrototypeOf,_=w&&w(w(P([])));_&&_!==r&&o.call(_,a)&&(b=_);var x=m.prototype=g.prototype=Object.create(b);function L(e){["next","throw","return"].forEach(function(t){e[t]=function(e){return this._invoke(t,e)}})}function S(e){var n;this._invoke=function(r,i){function a(){return new Promise(function(n,a){!function n(r,i,a,c){var s=l(e[r],e,i);if("throw"!==s.type){var u=s.arg,f=u.value;return f&&"object"===t(f)&&o.call(f,"__await")?Promise.resolve(f.__await).then(function(e){n("next",e,a,c)},function(e){n("throw",e,a,c)}):Promise.resolve(f).then(function(e){u.value=e,a(u)},function(e){return n("throw",e,a,c)})}c(s.arg)}(r,i,n,a)})}return n=n?n.then(a,a):a()}}function O(e,t){var r=e.iterator[t.method];if(r===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=n,O(e,t),"throw"===t.method))return y;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=l(r,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,y;var i=o.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=n),t.delegate=null,y):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,y)}function k(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function E(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(k,this),this.reset(!0)}function P(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,i=function t(){for(;++r<e.length;)if(o.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=n,t.done=!0,t};return i.next=i}}return{next:T}}function T(){return{value:n,done:!0}}return v.prototype=x.constructor=m,m.constructor=v,m[s]=v.displayName="GeneratorFunction",e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,s in e||(e[s]="GeneratorFunction")),e.prototype=Object.create(x),e},e.awrap=function(e){return{__await:e}},L(S.prototype),S.prototype[c]=function(){return this},e.AsyncIterator=S,e.async=function(t,n,r,o){var i=new S(u(t,n,r,o));return e.isGeneratorFunction(n)?i:i.next().then(function(e){return e.done?e.value:i.next()})},L(x),x[s]="Generator",x[a]=function(){return this},x.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=P,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(E),!e)for(var t in this)"t"===t.charAt(0)&&o.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=n)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(r,o){return c.type="throw",c.arg=e,t.next=r,o&&(t.method="next",t.arg=n),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var s=o.call(a,"catchLoc"),u=o.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),y},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),E(n),y}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;E(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:P(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=n),y}},e}("object"===t(e)?e.exports:{});try{regeneratorRuntime=n}catch(e){Function("r","regeneratorRuntime = r")(n)}}).call(this,n(8)(e))},function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function c(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var s,u=[],l=!1,f=-1;function h(){l&&s&&(l=!1,s.length?u=s.concat(u):f=-1,u.length&&p())}function p(){if(!l){var e=c(h);l=!0;for(var t=u.length;t;){for(s=u,u=[];++f<t;)s&&s[f].run();f=-1,t=u.length}s=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function d(e,t){this.fun=e,this.array=t}function y(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new d(e,t)),1!==u.length||l||c(p)},d.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=y,o.addListener=y,o.once=y,o.off=y,o.removeListener=y,o.removeAllListeners=y,o.emit=y,o.prependListener=y,o.prependOnceListener=y,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t,n){var r=n(16).vsprintf,o=function(){};function i(e){e=e||{},this._writeLocalUpdates=!!e.writeLocalUpdates,this._locale=e.locale||"en",this._fallbackToLanguage=!1!==e.fallbackToLanguage,this._localStorage=e.localStorage||window.localStorage,this._cache={};var t=e.sources||{};if(Object.keys(t).forEach(function(e){this._cache[e]={},Object.keys(t[e]).forEach(function(n){this._cache[e][n]=t[e][n]},this)},this),this._writeLocalUpdates){var n,r,o=!1;Object.keys(this._cache).forEach(function(e){r=this._cache[e],o=!1;try{n=JSON.parse(this._localStorage["y18n-"+e]),o=Object.keys(n).every(function(e){return e in r})}catch(e){n={},o=!0}o?delete this._localStorage["y18n-"+e]:(Object.keys(n).forEach(function(e){e in r||(r[e]=n[e])}),this._localStorage["y18n-"+e]=JSON.stringify(r,null,"\t"),this._cache[e]=r)},this)}this.__=this.__.bind(this),this.__n=this.__n.bind(this),this.setLocale=this.setLocale.bind(this),this.getLocale=this.getLocale.bind(this),this.updateLocale=this.updateLocale.bind(this),this.getUpdates=this.getUpdates.bind(this),this.clearUpdates=this.clearUpdates.bind(this)}i.prototype._writeLocal=function(e,t){this._localStorage["y18n-"+this._resolveLocaleKey(e)]=JSON.stringify(this._cache[e],null,"\t"),setTimeout(t,1)},i.prototype._resolveLocaleKey=function(e){if(this._fallbackToLanguage&&~e.lastIndexOf("_")){var t=e.split("_")[0];if(this._cache[t])return t}return e},i.prototype._initLocale=function(){var e=this._resolveLocaleKey(this._locale);e!==this._locale&&(this._cache[this._locale]=this._cache[e]),this._cache[this._locale]=this._cache[this._locale]||{}},i.prototype.__=function(){var e=Array.prototype.slice.call(arguments),t=e.shift(),n=o;return"function"==typeof e[e.length-1]&&(n=e.pop()),n=n||o,this._cache[this._locale]||this._initLocale(),!this._cache[this._locale][t]&&this._writeLocalUpdates?(this._cache[this._locale][t]=t,this._writeLocal(this._locale,n)):n(),r(this._cache[this._locale][t]||t,e)},i.prototype.__n=function(){var e=Array.prototype.slice.call(arguments),t=e.shift(),n=e.shift(),i=e.shift(),a=o;"function"==typeof e[e.length-1]&&(a=e.pop()),this._cache[this._locale]||this._initLocale();var c=1===i?t:n;this._cache[this._locale][t]&&(c=this._cache[this._locale][t][1===i?"one":"other"]),!this._cache[this._locale][t]&&this._writeLocalUpdates?(this._cache[this._locale][t]={one:t,other:n},this._writeLocal(this._locale,a)):a();var s=[];return~c.indexOf("%d")&&s.push(i),r(c,s.concat(e))},i.prototype.setLocale=function(e){this._locale=e},i.prototype.getLocale=function(){return this._locale},i.prototype.updateLocale=function(e){for(var t in this._cache[this._locale]||this._initLocale(),e)this._cache[this._locale][t]=e[t]},i.prototype.getUpdates=function(e){return e=e||this._locale,this._localStorage["y18n-"+this._resolveLocaleKey(e)]},i.prototype.clearUpdates=function(e){e=e||this._locale,delete this._localStorage["y18n-"+this._resolveLocaleKey(e)]},e.exports=i},function(e,t,n){var r;function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(){"use strict";var i={not_string:/[^s]/,not_bool:/[^t]/,not_type:/[^T]/,not_primitive:/[^v]/,number:/[diefg]/,numeric_arg:/[bcdiefguxX]/,json:/[j]/,not_json:/[^j]/,text:/^[^\x25]+/,modulo:/^\x25{2}/,placeholder:/^\x25(?:([1-9]\d*)\$|\(([^)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijostTuvxX])/,key:/^([a-z_][a-z_\d]*)/i,key_access:/^\.([a-z_][a-z_\d]*)/i,index_access:/^\[(\d+)\]/,sign:/^[+-]/};function a(e){return function(e,t){var n,r,c,s,u,l,f,h,p,d=1,y=e.length,g="";for(r=0;r<y;r++)if("string"==typeof e[r])g+=e[r];else if("object"===o(e[r])){if((s=e[r]).keys)for(n=t[d],c=0;c<s.keys.length;c++){if(null==n)throw new Error(a('[sprintf] Cannot access property "%s" of undefined value "%s"',s.keys[c],s.keys[c-1]));n=n[s.keys[c]]}else n=s.param_no?t[s.param_no]:t[d++];if(i.not_type.test(s.type)&&i.not_primitive.test(s.type)&&n instanceof Function&&(n=n()),i.numeric_arg.test(s.type)&&"number"!=typeof n&&isNaN(n))throw new TypeError(a("[sprintf] expecting number but found %T",n));switch(i.number.test(s.type)&&(h=n>=0),s.type){case"b":n=parseInt(n,10).toString(2);break;case"c":n=String.fromCharCode(parseInt(n,10));break;case"d":case"i":n=parseInt(n,10);break;case"j":n=JSON.stringify(n,null,s.width?parseInt(s.width):0);break;case"e":n=s.precision?parseFloat(n).toExponential(s.precision):parseFloat(n).toExponential();break;case"f":n=s.precision?parseFloat(n).toFixed(s.precision):parseFloat(n);break;case"g":n=s.precision?String(Number(n.toPrecision(s.precision))):parseFloat(n);break;case"o":n=(parseInt(n,10)>>>0).toString(8);break;case"s":n=String(n),n=s.precision?n.substring(0,s.precision):n;break;case"t":n=String(!!n),n=s.precision?n.substring(0,s.precision):n;break;case"T":n=Object.prototype.toString.call(n).slice(8,-1).toLowerCase(),n=s.precision?n.substring(0,s.precision):n;break;case"u":n=parseInt(n,10)>>>0;break;case"v":n=n.valueOf(),n=s.precision?n.substring(0,s.precision):n;break;case"x":n=(parseInt(n,10)>>>0).toString(16);break;case"X":n=(parseInt(n,10)>>>0).toString(16).toUpperCase()}i.json.test(s.type)?g+=n:(!i.number.test(s.type)||h&&!s.sign?p="":(p=h?"+":"-",n=n.toString().replace(i.sign,"")),l=s.pad_char?"0"===s.pad_char?"0":s.pad_char.charAt(1):" ",f=s.width-(p+n).length,u=s.width&&f>0?l.repeat(f):"",g+=s.align?p+n+u:"0"===l?p+u+n:u+p+n)}return g}(function(e){if(s[e])return s[e];var t,n=e,r=[],o=0;for(;n;){if(null!==(t=i.text.exec(n)))r.push(t[0]);else if(null!==(t=i.modulo.exec(n)))r.push("%");else{if(null===(t=i.placeholder.exec(n)))throw new SyntaxError("[sprintf] unexpected placeholder");if(t[2]){o|=1;var a=[],c=t[2],u=[];if(null===(u=i.key.exec(c)))throw new SyntaxError("[sprintf] failed to parse named argument key");for(a.push(u[1]);""!==(c=c.substring(u[0].length));)if(null!==(u=i.key_access.exec(c)))a.push(u[1]);else{if(null===(u=i.index_access.exec(c)))throw new SyntaxError("[sprintf] failed to parse named argument key");a.push(u[1])}t[2]=a}else o|=2;if(3===o)throw new Error("[sprintf] mixing positional and named placeholders is not (yet) supported");r.push({placeholder:t[0],param_no:t[1],keys:t[2],sign:t[3],pad_char:t[4],align:t[5],width:t[6],precision:t[7],type:t[8]})}n=n.substring(t[0].length)}return s[e]=r}(e),arguments)}function c(e,t){return a.apply(null,[e].concat(t||[]))}var s=Object.create(null);t.sprintf=a,t.vsprintf=c,"undefined"!=typeof window&&(window.sprintf=a,window.vsprintf=c,void 0===(r=function(){return{sprintf:a,vsprintf:c}}.call(t,n,t,e))||(e.exports=r))}()},function(e){e.exports={"A Cosmic.Plus Software":"Un logiciel Cosmic.Plus",About:"À propos",Activity:"Activité","Add Asset":"Ajouter un actif",Agregated:"Agrégé","All orders are passed against Stellar Lumens (XLM).":"Tous les ordres sont passé contre du Stellar Lumen (XLM).","Almost there":"On y est presque",Amount:"Quantité",Anchor:"Ancre","Anchor prices are from Stellar DEX":"Les prix des ancres viennent de l'échange décentralisé Stellar",Apply:"Appliquer",Asset:"Actif",at:"à",Buy:"Achète","Can't connect to the Stellar blockchain":"Pas de connexion avec la blockchain Stellar",Cancel:"Annuler","Cancel All":"Tout annuler",Close:"Fermer","Connecting to your account...":"Connexion à votre compte...",Currency:"Devise",Date:"Date",Demo:"Demo",Direction:"Direction",Divergence:"Divergence",Donate:"Donner","Donation to Equilibre.io":"Donation à Equilibre.io",Email:"Email","Empty account":"Compte vide","Enter an amount (in Lumens)":"Entrez un montant (en Lumens)","Enter with your Stellar address:":"Entrez avec votre addresse Stellar","Equal Share":"Part égale","Equilibre.io runs on donation.":"Equilibre.io est financé par donation.","Fetching market data":"Obtention des données de marché","Fetching orderbook...":"Chargement du carnet d'ordres...","For your comfort, prices are displayed in their %%globalCurrency equivalent.":"Pour votre confort, les prix sont affichés en équivalent %%globalCurrency.","General Settings":"Paramètres généraux","Global prices are from %%coingecko when available.":"Les prix globaux viennent de %%coingecko lorsque cela est possible.",Goal:"Objectif",Graph:"Graphique","However, those converted values will change according to XLM price movement.":"Cependant, ces valeurs converties changent avec le cours du Lumen.","I'm running, I'm running":"Chaud devant, chaud","Invalid federated address: shared account.":"Adresse fédérée invalide: compte partagé.",Language:"Langue",License:"Licence",Loading:"Chargement","Loading...":"Chargement...",Login:"Connexion","Login with Ledger Wallet":"Connexion avec un Legder Wallet",Logout:"Déconnexion",Name:"Nom","Not a valid amount":"Montant invalide","Open Orders":"Ordres ouverts",Operation:"Opération","Order over portfolio total":"Ordre au dessus du total du portfolio",Percentage:"Pourcentage","Please contribute to its development according to what you think the service worth.":"Merci de contribuer à son développement en fonction de ce que vous pensez que le service vaut.","Please enter an address.":"Veuillez entrer une addresse.","Please open the Stellar App in your Ledger Wallet":"Merci d'ouvrir l'application Stellar dans votre Ledger Wallet",Portfolio:"Portfolio",Price:"Prix",Rebalance:"Ré-équilibrer","Rebalancing...":"En cours de ré-équilibrage...",Sell:"Vend",Settings:"Paramètres",Size:"Taille",'Sorry, it takes a while (^.^)"':'Désolé, ça prends du temps (^.^)"',Table:"Tableau",to:"vers",Value:"Valeur",Website:"Site web",Welcome:"Bienvenue"}}]);
//# sourceMappingURL=index.js.map