(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[1],{239:function(t,e,n){},241:function(t,e,n){"use strict";n.r(e);var r=n(0),c=n.n(r),a=n(29),u=n.n(a),o=n(33),s=n(8),i=n(37),l=n(246),b=n(78),j=n(6),d=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(l.b,{children:[Object(j.jsx)(b.a,{children:Object(j.jsx)(i.b,{to:"/",exact:"true",children:"Main"})}),Object(j.jsx)(b.a,{children:Object(j.jsx)(i.b,{to:"/contacts",exact:"true",children:"Contacts"})})]})})},f=n(36),p=n(245);function h(){var t=Object(o.c)(f.c.getIsLoggedIn),e=Object(o.b)(),n=Object(o.c)(f.c.getUserName);return Object(j.jsx)(p.a,{className:"site-page-header",title:"Phonebook",subTitle:t?"Hello ".concat(n,", this is your personal phonebook"):"Register or login to use the phone book.",children:Object(j.jsx)(l.b,{children:t?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(d,{},1),Object(j.jsx)(b.a,{type:"primary",ghost:!0,onClick:function(){return e(f.a.logOut())},children:"Sign out"})]}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(b.a,{type:"primary",children:Object(j.jsx)(i.b,{to:"/login",exact:"true",children:"Sign in"})},3),Object(j.jsx)(b.a,{type:"primary",children:Object(j.jsx)(i.b,{to:"/register",exact:"true",children:"Sign up"})},4)]})})})}function O(t){var e=t.children,n=t.redirectTo;return Object(o.c)(f.c.getIsLoggedIn)?e:Object(j.jsx)(s.a,{to:n})}function g(t){var e=t.children,n=t.restricted,r=void 0!==n&&n,c=t.redirectTo;return Object(o.c)(f.c.getIsLoggedIn)&&r?Object(j.jsx)(s.a,{to:c}):e}var x=n(243),v=n(244),m=x.a.Footer,y=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(4),n.e(5)]).then(n.bind(null,285))})),k=Object(r.lazy)((function(){return n.e(6).then(n.bind(null,280))})),w=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,281))})),C=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,282))}));function I(){var t=Object(o.b)();return Object(r.useEffect)((function(){t(f.a.fetchCurrentUser())}),[t]),Object(j.jsxs)(x.a,{children:[Object(j.jsx)(h,{}),Object(j.jsx)(v.a,{}),Object(j.jsx)(r.Suspense,{fallback:"Wait...",children:Object(j.jsxs)(s.d,{children:[Object(j.jsx)(s.b,{exact:"true",path:"/",element:Object(j.jsx)(g,{redirectTo:"/",children:Object(j.jsx)(k,{})})}),Object(j.jsx)(s.b,{exact:"true",path:"/register",restricted:!0,element:Object(j.jsx)(g,{restricted:!0,redirectTo:"/contacts",children:Object(j.jsx)(w,{})})}),Object(j.jsx)(s.b,{exact:"true",path:"/login",element:Object(j.jsx)(g,{restricted:!0,redirectTo:"/",children:Object(j.jsx)(C,{})})}),Object(j.jsx)(s.b,{path:"/contacts",element:Object(j.jsx)(O,{redirectTo:"/login",children:Object(j.jsx)(y,{})})})]})}),Object(j.jsx)(v.a,{}),Object(j.jsx)(m,{children:"Footer"})]})}var L=n(82),F=n(16),T=n(43),z=n(137),S=n.n(z),U=n(98),W=Object(L.a)(Object(F.f)({serializableCheck:{ignoredActions:[T.a,T.f,T.b,T.c,T.d,T.e]}})),P={key:"auth",storage:S.a,whitelist:["token"]},V=Object(F.a)({reducer:{auth:Object(T.g)(P,f.b),contacts:U.b},devTools:!1,middleware:W}),A=Object(T.h)(V),G=n(138);n(238),n(239),n(240);u.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(o.a,{store:V,children:Object(j.jsx)(G.a,{persistor:A,loading:null,children:Object(j.jsx)(i.a,{children:Object(j.jsx)(I,{})})})})}),document.getElementById("root"))},36:function(t,e,n){"use strict";n.d(e,"a",(function(){return h})),n.d(e,"c",(function(){return O})),n.d(e,"b",(function(){return v}));var r,c=n(9),a=n.n(c),u=n(24),o=n(26),s=n.n(o),i=n(16),l=function(t){s.a.defaults.headers.common.Authorization="Bearer ".concat(t)},b=function(){s.a.defaults.headers.common.Authorization=""},j=Object(i.c)("auth/register",function(){var t=Object(u.a)(a.a.mark((function t(e,n){var r,c,u;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.rejectWithValue,console.log(e),t.prev=2,t.next=5,s.a.post("users/signup",e);case 5:return c=t.sent,u=c.data,l(u.token),t.abrupt("return",u);case 11:return t.prev=11,t.t0=t.catch(2),t.abrupt("return",r(t.t0.message));case 14:case"end":return t.stop()}}),t,null,[[2,11]])})));return function(e,n){return t.apply(this,arguments)}}()),d=Object(i.c)("auth/login",function(){var t=Object(u.a)(a.a.mark((function t(e,n){var r,c,u;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.rejectWithValue,t.prev=1,t.next=4,s.a.post("users/login",e);case 4:return c=t.sent,u=c.data,l(u.token),t.abrupt("return",u);case 10:return t.prev=10,t.t0=t.catch(1),t.abrupt("return",r(t.t0.message));case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e,n){return t.apply(this,arguments)}}()),f=Object(i.c)("auth/logout",function(){var t=Object(u.a)(a.a.mark((function t(e,n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.rejectWithValue,t.prev=1,t.next=4,s.a.post("/users/logout");case 4:b(),t.next=10;break;case 7:return t.prev=7,t.t0=t.catch(1),t.abrupt("return",r(t.t0.message));case 10:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e,n){return t.apply(this,arguments)}}()),p=Object(i.c)("auth/refresh",function(){var t=Object(u.a)(a.a.mark((function t(e,n){var r,c,u,o;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=n.getState(),null!==(c=r.auth.token)){t.next=4;break}return t.abrupt("return",n.rejectWithValue());case 4:return l(c),t.prev=5,t.next=8,s.a.get("/users/current");case 8:return u=t.sent,o=u.data,t.abrupt("return",o);case 13:t.prev=13,t.t0=t.catch(5),console.log(t.t0.message);case 16:case"end":return t.stop()}}),t,null,[[5,13]])})));return function(e,n){return t.apply(this,arguments)}}()),h={register:j,logIn:d,logOut:f,fetchCurrentUser:p},O={getIsLoggedIn:function(t){return t.auth.isLoggedIn},getUserName:function(t){return t.auth.user.name}},g=n(13),x=n(84),v=Object(i.e)({name:"auth",initialState:{user:{name:null,email:null},token:null,isLoggedIn:!1},extraReducers:(r={},Object(g.a)(r,h.register.fulfilled,(function(t,e){t.user=e.payload.user,t.token=e.payload.token,t.isLoggedIn=!0})),Object(g.a)(r,h.logIn.fulfilled,(function(t,e){t.user=e.payload.user,t.token=e.payload.token,t.isLoggedIn=!0})),Object(g.a)(r,h.logIn.rejected,(function(t,e){return Object(x.a)(Object(x.a)({},t),{},{isLoading:!1,error:e.payload})})),Object(g.a)(r,h.logOut.fulfilled,(function(t,e){t.user={name:null,email:null},t.token=null,t.isLoggedIn=!1})),Object(g.a)(r,h.fetchCurrentUser.fulfilled,(function(t,e){t.user=e.payload,t.isLoggedIn=!0})),r)}).reducer},72:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(16),c=Object(r.b)("contacts/ChangeFilter")},98:function(t,e,n){"use strict";n.d(e,"a",(function(){return v})),n.d(e,"c",(function(){return m})),n.d(e,"b",(function(){return T}));var r=n(9),c=n.n(r),a=n(24),u=n(16),o=n(26),s=n.n(o);function i(){return l.apply(this,arguments)}function l(){return(l=Object(a.a)(c.a.mark((function t(){var e,n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.get("/contacts");case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function b(t){return j.apply(this,arguments)}function j(){return(j=Object(a.a)(c.a.mark((function t(e){var n,r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.post("/contacts",e);case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return f.apply(this,arguments)}function f(){return(f=Object(a.a)(c.a.mark((function t(e){var n,r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.delete("/contacts/".concat(e));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}s.a.defaults.baseURL="https://connections-api.herokuapp.com";var p,h,O=Object(u.c)("contacts/fetchContactsGlobal",Object(a.a)(c.a.mark((function t(){var e;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i();case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})))),g=Object(u.c)("contacts/\u0441ontactsGlobal",function(){var t=Object(a.a)(c.a.mark((function t(e){var n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b(e);case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),x=Object(u.c)("contacts/deleteContactGlobal",function(){var t=Object(a.a)(c.a.mark((function t(e){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d(e);case 2:return t.abrupt("return",e);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),v={deleteContact:x,fetchContact:O,addContact:g},m={getContacts:function(t){return t.contacts.contactsList},getFilter:function(t){return t.contacts.contactsFilter},getLoading:function(t){return t.contacts.loading}},y=n(72),k=n(13),w=n(82),C=n(22),I=Object(u.d)([],(p={},Object(k.a)(p,v.fetchContact.fulfilled,(function(t,e){return e.payload})),Object(k.a)(p,v.addContact.fulfilled,(function(t,e){var n=e.payload;return[].concat(Object(w.a)(t),[n])})),Object(k.a)(p,v.deleteContact.fulfilled,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),p)),L=Object(u.d)(!1,(h={},Object(k.a)(h,v.fetchContact.pending,(function(){return!0})),Object(k.a)(h,v.fetchContact.fulfilled,(function(){return!1})),Object(k.a)(h,v.fetchContact.rejected,(function(){return!1})),Object(k.a)(h,v.addContact.pending,(function(){return!0})),Object(k.a)(h,v.addContact.fulfilled,(function(){return!1})),Object(k.a)(h,v.addContact.rejected,(function(){return!1})),Object(k.a)(h,v.deleteContact.pending,(function(){return!0})),Object(k.a)(h,v.deleteContact.fulfilled,(function(){return!1})),Object(k.a)(h,v.deleteContact.rejected,(function(){return!1})),h)),F=Object(u.d)("",Object(k.a)({},y.a,(function(t,e){return e.payload}))),T=Object(C.b)({contactsFilter:F,loading:L,contactsList:I})}},[[241,2,3]]]);
//# sourceMappingURL=main.eb415f3b.chunk.js.map