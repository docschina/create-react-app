---
id: title-and-meta-tags
title: 标题与源标签
sidebar_label: 标题 & 源标签
---

## 更改标题标签

你可以在生成的项目内的 `public` 文件夹中找到源 HTML 文件。你可以在文件内部编辑 `<title>` 标签，以将标题从 "React App" 更改为其他任何内容。

请注意，通常情况下你不会经常编辑 `public` 文件夹内的文件。例如，[添加样式表](adding-a-stylesheet.md)就不需要修改 HTML。

如果你需要根据内容动态更新页面标题，则可以使用浏览器 [`document.title`](https://developer.mozilla.org/en-US/docs/Web/API/Document/title) API。如果你想要在更复杂的场景下，在 React 组件中修改标题的话，你可以使用 [React Helmet](https://github.com/nfl/react-helmet) 这种第三方库。

如果你在生产环境中为你的应用启用了自定义服务器，并且想要在标题发送至浏览器前对其进行修改，则可以按照[本章节](#generating-dynamic-meta-tags-on-the-server)中的建议进行操作。另外，你可以将每个页面先预渲染为静态 HTML 文件，然后再加载 JavaScript 包，该功能在[此处](pre-rendering-into-static-html-files.md)有详细介绍。

## 在服务器上生成动态 `<meta>` 标签

因为 Create React App 不支持服务器渲染，你可能想知道如何让 `<meta>` 标签动态反映当前 URL。为了解决这额问题，我们建议在 HTML 中添加占位符，如下所示：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta property="og:title" content="__OG_TITLE__" />
    <meta property="og:description" content="__OG_DESCRIPTION__" />
  </head>
</html>
```

然后，在服务器上，无论使用哪种后端，你都可以将 `index.html` 读入内存，并将 `__OG_TITLE__`、`__OG_DESCRIPTION__` 及其他占位符替换为由当前 URL 决定的值。确保清理并转义插值，以便将它们安全的嵌入 HTML！

如果使用 Node 服务器，甚至可以在客户端和服务器之间共享路由匹配逻辑。但是复制它也能在基础情况下正常工作。

## 将数据从服务器注入页面

与上一节类似，你可以在 HTML 中保留一些用于插入全局变量的占位符，例如：

```js
<!doctype html>
<html lang="en">
  <head>
    <script>
      window.SERVER_DATA = __SERVER_DATA__;
    </script>
```

然后，在服务器上，你可以在发送响应之前，将 `__SERVER_DATA__` 替换为真实数据 JSON。客户端代码可以读取 `window.SERVER_DATA` 以使用它。**请确保[在将 JSON 发送到客户端之前先对其进行消毒](https://medium.com/node-security/the-most-common-xss-vulnerability-in-react-js-applications-2bdffbcc1fa0)，以免你的应用收到 XSS 攻击。**
