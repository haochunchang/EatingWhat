(this.webpackJsonpeatingwhat=this.webpackJsonpeatingwhat||[]).push([[0],{13:function(e,t,n){},17:function(e,t,n){e.exports=n(29)},27:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(6),c=n.n(o),i=n(7),s=n(1),l=n(15),u=n(16),d=(n(27),n(2)),h=n(3),f=n(5),m=n(4),p=(n(13),function(e){Object(f.a)(n,e);var t=Object(m.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return!1}},{key:"render",value:function(){return r.a.createElement("div",{className:"tc bw3 br-pill fl-w100"},r.a.createElement("header",{className:"header"},r.a.createElement("h1",{className:"f1"},"What Do You Want To Eat?")))}}]),n}(a.Component)),g=function(e){var t=e.onClicked;return r.a.createElement(a.Fragment,null,r.a.createElement("button",{type:"button",onClick:t,className:"f3 pa3 btn btn-sucess grow"},"Starchy Food?"))},E=function(e){var t=e.onClicked;return r.a.createElement(a.Fragment,null,r.a.createElement("button",{type:"button",onClick:t,className:"f3 pa3 btn btn-sucess grow"},"Protein Food?"))},v=function(e){var t=e.url,n=e.name;return r.a.createElement("div",{className:"tc dib br5 pa3 ma3 grow bw2 shadow"},r.a.createElement("img",{alt:"food",src:t}),r.a.createElement("div",null,r.a.createElement("p",null,n)))},b=function(e){var t=e.foods,n=t.map((function(e,n){return r.a.createElement(v,{key:n,url:t[n].url,name:t[n].name,category:t[n].category})}));return r.a.createElement(a.Fragment,null,n)},w=function(e){e.searchfield;var t=e.searchChange;return r.a.createElement("div",{className:"tc pa2"},r.a.createElement("label",null,"Have something in mind? "),r.a.createElement("input",{id:"searchbox",className:"pa3 ba bg-washed-red",type:"search",placeholder:"search foods",onChange:t}))},y=function(e){return r.a.createElement("div",{style:{overflowY:"auto",border:"1 px solid black",height:"500px"}},e.children)},O=function(e){Object(f.a)(n,e);var t=Object(m.a)(n);function n(){var e;return Object(d.a)(this,n),(e=t.call(this)).state={hasError:!1,errormsg:"",infomsg:""},e}return Object(h.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0,errormsg:e,infomsg:t})}},{key:"render",value:function(){var e=this.state,t=e.hasError,n=e.errormsg,a=e.infomsg;return t?r.a.createElement("div",null,r.a.createElement("h1",null,"Oops, somthing wrong happens..."),r.a.createElement("p",null,"The error message is: ",n,"."),r.a.createElement("p",null,"The info message is ",a,".")):this.props.children}}]),n}(a.Component),C=function(e,t,n){var a=[];return-1===e||n.length?t.length>0&&(a=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}))):a=[t[e]],a},S=function(e){Object(f.a)(n,e);var t=Object(m.a)(n);function n(){var e;return Object(d.a)(this,n),(e=t.call(this)).state={starch_index:-1,protein_index:-1},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.props.onRequestFoods()}},{key:"onClickedStarch",value:function(){var e=Math.floor(Math.random()*this.props.starchyFoods.length);this.setState({starch_index:e,searchfield:""})}},{key:"onClickedProtein",value:function(){var e=Math.floor(Math.random()*this.props.proteinFoods.length);this.setState({protein_index:e,searchfield:""})}},{key:"render",value:function(){var e=this.state,t=e.starch_index,n=e.protein_index,a=this.props,o=a.starchyFoods,c=a.proteinFoods,i=a.searchfield,s=a.onSearchChange,l=a.isPending,u=C(t,o,i),d=C(n,c,i);return l?r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"header"},r.a.createElement("h1",{className:"f1"},"Loading..."))):r.a.createElement("div",{className:"App"},r.a.createElement(p,null),r.a.createElement("div",{className:"row"},r.a.createElement(w,{searchChange:s}),r.a.createElement("div",{className:"column"},r.a.createElement(g,{onClicked:this.onClickedStarch.bind(this)}),r.a.createElement(y,null,r.a.createElement(O,null,r.a.createElement(b,{foods:u})))),r.a.createElement("div",{className:"column"},r.a.createElement(E,{onClicked:this.onClickedProtein.bind(this)}),r.a.createElement(y,null,r.a.createElement(O,null,r.a.createElement(b,{foods:d}))))))}}]),n}(a.Component),k=Object(i.b)((function(e){return{searchfield:e.searchFoods.searchfield,starchyFoods:e.requestFoods.foods.filter((function(e){return"main food"===e.category})),proteinFoods:e.requestFoods.foods.filter((function(e){return"main food"!==e.category})),isPending:e.requestFoods.isPending,error:e.requestFoods.error}}),(function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onRequestFoods:function(){return e((function(e){e({type:"REQUEST_FOODS_PENDING"}),fetch("https://my-json-server.typicode.com/haochunchang/food-json-server/posts").then((function(e){return e.json()})).then((function(t){for(var n=0;n<t.length;n++){var a=t[n].name.toLowerCase();t[n].url="https://github.com/haochunchang/food-json-server/blob/master/images/".concat(a,".jpg?raw=true")}e({type:"REQUEST_FOODS_SUCCESS",payload:t})})).catch((function(t){return e({type:"REQUEST_FOODS_FAILED",payload:t})}))}))}}}))(S),F={searchfield:""},j={isPending:!1,foods:[],error:""},N=Object(s.c)({searchFoods:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchfield:t.payload});default:return e}},requestFoods:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_FOODS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_FOODS_SUCCESS":return Object.assign({},e,{foods:t.payload,isPending:!1});case"REQUEST_FOODS_FAILED":return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}}}),_=(n(28),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function D(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var P=Object(l.createLogger)(),A=Object(s.d)(N,Object(s.a)(u.a,P));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i.a,{store:A},r.a.createElement(k,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/EatingWhat",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/EatingWhat","/service-worker.js");_?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):D(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):D(t,e)}))}}()}},[[17,1,2]]]);
//# sourceMappingURL=main.2515995d.chunk.js.map