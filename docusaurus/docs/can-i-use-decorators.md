---
id: can-i-use-decorators
title: 我能使用装饰器吗?
---

一些流行的库在开发中使用可[装饰器](https://medium.com/google-developers/exploring-es7-decorators-76ecb65fb841)

目前，Create React App 故意不支持装饰器语法，原因是：

- 这是一项实验性提案，可能会有所更改（实际上，它已经有过一次修改，而且可能还会作出新的修改）。
- 大多数库目前仅支持该提案的旧版本 - 这永远不会成为既定标准。

但是，在大多数情况下，你可以不使用装饰器来重写基于装饰器的代码，且获得等效的结果。

请参照以下两个参考示例：

- [#214](https://github.com/facebook/create-react-app/issues/214)
- [#411](https://github.com/facebook/create-react-app/issues/411)

当规范发展到稳定阶段时，Create React App 才会支持装饰器。