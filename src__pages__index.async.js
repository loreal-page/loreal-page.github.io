"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[858,80,951],{55757:function(T,r,t){t.r(r),t.d(r,{default:function(){return v}});var f=t(48305),o=t.n(f),l=t(93236),s=t(81007),m=t(75385),d=t(62086);function v(){var c=(0,l.useState)("login"),u=o()(c,2),e=u[0],n=u[1];return(0,d.jsxs)("div",{children:[e==="login"&&(0,d.jsx)(m.default,{goHome:function(){n("home")}}),e==="home"&&(0,d.jsx)(s.default,{logout:function(){n("login")}})]})}},15661:function(T,r,t){t.r(r),t.d(r,{LoginInput:function(){return h}});var f=t(48305),o=t.n(f),l=t(51761),s=t(18064),m=t(73969),d=t(53430),v=t(82187),c=t.n(v),u=t(93236),e=t(62086),n=[{login:"admin1",pwd:"123456"},{login:"admin2",pwd:"123456"},{login:"admin3",pwd:"123456"},{login:"admin4",pwd:"123456"},{login:"admin5",pwd:"123456"},{login:"admin6",pwd:"123456"}],h=function(E){var y=E.loginHome,D=l.Z.Password,Z=(0,u.useState)(!1),j=o()(Z,2),x=j[0],S=j[1],B=(0,u.useState)(1),p=o()(B,2),i=p[0],A=p[1],P=(0,u.useState)(!0),C=o()(P,2),I=C[0],g=C[1],N=(0,u.useState)(""),H=o()(N,2),b=H[0],W=H[1],U=(0,u.useState)(""),L=o()(U,2),K=L[0],R=L[1],w=function(){var a={login:b,pwd:K};n.some(function(M){return M.login===a.login&&M.pwd===a.pwd})?y():s.ZP.warning("\u5BC6\u7801\u9519\u8BEF\uFF0C\u8BF7\u91CD\u8BD5\uFF01")};(0,u.useEffect)(function(){if(i>0){var F=setInterval(function(){A(function(a){return a-1})},1e3);return function(){return clearInterval(F)}}},[i]);var z=function(a){console.log(a.target.value),R(a.target.value)},G=function(a){console.log(a.target.value),W(a.target.value)};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(m.Z,{className:"container",justify:"center",align:"center",vertical:!0,children:[(0,e.jsx)("h4",{className:"login-title",children:"\u6B27\u83B1\u96C5\u5458\u5DE5\u5185\u5356"}),(0,e.jsx)(l.Z,{placeholder:"\u8BF7\u8F93\u5165\u5185\u5356\u8D26\u53F7",className:"input-test",onInput:G}),(0,e.jsx)(D,{placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801",className:"input-test",onInput:z}),(0,e.jsx)("button",{disabled:x,className:c()("login-btn",{"login-btn-able":!x,"login-btn-disabled":x}),onClick:w,children:"\u7ACB\u5373\u767B\u5F55"})]}),(0,e.jsx)(d.Z,{open:I,title:(0,e.jsx)("div",{className:"modal-title",children:"\u53CB\u60C5\u63D0\u9192"}),centered:!0,okButtonProps:{className:c()("confirm-btn",{"confirm-btn-disabled":i>0,"confirm-btn-able ":i===0}),disabled:i>0},cancelButtonProps:{style:{display:"none"}},okText:i>0?"\u786E\u8BA4\uFF08".concat(i,"s\uFF09"):"\u786E\u8BA4",onOk:function(){return g(!1)},closeIcon:null,children:(0,e.jsxs)("div",{style:{fontWeight:500},children:[(0,e.jsx)("p",{style:{color:"red",marginTop:"40px"},children:"\u540C\u4E00\u8D26\u53F7\u5728\u540C\u4E00\u65F6\u95F4\u70B9\u53EA\u80FD\u7531\u4E00\u4E2A\u7528\u6237\u767B\u5165\uFF0C\u91CD\u590D\u767B\u5165\u4F1A\u5BFC\u81F4\u5148\u524D\u8BBF\u95EE\u81EA\u52A8\u9000\u51FA\u3002"}),(0,e.jsx)("p",{children:"\u5458\u5DE5\u5185\u5356\u8D26\u53F7\u4EC5\u9650\u6B27\u83B1\u96C5\u5458\u5DE5\u4F7F\u7528\uFF0C\u4E0D\u5F97\u8F6C\u8BA9\uFF0C\u8BF7\u59A5\u5584\u4FDD\u7BA1\u60A8\u7684\u8D26\u53F7\u5BC6\u7801\u3002\u5185\u5356\u6240\u8D2D\u4EA7\u54C1\u4E0D\u5F97\u8F6C\u552E\u6216\u8005\u4EE5\u5176\u4ED6\u5F62\u5F0F\u725F\u5229\u3002"})]})})]})}},75385:function(T,r,t){t.r(r),t.d(r,{default:function(){return h}});var f=t(48305),o=t.n(f),l=t(81418),s=t(73969),m=t(53430),d=t(59004),v=t.p+"static/before_begining.312cc6e4.jpg",c=t(63552),u=t(93236),e=t(15661),n=t(62086);function h(O){var E=O.goHome,y=l.Z.Header,D=l.Z.Footer,Z=l.Z.Sider,j=l.Z.Content,x=(0,u.useState)(!1),S=o()(x,2),B=S[0],p=S[1],i={textAlign:"center",color:"#fff",height:100,paddingInline:48,lineHeight:"100px",backgroundColor:"#fff"},A={textAlign:"center",lineHeight:"120px",color:"#fff",backgroundColor:"#fff",backgroundImage:"url(".concat(v,")"),backgroundSize:"cover",backgroundPosition:"50% 0",display:"flex",alignContent:"center",justifyContent:"center"},P={overflow:"hidden",width:"100%",height:"100%",minHeight:"100vh",maxWidth:"100%"},C={textAlign:"center",backgroundColor:"#fff",height:194,paddingTop:40,borderTop:"1px solid #ececec"},I=[{title:"\u6B27\u83B1\u96C5\u5185\u5356\u5BA2\u670D\u7535\u8BDD\uFF1A",content:"400-128-8832"},{title:"\u6B27\u83B1\u96C5\u5185\u5356\u5BA2\u670D\u90AE\u7BB1",content:"\uFF1Aloreal@sfmail.sf-express.com"},{title:"\u9690\u79C1\u653F\u7B56"},{title:"cookies\u653F\u7B56"},{title:"\u6B27\u56FD\u5BB6\u836F\u76D1\u5C40\u63D0\u793A\u60A8\uFF1A\u8BF7\u6B63\u786E\u8BA4\u8BC6\u5316\u5986\u54C1\u529F\u6548\uFF0C\u5316\u5986\u54C1\u4E0D\u80FD\u4EE3\u66FF\u836F\u54C1\uFF0C\u4E0D\u80FD\u6CBB\u7597\u76AE\u80A4\u75C5\u7B49\u75BE\u75C5"}];return(0,n.jsxs)(l.Z,{id:"modal-wrapper-login",style:P,children:[(0,n.jsx)(y,{style:i,children:(0,n.jsx)(s.Z,{justify:"flex-start",align:"center",className:"w-[100%] max-w-[960px] h-[100%]",children:(0,n.jsx)("h1",{children:(0,n.jsx)("img",{src:c,alt:"",className:"w-[96px]"})})})}),(0,n.jsx)(j,{style:A,children:(0,n.jsx)(s.Z,{justify:"flex-end",align:"center",className:"min-h-[100%] w-[960px]",children:(0,n.jsx)(e.LoginInput,{loginHome:function(){p(!0),setTimeout(function(){p(!1),E()},1e3)}})})}),(0,n.jsx)(D,{style:C,children:(0,n.jsx)(s.Z,{justify:"flex-start",align:"center",className:"w-[100%] max-w-[960px] h-[100%]",children:(0,n.jsx)(s.Z,{justify:"center",wrap:"wrap",children:I.map(function(g){return(0,n.jsxs)("li",{children:[(0,n.jsx)("span",{children:g.title}),g.content?(0,n.jsx)("span",{className:"text-[#428bca]",children:g.content}):""]})})})})}),(0,n.jsx)(m.Z,{mask:!0,styles:{mask:{backgroundColor:"#000",opacity:.3}},footer:null,open:B,closable:!1,children:(0,n.jsx)(s.Z,{justify:"center",align:"center",children:(0,n.jsx)(d.Z,{style:{width:"960px",height:"350px",margin:"0 auto",padding:"60px 0,",display:"flex",justifyContent:"center",alignItems:"center"},size:"large"})})})]})}}}]);