import{S as t,i as a,s as o,e as s,t as n,k as c,c as e,a as r,g as i,n as l,d as u,f,F as k,N as C,h as m,G as p}from"../../../chunks/vendor-41ca1ff5.js";function d(t){let a,o,d,h,B,w,_,v,x=t[0].first_name+"",y=t[0].last_name+"";return{c(){a=s("button"),o=n(t[2]),d=c(),h=n(x),B=c(),w=n(y)},l(s){a=e(s,"BUTTON",{});var n=r(a);o=i(n,t[2]),d=l(n),h=i(n,x),B=l(n),w=i(n,y),n.forEach(u)},m(s,n){f(s,a,n),k(a,o),k(a,d),k(a,h),k(a,B),k(a,w),_||(v=C(a,"click",t[4]),_=!0)},p(t,[a]){1&a&&x!==(x=t[0].first_name+"")&&m(h,x),1&a&&y!==(y=t[0].last_name+"")&&m(w,y)},i:p,o:p,d(t){t&&u(a),_=!1,v()}}}function h(t,a,o){let{row:s}=a,{onContactButtonClick:n}=a,{col:c}=a,e=c.key.charAt(0).toUpperCase()+c.key.slice(1);return t.$$set=t=>{"row"in t&&o(0,s=t.row),"onContactButtonClick"in t&&o(1,n=t.onContactButtonClick),"col"in t&&o(3,c=t.col)},[s,n,e,c,()=>n(s)]}export default class extends t{constructor(t){super(),a(this,t,h,d,o,{row:0,onContactButtonClick:1,col:3})}}
