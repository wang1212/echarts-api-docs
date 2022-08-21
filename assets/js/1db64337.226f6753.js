"use strict";(self.webpackChunkecharts_api_docs=self.webpackChunkecharts_api_docs||[]).push([[372],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=c(r),h=a,d=u["".concat(s,".").concat(h)]||u[h]||m[h]||o;return r?n.createElement(d,p(p({ref:t},l),{},{components:r})):n.createElement(d,p({ref:t},l))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var c=2;c<o;c++)p[c]=r[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},6777:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={title:"\u9879\u76ee\u6982\u8ff0",sidebar_position:1},p="\u6982\u8ff0",i={unversionedId:"overview",id:"overview",title:"\u9879\u76ee\u6982\u8ff0",description:"\u8be5\u9879\u76ee\u6587\u6863\u7684\u5185\u5bb9\u4e3b\u8981\u5305\u542b\u4e00\u4e9b ECharts \u5b98\u65b9\u6587\u6863\u548c ZRender \u5b98\u65b9\u6587\u6863\u4e2d\u6ca1\u6709\u63d0\u53ca\u7684 APIs\uff08\u5927\u90e8\u5206\u5e94\u8be5\u662f\u5b89\u5168\u7684\uff09\uff0c\u5e76\u4f1a\u9644\u5e26\u4e00\u4e9b\u5229\u7528\u8fd9\u4e9b APIs \u5b9e\u73b0\u4e00\u4e9b ECharts \u5b98\u65b9\u4e0d\u5177\u5907\u7684\u529f\u80fd\u7684\u793a\u4f8b\u4ee3\u7801\u3002",source:"@site/docs/overview.md",sourceDirName:".",slug:"/overview",permalink:"/echarts-api-docs/docs/overview",draft:!1,editUrl:"https://github.com/wang1212/echarts-api-docs/tree/main/docs/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\u9879\u76ee\u6982\u8ff0",sidebar_position:1}},s={},c=[{value:"\u4e3a\u4ec0\u4e48\u5b58\u5728\uff1f",id:"\u4e3a\u4ec0\u4e48\u5b58\u5728",level:2},{value:"\u76ee\u7684",id:"\u76ee\u7684",level:2},{value:"\u7248\u6743\u8bb8\u53ef",id:"\u7248\u6743\u8bb8\u53ef",level:2}],l={toc:c};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,a.kt)("p",null,"\u8be5\u9879\u76ee\u6587\u6863\u7684\u5185\u5bb9\u4e3b\u8981\u5305\u542b\u4e00\u4e9b ",(0,a.kt)("a",{parentName:"p",href:"https://echarts.apache.org/"},"ECharts \u5b98\u65b9\u6587\u6863"),"\u548c ",(0,a.kt)("a",{parentName:"p",href:"https://ecomfe.github.io/zrender-doc/public/"},"ZRender \u5b98\u65b9\u6587\u6863"),"\u4e2d\u6ca1\u6709\u63d0\u53ca\u7684 APIs\uff08\u5927\u90e8\u5206\u5e94\u8be5\u662f",(0,a.kt)("strong",{parentName:"p"},"\u5b89\u5168\u7684"),"\uff09\uff0c\u5e76\u4f1a\u9644\u5e26\u4e00\u4e9b\u5229\u7528\u8fd9\u4e9b APIs \u5b9e\u73b0\u4e00\u4e9b ",(0,a.kt)("strong",{parentName:"p"},"ECharts \u5b98\u65b9\u4e0d\u5177\u5907\u7684\u529f\u80fd"),"\u7684\u793a\u4f8b\u4ee3\u7801\u3002"),(0,a.kt)("admonition",{title:"\u5982\u4f55\u786e\u8ba4\u4e00\u4e2a API \u662f\u5426\u53ef\u4ee5\u5b89\u5168\u4f7f\u7528\uff1f",type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"\u8981\u786e\u8ba4\u4e00\u4e2a",(0,a.kt)("strong",{parentName:"p"},"\u672a\u5728\u5b98\u65b9\u6587\u6863\u4e2d\u63d0\u53ca"),"\u7684 API \u662f\u5426\u53ef\u4ee5",(0,a.kt)("strong",{parentName:"p"},"\u5b89\u5168\u4f7f\u7528"),"\uff0c\u53ef\u4ee5\u901a\u8fc7\u5728",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/echarts/issues"},"\u5b98\u65b9\u4ed3\u5e93\u4e2d\u63d0 Issues")," \u8be2\u95ee\u6838\u5fc3\u7ef4\u62a4\u4eba\u5458\uff08\u4f46\u901a\u5e38\u6548\u7387\u5f88\u4f4e\uff09\uff0c\u5176\u6b21\u53ef\u4ee5\u901a\u8fc7\u5206\u6790\u6e90\u7801\u5f97\u5230\u4e00\u4e2a\u5927\u81f4\u7684\u7ed3\u8bba\uff08\u4f8b\u5982\u4e00\u4e9b\u4fee\u9970\u7b26 ",(0,a.kt)("inlineCode",{parentName:"p"},"private"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"public")," \u7b49\u7b49\uff0c\u4ee5\u53ca\u8be5 API \u5728\u6e90\u7801\u4e2d\u88ab\u5f15\u7528\u7684\u573a\u666f\u548c\u60c5\u51b5\uff09\u3002\u4e00\u822c\u6765\u8bf4\uff0c\u4e3a\u4e86\u907f\u514d\u5916\u90e8\u4ee3\u7801\u4e0d\u517c\u5bb9\u7684\u60c5\u51b5\u51fa\u73b0\uff0c\u56fa\u5b9a\u4f9d\u8d56\uff08ECharts\uff09\u7684\u7248\u672c\u662f\u4e00\u4e2a\u8f83\u597d\u7684\u65b9\u6848\u3002")),(0,a.kt)("h2",{id:"\u4e3a\u4ec0\u4e48\u5b58\u5728"},"\u4e3a\u4ec0\u4e48\u5b58\u5728\uff1f"),(0,a.kt)("p",null,"Apache ECharts \u662f\u4e00\u4e2a\u57fa\u4e8e JavaScript \u7684\u5f00\u6e90\u53ef\u89c6\u5316\u56fe\u8868\u5e93\uff0c\u53ef\u514d\u8d39\u7528\u4e8e\u5546\u4e1a\u7528\u9014\uff08\u57fa\u4e8e ",(0,a.kt)("a",{parentName:"p",href:"https://www.apache.org/licenses/LICENSE-2.0"},"Apache License 2.0")," \u5f00\u6e90\uff09\uff0c\u5176\u63d0\u4f9b\u7684\u4e30\u5bcc\u7684\u56fe\u8868\u80fd\u529b\u4e3a\u5927\u90e8\u5206\u6570\u636e\u53ef\u89c6\u5316\u573a\u666f\u63d0\u4f9b\u4e86\u5f00\u7bb1\u5373\u7528\u7684\u65b9\u6848\u3002\u4e3a\u4e86\u8986\u76d6\u66f4\u591a\u7684\u6570\u636e\u53ef\u89c6\u5316\u573a\u666f\uff0c\u5f00\u53d1\u8005\u9700\u8981\u57fa\u4e8e ECharts \u7684\u80fd\u529b\u8fdb\u884c",(0,a.kt)("em",{parentName:"p"},"\u5b9a\u5236\u5316\u5f00\u53d1"),"\uff0c\u4ee5\u53ca\u53bb",(0,a.kt)("em",{parentName:"p"},"\u6269\u5c55 ECharts \u7684\u80fd\u529b"),"\uff0c\u9274\u4e8e ECharts \u81ea\u8eab\u7684\u8bbe\u8ba1\u5177\u5907\u5f88\u5f3a\u7684\u6269\u5c55\u80fd\u529b\uff08\u89c1 ",(0,a.kt)("inlineCode",{parentName:"p"},"use")," API\uff09\uff0c\u4f46\u662f\u5b98\u65b9\u6587\u6863\u5374\u9c9c\u6709\u63d0\u53ca\u5927\u91cf\u7684",(0,a.kt)("strong",{parentName:"p"},"\u5185\u90e8 API"),"\uff0c\u6240\u4ee5\u672c\u9879\u76ee\u6587\u6863\u7684\u4e3b\u8981\u5185\u5bb9\u5219\u662f\u8bb0\u5f55\u8fd9\u4e9b\u5185\u90e8 API \u4ee5\u5229\u7528\u5176\u6269\u5c55 ECharts\u3002"),(0,a.kt)("p",null,"\u5176\u6b21\uff0cECharts \u5e95\u5c42\u4f9d\u8d56\u7684\u8f7b\u91cf\u7ea7\u4e8c\u7ef4\u7ed8\u5236\u5f15\u64ce ",(0,a.kt)("a",{parentName:"p",href:"https://ecomfe.github.io/zrender-doc/public/"},"ZRender")," \u662f\u6df1\u5165\u4f7f\u7528 ECharts \u5fc5\u8981\u4e86\u89e3\u7684\u4e1c\u897f\u3002\u53e6\u4e00\u65b9\u9762\uff0c\u8131\u79bb ECharts \u4e4b\u5916\uff0cZRender \u4e5f\u4e3a\u6570\u636e\u53ef\u89c6\u5316\u5f00\u53d1\u63d0\u4f9b\u4e86\u4e00\u4e2a\u5f88\u597d\u7684\u7ed8\u5236\u5f15\u64ce\u5de5\u5177\u5e93\u3002\u7531\u4e8e ZRender \u4e3b\u8981\u662f\u4e3a\u4e86\u652f\u6301 ECharts \u8fdb\u884c\u5f00\u53d1\uff0c\u4e14\u8f83\u4e3a\u5e95\u5c42\uff0c\u5bf9\u4e8e\u5f88\u591a\u4f7f\u7528 ECharts \u7684\u5f00\u53d1\u8005\u6765\u8bf4\u4e0d\u9700\u8981\u76f4\u63a5\u63a5\u89e6\uff0c\u5b98\u65b9\u6587\u6863\u4e5f\u56e0\u6b64\u66f4\u65b0\u8f83\u6162\uff0c\u6240\u4ee5\u672c\u9879\u76ee\u6587\u6863\u7684\u53e6\u4e00\u90e8\u5206\u5185\u5bb9\u5219\u662f\u8bb0\u5f55 ",(0,a.kt)("strong",{parentName:"p"},"ZRender \u5b98\u65b9\u6587\u6863\u4e2d\u6ca1\u6709\u53ca\u65f6\u66f4\u65b0\u7684 API"),"\u3002"),(0,a.kt)("h2",{id:"\u76ee\u7684"},"\u76ee\u7684"),(0,a.kt)("p",null,"\u9996\u5148\uff0c\u8be5\u6587\u6863\u9879\u76ee\u662f\u4e3a\u4e86\u7ed9\u57fa\u4e8e ECharts \u505a\u5b9a\u5236\u5316\u5f00\u53d1\u548c\u4f7f\u7528 ZRender \u7684\u5f00\u53d1\u8005\u63d0\u4f9b\u4e00\u4e2a\u53c2\u8003\u3002\u5176\u6b21\uff0c\u5bf9\u4e8e ECharts \u8fd9\u79cd\u88ab\u5e7f\u6cdb\u4f7f\u7528\u7684\u5f00\u6e90\u5de5\u5177\u5e93\uff0c\u5185\u90e8\u7684\u4e00\u4e9b\u8bbe\u8ba1\u6a21\u5f0f\u548c\u7406\u5ff5\u5bf9\u4e8e\u6570\u636e\u53ef\u89c6\u5316\u9886\u57df\u5f00\u53d1\u6709\u5f88\u597d\u7684\u5b66\u4e60\u501f\u9274\u610f\u4e49\uff0c\u4e5f\u662f\u5728\u6b64\u505a\u4e00\u4e9b\u8bb0\u5f55\u5e76\u6536\u96c6\u4e00\u4e9b\u76f8\u5173\u7684\u6570\u636e\u53ef\u89c6\u5316\u9886\u57df\u7684\u5f00\u53d1\u8d44\u6e90\u3002"),(0,a.kt)("admonition",{title:"\u66f4\u5feb\u7684\u6269\u5c55 ECharts \u80fd\u529b",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u5728\u4e0d\u4fee\u6539\u6e90\u4ee3\u7801\u7684\u60c5\u51b5\u4e0b\uff0c\u4ee5\u5c3d\u53ef\u80fd\u7b26\u5408 ECharts \u67b6\u6784\u8bbe\u8ba1\u7684\u65b9\u5f0f\u5feb\u901f\u6269\u5c55\u5176\u80fd\u529b\uff08\u6765\u4e0d\u53ca\u7b49\u5f85 ",(0,a.kt)("inlineCode",{parentName:"p"},"Pull Request")," \u88ab\u6279\u51c6\u5408\u5e76\uff09")),(0,a.kt)("h2",{id:"\u7248\u6743\u8bb8\u53ef"},"\u7248\u6743\u8bb8\u53ef"),(0,a.kt)("p",null,"\u9996\u5148\uff0c",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/echarts/blob/master/LICENSE"},"ECharts \u57fa\u4e8e Apache License 2.0 ")," \u5f00\u6e90\uff0c",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ecomfe/zrender/blob/master/LICENSE"},"ZRender \u57fa\u4e8e BSD 3-Clause License")," \u5f00\u6e90\uff0c\u672c\u6587\u6863\u4e2d\u5f15\u7528\u7684\u6e90\u4ee3\u7801\u9700\u8981\u6ce8\u660e\u51fa\u5904\uff08\u9644\u4e0a\u94fe\u63a5\uff09\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png",alt:"CC BY-NC 4.0"})," \u672c\u9879\u76ee\u6587\u6863\u5185\u5bb9\u91c7\u7528",(0,a.kt)("a",{parentName:"p",href:"http://creativecommons.org/licenses/by-nc-sa/4.0/"},"\u77e5\u8bc6\u5171\u4eab\u7f72\u540d-\u975e\u5546\u4e1a\u6027\u4f7f\u7528-\u76f8\u540c\u65b9\u5f0f\u5171\u4eab 4.0 \u56fd\u9645\u8bb8\u53ef\u534f\u8bae"),"\u8fdb\u884c\u8bb8\u53ef\u3002"),(0,a.kt)("admonition",{title:"\u4e86\u89e3\u5f00\u6e90\u8bb8\u53ef",type:"note"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("a",{parentName:"p",href:"https://choosealicense.com/appendix/"},"Choose an open source license / appendix"))),(0,a.kt)("admonition",{title:"\u58f0\u660e",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u8be5\u9879\u76ee",(0,a.kt)("strong",{parentName:"p"},"\u4e0d\u7528\u4e8e\u5e7f\u544a\u76c8\u5229\u7b49\u5176\u5b83\u5546\u4e1a\u76ee\u7684"),"\u3002")))}m.isMDXComponent=!0}}]);