(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{345:function(e,t,n){},347:function(e,t,n){"use strict";n.r(t);var r=n(7),c=n(0),a=n.n(c),i=n(25),s=n.n(i),u=n(43),o=n.n(u),j=n(55),l=n(98),d=n(40),b=n(15),O=function(e){return{type:"EDIT_ITEM_LIST",payload:e}},h=function(e){return{type:"EDIT_RECEIVED_LIST",payload:e}},f=function(e){return{type:"CHANGE_USING_CURRENCY",payload:e}},p=function(e){return{type:"CHANGE_TIME",payload:e}},v=n(29),x=n(59),m=n(353),y=n(193),g=n(356),E=n(65),C=m.a.Paragraph,w=m.a.Text;var S=function(e){var t=e.itemData,n=e.storeName,a=Object(b.b)(),i=Object(b.c)((function(e){return e.currencyReducer.usingCurrency})),s=Object(c.useState)(!1),u=Object(x.a)(s,2),l=u[0],d=u[1],O=function(){var e=Object(j.a)(o.a.mark((function e(){var r,c,i,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,d(!0),r={id:t.id,store:n},e.next=5,fetch("/api/v1/receivedItems",{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)}).then((function(e){return e.json()}));case 5:return c=e.sent,i=Object(v.a)(Object(v.a)({},c),{},{store:n}),e.next=9,fetch("/api/v1/items",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)}).then((function(e){return e.json()}));case 9:return e.next=11,fetch("/api/v1/receivedItems").then((function(e){return e.json()}));case 11:s=e.sent,a(h(s)),d(!1),y.b.warning("Item recall!"),e.next=20;break;case 17:throw e.prev=17,e.t0=e.catch(0),new Error(e.t0);case 20:case"end":return e.stop()}}),e,null,[[0,17]])})));return function(){return e.apply(this,arguments)}}();return Object(r.jsx)("div",{className:"card-margin",children:Object(r.jsxs)(g.a,{title:t.name,extra:Object(r.jsx)(E.a,{type:"primary",onClick:function(){return O()},style:{background:"#f93154",borderColor:"#f93154"},loading:l,children:"Recall"}),className:"card-class",children:[Object(r.jsxs)(C,{children:["Price:"," ",Object(r.jsxs)(w,{strong:!0,children:[(t.price*i.value).toFixed(2)," ",i.sign]})]}),Object(r.jsx)(C,{children:Object(r.jsx)(w,{strong:!0,children:"Item arrived!"})})]})})},T=n(150),I=T.a.TabPane;var N=function(){var e=Object(b.c)((function(e){return e.mainReducer.receivedList})),t=Object(b.c)((function(e){return e.mainReducer.screenSize}));return Object(r.jsx)("div",{children:Object(r.jsx)(T.a,{size:"large",defaultActiveKey:"1",tabPosition:t.width>600?"left":"top",children:e&&e.map((function(e){return Object(r.jsx)(I,{tab:"".concat(e.store),className:"list-class",children:e.items&&e.items.map((function(t){return Object(r.jsx)(S,{itemData:t,storeName:e.store},t.id)}))},e.store)}))})})},R=n(133),D=n(349),k=T.a.TabPane,_=R.a.Option,P=m.a.Text;var A=function(){var e=Object(b.b)(),t=Object(b.c)((function(e){return e.currencyReducer.currency})),n=Object(b.c)((function(e){return e.currencyReducer.time})),a=Object(b.c)((function(e){return e.mainReducer.screenSize})),i=Object(b.c)((function(e){return e.currencyReducer.usingCurrency}));return Object(c.useEffect)((function(){Object(j.a)(o.a.mark((function t(){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("/api/v1/receivedItems").then((function(e){return e.json()}));case 3:n=t.sent,e(h(n)),t.next=10;break;case 7:throw t.prev=7,t.t0=t.catch(0),new Error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()}),[e]),Object(r.jsx)("div",{className:"content-class",children:t&&Object(r.jsx)(T.a,{tabBarExtraContent:Object(r.jsxs)(m.a,{children:[a.width>1e3?Object(r.jsx)(P,{children:"Update currency every: "}):null,Object(r.jsxs)(R.a,{value:n,onChange:function(t){e(p(t))},children:[Object(r.jsx)(_,{value:1e4,children:"10 sec."},"1"),Object(r.jsx)(_,{value:3e4,children:"30 sec."},"2"),Object(r.jsx)(_,{value:6e4,children:"60 sec."},"3")]}),Object(r.jsx)(D.a,{type:"vertical"}),a.width>1e3?Object(r.jsx)(P,{children:"Currency: "}):null,Object(r.jsx)(R.a,{value:i.sign,onChange:function(n){e(f({sign:n,value:t.rates[n]}))},children:Object.keys(t.rates).map((function(e){return Object(r.jsx)(_,{value:e,children:e},e)}))})]}),children:Object(r.jsx)(k,{tab:"Received Items",children:Object(r.jsx)(N,{})},"1")})})},L=n(175),U=n(176),z=n(192),G=n(188),H=function(e){Object(z.a)(n,e);var t=Object(G.a)(n);function n(e){var r;return Object(L.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(U.a)(n,[{key:"render",value:function(){return this.state.hasError?Object(r.jsx)("h1",{children:"Something went wrong."}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(){return{hasError:!0}}}]),n}(a.a.Component),J=n(358),B=m.a.Paragraph,Y=m.a.Text;var F=function(e){var t=e.itemData,n=e.storeName,a=Object(b.b)(),i=Object(b.c)((function(e){return e.currencyReducer.usingCurrency})),s=Object(c.useState)(!1),u=Object(x.a)(s,2),l=u[0],d=u[1],h=function(){var e=Object(j.a)(o.a.mark((function e(){var r,c,i,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,d(!0),r={id:t.id,store:n},e.next=5,fetch("/api/v1/items",{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)}).then((function(e){return e.json()}));case 5:return c=e.sent,i=Object(v.a)(Object(v.a)({},c),{},{store:n}),e.next=9,fetch("/api/v1/receivedItems",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)}).then((function(e){return e.json()}));case 9:return e.next=11,fetch("/api/v1/items").then((function(e){return e.json()}));case 11:s=e.sent,a(O(s)),d(!1),y.b.success("Item received!"),e.next=20;break;case 17:throw e.prev=17,e.t0=e.catch(0),new Error(e.t0);case 20:case"end":return e.stop()}}),e,null,[[0,17]])})));return function(){return e.apply(this,arguments)}}();return Object(r.jsx)("div",{className:"card-margin",children:Object(r.jsxs)(g.a,{title:t.name,extra:Object(r.jsx)(E.a,{type:"primary",onClick:function(){return h()},style:{background:"#00b74a",borderColor:"#00b74a"},loading:l,children:"Received"}),className:"card-class",children:[Object(r.jsxs)(B,{children:["Price:"," ",Object(r.jsxs)(Y,{strong:!0,children:[(t.price*i.value).toFixed(2)," ",i.sign]})]}),Object(r.jsxs)(B,{children:["Estimated date:"," ",Object(r.jsx)(Y,{strong:!0,children:new Date(t.deliveryESTDate).toDateString()})]}),Date.now()>t.deliveryESTDate?Object(r.jsx)(J.a,{message:"Still not here? Contact the seller.",type:"error"}):Object(r.jsx)(J.a,{message:"Everything is cool... wait for delivery."})]})})},M=n(360),q=n(354),K=n(352),V=n(350),W=n(357),Z=n(359),Q=n(351),X=T.a.TabPane,$=m.a.Text,ee={labelCol:{span:6},wrapperCol:{span:16}};var te=function(){var e=Object(b.b)(),t=Object(b.c)((function(e){return e.mainReducer.itemList})),n=Object(b.c)((function(e){return e.mainReducer.screenSize})),a=Object(b.c)((function(e){return e.antdReducer.options})),i=Object(c.useState)(!1),s=Object(x.a)(i,2),u=s[0],l=s[1],d=Object(c.useState)(!1),h=Object(x.a)(d,2),f=h[0],p=h[1],g=Object(c.useState)(""),C=Object(x.a)(g,2),w=C[0],S=C[1],I=Object(c.useState)(""),N=Object(x.a)(I,2),R=N[0],D=N[1],k=Object(c.useState)(0),_=Object(x.a)(k,2),P=_[0],A=_[1],L=Object(c.useState)(0),U=Object(x.a)(L,2),z=U[0],G=U[1];return Object(r.jsx)("div",{children:Object(r.jsx)(T.a,{defaultActiveKey:"1",tabPosition:n.width>850?"left":"top",size:"large",tabBarExtraContent:Object(r.jsxs)(m.a,{children:[Object(r.jsx)(E.a,{type:"primary",size:"large",icon:Object(r.jsx)(M.a,{}),onClick:function(){l(!0)},children:n.width>850?"Add Item":""}),Object(r.jsx)(q.a,{title:"Add new item...",visible:u,onOk:function(){p(!0),Object(j.a)(o.a.mark((function t(){var n,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n={name:w,store:R,deliveryESTDate:P,price:z},t.next=4,fetch("/api/v1/items",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(e){return e.json()}));case 4:return t.next=6,fetch("/api/v1/items").then((function(e){return e.json()}));case 6:r=t.sent,e(O(r)),l(!1),p(!1),y.b.success("Item added successfully!"),t.next=16;break;case 13:throw t.prev=13,t.t0=t.catch(0),new Error(t.t0);case 16:case"end":return t.stop()}}),t,null,[[0,13]])})))()},confirmLoading:f,onCancel:function(){l(!1)},children:Object(r.jsxs)(K.a,Object(v.a)(Object(v.a)({},ee),{},{name:"basic",children:[Object(r.jsx)(K.a.Item,{label:"Store",name:"store",rules:[{required:!0,message:"Please enter store name!"}],children:Object(r.jsx)(V.a,{options:a,onChange:function(e){return D(e)},filterOption:function(e,t){return-1!==t.value.toUpperCase().indexOf(e.toUpperCase())}})}),Object(r.jsx)(K.a.Item,{label:"Item",name:"item",rules:[{required:!0,message:"Please enter item name!"}],children:Object(r.jsx)(W.a,{onChange:function(e){return S(e.target.value)}})}),Object(r.jsxs)(K.a.Item,{label:"Price",name:"price",rules:[{required:!0,message:"Please enter price!"}],children:[Object(r.jsx)(Z.a,{onChange:function(e){return G(parseFloat(e))}}),Object(r.jsx)($,{strong:!0,children:" USD"})]}),Object(r.jsx)(K.a.Item,{label:"Estimated Date",name:"date",rules:[{required:!0,message:"Please pick date!"}],children:Object(r.jsx)(Q.a,{onChange:function(e,t){return A(Date.parse(t))}})})]}))})]}),children:t&&t.map((function(e){return Object(r.jsx)(X,{tab:"".concat(e.store),className:"list-class",children:e.items&&e.items.map((function(t){return Object(r.jsx)(F,{itemData:t,storeName:e.store},t.id)}))},e.store)}))})})},ne=m.a.Paragraph,re=m.a.Text;var ce=function(e){var t=e.storeData,n=Object(b.c)((function(e){return e.currencyReducer.usingCurrency}));return Object(r.jsx)("div",{className:"card-margin",children:Object(r.jsxs)(g.a,{title:t.store,className:"card-class",children:[Object(r.jsxs)(ne,{children:["You have ",Object(r.jsx)(re,{strong:!0,children:t.items.length})," pending items in this store."]}),Object(r.jsxs)(ne,{children:["Total price:"," ",Object(r.jsxs)(re,{strong:!0,children:[(t.items.reduce((function(e,t){return e+t.price}),0)*n.value).toFixed(2)," ",n.sign]})]})]})})};var ae=function(){var e=Object(b.c)((function(e){return e.mainReducer.itemList}));return Object(r.jsx)("div",{className:"list-class",children:e.map((function(e){return Object(r.jsx)(ce,{storeData:e},e.store)}))})},ie=T.a.TabPane,se=R.a.Option,ue=m.a.Text;var oe=function(){var e=Object(b.b)(),t=Object(b.c)((function(e){return e.currencyReducer.currency})),n=Object(b.c)((function(e){return e.currencyReducer.time})),a=Object(b.c)((function(e){return e.mainReducer.screenSize})),i=Object(b.c)((function(e){return e.currencyReducer.usingCurrency}));return Object(c.useEffect)((function(){Object(j.a)(o.a.mark((function t(){var n,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("/api/v1/items").then((function(e){return e.json()}));case 3:n=t.sent,r=n.map((function(e){return{value:e.store}})),e(O(n)),e({type:"EDIT_OPTIONS",payload:r}),t.next=12;break;case 9:throw t.prev=9,t.t0=t.catch(0),new Error(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))()}),[e]),Object(r.jsx)("div",{className:"content-class",children:t&&Object(r.jsxs)(T.a,{tabBarExtraContent:Object(r.jsxs)(m.a,{children:[a.width>1e3?Object(r.jsx)(ue,{children:"Update currency every: "}):null,Object(r.jsxs)(R.a,{value:n,onChange:function(t){e(p(t))},children:[Object(r.jsx)(se,{value:1e4,children:"10 sec."},"1"),Object(r.jsx)(se,{value:3e4,children:"30 sec."},"2"),Object(r.jsx)(se,{value:6e4,children:"60 sec."},"3")]}),Object(r.jsx)(D.a,{type:"vertical"}),a.width>1e3?Object(r.jsx)(ue,{children:"Currency: "}):null,Object(r.jsx)(R.a,{value:i.sign,onChange:function(n){e(f({sign:n,value:t.rates[n]}))},children:Object.keys(t.rates).map((function(e){return Object(r.jsx)(se,{value:e,children:e},e)}))})]}),children:[Object(r.jsx)(ie,{tab:"Items",children:Object(r.jsx)(te,{})},"1"),Object(r.jsx)(ie,{tab:"Stores Information",children:Object(r.jsx)(ae,{})},"2")]})})};var je=function(){var e=Object(d.g)();return Object(c.useEffect)((function(){setTimeout((function(){e.push("/")}),2e3)}),[e]),Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"404 :("}),Object(r.jsx)("div",{children:"this page does not exit. You will redirect to home page soon..."})]})},le=n(355),de=n(361),be=n(362),Oe=m.a.Title;var he=function(){var e=Object(b.b)(),t=Object(b.c)((function(e){return e.antdReducer.currentTab}));return Object(r.jsxs)("div",{className:"navbar",children:[Object(r.jsx)(Oe,{children:"Items Tracker"}),Object(r.jsxs)(le.a,{mode:"horizontal",onClick:function(t){return e(function(e){return{type:"CHANGE_TAB",payload:e}}(t.key))},selectedKeys:t,children:[Object(r.jsx)(le.a.Item,{icon:Object(r.jsx)(de.a,{}),children:Object(r.jsx)(l.b,{to:"/list",children:"List"})},"list"),Object(r.jsx)(le.a.Item,{icon:Object(r.jsx)(be.a,{}),children:Object(r.jsx)(l.b,{to:"/received",children:"Received"})},"received")]})]})};n(345);var fe=function(){var e=Object(b.b)(),t=Object(b.c)((function(e){return e.currencyReducer.currency})),n=Object(b.c)((function(e){return e.currencyReducer.time})),a=Object(c.useCallback)((function(e){var t=0;if(0===e.length)return t;for(var n=0;n<e.length;n++){t=(t<<5)-t+e.charCodeAt(n),t&=t}return t}),[]);return Object(c.useEffect)((function(){var r=function(){var n=Object(j.a)(o.a.mark((function n(){var r;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("https://api.exchangeratesapi.io/latest?base=USD").then((function(e){return e.json()}));case 3:r=n.sent,a(JSON.stringify(t))!==a(JSON.stringify(r))&&e({type:"UPDATE_CURRENCY",payload:r}),n.next=10;break;case 7:throw n.prev=7,n.t0=n.catch(0),new Error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();r();var c=setInterval((function(){return r()}),n);return function(){clearInterval(c)}}),[n,t,e,a]),Object(c.useEffect)((function(){window.addEventListener("resize",(function(){e({type:"SCREEN_SIZE_CHANGES",payload:{height:window.innerHeight,width:window.innerWidth}})}))})),Object(r.jsx)("div",{className:"App",children:Object(r.jsx)(H,{children:Object(r.jsxs)(l.a,{children:[Object(r.jsx)(he,{}),Object(r.jsxs)(d.d,{children:[Object(r.jsx)(d.b,{path:"/list",children:Object(r.jsx)(oe,{})}),Object(r.jsx)(d.b,{path:"/received",children:Object(r.jsx)(A,{})}),Object(r.jsx)(d.a,{exact:!0,from:"/",to:"/list"}),Object(r.jsx)(d.b,{children:Object(r.jsx)(je,{})})]})]})})})},pe=n(87),ve={itemList:[],receivedList:[],screenSize:{width:window.innerWidth,height:window.innerHeight}};var xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"EDIT_ITEM_LIST":return Object(v.a)(Object(v.a)({},e),{},{itemList:t.payload});case"EDIT_RECEIVED_LIST":return Object(v.a)(Object(v.a)({},e),{},{receivedList:t.payload});case"SCREEN_SIZE_CHANGES":return Object(v.a)(Object(v.a)({},e),{},{screenSize:t.payload});default:return e}},me={currentTab:"list",options:[]};var ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_TAB":return Object(v.a)(Object(v.a)({},e),{},{currentTab:t.payload});case"EDIT_OPTIONS":return Object(v.a)(Object(v.a)({},e),{},{options:t.payload});default:return e}},ge={currency:0,usingCurrency:{sign:"USD",value:1},time:1e4};var Ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_CURRENCY":return Object(v.a)(Object(v.a)({},e),{},{currency:t.payload});case"CHANGE_USING_CURRENCY":return Object(v.a)(Object(v.a)({},e),{},{usingCurrency:t.payload});case"CHANGE_TIME":return Object(v.a)(Object(v.a)({},e),{},{time:t.payload});default:return e}},Ce=Object(pe.b)({mainReducer:xe,antdReducer:ye,currencyReducer:Ee}),we=(n(346),Object(pe.c)(Ce));s.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(b.a,{store:we,children:Object(r.jsx)(fe,{})})}),document.getElementById("root"))}},[[347,1,2]]]);
//# sourceMappingURL=main.830d8287.chunk.js.map