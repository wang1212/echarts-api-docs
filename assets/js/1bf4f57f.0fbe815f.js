"use strict";(self.webpackChunkecharts_api_docs=self.webpackChunkecharts_api_docs||[]).push([[6025],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),f=p(r),d=a,h=f["".concat(s,".").concat(d)]||f[d]||u[d]||o;return r?n.createElement(h,c(c({ref:t},l),{},{components:r})):n.createElement(h,c({ref:t},l))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var p=2;p<o;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2267:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={title:"\u6982\u8ff0",description:"About ECharts",sidebar_position:1},c="ECharts",i={unversionedId:"echarts-reference/overview",id:"echarts-reference/overview",title:"\u6982\u8ff0",description:"About ECharts",source:"@site/docs/1-echarts-reference/overview.md",sourceDirName:"1-echarts-reference",slug:"/echarts-reference/overview",permalink:"/echarts-api-docs/docs/echarts-reference/overview",draft:!1,editUrl:"https://github.com/wang1212/echarts-api-docs/tree/main/docs/1-echarts-reference/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\u6982\u8ff0",description:"About ECharts",sidebar_position:1},sidebar:"echartsSidebar",next:{title:"ECharts APIs",permalink:"/echarts-api-docs/docs/category/echarts-apis"}},s={},p=[{value:"\u76f8\u5173\u8d44\u6599",id:"\u76f8\u5173\u8d44\u6599",level:2}],l={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"echarts"},"ECharts"),(0,a.kt)("p",null,"ECharts \u662f\u4e00\u4e2a JavaScript \u53ef\u89c6\u5316\u56fe\u8868\u5e93\uff0c\u5176\u63d0\u4f9b\u4e86\u4e30\u5bcc\u7684\u56fe\u8868\u80fd\u529b\uff0c\u5b98\u65b9\u6587\u6863\u76ee\u524d\u8986\u76d6\u7684\u90fd\u662f\u63a8\u8350\u4f7f\u7528\u7684 APIs\uff0c\u800c\u66b4\u9732\u51fa\u6765\u7684\u5f88\u591a\u6709\u7528\u7684 APIs \u53ef\u4ee5\u5e2e\u52a9\u6211\u4eec\u66f4\u4fbf\u6377\u7684\u505a\u4e00\u4e9b\u5b9a\u5236\u5316\u7684\u529f\u80fd\uff0c\u5bf9\u4e8e\u8fd9\u7c7b APIs \u5927\u90e8\u5206\u4e5f\u662f\u53ef\u4ee5\u5b89\u5168\u4f7f\u7528\u7684\uff0c\u4f46\u76ee\u524d\u8fd8\u6ca1\u6709\u5728\u5b98\u65b9\u6587\u6863\u4e2d\u8bb0\u5f55\u3002"),(0,a.kt)("p",null,"\u56e0\u6b64\uff0c\u8fd9\u91cc",(0,a.kt)("strong",{parentName:"p"},"\u4e3b\u8981\u8bb0\u5f55\u4e00\u4e9b\u5b98\u65b9\u6587\u6863\u4e2d\u5c1a\u672a\u8bb0\u5f55\u4f46\u57fa\u672c\u786e\u8ba4\u53ef\u4ee5\u5b89\u5168\u4f7f\u7528\u7684 APIs"),"\u3002"),(0,a.kt)("h2",{id:"\u76f8\u5173\u8d44\u6599"},"\u76f8\u5173\u8d44\u6599"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://echarts.apache.org/"},"\u5b98\u65b9\u6587\u6863")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/ecomfe/awesome-echarts"},"\u793e\u533a\u8d44\u6e90"))))}u.isMDXComponent=!0}}]);