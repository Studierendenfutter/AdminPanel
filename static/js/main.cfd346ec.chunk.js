(this["webpackJsonpstudierendenfutter-admin-panel"]=this["webpackJsonpstudierendenfutter-admin-panel"]||[]).push([[0],{157:function(e,t,n){e.exports=n(191)},186:function(e,t,n){},187:function(e,t,n){},190:function(e,t,n){},191:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(58),u=n.n(c),s=n(21),l=n(12),i=n(8),o=n(2),p=n.n(o),m=n(6),f=n(44),d=n(37),h=n(207),v=n(203),b=n(209),E=n(206),y=n(38),g=n.n(y),O={BACKEND_URL:"https://api.studierendenfutter.de"},w=O.BACKEND_URL+"/auth/login";function j(e){return x.apply(this,arguments)}function x(){return(x=Object(m.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.post(w,t);case 3:n=e.sent,window.localStorage.setItem("authToken",JSON.stringify({token:n.data.token})),e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",{});case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function k(){var e=Object(a.useState)({password:""}),t=Object(i.a)(e,2),n=t[0],c=t[1],u=function(){var e=Object(m.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j(n);case 2:window.location.reload();case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement(h.a,null,r.a.createElement(v.a,null,r.a.createElement(b.a,null,"Login"),r.a.createElement(v.a.Input,{label:"Password",type:"password",value:n.password,name:"password",onChange:function(e){var t=e.target,a=t.value,r=t.name;c(Object(d.a)({},n,Object(f.a)({},r,a)))}}),r.a.createElement(E.a,{type:"button",onClick:u},"Login"))))}function N(){return r.a.createElement("div",null,r.a.createElement(k,null))}function C(){return{authorization:"Bearer "+JSON.parse(window.localStorage.getItem("authToken")).token}}function D(e){401===e.status&&(window.localStorage.removeItem("authToken"),window.location.href="/")}function S(e){return _.apply(this,arguments)}function _(){return(_=Object(m.a)(p.a.mark((function e(t){var n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=C(),e.prev=1,e.next=4,g.a.get(t,{headers:n});case 4:return D(a=e.sent),e.abrupt("return",a.data);case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}var A=O.BACKEND_URL+"/stats";function B(){return M.apply(this,arguments)}function M(){return(M=Object(m.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S(A);case 3:return t=e.sent,e.abrupt("return",t);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",null);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}var R=n(86),U=n.n(R);function L(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date,t=e.getFullYear()+"-"+(e.getMonth()+1<10?"0":"")+(e.getMonth()+1)+"-"+(e.getDate()<10?"0":"")+e.getDate();return t}n(186);function K(){var e=Object(a.useState)(),t=Object(i.a)(e,2),n=t[0],c=t[1];if(Object(a.useEffect)((function(){function e(){return(e=Object(m.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B();case 2:t=e.sent,c(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),!n)return null;var u=n?n.emailsOpenedDaily.map((function(e){return L(new Date(e.date))})):[];return r.a.createElement("div",null,r.a.createElement("h1",{className:"sf-stats-title"},"Admin Panel"),r.a.createElement("div",{className:"sf-stats-big-numbers"},r.a.createElement("div",{className:"sf-stats-big-number"},r.a.createElement("span",{className:"sf-stats-big-number-number"},n.activeUsers),r.a.createElement("span",null,"active users")),r.a.createElement("div",{className:"sf-stats-big-number"},r.a.createElement("span",{className:"sf-stats-big-number-number"},n.emailsSend),r.a.createElement("span",null,"emails send")),r.a.createElement("div",{className:"sf-stats-big-number"},r.a.createElement("span",{className:"sf-stats-big-number-number"},n.emailsOpened),r.a.createElement("span",null,"emails opened")),r.a.createElement("div",{className:"sf-stats-big-number"},r.a.createElement("span",{className:"sf-stats-big-number-number"},n.lunchletterSend),r.a.createElement("span",null,"lunchletter send")),r.a.createElement("div",{className:"sf-stats-big-number"},r.a.createElement("span",{className:"sf-stats-big-number-number"},n.lunchletterOpened),r.a.createElement("span",null,"lunchletter opened")),r.a.createElement("div",{className:"sf-stats-big-number"},r.a.createElement("span",{className:"sf-stats-big-number-number"},n.emailsSendToday),r.a.createElement("span",null,"send today")),r.a.createElement("div",{className:"sf-stats-big-number"},r.a.createElement("span",{className:"sf-stats-big-number-number"},n.emailsOpenedToday),r.a.createElement("span",null,"opened today")),r.a.createElement("div",{className:"sf-stats-big-number"},r.a.createElement("span",{className:"sf-stats-big-number-number"},(n.emailsOpenedToday/n.emailsSendToday*100).toFixed(2)),r.a.createElement("span",null,"% opened today")),r.a.createElement("div",{className:"sf-stats-big-number"},r.a.createElement("span",{className:"sf-stats-big-number-number"},n.avgUserLifetime.toFixed(2).replace(".",",")),r.a.createElement("span",null,"avg user lifetime"))),r.a.createElement("div",null,r.a.createElement("h2",{className:"sf-stats-heading"},"Emails send per day"),r.a.createElement(U.a,{options:{chart:{id:"sf-email-chart"},stroke:{curve:"smooth"},xaxis:{categories:u}},series:[{name:"emails opened",data:n?n.emailsOpenedDaily.map((function(e){return e.count})):[]},{name:"emails send",data:n?n.emailsSendDaily.reduce((function(e,t){return console.log(e,t),u.includes(L(new Date(t.date)))?e.concat(t.count):e}),[]):[]}],type:"line",width:"100%",height:320})),r.a.createElement("div",null,r.a.createElement("h2",{className:"sf-stats-heading"},"User Signups/Deletions"),r.a.createElement(U.a,{options:{chart:{id:"sf-user-chart"},xaxis:{categories:n?n.userSignupsPerMonth.map((function(e){return e.year+"-"+e.month})):[]}},series:[{name:"signups",data:n?n.userSignupsPerMonth.map((function(e){return e.count})):[]},{name:"deletions",data:n?n.userSignupsPerMonth.map((function(e){var t=n.userDeletionsPerMonth.find((function(t){return e.year===t.year&&e.month===t.month}));return t?t.count:0})):[]}],type:"line",width:"100%",height:320})),r.a.createElement("div",null,r.a.createElement("h2",{className:"sf-stats-heading"},"Amount of users that opened x lunchletters over the last seven days"),r.a.createElement(U.a,{options:{chart:{id:"sf-user-chart"},xaxis:{categories:["4 weeks ago","3 weeks ago","2 weeks ago","1 week ago","This week"]}},series:[1,2,3,4,5,6].map((function(e){return{data:n.cohortAnalysis.map((function(t){return t[e]})),name:e}})),type:"line",width:"100%",height:320})),r.a.createElement("div",null,r.a.createElement("h2",{className:"sf-stats-heading"},"Percentage of users that opened x lunchletters over the last seven days"),r.a.createElement(U.a,{options:{chart:{id:"sf-user-chart"},xaxis:{categories:["4 weeks ago","3 weeks ago","2 weeks ago","1 week ago","This week"]}},series:[1,2,3,4,5,6].map((function(e){return{data:n.cohortAnalysis.map((function(t){return 0===t.total?0:Math.floor(t[e]/t.total*100)})),name:e}})),type:"line",width:"100%",height:320})))}function I(){return function(e,t){var n=Object(a.useState)((function(){try{var n=window.localStorage.getItem(e);return n?JSON.parse(n):t}catch(a){return console.log(a),t}})),r=Object(i.a)(n,2),c=r[0],u=r[1];return[c,function(t){try{var n=t instanceof Function?t(c):t;u(n),window.localStorage.setItem(e,JSON.stringify(n))}catch(a){console.log(a)}}]}("authToken")}function T(){var e=I();return Object(i.a)(e,1)[0]?r.a.createElement(K,null):r.a.createElement(N,null)}var P=n(83);n(187);function H(e){var t=e.children,n=I(),c=Object(i.a)(n,1)[0],u=Object(a.useState)(!1),l=Object(i.a)(u,2),o=l[0],p=l[1];return r.a.createElement("div",null,r.a.createElement("div",{className:"sf-admin-topbar"},r.a.createElement("div",null,r.a.createElement("h1",null,"Admin Panel")),c&&r.a.createElement(P.a,{className:"sf-admin-sidebar-button",onClick:function(){return p(!o)},name:"sidebar",size:"large"})),c&&r.a.createElement("div",{className:"sf-admin-sidebar ".concat(o?"sf-admin-sidebar-opened":"")},r.a.createElement(s.b,{as:"span",to:"/stats"},"Stats"),r.a.createElement(s.b,{as:"span",to:"/cities"},"Cities"),r.a.createElement(s.b,{as:"span",to:"/users"},"Users"),r.a.createElement(s.b,{as:"span",to:"/canteens"},"Canteens"),r.a.createElement(s.b,{as:"span",to:"/mealRecommendations"},"Meal Tips")),r.a.createElement("div",{className:"sf-admin-content"},t))}var J=n(204);function z(e){var t=e.columnNames,n=void 0===t?[]:t,a=e.content,c=void 0===a?[]:a;return r.a.createElement(J.a,{celled:!0},r.a.createElement(J.a.Header,null,r.a.createElement(J.a.Row,null,n.map((function(e){return r.a.createElement(J.a.HeaderCell,{key:e},e)})))),r.a.createElement(J.a.Body,null,c.map((function(e){return r.a.createElement(J.a.Row,{key:e[0]},e.map((function(e){return r.a.createElement(J.a.Cell,null,e)})))}))))}var F=O.BACKEND_URL+"/cities";function G(){return Y.apply(this,arguments)}function Y(){return(Y=Object(m.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S(F);case 3:return t=e.sent,e.abrupt("return",t.cities);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",null);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function q(e,t){return Q.apply(this,arguments)}function Q(){return(Q=Object(m.a)(p.a.mark((function e(t,n){var a,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=C(),e.prev=1,e.next=4,g.a.put(t,n,{headers:a});case 4:return r=e.sent,e.abrupt("return",r.data);case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function V(e){q(O.BACKEND_URL+"/cities/"+e.id,e)}var W=n(211),X=n(205);function Z(){var e=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],r=t[1];function c(){return u.apply(this,arguments)}function u(){return(u=Object(m.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G();case 2:t=e.sent,r(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function s(){return(s=Object(m.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V(t);case 2:c();case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){c()}),[]),[n,function(e){return s.apply(this,arguments)}]}(),t=Object(i.a)(e,2),n=t[0],c=t[1],u=Object(a.useState)(),l=Object(i.a)(u,2),o=l[0],f=l[1];return r.a.createElement("div",null,r.a.createElement(z,{columnNames:["ID","Name","On Semester Break","Actions"],content:n.map((function(e){return[e.id,e.city,r.a.createElement(W.a,{checked:!!e.is_semester_break,toggle:!0,onClick:function(){f(Object(d.a)({},e,{is_semester_break:!e.is_semester_break}))}}),r.a.createElement(E.a,{as:s.b,to:"/cities/".concat(e.id,"/meals"),icon:"food",primary:!0})]}))}),r.a.createElement(X.a,{open:!!o,onClose:function(){return f()},basic:!0},r.a.createElement(b.a,{icon:!0},r.a.createElement(P.a,{name:"pencil alternate"}),"Update City"),r.a.createElement(X.a.Content,null,r.a.createElement("p",{style:{textAlign:"center"}},"Are you sure you want to update"," ",o?o.city:"")),r.a.createElement(X.a.Actions,null,r.a.createElement(E.a,{basic:!0,color:"red",inverted:!0,onClick:function(){return f()}},r.a.createElement(P.a,{name:"remove"})," No"),r.a.createElement(E.a,{color:"green",inverted:!0,onClick:function(){c(o),f()}},r.a.createElement(P.a,{name:"checkmark"})," Yes"))))}function $(e){return ee.apply(this,arguments)}function ee(){return(ee=Object(m.a)(p.a.mark((function e(t){var n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=O.BACKEND_URL+"/cities/"+t+"/meals",e.prev=1,e.next=4,S(n);case 4:return a=e.sent,e.abrupt("return",a.meals);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",null);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function te(e){var t=Object(a.useState)([]),n=Object(i.a)(t,2),r=n[0],c=n[1];function u(){return(u=Object(m.a)(p.a.mark((function t(){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,$(e);case 2:n=t.sent,c(n);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(a.useEffect)((function(){!function(){u.apply(this,arguments)}()}),[]),[r]}function ne(){return ae.apply(this,arguments)}function ae(){return(ae=Object(m.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=O.BACKEND_URL+"/crons/sendTestMail",e.next=3,S(t);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function re(e){var t=e.meals;return t?r.a.createElement("div",null,r.a.createElement(E.a,{icon:"add",as:s.b,to:"/meals/create",positive:!0,content:"add Meal"}),r.a.createElement(E.a,{onClick:ne,content:"send test mail",icon:"send"}),r.a.createElement(z,{columnNames:["Id","Canteen","Meal Name","Prices","Types","Date","Action"],content:t.reduce((function(e,t){return e.concat(t.meals.map((function(e){return[e.id,t.name,e.name,e.prices.map((function(e){return r.a.createElement("span",null,e.price,"/")})),e.types.map((function(e){return r.a.createElement("img",{style:{height:"15px"},alt:e.name,src:e.icon_url})})),e.date,r.a.createElement(E.a,{as:s.b,to:"/meals/".concat(e.id),icon:"edit",primary:!0})]})))}),[])})):null}function ce(){var e=te(Object(l.g)().cityId),t=Object(i.a)(e,1)[0];return t?r.a.createElement(re,{meals:t}):null}n(189),n(190);var ue=O.BACKEND_URL+"/users";function se(){return le.apply(this,arguments)}function le(){return(le=Object(m.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S(ue);case 3:return t=e.sent,e.abrupt("return",t.users);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",null);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function ie(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],r=t[1];function c(){return(c=Object(m.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,se();case 2:t=e.sent,r(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){!function(){c.apply(this,arguments)}()}),[]),[n]}function oe(){var e=ie(),t=Object(i.a)(e,1)[0];return r.a.createElement(z,{columnNames:["ID","Email","Confirmed","Created On","Deleted On"],content:t.reverse().map((function(e){return[e.id,e.email,""+!!e.confirmed,new Date(Date.parse(e.created_at)).toLocaleDateString("de-DE",{weekday:"long",year:"numeric",month:"long",day:"numeric"}),new Date(Date.parse(e.deleted_at)).toLocaleDateString("de-DE",{weekday:"long",year:"numeric",month:"long",day:"numeric"})]}))})}function pe(e){var t=Object.keys(e).map((function(t){return t+"="+e[t]})).join("&");return t?"?"+t:""}function me(e){var t=pe(e);return S(O.BACKEND_URL+"/canteens"+t)}function fe(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(a.useState)([]),n=Object(i.a)(t,2),r=n[0],c=n[1];return Object(a.useEffect)((function(){function t(){return(t=Object(m.a)(p.a.mark((function t(){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,me(e);case 2:n=t.sent,c(n);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),r}function de(){var e=fe({city:"M\xfcnster"});return e?r.a.createElement("div",null,r.a.createElement(E.a,{primary:!0,basic:!0,as:"a",href:"https://app.studierendenfutter.de/canteens",content:"Active Today"}),r.a.createElement(z,{columnNames:["ID","Name","Address","City","Type","Actions"],content:e.reverse().map((function(e){return[e.id,e.name,e.address,e.city,e.type,r.a.createElement("div",null,r.a.createElement(E.a,{as:s.b,to:"/canteens/".concat(e.id,"/meals"),icon:"food",primary:!0}))]}))})):null}function he(e,t){var n=pe(t);return S(O.BACKEND_URL+"/canteens/"+e+"/meals"+n)}function ve(){var e=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object(a.useState)(),r=Object(i.a)(n,2),c=r[0],u=r[1];return Object(a.useEffect)((function(){function n(){return(n=Object(m.a)(p.a.mark((function n(){var a;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,he(e,t);case 2:a=n.sent,u(a);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),[c]}(Object(l.g)().canteenId),t=Object(i.a)(e,1)[0];return r.a.createElement(re,{meals:t})}function be(e){var t=e.meal,n=e.setMeal,c=Object(a.useState)(t),u=Object(i.a)(c,2),s=u[0],l=u[1],o=fe();if(Object(a.useEffect)((function(){l(t)}),[t]),!s)return null;var p=function(){n(s)},m=function(e){var n=e.target,a=n.name,r=n.value;l(Object(d.a)({},t,Object(f.a)({},a,r)))};return r.a.createElement(v.a,null,r.a.createElement(v.a.Dropdown,{placeholder:"Select Canteen",fluid:!0,search:!0,selection:!0,value:s.canteen_id,onChange:function(e,t){var n=t.value;return m({target:{name:"canteen_id",value:n}})},onBlur:p,label:"Canteen",options:o.map((function(e){return{key:e.id,value:e.id,text:e.name}}))}),r.a.createElement(v.a.Input,{value:s.name,label:"Name",name:"name",onChange:m,onBlur:p}),r.a.createElement(v.a.Input,{value:s.date,label:"Date",name:"date",onChange:m,onBlur:p}))}function Ee(e,t){return ye.apply(this,arguments)}function ye(){return(ye=Object(m.a)(p.a.mark((function e(t,n){var a,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=C(),e.prev=1,console.log(n),e.next=5,g.a.post(t,n,{headers:a});case 5:return r=e.sent,e.abrupt("return",r.data);case 9:return e.prev=9,e.t0=e.catch(1),console.log(e.t0),e.abrupt("return",{});case 13:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}var ge=O.BACKEND_URL+"/meals";function Oe(e){return we.apply(this,arguments)}function we(){return(we=Object(m.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Ee(ge,t);case 3:return n=e.sent,e.abrupt("return",n.meal);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",null);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function je(){var e=Object(l.f)(),t=Object(a.useState)({canteen_id:0,name:"",date:L()}),n=Object(i.a)(t,2),c=n[0],u=n[1];console.log(c);var s=function(){var t=Object(m.a)(p.a.mark((function t(){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(c),t.next=3,Oe(c);case 3:n=t.sent,console.log(n),e.push("/meals/"+n.id);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement(b.a,null,"Create Meal"),r.a.createElement(be,{meal:c,setMeal:u}),r.a.createElement("br",null),r.a.createElement(E.a,{icon:"send",positive:!0,onClick:s},"Create"))}var xe=n(202),ke=O.BACKEND_URL+"/userCategories";function Ne(){return Ce.apply(this,arguments)}function Ce(){return(Ce=Object(m.a)(p.a.mark((function e(){var t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S(ke);case 2:return t=e.sent,n=t,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function De(e){var t=e.mealPrice,n=e.setMealPrice,c=Object(a.useState)(t),u=Object(i.a)(c,2),s=u[0],l=u[1],o=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],r=t[1];return console.log(n),Object(a.useEffect)((function(){function e(){return(e=Object(m.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ne();case 2:t=e.sent,r(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),n}();if(Object(a.useEffect)((function(){l(t)}),[t]),!s)return null;var h=function(){n(s)},b=function(e){var n=e.target,a=n.name,r=n.value;l(Object(d.a)({},t,Object(f.a)({},a,r)))};return r.a.createElement(v.a,null,r.a.createElement(v.a.Dropdown,{placeholder:"Select User Category",fluid:!0,search:!0,selection:!0,value:s.user_category_id,onChange:function(e,t){var n=t.value;return b({target:{name:"user_category_id",value:n}})},onBlur:h,label:"User Group",options:o.map((function(e){return{key:e.id,value:e.id,text:e.name}}))}),r.a.createElement(v.a.Input,{value:s.price,label:"Price",name:"price",onChange:b,onBlur:h,icon:"euro"}))}function Se(e){return _e.apply(this,arguments)}function _e(){return(_e=Object(m.a)(p.a.mark((function e(t){var n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=O.BACKEND_URL+"/meals/"+t,e.prev=1,e.next=4,S(n);case 4:return a=e.sent,e.abrupt("return",a.meal);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",null);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function Ae(e){return q(O.BACKEND_URL+"/meals/"+e.id,e)}function Be(e){return Me.apply(this,arguments)}function Me(){return(Me=Object(m.a)(p.a.mark((function e(t){var n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=O.BACKEND_URL+"/meals/"+t+"/types",e.prev=1,e.next=4,S(n);case 4:return a=e.sent,console.log(a),e.abrupt("return",a.mealHasMealTypes);case 9:return e.prev=9,e.t0=e.catch(1),e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}var Re=O.BACKEND_URL+"/mealHasMealTypes";function Ue(e){return Le.apply(this,arguments)}function Le(){return(Le=Object(m.a)(p.a.mark((function e(t){var n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log(t),e.next=4,Ee(Re,t);case 4:return n=e.sent,a=n.data.mealMealHasMealType,e.abrupt("return",a);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function Ke(e,t){return Ie.apply(this,arguments)}function Ie(){return(Ie=Object(m.a)(p.a.mark((function e(t,n){var a,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=C(),e.prev=1,e.next=4,g.a.delete(t,{headers:a});case 4:return r=e.sent,e.abrupt("return",r.data);case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function Te(e,t){return Ke(O.BACKEND_URL+"/mealHasMealTypes/"+e,{code:t})}function Pe(e){return He.apply(this,arguments)}function He(){return(He=Object(m.a)(p.a.mark((function e(t){var n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=O.BACKEND_URL+"/meals/"+t+"/prices",e.prev=1,e.next=4,S(n);case 4:return a=e.sent,e.abrupt("return",a.mealPrices);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",null);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}var Je=O.BACKEND_URL+"/userCategoryMealPrices";function ze(e){return Fe.apply(this,arguments)}function Fe(){return(Fe=Object(m.a)(p.a.mark((function e(t){var n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Ee(Je,t);case 3:return n=e.sent,a=n.data.userCategoryMealPrice,e.abrupt("return",a);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",null);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function Ge(e,t){return Ke(O.BACKEND_URL+"/userCategoryMealPrices/"+e,{code:t})}function Ye(){return S(O.BACKEND_URL+"/mealTypes")}function qe(){var e=Object(l.g)().mealId,t={price:"4.00",meal_id:e,user_category_id:0},n=function(e){var t=Object(a.useState)(),n=Object(i.a)(t,2),r=n[0],c=n[1];function u(){return s.apply(this,arguments)}function s(){return(s=Object(m.a)(p.a.mark((function t(){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Se(e);case 2:n=t.sent,c(n);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(){return(l=Object(m.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ae(t);case 2:return e.next=4,u();case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){u()}),[]),[r,function(e){return l.apply(this,arguments)}]}(e),c=Object(i.a)(n,2),u=c[0],s=c[1],o=function(e){var t=Object(a.useState)([]),n=Object(i.a)(t,2),r=n[0],c=n[1];function u(){return s.apply(this,arguments)}function s(){return(s=Object(m.a)(p.a.mark((function t(){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Pe(e);case 2:n=t.sent,c(n);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(){return(l=Object(m.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ze(t);case 2:return e.next=4,u();case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function o(){return(o=Object(m.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ge(t);case 2:return e.next=4,u();case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){u()}),[]),[r,function(e){return l.apply(this,arguments)},function(e){return o.apply(this,arguments)}]}(e),f=Object(i.a)(o,3),d=f[0],v=f[1],y=f[2],g=function(e){var t=Object(a.useState)([]),n=Object(i.a)(t,2),r=n[0],c=n[1];function u(){return s.apply(this,arguments)}function s(){return(s=Object(m.a)(p.a.mark((function t(){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Be(e);case 2:n=t.sent,c(n);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(){return(l=Object(m.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ue(t);case 2:return e.next=4,u();case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function o(){return(o=Object(m.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Te(t);case 2:return e.next=4,u();case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){u()}),[]),[r,function(e){return l.apply(this,arguments)},function(e){return o.apply(this,arguments)}]}(e),O=Object(i.a)(g,3),w=O[0],j=O[1],x=O[2],k=Object(a.useState)(0),N=Object(i.a)(k,2),C=N[0],D=N[1],S=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){function e(){return(e=Object(m.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ye();case 2:t=e.sent,r(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),n}(),_=Object(a.useState)(t),A=Object(i.a)(_,2),B=A[0],M=A[1];return r.a.createElement("div",null,r.a.createElement(b.a,null,"Meal ",e),r.a.createElement(be,{meal:u,setMeal:s}),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement(b.a,null,"Prices "),r.a.createElement(z,{columnNames:["Price","Group","Action"],content:d.map((function(e){return[e.price,e.name,r.a.createElement(E.a,{icon:"trash",negative:!0,onClick:function(){return y(e.id)}})]}))}),r.a.createElement("div",null,r.a.createElement(h.a,null,r.a.createElement(b.a,{size:"small"},"Add Price"),r.a.createElement(De,{mealPrice:B,setMealPrice:M}),r.a.createElement("br",null),r.a.createElement(E.a,{content:"Add ",positive:!0,onClick:function(){v(B),M(t)}})))),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement(b.a,null,"Categories"),r.a.createElement(z,{columnNames:["Name","Image","Action"],content:w.map((function(e){return[e.name,r.a.createElement("img",{alt:"name",src:e.icon_url,style:{width:"16px"}}),r.a.createElement(E.a,{icon:"trash",negative:!0,onClick:function(){return x(e.id)}})]}))}),r.a.createElement("div",null,r.a.createElement(h.a,null,r.a.createElement(b.a,{size:"small"},"Add Meal Type"),r.a.createElement(xe.a,{placeholder:"Select Meal Type",fluid:!0,search:!0,selection:!0,value:C,onChange:function(e,t){var n=t.value;return D(n)},label:"Canteen",options:S.map((function(e){return{key:e.id,value:e.id,text:e.name}}))}),r.a.createElement("br",null),r.a.createElement(E.a,{positive:!0,content:"Add",onClick:function(){return j({meal_id:e,meal_type_id:C})}})))))}function Qe(e){return q(O.BACKEND_URL+"/mealRecommendations/"+e.id,e)}function Ve(){var e=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],r=t[1],c=function(){var e=Object(m.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S(O.BACKEND_URL+"/mealRecommendations");case 2:t=e.sent,r(t.mealRecommendations);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function u(){return(u=Object(m.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,Qe(t);case 3:return c(),e.abrupt("return");case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){c()}),[]),[n,function(e){return u.apply(this,arguments)}]}(),t=Object(i.a)(e,2),n=t[0],c=t[1];return console.log(n),r.a.createElement(z,{columnNames:["Id","Message","City","Active"],content:n.map((function(e){return[e.id,e.message,e.city_name,r.a.createElement(W.a,{toggle:!0,checked:1===e.active,onChange:function(){return c(Object(d.a)({},e,{active:0===e.active}))}})]}))})}u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(s.a,null,r.a.createElement(H,null,r.a.createElement(l.c,null,r.a.createElement(l.a,{exact:!0,path:"/"},r.a.createElement(T,null)),r.a.createElement(l.a,{exact:!0,path:"/stats"},r.a.createElement(K,null)),r.a.createElement(l.a,{exact:!0,path:"/canteens"},r.a.createElement(de,null)),r.a.createElement(l.a,{exact:!0,path:"/canteens/:canteenId/meals"},r.a.createElement(ve,null)),r.a.createElement(l.a,{exact:!0,path:"/cities"},r.a.createElement(Z,null)),r.a.createElement(l.a,{exact:!0,path:"/cities/:cityId/meals"},r.a.createElement(ce,null)),r.a.createElement(l.a,{exact:!0,path:"/meals/create"},r.a.createElement(je,null)),r.a.createElement(l.a,{exact:!0,path:"/meals/:mealId"},r.a.createElement(qe,null)),r.a.createElement(l.a,{exact:!0,path:"/mealRecommendations"},r.a.createElement(Ve,null)),r.a.createElement(l.a,{exact:!0,path:"/users"},r.a.createElement(oe,null)))))),document.getElementById("root"))}},[[157,1,2]]]);
//# sourceMappingURL=main.cfd346ec.chunk.js.map