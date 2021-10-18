(this["webpackJsonpstudy-buddy"]=this["webpackJsonpstudy-buddy"]||[]).push([[0],{44:function(n,e,t){},45:function(n,e,t){},46:function(n,e,t){"use strict";t.r(e);var i,c,r,o,a,d,s,h,l,u,b,x,j,p,g,f,m,O,y,w,k,v,C,z,S,F,G,B,T,L,N,U,E,q,I,M,P,D,X,A,J,R,Y,$,H=t(1),Q=t.n(H),K=t(23),V=t.n(K),W=t(2),Z=t(3),_=Object(W.b)(i||(i=Object(Z.a)(["\n  html {\n    box-sizing: border-box;\n    background-color: ",";\n    font-size: calc(0.5rem * 1vw);\n  }\n  \n  *, *::after, *::before {\n    box-sizing: inherit;\n  }\n  \n  body {\n    font-family: 'Montserrat', sans-serif;\n    margin:0;\n  }\n  \n  a, button {\n    font-family: 'Montserrat', sans-serif;\n  }\n  \n  \n\n"])),(function(n){return n.theme.colors.lightGrey})),nn={colors:{white:"#FFFFFF",lightGrey:"#F7F8FA",grey:"#C0C7D6",darkGrey:"#737C8E",black:"#111111",success:"#8FCB81",error:"#CB8581",warning:"#E1D888"},fontSize:{l:"17px",m:"12px",s:"11px"}},en=W.c.div(c||(c=Object(Z.a)(["\n  background-color: ",";\n  width: 100%;\n  height: auto;\n"])),(function(n){return n.theme.colors.lightGrey})),tn=W.c.div(r||(r=Object(Z.a)(["\n  width: 100%;\n  height: auto;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  \n  \n"]))),cn=(W.c.button(o||(o=Object(Z.a)(["\n  width: 30px;\n  height: 30px;\n  background-color: blue;\n  position: absolute;\n  left: 20px;\n  top: 20px;\n"]))),W.c.div(a||(a=Object(Z.a)(["\n  width: 100%;\n  height: 20vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  margin: 0;\n  padding: 0;\n  background-color: ",";\n"])),(function(n){return n.theme.colors.lightGrey}))),rn=t(0),on=W.c.div(d||(d=Object(Z.a)(["\n  width: 200px;\n  height: 50px;\n  display: flex;\n  background-color: black;\n"]))),an=function(n){n.text;return Object(rn.jsx)(on,{})},dn=t(16),sn=Object(W.c)(dn.b).attrs({activeClassName:"active-link"})(s||(s=Object(Z.a)(["\n  width: 33%;\n  text-decoration: none;\n  color: black;\n  font-size: ",";\n  height: 30px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: white;\n  border: 1px solid black;\n  margin: 5px;\n  padding: 2px;\n  &.active-link {\n    border-bottom: 2px solid purple;\n    padding-bottom: 1px;\n  }\n"])),(function(n){return n.theme.fontSize.m})),hn=function(n){var e=n.text,t=n.route;return Object(rn.jsx)(sn,{to:t,exact:!0,children:Object(rn.jsx)("p",{children:e})})},ln=W.c.div(h||(h=Object(Z.a)(["\n  width: 250px;\n  height: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 15px;\n"]))),un=function(){return Object(rn.jsxs)(ln,{children:[Object(rn.jsx)(hn,{text:"Main",route:"/"}),Object(rn.jsx)(hn,{text:"Hoodies",route:"/hoodies"}),Object(rn.jsx)(hn,{text:"T-shirts",route:"/shirts"}),Object(rn.jsx)(hn,{text:"Contact",route:"/contact"})]})},bn=function(){return Object(rn.jsx)(rn.Fragment,{children:Object(rn.jsxs)(cn,{children:[Object(rn.jsx)(an,{}),Object(rn.jsx)(un,{})]})})},xn=function(n){var e=n.children;return Object(rn.jsxs)(tn,{children:[Object(rn.jsx)(bn,{}),e]})},jn=W.c.div(l||(l=Object(Z.a)(["\n  width: 100%;\n  height: auto;\n  min-height: 80vh;\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  flex-direction: row;\n  flex-wrap: wrap;\n  margin: 0;\n  padding: 0;\n  background-color: ",";\n"])),(function(n){return n.theme.colors.lightGrey})),pn=t(6),gn=t(28),fn=t(12),mn=[{id:"h01",name:"Polar Skate co.",model:"Fill Logo",price:299},{id:"h02",name:"Nike SB",model:"GFX4 hoodie",price:239,photo:t.p+"static/media/nikeSBGFX4hoodie.751b6c31.jpg"},{id:"h03",name:"Thrasher",model:"Skate mag",price:550}],On=[{id:"s01",name:"Polar Skate co.",model:"Big Logo",price:199},{id:"s02",name:"Thrasher",model:"Skategoat",price:99},{id:"s03",name:"Dime",model:"Classic small logo",price:149}],yn=W.c.div(u||(u=Object(Z.a)(["\n  width: 50%;\n  height: auto;\n  margin: 50vh 25% auto 25%;\n  background-color: whitesmoke;\n  color: black;\n  position: fixed;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  box-shadow: -2px 4px 10px lightgrey;\n  border-radius: 20px;\n  transition: all 0.1s ease-in-out;\n  font-size: 1rem;\n  img {\n    width: 50px;\n    height: 50px;\n    margin: 0 20px 0 0px;\n  }\n\n  @media (min-width: 1024px) {\n    width: 15%;\n    height: auto;\n    box-shadow: -2px 4px 10px lightgrey;\n    border-radius: 20px;\n    margin: 35% 42.5% auto 42.5%;\n    img {\n      width: 100px;\n      height: 100px;\n    }\n  }\n"]))),wn=function(n){n.type;var e=Object(H.useContext)(vn),t=e.popUp;e.setPopUp;return Object(rn.jsx)(rn.Fragment,{children:"passed"==t.type?Object(rn.jsxs)(yn,{children:[Object(rn.jsx)("img",{src:"https://img.icons8.com/plasticine/100/000000/checked--v1.png"}),Object(rn.jsx)("p",{children:"Item added to cart"})]}):Object(rn.jsxs)(yn,{children:[Object(rn.jsx)("img",{src:"https://img.icons8.com/plasticine/100/000000/cancel.png"}),Object(rn.jsx)("p",{children:"Cart Is Empty !"})]})})},kn=t(47),vn=Q.a.createContext({isShow:!1,popUp:!1,cart:[],sizes:[],subTotal:0,setPopUp:function(){},handleAddToCart:function(){},setIsShow:function(){},removeFromCart:function(){},setSubTotal:function(){},addToSizes:function(){},addToCart:function(){},hoodies:[],update:[],forceUpdate:function(){},shirts:[],cleanButtons:!1,setCleanButtons:function(){}}),Cn=function(n){var e=n.children,t=Q.a.useState(!1),i=Object(pn.a)(t,2),c=i[0],r=i[1],o=Q.a.useState([]),a=Object(pn.a)(o,2),d=a[0],s=a[1],h=Q.a.useState([!1,!0]),l=Object(pn.a)(h,2),u=l[0],b=l[1],x=Q.a.useState(0),j=Object(pn.a)(x,2),p=j[0],g=j[1],f=Q.a.useState([]),m=Object(pn.a)(f,2),O=m[0],y=m[1],w=Q.a.useState(!1),k=Object(pn.a)(w,2),v=k[0],C=k[1],z=Q.a.useState([]),S=Object(pn.a)(z,2),F=S[0],G=S[1];return Object(rn.jsx)(vn.Provider,{value:{isShow:c,popUp:u,cart:d,sizes:O,setPopUp:b,setIsShow:r,removeFromCart:function(n){var e=d.filter((function(e){return e.key!==n}));s(e)},subTotal:p,handleAddToCart:function(n,e,t){if(d.find((function(e){return e.id==n.id}))){if(d.find((function(e){return e.id==n.id}))){var i=d.indexOf(n);if(d[i].size==e)n.quantity++,n.instance++,n.itemtotal=n.price*n.quantity;else if(d[i].size!=e){var c=Object(gn.a)({},n);c.instance=2,c.quantity=1,c.itemtotal=n.price,c.size=e,c.key=Object(kn.a)(),s([].concat(Object(fn.a)(d),[c]))}}}else n.key=t,n.quantity=1,n.key=t,n.itemtotal=n.price,n.size=e,n.instance=1,s([].concat(Object(fn.a)(d),[n]))},update:F,forceUpdate:G,setSubTotal:g,addToCart:s,addToSizes:y,hoodies:mn,shirts:On,cleanButtons:v,setCleanButtons:C},children:e})},zn=W.c.div(b||(b=Object(Z.a)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  .active {\n    width: 25%;\n    height: 65%;\n    min-height: 30px;\n    margin: 2%;\n    border: none;\n    border-radius: 10px;\n    background-color: ",";\n    background-size: 300% 100%;\n    transition: all 0.3s ease-out;\n    background-size: 300% 100%;\n    background-image: linear-gradient(\n      to right,\n      ",",\n      whitesmoke,\n      #ffd1dc,\n      #ffd1dc\n    );\n    &:hover {\n      background-position: 100% 0;\n    }\n  }\n  .clickedButton {\n    width: 25%;\n    height: 65%;\n    min-height: 30px;\n    margin: 2%;\n    border: none;\n    border-radius: 10px;\n    background-size: 300% 100%;\n    background-image: none;\n    background-color: #ffd1dc;\n  }\n"])),(function(n){return n.theme.colors.lightGrey}),(function(n){return n.theme.colors.lightGrey})),Sn=W.c.button(x||(x=Object(Z.a)(["\n  width: 70px;\n  height: 40px;\n  min-height: 30px;\n  margin: 2%;\n  border: none;\n  border-radius: 10px;\n\n  box-shadow: -2px 4px 10px ",";\n\n  background-color: blue;\n\n  &:focus {\n    outline: none;\n  }\n"])),(function(n){return n.theme.colors.darkGrey})),Fn=function(n){var e=n.takeSize,t=n.product,i=n.focus,c=n.setFocus,r=Object(H.useContext)(vn),o=(r.cleanButton,r.setCleanButtons,function(n){""==i?(c(n.target.id),document.getElementById(n.target.id).className="clickedButton"):0==i?alert("xd"):(document.getElementById(i).className="active",c(n.target.id),document.getElementById(n.target.id).className="clickedButton")}),a=function(n){return e(n.target.value)};return Object(rn.jsxs)(zn,{children:[Object(rn.jsx)(Sn,{id:"1"+t.id,className:"active",value:"S",onClick:function(){"S",a(event),o(event)},children:"S"}),Object(rn.jsx)(Sn,{id:"2"+t.id,className:"active",value:"M",onClick:function(){"M",a(event),o(event)},children:"M"}),Object(rn.jsx)(Sn,{id:"3"+t.id,className:"active",value:"L",onClick:function(){"L",a(event),o(event)},children:"L"}),Object(rn.jsx)(Sn,{id:"4"+t.id,className:"active",value:"XL",onClick:function(){"XL",a(event),o(event)},children:"XL"})]})},Gn=W.c.div(j||(j=Object(Z.a)(["\n  width: 100%;\n  height: 30%;\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-start;\n  flex-direction: column;\n  flex-wrap: wrap;\n  margin-top: 15px;\n  background-color: ",";\n  hr {\n    margin: 0px;\n    width: 75%;\n    height: 1px;\n    background-color: black;\n    border: none;\n  }\n"])),(function(n){return n.theme.colors.darkGrey})),Bn=W.c.div(p||(p=Object(Z.a)(["\n  width: 60%;\n  height: 60%;\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-start;\n  flex-direction: column;\n  color: whitesmoke;\n  flex-wrap: no-wrap;\n\n  padding: 1% 0% 0% 5%;\n  h2 {\n    font-weight: normal;\n    font-size: 1.5rem;\n    margin: 0px;\n  }\n  h3 {\n    font-weight: normal;\n    font-size: 0.8rem;\n    margin: 2px 0px 0px 0px;\n  }\n"]))),Tn=W.c.div(g||(g=Object(Z.a)(["\n  height: 100%;\n  width: 40%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-weight: normal;\n  padding: 0px;\n\n  hr {\n    margin: 5px;\n    width: 75%;\n    height: 1px;\n    background-color: black;\n    border: none;\n  }\n  h1 {\n    font-weight: normal;\n    margin: 0px;\n    font-size: 1.5rem;\n    color: white;\n  }\n  p {\n    font-weight: normal;\n    margin: 0px;\n    color: white;\n    margin-top: auto;\n  }\n\n  @media (min-width: 2000px) {\n    h1 {\n      font-size: 2.5rem;\n    }\n  }\n"]))),Ln=W.c.div(f||(f=Object(Z.a)(["\n  height: 40%;\n  width: 60%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-weight: normal;\n  padding: 0 5% 0 5%;\n"]))),Nn=W.c.button(m||(m=Object(Z.a)(["\n  margin-top: 5%;\n  width: 75%;\n  height: 25%;\n  border: none;\n  border-radius: 20px;\n  font-size: ",";\n  box-shadow: -2px 4px 10px ",";\n  text-align: center;\n  border: none;\n  background-size: 300% 100%;\n  transition: all 0.3s ease-out;\n  background-image: linear-gradient(\n    to right,\n    ",",\n    whitesmoke,\n    #ffd1dc,\n    #ffd1dc\n  );\n\n  &:hover {\n    background-position: 100% 0;\n  }\n  &:focus {\n    outline: none;\n  }\n"])),(function(n){return n.theme.fontSize.s}),(function(n){return n.theme.colors.darkGrey}),(function(n){return n.theme.colors.lightGrey})),Un=function(n){var e=n.product,t=Object(H.useContext)(vn),i=t.handleAddToCart,c=t.setPopUp,r=(t.popUp,Q.a.useState("")),o=Object(pn.a)(r,2),a=o[0],d=o[1],s=Q.a.useState(""),h=Object(pn.a)(s,2),l=h[0],u=h[1],b=function(n){c({show:!0,type:n})};return Object(rn.jsx)(rn.Fragment,{children:Object(rn.jsxs)(Gn,{children:[Object(rn.jsxs)(Bn,{children:[Object(rn.jsx)("h2",{children:e.name}),Object(rn.jsx)("h3",{children:e.model})]}),Object(rn.jsx)(Ln,{children:Object(rn.jsx)(Fn,{product:e,takeSize:function(n){u(n)},focus:a,setFocus:d})}),Object(rn.jsxs)(Tn,{children:[Object(rn.jsxs)("h1",{children:["$",e.price]}),Object(rn.jsx)(Nn,{size:l,onClick:function(){""!=l?(i(e,l,Object(kn.a)()),b("passed")):b("error"),function(){for(var n=1;n<5;n++)document.getElementById(n+e.id+"").className="active"}(),d(""),u("")},children:"Add To Cart"})]})]})})},En=W.c.div(O||(O=Object(Z.a)(["\n  width: 90%;\n  height: 60%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #f2f2f2;\n  border-radius: 20px;\n  img {\n    width: auto;\n    max-width: 100%;\n    height: 100%;\n    border: none;\n  }\n"]))),qn=function(n){var e=n.photo;return Object(rn.jsx)(rn.Fragment,{children:Object(rn.jsx)(En,{children:Object(rn.jsx)("img",{src:e})})})},In=W.c.div(y||(y=Object(Z.a)(["\n  width: 100%;\n  height: 80vh;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  flex-direction: column;\n  background-color: ",";\n  box-shadow: -2px 4px 10px lightgrey;\n  border-radius: 20px;\n  overflow: hidden;\n  margin: 20px;\n  @media (min-width: 1000px) {\n    width: 25%;\n    height: 45vh;\n  }\n"])),(function(n){return n.theme.colors.lightGrey})),Mn=function(n){var e=n.product;return Object(rn.jsxs)(In,{children:[Object(rn.jsx)(qn,{photo:e.photo}),Object(rn.jsx)(Un,{product:e,children:" "})]})},Pn=function(){var n=Object(H.useContext)(vn).hoodies;return Object(rn.jsx)(rn.Fragment,{children:Object(rn.jsx)(jn,{children:n.map((function(n,e){return Object(rn.jsx)(Mn,{product:n},n.id)}))})})},Dn=function(){var n=Object(H.useContext)(vn).shirts;return Object(rn.jsx)(rn.Fragment,{children:Object(rn.jsx)(jn,{children:n.map((function(n,e){return Object(rn.jsx)(Mn,{product:n},n.id)}))})})},Xn=t(4),An=(t(44),W.c.div(w||(w=Object(Z.a)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  .active {\n    width: 25%;\n    height: 65%;\n    min-height: 30px;\n    margin: 2%;\n    border: none;\n    border-radius: 10px;\n    background-color: ",";\n    box-shadow: -2px 4px 10px ",";\n    background-size: 300% 100%;\n    transition: all 0.3s ease-out;\n    background-size: 300% 100%;\n\n    background-image: linear-gradient(\n      to right,\n      ",",\n      whitesmoke,\n      #ffd1dc,\n      #ffd1dc\n    );\n    &:hover {\n      background-position: 100% 0;\n    }\n  }\n  .clickedButton {\n    width: 25%;\n    height: 65%;\n    min-height: 30px;\n    box-shadow: -2px 4px 10px ",";\n\n    margin: 2%;\n    border: none;\n    border-radius: 10px;\n    background-size: 300% 100%;\n    background-image: none;\n    background-color: #ffd1dc;\n  }\n\n  .disabledButton {\n    width: 25%;\n    height: 65%;\n    min-height: 30px;\n    box-shadow: -2px 4px 10px ",";\n\n    margin: 2%;\n    border: none;\n    border-radius: 10px;\n    background-size: 300% 100%;\n    background-image: none;\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.colors.lightGrey}),(function(n){return n.theme.colors.darkGrey}),(function(n){return n.theme.colors.lightGrey}),(function(n){return n.theme.colors.darkGrey}),(function(n){return n.theme.colors.darkGrey}),(function(n){return n.theme.colors.darkGrey}))),Jn=W.c.button(k||(k=Object(Z.a)(["\n  width: 70px;\n  height: 40px;\n  min-height: 30px;\n  margin: 2%;\n  border: none;\n  border-radius: 10px;\n\n  box-shadow: -2px 4px 10px ",";\n\n  background-color: blue;\n\n  &:focus {\n    outline: none;\n  }\n"])),(function(n){return n.theme.colors.darkGrey})),Rn=function(n){n.takeSize;var e=n.product,t=(n.highlight,Object(H.useContext)(vn)),i=(t.cart,t.addToCart,t.buttonsToDisable,t.setButtonsToDisable,Object(H.useState)(e.size+e.id+""+e.key)),c=Object(pn.a)(i,2),r=c[0],o=c[1],a=Object(H.useState)(e.size),d=Object(pn.a)(a,2),s=d[0],h=d[1];Object(H.useEffect)((function(){""!=r&&(document.getElementById(r).className="clickedButton",e.size=s)}),[r]);var l=function(){document.getElementById(r).className="active"};return Object(rn.jsxs)(An,{children:[Object(rn.jsx)(Jn,{id:"S"+e.id+e.key,className:"active",onClick:function(){l(),h("S"),o("S"+e.id+e.key)},children:"S"},Object(kn.a)()),Object(rn.jsx)(Jn,{id:"M"+e.id+e.key,className:"active",onClick:function(){l(),h("M"),o("M"+e.id+e.key)},children:"M"},Object(kn.a)()),Object(rn.jsx)(Jn,{id:"L"+e.id+e.key,className:"active",onClick:function(){l(),h("L"),o("L"+e.id+e.key)},children:"L"},Object(kn.a)()),Object(rn.jsx)(Jn,{id:"XL"+e.id+e.key,className:"active",onClick:function(){l(),h("XL"),o("XL"+e.id+e.key)},children:"XL"},Object(kn.a)())]})},Yn=W.c.div(v||(v=Object(Z.a)(["\n  width: 100%;\n  height: 33%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n  flex-wrap: wrap;\n  font-size: 2vh;\n  border: none;\n  h2 {\n    font-weight: normal;\n    margin: 10px 0 0 0;\n    font-size: 2vh;\n  }\n"]))),$n=W.c.div(C||(C=Object(Z.a)(["\n  width: 33%;\n  height: 75%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  box-shadow: -2px 4px 10px ",";\n  border-radius: 10px;\n  border: none;\n"])),(function(n){return n.theme.colors.darkGrey})),Hn=W.c.button(z||(z=Object(Z.a)(["\n  width: 20%;\n  margin-right: 10px;\n  box-shadow: -2px 4px 10px ",";\n  border-radius: 10px;\n  height: 50%;\n  background-color: transparent;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 30px;\n  border: none;\n  background-size: 300% 100%;\n  transition: all 0.3s ease-out;\n  background-size: 300% 100%;\n\n  background-image: linear-gradient(\n    to right,\n    ",",\n    whitesmoke,\n    #ff6961,\n    #ff6961\n  );\n  &:hover {\n    background-position: 100% 0;\n  }\n"])),(function(n){return n.theme.colors.darkGrey}),(function(n){return n.theme.colors.lightGrey})),Qn=W.c.button(S||(S=Object(Z.a)(["\n  box-shadow: -2px 4px 10px ",";\n  border-radius: 10px;\n  margin-left: 10px;\n  width: 20%;\n  height: 50%;\n  border: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 30px;\n\n  background-size: 300% 100%;\n  transition: all 0.3s ease-out;\n  background-size: 300% 100%;\n\n  background-image: linear-gradient(\n    to right,\n    ",",\n    whitesmoke,\n    #77dd77,\n    #77dd77\n  );\n  &:hover {\n    background-position: 100% 0;\n  }\n"])),(function(n){return n.theme.colors.darkGrey}),(function(n){return n.theme.colors.lightGrey})),Kn=function(n){var e=n.product,t=n.quantity,i=Object(H.useContext)(vn),c=(i.subTotal,i.setSubTotal,i.cart),r=i.addToCart,o=(i.forceUpdate,Q.a.useState(t)),a=Object(pn.a)(o,2),d=a[0];a[1];e.itemtotal=d*e.price;return Object(rn.jsxs)(Yn,{children:[Object(rn.jsx)(Hn,{onClick:function(){return e.quantity=e.quantity-1,void r(Object(fn.a)(c))},children:" - "}),Object(rn.jsx)($n,{children:e.quantity}),Object(rn.jsx)(Qn,{onClick:function(){return e.quantity=e.quantity+1,void r(Object(fn.a)(c))},children:" + "}),Object(rn.jsxs)("h2",{children:["Price: ",e.itemtotal,"$"]})]})},Vn=W.c.div(F||(F=Object(Z.a)(["\n  width: 100%;\n  height: 50vh;\n  background-color: whitesmoke;\n  color: black;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n\n  background-color: ",";\n  box-shadow: -2px 4px 10px lightgrey;\n  border-radius: 20px;\n  overflow: hidden;\n  &:last-of-type {\n    margin-bottom: 15%;\n    font-size: 1.2vh;\n  }\n\n  @media (min-width: 1024px) {\n    width: 45%;\n    height: 25vh;\n    min-height: 20vh;\n    margin: 2% 0 0% 4%;\n  }\n  @media (min-width: 2000px) {\n    width: 45%;\n    min-height: 20vh;\n    height: 30%;\n    margin: 2% 0 2% 4%;\n  }\n  p {\n    margin: 0 0 0 0;\n  }\n"])),(function(n){return n.theme.colors.lightGrey})),Wn=W.c.div(G||(G=Object(Z.a)(["\n  width: 50%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: aliceblue;\n  flex-direction: column;\n"]))),Zn=W.c.div(B||(B=Object(Z.a)(["\n  width: 100%;\n  height: 33%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  p {\n    margin: 5px 0 0 0;\n  }\n"]))),_n=W.c.div(T||(T=Object(Z.a)(["\n  width: 50%;\n  height: 66%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 20px;\n  overflow: hidden;\n\n  img {\n    width: auto;\n    max-width: 100%;\n    height: 100%;\n  }\n"]))),ne=W.c.div(L||(L=Object(Z.a)(["\n  width: 50%;\n  height: 34%;\n  display: flex;\n  padding: 10px;\n  justify-content: center;\n  align-items: center;\n  background-color: aliceblue;\n  flex-direction: column;\n\n  h2 {\n    font-weight: normal;\n    margin: 0;\n    font-size: 2vh;\n  }\n  h3 {\n    font-weight: normal;\n    margin: 0;\n    font-size: 2vh;\n  }\n"]))),ee=W.c.div(N||(N=Object(Z.a)(["\n  width: 100%;\n  height: 34%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  padding: 3px;\n  h2 {\n    font-weight: normal;\n    margin: 0;\n    font-size: 2vh;\n  }\n\n  hr {\n    width: 75%;\n    height: 0.5px;\n    margin: 5px;\n  }\n"]))),te=W.c.button(U||(U=Object(Z.a)(["\n  width: 70%;\n  height: auto;\n  background-color: #ff6961;\n  border: 0.5px solid black;\n  box-shadow: -2px 4px 10px lightgrey;\n"]))),ie=(W.c.div(E||(E=Object(Z.a)(["\n  position: absolute;\n  width: 40%;\n  height: 40%;\n  background-color: yellow;\n"]))),function(n){var e=n.productData,t=Object(H.useContext)(vn),i=t.removeFromCart;t.buttonsToDisable,t.setButtonsToDisable;return Object(rn.jsx)(rn.Fragment,{children:Object(rn.jsxs)(Vn,{children:[Object(rn.jsx)(_n,{children:Object(rn.jsx)("img",{src:e.photo})}),Object(rn.jsxs)(ne,{children:[Object(rn.jsx)("h2",{children:e.name}),Object(rn.jsx)("h3",{children:e.model})]}),Object(rn.jsxs)(Wn,{children:[Object(rn.jsxs)(Zn,{children:[Object(rn.jsx)("p",{children:"Size:"}),Object(rn.jsx)(Rn,{product:e,highlight:e.size},e.key)]}),Object(rn.jsx)("p",{children:"Quantity"}),Object(rn.jsx)(Kn,{quantity:e.quantity,product:e}),Object(rn.jsxs)(ee,{children:[Object(rn.jsx)("hr",{}),Object(rn.jsx)(te,{onClick:function(){return i(e.key)},children:"Remove"})]})]})]})})}),ce=W.c.div(q||(q=Object(Z.a)(["\n  transition: all 1s ease-in-out;\n  position: absolute;\n"]))),re=function(){var n=Object(H.useContext)(vn),e=n.cart,t=(n.update,n.forceUpdate,Q.a.useState(0)),i=Object(pn.a)(t,2),c=i[0],r=i[1];return Object(H.useEffect)((function(){var n=0;e.forEach((function(e){return n+=e.itemtotal})),r(n)}),[e]),Object(rn.jsx)(ce,{children:Object(rn.jsxs)("p",{children:[" ",c]})})},oe=W.c.div(I||(I=Object(Z.a)(["\n  width: 100%;\n  height: 100%;\n  background-color: #ffd1dc;\n  position: fixed;\n  box-shadow: -2px 4px 10px lightgrey;\n\n  overflow: hidden;\n  top: 0;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  flex-direction: column;\n\n  @media (min-width: 1020px) {\n    width: 45%;\n    height: 90%;\n    right: 20px;\n    top: 20px;\n    border-radius: 20px;\n  }\n\n  @media (min-width: 2000px) {\n    width: 40%;\n    height: 90%;\n    right: 20px;\n    top: 20px;\n    border-radius: 20px;\n  }\n"]))),ae=W.c.div(M||(M=Object(Z.a)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-start;\n  flex-direction: row;\n  flex-wrap: wrap;\n  overflow-y: scroll;\n\n  margin-bottom: 10%;\n  padding: 5% 3% 5% 3%;\n"]))),de=W.c.div(P||(P=Object(Z.a)(["\n  width: 100%;\n  height: 6%;\n  background-color: #ffd1dc;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-bottom: 1px solid black;\n  h1 {\n    font-weight: normal;\n  }\n"]))),se=W.c.div(D||(D=Object(Z.a)(["\n  width: 100%;\n  height: 7%;\n  background-color: #ffd1dc;\n  display: flex;\n  position: absolute;\n  flex-direction: column;\n  bottom: 0;\n  align-items: center;\n  justify-content: center;\n  border-top: 1px solid black;\n  transition: all 1s ease-in-out;\n  h1 {\n    background-color: #ffd1dc;\n  }\n"]))),he=W.c.div(X||(X=Object(Z.a)(["\n  width: 100%;\n  height: 100%;\n  min-height: 200px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  h1 {\n    margin: 0;\n    font-weight: normal;\n    color: black;\n  }\n"]))),le=function(){var n=Object(H.useContext)(vn).cart,e=(Q.a.useRef(0),function(){return 0!=Object.keys(n).length?n.map((function(n){return Object(rn.jsx)(ie,{productData:n})})):Object(rn.jsx)(he,{children:Object(rn.jsx)("h1",{children:"Your cart is empty, add something"})})});return Object(rn.jsx)(rn.Fragment,{children:Object(rn.jsxs)(oe,{children:[Object(rn.jsx)(de,{children:Object(rn.jsx)("h1",{children:"Your cart"})}),Object(rn.jsx)(ae,{children:Object(rn.jsx)(e,{},Object(kn.a)())}),Object(rn.jsx)(se,{children:Object(rn.jsx)(re,{})})]})})},ue=W.c.button(A||(A=Object(Z.a)(["\n  width: 50px;\n  height: 30px;\n  background-color: #ffd1dc;\n  border: 1px solid black;\n  position: fixed;\n  right: 20px;\n  top: 20px;\n"]))),be=function(){var n=Object(H.useContext)(vn),e=n.isShow,t=n.setIsShow,i=Object(H.useContext)(vn),c=i.popUp,r=i.setPopUp;i.showPopUp;return Object(rn.jsxs)(rn.Fragment,{children:[!0===c.show?[Object(H.useEffect)((function(){var n=setTimeout((function(){r(!c.show)}),1e3);return function(){return clearTimeout(n)}}),[]),Object(rn.jsx)(wn,{type:c.type})]:Object(rn.jsx)(rn.Fragment,{}),Object(rn.jsx)(ue,{onClick:function(){return t(!e)},children:"Cart"}),e?[Object(rn.jsx)(le,{}),Object(rn.jsx)(ue,{onClick:function(){return t(!e)},children:"Close"})]:Object(rn.jsx)(rn.Fragment,{})]})},xe=W.c.div(J||(J=Object(Z.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  background-color: blue;\n  height: 80vh;\n"]))),je=function(){return Object(rn.jsx)(xe,{children:Object(rn.jsx)("h1",{children:"Contact us"})})},pe=(t.p,W.c.div(R||(R=Object(Z.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  width: 100%;\n  height: auto;\n"])))),ge=W.c.div(Y||(Y=Object(Z.a)(["\n  width: 100%;\n  height: 100%;\n  background-size: cover;\n  background-repeat: no-repeat;\n  display: flex;\n  box-shadow: -2px 4px 10px ",";\n  @media (min-width: 1024px) {\n    width: 100%;\n    background-position: center;\n    max-width: 50%;\n    height: 100%;\n    max-height: 75%;\n  }\n"])),(function(n){return n.theme.colors.darkGrey})),fe=W.c.div($||($=Object(Z.a)(["\n  width: 100%;\n  height: 80vh;\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  flex-direction: row;\n\n  h1 {\n    font-weight: normal;\n    margin-right: 100px;\n  }\n"]))),me=function(){return Object(rn.jsxs)(pe,{children:[Object(rn.jsxs)(fe,{children:[Object(rn.jsx)("h1",{children:"Create your own style with us."}),Object(rn.jsx)(ge,{})]}),Object(rn.jsx)(fe,{})]})},Oe=function(){return Object(rn.jsx)(dn.a,{children:Object(rn.jsxs)(W.a,{theme:nn,children:[Object(rn.jsx)(_,{}),Object(rn.jsx)(xn,{children:Object(rn.jsx)(Cn,{children:Object(rn.jsxs)(en,{children:[Object(rn.jsx)(be,{}),Object(rn.jsxs)(Xn.c,{children:[Object(rn.jsx)(Xn.a,{path:"/shirts",children:Object(rn.jsx)(Dn,{})}),Object(rn.jsx)(Xn.a,{path:"/contact",children:Object(rn.jsx)(je,{})}),Object(rn.jsx)(Xn.a,{path:"/hoodies",children:Object(rn.jsx)(Pn,{})}),Object(rn.jsx)(Xn.a,{path:"/",children:Object(rn.jsx)(me,{})})]})]})})})]})})};t(45);V.a.render(Object(rn.jsx)(Q.a.StrictMode,{children:Object(rn.jsx)(Oe,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.5827a9e6.chunk.js.map