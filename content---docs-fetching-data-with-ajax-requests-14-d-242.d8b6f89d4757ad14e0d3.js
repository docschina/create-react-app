(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{184:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return s}));a(58),a(31),a(22),a(23),a(59),a(0);var n=a(228);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var o={id:"fetching-data-with-ajax-requests",title:"Fetching Data with AJAX Requests",sidebar_label:"Fetching Data"},c=[],i={rightToc:c},p="wrapper";function s(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(n.b)(p,r({},i,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"React doesn't prescribe a specific approach to data fetching, but people commonly use either a library like ",Object(n.b)("a",r({parentName:"p"},{href:"https://github.com/axios/axios"}),"axios")," or the ",Object(n.b)("a",r({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"}),Object(n.b)("inlineCode",{parentName:"a"},"fetch()")," API")," provided by the browser."),Object(n.b)("p",null,"The global ",Object(n.b)("inlineCode",{parentName:"p"},"fetch")," function allows you to make AJAX requests. It takes in a URL as an input and returns a ",Object(n.b)("inlineCode",{parentName:"p"},"Promise")," that resolves to a ",Object(n.b)("inlineCode",{parentName:"p"},"Response")," object. You can find more information about ",Object(n.b)("inlineCode",{parentName:"p"},"fetch")," ",Object(n.b)("a",r({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch"}),"here"),"."),Object(n.b)("p",null,"A Promise represents the eventual result of an asynchronous operation, you can find more information about Promises ",Object(n.b)("a",r({parentName:"p"},{href:"https://www.promisejs.org/"}),"here")," and ",Object(n.b)("a",r({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise"}),"here"),". Both axios and ",Object(n.b)("inlineCode",{parentName:"p"},"fetch()")," use Promises under the hood. You can also use the ",Object(n.b)("a",r({parentName:"p"},{href:"https://davidwalsh.name/async-await"}),Object(n.b)("inlineCode",{parentName:"a"},"async / await"))," syntax to reduce the callback nesting."),Object(n.b)("p",null,"Make sure the ",Object(n.b)("a",r({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"}),Object(n.b)("inlineCode",{parentName:"a"},"fetch()")," API")," and ",Object(n.b)("a",r({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise"}),"Promises")," are available in your target audience's browsers.\nFor example, support in Internet Explorer requires a ",Object(n.b)("a",r({parentName:"p"},{href:"https://github.com/facebook/create-react-app/blob/master/packages/react-app-polyfill/README.md"}),"polyfill"),"."),Object(n.b)("p",null,"You can learn more about making AJAX requests from React components in ",Object(n.b)("a",r({parentName:"p"},{href:"https://reactjs.org/docs/faq-ajax.html"}),"the FAQ entry on the React website"),"."))}s.isMDXComponent=!0},228:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return b}));var n=a(0),r=a.n(n),o=r.a.createContext({}),c=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):Object.assign({},t,e)),a},i=function(e){var t=c(e.components);return r.a.createElement(o.Provider,{value:t},e.children)};var p="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},l=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}(e,["components","mdxType","originalType","parentName"]),l=c(a),b=n,u=l[i+"."+b]||l[b]||s[b]||o;return a?r.a.createElement(u,Object.assign({},{ref:t},p,{components:a})):r.a.createElement(u,Object.assign({},{ref:t},p))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=l;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:n,c[1]=i;for(var b=2;b<o;b++)c[b]=a[b];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}l.displayName="MDXCreateElement"}}]);