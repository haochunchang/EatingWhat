(this.webpackJsonpeatingwhat=this.webpackJsonpeatingwhat||[]).push([[0],{16:function(e,t,n){},20:function(e,t,n){e.exports=n(32)},30:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(11),i=n.n(a),c=n(12),s=n(3),l=n(18),u=n(19),d=(n(30),n(4)),h=n(5),f=n(7),m=n(6),p=n(10),g=(n(16),function(e){Object(f.a)(n,e);var t=Object(m.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return!1}},{key:"render",value:function(){return o.a.createElement("div",{className:"tc bw3 br-pill fl-w100"},o.a.createElement("header",{className:"header"},o.a.createElement("h1",{className:"f1"},"What Do You Want To Eat?")))}}]),n}(r.Component)),v=function(e){return o.a.createElement("div",{style:{overflowY:"auto",border:"1 px solid black",height:"500px"}},e.children)},E=function(e){Object(f.a)(n,e);var t=Object(m.a)(n);function n(){var e;return Object(d.a)(this,n),(e=t.call(this)).state={hasError:!1,errormsg:"",infomsg:""},e}return Object(h.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0,errormsg:e,infomsg:t})}},{key:"render",value:function(){var e=this.state,t=e.hasError,n=e.errormsg,r=e.infomsg;return t?o.a.createElement("div",null,o.a.createElement("h1",null,"Oops, somthing wrong happens..."),o.a.createElement("p",null,"The error message is: ",n,"."),o.a.createElement("p",null,"The info message is ",r,".")):this.props.children}}]),n}(r.Component),b=Object(p.a)((function(){return n.e(3).then(n.bind(null,36))})),O=Object(p.a)((function(){return n.e(5).then(n.bind(null,33))})),w=Object(p.a)((function(){return n.e(6).then(n.bind(null,34))})),y=Object(p.a)((function(){return n.e(4).then(n.bind(null,35))})),j=function(e,t,n){var r=[];return-1===e||n.length?t.length>0&&(r=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}))):r=[t[e]],r},S=function(e){Object(f.a)(n,e);var t=Object(m.a)(n);function n(){var e;return Object(d.a)(this,n),(e=t.call(this)).state={starch_index:-1,protein_index:-1},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.props.onRequestFoods()}},{key:"onClickedStarch",value:function(){var e=Math.floor(Math.random()*this.props.starchyFoods.length);this.setState({starch_index:e,searchfield:""})}},{key:"onClickedProtein",value:function(){var e=Math.floor(Math.random()*this.props.proteinFoods.length);this.setState({protein_index:e,searchfield:""})}},{key:"render",value:function(){var e=this.state,t=e.starch_index,n=e.protein_index,r=this.props,a=r.starchyFoods,i=r.proteinFoods,c=r.searchfield,s=r.onSearchChange,l=r.isPending,u=j(t,a,c),d=j(n,i,c);return l?o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"header"},o.a.createElement("h1",{className:"f1"},"Loading..."))):o.a.createElement("div",{className:"App"},o.a.createElement(g,null),o.a.createElement("div",{className:"row"},o.a.createElement(O,{searchChange:s}),o.a.createElement("div",{className:"column"},o.a.createElement(w,{onClicked:this.onClickedStarch.bind(this)}),o.a.createElement(v,null,o.a.createElement(E,null,o.a.createElement(b,{foods:u})))),o.a.createElement("div",{className:"column"},o.a.createElement(y,{onClicked:this.onClickedProtein.bind(this)}),o.a.createElement(v,null,o.a.createElement(E,null,o.a.createElement(b,{foods:d}))))))}}]),n}(r.Component),C=Object(c.b)((function(e){return{searchfield:e.searchFoods.searchfield,starchyFoods:e.requestFoods.foods.filter((function(e){return"main food"===e.category})),proteinFoods:e.requestFoods.foods.filter((function(e){return"main food"!==e.category})),isPending:e.requestFoods.isPending,error:e.requestFoods.error}}),(function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onRequestFoods:function(){return e((function(e){e({type:"REQUEST_FOODS_PENDING"}),fetch("https://my-json-server.typicode.com/haochunchang/food-json-server/posts").then((function(e){return e.json()})).then((function(t){for(var n=0;n<t.length;n++){var r=t[n].name.toLowerCase();t[n].url="https://github.com/haochunchang/food-json-server/blob/master/images/".concat(r,".jpg?raw=true")}e({type:"REQUEST_FOODS_SUCCESS",payload:t})})).catch((function(t){return e({type:"REQUEST_FOODS_FAILED",payload:t})}))}))}}}))(S),k={searchfield:""},F={isPending:!1,foods:[],error:""},_=Object(s.c)({searchFoods:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchfield:t.payload});default:return e}},requestFoods:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_FOODS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_FOODS_SUCCESS":return Object.assign({},e,{foods:t.payload,isPending:!1});case"REQUEST_FOODS_FAILED":return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}}}),N=(n(31),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function D(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var A=Object(l.createLogger)(),P=Object(s.d)(_,Object(s.a)(u.a,A));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(c.a,{store:P},o.a.createElement(C,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/EatingWhat",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/EatingWhat","/service-worker.js");N?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):D(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):D(t,e)}))}}()}},[[20,1,2]]]);
//# sourceMappingURL=main.c1a4b65b.chunk.js.map