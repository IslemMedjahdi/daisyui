import{S as Ne,i as Pe,s as Te,C as fe,w as F,x as H,y as Y,z as Be,A as Se,q as G,o as K,B as Q,J as je,a9 as Le,k as y,e as n,t as A,m as E,c,a as d,h as V,d as r,b as o,g as j,H as t,a1 as oe,O as ne,F as De,G as Ae}from"../../chunks/vendor-55159dd6.js";import{M as Ce}from"../../chunks/_markdown-356b5dbf.js";import{C as Oe,a as se,p as Me,r as ce}from"../../chunks/actions-758c9310.js";import"../../chunks/stores-9ae8bf36.js";import"../../chunks/Ads-6c328ef1.js";import"../../chunks/util-0dc1265f.js";import"../../chunks/SEO-e44f63a8.js";import"../../chunks/preload-helper-ec9aa979.js";function Ue(N){let e,f,m,i,l,v,u,s,w,O,b,$,x,S,L,I,g,D;return{c(){e=n("div"),f=n("input"),m=y(),i=n("div"),l=n("label"),v=A("Open drawer"),u=y(),s=n("div"),w=n("label"),O=y(),b=n("ul"),$=n("li"),x=n("a"),S=A("Sidebar Item 1"),L=y(),I=n("li"),g=n("a"),D=A("Sidebar Item 2"),this.h()},l(k){e=c(k,"DIV",{class:!0});var h=d(e);f=c(h,"INPUT",{id:!0,type:!0,class:!0}),m=E(h),i=c(h,"DIV",{class:!0});var C=d(i);l=c(C,"LABEL",{for:!0,class:!0});var T=d(l);v=V(T,"Open drawer"),T.forEach(r),C.forEach(r),u=E(h),s=c(h,"DIV",{class:!0});var P=d(s);w=c(P,"LABEL",{for:!0,class:!0}),d(w).forEach(r),O=E(P),b=c(P,"UL",{class:!0});var _=d(b);$=c(_,"LI",{});var M=d($);x=c(M,"A",{});var a=d(x);S=V(a,"Sidebar Item 1"),a.forEach(r),M.forEach(r),L=E(_),I=c(_,"LI",{});var p=d(I);g=c(p,"A",{});var B=d(g);D=V(B,"Sidebar Item 2"),B.forEach(r),p.forEach(r),_.forEach(r),P.forEach(r),h.forEach(r),this.h()},h(){o(f,"id","my-drawer"),o(f,"type","checkbox"),o(f,"class","drawer-toggle"),o(l,"for","my-drawer"),o(l,"class","btn btn-primary drawer-button"),o(i,"class","flex flex-col items-center justify-center drawer-content"),o(w,"for","my-drawer"),o(w,"class","drawer-overlay"),o(b,"class","menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content"),o(s,"class","drawer-side"),o(e,"class","drawer w-full rounded")},m(k,h){j(k,e,h),t(e,f),t(e,m),t(e,i),t(i,l),t(l,v),t(e,u),t(e,s),t(s,w),t(s,O),t(s,b),t(b,$),t($,x),t(x,S),t(b,L),t(b,I),t(I,g),t(g,D)},d(k){k&&r(e)}}}function ze(N){let e,f=`<div class="$$drawer h-screen w-full rounded">
  <input id="my-drawer" type="checkbox" class="$$drawer-toggle">
  <div class="$$drawer-content">
    <!-- Page content here -->
    <label for="my-drawer" class="$$btn $$btn-primary $$drawer-button">Open drawer</label>
  </div> 
  <div class="$$drawer-side">
    <label for="my-drawer" class="$$drawer-overlay"></label>
    <ul class="$$menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
      <!-- Sidebar content here -->
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
      
    </ul>
  </div>
</div>`,m,i,l,v;return{c(){e=n("pre"),m=A(f),this.h()},l(u){e=c(u,"PRE",{slot:!0});var s=d(e);m=V(s,f),s.forEach(r),this.h()},h(){o(e,"slot","html")},m(u,s){j(u,e,s),t(e,m),l||(v=oe(i=ce.call(null,e,{to:N[0]})),l=!0)},p(u,s){i&&ne(i.update)&&s&1&&i.update.call(null,{to:u[0]})},d(u){u&&r(e),l=!1,v()}}}function Re(N){let e,f,m,i,l,v,u,s,w,O,b,$,x,S,L,I,g,D;return{c(){e=n("div"),f=n("input"),m=y(),i=n("div"),l=n("label"),v=A("Open drawer"),u=y(),s=n("div"),w=n("label"),O=y(),b=n("ul"),$=n("li"),x=n("a"),S=A("Sidebar Item 1"),L=y(),I=n("li"),g=n("a"),D=A("Sidebar Item 2"),this.h()},l(k){e=c(k,"DIV",{class:!0});var h=d(e);f=c(h,"INPUT",{id:!0,type:!0,class:!0}),m=E(h),i=c(h,"DIV",{class:!0});var C=d(i);l=c(C,"LABEL",{for:!0,class:!0});var T=d(l);v=V(T,"Open drawer"),T.forEach(r),C.forEach(r),u=E(h),s=c(h,"DIV",{class:!0});var P=d(s);w=c(P,"LABEL",{for:!0,class:!0}),d(w).forEach(r),O=E(P),b=c(P,"UL",{class:!0});var _=d(b);$=c(_,"LI",{});var M=d($);x=c(M,"A",{});var a=d(x);S=V(a,"Sidebar Item 1"),a.forEach(r),M.forEach(r),L=E(_),I=c(_,"LI",{});var p=d(I);g=c(p,"A",{});var B=d(g);D=V(B,"Sidebar Item 2"),B.forEach(r),p.forEach(r),_.forEach(r),P.forEach(r),h.forEach(r),this.h()},h(){o(f,"id","my-drawer-2"),o(f,"type","checkbox"),o(f,"class","drawer-toggle"),o(l,"for","my-drawer-2"),o(l,"class","btn btn-primary drawer-button lg:hidden"),o(i,"class","flex flex-col items-center justify-center drawer-content"),o(w,"for","my-drawer-2"),o(w,"class","drawer-overlay"),o(b,"class","menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content"),o(s,"class","drawer-side"),o(e,"class","drawer drawer-mobile w-full")},m(k,h){j(k,e,h),t(e,f),t(e,m),t(e,i),t(i,l),t(l,v),t(e,u),t(e,s),t(s,w),t(s,O),t(s,b),t(b,$),t($,x),t(x,S),t(b,L),t(b,I),t(I,g),t(g,D)},d(k){k&&r(e)}}}function qe(N){let e,f=`<div class="h-screen $$drawer $$drawer-mobile w-full">
  <input id="my-drawer-2" type="checkbox" class="$$drawer-toggle">
  <div class="$$drawer-content flex flex-col items-center justify-center">
    <!-- Page content here -->
    <label for="my-drawer-2" class="$$btn $$btn-primary $$drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div class="$$drawer-side">
    <label for="my-drawer-2" class="$$drawer-overlay"></label> 
    <ul class="$$menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
      <!-- Sidebar content here -->
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  
  </div>
</div>`,m,i,l,v;return{c(){e=n("pre"),m=A(f),this.h()},l(u){e=c(u,"PRE",{slot:!0});var s=d(e);m=V(s,f),s.forEach(r),this.h()},h(){o(e,"slot","html")},m(u,s){j(u,e,s),t(e,m),l||(v=oe(i=ce.call(null,e,{to:N[0]})),l=!0)},p(u,s){i&&ne(i.update)&&s&1&&i.update.call(null,{to:u[0]})},d(u){u&&r(e),l=!1,v()}}}function Je(N){let e,f,m,i,l,v,u,s,w,O,b,$,x,S,L,I,g,D,k,h,C,T,P,_,M,a,p,B,R,U,z,W,ie,de,X,Z,ue;return{c(){e=n("div"),f=n("input"),m=y(),i=n("div"),l=n("div"),v=n("div"),u=n("label"),s=De("svg"),w=De("path"),O=y(),b=n("div"),$=A("Navbar Title"),x=y(),S=n("div"),L=n("ul"),I=n("li"),g=n("a"),D=A("Navbar Item 1"),k=y(),h=n("li"),C=n("a"),T=A("Navbar Item 2"),P=y(),_=n("div"),M=A("Content"),a=y(),p=n("div"),B=n("label"),R=y(),U=n("ul"),z=n("li"),W=n("a"),ie=A("Sidebar Item 1"),de=y(),X=n("li"),Z=n("a"),ue=A("Sidebar Item 2"),this.h()},l(ee){e=c(ee,"DIV",{class:!0});var q=d(e);f=c(q,"INPUT",{id:!0,type:!0,class:!0}),m=E(q),i=c(q,"DIV",{class:!0});var te=d(i);l=c(te,"DIV",{class:!0});var J=d(l);v=c(J,"DIV",{class:!0});var pe=d(v);u=c(pe,"LABEL",{for:!0,class:!0});var me=d(u);s=Ae(me,"svg",{xmlns:!0,fill:!0,viewBox:!0,class:!0});var ve=d(s);w=Ae(ve,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,d:!0}),d(w).forEach(r),ve.forEach(r),me.forEach(r),pe.forEach(r),O=E(J),b=c(J,"DIV",{class:!0});var he=d(b);$=V(he,"Navbar Title"),he.forEach(r),x=E(J),S=c(J,"DIV",{class:!0});var be=d(S);L=c(be,"UL",{class:!0});var ae=d(L);I=c(ae,"LI",{});var we=d(I);g=c(we,"A",{});var $e=d(g);D=V($e,"Navbar Item 1"),$e.forEach(r),we.forEach(r),k=E(ae),h=c(ae,"LI",{});var _e=d(h);C=c(_e,"A",{});var ge=d(C);T=V(ge,"Navbar Item 2"),ge.forEach(r),_e.forEach(r),ae.forEach(r),be.forEach(r),J.forEach(r),P=E(te),_=c(te,"DIV",{class:!0});var ye=d(_);M=V(ye,"Content"),ye.forEach(r),te.forEach(r),a=E(q),p=c(q,"DIV",{class:!0});var re=d(p);B=c(re,"LABEL",{for:!0,class:!0}),d(B).forEach(r),R=E(re),U=c(re,"UL",{class:!0});var le=d(U);z=c(le,"LI",{});var Ee=d(z);W=c(Ee,"A",{});var Ie=d(W);ie=V(Ie,"Sidebar Item 1"),Ie.forEach(r),Ee.forEach(r),de=E(le),X=c(le,"LI",{});var ke=d(X);Z=c(ke,"A",{});var xe=d(Z);ue=V(xe,"Sidebar Item 2"),xe.forEach(r),ke.forEach(r),le.forEach(r),re.forEach(r),q.forEach(r),this.h()},h(){o(f,"id","my-drawer-3"),o(f,"type","checkbox"),o(f,"class","drawer-toggle"),o(w,"stroke-linecap","round"),o(w,"stroke-linejoin","round"),o(w,"stroke-width","2"),o(w,"d","M4 6h16M4 12h16M4 18h16"),o(s,"xmlns","http://www.w3.org/2000/svg"),o(s,"fill","none"),o(s,"viewBox","0 0 24 24"),o(s,"class","inline-block w-6 h-6 stroke-current"),o(u,"for","my-drawer-3"),o(u,"class","btn btn-square btn-ghost"),o(v,"class","flex-none lg:hidden"),o(b,"class","flex-1 px-2 mx-2"),o(L,"class","menu menu-horizontal"),o(S,"class","flex-none hidden lg:block"),o(l,"class","w-full navbar bg-base-300"),o(_,"class","flex justify-center items-center flex-grow"),o(i,"class","flex flex-col drawer-content"),o(B,"for","my-drawer-3"),o(B,"class","drawer-overlay"),o(U,"class","p-4 overflow-y-auto menu w-80 bg-base-100"),o(p,"class","drawer-side"),o(e,"class","drawer w-full rounded")},m(ee,q){j(ee,e,q),t(e,f),t(e,m),t(e,i),t(i,l),t(l,v),t(v,u),t(u,s),t(s,w),t(l,O),t(l,b),t(b,$),t(l,x),t(l,S),t(S,L),t(L,I),t(I,g),t(g,D),t(L,k),t(L,h),t(h,C),t(C,T),t(i,P),t(i,_),t(_,M),t(e,a),t(e,p),t(p,B),t(p,R),t(p,U),t(U,z),t(z,W),t(W,ie),t(U,de),t(U,X),t(X,Z),t(Z,ue)},d(ee){ee&&r(e)}}}function Fe(N){let e,f=`<div class="$$drawer h-screen w-full">
  <input id="my-drawer-3" type="checkbox" class="$$drawer-toggle"> 
  <div class="$$drawer-content flex flex-col">
    <!-- Navbar -->
    <div class="w-full $$navbar bg-base-300">
      <div class="flex-none lg:hidden">
        <label for="my-drawer-3" class="$$btn $$btn-square $$btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
      <div class="flex-1 px-2 mx-2">Navbar Title</div>
      <div class="flex-none hidden lg:block">
        <ul class="$$menu $$menu-horizontal">
          <!-- Navbar menu content here -->
          <li><a>Navbar Item 1</a></li>
          <li><a>Navbar Item 2</a></li>
        </ul>
      </div>
    </div>
    <!-- Page content here -->
    Content
  </div> 
  <div class="$$drawer-side">
    <label for="my-drawer-3" class="$$drawer-overlay"></label> 
    <ul class="$$menu p-4 overflow-y-auto w-80 bg-base-100">
      <!-- Sidebar content here -->
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  </div>
</div>`,m,i,l,v;return{c(){e=n("pre"),m=A(f),this.h()},l(u){e=c(u,"PRE",{slot:!0});var s=d(e);m=V(s,f),s.forEach(r),this.h()},h(){o(e,"slot","html")},m(u,s){j(u,e,s),t(e,m),l||(v=oe(i=ce.call(null,e,{to:N[0]})),l=!0)},p(u,s){i&&ne(i.update)&&s&1&&i.update.call(null,{to:u[0]})},d(u){u&&r(e),l=!1,v()}}}function He(N){let e,f,m,i,l,v,u,s,w,O,b,$,x,S,L,I,g,D;return{c(){e=n("div"),f=n("input"),m=y(),i=n("div"),l=n("label"),v=A("Open drawer"),u=y(),s=n("div"),w=n("label"),O=y(),b=n("ul"),$=n("li"),x=n("a"),S=A("Sidebar Item 1"),L=y(),I=n("li"),g=n("a"),D=A("Sidebar Item 2"),this.h()},l(k){e=c(k,"DIV",{class:!0});var h=d(e);f=c(h,"INPUT",{id:!0,type:!0,class:!0}),m=E(h),i=c(h,"DIV",{class:!0});var C=d(i);l=c(C,"LABEL",{for:!0,class:!0});var T=d(l);v=V(T,"Open drawer"),T.forEach(r),C.forEach(r),u=E(h),s=c(h,"DIV",{class:!0});var P=d(s);w=c(P,"LABEL",{for:!0,class:!0}),d(w).forEach(r),O=E(P),b=c(P,"UL",{class:!0});var _=d(b);$=c(_,"LI",{});var M=d($);x=c(M,"A",{});var a=d(x);S=V(a,"Sidebar Item 1"),a.forEach(r),M.forEach(r),L=E(_),I=c(_,"LI",{});var p=d(I);g=c(p,"A",{});var B=d(g);D=V(B,"Sidebar Item 2"),B.forEach(r),p.forEach(r),_.forEach(r),P.forEach(r),h.forEach(r),this.h()},h(){o(f,"id","my-drawer-4"),o(f,"type","checkbox"),o(f,"class","drawer-toggle"),o(l,"for","my-drawer-4"),o(l,"class","btn btn-primary drawer-button"),o(i,"class","flex flex-col items-center justify-center drawer-content"),o(w,"for","my-drawer-4"),o(w,"class","drawer-overlay"),o(b,"class","menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content"),o(s,"class","drawer-side"),o(e,"class","drawer drawer-end w-full rounded")},m(k,h){j(k,e,h),t(e,f),t(e,m),t(e,i),t(i,l),t(l,v),t(e,u),t(e,s),t(s,w),t(s,O),t(s,b),t(b,$),t($,x),t(x,S),t(b,L),t(b,I),t(I,g),t(g,D)},d(k){k&&r(e)}}}function Ye(N){let e,f=`<div class="$$drawer $$drawer-end h-screen w-full">
  <input id="my-drawer-4" type="checkbox" class="$$drawer-toggle">
  <div class="$$drawer-content">
    <!-- Page content here -->
    <label for="my-drawer-4" class="$$drawer-button $$btn $$btn-primary">Open drawer</label>
  </div> 
  <div class="$$drawer-side">
    <label for="my-drawer-4" class="$$drawer-overlay"></label>
    <ul class="$$menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
      <!-- Sidebar content here -->
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
      
    </ul>
  </div>
</div>`,m,i,l,v;return{c(){e=n("pre"),m=A(f),this.h()},l(u){e=c(u,"PRE",{slot:!0});var s=d(e);m=V(s,f),s.forEach(r),this.h()},h(){o(e,"slot","html")},m(u,s){j(u,e,s),t(e,m),l||(v=oe(i=ce.call(null,e,{to:N[0]})),l=!0)},p(u,s){i&&ne(i.update)&&s&1&&i.update.call(null,{to:u[0]})},d(u){u&&r(e),l=!1,v()}}}function Ge(N){let e,f,m,i,l,v,u,s,w,O=`<code class="language-js"><span class="token punctuation">.</span>drawer <span class="token comment">// The root container</span>
  \u251C\u2500\u2500 <span class="token punctuation">.</span>drawer<span class="token operator">-</span>toggle <span class="token comment">// A hidden checkbox to toggle the visibility of the sidebar</span>
  \u251C\u2500\u2500 <span class="token punctuation">.</span>drawer<span class="token operator">-</span>content <span class="token comment">// All your page content goes here</span>
  \u2502    \u251C\u2500\u2500 <span class="token comment">// navbar</span>
  \u2502    \u251C\u2500\u2500 <span class="token comment">// content</span>
  \u2502    \u2514\u2500\u2500 <span class="token comment">// footer</span>
  \u2514\u2500\u2500 <span class="token punctuation">.</span>drawer<span class="token operator">-</span>side <span class="token comment">// Sidebar wrapper</span>
       \u251C\u2500\u2500 <span class="token punctuation">.</span>drawer<span class="token operator">-</span>overlay <span class="token comment">// A dark overlay that covers the whole page when the drawer is open</span>
       \u2514\u2500\u2500 <span class="token comment">// Sidebar content (menu or anything)</span></code>`,b,$,x,S,L,I,g,D,k,h,C,T,P,_,M;return e=new Oe({props:{data:[{type:"component",class:"drawer",desc:"Container element"},{type:"component",class:"drawer-toggle",desc:"For checkbox element that controls the drawer"},{type:"component",class:"drawer-content",desc:"The content container"},{type:"component",class:"drawer-side",desc:"The sidebar container"},{type:"component",class:"drawer-overlay",desc:"The label covers the content when drawer is open"},{type:"modifier",class:"drawer-mobile",desc:"Makes drawer to open/close on mobile but will be always visible on desktop"},{type:"modifier",class:"drawer-end",desc:"puts drawer to the right"}]}}),D=new se({props:{title:"Drawer",$$slots:{html:[ze],default:[Ue]},$$scope:{ctx:N}}}),h=new se({props:{title:"Drawer for mobile + fixed sidebar for desktop",desc:"Drawer is always open on desktop size. Drawer can be toggled on mobile size. Resize the browser to see toggle button on mobile size",$$slots:{html:[qe],default:[Re]},$$scope:{ctx:N}}}),T=new se({props:{title:"Navbar menu for desktop + sidebar drawer for mobile",desc:"Change screen size to show/hide menu",$$slots:{html:[Fe],default:[Je]},$$scope:{ctx:N}}}),_=new se({props:{title:"Drawer that opens from right side of page",$$slots:{html:[Ye],default:[He]},$$scope:{ctx:N}}}),{c(){F(e.$$.fragment),f=y(),m=n("p"),i=A("Drawer sidebar can be visible by default on large screens or it can be toggleable on both large and small screens."),l=y(),v=n("p"),u=A("Drawer tags structure:"),s=y(),w=n("pre"),b=y(),$=n("p"),x=A("You can check/uncheck the checkbox using JavaScript or using "),S=n("code"),L=A("<label>"),I=A(" tag."),g=y(),F(D.$$.fragment),k=y(),F(h.$$.fragment),C=y(),F(T.$$.fragment),P=y(),F(_.$$.fragment),this.h()},l(a){H(e.$$.fragment,a),f=E(a),m=c(a,"P",{});var p=d(m);i=V(p,"Drawer sidebar can be visible by default on large screens or it can be toggleable on both large and small screens."),p.forEach(r),l=E(a),v=c(a,"P",{});var B=d(v);u=V(B,"Drawer tags structure:"),B.forEach(r),s=E(a),w=c(a,"PRE",{class:!0});var R=d(w);R.forEach(r),b=E(a),$=c(a,"P",{});var U=d($);x=V(U,"You can check/uncheck the checkbox using JavaScript or using "),S=c(U,"CODE",{});var z=d(S);L=V(z,"<label>"),z.forEach(r),I=V(U," tag."),U.forEach(r),g=E(a),H(D.$$.fragment,a),k=E(a),H(h.$$.fragment,a),C=E(a),H(T.$$.fragment,a),P=E(a),H(_.$$.fragment,a),this.h()},h(){o(w,"class","language-js")},m(a,p){Y(e,a,p),j(a,f,p),j(a,m,p),t(m,i),j(a,l,p),j(a,v,p),t(v,u),j(a,s,p),j(a,w,p),w.innerHTML=O,j(a,b,p),j(a,$,p),t($,x),t($,S),t(S,L),t($,I),j(a,g,p),Y(D,a,p),j(a,k,p),Y(h,a,p),j(a,C,p),Y(T,a,p),j(a,P,p),Y(_,a,p),M=!0},p(a,p){const B={};p&5&&(B.$$scope={dirty:p,ctx:a}),D.$set(B);const R={};p&5&&(R.$$scope={dirty:p,ctx:a}),h.$set(R);const U={};p&5&&(U.$$scope={dirty:p,ctx:a}),T.$set(U);const z={};p&5&&(z.$$scope={dirty:p,ctx:a}),_.$set(z)},i(a){M||(G(e.$$.fragment,a),G(D.$$.fragment,a),G(h.$$.fragment,a),G(T.$$.fragment,a),G(_.$$.fragment,a),M=!0)},o(a){K(e.$$.fragment,a),K(D.$$.fragment,a),K(h.$$.fragment,a),K(T.$$.fragment,a),K(_.$$.fragment,a),M=!1},d(a){Q(e,a),a&&r(f),a&&r(m),a&&r(l),a&&r(v),a&&r(s),a&&r(w),a&&r(b),a&&r($),a&&r(g),Q(D,a),a&&r(k),Q(h,a),a&&r(C),Q(T,a),a&&r(P),Q(_,a)}}}function Ke(N){let e,f;const m=[N[1],Ve];let i={$$slots:{default:[Ge]},$$scope:{ctx:N}};for(let l=0;l<m.length;l+=1)i=fe(i,m[l]);return e=new Ce({props:i}),{c(){F(e.$$.fragment)},l(l){H(e.$$.fragment,l)},m(l,v){Y(e,l,v),f=!0},p(l,[v]){const u=v&2?Be(m,[v&2&&Se(l[1]),v&0&&Se(Ve)]):{};v&5&&(u.$$scope={dirty:v,ctx:l}),e.$set(u)},i(l){f||(G(e.$$.fragment,l),f=!0)},o(l){K(e.$$.fragment,l),f=!1},d(l){Q(e,l)}}}const Ve={title:"Drawer",desc:"Drawer is a grid layout that can show/hide a sidebar on the left or right side of the page.",published:!0};function Qe(N,e,f){let m;return je(N,Me,i=>f(0,m=i)),N.$$set=i=>{f(1,e=fe(fe({},e),Le(i)))},e=Le(e),[m,e]}class st extends Ne{constructor(e){super();Pe(this,e,Qe,Ke,Te,{})}}export{st as default,Ve as metadata};
