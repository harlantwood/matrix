import{S as t,i as r,s as e,e as l,t as n,k as c,c as o,a as s,g as a,d as h,n as f,b as i,f as u,F as g,h as m,H as p,G as d}from"../chunks/vendor-1d562080.js";function v(t,r,e){const l=t.slice();return l[1]=r[e],l}function b(t,r,e){const l=t.slice();return l[4]=r[e],l}function _(t){let r,e,n,a,m,p;return{c(){r=l("a"),e=l("img"),m=c(),this.h()},l(t){r=o(t,"A",{href:!0});var l=s(r);e=o(l,"IMG",{src:!0,alt:!0}),m=f(l),l.forEach(h),this.h()},h(){e.src!==(n=t[4].badge_url+"?branch="+t[1].default_branch)&&i(e,"src",n),i(e,"alt",a="Github Actions status for "+t[1].full_name),i(r,"href",p="https://github.com/"+t[1].full_name+"/actions/"+t[4].path.replace(/\.github\//,""))},m(t,l){u(t,r,l),g(r,e),g(r,m)},p(t,l){1&l&&e.src!==(n=t[4].badge_url+"?branch="+t[1].default_branch)&&i(e,"src",n),1&l&&a!==(a="Github Actions status for "+t[1].full_name)&&i(e,"alt",a),1&l&&p!==(p="https://github.com/"+t[1].full_name+"/actions/"+t[4].path.replace(/\.github\//,""))&&i(r,"href",p)},d(t){t&&h(r)}}}function E(t){let r,e,d,v,E,y,T,w,A,C,G,x,I,j,k,H=t[1].full_name+"",R=t[1].workflows,D=[];for(let l=0;l<R.length;l+=1)D[l]=_(b(t,R,l));return{c(){r=l("tr"),e=l("td"),d=l("a"),v=n(H),y=c(),T=l("td");for(let t=0;t<D.length;t+=1)D[t].c();w=c(),A=l("td"),C=l("a"),G=l("img"),k=c(),this.h()},l(t){r=o(t,"TR",{});var l=s(r);e=o(l,"TD",{});var n=s(e);d=o(n,"A",{href:!0});var c=s(d);v=a(c,H),c.forEach(h),n.forEach(h),y=f(l),T=o(l,"TD",{});var i=s(T);for(let r=0;r<D.length;r+=1)D[r].l(i);i.forEach(h),w=f(l),A=o(l,"TD",{});var u=s(A);C=o(u,"A",{href:!0});var g=s(C);G=o(g,"IMG",{src:!0,alt:!0,onerror:!0}),g.forEach(h),u.forEach(h),k=f(l),l.forEach(h),this.h()},h(){i(d,"href",E="https://github.com/"+t[1].full_name),G.src!==(x="https://circleci.com/gh/"+t[1].full_name+".svg?style=svg")&&i(G,"src",x),i(G,"alt",I="CircleCI build status for "+t[1].full_name),i(G,"onerror","this.parentElement.href = 'https://circleci.com/add-projects'; this.src = 'images/circle-ci-no-builds.svg'"),i(C,"href",j="https://circleci.com/gh/"+t[1].full_name)},m(t,l){u(t,r,l),g(r,e),g(e,d),g(d,v),g(r,y),g(r,T);for(let r=0;r<D.length;r+=1)D[r].m(T,null);g(r,w),g(r,A),g(A,C),g(C,G),g(r,k)},p(t,r){if(1&r&&H!==(H=t[1].full_name+"")&&m(v,H),1&r&&E!==(E="https://github.com/"+t[1].full_name)&&i(d,"href",E),1&r){let e;for(R=t[1].workflows,e=0;e<R.length;e+=1){const l=b(t,R,e);D[e]?D[e].p(l,r):(D[e]=_(l),D[e].c(),D[e].m(T,null))}for(;e<D.length;e+=1)D[e].d(1);D.length=R.length}1&r&&G.src!==(x="https://circleci.com/gh/"+t[1].full_name+".svg?style=svg")&&i(G,"src",x),1&r&&I!==(I="CircleCI build status for "+t[1].full_name)&&i(G,"alt",I),1&r&&j!==(j="https://circleci.com/gh/"+t[1].full_name)&&i(C,"href",j)},d(t){t&&h(r),p(D,t)}}}function y(t){let r,e,i,m,b,_,y,T,w,A,C,G=t[0],x=[];for(let l=0;l<G.length;l+=1)x[l]=E(v(t,G,l));return{c(){r=l("table"),e=l("tr"),i=l("th"),m=n("Repo"),b=c(),_=l("th"),y=n("Github Actions"),T=c(),w=l("th"),A=n("Circle CI"),C=c();for(let t=0;t<x.length;t+=1)x[t].c()},l(t){r=o(t,"TABLE",{});var l=s(r);e=o(l,"TR",{});var n=s(e);i=o(n,"TH",{});var c=s(i);m=a(c,"Repo"),c.forEach(h),b=f(n),_=o(n,"TH",{});var u=s(_);y=a(u,"Github Actions"),u.forEach(h),T=f(n),w=o(n,"TH",{});var g=s(w);A=a(g,"Circle CI"),g.forEach(h),n.forEach(h),C=f(l);for(let r=0;r<x.length;r+=1)x[r].l(l);l.forEach(h)},m(t,l){u(t,r,l),g(r,e),g(e,i),g(i,m),g(e,b),g(e,_),g(_,y),g(e,T),g(e,w),g(w,A),g(r,C);for(let e=0;e<x.length;e+=1)x[e].m(r,null)},p(t,[e]){if(1&e){let l;for(G=t[0],l=0;l<G.length;l+=1){const n=v(t,G,l);x[l]?x[l].p(n,e):(x[l]=E(n),x[l].c(),x[l].m(r,null))}for(;l<x.length;l+=1)x[l].d(1);x.length=G.length}},i:d,o:d,d(t){t&&h(r),p(x,t)}}}var T=function(t,r,e,l){return new(e||(e=Promise))((function(n,c){function o(t){try{a(l.next(t))}catch(r){c(r)}}function s(t){try{a(l.throw(t))}catch(r){c(r)}}function a(t){var r;t.done?n(t.value):(r=t.value,r instanceof e?r:new e((function(t){t(r)}))).then(o,s)}a((l=l.apply(t,r||[])).next())}))};const w=({fetch:t})=>T(void 0,void 0,void 0,(function*(){const r=yield t("/index.json");if(r.ok){const t=yield r.json();return{props:{repos:yield t.repos}}}const{message:e}=yield r.json();return{error:new Error(e)}}));function A(t,r,e){let{repos:l}=r;return t.$$set=t=>{"repos"in t&&e(0,l=t.repos)},[l]}export default class extends t{constructor(t){super(),r(this,t,A,y,e,{repos:0})}}export{w as load};
