---
id: using-https-in-development
title: Using HTTPS in Development
sidebar_label: HTTPS in Development
---

> 注意: 在react-scripts@0.4.0及更高版本中可以使用此功能

你可能需要使开发服务器支持https。有一种特殊情况是，当该API服务器本身支持HTTPS时，使用 [proxy](proxying-api-requests-in-development.md) 功能可以将请求代理到该API服务器。

为此，将 `HTTPS` 环境变量设置为 `true` ，然后像往常一样使用 `npm start` 启动开发服务器：

### Windows (cmd.exe)

```cmd
set HTTPS=true&&npm start
```

(注意: 中间是没有空格的。)

### Windows (Powershell)

```Powershell
($env:HTTPS = "true") -and (npm start)
```

### Linux, macOS (Bash)

```sh
HTTPS=true npm start
```

注意，服务器将使用自签名证书，因此web浏览器在访问页面时可能会显示警告。

为了避免每次都必须设置环境变量，你可以像这样在 `npm start` 脚本中包含环境变量：

```json
{
  "start": "HTTPS=true react-scripts start"
}
```

或者你可以使用 `HTTPS=true` 设置创建 `.env` 文件。
[了解有关CRA中环境变量的更多信息。](https://create-react-app.dev/docs/adding-custom-environment-variables).
