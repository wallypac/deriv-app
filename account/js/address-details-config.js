!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("@deriv/shared"),require("@deriv/translations")):"function"==typeof define&&define.amd?define(["@deriv/shared","@deriv/translations"],t):"object"==typeof exports?exports["@deriv/account"]=t(require("@deriv/shared"),require("@deriv/translations")):e["@deriv/account"]=t(e["@deriv/shared"],e["@deriv/translations"])}(window,(function(e,t){return function(e){var t={};function r(a){if(t[a])return t[a].exports;var s=t[a]={i:a,l:!1,exports:{}};return e[a].call(s.exports,s,s.exports,r),s.l=!0,s.exports}return r.m=e,r.c=t,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(a,s,function(t){return e[t]}.bind(null,s));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s="./Configs/address-details-config.js")}({"./Configs/address-details-config.js":function(e,t,r){"use strict";r.r(t);var a=r("@deriv/translations"),s=r("@deriv/shared"),i=function(e){var t,r,i,o,n,l=e.account_settings,d=e.is_svg;return l?{address_line_1:{supported_in:["svg","iom","malta","maltainvest"],default_value:null!==(t=l.address_line_1)&&void 0!==t?t:"",rules:[["req",Object(a.localize)("Address line 1 is required")],["address",Object(a.localize)("Address is not in a proper format")],["length",Object(a.localize)("This should not exceed {{max}} characters.",{max:70}),{max:70}],["po_box",Object(s.getErrorMessages)().po_box()]].filter((function(e){return d?0!==e.indexOf("po_box"):e}))},address_line_2:{supported_in:["svg","iom","malta","maltainvest"],default_value:null!==(r=l.address_line_2)&&void 0!==r?r:"",rules:[["length",Object(a.localize)("This should not exceed {{max}} characters.",{max:70}),{max:70}],["po_box",Object(s.getErrorMessages)().po_box()]].filter((function(e){return d?0!==e.indexOf("po_box"):e}))},address_city:{supported_in:["svg","iom","malta","maltainvest"],default_value:null!==(i=l.address_city)&&void 0!==i?i:"",rules:[["req",Object(a.localize)("City is required")],["regular",Object(a.localize)("City field is not in a proper format"),{regex:/^[a-zA-Z\s\W'.-]{1,35}$/}]]},address_state:{supported_in:["svg","iom","malta","maltainvest"],default_value:null!==(o=l.address_state)&&void 0!==o?o:"",rules:[["req",Object(a.localize)("State is required")],["regular",Object(a.localize)("State is not in a proper format"),{regex:/^[\w\s\W'.-;,]{0,60}$/}]]},address_postcode:{supported_in:["svg","iom","malta","maltainvest"],default_value:null!==(n=l.address_postcode)&&void 0!==n?n:"",rules:[["length",Object(a.localize)("Please enter a {{field_name}} under {{max_number}} characters.",{field_name:Object(a.localize)("postal/ZIP code"),max_number:20,interpolation:{escapeValue:!1}}),{min:0,max:20}],["postcode",Object(s.getErrorMessages)().postcode()]]}}:{}},o=function(e,t){return"im"===t&&e.address_state.rules.shift(),/^(im|gb)$/.test(t)&&e.address_postcode.rules.splice(0,0,["req",Object(a.localize)("Postal/ZIP code is required")]),e},n=function(e,t){var r=t.real_account_signup_target;return r&&"svg"!==r||e.address_state.rules.shift(),e};t.default=function(e,t){var r=e.upgrade_info,l=e.real_account_signup_target,d=e.residence,u=e.account_settings,c=arguments.length>2&&void 0!==arguments[2]&&arguments[2],f="svg"===(null==r?void 0:r.can_upgrade_to),p=i({account_settings:u,is_svg:f});return{header:{active_title:c?Object(a.localize)("Where do you live?"):Object(a.localize)("Complete your address details"),title:c?Object(a.localize)("ADDRESS"):Object(a.localize)("Address")},body:t,form_value:Object(s.getDefaultFields)(l,p),props:{validate:Object(s.generateValidationFunction)(l,n(o(p,d),l)),is_svg:f},passthrough:["residence_list","is_fully_authenticated"],icon:"IcDashboardAddress"}}},"@deriv/shared":function(t,r){t.exports=e},"@deriv/translations":function(e,r){e.exports=t}}).default}));
//# sourceMappingURL=address-details-config.js.map