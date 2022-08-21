---
title: 项目概述
sidebar_position: 1
---

# 概述

该项目文档的内容主要包含一些 [ECharts 官方文档](https://echarts.apache.org/)和 [ZRender 官方文档](https://ecomfe.github.io/zrender-doc/public/)中没有提及的 APIs（大部分应该是**安全的**），并会附带一些利用这些 APIs 实现一些 **ECharts 官方不具备的功能**的示例代码。

:::danger 如何确认一个 API 是否可以安全使用？

要确认一个**未在官方文档中提及**的 API 是否可以**安全使用**，可以通过在[官方仓库中提 Issues](https://github.com/apache/echarts/issues) 询问核心维护人员（但通常效率很低），其次可以通过分析源码得到一个大致的结论（例如一些修饰符 `private`、`public` 等等，以及该 API 在源码中被引用的场景和情况）。一般来说，为了避免外部代码不兼容的情况出现，固定依赖（ECharts）的版本是一个较好的方案。

:::

## 为什么存在？

Apache ECharts 是一个基于 JavaScript 的开源可视化图表库，可免费用于商业用途（基于 [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0) 开源），其提供的丰富的图表能力为大部分数据可视化场景提供了开箱即用的方案。为了覆盖更多的数据可视化场景，开发者需要基于 ECharts 的能力进行*定制化开发*，以及去*扩展 ECharts 的能力*，鉴于 ECharts 自身的设计具备很强的扩展能力（见 `use` API），但是官方文档却鲜有提及大量的**内部 API**，所以本项目文档的主要内容则是记录这些内部 API 以利用其扩展 ECharts。

其次，ECharts 底层依赖的轻量级二维绘制引擎 [ZRender](https://ecomfe.github.io/zrender-doc/public/) 是深入使用 ECharts 必要了解的东西。另一方面，脱离 ECharts 之外，ZRender 也为数据可视化开发提供了一个很好的绘制引擎工具库。由于 ZRender 主要是为了支持 ECharts 进行开发，且较为底层，对于很多使用 ECharts 的开发者来说不需要直接接触，官方文档也因此更新较慢，所以本项目文档的另一部分内容则是记录 **ZRender 官方文档中没有及时更新的 API**。

## 目的

首先，该文档项目是为了给基于 ECharts 做定制化开发和使用 ZRender 的开发者提供一个参考。其次，对于 ECharts 这种被广泛使用的开源工具库，内部的一些设计模式和理念对于数据可视化领域开发有很好的学习借鉴意义，也是在此做一些记录并收集一些相关的数据可视化领域的开发资源。

:::tip 更快的扩展 ECharts 能力

在不修改源代码的情况下，以尽可能符合 ECharts 架构设计的方式快速扩展其能力（来不及等待 `Pull Request` 被批准合并）

:::

## 版权许可

首先，[ECharts 基于 Apache License 2.0 ](https://github.com/apache/echarts/blob/master/LICENSE) 开源，[ZRender 基于 BSD 3-Clause License](https://github.com/ecomfe/zrender/blob/master/LICENSE) 开源，本文档中引用的源代码需要注明出处（附上链接）。

![CC BY-NC 4.0](https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png) 本项目文档内容采用[知识共享署名-非商业性使用-相同方式共享 4.0 国际许可协议](http://creativecommons.org/licenses/by-nc-sa/4.0/)进行许可。

:::note 了解开源许可

[Choose an open source license / appendix](https://choosealicense.com/appendix/)

:::

:::caution 声明

该项目**不用于广告盈利等其它商业目的**。

:::
