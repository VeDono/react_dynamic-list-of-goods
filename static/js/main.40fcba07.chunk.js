(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{11:function(t,e,n){"use strict";n.r(e);var o=n(4),c=n.n(o),i=n(3),r=n(1),s=(n(9),n(0)),a=function(t){var e=t.goods;return Object(s.jsx)("ul",{children:e.map((function(t){return Object(s.jsx)("li",{"data-cy":"good",style:{color:t.color},children:t.name},t.id)}))})};function u(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()}))}var d=function(t){return t[t.InitialValue=0]="InitialValue",t[t.All=1]="All",t[t.FirstFive=2]="FirstFive",t[t.RedGoods=3]="RedGoods",t}(d||{}),l=function(){var t=Object(r.useState)([]),e=Object(i.a)(t,2),n=e[0],o=e[1],c=Object(r.useState)(d.InitialValue),l=Object(i.a)(c,2),b=l[0],f=l[1];return Object(r.useEffect)((function(){switch(b){case d.All:u().then(o);break;case d.FirstFive:u().then((function(t){return t.sort((function(t,e){return t.name.localeCompare(e.name)})).slice(0,5)})).then(o);break;case d.RedGoods:u().then((function(t){return t.filter((function(t){return"red"===t.color}))})).then(o)}}),[b]),Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)("h1",{children:"Dynamic list of Goods"}),Object(s.jsx)("button",{type:"button","data-cy":"all-button",onClick:function(){return f(d.All)},children:"Load all goods"}),Object(s.jsx)("button",{type:"button","data-cy":"first-five-button",onClick:function(){return f(d.FirstFive)},children:"Load 5 first goods"}),Object(s.jsx)("button",{type:"button","data-cy":"red-button",onClick:function(){return f(d.RedGoods)},children:"Load red goods"}),Object(s.jsx)(a,{goods:n})]})};c.a.render(Object(s.jsx)(l,{}),document.getElementById("root"))},9:function(t,e,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.40fcba07.chunk.js.map