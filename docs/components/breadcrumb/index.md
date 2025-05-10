# Breadcrumb 面包屑

## 基础用法

<demo vue="./example/base.vue"></demo>

## 自定义分隔符

<demo vue="./example/separator.vue"></demo>

## API 参考

### Breadcrumb Props

| 属性名         | 类型   | 默认值 | 说明           |
| -------------- | ------ | ------ | -------------- |
| separator      | string | ' / '  | 分隔符字符     |

### BreadcrumbItem Props

| 属性名  | 类型             | 默认值 | 说明                          |
| ------- | ---------------- | ------ | ----------------------------- |
| to      | string \| object | -      | 路由跳转目标（同 vue-router） |
| replace | boolean          | false  | 是否使用替换模式导航          |

### BreadcrumbItem Slots

| 名称      | 说明             |
| --------- | ---------------- |
| default   | 项内容           |
| separator | 自定义分隔符内容 |
