(this.webpackJsonpminishop=this.webpackJsonpminishop||[]).push([[0],{110:function(e,t,c){"use strict";c.r(t);var n,i,s=c(0),a=c.n(s),o=c(23),r=c.n(o),l=c(29),j=(c(79),c(30)),d=c(3),h=c(119),b=c(117),m=c(120),u=c(118),p=c(73),O=c(8),x=c(66),g=c.n(x),f=(c(97),[{id:0,title:"White and Black",content:"Born in France",price:12e4,image:"https://codingapple1.github.io/shop/shoes1.jpg"},{id:1,title:"Red Knit",content:"Born in Seoul",price:11e4,image:"https://codingapple1.github.io/shop/shoes2.jpg"},{id:2,title:"Grey Yordan",content:"Born in the States",price:13e4,image:"https://codingapple1.github.io/shop/shoes3.jpg"}]),v=c(51),N=c(52),S=(c(98),c(1)),k=N.a.div(n||(n=Object(v.a)(["\n    padding : 20px;\n"]))),w=N.a.h4(i||(i=Object(v.a)(["\n    font-size : 25px;\n    text-shadow: -0.5px 0px white, 0px 0.5px grey, 0.5px 0px grey, 0px -0.5px white;\n    color : ",";\n"])),(function(e){return e.h4Color}));function C(e){return Object(S.jsxs)("p",{children:["\uc7ac\uace0 : ",e.stock[0]]})}function B(e){var t=Object(s.useState)(!0),c=Object(d.a)(t,2),n=c[0],i=c[1],a=Object(O.f)(),o=Object(O.g)().id;Object(s.useEffect)((function(){var e=setTimeout((function(){i(!1)}),2e3);return function(){clearTimeout(e)}}),[]);var r=e.shoes.find((function(e){return e.id==o}));return Object(S.jsxs)("div",{className:"container",children:[Object(S.jsxs)(k,{children:[Object(S.jsx)(w,{h4Color:"pink",children:"Shoes"}),Object(S.jsx)(w,{h4Color:"skyblue",children:"Detail Page"})]}),!0===n?Object(S.jsx)("div",{className:"my-alert",children:Object(S.jsx)("p",{children:"\uc7ac\uace0\uac00 \uc5bc\ub9c8 \ub0a8\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4!"})}):null,Object(S.jsxs)("div",{className:"row",children:[Object(S.jsx)("div",{className:"col-md-6",children:Object(S.jsx)("img",{src:r.image,alt:"shoe",width:"100%"})}),Object(S.jsxs)("div",{className:"col-md-6 mt-4",children:[Object(S.jsx)("h4",{className:"pt-5",children:r.title}),Object(S.jsx)("p",{children:r.content}),Object(S.jsx)("p",{children:r.price}),Object(S.jsx)(C,{stock:e.stock}),Object(S.jsx)("button",{className:"btn btn-danger",onClick:function(){e.setStock([9,10,11])},children:"\uc8fc\ubb38\ud558\uae30"}),Object(S.jsx)("button",{className:"btn btn-danger",onClick:function(){a.goBack()},children:"\ub4a4\ub85c\uac00\uae30"})]})]})]})}function I(e){return Object(S.jsxs)("div",{className:"col-md-4",children:[Object(S.jsx)("img",{src:e.shoesElement.image,alt:"shoe",width:"100%"}),Object(S.jsx)("h4",{children:e.shoesElement.title}),Object(S.jsxs)("p",{children:[e.shoesElement.content," & ",e.shoesElement.price]})]})}var y=function(){var e=Object(s.useState)(f),t=Object(d.a)(e,2),c=t[0],n=t[1],i=Object(s.useState)([10,11,12]),a=Object(d.a)(i,2),o=a[0],r=a[1],x=Object(s.useState)(!1),v=Object(d.a)(x,2),N=v[0],k=v[1];return Object(S.jsxs)("div",{className:"App",children:[Object(S.jsx)(h.a,{bg:"light",expand:"lg",children:Object(S.jsxs)(b.a,{children:[Object(S.jsx)(h.a.Brand,{href:"#home",children:"Mini-ShoeShop"}),Object(S.jsx)(h.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(S.jsx)(h.a.Collapse,{id:"basic-navbar-nav",children:Object(S.jsxs)(m.a,{className:"me-auto",children:[Object(S.jsx)(m.a.Link,{as:l.b,to:"/",children:"Home"}),Object(S.jsx)(m.a.Link,{as:l.b,to:"/detail/0",children:"Detail"}),Object(S.jsxs)(u.a,{title:"Dropdown",id:"basic-nav-dropdown",children:[Object(S.jsx)(u.a.Item,{href:"#action/3.1",children:"Action"}),Object(S.jsx)(u.a.Item,{href:"#action/3.2",children:"Another action"}),Object(S.jsx)(u.a.Item,{href:"#action/3.3",children:"Something"}),Object(S.jsx)(u.a.Divider,{}),Object(S.jsx)(u.a.Item,{href:"#action/3.4",children:"Separated link"})]})]})})]})}),Object(S.jsxs)(O.c,{children:[Object(S.jsx)(O.a,{path:"/detail/:id",children:Object(S.jsx)(B,{shoes:c,stock:o,setStock:r})}),Object(S.jsxs)(O.a,{path:"/",children:[Object(S.jsxs)("div",{className:"JumbotronDiv",children:[Object(S.jsx)("p",{className:"JumbotronTitle",children:"Mini ShoeShop"}),Object(S.jsx)("p",{className:"JumbotronDesc",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec diam ac lectus commodo viverra. Mauris erat nunc, efficitur et orci sed, bibendum dignissim mi. Proin fringilla tempor mattis. Fusce pharetra nunc elit. Nullam vehicula enim sit amet tempus tempor. Quisque tincidunt sit amet dui sit amet ultricies. Nam euismod massa vitae mi tincidunt tincidunt. Integer commodo massa metus, non feugiat turpis tempus at."}),Object(S.jsx)(p.a,{variant:"light",size:"lg",className:"JumbotronButton",children:"Shop"})]}),Object(S.jsx)("div",{className:"container",children:Object(S.jsxs)("div",{className:"row",children:[c.map((function(e){return Object(S.jsx)(I,{shoesElement:e})})),!0===N?Object(S.jsx)("div",{className:"loadingPopUp",children:Object(S.jsx)("p",{className:"mx-auto",children:"Loading..."})}):null,Object(S.jsx)("button",{className:"btn btn-primary",onClick:function(){k(!0),g.a.get("https://codingapple1.github.io/shop/data2.json").then((function(e){n([].concat(Object(j.a)(c),Object(j.a)(e.data))),k(!1)})).catch((function(){alert("\uc2e4\ud328"),k(!1)}))},children:"Show more..."})]})})]})]})]})},D=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,121)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),n(e),i(e),s(e),a(e)}))};r.a.render(Object(S.jsx)(a.a.StrictMode,{children:Object(S.jsx)(l.a,{children:Object(S.jsx)(y,{})})}),document.getElementById("root")),D()},79:function(e,t,c){},97:function(e,t,c){},98:function(e,t,c){}},[[110,1,2]]]);
//# sourceMappingURL=main.8518b874.chunk.js.map