---
id: adding-a-stylesheet
title: 添加样式表
sidebar_label: 添加样式表
---

该项目使用 [Webpack](https://webpack.js.org/) 处理所有 assets。Webpack 提供了一种自定义方式，将 `import` 的概念扩展到 JavaScript 以外。要表示一个 JavaScript 文件依赖一个 CSS 文件，你需要 **在 JavaScript 文件中引入 CSS** ：

## `Button.css`

```css
.Button {
  padding: 20px;
}
```

## `Button.js`

```js
import React, { Component } from 'react';
import './Button.css'; // 告知 Webpack Button.js 调用了这些样式

class Button extends Component {
  render() {
    // 你可以将他们作为常规 CSS 样式使用
    return <div className="Button" />;
  }
}
```

**React 不需要此功能**，但很多人发现此功能很方便。你可以在[此处](https://medium.com/seek-blog/block-element-modifying-your-javascript-components-d7f99fcab52b)了解此方法所有具有的优势。但是，你应该意识到，这使得你的代码不易从 Webpack 迁移至其他的构建工具和环境中。

在开发中，以这种方式表示依赖关系将允许你在编辑样式时即时重新加载样式。在生产环境中，所有 CSS 文件都将在构建输出中合并成一个最小化的 `.css` 文件。

如果担心使用 Webpack 的特殊语法会产生问题，你可以将所有 CSS 放入 `src/index.css` 中，它依然会在 `src/index.js` 中被引入，但是如果以后需要迁移至其他构建工具，则需要删除该引入。
