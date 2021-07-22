import{S as e,i as n,s as t,H as o,j as r,m as s,o as a,G as i,x as l,u as c,v as u,I as h,J as A}from"../chunks/vendor-9d42eb34.js";function f(e){let n,t;return n=new o({props:{columns:e[1],rows:e[0],iconAsc:"↑",iconDesc:"↓"}}),{c(){r(n.$$.fragment)},l(e){s(n.$$.fragment,e)},m(e,o){a(n,e,o),t=!0},p:i,i(e){t||(l(n.$$.fragment,e),t=!0)},o(e){c(n.$$.fragment,e),t=!1},d(e){u(n,e)}}}var p=function(e,n,t,o){return new(t||(t=Promise))((function(r,s){function a(e){try{l(o.next(e))}catch(n){s(n)}}function i(e){try{l(o.throw(e))}catch(n){s(n)}}function l(e){var n;e.done?r(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,i)}l((o=o.apply(e,n||[])).next())}))};const m=({fetch:e})=>p(void 0,void 0,void 0,(function*(){const n=yield e("/repos.json");if(n.ok){const e=yield n.json();return{props:{repos:yield e.repos}}}const{message:t}=yield n.json();return{error:new Error(t)}}));function d(e,n,t){h.extend(A);let{repos:o}=n;const r=o,s=[{key:"repo",title:"Repo",value:e=>e.full_name,renderValue:e=>`<a href="https://github.com/${e.full_name}">${e.full_name}</a>`,sortable:!0},{key:"github_workflows",title:"Github Actions",renderValue:e=>e.workflows.map((n=>`\n            <a href="https://github.com/${e.full_name}/actions/${n.path.replace(/\.github\//,"")}" >\n              <img\n                src="${n.badge_url}?branch=${e.default_branch}"\n                alt="Github Actions status for ${e.full_name}"\n              />\n            </a>\n            `)).join(" "),sortable:!1},{key:"circleci",title:"Circle CI",renderValue:e=>`<a href="https://circleci.com/gh/${e.full_name}">\n          <img\n            src="https://circleci.com/gh/${e.full_name}.svg?style=svg"\n            alt="CircleCI build status for ${e.full_name}"\n            onError="this.parentElement.href = '#'; this.src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAAApJREFUCNdjYAAAAAIAAeIhvDMAAAAASUVORK5CYII='"\n          />\n        </a>`,sortable:!1},{key:"last_push",title:"Last Push",value:e=>e.pushed_at,renderValue:e=>{const n=h(e.pushed_at).fromNow();return`<div title="${e.pushed_at}">${n}</div>`},sortable:!0},{key:"hc_version",title:"Holochain Version",value:e=>e.nix_holochain_version_date||"",renderValue:e=>{if(!e.nix_holochain_version)return"";const n=h(e.nix_holochain_version_date).fromNow(),t=`https://github.com/holochain/holochain/commit/${e.nix_holochain_version}`,o=e.nix_holochain_version.slice(0,7);return`<span title="${e.pushed_at}">${n}</span> <a href="${t}">(${o})</a>`},sortable:!0}];return e.$$set=e=>{"repos"in e&&t(2,o=e.repos)},[r,s,o]}export default class extends e{constructor(e){super(),n(this,e,d,f,t,{repos:2})}}export{m as load};