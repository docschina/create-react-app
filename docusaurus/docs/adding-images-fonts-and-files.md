---
id: adding-images-fonts-and-files
title: 添加图片、字体及文件
---

通过 Webpack，调用静态资源（例如图片和字体）的工作方式与 CSS 类似。

你可以**在 JavaScript 模块中`导入`文件**。这会告知 Webpack 将文件包含在打包文件中。与 CSS 导入不同，导入文件会为你提供一个字符串值。这个值是你可以在代码中引用到的最终路径。例如：作为图片属性的 `src` 或作为 PDF 链接的 `href`。

为了减少对服务器的请求量，导入小于 10,000 字节的图像会返回 [data URI](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs) 以替代路径。这适用于以下文件扩展名：bmp，gif，jpg，jpeg 和 png。SVG 由于 [#1153](https://github.com/facebook/create-react-app/issues/1153) 被排除在外。你可以通过设置环境变量 `IMAGE_INLINE_SIZE_LIMIT` 来控制 10,000 字节的阈值，如我们在[高级配置](advanced-configuration.md)中所说的那样。

下面是一条范例：

```js
import React from 'react';
import logo from './logo.png'; // 告知 Webpack 该 JS 文件引用了这张图片

console.log(logo); // /logo.84287d09.png

function Header() {
  // 导入结果是图片的 URL
  return <img src={logo} alt="Logo" />;
}

export default Header;
```

这样可以确保在构建项目时，Webpack 可以将图片正确移动到 build 文件夹中，并为我们提供正确的路径。

这同样也适用于 CSS：

```css
.Logo {
  background-image: url(./logo.png);
}
```

Webpack 在 CSS 中找到所有相关的模块引用（以 `./` 开头），并将其替换为已编译包中的最终路径。如果存在拼写错误或意外删除了重要文件，则会看到编译错误，就像导入不存在的 JavaScript 模块时一样。Webpack 通过内容哈希值生成已编译包中的最终文件名。如果文件内容将来进行了修改，Webpack 将会在生产环境中使用其他名称，因此你无需担心 asset 的长期缓存。

请注意，这也是 Webpack 的自定义特性。

**对 React 来说并不是必须项**，但是很多人喜欢它（React Natice 对图像也采用了类似机制）。

下一节将会介绍使用静态资源的另一种方法。

## 添加 SVG

> 注意：该特性仅适用于 `react-scripts@2.0.0` 与 `react@16.3.0` 及以上版本。

上一节中介绍了添加 SVG 文件的一种方法。你也可以直接将 SVG 文件作为 React 组件引入。你可以从两种方法中任选其一。它写起来是这样的：

```js
import { ReactComponent as Logo } from './logo.svg';
const App = () => (
  <div>
    {/* Logo is an actual React component */}
    <Logo />
  </div>
);
```

这对于不希望将 SVG 作为单独文件进行加载的场景来说很方便。不要漏了 import 中的花括号！`ReactComponent` 引入别名非常重要，它告诉 Create React App 你希望将 SVG 作为可渲染 React 组件引入，而不是引入其文件本身。

> **提示：**导入的 SVG React 组件接收 `title` 属性与 `svg` 元素接收的其他属性。使用该属性以添加辅助访问标题至 svg 组件。
