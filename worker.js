!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=125)}({0:function(t,e,n){(function(e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||Function("return this")()}).call(this,n(20))},12:function(t,e,n){var r=n(0),o=n(4),i=r.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},125:function(t,e,n){"use strict";n(68);var r=n(126),o=n(127);new r(o.name,o.version,"verbose").fromCache(["/","app.js","index.css","index.html","index.js","ledger.js","stellar-sdk.js","vendors~app.js","vendors~ledger.js","vendors~trezor.js","fonts/source-sans-pro.woff","fonts/source-sans-pro.woff2","fonts/roboto-slab.woff","fonts/roboto-slab.woff2","images/cosmic-link.svg","browserconfig.xml","manifest.json","favicon.ico","icons/16x16.png","icons/32x32.png","icons/192x192.png","icons/512x512.png","icons/apple-touch.png","icons/mstile.png","icons/safari.svg"]).precache().register()},126:function(t,e,n){var r=n(15),o=n(16),i=n(14),c=n(26),a=t.exports=function(){"use strict";function t(e,n,r){i(this,t),this.name=e,this.version=n,this.verbose=r,this.hostname=location.host.replace(/:.*/,""),this.enabled="localhost"!==this.hostname&&"127.0.0.1"!==this.hostname,this.root="".concat(location.protocol,"//").concat(location.host,"/"),this.startByRoot=new RegExp("^"+this.root),this.timeout=2e3,this.cacheName="".concat(e,"-").concat(n),this.files={},this.get=[]}return c(t,[{key:"development",value:function(){return this.enabled=!0,this}},{key:"log",value:function(t){this.verbose&&console.log(t)}},{key:"precache",value:function(){return this.get=Object.keys(this.files),this}},{key:"register",value:function(){var t=this;self.addEventListener("install",(function(e){var n,r,o;t.log("Installing ".concat(t.cacheName,"...")),e.waitUntil((n=t,r=t.get,o=r.map((function(t){return"".concat(t,"?version=").concat(n.version)})),caches.open(n.cacheName).then((function(t){return t.addAll(o)}))).then((function(){return self.skipWaiting()})).then((function(){return t.log("".concat(t.cacheName," installed"))})))})),self.addEventListener("activate",(function(e){var n;e.waitUntil((n=t.cacheName,caches.keys().then((function(t){return Promise.all(t.map((function(t){t!==n&&caches.delete(t)})))}))))})),self.addEventListener("fetch",(function(e){if(t.enabled&&"GET"===e.request.method&&e.request.url.match(t.startByRoot)){var n=e.request.url.replace(/(\?|#).*$/,""),r=n.replace(t.startByRoot,"");r||(r="index.html",n+="index.html");var o="?version=".concat(t.version),i=new Request("".concat(n).concat(o)),c=t.files[r];c&&s[c]?e.respondWith(s[c](t,i,r)):e.respondWith(s.fromNetwork(t,i,r))}}))}}]),t}();var s={};function u(t,e,n){var r=n.clone();caches.open(t.cacheName).then((function(t){return t.put(e,r)}))}s.fromCache=function(t,e,n){return t.log("Looking for ".concat(n," into ").concat(t.cacheName," cache...")),caches.open(t.cacheName).then((function(t){return t.match(e)}))},s.fromNetwork=function(t,e,n){return t.log("Downloading ".concat(n,"...")),new Promise((function(n,r){var o=setTimeout(r,t.timeout);return fetch(e).then((function(t){clearTimeout(o),n(t)}))}))},s.cacheOrNetwork=function(){var t=o(r.mark((function t(e,n,o){var i,c;return r.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.fromCache(e,n,o);case 2:if(!(i=t.sent)){t.next=5;break}return t.abrupt("return",i);case 5:return t.next=7,s.fromNetwork(e,n,o);case 7:return c=t.sent,u(e,n,c),t.abrupt("return",c);case 10:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}();var l=function(t){a.prototype[t]=function(e){var n=this;return e.forEach((function(e){return n.files[e]=t})),this}};for(var f in s)l(f)},127:function(t){t.exports=JSON.parse('{"name":"equilibre.io","version":"1.11.0","description":"A portfolio balancer for Stellar Decentralized Exchange","author":"MisterTicot <mister.ticot@cosmic.plus>","homepage":"https://equilibre.io","repository":"github:cosmic-plus/webapp-equilibre.io","license":"MIT","keywords":["cryptocurrency","stellar","dex","portfolio","balancer"],"scripts":{"test":"echo \\"Error: no test specified\\" && exit 1","get":"git submodule update -i --recursive","clean":"rm -rf web/*","prettier":"prettier --write --no-semi \'src/**/*.{js,json,md}\' \'*.{js,json,md}\'","eslint":"eslint --fix \'src/**/*.js\' \'*.js\'","lint":"npm run prettier && npm run eslint","set-dev":"sh setenv.sh -d","set-prod":"sh setenv.sh -p","build-i18n":"i18n-extractor all bundled src static","build-js":"webpack -p && cp -f node_modules/stellar-sdk/dist/stellar-sdk.min.js web/stellar-sdk.js","build-scss":"node-sass style/index.scss -o web -t compressed","build-css":"npm run build-scss && autoprefixer-cli web/index.css","build-static":"cp -a static/. web","build-misc":"cp -f *.md package-lock.json web","build-all":"for i in i18n js css static misc; do npm run build-$i || return; done","build":"npm run clean && npm run set-prod && npm run build-all","rebuild":"npm run get && cp -f web/package-lock.json . && npm ci && npm run build","check":"npm run rebuild && cd web && git status && [ ! \\"$(git status -z)\\" ]","watch-css":"node-sass style/index.scss -wo web","watch-js":"webpack -d --watch","watch-static":"cp -fl static/*.* web","watch":"npm run watch-static && npm run watch-css & npm run watch-js","serve":"npm run set-dev && npm run watch & cd web && live-server --https=../node_modules/live-server-https","commit-web":"cd web && git ci -am \\"$message\\"","commit-main":"git ci -am \\"$message\\"","commit-all":"[ \\"$version\\" ] && npm run commit-web && npm run commit-main","commit-release":"export message=\\"Release $version\\" && npm run commit-all","tag-web":"cd web && git tag -s \\"$version\\" -m \\"$message\\"","tag-main":"git tag -s \\"$version\\" -m \\"$message\\"","tag-all":"[ \\"$version\\" -a \\"$message\\" ] && npm run tag-web && npm run tag-main","tag-release":"export version message=\\"Release $version\\" && npm run tag-all","push-release":"cd web && git push --follow-tags && cd .. && git push --follow-tags","make-release":"npm update && npm run build && npm run commit-release","publish-release":"npm run check && npm run tag-release && npm run push-release"},"devDependencies":{"@babel/core":"^7.10.4","@babel/plugin-syntax-dynamic-import":"^7.8.3","@babel/plugin-transform-runtime":"^7.10.4","@babel/preset-env":"^7.10.4","@cosmic-plus/i18n-extractor":"^1.1.0","autoprefixer-cli":"^1.0.0","babel-eslint":"^10.1.0","babel-loader":"^8.1.0","eslint":"^5.16.0","live-server":"^1.2.1","live-server-https":"0.0.2","node-sass":"^4.14.0","prettier":"^1.19.1","raw-loader":"^1.0.0","webpack":"^4.43.0","webpack-cli":"^3.3.12"},"dependencies":{"@babel/runtime":"^7.10.4","@cosmic-plus/assets":"^1.6.0","@cosmic-plus/base":"^2.6.1","@cosmic-plus/domutils":"^2.1.0","@cosmic-plus/i18n":"^1.2.0","@cosmic-plus/jsutils":"^2.0.2","@cosmic-plus/ledger-wallet":"^2.4.0","@cosmic-plus/loopcall":"^1.4.1","@cosmic-plus/trezor-wallet":"^1.2.0","@fortawesome/fontawesome-free":"^5.13.1","core-js":"^3.6.5","cosmic-lib":"^2.10.1","highcharts":"^8.1.2"}}')},14:function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},15:function(t,e,n){t.exports=n(17)},16:function(t,e){function n(t,e,n,r,o,i,c){try{var a=t[i](c),s=a.value}catch(t){return void n(t)}a.done?e(s):Promise.resolve(s).then(r,o)}t.exports=function(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var c=t.apply(e,r);function a(t){n(c,o,i,a,s,"next",t)}function s(t){n(c,o,i,a,s,"throw",t)}a(void 0)}))}}},17:function(t,e,n){var r=function(t){"use strict";var e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",c=r.toStringTag||"@@toStringTag";function a(t,e,n,r){var o=e&&e.prototype instanceof l?e:l,i=Object.create(o.prototype),c=new j(r||[]);return i._invoke=function(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return E()}for(n.method=o,n.arg=i;;){var c=n.delegate;if(c){var a=b(c,n);if(a){if(a===u)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=s(t,e,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===u)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}(t,n,c),i}function s(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=a;var u={};function l(){}function f(){}function p(){}var h={};h[o]=function(){return this};var m=Object.getPrototypeOf,d=m&&m(m(k([])));d&&d!==e&&n.call(d,o)&&(h=d);var v=p.prototype=l.prototype=Object.create(h);function g(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function y(t,e){var r;this._invoke=function(o,i){function c(){return new e((function(r,c){!function r(o,i,c,a){var u=s(t[o],t,i);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,c,a)}),(function(t){r("throw",t,c,a)})):e.resolve(f).then((function(t){l.value=t,c(l)}),(function(t){return r("throw",t,c,a)}))}a(u.arg)}(o,i,r,c)}))}return r=r?r.then(c,c):c()}}function b(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,b(t,e),"throw"===e.method))return u;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var r=s(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,u;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,u):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,u)}function w(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(w,this),this.reset(!0)}function k(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:E}}function E(){return{value:void 0,done:!0}}return f.prototype=v.constructor=p,p.constructor=f,p[c]=f.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(v),t},t.awrap=function(t){return{__await:t}},g(y.prototype),y.prototype[i]=function(){return this},t.AsyncIterator=y,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var c=new y(a(e,n,r,o),i);return t.isGeneratorFunction(n)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},g(v),v[c]="Generator",v[o]=function(){return this},v.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=k,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return c.type="throw",c.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var a=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(a&&s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(a){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var c=i?i.completion:{};return c.type=t,c.arg=e,i?(this.method="next",this.next=i.finallyLoc,u):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),u},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),x(n),u}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;x(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:k(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),u}},t}(t.exports);try{regeneratorRuntime=r}catch(t){Function("r","regeneratorRuntime = r")(r)}},2:function(t,e,n){var r=n(4);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},20:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},22:function(t,e,n){var r=n(4);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},25:function(t,e,n){var r=n(5),o=n(3),i=n(12);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},26:function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}},3:function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},4:function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},5:function(t,e,n){var r=n(3);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},68:function(t,e,n){var r=n(5),o=n(7).f,i=Function.prototype,c=i.toString,a=/^\s*function ([^ (]*)/;r&&!("name"in i)&&o(i,"name",{configurable:!0,get:function(){try{return c.call(this).match(a)[1]}catch(t){return""}}})},7:function(t,e,n){var r=n(5),o=n(25),i=n(2),c=n(22),a=Object.defineProperty;e.f=r?a:function(t,e,n){if(i(t),e=c(e,!0),i(n),o)try{return a(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}}});
//# sourceMappingURL=worker.js.map