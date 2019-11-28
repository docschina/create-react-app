---
id: debugging-tests
title: Debugging 测试
sidebar_label: Debugging 测试
---

有多种方法可以为你的 Jest 测试设置调试器。我们将在 Chrome 和 [Visual Studio Code](https://code.visualstudio.com/) 中进行调试。

> 注意：此功能只能在 Node 8 或更高版本中使用。

## 在 Chrome 中进行 debugging 测试

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

在执行之前暂停，使调试器添加到进程，然后开始你的 Jest 测试。

在 Chrome 中打开以下内容

```
about:inspect
```

打开这个链接后，屏幕上会显示 Chrome 开发者工具。在你的进程中选择 `inspect` ，同时断点将被设置在 react 脚本的第一行（这样做是为了给你时间打开开发者工具，并防止 Jest 此之前执行）。点击屏幕右上角类似”播放”按钮来继续执行。当 Jest 执行包含 debugger 的语句时，执行过程将被暂停，这样你就可以检查当前作用域与调用堆栈。

> 注意：--runInBand 命令行选项可确保 Jest 在同一个进程中进行测试，而不是为每个测试都创建一个进程。通常，Jest 可并行执行测试，但是同时调试多个进程是很难做到的。

## 在 Visual Studio Code 中进行 debugging 测试

[Visual Studio Code](https://code.visualstudio.com) 支持采用 Jest 进行 debugging 测试。

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
