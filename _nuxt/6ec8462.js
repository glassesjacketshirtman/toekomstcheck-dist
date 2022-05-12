/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[4,21,31],{179:function(e,t,n){"use strict";function r(e){return"[object Object]"===Object.prototype.toString.call(e)}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function i(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,f(e,t)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t.indexOf(n=o[r])>=0||(i[n]=e[n]);return i}var a={silent:!1,logLevel:"warn"},d=["validator"],v=Object.prototype,h=v.toString,s=v.hasOwnProperty,j=/^\s*function (\w+)/;function p(e){var t,n=null!==(t=null==e?void 0:e.type)&&void 0!==t?t:e;if(n){var r=n.toString().match(j);return r?r[1]:""}return""}var y=function(e){var t,n;return!1!==r(e)&&(void 0===(t=e.constructor)||!1!==r(n=t.prototype)&&!1!==n.hasOwnProperty("isPrototypeOf"))},m=function(e){return e},g=function(e,t){return s.call(e,t)},_=Number.isInteger||function(e){return"number"==typeof e&&isFinite(e)&&Math.floor(e)===e},x=Array.isArray||function(e){return"[object Array]"===h.call(e)},k=function(e){return"[object Function]"===h.call(e)},w=function(e){return y(e)&&g(e,"_vueTypes_name")},O=function(e){return y(e)&&(g(e,"type")||["_vueTypes_name","validator","default","required"].some((function(t){return g(e,t)})))};function Q(e,t){return Object.defineProperty(e.bind(t),"__original",{value:e})}function z(e,t,n){var r;void 0===n&&(n=!1);var i=!0,o="";r=y(e)?e:{type:e};var u=w(r)?r._vueTypes_name+" - ":"";if(O(r)&&null!==r.type){if(void 0===r.type||!0===r.type)return i;if(!r.required&&void 0===t)return i;x(r.type)?(i=r.type.some((function(e){return!0===z(e,t,!0)})),o=r.type.map((function(e){return p(e)})).join(" or ")):i="Array"===(o=p(r))?x(t):"Object"===o?y(t):"String"===o||"Number"===o||"Boolean"===o||"Function"===o?function(e){if(null==e)return"";var t=e.constructor.toString().match(j);return t?t[1]:""}(t)===o:t instanceof r.type}if(!i){var a=u+'value "'+t+'" should be of type "'+o+'"';return!1===n?(m(a),!1):a}if(g(r,"validator")&&k(r.validator)){var l=m,c=[];if(m=function(e){c.push(e)},i=r.validator(t),m=l,!i){var f=(c.length>1?"* ":"")+c.join("\n* ");return c.length=0,!1===n?(m(f),i):f}}return i}function S(e,t){var n=Object.defineProperties(t,{_vueTypes_name:{value:e,writable:!0},isRequired:{get:function(){return this.required=!0,this}},def:{value:function(e){return void 0===e?(g(this,"default")&&delete this.default,this):k(e)||!0===z(this,e,!0)?(this.default=x(e)?function(){return[].concat(e)}:y(e)?function(){return Object.assign({},e)}:e,this):(m(this._vueTypes_name+' - invalid default value: "'+e+'"'),this)}}}),r=n.validator;return k(r)&&(n.validator=Q(r,n)),n}function N(e,t){var n=S(e,t);return Object.defineProperty(n,"validate",{value:function(e){return k(this.validator)&&m(this._vueTypes_name+" - calling .validate() will overwrite the current custom validator function. Validator info:\n"+JSON.stringify(this)),this.validator=Q(e,this),this}})}function T(e,t,n){var r,i,o=(r=t,i={},Object.getOwnPropertyNames(r).forEach((function(e){i[e]=Object.getOwnPropertyDescriptor(r,e)})),Object.defineProperties({},i));if(o._vueTypes_name=e,!y(n))return o;var a,l,c=n.validator,s=u(n,d);if(k(c)){var f=o.validator;f&&(f=null!==(l=(a=f).__original)&&void 0!==l?l:a),o.validator=Q(f?function(e){return f.call(this,e)&&c.call(this,e)}:c,o)}return Object.assign(o,s)}function L(e){return e.replace(/^(?!\s*$)/gm,"  ")}function P(e,t){if(void 0===t&&(t="custom validation failed"),"function"!=typeof e)throw new TypeError("[VueTypes error]: You must provide a function as argument");return S(e.name||"<<anonymous function>>",{validator:function(n){var r=e(n);return r||m(this._vueTypes_name+" - "+t),r}})}function B(e){if(!x(e))throw new TypeError("[VueTypes error]: You must provide an array as argument.");var t='oneOf - value should be one of "'+e.join('", "')+'".',n=e.reduce((function(e,t){if(null!=t){var n=t.constructor;-1===e.indexOf(n)&&e.push(n)}return e}),[]);return S("oneOf",{type:n.length>0?n:void 0,validator:function(n){var r=-1!==e.indexOf(n);return r||m(t),r}})}function E(e){if(!x(e))throw new TypeError("[VueTypes error]: You must provide an array as argument");for(var t=!1,n=[],r=0;r<e.length;r+=1){var i=e[r];if(O(i)){if(w(i)&&"oneOf"===i._vueTypes_name&&i.type){n=n.concat(i.type);continue}if(k(i.validator)&&(t=!0),!0===i.type||!i.type){m('oneOfType - invalid usage of "true" or "null" as types.');continue}i.type&&(n=n.concat(i.type))}n.push(i)}var o=(n=n.filter((function(e,t){return n.indexOf(e)===t}))).length>0?n:null;return S("oneOfType",t?{type:o,validator:function(t){var n=[],r=e.some((function(e){var r=z(w(e)&&"oneOf"===e._vueTypes_name?e.type||null:e,t,!0);return"string"==typeof r&&n.push(r),!0===r}));return r||m("oneOfType - provided value does not match any of the "+n.length+" passed-in validators:\n"+L(n.join("\n"))),r}}:{type:o})}function A(e){return S("arrayOf",{type:Array,validator:function(t){var n="",r=t.every((function(t){return!0===(n=z(e,t,!0))}));return r||m("arrayOf - value validation error:\n"+L(n)),r}})}function C(e){return S("instanceOf",{type:e})}function I(e){return S("objectOf",{type:Object,validator:function(t){var n="",r=Object.keys(t).every((function(r){return!0===(n=z(e,t[r],!0))}));return r||m("objectOf - value validation error:\n"+L(n)),r}})}function V(e){var t=Object.keys(e),n=t.filter((function(t){var n;return!(null===(n=e[t])||void 0===n||!n.required)})),r=S("shape",{type:Object,validator:function(r){var i=this;if(!y(r))return!1;var o=Object.keys(r);if(n.length>0&&n.some((function(e){return-1===o.indexOf(e)}))){var u=n.filter((function(e){return-1===o.indexOf(e)}));return m(1===u.length?'shape - required property "'+u[0]+'" is not defined.':'shape - required properties "'+u.join('", "')+'" are not defined.'),!1}return o.every((function(n){if(-1===t.indexOf(n))return!0===i._vueTypes_isLoose||(m('shape - shape definition does not include a "'+n+'" property. Allowed keys: "'+t.join('", "')+'".'),!1);var o=z(e[n],r[n],!0);return"string"==typeof o&&m('shape - "'+n+'" property validation error:\n '+L(o)),!0===o}))}});return Object.defineProperty(r,"_vueTypes_isLoose",{writable:!0,value:!1}),Object.defineProperty(r,"loose",{get:function(){return this._vueTypes_isLoose=!0,this}}),r}var D=["name","validate","getter"],F=function(){var e,t;return t=e=function(){function e(){}return e.extend=function(e){var t=this;if(x(e))return e.forEach((function(e){return t.extend(e)})),this;var n=e.name,r=e.validate,i=void 0!==r&&r,o=e.getter,a=void 0!==o&&o,l=u(e,D);if(g(this,n))throw new TypeError('[VueTypes error]: Type "'+n+'" already defined');var c,f=l.type;return w(f)?(delete l.type,Object.defineProperty(this,n,a?{get:function(){return T(n,f,l)}}:{value:function(){var e,t=T(n,f,l);return t.validator&&(t.validator=(e=t.validator).bind.apply(e,[t].concat([].slice.call(arguments)))),t}})):(c=a?{get:function(){var e=Object.assign({},l);return i?N(n,e):S(n,e)},enumerable:!0}:{value:function(){var e,t,r=Object.assign({},l);return e=i?N(n,r):S(n,r),r.validator&&(e.validator=(t=r.validator).bind.apply(t,[e].concat([].slice.call(arguments)))),e},enumerable:!0},Object.defineProperty(this,n,c))},l(e,null,[{key:"any",get:function(){return N("any",{})}},{key:"func",get:function(){return N("function",{type:Function}).def(this.defaults.func)}},{key:"bool",get:function(){return N("boolean",{type:Boolean}).def(this.defaults.bool)}},{key:"string",get:function(){return N("string",{type:String}).def(this.defaults.string)}},{key:"number",get:function(){return N("number",{type:Number}).def(this.defaults.number)}},{key:"array",get:function(){return N("array",{type:Array}).def(this.defaults.array)}},{key:"object",get:function(){return N("object",{type:Object}).def(this.defaults.object)}},{key:"integer",get:function(){return S("integer",{type:Number,validator:function(e){return _(e)}}).def(this.defaults.integer)}},{key:"symbol",get:function(){return S("symbol",{validator:function(e){return"symbol"==typeof e}})}}]),e}(),e.defaults={},e.sensibleDefaults=void 0,e.config=a,e.custom=P,e.oneOf=B,e.instanceOf=C,e.oneOfType=E,e.arrayOf=A,e.objectOf=I,e.shape=V,e.utils={validate:function(e,t){return!0===z(t,e,!0)},toType:function(e,t,n){return void 0===n&&(n=!1),n?N(e,t):S(e,t)}},t}();var M=function(e){function t(){return e.apply(this,arguments)||this}return i(t,e),t}(function(e){var t,n;return void 0===e&&(e={func:function(){},bool:!0,string:"",number:0,array:function(){return[]},object:function(){return{}},integer:0}),n=t=function(t){function n(){return t.apply(this,arguments)||this}return i(n,t),l(n,null,[{key:"sensibleDefaults",get:function(){return c({},this.defaults)},set:function(t){this.defaults=!1!==t?c({},!0!==t?t:e):{}}}]),n}(F),t.defaults=c({},e),n}());t.a=M},187:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));function r(e){false}},192:function(e,t,n){"use strict";n.d(t,"e",(function(){return o})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return f})),n.d(t,"f",(function(){return v})),n.d(t,"d",(function(){return h}));n(38),n(180);var r=n(197);function o(){return r.a.getQuestion("regelingen"),["kaspositie","ontvangsten","verwachteontvangsten","loonkosten","verwachteloonkosten","inkopen","verwachteinkopen","overigeuitgaven","verwachteoverigeuitgaven","uitgesteldebelastingen","investeringen","regelingen","medewerkers","handelsactiviteit","rechtsvorm","vestigingsplaats","jebenterbijna"]}function l(e){var t="Geen";return"B"==e?t="1-9":"C"==e?t="10-49":"D"==e?t="50-99":"E"==e?t="100-249":"F"==e&&(t="250+"),t}function c(e){var t="Eenmanszaak";return"B"==e?t="Venootschap onder firma (vof)":"C"==e?t="Besloten venootschap (bv)":"D"==e?t="Naamloze venootschap (nv)":"E"==e?t="Vereniging":"F"==e&&(t="Stichting"),t}function f(){return 21}var d=["/vragen/regelingen","/vragen/terugbetaling_tvl","/vragen/terugbetaling_now","/vragen/terugbetaling_tozo","/vragen/terugbetaling_togs","/vragen/terugbetaling_andere","/vragen/medewerkers"];function v(e){d[d.length-1]=e}function h(e){var t=d,n=t[0],o=t[t.length-1],l=r.a.getQuestion("regelingen");if(l){var c=[];c.push(t[0]),l.A&&c.push(t[1]),l.B&&c.push(t[2]),l.C&&c.push(t[3]),l.D&&c.push(t[4]),l.E&&c.push(t[5]),c.push(t[6]);for(var i=0;i<c.length-1;i++)e==c[i]&&(i>0&&(n=c[i-1]),o=c[i+1])}return{prevLink:n,nextLink:o}}},193:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return l}));n(12),n(49),n(50);var r=n(187);function o(e){return isNaN(e)?(Object(r.a)("formatToEuroCurrency NaN"),0):new Intl.NumberFormat("nl-NL",{maximumFractionDigits:0,minimumFractionDigits:0}).format(parseFloat(e))}function l(e){var t=e.toString().replaceAll(".","");return 0==t.length&&(t="0"),parseInt(t)}},197:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n(18),o=n(187),l=n(394),c=n(378).server_url+"/state/";Object(o.a)("server_url = "+c);var f={debug:!0,categories:["user","questions"],state:{user:{},questions:{}},setUser:function(e,t){f.state.user[e]=t,localStorage&&f.save_to_local_storage("user."+e,t),Object(o.a)(f.state)},setQuestion:function(e,t){f.state.questions[e]=t,localStorage&&f.save_to_local_storage("questions."+e,t)},getUser:function(e){var t=f.state.user[e];return t||!!(t=f.load_from_local_storage("user."+e))&&(f.setUser(e,t),t=f.state.user[e])},getQuestion:function(e){var t=f.state.questions[e];return t||!!(t=f.load_from_local_storage("questions."+e))&&(f.setQuestion(e,t),t=f.state.questions[e])},clear_local_storage:function(){localStorage&&localStorage.clear()},load_from_local_storage:function(e){return!(!localStorage||!localStorage.getItem(e))&&JSON.parse(localStorage.getItem(e))},save_to_local_storage:function(e,t){localStorage&&(Object(o.a)(e),Object(o.a)(t),"object"===Object(r.a)(t)&&null!==t?localStorage.setItem(e,JSON.stringify(t)):localStorage.setItem(e,t))},remove_from_server:function(e){l.delete(c+e).then((function(e){localStorage.clear(),console.log(e);var t=e.data;console.log("id="+t)})).catch((function(e){console.log(e)}))},save_to_server:function(e){console.log("save_to_server("+c+")"),f.getUser("user"),f.getQuestion("medewerkers"),f.getQuestion("handelsactiviteit"),f.getQuestion("rechtsvorm"),f.getQuestion("vestigingsplaats"),f.getQuestion("kaspositie"),f.getQuestion("ontvangsten"),f.getQuestion("verwachteontvangsten"),f.getQuestion("inkopen"),f.getQuestion("verwachteinkopen"),f.getQuestion("loonkosten"),f.getQuestion("verwachteloonkosten"),f.getQuestion("overigekosten"),f.getQuestion("verwachteoverigeuitgaven"),f.getQuestion("uitgesteldebelastingen"),f.getQuestion("investeringen"),f.getQuestion("regelingen"),f.getQuestion("terugbetaling_tvl"),f.getQuestion("terugbetaling_now"),f.getQuestion("terugbetaling_tozo"),f.getQuestion("terugbetaling_togs"),f.getQuestion("terugbetaling_andere"),console.log("state="),Object(o.a)(f.state),l.post(c,f.state).then((function(t){console.log(t);var n=t.data;console.log("id="),Object(o.a)(n),e(n)})).catch((function(e){console.log(e)}))},load_from_server:function(e,t){Object(o.a)("load_from_server()"),l.get(c+e,{}).then((function(e){Object(o.a)(e.data);var n=JSON.parse(e.data);Object(o.a)("state:"),Object(o.a)(n),Object(o.a)("state.questions:"),Object(o.a)(n.questions),Object(o.a)("state.questions.medewerkers:"),Object(o.a)(n.questions.medewerkers),n.user&&f.setUser("user",n.user),n.questions&&(n.questions.medewerkers&&f.setQuestion("medewerkers",n.questions.medewerkers),n.questions.handelsactiviteit&&f.setQuestion("handelsactiviteit",n.questions.handelsactiviteit),n.questions.rechtsvorm&&f.setQuestion("rechtsvorm",n.questions.rechtsvorm),n.questions.vestigingsplaats&&f.setQuestion("vestigingsplaats",n.questions.vestigingsplaats),n.questions.kaspositie&&f.setQuestion("kaspositie",n.questions.kaspositie),n.questions.ontvangsten&&f.setQuestion("ontvangsten",n.questions.ontvangsten),n.questions.verwachteontvangsten&&f.setQuestion("verwachteontvangsten",n.questions.verwachteontvangsten),n.questions.inkopen&&f.setQuestion("inkopen",n.questions.inkopen),n.questions.verwachteinkopen&&f.setQuestion("verwachteinkopen",n.questions.verwachteinkopen),n.questions.loonkosten&&f.setQuestion("loonkosten",n.questions.loonkosten),n.questions.verwachteloonkosten&&f.setQuestion("verwachteloonkosten",n.questions.verwachteloonkosten),n.questions.overigekosten&&f.setQuestion("overigekosten",n.questions.overigekosten),n.questions.verwachteoverigeuitgaven&&f.setQuestion("verwachteoverigeuitgaven",n.questions.verwachteoverigeuitgaven),n.questions.uitgesteldebetalingen&&f.setQuestion("uitgesteldebetalingen",n.questions.uitgesteldebetalingen),n.questions.investeringen&&f.setQuestion("investeringen",n.questions.investeringen),n.questions.regelingen&&f.setQuestion("regelingen",n.questions.regelingen),n.questions.terugbetaling_tvl&&f.setQuestion("terugbetaling_tvl",n.questions.terugbetaling_tvl),n.questions.terugbetaling_now&&f.setQuestion("terugbetaling_now",n.questions.terugbetaling_now),n.questions.terugbetaling_tozo&&f.setQuestion("terugbetaling_tozo",n.questions.terugbetaling_tozo),n.questions.terugbetaling_togs&&f.setQuestion("terugbetaling_togs",n.questions.terugbetaling_togs),n.questions.terugbetaling_andere&&f.setQuestion("terugbetaling_andere",n.questions.terugbetaling_andere)),console.log("state = "),Object(o.a)(f.state),t(e.data)})).catch((function(e){console.log(e)})).then((function(){}))}}},206:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return c}));var r=n(187),o=n(193);function l(e){var t=document.getElementById(e.target.id).value;if(Object(r.a)(t),void 0===t)return Object(r.a)("handleInput() - undefined"),!1;var n=Object(o.b)(document.getElementById(e.target.id).value);if(Object(r.a)(n),!isNaN(n)){var l=Object(o.a)(Object(o.b)(document.getElementById(e.target.id).value));return Object(r.a)(l),l}return Object(r.a)(n+"is not a number"),Object(r.a)("returning false"),!1}function c(e){return void 0===e?(Object(r.a)("handleInput() - undefined"),!1):!!Date.parse(e)&&e}},227:function(e,t,n){var content=n(237);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(37).default)("7c65d437",content,!0,{sourceMap:!1})},236:function(e,t,n){"use strict";n(227)},237:function(e,t,n){var r=n(36)(!1);r.push([e.i,".form-group[data-v-a1648ea2]{margin:5px 0}",""]),e.exports=r},373:function(e,t,n){"use strict";n.r(t);var r=n(179),o={name:"text_box",props:{title:r.a.string.def(""),id:r.a.string.def("main"),type:r.a.oneOf(["text","number","email","password"]).def("text"),disabled:r.a.bool.def(!1),value:r.a.any.def("")},methods:{handleEnter:function(e){this.$emit("input",e)},handleKeyUp:function(e){this.$emit("keyup",e)}}},l=(n(236),n(28)),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"inputbox"},[n("div",{staticClass:"form-group"},[n("label",{staticStyle:{"font-size":"16px","font-weight":"bold","line-height":"24px"},attrs:{for:"id"}},[e._v("\n        "+e._s(e.title)+"\n      ")]),e._v(" "),n("div",{staticClass:"textinput",staticStyle:{background:"white",padding:"0","border-radius":"4px","font-size":"16px","font-weight":"bold","line-height":"24px"}},[n("table",[n("tr",[n("td",{staticStyle:{"padding-left":"8px"}},[e._v("\n              €\n            ")]),e._v(" "),n("td",[n("input",{ref:e.id,staticStyle:{padding:"5px",width:"100%",border:"none"},attrs:{id:e.id,type:e.type,disabled:e.disabled,autocomplete:"off"},domProps:{value:e.value},on:{keyup:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleEnter(t)},function(t){return e.handleKeyUp(t)}]}})])])])])])])])}),[],!1,null,"a1648ea2",null);t.default=component.exports},378:function(e,t){e.exports={server_url:"https://detoekomstcheck.nl"}},391:function(e,t,n){var map={"./af":238,"./af.js":238,"./ar":239,"./ar-dz":240,"./ar-dz.js":240,"./ar-kw":241,"./ar-kw.js":241,"./ar-ly":242,"./ar-ly.js":242,"./ar-ma":243,"./ar-ma.js":243,"./ar-sa":244,"./ar-sa.js":244,"./ar-tn":245,"./ar-tn.js":245,"./ar.js":239,"./az":246,"./az.js":246,"./be":247,"./be.js":247,"./bg":248,"./bg.js":248,"./bm":249,"./bm.js":249,"./bn":250,"./bn-bd":251,"./bn-bd.js":251,"./bn.js":250,"./bo":252,"./bo.js":252,"./br":253,"./br.js":253,"./bs":254,"./bs.js":254,"./ca":255,"./ca.js":255,"./cs":256,"./cs.js":256,"./cv":257,"./cv.js":257,"./cy":258,"./cy.js":258,"./da":259,"./da.js":259,"./de":260,"./de-at":261,"./de-at.js":261,"./de-ch":262,"./de-ch.js":262,"./de.js":260,"./dv":263,"./dv.js":263,"./el":264,"./el.js":264,"./en-au":265,"./en-au.js":265,"./en-ca":266,"./en-ca.js":266,"./en-gb":267,"./en-gb.js":267,"./en-ie":268,"./en-ie.js":268,"./en-il":269,"./en-il.js":269,"./en-in":270,"./en-in.js":270,"./en-nz":271,"./en-nz.js":271,"./en-sg":272,"./en-sg.js":272,"./eo":273,"./eo.js":273,"./es":274,"./es-do":275,"./es-do.js":275,"./es-mx":276,"./es-mx.js":276,"./es-us":277,"./es-us.js":277,"./es.js":274,"./et":278,"./et.js":278,"./eu":279,"./eu.js":279,"./fa":280,"./fa.js":280,"./fi":281,"./fi.js":281,"./fil":282,"./fil.js":282,"./fo":283,"./fo.js":283,"./fr":284,"./fr-ca":285,"./fr-ca.js":285,"./fr-ch":286,"./fr-ch.js":286,"./fr.js":284,"./fy":287,"./fy.js":287,"./ga":288,"./ga.js":288,"./gd":289,"./gd.js":289,"./gl":290,"./gl.js":290,"./gom-deva":291,"./gom-deva.js":291,"./gom-latn":292,"./gom-latn.js":292,"./gu":293,"./gu.js":293,"./he":294,"./he.js":294,"./hi":295,"./hi.js":295,"./hr":296,"./hr.js":296,"./hu":297,"./hu.js":297,"./hy-am":298,"./hy-am.js":298,"./id":299,"./id.js":299,"./is":300,"./is.js":300,"./it":301,"./it-ch":302,"./it-ch.js":302,"./it.js":301,"./ja":303,"./ja.js":303,"./jv":304,"./jv.js":304,"./ka":305,"./ka.js":305,"./kk":306,"./kk.js":306,"./km":307,"./km.js":307,"./kn":308,"./kn.js":308,"./ko":309,"./ko.js":309,"./ku":310,"./ku.js":310,"./ky":311,"./ky.js":311,"./lb":312,"./lb.js":312,"./lo":313,"./lo.js":313,"./lt":314,"./lt.js":314,"./lv":315,"./lv.js":315,"./me":316,"./me.js":316,"./mi":317,"./mi.js":317,"./mk":318,"./mk.js":318,"./ml":319,"./ml.js":319,"./mn":320,"./mn.js":320,"./mr":321,"./mr.js":321,"./ms":322,"./ms-my":323,"./ms-my.js":323,"./ms.js":322,"./mt":324,"./mt.js":324,"./my":325,"./my.js":325,"./nb":326,"./nb.js":326,"./ne":327,"./ne.js":327,"./nl":328,"./nl-be":329,"./nl-be.js":329,"./nl.js":328,"./nn":330,"./nn.js":330,"./oc-lnc":331,"./oc-lnc.js":331,"./pa-in":332,"./pa-in.js":332,"./pl":333,"./pl.js":333,"./pt":334,"./pt-br":335,"./pt-br.js":335,"./pt.js":334,"./ro":336,"./ro.js":336,"./ru":337,"./ru.js":337,"./sd":338,"./sd.js":338,"./se":339,"./se.js":339,"./si":340,"./si.js":340,"./sk":341,"./sk.js":341,"./sl":342,"./sl.js":342,"./sq":343,"./sq.js":343,"./sr":344,"./sr-cyrl":345,"./sr-cyrl.js":345,"./sr.js":344,"./ss":346,"./ss.js":346,"./sv":347,"./sv.js":347,"./sw":348,"./sw.js":348,"./ta":349,"./ta.js":349,"./te":350,"./te.js":350,"./tet":351,"./tet.js":351,"./tg":352,"./tg.js":352,"./th":353,"./th.js":353,"./tk":354,"./tk.js":354,"./tl-ph":355,"./tl-ph.js":355,"./tlh":356,"./tlh.js":356,"./tr":357,"./tr.js":357,"./tzl":358,"./tzl.js":358,"./tzm":359,"./tzm-latn":360,"./tzm-latn.js":360,"./tzm.js":359,"./ug-cn":361,"./ug-cn.js":361,"./uk":362,"./uk.js":362,"./ur":363,"./ur.js":363,"./uz":364,"./uz-latn":365,"./uz-latn.js":365,"./uz.js":364,"./vi":366,"./vi.js":366,"./x-pseudo":367,"./x-pseudo.js":367,"./yo":368,"./yo.js":368,"./zh-cn":369,"./zh-cn.js":369,"./zh-hk":370,"./zh-hk.js":370,"./zh-mo":371,"./zh-mo.js":371,"./zh-tw":372,"./zh-tw.js":372};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}r.keys=function(){return Object.keys(map)},r.resolve=o,e.exports=r,r.id=391},413:function(e,t,n){var content=n(451);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(37).default)("94c271e0",content,!0,{sourceMap:!1})},416:function(e,t,n){"use strict";n.r(t);var r=n(192),o=n(206),l=n(197),c=n(193),f=n(179),d={name:"terugbetaling_regeling",data:function(){return{progressBarNextActive:!1,maxProgress:Object(r.a)(),inputValue:"0",links:{prevLink:"",nextLink:""}}},props:{title:f.a.String,intro_text:f.a.String,input_label:f.a.String,storageKey:f.a.String,pageName:f.a.String,progress:f.a.Number},mounted:function(){this.links=Object(r.d)(this.pageName);var e=l.a.getQuestion(this.storageKey);e&&e.bedrag&&(this.inputValue=e.bedrag,this.progressBarNextActive=!0)},methods:{handleEnter:function(e){var input=Object(o.b)(e);input?(this.inputValue=input,l.a.setQuestion(this.storageKey,{bedrag:parseInt(Object(c.b)(input))}),this.progressBarNextActive=!0):this.progressBarNextActive=!1}}},v=n(28),component=Object(v.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main"},[n("section",{staticClass:"content",staticStyle:{"max-width":"700px",margin:"0 auto"}},[n("h2",[e._v(e._s(e.title))]),e._v(" "),n("div",{staticStyle:{width:"600px","font-size":"16px","line-height":"24px"}},[e._v("\n      "+e._s(e.intro_text)+"\n    ")]),e._v(" "),n("TextInput",{attrs:{title:e.input_label,value:e.inputValue},on:{input:function(t){return e.handleEnter(t)},keyup:function(t){return e.handleEnter(t)}}})],1),e._v(" "),n("progressbar",{attrs:{progress:e.progress,maxProgress:e.maxProgress,progressBarPrevActive:!0,progressBarNextActive:e.progressBarNextActive,prevLink:e.links.prevLink,nextLink:e.links.nextLink}})],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{TextInput:n(373).default,Progressbar:n(490).default})},450:function(e,t,n){"use strict";n(413)},451:function(e,t,n){var r=n(36)(!1);r.push([e.i,".bar-container[data-v-244eaf03]{width:115px;float:left;height:48px;padding:5px 24px}.innerbar-border[data-v-244eaf03]{color:#000!important;background-color:#f1f1f1!important;width:100%}.innerbar-bar[data-v-244eaf03]{margin:18px 0 0;background-color:#2e3a59;height:4px}.progressbar[data-v-244eaf03]{margin:120px auto 10px;padding:4px;background-color:#fff;border-radius:0 16px;width:330px;height:54px;filter:drop-shadow(0 4px 20px rgba(45,47,48,.1))}@media(min-width:375px){.progressbar[data-v-244eaf03]{width:350px;left:calc(50% - 175px)}.bar-container[data-v-244eaf03]{width:134px}}@media(min-width:550px){.progressbar[data-v-244eaf03]{width:502px;left:calc(50% - 250px)}.bar-container[data-v-244eaf03]{width:285px}}@media(min-width:750px){.progressbar[data-v-244eaf03]{width:702px;left:calc(50% - 350px)}.bar-container[data-v-244eaf03]{width:485px}}@media(min-width:950px){.progressbar[data-v-244eaf03]{width:866px;left:calc(50% - 433px)}.bar-container[data-v-244eaf03]{width:650px}}.btn_prev[data-v-244eaf03]{align-items:center;text-align:center;background-color:#fff;padding:10px;border:1px solid #2e3a59;opacity:.3;color:#2e3a59;width:46px;height:46px;float:left;border-radius:0 16px}.btn_prev_inner[data-v-244eaf03]{display:flex;flex-direction:row;align-items:center;padding:0;margin:0;font-size:14px}.btn_next[data-v-244eaf03]{align-items:center;text-align:center;padding:12px 12px 12px 16px;border-radius:0 16px;background:#f07c00;width:160px;height:46px;border:none;opacity:.3;float:left}.btn_next_inner[data-v-244eaf03]{display:flex;flex-direction:row;align-items:center;padding:0;margin:0;font-size:14px;font-style:normal;font-weight:700;line-height:22px;color:#fff}.btn_next.active[data-v-244eaf03]{opacity:1}.btn_next a[data-v-244eaf03]{color:#fff}.btn_next a[data-v-244eaf03],.btn_prev a[data-v-244eaf03]{text-decoration:none;cursor:default}.btn_next[data-v-244eaf03],.btn_next.active a[data-v-244eaf03],.btn_prev[data-v-244eaf03],.btn_prev.active a[data-v-244eaf03]{cursor:pointer}",""]),e.exports=r},490:function(e,t,n){"use strict";n.r(t);var r=n(179),o={name:"progressbar",props:{progress:r.a.Number,maxProgress:r.a.Number,progressBarPrevActive:r.a.bool,progressBarNextActive:r.a.bool,prevLink:r.a.String,nextLink:r.a.String},data:function(){return{}},computed:{calcProgressBarWidth:function(){return Math.round(100*this.progress/this.maxProgress)+"%"}},mounted:function(){}},l=(n(450),n(28)),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"progressbar"},[n("nuxt-link",{attrs:{event:e.progressBarPrevActive?"click":"",to:e.prevLink}},[n("button",{staticClass:"btn_prev",class:{active:e.progressBarPrevActive}},[n("div",{staticClass:"btn_prev_inner"},[n("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M8.28906 12L14.2991 18.01L15.7131 16.596L11.1131 11.996L15.7131 7.39601L14.2991 5.99001L8.28906 12Z",fill:"#002156"}})])])])]),e._v(" "),n("div",{staticClass:"bar-container"},[n("div",{staticClass:"innerbar-border"},[n("div",{staticClass:"innerbar-bar",style:{width:e.calcProgressBarWidth}})])]),e._v(" "),n("nuxt-link",{attrs:{event:e.progressBarNextActive?"click":"",to:e.nextLink}},[n("button",{staticClass:"btn_next",class:{active:e.progressBarNextActive}},[n("div",{staticClass:"btn_next_inner"},[e._v("\n        Volgende vraag\n        "),n("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M15.7141 12L9.70306 5.99001L8.28906 7.40401L12.8891 12.004L8.28906 16.597L9.70306 18.011L15.7141 12Z",fill:"white"}})])])])])],1)}),[],!1,null,"244eaf03",null);t.default=component.exports}}]);