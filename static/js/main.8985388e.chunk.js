(this["webpackJsonpreact_phone-catalog"]=this["webpackJsonpreact_phone-catalog"]||[]).push([[0],Array(41).concat([function(e,t,c){},,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var s=c(30),a=c.n(s),n=c(5),i=c(8),r=c(4),o=c(6),l=c.n(o),d=c(0),u=c.n(d),j=c(3),b=function(e,t){var c=Object(d.useState)((function(){try{var c=localStorage.getItem(e);return c?JSON.parse(c):t}catch(s){return t}})),s=Object(r.a)(c,2),a=s[0],n=s[1];return[a,function(t){n(t),localStorage.setItem(e,JSON.stringify(t))}]},m=c(1),_=u.a.createContext({favoriteProducts:[],setFavoriteProducts:function(){}}),h=function(e){var t=e.children,c=b("favorites",[]),s=Object(r.a)(c,2),a=s[0],n=s[1],i=Object(d.useMemo)((function(){return{favoriteProducts:a,setFavoriteProducts:n}}),[a]);return Object(m.jsx)(_.Provider,{value:i,children:t})},O=u.a.createContext({productsInCart:[],setProductsInCart:function(){}}),v=function(e){var t=e.children,c=b("cart",[]),s=Object(r.a)(c,2),a=s[0],n=s[1],i=Object(d.useMemo)((function(){return{productsInCart:a,setProductsInCart:n}}),[a]);return Object(m.jsx)(O.Provider,{value:i,children:t})},x=c(7),f=c.n(x),p=(c(41),c.p+"static/media/banner1.b4eeda8b.png"),N=c.p+"static/media/banner2.bdd2e0fc.png",g=c.p+"static/media/banner3.a962057c.png",y=c.p+"static/media/arrow-left.7e79118d.svg",P=c.p+"static/media/arrow-right.079e7aa2.svg",C=[p,N,g],k=function(){var e=Object(d.useState)(0),t=Object(r.a)(e,2),c=t[0],s=t[1],a=function(){s((function(e){return(e+1)%C.length}))};return Object(d.useEffect)((function(){var e=setInterval(a,5e3);return function(){return clearInterval(e)}}),[]),Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)("div",{className:"carousel",children:[Object(m.jsxs)("div",{className:"carousel__content",children:[Object(m.jsx)("button",{onClick:function(){s((function(e){return 0===e?C.length-1:e-1}))},className:"carousel__button",type:"button",children:Object(m.jsx)("img",{src:y,alt:"arrow-left"})}),Object(m.jsx)("div",{className:"carousel__images",children:C.map((function(e,t){return Object(m.jsx)("div",{className:"carousel__image",style:{opacity:t===c?1:0},children:Object(m.jsx)("img",{src:e,alt:"Slide ".concat(t+1),className:"carousel__img"})},e)}))}),Object(m.jsx)("button",{onClick:a,className:"carousel__button",type:"button",children:Object(m.jsx)("img",{src:P,alt:"arrow-right"})})]}),Object(m.jsx)("div",{className:"carousel__dots",children:C.map((function(e,t){return Object(m.jsx)("div",{onKeyDown:function(e){return function(e,t){"Enter"!==e.key&&" "!==e.key||s(t)}(e,t)},className:f()("carousel__dot",{active:t===c}),onClick:function(){return s(t)}},e)}))})]})})},S=c(10),w=c(11),D=c(34),B=(c(44),function(e){var t=e.handleAddToCart,c=e.id,s=Object(d.useContext)(O).productsInCart.some((function(e){return e.id===c&&0!==e.quantity}));return Object(m.jsx)("button",{type:"button",className:f()("AddToCartButton",{isItemInCart:s}),onClick:function(){t()},children:s?"Added to cart":"Add to cart"})}),I=(c(45),function(e){var t=e.handleAddToFavorites,c=e.isItemFav;return Object(m.jsx)("button",{type:"button",className:f()("AddToFavButton",{isItemFav:c}),onClick:t,"data-cy":"addToFavorite"})}),F="https://mate-academy.github.io/react_phone-catalog/api/products";function A(e){return new Promise((function(t){setTimeout(t,e)}))}function M(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,s={method:t};return c&&(s.body=JSON.stringify(c),s.headers={"Content-Type":"application/json; charset=UTF-8"}),A(300).then((function(){return fetch(F+e,s)})).then((function(e){if(!e.ok)throw new Error;return e.json()}))}var T,E=function(e){return M(e)},q=function(e){return E("/".concat(e,".json"))},L=function(e,t){return e-e/100*t};!function(e){e.phone="phone",e.tablet="tablet",e.accessory="accessory"}(T||(T={}));var R=c.p+"static/media/error.25000083.svg",U=(c(46),u.a.memo((function(e){var t=e.product,c=t.name,s=t.price,a=t.discount,o=t.screen,u=t.capacity,j=t.ram,b=t.id,h=t.imageUrl,v=t.type,x=Object(d.useContext)(O),f=x.productsInCart,p=x.setProductsInCart,N=Object(d.useContext)(_),g=N.favoriteProducts,y=N.setFavoriteProducts,P=Object(d.useState)(!1),C=Object(r.a)(P,2),k=C[0],F=C[1],A=Object(d.useState)(!1),M=Object(r.a)(A,2),E=M[0],U=M[1],z=Object(d.useState)(),$=Object(r.a)(z,2),G=$[0],J=$[1];Object(d.useEffect)((function(){F(!0);var e=function(){var e=Object(i.a)(l.a.mark((function e(){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,q(t.id);case 3:c=e.sent,J(c),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),U(!0);case 10:return e.prev=10,F(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})));return function(){return e.apply(this,arguments)}}();return e(),function(){F(!1)}}),[]);var H=L(s,a),W=function(e){switch(e){case T.tablet:return"tablets";case T.accessory:return"accessories";case T.phone:default:return"phones"}}(v),Y=f.some((function(e){return e.id===b})),K=g.some((function(e){return e.id===b})),Q=Object(d.useRef)(null);return Object(m.jsx)("div",{className:"ProductCard",ref:Q,children:Object(m.jsxs)("div",{className:"ProductCard__content",children:[E&&Object(m.jsxs)("div",{className:"ProductCard__error",children:[Object(m.jsx)("img",{src:R,alt:"error",className:"ProductCard__error-img"}),Object(m.jsx)("h2",{children:"Product download error"})]}),k&&!E?Object(m.jsx)(D.a,{strokeColor:"#EB5757",strokeWidth:"5",animationDuration:"0.75",width:"66",visible:k}):!E&&Object(m.jsxs)(m.Fragment,{children:[G&&Object(m.jsx)(n.b,{to:"/".concat(W,"/").concat(b),state:G,className:"ProductCard__photo",onClick:function(){window.scrollTo({top:0})},children:Object(m.jsx)("img",{src:h,alt:"product",className:"ProductCard__img"})}),Object(m.jsx)("div",{className:"ProductCard__title",children:c}),Object(m.jsxs)("div",{className:"ProductCard__price",children:[Object(m.jsx)("div",{className:"ProductCard__price-normal",children:"$".concat(H)}),a>0&&Object(m.jsx)("div",{className:"ProductCard__price-discounted",children:"$".concat(s)})]}),Object(m.jsxs)("div",{className:"ProductCard__details",children:[Object(m.jsxs)("div",{className:"ProductCard__details-item",children:[Object(m.jsx)("div",{className:"ProductCard__details-item__name",children:"Screen"}),Object(m.jsx)("div",{className:"ProductCard__details-item__value",children:o||"-"})]}),Object(m.jsxs)("div",{className:"ProductCard__details-item",children:[Object(m.jsx)("div",{className:"ProductCard__details-item__name",children:"Capacity"}),Object(m.jsx)("div",{className:"ProductCard__details-item__value",children:u||"-"})]}),Object(m.jsxs)("div",{className:"ProductCard__details-item",children:[Object(m.jsx)("div",{className:"ProductCard__details-item__name",children:"RAM"}),Object(m.jsx)("div",{className:"ProductCard__details-item__value",children:j||"-"})]})]}),Object(m.jsxs)("div",{className:"ProductCard__buttons",children:[Object(m.jsx)(B,{handleAddToCart:function(){if(Y){var e=f.filter((function(e){return e.id!==b}));p(e)}else{var c=Object(w.a)(Object(w.a)({},t),{},{quantity:1});p([].concat(Object(S.a)(f),[c]))}},id:b}),Object(m.jsx)(I,{handleAddToFavorites:function(){if(K){var e=g.filter((function(e){return e.id!==b}));y(e)}else y([].concat(Object(S.a)(g),[t]))},isItemFav:K})]})]})]})})}))),z=(c(47),u.a.memo((function(e){var t=e.title,c=e.products,s=Object(d.useState)(0),a=Object(r.a)(s,2),n=a[0],i=a[1],o=Object(d.useMemo)((function(){return c.slice(n,n+4)}),[c,n]),l=0===n,u=n===c.length-4;return Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)("div",{className:"ProductsSlider",children:[Object(m.jsxs)("div",{className:"ProductsSlider__content",children:[Object(m.jsx)("h2",{className:"ProductsSlider__title",children:t}),Object(m.jsxs)("div",{className:"ProductsSlider__buttons",children:[Object(m.jsx)("button",{type:"button",onClick:function(){i((function(e){return Math.max(0,e-1)}))},disabled:l,className:f()("ProductsSlider__button",{disabled:l}),children:Object(m.jsx)("img",{src:y,alt:"arrow-left"})}),Object(m.jsx)("button",{type:"button",onClick:function(){i((function(e){return Math.min(e+1,c.length-4)}))},disabled:u,className:f()("ProductsSlider__button",{disabled:u}),children:Object(m.jsx)("img",{src:P,alt:"arrow-right"})})]})]}),Object(m.jsx)("div",{className:"ProductsSlider__cards","data-cy":"cardsContainer",children:o.map((function(e){return Object(m.jsx)("div",{className:"ProductsSlider__card",children:Object(m.jsx)(U,{product:e})},e.id)}))})]})})}))),$=(c(48),u.a.memo((function(e){var t=e.products,c=function(e,t){return e.filter((function(e){return e.type===t})).length};return Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)("div",{className:"ShopByCategory",children:[Object(m.jsx)("h2",{className:"ShopByCategory__title",children:"Shop by category"}),Object(m.jsxs)("div",{className:"ShopByCategory__links","data-cy":"categoryLinksContainer",children:[Object(m.jsxs)(n.b,{to:"/phones",className:"ShopByCategory__link",onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},children:[Object(m.jsx)("div",{className:"ShopByCategory__link-photo ShopByCategory__link-photo__phones"}),Object(m.jsx)("h3",{className:"ShopByCategory__link-title",children:"Mobile phones"}),Object(m.jsx)("h4",{className:"ShopByCategory__link-subtitle",children:"".concat(c(t,T.phone)," models")})]}),Object(m.jsxs)(n.b,{to:"/tablets",className:"ShopByCategory__link",onClick:function(){window.scrollTo({top:0})},children:[Object(m.jsx)("div",{className:"ShopByCategory__link-photo ShopByCategory__link-photo__tablets"}),Object(m.jsx)("h3",{className:"ShopByCategory__link-title",children:"Tablets"}),Object(m.jsx)("h4",{className:"ShopByCategory__link-subtitle",children:"".concat(c(t,T.tablet)," models")})]}),Object(m.jsxs)(n.b,{to:"/accessories",className:"ShopByCategory__link",onClick:function(){window.scrollTo({top:0})},children:[Object(m.jsx)("div",{className:"ShopByCategory__link-photo ShopByCategory__link-photo__accessories"}),Object(m.jsx)("h3",{className:"ShopByCategory__link-title",children:"Accessories"}),Object(m.jsx)("h4",{className:"ShopByCategory__link-subtitle",children:"".concat(c(t,T.accessory)," models")})]})]})]})})}))),G=u.a.memo((function(e){var t=e.products,c=Object(d.useMemo)((function(){return t.filter((function(e){return e.discount>0})).sort((function(e,t){return e.discount-t.discount}))}),[t]),s=Object(d.useMemo)((function(){return t.filter((function(e){return 0===e.discount})).sort((function(e,t){return t.price-e.price}))}),[t]);return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(k,{}),Object(m.jsx)(z,{title:"Hot prices",products:c}),Object(m.jsx)($,{products:t}),Object(m.jsx)(z,{title:"Brand new models",products:s})]})})),J=(c(49),function(){var e=Object(j.n)();return Object(m.jsxs)("button",{"data-cy":"backButton",type:"button",className:"BackButton",onClick:function(){return e(-1)},children:[Object(m.jsx)("img",{src:y,alt:"back button",className:"BackButton__image"}),Object(m.jsx)("div",{className:"BackButton__text",children:"Back"})]})}),H=c.p+"static/media/cross.0be1ed2a.svg",W=(c(50),"PLUS"),Y="MINUS",K=function(e){var t=e.product,c=t.name,s=t.imageUrl,a=t.price,n=t.discount,i=t.id,r=t.quantity,o=Object(d.useContext)(O),l=o.productsInCart,u=o.setProductsInCart,j=a*r,b=function(e){u(l.filter((function(t){return t.id!==e})))},_=function(e,t){var c=l.some((function(t){return t.id===e}));r&&c&&(t===W&&u(l.map((function(t){return t.id===e?Object(w.a)(Object(w.a)({},t),{},{quantity:r+1}):t}))),t===Y&&u(l.map((function(t){return t.id===e?Object(w.a)(Object(w.a)({},t),{},{quantity:r-1}):t}))),0===r&&b(e))};return Object(m.jsxs)("div",{className:"CartItem",children:[Object(m.jsx)("button",{type:"button",className:"CartItem__remove-btn","data-cy":"cartDeleteButton",onClick:function(){return b(i)},children:Object(m.jsx)("img",{src:H,alt:"delete item"})}),Object(m.jsx)("div",{className:"CartItem__photo",children:Object(m.jsx)("img",{src:s,alt:"",className:"CartItem__img"})}),Object(m.jsx)("div",{className:"CartItem__title",children:c}),Object(m.jsx)("button",{type:"button",className:"CartItem__decrease",onClick:function(){return _(i,Y)},children:"-"}),Object(m.jsx)("div",{className:"CartItem__quantity","data-cy":"productQuantity",children:r}),Object(m.jsx)("button",{type:"button",className:"CartItem__increase",onClick:function(){return _(i,W)},children:"+"}),Object(m.jsx)("div",{className:"CartItem__price",children:"$".concat(n?L(j,n):j)})]})},Q=(c(51),function(e){var t=e.onClose;return Object(d.useEffect)((function(){var e=setTimeout((function(){t()}),3e3);return function(){clearTimeout(e)}}),[t]),Object(m.jsx)("div",{className:"popup",children:Object(m.jsxs)("div",{className:"popup__container",children:[Object(m.jsx)("h2",{className:"popup__title",children:"We are sorry, but this feature is not implemented yet"}),Object(m.jsx)("button",{className:"popup__btn",onClick:t,type:"button",children:"Close"})]})})}),V=function(e){Object(d.useEffect)((function(){var t=document.querySelector("body");return t&&(e?(t.classList.add("popup-open"),t.style.overflow="hidden"):(t.classList.remove("popup-open"),t.style.overflow="auto")),function(){t&&(t.classList.remove("popup-open"),t.style.overflow="auto")}}),[e])},X=(c(52),function(){var e=Object(d.useContext)(O).productsInCart,t=Object(d.useState)(!1),c=Object(r.a)(t,2),s=c[0],a=c[1],i=e.reduce((function(e,t){return e+L(t.price,t.discount)*t.quantity}),0),o=Object(d.useMemo)((function(){return e.reduce((function(e,t){return e+t.quantity}),0)}),[e]),l=function(){a((function(e){return!e}))};return V(s),Object(m.jsx)("div",{className:"CartPage",children:Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)("div",{className:"CartPage__content",children:[Object(m.jsx)(J,{}),0===o?Object(m.jsxs)("h1",{className:"CartPage__title CartPage__title--no-products",children:["Your cart is empty. Maybe you want to choose something in"," ",Object(m.jsx)(n.b,{className:"CartPage__link",to:"/phones",children:"Phones"}),","," ",Object(m.jsx)(n.b,{className:"CartPage__link",to:"/tablets",children:"Tablets"})," ","or"," ",Object(m.jsx)(n.b,{className:"CartPage__link",to:"/accessories",children:"Accessories"})," ","?"]}):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h1",{className:"CartPage__title",children:"Cart"}),Object(m.jsxs)("div",{className:"CartPage__blocks",children:[Object(m.jsx)("div",{className:"CartPage__list",children:e.map((function(e){return 0!==e.quantity&&Object(m.jsx)(K,{product:e},e.id)}))}),Object(m.jsx)("div",{className:"CartPage__checkout",children:Object(m.jsxs)("div",{className:"CartPage__checkout-content",children:[Object(m.jsx)("div",{className:"CartPage__checkout-title",children:"$".concat(i)}),Object(m.jsx)("div",{className:"CartPage__checkout-subtitle",children:"Total for ".concat(o," items")}),Object(m.jsx)("button",{type:"button",className:"CartPage__checkout-button",onClick:l,disabled:s,children:"Checkout"}),s&&Object(m.jsx)(Q,{onClose:l})]})})]})]})]})})})}),Z=c.p+"static/media/arrow-right-gray.a374b573.svg",ee=c.p+"static/media/home.f28213b9.svg",te=(c(53),function(){var e=Object(j.l)().pathname.split("/").filter((function(e){return""!==e})),t=function(e){var t="";return e.map((function(e){return t+="/".concat(e),{label:e.charAt(0).toUpperCase()+e.slice(1),link:t}}))}(e);return Object(m.jsx)("nav",{className:"breadcrumbs","data-cy":"breadCrumbs",children:Object(m.jsxs)("ul",{className:"breadcrumbs__list",children:[Object(m.jsx)("li",{className:"breadcrumbs__item",children:Object(m.jsx)(n.b,{to:"/",children:Object(m.jsx)("img",{src:ee,alt:"home icon",className:"breadcrumbs__icon"})})}),0!==t.length&&Object(m.jsx)("img",{src:Z,alt:""}),t.map((function(c,s){var a=s===e.length-1,i=f()("breadcrumbs__item",{active:a});return Object(m.jsx)(d.Fragment,{children:a?Object(m.jsx)("li",{className:i,children:c.label},c.link):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("li",{className:i,children:Object(m.jsx)(n.b,{to:c.link,children:c.label})},c.link),0!==t.length&&Object(m.jsx)("img",{src:Z,alt:"arrow right"})]})},c.link)}))]})})}),ce=(c(54),u.a.memo((function(e){var t=e.category;return Object(m.jsx)("div",{className:"NoResults",children:Object(m.jsx)("h1",{className:"NoResults__title",children:"".concat(t," not found")})})}))),se=(c(55),u.a.memo((function(e){var t=e.products,c=Object(j.l)(),s=c.state,a=Object(d.useState)(null===s||void 0===s?void 0:s.images[0]),n=Object(r.a)(a,2),i=n[0],o=n[1],l=Object(d.useState)(),u=Object(r.a)(l,2),b=u[0],h=u[1],v=Object(d.useState)(!1),x=Object(r.a)(v,2),f=x[0],p=x[1],N=Object(d.useContext)(O),g=N.productsInCart,y=N.setProductsInCart,P=Object(d.useContext)(_),C=P.favoriteProducts,k=P.setFavoriteProducts;Object(d.useEffect)((function(){(null===s||void 0===s?void 0:s.images[0])!==i&&o(null===s||void 0===s?void 0:s.images[0])}),[null===s||void 0===s?void 0:s.images]),Object(d.useEffect)((function(){!t||b&&(null===b||void 0===b?void 0:b.id)===(null===s||void 0===s?void 0:s.id)||function(){var e=t.find((function(e){return e.id===(null===s||void 0===s?void 0:s.id)}));h(e)}()}),[b,t,null===s||void 0===s?void 0:s.id]);var D=b&&L(b.price,b.discount),F=g.some((function(e){return e.id===(null===s||void 0===s?void 0:s.id)})),A=C.some((function(e){return e.id===(null===s||void 0===s?void 0:s.id)})),M=function(){p((function(e){return!e}))};V(f);var T=Object(d.useMemo)((function(){return Object(S.a)(t).sort((function(){return Math.random()-.5})).filter((function(e){return e.id!==(null===b||void 0===b?void 0:b.id)}))}),[t,b]);return Object(m.jsx)("div",{className:"ProductDetailsPage",children:Object(m.jsxs)("div",{className:"container",children:[b||c.state?Object(m.jsxs)("div",{className:"ProductDetailsPage__content",children:[Object(m.jsx)(te,{}),Object(m.jsx)(J,{}),Object(m.jsx)("h1",{className:"ProductDetailsPage__title",children:null===s||void 0===s?void 0:s.name}),Object(m.jsxs)("div",{className:"ProductDetailsPage__main",children:[Object(m.jsx)("ul",{className:"ProductDetailsPage__list",children:null===s||void 0===s?void 0:s.images.map((function(e){return Object(m.jsx)("li",{className:"ProductDetailsPage__photo",onClick:function(){return o(e)},children:Object(m.jsx)("img",{className:"ProductDetailsPage__photo-img",src:e,alt:"product img"})},e)}))}),Object(m.jsx)("div",{className:"ProductDetailsPage__current",children:Object(m.jsx)("img",{src:i,alt:"main img",className:"ProductDetailsPage__current-img"})}),Object(m.jsxs)("div",{className:"ProductDetailsPage__characteristics",children:[Object(m.jsxs)("div",{className:"ProductDetailsPage__colors colors",children:[Object(m.jsx)("div",{className:"colors__text",children:"Available colors"}),Object(m.jsxs)("div",{className:"colors__list",children:[Object(m.jsx)("button",{className:"colors__link colors__link-active",type:"button",onClick:M,children:Object(m.jsx)("div",{className:"colors__link-color colors__link-color--1"})}),Object(m.jsx)("button",{className:"colors__link",type:"button",onClick:M,children:Object(m.jsx)("div",{className:"colors__link-color colors__link-color--2"})}),Object(m.jsx)("button",{className:"colors__link",type:"button",onClick:M,children:Object(m.jsx)("div",{className:"colors__link-color colors__link-color--3"})}),Object(m.jsx)("button",{className:"colors__link",type:"button",onClick:M,children:Object(m.jsx)("div",{className:"colors__link-color colors__link-color--4"})})]})]}),Object(m.jsxs)("div",{className:"ProductDetailsPage__capacities capacities",children:[Object(m.jsx)("div",{className:"capacities__text",children:"Select capacity"}),Object(m.jsxs)("div",{className:"capacities__list",children:[Object(m.jsx)("button",{type:"button",onClick:M,className:"capacities__link capacities__link-active",children:"64 GB"}),Object(m.jsx)("button",{type:"button",onClick:M,className:"capacities__link",children:"256 GB"}),Object(m.jsx)("button",{type:"button",onClick:M,className:"capacities__link",children:"512 GB"})]})]}),Object(m.jsxs)("div",{className:"ProductDetailsPage__price price",children:[Object(m.jsx)("div",{className:"price__normal",children:"$".concat(D)}),b&&(null===b||void 0===b?void 0:b.discount)>0&&Object(m.jsx)("div",{className:"price__without-discount",children:"$".concat(b.price)})]}),Object(m.jsxs)("div",{className:"ProductDetailsPage__buttons buttons",children:[Object(m.jsx)(B,{handleAddToCart:function(){if(F){var e=g.filter((function(e){return e.id!==(null===s||void 0===s?void 0:s.id)}));y(e)}else if(b){var t=Object(w.a)(Object(w.a)({},b),{},{quantity:1});y([].concat(Object(S.a)(g),[t]))}},id:null===s||void 0===s?void 0:s.id}),Object(m.jsx)(I,{handleAddToFavorites:function(){if(A){var e=C.filter((function(e){return e.id!==(null===s||void 0===s?void 0:s.id)}));k(e)}else b&&k([].concat(Object(S.a)(C),[b]))},isItemFav:A})]}),Object(m.jsxs)("div",{className:"ProductDetailsPage__details details",children:[Object(m.jsxs)("div",{className:"details__item",children:[Object(m.jsx)("div",{className:"details__name",children:"Screen"}),Object(m.jsx)("div",{className:"details__value",children:s.display.screenSize||"-"})]}),Object(m.jsxs)("div",{className:"details__item",children:[Object(m.jsx)("div",{className:"details__name",children:"Resolution"}),Object(m.jsx)("div",{className:"details__value",children:s.display.screenResolution||"-"})]}),Object(m.jsxs)("div",{className:"details__item",children:[Object(m.jsx)("div",{className:"details__name",children:"Processor"}),Object(m.jsx)("div",{className:"details__value",children:s.hardware.cpu||"-"})]}),Object(m.jsxs)("div",{className:"details__item",children:[Object(m.jsx)("div",{className:"details__name",children:"RAM"}),Object(m.jsx)("div",{className:"details__value",children:s.storage.ram||"-"})]})]})]}),Object(m.jsxs)("div",{className:"ProductDetailsPage__id",children:[Object(m.jsx)("div",{className:"ProductDetailsPage__id-name",children:"ID:"}),Object(m.jsx)("div",{className:"ProductDetailsPage__id-value",children:s.id||"-"})]})]}),Object(m.jsxs)("div",{className:"ProductDetailsPage__info",children:[Object(m.jsxs)("div",{className:"ProductDetailsPage__about about","data-cy":"productDescription",children:[Object(m.jsx)("h2",{className:"about__title",children:"About"}),Object(m.jsx)("div",{className:"about__description",children:s.description||"-"})]}),Object(m.jsxs)("div",{className:"ProductDetailsPage__tech tech",children:[Object(m.jsx)("h2",{className:"tech__title",children:"Tech specs"}),Object(m.jsxs)("div",{className:"tech__details details",children:[Object(m.jsxs)("div",{className:"details__item details__item--tech",children:[Object(m.jsx)("div",{className:"details__name",children:"Screen"}),Object(m.jsx)("div",{className:"details__value",children:s.display.screenSize||"-"})]}),Object(m.jsxs)("div",{className:"details__item details__item--tech",children:[Object(m.jsx)("div",{className:"details__name",children:"Resolution"}),Object(m.jsx)("div",{className:"details__value",children:s.display.screenResolution||"-"})]}),Object(m.jsxs)("div",{className:"details__item details__item--tech",children:[Object(m.jsx)("div",{className:"details__name",children:"Processor"}),Object(m.jsx)("div",{className:"details__value",children:s.hardware.cpu||"-"})]}),Object(m.jsxs)("div",{className:"details__item details__item--tech",children:[Object(m.jsx)("div",{className:"details__name",children:"RAM"}),Object(m.jsx)("div",{className:"details__value",children:s.storage.ram||"-"})]}),Object(m.jsxs)("div",{className:"details__item details__item--tech",children:[Object(m.jsx)("div",{className:"details__name",children:"Built in memory"}),Object(m.jsx)("div",{className:"details__value",children:s.storage.flash||"-"})]}),Object(m.jsxs)("div",{className:"details__item details__item--tech",children:[Object(m.jsx)("div",{className:"details__name",children:"Camera"}),Object(m.jsx)("div",{className:"details__value",children:s.camera.primary||"-"})]}),Object(m.jsxs)("div",{className:"details__item details__item--tech",children:[Object(m.jsx)("div",{className:"details__name",children:"Bluetooth"}),Object(m.jsx)("div",{className:"details__value",children:s.connectivity.bluetooth||"-"})]}),Object(m.jsxs)("div",{className:"details__item details__item--tech",children:[Object(m.jsx)("div",{className:"details__name",children:"Wifi"}),Object(m.jsx)("div",{className:"details__value",children:s.connectivity.wifi||"-"})]})]})]})]}),Object(m.jsx)(z,{title:"You may also like",products:T},null===s||void 0===s?void 0:s.id)]}):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(J,{}),Object(m.jsx)(ce,{category:"Product"})]}),f&&Object(m.jsx)(Q,{onClose:M})]})})}))),ae=c.p+"static/media/6134065.41ade0ad.png",ne=(c(56),function(){return Object(m.jsxs)("div",{className:"NoSearchResults",children:[Object(m.jsx)("img",{src:ae,alt:"no results",className:"NoSearchResults__image"}),Object(m.jsx)("h1",{className:"NoSearchResults__title",children:"No search results"})]})}),ie=(c(57),function(){var e=Object(d.useContext)(_).favoriteProducts,t=Object(n.d)(),c=Object(r.a)(t,1)[0].get("query")||"",s=Object(d.useMemo)((function(){return e.filter((function(e){var t=c.toLowerCase().trim();return e.name.toLowerCase().trim().includes(t)}))}),[e,c]);return Object(m.jsx)("div",{className:"FavoritesPage",children:Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)("div",{className:"FavoritesPage__content",children:[Object(m.jsx)(te,{}),0===s.length&&!c&&Object(m.jsxs)("h1",{className:"FavoritesPage__title FavoritesPage__title--no-products",children:["You don't have any favorite products. Maybe you want to choose something in"," ",Object(m.jsx)(n.b,{className:"FavoritesPage__link",to:"/phones",children:"Phones"}),","," ",Object(m.jsx)(n.b,{className:"FavoritesPage__link",to:"/tablets",children:"Tablets"})," ","or"," ",Object(m.jsx)(n.b,{className:"FavoritesPage__link",to:"/accessories",children:"Accessories"})," ","?"]}),0===s.length&&c&&Object(m.jsx)(ne,{}),s.length>0&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h1",{className:"FavoritesPage__title",children:"Favorites"}),Object(m.jsx)("div",{className:"FavoritesPage__quantity",children:"".concat(s.length," items")}),Object(m.jsx)("div",{className:"FavoritesPage__list",children:s.map((function(e){return Object(m.jsx)(U,{product:e},e.id)}))})]})]})})})}),re=(c(58),function(){return Object(m.jsxs)("div",{className:"NotFoundPage",children:[Object(m.jsx)("div",{className:"NotFoundPage__back",children:Object(m.jsx)(J,{})}),Object(m.jsx)("div",{className:"NotFoundPage__title",children:Object(m.jsx)("h1",{children:"Page not found..."})})]})});function oe(e,t){var c=new URLSearchParams(e.toString());return Object.entries(t).forEach((function(e){var t=Object(r.a)(e,2),s=t[0],a=t[1];null===a?c.delete(s):Array.isArray(a)?(c.delete(s),a.forEach((function(e){c.append(s,e)}))):c.set(s,a)})),c.toString()}var le=[{value:"age",label:"Newest"},{value:"name",label:"Alphabetically"},{value:"price",label:"Cheapest"}],de=(c(59),function(e){var t=e.options,c=e.value,s=e.onChange,a=Object(d.useState)(!1),n=Object(r.a)(a,2),i=n[0],o=n[1],l=function(){o((function(e){return!e}))},u=t.filter((function(e,t,c){return c.findIndex((function(t){return t.value===e.value}))===t}));"All"===u[0].label&&(u.length=1);var j=u.find((function(e){return e.value===c}));Object(d.useEffect)((function(){var e=function(e){"Escape"===e.key&&o(!1)};return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}),[]);return Object(m.jsxs)("div",{className:"DropDown",children:[Object(m.jsx)("div",{className:f()("DropDown__select",{"DropDown__select--is-active":i}),onClick:l,onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),l())},role:"button",tabIndex:0,children:j?j.label:""}),i&&Object(m.jsx)("ul",{className:"DropDown__list",children:u.map((function(e){return Object(m.jsx)("li",{className:f()("DropDown__item",{"DropDown__item--selected":c===e.value}),onClick:function(){return t=e.value,s(t),void o(!1);var t},children:e.label},e.value)}))})]})}),ue=(c(60),function(e){var t=e.productsLength,c=e.pageSize,s=e.currentPage,a=Object(n.d)(),i=Object(r.a)(a,1)[0],o=function(e,t){for(var c=Math.ceil(e/t),s=[],a=1;a<=c;a+=1)s.push(a);return s}(t,c);return Object(m.jsxs)("div",{className:"Pagination","data-cy":"pagination",children:[Object(m.jsx)(n.b,{className:"Pagination__button Pagination__button--prev","data-cy":"paginationLeft",to:{search:oe(i,{currentPage:1!==s?"".concat(s-1):"1"})},children:Object(m.jsx)("img",{src:y,alt:"previous page button"})}),o.map((function(e){return Object(m.jsx)(n.b,{to:{search:oe(i,{currentPage:"".concat(e)})},className:f()("Pagination__button","Pagination__button--page",{active:s===e}),children:e},e)})),Object(m.jsx)(n.b,{className:"Pagination__button Pagination__button--next","data-cy":"paginationRight",to:{search:oe(i,{currentPage:s!==o.length?"".concat(s+1):"".concat(o.length)})},children:Object(m.jsx)("img",{src:P,alt:"next page button"})})]})}),je=(c(61),u.a.memo((function(e){var t=e.products,c=Object(n.d)(),s=Object(r.a)(c,2),a=s[0],i=s[1],o=a.get("query")||"",l=a.get("sortBy")||"age",u=a.get("pageSize")||4,b=a.get("currentPage")||1,_=Object(j.p)().category,h="";if(_){if(["phones","tablets","accessories"].includes(_))switch(_){case"phones":h="Mobile phones";break;case"tablets":h="Tablets";break;case"accessories":h="Accessories";break;default:h="Page"}else h="Page"}var O=Object(d.useMemo)((function(){return _&&["phones","tablets","accessories"].includes(_)?t.filter((function(e){switch(_){case"phones":return e.type===T.phone;case"tablets":return e.type===T.tablet;case"accessories":return e.type===T.accessory;default:return!1}})):[]}),[t,_]),v=Object(d.useMemo)((function(){return O.filter((function(e){var t=o.toLowerCase().trim();return e.name.toLowerCase().trim().includes(t)}))}),[O,o]),x=Object(d.useMemo)((function(){var e=Object(S.a)(v);switch(l){case"name":e.sort((function(e,t){return e.name.localeCompare(t.name)}));break;case"price":e.sort((function(e,t){return e.price-t.price}));break;default:e.sort((function(e,t){return t.age-e.age}))}return e}),[l,v]),f=(+b-1)*+u,p=f+ +u,N=Object(d.useMemo)((function(){return x.slice(f,+p)}),[x,f,p]),g=x.length,y=[4,8,g],P=g>4&&+u!==+g;return Object(m.jsx)("div",{className:"ProductsPage",children:Object(m.jsxs)("div",{className:"container",children:[!N.length&&!o&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(te,{}),Object(m.jsx)(ce,{category:h})]}),!N.length&&o?Object(m.jsx)(ne,{}):!!N.length&&Object(m.jsxs)("div",{className:"ProductsPage__content",children:[Object(m.jsx)(te,{}),Object(m.jsx)("h1",{className:"ProductsPage__title",children:h}),Object(m.jsx)("h3",{className:"ProductsPage__subtitle",children:"".concat(g," models")}),Object(m.jsxs)("div",{className:"ProductsPage__filters",children:[Object(m.jsxs)("div",{className:"ProductsPage__filter",children:[Object(m.jsx)("div",{className:"ProductsPage__label",children:"Sort by"}),Object(m.jsx)(de,{options:le,value:l,onChange:function(e){i(oe(a,{sortBy:e||null,currentPage:"1"}))}})]}),Object(m.jsxs)("div",{className:"ProductsPage__filter",children:[Object(m.jsx)("div",{className:"ProductsPage__label",children:"Items on page"}),Object(m.jsx)(de,{options:y.map((function(e){return{value:String(e),label:e===g?"All":String(e)}})),value:String(u),onChange:function(e){i(oe(a,{pageSize:e||null,currentPage:"1"}))}})]})]}),Object(m.jsx)("div",{className:"ProductsList","data-cy":"productList",children:N.map((function(e){return Object(m.jsx)(U,{product:e},e.id)}))}),P&&g>0&&Object(m.jsx)(ue,{currentPage:+b,pageSize:+u,productsLength:g})]})]})})})));function be(e,t){var c=0;return function(){for(var s=arguments.length,a=new Array(s),n=0;n<s;n++)a[n]=arguments[n];window.clearTimeout(c),c=window.setTimeout((function(){e.apply(void 0,a)}),t)}}var me=c.p+"static/media/search.1e77bbf1.svg",_e=(c(62),function(e){var t=e.setShowMobileMenu,c=Object(n.d)(),s=Object(r.a)(c,2),a=s[0],i=s[1],o=a.get("query")||"",l=Object(d.useState)(o),u=Object(r.a)(l,2),b=u[0],_=u[1],h=Object(j.l)().pathname.split("/")[1],O=Object(d.useCallback)(be(i,1e3),[h]),v=Object(d.useCallback)(be((function(){t&&t(!1)}),1e3),[]);return Object(m.jsxs)("div",{className:"Search",children:[Object(m.jsx)("input",{type:"text",className:"Search__input",placeholder:"Search in ".concat(h,"..."),value:b,onChange:function(e){return function(e){O(oe(a,{query:e.target.value||null,currentPage:"1"})),_(e.target.value),v()}(e)}}),Object(m.jsx)("div",{className:"Search__btn",children:o?Object(m.jsx)("button",{type:"button",className:"Search__delete","data-cy":"searchDelete",onClick:function(){_(""),i(oe(a,{query:null})),t&&t(!1)},"aria-label":"searchDelete"}):Object(m.jsx)("img",{src:me,alt:"search"})})]})});_e.defaultProps={setShowMobileMenu:void 0};var he=["/phones","/tablets","/accessories","/favorites"],Oe=c.p+"static/media/logo.839aa95d.svg",ve=c.p+"static/media/burger__menu.7eed0fb5.svg",xe=(c(63),function(){var e=Object(j.l)(),t=Object(d.useContext)(_).favoriteProducts,c=Object(d.useContext)(O).productsInCart,s=Object(d.useState)(!1),a=Object(r.a)(s,2),i=a[0],o=a[1],l=he.some((function(t){return t===e.pathname})),u=Object(d.useMemo)((function(){return t.length}),[t]),b=Object(d.useMemo)((function(){return c.reduce((function(e,t){return e+t.quantity}),0)}),[c]),h=function(){o((function(e){return!e}))};Object(d.useEffect)((function(){return document.documentElement.style.overflow=i?"hidden":"auto",function(){document.documentElement.style.overflow="auto"}}),[i]);var v=function(){o(!1)};return Object(m.jsxs)("header",{className:"header",children:[Object(m.jsxs)("nav",{className:"header__nav",children:[Object(m.jsx)(n.b,{to:"/",className:"header__logo",children:Object(m.jsx)("img",{src:Oe,alt:"logo",className:"header__logo-img"})}),Object(m.jsx)("button",{type:"button",className:"header__burger",onClick:h,children:Object(m.jsx)("img",{src:ve,alt:"menu"})}),Object(m.jsxs)("div",{className:f()("header__mobile mobile",{show:i,"show-menu":i}),children:[Object(m.jsxs)("div",{className:"mobile__header",children:[Object(m.jsx)(n.b,{to:"/",className:"mobile__logo",onClick:v,children:Object(m.jsx)("img",{src:Oe,alt:"logo",className:"mobile__logo-img"})}),Object(m.jsx)("button",{type:"button",className:"mobile__burger",onClick:h,children:Object(m.jsx)("img",{src:ve,alt:"menu"})})]}),Object(m.jsx)("div",{className:"mobile__search",children:l&&Object(m.jsx)(_e,{setShowMobileMenu:o})}),Object(m.jsxs)("ul",{className:"mobile__menu",children:[Object(m.jsx)("li",{className:"mobile__item",children:Object(m.jsx)(n.c,{to:"/",className:"header__link",onClick:v,children:"Home"})}),Object(m.jsx)("li",{className:"mobile__item",children:Object(m.jsx)(n.c,{to:"/phones",className:"header__link",onClick:v,children:"Phones"})}),Object(m.jsx)("li",{className:"mobile__item",children:Object(m.jsx)(n.c,{to:"/tablets",className:"header__link",onClick:v,children:"Tablets"})}),Object(m.jsx)("li",{className:"mobile__item",children:Object(m.jsx)(n.c,{to:"/accessories",className:"header__link",onClick:v,children:"Accessories"})})]}),Object(m.jsxs)("div",{className:"mobile__buttons",children:[Object(m.jsx)(n.c,{to:"/favorites",className:"header__button header__button--fav mobile__button",onClick:v,children:Object(m.jsx)("span",{className:f()("header__quantity",{active:u>0}),children:u})}),Object(m.jsx)(n.c,{to:"/cart",className:"header__button header__button--cart mobile__button",onClick:v,children:Object(m.jsx)("span",{className:f()("header__quantity",{active:b>0}),children:b})})]})]}),Object(m.jsxs)("ul",{className:"header__menu",children:[Object(m.jsx)("li",{className:"header__item",children:Object(m.jsx)(n.c,{to:"/",className:function(e){var t=e.isActive;return f()("header__link",{"header__link--active":t})},children:"Home"})}),Object(m.jsx)("li",{className:"header__item",children:Object(m.jsx)(n.c,{to:"/phones",className:function(e){var t=e.isActive;return f()("header__link",{"header__link--active":t})},children:"Phones"})}),Object(m.jsx)("li",{className:"header__item",children:Object(m.jsx)(n.c,{to:"/tablets",className:function(e){var t=e.isActive;return f()("header__link",{"header__link--active":t})},children:"Tablets"})}),Object(m.jsx)("li",{className:"header__item",children:Object(m.jsx)(n.c,{to:"/accessories",className:function(e){var t=e.isActive;return f()("header__link",{"header__link--active":t})},children:"Accessories"})})]})]}),Object(m.jsxs)("div",{className:"header__buttons",children:[l&&Object(m.jsx)(_e,{}),Object(m.jsx)(n.c,{to:"/favorites",className:"header__button header__button--fav",children:Object(m.jsx)("span",{className:f()("header__quantity",{active:u>0}),children:u})}),Object(m.jsx)(n.c,{to:"/cart",className:"header__button header__button--cart",children:Object(m.jsx)("span",{className:f()("header__quantity",{active:b>0}),children:b})})]})]})}),fe=c.p+"static/media/footer-button.470683b8.svg",pe=(c(64),function(){var e=function(){window.scrollTo({top:0,left:0})};return Object(m.jsx)("footer",{className:"footer",children:Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)("div",{className:"footer__content",children:[Object(m.jsx)(n.b,{to:"/",className:"footer__logo",onClick:e,children:Object(m.jsx)("img",{src:Oe,alt:"logo"})}),Object(m.jsxs)("ul",{className:"footer__menu",children:[Object(m.jsx)("li",{className:"footer__item",children:Object(m.jsx)(n.b,{to:"https://github.com/sheva10barca",target:"_blank",children:"Github"})}),Object(m.jsx)("li",{className:"footer__item",children:Object(m.jsx)(n.b,{to:"/contacts",target:"_blank",children:"Contacts"})}),Object(m.jsx)("li",{className:"footer__item",children:Object(m.jsx)(n.b,{to:"/rights",target:"_blank",children:"Rights"})})]}),Object(m.jsxs)("div",{className:"footer__button",onClick:e,children:[Object(m.jsx)("div",{className:"footer__button-text",children:"Back to top"}),Object(m.jsx)("div",{className:"footer__button-arrow",children:Object(m.jsx)("button",{type:"button",className:"footer__button-btn",children:Object(m.jsx)("img",{src:fe,alt:"button back to top"})})})]})]})})})}),Ne=(c(65),function(){var e=Object(d.useState)([]),t=Object(r.a)(e,2),c=t[0],s=t[1],a=function(){var e=Object(i.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E(".json");case 3:t=e.sent,s(t),e.next=10;break;case 7:throw e.prev=7,e.t0=e.catch(0),new Error("Loading Error");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(d.useEffect)((function(){a()}),[]),Object(m.jsx)("div",{className:"app",children:Object(m.jsx)(v,{children:Object(m.jsxs)(h,{children:[Object(m.jsx)(xe,{}),Object(m.jsx)("main",{className:"main",children:Object(m.jsx)(j.c,{children:Object(m.jsxs)(j.a,{path:"/",children:[Object(m.jsx)(j.a,{index:!0,element:Object(m.jsx)(G,{products:c})}),Object(m.jsxs)(j.a,{path:":category",children:[Object(m.jsx)(j.a,{index:!0,element:Object(m.jsx)(je,{products:c})}),Object(m.jsx)(j.a,{path:":productId",element:Object(m.jsx)(se,{products:c})})]}),Object(m.jsx)(j.a,{path:"cart",element:Object(m.jsx)(X,{})}),Object(m.jsx)(j.a,{path:"favorites",element:Object(m.jsx)(ie,{})}),Object(m.jsx)(j.a,{path:"*",element:Object(m.jsx)(re,{})})]})})}),Object(m.jsx)(pe,{})]})})})});a.a.render(Object(m.jsx)(n.a,{children:Object(m.jsx)(Ne,{})}),document.getElementById("root"))}]),[[66,1,2]]]);
//# sourceMappingURL=main.8985388e.chunk.js.map