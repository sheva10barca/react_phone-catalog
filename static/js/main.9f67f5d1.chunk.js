(this["webpackJsonpreact_phone-catalog"]=this["webpackJsonpreact_phone-catalog"]||[]).push([[0],{28:function(e,t,c){},30:function(e,t,c){},31:function(e,t,c){},32:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){"use strict";c.r(t);var s=c(23),a=c.n(s),n=c(6),i=c(0),r=c(3),l=c(5),o=c(10),d=c.n(o),j=(c(28),c.p+"static/media/banner1.b4eeda8b.png"),b=c.p+"static/media/banner2.bdd2e0fc.png",u=c.p+"static/media/banner3.a962057c.png",h=c.p+"static/media/arrow-left.7e79118d.svg",m=c.p+"static/media/arrow-right.079e7aa2.svg",_=c(1),O=[j,b,u],x=function(){var e=Object(i.useState)(0),t=Object(l.a)(e,2),c=t[0],s=t[1];return Object(_.jsxs)("div",{className:"carousel",children:[Object(_.jsxs)("div",{className:"carousel__content",children:[Object(_.jsx)("button",{onClick:function(){s((function(e){return 0===e?O.length-1:e-1}))},className:"carousel__button",type:"button",children:Object(_.jsx)("img",{src:h,alt:"arrow-left"})}),Object(_.jsx)("div",{className:"carousel__images",children:O.map((function(e,t){return Object(_.jsx)("div",{className:"carousel__image",style:{display:t===c?"inline-block":"none"},children:Object(_.jsx)("img",{src:e,alt:"Slide ".concat(t+1),className:"carousel__img"})},e)}))}),Object(_.jsx)("button",{onClick:function(){s((function(e){return(e+1)%O.length}))},className:"carousel__button",type:"button",children:Object(_.jsx)("img",{src:m,alt:"arrow-right"})})]}),Object(_.jsx)("div",{className:"carousel__dots",children:O.map((function(e,t){return Object(_.jsx)("div",{onKeyDown:function(e){return function(e,t){"Enter"!==e.key&&" "!==e.key||s(t)}(e,t)},className:d()("carousel__dot",{active:t===c}),onClick:function(){return s(t)}},e)}))})]})},f=(c(30),[{id:1,content:"Card 1"},{id:2,content:"Card 2"},{id:3,content:"Card 3"},{id:4,content:"Card 4"},{id:5,content:"Card 5"},{id:6,content:"Card 6"},{id:7,content:"Card 7"},{id:8,content:"Card 8"}]),v=function(e){var t=e.title,c=Object(i.useState)(0),s=Object(l.a)(c,2),a=s[0],n=s[1],r=f.slice(a,a+4);return Object(_.jsxs)("div",{className:"ProductsSlider",children:[Object(_.jsxs)("div",{className:"ProductsSlider__content",children:[Object(_.jsx)("h2",{className:"ProductsSlider__title",children:t}),Object(_.jsxs)("div",{className:"ProductsSlider__buttons",children:[Object(_.jsx)("button",{type:"button",onClick:function(){n((function(e){return Math.max(0,e-1)}))},disabled:0===a,className:"ProductsSlider__button",children:Object(_.jsx)("img",{src:h,alt:"arrow-left"})}),Object(_.jsx)("button",{type:"button",onClick:function(){n((function(e){return Math.min(e+1,f.length-4)}))},disabled:a===f.length-4,className:"ProductsSlider__button",children:Object(_.jsx)("img",{src:m,alt:"arrow-right"})})]})]}),Object(_.jsx)("div",{className:"ProductsSlider__cards",children:r.map((function(e){return Object(_.jsx)("div",{className:"ProductsSlider__card",children:e.content},e.id)}))})]})},N=function(){return Object(_.jsxs)("div",{className:"container",children:[Object(_.jsx)(x,{}),Object(_.jsx)(v,{title:"Hot prices"})]})},g=function(){return Object(_.jsx)("div",{className:"container",children:Object(_.jsx)("div",{children:"PhonesPage"})})},p=function(){return Object(_.jsx)("div",{className:"container",children:Object(_.jsx)("div",{children:"TabletsPage"})})},k=function(){return Object(_.jsx)("div",{className:"container",children:Object(_.jsx)("div",{children:"AccessoriesPage"})})},C=(c(31),c.p+"static/media/logo.839aa95d.svg"),P=c.p+"static/media/favorites-default.b228ef13.svg",y=c.p+"static/media/shopping-bag.499582d5.svg",S=(c(32),function(){return Object(_.jsxs)("header",{className:"header",children:[Object(_.jsxs)("nav",{className:"header__nav",children:[Object(_.jsx)(n.b,{to:"/",className:"header__logo",children:Object(_.jsx)("img",{src:C,alt:"logo"})}),Object(_.jsxs)("ul",{className:"header__menu",children:[Object(_.jsx)("li",{className:"header__item",children:Object(_.jsx)(n.c,{to:"/",className:function(e){var t=e.isActive;return d()("header__link",{"header__link--active":t})},children:"Home"})}),Object(_.jsx)("li",{className:"header__item",children:Object(_.jsx)(n.c,{to:"/phones",className:function(e){var t=e.isActive;return d()("header__link",{"header__link--active":t})},children:"Phones"})}),Object(_.jsx)("li",{className:"header__item",children:Object(_.jsx)(n.c,{to:"/tablets",className:function(e){var t=e.isActive;return d()("header__link",{"header__link--active":t})},children:"Tablets"})}),Object(_.jsx)("li",{className:"header__item",children:Object(_.jsx)(n.c,{to:"/accessories",className:function(e){var t=e.isActive;return d()("header__link",{"header__link--active":t})},children:"Accessories"})})]})]}),Object(_.jsxs)("div",{className:"header__buttons",children:[Object(_.jsx)(n.c,{to:"/favorites",className:"header__button",children:Object(_.jsx)("img",{src:P,alt:"favorites",className:"header__button-image"})}),Object(_.jsx)(n.c,{to:"/cart",className:"header__button",children:Object(_.jsx)("img",{src:y,alt:"cart",className:"header__button-image"})})]})]})}),w=c.p+"static/media/footer-button.470683b8.svg",A=(c(34),function(){return Object(_.jsx)("footer",{className:"footer",children:Object(_.jsx)("div",{className:"container",children:Object(_.jsxs)("div",{className:"footer__content",children:[Object(_.jsx)(n.b,{to:"/",className:"footer__logo",children:Object(_.jsx)("img",{src:C,alt:"logo"})}),Object(_.jsxs)("ul",{className:"footer__menu",children:[Object(_.jsx)("li",{className:"footer__item",children:Object(_.jsx)(n.b,{to:"https://github.com/sheva10barca",children:"Github"})}),Object(_.jsx)("li",{className:"footer__item",children:Object(_.jsx)(n.b,{to:"/contacts",children:"Contacts"})}),Object(_.jsx)("li",{className:"footer__item",children:Object(_.jsx)(n.b,{to:"/rights",children:"Rights"})})]}),Object(_.jsxs)("div",{className:"footer__button",children:[Object(_.jsx)("div",{className:"footer__button-text",children:"Back to top"}),Object(_.jsx)("div",{className:"footer__button-arrow",children:Object(_.jsx)("button",{type:"button",className:"footer__button-btn",children:Object(_.jsx)("img",{src:w,alt:"button back to top"})})})]})]})})})}),B=function(){return Object(_.jsxs)("div",{className:"app",children:[Object(_.jsx)(S,{}),Object(_.jsx)("main",{children:Object(_.jsxs)(r.c,{children:[Object(_.jsx)(r.a,{path:"/",element:Object(_.jsx)(N,{})}),Object(_.jsx)(r.a,{path:"/phones",element:Object(_.jsx)(g,{})}),Object(_.jsx)(r.a,{path:"/tablets",element:Object(_.jsx)(p,{})}),Object(_.jsx)(r.a,{path:"/accessories",element:Object(_.jsx)(k,{})})]})}),Object(_.jsx)(A,{})]})};a.a.render(Object(_.jsx)(n.a,{children:Object(_.jsx)(B,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.9f67f5d1.chunk.js.map