(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-77312664"],{"3b74":function(e,t,r){"use strict";function n(e){return e instanceof RegExp}function a(e){return e&&"[object Function]"==={}.toString.call(e)}function i(e){return null!==e&&!Array.isArray(e)&&"object"===typeof e}function o(e){return"undefined"===typeof e}t.__esModule=!0,t.isUndefined=t.isPlainObject=t.isFunction=t.isRegex=void 0,t.isRegex=n,t.isFunction=a,t.isPlainObject=i,t.isUndefined=o},"419e":function(e,t,r){"use strict";var n=this&&this.__read||function(e,t){var r="function"===typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,a,i=r.call(e),o=[];try{while((void 0===t||t-- >0)&&!(n=i.next()).done)o.push(n.value)}catch(u){a={error:u}}finally{try{n&&!n.done&&(r=i["return"])&&r.call(i)}finally{if(a)throw a.error}}return o},a=this&&this.__spreadArray||function(e,t){for(var r=0,n=t.length,a=e.length;r<n;r++,a++)e[a]=t[r];return e};function i(e,t,r){var i=new Set(t);return function(t,o,u){return u===e&&Array.from(a(a([],n(t)),n(o)).map((function(e){return{key:r(e),value:e}})).map((function(e){var t=e.key,r=e.value;return{key:i.has(t)?t:r,value:r}})).reduce((function(e,t){var r=t.key,n=t.value;return e["delete"](r),e.set(r,n)}),new Map).values())}}t.__esModule=!0,t["default"]=i},"52f6":function(e,t,r){"use strict";(function(t){
/*!
 * shallow-clone <https://github.com/jonschlinkert/shallow-clone>
 *
 * Copyright (c) 2015-present, Jon Schlinkert.
 * Released under the MIT License.
 */
const n=Symbol.prototype.valueOf,a=r("ef5d");function i(e,t){switch(a(e)){case"array":return e.slice();case"object":return Object.assign({},e);case"date":return new e.constructor(Number(e));case"map":return new Map(e);case"set":return new Set(e);case"buffer":return s(e);case"symbol":return f(e);case"arraybuffer":return u(e);case"float32array":case"float64array":case"int16array":case"int32array":case"int8array":case"uint16array":case"uint32array":case"uint8clampedarray":case"uint8array":return c(e);case"regexp":return o(e);case"error":return Object.create(e);default:return e}}function o(e){const t=void 0!==e.flags?e.flags:/\w+$/.exec(e)||void 0,r=new e.constructor(e.source,t);return r.lastIndex=e.lastIndex,r}function u(e){const t=new e.constructor(e.byteLength);return new Uint8Array(t).set(new Uint8Array(e)),t}function c(e,t){return new e.constructor(e.buffer,e.byteOffset,e.length)}function s(e){const r=e.length,n=t.allocUnsafe?t.allocUnsafe(r):t.from(r);return e.copy(n),n}function f(e){return n?Object(n.call(e)):{}}e.exports=i}).call(this,r("b639").Buffer)},"6cfb":function(e,t,r){"use strict";r("e7c8")},"6f71":function(e,t,r){"use strict";var n=/(\*|\?)/g;function a(e,t){this.text=e=e||"",this.hasWild=e.indexOf("*")>=0,this.separator=t,this.parts=e.split(t).map(this.classifyPart.bind(this))}a.prototype.match=function(e){var t,r,n=!0,a=this.parts,i=a.length;if("string"==typeof e||e instanceof String)if(this.hasWild||this.text==e){for(r=(e||"").split(this.separator),t=0;n&&t<i;t++)"*"!==a[t]&&(n=t<r.length&&(a[t]instanceof RegExp?a[t].test(r[t]):a[t]===r[t]));n=n&&r}else n=!1;else if("function"==typeof e.splice)for(n=[],t=e.length;t--;)this.match(e[t])&&(n[n.length]=e[t]);else if("object"==typeof e)for(var o in n={},e)this.match(o)&&(n[o]=e[o]);return n},a.prototype.classifyPart=function(e){return"*"===e?e:e.indexOf("*")>=0||e.indexOf("?")>=0?new RegExp(e.replace(n,".$1")):e},e.exports=function(e,t,r){var n=new a(e,r||/[\/\.]/);return"undefined"!=typeof t?n.match(t):n}},7676:function(e,t,r){"use strict";var n=this&&this.__assign||function(){return n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r],t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},n.apply(this,arguments)},a=this&&this.__read||function(e,t){var r="function"===typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,a,i=r.call(e),o=[];try{while((void 0===t||t-- >0)&&!(n=i.next()).done)o.push(n.value)}catch(u){a={error:u}}finally{try{n&&!n.done&&(r=i["return"])&&r.call(i)}finally{if(a)throw a.error}}return o},i=this&&this.__spreadArray||function(e,t){for(var r=0,n=t.length,a=e.length;r<n;r++,a++)e[a]=t[r];return e},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};t.__esModule=!0,t.unique=t.mergeWithRules=t.mergeWithCustomize=t["default"]=t.merge=t.CustomizeRule=t.customizeObject=t.customizeArray=void 0;var u=o(r("6f71")),c=o(r("d540")),s=o(r("c4d8")),f=o(r("419e"));t.unique=f["default"];var l=r("8a52");t.CustomizeRule=l.CustomizeRule;var p=r("3b74");function d(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return h({}).apply(void 0,i([e],a(t)))}function h(e){return function(t){for(var r=[],n=1;n<arguments.length;n++)r[n-1]=arguments[n];if(p.isUndefined(t)||r.some(p.isUndefined))throw new TypeError("Merging undefined is not supported");if(t.then)throw new TypeError("Promises are not supported");if(!t)return{};if(0===r.length){if(Array.isArray(t)){if(0===t.length)return{};if(t.some(p.isUndefined))throw new TypeError("Merging undefined is not supported");if(t[0].then)throw new TypeError("Promises are not supported");return c["default"](t,s["default"](e))}return t}return c["default"]([t].concat(r),s["default"](e))}}function y(e){return function(t,r,n){var o=Object.keys(e).find((function(e){return u["default"](e,n)}))||"";if(o)switch(e[o]){case l.CustomizeRule.Prepend:return i(i([],a(r)),a(t));case l.CustomizeRule.Replace:return r;case l.CustomizeRule.Append:default:return i(i([],a(t)),a(r))}}}function b(e){return h({customizeArray:function(t,r,n){var a=e;return n.split(".").forEach((function(e){a&&(a=a[e])})),p.isPlainObject(a)?v({currentRule:a,a:t,b:r}):"string"===typeof a?g({currentRule:a,a:t,b:r}):void 0}})}t.merge=d,t["default"]=d,t.mergeWithCustomize=h,t.customizeArray=y,t.mergeWithRules=b;var m=Array.isArray;function v(e){var t=e.currentRule,r=e.a,o=e.b;if(!m(r))return r;var u=[],c=r.map((function(e){if(!p.isPlainObject(t))return e;var r={},c=[],s={};Object.entries(t).forEach((function(e){var t=a(e,2),r=t[0],n=t[1];n===l.CustomizeRule.Match?c.push(r):s[r]=n}));var f=o.filter((function(t){var r=c.every((function(r){var n,a;return(null===(n=e[r])||void 0===n?void 0:n.toString())===(null===(a=t[r])||void 0===a?void 0:a.toString())}));return r&&u.push(t),r}));return p.isPlainObject(e)?(Object.entries(e).forEach((function(e){var o=a(e,2),u=o[0],c=o[1],d=t;switch(t[u]){case l.CustomizeRule.Match:r[u]=c,Object.entries(d).forEach((function(e){var t=a(e,2),n=t[0],i=t[1];if(i===l.CustomizeRule.Replace&&f.length>0){var o=w(f)[n];"undefined"!==typeof o&&(r[n]=o)}}));break;case l.CustomizeRule.Append:if(!f.length){r[u]=c;break}var h=w(f)[u];if(!m(c)||!m(h))throw new TypeError("Trying to append non-arrays");r[u]=c.concat(h);break;case l.CustomizeRule.Merge:if(!f.length){r[u]=c;break}var y=w(f)[u];if(!p.isPlainObject(c)||!p.isPlainObject(y))throw new TypeError("Trying to merge non-objects");r[u]=n(n({},c),y);break;case l.CustomizeRule.Prepend:if(!f.length){r[u]=c;break}var b=w(f)[u];if(!m(c)||!m(b))throw new TypeError("Trying to prepend non-arrays");r[u]=b.concat(c);break;case l.CustomizeRule.Replace:r[u]=f.length>0?w(f)[u]:c;break;default:var g=s[u],_=f.map((function(e){return e[u]})).reduce((function(e,t){return m(e)&&m(t)?i(i([],a(e)),a(t)):e}),[]);r[u]=v({currentRule:g,a:c,b:_});break}})),r):e}));return c.concat(o.filter((function(e){return!u.includes(e)})))}function g(e){var t=e.currentRule,r=e.a,n=e.b;switch(t){case l.CustomizeRule.Append:return r.concat(n);case l.CustomizeRule.Prepend:return n.concat(r);case l.CustomizeRule.Replace:return n}return r}function w(e){return e[e.length-1]}function _(e){return function(t,r,n){switch(e[n]){case l.CustomizeRule.Prepend:return c["default"]([r,t],s["default"]());case l.CustomizeRule.Replace:return r;case l.CustomizeRule.Append:return c["default"]([t,r],s["default"]())}}}t.customizeObject=_},"8a52":function(e,t,r){"use strict";t.__esModule=!0,t.CustomizeRule=void 0,function(e){e["Match"]="match",e["Merge"]="merge",e["Append"]="append",e["Prepend"]="prepend",e["Replace"]="replace"}(t.CustomizeRule||(t.CustomizeRule={}))},9675:function(e,t,r){"use strict";const n=r("52f6"),a=r("ef5d"),i=r("fb48");function o(e,t){switch(a(e)){case"object":return u(e,t);case"array":return c(e,t);default:return n(e)}}function u(e,t){if("function"===typeof t)return t(e);if(t||i(e)){const r=new e.constructor;for(let n in e)r[n]=o(e[n],t);return r}return e}function c(e,t){const r=new e.constructor(e.length);for(let n=0;n<e.length;n++)r[n]=o(e[n],t);return r}e.exports=o},a832:function(e,t,r){"use strict";
/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */e.exports=function(e){return null!=e&&"object"===typeof e&&!1===Array.isArray(e)}},c4d8:function(e,t,r){"use strict";var n=this&&this.__read||function(e,t){var r="function"===typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,a,i=r.call(e),o=[];try{while((void 0===t||t-- >0)&&!(n=i.next()).done)o.push(n.value)}catch(u){a={error:u}}finally{try{n&&!n.done&&(r=i["return"])&&r.call(i)}finally{if(a)throw a.error}}return o},a=this&&this.__spreadArray||function(e,t){for(var r=0,n=t.length,a=e.length;r<n;r++,a++)e[a]=t[r];return e},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};t.__esModule=!0;var o=i(r("9675")),u=i(r("d540")),c=r("3b74"),s=Array.isArray;function f(e){var t=void 0===e?{}:e,r=t.customizeArray,i=t.customizeObject,l=t.key;return function e(t,p,d){var h=l?l+"."+d:d;if(c.isFunction(t)&&c.isFunction(p))return function(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];return e(t.apply(void 0,a([],n(r))),p.apply(void 0,a([],n(r))),d)};if(s(t)&&s(p)){var y=r&&r(t,p,h);return y||a(a([],n(t)),n(p))}if(c.isRegex(p))return p;if(c.isPlainObject(t)&&c.isPlainObject(p)){y=i&&i(t,p,h);return y||u["default"]([t,p],f({customizeArray:r,customizeObject:i,key:h}))}return c.isPlainObject(p)?o["default"](p):s(p)?a([],n(p)):p}}t["default"]=f},d540:function(e,t,r){"use strict";var n=this&&this.__read||function(e,t){var r="function"===typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,a,i=r.call(e),o=[];try{while((void 0===t||t-- >0)&&!(n=i.next()).done)o.push(n.value)}catch(u){a={error:u}}finally{try{n&&!n.done&&(r=i["return"])&&r.call(i)}finally{if(a)throw a.error}}return o};function a(e,t){var r=n(e),a=r[0],o=r.slice(1),u=a;return o.forEach((function(e){u=i(u,e,t)})),u}function i(e,t,r){var n={};return Object.keys(e).concat(Object.keys(t)).forEach((function(a){var i=r(e[a],t[a],a);n[a]="undefined"===typeof i?e[a]:i})),n}t.__esModule=!0,t["default"]=a},e7c8:function(e,t,r){},ef5d:function(e,t){var r=Object.prototype.toString;function n(e){return"function"===typeof e.constructor?e.constructor.name:null}function a(e){return Array.isArray?Array.isArray(e):e instanceof Array}function i(e){return e instanceof Error||"string"===typeof e.message&&e.constructor&&"number"===typeof e.constructor.stackTraceLimit}function o(e){return e instanceof Date||"function"===typeof e.toDateString&&"function"===typeof e.getDate&&"function"===typeof e.setDate}function u(e){return e instanceof RegExp||"string"===typeof e.flags&&"boolean"===typeof e.ignoreCase&&"boolean"===typeof e.multiline&&"boolean"===typeof e.global}function c(e,t){return"GeneratorFunction"===n(e)}function s(e){return"function"===typeof e.throw&&"function"===typeof e.return&&"function"===typeof e.next}function f(e){try{if("number"===typeof e.length&&"function"===typeof e.callee)return!0}catch(t){if(-1!==t.message.indexOf("callee"))return!0}return!1}function l(e){return!(!e.constructor||"function"!==typeof e.constructor.isBuffer)&&e.constructor.isBuffer(e)}e.exports=function(e){if(void 0===e)return"undefined";if(null===e)return"null";var t=typeof e;if("boolean"===t)return"boolean";if("string"===t)return"string";if("number"===t)return"number";if("symbol"===t)return"symbol";if("function"===t)return c(e)?"generatorfunction":"function";if(a(e))return"array";if(l(e))return"buffer";if(f(e))return"arguments";if(o(e))return"date";if(i(e))return"error";if(u(e))return"regexp";switch(n(e)){case"Symbol":return"symbol";case"Promise":return"promise";case"WeakMap":return"weakmap";case"WeakSet":return"weakset";case"Map":return"map";case"Set":return"set";case"Int8Array":return"int8array";case"Uint8Array":return"uint8array";case"Uint8ClampedArray":return"uint8clampedarray";case"Int16Array":return"int16array";case"Uint16Array":return"uint16array";case"Int32Array":return"int32array";case"Uint32Array":return"uint32array";case"Float32Array":return"float32array";case"Float64Array":return"float64array"}if(s(e))return"generator";switch(t=r.call(e),t){case"[object Object]":return"object";case"[object Map Iterator]":return"mapiterator";case"[object Set Iterator]":return"setiterator";case"[object String Iterator]":return"stringiterator";case"[object Array Iterator]":return"arrayiterator"}return t.slice(8,-1).toLowerCase().replace(/\s/g,"")}},f817:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("el-tabs",{staticClass:"poolDetail-tab",on:{"tab-click":e.changeActive},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[r("el-tab-pane",{attrs:{label:e.$t("views.scaList.tableHeaders.dataTest"),name:"flowDebug"}},[e.info?r("SearchCard",{attrs:{info:e.info,"show-graph":!1}}):e._e(),r("div",{staticClass:"dagre-box"},[e.graphData.nodes[0]?r("Dagre",{attrs:{"pool-id":e.$route.params.id,"init-data":e.graphData,"box-height":656}}):e._e()],1)],1),r("el-tab-pane",{attrs:{label:e.$t("views.scaList.tableHeaders.componentInfo"),name:"dependency"}},[r("el-table",{staticClass:"sca-list",staticStyle:{width:"100%","margin-top":"18px",cursor:"pointer"},attrs:{data:e.dependencies,"sort-by":"vul_count"}},[r("el-table-column",{attrs:{label:e.$t("views.scaList.tableHeaders.name"),prop:"package_name"}}),r("el-table-column",{attrs:{label:e.$t("views.scaList.tableHeaders.version"),prop:"version"}}),r("el-table-column",{attrs:{label:e.$t("views.scaList.tableHeaders.count"),prop:"vul_count"}})],1)],1)],1)],1)},a=[],i=(r("4160"),r("d81d"),r("b0c0"),r("ac1f"),r("5319"),r("841c"),r("159b"),r("96cf"),r("1da1")),o=r("d4ec"),u=r("bee2"),c=r("262e"),s=r("2caf"),f=r("9ab4"),l=r("9381"),p=r("60a3"),d=r("8c73"),h=r("7676"),y=r.n(h),b=r("2acf"),m=function(e){Object(c["a"])(r,e);var t=Object(s["a"])(r);function r(){var e;return Object(o["a"])(this,r),e=t.apply(this,arguments),e.activeName="flowDebug",e.info=null,e.graphData={nodes:[],edges:[]},e.dependencies=[],e}return Object(u["a"])(r,[{key:"changeActive",value:function(e){this.$router.replace({query:y()(this.$route.query,{activeName:e.name})})}},{key:"getSca",value:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.services.taint.sca({method_pool_id:this.$route.params.id});case 2:t=e.sent,201===t.status&&(this.dependencies=t.data);case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"getList",value:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.services.taint.search({id:this.$route.params.id});case 2:t=e.sent,r=t.data.method_pools.map((function(e,r){var n={},a={};return t.data.aggregation.vulnerablities_count.forEach((function(e){n[e.method_pool_id]=e})),t.data.relations.forEach((function(e){a[e.method_pool_id]=e})),{method_pools:e,vulnerablities_count:n[e.id],relations:a[e.id]}})),this.info=r[0];case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"getMethodPool",value:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.services.taint.graph({method_pool_id:this.$route.params.id,method_pool_type:"normal"});case 2:t=e.sent,201===t.status&&(this.graphData=t.data);case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"mounted",value:function(){this.getList(),this.getMethodPool(),this.getSca()}}]),r}(d["a"]);m=Object(f["b"])([Object(p["a"])({name:"PoolDetail",components:{SearchCard:l["a"],Dagre:b["a"]}})],m);var v=m,g=v,w=(r("6cfb"),r("2877")),_=Object(w["a"])(g,n,a,!1,null,"67c91fbc",null);t["default"]=_.exports},fb48:function(e,t,r){"use strict";
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */var n=r("a832");function a(e){return!0===n(e)&&"[object Object]"===Object.prototype.toString.call(e)}e.exports=function(e){var t,r;return!1!==a(e)&&(t=e.constructor,"function"===typeof t&&(r=t.prototype,!1!==a(r)&&!1!==r.hasOwnProperty("isPrototypeOf")))}}}]);
//# sourceMappingURL=chunk-77312664.c3a626c3.js.map