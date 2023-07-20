"use strict";(self.webpackChunkecharts_api_docs=self.webpackChunkecharts_api_docs||[]).push([[6815],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),s=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(a),h=r,k=d["".concat(i,".").concat(h)]||d[h]||m[h]||l;return a?n.createElement(k,o(o({ref:t},c),{},{components:a})):n.createElement(k,o({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6022:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const l={title:"echartsInstance",description:"ECharts \u5b9e\u4f8b\u76f8\u5173\u7684 APIs",tags:["ECharts","Instance"],sidebar_position:2},o="echartsInstance",p={unversionedId:"echarts/api/echartsInstance",id:"echarts/api/echartsInstance",title:"echartsInstance",description:"ECharts \u5b9e\u4f8b\u76f8\u5173\u7684 APIs",source:"@site/docs/echarts/api/echartsInstance.md",sourceDirName:"echarts/api",slug:"/echarts/api/echartsInstance",permalink:"/echarts-api-docs/docs/echarts/api/echartsInstance",draft:!1,editUrl:"https://github.com/wang1212/echarts-api-docs/tree/main/docs/echarts/api/echartsInstance.md",tags:[{label:"ECharts",permalink:"/echarts-api-docs/docs/tags/e-charts"},{label:"Instance",permalink:"/echarts-api-docs/docs/tags/instance"}],version:"current",sidebarPosition:2,frontMatter:{title:"echartsInstance",description:"ECharts \u5b9e\u4f8b\u76f8\u5173\u7684 APIs",tags:["ECharts","Instance"],sidebar_position:2},sidebar:"echartsSidebar",previous:{title:"echarts",permalink:"/echarts-api-docs/docs/echarts/api/echarts"},next:{title:".GlobalModel",permalink:"/echarts-api-docs/docs/echarts/api/GlobalModel"}},i={},s=[{value:"getModel()",id:"getmodel",level:3},{value:"getViewOfComponentModel()",id:"getviewofcomponentmodel",level:3},{value:"getViewOfSeriesModel()",id:"getviewofseriesmodel",level:3}],c={toc:s};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"echartsinstance"},"echartsInstance"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ECharts")," \u5b9e\u4f8b\u76f8\u5173\u7684 APIs\u3002"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/echarts/blob/5.3.3/src/core/echarts.ts#L331"},(0,r.kt)("em",{parentName:"a"},"\u67e5\u770b\u6e90\u7801"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://echarts.apache.org/zh/api.html#echartsInstance"},"\u5b98\u65b9 APIs \u6587\u6863"))),(0,r.kt)("h3",{id:"getmodel"},"getModel()"),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"\u8be5\u65b9\u6cd5\u88ab\u4fee\u9970\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"private"),"\uff0c\u5e76\u4e14\u6ce8\u91ca\u4fe1\u606f\u660e\u786e\u6307\u51fa\u4e0d\u5e0c\u671b\u5f00\u53d1\u8005\u76f4\u63a5\u4f7f\u7528\u3002\u82e5\u8981\u4f7f\u7528\uff0c\u786e\u4fdd\u4ee5",(0,r.kt)("strong",{parentName:"p"},"\u53ea\u8bfb"),"\u7684\u65b9\u5f0f\u4f7f\u7528\u3002")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"getModel(): GlobalModel")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/echarts/blob/5.3.3/src/core/echarts.ts#L681"},(0,r.kt)("em",{parentName:"a"},"\u67e5\u770b\u6e90\u7801 (v5.0.0+)"))),(0,r.kt)("p",null,"\u83b7\u53d6\u5168\u5c40 Model \u5b9e\u4f8b\u3002"),(0,r.kt)("p",null,"\u8fd4\u56de\u503c"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"globalModel"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/echarts/blob/5.3.3/src/model/Global.ts#L154"},(0,r.kt)("inlineCode",{parentName:"a"},"GlobalModel"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"echarts \u5b9e\u4f8b\u7684\u5168\u5c40 Model \u5b9e\u4f8b")))),(0,r.kt)("p",null,"\u76f8\u5173"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/echarts-api-docs/docs/echarts/api/GlobalModel"},"GlobalModel APIs"))),(0,r.kt)("h3",{id:"getviewofcomponentmodel"},"getViewOfComponentModel()"),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"\u8be5\u65b9\u6cd5\u88ab\u4fee\u9970\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"private"),"\u3002\u82e5\u8981\u4f7f\u7528\uff0c\u786e\u4fdd\u4ee5",(0,r.kt)("strong",{parentName:"p"},"\u53ea\u8bfb"),"\u7684\u65b9\u5f0f\u4f7f\u7528\u3002")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"getViewOfComponentModel(componentModel: ComponentModel): ComponentView")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/echarts/blob/5.3.3/src/core/echarts.ts#L1033"},(0,r.kt)("em",{parentName:"a"},"\u67e5\u770b\u6e90\u7801 (v5.0.0+)"))),(0,r.kt)("p",null,"\u83b7\u53d6\u6307\u5b9a\u7ec4\u4ef6 Model \u5b9e\u4f8b\u5bf9\u5e94\u7684 View \u5b9e\u4f8b\u3002"),(0,r.kt)("p",null,"\u53c2\u6570"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"componentModel"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/echarts/blob/5.3.3/src/model/Component.ts#L51:7"},(0,r.kt)("inlineCode",{parentName:"a"},"ComponentModel"))),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u7ec4\u4ef6 Model \u5b9e\u4f8b\uff0c",(0,r.kt)("inlineCode",{parentName:"td"},"ComponentModel")," \u53ea\u662f\u57fa\u7c7b")))),(0,r.kt)("p",null,"\u8fd4\u56de\u503c"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"componentView"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/echarts/blob/5.3.3/src/view/Component.ts#L63:7"},(0,r.kt)("inlineCode",{parentName:"a"},"ComponentView"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6307\u5b9a\u7ec4\u4ef6\u7684 View \u5b9e\u4f8b\uff0c",(0,r.kt)("inlineCode",{parentName:"td"},"ComponentView")," \u53ea\u662f\u57fa\u7c7b")))),(0,r.kt)("h3",{id:"getviewofseriesmodel"},"getViewOfSeriesModel()"),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"\u8be5\u65b9\u6cd5\u88ab\u4fee\u9970\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"private"),"\u3002\u82e5\u8981\u4f7f\u7528\uff0c\u786e\u4fdd\u4ee5",(0,r.kt)("strong",{parentName:"p"},"\u53ea\u8bfb"),"\u7684\u65b9\u5f0f\u4f7f\u7528\u3002")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"getViewOfSeriesModel(seriesModel: SeriesModel): ChartView")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/echarts/blob/5.3.3/src/core/echarts.ts#L1040"},(0,r.kt)("em",{parentName:"a"},"\u67e5\u770b\u6e90\u7801 (v5.0.0+)"))),(0,r.kt)("p",null,"\u83b7\u53d6\u6307\u5b9a\u7cfb\u5217\u7ec4\u4ef6 Model \u5b9e\u4f8b\u5bf9\u5e94\u7684 View \u5b9e\u4f8b\u3002"),(0,r.kt)("p",null,"\u53c2\u6570"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"seriesModel"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/echarts/blob/5.3.3/src/model/Series.ts#L123"},(0,r.kt)("inlineCode",{parentName:"a"},"SeriesModel"))),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u7cfb\u5217\u7ec4\u4ef6 Model \u5b9e\u4f8b\uff0c",(0,r.kt)("inlineCode",{parentName:"td"},"SeriesModel")," \u53ea\u662f\u57fa\u7c7b")))),(0,r.kt)("p",null,"\u8fd4\u56de\u503c"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"chartView"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/echarts/blob/5.3.3/src/view/Chart.ts#L98:7"},(0,r.kt)("inlineCode",{parentName:"a"},"ChartView"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6307\u5b9a\u7cfb\u5217\u7ec4\u4ef6\u7684 View \u5b9e\u4f8b\uff0c",(0,r.kt)("inlineCode",{parentName:"td"},"ChartView")," \u53ea\u662f\u57fa\u7c7b")))))}m.isMDXComponent=!0}}]);