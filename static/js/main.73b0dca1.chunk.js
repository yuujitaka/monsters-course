(this.webpackJsonpmonsters=this.webpackJsonpmonsters||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),s=n.n(r),a=n(5),o=n.n(a),i=(n(12),n(13),n(3)),u=n.n(i),h=n(6),j=n(4);n(15);var l=function(e){return Object(c.jsxs)("div",{className:"card-container",children:[Object(c.jsx)("img",{alt:e.monster.name,src:"https://robohash.org/".concat(e.monster.id,"?set=set2")}),Object(c.jsx)("h2",{children:e.monster.name}),Object(c.jsx)("p",{children:e.monster.email})]})};n(16);var d=function(e){var t=e.placeholder,n=e.handleChange;return Object(c.jsx)("input",{className:"search",type:"search",placeholder:t,onChange:n})};n(17);var f=function(){var e=Object(r.useState)([]),t=Object(j.a)(e,2),n=t[0],s=t[1],a=Object(r.useState)(""),o=Object(j.a)(a,2),i=o[0],f=o[1];Object(r.useEffect)((function(){function e(){return(e=Object(h.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/users");case 2:return e.next=4,e.sent.json();case 4:t=e.sent,s(t);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var b=n.filter((function(e){return e.name.toLowerCase().includes(i.toLowerCase())}));return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h1",{children:"Monsters Rolodex"}),Object(c.jsx)(d,{placeholder:"search monsters",handleChange:function(e){f(e.target.value)}}),Object(c.jsx)("div",{className:"card-list",children:b.map((function(e){return Object(c.jsx)(l,{monster:e},e.id)}))})]})};var b=function(){return Object(c.jsx)(f,{name:"Rebeca"})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))};o.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(b,{})}),document.getElementById("root")),m()}],[[18,1,2]]]);
//# sourceMappingURL=main.73b0dca1.chunk.js.map