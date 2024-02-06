(self.webpackChunkRoots=self.webpackChunkRoots||[]).push([[976],{18976:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>f});var r=a(47452),i=a(7056),n=a(51380),o=a(22592),s=a(37740),l=a(92256),d=a(60136),u=a(41584);function c(t,e){return c=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},c(t,e)}var f=function(t){var e,a;function r(e){var a;return(a=t.call(this,e)||this).validationDictionary=(0,d.Y)(e),a.formCreateSelector="form[data-create-account-form]",a.recaptcha=u(".g-recaptcha iframe[src]"),a}a=t,(e=r).prototype=Object.create(a.prototype),e.prototype.constructor=e,c(e,a);var f=r.prototype;return f.registerLoginValidation=function(t){var e=this,a=s.c;this.loginValidator=(0,n.c)({submit:'.login-form input[type="submit"]',tap:l.I3}),this.loginValidator.add([{selector:'.login-form input[name="login_email"]',validate:function(t,e){t(a.email(e))},errorMessage:this.context.useValidEmail},{selector:'.login-form input[name="login_pass"]',validate:function(t,e){t(a.password(e))},errorMessage:this.context.enterPass}]),t.on("submit",(function(t){e.loginValidator.performCheck(),e.loginValidator.areAll("valid")||t.preventDefault()}))},f.registerForgotPasswordValidation=function(t){var e=this;this.forgotPasswordValidator=(0,n.c)({submit:'.forgot-password-form input[type="submit"]',tap:l.I3}),this.forgotPasswordValidator.add([{selector:'.forgot-password-form input[name="email"]',validate:function(t,e){t(s.c.email(e))},errorMessage:this.context.useValidEmail}]),t.on("submit",(function(t){e.forgotPasswordValidator.performCheck(),e.forgotPasswordValidator.areAll("valid")||t.preventDefault()}))},f.registerNewPasswordValidation=function(){var t=this.validationDictionary,e=t.password,a=t.password_match,r=".new-password-form",i=(0,n.c)({submit:u(r+' input[type="submit"]'),tap:l.I3}),o=u(r+' input[name="password"]'),s=u(r+' input[name="password_confirm"]'),d=(0,l.q6)(e,e,a,this.passwordRequirements.error);l.AQ.setPasswordValidation(i,o,s,this.passwordRequirements,d)},f.registerCreateAccountValidator=function(t){var e,a=this,r=(0,o.c)(t,this.context),s=(0,n.c)({submit:this.formCreateSelector+" input[type='submit']",tap:l.I3}),d=u('[data-field-type="State"]'),c=this.formCreateSelector+" [data-field-type='EmailAddress']",f=u(c),p=this.formCreateSelector+" [data-field-type='Password']",m=u(p),v=this.formCreateSelector+" [data-field-type='ConfirmPassword']",h=u(v);if(s.add(r),d&&(0,i.c)(d,this.context,(function(t,r){if(t)throw new Error(t);var i=u(r);"undefined"!==s.getStatus(d)&&s.remove(d),e&&s.remove(e),i.is("select")?(e=r,l.AQ.setStateCountryValidation(s,r,a.validationDictionary.field_not_blank)):l.AQ.cleanUpStateValidation(r)})),f&&(s.remove(c),l.AQ.setEmailValidation(s,c,this.validationDictionary.valid_email)),m&&h){var g=this.validationDictionary,b=g.password,y=g.password_match;s.remove(p),s.remove(v),l.AQ.setPasswordValidation(s,p,v,this.passwordRequirements,(0,l.q6)(b,b,y,this.passwordRequirements.error))}t.on("submit",(function(t){s.performCheck(),s.areAll("valid")||t.preventDefault()}))},f.onReady=function(){this.recaptcha.attr("title")||this.recaptcha.attr("title",this.context.recaptchaTitle);var t=(0,l.m)(this.formCreateSelector),e=(0,l.m)(".login-form"),a=(0,l.m)(".forgot-password-form"),r=(0,l.m)(".new-password-form");this.passwordRequirements=this.context.passwordRequirements,e.length&&this.registerLoginValidation(e),r.length&&this.registerNewPasswordValidation(),a.length&&this.registerForgotPasswordValidation(a),t.length&&this.registerCreateAccountValidator(t)},r}(r.c)},22592:(t,e,a)=>{"use strict";a.d(e,{c:()=>n});var r=a(60136),i=a(41584);function n(t,e){var a=[],n=(0,r.Y)(e).field_not_blank;return t.find("[data-validation]").each((function(t,e){var r=i(e).first().data("validation").label+n;a=a.concat(function(t,e){var a,r,n,o=t.data("validation"),s=[],l="#"+t.attr("id");if("datechooser"===o.type){var d=function(t,e,a){if(e.min_date&&e.max_date){var r="Your chosen date must fall between "+e.min_date+" and "+e.max_date+".",i=t.attr("id"),n=e.min_date.split("-"),o=e.max_date.split("-"),s=new Date(n[0],n[1]-1,n[2]),l=new Date(o[0],o[1]-1,o[2]);return{selector:"#"+i+' select[data-label="year"]',triggeredBy:"#"+i+' select:not([data-label="year"])',validate:function(e,a){var r=Number(t.find('select[data-label="day"]').val()),i=Number(t.find('select[data-label="month"]').val())-1,n=Number(a),o=new Date(n,i,r);e(o>=s&&o<=l)},errorMessage:r}}if(e.required&&(!e.min_date||!e.max_date)){var d=t.attr("id");return{selector:"#"+d+' select[data-label="year"]',triggeredBy:"#"+d+' select:not([data-label="year"])',validate:function(e,a){var r=t.find('select[data-label="day"]').val(),i=t.find('select[data-label="month"]').val();e(r&&i&&a)},errorMessage:a}}}(t,o,e);d&&s.push(d)}else!o.required||"checkboxselect"!==o.type&&"radioselect"!==o.type?t.find("input, select, textarea").each((function(t,a){var r=i(a),n=r.get(0).tagName,d=r.attr("name"),u=l+" "+n+'[name="'+d+'"]';"numberonly"===o.type&&s.push(function(t,e){var a="The value for "+t.label+" must be between "+t.min+" and "+t.max+".",r=Number(t.min),i=Number(t.max);return{selector:e+' input[name="'+t.name+'"]',validate:function(t,e){var a=Number(e);t(a>=r&&a<=i)},errorMessage:a}}(o,l)),o.required&&s.push(function(t,e,a){return{selector:e,validate:function(t,e){t(e.length>0)},errorMessage:a}}(0,u,e))})):s.push((a=e,{selector:"#"+(r=t.attr("id"))+" input:first-of-type",triggeredBy:n="#"+r+" input",validate:function(t){var e=!1;i(n).each((function(t,a){if(a.checked)return e=!0,!1})),t(e)},errorMessage:a}));return s}(i(e),r))})),a}},7056:(t,e,a)=>{"use strict";a.d(e,{c:()=>p});var r=a(94960),i=a.n(r),n=a(40656),o=a.n(n),s=a(94024),l=a.n(s),d=a(23616),u=a(92256),c=a(55192),f=a(41584);function p(t,e,a,r){void 0===e&&(e={}),"function"==typeof a&&(r=a,a={}),f('select[data-field-type="Country"]').on("change",(function(t){var n=f(t.currentTarget).val();""!==n&&d.cp.api.country.getByName(n,(function(t,n){if(t)return(0,c.uC)(e.state_error),r(t);var s=f('[data-field-type="State"]');if(o()(n.data.states)){var d=function(t){var e=l()(t.prop("attributes"),(function(t,e){var a=t;return a[e.name]=e.value,a})),a={type:"text",id:e.id,"data-label":e["data-label"],class:"form-input",name:e.name,"data-field-type":e["data-field-type"]};t.replaceWith(f("<input />",a));var r=f('[data-field-type="State"]');return 0!==r.length&&((0,u._k)(r),r.prev().find("small").hide()),r}(s);r(null,d)}else{var p=function(t,e){var a=l()(t.prop("attributes"),(function(t,e){var a=t;return a[e.name]=e.value,a})),r={id:a.id,"data-label":a["data-label"],class:"form-select",name:a.name,"data-field-type":a["data-field-type"]};t.replaceWith(f("<select></select>",r));var i=f('[data-field-type="State"]'),n=f('[name*="FormFieldIsText"]');return 0!==n.length&&n.remove(),0===i.prev().find("small").length?i.prev().append("<small>"+e.required+"</small>"):i.prev().find("small").show(),i}(s,e);!function(t,e,a){var r=[];r.push('<option value="">'+t.prefix+"</option>"),o()(e)||(i()(t.states,(function(t){a.useIdForStates?r.push('<option value="'+t.id+'">'+t.name+"</option>"):r.push('<option value="'+t.name+'">'+(t.label?t.label:t.name)+"</option>")})),e.html(r.join(" ")))}(n.data,p,a),r(null,p)}}))}))}},60136:(t,e,a)=>{"use strict";a.d(e,{Y:()=>n});var r="translations",i=function(t){return!!Object.keys(t[r]).length},n=function(t){var e=function(){for(var t=0;t<arguments.length;t++){var e=JSON.parse(t<0||arguments.length<=t?void 0:arguments[t]);if(i(e))return e}}(t.validationDictionaryJSON,t.validationFallbackDictionaryJSON,t.validationDefaultDictionaryJSON),a=Object.values(e[r]);return Object.keys(e[r]).map((function(t){return t.split(".").pop()})).reduce((function(t,e,r){return t[e]=a[r],t}),{})}},16064:t=>{t.exports=function(t,e){for(var a=-1,r=null==t?0:t.length;++a<r&&!1!==e(t[a],a,t););return t}},2471:(t,e,a)=>{var r=a(8940),i=Object.create,n=function(){function t(){}return function(e){if(!r(e))return{};if(i)return i(e);t.prototype=e;var a=new t;return t.prototype=void 0,a}}();t.exports=n},64596:(t,e,a)=>{var r=a(68168)();t.exports=r},80316:(t,e,a)=>{var r=a(64596),i=a(95160);t.exports=function(t,e){return t&&r(t,e,i)}},73968:t=>{t.exports=function(t){return t}},68168:t=>{t.exports=function(t){return function(e,a,r){for(var i=-1,n=Object(e),o=r(e),s=o.length;s--;){var l=o[t?s:++i];if(!1===a(n[l],l,n))break}return e}}},94960:t=>{t.exports=function(t,e){for(var a=-1,r=null==t?0:t.length;++a<r&&!1!==e(t[a],a,t););return t}},95160:(t,e,a)=>{var r=a(21304)(Object.keys,Object);t.exports=r},94024:(t,e,a)=>{var r=a(16064),i=a(2471),n=a(80316),o=a(73968),s=a(30476),l=a(52488),d=a(87684),u=a(87920),c=a(8940),f=a(26700);t.exports=function(t,e,a){var p=l(t),m=p||d(t)||f(t);if(e=o(e,4),null==a){var v=t&&t.constructor;a=m?p?new v:[]:c(t)&&u(v)?i(s(t)):{}}return(m?r:n)(t,(function(t,r,i){return e(a,t,r,i)})),a}}}]);
//# sourceMappingURL=theme-bundle.chunk.976.js.map