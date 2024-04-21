"use strict";(self.webpackChunkecharts_api_docs=self.webpackChunkecharts_api_docs||[]).push([[4353],{8793:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var r=s(4848),t=s(8453);const i={},o="\u56fe\u8868\u63d2\u4ef6",d={id:"guide/modules/plugin-chart",title:"\u56fe\u8868\u63d2\u4ef6",description:"WIP",source:"@site/docs/0-guide/4-modules/7-plugin-chart.md",sourceDirName:"0-guide/4-modules",slug:"/guide/modules/plugin-chart",permalink:"/echarts-api-docs/docs/guide/modules/plugin-chart",draft:!1,unlisted:!1,editUrl:"https://github.com/wang1212/echarts-api-docs/tree/main/docs/0-guide/4-modules/7-plugin-chart.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{},sidebar:"guideSidebar",previous:{title:"\u529f\u80fd\u6269\u5c55",permalink:"/echarts-api-docs/docs/guide/modules/plugin-config"}},a={},c=[{value:"\u6848\u4f8b",id:"\u6848\u4f8b",level:2},{value:"\u53cc\u5411\u6811\u56fe",id:"\u53cc\u5411\u6811\u56fe",level:3}];function l(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"\u56fe\u8868\u63d2\u4ef6",children:"\u56fe\u8868\u63d2\u4ef6"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"WIP"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u672c\u8282\u5185\u5bb9\u4e3b\u8981\u662f\u5173\u4e8e\u5982\u4f55\u5f00\u53d1",(0,r.jsx)(n.strong,{children:"\u56fe\u8868\u63d2\u4ef6\uff0c\u5373\u4e3a ECharts \u65b0\u589e\u4e00\u79cd\u7c7b\u578b\u56fe\u8868\u7684\u5b9e\u73b0"}),"\u3002"]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["\u4e86\u89e3\u6280\u672f\u7ec6\u8282\uff0c\u8bf7\u53c2\u8003 ",(0,r.jsx)(n.a,{href:"/echarts-api-docs/docs/guide/echarts-plugin",children:"ECharts \u7684\u63d2\u4ef6\u673a\u5236"}),"\u3002"]})}),"\n",(0,r.jsx)(n.h2,{id:"\u6848\u4f8b",children:"\u6848\u4f8b"}),"\n",(0,r.jsx)(n.h3,{id:"\u53cc\u5411\u6811\u56fe",children:"\u53cc\u5411\u6811\u56fe"}),"\n",(0,r.jsx)(n.p,{children:"\u8fd9\u91cc\u4ee5\u5b9e\u73b0\u4e00\u4e2a\u65b0\u7c7b\u578b\uff08\u53cc\u5411\u6811\uff09\u56fe\u8868\u4e3a\u4f8b\uff0c\u76f4\u63a5\u7ed9\u51fa\u4e00\u4e2a\u5b9e\u9645\u7684\u63d2\u4ef6\u5f00\u53d1\u6848\u4f8b\uff0c\u6765\u52a0\u6df1\u5bf9 ECharts \u6269\u5c55\u673a\u5236\u7684\u4e86\u89e3\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u9996\u5148\uff0c\u5bf9\u4e8e\u65b0\u7c7b\u578b\uff08\u53cc\u5411\u6811\uff09\u7684\u56fe\u8868\uff0cModel \u548c View \u90fd\u9700\u8981\u6211\u4eec\u81ea\u5df1\u6765\u5b9e\u73b0\uff0c\u5176\u6b21\u8fd8\u9700\u8981\u5b9e\u73b0\u53cc\u5411\u6811\u7684\u5e03\u5c40\u7b97\u6cd5\u3002\u90a3\u4e48\uff0c\u6587\u4ef6\u7ed3\u6784\u5982\u4e0b\uff1a"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"echarts-custom-series-example",src:s(1217).A+"",width:"718",height:"346"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5176\u4e2d\uff0c",(0,r.jsx)(n.code,{children:"index.ts"})," \u6587\u4ef6\u5373\u5c31\u662f\u6211\u4eec\u4e4b\u524d\u63d0\u5230\u7684\u67f1\u72b6\u56fe\u6848\u4f8b\u4e2d\u7684 ",(0,r.jsx)(n.code,{children:"install.ts"})," \u6587\u4ef6\uff0c\u5b9e\u73b0\u5982\u4e0b\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"export function install(registers: EChartsExtensionInstallRegisters) {\n  installTreeAction(registers);\n\n  registers.registerSeriesModel(TwoWayTreeSeriesModel);\n  registers.registerChartView(TwoWayTreeView as unknown as typeof ChartView);\n  registers.registerLayout(twoWayTreeLayout);\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u53cc\u5411\u6811\u56fe\u4e2d\u7684\u5b9e\u73b0\u4e2d\u4e3b\u8981\u6d89\u53ca\u5230 Model\u3001View\u3001Action \u548c\u5e03\u5c40\u7b97\u6cd5\uff0c\u8fd9\u56db\u90e8\u5206 ECharts \u90fd\u6709\u76f8\u5e94\u7684\u6269\u5c55 API\uff0c\u6211\u4eec\u53ea\u9700\u8981\u8d1f\u8d23\u903b\u8f91\u5b9e\u73b0\u5373\u53ef\u3002Model \u548c View \u5206\u522b\u8981\u7ee7\u627f ECharts \u63d0\u4f9b\u7684\u57fa\u7c7b ",(0,r.jsx)(n.code,{children:"SeriesModel"})," \u548c ",(0,r.jsx)(n.code,{children:"ChartView"}),"\uff0c\u5e76\u5b9e\u73b0\u8981\u6c42\u5fc5\u987b\u5b9e\u73b0\u7684\u65b9\u6cd5\uff0c\u4f8b\u5982 ",(0,r.jsx)(n.code,{children:"ChartView"})," \u4e2d\u7684 ",(0,r.jsx)(n.code,{children:"render()"})," \u65b9\u6cd5\uff0c\u7ec6\u8282\u6211\u4eec\u53ef\u4ee5\u67e5\u770b ECharts \u57fa\u7c7b\u6e90\u7801\u548c\u73b0\u6709\u7c7b\u578b\u7684\u56fe\u8868\u5b9e\u73b0\u6e90\u7801\u8fdb\u884c\u53c2\u8003\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u6700\u91cd\u8981\u7684\u4e00\u4e2a\u7ec6\u8282\u5c31\u662f ",(0,r.jsx)(n.code,{children:"type"})," \u5b57\u6bb5\u7684\u6307\u5b9a\uff0c\u8fd9\u662f\u7528\u6765\u5173\u8054\u6240\u6709\u540c\u7c7b\u578b\u56fe\u8868\u5b9e\u73b0\u903b\u8f91\u7684\u5173\u952e\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"export default class TwoWayTreeSeriesModel extends SeriesModel<TwoWayTreeSeriesOption> {\n  static readonly type = 'series.dvTwoWayTree';\n\n  readonly type = TwoWayTreeSeriesModel.type;\n}\n\nexport default class TwoWayTreeView extends ChartView {\n  static readonly type = 'dvTwoWayTree';\n\n  readonly type = TwoWayTreeView.type;\n}\n\nexport default function twoWayTreeLayout(\n  ecModel: GlobalModel,\n  api: ExtensionAPI\n) {\n  ecModel.eachSeriesByType(\n    'dvTwoWayTree',\n    (seriesModel: TwoWayTreeSeriesModel) => {\n      commonLayout(seriesModel, api);\n    }\n  );\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u5b9e\u9645\u4e0a\uff0c\u6269\u5c55\u4e00\u4e2a\u65b0\u7c7b\u578b\u7684\u56fe\u8868\u5b9e\u73b0\u4ee3\u7801\u5c42\u9762\u662f\u6709\u5f88\u5927\u7684\u81ea\u7531\u5ea6\u7684\uff0c\u53ea\u9700\u8981\u9075\u5faa\u4ee5\u4e0a\u63d0\u5230\u7684\u4e00\u4e9b\u7ec6\u8282\u6027\u7ea6\u675f\u5373\u53ef\uff0c\u5269\u4e0b\u7684\u6839\u636e\u5177\u4f53\u4e1a\u52a1\u573a\u666f\u7f16\u5199\u903b\u8f91\u5b9e\u73b0\u5373\u53ef\u3002"})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},1217:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/echarts-custom-series-example-94a3b2541671a208f7e048b16e49bf9f.png"},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>d});var r=s(6540);const t={},i=r.createContext(t);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);