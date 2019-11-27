---
id: pre-rendering-into-static-html-files
title: 预渲染静态 HTML 文件
sidebar_label: 预渲染静态 HTML 文件
---

如果你使用静态托管服务商托管自己的 `构建版本`，则可以使用 [react-snapshot](https://www.npmjs.com/package/react-snapshot) 或 [react-snap](https://github.com/stereobooster/react-snap) 为应用程序中的每个路由或相对链接生成 HTML 页面。然后，当 JavaScript 包加载完成时，这些页面将会无缝切换至活动状态（被"活性化"）。

也有在静态托管外使用该功能的选择，以在生成和缓存路由时减轻服务器的压力。

预渲染的主要好处是，无论 JavaScript 是否成功下载，你都可以 _通过_ HTML 负载获得每个页面的核心内容。这也增加了搜索引擎录入你的应用程序内每个路由的可能性。

你可以在此处阅读关于 [零配置预渲染（也被称为快照）](https://medium.com/superhighfives/an-almost-static-stack-6df0a2791319) 的相关信息
