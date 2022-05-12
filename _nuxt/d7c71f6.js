/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{179:function(t,e,n){"use strict";function r(t){return"[object Object]"===Object.prototype.toString.call(t)}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}function l(){return(l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function i(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,f(t,e)}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function u(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)e.indexOf(n=o[r])>=0||(i[n]=t[n]);return i}var a={silent:!1,logLevel:"warn"},d=["validator"],v=Object.prototype,y=v.toString,s=v.hasOwnProperty,h=/^\s*function (\w+)/;function p(t){var e,n=null!==(e=null==t?void 0:t.type)&&void 0!==e?e:t;if(n){var r=n.toString().match(h);return r?r[1]:""}return""}var m=function(t){var e,n;return!1!==r(t)&&(void 0===(e=t.constructor)||!1!==r(n=e.prototype)&&!1!==n.hasOwnProperty("isPrototypeOf"))},_=function(t){return t},g=function(t,e){return s.call(t,e)},O=Number.isInteger||function(t){return"number"==typeof t&&isFinite(t)&&Math.floor(t)===t},j=Array.isArray||function(t){return"[object Array]"===y.call(t)},x=function(t){return"[object Function]"===y.call(t)},w=function(t){return m(t)&&g(t,"_vueTypes_name")},k=function(t){return m(t)&&(g(t,"type")||["_vueTypes_name","validator","default","required"].some((function(e){return g(t,e)})))};function T(t,e){return Object.defineProperty(t.bind(e),"__original",{value:t})}function P(t,e,n){var r;void 0===n&&(n=!1);var i=!0,o="";r=m(t)?t:{type:t};var u=w(r)?r._vueTypes_name+" - ":"";if(k(r)&&null!==r.type){if(void 0===r.type||!0===r.type)return i;if(!r.required&&void 0===e)return i;j(r.type)?(i=r.type.some((function(t){return!0===P(t,e,!0)})),o=r.type.map((function(t){return p(t)})).join(" or ")):i="Array"===(o=p(r))?j(e):"Object"===o?m(e):"String"===o||"Number"===o||"Boolean"===o||"Function"===o?function(t){if(null==t)return"";var e=t.constructor.toString().match(h);return e?e[1]:""}(e)===o:e instanceof r.type}if(!i){var a=u+'value "'+e+'" should be of type "'+o+'"';return!1===n?(_(a),!1):a}if(g(r,"validator")&&x(r.validator)){var c=_,l=[];if(_=function(t){l.push(t)},i=r.validator(e),_=c,!i){var f=(l.length>1?"* ":"")+l.join("\n* ");return l.length=0,!1===n?(_(f),i):f}}return i}function S(t,e){var n=Object.defineProperties(e,{_vueTypes_name:{value:t,writable:!0},isRequired:{get:function(){return this.required=!0,this}},def:{value:function(t){return void 0===t?(g(this,"default")&&delete this.default,this):x(t)||!0===P(this,t,!0)?(this.default=j(t)?function(){return[].concat(t)}:m(t)?function(){return Object.assign({},t)}:t,this):(_(this._vueTypes_name+' - invalid default value: "'+t+'"'),this)}}}),r=n.validator;return x(r)&&(n.validator=T(r,n)),n}function E(t,e){var n=S(t,e);return Object.defineProperty(n,"validate",{value:function(t){return x(this.validator)&&_(this._vueTypes_name+" - calling .validate() will overwrite the current custom validator function. Validator info:\n"+JSON.stringify(this)),this.validator=T(t,this),this}})}function N(t,e,n){var r,i,o=(r=e,i={},Object.getOwnPropertyNames(r).forEach((function(t){i[t]=Object.getOwnPropertyDescriptor(r,t)})),Object.defineProperties({},i));if(o._vueTypes_name=t,!m(n))return o;var a,c,l=n.validator,s=u(n,d);if(x(l)){var f=o.validator;f&&(f=null!==(c=(a=f).__original)&&void 0!==c?c:a),o.validator=T(f?function(t){return f.call(this,t)&&l.call(this,t)}:l,o)}return Object.assign(o,s)}function I(t){return t.replace(/^(?!\s*$)/gm,"  ")}function A(t,e){if(void 0===e&&(e="custom validation failed"),"function"!=typeof t)throw new TypeError("[VueTypes error]: You must provide a function as argument");return S(t.name||"<<anonymous function>>",{validator:function(n){var r=t(n);return r||_(this._vueTypes_name+" - "+e),r}})}function C(t){if(!j(t))throw new TypeError("[VueTypes error]: You must provide an array as argument.");var e='oneOf - value should be one of "'+t.join('", "')+'".',n=t.reduce((function(t,e){if(null!=e){var n=e.constructor;-1===t.indexOf(n)&&t.push(n)}return t}),[]);return S("oneOf",{type:n.length>0?n:void 0,validator:function(n){var r=-1!==t.indexOf(n);return r||_(e),r}})}function F(t){if(!j(t))throw new TypeError("[VueTypes error]: You must provide an array as argument");for(var e=!1,n=[],r=0;r<t.length;r+=1){var i=t[r];if(k(i)){if(w(i)&&"oneOf"===i._vueTypes_name&&i.type){n=n.concat(i.type);continue}if(x(i.validator)&&(e=!0),!0===i.type||!i.type){_('oneOfType - invalid usage of "true" or "null" as types.');continue}i.type&&(n=n.concat(i.type))}n.push(i)}var o=(n=n.filter((function(t,e){return n.indexOf(t)===e}))).length>0?n:null;return S("oneOfType",e?{type:o,validator:function(e){var n=[],r=t.some((function(t){var r=P(w(t)&&"oneOf"===t._vueTypes_name?t.type||null:t,e,!0);return"string"==typeof r&&n.push(r),!0===r}));return r||_("oneOfType - provided value does not match any of the "+n.length+" passed-in validators:\n"+I(n.join("\n"))),r}}:{type:o})}function D(t){return S("arrayOf",{type:Array,validator:function(e){var n="",r=e.every((function(e){return!0===(n=P(t,e,!0))}));return r||_("arrayOf - value validation error:\n"+I(n)),r}})}function z(t){return S("instanceOf",{type:t})}function B(t){return S("objectOf",{type:Object,validator:function(e){var n="",r=Object.keys(e).every((function(r){return!0===(n=P(t,e[r],!0))}));return r||_("objectOf - value validation error:\n"+I(n)),r}})}function L(t){var e=Object.keys(t),n=e.filter((function(e){var n;return!(null===(n=t[e])||void 0===n||!n.required)})),r=S("shape",{type:Object,validator:function(r){var i=this;if(!m(r))return!1;var o=Object.keys(r);if(n.length>0&&n.some((function(t){return-1===o.indexOf(t)}))){var u=n.filter((function(t){return-1===o.indexOf(t)}));return _(1===u.length?'shape - required property "'+u[0]+'" is not defined.':'shape - required properties "'+u.join('", "')+'" are not defined.'),!1}return o.every((function(n){if(-1===e.indexOf(n))return!0===i._vueTypes_isLoose||(_('shape - shape definition does not include a "'+n+'" property. Allowed keys: "'+e.join('", "')+'".'),!1);var o=P(t[n],r[n],!0);return"string"==typeof o&&_('shape - "'+n+'" property validation error:\n '+I(o)),!0===o}))}});return Object.defineProperty(r,"_vueTypes_isLoose",{writable:!0,value:!1}),Object.defineProperty(r,"loose",{get:function(){return this._vueTypes_isLoose=!0,this}}),r}var V=["name","validate","getter"],$=function(){var t,e;return e=t=function(){function t(){}return t.extend=function(t){var e=this;if(j(t))return t.forEach((function(t){return e.extend(t)})),this;var n=t.name,r=t.validate,i=void 0!==r&&r,o=t.getter,a=void 0!==o&&o,c=u(t,V);if(g(this,n))throw new TypeError('[VueTypes error]: Type "'+n+'" already defined');var l,f=c.type;return w(f)?(delete c.type,Object.defineProperty(this,n,a?{get:function(){return N(n,f,c)}}:{value:function(){var t,e=N(n,f,c);return e.validator&&(e.validator=(t=e.validator).bind.apply(t,[e].concat([].slice.call(arguments)))),e}})):(l=a?{get:function(){var t=Object.assign({},c);return i?E(n,t):S(n,t)},enumerable:!0}:{value:function(){var t,e,r=Object.assign({},c);return t=i?E(n,r):S(n,r),r.validator&&(t.validator=(e=r.validator).bind.apply(e,[t].concat([].slice.call(arguments)))),t},enumerable:!0},Object.defineProperty(this,n,l))},c(t,null,[{key:"any",get:function(){return E("any",{})}},{key:"func",get:function(){return E("function",{type:Function}).def(this.defaults.func)}},{key:"bool",get:function(){return E("boolean",{type:Boolean}).def(this.defaults.bool)}},{key:"string",get:function(){return E("string",{type:String}).def(this.defaults.string)}},{key:"number",get:function(){return E("number",{type:Number}).def(this.defaults.number)}},{key:"array",get:function(){return E("array",{type:Array}).def(this.defaults.array)}},{key:"object",get:function(){return E("object",{type:Object}).def(this.defaults.object)}},{key:"integer",get:function(){return S("integer",{type:Number,validator:function(t){return O(t)}}).def(this.defaults.integer)}},{key:"symbol",get:function(){return S("symbol",{validator:function(t){return"symbol"==typeof t}})}}]),t}(),t.defaults={},t.sensibleDefaults=void 0,t.config=a,t.custom=A,t.oneOf=C,t.instanceOf=z,t.oneOfType=F,t.arrayOf=D,t.objectOf=B,t.shape=L,t.utils={validate:function(t,e){return!0===P(e,t,!0)},toType:function(t,e,n){return void 0===n&&(n=!1),n?E(t,e):S(t,e)}},e}();var M=function(t){function e(){return t.apply(this,arguments)||this}return i(e,t),e}(function(t){var e,n;return void 0===t&&(t={func:function(){},bool:!0,string:"",number:0,array:function(){return[]},object:function(){return{}},integer:0}),n=e=function(e){function n(){return e.apply(this,arguments)||this}return i(n,e),c(n,null,[{key:"sensibleDefaults",get:function(){return l({},this.defaults)},set:function(e){this.defaults=!1!==e?l({},!0!==e?e:t):{}}}]),n}($),e.defaults=l({},t),n}());e.a=M},187:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));function r(t){false}},193:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return c}));n(12),n(49),n(50);var r=n(187);function o(t){return isNaN(t)?(Object(r.a)("formatToEuroCurrency NaN"),0):new Intl.NumberFormat("nl-NL",{maximumFractionDigits:0,minimumFractionDigits:0}).format(parseFloat(t))}function c(t){var e=t.toString().replaceAll(".","");return 0==e.length&&(e="0"),parseInt(e)}},206:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return l}));var r=n(187),o=n(193);function c(t){var e=document.getElementById(t.target.id).value;if(Object(r.a)(e),void 0===e)return Object(r.a)("handleInput() - undefined"),!1;var n=Object(o.b)(document.getElementById(t.target.id).value);if(Object(r.a)(n),!isNaN(n)){var c=Object(o.a)(Object(o.b)(document.getElementById(t.target.id).value));return Object(r.a)(c),c}return Object(r.a)(n+"is not a number"),Object(r.a)("returning false"),!1}function l(t){return void 0===t?(Object(r.a)("handleInput() - undefined"),!1):!!Date.parse(t)&&t}},395:function(t,e,n){var content=n(400);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(37).default)("7b4586b4",content,!0,{sourceMap:!1})},399:function(t,e,n){"use strict";n(395)},400:function(t,e,n){var r=n(36),o=n(401),c=n(402),l=n(403),f=r(!1),d=o(c),v=o(l);f.push([t.i,".slider_inner_box[data-v-7482c281]{margin:10px 0 40px}.slider_inner_box_text[data-v-7482c281]{color:#002156;font-size:16px;line-height:24px}.slider_inner_box_input[data-v-7482c281]{float:right;font-size:18px;line-height:24px;text-align:right;letter-spacing:-.3px;color:#002156;padding:0;margin:0}.slider_inner_box_slider_container[data-v-7482c281]{margin:0;width:100%}.slider[data-v-7482c281]{-webkit-appearance:none;-moz-appearance:none;appearance:none;width:100%;height:5px;background:#dfe6ec;outline:none;transition:opacity .2s}.slider[data-v-7482c281]:hover{opacity:1}.slider[data-v-7482c281]::-webkit-slider-thumb{background:url("+d+")}.slider[data-v-7482c281]::-moz-range-thumb{width:25px;height:25px;background:url("+v+");cursor:pointer}.slider[data-v-7482c281]::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:25px;height:25px;border:0;background:url("+v+");cursor:pointer}",""]),t.exports=f},401:function(t,e,n){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},402:function(t,e,n){t.exports=n.p+"img/sliderbutton.ec5c660.png"},403:function(t,e,n){t.exports=n.p+"img/sliderbutton25x25.f822fb9.png"},419:function(t,e,n){"use strict";n.r(e);var r=n(179),o=n(193),c=n(206),l=(n(187),{name:"sliderbox",props:{sliderbox_caption:r.a.String,sliderbox_amount_id:r.a.String,sliderbox_amount:r.a.String,sliderbox_slider_id:r.a.String,sliderbox_handler:r.a.func},data:function(){return{input_id:""}},mounted:function(){this.input_id="i_"+this.sliderbox_slider_id},computed:{input_value:function(){return Object(o.a)(Object(o.b)(this.sliderbox_amount))}},methods:{handleInput:function(t){Object(c.b)(t)&&this.$emit("keyup",t)},handleSlider:function(t){this.$emit("input",t)}}}),f=(n(399),n(28)),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"slider_inner_box"},[n("div",{staticClass:"slider_inner_box_text"},[n("span",[t._v(t._s(t.sliderbox_caption))]),t._v(" "),n("span",{staticClass:"slider_inner_box_input"},[n("div",{staticClass:"textinput",staticStyle:{background:"white",padding:"0",border:"1px solid #EEE","border-radius":"4px","font-size":"16px","font-weight":"bold","line-height":"24px"}},[n("table",[n("tr",[n("td",[t._v("€")]),t._v(" "),n("td",[n("input",{staticStyle:{padding:"5px",width:"100%","max-width":"90px",border:"none"},attrs:{id:t.input_id,type:"text"},domProps:{value:t.input_value},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleInput(e)}}})])])])])])]),t._v(" "),n("div",{staticClass:"slider_inner_box_slider_container"},[n("input",{staticClass:"slider",attrs:{type:"range",min:"0",max:"100",value:"50",id:t.sliderbox_slider_id},on:{input:function(e){return t.handleSlider(e)}}})])])}),[],!1,null,"7482c281",null);e.default=component.exports}}]);