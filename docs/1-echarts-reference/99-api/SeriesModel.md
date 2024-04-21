---
title: .SeriesModel
description: ECharts 的系列 Model 基类
tags:
  - ECharts
  - Model
  - ComponentModel
  - SeriesModel
---

# .SeriesModel

ECharts 的 `SeriesModel` 类，继承自 [`ComponentModel`](./ComponentModel.md) 类。

[_查看源码_](https://github.com/apache/echarts/blob/5.3.3/src/model/Series.ts)

### `type`

`type: string`

[_查看源码 (v5.0.0+)_](https://github.com/apache/echarts/blob/5.3.3/src/model/Series.ts#L136)

系列类型。

### `getData`

`getData(dataType?: SeriesDataType): SeriesData<this>`

[_查看源码 (v5.0.0+)_](https://github.com/apache/echarts/blob/5.3.3/src/model/Series.ts#L341)

获取系列数据集实例。
