---
title: .GlobalModel
description: ECharts 的全局 Model 类
tags:
  - ECharts
  - GlobalModel
---

# .GlobalModel

ECharts 的 `GlobalModel` 元素类。

[_查看源码_](https://github.com/apache/echarts/blob/5.3.3/src/model/Global.ts#L154)

### getOption()

`getOption(): ECUnitOption`

[_查看源码 (v5.0.0+)_](https://github.com/apache/echarts/blob/5.3.3/src/model/Global.ts#L514)

获取当前 ECharts 实例的所有配置项。

返回值

| 名称   | 类型                                                                                     | 描述                     |
| :----- | :--------------------------------------------------------------------------------------- | :----------------------- |
| option | [`ECUnitOption`](https://github.com/apache/echarts/blob/5.3.3/src/util/types.ts#L519:13) | echarts 实例的所有配置项 |

### getComponent()

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
const tooltipModel = ecModel.getComponent('tooltip', 0);
```

### queryComponents()

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
const allBarModel = ecModel.queryComponents({
  mainType: 'series',
  subType: 'bar',
});
```

### findComponents()

`findComponents(condition: QueryConditionKindA): ComponentModel[]`

[_查看源码 (v5.0.0+)_](https://github.com/apache/echarts/blob/86eba716ff/src/model/Global.ts#L638)

查找过滤符合条件的所有组件 Model 实例。

参数

| 名称      | 类型                                                                                                   | 默认值 | 描述         |
| :-------- | :----------------------------------------------------------------------------------------------------- | :----- | :----------- |
| condition | [`QueryConditionKindA`](https://github.com/apache/echarts/blob/86eba716ff/src/model/Global.ts#L963:18) |        | 多个查询条件 |

返回值

| 名称            | 类型                                                                                            | 描述                                             |
| :-------------- | :---------------------------------------------------------------------------------------------- | :----------------------------------------------- |
| componentModels | [`ComponentModel[]`](https://github.com/apache/echarts/blob/5.3.3/src/model/Component.ts#L51:7) | 组件的 Model 实例数组，`ComponentModel` 只是基类 |

示例

```typescript
let result = findComponents(
  { mainType: 'dataZoom', query: { dataZoomId: 'abc' } }
);
let result = findComponents(
  { mainType: 'series', subType: 'pie', query: { seriesName: 'uio' } }
);
let result = findComponents(
  { mainType: 'series', filter: function (model, index) {...} }
);
```
