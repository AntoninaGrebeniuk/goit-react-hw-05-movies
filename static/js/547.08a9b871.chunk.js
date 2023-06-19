"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[547],{3193:function(n,e,t){t.d(e,{O:function(){return o}});t(2791);var r=t(9391),i=(t(1009),t(184)),o=function(n){var e=n.rating;return(0,i.jsx)(r.Ip,{value:e,maxValue:10,text:e,background:!0,styles:(0,r.y3)({pathColor:e<4?"red":e<7?"orange":"green",height:"100%",width:"100%",textSize:"38px",transition:"stroke-dashoffset 0.5s ease 0s",transform:"rotate(0.25turn)",transformOrigin:"center center",pathTransitionDuration:.5,textColor:"#ffffff",trailColor:"#ffffff",backgroundColor:"#111111"})})}},5771:function(n,e,t){t.r(e),t.d(e,{default:function(){return rn}});var r,i,o,a,s,c,u,p,l,d,f,x,h,g,v,m,b,Z,w,y=t(5861),j=t(9439),k=t(4687),G=t.n(k),_=t(7689),z=t(2791),C=t(4390),R=t(7596),L=t(3193),U=t(168),S=t(9202),O=S.Z.div(r||(r=(0,U.Z)(["\n  display: flex;\n  gap: 30px;\n  margin-bottom: 30px;\n"]))),I=S.Z.div(i||(i=(0,U.Z)(["\n  position: relative;\n  width: 400px;\n  overflow: hidden;\n\n  border-radius: ",";\n"])),(function(n){return n.theme.border.radius})),P=S.Z.img(o||(o=(0,U.Z)(["\n  display: block;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n"]))),T=S.Z.div(a||(a=(0,U.Z)(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  width: 45px;\n  height: 45px;\n  z-index: 150;\n\n  transform: translate(-20px, 20px);\n  border-radius: 50%;\n  border: none;\n"]))),A=S.Z.ul(s||(s=(0,U.Z)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n  width: 930px;\n  min-height: 400px;\n  padding: 40px 20px;\n\n  background-color: ",";\n  border-radius: 15px;\n"])),(function(n){return n.theme.colors.bgColor})),D=S.Z.li(c||(c=(0,U.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  padding: 8px 0px;\n"]))),F=S.Z.li(u||(u=(0,U.Z)(["\n  display: flex;\n  gap: 15px;\n  padding: 8px 0px;\n  color: ",";\n"])),(function(n){return n.theme.colors.lightGrey})),V=S.Z.h2(p||(p=(0,U.Z)(["\n  font-weight: 400;\n  font-size: 34px;\n  color: ",";\n"])),(function(n){return n.theme.colors.lightGreen})),q=S.Z.li(l||(l=(0,U.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  padding: 8px 0px;\n  color: ",";\n"])),(function(n){return n.theme.colors.lightGrey})),E=S.Z.h3(d||(d=(0,U.Z)(["\n  width: 80px;\n  font-weight: 400;\n  font-size: 18px;\n  color: ",";\n"])),(function(n){return n.theme.colors.lightGreen})),H=S.Z.p(f||(f=(0,U.Z)(["\n  display: flex;\n  align-items: center;\n  font-size: 16px;\n  line-height: 1.16;\n"]))),M=t(184),N=function(n){var e=n.movie,t=e.title,r=e.name,i=e.vote_average,o=e.release_date,a=e.poster_path,s=e.genres,c=e.overview,u=o.slice(0,4),p=i.toFixed(1),l=null===s||void 0===s?void 0:s.map((function(n){return n.name})).join(", ");return(0,M.jsxs)(O,{children:[(0,M.jsxs)(I,{children:[(0,M.jsx)(P,{src:a?"https://image.tmdb.org/t/p/w500".concat(a):"https://www.ormistonhospital.co.nz/wp-content/uploads/2016/05/No-Image.jpg",alt:null!==t&&void 0!==t?t:r,loading:"lazy"}),(0,M.jsx)(T,{children:(0,M.jsx)(L.O,{rating:p})})]}),(0,M.jsxs)(A,{children:[(0,M.jsx)(D,{children:(0,M.jsxs)(V,{children:[t," (",u,")"]})}),(0,M.jsxs)(q,{children:[(0,M.jsx)(E,{children:"Overview:"}),(0,M.jsx)(H,{children:c})]}),(0,M.jsxs)(F,{children:[(0,M.jsx)(E,{children:"Genres:"}),(0,M.jsx)(H,{children:l})]})]})]})},Y=t(1087),B=t(8617),J=(0,S.Z)(B.siY)(x||(x=(0,U.Z)(["\n  margin-right: 10px;\n  color: ",";\n"])),(function(n){return n.theme.colors.white})),K=(0,S.Z)(Y.rU)(h||(h=(0,U.Z)(["\n  position: relative;\n  display: block;\n  margin-bottom: 20px;\n  padding: 10px 20px;\n  width: 140px;\n\n  font-size: 16px;\n  line-height: 1.16;\n  color: ",";\n  background: ",";\n  border-radius: 10px;\n\n  &::before {\n    content: '';\n    position: absolute;\n    inset: 1px;\n    background: ",";\n    border-radius: 9px;\n    transition: 0.5s;\n  }\n\n  &&:hover::before {\n    opacity: 0.7;\n  }\n\n  &::after {\n    content: '';\n    position: absolute;\n    inset: 0px;\n    background: ",";\n    border-radius: 9px;\n    transition: 0.5s;\n    opacity: 0;\n    filter: blur(20px);\n  }\n\n  &:hover::after {\n    opacity: 1;\n  }\n"])),(function(n){return n.theme.colors.white}),(function(n){return n.theme.gradient.bgLinGradientRevers}),(function(n){return n.theme.colors.primaryColor}),(function(n){return n.theme.gradient.bgLinGradientRevers})),Q=S.Z.span(g||(g=(0,U.Z)(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  z-index: 1;\n"]))),W=S.Z.div(v||(v=(0,U.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  margin-bottom: 30px;\n  width: 400px;\n"]))),X=S.Z.h3(m||(m=(0,U.Z)(["\n  font-weight: 400;\n  font-size: 18px;\n  text-align: center;\n  color: ",";\n"])),(function(n){return n.theme.colors.lightGreen})),$=S.Z.ul(b||(b=(0,U.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 40px;\n  width: 400px;\n"]))),nn=(0,S.Z)(Y.rU)(Z||(Z=(0,U.Z)(["\n  position: relative;\n  display: block;\n  padding: 10px 20px;\n  width: 110px;\n\n  font-size: 16px;\n  line-height: 1.16;\n  color: ",";\n  background: ",";\n  border-radius: 10px;\n\n  &::before {\n    content: '';\n    position: absolute;\n    inset: 1px;\n    background: ",";\n    border-radius: 9px;\n    transition: 0.5s;\n  }\n\n  &&:hover::before {\n    opacity: 0.7;\n  }\n\n  &::after {\n    content: '';\n    position: absolute;\n    inset: 0px;\n    background: ",";\n    border-radius: 9px;\n    transition: 0.5s;\n    opacity: 0;\n    filter: blur(20px);\n  }\n\n  &:hover::after {\n    opacity: 1;\n  }\n"])),(function(n){return n.theme.colors.white}),(function(n){return n.theme.gradient.bgLinGradientRevers}),(function(n){return n.theme.colors.primaryColor}),(function(n){return n.theme.gradient.bgLinGradientRevers})),en=(0,S.Z)(Y.rU)(w||(w=(0,U.Z)(["\n  position: relative;\n  display: block;\n  padding: 10px 20px;\n  width: 110px;\n\n  font-size: 16px;\n  line-height: 1.16;\n  color: ",";\n  background: ",";\n  border-radius: 10px;\n\n  &::before {\n    content: '';\n    position: absolute;\n    inset: 1px;\n    background: ",";\n    border-radius: 9px;\n    transition: 0.5s;\n  }\n\n  &&:hover::before {\n    opacity: 0.7;\n  }\n\n  &::after {\n    content: '';\n    position: absolute;\n    inset: 0px;\n    background: ",";\n    border-radius: 9px;\n    transition: 0.5s;\n    opacity: 0;\n    filter: blur(20px);\n  }\n\n  &:hover::after {\n    opacity: 1;\n  }\n"])),(function(n){return n.theme.colors.white}),(function(n){return n.theme.gradient.bgLinGradientRevers}),(function(n){return n.theme.colors.primaryColor}),(function(n){return n.theme.gradient.bgLinGradientRevers})),tn=t(1454),rn=function(){var n,e,t=(0,z.useState)(null),r=(0,j.Z)(t,2),i=r[0],o=r[1],a=(0,_.UO)().movieId,s=(0,_.TH)(),c=(0,z.useRef)(null!==(n=null===(e=s.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/home");if((0,z.useEffect)((function(){var n=function(){var n=(0,y.Z)(G().mark((function n(){var e;return G().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,C.TP)(a);case 3:e=n.sent,o(e),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),R.Am.error("Something went wrong. Please try again.");case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();n()}),[a]),i)return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(K,{to:c.current,type:"button",children:(0,M.jsxs)(Q,{children:[(0,M.jsx)(J,{}),"Go back"]})}),(0,M.jsx)(N,{movie:i}),(0,M.jsxs)(W,{children:[(0,M.jsx)(X,{children:"Additional Information"}),(0,M.jsxs)($,{children:[(0,M.jsx)("li",{children:(0,M.jsx)(nn,{to:"cast",state:s,children:(0,M.jsx)(Q,{children:"Cast"})})}),(0,M.jsx)("li",{children:(0,M.jsx)(en,{to:"reviews",state:s,children:(0,M.jsx)(Q,{children:"Reviews"})})})]})]}),(0,M.jsx)(z.Suspense,{fallback:(0,M.jsx)(tn.a,{}),children:(0,M.jsx)(_.j3,{})})]})}},4390:function(n,e,t){t.d(e,{Df:function(){return c},M1:function(){return l},TP:function(){return p},V0:function(){return u},tx:function(){return d}});var r=t(5861),i=t(4687),o=t.n(i),a=t(1243);a.Z.defaults.baseURL="https://api.themoviedb.org/3";var s=new URLSearchParams({api_key:"7625a85f6bb1f7d3f46152fac6672840",language:"en-US",include_adult:!1}),c=function(){var n=(0,r.Z)(o().mark((function n(){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("/trending/all/day?".concat(s));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("/search/movie?".concat(s,"&query=").concat(e));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("/movie/".concat(e,"?").concat(s));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("/movie/".concat(e,"/credits?").concat(s));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("/movie/".concat(e,"/reviews?").concat(s));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=547.08a9b871.chunk.js.map