---
title: .SeriesData
description: ECharts 的数据管理类
tags:
  - ECharts
  - SeriesData
---

# .SeriesData

ECharts 的 `SeriesData` 数据类。

[_查看源码_](https://github.com/apache/echarts/blob/5.3.3/src/data/SeriesData.ts#L151)

## 数据结构

### `graph`

`graph?: Graph`

[_查看源码_](https://github.com/apache/echarts/blob/5.3.3/src/data/SeriesData.ts#L191)

图数据结构实例。

### `tree`

`tree?: Tree`

[_查看源码_](https://github.com/apache/echarts/blob/5.3.3/src/data/SeriesData.ts#L197)

树数据结构实例。

## 数据更新

### `diff()`

`diff(otherList: SeriesData): DataDiffer`

[_查看源码 (v5.0.0+)_](https://github.com/apache/echarts/blob/5.3.3/src/data/SeriesData.ts#L1138)

对比两次不同数据集的差异。

返回值

| 名称       | 类型                                                                                    | 描述             |
| :--------- | :-------------------------------------------------------------------------------------- | :--------------- |
| dataDiffer | [`DataDiffer`](https://github.com/apache/echarts/blob/5.3.3/src/data/DataDiffer.ts#L55) | 数据集差异对比器 |

## 布局信息

### `getItemLayout()`

`getItemLayout(idx: number): any`

[_查看源码 (v5.0.0+)_](https://github.com/apache/echarts/blob/5.3.3/src/data/SeriesData.ts#L1287)

获取指定索引数据项的布局信息。

参数

| 名称 | 类型     | 默认值 | 描述       |
| :--- | :------- | :----- | :--------- |
| idx  | `number` |        | 数据项索引 |

### `setItemLayout()`

`setItemLayout<M = false>(idx: number, layout: (M extends true ? Dictionary<any> : any), merge?: M): void`

[_查看源码 (v5.0.0+)_](https://github.com/apache/echarts/blob/5.3.3/src/data/SeriesData.ts#L1294)

设置指定索引数据项的布局信息。

参数

| 名称   | 类型      | 默认值  | 描述                   |
| :----- | :-------- | :------ | :--------------------- |
| idx    | `number`  |         | 数据项索引             |
| layout | `any`     |         | 布局信息对象           |
| merge  | `boolean` | `false` | 是否和原有布局信息合并 |

## 视图元素

### `getItemGraphicEl()`

`getItemGraphicEl(idx: number): Element`

[_查看源码 (v5.0.0+)_](https://github.com/apache/echarts/blob/5.3.3/src/data/SeriesData.ts#L1322)

获取指定索引数据项对应的 ZRender 图形元素实例。

参数

| 名称 | 类型     | 默认值 | 描述       |
| :--- | :------- | :----- | :--------- |
| idx  | `number` |        | 数据项索引 |

返回值

| 名称    | 类型      | 描述             |
| :------ | :-------- | :--------------- |
| element | `Element` | ZRender 元素实例 |

### `setItemGraphicEl()`

`setItemGraphicEl(idx: number, el: Element): void`

[_查看源码 (v5.0.0+)_](https://github.com/apache/echarts/blob/5.3.3/src/data/SeriesData.ts#L1314)

设置指定索引数据项对应的 ZRender 图形元素实例。

参数

| 名称 | 类型      | 默认值 | 描述             |
| :--- | :-------- | :----- | :--------------- |
| idx  | `number`  |        | 数据项索引       |
| el   | `Element` |        | ZRender 元素实例 |

### `eachItemGraphicEl()`

`eachItemGraphicEl<Ctx = unknown>(cb: (this: Ctx, el: Element, idx: number) => void, context?: Ctx): void`

[_查看源码 (v5.0.0+)_](https://github.com/apache/echarts/blob/5.3.3/src/data/SeriesData.ts#L1326)

遍历数据项对应的所有图形元素。

参数

| 名称    | 类型                                            | 默认值 | 描述                 |
| :------ | :---------------------------------------------- | :----- | :------------------- |
| cb      | `(this: Ctx, el: Element, idx: number) => void` |        | 回调函数             |
| context | `unknown`                                       | `null` | 回调函数的上下文信息 |
