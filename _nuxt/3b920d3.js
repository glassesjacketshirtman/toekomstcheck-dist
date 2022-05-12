/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{179:function(e,t,n){"use strict";function r(e){return"[object Object]"===Object.prototype.toString.call(e)}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function i(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,c(e,t)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t.indexOf(n=o[r])>=0||(i[n]=e[n]);return i}var a={silent:!1,logLevel:"warn"},d=["validator"],j=Object.prototype,y=j.toString,s=j.hasOwnProperty,v=/^\s*function (\w+)/;function p(e){var t,n=null!==(t=null==e?void 0:e.type)&&void 0!==t?t:e;if(n){var r=n.toString().match(v);return r?r[1]:""}return""}var h=function(e){var t,n;return!1!==r(e)&&(void 0===(t=e.constructor)||!1!==r(n=t.prototype)&&!1!==n.hasOwnProperty("isPrototypeOf"))},m=function(e){return e},g=function(e,t){return s.call(e,t)},O=Number.isInteger||function(e){return"number"==typeof e&&isFinite(e)&&Math.floor(e)===e},k=Array.isArray||function(e){return"[object Array]"===y.call(e)},w=function(e){return"[object Function]"===y.call(e)},_=function(e){return h(e)&&g(e,"_vueTypes_name")},z=function(e){return h(e)&&(g(e,"type")||["_vueTypes_name","validator","default","required"].some((function(t){return g(e,t)})))};function T(e,t){return Object.defineProperty(e.bind(t),"__original",{value:e})}function x(e,t,n){var r;void 0===n&&(n=!1);var i=!0,o="";r=h(e)?e:{type:e};var u=_(r)?r._vueTypes_name+" - ":"";if(z(r)&&null!==r.type){if(void 0===r.type||!0===r.type)return i;if(!r.required&&void 0===t)return i;k(r.type)?(i=r.type.some((function(e){return!0===x(e,t,!0)})),o=r.type.map((function(e){return p(e)})).join(" or ")):i="Array"===(o=p(r))?k(t):"Object"===o?h(t):"String"===o||"Number"===o||"Boolean"===o||"Function"===o?function(e){if(null==e)return"";var t=e.constructor.toString().match(v);return t?t[1]:""}(t)===o:t instanceof r.type}if(!i){var a=u+'value "'+t+'" should be of type "'+o+'"';return!1===n?(m(a),!1):a}if(g(r,"validator")&&w(r.validator)){var f=m,l=[];if(m=function(e){l.push(e)},i=r.validator(t),m=f,!i){var c=(l.length>1?"* ":"")+l.join("\n* ");return l.length=0,!1===n?(m(c),i):c}}return i}function S(e,t){var n=Object.defineProperties(t,{_vueTypes_name:{value:e,writable:!0},isRequired:{get:function(){return this.required=!0,this}},def:{value:function(e){return void 0===e?(g(this,"default")&&delete this.default,this):w(e)||!0===x(this,e,!0)?(this.default=k(e)?function(){return[].concat(e)}:h(e)?function(){return Object.assign({},e)}:e,this):(m(this._vueTypes_name+' - invalid default value: "'+e+'"'),this)}}}),r=n.validator;return w(r)&&(n.validator=T(r,n)),n}function P(e,t){var n=S(e,t);return Object.defineProperty(n,"validate",{value:function(e){return w(this.validator)&&m(this._vueTypes_name+" - calling .validate() will overwrite the current custom validator function. Validator info:\n"+JSON.stringify(this)),this.validator=T(e,this),this}})}function N(e,t,n){var r,i,o=(r=t,i={},Object.getOwnPropertyNames(r).forEach((function(e){i[e]=Object.getOwnPropertyDescriptor(r,e)})),Object.defineProperties({},i));if(o._vueTypes_name=e,!h(n))return o;var a,f,l=n.validator,s=u(n,d);if(w(l)){var c=o.validator;c&&(c=null!==(f=(a=c).__original)&&void 0!==f?f:a),o.validator=T(c?function(e){return c.call(this,e)&&l.call(this,e)}:l,o)}return Object.assign(o,s)}function A(e){return e.replace(/^(?!\s*$)/gm,"  ")}function L(e,t){if(void 0===t&&(t="custom validation failed"),"function"!=typeof e)throw new TypeError("[VueTypes error]: You must provide a function as argument");return S(e.name||"<<anonymous function>>",{validator:function(n){var r=e(n);return r||m(this._vueTypes_name+" - "+t),r}})}function D(e){if(!k(e))throw new TypeError("[VueTypes error]: You must provide an array as argument.");var t='oneOf - value should be one of "'+e.join('", "')+'".',n=e.reduce((function(e,t){if(null!=t){var n=t.constructor;-1===e.indexOf(n)&&e.push(n)}return e}),[]);return S("oneOf",{type:n.length>0?n:void 0,validator:function(n){var r=-1!==e.indexOf(n);return r||m(t),r}})}function F(e){if(!k(e))throw new TypeError("[VueTypes error]: You must provide an array as argument");for(var t=!1,n=[],r=0;r<e.length;r+=1){var i=e[r];if(z(i)){if(_(i)&&"oneOf"===i._vueTypes_name&&i.type){n=n.concat(i.type);continue}if(w(i.validator)&&(t=!0),!0===i.type||!i.type){m('oneOfType - invalid usage of "true" or "null" as types.');continue}i.type&&(n=n.concat(i.type))}n.push(i)}var o=(n=n.filter((function(e,t){return n.indexOf(e)===t}))).length>0?n:null;return S("oneOfType",t?{type:o,validator:function(t){var n=[],r=e.some((function(e){var r=x(_(e)&&"oneOf"===e._vueTypes_name?e.type||null:e,t,!0);return"string"==typeof r&&n.push(r),!0===r}));return r||m("oneOfType - provided value does not match any of the "+n.length+" passed-in validators:\n"+A(n.join("\n"))),r}}:{type:o})}function E(e){return S("arrayOf",{type:Array,validator:function(t){var n="",r=t.every((function(t){return!0===(n=x(e,t,!0))}));return r||m("arrayOf - value validation error:\n"+A(n)),r}})}function B(e){return S("instanceOf",{type:e})}function I(e){return S("objectOf",{type:Object,validator:function(t){var n="",r=Object.keys(t).every((function(r){return!0===(n=x(e,t[r],!0))}));return r||m("objectOf - value validation error:\n"+A(n)),r}})}function V(e){var t=Object.keys(e),n=t.filter((function(t){var n;return!(null===(n=e[t])||void 0===n||!n.required)})),r=S("shape",{type:Object,validator:function(r){var i=this;if(!h(r))return!1;var o=Object.keys(r);if(n.length>0&&n.some((function(e){return-1===o.indexOf(e)}))){var u=n.filter((function(e){return-1===o.indexOf(e)}));return m(1===u.length?'shape - required property "'+u[0]+'" is not defined.':'shape - required properties "'+u.join('", "')+'" are not defined.'),!1}return o.every((function(n){if(-1===t.indexOf(n))return!0===i._vueTypes_isLoose||(m('shape - shape definition does not include a "'+n+'" property. Allowed keys: "'+t.join('", "')+'".'),!1);var o=x(e[n],r[n],!0);return"string"==typeof o&&m('shape - "'+n+'" property validation error:\n '+A(o)),!0===o}))}});return Object.defineProperty(r,"_vueTypes_isLoose",{writable:!0,value:!1}),Object.defineProperty(r,"loose",{get:function(){return this._vueTypes_isLoose=!0,this}}),r}var C=["name","validate","getter"],J=function(){var e,t;return t=e=function(){function e(){}return e.extend=function(e){var t=this;if(k(e))return e.forEach((function(e){return t.extend(e)})),this;var n=e.name,r=e.validate,i=void 0!==r&&r,o=e.getter,a=void 0!==o&&o,f=u(e,C);if(g(this,n))throw new TypeError('[VueTypes error]: Type "'+n+'" already defined');var l,c=f.type;return _(c)?(delete f.type,Object.defineProperty(this,n,a?{get:function(){return N(n,c,f)}}:{value:function(){var e,t=N(n,c,f);return t.validator&&(t.validator=(e=t.validator).bind.apply(e,[t].concat([].slice.call(arguments)))),t}})):(l=a?{get:function(){var e=Object.assign({},f);return i?P(n,e):S(n,e)},enumerable:!0}:{value:function(){var e,t,r=Object.assign({},f);return e=i?P(n,r):S(n,r),r.validator&&(e.validator=(t=r.validator).bind.apply(t,[e].concat([].slice.call(arguments)))),e},enumerable:!0},Object.defineProperty(this,n,l))},f(e,null,[{key:"any",get:function(){return P("any",{})}},{key:"func",get:function(){return P("function",{type:Function}).def(this.defaults.func)}},{key:"bool",get:function(){return P("boolean",{type:Boolean}).def(this.defaults.bool)}},{key:"string",get:function(){return P("string",{type:String}).def(this.defaults.string)}},{key:"number",get:function(){return P("number",{type:Number}).def(this.defaults.number)}},{key:"array",get:function(){return P("array",{type:Array}).def(this.defaults.array)}},{key:"object",get:function(){return P("object",{type:Object}).def(this.defaults.object)}},{key:"integer",get:function(){return S("integer",{type:Number,validator:function(e){return O(e)}}).def(this.defaults.integer)}},{key:"symbol",get:function(){return S("symbol",{validator:function(e){return"symbol"==typeof e}})}}]),e}(),e.defaults={},e.sensibleDefaults=void 0,e.config=a,e.custom=L,e.oneOf=D,e.instanceOf=B,e.oneOfType=F,e.arrayOf=E,e.objectOf=I,e.shape=V,e.utils={validate:function(e,t){return!0===x(t,e,!0)},toType:function(e,t,n){return void 0===n&&(n=!1),n?P(e,t):S(e,t)}},t}();var M=function(e){function t(){return e.apply(this,arguments)||this}return i(t,e),t}(function(e){var t,n;return void 0===e&&(e={func:function(){},bool:!0,string:"",number:0,array:function(){return[]},object:function(){return{}},integer:0}),n=t=function(t){function n(){return t.apply(this,arguments)||this}return i(n,t),f(n,null,[{key:"sensibleDefaults",get:function(){return l({},this.defaults)},set:function(t){this.defaults=!1!==t?l({},!0!==t?t:e):{}}}]),n}(J),t.defaults=l({},e),n}());t.a=M},187:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));function r(e){false}},193:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return f}));n(12),n(49),n(50);var r=n(187);function o(e){return isNaN(e)?(Object(r.a)("formatToEuroCurrency NaN"),0):new Intl.NumberFormat("nl-NL",{maximumFractionDigits:0,minimumFractionDigits:0}).format(parseFloat(e))}function f(e){var t=e.toString().replaceAll(".","");return 0==t.length&&(t="0"),parseInt(t)}},391:function(e,t,n){var map={"./af":238,"./af.js":238,"./ar":239,"./ar-dz":240,"./ar-dz.js":240,"./ar-kw":241,"./ar-kw.js":241,"./ar-ly":242,"./ar-ly.js":242,"./ar-ma":243,"./ar-ma.js":243,"./ar-sa":244,"./ar-sa.js":244,"./ar-tn":245,"./ar-tn.js":245,"./ar.js":239,"./az":246,"./az.js":246,"./be":247,"./be.js":247,"./bg":248,"./bg.js":248,"./bm":249,"./bm.js":249,"./bn":250,"./bn-bd":251,"./bn-bd.js":251,"./bn.js":250,"./bo":252,"./bo.js":252,"./br":253,"./br.js":253,"./bs":254,"./bs.js":254,"./ca":255,"./ca.js":255,"./cs":256,"./cs.js":256,"./cv":257,"./cv.js":257,"./cy":258,"./cy.js":258,"./da":259,"./da.js":259,"./de":260,"./de-at":261,"./de-at.js":261,"./de-ch":262,"./de-ch.js":262,"./de.js":260,"./dv":263,"./dv.js":263,"./el":264,"./el.js":264,"./en-au":265,"./en-au.js":265,"./en-ca":266,"./en-ca.js":266,"./en-gb":267,"./en-gb.js":267,"./en-ie":268,"./en-ie.js":268,"./en-il":269,"./en-il.js":269,"./en-in":270,"./en-in.js":270,"./en-nz":271,"./en-nz.js":271,"./en-sg":272,"./en-sg.js":272,"./eo":273,"./eo.js":273,"./es":274,"./es-do":275,"./es-do.js":275,"./es-mx":276,"./es-mx.js":276,"./es-us":277,"./es-us.js":277,"./es.js":274,"./et":278,"./et.js":278,"./eu":279,"./eu.js":279,"./fa":280,"./fa.js":280,"./fi":281,"./fi.js":281,"./fil":282,"./fil.js":282,"./fo":283,"./fo.js":283,"./fr":284,"./fr-ca":285,"./fr-ca.js":285,"./fr-ch":286,"./fr-ch.js":286,"./fr.js":284,"./fy":287,"./fy.js":287,"./ga":288,"./ga.js":288,"./gd":289,"./gd.js":289,"./gl":290,"./gl.js":290,"./gom-deva":291,"./gom-deva.js":291,"./gom-latn":292,"./gom-latn.js":292,"./gu":293,"./gu.js":293,"./he":294,"./he.js":294,"./hi":295,"./hi.js":295,"./hr":296,"./hr.js":296,"./hu":297,"./hu.js":297,"./hy-am":298,"./hy-am.js":298,"./id":299,"./id.js":299,"./is":300,"./is.js":300,"./it":301,"./it-ch":302,"./it-ch.js":302,"./it.js":301,"./ja":303,"./ja.js":303,"./jv":304,"./jv.js":304,"./ka":305,"./ka.js":305,"./kk":306,"./kk.js":306,"./km":307,"./km.js":307,"./kn":308,"./kn.js":308,"./ko":309,"./ko.js":309,"./ku":310,"./ku.js":310,"./ky":311,"./ky.js":311,"./lb":312,"./lb.js":312,"./lo":313,"./lo.js":313,"./lt":314,"./lt.js":314,"./lv":315,"./lv.js":315,"./me":316,"./me.js":316,"./mi":317,"./mi.js":317,"./mk":318,"./mk.js":318,"./ml":319,"./ml.js":319,"./mn":320,"./mn.js":320,"./mr":321,"./mr.js":321,"./ms":322,"./ms-my":323,"./ms-my.js":323,"./ms.js":322,"./mt":324,"./mt.js":324,"./my":325,"./my.js":325,"./nb":326,"./nb.js":326,"./ne":327,"./ne.js":327,"./nl":328,"./nl-be":329,"./nl-be.js":329,"./nl.js":328,"./nn":330,"./nn.js":330,"./oc-lnc":331,"./oc-lnc.js":331,"./pa-in":332,"./pa-in.js":332,"./pl":333,"./pl.js":333,"./pt":334,"./pt-br":335,"./pt-br.js":335,"./pt.js":334,"./ro":336,"./ro.js":336,"./ru":337,"./ru.js":337,"./sd":338,"./sd.js":338,"./se":339,"./se.js":339,"./si":340,"./si.js":340,"./sk":341,"./sk.js":341,"./sl":342,"./sl.js":342,"./sq":343,"./sq.js":343,"./sr":344,"./sr-cyrl":345,"./sr-cyrl.js":345,"./sr.js":344,"./ss":346,"./ss.js":346,"./sv":347,"./sv.js":347,"./sw":348,"./sw.js":348,"./ta":349,"./ta.js":349,"./te":350,"./te.js":350,"./tet":351,"./tet.js":351,"./tg":352,"./tg.js":352,"./th":353,"./th.js":353,"./tk":354,"./tk.js":354,"./tl-ph":355,"./tl-ph.js":355,"./tlh":356,"./tlh.js":356,"./tr":357,"./tr.js":357,"./tzl":358,"./tzl.js":358,"./tzm":359,"./tzm-latn":360,"./tzm-latn.js":360,"./tzm.js":359,"./ug-cn":361,"./ug-cn.js":361,"./uk":362,"./uk.js":362,"./ur":363,"./ur.js":363,"./uz":364,"./uz-latn":365,"./uz-latn.js":365,"./uz.js":364,"./vi":366,"./vi.js":366,"./x-pseudo":367,"./x-pseudo.js":367,"./yo":368,"./yo.js":368,"./zh-cn":369,"./zh-cn.js":369,"./zh-hk":370,"./zh-hk.js":370,"./zh-mo":371,"./zh-mo.js":371,"./zh-tw":372,"./zh-tw.js":372};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}r.keys=function(){return Object.keys(map)},r.resolve=o,e.exports=r,r.id=391},417:function(e,t,n){"use strict";n.r(t);var r=n(193),o=n(421),f=n(179),l=o.b.reactiveProp;t.default={extends:o.a,mixins:[l],props:{fontSize:{type:f.a.Number,default:12},showLegend:{type:f.a.Boolean,default:!0}},mounted:function(){this.renderChart(this.chartData,{legend:{align:"end",display:this.showLegend,labels:{boxWidth:7,fontSize:this.fontSize}},title:{display:!1,text:"voorspelling",align:"start"},layout:{padding:"16px"},tooltips:{callbacks:{label:function(e,data){var label=data.datasets[e.datasetIndex].label||"";return label&&(label+=": "),label+="€ "+parseInt(e.yLabel).toLocaleString("nl"),label}}},scales:{gridLines:{drawBorder:!1},scaleLabel:{fontColor:"#D6D6D6",fontFamily:"'Public Sans', sans-serif"},yAxes:[{drawBorder:!1,padding:8,ticks:{callback:function(e,t,n){return"€ "+Object(r.a)(Math.round(e))},fontSize:this.fontSize,beginAtZero:!0},labels:{fontSize:this.fontSize}}],xAxes:[{ticks:{fontSize:this.fontSize}}]},responsive:!0,maintainAspectRatio:!0})}}}}]);