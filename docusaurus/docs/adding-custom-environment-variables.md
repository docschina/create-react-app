---
id: adding-custom-environment-variables
title: 添加自定义环境变量
sidebar_label: 环境变量
---

> 注意：该功能仅支持 `react-scripts@0.2.3` 及以上版本。

你的项目可以使用在开发环境中声明的变量，就好像它们直接声明在你的 JS 文件中一样。默认情况下，你会获得预定义 `NODE_ENV` 以及其他以 `REACT_APP_` 开头的环境变量。

> 警告：请勿在你的 React 应用中存储私密信息（例如私有 API 密钥）！
>
> 环境变量会在构建过程中嵌入，这意味着所有人都可以通过直接检查应用文件来查阅它们。

**环境变量是在构建阶段嵌入的**。由于 Create React App 会生成静态的 HTML/CSS/JS 包，因此你无法在运行时读取它们。要在运行时读取它们，你需要将 HTML 加载到服务器内存中，并在运行时中替换占位符，就像[这篇文章](title-and-meta-tags.md#injecting-data-from-the-server-into-the-page)说的那样。另外，你可以在更改它们时随时在服务器上重新进行构建。

> 注意：你必须创建以 `REACT_APP_` 开头的自定义环境变量。为了防止意外[在机器上暴露可能具有相同名称的私钥](https://github.com/facebook/create-react-app/issues/865#issuecomment-252199527)，`NODE_ENV` 意外的任何其他变量都会被忽略。更改任何环境变量都需要你重启开发服务器（如果正在运行的话）。

这些环境变量将会为你定义在 `process.env` 上。例如，一个名为 `REACT_APP_NOTE_SECRET_CODE` 的环境变量将会在你的 JS 中显示为 `process.env.REACT_APP_NOT_SECRET_CODE`。

还有一个内置环境变量叫做 `NODE_ENV`，你可以从 `process.env.NODE_ENV` 中对其进行读取。当你执行 `npm start` 时，它总是等于 `'development'`，当你执行 `npm test` 时，它总是等于 `'test'`；当你执行 `npm run build` 以生成生产环境构建包时，它始终等于 `'production'`。**你不能手动覆盖 `NODE_ENV`**，这样可以防止开发人员将运行缓慢的开发版本意外部署至生产环境。

这些环境变量在根据项目的部署位置有条件地显示信息，或消费版本控制外的敏感数据来说很有用。

首先，你需要定义环境变量。例如，假设你要在 `<form>` 中使用一个环境变量：

```jsx
render() {
  return (
    <div>
      <small>You are running this application in <b>{process.env.NODE_ENV}</b> mode.</small>
      <form>
        <input type="hidden" defaultValue={process.env.REACT_APP_NOT_SECRET_CODE} />
      </form>
    </div>
  );
}
```

在构建过程中，`process.env.REACT_APP_NOT_SECRET_CODE` 将被替换为 `REACT_APP_NOT_SECRET_CODE` 环境变量的值。请记住，`NODE_ENV` 变量将会被自动设定。

在浏览器中加载应用程序并检查 `<input>` 时，你会看到它的值被设定为 `abcdef`，在执行 `npm start` 时，粗体文本将会显示当前环境。

<!-- prettier-ignore-start -->

```html
<div>
  <small>You are running this application in <b>development</b> mode.</small>
  <form>
    <input type="hidden" value="abcdef" />
  </form>
</div>
```

<!-- prettier-ignore-end -->

上面的表格正在当前环境中寻找叫做 `REACT_APP_NOT_SECRET_CODE` 的环境变量。为了使用这个值，我们需要在环境中对其进行定义。这可以通过两种方式完成：在 shell 中或在 `.env` 文件中。之后的章节中将会介绍这两种方式。

可以访问 `NODE_ENV` 对于有条件的执行操作来说也很有用：

```js
if (process.env.NODE_ENV !== 'production') {
  analytics.disable();
}
```

当你执行 `npm run build` 编译程序时，压缩步骤将会跳过此判断条件，且最终的打包文件将会比以往更小。

## 在 HTML 中引用环境变量

> 注意：该功能仅支持 `react-scripts@0.9.0` 及以上版本。

你还可以在 `public/index.html` 中访问以 `REACT_APP_` 开头的环境变量，例如：

```html
<title>%REACT_APP_WEBSITE_NAME%</title>
```

请注意，以上部分的警告适用于：

- 除了一些内置变量（`NODE_ENV` 与 `PUBLIC_URL`）以外，变量名称必须以 `REACT_APP_` 开头才能起作用。
- 在构建时注入环境变量。如果需要在运行时注入它们，[请遵循此方法](title-and-meta-tags.md#generating-dynamic-meta-tags-on-the-server)。

## 在你的 Shell 中添加临时环境变量

定义环境变量可能会因操作系统而异。同样重要的是，理解这种方式仅在 shell 临时会话的生命周期中起作用。

### Windows (cmd.exe)

```cmd
set "REACT_APP_NOT_SECRET_CODE=abcdef" && npm start
```

（注意：必须在变量赋值周围加上引号，以避免出现空格）

### Windows (Powershell)

```Powershell
($env:REACT_APP_NOT_SECRET_CODE = "abcdef") -and (npm start)
```

### Linux, macOS (Bash)

```sh
REACT_APP_NOT_SECRET_CODE=abcdef npm start
```

## 在 `.env` 中添加开发环境变量

> 注意：该功能仅支持 `react-scripts@0.5.0` 及以上版本。

要定义永久性环境变量，请在项目的根目录下创建一个名为 `.env` 的文件：

```
REACT_APP_NOT_SECRET_CODE=abcdef
```

> 注意：你必须创建以 `REACT_APP_` 开头的自定义环境变量，除 `NODE_ENV` 外的任意其他变量都将被忽略，以避免[在机器上暴露可能具有相同名称的私钥](https://github.com/facebook/create-react-app/issues/865#issuecomment-252199527)。更改任何环境变量都需要你重新启动开发服务器（如果正在运行）。

> 注意：你需要在修改 `.env` 文件后重新启动开发服务器。

`.env` 文件**应该**被纳入源代码管理中（不包含 `.env*.local`）。

## 还可以使用哪些 `.env` 文件？

> 注意：该功能**仅支持 `react-scripts@1.0.0` 及以上版本。**

- `.env`：默认。
- `.env.local`：本地覆盖。**此文件适用于除测试环境以外的所有环境。**
- `.env.development`、`.env.test`、`.env.production`：针对特定环境的设置。
- `.env.development.local`、`.env.test.local`、`.env.production.local`：针对特定环境的本地覆盖。

左边的文件比右边的文件优先级更高：

- `npm start`: `.env.development.local`, `.env.development`, `.env.local`, `.env`
- `npm run build`: `.env.production.local`, `.env.production`, `.env.local`, `.env`
- `npm test`: `.env.test.local`, `.env.test`, `.env` (note `.env.local` is missing)

如果计算机未明确对其进行设定，它们将会被设定为默认值。

请参阅 [dotenv 文档](https://github.com/motdotla/dotenv)以了解更多信息。

> 注意：如果要为开发环境定义环境变量，你很可能需要 CI 和/或托管平台。
> 这些环境变量也会被定义。请参阅他们的文档了解如何执行此操作。例如 [Travis CI](https://docs.travis-ci.com/user/environment-variables/) 或 [Heroku](https://devcenter.heroku.com/articles/config-vars) 的文档。

### 在 `.env` 中扩展环境变量

> 注意：该功能**仅支持 `react-scripts@1.1.0` 及以上版本。**

扩展机器上已存在的变量，以便在你的 `.env` 文件中使用（使用[dotenv-expand](https://github.com/motdotla/dotenv-expand)）。

例如，要获取环境变量 `npm_package_version`：

```
REACT_APP_VERSION=$npm_package_version
# also works:
# REACT_APP_VERSION=${npm_package_version}
```

或在本地扩展当前 `.env` 文件中的变量：

```
DOMAIN=www.example.com
REACT_APP_FOO=$DOMAIN/foo
REACT_APP_BAR=$DOMAIN/bar
```
