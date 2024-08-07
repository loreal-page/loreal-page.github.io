"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[929],{76687:function(U,d,o){o.r(d),o.d(d,{TotalAmountContext:function(){return f},TotalAmountContextProvider:function(){return D}});var m=o(48305),u=o.n(m),s=o(93236),i=o(62086),f=(0,s.createContext)(),D=function(y){var x=y.children,g=(0,s.useState)("0"),O=u()(g,2),P=O[0],h=O[1],j=(0,s.useState)("15000"),T=u()(j,2),L=T[0],M=T[1],$=(0,s.useState)("10000"),E=u()($,2),F=E[0],I=E[1],W=(0,s.useState)("0"),S=u()(W,2),N=S[0],b=S[1],Q=(0,s.useState)("0"),t=u()(Q,2),n=t[0],a=t[1],e=function(r){a(r)},l=function(r){I(r)},B=function(r){M(r)},_=function(r){b(r)},p=function(r){h(r)};return(0,i.jsx)(f.Provider,{value:{totalAmount:P,LDtotalAmount:F,updateTotalAmount:p,updateLDTotalAmount:l,CPDtotalAmount:N,updateCPDTotalAmount:_,orderTotalAmount:L,updateOrderTotalAmount:B,orderQuantity:n,updateOrderQuantity:e},children:x})}},16070:function(U,d,o){o.r(d),o.d(d,{QuotaHeader:function(){return f}});var m=o(18287),u=o(93236),s=o(76687),i=o(62086),f=function(){var v=(0,u.useContext)(s.TotalAmountContext),y=v.orderQuantity,x=v.orderTotalAmount,g=v.LDtotalAmount;return(0,i.jsxs)(m.Z,{className:"limit bg-[#fff7ea]  h-[42px]",align:"center",justify:"center",children:[(0,i.jsx)("div",{className:"w-[200px]",children:"\u603B\u989D\u5EA6\u5269\u4F59\uFF1A".concat(x)}),(0,i.jsx)("div",{className:"w-[200px]",children:"LD\u989D\u5EA6\u5269\u4F59\uFF1A".concat(g)}),(0,i.jsx)("div",{className:"w-[200px]",children:"\u8BA2\u5355\u6570\uFF1A".concat(y,"/10")})]})}},18287:function(U,d,o){o.d(d,{Z:function(){return Q}});var m=o(93236),u=o(82187),s=o.n(u),i=o(93651),f=o(89749),D=o(56663),v=o(41713),y=o(83116);const x=["wrap","nowrap","wrap-reverse"],g=["flex-start","flex-end","start","end","center","space-between","space-around","space-evenly","stretch","normal","left","right"],O=["center","start","end","flex-start","flex-end","self-start","self-end","baseline","normal","stretch"],P=(t,n)=>{const a={};return x.forEach(e=>{a[`${t}-wrap-${e}`]=n.wrap===e}),a},h=(t,n)=>{const a={};return O.forEach(e=>{a[`${t}-align-${e}`]=n.align===e}),a[`${t}-align-stretch`]=!n.align&&!!n.vertical,a},j=(t,n)=>{const a={};return g.forEach(e=>{a[`${t}-justify-${e}`]=n.justify===e}),a};function T(t,n){return s()(Object.assign(Object.assign(Object.assign({},P(t,n)),h(t,n)),j(t,n)))}var L=T;const M=t=>{const{componentCls:n}=t;return{[n]:{display:"flex","&-vertical":{flexDirection:"column"},"&-rtl":{direction:"rtl"},"&:empty":{display:"none"}}}},$=t=>{const{componentCls:n}=t;return{[n]:{"&-gap-small":{gap:t.flexGapSM},"&-gap-middle":{gap:t.flexGap},"&-gap-large":{gap:t.flexGapLG}}}},E=t=>{const{componentCls:n}=t,a={};return x.forEach(e=>{a[`${n}-wrap-${e}`]={flexWrap:e}}),a},F=t=>{const{componentCls:n}=t,a={};return O.forEach(e=>{a[`${n}-align-${e}`]={alignItems:e}}),a},I=t=>{const{componentCls:n}=t,a={};return g.forEach(e=>{a[`${n}-justify-${e}`]={justifyContent:e}}),a},W=()=>({});var S=(0,v.I$)("Flex",t=>{const{paddingXS:n,padding:a,paddingLG:e}=t,l=(0,y.TS)(t,{flexGapSM:n,flexGap:a,flexGapLG:e});return[M(l),$(l),E(l),F(l),I(l)]},W,{resetStyle:!1}),N=function(t,n){var a={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&n.indexOf(e)<0&&(a[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,e=Object.getOwnPropertySymbols(t);l<e.length;l++)n.indexOf(e[l])<0&&Object.prototype.propertyIsEnumerable.call(t,e[l])&&(a[e[l]]=t[e[l]]);return a},Q=m.forwardRef((t,n)=>{const{prefixCls:a,rootClassName:e,className:l,style:B,flex:_,gap:p,children:A,vertical:r=!1,component:R="div"}=t,V=N(t,["prefixCls","rootClassName","className","style","flex","gap","children","vertical","component"]),{flex:c,direction:K,getPrefixCls:H}=m.useContext(D.E_),C=H("flex",a),[w,Z,z]=S(C),J=r!=null?r:c==null?void 0:c.vertical,X=s()(l,e,c==null?void 0:c.className,C,Z,z,L(C,t),{[`${C}-rtl`]:K==="rtl",[`${C}-gap-${p}`]:(0,f.n)(p),[`${C}-vertical`]:J}),G=Object.assign(Object.assign({},c==null?void 0:c.style),B);return _&&(G.flex=_),p&&!(0,f.n)(p)&&(G.gap=p),w(m.createElement(R,Object.assign({ref:n,className:X,style:G},(0,i.Z)(V,["justify","wrap","align"])),A))})}}]);