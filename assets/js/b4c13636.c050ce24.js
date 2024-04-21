"use strict";(self.webpackChunkecharts_api_docs=self.webpackChunkecharts_api_docs||[]).push([[7194],{4005:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>o,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=t(4848),s=t(8453);const r={},a="\u52a8\u753b",l={id:"guide/modules/animation",title:"\u52a8\u753b",description:"\u672c\u8282\u5185\u5bb9\u4e3b\u8981\u662f\u9488\u5bf9\u52a8\u753b\u5f00\u53d1\u4efb\u52a1\uff0c\u4ece ECharts \u52a8\u753b\u673a\u5236\u8bbe\u8ba1\u5230\u52a8\u753b APIs\uff0c\u4ee5\u53ca\u901a\u7528\u7684\u8f85\u52a9\u51fd\u6570\u7b49\u65b9\u9762\u8fdb\u884c\u63a2\u8ba8\uff0c\u4ee5\u5e2e\u52a9\u6211\u4eec\u66f4\u9ad8\u6548\u7684\u5b8c\u6210\u52a8\u753b\u5f00\u53d1\u3002",source:"@site/docs/0-guide/4-modules/3-animation.md",sourceDirName:"0-guide/4-modules",slug:"/guide/modules/animation",permalink:"/echarts-api-docs/docs/guide/modules/animation",draft:!1,unlisted:!1,editUrl:"https://github.com/wang1212/echarts-api-docs/tree/main/docs/0-guide/4-modules/3-animation.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"guideSidebar",previous:{title:"\u6e32\u67d3",permalink:"/echarts-api-docs/docs/guide/modules/render"},next:{title:"\u4e8b\u4ef6\u4e0e\u4ea4\u4e92",permalink:"/echarts-api-docs/docs/guide/modules/event"}},d={},c=[{value:"\u52a8\u753b\u673a\u5236\u8bbe\u8ba1",id:"\u52a8\u753b\u673a\u5236\u8bbe\u8ba1",level:2},{value:"\u52a8\u753b APIs",id:"\u52a8\u753b-apis",level:3},{value:"\u81ea\u5b9a\u4e49\u52a8\u753b\u63d2\u503c",id:"\u81ea\u5b9a\u4e49\u52a8\u753b\u63d2\u503c",level:4},{value:"\u52a8\u753b\u8f85\u52a9\u51fd\u6570",id:"\u52a8\u753b\u8f85\u52a9\u51fd\u6570",level:3},{value:"\u4ea4\u4e92\u72b6\u6001\u52a8\u753b",id:"\u4ea4\u4e92\u72b6\u6001\u52a8\u753b",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"\u52a8\u753b",children:"\u52a8\u753b"}),"\n",(0,i.jsx)(n.p,{children:"\u672c\u8282\u5185\u5bb9\u4e3b\u8981\u662f\u9488\u5bf9\u52a8\u753b\u5f00\u53d1\u4efb\u52a1\uff0c\u4ece ECharts \u52a8\u753b\u673a\u5236\u8bbe\u8ba1\u5230\u52a8\u753b APIs\uff0c\u4ee5\u53ca\u901a\u7528\u7684\u8f85\u52a9\u51fd\u6570\u7b49\u65b9\u9762\u8fdb\u884c\u63a2\u8ba8\uff0c\u4ee5\u5e2e\u52a9\u6211\u4eec\u66f4\u9ad8\u6548\u7684\u5b8c\u6210\u52a8\u753b\u5f00\u53d1\u3002"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["\u53c2\u8003 ECharts \u5b98\u65b9\u5173\u4e8e",(0,i.jsx)(n.a,{href:"https://echarts.apache.org/handbook/zh/how-to/animation/transition/",children:"\u6570\u636e\u8fc7\u6e21\u52a8\u753b"}),"\u7684\u8bf4\u660e\u6587\u6863\u3002"]})}),"\n",(0,i.jsx)(n.h2,{id:"\u52a8\u753b\u673a\u5236\u8bbe\u8ba1",children:"\u52a8\u753b\u673a\u5236\u8bbe\u8ba1"}),"\n",(0,i.jsx)(n.mermaid,{value:'---\ntitle: Animation design for ECharts\n---\nflowchart LR\n    el["Element"]:::dashBorder\n    el1["Element"]:::dashBorder\n    2El["Element"]:::dashBorder\n\n    subgraph 0_setOption\n        0El["Element"]\n        0El1["Element"]\n    end\n\n    subgraph 1_setOption\n        1El["Element"]\n    end\n\n    el-. "enter" .->0El\n    el1-. "enter" .->0El1\n    0El-. "update" .->1El\n    0El1-. "leave" .->2El\n    0_setOption-- "setOption" --\x3e1_setOption\n\n    classDef dashBorder stroke-dasharray: 5 5\n    linkStyle 0,1,2,3 color: green'}),"\n",(0,i.jsxs)(n.p,{children:["\u901a\u8fc7",(0,i.jsx)(n.a,{href:"https://echarts.apache.org/handbook/zh/how-to/animation/transition",children:"\u5b98\u65b9\u8bf4\u660e\u6587\u6863"}),"\u548c\u4e00\u4e9b",(0,i.jsx)(n.a,{href:"https://echarts.apache.org/zh/option.html#animation",children:"\u914d\u7f6e\u9879\u6587\u6863"}),"\uff0c\u6211\u4eec\u53ef\u4ee5\u4e86\u89e3\u5230 ",(0,i.jsx)(n.strong,{children:"ECharts \u5c06\u6570\u636e\u53d8\u5316\u5f15\u8d77\u7684\u89c6\u56fe\u66f4\u65b0\u52a8\u753b\u6574\u4f53\u8bbe\u8ba1\u4e3a\u5165\u573a\u52a8\u753b\u3001\u66f4\u65b0\u52a8\u753b\u3001\u79bb\u573a\u52a8\u753b\uff08enter\u3001update\u3001leave\uff09"}),"\uff0c\u4e0e ",(0,i.jsx)(n.a,{href:"https://d3js.org/d3-selection/joining#selection_join",children:"D3.js \u7684\u8bbe\u8ba1"}),"\u76f8\u4f3c\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"\u52a8\u753b-apis",children:"\u52a8\u753b APIs"}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u89c6\u56fe\u5c42\uff0c\u6211\u4eec\u53ef\u4ee5\u76f4\u63a5\u8c03\u7528 ZRender \u5143\u7d20\u7684\u52a8\u753b APIs \u6765\u5f00\u53d1\u52a8\u753b\u6548\u679c\u3002"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/ecomfe/zrender/blob/5.3.2/src/Element.ts#L1462",children:(0,i.jsx)(n.code,{children:"animate()"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/ecomfe/zrender/blob/5.3.2/src/Element.ts#L1560",children:(0,i.jsx)(n.code,{children:"animateTo()"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/ecomfe/zrender/blob/5.3.2/src/Element.ts#L1570",children:(0,i.jsx)(n.code,{children:"animateFrom()"})})}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\u5176\u4e2d\uff0c",(0,i.jsx)(n.code,{children:"animate()"})," API \u662f\u4e3a\u5143\u7d20\u8bbe\u7f6e\u52a8\u753b\uff0c\u4f46\u4e0d\u7acb\u5373\u5f00\u59cb\u6267\u884c\u52a8\u753b\uff1b\u800c ",(0,i.jsx)(n.code,{children:"animateTo()"})," \u548c ",(0,i.jsx)(n.code,{children:"animateFrom()"})," \u5219\u662f\u76f4\u63a5\u5bf9\u5143\u7d20\u7acb\u5373\u6267\u884c\u52a8\u753b\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u793a\u4f8b\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"// \u8bbe\u7f6e\u52a8\u753b\nconst animator = el.animate('style', false)\n  .when(1000, {x: 10} )\n  .done(function(){});\n\n// \u7a0d\u540e\u542f\u52a8\u52a8\u753b\nanimator.start();\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u4e5f\u53ef\u4ee5\u7acb\u5373\u6267\u884c\u52a8\u753b\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"// \u7acb\u5373\u6267\u884c\u52a8\u753b\nel.animateTo({\n  shape: {\n    width: 500\n  },\n  style: {\n    fill: 'red'\n  }\n  position: [10, 10]\n}, {\n  duration: 100,\n  delay: 100,\n  easing: 'cubicOut',\n  done: () => {}\n});\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u867d\u7136\u6211\u4eec\u901a\u8fc7 APIs \u76f4\u63a5\u64cd\u4f5c\u5143\u7d20\u7684\u52a8\u753b\u66f4\u7075\u6d3b\uff0c\u4f46\u5728\u771f\u5b9e\u7684\u4e1a\u52a1\u573a\u666f\u4e2d\uff0c\u6d89\u53ca\u591a\u5468\u671f\u6e32\u67d3\u65f6\uff0c\u6211\u4eec\u5728\u65b0\u7684\u4e00\u5468\u671f\u6e32\u67d3\u8fc7\u7a0b\u4e2d\u8981\u5904\u7406\u5f88\u591a\u4e0e\u4e0a\u4e00\u5468\u671f\u76f8\u5173\u7684\u52a8\u753b\u903b\u8f91\u624d\u80fd\u4fdd\u8bc1\u4e0d\u51fa\u95ee\u9898\uff0c\u4f8b\u5982\u505c\u6b62\u4e0a\u4e00\u5468\u671f\u7684\u52a8\u753b\u3002\u6240\u4ee5\uff0c\u66f4\u63a8\u8350\u4f7f\u7528\u540e\u7eed\u63d0\u5230\u7684\u52a8\u753b\u8f85\u52a9\u51fd\u6570\u6765\u5904\u7406\u5927\u90e8\u5206\u52a8\u753b\u903b\u8f91\u3002"}),"\n",(0,i.jsx)(n.h4,{id:"\u81ea\u5b9a\u4e49\u52a8\u753b\u63d2\u503c",children:"\u81ea\u5b9a\u4e49\u52a8\u753b\u63d2\u503c"}),"\n",(0,i.jsx)(n.p,{children:"\u4ee5\u4e0a\u6211\u4eec\u5229\u7528\u7684\u90fd\u662f ZRender \u5185\u90e8\u5b9e\u73b0\u7684\u52a8\u753b\u63d2\u503c\u903b\u8f91\uff0c\u5df2\u7ecf\u80fd\u6ee1\u8db3\u5927\u90e8\u5206\u9700\u6c42\u573a\u666f\u4e86\uff0c\u5982\u679c\u9047\u5230\u9700\u8981\u5b9e\u73b0\u81ea\u5b9a\u4e49\u63d2\u503c\u7684\u573a\u666f\uff0cZRender \u4e5f\u6709\u76f8\u5e94\u7684 API \u63d0\u4f9b\u652f\u6301\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"// highlight-next-line\nel.attr({ __tempT: 0 });\n\n// \u5148\u8bbe\u7f6e\u52a8\u753b\nconst animator = el.animate('', false)\n  // highlight-start\n  .when(1000, { __tempT: 1 })\n  .during((percent) => {\n    const value = customInterpolator(percent);\n\n    // TODO update element\n  })\n  // highlight-end\n  .done(function(){\n    // highlight-next-line\n    delete el.__tempT;\n  });\n\n// \u7a0d\u540e\u542f\u52a8\u52a8\u753b\nanimator.start();\n\n// \u6216\u8005\u76f4\u63a5\u6267\u884c\u52a8\u753b\nel.animateTo({\n  // highlight-next-line\n  __tempT: 1\n}, {\n  duration: 100,\n  delay: 100,\n  easing: 'cubicOut',\n  // highlight-start\n  during: (percent) => {\n    const value = customInterpolator(percent);\n\n    // TODO update element\n  },\n  // highlight-end\n  done: () => {\n    // highlight-next-line\n    delete el.__tempT;\n  }\n});\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u8fd9\u91cc\uff0c\u81ea\u5b9a\u4e49\u52a8\u753b\u63d2\u503c\u4f9d\u8d56\u7684 API \u4e3a ",(0,i.jsx)(n.code,{children:"during"})," \u56de\u8c03\uff0c",(0,i.jsxs)(n.strong,{children:["\u4e0d\u8fc7\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u4e3a\u4e86\u80fd\u8ba9\u52a8\u753b\u6210\u529f\u6267\u884c\uff0c\u6211\u4eec\u9700\u8981\u7ed9\u5143\u7d20\u4e00\u4e2a\u4e34\u65f6\u5c5e\u6027\uff08\u4f8b\u5982\u4ee5\u4e0a\u7684 ",(0,i.jsx)(n.code,{children:"__tempT"}),"\uff09\u6765\u542f\u52a8\u52a8\u753b\uff0c\u5426\u5219\u7a7a\u5c5e\u6027\u65e0\u6cd5\u6267\u884c\u5143\u7d20\u7684\u52a8\u753b"]}),"\uff0c\u90a3\u4e48 ",(0,i.jsx)(n.code,{children:"during"})," \u56de\u8c03\u4e5f\u5c31\u4e0d\u4f1a\u88ab\u8c03\u7528\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u5728 ECharts \u7684\u5b98\u65b9\u914d\u7f6e\u9879\u6587\u6863\u4e2d\u6211\u4eec\u4e5f\u53ef\u4ee5\u627e\u5230",(0,i.jsx)(n.a,{href:"https://echarts.apache.org/zh/option.html#series-custom.renderItem.return_path.during",children:"\u76f8\u5e94\u7684\u914d\u7f6e\u9879"}),"\u8bf4\u660e\u3002"]}),"\n",(0,i.jsxs)(n.admonition,{type:"note",children:[(0,i.jsx)(n.p,{children:"\u4ee5\u4e0a\u6240\u8ff0\u4e3a\u4e24\u7c7b\u52a8\u753b\uff1a"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u5173\u952e\u5e27\u52a8\u753b"}),"\n",(0,i.jsx)(n.li,{children:"\u5e27\u52a8\u753b"}),"\n"]}),(0,i.jsxs)(n.p,{children:["\u5173\u952e\u5e27\u52a8\u753b\u53ea\u9700\u8981\u6211\u4eec\u7ed9\u51fa\u8d77\u59cb\u6001\u548c\u7ec8\u6b62\u6001\uff0c\u6846\u67b6\u5185\u90e8\u4f1a\u5b8c\u6210\u63d2\u503c\u8ba1\u7b97\uff0c\u76f8\u5bf9\u6765\u8bf4\u7b80\u5355\u4e00\u4e9b\uff0cECharts \u7684\u5b98\u65b9\u914d\u7f6e\u9879\u6587\u6863\u4e2d\u4e5f\u6709",(0,i.jsx)(n.a,{href:"https://echarts.apache.org/zh/option.html#series-custom.renderItem.return_path.keyframeAnimation",children:"\u63d0\u53ca"}),"\uff1b\u53e6\u5916\u5728\u4e00\u4e9b\u9ad8\u5ea6\u5b9a\u5236\u5316\u7684\u9700\u6c42\u573a\u666f\u4e2d\uff0c\u6211\u4eec\u53ef\u80fd\u9700\u8981\u66f4\u7075\u6d3b\u7684\u63a7\u5236\u52a8\u753b\u6bcf\u4e00\u5e27\u7684\u72b6\u6001\uff0c\u5373\u5b9e\u73b0\u81ea\u5b9a\u4e49\u63d2\u503c\u903b\u8f91\uff0c\u8fd9\u5c31\u662f\u5e27\u52a8\u753b\u3002"]})]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["\u53ef\u4ee5\u53c2\u8003 ZRender \u5b98\u65b9 APIs \u6587\u6863\u4e2d\u7684",(0,i.jsx)(n.a,{href:"https://ecomfe.github.io/zrender-doc/public/api.html#zrenderanimatable",children:"\u52a8\u753b\u76f8\u5173\u5185\u5bb9"}),"\uff0c",(0,i.jsx)(n.strong,{children:"\u4f46\u9700\u8981\u6ce8\u610f\u7531\u4e8e\u66f4\u65b0\u4e0d\u53ca\u65f6\uff0c\u6587\u6863\u4e2d\u7684\u5927\u591a\u6570\u4fe1\u606f\u662f\u57fa\u4e8e ZRender v4 \u7248\u672c\u7684"}),"\u3002"]})}),"\n",(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsx)(n.p,{children:"\u52a8\u753b\u76f8\u5173\u7684 APIs \u4e5f\u53ef\u4ee5\u53c2\u8003\u4ee5\u4e0b\u6587\u6863\uff1a"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/echarts-api-docs/docs/zrender-reference/api/Element#%E5%8A%A8%E7%94%BB",children:"Element"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/echarts-api-docs/docs/zrender-reference/api/Animator",children:"Animator"})}),"\n"]})]}),"\n",(0,i.jsx)(n.h3,{id:"\u52a8\u753b\u8f85\u52a9\u51fd\u6570",children:"\u52a8\u753b\u8f85\u52a9\u51fd\u6570"}),"\n",(0,i.jsxs)(n.p,{children:["\u5b9e\u9645\u4e0a\uff0cECharts \u7ec4\u4ef6\u5e93\u5185\u90e8\u4e3a\u4e86\u65b9\u4fbf\u4ee5\u7edf\u4e00\u7684\u65b9\u5f0f\u5904\u7406\u5143\u7d20\u7684\u8fc7\u6e21\u52a8\u753b\uff0c\u5c01\u88c5\u4e86",(0,i.jsx)(n.a,{href:"https://github.com/apache/echarts/blob/5.3.3/src/animation/basicTrasition.ts",children:"\u5355\u72ec\u7684\u6a21\u5757"}),"\u6765\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c\u5728\u5f00\u53d1\u63d2\u4ef6\u8fc7\u7a0b\u4e2d\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u3002"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/apache/echarts/blob/5.3.3/src/animation/basicTrasition.ts#L241",children:(0,i.jsx)(n.code,{children:"initProps()"})}),"\uff1a\u5165\u573a\u52a8\u753b"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/apache/echarts/blob/5.3.3/src/animation/basicTrasition.ts#L219",children:(0,i.jsx)(n.code,{children:"updateProps()"})}),"\uff1a\u66f4\u65b0\u52a8\u753b"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/apache/echarts/blob/5.3.3/src/animation/basicTrasition.ts#L272",children:(0,i.jsx)(n.code,{children:"removeElement()"})}),"\uff1a\u79bb\u573a\u52a8\u753b"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/apache/echarts/blob/5.3.3/src/animation/basicTrasition.ts#L303",children:(0,i.jsx)(n.code,{children:"removeElementWithFadeOut()"})}),"\uff1a\u6de1\u51fa\u52a8\u753b\uff08\u79fb\u9664\u5143\u7d20\uff09"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u793a\u4f8b\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"data.diff(oldData)\n  .add(dataIndex => {\n    const itemModel = data.getItemModel(dataIndex);\n    const el = new graphic.Rect();\n\n    // highlight-next-line\n    initProps(el, itemModel.itemStyle, seriesModel, dataIndex);\n    data.setItemGraphicEl(dataIndex, el);\n  })\n  .update((newIndex, oldIndex) => {\n    const itemModel = data.getItemModel(newIndex);\n    const el = oldData.getItemGraphicEl(oldIndex);\n\n    // highlight-next-line\n    updateProps(el, itemModel.itemStyle, seriesModel, newIndex);\n    data.setItemGraphicEl(newIndex, el);\n  })\n  .remove(dataIndex => {\n    const el = oldData.getItemGraphicEl(dataIndex);\n\n    // highlight-next-line\n    removeElementWithFadeOut(el, seriesModel, dataIndex);\n  })\n  .execute();\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c",(0,i.jsx)(n.code,{children:"removeElement()"})," \u548c ",(0,i.jsx)(n.code,{children:"removeElementWithFadeOut()"})," \u4e4b\u95f4\u6709\u4e00\u4e2a\u5173\u952e\u7684\u5dee\u5f02\uff0c\u524d\u8005\u53ea\u8d1f\u8d23\u6267\u884c\u52a8\u753b\uff0c\u800c\u4e0d\u79fb\u9664\u5143\u7d20\uff0c\u6240\u4ee5\u9700\u8981\u5728\u52a8\u753b\u5b8c\u6210\u56de\u8c03\u4e2d\u624b\u52a8\u79fb\u9664\u5143\u7d20\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"removeElement(el, props, seriesModel, {\n  cb: () => {\n    el.parent && el.parent.remove(el);\n  }\n});\n"})}),"\n",(0,i.jsx)(n.h3,{id:"\u4ea4\u4e92\u72b6\u6001\u52a8\u753b",children:"\u4ea4\u4e92\u72b6\u6001\u52a8\u753b"}),"\n",(0,i.jsxs)(n.p,{children:["\u524d\u9762\u6211\u4eec\u63a2\u8ba8\u7684\u90fd\u662f\u6570\u636e\u53d8\u5316\u5f15\u8d77\u7684\u89c6\u56fe\u66f4\u65b0\u52a8\u753b\uff0c\u5176\u5b9e ECharts \u8fd8\u6709\u4e00\u7c7b\u52a8\u753b\uff0c\u5373",(0,i.jsx)(n.strong,{children:"\u7531\u4ea4\u4e92\u72b6\u6001\u53d1\u751f\u53d8\u5316\u5f15\u8d77\u7684\u89c6\u56fe\u66f4\u65b0\u52a8\u753b"}),"\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u4e3e\u4e00\u4e2a\u7b80\u5355\u7684\u4f8b\u5b50\u6765\u7406\u89e3\u4ea4\u4e92\u72b6\u6001\u52a8\u753b\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",children:"button {\n  background-color: #fff;\n  // highlight-next-line\n  transition: all .4s linear;\n}\n\nbutton:hover {\n  background-color: #000;\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u4e0a\u8ff0\u7684\u4ee3\u7801\u7247\u6bb5\u5c55\u793a\u4e86\u4e00\u4e2a ",(0,i.jsx)(n.code,{children:"<button>"})," \u6807\u7b7e\u7684\u6837\u5f0f\u5b9a\u4e49\uff0c\u5176\u4e2d\u5305\u542b\u4e86\u57fa\u7840\u6837\u5f0f\uff0c\u4ee5\u53ca\u9f20\u6807\u60ac\u6d6e\uff08hover\uff09\u7684\u6837\u5f0f\uff0c\u5373\u9f20\u6807\u4ea4\u4e92\u7684\u6837\u5f0f\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u9f20\u6807\u60ac\u6d6e\u5728\u6309\u94ae\u4e0a\u65f6\uff0c\u80cc\u666f\u8272\u5c06\u76f4\u63a5\u66f4\u65b0\uff0c\u4e0d\u8fc7\u50cf\u4e0a\u8ff0\u4ee3\u7801\u6dfb\u52a0\u4e86 ",(0,i.jsx)(n.code,{children:"transition"})," \u7684\u6837\u5f0f\u5c5e\u6027\u540e\uff0c\u9f20\u6807\u4ea4\u4e92\u5f15\u8d77\u7684\u80cc\u666f\u8272\u53d8\u5316\u5c06\u6709\u4e00\u4e2a\u8fc7\u6e21\u52a8\u753b\u6548\u679c\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u540c\u6837\u7684\uff0cECharts \u4e5f\u6709\u4ea4\u4e92\u72b6\u6001\uff08\u6837\u5f0f\uff09\u7684\u8bbe\u8ba1\uff0c\u8fd9\u4e2a\u5728",(0,i.jsx)(n.a,{href:"/echarts-api-docs/docs/guide/modules/event#%E4%BA%A4%E4%BA%92%E7%8A%B6%E6%80%81",children:"\u4e8b\u4ef6\u4e0e\u4ea4\u4e92"}),"\u4e00\u8282\u4e2d\u4f1a\u8fdb\u884c\u8be6\u7ec6\u8bf4\u660e\uff0c\u5728\u8fd9\u91cc\u9700\u8981\u4e86\u89e3\u7684\u662f\u5982\u4f55\u6dfb\u52a0\uff08\u5f00\u542f\uff09\u5143\u7d20\u7684\u4ea4\u4e92\u72b6\u6001\u66f4\u65b0\u52a8\u753b\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"const rect = new Rect();\n\n// highlight-start\nrect.stateTransition = {\n  duration: 400,\n  easing: 'ease-in',\n  during: (percent) => {}\n};\n// highlight-end\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u5982\u4e0a\u6240\u793a\uff0cZRender \u5143\u7d20\u6709\u4e00\u4e2a ",(0,i.jsx)(n.a,{href:"https://github.com/ecomfe/zrender/blob/5.3.2/src/Element.ts#L421",children:(0,i.jsx)(n.code,{children:"stateTransition"})})," \u5c5e\u6027\u53ef\u7528\u6765\u8bbe\u7f6e\u4ea4\u4e92\u72b6\u6001\u7684\u8fc7\u6e21\u52a8\u753b\u3002"]}),"\n",(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsx)(n.p,{children:"\u4ea4\u4e92\u72b6\u6001\u52a8\u753b\u76f8\u5173\u7684 APIs \u4e5f\u53ef\u4ee5\u53c2\u8003\u4ee5\u4e0b\u6587\u6863\uff1a"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/echarts-api-docs/docs/zrender-reference/api/Element#%E7%8A%B6%E6%80%81",children:"Element"})}),"\n"]})]})]})}function o(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>l});var i=t(6540);const s={},r=i.createContext(s);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);