(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{158:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return l})),r.d(n,"rightToc",(function(){return o})),r.d(n,"default",(function(){return i}));r(58),r(31),r(22),r(23),r(59),r(0);var t=r(228);function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}var l={id:"adding-relay",title:"\u6dfb\u52a0 Relay \u652f\u6301"},o=[],p={rightToc:o},c="wrapper";function i(e){var n=e.components,r=function(e,n){if(null==e)return{};var r,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,["components"]);return Object(t.b)(c,a({},p,r,{components:n,mdxType:"MDXLayout"}),Object(t.b)("p",null,"Relay \u662f\u4e00\u4e2a\u6846\u67b6\uff0c\u7528\u4e8e\u6784\u5efa\u7531 GraphQL \u652f\u6301\u7684\u6570\u636e\u9a71\u52a8 React \u5e94\u7528\u3002\u5f53\u524d\u7248\u672c\u7684 Relay \u53ef\u4ee5\u501f\u52a9 Babel \u5b8f\u5728 Creat React App \u9879\u76ee\u4e2d\u5b9e\u73b0\u5f00\u7bb1\u5373\u7528\u3002\u6309\u7167 ",Object(t.b)("a",a({parentName:"p"},{href:"https://facebook.github.io/relay/"}),"Relay \u6587\u6863")," \u8bbe\u7f6e\u9879\u76ee\uff0c\u7136\u540e\u786e\u4fdd\u4f60\u7684 babel \u63d2\u4ef6\u7248\u672c\u63d0\u4f9b\u4e86\u5b8f\u3002"),Object(t.b)("p",null,"\u8981\u6dfb\u52a0\u6846\u67b6\uff0c\u5148\u8fd0\u884c\uff1a"),Object(t.b)("pre",null,Object(t.b)("code",a({parentName:"pre"},{className:"language-sh"}),"npm install --save babel-plugin-relay\n")),Object(t.b)("p",null,"\u6216\u8005\u4f60\u53ef\u4ee5\u4f7f\u7528 ",Object(t.b)("inlineCode",{parentName:"p"},"yarn")," \u4ee3\u66ff\uff1a"),Object(t.b)("pre",null,Object(t.b)("code",a({parentName:"pre"},{className:"language-sh"}),"yarn add babel-plugin-relay\n")),Object(t.b)("p",null,"\u7136\u540e\uff0c\u65e0\u8bba\u5728\u4f55\u5904\u8c03\u7528 ",Object(t.b)("inlineCode",{parentName:"p"},"graphql")," \u6a21\u7248\u6807\u7b7e\uff0c\u90fd\u5e94\u8be5\u5f15\u5165\u5b8f\uff1a"),Object(t.b)("pre",null,Object(t.b)("code",a({parentName:"pre"},{className:"language-js"}),"import graphql from 'babel-plugin-relay/macro';\n// \u800c\u4e0d\u662f:\n//   import { graphql } from \"babel-plugin-relay\"\n\ngraphql`\n  query UserQuery {\n    viewer {\n      id\n    }\n  }\n`;\n")),Object(t.b)("p",null,"\u8981\u4e86\u89e3\u66f4\u591a\u5173\u4e8e Relay \u7684\u4fe1\u606f\uff0c\u8bf7\u67e5\u9605",Object(t.b)("a",a({parentName:"p"},{href:"https://facebook.github.io/relay/"}),"\u5b98\u65b9\u6587\u6863"),"\u3002"))}i.isMDXComponent=!0},228:function(e,n,r){"use strict";r.d(n,"a",(function(){return p})),r.d(n,"b",(function(){return b}));var t=r(0),a=r.n(t),l=a.a.createContext({}),o=function(e){var n=a.a.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):Object.assign({},n,e)),r},p=function(e){var n=o(e.components);return a.a.createElement(l.Provider,{value:n},e.children)};var c="mdxType",i={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},u=Object(t.forwardRef)((function(e,n){var r=e.components,t=e.mdxType,l=e.originalType,p=e.parentName,c=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&-1===n.indexOf(t)&&(r[t]=e[t]);return r}(e,["components","mdxType","originalType","parentName"]),u=o(r),b=t,s=u[p+"."+b]||u[b]||i[b]||l;return r?a.a.createElement(s,Object.assign({},{ref:n},c,{components:r})):a.a.createElement(s,Object.assign({},{ref:n},c))}));function b(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var l=r.length,o=new Array(l);o[0]=u;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p[c]="string"==typeof e?e:t,o[1]=p;for(var b=2;b<l;b++)o[b]=r[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);