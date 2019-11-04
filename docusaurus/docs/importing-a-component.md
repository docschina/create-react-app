---
id: importing-a-component
title: 导入组件
---

由于 Webpack，此项目安装程序支持ES6模块。

虽然您仍然可以使用 `require()` and `module.exports`，但我们建议您改用[`import` and `export`](http://exploringjs.com/es6/ch_modules.html)。

例如：

## `Button.js`

```js
import React, { Component } from 'react';

class Button extends Component {
  render() {
    // ...
  }
}

export default Button; //不要忘记使用 export default！
```

## `DangerButton.js`

```js
import React, { Component } from 'react';
import Button from './Button'; //从另一个文件导入组件

class DangerButton extends Component {
  render() {
    return <Button color="red" />;
  }
}

export default DangerButton;
```

注意[默认导出和命名导出的区别](https://stackoverflow.com/questions/36795819/react-native-es-6-when-should-i-use-curly-braces-for-import/36796281#36796281)。这里是常见的错误来源。

我们建议在模块只导出单个对象（例如，一个组件）时，坚持使用默认导入和导出。当你使用 `export default Button` and `import Button from './Button'` 就可以得到想要的结果.

命名导出对于导出多个函数的实用程序模块非常有用。一个模块最多可以有一个默认导出和任意多个命名导出。

了解有关ES6模块的更多信息：

- [何时使用花括号?](https://stackoverflow.com/questions/36795819/react-native-es-6-when-should-i-use-curly-braces-for-import/36796281#36796281)
- [探索 ES6 模块](http://exploringjs.com/es6/ch_modules.html)
- [了解 ES6 模块](https://leanpub.com/understandinges6/read#leanpub-auto-encapsulating-code-with-modules)

## 绝对导入

您可以将应用程序配置为支持使用绝对路径导入模块。这可以通过在项目根目录中配 `jsconfig.json` or `tsconfig.json` 文件来完成。如果您在项目中使用的是TypeScript，那么您已经有了一个 `tsconfig.json` 文件。

下面是一个JavaScript项目 `jsconfig.json` 文件的示例，如果文件不存在，则可以创建该文件：

```json
{
  "compilerOptions": {
    "baseUrl": "src"
  },
  "include": ["src"]
}
```

如果您使用的是typescript，则可以在项目的 `tsconfig.json` 文件的 `compilerOptions` 中配置 `baseUrl` 来设置。

既然您已经将项目配置为支持绝对导入，那么如果您要导入位于 `src/components/Button.js` 的模块，您可以像这样导入该模块：

```js
import Button from 'components/Button';
```

有关这些配置文件的更多信息，请参阅[jsconfig.json 参考](https://code.visualstudio.com/docs/languages/jsconfig)和[tsconfig.json 参考](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) 文档。
