---
id: proxying-api-requests-in-development
title: 在开发环境中代理 API 请求
sidebar_label: 开发环境中进行代理
---

> 注意：该功能仅支持 `react-scripts@0.2.3` 及以上版本。

人们通常在与后端实例相同的主机和端口上为前端 React 应用提供服务。

例如，应用程序被部署后，生产环境可能如下所示：

    /             - 静态服务器返回 React 应用中的 index.html
    /todos        - 静态服务器返回该路径下的 index.html
    /api/todos    - 服务器使用后端实例处理所有 /api/* 请求

这种设置**并非**必要。但是如果你确实**有**这样的设置，则可以方便的编写像 `fetch('api/todos')` 之类的请求，而且不必担心在开发过程中将其重定向到其他主机或端口。

要告知开发服务器将所有未知请求代理到开发中的 API 服务器，请在你的 `package.json` 中添加一个 `proxy` 字段，例如：

```json
  "proxy": "http://localhost:4000",
```

这样，当你在开发中 `fetch('/api/todos')` 时，开发服务器将识别出它不是静态 asset，并将你的请求代理至 `http://localhost:4000/api/todos` 作为后备方案。开发服务器**仅**尝试将其 `Accept` 报头中没有 `text/html` 的请求发送到代理。

这还顺带解决了[CORS 问题](https://stackoverflow.com/questions/21854516/understanding-ajax-cors-and-security-considerations)和开发中类似的错误信息。

```
Fetch API cannot load http://localhost:4000/api/todos. No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://localhost:3000' is therefore not allowed access. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
```

请记住，`代理` 仅在开发中有效（执行 `npm start` 时），且必须要确保 `api/todos` 之类的 URL 正确指向生产环境中的正确对象。你不必使用 `/api` 前缀。任何不附带 `text/html` 接收报头的请求都会被重定向到指定的 `代理`。

`proxy` 选项支持 HTTP、HTTPS 和 WebSocket 连接。

如果 `proxy` 选项对你来说**不够灵活**，你可以：

- [自行配置代理](#configuring-the-proxy-manually)。
- 在你的服务器上启用 CORS ([Express 下的详细教程如下](https://enable-cors.org/server_expressjs.html))。
- 利用[环境变量](adding-custom-environment-variables.md)，将正确的服务器主机和端口注入你的应用程序。

## 配置代理后出现 "Invalid Host Header" 错误

当启用 `proxy` 选项时，你默认接受了一套更为严格的主机检查。这一点是必要的，因为让后端保持对远程主机的开放状态，会使你的计算机容易受到 DNS 重定向攻击。[这篇文章](https://medium.com/webpack/webpack-dev-server-middleware-security-issues-1489d950874a)和[此问题](https://github.com/webpack/webpack-dev-server/issues/887)详细阐述了这一点。

在 `localhost` 上进行开发时不会受到此选项影响，但是如果你像[本文所述](https://github.com/facebook/create-react-app/issues/2271)的那样进行远程开发，在启用 `proxy` 选项后会在浏览器中看到此错误：

> Invalid Host header

要解决此问题，你可以在项目根目录下创建名为 `.env.development` 的文件，以指定公共开发主机：

```
HOST=mypublicdevhost.com
```

现在，如果你现在重新启动服务器，并从指定的主机加载应用，它就会正常工作了。

如果还存在问题，或者你使用的是云编辑器这种更为奇特的环境，则能够通过在 `.env.development.local` 中添加一行来完全跳过主机验证。**请注意，这样做很危险，这会使你的计算机容易受到恶意网站的远端代码注入：**

```
# NOTE: THIS IS DANGEROUS!
# It exposes your machine to attacks from the websites you visit.
DANGEROUSLY_DISABLE_HOST_CHECK=true
```

我们不推荐使用这种方法。

## 手动配置代理

> 注意：该功能仅支持 `react-scripts@2.0.0` 及以上版本。

如果 `proxy` 选项**不够**灵活，你可以直接访问 Express 应用实例并连接自己的代理中间件。

你可以将此功能与 `package.json` 中的 `proxy` 属性结合使用，但建议你将所有逻辑整合到 `src/setupProxy.js` 中。

首先，使用 npm 或 Yarn 安装 `http-proxy-middleware`：

```sh
$ npm install http-proxy-middleware --save
$ # or
$ yarn add http-proxy-middleware
```

接下来，创建 `src/setupProxy.js`，并将一下内容放入其中：

```js
const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  // ...
};
```

现在，你可以根据需要注册代理！这是使用上述 `http-proxy-middleware` 的相关示例：

```js
const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    proxy({
      target: 'http://localhost:5000',
      changeOrigin: true,
    })
  );
};
```

> **注意：** 你无需导入该文件。启用开发服务器时，它将会被自动注册。

> **注意：**此文件仅支持 Node 的 JavaScript 语法，确保仅适用受支持的语言特性（即不支持Flow，ES模块等）。

> **注意：**将路径传递给代理函数可让你使用通配符或模式匹配路径，这比 express 的路由匹配更加灵活。
