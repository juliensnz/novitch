(this.webpackJsonpnovitch=this.webpackJsonpnovitch||[]).push([[0],{27:function(e,n,t){e.exports=t(39)},39:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(20),l=t.n(i),c=t(1),o=t(13),u=t(8),s=t(2);function m(){var e=Object(c.a)(["\n  font-weight: 200;\n  font-size: 17px;\n"]);return m=function(){return e},e}function f(){var e=Object(c.a)(["\n  text-align: center;\n  font-weight: 200;\n  text-transform: uppercase;\n"]);return f=function(){return e},e}var d=s.a.h1(f()),p=s.a.p(m());function v(){var e=Object(c.a)(["\n  width: 100%;\n"]);return v=function(){return e},e}function g(){var e=Object(c.a)(["\n  /* max-height: 300px; */\n"]);return g=function(){return e},e}function h(){var e=Object(c.a)(["\n  display: grid;\n  grid-template-columns: repeat(4, minmax(140px, 1fr));\n  grid-gap: 30px;\n\n  @media (max-width: 910px) {\n    grid-template-columns: repeat(2, minmax(140px, 1fr));\n  }\n"]);return h=function(){return e},e}function x(){var e=Object(c.a)([""]);return x=function(){return e},e}var E=s.a.div(x()),b=s.a.div(h()),w=s.a.div(g()),j=s.a.img(v()),O=function(){return r.a.createElement(E,null,r.a.createElement(d,null,"Mon super titre"),r.a.createElement(p,null,"Morbi id tortor non quam aliquet eleifend. Etiam ultricies ac neque eget volutpat. Fusce et ultricies elit, vel efficitur nisi. Aenean mattis orci eget interdum iaculis. Maecenas odio eros, luctus in enim ac, scelerisque condimentum leo. Ut rutrum gravida felis vel dictum. Curabitur in aliquet ligula. Ut porta nulla eget velit convallis, a vehicula purus mattis. Donec nulla nibh, condimentum lobortis sagittis ut, fringilla nec sem. Aliquam vel turpis nisi. Vestibulum id vehicula ipsum. Duis in consequat odio. Nunc tincidunt lacinia massa, nec semper sem volutpat vitae. Duis at mauris libero. Praesent laoreet, nisi a sagittis convallis, nulla orci bibendum nisi, et lacinia diam ligula id ipsum."),r.a.createElement(b,null,r.a.createElement(w,null,r.a.createElement(j,{src:"./images/virge.jpg"})),r.a.createElement(w,null,r.a.createElement(j,{src:"./images/flo.jpg"})),r.a.createElement(w,null,r.a.createElement(j,{src:"./images/sebas.jpg"})),r.a.createElement(w,null,r.a.createElement(j,{src:"./images/jeff.jpg"}))))},y=function(){return r.a.createElement("div",null,"Information")},k=t(11),S=t(6),W=t.n(S);function q(){var e=Object(c.a)([""]);return q=function(){return e},e}function A(){var e=Object(c.a)(["\n  font-size: 50px;\n  font-weight: 200;\n"]);return A=function(){return e},e}function I(){var e=Object(c.a)(["\n  text-align: center;\n"]);return I=function(){return e},e}function U(){var e=Object(c.a)(["\n  display: grid;\n  grid-template-columns: repeat(4, minmax(50px, 1fr));\n  grid-gap: 10px;\n  margin-top: 100px;\n  flex: 1;\n  mix-blend-mode: difference;\n  color: white;\n  filter: grayscale(1) contrast(9);\n\n  @media (max-width: 570px) {\n    grid-template-columns: repeat(1, minmax(50px, 1fr));\n    margin-top: 40px;\n  }\n"]);return U=function(){return e},e}function z(){var e=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n"]);return z=function(){return e},e}var C=s.a.div(z()),M=s.a.div(U()),N=s.a.div(I()),R=s.a.div(A()),D=s.a.div(q()),H=function(e){return W()(e).diff(W()(),"days")},J=function(e){return W.a.duration(W()(e).diff(W()()),"milliseconds").hours()},L=function(e){return W.a.duration(W()(e).diff(W()()),"milliseconds").minutes()},P=function(e){return W.a.duration(W()(e).diff(W()()),"milliseconds").seconds()},T=function(e){var n=function(e){var n=r.a.useState(H(e)),t=Object(k.a)(n,2),a=t[0],i=t[1],l=r.a.useState(J(e)),c=Object(k.a)(l,2),o=c[0],u=c[1],s=r.a.useState(L(e)),m=Object(k.a)(s,2),f=m[0],d=m[1],p=r.a.useState(P(e)),v=Object(k.a)(p,2),g=v[0],h=v[1],x=r.a.useRef(null);return r.a.useEffect((function(){return x.current=setInterval((function(){i(H(e)),u(J(e)),d(L(e)),h(P(e))}),1e3),function(){clearInterval(x.current)}}),[e]),[a,o,f,g]}(e.date),t=Object(k.a)(n,4),a=t[0],i=t[1],l=t[2],c=t[3];return r.a.createElement(M,null,r.a.createElement(N,null,r.a.createElement(R,null,i),r.a.createElement(D,null,"Jours")),r.a.createElement(N,null,r.a.createElement(R,null,a),r.a.createElement(D,null,"Heures")),r.a.createElement(N,null,r.a.createElement(R,null,l),r.a.createElement(D,null,"Minutes")),r.a.createElement(N,null,r.a.createElement(R,null,c),r.a.createElement(D,null,"Secondes")))},B=function(){return r.a.createElement(C,null,r.a.createElement(d,null,"Titre"),r.a.createElement(T,{date:[2020,6,20,14,0,0]}))};function F(){var e=Object(c.a)(["\n  margin: 0 40px 0 0;\n  text-transform: uppercase;\n  color: #555;\n  padding: 0;\n  flex-shrink: 0;\n  font-size: 20px;\n\n  a {\n    color: #555;\n    font-weight: 300;\n    text-decoration: none;\n  }\n"]);return F=function(){return e},e}function V(){var e=Object(c.a)(["\n  display: flex;\n  list-style: none;\n  justify-content: left;\n  flex-wrap: wrap;\n  margin: 0;\n  padding: 0;\n  margin-bottom: 50px;\n\n  @media (max-width: 675px) {\n    flex-direction: column;\n  }\n"]);return V=function(){return e},e}function $(){var e=Object(c.a)([""]);return $=function(){return e},e}function G(){var e=Object(c.a)(['\n  display: flex;\n  flex-direction: column;\n  font-family: "Helvetica Neue";\n  padding: 30px 120px;\n  background-image: url("./images/background.jpg");\n  background-size: cover;\n  min-height: 100vh;\n\n  @media (max-width: 910px) {\n    padding: 30px 100px;\n  }\n  @media (max-width: 500px) {\n    padding: 30px 30px;\n  }\n']);return G=function(){return e},e}var K=s.a.div(G()),Q=s.a.nav($()),X=s.a.ul(V()),Y=s.a.ul(F()),Z=function(){return r.a.createElement(o.a,null,r.a.createElement(K,null,r.a.createElement(Q,null,r.a.createElement(X,null,r.a.createElement(Y,null,r.a.createElement(o.b,{to:"".concat("/novitch","/")},"Home")),r.a.createElement(Y,null,r.a.createElement(o.b,{to:"".concat("/novitch","/temoins")},"Les t\xe9moins")),r.a.createElement(Y,null,r.a.createElement(o.b,{to:"".concat("/novitch","/information")},"Information")))),r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/temoins"},r.a.createElement(O,null)),r.a.createElement(u.a,{path:"/informations"},r.a.createElement(y,null)),r.a.createElement(u.a,{path:"/"},r.a.createElement(B,null)))))},_=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ee(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}l.a.render(r.a.createElement(Z,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/novitch",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/novitch","/service-worker.js");_?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ee(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):ee(n,e)}))}}()}},[[27,1,2]]]);
//# sourceMappingURL=main.86b8bab1.chunk.js.map