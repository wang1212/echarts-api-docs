---
title: .Model
description: ECharts 的 Model 基类
tags:
  - ECharts
  - Model
---

# .GlobalModel

ECharts 的 `Model` 类。

[_查看源码_](https://github.com/apache/echarts/blob/5.3.3/src/model/Model.ts)

### `option`

`option: ModelOption`

[_查看源码 (v5.0.0+)_](https://github.com/apache/echarts/blob/5.3.3/src/model/Model.ts#L64)

当前实例的配置项集合。

### `ecModel`

`ecModel: GlobalModel`

[_查看源码 (v5.0.0+)_](https://github.com/apache/echarts/blob/5.3.3/src/model/Model.ts#L62)

当前实例关联的全局模型实例。

### `parentModel`

`parentModel: Model`

[_查看源码 (v5.0.0+)_](https://github.com/apache/echarts/blob/5.3.3/src/model/Model.ts#L60)

当前实例的父级模型实例。

### `get()`

`get(path: string | readonly string[], ignoreParent?: boolean): ModelOption`

[_查看源码 (v5.0.0+)_](https://github.com/apache/echarts/blob/5.3.3/src/model/Model.ts#L109)

根据配置项的属性路径获取值。

### `getModel()`

`getModel(path: string | readonly string[], parentModel?: Model): Model<any>`

[_查看源码 (v5.0.0+)_](https://github.com/apache/echarts/blob/5.3.3/src/model/Model.ts#L155)

根据配置项的属性路径获取子模型实例。

### `isAnimationEnabled()`

`isAnimationEnabled(): boolean`

[_查看源码 (v5.0.0+)_](https://github.com/apache/echarts/blob/5.3.3/src/model/Model.ts#L205)

获取是否开启了动画配置。
