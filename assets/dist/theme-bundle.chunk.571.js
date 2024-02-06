/*! For license information please see theme-bundle.chunk.571.js.LICENSE.txt */
(self.webpackChunkRoots=self.webpackChunkRoots||[]).push([[571],{26556:(t,r,e)=>{"use strict";t.exports=e(72031)},96619:t=>{"use strict";function r(t){if(!(this instanceof r))return new r(t);Object.assign(this,t)}t.exports=r,r.prototype.digits=16,r.prototype.cvcLength=3,r.prototype.luhn=!0,r.prototype.groupPattern=/(\d{1,4})(\d{1,4})?(\d{1,4})?(\d{1,4})?/,r.prototype.group=function(t){return(t.match(this.groupPattern)||[]).slice(1).filter(Boolean)},r.prototype.test=function(t,r){return this[r?"eagerPattern":"pattern"].test(t)}},51840:(t,r,e)=>{"use strict";const n=e(96619);t.exports=n({name:"American Express",digits:15,pattern:/^3[47]\d{13}$/,eagerPattern:/^3[47]/,groupPattern:/(\d{1,4})(\d{1,6})?(\d{1,5})?/,cvcLength:4})},35548:(t,r,e)=>{"use strict";const n=e(96619);t.exports=n({name:"Dankort",pattern:/^5019\d{12}$/,eagerPattern:/^5019/})},66412:(t,r,e)=>{"use strict";const n=e(96619);t.exports=n({name:"Diners Club",digits:[14,19],pattern:/^3(0[0-5]|[68]\d)\d{11,16}$/,eagerPattern:/^3(0|[68])/,groupPattern:/(\d{1,4})?(\d{1,6})?(\d{1,9})?/})},55460:(t,r,e)=>{"use strict";const n=e(96619);t.exports=n({name:"Discover",pattern:/^6(011(0[0-9]|[2-4]\d|74|7[7-9]|8[6-9]|9[0-9])|4[4-9]\d{3}|5\d{4})\d{10}$/,eagerPattern:/^6(011(0[0-9]|[2-4]|74|7[7-9]|8[6-9]|9[0-9])|4[4-9]|5)/})},31316:(t,r,e)=>{"use strict";const n=e(96619);t.exports=n({name:"Elo",pattern:/^(4[035]|5[0]|6[235])(6[7263]|9[90]|1[2416]|7[736]|8[9]|0[04579]|5[0])([0-9])([0-9])\d{10}$/,eagerPattern:/^(4[035]|5[0]|6[235])(6[7263]|9[90]|1[2416]|7[736]|8[9]|0[04579]|5[0])([0-9])([0-9])/,groupPattern:/(\d{1,4})(\d{1,4})?(\d{1,4})?(\d{1,4})?(\d{1,3})?/})},80928:(t,r,e)=>{"use strict";const n=e(96619);t.exports=n({name:"Forbrugsforeningen",pattern:/^600722\d{10}$/,eagerPattern:/^600/})},72031:(t,r,e)=>{"use strict";t.exports=[e(1368),e(70264),e(80928),e(35548),e(39429),e(51840),e(66412),e(55460),e(72536),e(58528),e(27020),e(31316),e(96436)]},72536:(t,r,e)=>{"use strict";const n=e(96619);t.exports=n({name:"JCB",pattern:/^35\d{14}$/,eagerPattern:/^35/})},70264:(t,r,e)=>{"use strict";const n=e(96619);t.exports=n({name:"Maestro",digits:[12,19],pattern:/^(?:5[06789]\d\d|(?!6011[0234])(?!60117[4789])(?!60118[6789])(?!60119)(?!64[456789])(?!65)6\d{3})\d{8,15}$/,eagerPattern:/^(5(018|0[23]|[68])|6[37]|60111|60115|60117([56]|7[56])|60118[0-5]|64[0-3]|66)/,groupPattern:/(\d{1,4})(\d{1,4})?(\d{1,4})?(\d{1,4})?(\d{1,3})?/})},39429:(t,r,e)=>{"use strict";const n=e(96619);t.exports=n({name:"Mastercard",pattern:/^(5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)\d{12}$/,eagerPattern:/^(2[3-7]|22[2-9]|5[1-5])/})},27020:(t,r,e)=>{"use strict";const n=e(96619);t.exports=n({name:"Troy",pattern:/^9792\d{12}$/,eagerPattern:/^9792/})},96436:(t,r,e)=>{"use strict";const n=e(96619);t.exports=n({name:"UATP",digits:15,pattern:/^1\d{14}$/,eagerPattern:/^1/,groupPattern:/(\d{1,4})(\d{1,5})?(\d{1,6})?/})},58528:(t,r,e)=>{"use strict";const n=e(96619);t.exports=n({name:"UnionPay",pattern:/^62[0-5]\d{13,16}$/,eagerPattern:/^62/,groupPattern:/(\d{1,4})(\d{1,4})?(\d{1,4})?(\d{1,4})?(\d{1,3})?/,luhn:!1})},1368:(t,r,e)=>{"use strict";const n=e(96619);t.exports=n({name:"Visa",digits:[13,19],pattern:/^4\d{12}(\d{3}|\d{6})?$/,eagerPattern:/^4/,groupPattern:/(\d{1,4})(\d{1,4})?(\d{1,4})?(\d{1,4})?(\d{1,3})?/})},87596:(t,r,e)=>{"use strict";const n=e(11436),o=e(26227);t.exports=function(t){const r=o(t);return{types:t,parse:function(t){return"string"!=typeof t?"":t.replace(/[^\d]/g,"")},format:function(t,r){const n=e(t,!0);return n?n.group(t).join(r||" "):t},type:function(t,r){const n=e(t,r);return n?n.name:void 0},luhn:n,isValid:function(t,o){return!!(o=o?r.get(o):e(t))&&(!o.luhn||n(t))&&o.test(t)}};function e(t,e){return r.find((function(r){return r.test(t,e)}))}}},24896:(t,r,e)=>{"use strict";const n=e(26227),o=/^\d{3,4}$/;t.exports=function(t){const r=n(t);return{isValid:function(t,e){return"string"==typeof t&&(!!o.test(t)&&(e?r.get(e).cvcLength===t.length:r.some((function(r){return r.cvcLength===t.length}))))}}}},20776:(t,r,e)=>{"use strict";const n=e(69556),o=e(9312),s=e(67572);t.exports={isPast:function(t,r){return Date.now()>=new Date(r,t)},month:{parse:function(t){return o(t)},isValid:n},year:{parse:s,format:function(t,r){return t=t.toString(),r?t.substr(2,4):t},isValid:function(t){return"number"==typeof t&&(t=o(t))>0},isPast:function(t){return(new Date).getFullYear()>t}}}},71339:(t,r,e)=>{"use strict";const n=e(26556),o=e(87596),s=e(24896),u=e(20776);function i(t){return{card:o(t),cvc:s(t),expiration:u}}t.exports=i(n),t.exports.withTypes=i},26227:(t,r,e)=>{"use strict";const n=e(26556);t.exports=function(t){const r=t.reduce((function(t,r){return t[r.name]=r,t}),{});return{find:t.find.bind(t),some:t.some.bind(t),get:function(t){const e=r[t];if(!e)throw new Error("No type found for name: "+t);return e}}},t.exports.defaults=n},43468:(t,r,e)=>{"use strict";var n=e(46320),o=e(9312),s=n(2);t.exports=function(t,r){var e=(r=r||new Date).getFullYear().toString().substr(0,2);return t=o(t),o(e+s(t))}},11436:t=>{"use strict";const r=[0,2,4,6,8,1,3,5,7,9];t.exports=function(t){if("string"!=typeof t)throw new TypeError("Expected string input");if(!t)return!1;let e=t.length,n=!0,o=0;for(;e;){const s=t.charCodeAt(--e)-48;if(s<0||s>9)return!1;n=!n,o+=n?r[s]:s}return o%10==0}},28960:t=>{"use strict";t.exports=Number.isFinite||function(t){return!("number"!=typeof t||t!=t||t===1/0||t===-1/0)}},23301:(t,r,e)=>{var n=e(28960);t.exports=Number.isInteger||function(t){return"number"==typeof t&&n(t)&&Math.floor(t)===t}},69556:(t,r,e)=>{"use strict";var n=e(23301);t.exports=function(t){return!("number"!=typeof t||!n(t))&&t>=1&&t<=12}},16064:t=>{t.exports=function(t,r){for(var e=-1,n=null==t?0:t.length;++e<n&&!1!==r(t[e],e,t););return t}},2471:(t,r,e)=>{var n=e(8940),o=Object.create,s=function(){function t(){}return function(r){if(!n(r))return{};if(o)return o(r);t.prototype=r;var e=new t;return t.prototype=void 0,e}}();t.exports=s},64832:t=>{t.exports=function(t,r,e,n){for(var o=t.length,s=e+(n?1:-1);n?s--:++s<o;)if(r(t[s],s,t))return s;return-1}},64596:(t,r,e)=>{var n=e(68168)();t.exports=n},80316:(t,r,e)=>{var n=e(64596),o=e(95160);t.exports=function(t,r){return t&&n(t,r,o)}},73968:t=>{t.exports=function(t){return t}},68168:t=>{t.exports=function(t){return function(r,e,n){for(var o=-1,s=Object(r),u=n(r),i=u.length;i--;){var a=u[t?i:++o];if(!1===e(s[a],a,s))break}return r}}},40100:(t,r,e)=>{var n=e(73968),o=e(54900),s=e(95160);t.exports=function(t){return function(r,e,u){var i=Object(r);if(!o(r)){var a=n(e,3);r=s(r),e=function(t){return a(i[t],t,i)}}var c=t(r,e,u);return c>-1?i[a?r[c]:c]:void 0}}},94960:t=>{t.exports=function(t,r){for(var e=-1,n=null==t?0:t.length;++e<n&&!1!==r(t[e],e,t););return t}},67120:(t,r,e)=>{var n=e(40100)(e(22988));t.exports=n},22988:(t,r,e)=>{var n=e(64832),o=e(73968),s=e(4400),u=Math.max;t.exports=function(t,r,e){var i=null==t?0:t.length;if(!i)return-1;var a=null==e?0:s(e);return a<0&&(a=u(i+a,0)),n(t,o(r,3),a)}},95160:(t,r,e)=>{var n=e(21304)(Object.keys,Object);t.exports=n},73848:t=>{t.exports=function(t,r,e,n){var o=-1,s=null==t?0:t.length;for(n&&s&&(e=t[++o]);++o<s;)e=r(e,t[o],o,t);return e}},4400:t=>{t.exports=function(t){return t}},94024:(t,r,e)=>{var n=e(16064),o=e(2471),s=e(80316),u=e(73968),i=e(30476),a=e(52488),c=e(87684),p=e(87920),f=e(8940),d=e(26700);t.exports=function(t,r,e){var g=a(t),x=g||c(t)||d(t);if(r=u(r,4),null==e){var l=t&&t.constructor;e=x?g?new l:[]:f(t)&&p(l)?o(i(t)):{}}return(x?n:s)(t,(function(t,n,o){return r(e,t,n,o)})),e}},9312:(t,r,e)=>{"use strict";var n=e(23301),o=/^-?\d+$/;t.exports=function(t){return"number"==typeof t?n(t)?t:void 0:"string"==typeof t&&o.test(t)?parseInt(t,10):void 0}},67572:(t,r,e)=>{"use strict";var n=e(9312),o=e(43468);t.exports=function(t,r,e){if(null!=(t=n(t)))return r?o(t,e):t}},46320:t=>{t.exports=function t(r,e,n){return void 0===e?function(e,n){return t(r,e,n)}:(void 0===n&&(n="0"),(r-=e.toString().length)>0?new Array(r+(/\./.test(e)?2:1)).join(n)+e:e+"")}}}]);
//# sourceMappingURL=theme-bundle.chunk.571.js.map