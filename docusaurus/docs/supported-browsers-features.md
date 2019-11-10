---
id: supported-browsers-features
title: 浏览器及特性适配
sidebar_label: 浏览器及特性适配
---

## 浏览器适配情况

默认情况下，该工具生成的项目可适配所有现代浏览器。适配 IE9、10、11 需要引入 polyfills。[react-app-polyfill](https://github.com/facebook/create-react-app/blob/master/packages/react-app-polyfill/README.md) 提供了支持老式浏览器所需的 polyfill 集合。

## 语言特性适配情况

该工具生成的项目可适配最新 JavaScript 规范的超集。除 [ES6](https://github.com/lukehoban/es6features) 语法特性外，它还支持：

- [幂运算符](https://github.com/rwaldron/exponentiation-operator) (ES2016).
- [Async/await](https://github.com/tc39/ecmascript-asyncawait) (ES2017).
- [对象剩余参数/展开语法](https://github.com/tc39/proposal-object-rest-spread) (ES2018).
- [动态 import()](https://github.com/tc39/proposal-dynamic-import) (stage 4 提案)
- [类元素与静态字段](https://github.com/tc39/proposal-class-public-fields) (stage 3 提案的一部分).
- [JSX](https://facebook.github.io/react/docs/introducing-jsx.html), [Flow](./adding-flow) 和 [TypeScript](./adding-typescript).

详细信息请参见文档 [不同提案阶段](https://tc39.github.io/process-document/).

尽管我们建议谨慎使用实验性提案，但 Facebook 在生产环境代码中大量运用了这些功能。因此我们打算提供 [codemods](https://medium.com/@cpojer/effective-javascript-codemods-5a6686bb46fb)，以防这些提案在未来产生变动。

注意：**该工具所生成的项目中默认是不包含 [polyfills](https://github.com/facebook/create-react-app/blob/master/packages/react-app-polyfill/README.md) 的。**

如果你使用了其他 ES6+，且需要**运行时支持**的语言特性（如 `Array.from()` 或 `Symbol`），请确保您已经 [手动添加适当的 polyfill](https://github.com/facebook/create-react-app/blob/master/packages/react-app-polyfill/README.md)，或者你的目标浏览器已经适配了这些特性。

## 配置已适配的浏览器

默认情况下，该工具生成的项目下的 `package.json` 文件中存在名为 [`browserslist`] 的配置项。该配置项用于根据全球使用情况为生产环境指定兼容浏览器版本，以及开发用现代浏览器版本。这为开发提供了良好的体验，当你使用像 async/await 这样的特性，同时还要为生产环境下的大部分浏览器提供高度兼容性时体现的尤为明显。

`browserlist` 可用于控制输出的 JavaScript 代码，从而兼容指定的浏览器版本。运行 `build` 脚本构建生产环境时会调用 `production` 列表，而运行 `start` 脚本时则会调用 `development` 列表。你可以通过 [https://browserl.ist](https://browserl.ist/?q=%3E+0.2%25%2C+not+dead%2C+not+op_mini+all) 以查阅你的 `browserlist` 配置所对应的浏览器版本。

以下是在 `package.json` 中指定的范例 `browserlist`：

```json
"browserslist": {
  "production": [
    ">0.2%",
    "not dead",
    "not op_mini all"
  ],
  "development": [
    "last 1 chrome version",
    "last 1 firefox version",
    "last 1 safari version"
  ]
}
```

> 注意：该设置项并不会自动为你引入 polyfills。你仍然需要根据自己需要适配的浏览器引入语言特性 polyfill（见前文)

> 当你在编辑 `browserlist` 配置项时，你可能会注意到你的修改没有立即生效。这是因为 [babel-loader 中的一个问题](https://github.com/babel/babel-loader/issues/690) 导致 `package.json` 的变动没有被检测到。一个快速的解决方案是删除 `node_modules/.cache` 文件夹后再试一遍。
