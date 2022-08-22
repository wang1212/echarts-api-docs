---
title: .Element
description: ZRender 的元素类
tags:
  - ZRender
  - Element
---

# `.Element`

ZRender 的 `Element` 元素类。

[_查看源码_](https://github.com/ecomfe/zrender/blob/5.3.2/src/Element.ts)

> [官方 APIs 文档](https://ecomfe.github.io/zrender-doc/public/api.html#zrenderelement)

## state

一系列与元素实例状态管理相关的 APIs。

示例：

```typescript
// * 为元素实例添加一个鼠标的 hover 效果
// 为元素注册一个 hover 状态对象
// highlight-start
el.states.hover = {
  style: {
    fill: 'red',
  },
};
// highlight-end

// 设置元素的状态转换动画
// highlight-start
el.stateTransition = {
  duration: 400,
  done: () => {
    console.log('switch state done!');
  },
};
// highlight-end

// 添加鼠标事件
el.onmouseover = function () {
  // highlight-next-line
  el.useState('hover', true);
};
el.onmouseover = function () {
  // highlight-next-line
  el.removeState('hover');
};
```

### states

`states: Dictionary<ElementState> = {}`

[_查看源码 (v5.0.0+)_](https://github.com/ecomfe/zrender/blob/5.3.2/src/Element.ts#L416)

元素实例的状态集合（状态是一个元素实例的属性集合）。

### stateTransition

`stateTransition: ElementAnimateConfig`

[_查看源码 (v5.0.0+)_](https://github.com/ecomfe/zrender/blob/5.3.2/src/Element.ts#L421)

元素实例的状态转换动画配置。

### currentStates

`currentStates?: string[] = []`

[_查看源码 (v5.0.0+)_](https://github.com/ecomfe/zrender/blob/5.3.2/src/Element.ts#L409)

元素实例当前已经应用的状态名称列表。

### useState()

`useState(stateName: string, keepCurrentStates?: boolean, noAnimation?: boolean, forceUseHoverLayer?: boolean)`

[_查看源码 (v5.0.0+)_](https://github.com/ecomfe/zrender/blob/5.3.2/src/Element.ts#L837)

使用状态。

参数：

| 名称               | 类型      | 默认值  | 描述                         |
| :----------------- | :-------- | :------ | :--------------------------- |
| stateName          | `string`  |         | 状态名称                     |
| keepCurrentStates  | `boolean` | `false` | 是否需要保持当前已应用的状态 |
| noAnimation        | `boolean` | `false` | 不需要动画过渡               |
| forceUseHoverLayer | `boolean` | `false` |                              |

返回值：

| 名称  | 类型                                                                                  | 描述                            |
| :---- | :------------------------------------------------------------------------------------ | :------------------------------ |
| state | [`ElementState`](https://github.com/ecomfe/zrender/blob/5.3.2/src/Element.ts#L268:13) | 参数 `stateName` 对应的状态对象 |

### useStates()

`useStates(states: string[], noAnimation?: boolean, forceUseHoverLayer?: boolean)`

[_查看源码 (v5.0.0+)_](https://github.com/ecomfe/zrender/blob/5.3.2/src/Element.ts#L939)

使用多个状态。

参数：

| 名称               | 类型       | 默认值  | 描述           |
| :----------------- | :--------- | :------ | :------------- |
| states             | `string[]` |         | 状态名称列表   |
| noAnimation        | `boolean`  | `false` | 不需要动画过渡 |
| forceUseHoverLayer | `boolean`  | `false` |                |

### removeState()

`removeState(state: string)`

[_查看源码 (v5.0.0+)_](https://github.com/ecomfe/zrender/blob/5.3.2/src/Element.ts#L1036)

移除状态。

参数：

| 名称  | 类型     | 默认值 | 描述     |
| :---- | :------- | :----- | :------- |
| state | `string` |        | 状态名称 |

### clearStates()

`clearStates(noAnimation?: boolean)`

[_查看源码 (v5.0.0+)_](https://github.com/ecomfe/zrender/blob/5.3.2/src/Element.ts#L825)

清空所有状态。

参数：

| 名称        | 类型      | 默认值  | 描述           |
| :---------- | :-------- | :------ | :------------- |
| noAnimation | `boolean` | `false` | 不需要动画过渡 |
