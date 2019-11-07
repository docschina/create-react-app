---
id: adding-flow
title: 加入 Flow
---

Flow 是一个静态类型检查器，可有效减少你书写代码时可能产生的 bugs。如果你不熟悉此概念，请查阅[在JavaScript中使用静态类型的介绍](https://medium.com/@preethikasireddy/why-use-static-types-in-javascript-part-1-8382da1e0adb)。

[Flow](https://flow.org/) 的最新版本可直接用于 Create React App 项目。

要将 Flow 添加到 Create React App 项目中，请遵循以下步骤：

1. 运行 `npm install --save flow-bin`（或 `yarn add flow-bin`）。
2. 添加 `"flow"`：在 `package.json` 中的 `scripts` 部分加入 `flow`。
运行 `npm run flow init`（或 `yarn flow init`）以在根目录下创建 [`.flowconfig` 文件](https://flow.org/en/docs/config/)。
4. 将 `// @flow` 添加到要进行类型检查的任意文件（例如，添加到 `src/App.js`）中。

现在，你可以运行 `npm run flow`（或 `yarn flow`）来检查文件中的类型错误。
你可以选择为你的 IDE 启用扩展，例如为 Visual Studio Code 启用 [Flow 语法支持](https://github.com/flowtype/flow-for-vscode)，或利用语言服务器协议标准（例如  [vim LSP](https://github.com/prabirshrestha/vim-lsp/wiki/Servers-Flow) ）来获得提示。

如果你想在 Flow 中使用[绝对导入](/docs/importing-a-component#absolute-imports)，确保你已经将以下代码添加到你的 `.flowconfig` 中，以告知 Flow：

```diff
  [options]
+ module.name_mapper='^\([^\.].*\)$' -> '<PROJECT_ROOT>/src/\1'
```

请查阅[官方文档](https://flow.org/)，以了解更多关于 Flow 的信息。
