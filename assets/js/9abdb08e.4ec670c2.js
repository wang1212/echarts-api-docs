"use strict";(self.webpackChunkecharts_api_docs=self.webpackChunkecharts_api_docs||[]).push([[8004],{50:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var s=t(4848),i=t(8453);const a={},r="\u4e8b\u4ef6\u4e0e\u4ea4\u4e92",o={id:"guide/modules/event",title:"\u4e8b\u4ef6\u4e0e\u4ea4\u4e92",description:"\u672c\u8282\u5185\u5bb9\u4e3b\u8981\u662f\u5173\u4e8e ECharts \u4e8b\u4ef6\u548c\u4ea4\u4e92\u884c\u4e3a\u4e24\u65b9\u9762\u7684\u5185\u5bb9\uff0c\u5c06\u5176\u653e\u5728\u4e00\u8d77\u662f\u56e0\u4e3a\u901a\u5e38\u6765\u8bf4\u4ea4\u4e92\u662f\u7531\u4e8b\u4ef6\u89e6\u53d1\u7684\uff0c\u800c\u4ea4\u4e92\u53d1\u751f\u7684\u540c\u65f6\u4e5f\u9700\u8981\u66b4\u9732\u4e00\u4e9b\u4ea4\u4e92\u4e8b\u4ef6\u3002",source:"@site/docs/0-guide/4-modules/4-event.md",sourceDirName:"0-guide/4-modules",slug:"/guide/modules/event",permalink:"/echarts-api-docs/docs/guide/modules/event",draft:!1,unlisted:!1,editUrl:"https://github.com/wang1212/echarts-api-docs/tree/main/docs/0-guide/4-modules/4-event.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"guideSidebar",previous:{title:"\u52a8\u753b",permalink:"/echarts-api-docs/docs/guide/modules/animation"},next:{title:"\u81ea\u5b9a\u4e49\u7cfb\u5217",permalink:"/echarts-api-docs/docs/guide/modules/custom-series"}},c={},l=[{value:"\u4e8b\u4ef6\u4e0e\u4ea4\u4e92\u673a\u5236\u8bbe\u8ba1",id:"\u4e8b\u4ef6\u4e0e\u4ea4\u4e92\u673a\u5236\u8bbe\u8ba1",level:2},{value:"\u4e8b\u4ef6 APIs",id:"\u4e8b\u4ef6-apis",level:3},{value:"\u4ea4\u4e92 APIs",id:"\u4ea4\u4e92-apis",level:3},{value:"\u4e8b\u4ef6\u4e0e\u4ea4\u4e92\u7684\u5b9e\u73b0",id:"\u4e8b\u4ef6\u4e0e\u4ea4\u4e92\u7684\u5b9e\u73b0",level:3},{value:"\u4ea4\u4e92\u72b6\u6001",id:"\u4ea4\u4e92\u72b6\u6001",level:3},{value:"\u72b6\u6001 APIs",id:"\u72b6\u6001-apis",level:4}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"\u4e8b\u4ef6\u4e0e\u4ea4\u4e92",children:"\u4e8b\u4ef6\u4e0e\u4ea4\u4e92"}),"\n",(0,s.jsx)(n.p,{children:"\u672c\u8282\u5185\u5bb9\u4e3b\u8981\u662f\u5173\u4e8e ECharts \u4e8b\u4ef6\u548c\u4ea4\u4e92\u884c\u4e3a\u4e24\u65b9\u9762\u7684\u5185\u5bb9\uff0c\u5c06\u5176\u653e\u5728\u4e00\u8d77\u662f\u56e0\u4e3a\u901a\u5e38\u6765\u8bf4\u4ea4\u4e92\u662f\u7531\u4e8b\u4ef6\u89e6\u53d1\u7684\uff0c\u800c\u4ea4\u4e92\u53d1\u751f\u7684\u540c\u65f6\u4e5f\u9700\u8981\u66b4\u9732\u4e00\u4e9b\u4ea4\u4e92\u4e8b\u4ef6\u3002"}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["\u53c2\u8003 ECharts \u5b98\u65b9\u5173\u4e8e",(0,s.jsx)(n.a,{href:"https://echarts.apache.org/handbook/zh/concepts/event",children:"\u4e8b\u4ef6\u4e0e\u884c\u4e3a"}),"\u7684\u8bf4\u660e\u6587\u6863\u3002"]})}),"\n",(0,s.jsx)(n.h2,{id:"\u4e8b\u4ef6\u4e0e\u4ea4\u4e92\u673a\u5236\u8bbe\u8ba1",children:"\u4e8b\u4ef6\u4e0e\u4ea4\u4e92\u673a\u5236\u8bbe\u8ba1"}),"\n",(0,s.jsx)(n.mermaid,{value:'---\ntitle: echarts event and interaction design\n---\nflowchart LR\n    use["use()"]\n    API\n    Model\n    View\n    Action:::keyNode\n    Event["Action Event"]:::keyNode\n    Event0["User Event"]:::keyNode\n\n    use-- "registerAction()" --\x3eAction\n    API-- "dispatchAction()" --\x3eAction\n    Event0-. "dispatchAction()" .->Action\n    Action-- "call method" --\x3eModel\n    Model-- "update" --\x3eView\n    Action-- "call method" --\x3eView\n    View-. "trigger" .->Event\n\n    classDef keyNode stroke-width: 4px'}),"\n",(0,s.jsxs)(n.p,{children:["\u4e0a\u56fe\u5c31\u662f ECharts \u5bf9\u4e8b\u4ef6\u548c\u4ea4\u4e92\u884c\u4e3a\u7684\u6574\u4f53\u8bbe\u8ba1\uff0c",(0,s.jsxs)(n.strong,{children:["\u5373\u5148\u5229\u7528 ",(0,s.jsx)(n.code,{children:"use()"})," API \u6ce8\u518c\u4e00\u4e2a\u4ea4\u4e92\u884c\u4e3a\uff08Action\uff09\uff0c\u67d0\u4e00\u65f6\u523b\u7528\u6237\u4e8b\u4ef6\uff08User Event\uff09\u89e6\u53d1\u4ea4\u4e92\u884c\u4e3a\uff08Action\uff09\u903b\u8f91\uff0c\u8fdb\u800c\u8c03\u7528\u6570\u636e\u5c42\uff08Model\uff09/\u89c6\u56fe\u5c42\uff08View\uff09\u7684\u65b9\u6cd5\u89e6\u53d1\u89c6\u56fe\u66f4\u65b0\uff0c\u6700\u540e\u89e6\u53d1\u4ea4\u4e92\u4e8b\u4ef6\uff08Action Event\uff09\u901a\u77e5\u7528\u6237\u5f53\u524d\u7684\u4ea4\u4e92\u72b6\u6001"]}),"\u3002\u8fd9\u91cc\uff0c\u6211\u4eec\u5c06\u4e8b\u4ef6\u5206\u4e3a\u7528\u6237\u4e8b\u4ef6\u548c\u4ea4\u4e92\u4e8b\u4ef6\u4e24\u7c7b\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u4e3e\u4f8b\u8bf4\u660e\uff0cECharts \u7684 DataZoom \u7ec4\u4ef6\u53ef\u4ee5\u54cd\u5e94\u7528\u6237\u7684\u62d6\u52a8\u884c\u4e3a\uff0c\u68c0\u6d4b\u5230\u7ec4\u4ef6\u5143\u7d20\u7684\u62d6\u52a8\u4e8b\u4ef6\uff08\u7528\u6237\u4e8b\u4ef6\uff09\u65f6\uff0c\u89e6\u53d1\u7ec4\u4ef6\u6ce8\u518c\u7684\u7528\u6765\u66f4\u65b0\u72b6\u6001\u7684",(0,s.jsx)(n.a,{href:"https://echarts.apache.org/zh/api.html#action.dataZoom",children:"\u4ea4\u4e92\u884c\u4e3a\uff08Action\uff09"}),"\uff0c\u5728\u5b8c\u6210\u89c6\u56fe\u66f4\u65b0\u540e\uff0c\u8fd8\u4f1a\u89e6\u53d1\u76f8\u5e94\u7684",(0,s.jsx)(n.a,{href:"https://echarts.apache.org/zh/api.html#events.datazoom",children:"\u4e8b\u4ef6"}),"\u6765\u901a\u77e5\u7528\u6237\u5f53\u524d\u72b6\u6001\u5df2\u53d1\u751f\u53d8\u5316\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"\u4e8b\u4ef6-apis",children:"\u4e8b\u4ef6 APIs"}),"\n",(0,s.jsxs)(n.p,{children:["\u4e8b\u4ef6\u76f8\u5173\u7684 APIs \u8bbe\u8ba1\u9075\u5faa\u7ecf\u5178\u7684\u4e8b\u4ef6\u6a21\u578b\uff0c\u5176\u5177\u4f53\u5b9e\u73b0\u4e3a ",(0,s.jsxs)(n.a,{href:"https://github.com/ecomfe/zrender/blob/5.3.2/src/core/Eventful.ts",children:["ZRender \u7684 ",(0,s.jsx)(n.code,{children:"Eventful"})," \u7c7b"]}),"\uff0cECharts \u7c7b\u3001ZRender \u7c7b\u4ee5\u53ca ZRender \u7684\u5143\u7d20\uff08Element\uff09\u7c7b\u5747\u7ee7\u627f\u81ea\u8be5\u7c7b\uff0c\u6240\u4ee5 ",(0,s.jsx)(n.strong,{children:"ECharts \u5b9e\u4f8b\u3001ZRender \u5b9e\u4f8b\u3001ZRender \u5143\u7d20\u5b9e\u4f8b"}),"\u5747\u652f\u6301\u4ee5\u4e0b\u4e8b\u4ef6 APIs\uff1a"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/ecomfe/zrender/blob/5.3.2/src/core/Eventful.ts#L98",children:(0,s.jsx)(n.code,{children:"on()"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/ecomfe/zrender/blob/5.3.2/src/core/Eventful.ts#L169",children:(0,s.jsx)(n.code,{children:"off()"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/ecomfe/zrender/blob/5.3.2/src/core/Eventful.ts#L208",children:(0,s.jsx)(n.code,{children:"trigger()"})})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u4e00\u822c\u6765\u8bf4\uff0c",(0,s.jsx)(n.strong,{children:"ECharts \u5b9e\u4f8b\u4e0a\u7684\u4e8b\u4ef6\u662f\u4ea4\u4e92\u4e8b\u4ef6\uff08Action Event\uff09\uff0c\u800c ZRender \u5b9e\u4f8b\u3001ZRender \u5143\u7d20\u5b9e\u4f8b\u4e0a\u7684\u662f\u7528\u6237\u4e8b\u4ef6"}),"\u3002"]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["\u76f8\u5173 APIs \u53ef\u4ee5\u53c2\u8003 ",(0,s.jsx)(n.a,{href:"https://echarts.apache.org/zh/api.html#events",children:"ECharts \u5b98\u65b9\u6587\u6863"}),"\u548c ",(0,s.jsx)(n.a,{href:"https://ecomfe.github.io/zrender-doc/public/api.html#oneventname-eventhandler-context",children:"ZRender \u5b98\u65b9\u6587\u6863"}),"\u3002"]})}),"\n",(0,s.jsx)(n.h3,{id:"\u4ea4\u4e92-apis",children:"\u4ea4\u4e92 APIs"}),"\n",(0,s.jsx)(n.p,{children:"\u4ea4\u4e92\u884c\u4e3a\u4e0e\u4e8b\u4ef6\u7c7b\u4f3c\uff0c\u5176 APIs \u4e3a\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/apache/echarts/blob/5.3.3/src/core/echarts.ts#L2822",children:(0,s.jsx)(n.code,{children:"registerAction()"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/apache/echarts/blob/5.3.3/src/core/echarts.ts#L1338",children:(0,s.jsx)(n.code,{children:"dispatchAction()"})})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u8fd9\u91cc\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u6839\u636e\u6e90\u7801\u5b9e\u73b0\u6765\u770b ",(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(n.code,{children:"dispatchAction()"})," API \u7684\u7b2c\u4e8c\u4e2a\u53c2\u6570\u7684 ",(0,s.jsx)(n.code,{children:"silent"})," \u5b57\u6bb5\u53ef\u4ee5\u7528\u6765\u8bbe\u7f6e\u662f\u5426\u540c\u65f6\u8981\u89e6\u53d1\u4ea4\u4e92\u4e8b\u4ef6\uff0c\u9ed8\u8ba4\u4f1a\u89e6\u53d1"]}),"\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",metastring:'title="https://github.com/apache/echarts/blob/5.3.3/src/core/echarts.ts#L1338"',children:"/**\n * @param opt If pass boolean, means opt.silent\n * @param opt.silent Default `false`. Whether trigger events.\n * @param opt.flush Default `undefined`.\n *        true: Flush immediately, and then pixel in canvas can be fetched\n *            immediately. Caution: it might affect performance.\n *        false: Not flush.\n *        undefined: Auto decide whether perform flush.\n */\ndispatchAction(\n    payload: Payload,\n    opt?: boolean | {\n        silent?: boolean,\n        flush?: boolean | undefined\n    }\n): void {\n    // ...\n\n    const silent = opt.silent;\n    doDispatchAction.call(this, payload, silent);\n\n    // ...\n}\n\ndoDispatchAction = function (this: ECharts, payload: Payload, silent: boolean): void {\n    // ...\n    if (!silent) {\n        const messageCenter = this._messageCenter;\n        // highlight-next-line\n        messageCenter.trigger(eventObj.type, eventObj);\n        // Extra triggered 'selectchanged' event\n        if (isSelectChange) {\n            const newObj: SelectChangedPayload = {\n                type: 'selectchanged',\n                escapeConnect: escapeConnect,\n                selected: getAllSelectedIndices(ecModel),\n                isFromClick: payload.isFromClick || false,\n                fromAction: payload.type as 'select' | 'unselect' | 'toggleSelected',\n                fromActionPayload: payload\n            };\n            // highlight-next-line\n            messageCenter.trigger(newObj.type, newObj);\n        }\n    }\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u53e6\u5916\uff0c\u8fd8\u9700\u8981\u6ce8\u610f\uff0c",(0,s.jsx)(n.code,{children:"registerAction()"})," API \u6709\u4e24\u4e2a\u53c2\u6570\u503c\u5f97\u5173\u6ce8\uff0c\u5176\u4e2d\u4e00\u4e2a\u662f ",(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(n.code,{children:"event"})," \u5b57\u6bb5\uff0c\u7528\u6765\u6307\u5b9a\u89e6\u53d1\u4ea4\u4e92\u4e8b\u4ef6\u7684\u7c7b\u578b\uff0c\u5982\u679c\u4e0d\u6307\u5b9a\u5219\u53d6 Action \u7684 ",(0,s.jsx)(n.code,{children:"type"})," \u5b57\u6bb5"]}),"\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",metastring:'title=""',children:"doDispatchAction = function (this: ECharts, payload: Payload, silent: boolean): void {\n    // ...\n    // highlight-next-line\n    eventObj.type = actionInfo.event || eventObj.type;\n\n    // ...\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u53e6\u4e00\u4e2a\u5219\u662f ",(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(n.code,{children:"update"})," \u5b57\u6bb5\uff0c\u7528\u6765\u6307\u5b9a\u662f\u5426\u8981\u89e6\u53d1\u6574\u4f53\u7684\u66f4\u65b0\u6d41\u7a0b\u548c\u8981\u8c03\u7528\u7684\u66f4\u65b0\u65b9\u6cd5"]}),"\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",metastring:'title="https://github.com/apache/echarts/blob/5.3.3/src/core/echarts.ts#L1935"',children:"doDispatchAction = function (this: ECharts, payload: Payload, silent: boolean): void {\n    // ...\n    // highlight-next-line\n    const cptTypeTmp = (actionInfo.update || 'update').split(':');\n    const updateMethod = cptTypeTmp.pop();\n\n    // ...\n    if (updateMethod !== 'none' && !isHighDown && !isSelectChange && !cptType) {\n        try {\n            // Still dirty\n            if (this[PENDING_UPDATE]) {\n                prepare(this);\n                // highlight-next-line\n                updateMethods.update.call(this, payload);\n                this[PENDING_UPDATE] = null;\n            }\n            else {\n                // highlight-next-line\n                updateMethods[updateMethod as keyof typeof updateMethods].call(this, payload);\n            }\n        }\n        catch (e) {\n            this[IN_MAIN_PROCESS_KEY] = false;\n            throw e;\n        }\n    }\n\n    // ...\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u8fd9\u91cc\u7ed9\u51fa\u4e00\u4e2a AxisPointer \u7ec4\u4ef6\u7684\u6848\u4f8b\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",metastring:'title="https://github.com/apache/echarts/blob/5.3.3/src/component/axisPointer/install.ts#L64"',children:"export function install(registers: EChartsExtensionInstallRegisters) {\n    // ...\n\n    // Broadcast to all views.\n    registers.registerAction({\n        type: 'updateAxisPointer',\n        // highlight-next-line\n        event: 'updateAxisPointer',\n        // highlight-next-line\n        update: ':updateAxisPointer'\n    }, axisTrigger);\n}\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["\u76f8\u5173 APIs \u53ef\u4ee5\u53c2\u8003 ",(0,s.jsx)(n.a,{href:"https://echarts.apache.org/zh/api.html#echartsInstance.dispatchAction",children:"ECharts \u5b98\u65b9\u6587\u6863"}),"\u3002"]})}),"\n",(0,s.jsx)(n.h3,{id:"\u4e8b\u4ef6\u4e0e\u4ea4\u4e92\u7684\u5b9e\u73b0",children:"\u4e8b\u4ef6\u4e0e\u4ea4\u4e92\u7684\u5b9e\u73b0"}),"\n",(0,s.jsxs)(n.p,{children:["\u4e0b\u9762\u4ee5 ",(0,s.jsxs)(n.a,{href:"https://echarts.apache.org/zh/option.html#dataZoom-slider",children:["DataZoom(",(0,s.jsx)(n.code,{children:"type: 'slider'"}),") \u7ec4\u4ef6"]}),"\u7684\u5b9e\u73b0\u4e3a\u6848\u4f8b\u8fdb\u884c\u7b80\u5355\u7684\u4ecb\u7ecd\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5148\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"registerAction()"})," API \u6ce8\u518c\u4ea4\u4e92\u884c\u4e3a\uff0c\u5176\u5b9e\u73b0\u903b\u8f91\u4e2d\u8c03\u7528\u4e86\u6570\u636e\u5c42\uff08Model\uff09\u5b9e\u4f8b\u7684\u65b9\u6cd5\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",metastring:'title="https://github.com/apache/echarts/blob/5.3.3/src/component/dataZoom/dataZoomAction.ts#L26"',children:"export default function installDataZoomAction(registers: EChartsExtensionInstallRegisters) {\n    // highlight-start\n    registers.registerAction('dataZoom', function (payload, ecModel: GlobalModel) {\n\n        const effectedModels = findEffectedDataZooms(ecModel, payload);\n\n        each(effectedModels, function (dataZoomModel) {\n            dataZoomModel.setRawRange({\n                start: payload.start,\n                end: payload.end,\n                startValue: payload.startValue,\n                endValue: payload.endValue\n            });\n        });\n\n    });\n    // highlight-end\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5728\u89c6\u56fe\u5c42\uff08View\uff09\u901a\u8fc7 ",(0,s.jsx)(n.code,{children:"on()"})," API \u76d1\u542c\u5143\u7d20\u7684\u7528\u6237\u4ea4\u4e92\u4e8b\u4ef6\uff0c\u7136\u540e\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"dispatchAction()"})," API \u89e6\u53d1\u4ea4\u4e92\u884c\u4e3a\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",metastring:'title="https://github.com/apache/echarts/blob/5.3.3/src/component/dataZoom/SliderZoomView.ts#L85"',children:"class SliderZoomView {\n    private _renderHandle() {\n        // ...\n\n        actualMoveZone.attr({\n            draggable: true,\n            cursor: getCursor(this._orient),\n            drift: bind(this._onDragMove, this, 'all'),\n            ondragstart: bind(this._showDataInfo, this, true),\n            // highlight-next-line\n            ondragend: bind(this._onDragEnd, this),\n            onmouseover: bind(this._showDataInfo, this, true),\n            onmouseout: bind(this._showDataInfo, this, false)\n        });\n    }\n\n    private _onDragEnd() {\n        this._dragging = false;\n        this._showDataInfo(false);\n\n        // While in realtime mode and stream mode, dispatch action when\n        // drag end will cause the whole view rerender, which is unnecessary.\n        const realtime = this.dataZoomModel.get('realtime');\n        // highlight-next-line\n        !realtime && this._dispatchZoomAction(false);\n    }\n\n    _dispatchZoomAction(realtime: boolean) {\n        const range = this._range;\n\n        // highlight-start\n        this.api.dispatchAction({\n            type: 'dataZoom',\n            from: this.uid,\n            dataZoomId: this.dataZoomModel.id,\n            animation: realtime ? REALTIME_ANIMATION_CONFIG : null,\n            start: range[0],\n            end: range[1]\n        });\n        // highlight-end\n    }\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u4ea4\u4e92\u72b6\u6001",children:"\u4ea4\u4e92\u72b6\u6001"}),"\n",(0,s.jsx)(n.p,{children:"\u524d\u9762\u6240\u8ff0\u5185\u5bb9\u5173\u6ce8\u7684\u90fd\u662f\u6574\u4f53\u4ea4\u4e92\u6d41\u7a0b\uff0c\u9488\u5bf9 ZRender \u5143\u7d20\u5982\u4f55\u54cd\u5e94\u4ea4\u4e92\u884c\u4e3a\uff0cECharts \u8bbe\u8ba1\u4e86\u5143\u7d20\u7684**\u72b6\u6001\uff08state\uff09**\u8fd9\u4e00\u6982\u5ff5\u3002\u4ee5\u5e38\u89c4\u7684 CSS \u6765\u4e3e\u4f8b\u8bf4\u660e\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-css",children:"a {}\na:visited {}\na:hover {}\na:active {}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u4ee5\u4e0a\u5c31\u662f\u7ecf\u5178\u7684 ",(0,s.jsx)(n.code,{children:"<a>"})," \u6807\u7b7e\u7684 4 \u79cd\u72b6\u6001\u6837\u5f0f\uff0cECharts \u8bbe\u8ba1\u7684\u5143\u7d20\u72b6\u6001\u4e5f\u662f\u7c7b\u4f3c\u7684\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",metastring:'title="https://github.com/apache/echarts/blob/5.3.3/src/util/states.ts#L86"',children:"export const SPECIAL_STATES = ['emphasis', 'blur', 'select'] as const;\nexport const DISPLAY_STATES = ['normal', 'emphasis', 'blur', 'select'] as const;\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u4ee5\u4e0a\u662f ECharts \u5b9a\u4e49\u7684\u5168\u5c40\u7edf\u4e00\u7684\u72b6\u6001\u5206\u7c7b\uff0c\u5728",(0,s.jsx)(n.a,{href:"https://echarts.apache.org/zh/option.html#series-line.emphasis",children:"\u5b98\u65b9\u914d\u7f6e\u9879\u6587\u6863"}),"\u4e2d\u4e5f\u968f\u5904\u53ef\u89c1\u3002\u800c\u9488\u5bf9\u8fd9\u4e9b\u72b6\u6001\u7684\u5904\u7406\u4e5f\u662f\u5728\u5168\u5c40\u5b9e\u73b0\u7684\uff0c\u800c\u4e0d\u662f\u7531\u5404\u4e2a\u7ec4\u4ef6\u81ea\u5df1\u5b9e\u73b0\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",metastring:'title="https://github.com/apache/echarts/blob/5.3.3/src/core/echarts.ts#L2032"',children:"bindMouseEvent = function (zr: zrender.ZRenderType, ecIns: ECharts): void {\n    zr.on('mouseover', function (e) {\n        const el = e.target;\n        const dispatcher = findEventDispatcher(el, isHighDownDispatcher);\n        if (dispatcher) {\n            // highlight-next-line\n            handleGlobalMouseOverForHighDown(dispatcher, e, ecIns._api);\n            markStatusToUpdate(ecIns);\n        }\n    }).on('mouseout', function (e) {\n        const el = e.target;\n        const dispatcher = findEventDispatcher(el, isHighDownDispatcher);\n        if (dispatcher) {\n            // highlight-next-line\n            handleGlobalMouseOutForHighDown(dispatcher, e, ecIns._api);\n            markStatusToUpdate(ecIns);\n        }\n    });\n};\n"})}),"\n",(0,s.jsx)(n.h4,{id:"\u72b6\u6001-apis",children:"\u72b6\u6001 APIs"}),"\n",(0,s.jsx)(n.p,{children:"\u4ee5\u4e0a\u662f\u5bf9 ECharts \u5982\u4f55\u7edf\u4e00\u5b9a\u4e49\u548c\u5904\u7406\u5143\u7d20\u72b6\u6001\u7684\u673a\u5236\u7684\u7b80\u8ff0\uff0c\u5177\u4f53\u5230\u67d0\u4e2a ZRender \u5143\u7d20\u5b9e\u4f8b\u4e0a\u65f6\uff0c\u6709\u76f8\u5e94\u7684 APIs \u6765\u5904\u7406\u72b6\u6001\u53d8\u5316\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u72b6\u6001\u5b9a\u4e49\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/ecomfe/zrender/blob/5.3.2/src/Element.ts#L416",children:(0,s.jsx)(n.code,{children:"states"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/ecomfe/zrender/blob/5.3.2/src/Element.ts#L429",children:(0,s.jsx)(n.code,{children:"stateProxy()"})})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\u72b6\u6001\u5207\u6362\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/ecomfe/zrender/blob/5.3.2/src/Element.ts#L837",children:(0,s.jsx)(n.code,{children:"useState()"})})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\u72b6\u6001\u8fc7\u6e21\u52a8\u753b\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/ecomfe/zrender/blob/5.3.2/src/Element.ts#L421",children:(0,s.jsx)(n.code,{children:"stateTransition"})})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u793a\u4f8b\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"// * \u4e3a\u5143\u7d20\u5b9e\u4f8b\u6dfb\u52a0\u4e00\u4e2a\u9f20\u6807\u7684 hover \u6548\u679c\n// \u4e3a\u5143\u7d20\u6ce8\u518c\u4e00\u4e2a hover \u72b6\u6001\u5bf9\u8c61\n// highlight-start\nel.states.hover = {\n  style: {\n    fill: 'red',\n  },\n};\n// highlight-end\n\n// \u8bbe\u7f6e\u5143\u7d20\u7684\u72b6\u6001\u8f6c\u6362\u52a8\u753b\n// highlight-start\nel.stateTransition = {\n  duration: 400,\n  done: () => {\n    console.log('switch state done!');\n  },\n};\n// highlight-end\n\n// \u6dfb\u52a0\u9f20\u6807\u4e8b\u4ef6\nel.onmouseover = function () {\n  // highlight-next-line\n  el.useState('hover', true);\n};\nel.onmouseover = function () {\n  // highlight-next-line\n  el.removeState('hover');\n};\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["\u72b6\u6001\u8fc7\u6e21\u52a8\u753b\u53ef\u4ee5\u67e5\u770b\u52a8\u753b\u4e00\u8282\u5173\u4e8e",(0,s.jsx)(n.a,{href:"/echarts-api-docs/docs/guide/modules/animation#%E4%BA%A4%E4%BA%92%E7%8A%B6%E6%80%81%E5%8A%A8%E7%94%BB",children:"\u4ea4\u4e92\u72b6\u6001\u52a8\u753b"}),"\u7684\u8bf4\u660e\u3002"]})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["\u76f8\u5173 APIs \u53ef\u4ee5\u53c2\u8003 ",(0,s.jsx)(n.a,{href:"/echarts-api-docs/docs/zrender-reference/api/Element#%E7%8A%B6%E6%80%81",children:"Element"}),"\u3002"]})})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var s=t(6540);const i={},a=s.createContext(i);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);