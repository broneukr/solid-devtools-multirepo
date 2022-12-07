'use strict';/*
 lui.js web frame work 1.2.3
 inspired by react and mithril
 L3P3.de 2022
*/
{let e=null,f=!e,g=e,n=0,r=0,u=0,x=f,y=[],z=[];
const A={},B={},C={},D=[],F=[],G=e,I=f,J=!f,K=Array,L=Object,aa=L.assign,M=L.keys,ba=document,ca=window,da=ca.performance||Date,ea=a=>new Function("a","b",`return a!==b&&(${a.join("||")})`),N=a=>{const b=(a=M(a)).join(",");return C[b]||(C[b]=ea(a.map(c=>`a.${c}!==b.`+c)))},fa=(a,b)=>a===b?F:M(a).filter(c=>a[c]!==b[c]),O=a=>a?D[a.length]||(D[a.length]=ea(a.map((b,c)=>`a[${c}]!==b[${c}]`))):G,P=(a,b)=>{const c=e,d=b,l=c.v+1;g=c.u;n=1;c.B=J;if(c.s.H!==N){var k=G;try{k=(0,c.s.H)(c.s.o)}catch(R){}var p=
c.i;if(k){p&&(a=p,b=G);var q=k.length,h,t=c.l||(c.l=(new K(q)).fill(G));do{var m=t[--q];(h=k[q])&&h!==I?((f=!m)?((t[q]=e=m={s:h,N:h.o&&N(h.o),J:c,v:l,P:q,u:[],l:G,i:G,j:G,B:J}).u[0]={m:0,U:m},P(a,b),m.i&&a.insertBefore(m.j=m.i,b)):h.o&&m.N(m.s.o,h.o)&&((e=m).s=h,P(a,b)),m.j&&(b=m.j)):m&&(Q(m,a),t[q]=G)}while(0<q)}else if(c.l){for(q of c.l)q&&Q(q,a);c.l=G}p||(c.j=b!==d?b:G)}else{q=c.s.o.H;var v=c.s.o.M;m=c.s.o.o;t=v.length;let R=I;if(!(0>=S(t,t)+t)){h=T();k={};p=[];v=0<t&&ia(v,k,p);if(h.K){R=m&&h.N(m,
h.da);for(var E of h.ca)E in k||(Q(h.K[E],a),delete h.K[E]);h.da=m;h.ca=p}else h.K={},h.W=v?N(k[p[0]]):G,h.ca=p,h.N=(h.da=m)&&N(m);for(E=c.l=new K(t);0<t;){const H=p[--t];let w=h.K[H];if(f=!w)(h.K[H]=e=w={s:{H:q,o:aa({I:k[H]},m)},N:G,J:c,v:l,P:t,u:[],l:G,i:G,j:G,B:J}).u[0]={m:0,U:w},P(a,b),w.i&&a.insertBefore(w.j=w.i,b);else{const ha=ja(w);ha&&ha.nextSibling!==b&&ka(w,a,b);if(R||v&&h.W(k[H],w.s.o.I))(e=w).s.o=aa({I:k[H]},m),P(a,b)}(E[w.P=t]=w).j&&(b=w.j)}c.j=b!==d?b:G}}},Q=(a,b)=>{b&&a.i&&(b.removeChild(a.i),
b=G);if(a.l)for(const c of a.l)c&&Q(c,b);U(a.u);if(a.B){let c,d;(!(d=y[c=a.v])||0>(c=d.indexOf(a)))&&(!(d=z[c])||0>(c=d.indexOf(a)))||d.splice(c,1)}},U=a=>{let b,c=a.length;for(;1<c;)switch((b=a[--c]).m){case 1:b.O&&b.O(...b.h);break;case 2:b.h=F;break;case 3:la(b);break;case 4:U(b.u)}},ia=(a,b,c)=>{const d="object"===typeof a[0];for(const l of a)a=d?l.id:l,b[a]=l,c.push(a);return d},ja=a=>{if(a.i)return a.i;let b;a=(b=a.l)?b.length:0;let c,d;for(;0<a;)if((d=b[--a])&&(c=ja(d)))return c;return G},
ka=(a,b,c)=>{if(a.i)return b.insertBefore(a.i,c),a.i;if(a.j){let d=a.l.length;do a.l[--d]&&(c=ka(a.l[d],b,c));while(0<d)}return c},ma=a=>{for(;0!==a[0].m;){if(!a[0].V.G)return G;a[0].V.G=J;a=a[0].ba}return a[0].U},W=a=>(a=ma(a))&&!a.B&&(a.B=I,y[a.v]?y[a.v].push(a):y[a.v]=[a],x||V()),na=()=>{const a=ma(g);a&&(a.B=I,z[a.v]?z[a.v].push(a):z[a.v]=[a])},oa=(a,b)=>{if(n>=g.length)g[n]={m:1,A:O(b),h:b=b||F,O:a(...b)||G};else if(b){const c=g[n];c.A(c.h,b)&&(c.O&&c.O(...c.h),c.O=a(...(c.h=b))||G)}++n},pa=
a=>{if(n<g.length)return g[n++].g;const b=g,c=[a,d=>{c[0]!==d&&(c[0]=d,W(b))},()=>c[0]];g[n++]={m:0,g:c};return c},T=a=>(n<g.length?g[n++]:g[n++]={m:0,g:void 0===a?{}:a}).g,qa=(a,b)=>n>=g.length?(g[n++]={m:0,A:O(b),h:b=b||F,g:a(...b)}).g:b&&g[n].A(g[n].h,b)?g[n].g=a(...(g[n++].h=b)):g[n++].g,S=(a,b)=>(n<g.length?(b=g[n].g,g[n++].g=a):g[n++]={m:0,g:a},b),ra=(a,b)=>(a=setTimeout(()=>b(I),a),()=>clearTimeout(a)),la=a=>{for(const b of a.Y)U(a.L[b])},sa=(a,b,c)=>({$:c.aa,fa:a,Z:r,ea:f?r:r+b}),X=a=>{const b=
S(a,G);return b?fa(b,a):M(a)},Y=a=>{const b=e.i;if(a){for(const c of X(a))switch(c.charCodeAt(0)){case 70:b.className=M(a.F).filter(d=>a.F[d]).join(" ");continue;case 82:a.R(b);case 67:case 68:case 83:continue;default:b[c]=a[c]}if(a.D)for(const c of X(a.D))b.dataset[c]=a.D[c];if(a.S)for(const c of X(a.S))b.style[c]=a.S[c]}return b},Z=(a,b,c)=>({H:a,o:b?c?(b.C=c,b):b:c?{C:c}:G}),V=()=>{f=0>=r;r=da.now();u&&cancelAnimationFrame(u);x=I;u=0;for(var a;(a=y).length;){y=[];for(const b of a)if(b)for(e of b)if(e.B){if(e.i)P(G,
G);else{let c=G,d=e.j,l=e,k=e;for(;!(a=(l=l.J).i););do{let p=k.P;const {l:q}=k=k.J,h=q.length;for(;++p<h&&q[p]&&!(c=q[p].j););}while(!c&&k!==l);k=e;P(a,c);if(k.j!==d)for(;!(k=k.J).i;){d=G;for(const p of k.l)if(p&&(d=p.j))break;if(d===k.j)break;k.j=d}}f=J}}x=J;z.length&&(y=z,z=a,ta())},ta=()=>u||(u=requestAnimationFrame(V)),ua=a=>{let b=A[a];if(!b){const c=a.indexOf("[");A[a]=b=ba.createElement(0>c?a.substr(0):a.substr(0,c));if(0<c)for(const d of a.substring(c+1,a.length-1).split("]["))a=d.indexOf("="),
0<a?b[d.substr(0,a)]=d.substr(a+1):b[d]=I}return b},va=a=>{let b=B[a];if(!b){const c=ua(a);B[a]=b=d=>(f&&(e.i=c.cloneNode(I)),Y(d),d&&d.C||G)}return b};ca.lui={defer:()=>(x=I,ta()),defer_end:V,hook_assert:a=>{if(!a)throw A;},hook_async:(a,b,c)=>{let d;if((n<g.length?(d=g[n++],J):d=g[n++]={m:2,A:O(b),h:b||F,g:G})||b&&d.A(d.h,b)&&(d.h=b)){void 0!==c&&(d.g=c);const l=g;a(...d.h).then(k=>d.g!==k&&d.h===b&&(d.g=k,W(l)))}return d.g},hook_callback:(a,b)=>{const c=T();c.h=b;return c.ga||(c.ga=(...d)=>a(...c.h,...d))},hook_delay:a=>{const [b,c]=pa(J);oa(ra,[a,c]);return b},hook_dom:(a,b)=>(f&&(e.i=ua(a).cloneNode(I)),Y(b||G)),hook_effect:oa,hook_first:()=>
f,hook_map:(a,b,c)=>{let d=G,l=I;if(n<g.length)if((d=g[n]).T!==a)la(d),d=G;else if(!d.G||c&&d.A(d.h,c))d.h=c||F,d.G=I;else{if(b===d.M)return++n,d.g;l=J}const k=f,p=g,q=++n,h={},t=[],m=0<b.length&&ia(b,h,t);if(d){if(d.g=[],d.M!==b){d.M=b;for(const v of d.Y)v in h||(U(d.L[v]),delete d.L[v])}}else g[q-1]=d={m:3,A:O(c),h:c||F,g:[],G:I,T:a,W:m?N(b[0]):G,Y:[],L:{},M:b};for(const v of t){b=d.L[v];if(f=!b)d.L[v]=b=[{m:1,ba:p,V:d,X:G,g:G}];if(l||f||(m?d.W(h[v],b[0].X):h[v]!==b[0].X)){g=b;n=1;try{b[0].g=a(b[0].X=
h[v],...d.h)}catch(E){}}d.g.push(b[0].g)}f=k;g=p;n=q;d.Y=t;return d.g},hook_memo:qa,hook_object_changes:X,hook_prev:S,hook_reducer:a=>{if(n<g.length)return g[n++].g;const b=g,c=[(0,a[0])(G),(d,l)=>{d=(0,a[d])(c[0],l);c[0]!==d&&(c[0]=d,W(b))}];g[n++]={m:0,g:c};return c},hook_reducer_f:(a,b)=>{if(n<g.length)return g[n++].g;const c=g,d=[b?b():G,l=>{l=a(d[0],l);d[0]!==l&&(d[0]=l,W(c))}];g[n++]={m:0,g:d};return d},hook_rerender:na,hook_state:pa,hook_static:T,hook_sub:(a,b)=>{let c=G;if(n<g.length)if((c=
g[n]).T!==a)U(c.u),c=G;else if(!c.G||b&&c.A(c.h,b))b&&(c.h=b),c.G=I;else return++n,c.g;const d=f,l=g,k=n;if(f=!c)(g[n]=c={m:4,A:O(b),h:b||F,g:G,T:a,G:I,u:[]}).u[0]={m:2,ba:g,V:c};g=c.u;n=1;try{c.g=a(...c.h)}catch(p){}f=d;g=l;n=k+1;return c.g},hook_transition:(a,b)=>{const c=T({aa:a});a=qa(sa,[a,b,c]);return c.aa=a.ea<=r?a.fa:(na(),a.Z===r?a.$:a.$+(a.fa-a.$)*(r-a.Z)/(a.ea-a.Z))},init:a=>{let b;const c=ba.body;c.innerHTML="";(e={s:{H:()=>(Y((b=a())[0]),b[1]),o:G},N:G,J:G,v:0,P:0,u:[],l:G,i:c,j:c,B:I}).u[0]=
{m:0,U:e};y[0]=[e];V()},node:Z,node_dom:(a,b,c)=>Z(va(a),b,c),node_map:(a,b,c)=>Z(N,{H:a,M:b,o:c||G}),now:()=>r}}