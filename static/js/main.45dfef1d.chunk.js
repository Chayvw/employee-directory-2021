(this["webpackJsonpemployee-directory-2021"]=this["webpackJsonpemployee-directory-2021"]||[]).push([[0],{32:function(e,t,c){},33:function(e,t,c){},58:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c.n(n),r=c(25),i=c.n(r),a=(c(32),c.p,c(33),c(10)),l=c(2),j=c(1);var o=function(e){return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"Home Page"}),Object(j.jsx)("p",{children:"Welcome! Once you are ready click on the Search button and there you will be able to generate a list at random of 20 of your employees. If needed you can sort by first or last name "})]})};var h=function(e){return Object(j.jsx)("div",{children:Object(j.jsxs)("nav",{children:[Object(j.jsx)(a.b,{to:"/home",children:Object(j.jsx)("a",{class:"waves-effect waves-light btn-small",children:"home"})}),Object(j.jsx)(a.b,{to:"/search",children:Object(j.jsx)("a",{class:"waves-effect waves-light btn-small",children:"search"})})]})})};var d=function(e){return Object(j.jsx)("div",{className:"center-align",children:Object(j.jsx)("footer",{children:Object(j.jsx)("div",{className:"footer-copyright",children:Object(j.jsxs)("div",{className:"container",children:["\xa9 2021 Copyright VinoDev",Object(j.jsx)("a",{className:"grey-text text-lighten-4 right",children:"More Links"})]})})})})},b=c(11),u=c(27),O=c.n(u);var x=function(e){var t=Object(n.useState)([]),c=Object(b.a)(t,2),s=c[0],r=c[1],i=Object(n.useState)([]),a=Object(b.a)(i,2),l=(a[0],a[1]),o=Object(n.useState)([]),h=Object(b.a)(o,2),d=(h[0],h[1]);return Object(n.useEffect)((function(){console.log("useEffect has been called!");O()({url:"https://randomuser.me/api/?results=20",method:"GET"}).then((function(e){var t=e.data.results;r(t),console.log(s),console.log(t)})).catch((function(e){console.log(e,"Error with request")}))}),[]),Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{children:[Object(j.jsx)("table",{class:"justify",children:Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Profile Picture"}),Object(j.jsx)("th",{onClick:function(){l(s.sort((function(e,t){var c=e.name.first,n=t.name.first;return c<n?-1:c>n?1:0})))},children:"First Name"}),Object(j.jsx)("th",{onClick:function(){d(s.sort((function(e,t){var c=e.name.last,n=t.name.last;return c<n?-1:c>n?1:0})))},children:"Last Name"}),Object(j.jsx)("th",{children:"Email"}),Object(j.jsx)("th",{children:"Age"})]})})}),s&&s.map((function(e,t){return Object(j.jsx)("table",{class:"centered",children:Object(j.jsxs)("tr",{style:{textAlign:"justify"},children:[Object(j.jsxs)("td",{children:[" ",Object(j.jsx)("img",{src:e.picture.medium})]}),Object(j.jsxs)("td",{children:["First Name:",e.name.first]}),Object(j.jsxs)("td",{children:["Last Name:",e.name.last]}),Object(j.jsxs)("td",{children:["Email:",e.email]}),Object(j.jsxs)("td",{children:["Age:",e.dob.age]})]},t)})}))]})})};var m=function(){return Object(j.jsxs)(a.a,{children:[Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(h,{}),Object(j.jsx)(l.a,{exact:!0,path:"/home",component:o}),Object(j.jsx)(l.a,{path:"/search",component:x})]}),Object(j.jsx)(d,{})]})},f=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,59)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),r(e),i(e)}))};i.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(m,{})}),document.getElementById("root")),f()}},[[58,1,2]]]);
//# sourceMappingURL=main.45dfef1d.chunk.js.map