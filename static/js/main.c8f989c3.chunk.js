(this["webpackJsonptyping-speed-test"]=this["webpackJsonptyping-speed-test"]||[]).push([[0],{73:function(e,t,r){},76:function(e,t,r){"use strict";r.r(t);var s,a=r(1),n=r(67),i=r.n(n),o=(r(73),r(45)),c=r(81),l=r(80),u=r(79),d=r(2),p={visible:{opacity:1},hidden:{opacity:0}},y=function(e){var t=e.quote,r=e.typed,s=e.isTyping,a=Object(c.a)("visible","hidden"),n=Object(o.a)(a,2),i=n[0],y=n[1];return Object(d.jsx)(l.a,{children:Object(d.jsxs)("p",{className:"text-gray-400 p-2 select-none",children:[Object(d.jsx)("span",{className:"text-gray-700 select-text",children:t.slice(0,r.length).split("").map((function(e,t){return e===r[t]?e:Object(d.jsx)("span",{className:"text-red-500 border-b-2 border-red-500",children:e},t)}))}),Object(d.jsxs)("span",{className:"relative",children:[t[r.length],Object(d.jsx)(u.a.div,{layoutId:"caret",variants:p,initial:"hidden",transition:{opacity:{type:"spring"},default:{type:"tween",duration:.15,ease:"easeOut"}},animate:s?"visible":i,onAnimationComplete:function(){return y()},className:"absolute left-0 top-0 h-full w-0.5 bg-blue-400"})]}),t.slice(r.length+1)]})})},f=r(46),m=function(){return Object(d.jsx)("svg",{xmlSpace:"preserve",viewBox:"0 0 100 100",y:0,x:0,xmlns:"http://www.w3.org/2000/svg",id:"Layer_1",version:"1.1",width:"125px",height:"125px",xmlnsXlink:"http://www.w3.org/1999/xlink",style:{width:"100%",height:"100%",animationPlayState:"paused"},children:Object(d.jsxs)("g",{className:"ldl-scale",style:{transformOrigin:"50% 50% 0px",transform:"rotate(0deg) scale(1)",animationPlayState:"paused"},children:[Object(d.jsxs)("linearGradient",{y2:77,x2:50,y1:20,x1:50,gradientUnits:"userSpaceOnUse",id:"SVGID_1_",style:{animationPlayState:"paused"},children:[Object(d.jsx)("stop",{stopColor:"#f4e6c8",offset:0,style:{stopColor:"rgb(244, 230, 200)",animationPlayState:"paused"}}),Object(d.jsx)("stop",{stopColor:"#f5e169",offset:1,style:{stopColor:"rgb(245, 225, 105)",animationPlayState:"paused"}})]}),Object(d.jsx)("circle",{fill:"url(#SVGID_1_)",r:40,cy:50,cx:50,style:{animationPlayState:"paused"}}),Object(d.jsx)("circle",{fill:"#4a3826",r:"7.5",cy:"38.409",cx:"33.5",style:{fill:"rgb(74, 56, 38)",animationPlayState:"paused"}}),Object(d.jsx)("circle",{fill:"#4a3826",r:"7.5",cy:"38.409",cx:"66.5",style:{fill:"rgb(74, 56, 38)",animationPlayState:"paused"}}),Object(d.jsx)("path",{d:"M33 65.091h34",strokeMiterlimit:10,strokeLinecap:"round",strokeWidth:5,stroke:"#4a3826",fill:"none",style:{stroke:"rgb(74, 56, 38)",animationPlayState:"paused"}})]})})},b=function(){return Object(d.jsxs)("div",{className:"flex flex-col items-center w-max m-auto ",children:[Object(d.jsx)(m,{}),Object(d.jsx)("h2",{className:"mb-2",children:"Loading..."})]})},j=function(){return Object(d.jsx)("svg",{xmlSpace:"preserve",viewBox:"0 0 100 100",y:0,x:0,xmlns:"http://www.w3.org/2000/svg",id:"Layer_1",version:"1.1",width:"125px",height:"125px",xmlnsXlink:"http://www.w3.org/1999/xlink",style:{width:"100%",height:"100%",animationPlayState:"paused"},children:Object(d.jsxs)("g",{className:"ldl-scale",style:{transformOrigin:"50% 50% 0px",transform:"rotate(0deg) scale(1)",animationPlayState:"paused"},children:[Object(d.jsxs)("linearGradient",{y2:77,x2:50,y1:20,x1:50,gradientUnits:"userSpaceOnUse",id:"SVGID_1_",style:{animationPlayState:"paused"},children:[Object(d.jsx)("stop",{stopColor:"#f4e6c8",offset:0,style:{stopColor:"rgb(244, 230, 200)",animationPlayState:"paused"}}),Object(d.jsx)("stop",{stopColor:"#f5e169",offset:1,style:{stopColor:"rgb(245, 225, 105)",animationPlayState:"paused"}})]}),Object(d.jsx)("circle",{fill:"url(#SVGID_1_)",r:40,cy:50,cx:50,style:{animationPlayState:"paused"}}),Object(d.jsx)("circle",{fill:"#4a3826",r:"7.5",cy:"38.409",cx:"33.5",style:{fill:"rgb(74, 56, 38)",animationPlayState:"paused"}}),Object(d.jsx)("circle",{fill:"#4a3826",r:"7.5",cy:"38.409",cx:"66.5",style:{fill:"rgb(74, 56, 38)",animationPlayState:"paused"}}),Object(d.jsx)("path",{d:"M33 65.091h34",strokeMiterlimit:10,strokeLinecap:"round",strokeWidth:5,stroke:"#4a3826",fill:"none",style:{stroke:"rgb(74, 56, 38)",animationPlayState:"paused"}})]})})},x=function(){return Object(d.jsxs)("div",{className:"flex flex-col items-center w-max m-auto ",children:[Object(d.jsx)(j,{}),Object(d.jsx)("h2",{className:"mb-2",children:"Loading..."})]})},h=r(44),g=r.n(h),O=r(57),v=function(){var e=Object(O.a)(g.a.mark((function e(){var t,r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://quote-garden.herokuapp.com/api/v3/quotes/random");case 2:if((t=e.sent).ok){e.next=5;break}throw new Error;case 5:return e.next=7,t.json();case 7:return r=e.sent,e.abrupt("return",r.data[0].quoteText);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();!function(e){e[e.start=0]="start",e[e.success=1]="success",e[e.fail=2]="fail",e[e.finish=3]="finish",e[e.type=4]="type",e[e.commit=5]="commit",e[e.tick=6]="tick"}(s||(s={}));var w,k=s;!function(e){e[e.loading=0]="loading",e[e.error=1]="error",e[e.ready=2]="ready",e[e.finished=3]="finished"}(w||(w={}));var S={status:w.loading,quote:null,typed:null,errors:0,time:0,curErrors:0},E=function(){var e=Object(O.a)(g.a.mark((function e(t){var r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:k.start}),e.prev=1,e.next=4,v();case 4:r=e.sent,t({type:k.success,payload:r}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t({type:k.fail});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),q=function(e,t){return t.type===k.start?{status:w.loading,quote:null,typed:null,errors:0,time:0,curErrors:0}:t.type===k.fail?{status:w.error,quote:null,typed:null,errors:0,time:0,curErrors:0}:t.type===k.success?{status:w.ready,quote:t.payload,typed:"",errors:0,time:0,curErrors:0}:t.type===k.finish?{status:w.finished,quote:e.quote,typed:e.typed,errors:e.errors,time:e.time,curErrors:e.curErrors}:t.type===k.type?{status:w.ready,quote:e.quote,typed:t.payload.typed,errors:e.errors,time:e.time,curErrors:t.payload.curErrors}:t.type===k.commit?{status:w.ready,quote:e.quote,typed:e.typed,errors:e.errors+1,time:e.time,curErrors:e.curErrors}:t.type===k.tick?{status:w.ready,quote:e.quote,typed:e.typed,errors:e.errors,time:e.time+.1,curErrors:e.curErrors}:e},P=function(){return Object(a.useReducer)(q,S)};var N=function(){var e,t=P(),r=Object(o.a)(t,2),s=r[0],n=r[1],i=Object(a.useState)(null),c=Object(o.a)(i,2),l=c[0],u=c[1],p=Object(a.useRef)(null),m=Object(a.useRef)(null),j=Object(a.useState)(!1),h=Object(o.a)(j,2),g=h[0],O=h[1];if(s.status===w.ready||s.status===w.finished){var v=Math.round((s.typed.trim().length-s.curErrors)/5/(s.time/60)),S=Math.round(100-s.errors/(s.typed.trim().length-s.errors||1)*100)||0;e=[{icon:f.e,value:isFinite(v)&&v||0,mark:"WPM"},{icon:f.c,value:S,mark:"%"},{icon:f.a,value:Math.round(s.time),mark:"Sec"},{icon:f.b,value:s.errors,mark:"Char"}]}return Object(a.useEffect)((function(){E(n)}),[]),Object(a.useEffect)((function(){s.typed&&!l&&u(setInterval((function(){return n({type:k.tick})}),100))}),[s.typed]),Object(a.useEffect)((function(){s.status===w.finished&&l&&(clearInterval(l),u(null))}),[s.status]),Object(a.useEffect)((function(){var e=p.current,t=function(t){13===t.keyCode&&e.click()};return document.addEventListener("keydown",t),function(){document.removeEventListener("keydown",t)}}),[]),Object(a.useEffect)((function(){var e=m.current;s.quote&&e.focus()}),[s.quote]),Object(a.useEffect)((function(){var e=p.current;s.status===w.finished&&e.focus()}),[s.status]),Object(a.useEffect)((function(){if(null!==s.typed){O(!0);var e=setTimeout((function(){return O(!1)}),500);return function(){return clearTimeout(e)}}}),[s.typed]),Object(d.jsxs)("div",{className:"w-full max-w-screen-sm space-y-4 p-4 mx-auto mt-6",children:[Object(d.jsxs)("main",{className:"w-full rounded-md rounded-b-none border-b border-blue-500 bg-blue-50",children:[(s.status===w.ready||s.status===w.finished)&&Object(d.jsx)(y,{quote:s.quote,typed:s.typed,isTyping:g}),s.status===w.loading&&Object(d.jsx)(b,{}),s.status===w.error&&Object(d.jsx)(x,{})]}),(s.status===w.ready||s.status===w.finished)&&Object(d.jsx)("div",{className:"flex space-x-4 w-max mx-auto",children:e.map((function(e,t){var r=e.icon,s=e.value,a=e.mark;return Object(d.jsxs)("div",{className:"flex space-x-1 items-center text-gray-700",children:[Object(d.jsx)(r,{size:30}),Object(d.jsxs)("span",{className:"text-md font-semibold",children:[s," ",a]})]},t)}))}),Object(d.jsxs)("button",{className:"btn w-max mx-auto",disabled:s.status===w.loading||Boolean(s.status===w.ready&&s.typed),onClick:function(){E(n)},ref:p,children:[Object(d.jsx)(f.d,{size:24}),Object(d.jsx)("span",{children:"Refresh"})]}),Object(d.jsx)("textarea",{id:"input",className:"w-full rounded-md rounded-t-none border-t border-gray-400 bg-blue-50 resize-none h-40 text-gray-700 p-2 focus:outline-none hover:border-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:border-gray-500 disabled:cursor-not-allowed",disabled:s.status!==w.ready,value:s.status===w.ready||s.status===w.finished?s.typed:"",onChange:function(e){if(s.status===w.ready){var t=e.target.value;t.length>s.typed.length&&t[t.length-1]!==s.quote[t.length-1]&&n({type:k.commit}),n({type:k.type,payload:{typed:t,curErrors:s.typed.split("").reduce((function(e,t,r){return t===s.quote[r]?e:e+1}),0)}}),t.length===s.quote.length&&n({type:k.finish})}},ref:m})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(d.jsx)(N,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[76,1,2]]]);
//# sourceMappingURL=main.c8f989c3.chunk.js.map