(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(t,e,n){t.exports=n(40)},37:function(t,e,n){t.exports=n.p+"static/media/logo.be622899.svg"},38:function(t,e,n){},39:function(t,e,n){},40:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),a=n(18),i=n(8),c=n(7),l=n(21);function u(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return new Promise(function(e){return setTimeout(function(){return e({data:t})},500)})}function s(){s=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r=Object.defineProperty||function(t,e,n){t[e]=n.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(B){l=function(t,e,n){return t[e]=n}}function u(t,e,n,o){var a=e&&e.prototype instanceof h?e:h,i=Object.create(a.prototype),c=new L(o||[]);return r(i,"_invoke",{value:E(t,n,c)}),i}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(B){return{type:"throw",arg:B}}}t.wrap=u;var d={};function h(){}function p(){}function m(){}var g={};l(g,a,function(){return this});var v=Object.getPrototypeOf,y=v&&v(v(T([])));y&&y!==e&&n.call(y,a)&&(g=y);var x=m.prototype=h.prototype=Object.create(g);function w(t){["next","throw","return"].forEach(function(e){l(t,e,function(t){return this._invoke(e,t)})})}function b(t,e){var o;r(this,"_invoke",{value:function(r,a){function i(){return new e(function(o,i){!function r(o,a,i,c){var l=f(t[o],t,a);if("throw"!==l.type){var u=l.arg,s=u.value;return s&&"object"==typeof s&&n.call(s,"__await")?e.resolve(s.__await).then(function(t){r("next",t,i,c)},function(t){r("throw",t,i,c)}):e.resolve(s).then(function(t){u.value=t,i(u)},function(t){return r("throw",t,i,c)})}c(l.arg)}(r,a,o,i)})}return o=o?o.then(i,i):i()}})}function E(t,e,n){var r="suspendedStart";return function(o,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw a;return k()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=O(i,n);if(c){if(c===d)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=f(t,e,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===d)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}function O(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,O(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;var o=f(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,d;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function T(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:k}}function k(){return{value:void 0,done:!0}}return p.prototype=m,r(x,"constructor",{value:m,configurable:!0}),r(m,"constructor",{value:p,configurable:!0}),p.displayName=l(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,l(t,c,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},w(b.prototype),l(b.prototype,i,function(){return this}),t.AsyncIterator=b,t.async=function(e,n,r,o,a){void 0===a&&(a=Promise);var i=new b(u(e,n,r,o),a);return t.isGeneratorFunction(n)?i:i.next().then(function(t){return t.done?t.value:i.next()})},w(x),l(x,c,"Generator"),l(x,a,function(){return this}),l(x,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=T,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return i.type="throw",i.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),_(n),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;_(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:T(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),d}},t}var f=Object(c.b)("counter/fetchCount",function(){var t=Object(l.a)(s().mark(function t(e){var n;return s().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u(e);case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()),d=Object(c.c)({name:"counter",initialState:{value:0,status:"idle"},reducers:{increment:function(t){t.value+=1},decrement:function(t){t.value-=1},incrementByAmount:function(t,e){t.value+=e.payload}},extraReducers:function(t){t.addCase(f.pending,function(t){t.status="loading"}).addCase(f.fulfilled,function(t,e){t.status="idle",t.value+=e.payload})}}),h=d.actions,p=(h.increment,h.decrement,h.incrementByAmount,d.reducer),m=Object(c.a)({reducer:{counter:p}});n(37),n(9),n(5);n(38);var g,v,y,x=n(2),w=n(3),b=n(25);var E,O,j,_,L,T,k,B=function(){return o.a.createElement(C,null,o.a.createElement("a",null,o.a.createElement("img",{src:"/images/logo.svg"})),o.a.createElement(S,null,o.a.createElement("a",{href:"#"},"Model S"),o.a.createElement("a",{href:"#"},"Model X"),o.a.createElement("a",{href:"#"},"Model Y"),o.a.createElement("a",{href:"#"},"Model 3"),o.a.createElement("a",{href:"#"},"Solar Roof"),o.a.createElement("a",{href:"#"},"Solar Panels")),o.a.createElement(I,null,o.a.createElement("a",{href:"#"},"Shop"),o.a.createElement("a",{href:"#"},"Tesla Account"),o.a.createElement("a",null," ",o.a.createElement(b.a,null))))},C=w.a.div(g||(g=Object(x.a)(["\n  min-height:60px;\n  position:fixed;\n  display:flex;\n  flex-flow: row wrap;\n  justify-content: space-between;\n  padding:10px 10px;\n  left:0;\n  right:0;\n  a img {\n    padding-left: 70px;\n  }\n"]))),S=w.a.div(v||(v=Object(x.a)(["\n  display:flex;\n  align-items:center;\n  justify-content:center;\n  a {\n      font-weight: 600;\n      text-transform:uppercase;\n      padding:0 10px;\n  }\n\n  @media(max-width: 768px) {\n    display:none;\n  }\n"]))),I=w.a.div(y||(y=Object(x.a)(["\n  display:flex;\n  align-items:center;\n  a {\n    font-weight: 600;\n    text-transform:uppercase;\n    margin: 10px;\n  }\n"])));var P,N=function(t){var e=t.title,n=t.description,r=t.leftBtnText,a=t.rightBtnText,i=t.backgroundImg;return o.a.createElement(M,{bgImage:i},o.a.createElement(D,null,o.a.createElement("h1",null,e),o.a.createElement("p",null,n)),o.a.createElement(R,null,"  ",o.a.createElement(F,null,o.a.createElement(G,null,r),a&&o.a.createElement(A,null,a)),o.a.createElement(Y,{src:"images/down-arrow.svg"})))},M=w.a.div(E||(E=Object(x.a)(["\n    width:100vw;\n    height:100vh;\n    background-size:cover;\n    background-image:",";\n    background-position:center;\n    background-repeat:no-repeat;\n    display:flex;\n    flex-direction:column;\n    justify-content:space-between; // vertical\n    align-items:center; // horizontal\n\n"])),function(t){return'url("images/'.concat(t.bgImage,'")')}),D=w.a.div(O||(O=Object(x.a)(["\n    padding-top:15vh;\n    text-align:center;\n"]))),F=w.a.div(j||(j=Object(x.a)(["\n    display:flex;\n    margin-bottom:30px;\n    @media (max-width: 768px){\n        flex-direction:column;\n    }\n"]))),G=w.a.div(_||(_=Object(x.a)(["\n    background-color:rgba(23, 26, 32, 0.8);\n    height: 40px;\n    width:256px;\n    color:white;\n    display:flex;\n    justify-content:center;\n    align-items: center;\n    border-radius:5px;\n    opacity:0.85;\n    text-transform: uppercase;\n    font-size: 12px;\n    cusrsor:pointer;\n    margin-left:10px;\n    margin-right:10px;\n    @media (max-width: 768px){\n        margin-bottom:10px;\n    }\n\n"]))),A=Object(w.a)(G)(L||(L=Object(x.a)(["\n    background-color:rgba(255, 255, 255, 0.8);\n    color:black;\n    font-weight:700;\n"]))),Y=w.a.img(T||(T=Object(x.a)(["\n    height:40px;\n    overflow-x:hidden;\n    animation: animateDown infinite  1.5s;\n"]))),R=w.a.div(k||(k=Object(x.a)([""])));var z=function(){return o.a.createElement(J,null,o.a.createElement(N,{title:"Model S",description:"Order Online for Touchless Delivery",backgroundImg:"model-s.jpg",leftBtnText:"Custom Order",rightBtnText:"Existing inventory"}),o.a.createElement(N,{title:"Model X",description:"Order Online for Touchless Delivery",backgroundImg:"model-x.jpg",leftBtnText:"Custom Order",rightBtnText:"Existing inventory"}),o.a.createElement(N,{title:"Model Y",description:"Order Online for Touchless Delivery",backgroundImg:"model-y.jpg",leftBtnText:"Custom Order",rightBtnText:"Existing inventory"}),o.a.createElement(N,{title:"Model 3",description:"Order Online for Touchless Delivery",backgroundImg:"model-3.jpg",leftBtnText:"Custom Order",rightBtnText:"Existing inventory"}),o.a.createElement(N,{title:"Solar Panels",description:"Lowest Cost Solar Panels in America",backgroundImg:"solar-panel.jpg",leftBtnText:"Order Now",rightBtnText:"Learn More"}),o.a.createElement(N,{title:"Solar Roofs",description:"Produce Clean Energy From Your Roof",backgroundImg:"solar-roof.jpg",leftBtnText:"Order Now",rightBtnText:"Learn More"}),o.a.createElement(N,{title:"Accessories",description:"",backgroundImg:"accessories.jpg",leftBtnText:"Shop Now",rightBtnText:""}))},J=w.a.div(P||(P=Object(x.a)(["\n    height:100vh;\n"])));var X=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(B,null),o.a.createElement(z,null))},q=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,41)).then(function(e){var n=e.getCLS,r=e.getFID,o=e.getFCP,a=e.getLCP,i=e.getTTFB;n(t),r(t),o(t),a(t),i(t)})},H=(n(39),document.getElementById("root"));Object(a.createRoot)(H).render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(i.a,{store:m},o.a.createElement(X,null)))),q()},5:function(t,e,n){t.exports={row:"Counter_row__2MvVx",value:"Counter_value__1Y__H",button:"Counter_button__1CDD8",textbox:"Counter_textbox__qcNiy",asyncButton:"Counter_asyncButton__r_lwG Counter_button__1CDD8"}}},[[26,1,2]]]);
//# sourceMappingURL=main.6da5251f.chunk.js.map