# AxisPointer

## 利用 API 显示 `AxisPointer`

[`dispatchAction`](https://echarts.apache.org/zh/api.html#echartsInstance.dispatchAction) 和 [`convertToPixel`](https://echarts.apache.org/zh/api.html#echartsInstance.convertToPixel) 结合使用即可，示例如下：

```ts
// 获取第一个系列的第一个数据在 x 轴上的像素坐标
const point = echartsIns.convertToPixel(
  { seriesIndex: 0, dataIndex: 0 },
  [1, 0]
);

// 注意：type = 'updateAxisPointer' 没有在官方文档中记录
echartsIns.dispatchAction({
  type: 'updateAxisPointer',
  x: point[0], // event.offsetX,
  y: point[1], // event.offsetY
});
```
