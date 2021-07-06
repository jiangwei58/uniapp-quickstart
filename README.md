# uniapp快速初始化项目

## 安装
```
yarn install
```

## 公共基础样式
```
common.scss
```

## 公共基础组件

### base-container

基础容器组件

> Props

|参数|说明|类型|默认值|可选值|
|---|---|---|---|---|
|showCustomHeader|自定义导航栏（需开启"navigationStyle": "custom"）|Boolean|false|true
|searchConfig|搜索栏配置|参考下方`searchConfig`配置|
|loadConfig|底部加载更多配置|参考下方`loadConfig`配置|

```
searchConfig {
  show: boolean, // 是否显示搜索栏
  placeholder: string, // 搜索提示
  showLocation: boolean, // 搜索框左侧是否显示地址栏
  disabled: boolean, // 是否禁用搜索框输入
  showAction: boolean, // 是否显示右侧控件(右侧的"搜索"按钮)
}
```

```
loadConfig {
  show: boolean, // 是否显示底部加载更多
  status: 'loadmore', // 加载更多状态，（加载更多：loadmore，加载中：loading，没有数据：nomore）
}
```

> Slot

|名称|说明|
|---|---|
|header|自定义固定表头内容(自动适应刘海屏)|
|-|自定义内容区|
|bottom|自定义固定底部内容(自动适应底部横条)|


### base-safe-bottom

用于底部按钮高度填充