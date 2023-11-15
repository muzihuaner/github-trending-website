(function(){"use strict";var o={4161:function(o,n,e){var t=e(9242),i=e(3396);const l={id:"app"},a=(0,i._)("head",null,[(0,i._)("title",null,"快点开源软件趋势")],-1),r=(0,i._)("div",{class:"nav-left"},[(0,i._)("h1",null,"快点开源软件趋势")],-1),u={class:"nav-right"},p=(0,i._)("li",null,[(0,i._)("a",{class:"nav-link",href:"#TrendingRepos"},"热门仓库")],-1),s=(0,i._)("li",null,[(0,i._)("a",{class:"nav-link",href:"#HotCollections"},"热门收藏")],-1),c=(0,i._)("footer",null,[(0,i._)("p",null,"© 2023 HuanGeTech")],-1);function v(o,n,e,t,v,d){const h=(0,i.up)("router-link"),_=(0,i.up)("TrendingRepos"),f=(0,i.up)("HotCollections");return(0,i.wg)(),(0,i.iD)("div",l,[a,(0,i._)("header",null,[r,(0,i._)("nav",u,[(0,i._)("ul",null,[(0,i._)("li",null,[(0,i.Wm)(h,{class:"nav-link",to:"/"},{default:(0,i.w5)((()=>[(0,i.Uk)("首页")])),_:1})]),p,s])])]),(0,i._)("main",null,[(0,i.Wm)(_,{id:"TrendingRepos"}),(0,i.Wm)(f,{id:"HotCollections"})]),c])}var d=e(7139);const h=(0,i._)("h1",null,"🔥 热门仓库",-1),_=(0,i._)("p",null,"我们将所有仓库根据得分进行排名。总得分 = 星标得分 + 分支得分 + 基础得分。",-1),f=(0,i._)("label",null,"时间段：",-1),g=(0,i._)("option",{value:"past_24_hours"},"过去一天",-1),m=(0,i._)("option",{value:"past_week"},"过去一周",-1),w=(0,i._)("option",{value:"past_month"},"过去一个月",-1),b=(0,i._)("option",{value:"past_3_months"},"过去三个月",-1),y=[g,m,w,b],C=(0,i._)("label",null,"语言：",-1),S=(0,i.uE)('<option value="All">所有</option><option value="JavaScript">JavaScript</option><option value="Java">Java</option><option value="Python">Python</option><option value="PHP">PHP</option><option value="C++">C++</option><option value="C#">C#</option><option value="TypeScript">TypeScript</option><option value="Shell">Shell</option><option value="C">C</option><option value="Ruby">Ruby</option><option value="Rust">Rust</option><option value="Go">Go</option><option value="Kotlin">Kotlin</option><option value="HCL">HCL</option><option value="PowerShell">PowerShell</option><option value="CMake">CMake</option><option value="Groovy">Groovy</option><option value="PLpgSQL">PLpgSQL</option><option value="TSQL">TSQL</option><option value="Dart">Dart</option><option value="Swift">Swift</option><option value="HTML">HTML</option><option value="CSS">CSS</option><option value="Elixir">Elixir</option><option value="Haskell">Haskell</option><option value="Solidity">Solidity</option><option value="Assembly">Assembly</option><option value="R">R</option><option value="Scala">Scala</option><option value="Julia">Julia</option><option value="Lua">Lua</option><option value="Clojure">Clojure</option><option value="Erlang">Erlang</option><option value="Common Lisp">Common Lisp</option><option value="Emacs Lisp">Emacs Lisp</option><option value="OCaml">OCaml</option><option value="MATLAB">MATLAB</option><option value="Objective-C">Objective-C</option><option value="Perl">Perl</option><option value="Fortran">Fortran</option>',41),k=[S],T={class:"card-container"},L=["href"],P={class:"language"};function R(o,n,e,l,a,r){return(0,i.wg)(),(0,i.iD)("div",null,[h,_,(0,i._)("div",null,[f,(0,i.wy)((0,i._)("select",{"onUpdate:modelValue":n[0]||(n[0]=o=>a.selectedPeriod=o),onChange:n[1]||(n[1]=(...o)=>r.fetchTrendingRepos&&r.fetchTrendingRepos(...o))},y,544),[[t.bM,a.selectedPeriod]])]),(0,i._)("div",null,[C,(0,i.wy)((0,i._)("select",{"onUpdate:modelValue":n[2]||(n[2]=o=>a.selectedLanguage=o),onChange:n[3]||(n[3]=(...o)=>r.fetchTrendingRepos&&r.fetchTrendingRepos(...o))},k,544),[[t.bM,a.selectedLanguage]])]),(0,i._)("div",T,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(a.trendingRepos,((o,n)=>((0,i.wg)(),(0,i.iD)("div",{key:o.repo_id,class:"card"},[(0,i._)("h3",null,"# "+(0,d.zw)(n+1),1),(0,i._)("a",{href:"https://github.com/"+o.repo_name,class:"link"},[(0,i._)("h2",null,(0,d.zw)(o.repo_name),1)],8,L),(0,i._)("p",P,(0,d.zw)(o.primary_language),1),(0,i._)("p",null,"描述："+(0,d.zw)(o.description),1),(0,i._)("p",null,"Stars: "+(0,d.zw)(o.stars),1),(0,i._)("p",null,"Forks: "+(0,d.zw)(o.forks),1),(0,i._)("p",null,"Pull Requests: "+(0,d.zw)(o.pull_requests),1)])))),128))])])}var H=e(1076),O={name:"TrendingRepos",data(){return{selectedPeriod:"past_month",selectedLanguage:"All",trendingRepos:[]}},mounted(){this.fetchTrendingRepos()},methods:{fetchTrendingRepos(){const o=`https://api.ossinsight.io/v1/trends/repos/?period=${this.selectedPeriod}&language=${this.selectedLanguage}`;H.Z.get(o).then((o=>{this.trendingRepos=o.data.data.rows})).catch((o=>{console.error(o)}))}}},j=e(89);const D=(0,j.Z)(O,[["render",R]]);var M=D;const z=(0,i._)("h1",null,"📖 热门收藏",-1),A=(0,i._)("p",null,"对于技术领域的每月和历史排名以及趋势进行深入分析，借助精心挑选的仓库列表提供排名。",-1),E={class:"card-container"},x={style:{color:"black"}},J=["href"];function G(o,n,e,t,l,a){return(0,i.wg)(),(0,i.iD)("div",null,[z,A,(0,i._)("div",E,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(l.collections,(o=>((0,i.wg)(),(0,i.iD)("div",{key:o.name,class:"card"},[(0,i._)("h2",x,(0,d.zw)(o.name),1),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(o.items,(o=>((0,i.wg)(),(0,i.iD)(i.HY,{key:o.id},[(0,i._)("p",null,"# "+(0,d.zw)(o.repo_current_period_rank),1),(0,i._)("a",{href:"https://github.com/"+o.repo_name,class:"link"},[(0,i._)("h2",null,(0,d.zw)(o.repo_name),1)],8,J)],64)))),128))])))),128))])])}e(560);var K={name:"HotCollections",data(){return{collections:[]}},mounted(){this.fetchCollections()},methods:{fetchCollections(){H.Z.get("https://api.ossinsight.io/v1/collections/hot/").then((o=>{const n=o.data.data.rows.sort(((o,n)=>o.repo_current_period_rank-n.repo_current_period_rank)),e={};n.forEach((o=>{e[o.name]?e[o.name].items.push(o):e[o.name]={name:o.name,items:[o]}})),this.collections=Object.values(e)})).catch((o=>{console.error(o)}))}}};const Z=(0,j.Z)(K,[["render",G]]);var F=Z,Q={name:"App",components:{TrendingRepos:M,HotCollections:F}};const Y=(0,j.Z)(Q,[["render",v]]);var U=Y;(0,t.ri)(U).mount("#app")}},n={};function e(t){var i=n[t];if(void 0!==i)return i.exports;var l=n[t]={exports:{}};return o[t].call(l.exports,l,l.exports,e),l.exports}e.m=o,function(){var o=[];e.O=function(n,t,i,l){if(!t){var a=1/0;for(s=0;s<o.length;s++){t=o[s][0],i=o[s][1],l=o[s][2];for(var r=!0,u=0;u<t.length;u++)(!1&l||a>=l)&&Object.keys(e.O).every((function(o){return e.O[o](t[u])}))?t.splice(u--,1):(r=!1,l<a&&(a=l));if(r){o.splice(s--,1);var p=i();void 0!==p&&(n=p)}}return n}l=l||0;for(var s=o.length;s>0&&o[s-1][2]>l;s--)o[s]=o[s-1];o[s]=[t,i,l]}}(),function(){e.n=function(o){var n=o&&o.__esModule?function(){return o["default"]}:function(){return o};return e.d(n,{a:n}),n}}(),function(){e.d=function(o,n){for(var t in n)e.o(n,t)&&!e.o(o,t)&&Object.defineProperty(o,t,{enumerable:!0,get:n[t]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(o){if("object"===typeof window)return window}}()}(),function(){e.o=function(o,n){return Object.prototype.hasOwnProperty.call(o,n)}}(),function(){e.r=function(o){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})}}(),function(){var o={143:0};e.O.j=function(n){return 0===o[n]};var n=function(n,t){var i,l,a=t[0],r=t[1],u=t[2],p=0;if(a.some((function(n){return 0!==o[n]}))){for(i in r)e.o(r,i)&&(e.m[i]=r[i]);if(u)var s=u(e)}for(n&&n(t);p<a.length;p++)l=a[p],e.o(o,l)&&o[l]&&o[l][0](),o[l]=0;return e.O(s)},t=self["webpackChunkgithub_trending_website"]=self["webpackChunkgithub_trending_website"]||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))}();var t=e.O(void 0,[998],(function(){return e(4161)}));t=e.O(t)})();
//# sourceMappingURL=app.2e128675.js.map