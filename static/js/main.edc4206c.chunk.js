(this["webpackJsonpstudierendenfutter-admin-panel"]=this["webpackJsonpstudierendenfutter-admin-panel"]||[]).push([[0],{157:function(e,t,n){e.exports=n(191)},186:function(e,t,n){},187:function(e,t,n){},190:function(e,t,n){},191:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(58),u=n.n(c),s=n(24),l=n(12),i=n(9),o=n(3),p=n.n(o),m=n(7),f=n(43),d=n(44),v=n(207),b=n(203),h=n(209),E=n(206),y=n(36),O=n.n(y),j={BACKEND_URL:"https://api.studierendenfutter.de"},w=j.BACKEND_URL+"/auth/login";function x(e){return g.apply(this,arguments)}function g(){return(g=Object(m.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.post(w,t);case 3:n=e.sent,window.localStorage.setItem("authToken",JSON.stringify({token:n.data.token})),e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",{});case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function k(){var e=Object(a.useState)({password:""}),t=Object(i.a)(e,2),n=t[0],c=t[1],u=function(){var e=Object(m.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(n);case 2:window.location.reload();case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement(v.a,null,r.a.createElement(b.a,null,r.a.createElement(h.a,null,"Login"),r.a.createElement(b.a.Input,{label:"Password",type:"password",value:n.password,name:"password",onChange:function(e){var t=e.target,a=t.value,r=t.name;c(Object(d.a)({},n,Object(f.a)({},r,a)))}}),r.a.createElement(E.a,{type:"button",onClick:u},"Login"))))}function C(){return r.a.createElement("div",null,r.a.createElement(k,null))}function N(){return{authorization:"Bearer "+JSON.parse(window.localStorage.getItem("authToken")).token}}function S(e){return _.apply(this,arguments)}function _(){return(_=Object(m.a)(p.a.mark((function e(t){var n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=N(),e.prev=1,e.next=4,O.a.get(t,{headers:n});case 4:return a=e.sent,e.abrupt("return",a.data);case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}var A=j.BACKEND_URL+"/stats";function D(){return B.apply(this,arguments)}function B(){return(B=Object(m.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S(A);case 3:return t=e.sent,e.abrupt("return",t);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",null);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}var M=n(119),U=n.n(M);function L(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date,t=e.getFullYear()+"-"+(e.getMonth()+1<10?"0":"")+(e.getMonth()+1)+"-"+(e.getDate()<10?"0":"")+e.getDate();return t}n(186);function R(){var e=Object(a.useState)(),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){function e(){return(e=Object(m.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D();case 2:t=e.sent,c(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),n?r.a.createElement("div",null,r.a.createElement("h1",{className:"sf-stats-title"},"Admin Panel"),r.a.createElement("div",{className:"sf-stats-big-numbers"},r.a.createElement("div",{className:"sf-stats-big-number"},r.a.createElement("span",{className:"sf-stats-big-number-number"},n.activeUsers),r.a.createElement("span",null,"active users")),r.a.createElement("div",{className:"sf-stats-big-number"},r.a.createElement("span",{className:"sf-stats-big-number-number"},n.emailsSend),r.a.createElement("span",null,"emails send")),r.a.createElement("div",{className:"sf-stats-big-number"},r.a.createElement("span",{className:"sf-stats-big-number-number"},n.emailsOpened),r.a.createElement("span",null,"emails opened")),r.a.createElement("div",{className:"sf-stats-big-number"},r.a.createElement("span",{className:"sf-stats-big-number-number"},n.emailsSendToday),r.a.createElement("span",null,"send today")),r.a.createElement("div",{className:"sf-stats-big-number"},r.a.createElement("span",{className:"sf-stats-big-number-number"},n.emailsOpenedToday),r.a.createElement("span",null,"opened today")),r.a.createElement("div",{className:"sf-stats-big-number"},r.a.createElement("span",{className:"sf-stats-big-number-number"},(n.emailsOpenedToday/n.emailsSendToday*100).toFixed(2)),r.a.createElement("span",null,"% opened today"))),r.a.createElement("div",null,r.a.createElement("h2",{className:"sf-stats-heading"},"Emails send per day"),r.a.createElement(U.a,{options:{chart:{id:"sf-email-chart"},xaxis:{categories:n?n.emailsSendDaily.map((function(e){return L(new Date(e.date))})):[]}},series:[{name:"emails opened",data:n?n.emailsOpenedDaily.map((function(e){return e.count})):[]},{name:"emails send",data:n?n.emailsSendDaily.map((function(e){return e.count})):[]}],type:"line",width:"100%",height:320})),r.a.createElement("div",null,r.a.createElement("h2",{className:"sf-stats-heading"},"New Signups"),r.a.createElement(U.a,{options:{chart:{id:"sf-user-chart"},xaxis:{categories:n?n.userSignupsPerMonth.map((function(e){return e.year+"-"+e.month})):[]}},series:[{name:"signups",data:n?n.userSignupsPerMonth.map((function(e){return e.count})):[]}],type:"line",width:"100%",height:320}))):null}function I(){return function(e,t){var n=Object(a.useState)((function(){try{var n=window.localStorage.getItem(e);return n?JSON.parse(n):t}catch(a){return console.log(a),t}})),r=Object(i.a)(n,2),c=r[0],u=r[1];return[c,function(t){try{var n=t instanceof Function?t(c):t;u(n),window.localStorage.setItem(e,JSON.stringify(n))}catch(a){console.log(a)}}]}("authToken")}function K(){var e=I();return Object(i.a)(e,1)[0]?r.a.createElement(R,null):r.a.createElement(C,null)}var P=n(83);n(187);function T(e){var t=e.children,n=I(),c=Object(i.a)(n,1)[0],u=Object(a.useState)(!1),l=Object(i.a)(u,2),o=l[0],p=l[1];return r.a.createElement("div",null,r.a.createElement("div",{className:"sf-admin-topbar"},r.a.createElement("div",null,r.a.createElement("h1",null,"Admin Panel")),c&&r.a.createElement(P.a,{className:"sf-admin-sidebar-button",onClick:function(){return p(!o)},name:"sidebar",size:"large"})),c&&r.a.createElement("div",{className:"sf-admin-sidebar ".concat(o?"sf-admin-sidebar-opened":"")},r.a.createElement(s.b,{as:"span",to:"/stats"},"Stats"),r.a.createElement(s.b,{as:"span",to:"/cities"},"Cities"),r.a.createElement(s.b,{as:"span",to:"/users"},"Users"),r.a.createElement(s.b,{as:"span",to:"/canteens"},"Canteens")),r.a.createElement("div",{className:"sf-admin-content"},t))}var H=n(205);function J(e){var t=e.columnNames,n=void 0===t?[]:t,a=e.content,c=void 0===a?[]:a;return r.a.createElement(H.a,{celled:!0},r.a.createElement(H.a.Header,null,r.a.createElement(H.a.Row,null,n.map((function(e){return r.a.createElement(H.a.HeaderCell,{key:e},e)})))),r.a.createElement(H.a.Body,null,c.map((function(e){return r.a.createElement(H.a.Row,{key:e[0]},e.map((function(e){return r.a.createElement(H.a.Cell,null,e)})))}))))}var z=j.BACKEND_URL+"/cities";function F(){return G.apply(this,arguments)}function G(){return(G=Object(m.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S(z);case 3:return t=e.sent,e.abrupt("return",t.cities);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",null);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function Y(e,t){return q.apply(this,arguments)}function q(){return(q=Object(m.a)(p.a.mark((function e(t,n){var a,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=N(),e.prev=1,e.next=4,O.a.put(t,n,{headers:a});case 4:return r=e.sent,e.abrupt("return",r.data);case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function Q(e){Y(j.BACKEND_URL+"/cities/"+e.id,e)}var V=n(210),W=n(204);function X(){var e=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],r=t[1];function c(){return u.apply(this,arguments)}function u(){return(u=Object(m.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F();case 2:t=e.sent,r(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function s(){return(s=Object(m.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q(t);case 2:c();case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){c()}),[]),[n,function(e){return s.apply(this,arguments)}]}(),t=Object(i.a)(e,2),n=t[0],c=t[1],u=Object(a.useState)(),l=Object(i.a)(u,2),o=l[0],f=l[1];return r.a.createElement("div",null,r.a.createElement(J,{columnNames:["ID","Name","On Semester Break","Actions"],content:n.map((function(e){return[e.id,e.city,r.a.createElement(V.a,{checked:!!e.is_semester_break,toggle:!0,onClick:function(){f(Object(d.a)({},e,{is_semester_break:!e.is_semester_break}))}}),r.a.createElement(E.a,{as:s.b,to:"/cities/".concat(e.id,"/meals"),icon:"food",primary:!0})]}))}),r.a.createElement(W.a,{open:!!o,onClose:function(){return f()},basic:!0},r.a.createElement(h.a,{icon:!0},r.a.createElement(P.a,{name:"pencil alternate"}),"Update City"),r.a.createElement(W.a.Content,null,r.a.createElement("p",{style:{textAlign:"center"}},"Are you sure you want to update"," ",o?o.city:"")),r.a.createElement(W.a.Actions,null,r.a.createElement(E.a,{basic:!0,color:"red",inverted:!0,onClick:function(){return f()}},r.a.createElement(P.a,{name:"remove"})," No"),r.a.createElement(E.a,{color:"green",inverted:!0,onClick:function(){c(o),f()}},r.a.createElement(P.a,{name:"checkmark"})," Yes"))))}function Z(e){return $.apply(this,arguments)}function $(){return($=Object(m.a)(p.a.mark((function e(t){var n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=j.BACKEND_URL+"/cities/"+t+"/meals",e.prev=1,e.next=4,S(n);case 4:return a=e.sent,e.abrupt("return",a.meals);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",null);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function ee(e){var t=Object(a.useState)([]),n=Object(i.a)(t,2),r=n[0],c=n[1];function u(){return(u=Object(m.a)(p.a.mark((function t(){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Z(e);case 2:n=t.sent,c(n);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(a.useEffect)((function(){!function(){u.apply(this,arguments)}()}),[]),[r]}function te(e){var t=e.meals;return t?r.a.createElement("div",null,r.a.createElement(E.a,{icon:"add",as:s.b,to:"/meals/create",positive:!0,content:"Add Meal"}),r.a.createElement(J,{columnNames:["Id","Canteen","Meal Name","Prices","Types","Date","Action"],content:t.reduce((function(e,t){return e.concat(t.meals.map((function(e){return[e.id,t.name,e.name,e.prices.map((function(e){return r.a.createElement("span",null,e.price,"/")})),e.types.map((function(e){return r.a.createElement("img",{style:{height:"15px"},alt:e.name,src:e.icon_url})})),e.date,r.a.createElement(E.a,{as:s.b,to:"/meals/".concat(e.id),icon:"edit",primary:!0})]})))}),[])})):null}function ne(){var e=ee(Object(l.g)().cityId),t=Object(i.a)(e,1)[0];return t?r.a.createElement(te,{meals:t}):null}n(189),n(190);var ae=j.BACKEND_URL+"/users";function re(){return ce.apply(this,arguments)}function ce(){return(ce=Object(m.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S(ae);case 3:return t=e.sent,e.abrupt("return",t.users);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",null);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function ue(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],r=t[1];function c(){return(c=Object(m.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,re();case 2:t=e.sent,r(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){!function(){c.apply(this,arguments)}()}),[]),[n]}function se(){var e=ue(),t=Object(i.a)(e,1)[0];return r.a.createElement(J,{columnNames:["ID","Email","Confirmed"],content:t.map((function(e){return[e.id,e.email,""+!!e.confirmed]}))})}function le(e){var t=Object.keys(e).map((function(t){return t+"="+e[t]})).join("&");return t?"?"+t:""}function ie(e){var t=le(e);return S(j.BACKEND_URL+"/canteens"+t)}function oe(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(a.useState)([]),n=Object(i.a)(t,2),r=n[0],c=n[1];return Object(a.useEffect)((function(){function t(){return(t=Object(m.a)(p.a.mark((function t(){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ie(e);case 2:n=t.sent,c(n);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),r}function pe(){var e=oe({city:"M\xfcnster"});return e?r.a.createElement(J,{columnNames:["ID","Name","Address","City","Type","Actions"],content:e.map((function(e){return[e.id,e.name,e.address,e.city,e.type,r.a.createElement("div",null,r.a.createElement(E.a,{as:s.b,to:"/canteens/".concat(e.id,"/meals"),icon:"food",primary:!0}))]}))}):null}function me(e,t){var n=le(t);return S(j.BACKEND_URL+"/canteens/"+e+"/meals"+n)}function fe(){var e=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object(a.useState)(),r=Object(i.a)(n,2),c=r[0],u=r[1];return Object(a.useEffect)((function(){function n(){return(n=Object(m.a)(p.a.mark((function n(){var a;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,me(e,t);case 2:a=n.sent,u(a);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),[c]}(Object(l.g)().canteenId),t=Object(i.a)(e,1)[0];return r.a.createElement(te,{meals:t})}function de(e){var t=e.meal,n=e.setMeal,c=Object(a.useState)(t),u=Object(i.a)(c,2),s=u[0],l=u[1],o=oe();if(Object(a.useEffect)((function(){l(t)}),[t]),!s)return null;var p=function(){n(s)},m=function(e){var n=e.target,a=n.name,r=n.value;l(Object(d.a)({},t,Object(f.a)({},a,r)))};return r.a.createElement(b.a,null,r.a.createElement(b.a.Dropdown,{placeholder:"Select Canteen",fluid:!0,search:!0,selection:!0,value:s.canteen_id,onChange:function(e,t){var n=t.value;return m({target:{name:"canteen_id",value:n}})},onBlur:p,label:"Canteen",options:o.map((function(e){return{key:e.id,value:e.id,text:e.name}}))}),r.a.createElement(b.a.Input,{value:s.name,label:"Name",name:"name",onChange:m,onBlur:p}),r.a.createElement(b.a.Input,{value:s.date,label:"Date",name:"date",onChange:m,onBlur:p}))}function ve(e,t){return be.apply(this,arguments)}function be(){return(be=Object(m.a)(p.a.mark((function e(t,n){var a,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=N(),e.prev=1,console.log(n),e.next=5,O.a.post(t,n,{headers:a});case 5:return r=e.sent,e.abrupt("return",r.data);case 9:return e.prev=9,e.t0=e.catch(1),console.log(e.t0),e.abrupt("return",{});case 13:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}var he=j.BACKEND_URL+"/meals";function Ee(e){return ye.apply(this,arguments)}function ye(){return(ye=Object(m.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ve(he,t);case 3:return n=e.sent,e.abrupt("return",n.meal);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",null);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function Oe(){var e=Object(l.f)(),t=Object(a.useState)({canteen_id:0,name:"",date:L()}),n=Object(i.a)(t,2),c=n[0],u=n[1];console.log(c);var s=function(){var t=Object(m.a)(p.a.mark((function t(){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(c),t.next=3,Ee(c);case 3:n=t.sent,console.log(n),e.push("/meals/"+n.id);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement(h.a,null,"Create Meal"),r.a.createElement(de,{meal:c,setMeal:u}),r.a.createElement("br",null),r.a.createElement(E.a,{icon:"send",positive:!0,onClick:s},"Create"))}var je=n(202),we=j.BACKEND_URL+"/userCategories";function xe(){return ge.apply(this,arguments)}function ge(){return(ge=Object(m.a)(p.a.mark((function e(){var t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S(we);case 2:return t=e.sent,n=t,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ke(e){var t=e.mealPrice,n=e.setMealPrice,c=Object(a.useState)(t),u=Object(i.a)(c,2),s=u[0],l=u[1],o=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],r=t[1];return console.log(n),Object(a.useEffect)((function(){function e(){return(e=Object(m.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,xe();case 2:t=e.sent,r(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),n}();if(Object(a.useEffect)((function(){l(t)}),[t]),!s)return null;var v=function(){n(s)},h=function(e){var n=e.target,a=n.name,r=n.value;l(Object(d.a)({},t,Object(f.a)({},a,r)))};return r.a.createElement(b.a,null,r.a.createElement(b.a.Dropdown,{placeholder:"Select User Category",fluid:!0,search:!0,selection:!0,value:s.user_category_id,onChange:function(e,t){var n=t.value;return h({target:{name:"user_category_id",value:n}})},onBlur:v,label:"User Group",options:o.map((function(e){return{key:e.id,value:e.id,text:e.name}}))}),r.a.createElement(b.a.Input,{value:s.price,label:"Price",name:"price",onChange:h,onBlur:v,icon:"euro"}))}function Ce(e){return Ne.apply(this,arguments)}function Ne(){return(Ne=Object(m.a)(p.a.mark((function e(t){var n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=j.BACKEND_URL+"/meals/"+t,e.prev=1,e.next=4,S(n);case 4:return a=e.sent,e.abrupt("return",a.meal);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",null);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function Se(e){return Y(j.BACKEND_URL+"/meals/"+e.id,e)}function _e(e){return Ae.apply(this,arguments)}function Ae(){return(Ae=Object(m.a)(p.a.mark((function e(t){var n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=j.BACKEND_URL+"/meals/"+t+"/types",e.prev=1,e.next=4,S(n);case 4:return a=e.sent,console.log(a),e.abrupt("return",a.mealHasMealTypes);case 9:return e.prev=9,e.t0=e.catch(1),e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}var De=j.BACKEND_URL+"/mealHasMealTypes";function Be(e){return Me.apply(this,arguments)}function Me(){return(Me=Object(m.a)(p.a.mark((function e(t){var n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log(t),e.next=4,ve(De,t);case 4:return n=e.sent,a=n.data.mealMealHasMealType,e.abrupt("return",a);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function Ue(e,t){return Le.apply(this,arguments)}function Le(){return(Le=Object(m.a)(p.a.mark((function e(t,n){var a,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=N(),e.prev=1,e.next=4,O.a.delete(t,{headers:a});case 4:return r=e.sent,e.abrupt("return",r.data);case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function Re(e,t){return Ue(j.BACKEND_URL+"/mealHasMealTypes/"+e,{code:t})}function Ie(e){return Ke.apply(this,arguments)}function Ke(){return(Ke=Object(m.a)(p.a.mark((function e(t){var n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=j.BACKEND_URL+"/meals/"+t+"/prices",e.prev=1,e.next=4,S(n);case 4:return a=e.sent,e.abrupt("return",a.mealPrices);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",null);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}var Pe=j.BACKEND_URL+"/userCategoryMealPrices";function Te(e){return He.apply(this,arguments)}function He(){return(He=Object(m.a)(p.a.mark((function e(t){var n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ve(Pe,t);case 3:return n=e.sent,a=n.data.userCategoryMealPrice,e.abrupt("return",a);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",null);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function Je(e,t){return Ue(j.BACKEND_URL+"/userCategoryMealPrices/"+e,{code:t})}function ze(){return S(j.BACKEND_URL+"/mealTypes")}function Fe(){var e=Object(l.g)().mealId,t={price:"3.00",meal_id:e,user_category_id:0},n=function(e){var t=Object(a.useState)(),n=Object(i.a)(t,2),r=n[0],c=n[1];function u(){return s.apply(this,arguments)}function s(){return(s=Object(m.a)(p.a.mark((function t(){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Ce(e);case 2:n=t.sent,c(n);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(){return(l=Object(m.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Se(t);case 2:return e.next=4,u();case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){u()}),[]),[r,function(e){return l.apply(this,arguments)}]}(e),c=Object(i.a)(n,2),u=c[0],s=c[1],o=function(e){var t=Object(a.useState)([]),n=Object(i.a)(t,2),r=n[0],c=n[1];function u(){return s.apply(this,arguments)}function s(){return(s=Object(m.a)(p.a.mark((function t(){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Ie(e);case 2:n=t.sent,c(n);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(){return(l=Object(m.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Te(t);case 2:return e.next=4,u();case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function o(){return(o=Object(m.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Je(t);case 2:return e.next=4,u();case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){u()}),[]),[r,function(e){return l.apply(this,arguments)},function(e){return o.apply(this,arguments)}]}(e),f=Object(i.a)(o,3),d=f[0],b=f[1],y=f[2],O=function(e){var t=Object(a.useState)([]),n=Object(i.a)(t,2),r=n[0],c=n[1];function u(){return s.apply(this,arguments)}function s(){return(s=Object(m.a)(p.a.mark((function t(){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_e(e);case 2:n=t.sent,c(n);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(){return(l=Object(m.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Be(t);case 2:return e.next=4,u();case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function o(){return(o=Object(m.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Re(t);case 2:return e.next=4,u();case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){u()}),[]),[r,function(e){return l.apply(this,arguments)},function(e){return o.apply(this,arguments)}]}(e),j=Object(i.a)(O,3),w=j[0],x=j[1],g=j[2],k=Object(a.useState)(0),C=Object(i.a)(k,2),N=C[0],S=C[1],_=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){function e(){return(e=Object(m.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ze();case 2:t=e.sent,r(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),n}(),A=Object(a.useState)(t),D=Object(i.a)(A,2),B=D[0],M=D[1];return r.a.createElement("div",null,r.a.createElement(h.a,null,"Meal ",e),r.a.createElement(de,{meal:u,setMeal:s}),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement(h.a,null,"Prices "),r.a.createElement(J,{columnNames:["Price","Group","Action"],content:d.map((function(e){return[e.price,e.name,r.a.createElement(E.a,{icon:"trash",negative:!0,onClick:function(){return y(e.id)}})]}))}),r.a.createElement("div",null,r.a.createElement(v.a,null,r.a.createElement(h.a,{size:"small"},"Add Price"),r.a.createElement(ke,{mealPrice:B,setMealPrice:M}),r.a.createElement("br",null),r.a.createElement(E.a,{content:"Add ",positive:!0,onClick:function(){b(B),M(t)}})))),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement(h.a,null,"Categories"),r.a.createElement(J,{columnNames:["Name","Image","Action"],content:w.map((function(e){return[e.name,r.a.createElement("img",{alt:"name",src:e.icon_url,style:{width:"16px"}}),r.a.createElement(E.a,{icon:"trash",negative:!0,onClick:function(){return g(e.id)}})]}))}),r.a.createElement("div",null,r.a.createElement(v.a,null,r.a.createElement(h.a,{size:"small"},"Add Meal Type"),r.a.createElement(je.a,{placeholder:"Select Meal Type",fluid:!0,search:!0,selection:!0,value:N,onChange:function(e,t){var n=t.value;return S(n)},label:"Canteen",options:_.map((function(e){return{key:e.id,value:e.id,text:e.name}}))}),r.a.createElement("br",null),r.a.createElement(E.a,{positive:!0,content:"Add",onClick:function(){return x({meal_id:e,meal_type_id:N})}})))))}u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(s.a,null,r.a.createElement(T,null,r.a.createElement(l.c,null,r.a.createElement(l.a,{exact:!0,path:"/"},r.a.createElement(K,null)),r.a.createElement(l.a,{exact:!0,path:"/stats"},r.a.createElement(R,null)),r.a.createElement(l.a,{exact:!0,path:"/canteens"},r.a.createElement(pe,null)),r.a.createElement(l.a,{exact:!0,path:"/canteens/:canteenId/meals"},r.a.createElement(fe,null)),r.a.createElement(l.a,{exact:!0,path:"/cities"},r.a.createElement(X,null)),r.a.createElement(l.a,{exact:!0,path:"/cities/:cityId/meals"},r.a.createElement(ne,null)),r.a.createElement(l.a,{exact:!0,path:"/meals/create"},r.a.createElement(Oe,null)),r.a.createElement(l.a,{exact:!0,path:"/meals/:mealId"},r.a.createElement(Fe,null)),r.a.createElement(l.a,{exact:!0,path:"/users"},r.a.createElement(se,null)))))),document.getElementById("root"))}},[[157,1,2]]]);
//# sourceMappingURL=main.edc4206c.chunk.js.map