(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(e,a,t){},134:function(e,a){},137:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(8),i=t.n(r),o=(t(101),t(30)),s=t(22),l=t(172),u=t(174);function m(e){var a=e.topics,t=e.changeActiveTopic;return c.a.createElement("div",{className:"topics-container"},c.a.createElement(l.a,null,a.map(function(e){return c.a.createElement(u.a,{onClick:function(a){return t(e)},key:e,button:!0},"# ",e)})))}var p=t(185),E=t(176);function d(e){var a,t=e.activeTopic,r=Object(s.c)(function(e){return e.chat});return console.log(t),Object(n.useEffect)(function(){a.scrollIntoView()}),c.a.createElement("div",{className:"messages-container"},r[t].map(function(e,a){return c.a.createElement("div",{className:"message",key:a},c.a.createElement(p.a,{avatar:c.a.createElement(E.a,null,"person"),label:e.from+" "+e.msg}))}),c.a.createElement("div",{ref:function(e){return a=e}}))}var f=t(182),v=function(e){return{type:"SEND_MESSAGE",payload:e}};function g(e){var a=Object(s.b)(),t=e.chatMessage,n=e.changeChatMessage,r=e.activeTopic,i=e.user;function o(e){"Enter"===e.key&&(a(v({topic:r,from:i,msg:t})),n(""))}return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"send-message-border"}),c.a.createElement("div",{class:"send-message-container"},c.a.createElement(f.a,{autoComplete:"off",color:"blue",id:"filled-name",className:"message-input",label:"Message # ".concat(r),value:t,onChange:function(e){return n(e.target.value)},onKeyPress:function(e){return o(e)}})))}var b=t(177),h=t(178),O=t(180),y=t(179),j=t(83),N=t.n(j),T=t(184);function S(e){var a=c.a.useState(!1),t=Object(o.a)(a,2),n=t[0],r=t[1],i=e.topics,s=e.activeTopic;return c.a.createElement(b.a,{position:"static"},c.a.createElement(h.a,{className:"navbar"},c.a.createElement(y.a,{edge:"start",color:"inherit","aria-label":"menu",className:"menu-burger-button"},c.a.createElement(N.a,{onClick:function(){return r(!0)}})),c.a.createElement(T.a,{anchor:"left",open:n,onClose:function(){return r(!1)}},c.a.createElement(m,{topics:i,activeTopic:s})),c.a.createElement(O.a,{variant:"h6"},s)))}var _="eric"+Math.ceil(100*Math.random());function k(){var e=Object(s.c)(function(e){return e.chat}),a=Object.keys(e),t=c.a.useState(""),n=Object(o.a)(t,2),r=n[0],i=n[1],l=c.a.useState(a[0]),u=Object(o.a)(l,2),p=u[0],E=u[1];return c.a.createElement("div",null,c.a.createElement(S,{topics:a,activeTopic:p}),c.a.createElement("div",{className:"grid-container"},c.a.createElement("div",{className:"topics-grid"},c.a.createElement(m,{topics:a,changeActiveTopic:E})),c.a.createElement("div",{className:"messages-grid"},c.a.createElement(d,{activeTopic:p})),c.a.createElement("div",{className:"send-messages-grid"},c.a.createElement(g,{chatMessage:r,changeChatMessage:i,user:_,activeTopic:p}))))}var w=t(87),C=t(181),M=Object(w.a)({palette:{type:"dark",primary:{main:"#7289da"}}});var A,D=function(){return c.a.createElement(C.a,{theme:M},c.a.createElement(k,null))},P=t(23),I=t(84),U=t(85),x=t.n(U),G=t(47),H=t(48),J=t(86),V={general:[],react:[],sports:[],business:[],politics:[]},X=Object(P.c)({chat:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"UPDATE_CHAT":return Object(J.a)({},e,Object(G.a)({},a.payload.topic,[].concat(Object(H.a)(e[a.payload.topic]),[{from:a.payload.from,msg:a.payload.msg}])));default:return e}}}),B=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||P.d,F=Object(P.e)(X,B(Object(P.a)(I.a,(A="https://simple-chat-apix.herokuapp.com/",function(e){var a=x()(A);return a.on("simple-chat",function(a){e.dispatch({type:"UPDATE_CHAT",payload:a})}),function(e){return function(t){if("SEND_MESSAGE"!==t.type)return e(t);a.emit("simple-chat",t.payload)}}}))));i.a.render(c.a.createElement(s.a,{store:F},c.a.createElement(D,null)),document.getElementById("root"))},96:function(e,a,t){e.exports=t(137)}},[[96,1,2]]]);
//# sourceMappingURL=main.bfc5a8ed.chunk.js.map