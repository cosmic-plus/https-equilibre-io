!function(e){function t(t){for(var n,o,i=t[0],a=t[1],c=0,u=[];c<i.length;c++)o=i[c],r[o]&&u.push(r[o][0]),r[o]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);for(s&&s(t);u.length;)u.shift()()}var n={},r={2:0};function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise(function(t,o){n=r[e]=[t,o]});t.push(n[2]=i);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=function(e){return o.p+""+({0:"app",1:"ledger",3:"vendors~app",4:"vendors~ledger"}[e]||e)+".js"}(e),a=function(t){c.onerror=c.onload=null,clearTimeout(s);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src,a=new Error("Loading chunk "+e+" failed.\n("+o+": "+i+")");a.type=o,a.request=i,n[1](a)}r[e]=void 0}};var s=setTimeout(function(){a({type:"timeout",target:c})},12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(t)},o.m=e,o.c=n,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o.oe=function(e){throw console.error(e),e};var i=window.webpackJsonp=window.webpackJsonp||[],a=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var s=a;o(o.s=20)}([function(e,t,n){"use strict";var r=t;r.delay=function(e){var t,n=!0;return function(){return n&&(n=!1,t=new Promise(function(t){return t(e())})),t}},r.timeout=function(e){return new Promise(function(t){return setTimeout(t,e)})},r.capitalize=function(e){return e.substr(0,1).toUpperCase()+e.slice(1)},r.shorter=function(e){return e.length>50?e.substr(0,5)+"..."+e.substr(-5):e},r.setHiddenProperty=function(e,t,n){Object.defineProperty(e,t,{value:n,enumerable:!1,configurable:!0})},r.deprecated=function(e,t,n){console.error("Warning: ".concat(t," is deprecated and will be removed after ").concat(e,". Please use ").concat(n," instead."))},r.useExtra=function(e){return e[o]||r.setHiddenProperty(e,o,{}),e[o]};var o="@cosmic-plus";r.isUtf8=function(e){return!e.match(/[\0-\x1F\x7F-\x9F\xAD\uD7FC-\uF8FF]/)},r.isBase64=function(e){return!!e.match(/^[0-9a-zA-Z+\/]*=*$/)},r.day=function(e){return(e?new Date(e):new Date).toISOString().replace(/T.*/,"")},r.copy=function(){return console.error("misc.copy() have been moved to html.copyString()")}},function(e,t,n){var r=t,o=n(2),i=n(0),a=o.window?o.window.document:void 0;o.isNode&&console.error("@cosmic-plus/domutils is a browser-only module"),r.addStyles=function(e){var t=r.create("style",{type:"text/css"},e);r.append(a.head,t)},r.append=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];n.forEach(function(t){return e.appendChild(r.convert(t))})},r.addClass=function(e,t){-1===e.className.split(" ").indexOf(t)&&(e.className+=" ".concat(t))},r.appendClass=function(e,t){return i.deprecated("2019-07-16","html.appendClass()","html.addClass()"),r.addClass(e,t)},r.clear=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(e){return e.innerHTML=""})},r.convert=function(e){return e instanceof Element||e instanceof HTMLDocument||e instanceof Text?e:null==e?a.createTextNode(""):e.domNode||a.createTextNode(e)},r.copyContent=function(e){if(e.selectionStart===e.selectionEnd){if(e.select)e.select();else{if(!window.getSelection)return;var t=a.createRange();t.selectNode(e),window.getSelection().removeAllRanges(),window.getSelection().addRange(t)}return a.execCommand("copy")}},r.copyString=function(e){var t=r.create("textarea",{},e);r.append(a.body,t),r.copyContent(t),r.destroy(t)},r.create=function(e,t){var n=a.createElement(e);if("string"==typeof t)switch(t.substr(0,1)){case"#":n.id=t.substr(1);break;case".":n.className=t.substr(1);break;default:throw new Error("Unhandled attribute")}else Object.assign(n,t);for(var o=arguments.length,i=new Array(o>2?o-2:0),c=2;c<o;c++)i[c-2]=arguments[c];return i.length>0&&r.append.apply(r,[n].concat(i)),n},r.destroy=function(e){try{e.parentNode&&e.parentNode.removeChild(e),e.innerHTML=""}catch(e){console.error(e)}},r.grab=function(e){return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:a).querySelector(e)},r.hide=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(e){return e.hidden=!0})},r.replace=function(e,t){var n=r.convert(t);return e.parentNode.replaceChild(n,e),n},r.rewrite=function(e){r.clear(e);for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];r.append.apply(r,[e].concat(n))},r.show=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(e){return e.hidden=!1})}},function(module,exports,__webpack_require__){(function(process,global){var env=exports;if(env.isBrowser="undefined"!=typeof window&&void 0!==window.document,env.isNode=void 0!==process&&process.versions&&process.versions.node,env.isEmbedded=env.isBrowser&&window.self!==window.top,env.window=env.isBrowser&&window,env.global=env.isNode&&global,env.nodeRequire=function(){},env.isNode){var stealth_require=eval("require");env.nodeRequire=function(e){return stealth_require(e)}}}).call(this,__webpack_require__(22),__webpack_require__(14))},function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t,n){var r,o=n(2);if(o.isBrowser){var i=n(23);e.exports=r=new i}else{var a=o.nodeRequire("y18n");e.exports=r=a({updateFiles:!1})}o.isBrowser&&(r.__t=function(e){var t=document.createElement("i18n");return t.textContent=r.__(e),t}),r.systemLocale=function(){if(o.isBrowser)return navigator.languages&&navigator.languages[0]?navigator.languages[0]:navigator.language||navigator.browserLanguage;var e=process.env,t=e.LC_ALL||e.LC_MESSAGES||e.LANG||e.LANGUAGE,n=t&&t.replace(/[.:].*/,"").replace("_","-");return n||void 0},r._setLocale=r.setLocale,r.setLocale=function(e){r._setLocale(e),"undefined"!=typeof document&&r.translateDom()},r.useSystemLocale=function(){r.setLocale(r.systemLocale().replace(/-.*/,""))},r.addTranslation=function(e,t){var n=r.getLocale();r.setLocale(e),r.updateLocale(t),r.setLocale(n)},o.isBrowser&&(r.translateDom=function(){(arguments.length>0&&void 0!==arguments[0]?arguments[0]:document).querySelectorAll("i18n").forEach(function(e){e.textContent=r.__(e.textContent)})})},function(e,t,n){e.exports=n(21)},function(e,t){function n(e,t,n,r,o,i,a){try{var c=e[i](a),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,o)}e.exports=function(e){return function(){var t=this,r=arguments;return new Promise(function(o,i){var a=e.apply(t,r);function c(e){n(a,o,i,c,s,"next",e)}function s(e){n(a,o,i,c,s,"throw",e)}c(void 0)})}}},function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},function(e,t,n){var r=n(15),o=n(11);e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?o(e):t}},function(e,t,n){var r=n(16);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},function(e,t,n){var r=n(3),o=n(8),i=n(7),a=n(9),c=n(0).setHiddenProperty,s=n(19),u={},l=".trapped";function f(e){if(!e.hasOwnProperty(l)){var t=e[l];c(e,l,{}),t&&Object.assign(e[l],t)}}u.project=function(e,t,n){var r=this;p(this,e,function(e){r.link(e,t,e,n)})},u.link=function(e,t){var n=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e,o=arguments.length>3?arguments[3]:void 0,i=(arguments.length>4&&void 0!==arguments[4]?arguments[4]:{}).init,a=this!==t&&t,c=o?function(){return t[r]=o(n[e])}:function(){return t[r]=n[e]};this.trap(e,c,{crossReference:a,init:i})},u.define=function(e,t,n){var r=function(){this[e]=n.call(this)};this.trap(t,r),this.listen("outdate:".concat(e),r),this.trigger&&r()},u.compute=function(e){var t=this;p(this,e,function(e){return t.trigger("outdate:".concat(e))})},u.watch=function(e,t,n){var r=(arguments.length>3&&void 0!==arguments[3]?arguments[3]:{}).init;e.trap(t,n,{init:r,crossReference:this})},u.trap=function(e,t){var n=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};void 0===r.init&&(r.init=!0),p(this,e,function(e){!function(e,t){e.hasOwnProperty("prototype")&&(e=e.prototype);if(e[l]&&e[l].hasOwnProperty(t))return;f(e),e[l][t]=e[t],Object.defineProperty(e,t,{get:function(){return this[l][t]},set:function(e){!function(e,t,n){f(e);var r=e[l][t];if(n!==r){e[l][t]=n;var o={object:e,key:t,value:n,old:r};e.trigger("change:".concat(t),o),e.trigger("change",e)}}(this,t,e)},configurable:!0,enumerable:!0})}(n,e),t&&(n.listen("change:".concat(e),t,r.crossReference),!n.hasOwnProperty("prototype")&&r.init&&t.call(n,{object:n,key:e,value:n[e]}))})},u.untrap=function(e){var t=this;p(this,e,function(e){return t.forget("change:".concat(e))})},u.set=function(e,t){var n=this;p(this,e,function(e){n[l]&&delete n[l][e],n[e]=t})};var h=e.exports=function(e){"use strict";function t(){return r(this,t),o(this,i(t).apply(this,arguments))}return a(t,s),t}();function p(e,t,n){"*"===t&&(t=Object.keys(e)),t instanceof Array?t.forEach(function(e){return n(e)}):"string"==typeof t&&n(t)}h.constructorMethods=Object.assign({define:u.define,trap:u.trap},s.constructorMethods),h.instanceMethods=Object.assign(u,s.instanceMethods),h.extend(h),h.trapped=l},function(e,t,n){var r=n(12),o=n(4),i=e.exports=new r;i.currency=localStorage.currency||"USD",i.project("currency",localStorage),i.language=localStorage.language||o.systemLocale().replace(/-.*/,"")||"us",i.project("language",localStorage),i.portfolio=void 0,i.balanceTargetDeviation=.2,i.anchorsRebalanceRiskMax=.025,i.minOfferValue=1,i.maxSpread=.05,i.spreadTightening=.01,i.skipMarginalOffers=.1,i.tabs=null},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(t){return"function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?e.exports=r=function(e){return n(e)}:e.exports=r=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":n(e)},r(t)}e.exports=r},function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},function(e,t,n){var r=t,o=n(2),i=n(1),a=o.window?o.window.document:void 0;Object.defineProperty(r,"ingest",{value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a;e.id&&(r[e.id]=e);var t=e.querySelectorAll("[id]");for(var n in t){var o=t[n];o.id&&(r[o.id]=o)}},enumerable:!1,writable:!1}),r.html=i.grab("html"),r.head=i.grab("head"),r.body=i.grab("body"),r.header=i.grab("header"),r.nav=i.grab("nav"),r.main=i.grab("main"),r.footer=i.grab("footer"),r.ingest()},function(e,t,n){var r=n(5),o=n(6),i=t,a=n(1);i.css=function(){var e=o(r.mark(function e(t){return r.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(e,n){var r=a.create("link",{rel:"stylesheet",type:"text/css",href:t,onload:e,onerror:n});a.append(document.head,r)}));case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),i.js=function(){var e=o(r.mark(function e(t){return r.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(e,n){var r=a.create("script",{src:t,onload:e,onerror:n});a.append(document.head,r)}));case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},function(e,t,n){var r=n(3),o=n(10),i=n(0).setHiddenProperty,a={},c=".listeners";function s(e,t,n){if(t)for(var r in t)try{t[r].call(e,n)}catch(e){console.error(e)}}a.listen=function(e,t,n){var r=this;if(this.hasOwnProperty(c)||i(this,c,{}),this[c][e]||(this[c][e]=[]),this[c][e].push(t),n&&n.listen){var o=function(){n.forget("destroy",a)},a=function(){r.forget(e,t),r.forget("destroy",o)};this.listen("destroy",o),n.listen("destroy",a)}},a.forget=function(e,t){this.hasOwnProperty(c)&&(e?t?this[c][e]&&(this[c][e]=this[c][e].filter(function(e){return e!==t})):delete this[c][e]:this[c]={})},a.trigger=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this;this.constructor[c]&&s(this,this.constructor[c][e],t),this.hasOwnProperty(c)&&s(this,this[c][e],t)},a.destroy=function(){var e=this;this.trigger("destroy"),Object.getOwnPropertyNames(this).forEach(function(t){return delete e[t]})};var u=e.exports=function(){"use strict";function e(){r(this,e)}return o(e,null,[{key:"extend",value:function(e){e.hasOwnProperty("prototype")?(Object.assign(e,this.constructorMethods),this.extend(e.prototype)):Object.assign(e,this.instanceMethods)}}]),e}();u.constructorMethods={listen:a.listen,forget:a.forget},u.instanceMethods=a,u.extend(u)},function(e,t,n){var r=n(5),o=n(6),i=n(17),a=n(1),c=n(4),s=n(18),u=n(13);function l(){return(l=o(r.mark(function e(){return r.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return navigator.serviceWorker&&navigator.serviceWorker.register("worker.js"),c.addTranslation("fr",n(25)),c.setLocale(u.language),a.show(i.loading),e.next=6,s.js("stellar-sdk.js");case 6:return e.next=8,Promise.all([n.e(3),n.e(0)]).then(n.t.bind(null,26,7));case 8:a.hide(i.loading);case 9:case"end":return e.stop()}},e)}))).apply(this,arguments)}!function(){l.apply(this,arguments)}()},function(e,t,n){var r=function(e){"use strict";var t,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(e,t,n,r){var o=t&&t.prototype instanceof g?t:g,i=Object.create(o.prototype),a=new E(r||[]);return i._invoke=function(e,t,n){var r=l;return function(o,i){if(r===h)throw new Error("Generator is already running");if(r===p){if("throw"===o)throw i;return P()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=S(a,n);if(c){if(c===d)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===l)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var s=u(e,t,n);if("normal"===s.type){if(r=n.done?p:f,s.arg===d)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=p,n.method="throw",n.arg=s.arg)}}}(e,n,a),i}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=s;var l="suspendedStart",f="suspendedYield",h="executing",p="completed",d={};function g(){}function y(){}function v(){}var m={};m[i]=function(){return this};var b=Object.getPrototypeOf,w=b&&b(b(j([])));w&&w!==n&&r.call(w,i)&&(m=w);var _=v.prototype=g.prototype=Object.create(m);function x(e){["next","throw","return"].forEach(function(t){e[t]=function(e){return this._invoke(t,e)}})}function L(e){var t;this._invoke=function(n,o){function i(){return new Promise(function(t,i){!function t(n,o,i,a){var c=u(e[n],e,o);if("throw"!==c.type){var s=c.arg,l=s.value;return l&&"object"==typeof l&&r.call(l,"__await")?Promise.resolve(l.__await).then(function(e){t("next",e,i,a)},function(e){t("throw",e,i,a)}):Promise.resolve(l).then(function(e){s.value=e,i(s)},function(e){return t("throw",e,i,a)})}a(c.arg)}(n,o,t,i)})}return t=t?t.then(i,i):i()}}function S(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,S(e,n),"throw"===n.method))return d;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=u(r,e.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,d;var i=o.arg;return i?i.done?(n[e.resultName]=i.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,d):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,d)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function k(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function E(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function j(e){if(e){var n=e[i];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function n(){for(;++o<e.length;)if(r.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return a.next=a}}return{next:P}}function P(){return{value:t,done:!0}}return y.prototype=_.constructor=v,v.constructor=y,v[c]=y.displayName="GeneratorFunction",e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,c in e||(e[c]="GeneratorFunction")),e.prototype=Object.create(_),e},e.awrap=function(e){return{__await:e}},x(L.prototype),L.prototype[a]=function(){return this},e.AsyncIterator=L,e.async=function(t,n,r,o){var i=new L(s(t,n,r,o));return e.isGeneratorFunction(n)?i:i.next().then(function(e){return e.done?e.value:i.next()})},x(_),_[c]="Generator",_[i]=function(){return this},_.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=j,E.prototype={constructor:E,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(k),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function o(r,o){return c.type="throw",c.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),k(n),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;k(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:j(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),d}},e}(e.exports);try{regeneratorRuntime=r}catch(e){Function("r","regeneratorRuntime = r")(r)}},function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function c(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var s,u=[],l=!1,f=-1;function h(){l&&s&&(l=!1,s.length?u=s.concat(u):f=-1,u.length&&p())}function p(){if(!l){var e=c(h);l=!0;for(var t=u.length;t;){for(s=u,u=[];++f<t;)s&&s[f].run();f=-1,t=u.length}s=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function d(e,t){this.fun=e,this.array=t}function g(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new d(e,t)),1!==u.length||l||c(p)},d.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=g,o.addListener=g,o.once=g,o.off=g,o.removeListener=g,o.removeAllListeners=g,o.emit=g,o.prependListener=g,o.prependOnceListener=g,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t,n){var r=n(24).vsprintf,o=function(){};function i(e){e=e||{},this._writeLocalUpdates=!!e.writeLocalUpdates,this._locale=e.locale||"en",this._fallbackToLanguage=!1!==e.fallbackToLanguage,this._localStorage=e.localStorage||window.localStorage,this._cache={};var t=e.sources||{};if(Object.keys(t).forEach(function(e){this._cache[e]={},Object.keys(t[e]).forEach(function(n){this._cache[e][n]=t[e][n]},this)},this),this._writeLocalUpdates){var n,r,o=!1;Object.keys(this._cache).forEach(function(e){r=this._cache[e],o=!1;try{n=JSON.parse(this._localStorage["y18n-"+e]),o=Object.keys(n).every(function(e){return e in r})}catch(e){n={},o=!0}o?delete this._localStorage["y18n-"+e]:(Object.keys(n).forEach(function(e){e in r||(r[e]=n[e])}),this._localStorage["y18n-"+e]=JSON.stringify(r,null,"\t"),this._cache[e]=r)},this)}this.__=this.__.bind(this),this.__n=this.__n.bind(this),this.setLocale=this.setLocale.bind(this),this.getLocale=this.getLocale.bind(this),this.updateLocale=this.updateLocale.bind(this),this.getUpdates=this.getUpdates.bind(this),this.clearUpdates=this.clearUpdates.bind(this)}i.prototype._writeLocal=function(e,t){this._localStorage["y18n-"+this._resolveLocaleKey(e)]=JSON.stringify(this._cache[e],null,"\t"),setTimeout(t,1)},i.prototype._resolveLocaleKey=function(e){if(this._fallbackToLanguage&&~e.lastIndexOf("_")){var t=e.split("_")[0];if(this._cache[t])return t}return e},i.prototype._initLocale=function(){const e=this._resolveLocaleKey(this._locale);e!==this._locale&&(this._cache[this._locale]=this._cache[e]),this._cache[this._locale]=this._cache[this._locale]||{}},i.prototype.__=function(){var e=Array.prototype.slice.call(arguments),t=e.shift(),n=o;return"function"==typeof e[e.length-1]&&(n=e.pop()),n=n||o,this._cache[this._locale]||this._initLocale(),!this._cache[this._locale][t]&&this._writeLocalUpdates?(this._cache[this._locale][t]=t,this._writeLocal(this._locale,n)):n(),r(this._cache[this._locale][t]||t,e)},i.prototype.__n=function(){var e=Array.prototype.slice.call(arguments),t=e.shift(),n=e.shift(),i=e.shift(),a=o;"function"==typeof e[e.length-1]&&(a=e.pop()),this._cache[this._locale]||this._initLocale();var c=1===i?t:n;this._cache[this._locale][t]&&(c=this._cache[this._locale][t][1===i?"one":"other"]),!this._cache[this._locale][t]&&this._writeLocalUpdates?(this._cache[this._locale][t]={one:t,other:n},this._writeLocal(this._locale,a)):a();var s=[];return~c.indexOf("%d")&&s.push(i),r(c,s.concat(e))},i.prototype.setLocale=function(e){this._locale=e},i.prototype.getLocale=function(){return this._locale},i.prototype.updateLocale=function(e){for(var t in this._cache[this._locale]||this._initLocale(),e)this._cache[this._locale][t]=e[t]},i.prototype.getUpdates=function(e){return e=e||this._locale,this._localStorage["y18n-"+this._resolveLocaleKey(e)]},i.prototype.clearUpdates=function(e){e=e||this._locale,delete this._localStorage["y18n-"+this._resolveLocaleKey(e)]},e.exports=i},function(e,t,n){var r;!function(){"use strict";var o={not_string:/[^s]/,not_bool:/[^t]/,not_type:/[^T]/,not_primitive:/[^v]/,number:/[diefg]/,numeric_arg:/[bcdiefguxX]/,json:/[j]/,not_json:/[^j]/,text:/^[^\x25]+/,modulo:/^\x25{2}/,placeholder:/^\x25(?:([1-9]\d*)\$|\(([^)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijostTuvxX])/,key:/^([a-z_][a-z_\d]*)/i,key_access:/^\.([a-z_][a-z_\d]*)/i,index_access:/^\[(\d+)\]/,sign:/^[+-]/};function i(e){return function(e,t){var n,r,a,c,s,u,l,f,h,p=1,d=e.length,g="";for(r=0;r<d;r++)if("string"==typeof e[r])g+=e[r];else if("object"==typeof e[r]){if((c=e[r]).keys)for(n=t[p],a=0;a<c.keys.length;a++){if(null==n)throw new Error(i('[sprintf] Cannot access property "%s" of undefined value "%s"',c.keys[a],c.keys[a-1]));n=n[c.keys[a]]}else n=c.param_no?t[c.param_no]:t[p++];if(o.not_type.test(c.type)&&o.not_primitive.test(c.type)&&n instanceof Function&&(n=n()),o.numeric_arg.test(c.type)&&"number"!=typeof n&&isNaN(n))throw new TypeError(i("[sprintf] expecting number but found %T",n));switch(o.number.test(c.type)&&(f=n>=0),c.type){case"b":n=parseInt(n,10).toString(2);break;case"c":n=String.fromCharCode(parseInt(n,10));break;case"d":case"i":n=parseInt(n,10);break;case"j":n=JSON.stringify(n,null,c.width?parseInt(c.width):0);break;case"e":n=c.precision?parseFloat(n).toExponential(c.precision):parseFloat(n).toExponential();break;case"f":n=c.precision?parseFloat(n).toFixed(c.precision):parseFloat(n);break;case"g":n=c.precision?String(Number(n.toPrecision(c.precision))):parseFloat(n);break;case"o":n=(parseInt(n,10)>>>0).toString(8);break;case"s":n=String(n),n=c.precision?n.substring(0,c.precision):n;break;case"t":n=String(!!n),n=c.precision?n.substring(0,c.precision):n;break;case"T":n=Object.prototype.toString.call(n).slice(8,-1).toLowerCase(),n=c.precision?n.substring(0,c.precision):n;break;case"u":n=parseInt(n,10)>>>0;break;case"v":n=n.valueOf(),n=c.precision?n.substring(0,c.precision):n;break;case"x":n=(parseInt(n,10)>>>0).toString(16);break;case"X":n=(parseInt(n,10)>>>0).toString(16).toUpperCase()}o.json.test(c.type)?g+=n:(!o.number.test(c.type)||f&&!c.sign?h="":(h=f?"+":"-",n=n.toString().replace(o.sign,"")),u=c.pad_char?"0"===c.pad_char?"0":c.pad_char.charAt(1):" ",l=c.width-(h+n).length,s=c.width&&l>0?u.repeat(l):"",g+=c.align?h+n+s:"0"===u?h+s+n:s+h+n)}return g}(function(e){if(c[e])return c[e];var t,n=e,r=[],i=0;for(;n;){if(null!==(t=o.text.exec(n)))r.push(t[0]);else if(null!==(t=o.modulo.exec(n)))r.push("%");else{if(null===(t=o.placeholder.exec(n)))throw new SyntaxError("[sprintf] unexpected placeholder");if(t[2]){i|=1;var a=[],s=t[2],u=[];if(null===(u=o.key.exec(s)))throw new SyntaxError("[sprintf] failed to parse named argument key");for(a.push(u[1]);""!==(s=s.substring(u[0].length));)if(null!==(u=o.key_access.exec(s)))a.push(u[1]);else{if(null===(u=o.index_access.exec(s)))throw new SyntaxError("[sprintf] failed to parse named argument key");a.push(u[1])}t[2]=a}else i|=2;if(3===i)throw new Error("[sprintf] mixing positional and named placeholders is not (yet) supported");r.push({placeholder:t[0],param_no:t[1],keys:t[2],sign:t[3],pad_char:t[4],align:t[5],width:t[6],precision:t[7],type:t[8]})}n=n.substring(t[0].length)}return c[e]=r}(e),arguments)}function a(e,t){return i.apply(null,[e].concat(t||[]))}var c=Object.create(null);t.sprintf=i,t.vsprintf=a,"undefined"!=typeof window&&(window.sprintf=i,window.vsprintf=a,void 0===(r=function(){return{sprintf:i,vsprintf:a}}.call(t,n,t,e))||(e.exports=r))}()},function(e){e.exports={"A Cosmic.Plus Software":"Un logiciel Cosmic.Plus",About:"À propos",Activity:"Activité","Add Asset":"Ajouter un actif",Agregated:"Agrégé","All orders are passed against Stellar Lumens (XLM).":"Tous les ordres sont passé contre du Stellar Lumen (XLM).","Almost there":"On y est presque",Amount:"Quantité",Anchor:"Ancre","Anchor prices are from Stellar DEX":"Les prix des ancres viennent de l'échange décentralisé Stellar",Asset:"Actif",at:"à",Buy:"Achète","Can't connect to the Stellar blockchain":"Pas de connexion avec la blockchain Stellar",Cancel:"Annuler","Cancel All":"Tout annuler",Close:"Fermer","Connecting to your account...":"Connexion à votre compte...",Currency:"Devise",Date:"Date",Demo:"Demo",Direction:"Direction",Divergence:"Divergence","Donation to Equilibre.io":"Donation à Equilibre.io","Each contribution is a pleasant surprise for me. :)":"",Email:"Email","Empty account":"Compte vide","Enter an amount (in Lumens)":"Entrez un montant (en Lumens)","Enter with your Stellar address:":"Entrez avec votre addresse Stellar","Equilibre.io runs on donation.":"Equilibre.io est financé par donation.","Fetching market data":"Obtention des données de marché","Fetching orderbook...":"Chargement du carnet d'ordres...","For your comfort, prices are displayed in their %%globalCurrency equivalent.":"Pour votre confort, les prix sont affichés en équivalent %%globalCurrency.","General Settings":"Paramètres généraux","Global prices are from %%coingecko when available.":"Les prix globaux viennent de %%coingecko lorsque cela est possible.",Goal:"Objectif",Graph:"Graphique","However, those converted values will change according to XLM price movement.":"Cependant, ces valeurs converties changent avec le cours du Lumen.","I'm running, I'm running":"Chaud devant, chaud",Ignore:"Ignorer","Invalid federated address: shared account.":"Adresse fédérée invalide: compte partagé.",Language:"Langue",License:"Licence",Loading:"Chargement","Loading...":"Chargement...",Login:"Connexion","Login with Ledger Wallet":"Connexion avec un Legder Wallet",Logout:"Déconnexion",Name:"Nom","Not a valid amount":"Montant invalide","Open Orders":"Ordres ouverts",Operation:"Opération",Percentage:"Pourcentage","Please enter an address.":"Veuillez entrer une addresse.","Please open the Stellar App in your Ledger Wallet":"Merci d'ouvrir l'application Stellar dans votre Ledger Wallet",Portfolio:"Portfolio",Price:"Prix",Rebalance:"Ré-équilibrer","Rebalance setup is over portfolio value by":"Votre configuration est au-dessus de la valeur de votre portfolio de","Rebalance setup is under portfolio value by":"Votre configuration est en-dessous de la valeur de votre portfolio de","Rebalancing...":"En cours de ré-équilibrage...",Save:"Enregistrer",Sell:"Vend",Settings:"Paramètres",Size:"Taille",'Sorry, it takes a while (^.^)"':'Désolé, ça prends du temps (^.^)"',Table:"Tableau",to:"vers",Value:"Valeur",Website:"Site web",Weight:"Poid",Welcome:"Bienvenue"}}]);
//# sourceMappingURL=index.js.map