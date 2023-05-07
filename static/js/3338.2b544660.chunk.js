/*! For license information please see 3338.2b544660.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[3338],{61850:function(e,t,n){n(44702);var a=n(10181),r=(n(46331),n(12481),a.Z.initializeApp({apiKey:"AIzaSyCYYgwtBhXBvRTPGc8i8GpqScYYCEte6Ys",authDomain:"last-3b395.firebaseapp.com",databaseURL:"https://last-3b395-default-rtdb.firebaseio.com",projectId:"last-3b395",storageBucket:"last-3b395.appspot.com",messagingSenderId:"479262466021",appId:"1:479262466021:web:2cd50032e15feef041590c"}));t.Z=r},23338:function(e,t,n){n.r(t),n.d(t,{default:function(){return I}});var a=n(74165),r=n(15861),i=n(29439),o=n(72791),l=n(31243),s=n(10181),c=n(60136),u=n(27277),h=n(15671),d=n(43144),f=n(30166),v=n(23258),g=n(18796),y=n(85854),p=n(6781),_=new p.Yd("@firebase/database-compat"),m=function(e){var t="FIREBASE WARNING: "+e;_.warn(t)},b=function(){function e(t){(0,h.Z)(this,e),this._delegate=t}return(0,d.Z)(e,[{key:"cancel",value:function(e){(0,y.Dv)("OnDisconnect.cancel",0,1,arguments.length),(0,y.Wj)("OnDisconnect.cancel","onComplete",e,!0);var t=this._delegate.cancel();return e&&t.then((function(){return e(null)}),(function(t){return e(t)})),t}},{key:"remove",value:function(e){(0,y.Dv)("OnDisconnect.remove",0,1,arguments.length),(0,y.Wj)("OnDisconnect.remove","onComplete",e,!0);var t=this._delegate.remove();return e&&t.then((function(){return e(null)}),(function(t){return e(t)})),t}},{key:"set",value:function(e,t){(0,y.Dv)("OnDisconnect.set",1,2,arguments.length),(0,y.Wj)("OnDisconnect.set","onComplete",t,!0);var n=this._delegate.set(e);return t&&n.then((function(){return t(null)}),(function(e){return t(e)})),n}},{key:"setWithPriority",value:function(e,t,n){(0,y.Dv)("OnDisconnect.setWithPriority",2,3,arguments.length),(0,y.Wj)("OnDisconnect.setWithPriority","onComplete",n,!0);var a=this._delegate.setWithPriority(e,t);return n&&a.then((function(){return n(null)}),(function(e){return n(e)})),a}},{key:"update",value:function(e,t){if((0,y.Dv)("OnDisconnect.update",1,2,arguments.length),Array.isArray(e)){for(var n={},a=0;a<e.length;++a)n[""+a]=e[a];e=n,m("Passing an Array to firebase.database.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}(0,y.Wj)("OnDisconnect.update","onComplete",t,!0);var r=this._delegate.update(e);return t&&r.then((function(){return t(null)}),(function(e){return t(e)})),r}}]),e}(),k=function(){function e(t,n){(0,h.Z)(this,e),this.committed=t,this.snapshot=n}return(0,d.Z)(e,[{key:"toJSON",value:function(){return(0,y.Dv)("TransactionResult.toJSON",0,1,arguments.length),{committed:this.committed,snapshot:this.snapshot.toJSON()}}}]),e}(),D=function(){function e(t,n){(0,h.Z)(this,e),this._database=t,this._delegate=n}return(0,d.Z)(e,[{key:"val",value:function(){return(0,y.Dv)("DataSnapshot.val",0,0,arguments.length),this._delegate.val()}},{key:"exportVal",value:function(){return(0,y.Dv)("DataSnapshot.exportVal",0,0,arguments.length),this._delegate.exportVal()}},{key:"toJSON",value:function(){return(0,y.Dv)("DataSnapshot.toJSON",0,1,arguments.length),this._delegate.toJSON()}},{key:"exists",value:function(){return(0,y.Dv)("DataSnapshot.exists",0,0,arguments.length),this._delegate.exists()}},{key:"child",value:function(t){return(0,y.Dv)("DataSnapshot.child",0,1,arguments.length),t=String(t),(0,g.FQ)("DataSnapshot.child","path",t,!1),new e(this._database,this._delegate.child(t))}},{key:"hasChild",value:function(e){return(0,y.Dv)("DataSnapshot.hasChild",1,1,arguments.length),(0,g.FQ)("DataSnapshot.hasChild","path",e,!1),this._delegate.hasChild(e)}},{key:"getPriority",value:function(){return(0,y.Dv)("DataSnapshot.getPriority",0,0,arguments.length),this._delegate.priority}},{key:"forEach",value:function(t){var n=this;return(0,y.Dv)("DataSnapshot.forEach",1,1,arguments.length),(0,y.Wj)("DataSnapshot.forEach","action",t,!1),this._delegate.forEach((function(a){return t(new e(n._database,a))}))}},{key:"hasChildren",value:function(){return(0,y.Dv)("DataSnapshot.hasChildren",0,0,arguments.length),this._delegate.hasChildren()}},{key:"key",get:function(){return this._delegate.key}},{key:"numChildren",value:function(){return(0,y.Dv)("DataSnapshot.numChildren",0,0,arguments.length),this._delegate.size}},{key:"getRef",value:function(){return(0,y.Dv)("DataSnapshot.ref",0,0,arguments.length),new S(this._database,this._delegate.ref)}},{key:"ref",get:function(){return this.getRef()}}]),e}(),w=function(){function e(t,n){(0,h.Z)(this,e),this.database=t,this._delegate=n}return(0,d.Z)(e,[{key:"on",value:function(t,n,a,r){var i,o=this;(0,y.Dv)("Query.on",2,4,arguments.length),(0,y.Wj)("Query.on","callback",n,!1);var l=e.getCancelAndContextArgs_("Query.on",a,r),s=function(e,t){n.call(l.context,new D(o.database,e),t)};s.userCallback=n,s.context=l.context;var c=null===(i=l.cancel)||void 0===i?void 0:i.bind(l.context);switch(t){case"value":return(0,g.jM)(this._delegate,s,c),n;case"child_added":return(0,g.yv)(this._delegate,s,c),n;case"child_removed":return(0,g.MQ)(this._delegate,s,c),n;case"child_changed":return(0,g.Jr)(this._delegate,s,c),n;case"child_moved":return(0,g.Vt)(this._delegate,s,c),n;default:throw new Error((0,y.gK)("Query.on","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}}},{key:"off",value:function(e,t,n){if((0,y.Dv)("Query.off",0,3,arguments.length),function(e,t,n){if(!n||void 0!==t)switch(t){case"value":case"child_added":case"child_removed":case"child_changed":case"child_moved":break;default:throw new Error((0,y.gK)(e,"eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}}("Query.off",e,!0),(0,y.Wj)("Query.off","callback",t,!0),(0,y.lb)("Query.off","context",n,!0),t){var a=function(){};a.userCallback=t,a.context=n,(0,g.S1)(this._delegate,e,a)}else(0,g.S1)(this._delegate,e)}},{key:"get",value:function(){var e=this;return(0,g.U2)(this._delegate).then((function(t){return new D(e.database,t)}))}},{key:"once",value:function(t,n,a,r){var i=this;(0,y.Dv)("Query.once",1,4,arguments.length),(0,y.Wj)("Query.once","callback",n,!0);var o=e.getCancelAndContextArgs_("Query.once",a,r),l=new y.BH,s=function(e,t){var a=new D(i.database,e);n&&n.call(o.context,a,t),l.resolve(a)};s.userCallback=n,s.context=o.context;var c=function(e){o.cancel&&o.cancel.call(o.context,e),l.reject(e)};switch(t){case"value":(0,g.jM)(this._delegate,s,c,{onlyOnce:!0});break;case"child_added":(0,g.yv)(this._delegate,s,c,{onlyOnce:!0});break;case"child_removed":(0,g.MQ)(this._delegate,s,c,{onlyOnce:!0});break;case"child_changed":(0,g.Jr)(this._delegate,s,c,{onlyOnce:!0});break;case"child_moved":(0,g.Vt)(this._delegate,s,c,{onlyOnce:!0});break;default:throw new Error((0,y.gK)("Query.once","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}return l.promise}},{key:"limitToFirst",value:function(t){return(0,y.Dv)("Query.limitToFirst",1,1,arguments.length),new e(this.database,(0,g.IO)(this._delegate,(0,g.Kk)(t)))}},{key:"limitToLast",value:function(t){return(0,y.Dv)("Query.limitToLast",1,1,arguments.length),new e(this.database,(0,g.IO)(this._delegate,(0,g.vh)(t)))}},{key:"orderByChild",value:function(t){return(0,y.Dv)("Query.orderByChild",1,1,arguments.length),new e(this.database,(0,g.IO)(this._delegate,(0,g.g2)(t)))}},{key:"orderByKey",value:function(){return(0,y.Dv)("Query.orderByKey",0,0,arguments.length),new e(this.database,(0,g.IO)(this._delegate,(0,g.R)()))}},{key:"orderByPriority",value:function(){return(0,y.Dv)("Query.orderByPriority",0,0,arguments.length),new e(this.database,(0,g.IO)(this._delegate,(0,g.HE)()))}},{key:"orderByValue",value:function(){return(0,y.Dv)("Query.orderByValue",0,0,arguments.length),new e(this.database,(0,g.IO)(this._delegate,(0,g.Bd)()))}},{key:"startAt",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1?arguments[1]:void 0;return(0,y.Dv)("Query.startAt",0,2,arguments.length),new e(this.database,(0,g.IO)(this._delegate,(0,g.e0)(t,n)))}},{key:"startAfter",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1?arguments[1]:void 0;return(0,y.Dv)("Query.startAfter",0,2,arguments.length),new e(this.database,(0,g.IO)(this._delegate,(0,g.TQ)(t,n)))}},{key:"endAt",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1?arguments[1]:void 0;return(0,y.Dv)("Query.endAt",0,2,arguments.length),new e(this.database,(0,g.IO)(this._delegate,(0,g.Wu)(t,n)))}},{key:"endBefore",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1?arguments[1]:void 0;return(0,y.Dv)("Query.endBefore",0,2,arguments.length),new e(this.database,(0,g.IO)(this._delegate,(0,g.Lx)(t,n)))}},{key:"equalTo",value:function(t,n){return(0,y.Dv)("Query.equalTo",1,2,arguments.length),new e(this.database,(0,g.IO)(this._delegate,(0,g.EW)(t,n)))}},{key:"toString",value:function(){return(0,y.Dv)("Query.toString",0,0,arguments.length),this._delegate.toString()}},{key:"toJSON",value:function(){return(0,y.Dv)("Query.toJSON",0,1,arguments.length),this._delegate.toJSON()}},{key:"isEqual",value:function(t){if((0,y.Dv)("Query.isEqual",1,1,arguments.length),!(t instanceof e)){throw new Error("Query.isEqual failed: First argument must be an instance of firebase.database.Query.")}return this._delegate.isEqual(t._delegate)}},{key:"ref",get:function(){return new S(this.database,new g.tn(this._delegate._repo,this._delegate._path))}}],[{key:"getCancelAndContextArgs_",value:function(e,t,n){var a={cancel:void 0,context:void 0};if(t&&n)a.cancel=t,(0,y.Wj)(e,"cancel",a.cancel,!0),a.context=n,(0,y.lb)(e,"context",a.context,!0);else if(t)if("object"===typeof t&&null!==t)a.context=t;else{if("function"!==typeof t)throw new Error((0,y.gK)(e,"cancelOrContext")+" must either be a cancel callback or a context object.");a.cancel=t}return a}}]),e}(),S=function(e){(0,c.Z)(n,e);var t=(0,u.Z)(n);function n(e,a){var r;return(0,h.Z)(this,n),(r=t.call(this,e,new g.JH(a._repo,a._path,new g.G$,!1))).database=e,r._delegate=a,r}return(0,d.Z)(n,[{key:"getKey",value:function(){return(0,y.Dv)("Reference.key",0,0,arguments.length),this._delegate.key}},{key:"child",value:function(e){return(0,y.Dv)("Reference.child",1,1,arguments.length),"number"===typeof e&&(e=String(e)),new n(this.database,(0,g.iU)(this._delegate,e))}},{key:"getParent",value:function(){(0,y.Dv)("Reference.parent",0,0,arguments.length);var e=this._delegate.parent;return e?new n(this.database,e):null}},{key:"getRoot",value:function(){return(0,y.Dv)("Reference.root",0,0,arguments.length),new n(this.database,this._delegate.root)}},{key:"set",value:function(e,t){(0,y.Dv)("Reference.set",1,2,arguments.length),(0,y.Wj)("Reference.set","onComplete",t,!0);var n=(0,g.t8)(this._delegate,e);return t&&n.then((function(){return t(null)}),(function(e){return t(e)})),n}},{key:"update",value:function(e,t){if((0,y.Dv)("Reference.update",1,2,arguments.length),Array.isArray(e)){for(var n={},a=0;a<e.length;++a)n[""+a]=e[a];e=n,m("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}(0,g.mI)("Reference.update",this._delegate._path),(0,y.Wj)("Reference.update","onComplete",t,!0);var r=(0,g.Vx)(this._delegate,e);return t&&r.then((function(){return t(null)}),(function(e){return t(e)})),r}},{key:"setWithPriority",value:function(e,t,n){(0,y.Dv)("Reference.setWithPriority",2,3,arguments.length),(0,y.Wj)("Reference.setWithPriority","onComplete",n,!0);var a=(0,g.cy)(this._delegate,e,t);return n&&a.then((function(){return n(null)}),(function(e){return n(e)})),a}},{key:"remove",value:function(e){(0,y.Dv)("Reference.remove",0,1,arguments.length),(0,y.Wj)("Reference.remove","onComplete",e,!0);var t=(0,g.Od)(this._delegate);return e&&t.then((function(){return e(null)}),(function(t){return e(t)})),t}},{key:"transaction",value:function(e,t,n){var a=this;(0,y.Dv)("Reference.transaction",1,3,arguments.length),(0,y.Wj)("Reference.transaction","transactionUpdate",e,!1),(0,y.Wj)("Reference.transaction","onComplete",t,!0),function(e,t,n,a){if((!a||void 0!==n)&&"boolean"!==typeof n)throw new Error((0,y.gK)(e,t)+"must be a boolean.")}("Reference.transaction","applyLocally",n,!0);var r=(0,g.i3)(this._delegate,e,{applyLocally:n}).then((function(e){return new k(e.committed,new D(a.database,e.snapshot))}));return t&&r.then((function(e){return t(null,e.committed,e.snapshot)}),(function(e){return t(e,!1,null)})),r}},{key:"setPriority",value:function(e,t){(0,y.Dv)("Reference.setPriority",1,2,arguments.length),(0,y.Wj)("Reference.setPriority","onComplete",t,!0);var n=(0,g.Sl)(this._delegate,e);return t&&n.then((function(){return t(null)}),(function(e){return t(e)})),n}},{key:"push",value:function(e,t){var a=this;(0,y.Dv)("Reference.push",0,2,arguments.length),(0,y.Wj)("Reference.push","onComplete",t,!0);var r=(0,g.VF)(this._delegate,e),i=r.then((function(e){return new n(a.database,e)}));t&&i.then((function(){return t(null)}),(function(e){return t(e)}));var o=new n(this.database,r);return o.then=i.then.bind(i),o.catch=i.catch.bind(i,void 0),o}},{key:"onDisconnect",value:function(){return(0,g.mI)("Reference.onDisconnect",this._delegate._path),new b(new g.vA(this._delegate._repo,this._delegate._path))}},{key:"key",get:function(){return this.getKey()}},{key:"parent",get:function(){return this.getParent()}},{key:"root",get:function(){return this.getRoot()}}]),n}(w),x=function(){function e(t,n){var a=this;(0,h.Z)(this,e),this._delegate=t,this.app=n,this.INTERNAL={delete:function(){return a._delegate._delete()},forceWebSockets:g.TD,forceLongPolling:g.Ot}}return(0,d.Z)(e,[{key:"useEmulator",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};(0,g.dH)(this._delegate,e,t,n)}},{key:"ref",value:function(e){if((0,y.Dv)("database.ref",0,1,arguments.length),e instanceof S){var t=(0,g.qT)(this._delegate,e.toString());return new S(this,t)}var n=(0,g.iH)(this._delegate,e);return new S(this,n)}},{key:"refFromURL",value:function(e){(0,y.Dv)("database.refFromURL",1,1,arguments.length);var t=(0,g.qT)(this._delegate,e);return new S(this,t)}},{key:"goOffline",value:function(){return(0,y.Dv)("database.goOffline",0,0,arguments.length),(0,g.Sb)(this._delegate)}},{key:"goOnline",value:function(){return(0,y.Dv)("database.goOnline",0,0,arguments.length),(0,g.$o)(this._delegate)}}]),e}();x.ServerValue={TIMESTAMP:(0,g.Bt)(),increment:function(e){return(0,g.nP)(e)}};var C,O=Object.freeze({__proto__:null,initStandalone:function(e){var t=e.app,n=e.url,a=e.version,r=e.customAuthImpl,i=e.namespace,o=e.nodeAdmin,l=void 0!==o&&o;(0,g.AM)(a);var s=new v.zt("auth-internal",new v.H0("database-standalone"));return s.setComponent(new v.wA("auth-internal",(function(){return r}),"PRIVATE")),{instance:new x((0,g.wj)(t,s,void 0,n,l),t),namespace:i}}}),j=x.ServerValue;(C=f.Z).INTERNAL.registerComponent(new v.wA("database-compat",(function(e,t){var n=t.instanceIdentifier,a=e.getProvider("app-compat").getImmediate(),r=e.getProvider("database").getImmediate({identifier:n});return new x(r,a)}),"PUBLIC").setServiceProps({Reference:S,Query:w,Database:x,DataSnapshot:D,enableLogging:g.U7,INTERNAL:O,ServerValue:j}).setMultipleInstances(!0)),C.registerVersion("@firebase/database-compat","0.3.4");n(61850);var R=n(80184),I=function(){var e=o.useState({}),t=(0,i.Z)(e,2),n=t[0],c=t[1];console.log(n,"data"),(0,o.useEffect)((function(){u()}),[]);var u=function(){var e=(0,r.Z)((0,a.Z)().mark((function e(){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:l.Z.get("https://last-3b395-default-rtdb.firebaseio.com/users.json").then((function(e){c(e.data)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();s.Z.initializeApp({apiKey:"AIzaSyCYYgwtBhXBvRTPGc8i8GpqScYYCEte6Ys",authDomain:"last-3b395.firebaseapp.com",databaseURL:"https://last-3b395-default-rtdb.firebaseio.com",projectId:"last-3b395",storageBucket:"last-3b395.appspot.com",messagingSenderId:"479262466021",appId:"1:479262466021:web:2cd50032e15feef041590c"});var h=s.Z.database().ref();return(0,R.jsx)("div",{children:Object.keys(n).map((function(e){return(0,R.jsxs)(R.Fragment,{children:[console.log(n[e],"da"),(0,R.jsxs)("li",{className:"feedBackListItem",children:[(0,R.jsxs)("div",{style:{width:"100vh",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,R.jsx)("img",{src:"https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500",alt:"",className:"img"}),(0,R.jsx)("div",{className:"feedbackUser",style:{display:"flex",justifyContent:"center",alignItems:"center"},children:(0,R.jsx)("span",{className:"Username",children:n[e].name})}),(0,R.jsx)("div",{className:"feedbackUser",style:{display:"flex",justifyContent:"center",alignItems:"center"},children:(0,R.jsx)("span",{className:"feedbackDate",children:n[e].email})})]}),(0,R.jsx)("div",{children:(0,R.jsx)("button",{className:"feedbackButton",onClick:function(){!function(e){window.confirm("Are you sure want to del this record")&&h.child("users/".concat(e)).remove((function(e){console.log(e)}))}(e)},children:"Delete"})})]})]})}))})}}}]);
//# sourceMappingURL=3338.2b544660.chunk.js.map