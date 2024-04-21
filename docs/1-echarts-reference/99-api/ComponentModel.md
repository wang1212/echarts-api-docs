---
title: .ComponentModel
description: ECharts 的组件 Model 基类
tags:
  - ECharts
  - Model
  - ComponentModel
---

# .ComponentModel

ECharts 的 `ComponentModel` 类，继承自 [`Model`](./Model.md) 类。

[_查看源码_](https://github.com/apache/echarts/blob/5.3.3/src/model/Component.ts)

### `type`

`type: ComponentFullType`

[_查看源码 (v5.0.0+)_](https://github.com/apache/echarts/blob/5.3.3/src/model/Component.ts#L66)

组件类型。

### `preventAutoZ`

`preventAutoZ: boolean`

[_查看源码 (v5.0.0+)_](https://github.com/apache/echarts/blob/5.3.3/src/model/Component.ts#L130)

是否禁止 echarts 框架自动设置元素实例的 `z`/`zlevel`/`z2` 值。

### `getBoxLayoutParams`

`getBoxLayoutParams()`

[_查看源码 (v5.0.0+)_](https://github.com/apache/echarts/blob/5.3.3/src/model/Component.ts#L301)

获取盒子布局参数。
