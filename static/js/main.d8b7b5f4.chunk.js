(this["webpackJsonptyping-speed-test"]=this["webpackJsonptyping-speed-test"]||[]).push([[0],{12:function(e,t,s){},15:function(e,t,s){"use strict";s.r(t);var a,r=s(1),n=s(7),i=s.n(n),o=(s(12),s(5)),c=s(0),l=function(e){var t=e.quote,s=e.typed,a=e.isTyping;return Object(c.jsxs)("p",{className:"text-gray-400 p-2 select-none",children:[Object(c.jsx)("span",{className:"text-gray-700 select-text",children:t.slice(0,s.length).split("").map((function(e,t){return e===s[t]?e:Object(c.jsx)("span",{className:"text-red-500 border-b-2 border-red-500",children:e},t)}))}),Object(c.jsx)("span",{className:"text-blue-500 border-b-2 border-blue-500 ".concat(a?"animate-none":"animate-pulse"),children:t[s.length]}),t.slice(s.length+1)]})},u=s(3),d=function(){return Object(c.jsx)("svg",{xmlSpace:"preserve",viewBox:"0 0 100 100",y:0,x:0,xmlns:"http://www.w3.org/2000/svg",id:"Layer_1",version:"1.1",width:"125px",height:"125px",xmlnsXlink:"http://www.w3.org/1999/xlink",style:{width:"100%",height:"100%",animationPlayState:"paused"},children:Object(c.jsxs)("g",{className:"ldl-scale",style:{transformOrigin:"50% 50% 0px",transform:"rotate(0deg) scale(1)",animationPlayState:"paused"},children:[Object(c.jsxs)("linearGradient",{y2:77,x2:50,y1:20,x1:50,gradientUnits:"userSpaceOnUse",id:"SVGID_1_",style:{animationPlayState:"paused"},children:[Object(c.jsx)("stop",{stopColor:"#f4e6c8",offset:0,style:{stopColor:"rgb(244, 230, 200)",animationPlayState:"paused"}}),Object(c.jsx)("stop",{stopColor:"#f5e169",offset:1,style:{stopColor:"rgb(245, 225, 105)",animationPlayState:"paused"}})]}),Object(c.jsx)("circle",{fill:"url(#SVGID_1_)",r:40,cy:50,cx:50,style:{animationPlayState:"paused"}}),Object(c.jsx)("circle",{fill:"#4a3826",r:"7.5",cy:"38.409",cx:"33.5",style:{fill:"rgb(74, 56, 38)",animationPlayState:"paused"}}),Object(c.jsx)("circle",{fill:"#4a3826",r:"7.5",cy:"38.409",cx:"66.5",style:{fill:"rgb(74, 56, 38)",animationPlayState:"paused"}}),Object(c.jsx)("path",{d:"M33 65.091h34",strokeMiterlimit:10,strokeLinecap:"round",strokeWidth:5,stroke:"#4a3826",fill:"none",style:{stroke:"rgb(74, 56, 38)",animationPlayState:"paused"}})]})})},p=function(){return Object(c.jsxs)("div",{className:"flex flex-col items-center w-max m-auto ",children:[Object(c.jsx)(d,{}),Object(c.jsx)("h2",{className:"mb-2",children:"Loading..."})]})},y=function(){return Object(c.jsx)("svg",{xmlSpace:"preserve",viewBox:"0 0 100 100",y:0,x:0,xmlns:"http://www.w3.org/2000/svg",id:"Layer_1",version:"1.1",width:"125px",height:"125px",xmlnsXlink:"http://www.w3.org/1999/xlink",style:{width:"100%",height:"100%",animationPlayState:"paused"},children:Object(c.jsxs)("g",{className:"ldl-scale",style:{transformOrigin:"50% 50% 0px",transform:"rotate(0deg) scale(1)",animationPlayState:"paused"},children:[Object(c.jsxs)("linearGradient",{y2:77,x2:50,y1:20,x1:50,gradientUnits:"userSpaceOnUse",id:"SVGID_1_",style:{animationPlayState:"paused"},children:[Object(c.jsx)("stop",{stopColor:"#f4e6c8",offset:0,style:{stopColor:"rgb(244, 230, 200)",animationPlayState:"paused"}}),Object(c.jsx)("stop",{stopColor:"#f5e169",offset:1,style:{stopColor:"rgb(245, 225, 105)",animationPlayState:"paused"}})]}),Object(c.jsx)("circle",{fill:"url(#SVGID_1_)",r:40,cy:50,cx:50,style:{animationPlayState:"paused"}}),Object(c.jsx)("circle",{fill:"#4a3826",r:"7.5",cy:"38.409",cx:"33.5",style:{fill:"rgb(74, 56, 38)",animationPlayState:"paused"}}),Object(c.jsx)("circle",{fill:"#4a3826",r:"7.5",cy:"38.409",cx:"66.5",style:{fill:"rgb(74, 56, 38)",animationPlayState:"paused"}}),Object(c.jsx)("path",{d:"M33 65.091h34",strokeMiterlimit:10,strokeLinecap:"round",strokeWidth:5,stroke:"#4a3826",fill:"none",style:{stroke:"rgb(74, 56, 38)",animationPlayState:"paused"}})]})})},f=function(){return Object(c.jsxs)("div",{className:"flex flex-col items-center w-max m-auto ",children:[Object(c.jsx)(y,{}),Object(c.jsx)("h2",{className:"mb-2",children:"Loading..."})]})},m=s(2),b=s.n(m),x=s(4),j=function(){var e=Object(x.a)(b.a.mark((function e(){var t,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://quote-garden.herokuapp.com/api/v3/quotes/random");case 2:if((t=e.sent).ok){e.next=5;break}throw new Error;case 5:return e.next=7,t.json();case 7:return s=e.sent,e.abrupt("return",s.data[0].quoteText);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();!function(e){e[e.start=0]="start",e[e.success=1]="success",e[e.fail=2]="fail",e[e.finish=3]="finish",e[e.type=4]="type",e[e.commit=5]="commit",e[e.tick=6]="tick"}(a||(a={}));var h,g=a;!function(e){e[e.loading=0]="loading",e[e.error=1]="error",e[e.ready=2]="ready",e[e.finished=3]="finished"}(h||(h={}));var O={status:h.loading,quote:null,typed:null,errors:0,time:0},v=function(){var e=Object(x.a)(b.a.mark((function e(t){var s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:g.start}),e.prev=1,e.next=4,j();case 4:s=e.sent,t({type:g.success,payload:s}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t({type:g.fail});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),w=function(e,t){return t.type===g.start?{status:h.loading,quote:null,typed:null,errors:0,time:0}:t.type===g.fail?{status:h.error,quote:null,typed:null,errors:0,time:0}:t.type===g.success?{status:h.ready,quote:t.payload,typed:"",errors:0,time:0}:t.type===g.finish?{status:h.finished,quote:e.quote,typed:e.typed,errors:e.errors,time:e.time}:t.type===g.type?{status:h.ready,quote:e.quote,typed:t.payload,errors:e.errors,time:e.time}:t.type===g.commit?{status:h.ready,quote:e.quote,typed:e.typed,errors:e.errors+1,time:e.time}:t.type===g.tick?{status:h.ready,quote:e.quote,typed:e.typed,errors:e.errors,time:e.time+.1}:e},k=function(){return Object(r.useReducer)(w,O)};var S=function(){var e,t=k(),s=Object(o.a)(t,2),a=s[0],n=s[1],i=Object(r.useState)(null),d=Object(o.a)(i,2),y=d[0],m=d[1],b=Object(r.useRef)(null),x=Object(r.useRef)(null),j=Object(r.useState)(!1),O=Object(o.a)(j,2),w=O[0],S=O[1];if(a.status===h.ready||a.status===h.finished){var q=Math.round(a.typed.length/5/(a.time/60)),P=Math.round(100-a.errors/(a.typed.length-a.errors||1)*100)||0;e=[{icon:u.e,value:isFinite(q)&&q||0,mark:"WPM"},{icon:u.c,value:P,mark:"%"},{icon:u.a,value:Math.round(a.time),mark:"Sec"},{icon:u.b,value:a.errors,mark:"Char"}]}return Object(r.useEffect)((function(){v(n)}),[]),Object(r.useEffect)((function(){a.typed&&!y&&m(setInterval((function(){return n({type:g.tick})}),100))}),[a.typed]),Object(r.useEffect)((function(){a.status===h.finished&&y&&(clearInterval(y),m(null))}),[a.status]),Object(r.useEffect)((function(){var e=b.current,t=function(t){13===t.keyCode&&e.click()};return document.addEventListener("keydown",t),function(){document.removeEventListener("keydown",t)}}),[]),Object(r.useEffect)((function(){var e=x.current;a.quote&&e.focus()}),[a.quote]),Object(r.useEffect)((function(){var e=b.current;a.status===h.finished&&e.focus()}),[a.status]),Object(r.useEffect)((function(){if(null!==a.typed){S(!0);var e=setTimeout((function(){return S(!1)}),500);return function(){return clearTimeout(e)}}}),[a.typed]),Object(c.jsxs)("div",{className:"w-full max-w-screen-sm space-y-4 p-4 mx-auto mt-6",children:[Object(c.jsxs)("main",{className:"w-full rounded-md rounded-b-none border-b border-blue-500 bg-blue-50",children:[(a.status===h.ready||a.status===h.finished)&&Object(c.jsx)(l,{quote:a.quote,typed:a.typed,isTyping:w}),a.status===h.loading&&Object(c.jsx)(p,{}),a.status===h.error&&Object(c.jsx)(f,{})]}),(a.status===h.ready||a.status===h.finished)&&Object(c.jsx)("div",{className:"flex space-x-4 w-max mx-auto",children:e.map((function(e,t){var s=e.icon,a=e.value,r=e.mark;return Object(c.jsxs)("div",{className:"flex space-x-1 items-center text-gray-700",children:[Object(c.jsx)(s,{size:30}),Object(c.jsxs)("span",{className:"text-md font-semibold",children:[a," ",r]})]},t)}))}),Object(c.jsxs)("button",{className:"btn w-max mx-auto",disabled:a.status===h.loading||Boolean(a.status===h.ready&&a.typed),onClick:function(){v(n)},ref:b,children:[Object(c.jsx)(u.d,{size:24}),Object(c.jsx)("span",{children:"Refresh"})]}),Object(c.jsx)("textarea",{id:"input",className:"w-full rounded-md rounded-t-none border-t border-gray-400 bg-blue-50 resize-none h-40 text-gray-700 p-2 focus:outline-none hover:border-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:border-gray-500 disabled:cursor-not-allowed",disabled:a.status!==h.ready,value:a.status===h.ready?a.typed:"",onChange:function(e){if(a.status===h.ready){var t=e.target.value;t.length>a.typed.length&&t[t.length-1]!==a.quote[t.length-1]&&n({type:g.commit}),n({type:g.type,payload:t}),t.length===a.quote.length&&n({type:g.finish})}},ref:x})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(c.jsx)(S,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.d8b7b5f4.chunk.js.map