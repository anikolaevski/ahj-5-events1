!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}([function(e,t,r){},function(e,t,r){"use strict";r.r(t);r(0);const n=new class{constructor(e){this.currentPosition=e.currentPosition,this.Score=e.Score,this.LeftToLose=e.LeftToLose,this.currentClick=0,this.StoreInterval={}}doClick(){this.Score+=1,this.currentClick=1}clearCurrentClick(){this.currentClick=0}doLoseOne(){this.LeftToLose-=1}storeInterval(e){this.StoreInterval=e}}({currentPosition:-1,Score:0,LeftToLose:5});function o(){return new Promise((e,t)=>{const r=n.LeftToLose>0?"Play":"You lost";document.getElementById("stateboard").innerHTML="<table>"+`<tr><td class="disp disp1">Game Status</td><td class="disp disp2">${r}</td></tr>`+`<tr><td class="disp disp1">Game Score</td><td class="disp disp2">${n.Score}</td></tr>`+`<tr><td class="disp disp1">Attemps to lose</td><td class="disp disp2">${n.LeftToLose}</td></tr>`+"</table>",setTimeout(()=>e(!0),100)})}document.getElementById("goblin").addEventListener("click",()=>{n.doClick()}),document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("gamePad");let t="";for(let e=0;e<16;e++)t+='<div class="myCell"></div>';e.innerHTML=t;const r=setInterval(()=>{!async function(){let e=-1;for(;e===n.currentPosition||-1===e;)e=Math.round(15*Math.random());const t=document.getElementById("gamePad"),r=document.getElementById("goblin");t.childNodes[e].appendChild(r),r.classList.remove("invisible"),n.currentPosition=e,0===n.currentClick&&n.doLoseOne(),n.clearCurrentClick(),await o(),n.LeftToLose<=0&&(clearInterval(n.StoreInterval),alert("You lost the game! Refresh screen for start"))}()},1e3);o(),n.storeInterval(r),console.log("Game started!")})}]);
//# sourceMappingURL=main.js.map