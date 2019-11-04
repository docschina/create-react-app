---
id: setting-up-your-editor
title: 设定你的编辑器
sidebar_label: 编辑器初始化
---

配置得当的情况下，Create React App 会提供许多工具来改善你的编辑体验。 这里有一些可以最大程度地提高您的生产力的技巧：

## 语法高亮

要在你喜欢的文本编辑器中配置语法高亮提示，请转到 [相关的 Babel 文档页面](https://babeljs.io/docs/editors) 并按照说明进行相关操作，其中涵盖了一些最流行的编辑器。

## 在编辑器中显示 Lint 结果

> 注意：该功能仅在 `react-scripts@0.2.0` 以上版本可用。

> 对于包含 `react-scripts@2.0.3` 及以上版本的项目，该功能是开箱即用的。

> 同样的，它需要 npm 3 及以上版本的支持。

包括 Sublime Text、Atom 和 Visual Studio Code 在内的一些编辑器都提供了 ESLint 插件。

lint 并不是必须的，你应该在终端和浏览器控制台中都能看到 linter 输出。如果你希望 lint 结果能直接显示在编辑器中，请确保你已经安装了 ESLint 插件/扩展。

如果你正在使用 TypeScript 和 Visual Studio Code，[ESLint Visual Studio Code 插件](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint#overview) 当前 [并未默认引入 TypeScript 支持](https://github.com/Microsoft/vscode-eslint/issues/609)。要在 ESLint 扩展中启用 TypeScript 支持，请将以下内容添加到 Visual Studio Code 设置文件中，该文件位于 `.vscode/settings.json`（如果此文件尚不存在，你可以手动创建此文件）：

```json
{
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    { "language": "typescript", "autoFix": true },
    { "language": "typescriptreact", "autoFix": true }
  ]
}
```

现在你的编辑器应该就可以显示 lint 错误信息了。

请注意，即使你自定义 ESLint 配置，这些更改也**仅会影响编辑器本身**。它们不会影响终端和浏览器内的 lint 输出，这是因为 Create React App 故意提供了最小规则集以定位常见错误。

如果要为项目强制启用代码风格规约的话，请考虑直接调用 [Prettier](https://github.com/jlongster/prettier) 而不是 ESLint 规则。

### 实验性：扩展 ESLint 配置

我们认识到在某些情况下，自定义配置是必要项，现在可以将变量 `EXTEND_ESLINT` 设为 `true` 来扩展基础 ESLint 设置。有关可用环境变量的更多信息，请查阅 [高级配置](advanced-configuration.md)。

请注意，任何设定为 `"error"` 的规则都会阻断项目构建。

有几件事需要记住：

1. 我们强烈推荐仅扩展基本配置，因为删除它可能会导致难以定位的问题。
2. `.eslintignore` 文件也会生效
3. 使用 TypeScript 时，你需要将那些那些 _仅_ 面向 TypeScript 文件的规则引入 `overrides` 对象中。

在随后的样例中：

- 基本配置已通过 shared-config 进行扩展，
- 设定了一条适用于所有 JavaScript 和 TypeScript 文件的新规则，且
- 设定了仅针对于 TypeScript 文件的新规则

```json
{
  "eslintConfig": {
    "extends": ["react-app", "shared-config"],
    "rules": {
      "additional-rule": "warn"
    },
    "overrides": [
      {
        "files": ["**/*.ts?(x)"],
        "rules": {
          "additional-typescript-only-rule": "warn"
        }
      }
    ]
  }
}
```

## 编辑器内调试

**当前仅 [Visual Studio Code](https://code.visualstudio.com) 与 [WebStorm](https://www.jetbrains.com/webstorm/) 支持此功能。**

Visual Studio Code 和 WebStorm 支持使用 Create React App 进行开箱即用的调试。这允许你作为开发者可以在不离开编辑器的情况下编写和调试 React 代码，而且最重要的是，它为你提供了连续的、上下文切换最少的开发工作流体验，因为你不需要在工具间进行切换。

### Visual Studio Code

你需要安装最新版本的 [VS Code](https://code.visualstudio.com) 和 VS Code [Chrome 调试器扩展](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome)。

然后将下面的代码块添加到你的 `launch.json` 文件内，并将其放在应用程序根目录下的 `.vscode` 文件夹中。

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Chrome",
      "type": "chrome",
      "request": "launch",
      "url": "http://localhost:3000",
      "webRoot": "${workspaceFolder}/src",
      "sourceMapPathOverrides": {
        "webpack:///src/*": "${webRoot}/*"
      }
    }
  ]
}
```

> 注意：如果你通过 [HOST 或 PORT 环境变量](advanced-configuration.md) 进行过调整，则 URL 可能会有所不同。

通过执行 `npm start` 命令来启动你的应用程序，并通过点击 `F5` 或绿色按钮开始在 VS Code 中进行调试。现在，你可以在编辑器中编写代码，设置断点，更改代码以及调试刚修改过的代码。

在 VS Code 中调试时遇到了问题？请参阅其 [故障排除指南](https://github.com/Microsoft/vscode-chrome-debug/blob/master/README.md#troubleshooting).

### WebStorm

你需要安装 [WebStorm](https://www.jetbrains.com/webstorm/) 和 Chrome 扩展 [JetBrains IDE Support](https://chrome.google.com/webstore/detail/jetbrains-ide-support/hmhgeddbohgjknpmjagkdomcpobmllji)。

在 WebStorm 菜单的 `Run` 中选择 `Edit Configutions...`。然后点击 `+`，并选择 `JavaScript Debug`，在 URL 部分输入 `http://localhost:3000` 并保存配置。

> 注意：如果你通过  [HOST 或 PORT 环境变量](advanced-configuration.md) 进行过调整，则 URL 可能会有所不同。

通过执行 `npm start` 启动应用程序，随后在 macOS 上点击 `^D` 或在 Windows 与 Linux 中点击 `F9` 或点击绿色的调试图标以在 WebStorm 中开始调试。

在 IntelliJ IDEA Ultimate, PhpStorm, PyCharm Pro, 和 RubyMine 中调试程序的方式也是相同的。

## 自动格式化代码

Prettier 是一个比较武断的，支持 JavaScript、CSS 和 JSON 的代码格式化工具。通过 Prettier，你可以自动格式化你所编写的代码，以确保项目中的代码样式一致。更多信息请参阅 [Prettier 的 GitHub 页面](https://github.com/prettier/prettier)，或在此页面 [查看实际效果](https://prettier.github.io/prettier/)。

要在 git 进行提交时格式化代码，我们需要安装以下依赖项：

```sh
npm install --save husky lint-staged prettier
```

或者，你可以使用 `yarn`：

```sh
yarn add husky lint-staged prettier
```

- `husky` 允许我们在 npm 脚本中调用 githooks。
- `lint-staged` 允许我们在 git 中的暂存文件上运行脚本，请参阅这篇 [有关 Lint-staged 的博文](https://medium.com/@okonetchnikov/make-linting-great-again-f3890e1ad6b8) 以了解更多信息。
- `prettier` 是我们在提交前运行的 JavaScript 格式化工具。

现在，只需在项目根目录下的 `package.json` 中添加几行代码，即可保证每个文件的格式正确。

将以下字段添加到 `package.json` 中：

```diff
+  "husky": {
+    "hooks": {
+      "pre-commit": "lint-staged"
+    }
+  }
```

随后添加 'lint-staged' 字段至 `package.json`，如下所示：

```diff
  "dependencies": {
    // ...
  },
+ "lint-staged": {
+   "src/**/*.{js,jsx,ts,tsx,json,css,scss,md}": [
+     "prettier --write",
+     "git add"
+   ]
+ },
  "scripts": {
```

现在，无论何时提交，Prettier 都会自动格式化修改的文件。你也可以通过运行 `./node_modules/.bin/prettier --write "src/**/*.{js,jsx,ts,tsx,json,css,scss,md}"` 来初次格式化整个项目。

接下来，你可能需要将 Prettier 集成至你喜欢的编辑器中，阅读 Prettier GitHub 页面上的 [编辑器集成](https://prettier.io/docs/en/editors.html) 部分以了解更多。
