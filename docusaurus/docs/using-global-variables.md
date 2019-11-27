---
id: using-global-variables
title: 使用全局变量
---

当你在 HTML 文件中引入定义全局变量的脚本，并尝试在代码中使用这些变量时，lint 会作出错误提示，因为它无从得知变量是否被定义。

你可以通过从 `window` 对象中显式读取全局变量来避免这种情况，例如：

```js
const $ = window.$;
```

这样可以表明你希望调用全局变量，而不是单纯的拼写错误。

另外，你可以通过在代码前添加 `// eslint-disable-line` 来强制 linter 忽略某一行。
