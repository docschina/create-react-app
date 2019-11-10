---
id: importing-a-component
title: 导入组件
---

由于 Webpack 的关系，此项目安装程序支持 ES6 模块。

当然你仍可以使用 `require()` 和 `module.exports`，但我们建议你改用 [`import` 和 `export`](http://exploringjs.com/es6/ch_modules.html)。

示例：

## `Button.js`

```js
import React, { Component } from 'react';

class Button extends Component {
  render() {
    // ...
  }
}

export default Button; // 不要忘记使用 export default！
```

## `DangerButton.js`

```js
import React, { Component } from 'react';
import Button from './Button'; // 从另一个文件导入组件

class DangerButton extends Component {
  render() {
    return <Button color="red" />;
  }
}

export default DangerButton;
```

请注意 [默认导出和命名导出是有区别的](https://stackoverflow.com/questions/36795819/react-native-es-6-when-should-i-use-curly-braces-for-import/36796281#36796281)。这是很常见的错误源。

我们建议在模块只导出单个对象（例如，一个组件）时，坚持使用默认导入和导出。当导出 Button 组件时，你应使用 `export default Button` 导入并使用 `import Button from './Button'` 引入。

命名导出对于导出多个函数的 utils 模块来说非常有用。一个模块最多可以有一个默认导出和任意多个命名导出。

了解有关 ES6 模块的更多信息：

- [何时使用花括号?](https://stackoverflow.com/questions/36795819/react-native-es-6-when-should-i-use-curly-braces-for-import/36796281#36796281)
- [探索 ES6 模块](http://exploringjs.com/es6/ch_modules.html)
- [了解 ES6 模块](https://leanpub.com/understandinges6/read#leanpub-auto-encapsulating-code-with-modules)

## 绝对导入

你可以将应用程序配置为支持使用绝对路径导入模块。这可以通过在项目根目录中配 `jsconfig.json` 或者 `tsconfig.json` 文件来完成。如果你在项目中使用的是TypeScript，那么你已经默认拥有 `tsconfig.json`。

下述是一个JavaScript项目 `jsconfig.json` 文件的示例，如果文件不存在，则可以创建该文件：

```json
{
  "compilerOptions": {
    "baseUrl": "src"
  },
  "include": ["src"]
}
```

如果你项目使用的是 Typescript，则可以在项目的 `tsconfig.json` 文件的 `compilerOptions` 配置中设置 `baseUrl`。

如果你已将项目配置为支持绝对导入，当要导入 `src/components/Button.js` 模块时，你可以按如下方式导入该模块：

```js
import Button from 'components/Button';
```

有关这些配置文件的更多信息，请参阅 [jsconfig.json](https://code.visualstudio.com/docs/languages/jsconfig) 和 [tsconfig.json](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) 相关文档。
