"use strict";(self.webpackChunkecharts_api_docs=self.webpackChunkecharts_api_docs||[]).push([[613],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>k});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var i=n.createContext({}),m=function(t){var e=n.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},d=function(t){var e=m(t.components);return n.createElement(i.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,i=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),c=m(a),k=r,h=c["".concat(i,".").concat(k)]||c[k]||s[k]||l;return a?n.createElement(h,o(o({ref:e},d),{},{components:a})):n.createElement(h,o({ref:e},d))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=c;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=t,p.mdxType="string"==typeof t?t:r,o[1]=p;for(var m=2;m<l;m++)o[m]=a[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},6301:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var n=a(7462),r=(a(7294),a(3905));const l={title:".GlobalModel",description:"ECharts \u7684\u5168\u5c40 Model \u7c7b",tags:["ECharts","GlobalModel"]},o=".GlobalModel",p={unversionedId:"echarts/api/GlobalModel",id:"echarts/api/GlobalModel",title:".GlobalModel",description:"ECharts \u7684\u5168\u5c40 Model \u7c7b",source:"@site/docs/echarts/api/GlobalModel.md",sourceDirName:"echarts/api",slug:"/echarts/api/GlobalModel",permalink:"/echarts-api-docs/docs/echarts/api/GlobalModel",draft:!1,editUrl:"https://github.com/wang1212/echarts-api-docs/tree/main/docs/echarts/api/GlobalModel.md",tags:[{label:"ECharts",permalink:"/echarts-api-docs/docs/tags/e-charts"},{label:"GlobalModel",permalink:"/echarts-api-docs/docs/tags/global-model"}],version:"current",frontMatter:{title:".GlobalModel",description:"ECharts \u7684\u5168\u5c40 Model \u7c7b",tags:["ECharts","GlobalModel"]},sidebar:"echartsSidebar",previous:{title:"echartsInstance",permalink:"/echarts-api-docs/docs/echarts/api/echartsInstance"}},i={},m=[{value:"getOption()",id:"getoption",level:3},{value:"getComponent()",id:"getcomponent",level:3},{value:"queryComponents()",id:"querycomponents",level:3},{value:"findComponents()",id:"findcomponents",level:3}],d={toc:m};function s(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"globalmodel"},".GlobalModel"),(0,r.kt)("p",null,"ECharts \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"GlobalModel")," \u5143\u7d20\u7c7b\u3002"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/echarts/blob/5.3.3/src/model/Global.ts#L154"},(0,r.kt)("em",{parentName:"a"},"\u67e5\u770b\u6e90\u7801"))),(0,r.kt)("h3",{id:"getoption"},"getOption()"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"getOption(): ECUnitOption")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/echarts/blob/5.3.3/src/model/Global.ts#L514"},(0,r.kt)("em",{parentName:"a"},"\u67e5\u770b\u6e90\u7801 (v5.0.0+)"))),(0,r.kt)("p",null,"\u83b7\u53d6\u5f53\u524d ECharts \u5b9e\u4f8b\u7684\u6240\u6709\u914d\u7f6e\u9879\u3002"),(0,r.kt)("p",null,"\u8fd4\u56de\u503c"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"option"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/echarts/blob/5.3.3/src/util/types.ts#L519:13"},(0,r.kt)("inlineCode",{parentName:"a"},"ECUnitOption"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"echarts \u5b9e\u4f8b\u7684\u6240\u6709\u914d\u7f6e\u9879")))),(0,r.kt)("h3",{id:"getcomponent"},"getComponent()"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"getComponent(mainType: ComponentMainType, idx?: number): ComponentModel")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/echarts/blob/5.3.3/src/model/Global.ts#L564"},(0,r.kt)("em",{parentName:"a"},"\u67e5\u770b\u6e90\u7801 (v5.0.0+)"))),(0,r.kt)("p",null,"\u83b7\u53d6\u6307\u5b9a\u4e3b\u8981\u7c7b\u578b\u7684\u6307\u5b9a\u7d22\u5f15\u7684\u7ec4\u4ef6 Model \u5b9e\u4f8b\u3002"),(0,r.kt)("p",null,"\u53c2\u6570"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"mainType"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/echarts/blob/5.3.3/src/util/types.ts#L94:13"},(0,r.kt)("inlineCode",{parentName:"a"},"ComponentMainType"))),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u7ec4\u4ef6\u7684\u4e3b\u8981\u7c7b\u578b\uff0c\u4f8b\u5982 ",(0,r.kt)("inlineCode",{parentName:"td"},"tooltip"),"\u3001",(0,r.kt)("inlineCode",{parentName:"td"},"series"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"idx"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"0")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u7d22\u5f15")))),(0,r.kt)("p",null,"\u8fd4\u56de\u503c"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"componentModel"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/echarts/blob/5.3.3/src/model/Component.ts#L51:7"},(0,r.kt)("inlineCode",{parentName:"a"},"ComponentModel"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u7ec4\u4ef6\u7684 Model \u5b9e\u4f8b\uff0c",(0,r.kt)("inlineCode",{parentName:"td"},"ComponentModel")," \u53ea\u662f\u57fa\u7c7b")))),(0,r.kt)("p",null,"\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const tooltipModel = ecModel.getComponent('tooltip', 0);\n")),(0,r.kt)("h3",{id:"querycomponents"},"queryComponents()"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"queryComponents(condition: QueryConditionKindB): ComponentModel[]")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/echarts/blob/5.3.3/src/model/Global.ts#L564"},(0,r.kt)("em",{parentName:"a"},"\u67e5\u770b\u6e90\u7801 (v5.0.0+)"))),(0,r.kt)("p",null,"\u83b7\u53d6\u7b26\u5408\u6761\u4ef6\u7684\u6240\u6709\u7ec4\u4ef6 Model \u5b9e\u4f8b\u3002"),(0,r.kt)("p",null,"\u53c2\u6570"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"condition"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/echarts/blob/86eba716ff/src/model/Global.ts#L980:18"},(0,r.kt)("inlineCode",{parentName:"a"},"QueryConditionKindB"))),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u591a\u4e2a\u67e5\u8be2\u6761\u4ef6")))),(0,r.kt)("p",null,"\u8fd4\u56de\u503c"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"componentModels"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/echarts/blob/5.3.3/src/model/Component.ts#L51:7"},(0,r.kt)("inlineCode",{parentName:"a"},"ComponentModel[]"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u7ec4\u4ef6\u7684 Model \u5b9e\u4f8b\u6570\u7ec4\uff0c",(0,r.kt)("inlineCode",{parentName:"td"},"ComponentModel")," \u53ea\u662f\u57fa\u7c7b")))),(0,r.kt)("p",null,"\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const allBarModel = ecModel.queryComponents({\n  mainType: 'series',\n  subType: 'bar',\n});\n")),(0,r.kt)("h3",{id:"findcomponents"},"findComponents()"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"findComponents(condition: QueryConditionKindA): ComponentModel[]")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/echarts/blob/86eba716ff/src/model/Global.ts#L638"},(0,r.kt)("em",{parentName:"a"},"\u67e5\u770b\u6e90\u7801 (v5.0.0+)"))),(0,r.kt)("p",null,"\u67e5\u627e\u8fc7\u6ee4\u7b26\u5408\u6761\u4ef6\u7684\u6240\u6709\u7ec4\u4ef6 Model \u5b9e\u4f8b\u3002"),(0,r.kt)("p",null,"\u53c2\u6570"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"condition"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/echarts/blob/86eba716ff/src/model/Global.ts#L963:18"},(0,r.kt)("inlineCode",{parentName:"a"},"QueryConditionKindA"))),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u591a\u4e2a\u67e5\u8be2\u6761\u4ef6")))),(0,r.kt)("p",null,"\u8fd4\u56de\u503c"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"componentModels"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/echarts/blob/5.3.3/src/model/Component.ts#L51:7"},(0,r.kt)("inlineCode",{parentName:"a"},"ComponentModel[]"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u7ec4\u4ef6\u7684 Model \u5b9e\u4f8b\u6570\u7ec4\uff0c",(0,r.kt)("inlineCode",{parentName:"td"},"ComponentModel")," \u53ea\u662f\u57fa\u7c7b")))),(0,r.kt)("p",null,"\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"let result = findComponents(\n  { mainType: 'dataZoom', query: { dataZoomId: 'abc' } }\n);\nlet result = findComponents(\n  { mainType: 'series', subType: 'pie', query: { seriesName: 'uio' } }\n);\nlet result = findComponents(\n  { mainType: 'series', filter: function (model, index) {...} }\n);\n")))}s.isMDXComponent=!0}}]);