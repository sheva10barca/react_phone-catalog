(this["webpackJsonpreact_phone-catalog"]=this["webpackJsonpreact_phone-catalog"]||[]).push([[0],{30:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){"use strict";c.r(t);var s,a=c(24),n=c.n(a),r=c(7),i=c(6),o=c(5),l=c(4),d=c.n(l),j=c(1),u=c(3),b=c(9),h=c.n(b),_=(c(30),c.p+"static/media/banner1.b4eeda8b.png"),m=c.p+"static/media/banner2.bdd2e0fc.png",O=c.p+"static/media/banner3.a962057c.png",x=c.p+"static/media/arrow-left.7e79118d.svg",p=c.p+"static/media/arrow-right.079e7aa2.svg",v=c(0),f=[_,m,O],g=function(){var e=Object(j.useState)(0),t=Object(o.a)(e,2),c=t[0],s=t[1],a=function(){s((function(e){return(e+1)%f.length}))};return Object(j.useEffect)((function(){var e=setInterval(a,5e3);return function(){return clearInterval(e)}}),[]),Object(v.jsxs)("div",{className:"carousel",children:[Object(v.jsxs)("div",{className:"carousel__content",children:[Object(v.jsx)("button",{onClick:function(){s((function(e){return 0===e?f.length-1:e-1}))},className:"carousel__button",type:"button",children:Object(v.jsx)("img",{src:x,alt:"arrow-left"})}),Object(v.jsx)("div",{className:"carousel__images",children:f.map((function(e,t){return Object(v.jsx)("div",{className:"carousel__image",style:{opacity:t===c?1:0},children:Object(v.jsx)("img",{src:e,alt:"Slide ".concat(t+1),className:"carousel__img"})},e)}))}),Object(v.jsx)("button",{onClick:a,className:"carousel__button",type:"button",children:Object(v.jsx)("img",{src:p,alt:"arrow-right"})})]}),Object(v.jsx)("div",{className:"carousel__dots",children:f.map((function(e,t){return Object(v.jsx)("div",{onKeyDown:function(e){return function(e,t){"Enter"!==e.key&&" "!==e.key||s(t)}(e,t)},className:h()("carousel__dot",{active:t===c}),onClick:function(){return s(t)}},e)}))})]})},N=(c(32),c.p+"static/media/heart.857e9a09.svg"),y=(c(33),function(e){var t=e.product,c=t.name,s=t.price,a=t.discount,n=t.screen,r=t.capacity,i=t.ram,o=t.imageUrl,l=function(e,t){return e-e/100*t}(s,a);return Object(v.jsx)("div",{className:"ProductCard",children:Object(v.jsxs)("div",{className:"ProductCard__content",children:[Object(v.jsx)("div",{className:"ProductCard__photo",children:Object(v.jsx)("img",{src:o,alt:"product",className:"ProductCard__img"})}),Object(v.jsx)("div",{className:"ProductCard__title",children:c}),Object(v.jsxs)("div",{className:"ProductCard__price",children:[Object(v.jsx)("div",{className:"ProductCard__price-normal",children:"$".concat(l)}),a>0&&Object(v.jsx)("div",{className:"ProductCard__price-discounted",children:"$".concat(s)})]}),Object(v.jsxs)("div",{className:"ProductCard__details",children:[Object(v.jsxs)("div",{className:"ProductCard__details-item",children:[Object(v.jsx)("div",{className:"ProductCard__details-item__name",children:"Screen"}),Object(v.jsx)("div",{className:"ProductCard__details-item__value",children:n||"unknown"})]}),Object(v.jsxs)("div",{className:"ProductCard__details-item",children:[Object(v.jsx)("div",{className:"ProductCard__details-item__name",children:"Capacity"}),Object(v.jsx)("div",{className:"ProductCard__details-item__value",children:r||"unknown"})]}),Object(v.jsxs)("div",{className:"ProductCard__details-item",children:[Object(v.jsx)("div",{className:"ProductCard__details-item__name",children:"RAM"}),Object(v.jsx)("div",{className:"ProductCard__details-item__value",children:i||"unknown"})]})]}),Object(v.jsxs)("div",{className:"ProductCard__buttons",children:[Object(v.jsx)("button",{className:"ProductCard__buttons-cart",type:"button",children:"Add to cart"}),Object(v.jsx)("button",{className:"ProductCard__buttons-fav",type:"button",children:Object(v.jsx)("img",{src:N,alt:"heart"})})]})]})})}),P=function(e){var t=e.title,c=e.products,s=Object(j.useState)(0),a=Object(o.a)(s,2),n=a[0],r=a[1],i=c.slice(n,n+4);return Object(v.jsxs)("div",{className:"ProductsSlider",children:[Object(v.jsxs)("div",{className:"ProductsSlider__content",children:[Object(v.jsx)("h2",{className:"ProductsSlider__title",children:t}),Object(v.jsxs)("div",{className:"ProductsSlider__buttons",children:[Object(v.jsx)("button",{type:"button",onClick:function(){r((function(e){return Math.max(0,e-1)}))},disabled:0===n,className:"ProductsSlider__button",children:Object(v.jsx)("img",{src:x,alt:"arrow-left"})}),Object(v.jsx)("button",{type:"button",onClick:function(){r((function(e){return Math.min(e+1,c.length-4)}))},disabled:n===c.length-4,className:"ProductsSlider__button",children:Object(v.jsx)("img",{src:p,alt:"arrow-right"})})]})]}),Object(v.jsx)("div",{className:"ProductsSlider__cards","data-cy":"cardsContainer",children:i.map((function(e){return Object(v.jsx)("div",{className:"ProductsSlider__card",children:Object(v.jsx)(y,{product:e})},e.id)}))})]})};c(34);!function(e){e.phone="phone",e.tablet="tablet",e.accessory="accessory"}(s||(s={}));var C=function(e){var t=e.products,c=function(e,t){return e.filter((function(e){return e.type===t})).length};return Object(v.jsxs)("div",{className:"ShopByCategory",children:[Object(v.jsx)("h2",{className:"ShopByCategory__title",children:"Shop by category"}),Object(v.jsxs)("div",{className:"ShopByCategory__links","data-cy":"categoryLinksContainer",children:[Object(v.jsxs)(r.b,{to:"/phones",className:"ShopByCategory__link",children:[Object(v.jsx)("div",{className:"ShopByCategory__link-photo ShopByCategory__link-photo__phones"}),Object(v.jsx)("h3",{className:"ShopByCategory__link-title",children:"Mobile phones"}),Object(v.jsx)("h4",{className:"ShopByCategory__link-subtitle",children:"".concat(c(t,s.phone)," models")})]}),Object(v.jsxs)(r.b,{to:"/tablets",className:"ShopByCategory__link",children:[Object(v.jsx)("div",{className:"ShopByCategory__link-photo ShopByCategory__link-photo__tablets"}),Object(v.jsx)("h3",{className:"ShopByCategory__link-title",children:"Tablets"}),Object(v.jsx)("h4",{className:"ShopByCategory__link-subtitle",children:"".concat(c(t,s.tablet)," models")})]}),Object(v.jsxs)(r.b,{to:"/accessories",className:"ShopByCategory__link",children:[Object(v.jsx)("div",{className:"ShopByCategory__link-photo ShopByCategory__link-photo__accessories"}),Object(v.jsx)("h3",{className:"ShopByCategory__link-title",children:"Accessories"}),Object(v.jsx)("h4",{className:"ShopByCategory__link-subtitle",children:"".concat(c(t,s.accessory)," models")})]})]})]})},k=function(e){var t=e.products,c=t.filter((function(e){return e.discount>0})).sort((function(e,t){return e.discount-t.discount})),s=t.filter((function(e){return 0===e.discount})).sort((function(e,t){return t.price-e.price}));return Object(v.jsxs)("div",{className:"container",children:[Object(v.jsx)(g,{}),Object(v.jsx)(P,{title:"Hot prices",products:c}),Object(v.jsx)(C,{products:t}),Object(v.jsx)(P,{title:"Brand new models",products:s})]})},S=c(8),w=(c(35),function(e){var t=e.options,c=e.value,s=e.onChange,a=Object(j.useState)(!1),n=Object(o.a)(a,2),r=n[0],i=n[1],l=function(){i((function(e){return!e}))},d=t.find((function(e){return e.value===c}));Object(j.useEffect)((function(){var e=function(e){"Escape"===e.key&&i(!1)};return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}),[]);return Object(v.jsxs)("div",{className:"DropDown",children:[Object(v.jsx)("div",{className:h()("DropDown__select",{"DropDown__select--is-active":r}),onClick:l,onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),l())},role:"button",tabIndex:0,children:d?d.label:""}),r&&Object(v.jsx)("ul",{className:"DropDown__list",children:t.map((function(e){return Object(v.jsx)("li",{className:h()("DropDown__item",{"DropDown__item--selected":c===e.value}),onClick:function(){return t=e.value,s(t),void i(!1);var t},children:e.label},e.value)}))})]})}),B=(c(36),[{value:"age",label:"Newest"},{value:"name",label:"Alphabetically"},{value:"price",label:"Cheapest"}]),A=function(e){var t=e.phones,c=Object(j.useState)("age"),s=Object(o.a)(c,2),a=s[0],n=s[1],r=Object(j.useState)(4),i=Object(o.a)(r,2),l=i[0],d=i[1],u=Object(j.useState)(1),b=Object(o.a)(u,2),_=b[0],m=b[1],O=t.length,f=[4,8,O],g=O>4&&l!==O,N=function(){var e=Object(S.a)(t);switch(a){case"age":default:e.sort((function(e,t){return t.age-e.age}));break;case"name":e.sort((function(e,t){return e.name.localeCompare(t.name)}));break;case"price":e.sort((function(e,t){return e.price-t.price}))}return e}(),P=(_-1)*l,C=P+l,k=N.slice(P,C);return Object(v.jsx)("div",{className:"PhonesPage",children:Object(v.jsx)("div",{className:"container",children:0===t.length?Object(v.jsx)("h1",{children:"Loading..."}):Object(v.jsxs)("div",{className:"PhonesPage__content",children:[Object(v.jsx)("div",{style:{marginTop:24},children:"navigation"}),Object(v.jsx)("h1",{className:"PhonesPage__title",children:"Mobile phones"}),Object(v.jsx)("h3",{className:"PhonesPage__subtitle",children:"".concat(O," models")}),Object(v.jsxs)("div",{className:"PhonesPage__filters",children:[Object(v.jsxs)("div",{className:"PhonesPage__filter",children:[Object(v.jsx)("div",{className:"PhonesPage__label",children:"Sort by"}),Object(v.jsx)(w,{options:B,value:a,onChange:function(e){n(e)}})]}),Object(v.jsxs)("div",{className:"PhonesPage__filter",children:[Object(v.jsx)("div",{className:"PhonesPage__label",children:"Items on page"}),Object(v.jsx)(w,{options:f.map((function(e){return{value:String(e),label:e===O?"All":String(e)}})),value:String(l),onChange:function(e){d(parseInt(e,10)),m(1)}})]})]}),Object(v.jsx)("div",{className:"ProductsList","data-cy":"productList",children:k.map((function(e){return Object(v.jsx)(y,{product:e},e.id)}))}),g&&Object(v.jsxs)("div",{className:"PhonesPage__pagination","data-cy":"pagination",children:[Object(v.jsx)("button",{type:"button",className:"PhonesPage__button PhonesPage__button-prev",onClick:function(){_>1&&m((function(e){return e-1}))},"data-cy":"paginationLeft",children:Object(v.jsx)("img",{src:x,alt:"previous page button"})}),function(){for(var e=Math.ceil(O/l),t=[],c=1;c<=e;c+=1)t.push(c);return t}().map((function(e){return Object(v.jsx)("button",{type:"button",className:h()("PhonesPage__button","PhonesPage__button-page",{active:_===e}),onClick:function(){m(e)},children:e},e)})),Object(v.jsx)("button",{type:"button",className:"PhonesPage__button PhonesPage__button-next",onClick:function(){var e=Math.ceil(O/l);_<e&&m((function(e){return e+1}))},"data-cy":"paginationRight",children:Object(v.jsx)("img",{src:p,alt:"next page button"})})]})]})})})},D=(c(37),function(e){var t=e.category;return Object(v.jsx)("div",{className:"NoResults",children:Object(v.jsx)("h1",{className:"NoResults__title",children:"".concat(t," not found")})})}),E=(c(38),function(e){var t=e.tablets;return Object(v.jsx)("div",{className:"TabletsPage",children:Object(v.jsx)("div",{className:"container",children:0===t.length?Object(v.jsx)(D,{category:"Tablets"}):Object(v.jsxs)("div",{className:"TabletsPage__content",children:[Object(v.jsx)("h1",{className:"TabletsPage__title",children:"Tablets"}),Object(v.jsx)("div",{className:"TabletsPage__list","data-cy":"productList",children:t.map((function(e){return Object(v.jsx)(y,{product:e},e.id)}))})]})})})}),T=(c(39),function(e){var t=e.accessories;return Object(v.jsx)("div",{className:"AccessoriesPage",children:Object(v.jsx)("div",{className:"container",children:0===t.length?Object(v.jsx)(D,{category:"Accessories"}):Object(v.jsxs)("div",{className:"AccessoriesPage__content",children:[Object(v.jsx)("h1",{className:"AccessoriesPage__title",children:"Accessories"}),Object(v.jsx)("div",{className:"AccessoriesPage__list","data-cy":"productList",children:t.map((function(e){return Object(v.jsx)(y,{product:e},e.id)}))})]})})})}),L=c.p+"static/media/logo.839aa95d.svg",M=c.p+"static/media/favorites-default.b228ef13.svg",I=c.p+"static/media/shopping-bag.499582d5.svg",R=(c(40),function(){return Object(v.jsxs)("header",{className:"header",children:[Object(v.jsxs)("nav",{className:"header__nav",children:[Object(v.jsx)(r.b,{to:"/",className:"header__logo",children:Object(v.jsx)("img",{src:L,alt:"logo"})}),Object(v.jsxs)("ul",{className:"header__menu",children:[Object(v.jsx)("li",{className:"header__item",children:Object(v.jsx)(r.c,{to:"/",className:function(e){var t=e.isActive;return h()("header__link",{"header__link--active":t})},children:"Home"})}),Object(v.jsx)("li",{className:"header__item",children:Object(v.jsx)(r.c,{to:"/phones",className:function(e){var t=e.isActive;return h()("header__link",{"header__link--active":t})},children:"Phones"})}),Object(v.jsx)("li",{className:"header__item",children:Object(v.jsx)(r.c,{to:"/tablets",className:function(e){var t=e.isActive;return h()("header__link",{"header__link--active":t})},children:"Tablets"})}),Object(v.jsx)("li",{className:"header__item",children:Object(v.jsx)(r.c,{to:"/accessories",className:function(e){var t=e.isActive;return h()("header__link",{"header__link--active":t})},children:"Accessories"})})]})]}),Object(v.jsxs)("div",{className:"header__buttons",children:[Object(v.jsx)(r.c,{to:"/favorites",className:"header__button",children:Object(v.jsx)("img",{src:M,alt:"favorites",className:"header__button-image"})}),Object(v.jsx)(r.c,{to:"/cart",className:"header__button",children:Object(v.jsx)("img",{src:I,alt:"cart",className:"header__button-image"})})]})]})}),J=c.p+"static/media/footer-button.470683b8.svg",G=(c(41),function(){return Object(v.jsx)("footer",{className:"footer",children:Object(v.jsx)("div",{className:"container",children:Object(v.jsxs)("div",{className:"footer__content",children:[Object(v.jsx)(r.b,{to:"/",className:"footer__logo",children:Object(v.jsx)("img",{src:L,alt:"logo"})}),Object(v.jsxs)("ul",{className:"footer__menu",children:[Object(v.jsx)("li",{className:"footer__item",children:Object(v.jsx)(r.b,{to:"https://github.com/sheva10barca",children:"Github"})}),Object(v.jsx)("li",{className:"footer__item",children:Object(v.jsx)(r.b,{to:"/contacts",children:"Contacts"})}),Object(v.jsx)("li",{className:"footer__item",children:Object(v.jsx)(r.b,{to:"/rights",children:"Rights"})})]}),Object(v.jsxs)("div",{className:"footer__button",children:[Object(v.jsx)("div",{className:"footer__button-text",children:"Back to top"}),Object(v.jsx)("div",{className:"footer__button-arrow",children:Object(v.jsx)("button",{type:"button",className:"footer__button-btn",children:Object(v.jsx)("img",{src:J,alt:"button back to top"})})})]})]})})})}),H="https://mate-academy.github.io/react_phone-catalog/api/products";function K(e){return new Promise((function(t){setTimeout(t,e)}))}function U(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,s={method:t};return c&&(s.body=JSON.stringify(c),s.headers={"Content-Type":"application/json; charset=UTF-8"}),K(300).then((function(){return fetch(H+e,s)})).then((function(e){if(!e.ok)throw new Error;return e.json()}))}var $=function(e){return U(e)},F=(c(42),function(){var e=Object(j.useState)([]),t=Object(o.a)(e,2),c=t[0],a=t[1],n=function(){var e=Object(i.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,$(".json");case 3:t=e.sent,a(t),e.next=10;break;case 7:throw e.prev=7,e.t0=e.catch(0),new Error("Loading Error");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();Object(j.useEffect)((function(){n()}),[]);var r=c.filter((function(e){return e.type===s.phone})),l=c.filter((function(e){return e.type===s.tablet})),b=c.filter((function(e){return e.type===s.accessory}));return Object(v.jsxs)("div",{className:"app",children:[Object(v.jsx)(R,{}),Object(v.jsx)("main",{children:Object(v.jsxs)(u.c,{children:[Object(v.jsx)(u.a,{path:"/",element:Object(v.jsx)(k,{products:c})}),Object(v.jsx)(u.a,{path:"/phones",element:Object(v.jsx)(A,{phones:r})}),Object(v.jsx)(u.a,{path:"/tablets",element:Object(v.jsx)(E,{tablets:l})}),Object(v.jsx)(u.a,{path:"/accessories",element:Object(v.jsx)(T,{accessories:b})})]})}),Object(v.jsx)(G,{})]})});n.a.render(Object(v.jsx)(r.a,{children:Object(v.jsx)(F,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.4196a620.chunk.js.map