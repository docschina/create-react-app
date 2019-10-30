/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';

import Layout from '@theme/Layout';
import CodeBlock from '@theme/CodeBlock';

import classnames from 'classnames';

import styles from './styles.module.css';

const features = [
  {
    title: '学习成本低',
    content:
      "无需学习和配置任何构建工具。实时的热更新，让你更专注于代码开发。部署时，自动优化你的 bundle。",
  },
  {
    title: '唯一依赖',
    content:
      '你的应用程序只需要一个构建依赖。为了确保所有基层部分都能无缝协同工作，我们对 Create React App 进行深度测试 —— 以避免出现复杂版本不匹配的情况。',
  },
  {
    title: '未锁定配置',
    content:
      '工具底层，我们使用了 Webpack，Babel，ESLint 和其他优秀的项目为你的应用程序提供强劲的动力。如果你需要进行高级定制，则可以执行 Create React App 中的 "eject" 命令，根据需求自定义配置文件。',
  },
];

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <Layout
      permalink={'/'}
      description={'Set up a modern web app by running one command.'}
    >
      <div className={classnames('hero hero--dark', styles.heroBanner)}>
        <div className="container">
          <img
            className={classnames(styles.heroBannerLogo, 'margin-vert--md')}
            src={useBaseUrl('img/logo.svg')}
          />
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.getStarted}>
            <Link
              className="button button--outline button--primary button--lg"
              to={useBaseUrl('docs/getting-started')}
            >
              快速入门
            </Link>
          </div>
        </div>
      </div>
      {features && features.length && (
        <div className={styles.features}>
          <div className="container">
            <div className="row">
              {features.map(({ title, content }, idx) => (
                <div
                  key={idx}
                  className={classnames('col col--4', styles.feature)}
                >
                  <h2>{title}</h2>
                  <p>{content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      <div className={styles.lightBackground}>
        <div className="container padding-vert--xl text--left">
          <div className="row">
            <div className="col col--4 col--offset-1">
              <h2>轻松上手</h2>
              <p>
                无论你是使用 React 还是其他库，都可以使用 Create React App，这能使你<strong>更专注于编码，而非构建工具</strong>。
                <br />
                <br />
                如需创建名为 <i>my-app</i> 的项目，运行如下命令：
              </p>
              <CodeBlock className="language-sh">
                npx create-react-app my-app
              </CodeBlock>
              <br />
            </div>
            <div className="col col--5 col--offset-1">
              <img
                className={styles.featureImage}
                alt={'Easy to get started in seconds'}
                src={
                  'https://camo.githubusercontent.com/29765c4a32f03bd01d44edef1cd674225e3c906b/68747470733a2f2f63646e2e7261776769742e636f6d2f66616365626f6f6b2f6372656174652d72656163742d6170702f323762343261632f73637265656e636173742e737667'
                }
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="container padding-vert--xl text--left">
          <div className="row">
            <div className="col col--4 col--offset-1">
              <img
                className={styles.featureImage}
                alt={'Easy to update'}
                src={useBaseUrl('img/update.png')}
              />
            </div>
            <div className="col col--5 col--offset-1">
              <h2>易于维护</h2>
              <p>
                更新构建工具通常在开发中是一项艰巨且耗时的任务，而 Create React App 则不然。
                新版本发布后，使用如下命令升级即可：
              </p>
              <CodeBlock className="language-sh">
                npm install react-scripts@latest
              </CodeBlock>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
