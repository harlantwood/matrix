import{S as e,i as a,s as t,I as r,j as s,m as l,o as n,G as o,v as i,r as m,w as u,J as d}from"../../chunks/vendor-f75b1180.js";function f(e){let a,t;return a=new r({props:{columns:e[0],rows:e[1]}}),{c(){s(a.$$.fragment)},l(e){l(a.$$.fragment,e)},m(e,r){n(a,e,r),t=!0},p:o,i(e){t||(i(a.$$.fragment,e),t=!0)},o(e){m(a.$$.fragment,e),t=!1},d(e){u(a,e)}}}function c(e){d.seed(5);return[[{key:"id",title:"ID",value:e=>e.id,sortable:!1,filterOptions:e=>{let a={};return e.forEach((e=>{let t=Math.floor(e.id/10);void 0===a[t]&&(a[t]={name:`${10*t} to ${10*(t+1)}`,value:t})})),a=Object.entries(a).sort().reduce(((e,[a,t])=>(e[a]=t,e)),{}),Object.values(a)},filterValue:e=>Math.floor(e.id/10),headerClass:"text-left"},{key:"first_name",title:"FIRST NAME",value:e=>e.first_name,sortable:!0,filterOptions:e=>{let a={};return e.forEach((e=>{let t=e.first_name.charAt(0);void 0===a[t]&&(a[t]={name:`${t.toUpperCase()}`,value:t.toLowerCase()})})),a=Object.entries(a).sort().reduce(((e,[a,t])=>(e[a]=t,e)),{}),Object.values(a)},filterValue:e=>e.first_name.charAt(0).toLowerCase()},{key:"last_name",title:"LAST NAME",value:e=>e.last_name,sortable:!0,filterOptions:e=>{let a={};return e.forEach((e=>{let t=e.last_name.charAt(0);void 0===a[t]&&(a[t]={name:`${t.toUpperCase()}`,value:t.toLowerCase()})})),a=Object.entries(a).sort().reduce(((e,[a,t])=>(e[a]=t,e)),{}),Object.values(a)},filterValue:e=>e.last_name.charAt(0).toLowerCase()},{key:"email",title:"EMAIL",value:e=>e.email,sortable:!0,class:"text-center"},{key:"gender",title:"GENDER",value:e=>e.gender,renderValue:e=>{const a=[`g_${e.gender.toLowerCase()}`];let t="female"===e.gender.toLowerCase()?"&female;":"";return t="male"===e.gender.toLowerCase()?"&male;":t,`<span class="${a.join(" ")}">${t} ${e.gender}</span>`},sortable:!0,filterOptions:["Male","Female"]},{key:"ip_address",title:"IP ADDRESS",value:e=>e.ip_address,sortable:!0}],Array(50).fill("").map(((e,a)=>{let t={id:a,first_name:d.name.firstName(),last_name:d.name.lastName(),gender:d.random.number(1)?"Female":"Male",ip_address:"192.168."+d.random.number(128)+"."+d.random.number(255)};return t.email=t.first_name[0].toLowerCase()+t.last_name.toLowerCase()+"@zipit.org.ca",t}))]}export default class extends e{constructor(e){super(),a(this,e,c,f,t,{})}}
