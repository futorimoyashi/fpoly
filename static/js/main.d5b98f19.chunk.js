(this.webpackJsonpfpoly=this.webpackJsonpfpoly||[]).push([[0],{41:function(e,t,a){e.exports=a(78)},46:function(e,t,a){},47:function(e,t,a){},78:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(15),c=a.n(r),o=(a(46),a(47),a(13)),m=a(7),u=a(12),s=a(79),i=a(80),E=a(81),f=a(98),h=a(82),p=a(83),d=a(84),b=a(36),v=a(37),g=a(16),O=a(40),j=a(39),k=a(14),x=a.n(k),S=l.a.createContext(),w=function(e){Object(O.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(b.a)(this,a),(n=t.call(this,e)).state={isLogin:"Nah"},n.check=n.check.bind(Object(g.a)(n)),n}return Object(v.a)(a,[{key:"check",value:function(e,t){var a=this;if(e.length>0&&t.length>0){var n="https://quiz-online-fpt.herokuapp.com/users/"+e;x.a.get(n).then((function(e){t===e.data.password&&a.setState({isLogin:"Ok"})}))}}},{key:"render",value:function(){return l.a.createElement(S.Provider,{value:{isLogin:this.state.isLogin,check:this.check}},this.props.children)}}]),a}(n.Component),C=function(e){var t=Object(n.useState)(!1),a=Object(u.a)(t,2),r=a[0],c=a[1],m=Object(n.useContext)(S).isLogin;return l.a.createElement("div",null,l.a.createElement(s.a,{color:"light",light:!0,expand:"md"},l.a.createElement(i.a,{href:"/"},"Fpoly"),l.a.createElement(E.a,{onClick:function(){return c(!r)}}),l.a.createElement(f.a,{isOpen:r,navbar:!0},l.a.createElement(h.a,{className:"mr-auto",navbar:!0},l.a.createElement(p.a,null,l.a.createElement(o.b,{to:"/home"},"Home"))),l.a.createElement(d.a,null,l.a.createElement(o.b,{to:"/login"},"Login")),l.a.createElement(d.a,{href:"/login"},"isLogin ",m))))},N=a(85),y=a(86),L=a(87),z=a(88),D=a(89),P=a(90),q=function(e){var t=Object(n.useState)(""),a=Object(u.a)(t,2),r=a[0],c=a[1],o=Object(n.useState)(""),m=Object(u.a)(o,2),s=m[0],i=m[1],E=Object(n.useContext)(S).check;return l.a.createElement(N.a,{md:{size:8,offset:2}},l.a.createElement(y.a,null,l.a.createElement(L.a,null,l.a.createElement(z.a,{for:"exampleEmail",className:"float-left"},"Email"),l.a.createElement(D.a,{type:"email",name:"email",id:"exampleEmail",placeholder:"user",value:r,onChange:function(e){return c(e.target.value)}})),l.a.createElement(L.a,null,l.a.createElement(z.a,{for:"examplePassword",className:"float-left"},"Password"),l.a.createElement(D.a,{type:"password",name:"password",id:"examplePassword",placeholder:"password",value:s,onChange:function(e){return i(e.target.value)}})),l.a.createElement(P.a,{onClick:function(e){E(r,s),e.preventDefault()}},"Submit")))},B=a(91),H=a(92),I=a(93),J=a(94),W=a(95),A=a(96);function F(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),m=Object(u.a)(c,2),s=m[0],i=m[1],E="https://quiz-online-fpt.herokuapp.com/semesters";Object(n.useEffect)((function(){x.a.get(E).then((function(e){return r(e.data)}))}),[s]);return l.a.createElement("div",null,l.a.createElement(B.a,null,l.a.createElement(H.a,null,l.a.createElement("a",{href:"#"},"Home")),l.a.createElement(H.a,{active:!0},"List Semester")),l.a.createElement("h2",{className:"text-center"},"Create New Semester"),l.a.createElement(N.a,{md:{size:8,offset:2}},l.a.createElement(y.a,null,l.a.createElement(L.a,null,l.a.createElement(z.a,{for:"exampleEmail",className:"float-left"},"Semester Code"),l.a.createElement(D.a,{type:"text",name:"name",id:"exampleEmail",placeholder:"semester code",value:s,onChange:function(e){return i(e.target.value)}})),l.a.createElement(P.a,{onClick:function(e){!function(e){x.a.post(E,{name:e}).then((function(e){return i("")}))}(s),e.preventDefault()}},"Submit"))),l.a.createElement("hr",null),l.a.createElement("h2",{className:"text-center"},"List Semesters"),l.a.createElement(N.a,null,a&&a.map((function(e){return l.a.createElement(I.a,{md:{size:2,offset:1}},l.a.createElement(J.a,null,l.a.createElement(W.a,{className:"text-center"},"Semester"),l.a.createElement(A.a,null,e.name),l.a.createElement(o.b,{to:"/room/"+e.id},"Rooms")))}))))}var M=a(97);function R(e){var t=Object(n.useState)(""),a=Object(u.a)(t,2),r=a[0],c=a[1],m=Object(n.useState)(""),s=Object(u.a)(m,2),i=s[0],E=s[1],f=e.match.params.id,h="https://quiz-online-fpt.herokuapp.com/rooms/";Object(n.useEffect)((function(){x.a.get(h+f).then((function(e){return c(e.data)})).catch((function(e){return console.log(e.message)}))}),[i]);return l.a.createElement("div",null,l.a.createElement(N.a,{md:{size:8,offset:2}},l.a.createElement(y.a,null,l.a.createElement(L.a,null,l.a.createElement(z.a,{for:"exampleEmail",className:"float-left"},"Class Code Name"),l.a.createElement(D.a,{type:"text",name:"name",id:"exampleEmail",placeholder:"class code name",value:i,onChange:function(e){return E(e.target.value)}})),l.a.createElement(P.a,{onClick:function(e){!function(e){x.a.post(h,{name:e}).then((function(e){return E("")}))}(i),e.preventDefault()}},"Submit"))),l.a.createElement("hr",null),l.a.createElement("h2",{className:"text-center"},"List Class"),l.a.createElement(N.a,{md:{size:10,offset:1}},l.a.createElement(M.a,null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"ID"),l.a.createElement("th",null,"Name"),l.a.createElement("th",{size:4},"\xa0"))),l.a.createElement("tbody",null,r&&r.map((function(e){return l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},e.id),l.a.createElement("td",null,e.name),l.a.createElement("td",null,l.a.createElement(o.b,{to:"/mark/"+e.id},"List Students")))}))))))}var $=function(){return l.a.createElement(w,null,l.a.createElement(o.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(C,null)),l.a.createElement(m.d,null,l.a.createElement(m.b,{path:"/login"},l.a.createElement(q,null)),l.a.createElement(m.b,{path:"/home"},l.a.createElement(F,null)),l.a.createElement(m.b,{path:"/room/:id",component:R}),l.a.createElement(m.a,{from:"/",to:"/login"}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(77);c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement($,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[41,1,2]]]);
//# sourceMappingURL=main.d5b98f19.chunk.js.map