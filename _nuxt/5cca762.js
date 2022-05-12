/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[3,9,12],{179:function(e,t,n){"use strict";function r(e){return"[object Object]"===Object.prototype.toString.call(e)}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function i(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,f(e,t)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t.indexOf(n=o[r])>=0||(i[n]=e[n]);return i}var a={silent:!1,logLevel:"warn"},v=["validator"],d=Object.prototype,h=d.toString,s=d.hasOwnProperty,j=/^\s*function (\w+)/;function p(e){var t,n=null!==(t=null==e?void 0:e.type)&&void 0!==t?t:e;if(n){var r=n.toString().match(j);return r?r[1]:""}return""}var y=function(e){var t,n;return!1!==r(e)&&(void 0===(t=e.constructor)||!1!==r(n=t.prototype)&&!1!==n.hasOwnProperty("isPrototypeOf"))},m=function(e){return e},g=function(e,t){return s.call(e,t)},O=Number.isInteger||function(e){return"number"==typeof e&&isFinite(e)&&Math.floor(e)===e},_=Array.isArray||function(e){return"[object Array]"===h.call(e)},k=function(e){return"[object Function]"===h.call(e)},w=function(e){return y(e)&&g(e,"_vueTypes_name")},Q=function(e){return y(e)&&(g(e,"type")||["_vueTypes_name","validator","default","required"].some((function(t){return g(e,t)})))};function S(e,t){return Object.defineProperty(e.bind(t),"__original",{value:e})}function z(e,t,n){var r;void 0===n&&(n=!1);var i=!0,o="";r=y(e)?e:{type:e};var u=w(r)?r._vueTypes_name+" - ":"";if(Q(r)&&null!==r.type){if(void 0===r.type||!0===r.type)return i;if(!r.required&&void 0===t)return i;_(r.type)?(i=r.type.some((function(e){return!0===z(e,t,!0)})),o=r.type.map((function(e){return p(e)})).join(" or ")):i="Array"===(o=p(r))?_(t):"Object"===o?y(t):"String"===o||"Number"===o||"Boolean"===o||"Function"===o?function(e){if(null==e)return"";var t=e.constructor.toString().match(j);return t?t[1]:""}(t)===o:t instanceof r.type}if(!i){var a=u+'value "'+t+'" should be of type "'+o+'"';return!1===n?(m(a),!1):a}if(g(r,"validator")&&k(r.validator)){var l=m,c=[];if(m=function(e){c.push(e)},i=r.validator(t),m=l,!i){var f=(c.length>1?"* ":"")+c.join("\n* ");return c.length=0,!1===n?(m(f),i):f}}return i}function x(e,t){var n=Object.defineProperties(t,{_vueTypes_name:{value:e,writable:!0},isRequired:{get:function(){return this.required=!0,this}},def:{value:function(e){return void 0===e?(g(this,"default")&&delete this.default,this):k(e)||!0===z(this,e,!0)?(this.default=_(e)?function(){return[].concat(e)}:y(e)?function(){return Object.assign({},e)}:e,this):(m(this._vueTypes_name+' - invalid default value: "'+e+'"'),this)}}}),r=n.validator;return k(r)&&(n.validator=S(r,n)),n}function N(e,t){var n=x(e,t);return Object.defineProperty(n,"validate",{value:function(e){return k(this.validator)&&m(this._vueTypes_name+" - calling .validate() will overwrite the current custom validator function. Validator info:\n"+JSON.stringify(this)),this.validator=S(e,this),this}})}function T(e,t,n){var r,i,o=(r=t,i={},Object.getOwnPropertyNames(r).forEach((function(e){i[e]=Object.getOwnPropertyDescriptor(r,e)})),Object.defineProperties({},i));if(o._vueTypes_name=e,!y(n))return o;var a,l,c=n.validator,s=u(n,v);if(k(c)){var f=o.validator;f&&(f=null!==(l=(a=f).__original)&&void 0!==l?l:a),o.validator=S(f?function(e){return f.call(this,e)&&c.call(this,e)}:c,o)}return Object.assign(o,s)}function A(e){return e.replace(/^(?!\s*$)/gm,"  ")}function L(e,t){if(void 0===t&&(t="custom validation failed"),"function"!=typeof e)throw new TypeError("[VueTypes error]: You must provide a function as argument");return x(e.name||"<<anonymous function>>",{validator:function(n){var r=e(n);return r||m(this._vueTypes_name+" - "+t),r}})}function P(e){if(!_(e))throw new TypeError("[VueTypes error]: You must provide an array as argument.");var t='oneOf - value should be one of "'+e.join('", "')+'".',n=e.reduce((function(e,t){if(null!=t){var n=t.constructor;-1===e.indexOf(n)&&e.push(n)}return e}),[]);return x("oneOf",{type:n.length>0?n:void 0,validator:function(n){var r=-1!==e.indexOf(n);return r||m(t),r}})}function C(e){if(!_(e))throw new TypeError("[VueTypes error]: You must provide an array as argument");for(var t=!1,n=[],r=0;r<e.length;r+=1){var i=e[r];if(Q(i)){if(w(i)&&"oneOf"===i._vueTypes_name&&i.type){n=n.concat(i.type);continue}if(k(i.validator)&&(t=!0),!0===i.type||!i.type){m('oneOfType - invalid usage of "true" or "null" as types.');continue}i.type&&(n=n.concat(i.type))}n.push(i)}var o=(n=n.filter((function(e,t){return n.indexOf(e)===t}))).length>0?n:null;return x("oneOfType",t?{type:o,validator:function(t){var n=[],r=e.some((function(e){var r=z(w(e)&&"oneOf"===e._vueTypes_name?e.type||null:e,t,!0);return"string"==typeof r&&n.push(r),!0===r}));return r||m("oneOfType - provided value does not match any of the "+n.length+" passed-in validators:\n"+A(n.join("\n"))),r}}:{type:o})}function F(e){return x("arrayOf",{type:Array,validator:function(t){var n="",r=t.every((function(t){return!0===(n=z(e,t,!0))}));return r||m("arrayOf - value validation error:\n"+A(n)),r}})}function I(e){return x("instanceOf",{type:e})}function D(e){return x("objectOf",{type:Object,validator:function(t){var n="",r=Object.keys(t).every((function(r){return!0===(n=z(e,t[r],!0))}));return r||m("objectOf - value validation error:\n"+A(n)),r}})}function M(e){var t=Object.keys(e),n=t.filter((function(t){var n;return!(null===(n=e[t])||void 0===n||!n.required)})),r=x("shape",{type:Object,validator:function(r){var i=this;if(!y(r))return!1;var o=Object.keys(r);if(n.length>0&&n.some((function(e){return-1===o.indexOf(e)}))){var u=n.filter((function(e){return-1===o.indexOf(e)}));return m(1===u.length?'shape - required property "'+u[0]+'" is not defined.':'shape - required properties "'+u.join('", "')+'" are not defined.'),!1}return o.every((function(n){if(-1===t.indexOf(n))return!0===i._vueTypes_isLoose||(m('shape - shape definition does not include a "'+n+'" property. Allowed keys: "'+t.join('", "')+'".'),!1);var o=z(e[n],r[n],!0);return"string"==typeof o&&m('shape - "'+n+'" property validation error:\n '+A(o)),!0===o}))}});return Object.defineProperty(r,"_vueTypes_isLoose",{writable:!0,value:!1}),Object.defineProperty(r,"loose",{get:function(){return this._vueTypes_isLoose=!0,this}}),r}var J=["name","validate","getter"],U=function(){var e,t;return t=e=function(){function e(){}return e.extend=function(e){var t=this;if(_(e))return e.forEach((function(e){return t.extend(e)})),this;var n=e.name,r=e.validate,i=void 0!==r&&r,o=e.getter,a=void 0!==o&&o,l=u(e,J);if(g(this,n))throw new TypeError('[VueTypes error]: Type "'+n+'" already defined');var c,f=l.type;return w(f)?(delete l.type,Object.defineProperty(this,n,a?{get:function(){return T(n,f,l)}}:{value:function(){var e,t=T(n,f,l);return t.validator&&(t.validator=(e=t.validator).bind.apply(e,[t].concat([].slice.call(arguments)))),t}})):(c=a?{get:function(){var e=Object.assign({},l);return i?N(n,e):x(n,e)},enumerable:!0}:{value:function(){var e,t,r=Object.assign({},l);return e=i?N(n,r):x(n,r),r.validator&&(e.validator=(t=r.validator).bind.apply(t,[e].concat([].slice.call(arguments)))),e},enumerable:!0},Object.defineProperty(this,n,c))},l(e,null,[{key:"any",get:function(){return N("any",{})}},{key:"func",get:function(){return N("function",{type:Function}).def(this.defaults.func)}},{key:"bool",get:function(){return N("boolean",{type:Boolean}).def(this.defaults.bool)}},{key:"string",get:function(){return N("string",{type:String}).def(this.defaults.string)}},{key:"number",get:function(){return N("number",{type:Number}).def(this.defaults.number)}},{key:"array",get:function(){return N("array",{type:Array}).def(this.defaults.array)}},{key:"object",get:function(){return N("object",{type:Object}).def(this.defaults.object)}},{key:"integer",get:function(){return x("integer",{type:Number,validator:function(e){return O(e)}}).def(this.defaults.integer)}},{key:"symbol",get:function(){return x("symbol",{validator:function(e){return"symbol"==typeof e}})}}]),e}(),e.defaults={},e.sensibleDefaults=void 0,e.config=a,e.custom=L,e.oneOf=P,e.instanceOf=I,e.oneOfType=C,e.arrayOf=F,e.objectOf=D,e.shape=M,e.utils={validate:function(e,t){return!0===z(t,e,!0)},toType:function(e,t,n){return void 0===n&&(n=!1),n?N(e,t):x(e,t)}},t}();var B=function(e){function t(){return e.apply(this,arguments)||this}return i(t,e),t}(function(e){var t,n;return void 0===e&&(e={func:function(){},bool:!0,string:"",number:0,array:function(){return[]},object:function(){return{}},integer:0}),n=t=function(t){function n(){return t.apply(this,arguments)||this}return i(n,t),l(n,null,[{key:"sensibleDefaults",get:function(){return c({},this.defaults)},set:function(t){this.defaults=!1!==t?c({},!0!==t?t:e):{}}}]),n}(U),t.defaults=c({},e),n}());t.a=B},187:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));function r(e){false}},193:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return l}));n(12),n(49),n(50);var r=n(187);function o(e){return isNaN(e)?(Object(r.a)("formatToEuroCurrency NaN"),0):new Intl.NumberFormat("nl-NL",{maximumFractionDigits:0,minimumFractionDigits:0}).format(parseFloat(e))}function l(e){var t=e.toString().replaceAll(".","");return 0==t.length&&(t="0"),parseInt(t)}},197:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n(18),o=n(187),l=n(394),c=n(378).server_url+"/state/";Object(o.a)("server_url = "+c);var f={debug:!0,categories:["user","questions"],state:{user:{},questions:{}},setUser:function(e,t){f.state.user[e]=t,localStorage&&f.save_to_local_storage("user."+e,t),Object(o.a)(f.state)},setQuestion:function(e,t){f.state.questions[e]=t,localStorage&&f.save_to_local_storage("questions."+e,t)},getUser:function(e){var t=f.state.user[e];return t||!!(t=f.load_from_local_storage("user."+e))&&(f.setUser(e,t),t=f.state.user[e])},getQuestion:function(e){var t=f.state.questions[e];return t||!!(t=f.load_from_local_storage("questions."+e))&&(f.setQuestion(e,t),t=f.state.questions[e])},clear_local_storage:function(){localStorage&&localStorage.clear()},load_from_local_storage:function(e){return!(!localStorage||!localStorage.getItem(e))&&JSON.parse(localStorage.getItem(e))},save_to_local_storage:function(e,t){localStorage&&(Object(o.a)(e),Object(o.a)(t),"object"===Object(r.a)(t)&&null!==t?localStorage.setItem(e,JSON.stringify(t)):localStorage.setItem(e,t))},remove_from_server:function(e){l.delete(c+e).then((function(e){localStorage.clear(),console.log(e);var t=e.data;console.log("id="+t)})).catch((function(e){console.log(e)}))},save_to_server:function(e){console.log("save_to_server("+c+")"),f.getUser("user"),f.getQuestion("medewerkers"),f.getQuestion("handelsactiviteit"),f.getQuestion("rechtsvorm"),f.getQuestion("vestigingsplaats"),f.getQuestion("kaspositie"),f.getQuestion("ontvangsten"),f.getQuestion("verwachteontvangsten"),f.getQuestion("inkopen"),f.getQuestion("verwachteinkopen"),f.getQuestion("loonkosten"),f.getQuestion("verwachteloonkosten"),f.getQuestion("overigekosten"),f.getQuestion("verwachteoverigeuitgaven"),f.getQuestion("uitgesteldebelastingen"),f.getQuestion("investeringen"),f.getQuestion("regelingen"),f.getQuestion("terugbetaling_tvl"),f.getQuestion("terugbetaling_now"),f.getQuestion("terugbetaling_tozo"),f.getQuestion("terugbetaling_togs"),f.getQuestion("terugbetaling_andere"),console.log("state="),Object(o.a)(f.state),l.post(c,f.state).then((function(t){console.log(t);var n=t.data;console.log("id="),Object(o.a)(n),e(n)})).catch((function(e){console.log(e)}))},load_from_server:function(e,t){Object(o.a)("load_from_server()"),l.get(c+e,{}).then((function(e){Object(o.a)(e.data);var n=JSON.parse(e.data);Object(o.a)("state:"),Object(o.a)(n),Object(o.a)("state.questions:"),Object(o.a)(n.questions),Object(o.a)("state.questions.medewerkers:"),Object(o.a)(n.questions.medewerkers),n.user&&f.setUser("user",n.user),n.questions&&(n.questions.medewerkers&&f.setQuestion("medewerkers",n.questions.medewerkers),n.questions.handelsactiviteit&&f.setQuestion("handelsactiviteit",n.questions.handelsactiviteit),n.questions.rechtsvorm&&f.setQuestion("rechtsvorm",n.questions.rechtsvorm),n.questions.vestigingsplaats&&f.setQuestion("vestigingsplaats",n.questions.vestigingsplaats),n.questions.kaspositie&&f.setQuestion("kaspositie",n.questions.kaspositie),n.questions.ontvangsten&&f.setQuestion("ontvangsten",n.questions.ontvangsten),n.questions.verwachteontvangsten&&f.setQuestion("verwachteontvangsten",n.questions.verwachteontvangsten),n.questions.inkopen&&f.setQuestion("inkopen",n.questions.inkopen),n.questions.verwachteinkopen&&f.setQuestion("verwachteinkopen",n.questions.verwachteinkopen),n.questions.loonkosten&&f.setQuestion("loonkosten",n.questions.loonkosten),n.questions.verwachteloonkosten&&f.setQuestion("verwachteloonkosten",n.questions.verwachteloonkosten),n.questions.overigekosten&&f.setQuestion("overigekosten",n.questions.overigekosten),n.questions.verwachteoverigeuitgaven&&f.setQuestion("verwachteoverigeuitgaven",n.questions.verwachteoverigeuitgaven),n.questions.uitgesteldebetalingen&&f.setQuestion("uitgesteldebetalingen",n.questions.uitgesteldebetalingen),n.questions.investeringen&&f.setQuestion("investeringen",n.questions.investeringen),n.questions.regelingen&&f.setQuestion("regelingen",n.questions.regelingen),n.questions.terugbetaling_tvl&&f.setQuestion("terugbetaling_tvl",n.questions.terugbetaling_tvl),n.questions.terugbetaling_now&&f.setQuestion("terugbetaling_now",n.questions.terugbetaling_now),n.questions.terugbetaling_tozo&&f.setQuestion("terugbetaling_tozo",n.questions.terugbetaling_tozo),n.questions.terugbetaling_togs&&f.setQuestion("terugbetaling_togs",n.questions.terugbetaling_togs),n.questions.terugbetaling_andere&&f.setQuestion("terugbetaling_andere",n.questions.terugbetaling_andere)),console.log("state = "),Object(o.a)(f.state),t(e.data)})).catch((function(e){console.log(e)})).then((function(){}))}}},226:function(e,t,n){"use strict";n.d(t,"d",(function(){return f})),n.d(t,"b",(function(){return v})),n.d(t,"c",(function(){return d})),n.d(t,"a",(function(){return h}));n(38),n(12),n(49),n(50);var r=n(180),o=n.n(r);function l(e){return{0:"Jan",1:"Feb",2:"Maa",3:"Apr",4:"Mei",5:"Jun",6:"Jul",7:"Aug",8:"Sep",9:"Okt",10:"Nov",11:"Dec"}[e]}function c(e){return{0:"Januari",1:"Februari",2:"Maart",3:"April",4:"Mei",5:"Juni",6:"Juli",7:"Augustus",8:"September",9:"Oktober",10:"November",11:"December"}[e]}function f(e,t){for(var n=[],i=0;i<t;i++){e.add(Math.min(1,i),"months");var label=l(e.month())+e.year();label=label.charAt(0).toLowerCase()+label.slice(1);var r=l(e.month()).toUpperCase()+"'"+e.year().toString().substring(2);n.push({key:e.format("Y-M"),month:e.month(),shortyear:e.year().toString().substring(2),year:e.year(),date:e.clone(),label:label,shortMonthLabel:l(e.month()),monthLabel:c(e.month()),shorterLabel:"".concat(l(e.month())," '").concat(e.year().toString().substring(2)),shorterLabel2:"".concat(l(e.month()),"'").concat(e.year().toString().substring(2)),shortLabel:"".concat(l(e.month())," ").concat(e.year()),fullLabel:"".concat(c(e.month())," ").concat(e.year()),figLabel:r})}return n}function v(){return f(o()(),12)}function d(){return f(o()().subtract(12,"months"),12)}function h(){return f(o()().subtract(1,"year").startOf("year"),12)}},229:function(e,t,n){"use strict";var r=n(3),o=n(90)(6),l="findIndex",c=!0;l in[]&&Array(1)[l]((function(){c=!1})),r(r.P+r.F*c,"Array",{findIndex:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),n(89)(l)},233:function(e,t,n){"use strict";n.r(t);var r=n(179),o={name:"fig_scenarios",props:{belastingen:r.a.Array,ontvangsten:r.a.Array,uitgaven:r.a.Array,months:r.a.Array,figMonths:r.a.Array,uitgesteldebelastingen:r.a.Number,terugbetaling_tvl:r.a.Number,terugbetaling_now:r.a.Number,terugbetaling_tozo:r.a.Number,terugbetaling_togs:r.a.Number,terugbetaling_andere:r.a.Number,kaspositie:r.a.Number,showLegend:r.a.Boolean,fontSize:r.a.Number},computed:{chartData:function(){return{labels:this.figMonths,datasets:[{type:"bar",label:"Ontvangsten",backgroundColor:"#76D276",barPercentage:1,order:2,data:this.calcOntvangsten},{type:"bar",label:"Uitgaven",backgroundColor:"#FFC069",barPercentage:1,order:3,data:this.calcUitgaven},{type:"bar",label:"Belastingen",backgroundColor:"#01689b",barPercentage:1,order:4,data:this.calcBelastingen},{type:"line",label:"Kaspositie",borderColor:"#000",borderWidth:2,fill:!1,order:1,pointBackgroundColor:"#FFF",data:this.calcNettoKasStroom}]}},calcOntvangsten:function(){for(var e=[],i=0;i<this.months.length;i++){var t=this.months[i];e[i]=parseInt(this.ontvangsten[t])}return e},calcUitgaven:function(){for(var e=[],i=0;i<this.months.length;i++){var t=this.months[i];e[i]=parseInt(this.uitgaven[t])}return e},calcBelastingen:function(){for(var e=[],i=0;i<this.months.length;i++){var t=this.months[i];e[i]=parseInt(this.belastingen[t])}return e},calcNettoKasStroom:function(){for(var e=[],t=parseInt(this.kaspositie),i=0;i<this.months.length;i++){var n=this.months[i];t=t+parseInt(this.ontvangsten[n])-parseInt(this.uitgaven[n])-parseInt(this.belastingen[n]),e[i]=t}return e}}},l=(n(435),n(28)),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"grafiekje"},[n("div",{staticClass:"cash-chart"},[n("CashChart",{attrs:{chartData:e.chartData,showLegend:e.showLegend,fontSize:e.fontSize}})],1)])])}),[],!1,null,"691543e1",null);t.default=component.exports;installComponents(component,{CashChart:n(417).default})},234:function(e,t,n){"use strict";var r=n(3),o=n(90)(5),l="find",c=!0;l in[]&&Array(1).find((function(){c=!1})),r(r.P+r.F*c,"Array",{find:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),n(89)(l)},235:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(180),o=n.n(r),l=n(226),c=[{range:Object(l.d)(o()("2022-05-01"),2),from:o()("2022-05-01"),to:o()("2022-06-30"),amount:.01},{range:Object(l.d)(o()("2022-07-1"),6),from:o()("2022-07-1"),to:o()("2022-12-31"),amount:1},{range:Object(l.d)(o()("2023-01-01"),6),from:o()("2023-01-01"),to:o()("2023-06-30"),amount:2},{range:Object(l.d)(o()("2023-07-01"),6),from:o()("2023-07-01"),to:o()("2023-12-31"),amount:3},{range:Object(l.d)(o()("2024-01-01"),46),from:o()("2024-01-01"),to:o()("2027-10-01"),amount:4}]},378:function(e,t){e.exports={server_url:"https://detoekomstcheck.nl"}},391:function(e,t,n){var map={"./af":238,"./af.js":238,"./ar":239,"./ar-dz":240,"./ar-dz.js":240,"./ar-kw":241,"./ar-kw.js":241,"./ar-ly":242,"./ar-ly.js":242,"./ar-ma":243,"./ar-ma.js":243,"./ar-sa":244,"./ar-sa.js":244,"./ar-tn":245,"./ar-tn.js":245,"./ar.js":239,"./az":246,"./az.js":246,"./be":247,"./be.js":247,"./bg":248,"./bg.js":248,"./bm":249,"./bm.js":249,"./bn":250,"./bn-bd":251,"./bn-bd.js":251,"./bn.js":250,"./bo":252,"./bo.js":252,"./br":253,"./br.js":253,"./bs":254,"./bs.js":254,"./ca":255,"./ca.js":255,"./cs":256,"./cs.js":256,"./cv":257,"./cv.js":257,"./cy":258,"./cy.js":258,"./da":259,"./da.js":259,"./de":260,"./de-at":261,"./de-at.js":261,"./de-ch":262,"./de-ch.js":262,"./de.js":260,"./dv":263,"./dv.js":263,"./el":264,"./el.js":264,"./en-au":265,"./en-au.js":265,"./en-ca":266,"./en-ca.js":266,"./en-gb":267,"./en-gb.js":267,"./en-ie":268,"./en-ie.js":268,"./en-il":269,"./en-il.js":269,"./en-in":270,"./en-in.js":270,"./en-nz":271,"./en-nz.js":271,"./en-sg":272,"./en-sg.js":272,"./eo":273,"./eo.js":273,"./es":274,"./es-do":275,"./es-do.js":275,"./es-mx":276,"./es-mx.js":276,"./es-us":277,"./es-us.js":277,"./es.js":274,"./et":278,"./et.js":278,"./eu":279,"./eu.js":279,"./fa":280,"./fa.js":280,"./fi":281,"./fi.js":281,"./fil":282,"./fil.js":282,"./fo":283,"./fo.js":283,"./fr":284,"./fr-ca":285,"./fr-ca.js":285,"./fr-ch":286,"./fr-ch.js":286,"./fr.js":284,"./fy":287,"./fy.js":287,"./ga":288,"./ga.js":288,"./gd":289,"./gd.js":289,"./gl":290,"./gl.js":290,"./gom-deva":291,"./gom-deva.js":291,"./gom-latn":292,"./gom-latn.js":292,"./gu":293,"./gu.js":293,"./he":294,"./he.js":294,"./hi":295,"./hi.js":295,"./hr":296,"./hr.js":296,"./hu":297,"./hu.js":297,"./hy-am":298,"./hy-am.js":298,"./id":299,"./id.js":299,"./is":300,"./is.js":300,"./it":301,"./it-ch":302,"./it-ch.js":302,"./it.js":301,"./ja":303,"./ja.js":303,"./jv":304,"./jv.js":304,"./ka":305,"./ka.js":305,"./kk":306,"./kk.js":306,"./km":307,"./km.js":307,"./kn":308,"./kn.js":308,"./ko":309,"./ko.js":309,"./ku":310,"./ku.js":310,"./ky":311,"./ky.js":311,"./lb":312,"./lb.js":312,"./lo":313,"./lo.js":313,"./lt":314,"./lt.js":314,"./lv":315,"./lv.js":315,"./me":316,"./me.js":316,"./mi":317,"./mi.js":317,"./mk":318,"./mk.js":318,"./ml":319,"./ml.js":319,"./mn":320,"./mn.js":320,"./mr":321,"./mr.js":321,"./ms":322,"./ms-my":323,"./ms-my.js":323,"./ms.js":322,"./mt":324,"./mt.js":324,"./my":325,"./my.js":325,"./nb":326,"./nb.js":326,"./ne":327,"./ne.js":327,"./nl":328,"./nl-be":329,"./nl-be.js":329,"./nl.js":328,"./nn":330,"./nn.js":330,"./oc-lnc":331,"./oc-lnc.js":331,"./pa-in":332,"./pa-in.js":332,"./pl":333,"./pl.js":333,"./pt":334,"./pt-br":335,"./pt-br.js":335,"./pt.js":334,"./ro":336,"./ro.js":336,"./ru":337,"./ru.js":337,"./sd":338,"./sd.js":338,"./se":339,"./se.js":339,"./si":340,"./si.js":340,"./sk":341,"./sk.js":341,"./sl":342,"./sl.js":342,"./sq":343,"./sq.js":343,"./sr":344,"./sr-cyrl":345,"./sr-cyrl.js":345,"./sr.js":344,"./ss":346,"./ss.js":346,"./sv":347,"./sv.js":347,"./sw":348,"./sw.js":348,"./ta":349,"./ta.js":349,"./te":350,"./te.js":350,"./tet":351,"./tet.js":351,"./tg":352,"./tg.js":352,"./th":353,"./th.js":353,"./tk":354,"./tk.js":354,"./tl-ph":355,"./tl-ph.js":355,"./tlh":356,"./tlh.js":356,"./tr":357,"./tr.js":357,"./tzl":358,"./tzl.js":358,"./tzm":359,"./tzm-latn":360,"./tzm-latn.js":360,"./tzm.js":359,"./ug-cn":361,"./ug-cn.js":361,"./uk":362,"./uk.js":362,"./ur":363,"./ur.js":363,"./uz":364,"./uz-latn":365,"./uz-latn.js":365,"./uz.js":364,"./vi":366,"./vi.js":366,"./x-pseudo":367,"./x-pseudo.js":367,"./yo":368,"./yo.js":368,"./zh-cn":369,"./zh-cn.js":369,"./zh-hk":370,"./zh-hk.js":370,"./zh-mo":371,"./zh-mo.js":371,"./zh-tw":372,"./zh-tw.js":372};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}r.keys=function(){return Object.keys(map)},r.resolve=o,e.exports=r,r.id=391},408:function(e,t,n){var content=n(436);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(37).default)("7803f007",content,!0,{sourceMap:!1})},417:function(e,t,n){"use strict";n.r(t);var r=n(193),o=n(421),l=n(179),c=o.b.reactiveProp;t.default={extends:o.a,mixins:[c],props:{fontSize:{type:l.a.Number,default:12},showLegend:{type:l.a.Boolean,default:!0}},mounted:function(){this.renderChart(this.chartData,{legend:{align:"end",display:this.showLegend,labels:{boxWidth:7,fontSize:this.fontSize}},title:{display:!1,text:"voorspelling",align:"start"},layout:{padding:"16px"},tooltips:{callbacks:{label:function(e,data){var label=data.datasets[e.datasetIndex].label||"";return label&&(label+=": "),label+="€ "+parseInt(e.yLabel).toLocaleString("nl"),label}}},scales:{gridLines:{drawBorder:!1},scaleLabel:{fontColor:"#D6D6D6",fontFamily:"'Public Sans', sans-serif"},yAxes:[{drawBorder:!1,padding:8,ticks:{callback:function(e,t,n){return"€ "+Object(r.a)(Math.round(e))},fontSize:this.fontSize,beginAtZero:!0},labels:{fontSize:this.fontSize}}],xAxes:[{ticks:{fontSize:this.fontSize}}]},responsive:!0,maintainAspectRatio:!0})}}},435:function(e,t,n){"use strict";n(408)},436:function(e,t,n){var r=n(36)(!1);r.push([e.i,".grafiekje[data-v-691543e1]{max-width:700px}",""]),e.exports=r}}]);