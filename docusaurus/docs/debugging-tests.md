---
id: debugging-tests
title: 调试测试
sidebar_label: 调试测试
---

有多种方法可以为你的 `Jest` 测试设置调试器。我们将在 `Chrome` 和 [Visual Studio Code](https://code.visualstudio.com/) 中进行调试。

> 注意：此功能只能在 `node` 8 或更高版本中使用。

## 在 `Chrome` 中调试测试

将以下内容添加到项目的 `package.json` 中的 `scripts` 部分


```json
"scripts": {
    "test:debug": "react-scripts --inspect-brk test --runInBand --no-cache"
  }
```

在任何需要进行测试的地方加入 `debugger;` 语句，并且运行以下命令：

```sh
$ npm run test:debug
```

在执行之前暂停，使调试器添加到进程，然后开始你的 `Jest` 测试。

在 `Chrome` 中打开以下内容


```
about:inspect
```

打开这个链接后，Chrome 开发者工具就会展示出来。在你的进程中选择 `inspect` ，并且断点将设置在 `react` 脚本的第一行（这样做是为了给你时间打开开发者工具，并防止 `Jest` 此之前执行）。点击屏幕右上角类似”播放”按钮来继续执行。当 `Jest` 执行包含 `debugger` 的语句时，过程将暂停，你可以在当前范围内进行检查并调用堆栈。

> Note: --runInBand cli 选项可确保 `Jest` 在同一进程中进行测试，而不是为单个测试创建进程。通常，`Jest` 可并行化跨进程的测试，但是很难同时调试多个进程。

## 在 Visual Studio Code 中调试测试

[Visual Studio Code](https://code.visualstudio.com) 支持调试 `Jest` 测试。

使用以下 [`launch.json`](https://code.visualstudio.com/docs/editor/debugging#_launch-configurations) 配置文件：

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Debug CRA Tests",
      "type": "node",
      "request": "launch",
      "runtimeExecutable": "${workspaceRoot}/node_modules/.bin/react-scripts",
      "args": ["test", "--runInBand", "--no-cache", "--watchAll=false"],
      "cwd": "${workspaceRoot}",
      "protocol": "inspector",
      "console": "integratedTerminal",
      "internalConsoleOptions": "neverOpen",
      "env": { "CI": "true" },
      "disableOptimisticBPs": true
    }
  ]
}
```
