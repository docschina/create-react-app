---
id: production-build
title: 生成生产环境构建版本
---

`npm run build` 命令会创建一个 `build` 文件夹，其中会包含你的应用的生产环境构建版本。在 `build/static` 目录中会包含你的 JavaScript 和 CSS 文件。 `build/static` 内部的每个文件名都会包含文件内容的唯一哈希值，文件名中的哈希使[长期缓存技术](#static-file-caching)得以使用。

运行通过最新版本 Create React App 应用创建的生产环境构建版本时，会在 `build/static/js` 中生成多个 `.js` 文件（又被称为 _chunks_）：

`main.[hash].chunk.js`

- 这是你的 _应用_ 代码，`App.js` 等。

`[number].[hash].chunk.js`

- 这些文件可以是 _vendor_ 代码，也可以是[分割后的代码块](code-splitting.md)。_Vendor_ 代码包含你从 `node_modules` 中引入的模块。拆分 _vendor_ 和 _application_ 代码的潜在优势是允许启用[长期缓存技术](#static-file-caching)，以提升应用程序加载性能。由于 _vendor_ 代码的更改频率往往比实际 _application_ 代码的更改频率低，因此浏览器能够对其进行单独缓存，并且不会在应用代码更改时重新下载它们。

`runtime-main.[hash].js`

- 这是 [webpack 运行时](https://webpack.js.org/configuration/optimization/#optimization-runtimechunk)逻辑的一小部分，用于加载与运行你的应用程序。默认情况下，其内容将嵌入到你的 `build/index.html` 文件中，以节省一个网络请求。你可以按照[进阶配置](advanced-configuration.md)中的说明，指定 `INLINE_RUNTIME_CHUNK=false` 来选择禁用此功能，这会导致这个 chunk 被加载，而不是嵌入至 `index.html` 中。

如果你正在使用 [code splitting](code-splitting.md) 拆分你的应用程序，这也会在 `build/static` 文件夹中创建额外的 chunks。

## 静态文件缓存

在 `build/static` 目录中的每个文件都会在文件名后附加一个唯一的哈希，该哈希是根据文件内容生成的，它允许你启用[积极缓存技术（aggressive caching techniques）](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching#invalidating_and_updating_cached_responses)，以避免浏览器在文件内容未更改的情况下重新下载你的 assets。如果文件的内容在后续版本中发生修改，则生成的文件名的哈希将会有所不同。

为了向你的用户提供最佳性能，最佳实践是对 `index.html` 以及 `build/static` 中的文件指定 `Cache-Control` 报头。该报头允许你控制浏览器以及 CDN 缓存静态资源的时长。如果你不熟悉 `Cache-Control` 的相关功能，请参阅[这篇文章](https://jakearchibald.com/2016/caching-best-practices/)以获取详细信息。

为你在 `build/static` 中的资源启用 `Cache-Control: max-age=31536000`，同时为其他所有内容启用 `Cache-Control: no-cache` 是一个安全有效的起点，这能保证你的用户浏览器始终检查 `index.html` 文件是否更新，并将所有的 `build/static` 中的文件缓存一年。请注意，由于文件内容哈希值已被嵌入文件名中，因此你可以在 `build/static` 文件夹内安全使用一年有效期。

## 分析

ReactDOM 在开发模式下自动支持 v16.5+ 的分析技术，但是由于分析会引入额外的性能开销，因此它在生产模式中被作为可选项提供。你可以通过 `--profile` 标签启用此功能。使用 `npm run build --profile` 或 `yarn build --profile` 以在生产版本中启用性能分析。有关使用 React DevTools 进行分析的详细内容，请参见 [React docs](https://reactjs.org/docs/optimizing-performance.html#profiling-components-with-the-devtools-profiler)。