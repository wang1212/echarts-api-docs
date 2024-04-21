---
title: echartsInstance
description: ECharts 实例相关的 APIs
tags:
  - ECharts
  - Instance
---

# echartsInstance

`ECharts` 实例相关的 APIs。

[_查看源码_](https://github.com/apache/echarts/blob/5.3.3/src/core/echarts.ts#L331)

> [官方 APIs 文档](https://echarts.apache.org/zh/api.html#echartsInstance)

### `getModel()`

:::danger

该方法被修饰为 `private`，并且注释信息明确指出不希望开发者直接使用。若要使用，确保以**只读**的方式使用。

:::

`getModel(): GlobalModel`

[_查看源码 (v5.0.0+)_](https://github.com/apache/echarts/blob/5.3.3/src/core/echarts.ts#L681)

获取全局 Model 实例。

返回值

| 名称        | 类型                                                                                   | 描述                          |
| :---------- | :------------------------------------------------------------------------------------- | :---------------------------- |
| globalModel | [`GlobalModel`](https://github.com/apache/echarts/blob/5.3.3/src/model/Global.ts#L154) | echarts 实例的全局 Model 实例 |

相关

- [GlobalModel APIs](./GlobalModel.md)

### `getViewOfComponentModel()`

:::danger

该方法被修饰为 `private`。若要使用，确保以**只读**的方式使用。

:::

`getViewOfComponentModel(componentModel: ComponentModel): ComponentView`

[_查看源码 (v5.0.0+)_](https://github.com/apache/echarts/blob/5.3.3/src/core/echarts.ts#L1033)

获取指定组件 Model 实例对应的 View 实例。

参数

| 名称           | 类型                                                                                          | 默认值 | 描述                                       |
| :------------- | :-------------------------------------------------------------------------------------------- | :----- | :----------------------------------------- |
| componentModel | [`ComponentModel`](https://github.com/apache/echarts/blob/5.3.3/src/model/Component.ts#L51:7) |        | 组件 Model 实例，`ComponentModel` 只是基类 |

返回值

| 名称          | 类型                                                                                        | 描述                                           |
| :------------ | :------------------------------------------------------------------------------------------ | :--------------------------------------------- |
| componentView | [`ComponentView`](https://github.com/apache/echarts/blob/5.3.3/src/view/Component.ts#L63:7) | 指定组件的 View 实例，`ComponentView` 只是基类 |

### `getViewOfSeriesModel()`

:::danger

该方法被修饰为 `private`。若要使用，确保以**只读**的方式使用。

:::

`getViewOfSeriesModel(seriesModel: SeriesModel): ChartView`

[_查看源码 (v5.0.0+)_](https://github.com/apache/echarts/blob/5.3.3/src/core/echarts.ts#L1040)

获取指定系列组件 Model 实例对应的 View 实例。

参数

| 名称        | 类型                                                                                   | 默认值 | 描述                                        |
| :---------- | :------------------------------------------------------------------------------------- | :----- | :------------------------------------------ |
| seriesModel | [`SeriesModel`](https://github.com/apache/echarts/blob/5.3.3/src/model/Series.ts#L123) |        | 系列组件 Model 实例，`SeriesModel` 只是基类 |

返回值

| 名称      | 类型                                                                                | 描述                                           |
| :-------- | :---------------------------------------------------------------------------------- | :--------------------------------------------- |
| chartView | [`ChartView`](https://github.com/apache/echarts/blob/5.3.3/src/view/Chart.ts#L98:7) | 指定系列组件的 View 实例，`ChartView` 只是基类 |
