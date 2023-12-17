(function(){"use strict";var e={8972:function(e,s,l){var t=l(9242),i=l(3396),o=l(7139);const r={id:"app",class:"app-body"},n={class:"container"},c={class:"row"},a={id:"counter",class:"counter"},u={class:"counter__bolck"},_=(0,i._)("h2",{class:"counter__bolck__Title"},[(0,i.Uk)("Rock "),(0,i._)("br"),(0,i.Uk)(" paper "),(0,i._)("br"),(0,i.Uk)(" scissors")],-1),p={class:"counter__bolck__box"},h=(0,i._)("p",{class:"counter__bolck__box__title"},"score",-1),d={class:"counter__bolck__box__result"},y={key:0},g={key:1},m={key:2},v={class:"rules-block"};function f(e,s,l,t,f,C){const k=(0,i.up)("Selection"),b=(0,i.up)("Result"),w=(0,i.up)("FinalResult"),R=(0,i.up)("modal");return(0,i.wg)(),(0,i.iD)("div",r,[(0,i._)("div",n,[(0,i._)("div",c,[(0,i._)("div",a,[(0,i._)("div",u,[_,(0,i._)("div",p,[h,(0,i._)("h3",d,(0,o.zw)(f.player1Wins),1)])])])])]),"selection"===f.currentView?((0,i.wg)(),(0,i.iD)("div",y,[(0,i.Wm)(k,{onSelected:C.handleSelection},null,8,["onSelected"])])):"result"===f.currentView?((0,i.wg)(),(0,i.iD)("div",g,[(0,i.Wm)(b,{player1Choice:f.player1Choice,player2Choice:f.player2Choice,onProceedToFinalResult:C.proceedToFinalResult},null,8,["player1Choice","player2Choice","onProceedToFinalResult"])])):"finalResult"===f.currentView?((0,i.wg)(),(0,i.iD)("div",m,[(0,i.Wm)(w,{player1Choice:f.player1Choice,player2Choice:f.player2Choice,finalResult:f.finalResult,player1Wins:f.player1Wins,onReset:C.resetGame},null,8,["player1Choice","player2Choice","finalResult","player1Wins","onReset"])])):(0,i.kq)("",!0),(0,i._)("div",v,[(0,i._)("button",{class:"rules-block__rules-btn",onClick:s[0]||(s[0]=(...e)=>C.openModal&&C.openModal(...e))},"RULES")]),(0,i.Wm)(R,{ref:"modal"},null,512)])}const C={class:"container"},k={class:"row m-auto"},b={class:"player-choice"},w={class:"player-choice__btn-group"},R=["onClick"],P=["src"];function S(e,s,l,t,o,r){return(0,i.wg)(),(0,i.iD)("div",null,[(0,i._)("div",C,[(0,i._)("div",k,[(0,i._)("div",b,[(0,i._)("div",w,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(o.options,(e=>((0,i.wg)(),(0,i.iD)("button",{key:e.name,onClick:s=>r.selectOption(e.name),class:"player-choice__btn-group__selection-btn"},[(0,i._)("img",{src:e.imageUrl,alt:"option.name",class:"option-image"},null,8,P)],8,R)))),128))])])])])])}var U={data(){return{selectedOption:null,options:[{name:"Paper",imageUrl:"./images/icon-paper.svg"},{name:"Scissors",imageUrl:"./images/icon-scissors.svg"},{name:"Rock",imageUrl:"./images/icon-rock.svg"}]}},methods:{selectOption(e){this.selectedOption=e,this.$emit("selected",this.selectedOption)}}},I=l(89);const O=(0,I.Z)(U,[["render",S]]);var M=O;const D={class:"container"},T={class:"row"},W={class:"result-selection"},x={class:"result-selection__selection"},F=(0,i._)("p",{class:"result-selection__selection__title"},"You Picked",-1),V=["src"],j={class:"result-selection__selection"},G=(0,i._)("p",{class:"result-selection__selection__title"},"The House Picked",-1),Z=["src"];function $(e,s,l,t,r,n){return(0,i.wg)(),(0,i.iD)("div",null,[(0,i._)("div",D,[(0,i._)("div",T,[(0,i._)("div",W,[(0,i._)("div",x,[F,(0,i._)("img",{src:n.player1ImageUrl,alt:"Player 1",class:(0,o.C_)([{"result-selection__selection--paper":"Paper"===l.player1Choice,"result-selection__selection--scissors":"Scissors"===l.player1Choice,"result-selection__selection--rock":"Rock"===l.player1Choice},"result-selection__selection__selection-result"])},null,10,V)]),(0,i._)("div",j,[G,(0,i._)("img",{src:n.player2ImageUrl,alt:"Player 2",class:(0,o.C_)([{"result-selection__selection--paper":"Paper"===l.player2Choice,"result-selection__selection--scissors":"Scissors"===l.player2Choice,"result-selection__selection--rock":"Rock"===l.player2Choice},"result-selection__selection__selection-result"])},null,10,Z)])])])])])}var H={props:{player1Choice:String,player2Choice:String},computed:{player1ImageUrl(){return this.getImageUrl(this.player1Choice)},player2ImageUrl(){return this.getImageUrl(this.player2Choice)}},mounted(){setTimeout((()=>{this.$emit("proceedToFinalResult")}),1e3)},methods:{getImageUrl(e){const s={Paper:"./images/icon-paper.svg",Scissors:"./images/icon-scissors.svg",Rock:"./images/icon-rock.svg"};return s[e]||""}}};const Y=(0,I.Z)(H,[["render",$]]);var q=Y;const z=e=>((0,i.dD)("data-v-11d1e996"),e=e(),(0,i.Cn)(),e),E={class:"container"},L={class:"row"},A={class:"result-selection"},K={class:"result-selection__selection"},N=z((()=>(0,i._)("p",{class:"result-selection__selection__title"},"You Picked",-1))),B=["src"],J={class:"result-selection__selection__final-result"},Q={class:"result-selection__selection__final-result__title"},X={class:"result-selection__selection"},ee=z((()=>(0,i._)("p",{class:"result-selection__selection__title"},"The House Picked",-1))),se=["src"];function le(e,s,l,t,r,n){return(0,i.wg)(),(0,i.iD)("div",null,[(0,i._)("div",E,[(0,i._)("div",L,[(0,i._)("div",A,[(0,i._)("div",K,[N,(0,i._)("img",{src:n.player1ImageUrl,alt:"Player 1",class:(0,o.C_)([{"result-selection__selection--paper":"Paper"===l.player1Choice,"result-selection__selection--scissors":"Scissors"===l.player1Choice,"result-selection__selection--rock":"Rock"===l.player1Choice},"result-selection__selection__selection-result"])},null,10,B)]),(0,i._)("div",J,[(0,i._)("h3",Q,(0,o.zw)(l.finalResult),1),(0,i._)("button",{onClick:s[0]||(s[0]=(...e)=>n.resetGame&&n.resetGame(...e)),class:"result-selection__selection__final-result__play-again"},"Play Again")]),(0,i._)("div",X,[ee,(0,i._)("img",{src:n.player2ImageUrl,alt:"Player 2",class:(0,o.C_)([{"result-selection__selection--paper":"Paper"===l.player2Choice,"result-selection__selection--scissors":"Scissors"===l.player2Choice,"result-selection__selection--rock":"Rock"===l.player2Choice},"result-selection__selection__selection-result"])},null,10,se)])])])])])}var te={props:{player1Choice:String,player2Choice:String,finalResult:String,player1Wins:Number},computed:{player1ImageUrl(){return this.getImageUrl(this.player1Choice)},player2ImageUrl(){return this.getImageUrl(this.player2Choice)}},methods:{getImageUrl(e){const s={Paper:"./images/icon-paper.svg",Scissors:"./images/icon-scissors.svg",Rock:"./images/icon-rock.svg"};return s[e]||""},resetGame(){this.$emit("reset")}}};const ie=(0,I.Z)(te,[["render",le],["__scopeId","data-v-11d1e996"]]);var oe=ie,re=l.p+"img/image-rules.aeac772d.svg";const ne=e=>((0,i.dD)("data-v-33e5f01b"),e=e(),(0,i.Cn)(),e),ce={key:0,class:"modal"},ae={class:"modal-content"},ue=ne((()=>(0,i._)("img",{class:"modal-content-image",src:re,alt:"Popup Image"},null,-1)));function _e(e,s,l,t,o,r){return o.showModal?((0,i.wg)(),(0,i.iD)("div",ce,[(0,i._)("div",ae,[ue,(0,i._)("span",{class:"close-btn",onClick:s[0]||(s[0]=(...e)=>r.closeModal&&r.closeModal(...e))},"×")])])):(0,i.kq)("",!0)}var pe={data(){return{showModal:!1}},methods:{closeModal(){this.showModal=!1}}};const he=(0,I.Z)(pe,[["render",_e],["__scopeId","data-v-33e5f01b"]]);var de=he,ye={data(){return{currentView:"selection",player1Choice:null,player2Choice:null,finalResult:null,player1Wins:0}},methods:{openModal(){this.$refs.modal.showModal=!0},handleSelection(e){this.player1Choice=e,this.generatePlayer2Choice(),this.currentView="result"},generatePlayer2Choice(){const e=["Rock","Paper","Scissors"];this.player2Choice=e[Math.floor(Math.random()*e.length)]},proceedToFinalResult(){this.finalResult=this.determineResult(),this.player1Wins+="you win"===this.finalResult?1:"It's a tie"===this.finalResult?0:-1,this.currentView="finalResult"},determineResult(){return"Rock"===this.player1Choice&&"Scissors"===this.player2Choice||"Scissors"===this.player1Choice&&"Paper"===this.player2Choice||"Paper"===this.player1Choice&&"Rock"===this.player2Choice?"you win":this.player1Choice===this.player2Choice?"It's a tie":"you Lose"},resetGame(){this.currentView="selection",this.player1Choice=null,this.player2Choice=null,this.finalResult=null}},components:{Selection:M,Result:q,FinalResult:oe,Modal:de}};const ge=(0,I.Z)(ye,[["render",f]]);var me=ge,ve=l(3455),fe=l.n(ve);(0,t.ri)(me).use(fe()).mount("#app")}},s={};function l(t){var i=s[t];if(void 0!==i)return i.exports;var o=s[t]={exports:{}};return e[t].call(o.exports,o,o.exports,l),o.exports}l.m=e,function(){var e=[];l.O=function(s,t,i,o){if(!t){var r=1/0;for(u=0;u<e.length;u++){t=e[u][0],i=e[u][1],o=e[u][2];for(var n=!0,c=0;c<t.length;c++)(!1&o||r>=o)&&Object.keys(l.O).every((function(e){return l.O[e](t[c])}))?t.splice(c--,1):(n=!1,o<r&&(r=o));if(n){e.splice(u--,1);var a=i();void 0!==a&&(s=a)}}return s}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[t,i,o]}}(),function(){l.n=function(e){var s=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(s,{a:s}),s}}(),function(){l.d=function(e,s){for(var t in s)l.o(s,t)&&!l.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:s[t]})}}(),function(){l.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){l.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)}}(),function(){l.p="/game1/"}(),function(){var e={143:0};l.O.j=function(s){return 0===e[s]};var s=function(s,t){var i,o,r=t[0],n=t[1],c=t[2],a=0;if(r.some((function(s){return 0!==e[s]}))){for(i in n)l.o(n,i)&&(l.m[i]=n[i]);if(c)var u=c(l)}for(s&&s(t);a<r.length;a++)o=r[a],l.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return l.O(u)},t=self["webpackChunkgame1"]=self["webpackChunkgame1"]||[];t.forEach(s.bind(null,0)),t.push=s.bind(null,t.push.bind(t))}();var t=l.O(void 0,[998],(function(){return l(8972)}));t=l.O(t)})();
//# sourceMappingURL=app.ed55731c.js.map