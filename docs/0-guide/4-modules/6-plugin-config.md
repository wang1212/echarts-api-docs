# 功能扩展

> WIP

本节内容主要是关于如何开发**功能扩展，即基于 ECharts 现有的实现进行增强（扩展）**。

:::info

了解技术细节，请参考 [ECharts 的插件机制](../3-echarts-plugin.md)。

:::

## 案例

相比于扩展一个新类型的图表实现，对现有类型图表的定制化开发通常来说会限制比较多，因为具体如何实现我们应该先分析现有的实现代码再考虑如何实现插件的逻辑。

对于此类场景一个推荐的实践模式是：**通过新增配置项来添加功能点**。这样做的好处是，通过配置项来控制新增的逻辑改动，在配置项未指定时不会对原有的实现逻辑产生影响，将逻辑改动控制在一定范围内。

例如，默认情况下 ECharts 的实现逻辑是轴的刻度标签遵循统一的对齐策略，即所有刻度标签统一居左、居中、居右对齐，而现在如果想要实现当最外侧的两个刻度标签超出坐标系范围后，自动向内侧缩进对齐轴两侧的内侧，我们可以先新增一个 `dvAlignEdge` 配置项，然后注册插件实现。示例代码如下：

```typescript
function parseXAxisLabel(ecModel: GlobalModel, api: ExtensionAPI) {
  ecModel.eachComponent('xAxis', (compModel: AxisModel) => {
    // * 利用配置项进行控制
    if (!compModel?.get('show') || !compModel?.get('axisLabel')?.dvAlignEdge) {
      return;
    }

    const compView = api.getViewOfComponentModel(
      compModel
    ) as CartesianAxisView;
    const labels: Text[] = [];

    // * 这里的逻辑依赖于 ECharts 的源码实现
    (compView._axisGroup as Group).traverse((childEl) => {
      if ((childEl.anid || '').startsWith('label')) {
        labels.push(childEl as Text);
      }
    });

    if (labels.length < 2) {
      return;
    }

    // * 判断两侧的刻度标签是否超出坐标系，向内侧缩进对齐
    const firstLabel = labels[0];
    const lastLabel = labels[labels.length - 1];
    const extentCoord = [
      compModel.axis.toGlobalCoord(compModel.axis.getExtent()[0]),
      compModel.axis.toGlobalCoord(compModel.axis.getExtent()[1]),
    ];

    if (firstLabel.x + firstLabel.getBoundingRect().x < extentCoord[0]) {
      firstLabel.stopAnimation(null, true);
      firstLabel.attr({
        x: extentCoord[0],
        style: {
          align: 'left',
        },
      });
    }
    if (
      lastLabel.x +
        lastLabel.getBoundingRect().x +
        lastLabel.getBoundingRect().width >
      extentCoord[1]
    ) {
      lastLabel.stopAnimation(null, true);
      lastLabel.attr({
        x: extentCoord[1],
        style: {
          align: 'right',
        },
      });
    }
  });
}

export function install(registers: EChartsExtensionInstallRegisters) {
  registers.registerUpdateLifecycle('afterupdate', (ecModel, api) => {
    parseXAxisLabel(ecModel, api);
  });
}
```

以上插件的实现中，利用了 `afterupdate` 这个程序生命周期扩展 API，在 ECharts 完成轴的绘制后，再去判断轴两侧的刻度标签是否超出坐标系，超出的话向内侧缩进。
