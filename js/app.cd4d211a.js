(function(t){function e(e){for(var a,o,s=e[0],c=e[1],l=e[2],u=0,v=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&v.push(n[o][0]),n[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);d&&d(e);while(v.length)v.shift()();return i.push.apply(i,l||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],a=!0,s=1;s<r.length;s++){var c=r[s];0!==n[c]&&(a=!1)}a&&(i.splice(e--,1),t=o(o.s=r[0]))}return t}var a={},n={app:0},i=[];function o(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=a,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(r,a,function(e){return t[e]}.bind(null,a));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var d=c;i.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"2ef8":function(t,e,r){},"40c7":function(t,e,r){},"4bb4":function(t,e,r){"use strict";var a=r("40c7"),n=r.n(a);n.a},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{id:"inspire"}},[r("v-navigation-drawer",{attrs:{app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[r("v-list",{attrs:{dense:""}},t._l(t.links,(function(e){return r("v-list-item",{key:e.title,attrs:{to:e.url,link:""}},[r("v-list-item-action",[r("v-icon",[t._v(t._s(e.icon))])],1),r("v-list-item-content",[r("v-list-item-title",{domProps:{textContent:t._s(e.title)}})],1)],1)})),1),t.isUserLoggedIn?r("v-list-item",{on:{click:t.onLogout}},[r("v-list-item-action",[r("v-icon",[t._v("mdi-exit-to-app")])],1),r("v-list-item-content",[r("v-list-item-title",{domProps:{textContent:t._s("Logout")}})],1)],1):t._e()],1),r("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[r("v-app-bar-nav-icon",{staticClass:"hidden-md-and-up",on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),r("v-toolbar-title",[r("router-link",{staticClass:"pointer",attrs:{tag:"span",to:"/"}},[t._v(" Ad Application ")])],1),r("v-spacer"),r("v-toolbar-items",{staticClass:"hidden-sm-and-down"},[t._l(t.links,(function(e){return r("v-btn",{key:e.title,attrs:{to:e.url,color:"primary",height:"100%"}},[r("v-icon",{attrs:{left:""}},[t._v(t._s(e.icon))]),t._v(" "+t._s(e.title)+" ")],1)})),t.isUserLoggedIn?r("v-btn",{attrs:{text:""},on:{click:t.onLogout}},[r("v-icon",{attrs:{left:""}},[t._v("mdi-exit-to-app")]),t._v(" Logout ")],1):t._e()],2)],1),r("router-view"),t.error?[r("v-snackbar",{attrs:{timeout:1e4,value:!0,color:"error","multi-line":""},on:{input:t.closeError}},[t._v(" "+t._s(t.error)+" "),r("v-btn",{attrs:{dark:"",text:""},on:{click:t.closeError}},[t._v(" Close ")])],1)]:t._e(),r("v-footer",{attrs:{app:"",color:"primary"}})],2)},i=[],o={data:function(){return{drawer:!0}},computed:{error:function(){return this.$store.getters.error},isUserLoggedIn:function(){return this.$store.getters.isUserLoggedIn},links:function(){return this.isUserLoggedIn?[{title:"Orders",icon:"mdi-bookmark-outline",url:"/orders"},{title:"New ad",icon:"mdi-file-plus",url:"/new"},{title:"My ads",icon:"mdi-format-list-bulleted",url:"/list"}]:[{title:"Login",icon:"mdi-lock",url:"/login"},{title:"Registration",icon:"mdi-face",url:"/registration"}]}},methods:{closeError:function(){this.$store.dispatch("clearError")},onLogout:function(){this.$store.dispatch("logoutUser"),this.$router.push("/")}}},s=o,c=(r("5c0b"),r("2877")),l=r("6544"),d=r.n(l),u=r("7496"),v=r("40dc"),p=r("5bc1"),m=r("8336"),f=r("553a"),h=r("132d"),g=r("8860"),b=r("da13"),w=r("1800"),x=r("5d23"),V=r("f774"),C=r("2db4"),_=r("2fa4"),y=r("2a7f"),k=Object(c["a"])(s,n,i,!1,null,null,null),L=k.exports;d()(k,{VApp:u["a"],VAppBar:v["a"],VAppBarNavIcon:p["a"],VBtn:m["a"],VFooter:f["a"],VIcon:h["a"],VList:g["a"],VListItem:b["a"],VListItemAction:w["a"],VListItemContent:x["a"],VListItemTitle:x["c"],VNavigationDrawer:V["a"],VSnackbar:C["a"],VSpacer:_["a"],VToolbarItems:y["a"],VToolbarTitle:y["b"]});var O=r("8c4f"),E=r("2f62"),A=(r("a4d3"),r("e01a"),r("99af"),r("4de4"),r("7db0"),r("4160"),r("baa5"),r("fb6a"),r("b0c0"),r("b64b"),r("159b"),r("5530")),I=(r("96cf"),r("1da1")),S=r("d4ec"),$=r("8aa5"),j=function t(e,r,a){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",i=arguments.length>4&&void 0!==arguments[4]&&arguments[4],o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null;Object(S["a"])(this,t),this.title=e,this.description=r,this.ownerId=a,this.imageSrc=n,this.promo=i,this.id=o},R={state:{ads:[]},mutations:{createAd:function(t,e){t.ads.push(e)},loadAds:function(t,e){t.ads=e},updateAd:function(t,e){var r=e.title,a=e.description,n=e.id,i=this.state.ads.find((function(t){return t.id===n}));i.title=r,i.description=a}},actions:{createAd:function(t,e){return Object(I["a"])(regeneratorRuntime.mark((function r(){var a,n,i,o,s,c,l,d;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a=t.commit,n=t.getters,a("clearError"),a("setLoading",!0),i=e.image,r.prev=4,o=new j(e.title,e.description,n.user.id,"",e.promo),r.next=8,$["database"]().ref("ads").push(o);case 8:return s=r.sent,c=i.name.slice(i.name.lastIndexOf(".")),r.next=12,$["storage"]().ref("ads/".concat(s.key,".").concat(c)).put(i);case 12:return l=r.sent,r.next=15,$["storage"]().ref().child(l.ref.fullPath).getDownloadURL();case 15:return d=r.sent,r.next=18,$["database"]().ref("ads").child(s.key).update({imageSrc:d});case 18:a("setLoading",!1),a("createAd",Object(A["a"])(Object(A["a"])({},o),{},{id:s.key,imageSrc:d})),r.next=27;break;case 22:throw r.prev=22,r.t0=r["catch"](4),a("setError",r.t0.message),a("setLoading",!1),r.t0;case 27:case"end":return r.stop()}}),r,null,[[4,22]])})))()},fetchAds:function(t){return Object(I["a"])(regeneratorRuntime.mark((function e(){var r,a,n,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,r("clearError"),r("setLoading",!0),a=[],e.prev=4,e.next=7,$["database"]().ref("ads").once("value");case 7:n=e.sent,i=n.val(),Object.keys(i).forEach((function(t){var e=i[t];a.push(new j(e.title,e.description,e.ownerId,e.imageSrc,e.promo,t))})),r("loadAds",a),r("setLoading",!1),e.next=19;break;case 14:throw e.prev=14,e.t0=e["catch"](4),r("setError",e.t0.message),r("setLoading",!1),e.t0;case 19:case"end":return e.stop()}}),e,null,[[4,14]])})))()},updateAd:function(t,e){return Object(I["a"])(regeneratorRuntime.mark((function r(){var a,n,i,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a=t.commit,n=e.title,i=e.description,o=e.id,a("clearError"),a("setLoading",!0),r.prev=4,r.next=7,$["database"]().ref("ads").child(o).update({title:n,description:i});case 7:a("updateAd",{title:n,description:i,id:o}),a("setLoading",!1),r.next=16;break;case 11:throw r.prev=11,r.t0=r["catch"](4),a("setError",r.t0.message),a("setLoading",!1),r.t0;case 16:case"end":return r.stop()}}),r,null,[[4,11]])})))()}},getters:{ads:function(t){return t.ads},promoAds:function(t){return t.ads.filter((function(t){return t.promo}))},myAds:function(t,e){return t.ads.filter((function(t){return t.ownerId===e.user.id}))},adById:function(t){return function(e){return t.ads.find((function(t){return t.id===e}))}}}},T=function t(e){Object(S["a"])(this,t),this.id=e},P={state:{user:null},mutations:{setUser:function(t,e){t.user=e}},actions:{registerUser:function(t,e){return Object(I["a"])(regeneratorRuntime.mark((function r(){var a,n,i,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a=t.commit,n=e.email,i=e.password,a("clearError"),a("setLoading",!0),r.prev=4,r.next=7,$["auth"]().createUserWithEmailAndPassword(n,i);case 7:o=r.sent,a("setUser",new T(o.user.uid)),a("setLoading",!1),r.next=17;break;case 12:throw r.prev=12,r.t0=r["catch"](4),a("setLoading",!1),a("setError",r.t0.message),r.t0;case 17:case"end":return r.stop()}}),r,null,[[4,12]])})))()},loginUser:function(t,e){return Object(I["a"])(regeneratorRuntime.mark((function r(){var a,n,i,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a=t.commit,n=e.email,i=e.password,a("clearError"),a("setLoading",!0),r.prev=4,r.next=7,$["auth"]().signInWithEmailAndPassword(n,i);case 7:o=r.sent,a("setUser",new T(o.user.uid)),a("setLoading",!1),r.next=17;break;case 12:throw r.prev=12,r.t0=r["catch"](4),a("setLoading",!1),a("setError",r.t0.message),r.t0;case 17:case"end":return r.stop()}}),r,null,[[4,12]])})))()},autoLoginUser:function(t,e){var r=t.commit;r("setUser",new T(e.uid))},logoutUser:function(t){var e=t.commit;$["auth"]().signOut(),e("setUser",null)}},getters:{user:function(t){return t.user},isUserLoggedIn:function(t){return null!==t.user}}},U={state:{loading:!1,error:null},mutations:{setLoading:function(t,e){t.loading=e},setError:function(t,e){t.error=e},clearError:function(t){t.error=null}},actions:{setLoading:function(t,e){var r=t.commit;r("setLoading",e)},setError:function(t,e){var r=t.commit;r("setError",e)},clearError:function(t){var e=t.commit;e("clearError")}},getters:{loading:function(t){return t.loading},error:function(t){return t.error}}},D=function t(e,r,a,n){var i=arguments.length>4&&void 0!==arguments[4]&&arguments[4],o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null;Object(S["a"])(this,t),this.name=e,this.phone=r,this.adId=a,this.ownerId=n,this.done=i,this.id=o},B={state:{orders:[]},mutations:{loadOrders:function(t,e){t.orders=e}},actions:{createOrder:function(t,e){return Object(I["a"])(regeneratorRuntime.mark((function r(){var a,n,i,o,s,c;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a=t.commit,n=e.name,i=e.phone,o=e.adId,s=e.ownerId,c=new D(n,i,o),a("clearError"),r.prev=4,r.next=7,$["database"]().ref("/users/".concat(s,"/orders")).push(c);case 7:r.next=13;break;case 9:throw r.prev=9,r.t0=r["catch"](4),a("setError",r.t0.message),r.t0;case 13:case"end":return r.stop()}}),r,null,[[4,9]])})))()},fetchOrders:function(t,e){return Object(I["a"])(regeneratorRuntime.mark((function r(){var a,n,i,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a=t.commit,a("setLoading",!0),a("clearError"),n=[],r.prev=4,r.next=7,$["database"]().ref("/users/".concat(e.user.id,"/orders")).once("value");case 7:i=r.sent,o=i.val(),Object.keys(o).forEach((function(t){var e=o[t];n.push(new D(e.name,e.phone,e.adId,e.ownerId,e.done,t))})),a("loadOrders",n),a("setLoading",!1),r.next=19;break;case 14:throw r.prev=14,r.t0=r["catch"](4),a("setLoading",!1),a("setError",r.t0.message),r.t0;case 19:case"end":return r.stop()}}),r,null,[[4,14]])})))()},markOrderDone:function(t,e){return Object(I["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a=t.commit,n=t.getters,a("clearError"),r.prev=2,r.next=5,$["database"].ref("/users/".concat(n.user.id,"/orders")).child(e).update({done:!0});case 5:r.next=11;break;case 7:throw r.prev=7,r.t0=r["catch"](2),a("setError",r.t0.message),r.t0;case 11:case"end":return r.stop()}}),r,null,[[2,7]])})))()}},getters:{doneOrders:function(t){return t.orders.filter((function(t){return t.done}))},undoneOrders:function(t){return t.orders.filter((function(t){return!t.done}))},orders:function(t,e){return e.undoneOrders.concat(e.doneOrders)}}};a["default"].use(E["a"]);var q=new E["a"].Store({modules:{ads:R,user:P,shared:U,orders:B}}),F=function(t,e,r){q.getters.isUserLoggedIn?r():r("/login?loginError=true")},z=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.loading?r("v-content",[r("v-container",[r("v-row",[r("v-col",{staticClass:"text-sm-center pt-12"},[r("v-progress-circular",{attrs:{indeterminate:"",rotate:50,size:100,value:100,width:10,color:"light-blue"}})],1)],1)],1)],1):r("v-content",[r("v-container",{staticClass:"pt-0",attrs:{fluid:""}},[r("v-row",[r("v-carousel",{attrs:{height:"400px",cycle:"",progress:"","hide-delimiters":"",interval:5e3,"show-arrows-on-hover":""}},t._l(t.promoAds,(function(e){return r("v-carousel-item",{key:e.id,attrs:{src:e.imageSrc,transition:"scroll-x-reverse-transition"}},[r("div",{staticClass:"car-link"},[r("v-btn",{staticClass:"warning",attrs:{to:"/ad/"+e.id}},[t._v(" "+t._s(e.title)+" ")])],1)])})),1)],1)],1),r("v-container",[r("v-row",t._l(t.ads,(function(e){return r("v-col",{key:e.id,attrs:{src:e.imageSrc,"mb-7":""}},[r("v-card",{staticClass:"mx-auto",attrs:{"max-width":"400"}},[r("v-img",{staticClass:"white--text align-end",attrs:{height:"200px",src:e.imageSrc}},[r("v-card-title",{attrs:{"primary-title":""}})],1),r("v-card-text",{staticClass:"text--primary"},[r("div",[t._v(t._s(e.title))]),r("div",[t._v(t._s(e.description))])]),r("v-card-actions",[r("v-spacer"),r("v-btn",{staticClass:"mr-3",attrs:{text:"",to:"/ad/"+e.id}},[t._v("Open")]),r("app-buy-modal",{attrs:{ad:e}})],1)],1)],1)})),1)],1)],1)},M=[],Y={computed:{promoAds:function(){return this.$store.getters.promoAds},ads:function(){return this.$store.getters.ads},loading:function(){return this.$store.getters.loading}}},N=Y,K=(r("6632"),r("b0af")),J=r("99d9"),W=r("5e66"),G=r("3e35"),Q=r("62ad"),X=r("a523"),H=r("a75b"),Z=r("adda"),tt=r("490a"),et=r("0fd9"),rt=Object(c["a"])(N,z,M,!1,null,"061d1a96",null),at=rt.exports;d()(rt,{VBtn:m["a"],VCard:K["a"],VCardActions:J["a"],VCardText:J["c"],VCardTitle:J["d"],VCarousel:W["a"],VCarouselItem:G["a"],VCol:Q["a"],VContainer:X["a"],VContent:H["a"],VImg:Z["a"],VProgressCircular:tt["a"],VRow:et["a"],VSpacer:_["a"]});var nt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-content",[r("v-container",{attrs:{fluid:""}},[r("v-row",[r("v-col",[t.loading?r("div",{staticClass:"text-sm-center"},[r("v-progress-circular",{attrs:{indeterminate:"",rotate:50,size:100,value:100,width:10,color:"light-blue"}})],1):r("v-card",{staticClass:"elevation-10 mb-3"},[r("v-row",[r("v-col",[r("v-img",{staticClass:"white--text align-end",attrs:{src:t.ad.imageSrc,height:"300"}})],1),r("v-col",{staticClass:"d-flex flex-column",attrs:{"align-self":"end"}},[r("v-card-title",[t._v(" "+t._s(t.ad.title)+" ")]),r("v-card-subtitle",{staticClass:"text--primary"},[t._v(" "+t._s(t.ad.description)+" ")]),r("v-card-actions",[r("v-spacer"),t.isOwner?r("app-edit-ad-modal",{attrs:{ad:t.ad}}):t._e(),r("app-buy-modal",{attrs:{ad:t.ad}})],1)],1)],1)],1)],1)],1)],1)],1)},it=[],ot=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-dialog",{attrs:{"max-width":"500"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[r("v-btn",t._g({staticClass:"mr-3",attrs:{color:"success"}},a),[t._v(" Edit ")])]}}]),model:{value:t.modal,callback:function(e){t.modal=e},expression:"modal"}},[r("v-card",[r("v-row",{staticClass:"nomarginx"},[r("v-col",[r("v-card-title",[r("h1",{staticClass:"text--primary"},[t._v(" Edit Ad ")])])],1)],1),r("v-divider"),r("v-row",{staticClass:"nomarginx"},[r("v-col",[r("v-card-text",[r("v-text-field",{attrs:{label:"Title",name:"title",type:"text"},model:{value:t.editedTitle,callback:function(e){t.editedTitle=e},expression:"editedTitle"}}),r("v-textarea",{attrs:{"auto-grow":"",label:"Description",name:"description",type:"textarea"},model:{value:t.editedDescription,callback:function(e){t.editedDescription=e},expression:"editedDescription"}})],1)],1)],1),r("v-row",{staticClass:"nomarginx"},[r("v-col",[r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{outlined:""},on:{click:t.onCancel}},[t._v("Cancel")]),r("v-btn",{staticClass:"success",on:{click:t.onSave}},[t._v("Save")])],1)],1)],1)],1)],1)},st=[],ct={props:["ad"],data:function(){return{modal:!1,editedTitle:this.ad.title,editedDescription:this.ad.description}},methods:{onCancel:function(){this.editedDescription=this.ad.description,this.editedTitle=this.ad.title,this.modal=!1},onSave:function(){""!==this.editedDescription&&""!==this.editedTitle&&(this.$store.dispatch("updateAd",{title:this.editedTitle,description:this.editedDescription,id:this.ad.id}),this.modal=!1)}}},lt=ct,dt=(r("98da"),r("169a")),ut=r("ce7e"),vt=r("8654"),pt=r("a844"),mt=Object(c["a"])(lt,ot,st,!1,null,"31d43046",null),ft=mt.exports;d()(mt,{VBtn:m["a"],VCard:K["a"],VCardActions:J["a"],VCardText:J["c"],VCardTitle:J["d"],VCol:Q["a"],VDialog:dt["a"],VDivider:ut["a"],VRow:et["a"],VSpacer:_["a"],VTextField:vt["a"],VTextarea:pt["a"]});var ht={props:["id"],computed:{ad:function(){var t=this.id;return this.$store.getters.adById(t)},loading:function(){return this.$store.getters.loading},isOwner:function(){return this.ad.ownerId===this.$store.getters.user.id}},components:{appEditAdModal:ft}},gt=ht,bt=Object(c["a"])(gt,nt,it,!1,null,"cb160122",null),wt=bt.exports;d()(bt,{VCard:K["a"],VCardActions:J["a"],VCardSubtitle:J["b"],VCardTitle:J["d"],VCol:Q["a"],VContainer:X["a"],VContent:H["a"],VImg:Z["a"],VProgressCircular:tt["a"],VRow:et["a"],VSpacer:_["a"]});var xt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-content",[r("v-container",{attrs:{fluid:""}},[t.loading||0===t.myAds.length?t.loading||0!==t.myAds.length?r("v-row",[r("v-col",{staticClass:"text-sm-center"},[r("v-progress-circular",{attrs:{rotate:50,size:100,value:100,width:10,color:"light-blue",indeterminate:""}})],1)],1):r("v-row",[r("v-col",{staticClass:"text-sm-center"},[r("h1",{staticClass:"text--primary"},[t._v(" You have no ads ")])])],1):r("v-row",{attrs:{"align-content":"center",justify:"center"}},[r("v-col",{attrs:{sm:"10",md:"8",lg:"7"}},[r("h1",{staticClass:"text--secondary mb-3"},[t._v("My ads")]),r("v-container",t._l(t.myAds,(function(e){return r("v-card",{key:e.id,staticClass:"elevation-10 mb-3"},[r("div",{staticClass:"d-flex justify-space-between flex-wrap"},[r("div",{staticClass:"d-flex flex-wrap"},[r("v-avatar",{attrs:{size:"160",tile:""}},[r("v-img",{attrs:{src:e.imageSrc}})],1),r("div",[r("v-card-title",[t._v(" "+t._s(e.title)+" ")]),r("v-card-subtitle",[t._v(" "+t._s(e.description)+" ")])],1)],1),r("v-card-actions",{staticClass:"align-self-end"},[r("v-btn",{attrs:{color:"warning",to:"/ad/"+e.id}},[t._v(" Open ")])],1)],1)])})),1)],1)],1)],1)],1)},Vt=[],Ct={computed:Object(A["a"])({},Object(E["b"])(["myAds","loading"]))},_t=Ct,yt=r("8212"),kt=Object(c["a"])(_t,xt,Vt,!1,null,"673fc44e",null),Lt=kt.exports;d()(kt,{VAvatar:yt["a"],VBtn:m["a"],VCard:K["a"],VCardActions:J["a"],VCardSubtitle:J["b"],VCardTitle:J["d"],VCol:Q["a"],VContainer:X["a"],VContent:H["a"],VImg:Z["a"],VProgressCircular:tt["a"],VRow:et["a"]});var Ot=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-content",[r("v-container",{attrs:{fluid:""}},[r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",{attrs:{sm:"8",md:"6"}},[r("h1",{staticClass:"text--secondary mb-3"},[t._v("Create new ad")]),r("v-form",{ref:"form",attrs:{validation:""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[r("v-text-field",{attrs:{rules:[function(t){return!!t||"Title is required"}],label:"Ad title",name:"title",required:"",type:"text"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),r("v-textarea",{attrs:{rules:[function(t){return!!t||"Description is required"}],"auto-grow":"",label:"Ad description",name:"description",type:"textarea"},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}})],1),r("v-row",[r("v-col",{staticClass:"d-flex align-end"},[t.imageSrc?r("img",{attrs:{src:t.imageSrc,alt:"image"}}):t._e()]),r("v-col",[r("v-btn",{staticClass:"warning col",on:{click:t.triggerUpload}},[t._v(" Upload "),r("v-icon",{attrs:{right:"",dark:""}},[t._v("mdi-cloud-upload")])],1),r("input",{ref:"fileInput",staticStyle:{display:"none"},attrs:{accept:"image/vnd.wap.wbmp",type:"file"},on:{change:t.onFileChange}})],1)],1),r("v-row",[r("v-switch",{attrs:{color:"warning",label:"Add to promo?"},model:{value:t.promo,callback:function(e){t.promo=e},expression:"promo"}})],1),r("v-row",[r("v-col",[r("v-spacer"),r("v-btn",{staticClass:"success col",attrs:{disabled:!t.valid&&!this.image||t.loading,loading:t.loading},on:{click:t.createAd}},[t._v(" Create ad ")])],1)],1)],1)],1)],1)],1)},Et=[],At={data:function(){return{title:"",description:"",promo:!1,valid:!1,image:null,imageSrc:""}},computed:{loading:function(){return this.$store.getters.loading}},methods:{createAd:function(){var t=this;if(this.$refs.form.validate()&&this.image){var e={title:this.title,description:this.description,ownerId:null,promo:this.promo,image:this.image};this.$store.dispatch("createAd",e).then((function(){t.$router.push("/list")})).catch((function(){}))}},onFileChange:function(t){var e=this,r=t.target.files[0],a=new FileReader;a.onload=function(t){e.imageSrc=a.result},a.readAsDataURL(r),this.image=r},triggerUpload:function(){this.$refs.fileInput.click()}}},It=At,St=r("4bd4"),$t=r("b73d"),jt=Object(c["a"])(It,Ot,Et,!1,null,"d34af686",null),Rt=jt.exports;d()(jt,{VBtn:m["a"],VCol:Q["a"],VContainer:X["a"],VContent:H["a"],VForm:St["a"],VIcon:h["a"],VRow:et["a"],VSpacer:_["a"],VSwitch:$t["a"],VTextField:vt["a"],VTextarea:pt["a"]});var Tt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-content",[r("v-container",{attrs:{fluid:""}},[r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",{attrs:{sm:"8",md:"6"}},[r("v-card",{staticClass:"elevation-3"},[r("v-toolbar",{attrs:{color:"primary",dark:"",flat:""}},[r("v-toolbar-title",[t._v("Login form")])],1),r("v-card-text",[r("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[r("v-text-field",{attrs:{label:"Email",name:"email","prepend-icon":"person",type:"email",rules:t.emailRules},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),r("v-text-field",{attrs:{id:"password",label:"Password",name:"password","prepend-icon":"lock",type:"password",counter:6,rules:t.passwordRules},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{color:"primary",loading:t.loading,disabled:!t.valid||t.loading},on:{click:t.onSubmit}},[t._v(" Login ")])],1)],1)],1)],1)],1)],1)},Pt=[],Ut={data:function(){return{email:"",password:"",valid:!1,emailRules:[function(t){return!!t||"E-mail is required"},function(t){return/.+@.+\..+/.test(t)||"E-mail must be valid"}],passwordRules:[function(t){return!!t||"Password is required"},function(t){return t&&t.length>=6||"Password must be equal or more than 6 characters"}]}},computed:{loading:function(){return this.$store.getters.loading}},methods:{onSubmit:function(){var t=this;if(this.$refs.form.validate()){var e={email:this.email,password:this.password};this.$store.dispatch("loginUser",e).then((function(){t.$router.push("/")})).catch((function(){}))}}},created:function(){this.$route.query["loginError"]&&this.$store.dispatch("setError","Please log in to access this page")}},Dt=Ut,Bt=r("71d9"),qt=Object(c["a"])(Dt,Tt,Pt,!1,null,null,null),Ft=qt.exports;d()(qt,{VBtn:m["a"],VCard:K["a"],VCardActions:J["a"],VCardText:J["c"],VCol:Q["a"],VContainer:X["a"],VContent:H["a"],VForm:St["a"],VRow:et["a"],VSpacer:_["a"],VTextField:vt["a"],VToolbar:Bt["a"],VToolbarTitle:y["b"]});var zt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-content",[r("v-container",{attrs:{fluid:""}},[r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",{attrs:{cols:"12",sm:"8",md:"6"}},[r("v-card",{staticClass:"elevation-3"},[r("v-toolbar",{attrs:{color:"primary",dark:"",flat:""}},[r("v-toolbar-title",[t._v("Registration")])],1),r("v-card-text",[r("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[r("v-text-field",{attrs:{rules:t.emailRules,label:"Email",name:"email","prepend-icon":"person",type:"email"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),r("v-text-field",{attrs:{counter:6,rules:t.passwordRules,id:"password",label:"Password",name:"password","prepend-icon":"lock",type:"password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),r("v-text-field",{attrs:{counter:6,rules:t.confirmPasswordRules,id:"confirmPassword",label:"Confirm Password",name:"confirm-password","prepend-icon":"lock",type:"password"},model:{value:t.confirmPassword,callback:function(e){t.confirmPassword=e},expression:"confirmPassword"}})],1)],1),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{color:"primary",loading:t.loading,disabled:!t.valid||t.loading},on:{click:t.onSubmit}},[t._v(" Create account ")])],1)],1)],1)],1)],1)],1)},Mt=[],Yt={data:function(){var t=this;return{email:"",password:"",valid:!1,emailRules:[function(t){return!!t||"E-mail is required"},function(t){return/.+@.+\..+/.test(t)||"E-mail must be valid"}],passwordRules:[function(t){return!!t||"Password is required"},function(t){return t&&t.length>=6||"Password must be equal or more than 6 characters"}],confirmPassword:"",confirmPasswordRules:[function(t){return!!t||"Password is required"},function(e){return e===t.password||"Password should match"}]}},computed:{loading:function(){return this.$store.getters.loading}},methods:{onSubmit:function(){var t=this;if(this.$refs.form.validate()){var e={email:this.email,password:this.password};this.$store.dispatch("registerUser",e).then((function(){t.$router.push("/")})).catch((function(){}))}}},props:{source:String}},Nt=Yt,Kt=Object(c["a"])(Nt,zt,Mt,!1,null,null,null),Jt=Kt.exports;d()(Kt,{VBtn:m["a"],VCard:K["a"],VCardActions:J["a"],VCardText:J["c"],VCol:Q["a"],VContainer:X["a"],VContent:H["a"],VForm:St["a"],VRow:et["a"],VSpacer:_["a"],VTextField:vt["a"],VToolbar:Bt["a"],VToolbarTitle:y["b"]});var Wt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-content",[r("v-container",[r("v-row",{attrs:{"align-content":"center",justify:"center"}},[t.loading?r("v-col",{staticClass:"text-sm-center"},[r("v-progress-circular",{attrs:{indeterminate:"",rotate:50,size:100,value:100,width:10,color:"light-blue"}})],1):t.loading||0===t.orders.length?r("v-col",{staticClass:"text-sm-center"},[r("h1",[t._v(" You have no orders ")])]):r("v-col",{attrs:{sm:"6"}},[r("h1",{staticClass:"text--secondary mb-3"},[t._v(" Orders ")]),r("v-list-item-group",t._l(t.orders,(function(e){return r("v-list-item",{key:e.id},[r("v-list-item-action",[r("v-checkbox",{attrs:{"input-value":e.done,color:"success"},on:{change:function(r){return t.markDone(e)}}})],1),r("v-list-item-content",[r("v-list-item-title",[t._v(t._s(e.name))]),r("v-list-item-subtitle",[t._v(t._s(e.phone))])],1),r("v-list-item-action",[r("v-btn",{staticClass:"primary",attrs:{to:/ad/+e.adId}},[t._v(" Open ")])],1)],1)})),1)],1)],1)],1)],1)},Gt=[],Qt={computed:{loading:function(){return this.$store.getters.loading},orders:function(){return this.$store.getters.orders}},methods:{markDone:function(t){this.$store.dispatch("markOrderDone",t.id).then((function(){t.done=!0})).catch((function(){}))}},created:function(){this.$store.dispatch("fetchOrders")}},Xt=Qt,Ht=r("ac7c"),Zt=r("1baa"),te=Object(c["a"])(Xt,Wt,Gt,!1,null,"ce4fa6d4",null),ee=te.exports;d()(te,{VBtn:m["a"],VCheckbox:Ht["a"],VCol:Q["a"],VContainer:X["a"],VContent:H["a"],VListItem:b["a"],VListItemAction:w["a"],VListItemContent:x["a"],VListItemGroup:Zt["a"],VListItemSubtitle:x["b"],VListItemTitle:x["c"],VProgressCircular:tt["a"],VRow:et["a"]}),a["default"].use(O["a"]);var re=[{path:"",name:"home",component:at},{path:"/ad/:id",props:!0,name:"ad",component:wt},{path:"/list",name:"list",component:Lt,beforeEnter:F},{path:"/new",name:"new",component:Rt,beforeEnter:F},{path:"/login",name:"login",component:Ft},{path:"/registration",name:"reg",component:Jt},{path:"/orders",name:"orders",component:ee,beforeEnter:F}],ae=new O["a"]({mode:"history",base:"",routes:re}),ne=ae,ie=r("ce5b"),oe=r.n(ie),se=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-dialog",{attrs:{"max-width":"500"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[r("v-btn",t._g({staticClass:"mr-3",attrs:{color:"warning"}},a),[t._v(" Buy ")])]}}]),model:{value:t.modal,callback:function(e){t.modal=e},expression:"modal"}},[r("v-card",[r("v-row",{staticClass:"nomarginx"},[r("v-col",[r("v-card-title",[r("h1",{staticClass:"text--primary"},[t._v(" Do you want to buy it? ")])])],1)],1),r("v-divider"),r("v-row",{staticClass:"nomarginx"},[r("v-col",[r("v-card-text",[r("v-text-field",{attrs:{label:"Your name",name:"name",type:"text"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),r("v-textarea",{attrs:{"auto-grow":"",label:"Your phone",name:"phone",type:"text"},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}})],1)],1)],1),r("v-row",{staticClass:"nomarginx"},[r("v-col",[r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{disabled:t.localLoading,outlined:""},on:{click:t.onCancel}},[t._v(" Close ")]),r("v-btn",{staticClass:"success",attrs:{disabled:t.localLoading,loading:t.localLoading},on:{click:t.onSave}},[t._v(" Buy it ")])],1)],1)],1)],1)],1)},ce=[],le=(r("d3b7"),{props:["ad"],data:function(){return{modal:!1,name:"",phone:"",localLoading:!1}},methods:{onCancel:function(){this.name="",this.phone="",this.modal=!1},onSave:function(){var t=this;""!==this.name&&""!==this.phone&&(this.localLoading=!0,this.$store.dispatch("createOrder",{name:this.name,phone:this.phone,adId:this.ad.id,ownerId:this.ad.ownerId}).finally((function(){t.name="",t.phone="",t.localLoading=!1,t.modal=!1})))}}}),de=le,ue=(r("4bb4"),Object(c["a"])(de,se,ce,!1,null,"c7b98168",null)),ve=ue.exports;d()(ue,{VBtn:m["a"],VCard:K["a"],VCardActions:J["a"],VCardText:J["c"],VCardTitle:J["d"],VCol:Q["a"],VDialog:dt["a"],VDivider:ut["a"],VRow:et["a"],VSpacer:_["a"],VTextField:vt["a"],VTextarea:pt["a"]});var pe=r("f309"),me=r("fcf4");a["default"].use(pe["a"]);var fe=new pe["a"]({icons:{iconfont:"mdi"},theme:{themes:{light:{primary:"#3ba1e5",secondary:me["a"].red.lighten4,accent:me["a"].indigo.base}}}});a["default"].use(oe.a),a["default"].component("app-buy-modal",ve),a["default"].config.productionTip=!1,new a["default"]({router:ne,store:q,vuetify:fe,created:function(){var t=this;$["initializeApp"]({apiKey:"AIzaSyC2Uvidr8XvmbRNQK3aMYLKAqD1exez81g",authDomain:"itc-ads-6108a.firebaseapp.com",databaseURL:"https://itc-ads-6108a.firebaseio.com",projectId:"itc-ads-6108a",storageBucket:"itc-ads-6108a.appspot.com",messagingSenderId:"449575624094",appId:"1:449575624094:web:20ba93c89f063bbb370a8f"}),$["auth"]().onAuthStateChanged((function(e){e&&t.$store.dispatch("autoLoginUser",e)})),this.$store.dispatch("fetchAds")},render:function(t){return t(L)}}).$mount("#app")},"5c0b":function(t,e,r){"use strict";var a=r("c58b"),n=r.n(a);n.a},6632:function(t,e,r){"use strict";var a=r("9783"),n=r.n(a);n.a},9783:function(t,e,r){},"98da":function(t,e,r){"use strict";var a=r("2ef8"),n=r.n(a);n.a},c58b:function(t,e,r){}});
//# sourceMappingURL=app.cd4d211a.js.map