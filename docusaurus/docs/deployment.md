---
id: deployment
title: 部署
sidebar_label: 部署
---

`npm run build` 在 `build` 目录下为你的应用创建了生产环境构建版本。设置你喜欢的 HTTP 服务器，以便访问者能够通过 `index.html` 访问你的站点，并向 `/static/js/main.<hash>.js` 这种静态路径进行请求，以获得 `/static/js/main.<hash>.js` 文件内容。有关更多信息，请查阅[生产环境构建](production-build.md)部分。

## 静态服务器

对于使用[Node](https://nodejs.org/)的环境，最简单的解决途径是安装 [serve](https://github.com/zeit/serve)，并让其处理剩下的内容：

```sh
npm install -g serve
serve -s build
```

上面显示的最后一个命令将在 **5000** 端口上为你的静态站点提供服务。与 [serve](https://github.com/zeit/serve) 的许多内部设置一样，可以使用 `-l` 或 `--listen` 选项来调整端口：

```sh
serve -s build -l 4000
```

运行此命令以获取可用选项的完整列表：

```sh
serve -h
```

## 其他解决方案

你不一定需要静态服务器来在生产环境下运行 Create React App 项目，将其集成至已有的服务端应用程序时也能很好的工作。

这是一个使用[Node](https://nodejs.org/)和[Express](https://expressjs.com/)的程序示例：

```javascript
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(9000);
```

服务器软件的选择并不重要。因为 Create React App 完全不依赖于平台，所以并不是一定要使用 Node。

`build` 文件夹下的静态 assets 是 Create React App 生成的唯一输出。

但是，这对于使用客户端路由来说还远远不够。阅读下一章节，以了解如何在你的单页面应用中支持像 `/todos/42` 之类的 URLs。

## 通过客户端路由提供服务

如果你使用基于 HTML5 [`pushState` history API](https://developer.mozilla.org/en-US/docs/Web/API/History_API#Adding_and_modifying_history_entries) 构建的路由（例如搭配 `browserHistory` 的 [React Router](https://github.com/ReactTraining/react-router)），许多静态服务器都将报错。如果你混用 React Router 与路径 `/todos/42`，开发服务器将会正确响应 `localhost:3000/todos/42`，但是将其部署在 Express 服务器上时则不会正确响应。

这是因为当我们为 `/todos/42` 生成新页面时，服务器找不到名为 `build/todos/42` 的文件。需要修改服务器配置以通过 `index.html` 响应针对 `/todos/42` 的请求。例如，我们可以修改上述 Express 实例，为所有未知路径提供 `index.html`：

```diff
 app.use(express.static(path.join(__dirname, 'build')));

-app.get('/', function (req, res) {
+app.get('/*', function (req, res) {
   res.sendFile(path.join(__dirname, 'build', 'index.html'));
 });
```

如果你使用的是 [Apache HTTP 服务器](https://httpd.apache.org/)，则需要在 `public` 文件夹中创建一个 `.htaccess` 文件，如下所示：

```
    Options -MultiViews
    RewriteEngine On
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteRule ^ index.html [QSA,L]
```

当你执行 `npm run build` 时，它会被复制到 `build` 文件夹。

如果你使用的是 [Apache Tomcat](https://tomcat.apache.org/)，则需要参照[这篇 Stack Overflow 答案](https://stackoverflow.com/a/41249464/4878474)。

现在，所有对 `todos/42` 的请求在开发和生产环境中都会得到正确的处理。

在生产环境构建版本中，当你选择[开启 PWA](making-a-progressive-web-app.md#why-opt-in) 时，[service worker](https://developers.google.com/web/fundamentals/primers/service-workers/) 将会自动处理所有导航请求，像 `/todos/42` 这种就会提供一个 `index.html` 的缓存拷贝。service worker 导航路由可以进行相关配置，或通过 [`eject`ing](available-scripts.md#npm-run-eject) 禁用，然后修改 `SWPrecachePlugin` [配置项](../config/webpack.config.prod.js)中的 [`navigateFallback`](https://github.com/GoogleChrome/sw-precache#navigatefallback-string) 和 [`navigateFallbackWhitelist`](https://github.com/GoogleChrome/sw-precache#navigatefallbackwhitelist-arrayregexp)。

当用户将你的应用安装至设备主屏幕时，默认配置将会提供一个 `/index.html` 快捷方式。对于希望通过 `/` 来提供应用的客户端路由来说可能会导致失效。在 [`public/manifest.json`](public/manifest.json) 上修改 web 应用清单，并修改 `start_url` 以匹配所需的 URL scheme，例如：

```js
  "start_url": ".",
```

## 相对路径构建

默认情况下，Create React App 会生成一个假定你的应用被托管在服务器根目录下的构建。

要覆盖此设置，请指定 `package.json` 中的 `homepage` 项，例如：

```js
  "homepage": "http://mywebsite.com/relativepath",
```

这将使 Create React App 正确判断要生成的 HTML 文件中该使用的根路径。

**注意**：如果你使用的是 `react-router@^4`，则可以在任何 `<Router>` 上使用 `basename` 属性生成 `<Link>`

更多信息请参阅[此处](https://reacttraining.com/react-router/web/api/BrowserRouter/basename-string)。

例如：

```js
<BrowserRouter basename="/calendar"/>
<Link to="/today"/> // renders <a href="/calendar/today">
```

### 对不同路径提供相同的构建

> 注意：该功能仅支持 `react-scripts@0.9.0` 及以上版本。

如果你没有调用 HTML5 `pushState` history API 或根本没有使用客户端路由，则无需指定解析应用的 URL。作为代替，你可以将其放在 `package.json` 中：

```js
  "homepage": ".",
```

这将确保所有 asset 路径都是相对于 `index.html` 的。你可以在不重新构建将应用程序从 `http://mywebsite.com` 移动到 `http://mywebsite.com/relativepath`，甚至是 `http://mywebsite.com/relative/path`。

## 为任意构建环境定制环境变量

你可以通过创建自定义 `.env` 文件来创建一个定制构建环境，并使用 [env-cmd](https://www.npmjs.com/package/env-cmd) 对其进行加载。

例如，要为 staging 环境创建构建环境：

1. 创建一个名为 `.env.staging` 的文件
2. 像设置其他 `.env` 文件一样设置环境变量（例如 `REACT_APP_API_URL=http://api-staging.example.com`）
3. 安装 [env-cmd](https://www.npmjs.com/package/env-cmd)
   ```sh
   $ npm install env-cmd --save
   $ # or
   $ yarn add env-cmd
   ```
4. 在你的 `package.json` 中添加一个新脚本，使用新环境进行构建：
   ```json
   {
     "scripts": {
       "build:staging": "env-cmd -f .env.staging npm run build"
     }
   }
   ```

现在你可以运行 `npm run build:staging` 以使用 staging 环境配置进行构建。
你可以用相同的方式指定其他环境。

`.env.production` 中的变量将用作后备选项，因为构建时 `NODE_ENV` 将始终被设定为 `production`。

## [AWS Amplify](http://console.amplify.aws)

AWS Amplify 控制台通过 serverless backends 为现代 Web 应用（单页应用和静态网站生成器）提供持续性部署与托管。Amplify Console 提供了全球可用的 CDNS，自定义域名设置，功能分支部署以及密码保护。

1. 从[这里](https://console.aws.amazon.com/amplify/home)登入 Amplify 控制台
2. 连接你的 Create React App 仓库并选择一个分支。如果你在寻找 Create React App + Amplify 的入门选择，请尝试[create-react-app-auth-amplify 入门程序](https://github.com/swaminator/create-react-app-auth-amplify)，它演示了如何在 10 分支内使用 Create React App 设置身份验证。
3. Amplify Console 自动检测构建设置，点击下一步。
4. 选择 _保存并部署_。

如果构建成功，该应用会被部署并托管至拥有 amplifyapp.com 域名的全局 CDN 上。现在，你可以将更改持续部署至你的前端或后端。持续部署允许开发人员在每次修改代码并提交至 Git 仓库时，将更新自动部署至前端与后端。

## [Azure](https://azure.microsoft.com/)

查阅[这篇博文](https://medium.com/@to_pe/deploying-create-react-app-on-microsoft-azure-c0f6686a4321)以了解如何将 React 应用部署至 Microsoft Azure。

查阅[这篇博文](https://medium.com/@strid/host-create-react-app-on-azure-986bc40d5bf2#.pycfnafbg)或[这个仓库](https://github.com/ulrikaugustsson/azure-appservice-static)，以了解自动部署至 Azure App Service 的方法。

## [Firebase](https://firebase.google.com/)

如果尚未安装 Firebase 命令行工具，请执行 `npm install -g firebase-tools`。注册一个 [Firebase 账户](https://console.firebase.google.com/)并创建一个新项目。运行 `firebase login` 并使用你先前创建的 Firebase 账户登入。

随后在项目的根目录下执行 `firebase init` 命令。你需要选择 **Hosting: Configure and deploy Firebase Hosting sites**，然后选择上一步创建的 Firebase 项目。你需要统一创建的 `database.rules.json`，选择 `build` 作为公共目录，并选择 `y` 以同意 **Configure as a single-page app**。

```sh
    === Project Setup

    First, let's associate this project directory with a Firebase project.
    You can create multiple project aliases by running firebase use --add,
    but for now we'll set up a default project.

    ? What Firebase project do you want to associate as default? Example app (example-app-fd690)

    === Database Setup

    Firebase Realtime Database Rules allow you to define how your data should be
    structured and when your data can be read from and written to.

    ? What file should be used for Database Rules? database.rules.json
    ✔  Database Rules for example-app-fd690 have been downloaded to database.rules.json.
    Future modifications to database.rules.json will update Database Rules when you run
    firebase deploy.

    === Hosting Setup

    Your public directory is the folder (relative to your project directory) that
    will contain Hosting assets to uploaded with firebase deploy. If you
    have a build process for your assets, use your build's output directory.

    ? What do you want to use as your public directory? build
    ? Configure as a single-page app (rewrite all urls to /index.html)? Yes
    ✔  Wrote build/index.html

    i  Writing configuration info to firebase.json...
    i  Writing project information to .firebaserc...

    ✔  Firebase initialization complete!
```

重要提示：你需要在 `firebase.json` 文件中为 `service-worker.js` 设置正确的 HTTP 缓存报头，否则你无法在第一次以后的部署中看到更改（[issue #2440](https://github.com/facebook/create-react-app/issues/2440)）。应该如下所示将其添加到 `host` 中：

```json
{
  "hosting": {
    ...
    "headers": [
      {"source": "/service-worker.js", "headers": [{"key": "Cache-Control", "value": "no-cache"}]}
    ]
    ...
```

现在，执行 `npm run build` 创建生产环境版本后，可以通过执行 `firebase deploy` 来部署它。

```sh
    === Deploying to 'example-app-fd690'...

    i  deploying database, hosting
    ✔  database: rules ready to deploy.
    i  hosting: preparing build directory for upload...
    Uploading: [==============================          ] 75%✔  hosting: build folder uploaded successfully
    ✔  hosting: 8 files uploaded successfully
    i  starting release process (may take several minutes)...

    ✔  Deploy complete!

    Project Console: https://console.firebase.google.com/project/example-app-fd690/overview
    Hosting URL: https://example-app-fd690.firebaseapp.com
```

请查阅 [Firebase 托管](https://firebase.google.com/docs/hosting)以了解更多相关信息。

## [GitHub Pages](https://pages.github.com/)

> 注意：该功能仅支持 `react-scripts@0.2.0` 及以上版本。

### 步骤 1：将 `homepage` 添加到 `package.json`

**以下步骤非常重要！**<br />

**如果你跳过它，你的应用可能无法被正常部署。**

打开你的 `package.json` 文件，并为你的项目添加 `homepage` 字段：

```json
  "homepage": "https://myusername.github.io/my-app",
```

或 Github user 页面：

```json
  "homepage": "https://myusername.github.io",
```

或自定义域名页面：

```json
  "homepage": "https://mywebsite.com",
```

Crete React App 使用 `homepage` 字段来确定被构建的 HTML 文件的根 URL。

### 步骤 2：安装 `gh-pages` 并将 `deploy` 与 `scripts` 添加至 `package.json` 中

现在，每当你执行 `npm run build`，你都会看到一个关于如何部署到 GitHub Pages 的备忘单。

要在 [https://myusername.github.io/my-app](https://myusername.github.io/my-app) 上发布，执行：

```sh
npm install --save gh-pages
```

或者你可以使用 `yarn` 代替：

```sh
yarn add gh-pages
```

将下列脚本添加到 `package.json` 中：

```diff
  "scripts": {
+   "predeploy": "npm run build",
+   "deploy": "gh-pages -d build",
    "start": "react-scripts start",
    "build": "react-scripts build",
```

`predeploy` 将在 `deploy` 命令执行前自动运行。

如果要部署到 Github user 页面，而不是项目页面，则需要添加一个额外修改：

1. 调整你的 `package.json` 脚本以将部署推送至 **master**：

```diff
  "scripts": {
    "predeploy": "npm run build",
-   "deploy": "gh-pages -d build",
+   "deploy": "gh-pages -b master -d build",
```

### 步骤 3：执行 `npm run deploy` 以部署站点

随后执行：

```sh
npm run deploy
```

### 步骤 4：对于项目页面，确保你的项目设置中使用 `gh-pages`

最后，确保将 GitHub 项目设置中的 **Github Pages** 选项设定为使用 `gh-pages` 分支：

<img src="https://i.imgur.com/HUjEr9l.png" width="500" alt="gh-pages branch setting" />

### 步骤 5：配置域名（可选）

你可以通过将 `CNAME` 文件添加至 `public/` 文件夹中为 GitHub Pages 配置自定义域名。

你的 CNAME 文件应该如下所示：

```
mywebsite.com
```

### 有关客户端路由的说明

Github Pages 不支持使用基于 HTML5 `pushState` history API 的路由（例如，使用 `browserHistory` 的 React Router）。这是因为当通过类似于 `http://user.github.io/todomvc/todos/42` 这样的 url 访问新页面时，`/todo/42` 是前端路由，Github Pages 服务器会返回 404，因为它完全不了解 `/todos/42` 的相关信息。如果要为托管在 GitHub Pages 上的项目添加路由的话，有以下两种解决方案：

你可以从调用 HTML5 history API 转至使用哈希路由。如果使用 React Router，可以切换至 `hashHistory` 来达到这种效果，但是 URL 会变得更长且更复杂（例如, `http://user.github.io/todomvc/#/todos/42?_k=yknaj`）。阅读此文以[了解更多](https://reacttraining.com/react-router/web/api/Router)关于 React Router 中不同历史记录实现的详细说明。
或者，你可以使用黑魔法来告诉 GitHub Pages 如何处理 404，方法是使用自定义的重定向参数以重定向至你的 `index.html` 页面。在部署项目之前，你需要将带有重定向代码的 `404.html` 文件添加到 `build` 文件夹中，且需要在 `index.html` 中添加处理重定向参数的代码。你可以在[这篇指南](https://github.com/rafrex/spa-github-pages)中找到有关此技巧的详细说明。

### 故障排除

#### "/dev/tty: No such a device or address"

如果在部署时看到 `/dev/tty: No such a device or address` 或与之类似的错误，请尝试以下操作：

1. 创建一个新的[个人访问 Token](https://github.com/settings/tokens)
2. `git remote set-url origin https://<user>:<token>@github.com/<user>/<repo>` .
3. 再次执行 `npm run deploy`

#### "Cannot read property 'email' of null"

如果在部署时看到 `Cannot read property 'email' of null`，请尝试以下操作：

1. `git config --global user.name '<your_name>'`
2. `git config --global user.email '<your_email>'`
3. 再次执行 `npm run deploy`

## [Heroku](https://www.heroku.com/)

使用[为 Create React App 定制的 Heroku 构建工具](https://github.com/mars/create-react-app-buildpack)

你可以在[零配置部署 React](https://blog.heroku.com/deploying-react-with-zero-configuration)中找到说明。

### 解决 Heroku 部署错误

有时 `npm run build` 运行在本地，但是在线上部署至 Heroku 时失败。以下是最常见的情况。

#### "Module not found: Error: Cannot resolve 'file' or 'directory'"

如果你得到这样的信息：

```
remote: Failed to create a production build. Reason:
remote: Module not found: Error: Cannot resolve 'file' or 'directory'
MyDirectory in /tmp/build_1234/src
```

这意味着你需要确保 `import` 的文件或目录本身的字母大小写和文件系统或 GitHub 上的字母大小写相匹配。

这很重要，因为 Linux（Heroku 所使用的操作系统）区分大小写。因此，`MyDirectory` 和 `mydirectory` 代表着两个不同的目录，同样的，即使项目在本地构建，大小写的差异也会导致 Heroku 远程服务器上的 `import` 语句被破坏。

#### "Could not find a required file."

如果你从包中排除或忽略了必要的文件，你将会看到类似这样的错误：

```
remote: Could not find a required file.
remote:   Name: `index.html`
remote:   Searched in: /tmp/build_a2875fc163b209225122d68916f1d4df/public
remote:
remote: npm ERR! Linux 3.13.0-105-generic
remote: npm ERR! argv "/tmp/build_a2875fc163b209225122d68916f1d4df/.heroku/node/bin/node" "/tmp/build_a2875fc163b209225122d68916f1d4df/.heroku/node/bin/npm" "run" "build"
```

在这种情况下，请确保文件大小写正确，且不会在本地 `.gitignore` 或 `~/.gitignore_global` 中被忽略。

## [Netlify](https://www.netlify.com/)

**要手动部署到Netlify的CDN：**

```sh
npm install netlify-cli -g
netlify deploy
```

选择“ build”作为部署路径。

**要配置持续部署：**

按照以下步骤执行，以使 Netlify 在你推送到 git 或开启 pull request 时自动构建并部署：

1. [开启一个新的 netlify 项目](https://app.netlify.com/signup)
2. 选择你的 Git 托管服务，然后选择你的仓库
3. 点击 `Build your site`

**客户端路由支持：**

为了支持  `pushState`，请确保使用以下重写规则创建 `public/_redirects` 文件：

```
/*  /index.html  200
```

在构建项目时，Create React App 将把 `public` 文件夹内容置入构建输出中。

## [ZEIT Now](https://zeit.co)

[ZEIT Now](https://zeit.co) 是一个针对网站和 serverless APIs 的云平台，可用于将你的 Create React App 项目部署个人域名（或免费的 `.now.sh` 后缀 URL）。

该指南将像你展示快速入门的相关步骤：

### 步骤 1：安装 Now 命令行工具

要使用 [npm](https://www.npmjs.com/package/now) 安装命令行工具，请执行以下命令：

```shell
npm i -g now
```

### 步骤 2：部署

你可以通过在项目目录的根路径下执行以下命令来部署应用程序：

```shell
now
```

**或者**，你也可以使用他们的 [GitHub](https://zeit.co/github) 或 [GitLab](https://zeit.co/gitlab) 集成。

这样就可以了！

现在将会部署你的站点，同时你将会收到类似以下内容的链接：https://react.now-examples.now.sh

开箱即用，同时你已经自动配置了客户端路由兼容与适当的默认缓存头部。这种行为可以被[这样覆盖](https://zeit.co/docs/v2/advanced/routes/)。

## [Render](https://render.com)

Render 提供免费[静态站点](https://render.com/docs/static-sites)托管，该托管具备 SSL，全局 CDM 以及来自 GitHub 的持续自动部署。

 遵循 [Create React App 开发指南](https://render.com/docs/deploy-create-react-app)，短时间内即可完成你的应用部署。

使用邀请码 `cra` 进行注册或使用[该链接](https://render.com/i/cra)。

## [S3](https://aws.amazon.com/s3) 和 [CloudFront](https://aws.amazon.com/cloudfront/)

有关如何将 React 应用部署至 Amazon Web Service S3 和 CloudFront 的相关信息，请查阅[这篇博文](https://medium.com/@omgwtfmarc/deploying-create-react-app-to-s3-or-cloudfront-48dae4ce0af)。如果你要添加自定义域名、HTTPS 和持续部署，请参阅[这篇博文](https://medium.com/dailyjs/a-guide-to-deploying-your-react-app-with-aws-s3-including-https-a-custom-domain-a-cdn-and-58245251f081)。

## [Surge](https://surge.sh/)

如果尚未安装 Surge 命令行工具，请执行 `npm install -g surge`。运行 `surge` 命令以登入或创建一个新账户。

当询问有关项目路径的信息时，请确保指定 `build` 文件夹，像这样：

```sh
       project path: /path/to/project/build
```

请注意，为了兼容基于 HTML5 `pushState` API 的路由，你可能需要在部署到 Surge 前将 build 文件夹中的 `index.html` 文件重命名为 `200.html`。这样[能确保每个 URL 都能回退到该文件](https://surge.sh/help/adding-a-200-page-for-client-side-routing)。

## 将组件发布至 npm

Create React App 不提供任何将组件发布至 npm 的内置功能。如果你准备从项目中提取组件，以便其他人可以使用它，我们建议将其移动到项目外部的单个文件夹中，然后使用 [nwb](https://github.com/insin/nwb#react-components-and-libraries) 这样的工具进行发布前准备。
