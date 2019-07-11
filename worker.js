!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,r){"use strict";var n=r(1),o=r(7);new n(o.name,o.version,"verbose").fromCache(["/","app.js","index.css","index.html","index.js","ledger.js","stellar-sdk.js","vendors~app.js","vendors~ledger.js","fonts/SourceSansPro-Regular.ttf","fonts/RobotoSlab-Regular.ttf","images/cosmic-link.svg","browserconfig.xml","manifest.json","favicon.ico","icons/16x16.png","icons/32x32.png","icons/192x192.png","icons/512x512.png","icons/apple-touch.png","icons/mstile.png","icons/safari.svg"]).precache().register()},function(t,e,r){var n=r(2),o=r(4),i=r(5),c=r(6),a=2e3,s=t.exports=function(){"use strict";function t(e,r,n){i(this,t),this.name=e,this.version=r,this.verbose=n,this.hostname=location.host.replace(/:.*/,""),this.enabled="localhost"!==this.hostname&&"127.0.0.1"!==this.hostname,this.root="".concat(location.protocol,"//").concat(location.host,"/"),this.startByRoot=new RegExp("^"+this.root),this.timeout=a,this.cacheName="".concat(e,"-").concat(r),this.files={},this.get=[]}return c(t,[{key:"log",value:function(t){this.verbose&&console.log(t)}},{key:"precache",value:function(){return this.get=Object.keys(this.files),this}},{key:"register",value:function(){var t=this;self.addEventListener("install",function(e){var r,n;t.log("Installing ".concat(t.cacheName,"...")),e.waitUntil((r=t,n=t.get,caches.open(r.cacheName).then(function(t){return t.addAll(n)})).then(function(){return self.skipWaiting()}).then(function(){return t.log("".concat(t.cacheName," installed"))}))}),self.addEventListener("activate",function(e){var r;e.waitUntil((r=t.cacheName,caches.keys().then(function(t){return Promise.all(t.map(function(t){t!==r&&caches.delete(t)}))})))}),self.addEventListener("fetch",function(e){if(t.enabled&&"GET"===e.request.method&&e.request.url.match(t.startByRoot)){var r=new Request(e.request.url.replace(/\?.*$/,"")),n=r.url.replace(t.startByRoot,"")||"index.html",o=t.files[n];o&&u[o]?e.respondWith(u[o](t,r,n)):e.respondWith(u.fromNetwork(t,r,n))}})}}]),t}();var u={};function l(t,e,r){var n=r.clone();caches.open(t.cacheName).then(function(t){return t.put(e,n)})}u.fromCache=function(t,e,r){return t.log("Looking for ".concat(r," into ").concat(t.cacheName," cache...")),caches.open(t.cacheName).then(function(t){return t.match(e)})},u.fromNetwork=function(t,e,r){return t.log("Downloading ".concat(r,"...")),new Promise(function(r,n){var o=setTimeout(n,t.timeout);return fetch(e).then(function(t){clearTimeout(o),r(t)})})},u.cacheOrNetwork=function(){var t=o(n.mark(function t(e,r,o){var i,c;return n.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.fromCache(e,r,o);case 2:if(!(i=t.sent)){t.next=5;break}return t.abrupt("return",i);case 5:return t.next=7,u.fromNetwork(e,r,o);case 7:return c=t.sent,l(e,r,c),t.abrupt("return",c);case 10:case"end":return t.stop()}},t)}));return function(e,r,n){return t.apply(this,arguments)}}();var f=function(t){s.prototype[t]=function(e){var r=this;return e.forEach(function(e){return r.files[e]=t}),this}};for(var h in u)f(h)},function(t,e,r){t.exports=r(3)},function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",a=o.toStringTag||"@@toStringTag";function s(t,e,r,n){var o=e&&e.prototype instanceof m?e:m,i=Object.create(o.prototype),c=new N(n||[]);return i._invoke=function(t,e,r){var n=l;return function(o,i){if(n===h)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw i;return P()}for(r.method=o,r.arg=i;;){var c=r.delegate;if(c){var a=E(c,r);if(a){if(a===d)continue;return a}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var s=u(t,e,r);if("normal"===s.type){if(n=r.done?p:f,s.arg===d)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=p,r.method="throw",r.arg=s.arg)}}}(t,r,c),i}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var l="suspendedStart",f="suspendedYield",h="executing",p="completed",d={};function m(){}function v(){}function y(){}var g={};g[i]=function(){return this};var b=Object.getPrototypeOf,w=b&&b(b(_([])));w&&w!==r&&n.call(w,i)&&(g=w);var x=y.prototype=m.prototype=Object.create(g);function j(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function k(t){var e;this._invoke=function(r,o){function i(){return new Promise(function(e,i){!function e(r,o,i,c){var a=u(t[r],t,o);if("throw"!==a.type){var s=a.arg,l=s.value;return l&&"object"==typeof l&&n.call(l,"__await")?Promise.resolve(l.__await).then(function(t){e("next",t,i,c)},function(t){e("throw",t,i,c)}):Promise.resolve(l).then(function(t){s.value=t,i(s)},function(t){return e("throw",t,i,c)})}c(a.arg)}(r,o,e,i)})}return e=e?e.then(i,i):i()}}function E(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,E(t,r),"throw"===r.method))return d;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=u(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,d;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,d):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function _(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,c=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return c.next=c}}return{next:P}}function P(){return{value:e,done:!0}}return v.prototype=x.constructor=y,y.constructor=v,y[a]=v.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,a in t||(t[a]="GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},j(k.prototype),k.prototype[c]=function(){return this},t.AsyncIterator=k,t.async=function(e,r,n,o){var i=new k(s(e,r,n,o));return t.isGeneratorFunction(r)?i:i.next().then(function(t){return t.done?t.value:i.next()})},j(x),x[a]="Generator",x[i]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=_,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(O),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return a.type="throw",a.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var c=this.tryEntries[i],a=c.completion;if("root"===c.tryLoc)return o("end");if(c.tryLoc<=this.prev){var s=n.call(c,"catchLoc"),u=n.call(c,"finallyLoc");if(s&&u){if(this.prev<c.catchLoc)return o(c.catchLoc,!0);if(this.prev<c.finallyLoc)return o(c.finallyLoc)}else if(s){if(this.prev<c.catchLoc)return o(c.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return o(c.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var c=i?i.completion:{};return c.type=t,c.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:_(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),d}},t}(t.exports);try{regeneratorRuntime=n}catch(t){Function("r","regeneratorRuntime = r")(n)}},function(t,e){function r(t,e,r,n,o,i,c){try{var a=t[i](c),s=a.value}catch(t){return void r(t)}a.done?e(s):Promise.resolve(s).then(n,o)}t.exports=function(t){return function(){var e=this,n=arguments;return new Promise(function(o,i){var c=t.apply(e,n);function a(t){r(c,o,i,a,s,"next",t)}function s(t){r(c,o,i,a,s,"throw",t)}a(void 0)})}}},function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e){function r(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}t.exports=function(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}},function(t){t.exports=JSON.parse('{"name":"equilibre.io","version":"1.0.1","description":"A portfolio balancer for Stellar Decentralized Exchange","author":"MisterTicot","repository":"github:cosmic-plus/webapp-equilibre-io","license":"MIT","keywords":["cryptocurrency","stellar","dex","portfolio","balancer"],"scripts":{"test":"echo \\"Error: no test specified\\" && exit 1","get":"git submodule update -i --recursive","clean":"rm -rf web/*","prettier":"prettier --write --no-semi \'src/**/*.js\' \'src/**/*.json\' \'*.js\' \'*.json\' \'*.md\'","eslint":"eslint --fix \'src/**/*.js\' \'*.js\'","lint":"npm run prettier && npm run eslint","build-i18n":"i18n-extractor all bundled src static","build-js":"webpack -p && cp -f node_modules/stellar-sdk/dist/stellar-sdk.min.js web/stellar-sdk.js","build-scss":"node-sass style/index.scss -o web -t compressed","build-css":"npm run build-scss && autoprefixer-cli web/index.css","build-static":"cp -a static/* web","build-misc":"cp -f AUTHORS LICENSE README.md CHANGELOG.md package-lock.json web","build":"npm run clean && for i in i18n js css static misc; do npm run build-$i || return; done","rebuild":"npm run get && cp -f web/package-lock.json . && npm ci && npm run build","check":"npm run rebuild && cd web && git status","watch-css":"node-sass style/index.scss -wo web","watch-js":"webpack -d --watch","watch-static":"cp -fl static/*.* web","watch":"npm run watch-static && npm run watch-css & npm run watch-js","serve":"npm run watch & cd web && live-server --https=../node_modules/live-server-https --no-browser"},"devDependencies":{"@babel/core":"^7.5.4","@babel/plugin-syntax-dynamic-import":"^7.2.0","@babel/plugin-transform-runtime":"^7.5.0","@babel/preset-env":"^7.5.4","@cosmic-plus/i18n-extractor":"^1.1.0","autoprefixer-cli":"^1.0.0","babel-eslint":"^10.0.2","babel-loader":"^8.0.6","eslint":"^5.16.0","live-server":"^1.2.1","live-server-https":"0.0.2","node-sass":"^4.12.0","prettier":"^1.18.2","raw-loader":"^1.0.0","webpack":"^4.35.3","webpack-cli":"^3.3.5"},"dependencies":{"@babel/runtime":"^7.5.4","@cosmic-plus/base":"^2.0.3","@cosmic-plus/domutils":"^2.0.2","@cosmic-plus/i18n":"^1.2.0","@cosmic-plus/jsutils":"^2.0.2","@cosmic-plus/ledger-wallet":"^0.3.3","@cosmic-plus/loopcall":"^1.1.0","@fortawesome/fontawesome-free":"^5.9.0","cosmic-lib":"^1.5.1","highcharts":"^7.1.2","normalize.css":"^8.0.1"}}')}]);
//# sourceMappingURL=worker.js.map