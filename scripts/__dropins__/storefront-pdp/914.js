export const id=914;export const ids=[914];export const modules={5587:(r,t,e)=>{function n(r,t){return function(r){if(Array.isArray(r))return r}(r)||function(r,t){var e=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=e){var n,o,i,a,u=[],c=!0,l=!1;try{if(i=(e=e.call(r)).next,0===t){if(Object(e)!==e)return;c=!1}else for(;!(c=(n=i.call(e)).done)&&(u.push(n.value),u.length!==t);c=!0);}catch(r){l=!0,o=r}finally{try{if(!c&&null!=e.return&&(a=e.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(r,t)||function(r,t){if(!r)return;if("string"==typeof r)return o(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);"Object"===e&&r.constructor&&(e=r.constructor.name);if("Map"===e||"Set"===e)return Array.from(r);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return o(r,t)}(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=r[e];return n}e.d(t,{S:()=>i});var i=function(r){return r.reduce((function(r,t){if(!t)return r;if("string"==typeof t&&(r+=" ".concat(t)),Array.isArray(t)){var e=n(t,2),o=e[0],i=e[1];o&&i&&(r+=" ".concat(o))}return r}),"").trim()}},1177:(r,t,e)=>{e.d(t,{F:()=>s});var n=e(5587),o=e(7188);function i(r){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},i(r)}var a=["node"];function u(r,t){var e=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),e.push.apply(e,n)}return e}function c(r){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?u(Object(e),!0).forEach((function(t){l(r,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(e)):u(Object(e)).forEach((function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(e,t))}))}return r}function l(r,t,e){return(t=function(r){var t=function(r,t){if("object"!==i(r)||null===r)return r;var e=r[Symbol.toPrimitive];if(void 0!==e){var n=e.call(r,t||"default");if("object"!==i(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(r)}(r,"string");return"symbol"===i(t)?t:String(t)}(t))in r?Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[t]=e,r}function p(r,t){if(null==r)return{};var e,n,o=function(r,t){if(null==r)return{};var e,n,o={},i=Object.keys(r);for(n=0;n<i.length;n++)e=i[n],t.indexOf(e)>=0||(o[e]=r[e]);return o}(r,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(r);for(n=0;n<i.length;n++)e=i[n],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(r,e)&&(o[e]=r[e])}return o}function s(r){var t=r.node,e=p(r,a);return t?Array.isArray(t)?(0,o.jsx)(o.Fragment,{children:t.map((function(r,t){return(0,o.jsx)(s,c({node:r,className:e.className},e),t)}))}):(e.className=(0,n.S)([t.props.className,e.className]),(0,o.jsx)(t.type,c(c({ref:t.ref},t.props),e),t.key)):null}},3476:r=>{r.exports=function(r){var t=[];return t.toString=function(){return this.map((function(t){var e="",n=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),n&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=r(t),n&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(r,e,n,o,i){"string"==typeof r&&(r=[[null,r,void 0]]);var a={};if(n)for(var u=0;u<this.length;u++){var c=this[u][0];null!=c&&(a[c]=!0)}for(var l=0;l<r.length;l++){var p=[].concat(r[l]);n&&a[p[0]]||(void 0!==i&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=i),e&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=e):p[2]=e),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),t.push(p))}},t}},4933:r=>{r.exports=function(r){return r[1]}},3152:function(r){r.exports=function(r,t,e,n,o){for(t=t.split?t.split("."):t,n=0;n<t.length;n++)r=r?r[t[n]]:o;return r===o?e:r}},9724:(r,t,e)=>{e.d(t,{fH:()=>v,Pj:()=>w,Cf:()=>E,xv:()=>k,XK:()=>M});var n,o=e(3474),i=e(5437),a=e(3152),u=e.n(a),c={};function l(r,t,e){if(3===r.nodeType){var n="textContent"in r?r.textContent:r.nodeValue||"";if(!1!==l.options.trim){var o=0===t||t===e.length-1;if((!(n=n.match(/^[\s\n]+$/g)&&"all"!==l.options.trim?" ":n.replace(/(^[\s\n]+|[\s\n]+$)/g,"all"===l.options.trim||o?"":" "))||" "===n)&&e.length>1&&o)return null}return n}if(1!==r.nodeType)return null;var i=String(r.nodeName).toLowerCase();if("script"===i&&!l.options.allowScripts)return null;var a,u,c=l.h(i,function(r){var t=r&&r.length;if(!t)return null;for(var e={},n=0;n<t;n++){var o=r[n],i=o.name,a=o.value;"on"===i.substring(0,2)&&l.options.allowEvents&&(a=new Function(a)),e[i]=a}return e}(r.attributes),(u=(a=r.childNodes)&&Array.prototype.map.call(a,l).filter(s))&&u.length?u:null);return l.visitor&&l.visitor(c),c}var p,s=function(r){return r},f={};function d(r){var t=(r.type||"").toLowerCase(),e=d.map;e&&e.hasOwnProperty(t)?(r.type=e[t],r.props=Object.keys(r.props||{}).reduce((function(t,e){var n;return t[(n=e,n.replace(/-(.)/g,(function(r,t){return t.toUpperCase()})))]=r.props[e],t}),{})):r.type=t.replace(/[^a-z0-9-]/i,"")}const m=function(r){function t(){r.apply(this,arguments)}return r&&(t.__proto__=r),(t.prototype=Object.create(r&&r.prototype)).constructor=t,t.setReviver=function(r){p=r},t.prototype.shouldComponentUpdate=function(r){var t=this.props;return r.wrap!==t.wrap||r.type!==t.type||r.markup!==t.markup},t.prototype.setComponents=function(r){if(this.map={},r)for(var t in r)if(r.hasOwnProperty(t)){var e=t.replace(/([A-Z]+)([A-Z][a-z0-9])|([a-z0-9]+)([A-Z])/g,"$1$3-$2$4").toLowerCase();this.map[e]=r[t]}},t.prototype.render=function(r){var t=r.wrap;void 0===t&&(t=!0);var e,i=r.type,a=r.markup,u=r.components,s=r.reviver,m=r.onError,v=r["allow-scripts"],y=r["allow-events"],h=r.trim,b=function(r,t){var e={};for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&-1===t.indexOf(n)&&(e[n]=r[n]);return e}(r,["wrap","type","markup","components","reviver","onError","allow-scripts","allow-events","trim"]),g=s||this.reviver||this.constructor.prototype.reviver||p||o.h;this.setComponents(u);var w={allowScripts:v,allowEvents:y,trim:h};try{e=function(r,t,e,o,i){var a=function(r,t){var e,o,i,a,u="html"===t?"text/html":"application/xml";"html"===t?(a="body",i="<!DOCTYPE html>\n<html><body>"+r+"</body></html>"):(a="xml",i='<?xml version="1.0" encoding="UTF-8"?>\n<xml>'+r+"</xml>");try{e=(new DOMParser).parseFromString(i,u)}catch(r){o=r}if(e||"html"!==t||((e=n||(n=function(){if(document.implementation&&document.implementation.createHTMLDocument)return document.implementation.createHTMLDocument("");var r=document.createElement("iframe");return r.style.cssText="position:absolute; left:0; top:-999em; width:1px; height:1px; overflow:hidden;",r.setAttribute("sandbox","allow-forms"),document.body.appendChild(r),r.contentWindow.document}())).open(),e.write(i),e.close()),e){var c=e.getElementsByTagName(a)[0],l=c.firstChild;return r&&!l&&(c.error="Document parse failed."),l&&"parsererror"===String(l.nodeName).toLowerCase()&&(l.removeChild(l.firstChild),l.removeChild(l.lastChild),c.error=l.textContent||l.nodeValue||o||"Unknown error",c.removeChild(l)),c}}(r,t);if(a&&a.error)throw new Error(a.error);var u=a&&a.body||a;d.map=o||f;var p=u&&function(r,t,e,n){return l.visitor=t,l.h=e,l.options=n||c,l(r)}(u,d,e,i);return d.map=null,p&&p.props&&p.props.children||null}(a,i,g,this.map,w)}catch(r){m?m({error:r}):"undefined"!=typeof console&&console.error&&console.error("preact-markup: "+r)}if(!1===t)return e||null;var x=b.hasOwnProperty("className")?"className":"class",O=b[x];return O?O.splice?O.splice(0,0,"markup"):"string"==typeof O?b[x]+=" markup":"object"==typeof O&&(O.markup=!0):b[x]="markup",g("div",b,e||null)},t}(o.Component);var v=(0,o.createContext)({intl:{}});function y(r){return null!=r}function h(r,t){for(var e in t)r[e]=t[e];return r}function b(r,t){var e=h({},r);for(var n in t)t.hasOwnProperty(n)&&(r[n]&&t[n]&&"object"==typeof r[n]&&"object"==typeof t[n]?e[n]=b(r[n],t[n]):e[n]=r[n]||t[n]);return e}var g=/[?&#]intl=show/;function w(r){var t=r.scope,e=r.mark,n=r.definition,a=function(r,t){var e={};for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&-1===t.indexOf(n)&&(e[n]=r[n]);return e}(r,["scope","mark","definition"]),u=h({},(0,i.useContext)(v).intl||{});return t&&(u.scope=t),n&&(u.dictionary=b(u.dictionary||{},n)),(e||"undefined"!=typeof location&&String(location).match(g))&&(u.mark=!0),(0,o.h)(v.Provider,{value:{intl:u}},a.children)}function x(r,t){if(arguments.length<2)return t=r,function(r){return x(r,t)};function e(e){return(0,o.h)(w,t||{},(0,o.h)(r,e))}return e.getWrappedComponent=r&&r.getWrappedComponent||function(){return r},e}var O={};function j(r,t,e,n){return r&&r.replace(/\{\{([\w.-]+)\}\}/g,C.bind(null,t||O,e,n))}function C(r,t,e,n,o){for(var i=o.split("."),a=r,u=0;u<i.length;u++){if(null==(a=a[i[u]]))return"";if(a&&a.type===k)return S(a.props.id,t,e,a.props.fields,a.props.plural,a.props.fallback)}return"string"==typeof a&&a.match(/\{\{/)&&(a=j(a,r)),a}function S(r,t,e,n,o,i){t&&(r=t+"."+r);var a=e&&u()(e,r);return(o||0===o)&&a&&"object"==typeof a&&(a=a.splice?a[o]||a[0]:0===o&&y(a.none||a.zero)?a.none||a.zero:1===o&&y(a.one||a.singular)?a.one||a.singular:a.some||a.many||a.plural||a.other||a),a&&j(a,n,t,e)||i||null}function P(r){var t=r.value,e=r.id,n=(0,i.useContext)(v).intl;if(n&&n.mark){var a="dictionary"+(n&&n.scope?"."+n.scope:"")+"."+e;return(0,o.h)("mark",{style:{background:t?u()(n,a)?"rgba(119,231,117,.5)":"rgba(229,226,41,.5)":"rgba(228,147,51,.5)"},title:e},t)}return t}function k(r){var t=r.id,e=r.children,n=r.plural,a=r.fields,u=(0,i.useContext)(v).intl,c=S(t,u&&u.scope,u&&u.dictionary,a,n,e);return(0,o.h)(P,{id:t,value:c})}function T(r,t,e){var n={};for(var o in t=t||{},r=function(r){if("string"==typeof(r=r||{})&&(r=r.split(",")),"join"in r){for(var t={},e=0;e<r.length;e++){var n=r[e].trim();n&&(t[n.split(".").pop()]=n)}return t}return r}(r),r)if(r.hasOwnProperty(o)&&r[o]){var i=r[o];e||"string"!=typeof i?i.type===k&&(i=h({fallback:i.props.children},i.props),n[o]=S(i.id,t.scope,t.dictionary,i.fields,i.plural,i.fallback)):n[o]=S(i,t.scope,t.dictionary)}return n}function E(r){var t=r.children,e=(0,i.useContext)(v).intl;return t&&t.length?t.map((function(r){return(0,o.cloneElement)(r,T(r.props,e,!0))})):t&&(0,o.cloneElement)(t,T(t.props,e,!0))}function A(r,t){var e={};for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&-1===t.indexOf(n)&&(e[n]=r[n]);return e}function N(r){var t=r.html,e=r.id,n=A(r,["html","id"]);return(0,o.h)(P,{id:e,value:t?"string"==typeof t?(0,o.h)(m,Object.assign({},{type:"html",trim:!1},n,{markup:t})):(0,o.h)("span",null,t):t})}function M(r){var t=(0,i.useContext)(v).intl;return T("function"==typeof r?r({intl:t}):r,t)}x.intl=x,x.IntlContext=v,x.IntlProvider=w,x.Text=k,x.MarkupText=function(r){var t=r.id,e=r.fields,n=r.plural,i=r.children,a=A(r,["id","fields","plural","children"]);return(0,o.h)(E,null,(0,o.h)(N,Object.assign({},{html:(0,o.h)(k,{id:t,fields:e,plural:n,children:i}),id:t},a)))},x.Localizer=E,x.withText=function(r){return function(t){function e(e,n){var a=(0,i.useContext)(v).intl,u=T("function"==typeof r?r(e,{intl:a}):r,a);return(0,o.h)(t,h(h({},e),u))}return e.getWrappedComponent=t&&t.getWrappedComponent||function(){return t},e}},x.useText=M,x.translate=S},1892:r=>{var t=[];function e(r){for(var e=-1,n=0;n<t.length;n++)if(t[n].identifier===r){e=n;break}return e}function n(r,n){for(var i={},a=[],u=0;u<r.length;u++){var c=r[u],l=n.base?c[0]+n.base:c[0],p=i[l]||0,s="".concat(l," ").concat(p);i[l]=p+1;var f=e(s),d={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==f)t[f].references++,t[f].updater(d);else{var m=o(d,n);n.byIndex=u,t.splice(u,0,{identifier:s,updater:m,references:1})}a.push(s)}return a}function o(r,t){var e=t.domAPI(t);e.update(r);return function(t){if(t){if(t.css===r.css&&t.media===r.media&&t.sourceMap===r.sourceMap&&t.supports===r.supports&&t.layer===r.layer)return;e.update(r=t)}else e.remove()}}r.exports=function(r,o){var i=n(r=r||[],o=o||{});return function(r){r=r||[];for(var a=0;a<i.length;a++){var u=e(i[a]);t[u].references--}for(var c=n(r,o),l=0;l<i.length;l++){var p=e(i[l]);0===t[p].references&&(t[p].updater(),t.splice(p,1))}i=c}}},8311:r=>{var t={};r.exports=function(r,e){var n=function(r){if(void 0===t[r]){var e=document.querySelector(r);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(r){e=null}t[r]=e}return t[r]}(r);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(e)}},8060:r=>{r.exports=function(r){var t=document.createElement("style");return r.setAttributes(t,r.attributes),r.insert(t,r.options),t}},8192:(r,t,e)=>{r.exports=function(r){var t=e.nc;t&&r.setAttribute("nonce",t)}},5760:r=>{r.exports=function(r){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=r.insertStyleElement(r);return{update:function(e){!function(r,t,e){var n="";e.supports&&(n+="@supports (".concat(e.supports,") {")),e.media&&(n+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(n+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),n+=e.css,o&&(n+="}"),e.media&&(n+="}"),e.supports&&(n+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(n,r,t.options)}(t,r,e)},remove:function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(t)}}}},4865:r=>{r.exports=function(r,t){if(t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}},7188:(r,t,e)=>{e(4853);var n=e(4142);e.o(n,"Fragment")&&e.d(t,{Fragment:function(){return n.Fragment}}),e.o(n,"jsx")&&e.d(t,{jsx:function(){return n.jsx}}),e.o(n,"jsxs")&&e.d(t,{jsxs:function(){return n.jsxs}})}};