(function(t){function e(e){for(var a,o,i=e[0],s=e[1],u=e[2],f=0,l=[];f<i.length;f++)o=i[f],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&l.push(r[o][0]),r[o]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);d&&d(e);while(l.length)l.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],a=!0,i=1;i<n.length;i++){var s=n[i];0!==r[s]&&(a=!1)}a&&(c.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},r={app:0},c=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var d=s;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0015":function(t,e,n){},"1cf2":function(t,e,n){"use strict";n("51fc")},"2a45":function(t,e,n){"use strict";n("6253")},"428c":function(t,e,n){},"43f9":function(t,e,n){"use strict";n("428c")},"51fc":function(t,e,n){},5570:function(t,e,n){"use strict";n("f978")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),r={class:"container"},c=Object(a["f"])("div",{class:"descriptioncard-img"},[Object(a["f"])("div",{class:"descriptioncard-textblock"},[Object(a["f"])("h1",{class:"descriptioncard-title"},"Lorem Ipsum is simply"),Object(a["f"])("h2",{class:"descriptioncard-subtitle"},"Lorem Ipsum is simply")])],-1),o=Object(a["e"])("Login"),i=Object(a["e"])("Register"),s=Object(a["f"])("p",{class:"authentication-text"}," Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",-1),u={class:"authentication-form"};function d(t,e,n,d,f,l){var b=Object(a["k"])("base-card"),p=Object(a["k"])("TheDescriptionCard"),m=Object(a["k"])("base-button"),j=Object(a["k"])("TheAuthentication");return Object(a["g"])(),Object(a["c"])("div",r,[Object(a["f"])(p,null,{default:Object(a["m"])((function(){return[Object(a["f"])(b,null,{default:Object(a["m"])((function(){return[c]})),_:1})]})),_:1}),Object(a["f"])(j,null,{default:Object(a["m"])((function(){return[Object(a["f"])(b,{class:"authentication-switch"},{default:Object(a["m"])((function(){return[Object(a["f"])(m,{onClick:e[1]||(e[1]=function(t){return l.switchTab("login")}),mode:l.setLoginActiveTab},{default:Object(a["m"])((function(){return[o]})),_:1},8,["mode"]),Object(a["f"])(m,{onClick:e[2]||(e[2]=function(t){return l.switchTab("register")}),mode:l.setRegisterActiveTab},{default:Object(a["m"])((function(){return[i]})),_:1},8,["mode"])]})),_:1}),s,Object(a["f"])("div",u,[(Object(a["g"])(),Object(a["c"])(a["a"],null,[(Object(a["g"])(),Object(a["c"])(Object(a["l"])(f.selectedTab)))],1024))])]})),_:1})])}var f={class:"description-card"};function l(t,e,n,r,c,o){return Object(a["g"])(),Object(a["c"])("section",f,[Object(a["j"])(t.$slots,"default")])}var b={name:"TheDescriptionCard",props:{title:String}};n("5570");b.render=l;var p=b,m={class:"authentication"},j=Object(a["f"])("p",{class:"authentication-title"},"Welcome to lorem..!",-1);function O(t,e,n,r,c,o){return Object(a["g"])(),Object(a["c"])("section",m,[j,Object(a["j"])(t.$slots,"default")])}var v={name:"TheAuthentication",props:{title:String}};n("2a45");v.render=O;var g=v,h=Object(a["n"])("data-v-5f6902a8");Object(a["i"])("data-v-5f6902a8");var y={class:"form",id:"login-form"},w=Object(a["d"])('<div class="form-control" data-v-5f6902a8><label for="username" data-v-5f6902a8>User name</label><input placeholder="Enter your User name" type="text" name="username" id="username" data-v-5f6902a8></div><div class="form-control" data-v-5f6902a8><label for="password" data-v-5f6902a8>Password</label><input placeholder="Enter your Password" type="password" name="password" id="password" data-v-5f6902a8><a href="#" class="password-note" data-v-5f6902a8>Forgot Password ?</a></div>',2),_={class:"form-button"},T=Object(a["e"])("Login");Object(a["h"])();var k=h((function(t,e,n,r,c,o){var i=Object(a["k"])("base-button"),s=Object(a["k"])("base-card");return Object(a["g"])(),Object(a["c"])(s,null,{default:h((function(){return[Object(a["f"])("form",y,[w,Object(a["f"])("div",_,[Object(a["f"])(i,{type:"button",onClick:e[1]||(e[1]=function(t){return o.postfunction()})},{default:h((function(){return[T]})),_:1})])])]})),_:1})})),P={name:"Login",methods:{postfunction:function(){var t=new XMLHttpRequest,e=document.getElementById("login-form"),n=new FormData(e);t.open("POST","/login",!0),t.send(n)}}};n("f8ad");P.render=k,P.__scopeId="data-v-5f6902a8";var L=P,x=Object(a["n"])("data-v-3f88a15d");Object(a["i"])("data-v-3f88a15d");var A={class:"form",id:"register-form"},S=Object(a["d"])('<div class="form-control" data-v-3f88a15d><label for="email" data-v-3f88a15d>Email Address</label><input placeholder="Enter your Email Address" type="email" name="email" id="email" data-v-3f88a15d></div><div class="form-control" data-v-3f88a15d><label for="username" data-v-3f88a15d>User name</label><input placeholder="Enter your User name" type="text" name="username" id="username" data-v-3f88a15d></div><div class="form-control" data-v-3f88a15d><label for="password" data-v-3f88a15d>Password</label><input placeholder="Enter your Password" type="password" name="password" id="password" data-v-3f88a15d></div>',3),E={class:"form-button"},I=Object(a["e"])("Register");Object(a["h"])();var C=x((function(t,e,n,r,c,o){var i=Object(a["k"])("base-button"),s=Object(a["k"])("base-card");return Object(a["g"])(),Object(a["c"])(s,null,{default:x((function(){return[Object(a["f"])("form",A,[S,Object(a["f"])("div",E,[Object(a["f"])(i,{type:"button",onClick:e[1]||(e[1]=function(t){return o.postfunction()})},{default:x((function(){return[I]})),_:1})])])]})),_:1})})),R={name:"Login",methods:{postfunction:function(){var t=new XMLHttpRequest,e=document.getElementById("register-form"),n=new FormData(e);t.open("POST","/register",!0),t.send(n)}}};n("43f9");R.render=C,R.__scopeId="data-v-3f88a15d";var M=R,B={name:"App",components:{TheDescriptionCard:p,TheAuthentication:g,Login:L,Register:M},data:function(){return{title:"Authentication component in VUE JS",selectedTab:"login"}},methods:{switchTab:function(t){this.selectedTab=t}},computed:{setLoginActiveTab:function(){return"login"===this.selectedTab?"":"default"},setRegisterActiveTab:function(){return"register"===this.selectedTab?"":"default"}}};n("1cf2");B.render=d;var D=B,U=Object(a["n"])("data-v-6a09400a"),$=U((function(t,e,n,r,c,o){return Object(a["g"])(),Object(a["c"])("div",null,[Object(a["j"])(t.$slots,"default")])})),F={name:"BaseCard"};F.render=$,F.__scopeId="data-v-6a09400a";var J=F,q=Object(a["n"])("data-v-4ffebadf"),H=q((function(t,e,n,r,c,o){return Object(a["g"])(),Object(a["c"])("button",{class:n.mode},[Object(a["j"])(t.$slots,"default")],2)})),X={name:"BaseButton",props:{mode:String}};n("6d19");X.render=H,X.__scopeId="data-v-4ffebadf";var V=X,W=Object(a["b"])(D);W.component("base-card",J),W.component("base-button",V),W.mount("#app")},6253:function(t,e,n){},"6d19":function(t,e,n){"use strict";n("8f0d")},"8f0d":function(t,e,n){},f8ad:function(t,e,n){"use strict";n("0015")},f978:function(t,e,n){}});
//# sourceMappingURL=app.74b5f435.js.map