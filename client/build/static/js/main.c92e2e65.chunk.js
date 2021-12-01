(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){},20:function(e,t){},22:function(e,t,n){},28:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},5:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},78:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(25),i=n.n(r),s=(n(50),n(51),n(9)),o=n(28),l=n.n(o),u=n(0);function j(){return Object(u.jsx)("div",{className:l.a.land,children:Object(u.jsxs)("div",{className:l.a.conta,children:[Object(u.jsx)("h1",{children:"Welcome To Countries"}),Object(u.jsx)(s.b,{to:"/home",children:Object(u.jsx)("button",{className:l.a.btn,children:"Ingresar "})})]})})}var d=n(4),b=n(11),O=n.n(b),h=n(21),p=n(16),f=n.n(p),m="GET_COUNTRIES",v="GET_ACTIVITIES",x="SEARCH_BY_NAME",g="GET_COUNTRY_DETAIL",y="FILTER_BY_CONTINENT",C="FILTER_BY_ACTIVITY",N="SORT",A="PAGINATE";function S(){return function(){var e=Object(h.a)(O.a.mark((function e(t){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("http://localhost:3001/countries");case 2:return n=e.sent,e.abrupt("return",t({type:m,payload:n.data}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}function w(e){return{type:N,payload:e}}function P(e){return{type:A,payload:e}}var T=n(12),D=n.n(T);function E(){var e=Object(d.b)();return Object(u.jsx)("div",{children:Object(u.jsx)("button",{className:D.a.btn,onClick:function(t){e(S())},children:"RESET"})})}var I=n(10),k=n(42),L=n.n(k);function F(){var e=Object(c.useState)(""),t=Object(I.a)(e,2),n=t[0],a=t[1],r=Object(d.b)();return Object(u.jsx)("div",{children:Object(u.jsxs)("form",{className:L.a.searchForm,onSubmit:function(e){var t;e.preventDefault(),r((t=n,function(e){f()("http://localhost:3001/countries?name=".concat(t)).then((function(t){e({type:x,payload:t.data})})).catch((function(e){console.log(e)}))})),a(""),r(P(1))},children:[Object(u.jsx)("input",{type:"text",placeholder:"Search by name",autoComplete:"off",onChange:function(e){e.preventDefault(),a(e.target.value)},value:n}),Object(u.jsx)("button",{type:"submit",children:Object(u.jsx)("img",{src:!0,alt:"img no found"})})]})})}var _=n(31),G=n.n(_);function R(){return Object(u.jsxs)("div",{className:G.a.container,children:[Object(u.jsx)("h3",{children:"PI-Countries-Henry"}),Object(u.jsx)(F,{}),Object(u.jsx)(s.c,{to:"/activity",className:G.a.activity,children:"Add Activity"})]})}var B=n(20),W=n(43),H=n.n(W);function Y(e){var t=e.name,n=e.flag,c=e.continent,a=e.population;return Object(u.jsxs)("div",{className:H.a.container,children:[Object(u.jsx)("img",{src:n,alt:"img not found"}),Object(u.jsxs)("h4",{children:["Name: ",t]}),Object(u.jsxs)("p",{children:["Continent: ",c]}),Object(u.jsxs)("p",{children:["Population: ",Object(B.numberWithCommas)(Number(a))]})]})}var M=n(17),U=n.n(M);function z(e){for(var t=e.countriesAll,n=e.countriesPerPage,c=e.paginate,a=e.currentPage,r=[],i=Math.ceil(t/n),s=1;s<=i;s++)r.push(s);return Object(u.jsxs)("div",{className:U.a.container,children:[r&&a>1?Object(u.jsxs)("button",{className:U.a.navigate,onClick:function(){return c(a-1)},children:[" ","back"," "]}):null,null===r||void 0===r?void 0:r.map((function(e){return Object(u.jsx)("button",{className:a===e?U.a.btnselec:U.a.btn,onClick:function(){return c(e)},children:e},e)})),r&&a<=r.length-1?Object(u.jsxs)("button",{className:U.a.navigate,onClick:function(){return c(a+1)},children:[" ","Next"," "]}):null]})}var J=n(32),V=n.n(J),q=n(5),K=n.n(q);function Q(e){var t,n=e.match.params.id,a=Object(d.b)(),r=Object(d.c)((function(e){return e.countryDetal}));return Object(c.useEffect)((function(){a(function(e){return function(){var t=Object(h.a)(O.a.mark((function t(n){var c;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,f.a.get("http://localhost:3001/countries/".concat(e));case 3:return c=t.sent,t.abrupt("return",n({type:g,payload:c.data}));case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}(n))}),[a,n]),Object(u.jsxs)("div",{className:V.a.container,children:["        ",Object(u.jsxs)("div",{className:V.a.section,children:[Object(u.jsx)("h3",{children:"Detailed Country Information"}),Object(u.jsx)("img",{src:r.flag,alt:"img not found"}),Object(u.jsx)("div",{}),Object(u.jsxs)("p",{children:["Name: ",r.name]}),Object(u.jsxs)("p",{children:["Continent: ",r.continent]}),Object(u.jsxs)("p",{children:["Code: ",r.id]}),Object(u.jsxs)("p",{children:["Capital: ",r.capital]}),Object(u.jsxs)("p",{children:["Subregion: ",r.subregion]}),Object(u.jsxs)("p",{children:["Area: ",Object(B.numberWithCommas)(Number(r.area))," Km",Object(u.jsx)("sup",{children:"2"})]}),Object(u.jsxs)("p",{children:["Population: ",Object(B.numberWithCommas)(Number(r.population))]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:"Activity Information"})," ",(null===(t=r.activities)||void 0===t?void 0:t.length)?r.activities.map((function(e){return Object(u.jsxs)("div",{children:[Object(u.jsxs)("h4",{children:[" "," ",e.name.charAt(0).toUpperCase()+e.name.slice(1).toLowerCase()]}),Object(u.jsxs)("p",{children:["Difficulty: ",e.difficulty]}),Object(u.jsxs)("p",{children:["Duration: ",e.duration," minutes"]}),Object(u.jsxs)("p",{children:["Season: ",e.season]})]})})):Object(u.jsx)("p",{children:"without tourist activities"})]}),Object(u.jsxs)("div",{className:K.a.btns,children:[Object(u.jsx)(se,{}),Object(u.jsx)(s.c,{to:"/activity",className:D.a.btn,children:"Add Activity"})]})]})]})}var X=n(26),Z=n(15),$=n(3);function ee(){var e=Object(d.c)((function(e){return e.countries})),t=Object(d.b)(),n=Object(c.useState)({name:"",difficulty:"",duration:"",season:"",countries:[]}),a=Object(I.a)(n,2),r=a[0],i=a[1],s=Object(c.useState)(""),o=Object(I.a)(s,2),l=o[0],j=o[1],b=function(e){j(function(e){var t={};switch(e){case!e.name:return t.name="Name is requerid";case/\d/.test(e.name):return t.name="Numbers are not allowed";case e.name.length<3:return t.name="Activity name must have at least 3 characters";case!e.difficulty:return t.difficulty="Select at least one difficulty";case!e.duration:return t.duration="Indicate duration of the activity";case!e.season:return t.season="Select at least one season";case e.countries.length<=0:return t.countries="Select at least one country";default:return t}}(Object($.a)(Object($.a)({},r),{},Object(Z.a)({},e.target.name,e.target.value)))),"countries"===e.target.name?i(Object($.a)(Object($.a)({},r),{},Object(Z.a)({},e.target.name,[].concat(Object(X.a)(r.countries),[e.target.value])))):i(Object($.a)(Object($.a)({},r),{},Object(Z.a)({},e.target.name,e.target.value)))};return Object(u.jsx)("div",{className:K.a.container,children:Object(u.jsx)("form",{className:K.a.form,children:Object(u.jsxs)("fieldset",{children:[Object(u.jsx)("legend",{children:"Register Tourist Activity"}),Object(u.jsxs)("div",{className:K.a.formGroup,children:[Object(u.jsx)("label",{children:"Name "}),Object(u.jsx)("input",{name:"name",type:"text",value:r.name,autoComplete:"off",placeholder:"Enter Activity",onChange:b,className:l.name&&K.a.danger}),l.name?Object(u.jsx)("p",{className:K.a.danger,children:l.name}):""]}),Object(u.jsxs)("div",{className:K.a.formGroup,children:[Object(u.jsx)("label",{children:"Difficulty (escriba de 1 a 5) "}),Object(u.jsx)("select",{className:l.difficulty&&K.a.danger,onChange:b,name:"difficulty",children:["Seleccionar",1,2,3,4,5].map((function(e){return Object(u.jsx)("option",{value:e,children:e},e)}))}),l.difficulty&&Object(u.jsx)("p",{className:K.a.danger,children:l.difficulty})]}),Object(u.jsxs)("div",{className:K.a.formGroup,children:[Object(u.jsx)("label",{children:"Duration (minutes) "}),Object(u.jsx)("input",{name:"duration",value:r.duration,onChange:b,className:l.duration&&K.a.danger}),l.duration&&Object(u.jsx)("p",{className:K.a.danger,children:l.duration})]}),Object(u.jsxs)("div",{className:K.a.formGroup,children:[Object(u.jsx)("label",{children:"Season: "}),Object(u.jsx)("select",{className:l.season&&K.a.danger,onChange:b,name:"season",children:["Seleccionar","Summer","Autumn","Winter","Spring"].map((function(e){return Object(u.jsx)("option",{value:e,children:e},e)}))}),l.season&&Object(u.jsx)("p",{className:K.a.danger,children:l.season})]}),Object(u.jsxs)("div",{className:K.a.formGroup,children:[Object(u.jsx)("label",{children:"select countries: "}),Object(u.jsxs)("div",{children:[Object(u.jsxs)("select",{className:l.countries&&K.a.danger,name:"countries",onChange:b,children:[Object(u.jsx)("option",{name:"Seleccionar",children:"Seleccionar"}),e.map((function(e){return Object(u.jsx)("option",{name:e.name,value:e.id,children:e.name},e.id)}))]}),Object(u.jsx)("div",{children:r.countries.join(" ")}),l.countries&&Object(u.jsx)("p",{className:K.a.danger,children:l.countries})]})]}),Object(u.jsxs)("div",{className:K.a.btns,children:[Object(u.jsx)(se,{}),Object(u.jsx)("button",{className:D.a.btn,onClick:function(e){e.preventDefault(),t(function(e){return Object(h.a)(O.a.mark((function t(){var n;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,f.a.post("http://localhost:3001/activity",e);case 3:(n=t.sent)&&alert(n.data),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))}(r)),i({name:"",difficulty:"",duration:"",season:"",countries:[]})},disabled:!r.name||l.difficulty||l.season||l.countries,children:"Insert Activity"})]})]})})})}var te=n(13),ne=n.n(te);function ce(){var e=Object(d.b)();return Object(u.jsxs)("div",{className:ne.a.container,children:[Object(u.jsx)("h5",{children:"alphabetical order"}),Object(u.jsxs)("select",{onChange:function(t){t.preventDefault(),e(w(t.target.value))},children:[Object(u.jsx)("option",{children:"to select"}),Object(u.jsx)("option",{value:"ASC",children:"sort from a to z"}),Object(u.jsx)("option",{value:"DESC",children:"sort from z to a"})]})]})}function ae(){var e=Object(d.b)();return Object(u.jsxs)("div",{className:ne.a.container,children:[Object(u.jsx)("h5",{children:"Sort By Population"}),Object(u.jsxs)("select",{onChange:function(t){t.preventDefault(),e(w(t.target.value))},children:[Object(u.jsx)("option",{name:"Seleccionar",children:"To Select"}),Object(u.jsx)("option",{name:"Population Asc.",value:"Population Asc.",children:"Population Asc."}),Object(u.jsx)("option",{name:"Population Desc.",value:"Population Desc.",children:"Population Desc."})]})]})}function re(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e.countries})),n=null===t||void 0===t?void 0:t.map((function(e){return e.continent})),c=Object(X.a)(new Set(n));return Object(u.jsxs)("div",{className:ne.a.container,children:[Object(u.jsx)("h5",{children:"Filter by Continent"}),Object(u.jsxs)("select",{onChange:function(t){var n;e((n=t.target.value,{type:y,payload:n})),e(P(1))},children:[Object(u.jsx)("option",{value:"All",children:"All"}),null===c||void 0===c?void 0:c.map((function(e,t){return Object(u.jsx)("option",{value:e,children:e},t)}))]})]})}function ie(){var e=Object(d.b)();Object(c.useEffect)((function(){e(function(){var e=Object(h.a)(O.a.mark((function e(t){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("http://localhost:3001/activity");case 3:return n=e.sent,e.abrupt("return",t({type:v,payload:n.data}));case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}())}),[e]);var t=Object(d.c)((function(e){return e.activities})),n=null===t||void 0===t?void 0:t.map((function(e){return e.name}));return Object(u.jsxs)("div",{className:ne.a.container,children:[Object(u.jsx)("h5",{children:"Filter by Activity"}),Object(u.jsxs)("select",{onChange:function(t){var n;e((n=t.target.value,{type:C,payload:n})),e(P(1))},children:[Object(u.jsx)("option",{children:"to select"}),null===n||void 0===n?void 0:n.map((function(e){return Object(u.jsx)("option",{value:e,children:e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()},e)}))]})]})}function se(){return Object(u.jsx)("div",{children:Object(u.jsx)(s.c,{to:"/Home",children:Object(u.jsx)("button",{className:D.a.btn,children:"back home"})})})}var oe=n(18),le=n.n(oe);function ue(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e})),n=t.currentPage,a=t.filterCountries;Object(c.useEffect)((function(){e(S())}),[e]);var r=9*n,i=r-9,o=null===a||void 0===a?void 0:a.slice(i,r);return Object(u.jsxs)("div",{className:le.a.container,children:[o.length?Object(u.jsx)("div",{className:le.a.countries,children:o.map((function(e){return Object(u.jsx)("div",{children:Object(u.jsx)(s.c,{to:"/home/"+e.id,className:le.a.link,children:Object(u.jsx)(Y,{name:e.name,flag:e.flag,continent:e.continent,population:e.population})})},e.id)}))}):Object(u.jsx)("div",{className:le.a.error,children:"Country Not Found, Try Another Name!"}),Object(u.jsx)("div",{className:le.a.pagination,children:Object(u.jsx)(z,{allCountries:a.length,countriesPerPage:9,paginate:function(t){e(P(t))},currentPage:n})})]})}var je=n(22),de=n.n(je);function be(){return Object(u.jsxs)("div",{className:de.a.container,children:[Object(u.jsx)("nav",{className:de.a.navbar,children:Object(u.jsx)(R,{})}),Object(u.jsxs)("section",{className:de.a.filters,children:[Object(u.jsx)(ce,{}),Object(u.jsx)(ae,{}),Object(u.jsx)(re,{}),Object(u.jsx)(ie,{}),Object(u.jsx)(E,{})]}),Object(u.jsx)("section",{className:de.a.countries,children:Object(u.jsx)(ue,{})})]})}var Oe=n(2);var he=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(s.a,{children:Object(u.jsxs)(Oe.c,{children:[Object(u.jsx)(Oe.a,{exact:!0,path:"/Home",component:be}),Object(u.jsx)(Oe.a,{exact:!0,path:"/",component:j}),Object(u.jsx)(Oe.a,{exact:!0,path:"/Home/:id",component:Q}),Object(u.jsx)(Oe.a,{exact:!0,path:"/activity",component:ee})]})})})},pe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,79)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))},fe=n(27),me=n(44),ve=n(45),xe={countries:[],filterCountries:[],countryDetal:[],activities:[],currentPage:Number("1")};var ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe,t=arguments.length>1?arguments[1]:void 0;switch(t.payload){case m:return Object($.a)(Object($.a)({},e),{},{countries:t.payload,filterCountries:t.payload});case x:return Object($.a)(Object($.a)({},e),{},{filterCountries:t.payload});case g:return Object($.a)(Object($.a)({},e),{},{countryDetal:t.payload});case y:return"All"===t.payload?Object($.a)(Object($.a)({},e),{},{filterCountries:e.countries}):Object($.a)(Object($.a)({},e),{},{filterCountries:e.countries.filter((function(e){return t.payload.includes(e.continent)}))});case A:return Object($.a)(Object($.a)({},e),{},{currentPage:t.payload});case v:return Object($.a)(Object($.a)({},e),{},{activities:t.payload});case C:return Object($.a)(Object($.a)({},e),{},{filterCountries:e.countries.filter((function(e){return e.activities.map((function(e){return e.name})).includes(t.payload)}))});case N:return"Population Asc."===t.payload?Object($.a)(Object($.a)({},e),{},{filterCountries:e.filterCountries.sort((function(e,t){return e.population-t.population}))}):"Population Desc."===t.payload?Object($.a)(Object($.a)({},e),{},{filterCountries:e.filterCountries.sort((function(e,t){return t.population-e.population}))}):"ASC"===t.payload?Object($.a)(Object($.a)({},e),{},{filterCountries:e.filterCountries.sort((function(e,t){return e.name.toLowerCase()<t.name.toLowerCase()?-1:e.name.toLowerCase()>t.name.toLowerCase()?1:0}))}):"DESC"===t.payload?Object($.a)(Object($.a)({},e),{},{filterCountries:e.filterCountries.sort((function(e,t){return e.name.toLowerCase()>t.name.toLowerCase()?-1:e.name.toLowerCase()<t.name.toLowerCase()?1:0}))}):Object($.a)({},e);default:return e}},ye=Object(fe.createStore)(ge,Object(me.composeWithDevTools)(Object(fe.applyMiddleware)(ve.a)));i.a.render(Object(u.jsxs)(d.a,{store:ye,children:[Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(he,{})}),","]}),document.getElementById("root")),pe()}},[[78,1,2]]]);
//# sourceMappingURL=main.c92e2e65.chunk.js.map