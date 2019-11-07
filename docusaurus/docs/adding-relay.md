---
id: adding-relay
title: 添加 Relay
---

Relay 是一个框架，用于构建由 GraphQL 支持的数据驱动 React 应用。当前版本的 Relay 可以借助 Babel 宏在 Creat React App 项目中实现开箱即用。按照 [Relay 文档](https://facebook.github.io/relay/) 设置项目，然后确保你的 babel 插件版本提供了宏。

要添加框架，先运行：

```sh
npm install --save babel-plugin-relay
```

或者你可以使用 `yarn` 代替：

```sh
yarn add babel-plugin-relay
```

然后，无论在何处调用 `graphql` 模版标签，都应该引入宏：

```js
import graphql from 'babel-plugin-relay/macro';
// 而不是:
//   import { graphql } from "babel-plugin-relay"

graphql`
  query UserQuery {
    viewer {
      id
    }
  }
`;
```

要了解更多关于 Relay 的信息，请查阅[官方文档](https://facebook.github.io/relay/)。
