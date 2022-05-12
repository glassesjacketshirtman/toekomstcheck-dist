/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{179:function(e,t,n){"use strict";function r(e){return"[object Object]"===Object.prototype.toString.call(e)}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function i(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,f(e,t)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t.indexOf(n=o[r])>=0||(i[n]=e[n]);return i}var a={silent:!1,logLevel:"warn"},d=["validator"],v=Object.prototype,y=v.toString,s=v.hasOwnProperty,h=/^\s*function (\w+)/;function p(e){var t,n=null!==(t=null==e?void 0:e.type)&&void 0!==t?t:e;if(n){var r=n.toString().match(h);return r?r[1]:""}return""}var m=function(e){var t,n;return!1!==r(e)&&(void 0===(t=e.constructor)||!1!==r(n=t.prototype)&&!1!==n.hasOwnProperty("isPrototypeOf"))},_=function(e){return e},g=function(e,t){return s.call(e,t)},w=Number.isInteger||function(e){return"number"==typeof e&&isFinite(e)&&Math.floor(e)===e},j=Array.isArray||function(e){return"[object Array]"===y.call(e)},O=function(e){return"[object Function]"===y.call(e)},x=function(e){return m(e)&&g(e,"_vueTypes_name")},k=function(e){return m(e)&&(g(e,"type")||["_vueTypes_name","validator","default","required"].some((function(t){return g(e,t)})))};function T(e,t){return Object.defineProperty(e.bind(t),"__original",{value:e})}function P(e,t,n){var r;void 0===n&&(n=!1);var i=!0,o="";r=m(e)?e:{type:e};var u=x(r)?r._vueTypes_name+" - ":"";if(k(r)&&null!==r.type){if(void 0===r.type||!0===r.type)return i;if(!r.required&&void 0===t)return i;j(r.type)?(i=r.type.some((function(e){return!0===P(e,t,!0)})),o=r.type.map((function(e){return p(e)})).join(" or ")):i="Array"===(o=p(r))?j(t):"Object"===o?m(t):"String"===o||"Number"===o||"Boolean"===o||"Function"===o?function(e){if(null==e)return"";var t=e.constructor.toString().match(h);return t?t[1]:""}(t)===o:t instanceof r.type}if(!i){var a=u+'value "'+t+'" should be of type "'+o+'"';return!1===n?(_(a),!1):a}if(g(r,"validator")&&O(r.validator)){var c=_,l=[];if(_=function(e){l.push(e)},i=r.validator(t),_=c,!i){var f=(l.length>1?"* ":"")+l.join("\n* ");return l.length=0,!1===n?(_(f),i):f}}return i}function S(e,t){var n=Object.defineProperties(t,{_vueTypes_name:{value:e,writable:!0},isRequired:{get:function(){return this.required=!0,this}},def:{value:function(e){return void 0===e?(g(this,"default")&&delete this.default,this):O(e)||!0===P(this,e,!0)?(this.default=j(e)?function(){return[].concat(e)}:m(e)?function(){return Object.assign({},e)}:e,this):(_(this._vueTypes_name+' - invalid default value: "'+e+'"'),this)}}}),r=n.validator;return O(r)&&(n.validator=T(r,n)),n}function C(e,t){var n=S(e,t);return Object.defineProperty(n,"validate",{value:function(e){return O(this.validator)&&_(this._vueTypes_name+" - calling .validate() will overwrite the current custom validator function. Validator info:\n"+JSON.stringify(this)),this.validator=T(e,this),this}})}function B(e,t,n){var r,i,o=(r=t,i={},Object.getOwnPropertyNames(r).forEach((function(e){i[e]=Object.getOwnPropertyDescriptor(r,e)})),Object.defineProperties({},i));if(o._vueTypes_name=e,!m(n))return o;var a,c,l=n.validator,s=u(n,d);if(O(l)){var f=o.validator;f&&(f=null!==(c=(a=f).__original)&&void 0!==c?c:a),o.validator=T(f?function(e){return f.call(this,e)&&l.call(this,e)}:l,o)}return Object.assign(o,s)}function V(e){return e.replace(/^(?!\s*$)/gm,"  ")}function z(e,t){if(void 0===t&&(t="custom validation failed"),"function"!=typeof e)throw new TypeError("[VueTypes error]: You must provide a function as argument");return S(e.name||"<<anonymous function>>",{validator:function(n){var r=e(n);return r||_(this._vueTypes_name+" - "+t),r}})}function E(e){if(!j(e))throw new TypeError("[VueTypes error]: You must provide an array as argument.");var t='oneOf - value should be one of "'+e.join('", "')+'".',n=e.reduce((function(e,t){if(null!=t){var n=t.constructor;-1===e.indexOf(n)&&e.push(n)}return e}),[]);return S("oneOf",{type:n.length>0?n:void 0,validator:function(n){var r=-1!==e.indexOf(n);return r||_(t),r}})}function H(e){if(!j(e))throw new TypeError("[VueTypes error]: You must provide an array as argument");for(var t=!1,n=[],r=0;r<e.length;r+=1){var i=e[r];if(k(i)){if(x(i)&&"oneOf"===i._vueTypes_name&&i.type){n=n.concat(i.type);continue}if(O(i.validator)&&(t=!0),!0===i.type||!i.type){_('oneOfType - invalid usage of "true" or "null" as types.');continue}i.type&&(n=n.concat(i.type))}n.push(i)}var o=(n=n.filter((function(e,t){return n.indexOf(e)===t}))).length>0?n:null;return S("oneOfType",t?{type:o,validator:function(t){var n=[],r=e.some((function(e){var r=P(x(e)&&"oneOf"===e._vueTypes_name?e.type||null:e,t,!0);return"string"==typeof r&&n.push(r),!0===r}));return r||_("oneOfType - provided value does not match any of the "+n.length+" passed-in validators:\n"+V(n.join("\n"))),r}}:{type:o})}function M(e){return S("arrayOf",{type:Array,validator:function(t){var n="",r=t.every((function(t){return!0===(n=P(e,t,!0))}));return r||_("arrayOf - value validation error:\n"+V(n)),r}})}function N(e){return S("instanceOf",{type:e})}function A(e){return S("objectOf",{type:Object,validator:function(t){var n="",r=Object.keys(t).every((function(r){return!0===(n=P(e,t[r],!0))}));return r||_("objectOf - value validation error:\n"+V(n)),r}})}function D(e){var t=Object.keys(e),n=t.filter((function(t){var n;return!(null===(n=e[t])||void 0===n||!n.required)})),r=S("shape",{type:Object,validator:function(r){var i=this;if(!m(r))return!1;var o=Object.keys(r);if(n.length>0&&n.some((function(e){return-1===o.indexOf(e)}))){var u=n.filter((function(e){return-1===o.indexOf(e)}));return _(1===u.length?'shape - required property "'+u[0]+'" is not defined.':'shape - required properties "'+u.join('", "')+'" are not defined.'),!1}return o.every((function(n){if(-1===t.indexOf(n))return!0===i._vueTypes_isLoose||(_('shape - shape definition does not include a "'+n+'" property. Allowed keys: "'+t.join('", "')+'".'),!1);var o=P(e[n],r[n],!0);return"string"==typeof o&&_('shape - "'+n+'" property validation error:\n '+V(o)),!0===o}))}});return Object.defineProperty(r,"_vueTypes_isLoose",{writable:!0,value:!1}),Object.defineProperty(r,"loose",{get:function(){return this._vueTypes_isLoose=!0,this}}),r}var Z=["name","validate","getter"],Y=function(){var e,t;return t=e=function(){function e(){}return e.extend=function(e){var t=this;if(j(e))return e.forEach((function(e){return t.extend(e)})),this;var n=e.name,r=e.validate,i=void 0!==r&&r,o=e.getter,a=void 0!==o&&o,c=u(e,Z);if(g(this,n))throw new TypeError('[VueTypes error]: Type "'+n+'" already defined');var l,f=c.type;return x(f)?(delete c.type,Object.defineProperty(this,n,a?{get:function(){return B(n,f,c)}}:{value:function(){var e,t=B(n,f,c);return t.validator&&(t.validator=(e=t.validator).bind.apply(e,[t].concat([].slice.call(arguments)))),t}})):(l=a?{get:function(){var e=Object.assign({},c);return i?C(n,e):S(n,e)},enumerable:!0}:{value:function(){var e,t,r=Object.assign({},c);return e=i?C(n,r):S(n,r),r.validator&&(e.validator=(t=r.validator).bind.apply(t,[e].concat([].slice.call(arguments)))),e},enumerable:!0},Object.defineProperty(this,n,l))},c(e,null,[{key:"any",get:function(){return C("any",{})}},{key:"func",get:function(){return C("function",{type:Function}).def(this.defaults.func)}},{key:"bool",get:function(){return C("boolean",{type:Boolean}).def(this.defaults.bool)}},{key:"string",get:function(){return C("string",{type:String}).def(this.defaults.string)}},{key:"number",get:function(){return C("number",{type:Number}).def(this.defaults.number)}},{key:"array",get:function(){return C("array",{type:Array}).def(this.defaults.array)}},{key:"object",get:function(){return C("object",{type:Object}).def(this.defaults.object)}},{key:"integer",get:function(){return S("integer",{type:Number,validator:function(e){return w(e)}}).def(this.defaults.integer)}},{key:"symbol",get:function(){return S("symbol",{validator:function(e){return"symbol"==typeof e}})}}]),e}(),e.defaults={},e.sensibleDefaults=void 0,e.config=a,e.custom=z,e.oneOf=E,e.instanceOf=N,e.oneOfType=H,e.arrayOf=M,e.objectOf=A,e.shape=D,e.utils={validate:function(e,t){return!0===P(t,e,!0)},toType:function(e,t,n){return void 0===n&&(n=!1),n?C(e,t):S(e,t)}},t}();var F=function(e){function t(){return e.apply(this,arguments)||this}return i(t,e),t}(function(e){var t,n;return void 0===e&&(e={func:function(){},bool:!0,string:"",number:0,array:function(){return[]},object:function(){return{}},integer:0}),n=t=function(t){function n(){return t.apply(this,arguments)||this}return i(n,t),c(n,null,[{key:"sensibleDefaults",get:function(){return l({},this.defaults)},set:function(t){this.defaults=!1!==t?l({},!0!==t?t:e):{}}}]),n}(Y),t.defaults=l({},e),n}());t.a=F},187:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));function r(e){false}},406:function(e,t,n){var content=n(432);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(37).default)("d4e62cd6",content,!0,{sourceMap:!1})},431:function(e,t,n){"use strict";n(406)},432:function(e,t,n){var r=n(36)(!1);r.push([e.i,".scenarios_intro2[data-v-95c940b4]{color:#002156;font-size:18px;line-height:28px;letter-spacing:-.3px;margin:30px 0}.intro_kasstroom[data-v-95c940b4]{margin-top:50px;text-align:center}.scenarios_intro2 a[data-v-95c940b4]{color:#002156;font-size:16px}",""]),e.exports=r},485:function(e,t,n){"use strict";n.r(t);var r=n(179),o=n(187),c={name:"intro_kasstroom",props:{scenario_result:r.a.String},data:function(){return{}},computed:{},methods:{gotoBookmark:function(e){Object(o.a)("gotoBookmark");document.getElementById("scenarios_footer");return"scrollBehavior"in document.documentElement.style?window.scrollTo({top:700+window.scrollY,behavior:"smooth"}):window.scrollTo(0,700+window.scrollY)}}},l=(n(431),n(28)),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"intro_kasstroom"},[n("div",{directives:[{name:"show",rawName:"v-show",value:"ok"==e.scenario_result,expression:"scenario_result=='ok'"}]},[n("h2",{staticStyle:{"font-family":"Public Sans","font-style":"normal","font-weight":"800","font-size":"32px","line-height":"40px","text-align":"center","letter-spacing":"-1px"}},[n("span",[e._v("Er zijn aandachtspunten")]),e._v(" "),n("span",{staticStyle:{"padding-bottom":"90px"}},[n("svg",{attrs:{width:"21",height:"20",viewBox:"0 0 21 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M10.6788 20C5.30423 20 0.947266 15.5228 0.947266 10C0.947266 4.47715 5.30423 0 10.6788 0C16.0534 0 20.4104 4.47715 20.4104 10C20.4045 15.5203 16.0509 19.9939 10.6788 20ZM9.70566 13V15H11.652V13H9.70566ZM9.70566 5V11H11.652V5H9.70566Z",fill:"#D21C1C"}})])])]),e._v(" "),n("div",{staticClass:"scenarios_intro2"},[n("div",[e._v("\n        De resultaten van jouw toekomstcheck wijzen op een aantal aandachtspunten. Bekijk ze snel hieronder.\n        ")]),e._v(" "),n("div",{staticStyle:{margin:"20px 0","font-weight":"bold","text-decoration-line":"underline"}},[n("nuxt-link",{attrs:{to:{path:"/scenarios",hash:"#scenarios_footer"}}},[e._v("Bekijk aandachtspunten")])],1)])]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:"bad"==e.scenario_result,expression:"scenario_result=='bad'"}]},[n("h2",{staticStyle:{"font-family":"Public Sans","font-style":"normal","font-weight":"800","font-size":"32px","line-height":"40px","text-align":"center","letter-spacing":"-1px"}},[n("span",[e._v("Er zijn aandachtpunten")]),e._v(" "),n("span",[n("svg",{attrs:{width:"21",height:"20",viewBox:"0 0 21 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M10.6788 20C5.30423 20 0.947266 15.5228 0.947266 10C0.947266 4.47715 5.30423 0 10.6788 0C16.0534 0 20.4104 4.47715 20.4104 10C20.4045 15.5203 16.0509 19.9939 10.6788 20ZM9.70566 13V15H11.652V13H9.70566ZM9.70566 5V11H11.652V5H9.70566Z",fill:"#D21C1C"}})])])]),e._v(" "),n("div",{staticClass:"scenarios_intro2"},[n("div",[e._v("\n        De resultaten van jouw Toekomstcheck wijzen op een aantal aandachtspunten. Bekijk ze snel hieronder.\n        ")]),e._v(" "),n("div",{staticStyle:{margin:"20px 0","font-weight":"bold","text-decoration-line":"underline"}},[n("nuxt-link",{attrs:{to:{path:"/scenarios",hash:"#scenarios_footer"}}},[e._v("Bekijk aandachtspunten")])],1)])]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:"good"==e.scenario_result,expression:"scenario_result=='good'"}]},[n("h2",{staticStyle:{"font-family":"Public Sans","font-style":"normal","font-weight":"800","font-size":"32px","line-height":"40px","text-align":"center","letter-spacing":"-1px"}},[e._v("\n        Je liquiditeit lijkt in orde\n      ")]),e._v(" "),n("div",{staticClass:"scenarios_intro2"},[n("div",[e._v("\n          Het lijkt er op dat je de wind in de zeilen hebt en je ruimschoots aan al je verplichtingen kunt voldoen! We hebben wel wat interessante tips voor je.\n        ")]),e._v(" "),n("div",{staticStyle:{margin:"20px 0","font-weight":"bold","text-decoration-line":"underline"}},[n("nuxt-link",{attrs:{to:{path:"/scenarios",hash:"#scenarios_footer"}}},[e._v("Bekijk tips")])],1)])])])}),[],!1,null,"95c940b4",null);t.default=component.exports}}]);