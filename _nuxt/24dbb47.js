/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{179:function(e,t,n){"use strict";function r(e){return"[object Object]"===Object.prototype.toString.call(e)}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function i(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,f(e,t)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t.indexOf(n=o[r])>=0||(i[n]=e[n]);return i}var a={silent:!1,logLevel:"warn"},d=["validator"],v=Object.prototype,y=v.toString,s=v.hasOwnProperty,h=/^\s*function (\w+)/;function p(e){var t,n=null!==(t=null==e?void 0:e.type)&&void 0!==t?t:e;if(n){var r=n.toString().match(h);return r?r[1]:""}return""}var m=function(e){var t,n;return!1!==r(e)&&(void 0===(t=e.constructor)||!1!==r(n=t.prototype)&&!1!==n.hasOwnProperty("isPrototypeOf"))},_=function(e){return e},g=function(e,t){return s.call(e,t)},O=Number.isInteger||function(e){return"number"==typeof e&&isFinite(e)&&Math.floor(e)===e},j=Array.isArray||function(e){return"[object Array]"===y.call(e)},w=function(e){return"[object Function]"===y.call(e)},k=function(e){return m(e)&&g(e,"_vueTypes_name")},x=function(e){return m(e)&&(g(e,"type")||["_vueTypes_name","validator","default","required"].some((function(t){return g(e,t)})))};function T(e,t){return Object.defineProperty(e.bind(t),"__original",{value:e})}function P(e,t,n){var r;void 0===n&&(n=!1);var i=!0,o="";r=m(e)?e:{type:e};var u=k(r)?r._vueTypes_name+" - ":"";if(x(r)&&null!==r.type){if(void 0===r.type||!0===r.type)return i;if(!r.required&&void 0===t)return i;j(r.type)?(i=r.type.some((function(e){return!0===P(e,t,!0)})),o=r.type.map((function(e){return p(e)})).join(" or ")):i="Array"===(o=p(r))?j(t):"Object"===o?m(t):"String"===o||"Number"===o||"Boolean"===o||"Function"===o?function(e){if(null==e)return"";var t=e.constructor.toString().match(h);return t?t[1]:""}(t)===o:t instanceof r.type}if(!i){var a=u+'value "'+t+'" should be of type "'+o+'"';return!1===n?(_(a),!1):a}if(g(r,"validator")&&w(r.validator)){var c=_,l=[];if(_=function(e){l.push(e)},i=r.validator(t),_=c,!i){var f=(l.length>1?"* ":"")+l.join("\n* ");return l.length=0,!1===n?(_(f),i):f}}return i}function C(e,t){var n=Object.defineProperties(t,{_vueTypes_name:{value:e,writable:!0},isRequired:{get:function(){return this.required=!0,this}},def:{value:function(e){return void 0===e?(g(this,"default")&&delete this.default,this):w(e)||!0===P(this,e,!0)?(this.default=j(e)?function(){return[].concat(e)}:m(e)?function(){return Object.assign({},e)}:e,this):(_(this._vueTypes_name+' - invalid default value: "'+e+'"'),this)}}}),r=n.validator;return w(r)&&(n.validator=T(r,n)),n}function V(e,t){var n=C(e,t);return Object.defineProperty(n,"validate",{value:function(e){return w(this.validator)&&_(this._vueTypes_name+" - calling .validate() will overwrite the current custom validator function. Validator info:\n"+JSON.stringify(this)),this.validator=T(e,this),this}})}function N(e,t,n){var r,i,o=(r=t,i={},Object.getOwnPropertyNames(r).forEach((function(e){i[e]=Object.getOwnPropertyDescriptor(r,e)})),Object.defineProperties({},i));if(o._vueTypes_name=e,!m(n))return o;var a,c,l=n.validator,s=u(n,d);if(w(l)){var f=o.validator;f&&(f=null!==(c=(a=f).__original)&&void 0!==c?c:a),o.validator=T(f?function(e){return f.call(this,e)&&l.call(this,e)}:l,o)}return Object.assign(o,s)}function S(e){return e.replace(/^(?!\s*$)/gm,"  ")}function z(e,t){if(void 0===t&&(t="custom validation failed"),"function"!=typeof e)throw new TypeError("[VueTypes error]: You must provide a function as argument");return C(e.name||"<<anonymous function>>",{validator:function(n){var r=e(n);return r||_(this._vueTypes_name+" - "+t),r}})}function E(e){if(!j(e))throw new TypeError("[VueTypes error]: You must provide an array as argument.");var t='oneOf - value should be one of "'+e.join('", "')+'".',n=e.reduce((function(e,t){if(null!=t){var n=t.constructor;-1===e.indexOf(n)&&e.push(n)}return e}),[]);return C("oneOf",{type:n.length>0?n:void 0,validator:function(n){var r=-1!==e.indexOf(n);return r||_(t),r}})}function H(e){if(!j(e))throw new TypeError("[VueTypes error]: You must provide an array as argument");for(var t=!1,n=[],r=0;r<e.length;r+=1){var i=e[r];if(x(i)){if(k(i)&&"oneOf"===i._vueTypes_name&&i.type){n=n.concat(i.type);continue}if(w(i.validator)&&(t=!0),!0===i.type||!i.type){_('oneOfType - invalid usage of "true" or "null" as types.');continue}i.type&&(n=n.concat(i.type))}n.push(i)}var o=(n=n.filter((function(e,t){return n.indexOf(e)===t}))).length>0?n:null;return C("oneOfType",t?{type:o,validator:function(t){var n=[],r=e.some((function(e){var r=P(k(e)&&"oneOf"===e._vueTypes_name?e.type||null:e,t,!0);return"string"==typeof r&&n.push(r),!0===r}));return r||_("oneOfType - provided value does not match any of the "+n.length+" passed-in validators:\n"+S(n.join("\n"))),r}}:{type:o})}function A(e){return C("arrayOf",{type:Array,validator:function(t){var n="",r=t.every((function(t){return!0===(n=P(e,t,!0))}));return r||_("arrayOf - value validation error:\n"+S(n)),r}})}function M(e){return C("instanceOf",{type:e})}function D(e){return C("objectOf",{type:Object,validator:function(t){var n="",r=Object.keys(t).every((function(r){return!0===(n=P(e,t[r],!0))}));return r||_("objectOf - value validation error:\n"+S(n)),r}})}function F(e){var t=Object.keys(e),n=t.filter((function(t){var n;return!(null===(n=e[t])||void 0===n||!n.required)})),r=C("shape",{type:Object,validator:function(r){var i=this;if(!m(r))return!1;var o=Object.keys(r);if(n.length>0&&n.some((function(e){return-1===o.indexOf(e)}))){var u=n.filter((function(e){return-1===o.indexOf(e)}));return _(1===u.length?'shape - required property "'+u[0]+'" is not defined.':'shape - required properties "'+u.join('", "')+'" are not defined.'),!1}return o.every((function(n){if(-1===t.indexOf(n))return!0===i._vueTypes_isLoose||(_('shape - shape definition does not include a "'+n+'" property. Allowed keys: "'+t.join('", "')+'".'),!1);var o=P(e[n],r[n],!0);return"string"==typeof o&&_('shape - "'+n+'" property validation error:\n '+S(o)),!0===o}))}});return Object.defineProperty(r,"_vueTypes_isLoose",{writable:!0,value:!1}),Object.defineProperty(r,"loose",{get:function(){return this._vueTypes_isLoose=!0,this}}),r}var J=["name","validate","getter"],L=function(){var e,t;return t=e=function(){function e(){}return e.extend=function(e){var t=this;if(j(e))return e.forEach((function(e){return t.extend(e)})),this;var n=e.name,r=e.validate,i=void 0!==r&&r,o=e.getter,a=void 0!==o&&o,c=u(e,J);if(g(this,n))throw new TypeError('[VueTypes error]: Type "'+n+'" already defined');var l,f=c.type;return k(f)?(delete c.type,Object.defineProperty(this,n,a?{get:function(){return N(n,f,c)}}:{value:function(){var e,t=N(n,f,c);return t.validator&&(t.validator=(e=t.validator).bind.apply(e,[t].concat([].slice.call(arguments)))),t}})):(l=a?{get:function(){var e=Object.assign({},c);return i?V(n,e):C(n,e)},enumerable:!0}:{value:function(){var e,t,r=Object.assign({},c);return e=i?V(n,r):C(n,r),r.validator&&(e.validator=(t=r.validator).bind.apply(t,[e].concat([].slice.call(arguments)))),e},enumerable:!0},Object.defineProperty(this,n,l))},c(e,null,[{key:"any",get:function(){return V("any",{})}},{key:"func",get:function(){return V("function",{type:Function}).def(this.defaults.func)}},{key:"bool",get:function(){return V("boolean",{type:Boolean}).def(this.defaults.bool)}},{key:"string",get:function(){return V("string",{type:String}).def(this.defaults.string)}},{key:"number",get:function(){return V("number",{type:Number}).def(this.defaults.number)}},{key:"array",get:function(){return V("array",{type:Array}).def(this.defaults.array)}},{key:"object",get:function(){return V("object",{type:Object}).def(this.defaults.object)}},{key:"integer",get:function(){return C("integer",{type:Number,validator:function(e){return O(e)}}).def(this.defaults.integer)}},{key:"symbol",get:function(){return C("symbol",{validator:function(e){return"symbol"==typeof e}})}}]),e}(),e.defaults={},e.sensibleDefaults=void 0,e.config=a,e.custom=z,e.oneOf=E,e.instanceOf=M,e.oneOfType=H,e.arrayOf=A,e.objectOf=D,e.shape=F,e.utils={validate:function(e,t){return!0===P(t,e,!0)},toType:function(e,t,n){return void 0===n&&(n=!1),n?V(e,t):C(e,t)}},t}();var Z=function(e){function t(){return e.apply(this,arguments)||this}return i(t,e),t}(function(e){var t,n;return void 0===e&&(e={func:function(){},bool:!0,string:"",number:0,array:function(){return[]},object:function(){return{}},integer:0}),n=t=function(t){function n(){return t.apply(this,arguments)||this}return i(n,t),c(n,null,[{key:"sensibleDefaults",get:function(){return l({},this.defaults)},set:function(t){this.defaults=!1!==t?l({},!0!==t?t:e):{}}}]),n}(L),t.defaults=l({},e),n}());t.a=Z},397:function(e,t,n){var content=n(424);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(37).default)("23dae136",content,!0,{sourceMap:!1})},423:function(e,t,n){"use strict";n(397)},424:function(e,t,n){var r=n(36)(!1);r.push([e.i,".scenarios_intro[data-v-6fa00d4b]{color:#002156;font-size:18px;line-height:28px;letter-spacing:-.3px}.scenarios_onderschrift[data-v-6fa00d4b]{margin:40px 0;padding:24px;background:#e6e9ee;border-radius:0 40px}.scenarios_onderschrift_text[data-v-6fa00d4b]{color:#334d78;font-size:16px;line-height:24px;padding:0 10px}@media only screen and (max-width:375px){h2[data-v-6fa00d4b]{font-size:32px;line-height:40px;letter-spacing:-.5px}}",""]),e.exports=r},481:function(e,t,n){"use strict";n.r(t);var r={name:"intro_scenarios",props:{scenario_case:n(179).a.String}},o=(n(423),n(28)),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._m(0),e._v(" "),e._m(1),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:"ok"!=e.scenario_case,expression:"scenario_case!='ok'"}],staticClass:"scenarios_onderschrift"},[n("table",[n("tr",{staticStyle:{"vertical-align":"top"}},[n("td",[n("svg",{attrs:{width:"20",height:"20",viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M13.9993 27.3333C6.63555 27.3333 0.666016 21.3638 0.666016 14C0.666016 6.63616 6.63555 0.666626 13.9993 0.666626C21.3631 0.666626 27.3327 6.63616 27.3327 14C27.3246 21.3604 21.3598 27.3252 13.9993 27.3333ZM3.33268 14.2293C3.39577 20.0976 8.18749 24.8127 14.0561 24.7813C19.9246 24.7496 24.6654 19.9833 24.6654 14.1146C24.6654 8.24597 19.9246 3.47966 14.0561 3.44796C8.18749 3.41657 3.39577 8.13164 3.33268 14V14.2293ZM16.666 20.6666H12.666V15.3333H11.3327V12.6666H15.3327V18H16.666V20.6666ZM15.3327 9.99996H12.666V7.33329H15.3327V9.99996Z",fill:"#334D78"}})])]),e._v(" "),n("td",[n("div",{directives:[{name:"show",rawName:"v-show",value:"bad"==e.scenario_case,expression:"scenario_case=='bad'"}],staticClass:"scenarios_onderschrift_text"},[e._v("\n            We hebben de ontvangsten hieronder met 25% verminderd om het slechtste geval te illusteren. Gebruik zelf de schuiven om tot een geloofwaardig beeld van het slechtste geval te komen.\n          ")]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:"good"==e.scenario_case,expression:"scenario_case=='good'"}],staticClass:"scenarios_onderschrift_text"},[e._v("\n            We hebben de ontvangsten hieronder met 25% verhoogd om het beste geval te illusteren. Gebruik zelf de schuiven om tot een geloofwaardig beeld van het beste geval te komen.\n          ")])])])])])])}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h2",{staticStyle:{"font-style":"normal","font-weight":"800","font-size":"48px","line-height":"56px","letter-spacing":"-1px",color:"#002156"}},[e._v("\n    Jouw "),n("br"),e._v("liquiditeits dashboard\n  ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"scenarios_intro"},[e._v("\n    Hier zie je de voorspelling van je liquiditeit voor de komende 12 maanden. Gebruik de schuiven hieronder om de voorspelling aan te passen naar jouw verwachtingen voor het komend jaar. Naast het waarschijnlijke geval kun je ook een voorspelling voor het slechtste en beste geval maken."),n("br"),n("br"),e._v("\n    Heb je vragen over de voorspelling of hulp nodig? Neem dan contact op met de helpdesk op  013-594 4142 of "),n("a",{attrs:{href:"mailto:toekomstcheck@ondernemen.nl"}},[e._v("toekomstcheck@ondernemen.nl")]),e._v(". De helpdesk heeft niet je resultaten. Deze kun je, als je wilt, zelf delen met de helpdesk.\n  ")])}],!1,null,"6fa00d4b",null);t.default=component.exports}}]);