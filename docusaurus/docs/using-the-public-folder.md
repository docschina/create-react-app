---
id: using-the-public-folder
title: 使用 Public 文件夹
---

> 注意：该功能仅支持 `react-scripts@0.5.0` 及以上版本。

## 修改 HTML

`public` 文件夹中包含 HTML 文件，因此你可以对其进行调整，例如，[设置页面标题](title-and-meta-tags.md)。
包含编译后代码的 `<script>` 标签将在构建过程中自动添加到 HTML 文件中。

## 在模块系统外添加 Assets

你也可以将其他 assets 添加到 `public` 文件夹中。

请注意，我们通常鼓励你在 JavaScript 文件中`引入` assets。
样例可参考[添加样式表](adding-a-stylesheet.md)和[添加图片和字体](adding-images-fonts-and-files.md)部分。
该机制具备很多优势：

- 将脚本和样式表压缩并一起打包，以避免额外的网络请求。
- 缺少文件将会导致为用户提供编译错误，而不是 404 错误。
- 输出文件名中包含内容哈希，因此你无需担心浏览器会缓存其旧版本。

但是，你可以另辟蹊径，在模块系统外添加 asset 的**应急方案**依然是存在的。

如果将文件放入 `public` 文件夹，Webpack 将**不**会对其进行处理，而是将其原封不动的复制到 build 文件夹中。要引用 `public` 文件夹中的 asset，你需要使用一个名为 `PUBLIC_URL` 的环境变量。

在 `index.html` 中，你可以这样调用它：

```html
<link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
```

只有 `public` 文件夹中的文件才能通过 `%PUBLIC_URL%` 前缀访问。如果你需要使用 `src` 或 `node_modules` 中的文件，则必须将其复制到此处，以明确指定需要将此文件作为构建的一部分。

当你运行 `npm run build` 时，Create React App 将会用正确的绝对路径替换 `%PUBLIC_URL%`，因此即使你使用客户端路由/将其托管在非根 URL 上，你的项目也可以正常工作。

在 JavaScript 代码中，你可以将 `process.env.PUBLIC_URL` 用于类似场景：

```js
render() {
  // 注意：这是一种应急方案，应该谨慎使用！
  // 通常情况下，我们建议使用 `import` 来获取 asset URLs
  // 详情参考"添加图片和字体"
  return <img src={process.env.PUBLIC_URL + '/img/logo.png'} />;
}
```

请记住此方法的缺点：

- `public` 文件夹中的所有文件均未进行处理或压缩。
- 丢失的文件将不会在编译时调用，且会导致为你的用户抛出 404 错误。
- 输出文件名中不包含内容哈希，因此你需要添加查询参数，或在每次更改文件时对其进行重命名。

## 何时使用 `public` 文件夹

通常，我们建议从 JavaScript 导入 [样式表](adding-a-stylesheet.md)、[图像和字体](adding-images-fonts-and-files.md)。
在一些不太常见的场景下，`public` 文件夹可作为解决方案：

- 你需要在构建结果中使用特定名称的文件，例如 [`manifest.webmanifest`](https://developer.mozilla.org/en-US/docs/Web/Manifest)。
- 你拥有数千张图片，且需要动态引用其路径。
- 你想要在打包代码外引入一个像 [`pace.js`](https://github.hubspot.com/pace/docs/welcome/) 这样的小型脚本。
- 某些库可能与 Webpack 不兼容，你别无选择，只能将其作为 `<script>` 标签来引入。

注意，如果添加一个用于声明全局变量的 `<script>`，可能还需要阅读随后的章节，以了解如何使用它们。
