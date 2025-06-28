# 暗黑模式

Versakit 基于 Tailwind CSS 实现了完善的暗黑模式支持，让你的应用轻松适应不同光线环境。

## 使用方法

### 切换暗黑模式

你可以通过添加或移除 HTML 根元素上的 `dark` 类名来控制暗黑模式：

```html
<!-- 启用暗黑模式 -->
<html class="dark">
	<head></head>
	<body></body>
</html>
```

### 配置 Tailwind CSS

确保在 `tailwind.config.js` 中正确配置暗黑模式：

```js
module.exports = {
	darkMode: 'class', // 使用 class 策略来切换暗黑模式
	// 其他配置...
}
```

### 组件适配

Versakit 的所有组件都已适配暗黑模式，当添加 `dark` 类名时，组件会自动切换到对应的暗色主题样式，无需额外配置。

### 自定义暗黑主题

你还可以通过主题系统自定义暗黑模式下的颜色方案，详见[主题定制](/guide/theme/)章节。
