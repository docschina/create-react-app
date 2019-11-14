---
id: post-processing-css
title: CSS 后处理
---

该项目设置会最小化你的 CSS，并通过 [Autoprefixer](https://github.com/postcss/autoprefixer) 自动添加供应商前缀，因此你无需关心这些。

新的 CSS 特性，诸如 [`all` 属性](https://developer.mozilla.org/en-US/docs/Web/CSS/all)，[`break` 属性](https://www.w3.org/TR/css-break-3/#breaking-controls)，[自定义属性](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables)，和 [媒体查询范围](https://www.w3.org/TR/mediaqueries-4/#range-context) 会自动添加 polyfill，以兼容老式浏览器。

你可以根据 [Browserslist 规范](https://github.com/browserslist/browserslist#readme)，通过调整 `package.json` 中的 `browserlist` 属性来自定义需要兼容的浏览器。

例如，它会把如下文件：

```css
.App {
  display: flex;
  flex-direction: row;
  align-items: center;
}
```

转换成这样：

```css
.App {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
```

如果你需要在出于某种特殊原因的情况下禁用自动前缀，请 [遵循本节](https://github.com/postcss/autoprefixer#disabling)。

[CSS 网格布局](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)前缀默认情况下出于禁用状态，但它**不**会去除手工前缀。
如果你想加入 CSS Grid 前缀，[请先了解一下它的局限性](https://github.com/postcss/autoprefixer#does-autoprefixer-polyfill-grid-layout-for-ie)。

要启用 CSS Grid 前缀，请在 CSS 文件顶部添加 `/* autoprefixer grid: autoplace */`。
