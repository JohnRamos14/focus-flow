(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(e,t,n){},104:function(e,t,n){},106:function(e,t,n){},108:function(e,t,n){},110:function(e,t,n){},112:function(e,t,n){},114:function(e,t,n){},116:function(e,t,n){},118:function(e,t,n){},120:function(e,t,n){},122:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(60),c=n.n(o),i=n(38),l=(n(58),n(1)),u=n(128),s=n(125),m=n(130),f=(n(71),n(44)),d=n.n(f);var p=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{id:"main-nav",bg:"light",expand:"lg",variant:"dark"},r.a.createElement(s.a,{fluid:!0},r.a.createElement(u.a.Brand,{href:"/focus-flow",onClick:function(){localStorage.clear()}},r.a.createElement("img",{src:d.a,width:"70",alt:"logo"})),r.a.createElement(u.a.Toggle,{"aria-controls":"navbarScroll",bg:"light"}),r.a.createElement(u.a.Collapse,{id:"navbarScroll"},r.a.createElement(m.a,{id:"nav-align",className:"me-auto my-2 my-lg-0",style:{maxHeight:"100px"},navbarScroll:!0},r.a.createElement("h4",null,r.a.createElement(m.a.Link,{href:"/focus-flow/tasks"},"Tasks")),r.a.createElement("h4",null,r.a.createElement(m.a.Link,{href:"/focus-flow/multivideos"},"Videos")),r.a.createElement("h4",null,r.a.createElement(m.a.Link,{href:"/focus-flow/musicSelection"},"Music")))))))},h=n(5),v=n(129),b="AIzaSyCsSzCnKI0IeLMs8KchtIgx0F-yCfvwNuc",E="https://www.googleapis.com/youtube/v3/",y=n(83),g=n(15),w=n(126),j=(n(59),n(32)),O=Object(a.memo)(function(){var e=Object(a.useState)([]),t=Object(h.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(function(){var e=localStorage.getItem("vid");return JSON.parse(e)||[]}),i=Object(h.a)(c,2),l=i[0],u=i[1];Object(a.useEffect)(function(){localStorage.setItem("vid",JSON.stringify(l)),console.log(localStorage.getItem("vid"))},[l]),Object(a.useEffect)(function(){(function(){var e={method:"GET",url:"".concat(E,"playlistItems?part=snippet&maxResults=6&playlistId=").concat("PLk_a-emwr43aDj5S_mPvfNt_LqQkM2vP6","&key=").concat(b),headers:{"Content-Type":"application/json"},crossdomain:!0};return Object(v.a)(e)})().then(s).catch(m)},[]);var s=function(e){o(e.data.items)},m=function(e){console.error({error:e})},f=n.map(function(e,t){return r.a.createElement(y.a,{id:"player2",lg:4,key:t},r.a.createElement(j.a,{id:" youtube-player2",videoId:e.snippet.resourceId.videoId,opts:{height:"360",width:"630",playerVars:{autoplay:0,controls:1,showinfo:0}}}),r.a.createElement("div",{className:"videoTitle"},e.snippet.title),r.a.createElement(g.a,{id:"select-btn",href:"/musicSelection",type:"button",onClick:function(){return t=e.snippet.resourceId.videoId,void u([t]);var t}},"Select"))});return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"header-container"},r.a.createElement("h1",{className:"header-section"},"Video Selection "),r.a.createElement("div",{id:"btn-container"},r.a.createElement(g.a,{id:"skip-btn",href:"/musicSelection"},"Skip to Music"))),r.a.createElement(w.a,{className:"row2"},f))}),C=(n(101),n(104),n(24)),k=n(54);var S=function(e){return r.a.createElement(k.a,null,r.a.createElement("div",{className:"counter-container"},r.a.createElement("h3",{id:e.labelId},e.counterLabel),r.a.createElement("div",{className:"control-panel"},!e.timerIsRunning&&r.a.createElement("button",{id:e.decrementBtnId,onClick:function(){return e.decreaseCounter()},"aria-label":"decrease button"},r.a.createElement(C.a,null)),r.a.createElement("p",{id:e.counterId,className:e.timerIsRunning?"bigger-when-is-running":"normal-counter"},e.counter),!e.timerIsRunning&&r.a.createElement("button",{id:e.incrementBtnId,onClick:function(){return e.increaseCounter()},"aria-label":"increase button"},r.a.createElement(C.b,null)))))},L=S,I=n(86),x=n.n(I),N=n(87);n(106);var T=Object(a.forwardRef)(function(e,t){var n=Object(a.useState)(1),o=Object(h.a)(n,2),c=o[0],i=o[1],l=Object(a.useState)("Session"),u=Object(h.a)(l,2),s=u[0],m=u[1],f=function(e){var t=new Date;return t.setSeconds(60*e+t.getSeconds()),t},d=document.getElementById("beep"),p=Object(N.useTimer)({expiryTimestamp:f(e.sessionTime),onExpire:function(){e.sessions===c&&"Break"===s?(d.play(),e.passRunning(!y)):"Break"===s?(d.play(),m("Session"),i(c+1),setTimeout(function(){return j(f(e.sessionTime))},1e3)):"Session"===s&&(d.play(),m("Break"),setTimeout(function(){return j(f(e.breakTime))},1e3))},autoStart:!1}),v=p.seconds,b=p.minutes,E=p.hours,y=p.isRunning,g=p.resume,w=p.pause,j=p.restart;Object(a.useImperativeHandle)(t,function(){return{restartTimer:function(){j(f(e.sessionTime),!1),i(1),m("Session")}}},[j,e.sessionTime]);var O=function(e){return e<10?"0"+e.toString():e};return r.a.createElement(k.a,{id:"timer-card"},r.a.createElement("audio",{id:"beep",src:x.a}),r.a.createElement("div",{id:"time-left",className:0===b&&0===E?"is-finishing":"is-running"},1===E?"60":O(b),":",O(v)),r.a.createElement("div",{id:"control-panel"},r.a.createElement("button",{id:"start_stop",onClick:function(){y?(w(),e.passRunning(!y)):(g(),e.passRunning(!y))},"aria-label":"play-pause button"},y?r.a.createElement(C.c,null):r.a.createElement(C.d,null)),r.a.createElement("button",{id:"reset",onClick:function(){j(f(e.sessionTime),!1),m("Session"),e.setSessionLength(25),document.getElementById("beep").pause(),document.getElementById("beep").currentTime=0},"aria-label":"restart button"},r.a.createElement(C.e,null))))}),V=T,R=(n(108),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(k.a,{id:"about-card"},r.a.createElement(k.a.Header,{id:"about-header"},"What is Focus Flow? "),r.a.createElement(k.a.Body,null,r.a.createElement("p",{id:"about-p"},"Focus Flow uses the Pomodoro Technique, a time management technique used to break work into manageable intervals, alongside Lofi Music to help you relax and focus while you work! ",r.a.createElement("br",null),"You can set your timer directly here on the Home Page and use the provided Lofi Music from YouTube, or you can click below for more options."),r.a.createElement("div",{id:"about-btn-div"},r.a.createElement(g.a,{href:"/multivideos",id:"custom-btn"},"Click Here to Customize")))))}),M=n(127),B=Object(a.memo)(function(){var e=Object(a.useState)([]),t=Object(h.a)(e,2),n=t[0],o=t[1];Object(a.useEffect)(function(){console.log("useEffect"),function(){var e={method:"GET",url:"".concat(E,"videos?part=snippet%2CcontentDetails%2Cstatistics&id=").concat("8nXqcugV2Y4","&key=").concat(b),headers:{"Content-Type":"application/json"},crossdomain:!0};return Object(v.a)(e)}().then(c).catch(i)},[]);var c=function(e){o(e.data.items)},i=function(e){console.error({error:e})},l=n.map(function(e){return r.a.createElement(j.a,{id:" youtube-player1",videoId:e.id,opts:{height:"360",width:"680",playerVars:{autoplay:0,controls:1,showinfo:0}}})});return r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,null,r.a.createElement("div",{id:"player1"},l)))});var F,P=function(){var e=Object(a.useState)(25),t=Object(h.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(!1),i=Object(h.a)(c,2),l=i[0],u=i[1],s=Object(a.useRef)();return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(R,null)),r.a.createElement("br",null),r.a.createElement(M.a,{id:"home-card-group"},r.a.createElement(k.a,null,r.a.createElement(B,null)),r.a.createElement(k.a,null,r.a.createElement(L,{labelId:"session-label",counterId:"session-length",counterLabel:"Set Minutes",counter:n,increaseCounter:function(){n<60&&(o(n+1),setTimeout(function(){return s.current.restartTimer()},5))},decreaseCounter:function(){n>1&&(o(n-1),setTimeout(function(){return s.current.restartTimer()},5))},incrementBtnId:"session-increment",decrementBtnId:"session-decrement",timerIsRunning:l}),r.a.createElement(V,{sessionTime:n,passRunning:u,setSessionLength:o,ref:s}))))},_=(n(110),n(112),function(){return r.a.createElement("div",null,r.a.createElement(u.a,{id:"footer-container",bg:"dark",variant:"dark"},r.a.createElement(s.a,{fluid:!0},r.a.createElement(u.a.Brand,{href:"/"},r.a.createElement("img",{src:d.a,width:"70",alt:"logo"})),r.a.createElement(m.a,{id:"nav-align",className:"me-auto my-2 my-lg-0"},r.a.createElement(m.a.Link,{href:"/tasks"},"Tasks"),r.a.createElement(m.a.Link,{href:"/multivideos"},"Videos"),r.a.createElement(m.a.Link,{href:"/music"},"Music")))))}),G=(n(114),function(){var e=Object(a.useState)(null),t=Object(h.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(null),i=Object(h.a)(c,2),u=i[0],s=i[1],m=Object(a.useState)(null),f=Object(h.a)(m,2),d=f[0],p=f[1],y=Object(a.useState)(null),w=Object(h.a)(y,2),j=w[0],O=w[1],C=Object(l.l)();Object(a.useEffect)(function(){(function(){var e={method:"GET",url:"".concat(E,"playlistItems?part=snippet&maxResults=6&playlistId=").concat("PL06diOotXAJJHjvUm7FNNG5a7XUA2_C27","&key=").concat(b),headers:{"Content-Type":"application/json"},crossdomain:!0};return Object(v.a)(e)})().then(k).catch(S),function(){var e={method:"GET",url:"".concat(E,"playlistItems?part=snippet&maxResults=6&playlistId=").concat("OLAK5uy_k0rMyjPYg95yc9P0sbkMLRt982Yl4MlQ8","&key=").concat(b),headers:{"Content-Type":"application/json"},crossdomain:!0};return Object(v.a)(e)}().then(L).catch(I),function(){var e={method:"GET",url:"".concat(E,"playlistItems?part=snippet&maxResults=6&playlistId=").concat("PLCnZsxXddm5W5wSYpaoML1rSXuwtiHAXy","&key=").concat(b),headers:{"Content-Type":"application/json"},crossdomain:!0};return Object(v.a)(e)}().then(x).catch(N),function(){var e={method:"GET",url:"".concat(E,"playlistItems?part=snippet&maxResults=6&playlistId=").concat("PL6fhs6TSspZv0F0YgsG-p7Mn189CU2XKS","&key=").concat(b),headers:{"Content-Type":"application/json"},crossdomain:!0};return Object(v.a)(e)}().then(T).catch(V)},[]);var k=function(e){o(e.data.items)},S=function(e){console.error({error:e})},L=function(e){O(e.data.items)},I=function(e){console.error({error:e})},x=function(e){s(e.data.items)},N=function(e){console.error({error:e})},T=function(e){p(e.data.items)},V=function(e){console.error({error:e})},R=function(e){var t;switch(e){case"jazz":t=n;break;case"coffee":t=j;break;case"rock":t=u;break;case"hiphop":t=d;break;default:t=null}C("/focus-flow/musicSelection/now-playing",{state:{playlistId:t}})};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("h1",null,"Music Selection"),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"genre-box"},r.a.createElement("h2",null,"Coffee Shop "),r.a.createElement("ul",{className:"track-list"}),r.a.createElement(g.a,{onClick:function(){return R("coffee")},className:"subbutton"},"Select")),r.a.createElement("div",{className:"genre-box"},r.a.createElement("h2",null,"Lofi Jazz"),r.a.createElement("ul",{className:"track-list"}),r.a.createElement(g.a,{onClick:function(){return R("jazz")},className:"subbutton"},"Select")),r.a.createElement("div",{className:"genre-box"},r.a.createElement("h2",null,"Rock"),r.a.createElement("ul",{className:"track-list"}),r.a.createElement(g.a,{onClick:function(){return R("rock")},className:"subbutton"},"Select")),r.a.createElement("div",{className:"genre-box"},r.a.createElement("h2",null,"Hip Hop"),r.a.createElement("ul",{className:"track-list"}),r.a.createElement(g.a,{onClick:function(){return R("hiphop")},className:"subbutton"},"Select")))))}),Z=n(16);n(116);function z(){return(z=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var A,J=function(e){return r.a.createElement("svg",z({width:30,height:20,viewBox:"0 0 14 16",fill:"none"},e),F||(F=r.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.907 7.99997L1.75 2.10772V13.8922L11.907 7.99997ZM13.293 6.78197C13.5076 6.90481 13.6858 7.08214 13.8098 7.29602C13.9339 7.5099 13.9992 7.75275 13.9992 7.99997C13.9992 8.2472 13.9339 8.49004 13.8098 8.70392C13.6858 8.9178 13.5076 9.09514 13.293 9.21797L2.15775 15.679C1.24775 16.2075 0 15.6037 0 14.461V1.53897C0 0.396223 1.24775 -0.207528 2.15775 0.320972L13.293 6.78197Z",fill:"black"})))};n.p;function H(){return(H=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var Y,X=function(e){return r.a.createElement("svg",H({width:10,height:16,viewBox:"0 0 10 16",fill:"none"},e),A||(A=r.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.5 0.125C1.73206 0.125 1.95462 0.217187 2.11872 0.381282C2.28281 0.545376 2.375 0.767936 2.375 1V15C2.375 15.2321 2.28281 15.4546 2.11872 15.6187C1.95462 15.7828 1.73206 15.875 1.5 15.875C1.26794 15.875 1.04538 15.7828 0.881282 15.6187C0.717187 15.4546 0.625 15.2321 0.625 15V1C0.625 0.767936 0.717187 0.545376 0.881282 0.381282C1.04538 0.217187 1.26794 0.125 1.5 0.125V0.125ZM8.5 0.125C8.73206 0.125 8.95462 0.217187 9.11872 0.381282C9.28281 0.545376 9.375 0.767936 9.375 1V15C9.375 15.2321 9.28281 15.4546 9.11872 15.6187C8.95462 15.7828 8.73206 15.875 8.5 15.875C8.26794 15.875 8.04538 15.7828 7.88128 15.6187C7.71719 15.4546 7.625 15.2321 7.625 15V1C7.625 0.767936 7.71719 0.545376 7.88128 0.381282C8.04538 0.217187 8.26794 0.125 8.5 0.125V0.125Z",fill:"black"})))};n.p;function K(){return(K=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var D,q=function(e){return r.a.createElement("svg",K({width:30,height:20,viewBox:"0 0 28 16",fill:"none"},e),Y||(Y=r.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0.875 0C1.10706 0 1.32962 0.0921874 1.49372 0.256282C1.65781 0.420376 1.75 0.642936 1.75 0.875V6.559L12.7173 0.196C13.6273 -0.3325 14.875 0.27125 14.875 1.414V6.559L25.8423 0.196C26.7523 -0.3325 28 0.27125 28 1.414V14.336C28 15.4788 26.7523 16.0825 25.8423 15.554L14.875 9.191V14.336C14.875 15.4788 13.6273 16.0825 12.7173 15.554L1.75 9.191V14.875C1.75 15.1071 1.65781 15.3296 1.49372 15.4937C1.32962 15.6578 1.10706 15.75 0.875 15.75C0.642936 15.75 0.420376 15.6578 0.256282 15.4937C0.0921873 15.3296 0 15.1071 0 14.875V0.875C0 0.642936 0.0921873 0.420376 0.256282 0.256282C0.420376 0.0921874 0.642936 0 0.875 0V0ZM13.125 1.98275L2.968 7.875L13.125 13.7672V1.98275ZM26.25 1.98275L16.093 7.875L26.25 13.7672V1.98275Z",fill:"black"})))};n.p;function U(){return(U=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var Q=function(e){return r.a.createElement("svg",U({width:30,height:20,viewBox:"0 0 28 16",fill:"none"},e),D||(D=r.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M27.125 0C27.3571 0 27.5796 0.0921874 27.7437 0.256282C27.9078 0.420376 28 0.642936 28 0.875V14.875C28 15.1071 27.9078 15.3296 27.7437 15.4937C27.5796 15.6578 27.3571 15.75 27.125 15.75C26.8929 15.75 26.6704 15.6578 26.5063 15.4937C26.3422 15.3296 26.25 15.1071 26.25 14.875V9.191L15.2827 15.554C14.3727 16.0825 13.125 15.4788 13.125 14.336V9.191L2.15775 15.554C1.24775 16.0825 0 15.4788 0 14.336V1.414C0 0.27125 1.24775 -0.3325 2.15775 0.196L13.125 6.559V1.414C13.125 0.27125 14.3727 -0.3325 15.2827 0.196L26.25 6.559V0.875C26.25 0.642936 26.3422 0.420376 26.5063 0.256282C26.6704 0.0921874 26.8929 0 27.125 0V0ZM1.75 1.98275V13.7672L11.907 7.875L1.75 1.98275ZM14.875 1.98275V13.7672L25.032 7.875L14.875 1.98275Z",fill:"black"})))},W=(n.p,n(19)),$=n(40),ee=n(88),te=(n(118),function(){var e=Object(a.useState)(function(){var e=localStorage.getItem("tasks");return JSON.parse(e)||[]}),t=Object(h.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(""),i=Object(h.a)(c,2),l=i[0],u=i[1];return Object(a.useEffect)(function(){localStorage.setItem("tasks",JSON.stringify(n))},[n]),r.a.createElement(k.a,{id:"tasks-card"},r.a.createElement($.a,{onSubmit:function(e){return function(e){e.preventDefault(),o([].concat(Object(W.a)(n),[l])),u(""),e.target.reset()}(e)}},r.a.createElement($.a.Group,{className:"mb-3",controlId:"formTask"},r.a.createElement($.a.Label,null,"Tasks"),r.a.createElement($.a.Control,{type:"text",placeholder:"Enter task",onChange:function(e){return function(e){u(e.target.value)}(e)}})),r.a.createElement(g.a,{id:"tasks-btn",variant:"light",type:"submit"},"Submit")),r.a.createElement(ee.a,null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{className:"tasks-header"},"Tasks"))),r.a.createElement("tbody",null,n&&n.map(function(e){return r.a.createElement("tr",{key:e},r.a.createElement("td",null,e,r.a.createElement(g.a,{id:"delete-btn",type:"submit",onClick:function(){return function(e){for(var t=n,a=0;a<t.length;a++)if(t[a]===e){var r=t.splice(a,1);console.log(r),o(Object(W.a)(t)),console.log("here",t)}}(e)}},"Delete")))}))))}),ne=Object(a.memo)(function(){var e=JSON.parse(localStorage.getItem("vid")),t=Object(a.useState)(e),n=Object(h.a)(t,2),o=n[0],c=n[1];return Object(a.useEffect)(function(){c(e)},[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"plyr-container",style:{width:"50%"}},Array.isArray(o)&&0===o.length?null:r.a.createElement(j.a,{id:" youtube-player3",videoId:o,opts:{height:"360",width:"680",playerVars:{autoplay:0,controls:1,showinfo:0}}})))});function ae(){ae=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,a=Object.defineProperty||function(e,t,n){e[t]=n.value},r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",c=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function l(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(I){l=function(e,t,n){return e[t]=n}}function u(e,t,n,r){var o=t&&t.prototype instanceof f?t:f,c=Object.create(o.prototype),i=new k(r||[]);return a(c,"_invoke",{value:w(e,n,i)}),c}function s(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(I){return{type:"throw",arg:I}}}e.wrap=u;var m={};function f(){}function d(){}function p(){}var h={};l(h,o,function(){return this});var v=Object.getPrototypeOf,b=v&&v(v(S([])));b&&b!==t&&n.call(b,o)&&(h=b);var E=p.prototype=f.prototype=Object.create(h);function y(e){["next","throw","return"].forEach(function(t){l(e,t,function(e){return this._invoke(t,e)})})}function g(e,t){var r;a(this,"_invoke",{value:function(a,o){function c(){return new t(function(r,c){!function a(r,o,c,i){var l=s(e[r],e,o);if("throw"!==l.type){var u=l.arg,m=u.value;return m&&"object"==typeof m&&n.call(m,"__await")?t.resolve(m.__await).then(function(e){a("next",e,c,i)},function(e){a("throw",e,c,i)}):t.resolve(m).then(function(e){u.value=e,c(u)},function(e){return a("throw",e,c,i)})}i(l.arg)}(a,o,r,c)})}return r=r?r.then(c,c):c()}})}function w(e,t,n){var a="suspendedStart";return function(r,o){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===r)throw o;return L()}for(n.method=r,n.arg=o;;){var c=n.delegate;if(c){var i=j(c,n);if(i){if(i===m)continue;return i}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===a)throw a="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a="executing";var l=s(e,t,n);if("normal"===l.type){if(a=n.done?"completed":"suspendedYield",l.arg===m)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(a="completed",n.method="throw",n.arg=l.arg)}}}function j(e,t){var n=t.method,a=e.iterator[n];if(void 0===a)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,j(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var r=s(a,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,m;var o=r.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,m):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,m)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function C(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function k(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function S(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,r=function t(){for(;++a<e.length;)if(n.call(e,a))return t.value=e[a],t.done=!1,t;return t.value=void 0,t.done=!0,t};return r.next=r}}return{next:L}}function L(){return{value:void 0,done:!0}}return d.prototype=p,a(E,"constructor",{value:p,configurable:!0}),a(p,"constructor",{value:d,configurable:!0}),d.displayName=l(p,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,l(e,i,"GeneratorFunction")),e.prototype=Object.create(E),e},e.awrap=function(e){return{__await:e}},y(g.prototype),l(g.prototype,c,function(){return this}),e.AsyncIterator=g,e.async=function(t,n,a,r,o){void 0===o&&(o=Promise);var c=new g(u(t,n,a,r),o);return e.isGeneratorFunction(n)?c:c.next().then(function(e){return e.done?e.value:c.next()})},y(E),l(E,i,"Generator"),l(E,o,function(){return this}),l(E,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),n=[];for(var a in t)n.push(a);return n.reverse(),function e(){for(;n.length;){var a=n.pop();if(a in t)return e.value=a,e.done=!1,e}return e.done=!0,e}},e.values=S,k.prototype={constructor:k,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(C),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function a(n,a){return c.type="throw",c.arg=e,t.next=n,a&&(t.method="next",t.arg=void 0),!!a}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],c=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var i=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(i&&l){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(e,t){for(var a=this.tryEntries.length-1;a>=0;--a){var r=this.tryEntries[a];if(r.tryLoc<=this.prev&&n.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=e,c.arg=t,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),C(n),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var a=n.completion;if("throw"===a.type){var r=a.arg;C(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:S(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),m}},e}var re=function(){var e=Object(a.useState)([]),t=Object(h.a)(e,2),n=t[0],o=t[1],c=Object(l.j)().state.playlistId,i=Object(a.useState)(0),u=Object(h.a)(i,2),s=u[0],m=u[1],f=Object(a.useState)(!1),d=Object(h.a)(f,2),p=d[0],v=d[1],b=Object(a.useState)(null),E=Object(h.a)(b,2),y=E[0],g=E[1],w=c.map(function(e){return e.snippet.playlistId})[0],O=function(){var e=Object(Z.a)(ae().mark(function e(){var t,n;return ae().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=10&playlistId=".concat(w,"&key=").concat("AIzaSyCsSzCnKI0IeLMs8KchtIgx0F-yCfvwNuc"));case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,o(n.items);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)(function(){O()},[]);var C=Object(a.useState)(25),L=Object(h.a)(C,2),I=L[0],x=L[1],N=Object(a.useState)(!1),V=Object(h.a)(N,2),R=V[0],B=V[1],F=Object(a.useRef)();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"plyr-container",style:{width:"90%"}},r.a.createElement(ne,null)),r.a.createElement(j.a,{id:" youtube-player",videoId:c[0].snippet.resourceId.videoId,onReady:function(e){return g(e.target)},opts:{height:"0",width:"0",playerVars:{autoplay:0,controls:1,showinfo:0,playlist:c.map(function(e){return e.snippet.resourceId.videoId}).join(",")}}}),r.a.createElement("div",null,r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("button",{className:"play",onClick:p?function(){y.pauseVideo(),v(!1)}:function(){y.playVideo(),v(!0)}},p?r.a.createElement(X,null):r.a.createElement(J,null)),r.a.createElement("button",{className:"prev",onClick:function(){m((s-1+c.length)%c.length),y.loadVideoById(n[s].snippet.resourceId.videoId)}},r.a.createElement(q,null)),r.a.createElement("button",{className:"next",onClick:function(){y.loadVideoById(c[(s+1)%c.length].snippet.resourceId.videoId),m((s+1)%c.length)}},r.a.createElement(Q,null)),r.a.createElement("button",{className:"stop",onClick:function(){y.stopVideo(),v(!1)}},"Stop")),r.a.createElement("br",null),r.a.createElement(M.a,{id:"home-card-group"},r.a.createElement(k.a,null,r.a.createElement(te,null)),r.a.createElement(k.a,null,r.a.createElement(S,{labelId:"session-label",counterId:"session-length",counterLabel:"Set Minutes",counter:I,increaseCounter:function(){I<60&&(x(I+1),setTimeout(function(){return F.current.restartTimer()},5))},decreaseCounter:function(){I>1&&(x(I-1),setTimeout(function(){return F.current.restartTimer()},5))},incrementBtnId:"session-increment",decrementBtnId:"session-decrement",timerIsRunning:R}),r.a.createElement(T,{sessionTime:I,passRunning:B,setSessionLength:x,ref:F})))))},oe=(n(120),function(){return r.a.createElement("div",{id:"tasks-container"},r.a.createElement("div",{id:"vid-select-container"},r.a.createElement(g.a,{id:"vid-select-btn",href:"./multivideos"},"Video Selection")),r.a.createElement(te,null))});var ce=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"main"},r.a.createElement(p,null),"/"===window.location.pathname&&r.a.createElement(r.a.Fragment,null,r.a.createElement(P,null))),r.a.createElement(l.c,null,r.a.createElement(l.a,{path:"/focus-flow/multivideos",element:r.a.createElement(O,null)}),r.a.createElement(l.a,{path:"/focus-flow/tasks",element:r.a.createElement(oe,null)}),r.a.createElement(l.a,{path:"/focus-flow/musicSelection",element:r.a.createElement(G,null)}),r.a.createElement(l.a,{exact:!0,path:"/focus-flow/musicSelection/now-playing",element:r.a.createElement(re,null)})),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(_,null))};c.a.createRoot(document.getElementById("root")).render(r.a.createElement(i.a,null,r.a.createElement(ce,null)));t.default=ce},44:function(e,t,n){e.exports=n.p+"static/media/logo.d60f3b53.png"},59:function(e,t,n){},63:function(e,t,n){e.exports=n(122)},71:function(e,t,n){},86:function(e,t,n){e.exports=n.p+"static/media/alarm.58b28fa5.mp3"}},[[63,2,1]]]);
//# sourceMappingURL=main.d76b69df.chunk.js.map