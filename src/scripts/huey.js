!function(e){"object"==typeof exports?module.exports=e():"function"==typeof define&&define.amd?define(e):"undefined"!=typeof window?window.huey=e():"undefined"!=typeof global?global.huey=e():"undefined"!=typeof self&&(self.huey=e())}(function(){return function e(t,n,r){function o(i,u){if(!n[i]){if(!t[i]){var f="function"==typeof require&&require;if(!u&&f)return f(i,!0);if(a)return a(i,!0);throw new Error("Cannot find module '"+i+"'")}var d=n[i]={exports:{}};t[i][0].call(d.exports,function(e){var n=t[i][1][e];return o(n?n:e)},d,d.exports,e,t,n,r)}return n[i].exports}for(var a="function"==typeof require&&require,i=0;i<r.length;i++)o(r[i]);return o}({1:[function(e,t){var n=e("./shared");t.exports=function(e,t){var r=n.invalid(e,t);if(r){if(!t)throw r;return t(r),void 0}n.getImageData(e,function(e,r){if(e)return t(e),void 0;var o=n.getMostFrequentColor(r.data);t(null,o,r)})}},{"./shared":4}],2:[function(e,t){var n=e("./shared"),r=null,o=function(e){return r=e.createElement("canvas"),!(!r.getContext||!r.getContext("2d"))}(document);t.exports=function(e,t){if(!o)return t(new Error("Your browser doesn’t the <canvas> element"));var a=new Image;/^data/.test(e)||(a.crossOrigin=!0),a.src=e,a.onerror=t,a.onload=function(){var e=n(r);t(null,{data:e(a),height:a.height,width:a.width})}}},{"./shared":3}],3:[function(e,t){t.exports=function(e){return function(t){var n=e.getContext("2d");e.width=t.width,e.height=t.height,n.drawImage(t,0,0);var r=n.getImageData(0,0,t.width,t.height);return r.data}}},{}],4:[function(e,t,n){var r=function(e,t){return e&&typeof e===t};n.invalid=function(e,t){var n=void 0===e?"Please provide an image path.":r(t,"function")===!1?"Please provide a callback function.":null;return n?new Error(n):!1},n.getImageData=e("get-image-data"),n.getMostFrequentColor=function(e){for(var t,n,r,o,a=e.length,i={},u=0,f=1e4>a?24:1e5>a?56:1e6>a?512:1e7>a?768:1e8>a?10240:12288,d=0;a>d;d+=f)n=[e[d],e[d+1],e[d+2]],r=Math.min(n[0],Math.min(n[1],n[2])),o=Math.max(n[0],Math.max(n[1],n[2])),24>o-r||(n=n.join(","),i[n]=i.hasOwnProperty(n)?++i[n]:1);for(n in i)i[n]<u||(u=i[n],t=n);return t?t.split(",").map(function(e){return parseInt(e,10)}):null}},{"get-image-data":2}]},{},[1])(1)});
