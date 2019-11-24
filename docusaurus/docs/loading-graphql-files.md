---
id: loading-graphql-files
title: 加载 .graphql 文件
sidebar_label: 加载 .graphql 文件
---

要加载 `.gql` 和 `.graphql` 文件，请先执行以下命令，安装 [`graphql`](https://www.npmjs.com/package/graphql) 和 [`graphql.macro`](https://www.npmjs.com/package/graphql.macro)：

```sh
npm install --save graphql graphql.macro
```

或者，你可以使用 `yarn`：

```sh
yarn add graphql graphql.macro
```

然后，每当你要加载 `.gql` 或 `.graphql` 文件时，请从 macro 包中引入 `loader`：

```js
import { loader } from 'graphql.macro';

const query = loader('./foo.graphql');
```

你的结果将会自动内联！这意味着如果上面的文件，`foo.graphql`，包含以下内容：

```graphql
query {
  hello {
    world
  }
}
```

之前的示例会变为：

```javascript
const query = {
  'kind': 'Document',
  'definitions': [{
    ...
  }],
  'loc': {
    ...
    'source': {
      'body': '\\\\n  query {\\\\n    hello {\\\\n      world\\\\n    }\\\\n  }\\\\n',
      'name': 'GraphQL request',
      ...
    }
  }
};
```

你还可以使用 `gql` 模版标签，就像使用 `graphql-tag` 包中的 non-macro 版本一样，同样拥有内联解析结果的优点。

```js
import { gql } from 'graphql.macro';
 
const query = gql`
  query User {
    user(id: 5) {
      lastName
      ...UserEntry1
    }
  }
`;
```
