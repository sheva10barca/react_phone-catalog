(this["webpackJsonpreact_phone-catalog"]=this["webpackJsonpreact_phone-catalog"]||[]).push([[0],Array(33).concat([function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var s=c(26),a=c.n(s),n=c(6),i=c(7),r=c(8),o=c(4),l=c(5),d=c.n(l),j=c(1),u=c.n(j),b=c(3),h=function(e,t){var c=Object(j.useState)((function(){try{var c=localStorage.getItem(e);return c?JSON.parse(c):t}catch(s){return t}})),s=Object(o.a)(c,2),a=s[0],n=s[1];return[a,function(t){n(t),localStorage.setItem(e,JSON.stringify(t))}]},_=c(0),m=u.a.createContext({favoriteProducts:[],setFavoriteProducts:function(){}}),O=function(e){var t=e.children,c=h("favorites",[]),s=Object(o.a)(c,2),a=s[0],n=s[1],i=Object(j.useMemo)((function(){return{favoriteProducts:a,setFavoriteProducts:n}}),[a]);return Object(_.jsx)(m.Provider,{value:i,children:t})},x=u.a.createContext({productsInCart:[],setProductsInCart:function(){}}),v=function(e){var t=e.children,c=h("cart",[]),s=Object(o.a)(c,2),a=s[0],n=s[1],i=Object(j.useMemo)((function(){return{productsInCart:a,setProductsInCart:n}}),[a]);return Object(_.jsx)(x.Provider,{value:i,children:t})},f=c(10),p=c.n(f),N=(c(33),c.p+"static/media/banner1.b4eeda8b.png"),g=c.p+"static/media/banner2.bdd2e0fc.png",P=c.p+"static/media/banner3.a962057c.png",y=c.p+"static/media/arrow-left.7e79118d.svg",C=c.p+"static/media/arrow-right.079e7aa2.svg",k=[N,g,P],S=function(){var e=Object(j.useState)(0),t=Object(o.a)(e,2),c=t[0],s=t[1],a=function(){s((function(e){return(e+1)%k.length}))};return Object(j.useEffect)((function(){var e=setInterval(a,5e3);return function(){return clearInterval(e)}}),[]),Object(_.jsxs)("div",{className:"carousel",children:[Object(_.jsxs)("div",{className:"carousel__content",children:[Object(_.jsx)("button",{onClick:function(){s((function(e){return 0===e?k.length-1:e-1}))},className:"carousel__button",type:"button",children:Object(_.jsx)("img",{src:y,alt:"arrow-left"})}),Object(_.jsx)("div",{className:"carousel__images",children:k.map((function(e,t){return Object(_.jsx)("div",{className:"carousel__image",style:{opacity:t===c?1:0},children:Object(_.jsx)("img",{src:e,alt:"Slide ".concat(t+1),className:"carousel__img"})},e)}))}),Object(_.jsx)("button",{onClick:a,className:"carousel__button",type:"button",children:Object(_.jsx)("img",{src:C,alt:"arrow-right"})})]}),Object(_.jsx)("div",{className:"carousel__dots",children:k.map((function(e,t){return Object(_.jsx)("div",{onKeyDown:function(e){return function(e,t){"Enter"!==e.key&&" "!==e.key||s(t)}(e,t)},className:p()("carousel__dot",{active:t===c}),onClick:function(){return s(t)}},e)}))})]})},w=(c(34),c(11)),I=(c(35),function(e){var t=e.handleAddToCart,c=e.id,s=Object(j.useContext)(x).productsInCart.some((function(e){return e.id===c&&0!==e.quantity}));return Object(_.jsx)("button",{type:"button",className:p()("AddToCartButton",{isItemInCart:s}),onClick:function(){t()},children:s?"Added to cart":"Add to cart"})}),B=c.p+"static/media/heart.857e9a09.svg",D=c.p+"static/media/heart-selected.0adbb61b.svg",A=(c(36),function(e){var t=e.handleAddToFavorites,c=e.isItemFav;return Object(_.jsx)("button",{type:"button",className:p()("AddToFavButton",{isItemFav:c}),onClick:t,"data-cy":"addToFavorite",children:Object(_.jsx)("img",{src:c?D:B,alt:"favIcon"})})}),F="https://mate-academy.github.io/react_phone-catalog/api/products";function T(e){return new Promise((function(t){setTimeout(t,e)}))}function L(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,s={method:t};return c&&(s.body=JSON.stringify(c),s.headers={"Content-Type":"application/json; charset=UTF-8"}),T(300).then((function(){return fetch(F+e,s)})).then((function(e){if(!e.ok)throw new Error;return e.json()}))}var E,q=function(e){return L(e)},M=function(e){return q("/".concat(e,".json"))},R=function(e,t){return e-e/100*t};!function(e){e.phone="phone",e.tablet="tablet",e.accessory="accessory"}(E||(E={}));c(37);var U=function(e){var t=e.product,c=t.name,s=t.price,a=t.discount,l=t.screen,u=t.capacity,b=t.ram,h=t.id,O=t.imageUrl,v=t.type,f=Object(j.useContext)(x),p=f.productsInCart,N=f.setProductsInCart,g=Object(j.useContext)(m),P=g.favoriteProducts,y=g.setFavoriteProducts,C=R(s,a),k=Object(j.useState)(null),S=Object(o.a)(k,2),B=S[0],D=S[1],F=function(){var e=Object(r.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M(h);case 3:t=e.sent,D(t),e.next=10;break;case 7:throw e.prev=7,e.t0=e.catch(0),new Error("Loading Error");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();Object(j.useEffect)((function(){F()}),[]);var T=function(e){switch(e){case E.tablet:return"tablets";case E.accessory:return"accessories";case E.phone:default:return"phones"}}(v),L=p.some((function(e){return e.id===h})),q=P.some((function(e){return e.id===h}));return Object(_.jsx)("div",{className:"ProductCard",children:Object(_.jsxs)("div",{className:"ProductCard__content",children:[Object(_.jsx)(n.b,{to:"/".concat(T,"/").concat(h),state:B,className:"ProductCard__photo",children:Object(_.jsx)("img",{src:O,alt:"product",className:"ProductCard__img"})}),Object(_.jsx)("div",{className:"ProductCard__title",children:c}),Object(_.jsxs)("div",{className:"ProductCard__price",children:[Object(_.jsx)("div",{className:"ProductCard__price-normal",children:"$".concat(C)}),a>0&&Object(_.jsx)("div",{className:"ProductCard__price-discounted",children:"$".concat(s)})]}),Object(_.jsxs)("div",{className:"ProductCard__details",children:[Object(_.jsxs)("div",{className:"ProductCard__details-item",children:[Object(_.jsx)("div",{className:"ProductCard__details-item__name",children:"Screen"}),Object(_.jsx)("div",{className:"ProductCard__details-item__value",children:l||"unknown"})]}),Object(_.jsxs)("div",{className:"ProductCard__details-item",children:[Object(_.jsx)("div",{className:"ProductCard__details-item__name",children:"Capacity"}),Object(_.jsx)("div",{className:"ProductCard__details-item__value",children:u||"unknown"})]}),Object(_.jsxs)("div",{className:"ProductCard__details-item",children:[Object(_.jsx)("div",{className:"ProductCard__details-item__name",children:"RAM"}),Object(_.jsx)("div",{className:"ProductCard__details-item__value",children:b||"unknown"})]})]}),Object(_.jsxs)("div",{className:"ProductCard__buttons",children:[Object(_.jsx)(I,{handleAddToCart:function(){if(L){var e=p.filter((function(e){return e.id!==h}));N(e)}else{var c=Object(w.a)(Object(w.a)({},t),{},{quantity:1});N([].concat(Object(i.a)(p),[c]))}},id:h}),Object(_.jsx)(A,{handleAddToFavorites:function(){if(q){var e=P.filter((function(e){return e.id!==h}));y(e)}else y([].concat(Object(i.a)(P),[t]))},isItemFav:q})]})]})})},z=function(e){var t=e.title,c=e.products,s=Object(j.useState)(0),a=Object(o.a)(s,2),n=a[0],i=a[1],r=c.slice(n,n+4);return Object(_.jsxs)("div",{className:"ProductsSlider",children:[Object(_.jsxs)("div",{className:"ProductsSlider__content",children:[Object(_.jsx)("h2",{className:"ProductsSlider__title",children:t}),Object(_.jsxs)("div",{className:"ProductsSlider__buttons",children:[Object(_.jsx)("button",{type:"button",onClick:function(){i((function(e){return Math.max(0,e-1)}))},disabled:0===n,className:"ProductsSlider__button",children:Object(_.jsx)("img",{src:y,alt:"arrow-left"})}),Object(_.jsx)("button",{type:"button",onClick:function(){i((function(e){return Math.min(e+1,c.length-4)}))},disabled:n===c.length-4,className:"ProductsSlider__button",children:Object(_.jsx)("img",{src:C,alt:"arrow-right"})})]})]}),Object(_.jsx)("div",{className:"ProductsSlider__cards","data-cy":"cardsContainer",children:r.map((function(e){return Object(_.jsx)("div",{className:"ProductsSlider__card",children:Object(_.jsx)(U,{product:e})},e.id)}))})]})},$=(c(38),function(e){var t=e.products,c=function(e,t){return e.filter((function(e){return e.type===t})).length};return Object(_.jsxs)("div",{className:"ShopByCategory",children:[Object(_.jsx)("h2",{className:"ShopByCategory__title",children:"Shop by category"}),Object(_.jsxs)("div",{className:"ShopByCategory__links","data-cy":"categoryLinksContainer",children:[Object(_.jsxs)(n.b,{to:"/phones",className:"ShopByCategory__link",children:[Object(_.jsx)("div",{className:"ShopByCategory__link-photo ShopByCategory__link-photo__phones"}),Object(_.jsx)("h3",{className:"ShopByCategory__link-title",children:"Mobile phones"}),Object(_.jsx)("h4",{className:"ShopByCategory__link-subtitle",children:"".concat(c(t,E.phone)," models")})]}),Object(_.jsxs)(n.b,{to:"/tablets",className:"ShopByCategory__link",children:[Object(_.jsx)("div",{className:"ShopByCategory__link-photo ShopByCategory__link-photo__tablets"}),Object(_.jsx)("h3",{className:"ShopByCategory__link-title",children:"Tablets"}),Object(_.jsx)("h4",{className:"ShopByCategory__link-subtitle",children:"".concat(c(t,E.tablet)," models")})]}),Object(_.jsxs)(n.b,{to:"/accessories",className:"ShopByCategory__link",children:[Object(_.jsx)("div",{className:"ShopByCategory__link-photo ShopByCategory__link-photo__accessories"}),Object(_.jsx)("h3",{className:"ShopByCategory__link-title",children:"Accessories"}),Object(_.jsx)("h4",{className:"ShopByCategory__link-subtitle",children:"".concat(c(t,E.accessory)," models")})]})]})]})}),G=function(e){var t=e.products,c=t.filter((function(e){return e.discount>0})).sort((function(e,t){return e.discount-t.discount})),s=t.filter((function(e){return 0===e.discount})).sort((function(e,t){return t.price-e.price}));return Object(_.jsxs)("div",{className:"container",children:[Object(_.jsx)(S,{}),Object(_.jsx)(z,{title:"Hot prices",products:c}),Object(_.jsx)($,{products:t}),Object(_.jsx)(z,{title:"Brand new models",products:s})]})};function J(e,t){var c=new URLSearchParams(e.toString());return Object.entries(t).forEach((function(e){var t=Object(o.a)(e,2),s=t[0],a=t[1];null===a?c.delete(s):Array.isArray(a)?(c.delete(s),a.forEach((function(e){c.append(s,e)}))):c.set(s,a)})),c.toString()}c(39);var Y=function(e){var t=e.options,c=e.value,s=e.onChange,a=Object(j.useState)(!1),n=Object(o.a)(a,2),i=n[0],r=n[1],l=function(){r((function(e){return!e}))},d=t.find((function(e){return e.value===c}));Object(j.useEffect)((function(){var e=function(e){"Escape"===e.key&&r(!1)};return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}),[]);return Object(_.jsxs)("div",{className:"DropDown",children:[Object(_.jsx)("div",{className:p()("DropDown__select",{"DropDown__select--is-active":i}),onClick:l,onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),l())},role:"button",tabIndex:0,children:d?d.label:""}),i&&Object(_.jsx)("ul",{className:"DropDown__list",children:t.map((function(e){return Object(_.jsx)("li",{className:p()("DropDown__item",{"DropDown__item--selected":c===e.value}),onClick:function(){return t=e.value,s(t),void r(!1);var t},children:e.label},e.value)}))})]})},H=c.p+"static/media/arrow-right-gray.a374b573.svg",K=c.p+"static/media/home.f28213b9.svg",W=(c(40),function(){var e=Object(b.l)().pathname.split("/").filter((function(e){return""!==e})),t=function(e){var t="";return e.map((function(e){return t+="/".concat(e),{label:e.charAt(0).toUpperCase()+e.slice(1),link:t}}))}(e);return Object(_.jsx)("nav",{className:"breadcrumbs","data-cy":"breadCrumbs",children:Object(_.jsxs)("ul",{className:"breadcrumbs__list",children:[Object(_.jsx)("li",{className:"breadcrumbs__item",children:Object(_.jsx)(n.b,{to:"/",children:Object(_.jsx)("img",{src:K,alt:"home icon",className:"breadcrumbs__icon"})})}),0!==t.length&&Object(_.jsx)("img",{src:H,alt:""}),t.map((function(c,s){var a=s===e.length-1,i=p()("breadcrumbs__item",{active:a});return Object(_.jsx)(j.Fragment,{children:a?Object(_.jsx)("li",{className:i,children:c.label},c.link):Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)("li",{className:i,children:Object(_.jsx)(n.b,{to:c.link,children:c.label})},c.link),0!==t.length&&Object(_.jsx)("img",{src:H,alt:"arrow right"})]})},c.link)}))]})})}),Q=(c(41),function(e){var t=e.phonesLength,c=e.pageSize,s=e.currentPage,a=Object(n.d)(),i=Object(o.a)(a,1)[0],r=function(e,t){for(var c=Math.ceil(e/t),s=[],a=1;a<=c;a+=1)s.push(a);return s}(t,c);return Object(_.jsxs)("div",{className:"Pagination","data-cy":"pagination",children:[Object(_.jsx)(n.b,{className:"Pagination__button Pagination__button--prev","data-cy":"paginationLeft",to:{search:J(i,{currentPage:"".concat(s-1)})},children:Object(_.jsx)("img",{src:y,alt:"previous page button"})}),r.map((function(e){return Object(_.jsx)(n.b,{to:{search:J(i,{currentPage:"".concat(e)})},className:p()("Pagination__button","Pagination__button--page",{active:s===e}),children:e},e)})),Object(_.jsx)(n.b,{className:"Pagination__button Pagination__button--next","data-cy":"paginationRight",to:{search:J(i,{currentPage:"".concat(s+1)})},children:Object(_.jsx)("img",{src:C,alt:"next page button"})})]})}),V=(c(42),[{value:"age",label:"Newest"},{value:"name",label:"Alphabetically"},{value:"price",label:"Cheapest"}]),X=function(e){var t=e.phones,c=Object(n.d)(),s=Object(o.a)(c,2),a=s[0],r=s[1],l=a.get("query")||"",d=a.get("sortBy")||"age",u=a.get("pageSize")||4,b=a.get("currentPage")||1,h=Object(j.useMemo)((function(){return t.filter((function(e){var t=l.toLowerCase().trim();return e.name.toLowerCase().trim().includes(t)}))}),[t,l]),m=Object(j.useMemo)((function(){var e=Object(i.a)(h);switch(d){case"name":e.sort((function(e,t){return e.name.localeCompare(t.name)}));break;case"price":e.sort((function(e,t){return e.price-t.price}));break;default:e.sort((function(e,t){return t.age-e.age}))}return e}),[d,h]),O=(+b-1)*+u,x=O+ +u,v=m.slice(O,+x),f=m.length,p=[4,8,f],N=f>4&&+u!==+f;return Object(_.jsx)("div",{className:"PhonesPage",children:Object(_.jsx)("div",{className:"container",children:0===t.length?Object(_.jsx)("h1",{children:"Loading..."}):Object(_.jsxs)("div",{className:"PhonesPage__content",children:[Object(_.jsx)(W,{}),Object(_.jsx)("h1",{className:"PhonesPage__title",children:"Mobile phones"}),Object(_.jsx)("h3",{className:"PhonesPage__subtitle",children:"".concat(f," models")}),Object(_.jsxs)("div",{className:"PhonesPage__filters",children:[Object(_.jsxs)("div",{className:"PhonesPage__filter",children:[Object(_.jsx)("div",{className:"PhonesPage__label",children:"Sort by"}),Object(_.jsx)(Y,{options:V,value:d,onChange:function(e){r(J(a,{sortBy:e||null,currentPage:"1"}))}})]}),Object(_.jsxs)("div",{className:"PhonesPage__filter",children:[Object(_.jsx)("div",{className:"PhonesPage__label",children:"Items on page"}),Object(_.jsx)(Y,{options:p.map((function(e){return{value:String(e),label:e===f?"All":String(e)}})),value:String(u),onChange:function(e){r(J(a,{pageSize:e||null,currentPage:"1"}))}})]})]}),Object(_.jsx)("div",{className:"ProductsList","data-cy":"productList",children:v.map((function(e){return Object(_.jsx)(U,{product:e},e.id)}))}),N&&f>0&&Object(_.jsx)(Q,{currentPage:+b,pageSize:+u,phonesLength:f})]})})})},Z=(c(43),function(e){var t=e.category;return Object(_.jsx)("div",{className:"NoResults",children:Object(_.jsx)("h1",{className:"NoResults__title",children:"".concat(t," not found")})})}),ee=(c(44),function(){var e=Object(b.n)();return Object(_.jsxs)("button",{"data-cy":"backButton",type:"button",className:"BackButton",onClick:function(){return e(-1)},children:[Object(_.jsx)("img",{src:y,alt:"back button",className:"BackButton__image"}),Object(_.jsx)("div",{className:"BackButton__text",children:"Back"})]})}),te=(c(45),function(e){var t=e.tablets,c=Object(n.d)(),s=Object(o.a)(c,1)[0].get("query")||"",a=Object(j.useMemo)((function(){return t.filter((function(e){var t=s.toLowerCase().trim();return e.name.toLowerCase().trim().includes(t)}))}),[t,s]);return Object(_.jsx)("div",{className:"TabletsPage",children:Object(_.jsx)("div",{className:"container",children:0===t.length?Object(_.jsx)(Z,{category:"Tablets"}):Object(_.jsxs)("div",{className:"TabletsPage__content",children:[Object(_.jsx)(W,{}),Object(_.jsx)(ee,{}),Object(_.jsx)("h1",{className:"TabletsPage__title",children:"Tablets"}),Object(_.jsx)("div",{className:"TabletsPage__list","data-cy":"productList",children:a.map((function(e){return Object(_.jsx)(U,{product:e},e.id)}))})]})})})}),ce=(c(46),function(e){var t=e.accessories;return Object(_.jsx)("div",{className:"AccessoriesPage",children:Object(_.jsx)("div",{className:"container",children:Object(_.jsxs)("div",{className:"AccessoriesPage__content",children:[Object(_.jsx)(W,{}),Object(_.jsx)(ee,{}),0===t.length?Object(_.jsx)(Z,{category:"Accessories"}):Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)("h1",{className:"AccessoriesPage__title",children:"Accessories"}),Object(_.jsx)("div",{className:"AccessoriesPage__list","data-cy":"productList",children:t.map((function(e){return Object(_.jsx)(U,{product:e},e.id)}))})]})]})})})}),se=c.p+"static/media/cross.0be1ed2a.svg",ae=(c(47),"PLUS"),ne="MINUS",ie=function(e){var t=e.product,c=t.name,s=t.imageUrl,a=t.price,n=t.discount,i=t.id,r=t.quantity,o=Object(j.useContext)(x),l=o.productsInCart,d=o.setProductsInCart,u=a*r,b=function(e){d(l.filter((function(t){return t.id!==e})))},h=function(e,t){var c=l.some((function(t){return t.id===e}));r&&c&&(t===ae&&d(l.map((function(t){return t.id===e?Object(w.a)(Object(w.a)({},t),{},{quantity:r+1}):t}))),t===ne&&d(l.map((function(t){return t.id===e?Object(w.a)(Object(w.a)({},t),{},{quantity:r-1}):t}))),0===r&&b(e))};return Object(_.jsxs)("div",{className:"CartItem",children:[Object(_.jsx)("button",{type:"button",className:"CartItem__remove-btn","data-cy":"cartDeleteButton",onClick:function(){return b(i)},children:Object(_.jsx)("img",{src:se,alt:"delete item"})}),Object(_.jsx)("div",{className:"CartItem__photo",children:Object(_.jsx)("img",{src:s,alt:"",className:"CartItem__img"})}),Object(_.jsx)("div",{className:"CartItem__title",children:c}),Object(_.jsx)("button",{type:"button",className:"CartItem__decrease",onClick:function(){return h(i,ne)},children:"-"}),Object(_.jsx)("div",{className:"CartItem__quantity","data-cy":"productQuantity",children:r}),Object(_.jsx)("button",{type:"button",className:"CartItem__increase",onClick:function(){return h(i,ae)},children:"+"}),Object(_.jsx)("div",{className:"CartItem__price",children:"$".concat(n?R(u,n):u)})]})},re=(c(48),function(e){var t=e.onClose;return Object(j.useEffect)((function(){var e=setTimeout((function(){t()}),3e3);return function(){clearTimeout(e)}}),[t]),Object(_.jsx)("div",{className:"popup",children:Object(_.jsxs)("div",{className:"popup__container",children:[Object(_.jsx)("h2",{className:"popup__title",children:"We are sorry, but this feature is not implemented yet"}),Object(_.jsx)("button",{className:"popup__btn",onClick:t,type:"button",children:"Close"})]})})}),oe=function(e){Object(j.useEffect)((function(){var t=document.querySelector("body");return t&&(e?(t.classList.add("popup-open"),t.style.overflow="hidden"):(t.classList.remove("popup-open"),t.style.overflow="auto")),function(){t&&(t.classList.remove("popup-open"),t.style.overflow="auto")}}),[e])},le=(c(49),function(){var e=Object(j.useContext)(x).productsInCart,t=Object(j.useState)(!1),c=Object(o.a)(t,2),s=c[0],a=c[1],n=e.reduce((function(e,t){return e+R(t.price,t.discount)*t.quantity}),0),i=Object(j.useMemo)((function(){return e.reduce((function(e,t){return e+t.quantity}),0)}),[e]),r=function(){a((function(e){return!e}))};return oe(s),Object(_.jsx)("div",{className:"CartPage",children:Object(_.jsx)("div",{className:"container",children:Object(_.jsxs)("div",{className:"CartPage__content",children:[Object(_.jsx)(ee,{}),0===i?Object(_.jsx)("h1",{className:"CartPage__title",children:"Your cart is empty"}):Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)("h1",{className:"CartPage__title",children:"Cart"}),Object(_.jsxs)("div",{className:"CartPage__blocks",children:[Object(_.jsx)("div",{className:"CartPage__list",children:e.map((function(e){return 0!==e.quantity&&Object(_.jsx)(ie,{product:e},e.id)}))}),Object(_.jsx)("div",{className:"CartPage__checkout",children:Object(_.jsxs)("div",{className:"CartPage__checkout-content",children:[Object(_.jsx)("div",{className:"CartPage__checkout-title",children:"$".concat(n)}),Object(_.jsx)("div",{className:"CartPage__checkout-subtitle",children:"Total for ".concat(i," items")}),Object(_.jsx)("button",{type:"button",className:"CartPage__checkout-button",onClick:r,disabled:s,children:"Checkout"}),s&&Object(_.jsx)(re,{onClose:r})]})})]})]})]})})})}),de=(c(50),function(e){var t=e.suggestedProducts,c=e.products,s=Object(b.l)().state,a=s.name,n=s.images,r=s.id,l=s.display,d=s.hardware,u=s.storage,h=s.camera,O=s.connectivity,v=s.description,f=Object(j.useState)(n[0]),p=Object(o.a)(f,2),N=p[0],g=p[1],P=Object(j.useState)(),y=Object(o.a)(P,2),C=y[0],k=y[1],S=Object(j.useState)(!1),B=Object(o.a)(S,2),D=B[0],F=B[1],T=Object(j.useContext)(x),L=T.productsInCart,E=T.setProductsInCart,q=Object(j.useContext)(m),M=q.favoriteProducts,U=q.setFavoriteProducts;Object(j.useEffect)((function(){n[0]!==N&&g(n[0])}),[n]),Object(j.useEffect)((function(){!c||C&&(null===C||void 0===C?void 0:C.id)===r||function(){var e=c.find((function(e){return e.id===r}));k(e)}()}),[C,c,r]);var $=C&&R(C.price,C.discount),G=L.some((function(e){return e.id===r})),J=M.some((function(e){return e.id===r})),Y=function(){F((function(e){return!e}))};return oe(D),Object(_.jsx)("div",{className:"ProductDetailsPage",children:Object(_.jsxs)("div",{className:"container",children:[C?Object(_.jsxs)("div",{className:"ProductDetailsPage__content",children:[Object(_.jsx)(W,{}),Object(_.jsx)(ee,{}),Object(_.jsx)("h1",{className:"ProductDetailsPage__title",children:a}),Object(_.jsxs)("div",{className:"ProductDetailsPage__main",children:[Object(_.jsx)("ul",{className:"ProductDetailsPage__list",children:n.map((function(e){return Object(_.jsx)("li",{className:"ProductDetailsPage__photo",onClick:function(){return g(e)},children:Object(_.jsx)("img",{className:"ProductDetailsPage__photo-img",src:e,alt:"product img"})},e)}))}),Object(_.jsx)("div",{className:"ProductDetailsPage__current",children:Object(_.jsx)("img",{src:N,alt:"main img"})}),Object(_.jsxs)("div",{className:"ProductDetailsPage__characteristics",children:[Object(_.jsxs)("div",{className:"ProductDetailsPage__colors colors",children:[Object(_.jsx)("div",{className:"colors__text",children:"Available colors"}),Object(_.jsxs)("div",{className:"colors__list",children:[Object(_.jsx)("button",{className:"colors__link colors__link-active",type:"button",onClick:Y,children:Object(_.jsx)("div",{className:"colors__link-color colors__link-color--1"})}),Object(_.jsx)("button",{className:"colors__link",type:"button",onClick:Y,children:Object(_.jsx)("div",{className:"colors__link-color colors__link-color--2"})}),Object(_.jsx)("button",{className:"colors__link",type:"button",onClick:Y,children:Object(_.jsx)("div",{className:"colors__link-color colors__link-color--3"})}),Object(_.jsx)("button",{className:"colors__link",type:"button",onClick:Y,children:Object(_.jsx)("div",{className:"colors__link-color colors__link-color--4"})})]})]}),Object(_.jsxs)("div",{className:"ProductDetailsPage__capacities capacities",children:[Object(_.jsx)("div",{className:"capacities__text",children:"Select capacity"}),Object(_.jsxs)("div",{className:"capacities__list",children:[Object(_.jsx)("button",{type:"button",onClick:Y,className:"capacities__link capacities__link-active",children:"64 GB"}),Object(_.jsx)("button",{type:"button",onClick:Y,className:"capacities__link",children:"256 GB"}),Object(_.jsx)("button",{type:"button",onClick:Y,className:"capacities__link",children:"512 GB"})]})]}),Object(_.jsxs)("div",{className:"ProductDetailsPage__price price",children:[Object(_.jsx)("div",{className:"price__normal",children:"$".concat($)}),(null===C||void 0===C?void 0:C.discount)>0&&Object(_.jsx)("div",{className:"price__without-discount",children:"$".concat(C.price)})]}),Object(_.jsxs)("div",{className:"ProductDetailsPage__buttons buttons",children:[Object(_.jsx)(I,{handleAddToCart:function(){if(G){var e=L.filter((function(e){return e.id!==r}));E(e)}else if(C){var t=Object(w.a)(Object(w.a)({},C),{},{quantity:1});E([].concat(Object(i.a)(L),[t]))}},id:r}),Object(_.jsx)(A,{handleAddToFavorites:function(){if(J){var e=M.filter((function(e){return e.id!==r}));U(e)}else C&&U([].concat(Object(i.a)(M),[C]))},isItemFav:J})]}),Object(_.jsxs)("div",{className:"ProductDetailsPage__details details",children:[Object(_.jsxs)("div",{className:"details__item",children:[Object(_.jsx)("div",{className:"details__name",children:"Screen"}),Object(_.jsx)("div",{className:"details__value",children:l.screenSize})]}),Object(_.jsxs)("div",{className:"details__item",children:[Object(_.jsx)("div",{className:"details__name",children:"Resolution"}),Object(_.jsx)("div",{className:"details__value",children:l.screenResolution})]}),Object(_.jsxs)("div",{className:"details__item",children:[Object(_.jsx)("div",{className:"details__name",children:"Processor"}),Object(_.jsx)("div",{className:"details__value",children:d.cpu})]}),Object(_.jsxs)("div",{className:"details__item",children:[Object(_.jsx)("div",{className:"details__name",children:"RAM"}),Object(_.jsx)("div",{className:"details__value",children:u.ram})]})]})]}),Object(_.jsx)("div",{className:"ProductDetailsPage__id",children:"ID: ".concat(r)})]}),Object(_.jsxs)("div",{className:"ProductDetailsPage__info",children:[Object(_.jsxs)("div",{className:"ProductDetailsPage__about about","data-cy":"productDescription",children:[Object(_.jsx)("h2",{className:"about__title",children:"About"}),Object(_.jsx)("div",{className:"about__description",children:v})]}),Object(_.jsxs)("div",{className:"ProductDetailsPage__tech tech",children:[Object(_.jsx)("h2",{className:"tech__title",children:"Tech specs"}),Object(_.jsxs)("div",{className:"tech__details details",children:[Object(_.jsxs)("div",{className:"details__item details__item--tech",children:[Object(_.jsx)("div",{className:"details__name",children:"Screen"}),Object(_.jsx)("div",{className:"details__value",children:l.screenSize})]}),Object(_.jsxs)("div",{className:"details__item details__item--tech",children:[Object(_.jsx)("div",{className:"details__name",children:"Resolution"}),Object(_.jsx)("div",{className:"details__value",children:l.screenResolution})]}),Object(_.jsxs)("div",{className:"details__item details__item--tech",children:[Object(_.jsx)("div",{className:"details__name",children:"Processor"}),Object(_.jsx)("div",{className:"details__value",children:d.cpu})]}),Object(_.jsxs)("div",{className:"details__item details__item--tech",children:[Object(_.jsx)("div",{className:"details__name",children:"RAM"}),Object(_.jsx)("div",{className:"details__value",children:u.ram})]}),Object(_.jsxs)("div",{className:"details__item details__item--tech",children:[Object(_.jsx)("div",{className:"details__name",children:"Built in memory"}),Object(_.jsx)("div",{className:"details__value",children:u.flash})]}),Object(_.jsxs)("div",{className:"details__item details__item--tech",children:[Object(_.jsx)("div",{className:"details__name",children:"Camera"}),Object(_.jsx)("div",{className:"details__value",children:h.primary})]}),Object(_.jsxs)("div",{className:"details__item details__item--tech",children:[Object(_.jsx)("div",{className:"details__name",children:"Bluetooth"}),Object(_.jsx)("div",{className:"details__value",children:O.bluetooth})]}),Object(_.jsxs)("div",{className:"details__item details__item--tech",children:[Object(_.jsx)("div",{className:"details__name",children:"Wifi"}),Object(_.jsx)("div",{className:"details__value",children:O.wifi})]})]})]})]}),Object(_.jsx)(z,{title:"You may also like",products:t},r)]}):Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(ee,{}),Object(_.jsx)("h1",{className:"ProductDetailsPage__title",children:"Phone was not found"})]}),D&&Object(_.jsx)(re,{onClose:Y})]})})}),je=(c(51),function(){var e=Object(j.useContext)(m).favoriteProducts,t=Object(n.d)(),c=Object(o.a)(t,1)[0].get("query")||"",s=Object(j.useMemo)((function(){return e.filter((function(e){var t=c.toLowerCase().trim();return e.name.toLowerCase().trim().includes(t)}))}),[e,c]);return Object(_.jsx)("div",{className:"FavoritesPage",children:Object(_.jsx)("div",{className:"container",children:Object(_.jsxs)("div",{className:"FavoritesPage__content",children:[Object(_.jsx)(W,{}),0===e.length&&Object(_.jsx)("h1",{className:"FavoritesPage__title",children:"You don't have favorite products"}),e.length>0&&Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)("h1",{className:"FavoritesPage__title",children:"Favorites"}),Object(_.jsx)("div",{className:"FavoritesPage__quantity",children:"".concat(s.length," items")}),Object(_.jsx)("div",{className:"FavoritesPage__list",children:s.map((function(e){return Object(_.jsx)(U,{product:e},e.id)}))})]})]})})})}),ue=(c(52),function(){return Object(_.jsxs)("div",{className:"NotFoundPage",children:[Object(_.jsx)("div",{className:"NotFoundPage__back",children:Object(_.jsx)(ee,{})}),Object(_.jsx)("div",{className:"NotFoundPage__title",children:Object(_.jsx)("h1",{children:"Page not found..."})})]})});var be=c.p+"static/media/search.1e77bbf1.svg",he=(c(53),function(){var e=Object(n.d)(),t=Object(o.a)(e,2),c=t[0],s=t[1],a=c.get("query")||"",i=Object(j.useState)(a),r=Object(o.a)(i,2),l=r[0],d=r[1],u=Object(b.l)().pathname.split("/")[1],h=Object(j.useCallback)(function(e,t){var c=0;return function(){for(var s=arguments.length,a=new Array(s),n=0;n<s;n++)a[n]=arguments[n];window.clearTimeout(c),c=window.setTimeout((function(){e.apply(void 0,a)}),t)}}(s,1e3),[u]);return Object(_.jsxs)("div",{className:"Search",children:[Object(_.jsx)("input",{type:"text",className:"Search__input",placeholder:"Search in ".concat(u,"..."),value:l,onChange:function(e){return function(e){var t=e.target.value.toLowerCase();h(J(c,{query:t||null,currentPage:"1"})),d(t)}(e)}}),Object(_.jsx)("button",{className:"Search__btn",type:"button",children:a?Object(_.jsx)("img",{src:se,alt:"close","data-cy":"searchDelete",onClick:function(){d(""),s(J(c,{query:null}))}}):Object(_.jsx)("img",{src:be,alt:"search"})})]})}),_e=["/phones","/tablets","/accessories","/favorites"],me=c.p+"static/media/logo.839aa95d.svg",Oe=(c(54),function(){var e=Object(b.l)(),t=Object(j.useContext)(m).favoriteProducts,c=Object(j.useContext)(x).productsInCart,s=_e.some((function(t){return t===e.pathname})),a=Object(j.useMemo)((function(){return t.length}),[t]),i=Object(j.useMemo)((function(){return c.reduce((function(e,t){return e+t.quantity}),0)}),[c]);return Object(_.jsxs)("header",{className:"header",children:[Object(_.jsxs)("nav",{className:"header__nav",children:[Object(_.jsx)(n.b,{to:"/",className:"header__logo",children:Object(_.jsx)("img",{src:me,alt:"logo"})}),Object(_.jsxs)("ul",{className:"header__menu",children:[Object(_.jsx)("li",{className:"header__item",children:Object(_.jsx)(n.c,{to:"/",className:function(e){var t=e.isActive;return p()("header__link",{"header__link--active":t})},children:"Home"})}),Object(_.jsx)("li",{className:"header__item",children:Object(_.jsx)(n.c,{to:"/phones",className:function(e){var t=e.isActive;return p()("header__link",{"header__link--active":t})},children:"Phones"})}),Object(_.jsx)("li",{className:"header__item",children:Object(_.jsx)(n.c,{to:"/tablets",className:function(e){var t=e.isActive;return p()("header__link",{"header__link--active":t})},children:"Tablets"})}),Object(_.jsx)("li",{className:"header__item",children:Object(_.jsx)(n.c,{to:"/accessories",className:function(e){var t=e.isActive;return p()("header__link",{"header__link--active":t})},children:"Accessories"})})]})]}),Object(_.jsxs)("div",{className:"header__buttons",children:[s&&Object(_.jsx)(he,{}),Object(_.jsx)(n.c,{to:"/favorites",className:"header__button header__button--fav",children:Object(_.jsx)("span",{className:p()("header__quantity",{active:a>0}),children:a})}),Object(_.jsx)(n.c,{to:"/cart",className:"header__button header__button--cart",children:Object(_.jsx)("span",{className:p()("header__quantity",{active:i>0}),children:i})})]})]})}),xe=c.p+"static/media/footer-button.470683b8.svg",ve=(c(55),function(){return Object(_.jsx)("footer",{className:"footer",children:Object(_.jsx)("div",{className:"container",children:Object(_.jsxs)("div",{className:"footer__content",children:[Object(_.jsx)(n.b,{to:"/",className:"footer__logo",children:Object(_.jsx)("img",{src:me,alt:"logo"})}),Object(_.jsxs)("ul",{className:"footer__menu",children:[Object(_.jsx)("li",{className:"footer__item",children:Object(_.jsx)(n.b,{to:"https://github.com/sheva10barca",target:"_blank",children:"Github"})}),Object(_.jsx)("li",{className:"footer__item",children:Object(_.jsx)(n.b,{to:"/contacts",target:"_blank",children:"Contacts"})}),Object(_.jsx)("li",{className:"footer__item",children:Object(_.jsx)(n.b,{to:"/rights",target:"_blank",children:"Rights"})})]}),Object(_.jsxs)("div",{className:"footer__button",onClick:function(){window.scrollTo({top:0,left:0})},children:[Object(_.jsx)("div",{className:"footer__button-text",children:"Back to top"}),Object(_.jsx)("div",{className:"footer__button-arrow",children:Object(_.jsx)("button",{type:"button",className:"footer__button-btn",children:Object(_.jsx)("img",{src:xe,alt:"button back to top"})})})]})]})})})}),fe=(c(56),function(){var e=Object(j.useState)([]),t=Object(o.a)(e,2),c=t[0],s=t[1],a=function(){var e=Object(r.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,q(".json");case 3:t=e.sent,s(t),e.next=10;break;case 7:throw e.prev=7,e.t0=e.catch(0),new Error("Loading Error");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();Object(j.useEffect)((function(){a()}),[]);var n=c.filter((function(e){return e.type===E.phone})),l=c.filter((function(e){return e.type===E.tablet})),u=c.filter((function(e){return e.type===E.accessory})),h=Object(i.a)(c).sort((function(){return Math.random()-.5}));return Object(_.jsx)("div",{className:"app",children:Object(_.jsx)(v,{children:Object(_.jsxs)(O,{children:[Object(_.jsx)(Oe,{}),Object(_.jsx)("main",{className:"main",children:Object(_.jsx)(b.c,{children:Object(_.jsxs)(b.a,{path:"/",children:[Object(_.jsx)(b.a,{index:!0,element:Object(_.jsx)(G,{products:c})}),Object(_.jsxs)(b.a,{path:"phones",children:[Object(_.jsx)(b.a,{index:!0,element:Object(_.jsx)(X,{phones:n})}),Object(_.jsx)(b.a,{path:":productId",element:Object(_.jsx)(de,{products:n,suggestedProducts:h})})]}),Object(_.jsxs)(b.a,{path:"tablets",children:[Object(_.jsx)(b.a,{index:!0,element:Object(_.jsx)(te,{tablets:l})}),Object(_.jsx)(b.a,{path:":productId",element:Object(_.jsx)(de,{products:l,suggestedProducts:h})})]}),Object(_.jsxs)(b.a,{path:"accessories",children:[Object(_.jsx)(b.a,{index:!0,element:Object(_.jsx)(ce,{accessories:u})}),Object(_.jsx)(b.a,{path:":productId",element:Object(_.jsx)(de,{products:u,suggestedProducts:h})})]}),Object(_.jsx)(b.a,{path:"cart",element:Object(_.jsx)(le,{})}),Object(_.jsx)(b.a,{path:"favorites",element:Object(_.jsx)(je,{})}),Object(_.jsx)(b.a,{path:"*",element:Object(_.jsx)(ue,{})})]})})}),Object(_.jsx)(ve,{})]})})})});a.a.render(Object(_.jsx)(n.a,{children:Object(_.jsx)(fe,{})}),document.getElementById("root"))}]),[[57,1,2]]]);
//# sourceMappingURL=main.aa988da9.chunk.js.map