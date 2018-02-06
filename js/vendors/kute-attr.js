// KUTE.js v1.6.2 | © dnp_theme | Attributes Plugin | MIT-License
!function(t,e){if("function"==typeof define&&define.amd)define(["kute.js"],e);else if("object"==typeof module&&"function"==typeof require)module.exports=e(require("kute.js"));else{if("undefined"==typeof t.KUTE)throw new Error("Attributes Plugin require KUTE.js.");e(t.KUTE)}}(this,function(t){"use strict";var e,r="undefined"!=typeof global?global:window,n=t,i=n.dom,u=n.prepareStart,o=n.parseProperty,a=n.truC,s=n.truD,f=(n.crossCheck,r.Interpolate.unit,r.Interpolate.number),l=r.Interpolate.color,c=function(t,e){return t.getAttribute(e)},p=["fill","stroke","stop-color"],v=function(t){return t.replace(/[A-Z]/g,"-$&").toLowerCase()};return u.attr=function(t,e){var r={};for(var n in e){var i=v(n).replace(/_+[a-z]+/,""),u=c(this.element,i);r[i]=p.indexOf(i)!==-1?u||"rgba(0,0,0,0)":u||(/opacity/i.test(n)?1:0)}return r},o.attr=function(t,r){"attr"in i||(i.attr=function(t,e,r,n,u){for(var o in n)i.attributes[o](t,o,r[o],n[o],u)},e=i.attributes={});var n={};for(var u in r){var o=v(u),b=/(%|[a-z]+)$/,d=c(this.element,o.replace(/_+[a-z]+/,""));if(p.indexOf(o)===-1)if(null!==d&&b.test(d)){var y=s(d).u||s(r[u]).u,A=/%/.test(y)?"_percent":"_"+y;o+A in e||(/%/.test(y)?e[o+A]=function(t,e,r,n,i){var u=u||e.replace(A,"");t.setAttribute(u,(100*f(r.v,n.v,i)>>0)/100+n.u)}:e[o+A]=function(t,e,r,n,i){var u=u||e.replace(A,"");t.setAttribute(u,(f(r.v,n.v,i)>>0)+n.u)}),n[o+A]=s(r[u])}else b.test(r[u])&&null!==d&&(null===d||b.test(d))||(o in e||(/opacity/i.test(u)?e[o]=function(t,e,r,n,i){t.setAttribute(e,(100*f(r,n,i)>>0)/100)}:e[o]=function(t,e,r,n,i){t.setAttribute(e,(10*f(r,n,i)>>0)/10)}),n[o]=parseFloat(r[u]));else o in e||(e[o]=function(t,e,n,i,u){t.setAttribute(e,l(n,i,u,r.keepHex))}),n[o]=a(r[u])}return n},this});