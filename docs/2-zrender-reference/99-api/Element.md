---
title: .Element
description: ZRender 的元素类
tags:
  - ZRender
  - Element
---

# .Element

ZRender 的 `Element` 元素类。

[_查看源码_](https://github.com/ecomfe/zrender/blob/5.3.2/src/Element.ts#L293)

> [官方 APIs 文档](https://ecomfe.github.io/zrender-doc/public/api.html#zrenderelement)

## 状态

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

### `states`

`states: Dictionary<ElementState> = {}`

[_查看源码 (v5.0.0+)_](https://github.com/ecomfe/zrender/blob/5.3.2/src/Element.ts#L416)

元素实例的状态集合（状态是一个元素实例的属性集合）。

### `stateProxy`

`stateProxy?: (stateName: string, targetStates?: string[]) => ElementState`

[_查看源码 (v5.0.0+)_](https://github.com/ecomfe/zrender/blob/5.3.2/src/Element.ts#L429)

元素实例的状态代理，可以通过状态名称动态生成状态对象。ZRender 首先会尝试通过 `stateProxy()` 获取元素的状态对象，其次才会访问 `states`。

### `stateTransition`

`stateTransition: ElementAnimateConfig`

[_查看源码 (v5.0.0+)_](https://github.com/ecomfe/zrender/blob/5.3.2/src/Element.ts#L421)

元素实例的状态转换动画配置。

### `currentStates`

`currentStates?: string[] = []`

[_查看源码 (v5.0.0+)_](https://github.com/ecomfe/zrender/blob/5.3.2/src/Element.ts#L409)

元素实例当前已经应用的状态名称列表。

### `ensureState()`

`ensureState(name: string): ElementState`

[_查看源码 (v5.0.0+)_](https://github.com/ecomfe/zrender/blob/5.3.2/src/Element.ts#L814)

确保状态对象存在（不存在就创建一个空的状态对象）。

参数

| 名称 | 类型     | 默认值 | 描述     |
| :--- | :------- | :----- | :------- |
| name | `string` |        | 状态名称 |

返回值

| 名称  | 类型                                                                                  | 描述                       |
| :---- | :------------------------------------------------------------------------------------ | :------------------------- |
| state | [`ElementState`](https://github.com/ecomfe/zrender/blob/5.3.2/src/Element.ts#L268:13) | 参数 `name` 对应的状态对象 |

### `getState()`

`getState(name: string)`

[_查看源码 (v5.0.0+)_](https://github.com/ecomfe/zrender/blob/5.3.2/src/Element.ts#L806)

获取指定的状态对象定义。

### `hasState()`

`hasState()`

[_查看源码 (v5.0.0+)_](https://github.com/ecomfe/zrender/blob/5.3.2/src/Element.ts#L799)

判断元素当前状态是否不为空。

### `useState()`

`useState(stateName: string, keepCurrentStates?: boolean, noAnimation?: boolean, forceUseHoverLayer?: boolean): ElementState`

[_查看源码 (v5.0.0+)_](https://github.com/ecomfe/zrender/blob/5.3.2/src/Element.ts#L837)

使用状态。

参数

| 名称               | 类型      | 默认值  | 描述                         |
| :----------------- | :-------- | :------ | :--------------------------- |
| stateName          | `string`  |         | 状态名称                     |
| keepCurrentStates  | `boolean` | `false` | 是否需要保持当前已应用的状态 |
| noAnimation        | `boolean` | `false` | 不需要动画过渡               |
| forceUseHoverLayer | `boolean` | `false` |                              |

返回值

| 名称  | 类型                                                                                  | 描述                            |
| :---- | :------------------------------------------------------------------------------------ | :------------------------------ |
| state | [`ElementState`](https://github.com/ecomfe/zrender/blob/5.3.2/src/Element.ts#L268:13) | 参数 `stateName` 对应的状态对象 |

### `useStates()`

`useStates(states: string[], noAnimation?: boolean, forceUseHoverLayer?: boolean)`

[_查看源码 (v5.0.0+)_](https://github.com/ecomfe/zrender/blob/5.3.2/src/Element.ts#L939)

使用多个状态。

参数

| 名称               | 类型       | 默认值  | 描述           |
| :----------------- | :--------- | :------ | :------------- |
| states             | `string[]` |         | 状态名称列表   |
| noAnimation        | `boolean`  | `false` | 不需要动画过渡 |
| forceUseHoverLayer | `boolean`  | `false` |                |

### `removeState()`

`removeState(state: string)`

[_查看源码 (v5.0.0+)_](https://github.com/ecomfe/zrender/blob/5.3.2/src/Element.ts#L1036)

移除状态。

参数

| 名称  | 类型     | 默认值 | 描述     |
| :---- | :------- | :----- | :------- |
| state | `string` |        | 状态名称 |

### `clearStates()`

`clearStates(noAnimation?: boolean)`

[_查看源码 (v5.0.0+)_](https://github.com/ecomfe/zrender/blob/5.3.2/src/Element.ts#L825)

清空所有状态。

参数

| 名称        | 类型      | 默认值  | 描述           |
| :---------- | :-------- | :------ | :------------- |
| noAnimation | `boolean` | `false` | 不需要动画过渡 |

## 动画

> [官方 APIs 文档](https://ecomfe.github.io/zrender-doc/public/api.html#zrenderanimatable)

### `animate()`

`animate(key?: string, loop?: boolean, allowDiscreteAnimation?: boolean)`

[_查看源码 (v5.0.0+)_](https://github.com/ecomfe/zrender/blob/5.3.2/src/Element.ts#L1462)

为元素设置动画。

相关

- [Animator](./Animator.md)

### `animateTo()`

`animateTo(target: Props, cfg?: ElementAnimateConfig, animationProps?: MapToType<Props, boolean>)`

[_查看源码 (v5.0.0+)_](https://github.com/ecomfe/zrender/blob/5.3.2/src/Element.ts#L1560)

将元素过渡到目标状态。

### `animateFrom()`

`animateFrom(target: Props, cfg: ElementAnimateConfig, animationProps?: MapToType<Props, boolean>)`

[_查看源码 (v5.0.0+)_](https://github.com/ecomfe/zrender/blob/5.3.2/src/Element.ts#L1570)

将元素从目标状态过渡到当前状态。

### `stopAnimation()`

`stopAnimation(scope?: string, forwardToLast?: boolean)`

[_查看源码 (v5.0.0+)_](https://github.com/ecomfe/zrender/blob/5.3.2/src/Element.ts#L1518)

停止动画。
