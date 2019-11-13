---
id: adding-typescript
title: 添加 TypeScript 支持
---

> 注意：该功能仅支持 `react-scripts@2.1.0` 及以上版本。

[TypeScript](https://www.typescriptlang.org/) 是包含类型的 JavaScript 超集，它可以被编译成普通的 JavaScript。

## 安装

要使用 [TypeScript](https://www.typescriptlang.org/) 生成一个新的 Create React App 项目，你可以执行：

```sh
npx create-react-app my-app --template typescript

# 或

yarn create react-app my-app --template typescript
```

> 如果你先前已通过 `npm install -g create-react-app` 全局安装过 `create-react-app`，我们建议你使用 `npm uninstall -g create-react-app` 卸载软件包，以确保 `npm` 始终是最新版本。
>
> 全局安装的 `create-react-app` 版本将不再提供相关支持。

要将 [TypeScript](https://www.typescriptlang.org/) 添加到 Create React App 项目中，请先进行安装：

```sh
npm install --save typescript @types/node @types/react @types/react-dom @types/jest

# 或

yarn add typescript @types/node @types/react @types/react-dom @types/jest
```

接下来，将任意文件重命名为 TypeScript 文件（例如，将 `src/index.js` 重命名为 `src/index.tsx`），并**重新启动开发服务器**！

类型错误将显示在与构建版本相同的控制台中，在继续开发或构建项目之前，你必须先修复这些类型错误。有关进阶配置，请[参照此处](advanced-configuration.md)。

## TypeScript 和 React 入门

你不再需要创建一个 [`tsconfig.json` 文件](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)，工具会为你自动生成一个。你可以编辑生成的 TypeScript 配置。

- [TypeScript 手册](https://www.typescriptlang.org/)
- [React 上的 TypeScript 示例](https://www.typescriptlang.org/play/index.html?jsx=2&esModuleInterop=true&e=196#example/typescript-with-react)
- [React + TypeScript 速记本](https://github.com/typescript-cheatsheets/react-typescript-cheatsheet#reacttypescript-cheatsheets) 很好的概述了如何在 TypeScript 中使用 React。

## 故障排除

如果你的项目不是在启用 TypeScript 的情况下创建的，npm 也许会使用 `create-react-app` 的缓存版本。执行命令 `npm uninstall -g crete-react-app` 移除之前安装过的版本（请查阅 issue[#6119](https://github.com/facebook/create-react-app/issues/6119#issuecomment-451614035)）。

如果你当前正在使用 [create-react-app-typescript](https://github.com/wmonk/create-react-app-typescript/)，请参阅[此博客文章](https://vincenttunru.com/migrate-create-react-app-typescript-to-create-react-app/)有关如何迁移到 Create React App 的相关说明。

暂不支持常量与命名空间，你可以在此了解[在 Babel 下使用 TypeScript](https://babeljs.io/docs/en/babel-plugin-transform-typescript#caveats) 的相关限制。
