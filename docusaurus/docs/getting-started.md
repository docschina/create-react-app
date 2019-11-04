---
id: getting-started
title: 开始
---

Create React App 是由官方维护的创建 React 单页面应用的工具。它提供了一种无需配置的现代构建方案。

## 快速开始

```sh
npx create-react-app my-app
cd my-app
npm start
```

> 如果你此前已经通过执行 `npm install -g create-react-app` 全局安装了 `create-react-app`，我们建议你执行 `npm uninstall -g create-react-app` 将它卸载掉，目的是确保 `npx` 总是使用最新版本的 `create-react-app`。

_([npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) 来自 npm 5.2+ 以及更高版本， 参阅 [instructions for older npm versions](https://gist.github.com/gaearon/4064d3c23a77c74a3614c498a8bb1c5f))_

然后打开 [http://localhost:3000/](http://localhost:3000/) 可以看到你的应用。

当你准备好部署到生产环境，执行 `npm run build` 创建一个被压缩的 bundle。

<p align='center'>
<img src='https://cdn.jsdelivr.net/gh/facebook/create-react-app@27b42ac7efa018f2541153ab30d63180f5fa39e0/screencast.svg' width='600' alt='npm start' />
</p>

### 直接开始

你**不**需要安装或配置像 Webpack 或 Babel 那样的工具。它们是被预先配置和隐藏起来，以便你可以专注于代码。

创建一个项目，然后你就可以开始了。

## 创建应用

**你需要在你的本地开发机器上有 Node>=8.10** (但是这在服务器上是不要求的)。你可以采用 [nvm](https://github.com/creationix/nvm#installation)（macOS/Linux）或 [nvm-windows](https://github.com/coreybutler/nvm-windows#node-version-manager-nvm-for-windows)，来实现在不同项目之间 Node 版本的切换。

如需创建新应用，你可以在下面方法中任选其一：

### npx

```sh
npx create-react-app my-app
```

_([npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) 来自 npm 5.2+ 以及更高版本， 参阅 [instructions for older npm versions](https://gist.github.com/gaearon/4064d3c23a77c74a3614c498a8bb1c5f))_

### npm

```sh
npm init react-app my-app
```

_`npm init <initializer>` 命令在 npm 6+ 版本可用_

### Yarn

```sh
yarn create react-app my-app
```

_`yarn create` 命令在 Yarn 0.25+ 版本可用_

### 选择模板

当然，你也可以在创建命令后添加 `--template [template-name]`，使用自定义模板创建新应用，

如果你不选择模板，我们将使用默认模板创建你的项目。

模板总是以 `cra-template-[template-name]` 格式命名，但你只需要给创建应用命令提供 `[template-name]` 。

```sh
npx create-react-app my-app --template [template-name]
```

> 通过在 npm 上搜索 ["cra-template-\*"](https://www.npmjs.com/search?q=cra-template-*) ，你可以找到一系列可用的模板。

#### 创建 TypeScript 应用

你可以用模板开始一个 TypeScript 应用。要使用我们提供的模板，只需把 `--template typescript` 附加到创建应用命令之后。

```sh
npx create-react-app my-app --template typescript
```

如果你已经有一个项目，想要添加 TypeScript, 请参阅我们的文档 [Adding TypeScript](adding-typescript.md) 。

### 选择包管理器

当你创建新应用，CLI 将使用 [Yarn](https://yarnpkg.com/) 安装依赖项（如果可以用）。如果你已经安装了 Yarn，但希望使用 npm，你可以把 `--use-npm` 附加到创建应用命令之后。例如：

```sh
npx create-react-app my-app --use-npm
```

## 输出

运行这些命令中的任意命令，都会在当前文件夹中创建一个名为 `my-app` 的目录。在该目录中，将会生成初始项目结构，并且安装传递依赖项：

```
my-app
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    └── serviceWorker.js
```

没有配置或复杂的文件夹结构，只有你构建应用所需要的文件。安装完成后，可以打开你的项目文件夹：

```sh
cd my-app
```

## 脚本

在新创建的项目里，你可以执行一些内置命令：

### `npm start` or `yarn start`

以开发模式运行应用。在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看它。

如果你对代码中做一些更改，页面将会自动重新加载。你可以在控制台中看到构建错误和 lint 警告。

<p align='center'>
<img src='https://cdn.jsdelivr.net/gh/marionebl/create-react-app@9f6282671c54f0874afd37a72f6689727b562498/screencast-error.svg' width='600' alt='Build errors' />
</p>

### `npm test` or `yarn test`

以交互模式运行测试观察器。默认情况下，对上次提交后更改的文件进行相关测试。

[了解关于测试的更多内容](https://facebook.github.io/create-react-app/docs/running-tests).

### `npm run build` or `yarn build`

为生产环境构建应用到 `build` 文件夹。在生产环境中正确的打包 React，并且为了获得最好的性能，对构建进行了优化。

构建中进行了压缩，并且文件名包含hash值。

你的应用已经准备好，可以部署了。

