!function(t){var n={};function e(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:i})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(e.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(i,o,function(n){return t[n]}.bind(null,o));return i},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=1)}([function(t,n,e){},function(t,n,e){"use strict";e.r(n);e(0);function i(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var o=function(){function t(){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.positions=[["00","01","02","03"],["10","11","12","13"],["20","21","22","23"],["30","31","32","33"]]}var n,e,o;return n=t,(e=[{key:"getPositions",value:function(){return this.positions}}])&&i(n.prototype,e),o&&i(n,o),t}();function r(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var s=function(){function t(){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.board=document.createElement("div"),this.goblin=document.createElement("div"),this.board.id="board",this.goblin.classList.add("goblin")}var n,e,i;return n=t,(e=[{key:"getBoard",value:function(){this.board.innerHTML=' <table>\n       <tr>\n        <td id="00"></td>\n        <td id="01"></td>\n        <td id="02"></td>\n        <td id="03"></td>\n       </tr>\n       <tr>\n        <td id="10"></td>\n        <td id="11"></td>\n        <td id="12"></td>\n        <td id="13"></td>\n       </tr>\n       <tr>\n        <td id="20"></td>\n        <td id="21"></td>\n        <td id="22"></td>\n        <td id="23"></td>\n       </tr>\n       <tr>\n        <td id="30"></td>\n        <td id="31"></td>\n        <td id="32"></td>\n        <td id="33"></td>\n       </tr>\n      </table>',document.body.insertAdjacentElement("beforeend",this.board)}},{key:"showGoblin",value:function(t){return t.insertAdjacentElement("afterbegin",this.goblin)}},{key:"findPosition",value:function(t){return document.getElementById(t)}},{key:"addListener",value:function(t){this.goblin.addEventListener("click",t)}},{key:"showPoints",value:function(t){document.querySelector(".points").textContent=t}},{key:"showMiss",value:function(t){document.querySelector(".miss").textContent=t}},{key:"hiddenGoblin",value:function(){document.querySelector(".goblin").remove()}}])&&r(n.prototype,e),i&&r(n,i),t}();function a(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var d=function(){function t(n,e){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.previousCell=null,this.positions=n,this.view=e,this.points=0,this.miss=-1,this.isHit=!1,this.addPoint=this.addPoint.bind(this)}var n,e,i;return n=t,(e=[{key:"randomPosition",value:function(){var t=Math.round(Math.random()*(this.positions.length-1)),n=Math.round(Math.random()*(this.positions.length-1)),e=this.positions[t][n];return e===this.previousCell&&(e=this.randomPosition()),this.previousCell=e,e}},{key:"addPoint",value:function(t){t.target.classList.contains("goblin")&&(this.points+=1,this.isHit=!0,this.view.showPoints(this.points),this.view.hiddenGoblin())}},{key:"engineGame",value:function(){var t=this.randomPosition(),n=this.view.findPosition(t);this.view.showGoblin(n),this.isHit?this.isHit=!1:(this.miss+=1,this.view.showMiss(this.miss),5===this.miss&&(clearInterval(this.timet),alert("Game over")))}},{key:"generateNewPosition",value:function(){var t=this;this.view.getBoard(),this.view.addListener(this.addPoint),this.timet=setInterval((function(){t.engineGame()}),1e3)}}])&&a(n.prototype,e),i&&a(n,i),t}(),u=new o,l=new s;new d(u.getPositions(),l).generateNewPosition()}]);