import{S as e,i as n,s as t,H as r,j as s,m as o,o as a,G as l,v as i,r as c,w as u}from"../chunks/vendor-338e68ab.js";function f(e){let n,t;return n=new r({props:{columns:e[1],rows:e[0],iconAsc:"↑",iconDesc:"↓"}}),{c(){s(n.$$.fragment)},l(e){o(n.$$.fragment,e)},m(e,r){a(n,e,r),t=!0},p:l,i(e){t||(i(n.$$.fragment,e),t=!0)},o(e){c(n.$$.fragment,e),t=!1},d(e){u(n,e)}}}var h=function(e,n,t,r){return new(t||(t=Promise))((function(s,o){function a(e){try{i(r.next(e))}catch(n){o(n)}}function l(e){try{i(r.throw(e))}catch(n){o(n)}}function i(e){var n;e.done?s(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,l)}i((r=r.apply(e,n||[])).next())}))};const p=({fetch:e})=>h(void 0,void 0,void 0,(function*(){const n=yield e("/index.json");if(n.ok){const e=yield n.json();return{props:{repos:yield e.repos}}}const{message:t}=yield n.json();return{error:new Error(t)}}));function m(e,n,t){let{repos:r}=n;const s=r;return e.$$set=e=>{"repos"in e&&t(2,r=e.repos)},[s,[{key:"repo",title:"Repo",value:e=>e.full_name,renderValue:e=>`<a href="https://github.com/${e.full_name}">${e.full_name}</a>`,sortable:!0},{key:"github_workflows",title:"Github Actions",renderValue:e=>e.workflows.map((n=>`\n            <a href="https://github.com/${e.full_name}/actions/${n.path.replace(/\.github\//,"")}" >\n              <img\n                src="${n.badge_url}?branch=${e.default_branch}"\n                alt="Github Actions status for ${e.full_name}"\n              />\n            </a>\n            `)).join(" "),sortable:!1},{key:"circleci",title:"Circle CI",renderValue:e=>`<a href="https://circleci.com/gh/${e.full_name}">\n          <img\n            src="https://circleci.com/gh/${e.full_name}.svg?style=svg"\n            alt="CircleCI build status for ${e.full_name}"\n            onError="this.parentElement.href = '#'; this.src = 'images/circle-ci-no-builds.svg'"\n          />\n        </a>\n`,sortable:!1},{key:"last_push",title:"Last Push",value:e=>e.pushed_at,renderValue:e=>e.pushed_at,sortable:!0}],r]}export default class extends e{constructor(e){super(),n(this,e,m,f,t,{repos:2})}}export{p as load};
