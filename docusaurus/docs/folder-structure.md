---
id: folder-structure
title: 文件夹结构
---

执行命令后, 你的项目结构应该如下图所示:

```
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
```

对于正在构建的项目来说, **这些文件必须以如下名称存在**:

- `public/index.html` —— 页面模版；
- `src/index.js` —— JavaScript 入口文件。

你可以对其他文件进行删除 / 更名操作

你也许会在 `src` 中创建子目录，为了加快重建速度，只有 `src` 中的文件会被 Webpack 所执行。你需要**将所有 JS 和 CSS 文件放在 `src` 目录中**，否则 Webpack 会找不到这些文件的位置。

只有在 `public` 中的文件才会被 `public/index.html` 所调用。 阅读后续说明，了解如何使用 JavaScript / HTML 相关的 assets。

然而，你可以创建上层文件夹。它们不会包含在生产版本中，因此你可以将它们作为文档。

如果你已经安装了 Git，且你的项目不是更大仓库的一部分，则会初始化一个新的存储库，并在最上层目录额外生成一个 `.git` 文件夹。
