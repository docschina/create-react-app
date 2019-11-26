---
id: code-splitting
title: 代码分割
---

代码分割可以将代码拆分成小的 chunks，然后按需加载，而非在用户使用前下载整个应用程序。

该项目设置支持通过 [dynamic `import()`](http://2ality.com/2017/01/import-operator.html#loading-code-on-demand) 进行代码分割。该[提案](https://github.com/tc39/proposal-dynamic-import)处于第四阶段。与 `import()` 类似的函数形式将模块名称作为参数，并返回一个包含始终被解析为模块的命名空间对象的 [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)。

以下是一个简单的示例：

## `moduleA.js`

```js
const moduleA = 'Hello';

export { moduleA };
```

## `App.js`

```js
import React, { Component } from 'react';

class App extends Component {
  handleClick = () => {
    import('./moduleA')
      .then(({ moduleA }) => {
        // Use moduleA
      })
      .catch(err => {
        // Handle failure
      });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Load</button>
      </div>
    );
  }
}

export default App;
```

这将使 `moduleA.js` 及其所有唯一依赖项成为单独的 chunk，仅在用户点击 '加载' 按钮后才会加载。有关创建的 chunk 的更多信息，请参见  [生产环境构建](production-build.md) 部分。

如果你喜欢的话，也可以将其与 `async` / `await` 语法一起使用。

## 使用 React Router

如果你使用的是 React Router，请查看 [本教程](https://reactjs.org/docs/code-splitting.html#route-based-code-splitting)

还可以查看 React 文档中的[代码分割](https://reactjs.org/docs/code-splitting.html)章节。
