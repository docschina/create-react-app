---
id: troubleshooting
title: 疑难解答
sidebar_label: 疑难解答
---

## `npm start` 没有检测到变化

当你在使用 `npm start` 时保存文件时，浏览器应该使用更新后的代码进行刷新。

如果浏览器没有刷新，请尝试以下解决方法：

- 检查你的入口点是否已导入文件。TypeScript 将在你的任何源文件上显示错误，但是 webpack 只有在文件被某个入口点直接或间接导入时才会重新加载文件。
- 如果你的项目在 Dropbox 文件夹中，请尝试将其移出。
- 如果 watcher 没有看到一个名为 `index.js` 的文件，而你通过文件夹名称引用该文件，那么由于 Webpack 的 bug ，你[需要重启 watcher](https://github.com/facebook/create-react-app/issues/1164)。
- 像 Vim 和 IntelliJ 这样的一些编辑器有一个“安全写入”的特性，这个特性目前会破坏 watcher。你需要禁用它，并按照 [“调整文本编辑器”](https://webpack.js.org/guides/development/#adjusting-your-text-editor)中的说明操作。
- 如果项目路径包含圆括号，请尝试将项目移动到没有圆括号的路径。这是由 [Webpack watcher bug](https://github.com/webpack/watchpack/issues/42)。
- 在 Linux 和 macOS 上，你可能需要 [调整系统设置](https://github.com/webpack/docs/wiki/troubleshooting#not-enough-watchers) 来允许更多 watcher。
- 如果项目在虚拟机（例如，配置了 Vagrant 的 VirtualBox ）中运行，请在项目目录中创建一个 `.env` 文件，如果该文件不存在，需要向其添加 `CHOKIDAR_USEPOLLING=true` 。 这样可以确保下次运行 `npm start` 时，watcher 根据需要在 VM 内部使用轮询模式。

如果这些解决方案均无帮助，请在 [此帖](https://github.com/facebook/create-react-app/issues/659) 中留言

## `npm test` 在 macOS Sierra 上无效果

如果你运行 `npm test` ，并且在运行 `react-scripts test` 无反应，则你的 [Watchman](https://facebook.github.io/watchman/) 安装可能存在问题，参见 [facebook/create-react-app#713](https://github.com/facebook/create-react-app/issues/713)。

我们建议首先删除项目中的 `node_modules` 并运行 `npm install`（或者运行 `yarn`）。 如果没有帮助，你可以尝试以下解决方法：

- [facebook/jest#1767](https://github.com/facebook/jest/issues/1767)
- [facebook/watchman#358](https://github.com/facebook/watchman/issues/358)
- [ember-cli/ember-cli#6259](https://github.com/ember-cli/ember-cli/issues/6259)

安装 Watchman 4.7.0 或更高版本可解决此问题。 如果使用 [Homebrew](https://brew.sh/)，则可以运行以下命令对其进行更新：

```
watchman shutdown-server
brew update
brew reinstall watchman
```

你可以在 [other installation methods](https://facebook.github.io/watchman/docs/install.html#build-install) 文档页面找到其他安装方法。

如果仍然不能解决问题，请尝试运行 `launchctl unload -F ~/Library/LaunchAgents/com.github.facebook.watchman.plist`

也有说卸载 Watchman 可以解决这个问题。 因此，如果没有其他解决方式，请将其从系统中删除，然后重试。

## `npm run build` 过早结束

在内存有限且没有交换空间的计算机上，`npm run build` 可能会失败，这在云环境中很常见。 即使在小型项目中，此命令也可以使系统中的 RAM 使用量增加数百兆，因此，如果可用内存少于 1 GB，则构建可能会失败，并显示以下消息：

> 构建失败，因为该过程退出太早。这可能意味着系统内存不足，或者再此过程中有人使用了 `kill -9` 命令。

如果你完全确定没有终止该过程，请考虑在要构建的计算机上 [添加一些交换空间](https://www.digitalocean.com/community/tutorials/how-to-add-swap-on-ubuntu-14-04)，或在本地构建项目。

## `npm run build` 失败

这可能是大小写敏感的文件名的问题，请参阅 [本节](deployment.md#resolving-heroku-deployment-errors)。

## Moment.js 语言环境缺失

如果使用 [Moment.js](https://momentjs.com/)，则可能会注意到默认情况下仅英语语言环境可用。这是因为语言环境文件很大，你可能只需要 [Moment.js提供的所有语言环境](https://momentjs.com/#multiple-locale-support) 的子集。

要将特定的 Moment.js 语言环境添加到包中，你需要显式导入它。

例如:

```js
import moment from 'moment';
import 'moment/locale/fr';
```

如果你是通过这种方式导入多个语言环境的，则可以稍后通过调用具有语言环境名称的 `moment.locale()` 在它们之间进行切换

```js
import moment from 'moment';
import 'moment/locale/fr';
import 'moment/locale/es';

// ...

moment.locale('fr');
```

这仅适用于之前已明确导入的语言环境。

## `npm run build` 压缩失败

在 `react-scripts@2.0.0` 之前，此问题是由使用现代 JavaScript 功能的第三方 `node_modules` 引起的，因为 minifier 无法在构建过程中处理它们。通过在`react-scripts@2.0.0` 及更高版本中的 `node_modules` 中编译标准的现代 JavaScript 功能，可以解决此问题。

如果遇到这个错误，有可能是使用了旧版本的 `react-scripts`，你可以通过避免使用现代语法的依赖关系或通过升级到 `react-scripts@>=2.0.0` 并遵循更改日志中的迁移说明来修复此问题。
