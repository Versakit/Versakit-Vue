# Divider 分割线

Divider 是一种用于视觉分隔内容的界面元素，通过水平或垂直的线条、空白区域或装饰性元素划分不同内容区块，增强页面层次感和组织性。它不承载具体内容，而是通过空间关系引导用户注意力。

<Link link="https://versakit.github.io/Versakit-Vue/storybook/?path=/story/%E7%BB%84%E4%BB%B6-divider-%E5%88%86%E5%89%B2%E7%BA%BF--basic"/>

## 引入

```typescript
import { Divider } from '@versakit/vue'
```

## 使用

<demo vue="./example/index.vue" />

## API

### 属性

| 属性名        | 说明           | 类型                              | 默认值                                  |
| ------------- | -------------- | --------------------------------- | --------------------------------------- |
| orientation   | 分割线方向     | `'horizontal' \| 'vertical'`      | `'horizontal'`                          |
| variant       | 线条样式       | `'solid' \| 'dashed' \| 'dotted'` | `'solid'`                               |
| size          | 线条粗细       | `'thin' \| 'medium' \| 'thick'`   | `'medium'`                              |
| color         | 线条颜色       | `string`                          | -                                       |
| label         | 分割线文本     | `string`                          | -                                       |
| labelPosition | 文本位置       | `'start' \| 'center' \| 'end'`    | `'center'`                              |
| as            | 自定义渲染元素 | `string`                          | 水平无文本时为`'hr'`，其他情况为`'div'` |

### 数据属性

Divider 组件在根元素上添加以下数据属性：

- **data-orientation**: 分割线的方向，基于 `orientation` 属性
- **role**: 设置为 `"separator"`，提供可访问性支持
- **aria-orientation**: 分割线的方向，提供可访问性支持
