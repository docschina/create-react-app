---
id: making-a-progressive-web-app
title: 开发 Progressive Web App
---

生产环境具备所有生成初级[渐进式 Web 应用](https://developers.google.com/web/progressive-web-apps/)的必要工具，但是**离线/缓存优先行为是唯一可选的启用项**。默认情况下，构建过程中将会生成 service worker 文件，但是不会进行注册，因此它不会接管你的生产环境网络应用。

如果要启用离线优先行为，开发者们应该先在它们的 [`src/index.js`](https://github.com/facebook/create-react-app/blob/master/packages/cra-template/template/src/index.js) 中找到内容：

```js
// 如果你希望你的应用能够离线运行，且加载的更快的话，则可以更改下面的 unregister() 至 register()。请注意，这存在一些陷阱。
// 了解更多有关 service worker 的信息，请查阅 https://bit.ly/CRA-PWA
serviceWorker.unregister();
```

如上所述，将 `serviceWorker.unregister()` 切换至 `serviceWorker.register()` 将启用 service worker。

## 为什么要启用它？

离线优先的渐进式 Web 应用比传统网页更快，更可靠，并提供更为优秀的移动体验：

- 所有静态站点资源已被缓存，因此无论网络连接如何（如 2G 或 3G 环境），你的页面在后续访问时都能快速加载。更新会在后台自动下载。
- 即使网络处于离线状态，你的应用也能不受网络环境干扰并正常运行。这意味着你的用户甚至可以在 10,000 英尺高的地方或地铁中使用你的应用。
在移动设备上，你的应用程序可以直接添加到用户的主页上，包括应用程序图标与其他所有功能。这解除了对应用商店的依赖。

但是，它们[可能会使调试与部署变得更富有挑战性](https://github.com/facebook/create-react-app/issues/2398)，因此，从 Create React App 2 开始，service worker 变为了可选项。

[`workbox-webpack-plugin`](https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin) 已集成至生产环境配置中，它将负责生成 service worker 文件，该文件会自动预缓存所有本地资产，并在部署更新时使其保持最新状态。
service worker 使用[缓存优先策略](https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/#cache-falling-back-to-network)来处理所有对本地资产的请求，包括用于 HTML 的[导航请求](https://developers.google.com/web/fundamentals/primers/service-workers/high-performance-loading#first_what_are_navigation_requests)，以确保你的应用程序在缓慢或不可靠的网络环境下依旧保持稳定。

## 离线优先注意事项

如果你决定启用 service worker 注册项，请预先阅读以下事项：

1. 完成初始缓存后，[service worker 生命周期](https://developers.google.com/web/fundamentals/primers/service-workers/lifecycle)控制何时将更新后的内容呈现给用户。为了防止[懒加载内容之间的相互竞争](https://github.com/facebook/create-react-app/issues/3613#issuecomment-353467430)，其默认行为是保守的将更新后的 service worker 放在"[待加载](https://developers.google.com/web/fundamentals/primers/service-workers/lifecycle#waiting)"状态。这意味着直到用户关闭（刷新并不足够）当前 tab 页前，用户都只会看到旧一些的内容。查阅[这篇文章](https://jeffy.info/2018/10/10/sw-in-c-r-a.html)以了解此行为的更多细节。

 2. 用户不一定熟悉离线优先 Web 应用。当 service worker 填充完毕你的缓存后（显示 "This web app works offline!"），需要让用户知道 service worker 提取了最新的内容只有在下一次访问此页面时才会生效（显示 "New content is available once existing tabs are closed."）。显示这些内容是针对开发人员的练习，但如果是入门的话，你可以直接调用 [`src/serviceWorker.js`](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/src/serviceWorker.js)，它演示了监听 service worker 的哪些生命周期以应对什么情况 ，默认情况下，仅将适当的信息记录至 JavaScript 控制台。

3. Service worker [需要 HTTPS 支持](https://developers.google.com/web/fundamentals/getting-started/primers/service-workers#you_need_https)，但是为了本地开发的便捷性，该策略[不适用于 `localhost`](https://stackoverflow.com/questions/34160509/options-for-testing-service-workers-via-http/34161385#34161385)。如果你的生产环境服务器不支持 HTTPS，那么 service worker 的注册将会失败，但是 Web 应用的其余部分将会正常运行。

4. service worker 仅在[生产环境](deployment.md)中被启用，例如 `npm run build` 的输出。建议你不要启用开发环境中的离线优先 service worker，这可能会导致一些问题，像是调用了之前缓存的 assets，其中不包含你在本地作出的最新修改。

5. 如果你 _需要_ 在本地测试你的离线优先 service worker，请先构建应用（执行 `npm run build` 命令），并在 build 文件夹中运行标准的 http 服务器。运行构建脚本后，`create-react-app` 将会提供一种在本地测试生产环境构建内容的方法说明，[部署说明](deployment.md)包含调用其他方法的说明，_请确保始终使用隐身窗口，以避免浏览器缓存复杂化。_

6. 默认情况下，生成的 service worker 文件不会拦截或缓存任何跨域流量，例如 HTTP [API 请求](integrating-with-an-api-backend.md)、图片或从其他域加载的嵌入内容。

## 渐进式 Web 应用元数据

Web 应用清单的默认配置项位于 [`public/manifest.json`](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/public/manifest.json)，你可以在此为你的 Web 应用修改相关信息。

当用户在使用 Android 上的 Chrome 或 Firefox 将网络应用添加到主屏幕上时，[`manifest.json`](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/public/manifest.json) 中的元数据确定显示网络应用时使用什么图标、名称和商标颜色。[Web 应用清单指南](https://developers.google.com/web/fundamentals/engage-and-retain/web-app-manifest/)提供了每个相关字段的含义，以及你的自定义字段将如何影响用户体验的相关信息。

已添加到主屏幕的渐进式 Web 应用将加载的更快，同时在有活动的 service worker 时脱机工作。话虽如此，无论你是否选择加入 service worker 注册，依然会使用来自 Web 应用清单的元数据。
