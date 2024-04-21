---
title: echarts
description: ECharts 模块直接暴露的 APIs
tags:
  - ECharts
  - Module
---

# echarts

ECharts 模块直接暴露的 APIs。

[_查看源码_](https://github.com/apache/echarts/blob/86eba716ff/src/export/all.ts)

> [官方 APIs 文档](https://echarts.apache.org/zh/api.html#echarts)

## 扩展

### `use()`

:::tip

`use()` 方法在[官方文档](https://echarts.apache.org/zh/api.html#echarts.use)中的描述比较简单，主要用例是做_按需加载_，实际上这是 ECharts 的**核心扩展机制**。对于 ECharts 能力的定制和扩展，官方的解决方案就是基于 `use()` API 实现。

:::

`use(ext: EChartsExtensionInstaller | EChartsExtension | (EChartsExtensionInstaller | EChartsExtension)[])`

[_查看源码 (v5.0.1+)_](https://github.com/apache/echarts/blob/5.3.3/src/extension.ts#L96)

> [官方 APIs 文档](https://echarts.apache.org/zh/api.html#echarts.use)

ECharts 的扩展 API。

参数

| 名称 | 类型                                                                                                                                                                                                                                                     | 默认值 | 描述         |
| :--- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----- | :----------- |
| ext  | [`EChartsExtensionInstaller`](https://github.com/apache/echarts/blob/5.3.3/src/extension.ts#L91:13) \| [`EChartsExtension`](https://github.com/apache/echarts/blob/5.3.3/src/extension.ts#L92:18) \| `(EChartsExtensionInstaller \| EChartsExtension)[]` |        | 扩展（插件） |

示例

```typescript
echarts.use((extensionRegisters: EChartsExtensionInstallRegisters) => {
  // TODO
});
```

### **`extensionRegisters`**

这是 `use()` API 用来注册一系列扩展功能的接口。

[_查看源码 (v5.0.1+)_](https://github.com/apache/echarts/blob/5.3.3/src/extension.ts#L47)

### `registerPreprocessor()`

:::tip

注册的预处理函数执行时机为**每次 [`ecIns.setOption()`](https://echarts.apache.org/zh/api.html#echartsInstance.setOption) 时**。

:::

`registerPreprocessor(preprocessorFunc: OptionPreprocessor)`

[_查看源码 (v5.0.1+)_](https://github.com/apache/echarts/blob/5.3.3/src/core/echarts.ts#L2767)

注册配置项的预处理器。

参数

| 名称             | 类型                                                                                           | 默认值 | 描述             |
| :--------------- | :--------------------------------------------------------------------------------------------- | :----- | :--------------- |
| preprocessorFunc | [`OptionPreprocessor`](https://github.com/apache/echarts/blob/5.3.3/src/util/types.ts#L248:18) |        | 配置项预处理函数 |

示例

```typescript
echarts.use((extensionRegisters: EChartsExtensionInstallRegisters) => {
  // highlight-start
  extensionRegisters.registerPreprocessor((option, isNew) => {
    // TODO
  });
  // highlight-end
});
```

### `registerAction()`

:::info

与注册（定义）交互行为动作相对应的，可以通过 [`ecIns.dispatchAction()`](https://echarts.apache.org/zh/api.html#echartsInstance.dispatchAction) API 调用来执行一系列交互行为动作。

:::

`registerAction(actionInfo: string | ActionInfo, eventName: string | ActionHandler, action?: ActionHandler)`

[_查看源码 (v5.0.1+)_](https://github.com/apache/echarts/blob/5.3.3/src/core/echarts.ts#L2822:17)

注册一个交互行为动作。

参数

| 名称       | 类型                                                                                                  | 默认值      | 描述                       |
| :--------- | :---------------------------------------------------------------------------------------------------- | :---------- | :------------------------- |
| actionInfo | `string` \| [`ActionInfo`](https://github.com/apache/echarts/blob/5.3.3/src/util/types.ts#L236:18)    |             | 动作信息                   |
| eventName  | `string` \| [`ActionHandler`](https://github.com/apache/echarts/blob/5.3.3/src/util/types.ts#L244:18) |             | 事件名称                   |
| action     | [`ActionHandler`](https://github.com/apache/echarts/blob/5.3.3/src/util/types.ts#L244:18)             | `undefined` | 实际执行交互行为动作的函数 |

示例

```typescript
echarts.use((extensionRegisters: EChartsExtensionInstallRegisters) => {
  // highlight-start
  extensionRegisters.registerAction(
    'testaction',
    (payload: Payload, ecModel: GlobalModel, api: ExtensionAPI) => {
      // TODO
    }
  );
  // highlight-end
});

ecIns.dispatchAction({ type: 'testaction' /* ...rest payload data */ });
```

### `registerUpdateLifecycle()`

`registerUpdateLifecycle<T extends keyof LifecycleEvents>(name: T, cb: (...args: LifecycleEvents[T]) => void)`

[_查看源码 (v5.0.1+)_](https://github.com/apache/echarts/blob/5.3.3/src/core/echarts.ts#L2797:17)

注册程序更新的生命周期 Hook。

参数

| 名称 | 类型                                                                                                 | 默认值 | 描述                       |
| :--- | :--------------------------------------------------------------------------------------------------- | :----- | :------------------------- |
| name | [`keyof LifecycleEvents`](https://github.com/apache/echarts/blob/5.3.3/src/core/lifecycle.ts#L55:11) |        | 程序更新生命周期 hook 名称 |
| cb   | `LifecycleEvents[keyof LifecycleEvents]`                                                             |        | 回调函数                   |

示例

```typescript
echarts.use((extensionRegisters: EChartsExtensionInstallRegisters) => {
  // highlight-start
  extensionRegisters.registerUpdateLifecycle(
    'series:afterupdate',
    (
      ecModel: GlobalModel,
      api: ExtensionAPI,
      params: UpdateLifecycleParams
    ) => {
      // TODO
    }
  );
  // highlight-end
});
```

相关

- [registerPostInit()](#registerpostinit)
- [registerPostUpdate()](#registerpostupdate)

### `registerPostInit()`

`registerPostInit(postInitFunc: PostIniter)`

[_查看源码 (v5.0.1+)_](https://github.com/apache/echarts/blob/5.3.3/src/core/echarts.ts#L2785:17)

注册程序完成初始化的 Hook。

参数

| 名称         | 类型                                                                                     | 默认值 | 描述     |
| :----------- | :--------------------------------------------------------------------------------------- | :----- | :------- |
| postInitFunc | [`PostIniter`](https://github.com/apache/echarts/blob/5.3.3/src/core/echarts.ts#L234:11) |        | 回调函数 |

示例

```typescript
echarts.use((extensionRegisters: EChartsExtensionInstallRegisters) => {
  // highlight-start
  extensionRegisters.registerPostInit((chart: EChartsType) => {
    // TODO
  });
  // highlight-end

  // 等同于
  extensionRegisters.registerUpdateLifecycle(
    'afterinit',
    (chart: EChartsType) => {
      // TODO
    }
  );
});
```

相关

- [registerUpdateLifecycle()](#registerupdatelifecycle)

### `registerPostUpdate()`

`registerPostUpdate(postUpdateFunc: PostUpdater)`

[_查看源码 (v5.0.1+)_](https://github.com/apache/echarts/blob/5.3.3/src/core/echarts.ts#L2793:17)

注册程序完成更新的 Hook。

参数

| 名称           | 类型                                                                                    | 默认值 | 描述     |
| :------------- | :-------------------------------------------------------------------------------------- | :----- | :------- |
| postUpdateFunc | [`PostUpdater`](https://github.com/apache/echarts/blob/5.3.3/src/util/types.ts#L252:18) |        | 回调函数 |

示例

```typescript
echarts.use((extensionRegisters: EChartsExtensionInstallRegisters) => {
  // highlight-start
  extensionRegisters.registerPostUpdate(
    (ecModel: GlobalModel, api: ExtensionAPI) => {
      // TODO
    }
  );
  // highlight-end

  // 等同于
  extensionRegisters.registerUpdateLifecycle(
    'afterupdate',
    (ecModel: GlobalModel, api: ExtensionAPI) => {
      // TODO
    }
  );
});
```

相关

- [registerUpdateLifecycle()](#registerupdatelifecycle)

### **`api`**

这是用来在 `use()` API 注册的一系列扩展的回调函数中获取部分 ECharts 实例信息的接口。

[_查看源码 (v5.0.1+)_](https://github.com/apache/echarts/blob/5.3.3/src/core/ExtensionAPI.ts#L54)
