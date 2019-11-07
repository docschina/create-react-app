---
id: fetching-data-with-ajax-requests
title: 通过 AJAX 请求获取数据
sidebar_label: 获取数据
---

React 并没有规定一种特定的数据获取方法，但是大家通常使用 [axios](https://github.com/axios/axios) 这样的库，或浏览器提供的 [`fetch()` API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)。

全局 `fetch` 函数允许你发出 AJAX 请求。它接收一个 URL 作为参数，并返回一个被解析为 `Response` 对象的 `Promise`。你可以在[此处](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)找到更多关于 `fetch` 的相关信息。

Promise 代表异步操作的最终结果，你可以在[这里](https://www.promisejs.org/)和[这里](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)找到更多相关信息。axios 和 `fetch()` 方法中使用 Promise。你还可以使用 [`async / await`](https://davidwalsh.name/async-await) 语法来减少回调嵌套。

确保 [`fetch()` API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) 和 [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) 兼容你的目标受众浏览器。
例如，兼容 Internet Explorer 需要使用 [polyfill](https://github.com/facebook/create-react-app/blob/master/packages/react-app-polyfill/README.md)。

你可以在 [React 网站上的 FAQ 条目](https://reactjs.org/docs/faq-ajax.html)中了解更多有关 React 组件生成 AJAX 请求的相关信息。
