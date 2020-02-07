---
id: running-tests
title: 运行测试
---

> 注意：此功能可用于 `react-scripts@0.3.0` 以及更高版本。

> [阅读迁移指南，了解如何在旧项目中启用它！](https://github.com/facebook/create-react-app/blob/master/CHANGELOG-0.x.md#migrating-from-023-to-030)

Create React App 用 [Jest](https://jestjs.io/) 做为它的 test runner。为了集成它，我们对 Jest 做出了[重大改进](https://jestjs.io/blog/2016/09/01/jest-15.html)，因此，如果几年前你听说过关于 Jest 不好的信息，现在可以再尝试一下。

Jest 是基于 Node 的 runner。这意味着测试总是运行在 Node 环境，而不是运行在真正的浏览器中。这让我们能够快速迭代并防止出现问题。

虽然 Jest 通过 [jsdom](https://github.com/tmpvar/jsdom) 提供了像 `window` 这样的全局变量，但它们只是接近真正浏览器的行为。Jest 旨在用于逻辑和组件的单元测试，而不是 DOM 行为。

如果你需要它们，我们推荐你使用单独的工具进行浏览器端到端测试。它们不属于 Create React App 所应该涉及的领域。

## 文件命名规范

Jest 将查找符合以下通用命名规则的测试文件：

- `__tests__` 文件夹中后缀为 `.js` 的文件。
- 后缀为 `.test.js` 的文件。
- 后缀为 `.spec.js` 的文件。

`.test.js` / `.spec.js` 文件（或 `__tests__` 文件夹）可以位于 `src` 顶级文件夹下的任意层级。

我们建议把测试文件（或 `__tests__` 文件夹）放在需要测试的代码附近，以使相对导入显得更短。例如，如果 `App.test.js` 和 `App.js` 在同一文件夹下，测试文件仅仅需要 `import App from './App'`，而不需要较长的相对路径。这样的搭配也有助于在更大的项目中更快地找到测试文件。

## 命令行界面

执行 `npm test` 时，Jest 将会在监听模式<sup>\*</sup>下启动。每次保存文件，Jest 将会重新运行测试，就像 `npm start` 重新编译代码那样。

监听器包括一个交互式命令行界面，这个界面可以运行所有测试，或者专注于搜索模式。它设计这种方式，使你可以将它保持打开状态，并享受快速重运行。你可以从监听器每次运行后打印的“监听器使用”说明中了解命令行。

![Jest 监听模式](https://jestjs.io/img/blog/15-watch.gif)

> \*尽管我们建议在开发时采用监听模式运行测试，但你可以通过传递 `--watchAll=false` 标志来禁用此模式。在大多数 CI 环境中，你需要这样处理（请参阅[在 CI 服务器上](#on-ci-servers)）。

## 版本控制集成

默认情况下，你执行 `npm test`，Jest 将会仅运行与上次提交更改的文件相关的测试。这个优化旨在使你的测试快速运行，而不用关注你总共有多少测试。然而，这是假定你不常常提交没有通过测试的代码。 

Jest 将总是提示它仅运行与上次提交更改的文件相关的测试。你可以在监听模式下按下 `a` 键，来强制 Jest 运行所有测试。

在[持续集成](#持续集成)服务器上，或者项目不在 Git 或 Mercurial 仓库中，Jest 将总是运行所有测试。

## 编写测试

要创建测试，请添加带有测试名称和测试代码的 `it()`（或 `test()`）块。你也可以将它们包装在 `describe()` 块中来进行逻辑分组，但这既不要求，也不推荐。

Jest 提供了一个内置的 `expect()` 全局函数，用来生成断言。一个基本的测试看起来就像这样： 

```js
import sum from './sum';

it('sums numbers', () => {
  expect(sum(1, 2)).toEqual(3);
  expect(sum(2, 2)).toEqual(4);
});
```

所有的 Jest 支持的 `expect()` 匹配器[记录在这里](https://jestjs.io/docs/en/expect.html#content)。

你也可以用 [`jest.fn()` 和 `expect(fn).toBeCalled()`](https://jestjs.io/docs/en/expect.html#tohavebeencalled) 来创建“spies”或模拟函数。

## 测试组件

组件测试技术范围很广。它们的范围从“冒烟测试”验证组件在没有抛出的情况下渲染，到浅层渲染，测试一些输出，到完整渲染，测试组件生命周期和状态变化。

不同项目根据组件变化的频率以及它们包含的逻辑量，来选择不同测试的权衡。如果你还没有决定测试策略，我们建议你从为组件创建基本的烟雾测试开始：

```js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
```

这个测试装载一个组件，确保它在渲染期间不抛出。像这样的测试只用很少的努力就提供了很多值，所以它们作为起点是很好的，这是你将会在 `src/App.test.js` 中找到的测试。

当你遇到改变组件引起的 bug，你将更深入了解其中哪部分值得在应用中测试。这是一个好时机，引入更具体的测试来断言特定的预期输出或行为。

### 选项 1：浅层渲染

如果你想独立于它们渲染的子组件来测试组件，我们推荐使用来自 [Enzyme](https://airbnb.io/enzyme/) 的 [`shallow()` 渲染 API](https://airbnb.io/enzyme/docs/api/shallow.html)。要安装 Enzyme，请执行：

```sh
npm install --save enzyme enzyme-adapter-react-16 react-test-renderer
```

或者你可以使用 `yarn`：

```sh
yarn add enzyme enzyme-adapter-react-16 react-test-renderer
```

从 Enzyme 3 开始，你需要安装 Enzyme 以及和与正在使用的 React 版本相对应的 Adapter。（以上示例将 adapter 用于 React 16。） 

还需要在[全局设置文件](#初始化测试环境)中配置适配器：

### `src/setupTests.js`

```js
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
```

> 注意：请记住，你如果决定在创建 `src/setupTests.js` 执行“eject”，则生成的 `package.json` 文件不会包含对它的任何引用。[请阅读这里](#初始化测试环境)了解在 eject 之后怎样添加。

现在你可以用它编写烟雾测试：

```js
import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  shallow(<App />);
});
```

与以前使用 `ReactDOM.render()` 的烟雾测试不同，此测试仅渲染 `<App>`，并且不会深入。例如，即使 `<App>` 本身渲染抛出的 `<Button>`，此测试也将通过。浅层渲染非常适合独立的单元测试，但你仍可能希望创建一些完整的渲染测试，以确保组件正确地集成。Enzyme 支持[用 `mount()` 进行完全渲染](https://airbnb.io/enzyme/docs/api/mount.html)，你也可以将其用于测试状态变更和组件生命周期。

你可以阅读 [Enzyme 文档](https://airbnb.io/enzyme/)了解更多测试技术。Enzyme 文档使用 Chai 和 Sinon 进行断言，但是你不必使用它们，因为 Jest 为 spies 提供了内置的 `expect()` 和 `jest.fn()`。

这是来自 Enzyme 文档的例子，它断言特定的输出，并且重写来使用 Jest 匹配器：

```js
import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('renders welcome message', () => {
  const wrapper = shallow(<App />);
  const welcome = <h2>Welcome to React</h2>;
  // expect(wrapper.contains(welcome)).toBe(true);
  expect(wrapper.contains(welcome)).toEqual(true);
});
```

所有的 Jest 匹配器[被详细记述在此文档中](https://jestjs.io/docs/en/expect.html)。

然而，如果你愿意，你可以使用第三方断言库，如 [Chai](https://chaijs.com/)， 如下所述。

此外，你可能发现 [jest-enzyme](https://github.com/blainekasten/enzyme-matchers) 用可读的匹配器有助于改善测试。上面 `contains` 代码用 jest-enzyme 可以写的更简洁。

```js
expect(wrapper).toContainReact(welcome);
```

要使用它，安装 `jest-enzyme`：

```sh
npm install --save jest-enzyme
```

或者你可以使用 `yarn`：

```sh
yarn add jest-enzyme
```

在 [`src/setupTests.js`](#initializing-test-environment) 中导入它，以确保它的匹配器在每个测试中都可用：

```js
import 'jest-enzyme';
```

### 选项 2：React 测试库

作为 `enzyme` 的替代品或竞品，你可以考虑采用 `react-testing-library`。[`react-testing-library`](https://github.com/testing-library/react-testing-library) 是用于测试 React 组件的库，其方式类似于最终用户使用组件的方式。它非常适合对 React 组件和应用进行单元测试、集成测试和端到端测试。它与 DOM 节点一起工作更加直接，因此建议与 [`jest-dom`](https://github.com/testing-library/jest-dom) 一起使用，以改进断言。 

要安装 `react-testing-library` 和 `jest-dom`，你可以执行：

```sh
npm install --save @testing-library/react @testing-library/jest-dom
```

或者你可以使用 `yarn`：

```sh
yarn add @testing-library/react @testing-library/jest-dom
```

与 `enzyme` 类似，你可以创建 `src/setupTests.js` 文件，以避免在测试文件中的样板：

```js
// react-testing-library renders your components to document.body,
// this adds jest-dom's custom assertions
import '@testing-library/jest-dom/extend-expect';
```

这是一个使用 `react-testing-library` 和 `jest-dom` 的例子，它用于测试 `<App />` 组件是否正确渲染了 “Welcome to React”。

```js
import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

it('renders welcome message', () => {
  const { getByText } = render(<App />);
  expect(getByText('Learn React')).toBeInTheDocument();
});
```

了解更多关于 `react-testing-library` 提供的实用程序的信息，以方便测试异步交互，以及从 [`react-testing-library` 文档](https://testing-library.com/react)和[示例](https://codesandbox.io/s/github/kentcdodds/react-testing-library-examples)中选择表单元素。

## 使用第三方断言库

我们建议对断言使用 `expect()`，对 spies 使用 `jest.fn()`。如果你对它们有问题，请[对 Jest 提出那些问题](https://github.com/facebook/jest/issues/new)，我们会修复它们。我们打算继续使它们更好地用于 React，例如，支持[将 React 元素美观地打印为 JSX](https://github.com/facebook/jest/pull/1566)。

然而，如果你习惯了其他库，或者比如 [Chai](https://chaijs.com/) 和 [Sinon](https://sinonjs.org/)，或者你现有代码已经使用了它们，希望将这些代码移植过来，你可以像这样导入它们：

```js
import sinon from 'sinon';
import { expect } from 'chai';
```

然后在测试中，像平常一样使用它们。

## 初始化测试环境

> 注意：`react-scripts@0.4.0` 以及更高版本可以使用此功能。

如果你的应用使用了需要在测试中模拟的浏览器 API，或者如果你在运行测试前需要全局设置，请把 `src/setupTests.js` 添加到你的项目中。它将在测试前被自动执行。

例如：

### `src/setupTests.js`

```js
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};
global.localStorage = localStorageMock;
```

> 注意：请记住，你如果决定在创建 `src/setupTests.js` 前执行“eject”，则生成的 `package.json` 文件不会包含对它的任何引用，因此应该在 Jest 的配置中手动创建属性 `setupTestFrameworkScriptFile`，如下所示： 

> ```js
> "jest": {
>   // ...
>   "setupTestFrameworkScriptFile": "<rootDir>/src/setupTests.js"
>  }
> ```

## 专注和排除测试

你能用 `xit()` 代替 `it()` 来暂时排除测试的执行。

相似地，`fit()` 让你专注于特定的测试，而不执行任何其他测试。

## 覆盖率报告

Jest 集成了覆盖率报告程序，该报告程序可以与 ES6 配合使用，并且无需配置。

运行 `npm test -- --coverage` （注意中间有额外的 `--`）以包括如下的覆盖率报告： 

![覆盖率报告](https://i.imgur.com/5bFhnTS.png)

请注意，用了 coverage 的测试运行的慢很多，因此建议将其与正常工作流程分开运行。

### 配置

可以通过向 package.json 文件的 Jest 配置中添加下面支持的字段，来覆盖默认的 Jest 配置。

支持的字段：

- [`clearMocks`](https://jestjs.io/docs/en/configuration.html#clearmocks-boolean)
- [`collectCoverageFrom`](https://jestjs.io/docs/en/configuration.html#collectcoveragefrom-array)
- [`coverageReporters`](https://jestjs.io/docs/en/configuration.html#coveragereporters-array-string)
- [`coverageThreshold`](https://jestjs.io/docs/en/configuration.html#coveragethreshold-object)
- [`displayName`](https://jestjs.io/docs/en/configuration.html#displayname-string-object)
- [`extraGlobals`](https://jestjs.io/docs/en/configuration.html#extraglobals-array-string)
- [`globalSetup`](https://jestjs.io/docs/en/configuration.html#globalsetup-string)
- [`globalTeardown`](https://jestjs.io/docs/en/configuration.html#globalteardown-string)
- [`moduleNameMapper`](https://jestjs.io/docs/en/configuration.html#modulenamemapper-object-string-string)
- [`resetMocks`](https://jestjs.io/docs/en/configuration.html#resetmocks-boolean)
- [`resetModules`](https://jestjs.io/docs/en/configuration.html#resetmodules-boolean)
- [`snapshotSerializers`](https://jestjs.io/docs/en/configuration.html#snapshotserializers-array-string)
- [`transform`](https://jestjs.io/docs/en/configuration.html#transform-object-string-pathtotransformer-pathtotransformer-object)
- [`transformIgnorePatterns`](https://jestjs.io/docs/en/configuration.html#transformignorepatterns-array-string)
- [`watchPathIgnorePatterns`](https://jestjs.io/docs/en/configuration.html#watchpathignorepatterns-array-string)

示例的 package.json 文件：

```json
{
  "name": "your-package",
  "jest": {
    "collectCoverageFrom": [
      "src/**/*.{js,jsx,ts,tsx}",
      "!<rootDir>/node_modules/",
      "!<rootDir>/path/to/dir/"
    ],
    "coverageThreshold": {
      "global": {
        "branches": 90,
        "functions": 90,
        "lines": 90,
        "statements": 90
      }
    },
    "coverageReporters": ["text"],
    "snapshotSerializers": ["my-serializer-module"]
  }
}
```

## 持续集成

默认情况下，`npm test` 使用交互式 CLI 来运行监听器。然而，你可通过设置环境变量 `CI`，强制运行一次测试后结束测试过程。

当使用 `npm run build` 创建应用的构建时，默认不检查 linter 警告。 像 `npm test` 一样，你可以通过设置环境变量 `CI`，强制构建运行 linter 警告检查。如果遇到任何警告，构建则失败。

主流的 CI 服务器默认已经设置了环境变量 `CI`，但你也可以自己设置：

## <span id = "on-ci-servers">在 CI 服务器上</span>

### Travis CI

1. 按照 [Travis 入门](https://docs.travis-ci.com/user/getting-started/)指南，用 Travis 同步你的 Github 仓库。你可能需要在你的 [profile](https://travis-ci.org/profile) 页面手动初始化一些设置。
1. 将 `.travis.yml` 文件添加到你的 git 仓库。

```yaml
language: node_js
node_js:
  - 8
cache:
  directories:
    - node_modules
script:
  - npm run build
  - npm test
```

1. 用 git push 触发你的第一个构建。
1. 如果需要，[自定义你的 Travis CI 构建](https://docs.travis-ci.com/user/customizing-the-build/)。

### CircleCI

按照[这篇文章](https://medium.com/@knowbody/circleci-and-zeits-now-sh-c9b7eebcd3c1)使用 Create React App 项目设置 CircleCI。

## 在你自己的环境里

#### Windows (cmd.exe)

```cmd
set CI=true&&npm test
```

```cmd
set CI=true&&npm run build
```

（请注意：这里是有意缺少空格的。）

#### Windows (Powershell)

```Powershell
($env:CI = "true") -and (npm test)
```

```Powershell
($env:CI = "true") -and (npm run build)
```

#### Linux, macOS (Bash)

```sh
CI=true npm test
```

```sh
CI=true npm run build
```

测试命令行将会强制 Jest 运行在 CI 模式下，并且测试仅运行一次，而不启动监听器。

对于非 CI 环境，你可以传 `--watchAll=false` 标志来禁用测试监听模式。

构建命令将检查 linter 警告，如果发现任何警告，构建则失败。

## 禁用 jsdom

如果你的任何测试都不依赖 [jsdom](https://github.com/tmpvar/jsdom)，你可以安全地设置 `--env=node`，并且你的测试将会执行的更快：

```diff
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
-   "test": "react-scripts test"
+   "test": "react-scripts test --env=node"
```

为了帮你做出决定，这里有列出**需要 jsdom** 的 API：

- 任何浏览器全局变量，如 `window` 和 `document`
- [`ReactDOM.render()`](https://facebook.github.io/react/docs/top-level-api.html#reactdom.render)
- [`TestUtils.renderIntoDocument()`](https://facebook.github.io/react/docs/test-utils.html#renderintodocument) ([a shortcut](https://github.com/facebook/react/blob/34761cf9a252964abfaab6faf74d473ad95d1f21/src/test/ReactTestUtils.js#L83-L91) for the above)
- [Enzyme](https://airbnb.io/enzyme/index.html) 中的 [`mount()`](https://airbnb.io/enzyme/docs/api/mount.html)

相反地，以下 API **不需要 jsdom**：

- [`TestUtils.createRenderer()`](https://facebook.github.io/react/docs/test-utils.html#shallow-rendering)（浅层渲染）
- [Enzyme](https://airbnb.io/enzyme/index.html) 中的 [`shallow()`](https://airbnb.io/enzyme/docs/api/shallow.html)

最后，[快照测试](https://jestjs.io/blog/2016/07/27/jest-14.html)也不需要 jsdom。

## 快照测试

快照测试是 Jest 的一个功能，它自动生成组件的文本快照，并且将它们保存到磁盘上，这样的话，如果 UI 输出发生变化，没有在组件输出上手动写入任何断言，也能获得提示。[阅读关于快照测试的更多信息。](https://jestjs.io/blog/2016/07/27/jest-14.html)

## 编辑器集成

如果你使用 [Visual Studio Code](https://code.visualstudio.com)，有一个 [Jest 扩展程序](https://github.com/orta/vscode-jest)，可以直接与 Create React App 一起使用。这在使用文本编辑器的时候提供了许多类似于 IDE 的功能：用内联的潜在失败信息来显示测试运行的状态，自动启动和停止监听器，并且提供一键式快照更新。 

![VS Code Jest Preview](https://cloud.githubusercontent.com/assets/49038/20795349/a032308a-b7c8-11e6-9b34-7eeac781003f.png)
