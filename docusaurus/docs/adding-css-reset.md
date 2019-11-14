---
id: adding-css-reset
title: 添加 CSS Reset 支持
sidebar_label: 添加 CSS Reset 支持
---

本项目使用了 [PostCSS Normalize] 为项目添加了 [CSS Reset] 的支持。

要开始使用它，请在 CSS 文件中的任意位置添加 `@import-normalize;`。你只需添加一次，重复的引入会被自动删除。由于只需添加一次，因此添加它的最好位置是 `index.css` 或 `App.css`。

## `index.css`

```css
@import-normalize; /* 引入 normalize.css 样式 */

/* 其余 app 样式 */
```

你可以通过项目的 [browserslist] 控制使用 [normalize.css] 的哪些部分。

[browserslist] 为 `last 3 versions` 时的结果：

```css
/**
 * 为 IE 9- 添加正确的显示
 */

audio,
video {
  display: inline-block;
}

/**
 * 删除 IE 10- 中链接内图片的边框
 */

img {
  border-style: none;
}
```

[browserslist] 为 `last 2 versions` 时的结果:

```css
/**
 * 删除 IE 10- 中链接内图片的边框
 */

img {
  border-style: none;
}
```

## 浏览器支持

浏览器支持由 normalize.css [supports] 决定。在撰写本文时，它包括：

- Chrome (last 3)
- Edge (last 3)
- Firefox (last 3)
- Firefox ESR
- Opera (last 3)
- Safari (last 3)
- iOS Safari (last 2)
- Internet Explorer 9+

[browserslist]: http://browserl.ist/
[css reset]: https://cssreset.com/what-is-a-css-reset/
[normalize.css]: https://github.com/csstools/normalize.css
[supports]: https://github.com/csstools/normalize.css#browser-support
[postcss normalize]: https://github.com/csstools/postcss-normalize
