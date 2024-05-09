"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[992],{12278:function(W,C,s){s.d(C,{Z:function(){return o}});var j=s(91010),h=s(93236),N={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}}]},name:"check",theme:"outlined"},b=N,S=s(71787),F=function(O,x){return h.createElement(S.Z,(0,j.Z)({},O,{ref:x,icon:b}))},A=h.forwardRef(F),o=A},28909:function(W,C,s){s.r(C),s.d(C,{ShoppingCar:function(){return z}});var j=s(26068),h=s.n(j),N=s(48305),b=s.n(N),S=s(76962),F=s(12278),A=s(30953),o=s(18287),p=s(26792),O=s(82187),x=s.n(O),D=s(93236),e=s(62086),z=function(Z){var G=Z.goHome,f=Z.skuList,E=Z.updateCar,L=Z.jiesuan,I=(0,D.useState)(f.map(function(a){return a.id})),B=b()(I,2),r=B[0],y=B[1];console.log(f);var R=(0,e.jsxs)(o.Z,{className:"none-page",vertical:!0,justify:"center",align:"center",children:[(0,e.jsx)(S.Z,{className:"icon"}),(0,e.jsxs)("div",{className:"title",children:[(0,e.jsx)("div",{className:"tip-1",children:"\u60A8\u7684\u8D2D\u7269\u8F66\u8FD8\u662F\u7A7A\u7684"}),(0,e.jsx)("div",{className:"tip-2",children:"\u5FEB\u53BB\u9009\u8D2D\u5427"})]}),(0,e.jsx)("div",{className:"go-home-page-btn",onClick:G,children:"\u53BB\u9996\u9875\u901B\u901B"})]}),P=(0,e.jsx)("div",{className:"shopping-car-header",children:"\u6211\u7684\u8D2D\u7269\u8F66\uFF08".concat(f.length,"\uFF09")}),n=function(c,m){console.log("minus");var d=h()(h()({},c),{},{add_quantity:c.add_quantity-1}),v=Object.assign(f);v.splice(m,1,d),E(v)},l=function(c,m){console.log("item");var d=h()(h()({},c),{},{add_quantity:c.add_quantity+1});console.log(d);var v=Object.assign(f);v.splice(m,1,d),E(v)},i=function(c,m){var d=Object.assign(f);if(d.splice(m,1),E(d),r.includes(c)){var v=r.filter(function(H){return H!==c});y(v)}},t=function(c){if(console.log(r),r!=null&&r.includes(c)){var m=r.slice().filter(function(v){return v!==c});y(m)}else{var d=r.slice();d.push(c),y(d)}},u=function(){r.length===f.length?y([]):y(f.map(function(c){return c.id}))},V=function(){var c=f.filter(function(d){return r.includes(d.id)}),m=c.reduce(function(d,v){return(0,p.Z)(d).add((0,p.Z)(v.size.inner_price).times(v.add_quantity).toNumber()).toNumber().toFixed(2)},0);return m};return(0,e.jsxs)("div",{className:"shopping-car-container",style:{color:"black"},children:[(0,e.jsx)(o.Z,{justify:"start",children:P}),f.length===0?R:(0,e.jsxs)(o.Z,{vertical:!0,className:"shopping-car-content",children:[(0,e.jsxs)(o.Z,{justify:"space-evenly",className:"sku-props-title",children:[(0,e.jsx)("div",{className:"item name",children:"\u5546\u54C1"}),(0,e.jsx)("div",{className:"item",children:"\u5355\u4EF7"}),(0,e.jsx)("div",{className:"item",children:"\u6570\u91CF"}),(0,e.jsx)("div",{className:"item",children:"\u5C0F\u8BA1"}),(0,e.jsx)("div",{className:"item",children:"\u64CD\u4F5C"})]}),(0,e.jsx)(o.Z,{vertical:!0,className:"list-items",children:f.map(function(a,c){return console.log(r==null?void 0:r.includes(a.id)),(0,e.jsxs)(o.Z,{className:"sku-item",children:[(0,e.jsxs)(o.Z,{className:"left-part",align:"center",children:[(0,e.jsx)("div",{className:x()("checkbox",{unchecked:!(r!=null&&r.includes(a.id))}),onClick:function(){return t(a.id)},children:(0,e.jsx)(F.Z,{})}),(0,e.jsx)("div",{className:"img",children:"\u7167\u7247"}),(0,e.jsxs)(o.Z,{className:"props",vertical:!0,justify:"center",align:"start",children:[(0,e.jsx)("div",{className:"type-tag",children:"\u7F8E\u5986"}),(0,e.jsx)("div",{className:"name",children:a.name}),(0,e.jsx)("div",{className:"size",children:a.size.size})]})]}),(0,e.jsxs)(o.Z,{className:"other price",vertical:!0,justify:"center",align:"center",children:[(0,e.jsx)("div",{className:"inner",children:"\xA5".concat(a.size.inner_price)}),(0,e.jsx)("div",{className:"market",children:"\xA5".concat(a.size.market_price)})]}),(0,e.jsxs)(o.Z,{className:"other quantity",vertical:!0,justify:"center",align:"center",children:[(0,e.jsxs)(o.Z,{className:"count-operation",children:[(0,e.jsx)("div",{className:x()("quantity-btn",{disabled:a.add_quantity===1}),onClick:function(){a.add_quantity!==1&&n(a,c)},children:"-"}),(0,e.jsx)("div",{className:"quantity",children:a.add_quantity}),(0,e.jsx)("div",{className:x()("quantity-btn",{disabled:a.add_quantity===a.size.quantity}),onClick:function(){a.add_quantity!==a.size.quantity&&l(a,c)},children:"+"})]}),(0,e.jsx)("div",{className:"stock",children:a.size.quantity>999?"\u5E93\u5B58999+":"\u5E93\u5B58\u4EC5\u5269".concat(a.size.quantity)})]}),(0,e.jsx)("div",{className:"other total",children:"\xA5".concat((0,p.Z)(a.size.inner_price).times(a.add_quantity).toNumber().toFixed(2))}),(0,e.jsx)("div",{className:"other operation",children:(0,e.jsx)(A.Z,{onClick:function(){return i(a.id,c)}})})]},a.id)})}),(0,e.jsxs)(o.Z,{className:"settle",justify:"space-between",align:"center",children:[(0,e.jsxs)(o.Z,{className:"checkbox-wrapper",align:"center",children:[(0,e.jsx)("div",{className:x()("checkbox",{unchecked:r.length!==f.length}),onClick:u,children:(0,e.jsx)(F.Z,{})}),(0,e.jsx)("div",{className:"all",children:"\u5168\u9009"})]}),(0,e.jsxs)(o.Z,{className:"right-part",children:[(0,e.jsxs)("div",{className:"amount",children:[(0,e.jsx)("div",{className:"total",children:"\u603B\u8BA1\uFF1A\xA5".concat(V())}),(0,e.jsx)("div",{className:"tip",children:"\u4E0D\u5305\u542B\u8FD0\u8D39"})]}),(0,e.jsx)("div",{className:"settle-btn",onClick:L,children:"\u53BB\u7ED3\u7B97"})]})]})]})]})}},18287:function(W,C,s){s.d(C,{Z:function(){return P}});var j=s(93236),h=s(82187),N=s.n(h),b=s(93651),S=s(89749),F=s(56663),A=s(41713),o=s(83116);const p=["wrap","nowrap","wrap-reverse"],O=["flex-start","flex-end","start","end","center","space-between","space-around","space-evenly","stretch","normal","left","right"],x=["center","start","end","flex-start","flex-end","self-start","self-end","baseline","normal","stretch"],D=(n,l)=>{const i={};return p.forEach(t=>{i[`${n}-wrap-${t}`]=l.wrap===t}),i},e=(n,l)=>{const i={};return x.forEach(t=>{i[`${n}-align-${t}`]=l.align===t}),i[`${n}-align-stretch`]=!l.align&&!!l.vertical,i},z=(n,l)=>{const i={};return O.forEach(t=>{i[`${n}-justify-${t}`]=l.justify===t}),i};function M(n,l){return N()(Object.assign(Object.assign(Object.assign({},D(n,l)),e(n,l)),z(n,l)))}var Z=M;const G=n=>{const{componentCls:l}=n;return{[l]:{display:"flex","&-vertical":{flexDirection:"column"},"&-rtl":{direction:"rtl"},"&:empty":{display:"none"}}}},f=n=>{const{componentCls:l}=n;return{[l]:{"&-gap-small":{gap:n.flexGapSM},"&-gap-middle":{gap:n.flexGap},"&-gap-large":{gap:n.flexGapLG}}}},E=n=>{const{componentCls:l}=n,i={};return p.forEach(t=>{i[`${l}-wrap-${t}`]={flexWrap:t}}),i},L=n=>{const{componentCls:l}=n,i={};return x.forEach(t=>{i[`${l}-align-${t}`]={alignItems:t}}),i},I=n=>{const{componentCls:l}=n,i={};return O.forEach(t=>{i[`${l}-justify-${t}`]={justifyContent:t}}),i},B=()=>({});var r=(0,A.I$)("Flex",n=>{const{paddingXS:l,padding:i,paddingLG:t}=n,u=(0,o.TS)(n,{flexGapSM:l,flexGap:i,flexGapLG:t});return[G(u),f(u),E(u),L(u),I(u)]},B,{resetStyle:!1}),y=function(n,l){var i={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&l.indexOf(t)<0&&(i[t]=n[t]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var u=0,t=Object.getOwnPropertySymbols(n);u<t.length;u++)l.indexOf(t[u])<0&&Object.prototype.propertyIsEnumerable.call(n,t[u])&&(i[t[u]]=n[t[u]]);return i},P=j.forwardRef((n,l)=>{const{prefixCls:i,rootClassName:t,className:u,style:V,flex:a,gap:c,children:m,vertical:d=!1,component:v="div"}=n,H=y(n,["prefixCls","rootClassName","className","style","flex","gap","children","vertical","component"]),{flex:g,direction:J,getPrefixCls:X}=j.useContext(F.E_),$=X("flex",i),[w,Q,U]=r($),Y=d!=null?d:g==null?void 0:g.vertical,K=N()(u,t,g==null?void 0:g.className,$,Q,U,Z($,n),{[`${$}-rtl`]:J==="rtl",[`${$}-gap-${c}`]:(0,S.n)(c),[`${$}-vertical`]:Y}),T=Object.assign(Object.assign({},g==null?void 0:g.style),V);return a&&(T.flex=a),c&&!(0,S.n)(c)&&(T.gap=c),w(j.createElement(v,Object.assign({ref:l,className:K,style:T},(0,b.Z)(H,["justify","wrap","align"])),m))})}}]);
