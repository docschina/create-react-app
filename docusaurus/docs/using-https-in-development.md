---
id: using-https-in-development
title: 在开发环境使用 HTTPS
sidebar_label: 在开发环境使用 HTTPS
---

> 注意：此功能只在 `react-scripts@0.4.0` 及更高版本中可用

有时，你可能需要在开发环境中使用 HTTPS。有一种特殊情况，当该 API 服务器本身支持 HTTPS 时，使用 [proxy](proxying-api-requests-in-development.md) 功能可以将请求代理到此 API 服务器。

为此，将 `HTTPS` 环境变量设置为 `true` ，然后像往常一样使用 `npm start` 启动开发服务器：

### Windows (cmd.exe)

```cmd
set HTTPS=true&&npm start
```

(注意: 中间没有空格。)

### Windows (Powershell)

```Powershell
($env:HTTPS = "true") -and (npm start)
```

### Linux, macOS (Bash)

```sh
HTTPS=true npm start
```

注意，服务器使用自签名证书时，浏览器在访问页面中可能会显示警告。

为了避免每次都必须设置环境变量，你可以像这样在 `npm start` 脚本中包含环境变量：

```json
{
  "start": "HTTPS=true react-scripts start"
}
```

或者你可以使用 `HTTPS=true` 创建 `.env` 文件。
[了解有关 CRA 中环境变量的更多信息。](https://create-react-app.dev/docs/adding-custom-environment-variables)
