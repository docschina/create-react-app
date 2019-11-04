---
id: analyzing-the-bundle-size
title: 分析包的大小
sidebar_label: 分析包的大小
---

[Source map 浏览器](https://www.npmjs.com/package/source-map-explorer) 通过 source maps 分析 JavaScript 包。这能帮助你了解代码中的冗余源于何处。

遵循以下步骤，为 Create React App 项目添加 Source map 浏览器：

```sh
npm install --save source-map-explorer
```

或者，你也可以使用 `yarn`：

```sh
yarn add source-map-explorer
```

然后在 `package.json` 中，添加以下几行代码至 `scripts` 中：

```diff
   "scripts": {
+    "analyze": "source-map-explorer 'build/static/js/*.js'",
     "start": "react-scripts start",
     "build": "react-scripts build",
     "test": "react-scripts test",
```

然后运行分析脚本以分析生产环境中的包。

```sh
npm run build
npm run analyze
```
