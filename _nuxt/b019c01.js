/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{179:function(t,e,n){"use strict";function r(t){return"[object Object]"===Object.prototype.toString.call(t)}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}function l(){return(l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function i(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,c(t,e)}function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function u(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)e.indexOf(n=o[r])>=0||(i[n]=t[n]);return i}var a={silent:!1,logLevel:"warn"},v=["validator"],y=Object.prototype,d=y.toString,s=y.hasOwnProperty,h=/^\s*function (\w+)/;function p(t){var e,n=null!==(e=null==t?void 0:t.type)&&void 0!==e?e:t;if(n){var r=n.toString().match(h);return r?r[1]:""}return""}var m=function(t){var e,n;return!1!==r(t)&&(void 0===(e=t.constructor)||!1!==r(n=e.prototype)&&!1!==n.hasOwnProperty("isPrototypeOf"))},O=function(t){return t},g=function(t,e){return s.call(t,e)},j=Number.isInteger||function(t){return"number"==typeof t&&isFinite(t)&&Math.floor(t)===t},_=Array.isArray||function(t){return"[object Array]"===d.call(t)},w=function(t){return"[object Function]"===d.call(t)},T=function(t){return m(t)&&g(t,"_vueTypes_name")},k=function(t){return m(t)&&(g(t,"type")||["_vueTypes_name","validator","default","required"].some((function(e){return g(t,e)})))};function S(t,e){return Object.defineProperty(t.bind(e),"__original",{value:t})}function x(t,e,n){var r;void 0===n&&(n=!1);var i=!0,o="";r=m(t)?t:{type:t};var u=T(r)?r._vueTypes_name+" - ":"";if(k(r)&&null!==r.type){if(void 0===r.type||!0===r.type)return i;if(!r.required&&void 0===e)return i;_(r.type)?(i=r.type.some((function(t){return!0===x(t,e,!0)})),o=r.type.map((function(t){return p(t)})).join(" or ")):i="Array"===(o=p(r))?_(e):"Object"===o?m(e):"String"===o||"Number"===o||"Boolean"===o||"Function"===o?function(t){if(null==t)return"";var e=t.constructor.toString().match(h);return e?e[1]:""}(e)===o:e instanceof r.type}if(!i){var a=u+'value "'+e+'" should be of type "'+o+'"';return!1===n?(O(a),!1):a}if(g(r,"validator")&&w(r.validator)){var f=O,l=[];if(O=function(t){l.push(t)},i=r.validator(e),O=f,!i){var c=(l.length>1?"* ":"")+l.join("\n* ");return l.length=0,!1===n?(O(c),i):c}}return i}function P(t,e){var n=Object.defineProperties(e,{_vueTypes_name:{value:t,writable:!0},isRequired:{get:function(){return this.required=!0,this}},def:{value:function(t){return void 0===t?(g(this,"default")&&delete this.default,this):w(t)||!0===x(this,t,!0)?(this.default=_(t)?function(){return[].concat(t)}:m(t)?function(){return Object.assign({},t)}:t,this):(O(this._vueTypes_name+' - invalid default value: "'+t+'"'),this)}}}),r=n.validator;return w(r)&&(n.validator=S(r,n)),n}function E(t,e){var n=P(t,e);return Object.defineProperty(n,"validate",{value:function(t){return w(this.validator)&&O(this._vueTypes_name+" - calling .validate() will overwrite the current custom validator function. Validator info:\n"+JSON.stringify(this)),this.validator=S(t,this),this}})}function A(t,e,n){var r,i,o=(r=e,i={},Object.getOwnPropertyNames(r).forEach((function(t){i[t]=Object.getOwnPropertyDescriptor(r,t)})),Object.defineProperties({},i));if(o._vueTypes_name=t,!m(n))return o;var a,f,l=n.validator,s=u(n,v);if(w(l)){var c=o.validator;c&&(c=null!==(f=(a=c).__original)&&void 0!==f?f:a),o.validator=S(c?function(t){return c.call(this,t)&&l.call(this,t)}:l,o)}return Object.assign(o,s)}function L(t){return t.replace(/^(?!\s*$)/gm,"  ")}function z(t,e){if(void 0===e&&(e="custom validation failed"),"function"!=typeof t)throw new TypeError("[VueTypes error]: You must provide a function as argument");return P(t.name||"<<anonymous function>>",{validator:function(n){var r=t(n);return r||O(this._vueTypes_name+" - "+e),r}})}function W(t){if(!_(t))throw new TypeError("[VueTypes error]: You must provide an array as argument.");var e='oneOf - value should be one of "'+t.join('", "')+'".',n=t.reduce((function(t,e){if(null!=e){var n=e.constructor;-1===t.indexOf(n)&&t.push(n)}return t}),[]);return P("oneOf",{type:n.length>0?n:void 0,validator:function(n){var r=-1!==t.indexOf(n);return r||O(e),r}})}function H(t){if(!_(t))throw new TypeError("[VueTypes error]: You must provide an array as argument");for(var e=!1,n=[],r=0;r<t.length;r+=1){var i=t[r];if(k(i)){if(T(i)&&"oneOf"===i._vueTypes_name&&i.type){n=n.concat(i.type);continue}if(w(i.validator)&&(e=!0),!0===i.type||!i.type){O('oneOfType - invalid usage of "true" or "null" as types.');continue}i.type&&(n=n.concat(i.type))}n.push(i)}var o=(n=n.filter((function(t,e){return n.indexOf(t)===e}))).length>0?n:null;return P("oneOfType",e?{type:o,validator:function(e){var n=[],r=t.some((function(t){var r=x(T(t)&&"oneOf"===t._vueTypes_name?t.type||null:t,e,!0);return"string"==typeof r&&n.push(r),!0===r}));return r||O("oneOfType - provided value does not match any of the "+n.length+" passed-in validators:\n"+L(n.join("\n"))),r}}:{type:o})}function N(t){return P("arrayOf",{type:Array,validator:function(e){var n="",r=e.every((function(e){return!0===(n=x(t,e,!0))}));return r||O("arrayOf - value validation error:\n"+L(n)),r}})}function V(t){return P("instanceOf",{type:t})}function J(t){return P("objectOf",{type:Object,validator:function(e){var n="",r=Object.keys(e).every((function(r){return!0===(n=x(t,e[r],!0))}));return r||O("objectOf - value validation error:\n"+L(n)),r}})}function $(t){var e=Object.keys(t),n=e.filter((function(e){var n;return!(null===(n=t[e])||void 0===n||!n.required)})),r=P("shape",{type:Object,validator:function(r){var i=this;if(!m(r))return!1;var o=Object.keys(r);if(n.length>0&&n.some((function(t){return-1===o.indexOf(t)}))){var u=n.filter((function(t){return-1===o.indexOf(t)}));return O(1===u.length?'shape - required property "'+u[0]+'" is not defined.':'shape - required properties "'+u.join('", "')+'" are not defined.'),!1}return o.every((function(n){if(-1===e.indexOf(n))return!0===i._vueTypes_isLoose||(O('shape - shape definition does not include a "'+n+'" property. Allowed keys: "'+e.join('", "')+'".'),!1);var o=x(t[n],r[n],!0);return"string"==typeof o&&O('shape - "'+n+'" property validation error:\n '+L(o)),!0===o}))}});return Object.defineProperty(r,"_vueTypes_isLoose",{writable:!0,value:!1}),Object.defineProperty(r,"loose",{get:function(){return this._vueTypes_isLoose=!0,this}}),r}var F=["name","validate","getter"],D=function(){var t,e;return e=t=function(){function t(){}return t.extend=function(t){var e=this;if(_(t))return t.forEach((function(t){return e.extend(t)})),this;var n=t.name,r=t.validate,i=void 0!==r&&r,o=t.getter,a=void 0!==o&&o,f=u(t,F);if(g(this,n))throw new TypeError('[VueTypes error]: Type "'+n+'" already defined');var l,c=f.type;return T(c)?(delete f.type,Object.defineProperty(this,n,a?{get:function(){return A(n,c,f)}}:{value:function(){var t,e=A(n,c,f);return e.validator&&(e.validator=(t=e.validator).bind.apply(t,[e].concat([].slice.call(arguments)))),e}})):(l=a?{get:function(){var t=Object.assign({},f);return i?E(n,t):P(n,t)},enumerable:!0}:{value:function(){var t,e,r=Object.assign({},f);return t=i?E(n,r):P(n,r),r.validator&&(t.validator=(e=r.validator).bind.apply(e,[t].concat([].slice.call(arguments)))),t},enumerable:!0},Object.defineProperty(this,n,l))},f(t,null,[{key:"any",get:function(){return E("any",{})}},{key:"func",get:function(){return E("function",{type:Function}).def(this.defaults.func)}},{key:"bool",get:function(){return E("boolean",{type:Boolean}).def(this.defaults.bool)}},{key:"string",get:function(){return E("string",{type:String}).def(this.defaults.string)}},{key:"number",get:function(){return E("number",{type:Number}).def(this.defaults.number)}},{key:"array",get:function(){return E("array",{type:Array}).def(this.defaults.array)}},{key:"object",get:function(){return E("object",{type:Object}).def(this.defaults.object)}},{key:"integer",get:function(){return P("integer",{type:Number,validator:function(t){return j(t)}}).def(this.defaults.integer)}},{key:"symbol",get:function(){return P("symbol",{validator:function(t){return"symbol"==typeof t}})}}]),t}(),t.defaults={},t.sensibleDefaults=void 0,t.config=a,t.custom=z,t.oneOf=W,t.instanceOf=V,t.oneOfType=H,t.arrayOf=N,t.objectOf=J,t.shape=$,t.utils={validate:function(t,e){return!0===x(e,t,!0)},toType:function(t,e,n){return void 0===n&&(n=!1),n?E(t,e):P(t,e)}},e}();var M=function(t){function e(){return t.apply(this,arguments)||this}return i(e,t),e}(function(t){var e,n;return void 0===t&&(t={func:function(){},bool:!0,string:"",number:0,array:function(){return[]},object:function(){return{}},integer:0}),n=e=function(e){function n(){return e.apply(this,arguments)||this}return i(n,e),f(n,null,[{key:"sensibleDefaults",get:function(){return l({},this.defaults)},set:function(e){this.defaults=!1!==e?l({},!0!==e?e:t):{}}}]),n}(D),e.defaults=l({},t),n}());e.a=M},228:function(t,e,n){var content=n(388);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(37).default)("57d2d3e1",content,!0,{sourceMap:!1})},387:function(t,e,n){"use strict";var r=n(228),o=n.n(r);n.d(e,"default",(function(){return o.a}))},388:function(t,e,n){var r=n(36)(!1);r.push([t.i,".typography_3sLJs{margin:0}",""]),r.locals={typography:"typography_3sLJs"},t.exports=r},390:function(t,e,n){"use strict";n.r(e);var r=n(179),o={name:"VTypography",props:{color:{type:r.a.String},variant:{type:r.a.String,default:"default"},align:{type:r.a.String,default:"left"},display:{type:r.a.String,default:"inline"}},data:function(){return{variants:{default:{element:"span",fontSize:"16px",fontWeight:"normal"},fieldTitle:{element:"h2",fontSize:"17px",lineHeight:"1.1",fontWeight:"bold",color:"white"},fieldSubtitle:{element:"h3",fontSize:"13px",lineHeight:"15.28px",fontWeight:"normal",color:"white"}},colors:{white:"#fff",black:"rgb(46, 58, 89)"}}},methods:{getElement:function(){return this.variants[this.variant].element},getColor:function(){var t,e=this.variants[this.variant];return this.color?this.colors[this.color]:null!==(t=e.color)&&void 0!==t?t:this.colors.black},getSize:function(){return this.variants[this.variant].fontSize},getWeight:function(){return this.variants[this.variant].fontWeight},getLineHeight:function(){return this.variants[this.variant].lineHeight}}},f=n(387),l=n(28);var component=Object(l.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)(t.getElement(),t._b({tag:"component",class:t.$style.typography,style:{color:t.getColor(),fontSize:t.getSize(),lineHeight:t.getLineHeight(),fontWeight:t.getWeight(),textAlign:t.align,display:t.display}},"component",t.$attrs,!1),[t._t("default")],2)}),[],!1,(function(t){this.$style=f.default.locals||f.default}),null,null);e.default=component.exports}}]);