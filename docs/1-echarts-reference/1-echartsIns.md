# ECharts 实例

## 移动端交互实现取消光标的效果

移动端交互中，手指离开屏幕后，像 `AxisPointer`，`Tooltip` 这两类组件还会保持显示，如果想让手指离开屏幕后光标消失且组件自动隐藏（PC 的默认效果），可用以下代码实现：

```ts
echartsIns.getZr().on('mouseup', () => {
  // echartsIns.dispatchAction({
  //   type: 'hideTip'
  // });

  // 注意：globalout 事件类型没有在官方文档中记录
  echartsIns.getZr().trigger('globalout', {});
});
```
