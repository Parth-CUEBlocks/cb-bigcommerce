"use strict";(self.webpackChunkRoots=self.webpackChunkRoots||[]).push([[56],{90056:(t,e,o)=>{o.r(e),o.d(e,{default:()=>u});var r=o(90064),n=o(41584),a=o.n(n);function c(t,e){return c=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},c(t,e)}var u=function(t){var e,o;function r(){return t.apply(this,arguments)||this}return o=t,(e=r).prototype=Object.create(o.prototype),e.prototype.constructor=e,c(e,o),r.prototype.onReady=function(){a()(".page-content-subcategories .image-wrap:not(.image-placeholder)").length>0&&a()(".page-content-subcategories ul").addClass("subcategory-grid")},r}(r.c)},90064:(t,e,o)=>{o.d(e,{c:()=>s});var r=o(47452),n=o(23552),a=o(94776),c=o(41584);function u(t,e){return u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},u(t,e)}var s=function(t){var e,o;function r(e){var o;return o=t.call(this,e)||this,window.addEventListener("beforeunload",(function(){"sort"===document.activeElement.id&&window.localStorage.setItem("sortByStatus","selected")})),o}o=t,(e=r).prototype=Object.create(o.prototype),e.prototype.constructor=e,u(e,o);var s=r.prototype;return s.arrangeFocusOnSortBy=function(){var t=c('[data-sort-by="product"] #sort');window.localStorage.getItem("sortByStatus")&&(t.focus(),window.localStorage.removeItem("sortByStatus"))},s.onSortBySubmit=function(t,e){var o=a.parse(window.location.href,!0),r=c(e).serialize().split("=");o.query[r[0]]=r[1],delete o.query.page,t.preventDefault(),window.location=a.format({pathname:o.pathname,search:n.c.buildQueryString(o.query)})},r}(r.c)}}]);
//# sourceMappingURL=theme-bundle.chunk.56.js.map