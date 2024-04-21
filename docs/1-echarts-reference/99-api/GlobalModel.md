---
title: .GlobalModel
description: ECharts 的全局 Model 类
tags:
  - ECharts
  - Model
  - GlobalModel
---

# .GlobalModel

ECharts 的 `GlobalModel` 类，继承自 [`Model`](./Model.md) 类。

[_查看源码_](https://github.com/apache/echarts/blob/5.3.3/src/model/Global.ts#L154)

## 配置项

### `getOption()`

`getOption(): ECUnitOption`

[_查看源码 (v5.0.0+)_](https://github.com/apache/echarts/blob/5.3.3/src/model/Global.ts#L514)

获取当前 ECharts 实例的所有配置项。

返回值

| 名称   | 类型                                                                                     | 描述                     |
| :----- | :--------------------------------------------------------------------------------------- | :----------------------- |
| option | [`ECUnitOption`](https://github.com/apache/echarts/blob/5.3.3/src/util/types.ts#L519:13) | echarts 实例的所有配置项 |

### `getTheme()`

`getTheme(): Model`

[_查看源码 (v5.0.0+)_](https://github.com/apache/echarts/blob/5.3.3/src/model/Global.ts#L545)

获取当前 ECharts 实例配置的主题模型实例。

## 组件实例

### `getComponent()`

`getComponent(mainType: ComponentMainType, idx?: number): ComponentModel`

[_查看源码 (v5.0.0+)_](https://github.com/apache/echarts/blob/5.3.3/src/model/Global.ts#L564)

获取指定主要类型的指定索引的组件 Model 实例。

参数

| 名称     | 类型                                                                                         | 默认值 | 描述                                     |
| :------- | :------------------------------------------------------------------------------------------- | :----- | :--------------------------------------- |
| mainType | [`ComponentMainType`](https://github.com/apache/echarts/blob/5.3.3/src/util/types.ts#L94:13) |        | 组件的主要类型，例如 `tooltip`、`series` |
| idx      | `number`                                                                                     | `0`    | 索引                                     |

返回值

| 名称           | 类型                                                                                          | 描述                                         |
| :------------- | :-------------------------------------------------------------------------------------------- | :------------------------------------------- |
| componentModel | [`ComponentModel`](https://github.com/apache/echarts/blob/5.3.3/src/model/Component.ts#L51:7) | 组件的 Model 实例，`ComponentModel` 只是基类 |

示例

```typescript
const result = ecModel.getComponent('tooltip', 0);
```

### `queryComponents()`

`queryComponents(condition: QueryConditionKindB): ComponentModel[]`

[_查看源码 (v5.0.0+)_](https://github.com/apache/echarts/blob/5.3.3/src/model/Global.ts#L564)

获取符合条件的所有组件 Model 实例。

参数

| 名称      | 类型                                                                                                   | 默认值 | 描述         |
| :-------- | :----------------------------------------------------------------------------------------------------- | :----- | :----------- |
| condition | [`QueryConditionKindB`](https://github.com/apache/echarts/blob/86eba716ff/src/model/Global.ts#L980:18) |        | 多个查询条件 |

返回值

| 名称            | 类型                                                                                            | 描述                                             |
| :-------------- | :---------------------------------------------------------------------------------------------- | :----------------------------------------------- |
| componentModels | [`ComponentModel[]`](https://github.com/apache/echarts/blob/5.3.3/src/model/Component.ts#L51:7) | 组件的 Model 实例数组，`ComponentModel` 只是基类 |

示例

```typescript
const result = ecModel.queryComponents({
  mainType: 'series',
  subType: 'bar',
});
```

### `findComponents()`

`findComponents(condition: QueryConditionKindA): ComponentModel[]`

[_查看源码 (v5.0.0+)_](https://github.com/apache/echarts/blob/5.3.3/src/model/Global.ts#L638)

查找过滤符合条件的所有组件 Model 实例。

参数

| 名称      | 类型                                                                                              | 默认值 | 描述         |
| :-------- | :------------------------------------------------------------------------------------------------ | :----- | :----------- |
| condition | [`QueryConditionKindA`](https://github.com/apache/echarts/blob/5.3.3/src/model/Global.ts#L963:18) |        | 多个查询条件 |

返回值

| 名称            | 类型                                                                                            | 描述                                             |
| :-------------- | :---------------------------------------------------------------------------------------------- | :----------------------------------------------- |
| componentModels | [`ComponentModel[]`](https://github.com/apache/echarts/blob/5.3.3/src/model/Component.ts#L51:7) | 组件的 Model 实例数组，`ComponentModel` 只是基类 |

示例

```typescript
let result = ecModel.findComponents(
  { mainType: 'dataZoom', query: { dataZoomId: 'abc' } }
);
let result = ecModel.findComponents(
  { mainType: 'series', subType: 'pie', query: { seriesName: 'uio' } }
);
let result = ecModel.findComponents(
  { mainType: 'series', filter: function (model, index) {...} }
);
```

### `eachComponent()`

`eachComponent<T>(mainType: string | QueryConditionKindA | EachComponentAllCallback, cb?: EachComponentInMainTypeCallback | T, context?: T)`

[_查看源码 (v5.0.0+)_](https://github.com/apache/echarts/blob/5.3.3/src/model/Global.ts#L710)

遍历所以（或者符合条件的） Model 实例。

参数

| 名称     | 类型                                                                                                                                                                                                                    | 默认值      | 描述                                           |
| :------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------- | :--------------------------------------------- |
| mainType | `string` \| [`QueryConditionKindA`](https://github.com/apache/echarts/blob/5.3.3/src/model/Global.ts#L963:18) \| [`EachComponentAllCallback`](https://github.com/apache/echarts/blob/5.3.3/src/model/Global.ts#L987:18) |             | 组件的主要类型、或者查询条件集合、或者回调函数 |
| cb       | [`EachComponentAllCallback`](https://github.com/apache/echarts/blob/5.3.3/src/model/Global.ts#L987:18)                                                                                                                  | `undefined` | 回调函数                                       |
| context  | `unknown`                                                                                                                                                                                                               | `undefined` | 回调函数的执行上下文                           |

示例

```typescript
let result = ecModel.eachComponent('legend', function (legendModel, index) {
  // TODO
});
let result = ecModel.eachComponent(function (componentType, model, index) {
  // componentType does not include subType
  // (componentType is 'a' but not 'a.b')
});
let result = ecModel.eachComponent(
  { mainType: 'dataZoom', query: { dataZoomId: 'abc' } },
  function (model, index) {
    // TODO
  }
);
let result = ecModel.eachComponent(
  { mainType: 'series', subType: 'pie', query: { seriesName: 'uio' } },
  function (model, index) {
    // TODO
  }
);
```

## 系列实例

### `getSeries()`

`getSeries(): SeriesModel[]`

[_查看源码 (v5.0.0+)_](https://github.com/apache/echarts/blob/5.3.3/src/model/Global.ts#L774)

获取所有系列组件的 Model 实例。

返回值

| 名称         | 类型                                                                                        | 描述                                              |
| :----------- | :------------------------------------------------------------------------------------------ | :------------------------------------------------ |
| seriesModels | [`SeriesModel[]`](https://github.com/apache/echarts/blob/5.3.3/src/model/Series.ts#L664:11) | 系列组件的 Model 实例数组，`SeriesModel` 只是基类 |

### `getSeriesByType()`

`getSeriesByType(subType: ComponentSubType): SeriesModel[]`

[_查看源码 (v5.0.0+)_](https://github.com/apache/echarts/blob/5.3.3/src/model/Global.ts#L764)

获取指定类型的所有系列组件的 Model 实例。

参数

| 名称    | 类型                                                                                        | 默认值 | 描述                         |
| :------ | :------------------------------------------------------------------------------------------ | :----- | :--------------------------- |
| subType | [`ComponentSubType`](https://github.com/apache/echarts/blob/5.3.3/src/util/types.ts#L95:13) |        | 系列类型，例如 `bar`、`line` |

返回值

| 名称         | 类型                                                                                        | 描述                                              |
| :----------- | :------------------------------------------------------------------------------------------ | :------------------------------------------------ |
| seriesModels | [`SeriesModel[]`](https://github.com/apache/echarts/blob/5.3.3/src/model/Series.ts#L664:11) | 系列组件的 Model 实例数组，`SeriesModel` 只是基类 |

### `eachSeries()`

`eachSeries<T>(cb: (series: SeriesModel, rawSeriesIndex: number) => void, context?: T)`

[_查看源码 (v5.0.0+)_](https://github.com/apache/echarts/blob/5.3.3/src/model/Global.ts#L792)

遍历所有系列组件的 Model 实例。

参数

| 名称    | 类型                                                    | 默认值      | 描述                 |
| :------ | :------------------------------------------------------ | :---------- | :------------------- |
| cb      | `(series: SeriesModel, rawSeriesIndex: number) => void` |             | 回调函数             |
| context | `unknown`                                               | `undefined` | 回调函数的执行上下文 |

### `eachSeriesByType()`

`eachSeriesByType<T>(subType: ComponentSubType, cb: (series: SeriesModel, rawSeriesIndex: number) => void, context?: T)`

[_查看源码 (v5.0.0+)_](https://github.com/apache/echarts/blob/5.3.3/src/model/Global.ts#L822)

遍历指定类型的所有系列组件的 Model 实例。

参数

| 名称    | 类型                                                                                        | 默认值      | 描述                         |
| :------ | :------------------------------------------------------------------------------------------ | :---------- | :--------------------------- |
| subType | [`ComponentSubType`](https://github.com/apache/echarts/blob/5.3.3/src/util/types.ts#L95:13) |             | 系列类型，例如 `bar`、`line` |
| cb      | `(series: SeriesModel, rawSeriesIndex: number) => void`                                     |             | 回调函数                     |
| context | `unknown`                                                                                   | `undefined` | 回调函数的执行上下文         |
