---
id: adding-a-router
title: 添加路由
---

Create React App 没有规定特定的路由解决方案，但是 [React Router](https://reacttraining.com/react-router/web/) 是最受欢迎的解决方案。

要添加它，先运行：

```sh
npm install --save react-router-dom
```

或者你可以使用 `yarn` 代替：

```sh
yarn add react-router-dom
```

如果要试用该解决方案，请删除 `src/App.js` 上的所有代码，并用其网站上的任意示例进行替换。[基础范例](https://reacttraining.com/react-router/web/example/basic)是入门的最佳选择。

请注意，在部署应用程序之前，[你可能需要配置生产服务器，使之支持客户端路由](deployment.md#serving-apps-with-client-side-routing)。
