(function(t){function e(e){for(var a,s,r=e[0],u=e[1],c=e[2],m=0,d=[];m<r.length;m++)s=r[m],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&d.push(i[s][0]),i[s]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);l&&l(e);while(d.length)d.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,r=1;r<n.length;r++){var u=n[r];0!==i[u]&&(a=!1)}a&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},i={app:0},o=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],u=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var l=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0322":function(t,e,n){},"034f":function(t,e,n){"use strict";n("85ec")},"058b":function(t,e,n){"use strict";n("4e81")},"11eb":function(t,e,n){"use strict";n("d385")},"14b2":function(t,e,n){},"18c3":function(t,e,n){"use strict";n("5e4b")},"1eca":function(t,e,n){},"281b":function(t,e,n){},"311c":function(t,e,n){},"32bf":function(t,e,n){},"3c7c":function(t,e,n){"use strict";n("f752")},4841:function(t,e,n){"use strict";n("0322")},"4ca6":function(t,e,n){},"4e81":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=n("ecee"),o=n("c074"),s=n("b702"),r=n("f2d1"),u=n("ad3d");i["c"].add(o["a"],s["a"],r["b"],r["a"]),a["a"].component("font-awesome-icon",u["a"]);var c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app-wrapper"}},[n("app-header"),n("div",{attrs:{id:"app-body"}},[n("router-view",{key:t.$route.fullPath})],1)],1)},l=[],m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"nav-bar"}},[n("div",{attrs:{id:"logo"},on:{click:t.goHome}},[n("span",[n("font-awesome-icon",{attrs:{icon:["fab","vuejs"]}})],1)]),n("ul",{attrs:{id:"menu"}},t._l(t.navList,(function(e,a){return n("li",{key:a,staticClass:"nav-button",class:{on:t.selectedMenu[a+1]},on:{click:function(e){return t.goMenu(a)}}},[t._v(" "+t._s(e.title)+" ")])})),0),n("ul",{attrs:{id:"sns"}},t._l(t.snsInfoArray,(function(e,a){return n("li",{key:a,on:{click:function(n){return t.goSns(e.url)}}},[n("font-awesome-icon",{attrs:{icon:e.icon}})],1)})),0)])},d=[],p=n("5530"),f=n("2f62"),h={data:function(){return{selectedMenu:[1,0,0],snsInfoArray:[{icon:["fab","instagram"],url:"https://www.instagram.com/from.boram_/"},{icon:["fas","code"],url:"https://www.acmicpc.net/user/ckqhfka4520"},{icon:["fab","github"],url:"https://github.com/ChaBo-4520"}]}},methods:{goHome:function(){this.$router.push({name:"Home"}),this.selectedMenu=[0,0,0],this.selectedMenu[0]=1},goMenu:function(t){this.selectedMenu=[0,0,0],this.$router.push(this.navList[t].url),this.selectedMenu[t+1]=1},goSns:function(t){window.open(t)}},computed:Object(p["a"])({},Object(f["b"])("main",["navList"]))},v=h,_=(n("97ff"),n("2877")),b=Object(_["a"])(v,m,d,!1,null,"3cef2d80",null),g=b.exports,w={name:"App",components:{appHeader:g}},x=w,y=(n("034f"),Object(_["a"])(x,c,l,!1,null,null,null)),k=y.exports,C=n("8c4f"),N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("slot-child",[n("div",{attrs:{slot:"header"},slot:"header"},[t._v(" "+t._s(t.AA)+" ")]),n("div",{attrs:{slot:"body"},slot:"body"},[t._v(" "+t._s(t.AA)+" ")])]),n("slot-child",[n("div",{attrs:{slot:"header"},slot:"header"},[t._v(" "+t._s(t.BB)+" ")]),n("div",{attrs:{slot:"body"},slot:"body"},[t._v(" "+t._s(t.BB)+" ")])])],1)},O=[],j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",[t._v(" 만나면 이렇게 인사하세요! ")]),t._t("header"),t._t("body")],2)},$=[],E={},M=E,W=Object(_["a"])(M,j,$,!1,null,null,null),P=W.exports,I={components:{slotChild:P},data:function(){return{AA:"안녕하세요!",BB:"반갑습니다!"}}},T=I,A=Object(_["a"])(T,N,O,!1,null,null,null),D=A.exports,B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:"","grid-list-md":!t.$vuetify.breakpoint.xs}},[n("v-layout",{attrs:{wrap:"",row:""}},t._l(t.examples,(function(t,e){return n("v-flex",{key:e,staticClass:"pb-2",attrs:{xs12:"",sm6:"",md3:""}},[n("div",{staticStyle:{height:"300px"}},[n("example-card",{attrs:{example:t}})],1)])})),1)],1)},S=[],V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("div",{staticClass:"content",on:{click:t.goToContent}},[n("span",[t._v(t._s(t.content.title))])])])},L=[],R=(n("b0c0"),{props:{example:Object},data:function(){return{content:{title:this.example.title,url:this.example.name}}},methods:{goToContent:function(){this.$router.push(this.content.url)}}}),H=R,q=(n("7f54"),Object(_["a"])(H,V,L,!1,null,"09163176",null)),F=q.exports,z={data:function(){return{}},components:{exampleCard:F},computed:Object(p["a"])({},Object(f["b"])("main",["examples"]))},J=z,K=n("6544"),U=n.n(K),X=n("a523"),Z=n("0e8f"),Y=n("a722"),G=Object(_["a"])(J,B,S,!1,null,null,null),Q=G.exports;U()(G,{VContainer:X["a"],VFlex:Z["a"],VLayout:Y["a"]});var tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"animated-number-demo"}},[n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.number,expression:"number",modifiers:{number:!0}}],attrs:{type:"number",step:"20"},domProps:{value:t.number},on:{input:function(e){e.target.composing||(t.number=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),n("p",[t._v(t._s(t.animatedNumber))])])},et=[],nt=(n("b680"),n("4476")),at={data:function(){return{number:0,tweenedNumber:0}},computed:{animatedNumber:function(){return this.tweenedNumber.toFixed(0)}},watch:{number:function(t){nt["a"].to(this.$data,.5,{tweenedNumber:t})}}},it=at,ot=(n("d910"),Object(_["a"])(it,tt,et,!1,null,"00c48686",null)),st=ot.exports,rt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("svg",{attrs:{width:"200",height:"200"}},[n("polygon",{attrs:{points:t.points}}),n("circle",{attrs:{cx:"100",cy:"100",r:"90"}})]),n("label",[t._v("Sides: "+t._s(t.sides))]),n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.sides,expression:"sides",modifiers:{number:!0}}],attrs:{type:"range",min:"3",max:"500"},domProps:{value:t.sides},on:{__r:function(e){t.sides=t._n(e.target.value)},blur:function(e){return t.$forceUpdate()}}}),n("label",[t._v("Minimum Radius: "+t._s(t.minRadius)+"%")]),n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.minRadius,expression:"minRadius",modifiers:{number:!0}}],attrs:{type:"range",min:"0",max:"90"},domProps:{value:t.minRadius},on:{__r:function(e){t.minRadius=t._n(e.target.value)},blur:function(e){return t.$forceUpdate()}}}),n("label",[t._v("Update Interval: "+t._s(t.updateInterval)+" milliseconds")]),n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.updateInterval,expression:"updateInterval",modifiers:{number:!0}}],attrs:{type:"range",min:"10",max:"2000"},domProps:{value:t.updateInterval},on:{__r:function(e){t.updateInterval=t._n(e.target.value)},blur:function(e){return t.$forceUpdate()}}})])},ut=[],ct=(n("d81d"),n("a15b"),n("cffa")),lt={data:function(){var t=10,e=Array.apply(null,{length:t}).map((function(){return 100}));return{stats:e,points:dt(e),sides:t,minRadius:50,interval:null,updateInterval:500}},watch:{sides:function(t,e){var n=t-e;if(n>0)for(var a=1;a<=n;a++)this.stats.push(this.newRandomValue());else for(var i=Math.abs(n),o=1;o<=i;o++)this.stats.shift()},stats:function(t){ct["a"].to(this.$data,this.updateInterval/1e3,{points:dt(t)})},updateInterval:function(){this.resetInterval()}},mounted:function(){this.resetInterval()},methods:{randomizeStats:function(){var t=this;this.stats=this.stats.map((function(){return t.newRandomValue()}))},newRandomValue:function(){return Math.ceil(this.minRadius+Math.random()*(100-this.minRadius))},resetInterval:function(){var t=this;clearInterval(this.interval),this.randomizeStats(),this.interval=setInterval((function(){t.randomizeStats()}),this.updateInterval)}}};function mt(t,e,n){var a=0,i=.9*-t,o=2*Math.PI/n*e,s=Math.cos(o),r=Math.sin(o),u=a*s-i*r+100,c=a*r+i*s+100;return{x:u,y:c}}function dt(t){var e=t.length;return t.map((function(t,n){var a=mt(t,n,e);return a.x+","+a.y})).join(" ")}var pt=lt,ft=(n("90c6"),Object(_["a"])(pt,rt,ut,!1,null,"d3482442",null)),ht=ft.exports,vt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"staggered-list-demo"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],domProps:{value:t.query},on:{input:function(e){e.target.composing||(t.query=e.target.value)}}}),n("transition-group",{attrs:{name:"staggered-fade",tag:"ul",css:!1},on:{"before-enter":t.beforeEnter,enter:t.enter,leave:t.leave}},t._l(t.computedList,(function(e,a){return n("li",{key:e.msg,attrs:{"data-index":a}},[t._v(" "+t._s(e.msg)+" ")])})),0)],1)},_t=[],bt=(n("4de4"),n("589d")),gt=n.n(bt),wt={data:function(){return{query:"",list:[{msg:"Bruce Lee"},{msg:"Jackie Chan"},{msg:"Chuck Norris"},{msg:"Jet Li"},{msg:"Kung Fury"}]}},computed:{computedList:function(){var t=this;return this.list.filter((function(e){return-1!==e.msg.toLowerCase().indexOf(t.query.toLowerCase())}))}},methods:{beforeEnter:function(t){t.style.opacity=0,t.style.height=0},enter:function(t,e){var n=150*t.dataset.index;setTimeout((function(){gt()(t,{opacity:1,height:"1.6em"},{complete:e})}),n)},leave:function(t,e){var n=150*t.dataset.index;setTimeout((function(){gt()(t,{opacity:0,height:0},{complete:e})}),n)}}},xt=wt,yt=(n("058b"),Object(_["a"])(xt,vt,_t,!1,null,"32faa9b0",null)),kt=yt.exports,Ct=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"transition1"}},[n("div",[n("v-btn",{on:{click:function(e){t.show1=!t.show1}}},[t._v("Toggle1")]),n("transition",{attrs:{name:"fade"}},[t.show1?n("p",[t._v("Hello")]):t._e()])],1),n("div",[n("v-btn",{on:{click:function(e){t.show2=!t.show2}}},[t._v("Toggle2")]),n("transition",{attrs:{name:"slide-fade"}},[t.show2?n("p",[t._v("Hello")]):t._e()])],1),n("div",[n("v-btn",{on:{click:function(e){t.show3=!t.show3}}},[t._v("Toggle show")]),n("transition",{attrs:{name:"bounce"}},[t.show3?n("p",[t._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis enim libero, at lacinia diam fermentum id. Pellentesque habitant morbi tristique senectus et netus. ")]):t._e()])],1)])},Nt=[],Ot={data:function(){return{show1:!0,show2:!0,show3:!0}}},jt=Ot,$t=(n("78fe"),n("8336")),Et=Object(_["a"])(jt,Ct,Nt,!1,null,"67eb80ee",null),Mt=Et.exports;U()(Et,{VBtn:$t["a"]});var Wt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"transition2"}},[n("v-btn",{on:{click:function(e){t.show=!t.show}}},[t._v("Toggle render")]),n("transition",{attrs:{name:"custom-classes-transition","enter-active-class":"animate__animated animate__tada","leave-active-class":"animate__animated animate__bounceOutRight"}},[t.show?n("p",[t._v("Hello")]):t._e()])],1)},Pt=[],It=n("77ed"),Tt=n.n(It),At={data:function(){return{show:!0}}},Dt=At,Bt=Object(_["a"])(Dt,Wt,Pt,!1,null,null,null),St=Bt.exports;U()(Bt,{VBtn:$t["a"]});var Vt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-btn",{on:{click:function(e){t.show=!t.show}}},[t._v("Toggle")]),n("transition",{on:{"before-enter":t.beforeEnter,enter:t.enter,leave:t.leave}},[t.show?n("p",[t._v("Demo")]):t._e()])],1)},Lt=[],Rt={data:function(){return{show:!1}},methods:{beforeEnter:function(t){t.style.opacity=0,t.style.transformOrigin="left center"},enter:function(t,e){gt()(t,{opacity:1,fontSize:"1.4em"},{duration:300}),gt()(t,{fontSize:["1em","1.4em"]},{complete:e}),gt()(t,{complete:e})},leave:function(t,e){gt()(t,{translateX:"15px",rotateZ:"50deg"},{duration:600}),gt()(t,{rotateZ:"100deg"},{loop:2}),gt()(t,{rotateZ:"45deg",translateY:"30px",translateX:"30px",opacity:0},{complete:e})}}},Ht=Rt,qt=Object(_["a"])(Ht,Vt,Lt,!1,null,"325d8990",null),Ft=qt.exports;U()(qt,{VBtn:$t["a"]});var zt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("h3",[t._v("적용할 transition에 따라 적절한 mode를 설정해야한다.")]),n("div",{staticStyle:{display:"flex","flex-direction":"row"}},[n("div",{staticClass:"example1"},[n("div",{staticClass:"buttons",attrs:{id:"ex1"}},[n("h4",[t._v("mode : out-in")]),n("transition",{attrs:{name:"buttons-fade",mode:"out-in"}},[t.show1?n("button",{key:"on",on:{click:function(e){t.show1=!t.show1}}},[t._v("on")]):n("button",{key:"off",on:{click:function(e){t.show1=!t.show1}}},[t._v("off")])])],1),n("div",{staticClass:"buttons",attrs:{id:"ex2"}},[n("h4",[t._v("mode : x")]),n("transition",{attrs:{name:"buttons-fade"}},[t.show2?n("button",{key:"on",on:{click:function(e){t.show2=!t.show2}}},[t._v("on")]):n("button",{key:"off",on:{click:function(e){t.show2=!t.show2}}},[t._v("off")])])],1),n("div",{staticClass:"buttons",attrs:{id:"ex3"}},[n("h4",[t._v("mode : in-out")]),n("transition",{attrs:{name:"buttons-fade",mode:"in-out"}},[t.show3?n("button",{key:"on",on:{click:function(e){t.show3=!t.show3}}},[t._v("on")]):n("button",{key:"off",on:{click:function(e){t.show3=!t.show3}}},[t._v("off")])])],1)]),n("div",{staticClass:"example2"},[n("div",{staticClass:"buttons",attrs:{id:"ex1"}},[n("h4",[t._v("mode : out-in")]),n("transition",{attrs:{name:"buttons-change",mode:"out-in"}},[t.show4?n("button",{key:"on",on:{click:function(e){t.show4=!t.show4}}},[t._v("on")]):n("button",{key:"off",on:{click:function(e){t.show4=!t.show4}}},[t._v("off")])])],1),n("div",{staticClass:"buttons",attrs:{id:"ex2"}},[n("h4",[t._v("mode : x")]),n("transition",{attrs:{name:"buttons-change"}},[t.show5?n("button",{key:"on",on:{click:function(e){t.show5=!t.show5}}},[t._v("on")]):n("button",{key:"off",on:{click:function(e){t.show5=!t.show5}}},[t._v("off")])])],1),n("div",{staticClass:"buttons",attrs:{id:"ex3"}},[n("h4",[t._v("mode : in-out")]),n("transition",{attrs:{name:"buttons-change",mode:"in-out"}},[t.show6?n("button",{key:"on",on:{click:function(e){t.show6=!t.show6}}},[t._v("on")]):n("button",{key:"off",on:{click:function(e){t.show6=!t.show6}}},[t._v("off")])])],1)])])])},Jt=[],Kt={data:function(){return{show1:!0,show2:!0,show3:!0,show4:!0,show5:!0,show6:!0}}},Ut=Kt,Xt=(n("18c3"),Object(_["a"])(Ut,zt,Jt,!1,null,"543eabc5",null)),Zt=Xt.exports,Yt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("h3",[t._v("Watch VS Computed")]),n("h4",[t._v("구현하려는 동작에 따라 watch와 computed를 적절히 사용해야 한다.")]),n("div",{staticClass:"input"},[n("span",[t._v("firstName : ")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.firstName,expression:"firstName"}],attrs:{type:"text"},domProps:{value:t.firstName},on:{input:function(e){e.target.composing||(t.firstName=e.target.value)}}}),n("span",[t._v("lastName : ")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.lastName,expression:"lastName"}],attrs:{type:"text"},domProps:{value:t.lastName},on:{input:function(e){e.target.composing||(t.lastName=e.target.value)}}})]),n("div",{attrs:{id:"demo"}},[n("span",[t._v("watch : ")]),t._v(t._s(t.fullNameWatch))]),n("div",{attrs:{id:"demo"}},[n("span",[t._v("computed : ")]),t._v(" "+t._s(t.fullNameComputed))])])},Gt=[],Qt={data:function(){return{firstName:"Foo",lastName:"Bar",fullNameWatch:"Foo Bar"}},computed:{fullNameComputed:function(){return this.firstName+" "+this.lastName}},watch:{firstName:function(t){this.fullNameWatch=t+" "+this.lastName},lastName:function(t){this.fullNameWatch=this.firstName+" "+t}}},te=Qt,ee=(n("fdd8"),Object(_["a"])(te,Yt,Gt,!1,null,"58ba3e9b",null)),ne=ee.exports,ae=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h3",[t._v("Object 안의 값의 변경을 감지하기 위해서는 Deep옵션을 사용해야 한다.")]),n("h4",[t._v("카운트가 0이되면 Alert창이 뜹니다.")]),n("v-btn",{on:{click:t.reset}},[t._v(" 리셋 ")]),n("div",{staticClass:"wrapper"},[n("div",[n("h4",[t._v("watch with deep")]),n("v-btn",{on:{click:t.decreaseWithDeep}},[t._v("카운트감소")]),n("p",[t._v(t._s(t.countWithDeep.value))])],1),n("div",[n("h4",[t._v("watch without deep")]),n("v-btn",{on:{click:t.decreaseWithoutDeep}},[t._v("카운트감소")]),n("p",[t._v(t._s(t.countWithoutDeep.value))])],1)])],1)},ie=[],oe={data:function(){return{countWithDeep:{value:3},countWithoutDeep:{value:3}}},methods:{decreaseWithDeep:function(){this.countWithDeep.value--},decreaseWithoutDeep:function(){this.countWithoutDeep.value--},reset:function(){this.countWithDeep.value=3,this.countWithoutDeep.value=3}},watch:{countWithDeep:{deep:!0,handler:function(t){0==t.value&&(alert("값이 0이 되었습니다!"),this.countWithDeep.value=3)}},countWithoutDeep:{handler:function(t){0==t.value&&(alert("값이 0이 되었습니다!"),this.countWithoutDeep.value=3)}}}},se=oe,re=(n("7861"),Object(_["a"])(se,ae,ie,!1,null,"6caa2d1a",null)),ue=re.exports;U()(re,{VBtn:$t["a"]});var ce=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"computed"}},[n("h4",[t._v("Computed는 계산된 값을 사용하기 위해 사용한다.")]),n("p",[t._v('원본 메시지: "'+t._s(t.message)+'"')]),n("p",[t._v('역순으로 표현한 메시지: "'+t._s(t.reversedMessage))]),n("p",[t._v(t._s(t.fullName))])])},le=[],me=(n("ac1f"),n("1276"),{data:function(){return{message:"Hello!!",firstName:"Foo",lastName:"Boo"}},computed:{reversedMessage:function(){return this.message.split("").reverse().join("")},fullName:{get:function(){return this.firstName+" "+this.lastName},set:function(t){var e=t.split(" ");this.firstName=e[0],this.lastName=e[1]}}}}),de=me,pe=Object(_["a"])(de,ce,le,!1,null,"5c35eb9b",null),fe=pe.exports,he=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("h4",[t._v("JavaScript라이브러리인 Lodash를 사용한 예제")]),n("a",{attrs:{href:"https://lodash.com/docs/4.17.15"}},[t._v("Lodash Document")]),n("div",{attrs:{id:"flip-list-demo1"}},[n("v-btn",{on:{click:t.add1}},[t._v("Add")]),n("v-btn",{on:{click:t.remove1}},[t._v("Remove")]),n("transition-group",{attrs:{name:"list",tag:"p"}},t._l(t.example1.items,(function(e){return n("span",{key:e,staticClass:"list-item"},[t._v(" "+t._s(e)+" ")])})),0)],1),n("div",{staticClass:"demo",attrs:{id:"flip-list-demo2"}},[n("v-btn",{on:{click:t.shuffle2}},[t._v("Shuffle")]),n("v-btn",{on:{click:t.add2}},[t._v("Add")]),n("v-btn",{on:{click:t.remove2}},[t._v("Remove")]),n("transition-group",{attrs:{name:"list",tag:"p"}},t._l(t.example2.items,(function(e){return n("li",{key:e,staticClass:"list-item"},[t._v(" "+t._s(e)+" ")])})),0)],1)])},ve=[],_e=(n("a434"),n("2ef0")),be=n.n(_e),ge={data:function(){return{example1:{items:[1,2,3,4,5,6,7,8,9],nextNum:10},example2:{items:[1,2,3,4,5,6,7,8,9],nextNum:10}}},methods:{randomIndex1:function(){return Math.floor(Math.random()*this.example1.items.length)},add1:function(){this.example1.items.splice(this.randomIndex1(),0,this.example1.nextNum++)},remove1:function(){this.example1.items.splice(this.randomIndex1(),1)},randomIndex2:function(){return Math.floor(Math.random()*this.example2.items.length)},add2:function(){this.example2.items.splice(this.randomIndex2(),0,this.example2.nextNum++)},remove2:function(){this.example2.items.splice(this.randomIndex2(),1)},shuffle2:function(){this.example2.items=Object(_e["shuffle"])(this.example2.items)}}},we=ge,xe=(n("11eb"),Object(_["a"])(we,he,ve,!1,null,"b58447bc",null)),ye=xe.exports;U()(xe,{VBtn:$t["a"]});var ke=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"keepAliveParent"}},[n("h4",[t._v(" keep-alive의 inclue에 포함한 1번 2번만 값이 유지되는 것을 볼 수 있다. ")]),n("div",{staticClass:"btns"},[n("v-btn",{on:{click:function(e){return t.selectNum(1)}}},[t._v("1")]),n("v-btn",{on:{click:function(e){return t.selectNum(2)}}},[t._v("2")]),n("v-btn",{on:{click:function(e){return t.selectNum(3)}}},[t._v("3")])],1),n("keep-alive",{attrs:{include:"keepAliveChild2,keepAliveChild1"}},[n(t.selectedComponent,{tag:"component"})],1)],1)},Ce=[],Ne=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Oe=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("Child1")]),n("div",{staticClass:"inputs"},[n("input",{attrs:{type:"radio",name:"1"}}),n("input",{attrs:{type:"radio",name:"1"}}),n("input",{attrs:{type:"radio",name:"1"}})])])}],je={},$e=je,Ee=(n("6935"),Object(_["a"])($e,Ne,Oe,!1,null,"e76f6d22",null)),Me=Ee.exports,We=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Pe=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("Child2")]),n("div",{staticClass:"inputs"},[n("input",{attrs:{type:"radio",name:"2"}}),n("input",{attrs:{type:"radio",name:"2"}}),n("input",{attrs:{type:"radio",name:"2"}})])])}],Ie={},Te=Ie,Ae=(n("b7a5"),Object(_["a"])(Te,We,Pe,!1,null,"18fe9f34",null)),De=Ae.exports,Be=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Se=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("Child3")]),n("div",{staticClass:"inputs"},[n("input",{attrs:{type:"radio",name:"3"}}),n("input",{attrs:{type:"radio",name:"3"}}),n("input",{attrs:{type:"radio",name:"3"}})])])}],Ve={},Le=Ve,Re=(n("de56"),Object(_["a"])(Le,Be,Se,!1,null,"b496160e",null)),He=Re.exports,qe={data:function(){return{selectedComponent:"keepAliveChild1"}},components:{keepAliveChild1:Me,keepAliveChild2:De,keepAliveChild3:He},methods:{selectNum:function(t){this.selectedComponent="keepAliveChild"+t}}},Fe=qe,ze=(n("4841"),Object(_["a"])(Fe,ke,Ce,!1,null,"006b049e",null)),Je=ze.exports;U()(ze,{VBtn:$t["a"]});var Ke=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"propsParent"}},[n("h3",[t._v("Props를 이용하여 부모에서 자식요소로 데이터를 전달할 수 있다.")]),n("h3",[t._v("I am parent!")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.parentMsg,expression:"parentMsg"}],attrs:{type:"text"},domProps:{value:t.parentMsg},on:{input:function(e){e.target.composing||(t.parentMsg=e.target.value)}}}),n("propsChild",{attrs:{childMsg:t.parentMsg}})],1)},Ue=[],Xe=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"propsChild"}},[n("h3",[t._v("I am child!")]),n("p",[t._v(t._s(t.childMsg))])])},Ze=[],Ye={props:{childMsg:String}},Ge=Ye,Qe=(n("7d0a"),Object(_["a"])(Ge,Xe,Ze,!1,null,"2e859ff6",null)),tn=Qe.exports,en={data:function(){return{parentMsg:"Hello Vue! from Parent Component"}},components:{propsChild:tn}},nn=en,an=(n("f349"),Object(_["a"])(nn,Ke,Ue,!1,null,"c58711ca",null)),on=an.exports,sn=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},rn=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("ul",[n("li",[t._v("로그인")]),n("li",[t._v("회원가입")]),n("li",[t._v("마이페이지")]),n("li",[t._v("사이트맵")])]),n("div",{staticClass:"box"},[n("div",{staticClass:"title"},[t._v("::before, ::after")]),n("div",[t._v(" 특정 요소의 앞이나 뒤에 지정한 내용(텍스트 또는 이미지)을 추가할 수 있다. ")])])])}],un={},cn=un,ln=(n("3c7c"),Object(_["a"])(cn,sn,rn,!1,null,"4b804d75",null)),mn=ln.exports,dn=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("h4",[t._v(" Vue는 최대한 효율적으로 랜더링동작을 수행하기 때문에 key를 설정하지 않으면 input의 값이 변하지 않는다. ")]),n("div",{staticClass:"content"},[n("div",{staticClass:"example"},[n("h4",[t._v("key X")]),"username"===t.loginType1?[n("p",[t._v("사용자 이름")]),n("input",{attrs:{placeholder:"사용자 이름을 입력하세요"}})]:[n("p",[t._v("이메일")]),n("input",{attrs:{placeholder:"이메일 주소를 입력하세요"}})],n("button",{on:{click:function(e){return t.changeMode1()}}},[t._v("로그인 유형 변경")])],2),n("div",{staticClass:"example"},[n("h4",[t._v("key O")]),"username"==t.loginType2?[n("p",[t._v("사용자 이름")]),n("input",{key:"username-input",attrs:{placeholder:"사용자 이름을 입력하세요"}})]:[n("p",[t._v("이메일")]),n("input",{key:"email-input",attrs:{placeholder:"이메일 주소를 입력하세요"}})],n("button",{on:{click:function(e){return t.changeMode2()}}},[t._v("로그인 유형 변경")])],2)])])},pn=[],fn={data:function(){return{loginType1:"username",loginType2:"username"}},methods:{changeMode1:function(){this.loginType1="username"===this.loginType1?"email":"username"},changeMode2:function(){this.loginType2="username"===this.loginType2?"email":"username"}}},hn=fn,vn=(n("ba36"),Object(_["a"])(hn,dn,pn,!1,null,"e79ab734",null)),_n=vn.exports,bn=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",[t._v("Vue에 대해 공부한 것을 모아보자")])},gn=[],wn={name:"HelloWorld"},xn=wn,yn=Object(_["a"])(xn,bn,gn,!1,null,null,null),kn=yn.exports,Cn=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Nn=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("호이스팅 테스트")]),n("span",[t._v("콘솔창을 확인하시오")])])}],On={data:function(){return{}},methods:{test1:function(){console.log(t);var t="a변수";console.log(e),console.log(n);var e=function(){console.log("function b")};function n(){console.log("function c")}}},mounted:function(){this.test1()}},jn=On,$n=Object(_["a"])(jn,Cn,Nn,!1,null,null,null),En=$n.exports,Mn=C["a"].prototype.push;C["a"].prototype.push=function(t){return Mn.call(this,t).catch((function(){return window.location.reload()}))},a["a"].use(C["a"]);var Wn=[{path:"/",name:"Home",component:kn},{path:"/slotParent",name:"slot-Parent",component:D},{path:"/exDashBoard",name:"ex-DashBoard",component:Q},{path:"/animationWithWatch1",name:"animation-with-watch1",component:st},{path:"/animationWithWatch2",name:"animation-with-watch2",component:ht},{path:"/staggeringList",name:"staggering-list",component:kt},{path:"/transition1",name:"transition1",component:Mt},{path:"/transition2",name:"transition2",component:St},{path:"/transition3",name:"transition3",component:Ft},{path:"/watchVsComputed1",name:"watch-vs-computed1",component:ne},{path:"/watchDeep",name:"watch-Deep",component:ue},{path:"/computed",name:"computed",component:fe},{path:"/keepAliveParent",name:"keep-alive-parent",component:Je},{path:"/listTransition",name:"list-transition",component:ye},{path:"/propsParent",name:"props-parent",component:on},{path:"/pseudoClass",name:"pseudo-class",component:mn},{path:"/transitionBetweenElement",name:"transition-between-element",component:Zt},{path:"/vIfWithKey",name:"v-if-with-key",component:_n},{path:"/hoisting",name:"hoisting",component:En}],Pn=new C["a"]({routes:Wn,mode:"history"}),In=Pn,Tn=n("f309");a["a"].use(Tn["a"]);var An=new Tn["a"]({}),Dn={namespaced:!0,state:{navList:[{url:"exDashBoard",title:"Vue 실습 목록1"},{url:"slotParent",title:"Vue 실습 목록2"}],examples:[{title:"Animation-with-watch1",name:"animationWithWatch1"},{title:"Animation-with-watch2",name:"animationWithWatch2"},{title:"Staggering-list",name:"staggeringList"},{title:"Transition1",name:"transition1"},{title:"Transition2",name:"transition2"},{title:"Transition3",name:"transition3"},{title:"TransitionBetweenElement",name:"transitionBetweenElement"},{title:"Watch-vs-computed1",name:"watchVsComputed1"},{title:"Watch-deep",name:"watchDeep"},{title:"Computed",name:"computed"},{title:"Keep-alive",name:"keepAliveParent"},{title:"List-transition",name:"listTransition"},{title:"Props",name:"propsParent"},{title:"PseudoClass",name:"pseudoClass"},{title:"v-if-with Key",name:"vIfWithKey"},{title:"Hoisting",name:"hoisting"}]}};a["a"].use(f["a"]);var Bn=new f["a"].Store({modules:{main:Dn}}),Sn=n("9955"),Vn=n.n(Sn);a["a"].use(Tt.a),a["a"].config.productionTip=!1,a["a"].use(Vn.a,{name:"custom",lodash:be.a}),new a["a"]({el:"#app",router:In,vuetify:An,store:Bn,render:function(t){return t(k)}})},"5e4b":function(t,e,n){},"60ec":function(t,e,n){},6935:function(t,e,n){"use strict";n("32bf")},7861:function(t,e,n){"use strict";n("311c")},"78fe":function(t,e,n){"use strict";n("ba4f")},"7d0a":function(t,e,n){"use strict";n("4ca6")},"7f54":function(t,e,n){"use strict";n("d1cb")},"85ec":function(t,e,n){},"90c6":function(t,e,n){"use strict";n("1eca")},"97ff":function(t,e,n){"use strict";n("e23d")},"9c08":function(t,e,n){},a6f2:function(t,e,n){},b7a5:function(t,e,n){"use strict";n("d548")},ba36:function(t,e,n){"use strict";n("14b2")},ba4f:function(t,e,n){},d1cb:function(t,e,n){},d385:function(t,e,n){},d548:function(t,e,n){},d910:function(t,e,n){"use strict";n("60ec")},de56:function(t,e,n){"use strict";n("a6f2")},e23d:function(t,e,n){},f349:function(t,e,n){"use strict";n("281b")},f752:function(t,e,n){},fdd8:function(t,e,n){"use strict";n("9c08")}});
//# sourceMappingURL=app.898caf9e.js.map