---
id: updating-to-new-releases
title: 更新至最新版本
---

Create React App 可分为两个包：

- `create-react-app` 用于创建新项目的命令行工具。
- `react-scripts` 是用于生成项目的开发依赖（包括此项目）。

当你运行 `npx create-react-app my-app` 时，该命令会自动安装最新版本的 Create React App。
> 如果你之前通过 `npm install -g create-react-app` 全局安装过 `create-react-app`，请查阅 [开始](getting-started.md) 部分以了解当前安装步骤。

Create React App 会调用最新版本的 `react-scripts` 创建项目，因此你将会在新创建的 app 中自动获得所有新特性及改进。

如果需要将现有项目的 `react-script` 更新为最新版本，首先要 [打开 changelog](https://github.com/facebook/create-react-app/blob/master/CHANGELOG.md)，找到你当前所在的版本（如果不确定的话，检查项目所在文件夹中的 `package.json`），然后依照迁移说明更新新版本。

绝大多数情况下，在 `package.json` 中修改 `react-scripts` 版本并在当前文件夹中执行 `npm install`（或 `yarn instrall`）就足够了，但最好在升级前查阅 [changelog](https://github.com/facebook/create-react-app/blob/master/CHANGELOG.md)，观察该版本是否有潜在破坏性修改。

我们致力于将破坏新修改保持在最低限度，以便你能够轻松升级 `react-scripts`
