---
id: adding-bootstrap
title: 添加 Bootstrap 支持
---

尽管你无需使用任何特定的库就能将 Bootstrap 和 React 应用集成，但通常来说比包装 Bootstrap jQuery 插件要简单一些。[React Bootstrap](https://react-bootstrap.netlify.com/) 是最受欢迎的选项，它力求与 Bootstrap 完全对等。[reactstrap](https://reactstrap.github.io/) 对于寻求以部分功能为代价，追求代码小而美的项目来说也是一个不错的选择。

每个项目的文档站点都拥有详细的安装与使用说明。它们都需要依赖 Bootstrap css 文件，因此需要先安装它：

```sh
npm install --save bootstrap
```

或者你可以使用 `yarn` 代替：

```sh
yarn add bootstrap
```

在 `src/index.js` 文件的开头引入 Bootstrap CSS 和可选的 Bootstrap 主题 CSS：

```js
import 'bootstrap/dist/css/bootstrap.css';
// 将所有其他导入内容放在下面，以便你的 CSS 组件样式优先于默认样式
```

## 使用自定义主题

> 注意：该功能仅支持 `react-scripts@2.0.0` 及以上版本。

有时你可能需要调整 Bootstrap（或与其相似的包）的视觉样式。

从 `react-scripts@2.0.0` 开始，你可以导入 `.scss` 文件。这样就可以将包的内置 Sass 变量用于全局样式。

要在 Create React App 中启用 `scss`，你需要先安装 `node-sass`。

```sh
npm install --save node-sass
```

或者你可以使用 `yarn` 代替：

```sh
yarn add node-sass
```

要自定义 Bootstrap，请创建一个名为 `src/custom.scss`（或类似文件）的文件，然后导入 Bootstrap 源样式表。在导入文件 _前_ 添加覆盖样式文件。你可以参考[Bootstrap 文档](https://getbootstrap.com/docs/4.1/getting-started/theming/#css-variables) 以获取可用变量的名称。

```scss
// 在导入前覆盖默认变量
$body-bg: #000;

// 导入 Bootstrap 及其默认变量
@import '~bootstrap/scss/bootstrap.scss';
```

> **注意：**如上所示，你必须在 `node_modules` 的导入前面加上 `~`。

最后，在你的 `src/index.js` 文件的开头导入新建的 `.scss 文件`，而不是默认的 Bootstrap `.css`，例如：

```javascript
import './custom.scss';
```
