!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("@deriv/shared"),require("@deriv/translations")):"function"==typeof define&&define.amd?define(["@deriv/shared","@deriv/translations"],t):"object"==typeof exports?exports["@deriv/account"]=t(require("@deriv/shared"),require("@deriv/translations")):e["@deriv/account"]=t(e["@deriv/shared"],e["@deriv/translations"])}(self,(function(e,t){return(()=>{"use strict";var r={"./Configs/personal-details-config.js":(e,t,r)=>{r.d(t,{default:()=>d});var i=r("@deriv/shared"),a=r("@deriv/translations");function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],i=!0,a=!1,n=void 0;try{for(var o,l=e[Symbol.iterator]();!(i=(o=l.next()).done)&&(r.push(o.value),!t||r.length!==t);i=!0);}catch(e){a=!0,n=e}finally{try{i||null==l.return||l.return()}finally{if(a)throw n}}return r}}(e,t)||l(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e){return function(e){if(Array.isArray(e))return s(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||l(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){if(e){if("string"==typeof e)return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?s(e,t):void 0}}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}var u=function(e){var t,r,n,l,s,u,c,d,f,v=e.residence_list,m=e.account_settings,_=e.is_dashboard;if(!v||!m)return{};var p=o(Object.keys(m).filter((function(e){return"account_opening_reason"!==e&&!!e}))),b={account_opening_reason:{supported_in:["iom","malta","maltainvest"],default_value:null!==(t=m.account_opening_reason)&&void 0!==t?t:"",rules:[["req",(0,a.localize)("Account opening reason is required")]]},salutation:{supported_in:["iom","malta","maltainvest"],default_value:null!==(r=m.salutation)&&void 0!==r?r:"",rules:[["req",(0,a.localize)("Salutation is required")]]},first_name:{supported_in:["svg","iom","malta","maltainvest"],default_value:null!==(n=m.first_name)&&void 0!==n?n:"",rules:[["req",(0,a.localize)("First name is required")],["letter_symbol",(0,i.getErrorMessages)().letter_symbol()],["length",(0,a.localize)("First name should be between 2 and 30 characters."),{min:2,max:30}]]},last_name:{supported_in:["svg","iom","malta","maltainvest"],default_value:null!==(l=m.last_name)&&void 0!==l?l:"",rules:[["req",(0,a.localize)("Last name is required")],["letter_symbol",(0,i.getErrorMessages)().letter_symbol()],["length",(0,a.localize)("Last name should be between 2 and 30 characters."),{min:2,max:30}]]},date_of_birth:{supported_in:["svg","iom","malta","maltainvest"],default_value:m.date_of_birth?(0,i.toMoment)(m.date_of_birth).format("YYYY-MM-DD"):"",rules:[["req",(0,a.localize)("Date of birth is required")],[function(e){return(0,i.toMoment)(e).isValid()&&(0,i.toMoment)(e).isBefore((0,i.toMoment)().subtract(18,"years"))},(0,a.localize)("You must be 18 years old and above.")]]},place_of_birth:{supported_in:["maltainvest","iom","malta"],default_value:m.place_of_birth?null===(s=v.find((function(e){return e.value===m.place_of_birth})))||void 0===s?void 0:s.text:"",rules:[["req",(0,a.localize)("Place of birth is required")]]},citizen:{supported_in:["iom","malta","maltainvest"],default_value:m.citizen?null===(u=v.find((function(e){return e.value===m.citizen})))||void 0===u?void 0:u.text:"",rules:[["req",(0,a.localize)("Citizenship is required")]]},phone:{supported_in:["svg","iom","malta","maltainvest"],default_value:null!==(c=m.phone)&&void 0!==c?c:"",rules:[["req",(0,a.localize)("Phone is required")],["phone",(0,a.localize)("Phone is not in a proper format.")],[function(e){var t=e.replace(/\D/g,"");return(0,i.validLength)(t,{min:9,max:35})},(0,a.localize)("You should enter {{min}}-{{max}} numbers.",{min:9,max:35})]]},tax_residence:{default_value:m.tax_residence?null===(d=v.find((function(e){return e.value===m.tax_residence})))||void 0===d?void 0:d.text:"",supported_in:["maltainvest"],rules:[["req",(0,a.localize)("Tax residence is required")]]},tax_identification_number:{default_value:null!==(f=m.tax_identification_number)&&void 0!==f?f:"",supported_in:["maltainvest"],rules:[["req",(0,a.localize)("Tax Identification Number is required")],[function(e,t,r){return!!r.tax_residence},(0,a.localize)("Please fill in Tax residence")],[function(e,t,r){var i,a,n=r.tax_residence,o=null===(i=v.filter((function(e){return e.text===n&&e.tin_format}))[0])||void 0===i||null===(a=i.tin_format)||void 0===a?void 0:a[0];return!o||new RegExp(o).test(e)},["warn",(0,a.localize)("This Tax Identification Number (TIN) is invalid. You may continue with account creation, but to facilitate future payment processes, valid tax information will be required.")]]]},tax_identification_confirm:{default_value:!1,supported_in:["maltainvest"],rules:[["confirm",(0,a.localize)("Please confirm your tax information")]]}};return[function(){if(_){var e=["first_name","last_name","date_of_birth","phone"];return Object.keys(b).reduce((function(t,r){return e.includes(r)&&(t[r]=b[r]),t}),{})}return b}(),p]},c=function(e,t){var r=t.real_account_signup_target;return["malta","iom"].includes(r)&&e.tax_residence&&e.tax_residence.rules.shift(),e};const d=function(e,t){var r=e.upgrade_info,o=e.real_account_signup_target,l=e.residence_list,s=e.account_settings,d=arguments.length>2&&void 0!==arguments[2]&&arguments[2],f=u({residence_list:l,account_settings:s,is_dashboard:d}),v=n(f,2),m=v[0],_=v[1];return{header:{active_title:d?(0,a.localize)("A few personal details"):(0,a.localize)("Complete your personal details"),title:d?(0,a.localize)("PERSONAL"):(0,a.localize)("Personal details")},body:t,form_value:(0,i.getDefaultFields)(o,m),props:{validate:(0,i.generateValidationFunction)(o,c(m,{real_account_signup_target:o})),is_svg:"svg"===(null==r?void 0:r.can_upgrade_to),account_opening_reason_list:[{text:(0,a.localize)("Hedging"),value:"Hedging"},{text:(0,a.localize)("Income Earning"),value:"Income Earning"},{text:(0,a.localize)("Speculative"),value:"Speculative"}],salutation_list:[{label:(0,a.localize)("Mr"),value:"Mr"},{label:(0,a.localize)("Mrs"),value:"Mrs"},{label:(0,a.localize)("Ms"),value:"Ms"},{label:(0,a.localize)("Miss"),value:"Miss"}],disabled_items:_},passthrough:["residence_list","is_fully_authenticated"],icon:"IcDashboardPersonalDetails"}}},"@deriv/shared":t=>{t.exports=e},"@deriv/translations":e=>{e.exports=t}},i={};function a(e){if(i[e])return i[e].exports;var t=i[e]={exports:{}};return r[e](t,t.exports,a),t.exports}return a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a("./Configs/personal-details-config.js")})().default}));