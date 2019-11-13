---
id: adding-a-sass-stylesheet
title: 添加 Sass 样式支持
sidebar_label: 添加 Sass 样式支持
---

> 注意：该功能仅支持 `react-scripts@2.0.0` 及以上版本。

通常，我们建议你不要在不同组件中重复使用相同的 CSS 类。例如，我们建议创建 `<Button>` 组件与其自己的 `.Button` 样式，而不是在 `<AcceptButton>` 和 `<RejectButton>` 中重复使用 `.Button` 类，这样 `<AcceptButton>` 和 `<RejectButton>` 都能正常渲染（但是[不继承](https://facebook.github.io/react/docs/composition-vs-inheritance.html)）。

遵循此规则会降低使用 CSS 预处理器的必要性，因为诸如 mixins 和 nesting 之类的功能均已被组件集成所取代。但是，如果你认为 CSS 预处理器有其必要性的话，可以对其进行集成。

要使用 Sass 的话，首先安装 `node-sass`：

```sh
$ npm install node-sass --save
$ # 或
$ yarn add node-sass
```

现在，你可以将 `src/App.css` 重命名为 `src/App.scss`，并更新 `src/App.js` 以引入 `src/App.scss`。
如果以扩展名 `.scss` 或 `.sass` 引入，则此文件和其他文件都将会自动编译。

要在 Sass 文件间共享变量，可以使用 Sass import，例如，`src/App.scss` 和其他组件样式文件可以通过 `@import "./shared.scss";` 引入变量定义。

这允许你像这样进行引入操作：

```scss
@import 'styles/_colors.scss'; // 假设它在 src 下的 styles 目录
@import '~nprogress/nprogress'; // 从 node module 中的 nprogress 中引入 css 文件
```

> **注意：**如上所示，从 `node_modules` 引入文件前需要加上 `~`。

`node-sass` 也支持 `SASS_PATH` 变量。

要从你所指定的路径为源头进行相对路径引用，以及在不添加 `~` 的情况下从 `node_modules` 中引用文件，你可以在项目根目录下添加 [`.env` 文件](https://github.com/facebook/create-react-app/blob/master/docusaurus/docs/adding-custom-environment-variables.md#adding-development-environment-variables-in-env)，加入变量 `SASS_PATH=node_modules:src`。要指定更多目录，可以把它们用 `:` 分割加入 `SASS_PATH` 中，如 `path1:path2:path3`。

如果你设定 `SASS_PATH=node_modules:src`，这将允许你像这样执行引入：
```scss
@import 'styles/colors'; // 假定 src 下有 styles 目录，且存在 _colors.scss 文件
@import 'nprogress/nprogress'; // 从 node module 中引入 nprogress css 文件
```

> **注意：**对于 windows 操作系统，请使用以下语法：
>
> ```
> SASS_PATH=./node_modules;./src
> ```

> **提示：**你也可以选择将此功能与 [CSS 模块](adding-a-css-modules-stylesheet.md)一起使用！

> **注意：**如果你正在使用 Flow，请在你的 `.flowconfig` 文件中覆盖 [module.file_ext](https://flow.org/en/docs/config/options/#toc-module-file-ext-string) 设置，以便其识别 `.sass` 或 `.scss` 文件。你还需要为 `.js`, `.jsx`, `.mjs` 和 `.json` 文件添加 `module.file_ext` 默认设置。
>
> ```
> [options]
> module.file_ext=.js
> module.file_ext=.jsx
> module.file_ext=.mjs
> module.file_ext=.json
> module.file_ext=.sass
> module.file_ext=.scss
> ```
