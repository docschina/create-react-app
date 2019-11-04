---
id: developing-components-in-isolation
title: 独立开发组件
---

通常，在应用程序中会有许多 UI 组件，每个组件都包含不同的状态。
例如，一个按钮的基础组件可能会包含以下状态：

- 一般都会有的 label 文本。
- 禁止状态
- 加载状态

通常，如果不运行应用程序或一些示例，很难看到这些状态。

Create React App 默认不包含任何查看组件状态的工具，但可以在项目里加入 [Storybook for React](https://storybook.js.org) ([源码](https://github.com/storybooks/storybook)) 或 [React Styleguidist](https://react-styleguidist.js.org/) ([源码](https://github.com/styleguidist/react-styleguidist)) **这些第三方工具可以协助你开发组件，并能够独立于应用程序查看它们所有的状态**.

![Storybook React 示例](https://i.imgur.com/7CIAWpB.gif)

也可以将 Stroybook 或样式指南部署为静态应用程序。这样，团队中的每个人都可以查看和检查 UI 组件的不同状态，而无需启动后端服务器或在应用程序中创建帐户。

## Storybook 入门

Storybook 是 React UI 组件的开发环境。它允许你浏览组件库，查看每个组件的不同状态，并进行交互式地开发以及组件测试。
在应用程序的目录中运行以下命令：

```sh
npx -p @storybook/cli sb init
```

之后，按照屏幕上的说明进行操作。

了解有关 React Storybook 更多信息：

- [学习 Storybook (教程)](https://learnstorybook.com)
- [文档](https://storybook.js.org/basics/introduction/)
- [GitHub 地址](https://github.com/storybooks/storybook)
- [Storybook 快照测试 UI](https://github.com/storybooks/storybook/tree/master/addons/storyshots) + 插件/快照

## Styleguidist 入门

Styleguidist 类似于 Storybook，有一个独立开发组件的环境，之外，结合了一个样式指南，每个组件包含它的属性文档和使用示例都展示在单个页面里。同时，你也可以用Markdown编写示例，在Markdown中，每个代码片段都呈现为可编辑的区域。
首先，安装 Styleguidist：

```sh
npm install --save react-styleguidist
```

或者可以用 `yarn`:

```sh
yarn add react-styleguidist
```

之后，在 `package.json` 中添加以下 scripts：

```diff
   "scripts": {
+    "styleguide": "styleguidist server",
+    "styleguide:build": "styleguidist build",
     "start": "react-scripts start",
```

在应用程序的目录中运行以下命令：

```sh
npm run styleguide
```

最后，按照屏幕上的说明进行操作。

Learn more about React Styleguidist:
了解有关 React Styleguidist 更多信息：

- [GitHub 地址](https://github.com/styleguidist/react-styleguidist)
- [文档](https://react-styleguidist.js.org/docs/getting-started.html)
