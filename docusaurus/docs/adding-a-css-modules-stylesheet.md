---
id: adding-a-css-modules-stylesheet
title: Adding a CSS Modules Stylesheet
sidebar_label: Adding CSS Modules
---

> 注意：该功能仅支持 `react-scripts@2.0.0` 及以上版本。

该项目支持同时使用命名规则为 `[name].module.css` 的[CSS 模块](https://github.com/css-modules/css-modules)与常规样式表。CSS 模块通过自动创建格式为 `[filename]\_[classname]\_\_[hash]` 的唯一类名来对 CSS 进行范围界定。

> **提示：** 如果要使用 Sass 这种预处理样式表，请确保[遵循安装说明](adding-a-sass-stylesheet.md)，然后按照如下规则更改样式表文件扩展名：`[name].module.scss` or `[name].module.sass`。

CSS 模块使你可以在不同文件中使用相同的 CSS 类名称，而不必担心命名冲突，[阅读此文](https://css-tricks.com/css-modules-part-1-need/) 以了解更多关于 CSS 模块的信息。

## `Button.module.css`

```css
.error {
  background-color: red;
}
```

## `another-stylesheet.css`

```css
.error {
  color: red;
}
```

## `Button.js`

```js
import React, { Component } from 'react';
import styles from './Button.module.css'; // 引入 css 模块样式表作为样式
import './another-stylesheet.css'; // 引入常规样式表

class Button extends Component {
  render() {
    // 作为 js 对象引用
    return <button className={styles.error}>Error Button</button>;
  }
}
```

## 结果

与其他 `.error` 类名间不存在冲突

```html
<!-- 此按钮具有红色背景，但是没有红色文本 -->
<button class="Button_error_ax7yz">Error Button</button>
```

**这是一项可选功能。**全面支持常规的 `<link>` 样式表和 CSS 文件。对于扩展名为 `.module.css` 的文件，将会启用 CSS 模块。
