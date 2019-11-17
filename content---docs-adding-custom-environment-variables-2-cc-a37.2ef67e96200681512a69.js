(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{160:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return c}));t(58),t(31),t(22),t(23),t(59),t(0);var a=t(228);function i(){return(i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var r={id:"adding-custom-environment-variables",title:"Adding Custom Environment Variables",sidebar_label:"Environment Variables"},l=[{value:"Referencing Environment Variables in the HTML",id:"referencing-environment-variables-in-the-html",children:[]},{value:"Adding Temporary Environment Variables In Your Shell",id:"adding-temporary-environment-variables-in-your-shell",children:[{value:"Windows (cmd.exe)",id:"windows-cmdexe",children:[]},{value:"Windows (Powershell)",id:"windows-powershell",children:[]},{value:"Linux, macOS (Bash)",id:"linux-macos-bash",children:[]}]},{value:"Adding Development Environment Variables In .env",id:"adding-development-environment-variables-in-env",children:[{value:"What other .env files can be used?",id:"what-other-env-files-can-be-used",children:[]},{value:"Expanding Environment Variables In .env",id:"expanding-environment-variables-in-env",children:[]}]}],o={rightToc:l},b="wrapper";function c(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,["components"]);return Object(a.b)(b,i({},o,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Note: this feature is available with ",Object(a.b)("inlineCode",{parentName:"p"},"react-scripts@0.2.3")," and higher.")),Object(a.b)("p",null,"Your project can consume variables declared in your environment as if they were declared locally in your JS files. By default you will have ",Object(a.b)("inlineCode",{parentName:"p"},"NODE_ENV")," defined for you, and any other environment variables starting with ",Object(a.b)("inlineCode",{parentName:"p"},"REACT_APP_"),"."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"WARNING: Do not store any secrets (such as private API keys) in your React app!"),Object(a.b)("p",{parentName:"blockquote"},"Environment variables are embedded into the build, meaning anyone can view them by inspecting your app's files.")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"The environment variables are embedded during the build time"),". Since Create React App produces a static HTML/CSS/JS bundle, it can\u2019t possibly read them at runtime. To read them at runtime, you would need to load HTML into memory on the server and replace placeholders in runtime, as ",Object(a.b)("a",i({parentName:"p"},{href:"/docs/title-and-meta-tags#injecting-data-from-the-server-into-the-page"}),"described here"),". Alternatively you can rebuild the app on the server anytime you change them."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Note: You must create custom environment variables beginning with ",Object(a.b)("inlineCode",{parentName:"p"},"REACT_APP_"),". Any other variables except ",Object(a.b)("inlineCode",{parentName:"p"},"NODE_ENV")," will be ignored to avoid accidentally ",Object(a.b)("a",i({parentName:"p"},{href:"https://github.com/facebook/create-react-app/issues/865#issuecomment-252199527"}),"exposing a private key on the machine that could have the same name"),". Changing any environment variables will require you to restart the development server if it is running.")),Object(a.b)("p",null,"These environment variables will be defined for you on ",Object(a.b)("inlineCode",{parentName:"p"},"process.env"),". For example, having an environment variable named ",Object(a.b)("inlineCode",{parentName:"p"},"REACT_APP_NOT_SECRET_CODE")," will be exposed in your JS as ",Object(a.b)("inlineCode",{parentName:"p"},"process.env.REACT_APP_NOT_SECRET_CODE"),"."),Object(a.b)("p",null,"There is also a built-in environment variable called ",Object(a.b)("inlineCode",{parentName:"p"},"NODE_ENV"),". You can read it from ",Object(a.b)("inlineCode",{parentName:"p"},"process.env.NODE_ENV"),". When you run ",Object(a.b)("inlineCode",{parentName:"p"},"npm start"),", it is always equal to ",Object(a.b)("inlineCode",{parentName:"p"},"'development'"),", when you run ",Object(a.b)("inlineCode",{parentName:"p"},"npm test")," it is always equal to ",Object(a.b)("inlineCode",{parentName:"p"},"'test'"),", and when you run ",Object(a.b)("inlineCode",{parentName:"p"},"npm run build")," to make a production bundle, it is always equal to ",Object(a.b)("inlineCode",{parentName:"p"},"'production'"),". ",Object(a.b)("strong",{parentName:"p"},"You cannot override ",Object(a.b)("inlineCode",{parentName:"strong"},"NODE_ENV")," manually.")," This prevents developers from accidentally deploying a slow development build to production."),Object(a.b)("p",null,"These environment variables can be useful for displaying information conditionally based on where the project is deployed or consuming sensitive data that lives outside of version control."),Object(a.b)("p",null,"First, you need to have environment variables defined. For example, let\u2019s say you wanted to consume an environment variable inside a ",Object(a.b)("inlineCode",{parentName:"p"},"<form>"),":"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-jsx"}),'render() {\n  return (\n    <div>\n      <small>You are running this application in <b>{process.env.NODE_ENV}</b> mode.</small>\n      <form>\n        <input type="hidden" defaultValue={process.env.REACT_APP_NOT_SECRET_CODE} />\n      </form>\n    </div>\n  );\n}\n')),Object(a.b)("p",null,"During the build, ",Object(a.b)("inlineCode",{parentName:"p"},"process.env.REACT_APP_NOT_SECRET_CODE")," will be replaced with the current value of the ",Object(a.b)("inlineCode",{parentName:"p"},"REACT_APP_NOT_SECRET_CODE")," environment variable. Remember that the ",Object(a.b)("inlineCode",{parentName:"p"},"NODE_ENV")," variable will be set for you automatically."),Object(a.b)("p",null,"When you load the app in the browser and inspect the ",Object(a.b)("inlineCode",{parentName:"p"},"<input>"),", you will see its value set to ",Object(a.b)("inlineCode",{parentName:"p"},"abcdef"),", and the bold text will show the environment provided when using ",Object(a.b)("inlineCode",{parentName:"p"},"npm start"),":"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-html"}),'<div>\n  <small>You are running this application in <b>development</b> mode.</small>\n  <form>\n    <input type="hidden" value="abcdef" />\n  </form>\n</div>\n')),Object(a.b)("p",null,"The above form is looking for a variable called ",Object(a.b)("inlineCode",{parentName:"p"},"REACT_APP_NOT_SECRET_CODE")," from the environment. In order to consume this value, we need to have it defined in the environment. This can be done using two ways: either in your shell or in a ",Object(a.b)("inlineCode",{parentName:"p"},".env")," file. Both of these ways are described in the next few sections."),Object(a.b)("p",null,"Having access to the ",Object(a.b)("inlineCode",{parentName:"p"},"NODE_ENV")," is also useful for performing actions conditionally:"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-js"}),"if (process.env.NODE_ENV !== 'production') {\n  analytics.disable();\n}\n")),Object(a.b)("p",null,"When you compile the app with ",Object(a.b)("inlineCode",{parentName:"p"},"npm run build"),", the minification step will strip out this condition, and the resulting bundle will be smaller."),Object(a.b)("h2",{id:"referencing-environment-variables-in-the-html"},"Referencing Environment Variables in the HTML"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Note: this feature is available with ",Object(a.b)("inlineCode",{parentName:"p"},"react-scripts@0.9.0")," and higher.")),Object(a.b)("p",null,"You can also access the environment variables starting with ",Object(a.b)("inlineCode",{parentName:"p"},"REACT_APP_")," in the ",Object(a.b)("inlineCode",{parentName:"p"},"public/index.html"),". For example:"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-html"}),"<title>%REACT_APP_WEBSITE_NAME%</title>\n")),Object(a.b)("p",null,"Note that the caveats from the above section apply:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Apart from a few built-in variables (",Object(a.b)("inlineCode",{parentName:"li"},"NODE_ENV")," and ",Object(a.b)("inlineCode",{parentName:"li"},"PUBLIC_URL"),"), variable names must start with ",Object(a.b)("inlineCode",{parentName:"li"},"REACT_APP_")," to work."),Object(a.b)("li",{parentName:"ul"},"The environment variables are injected at build time. If you need to inject them at runtime, ",Object(a.b)("a",i({parentName:"li"},{href:"/docs/title-and-meta-tags#generating-dynamic-meta-tags-on-the-server"}),"follow this approach instead"),".")),Object(a.b)("h2",{id:"adding-temporary-environment-variables-in-your-shell"},"Adding Temporary Environment Variables In Your Shell"),Object(a.b)("p",null,"Defining environment variables can vary between OSes. It\u2019s also important to know that this manner is temporary for the life of the shell session."),Object(a.b)("h3",{id:"windows-cmdexe"},"Windows (cmd.exe)"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-cmd"}),'set "REACT_APP_NOT_SECRET_CODE=abcdef" && npm start\n')),Object(a.b)("p",null,"(Note: Quotes around the variable assignment are required to avoid a trailing whitespace.)"),Object(a.b)("h3",{id:"windows-powershell"},"Windows (Powershell)"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-Powershell"}),'($env:REACT_APP_NOT_SECRET_CODE = "abcdef") -and (npm start)\n')),Object(a.b)("h3",{id:"linux-macos-bash"},"Linux, macOS (Bash)"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-sh"}),"REACT_APP_NOT_SECRET_CODE=abcdef npm start\n")),Object(a.b)("h2",{id:"adding-development-environment-variables-in-env"},"Adding Development Environment Variables In ",Object(a.b)("inlineCode",{parentName:"h2"},".env")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Note: this feature is available with ",Object(a.b)("inlineCode",{parentName:"p"},"react-scripts@0.5.0")," and higher.")),Object(a.b)("p",null,"To define permanent environment variables, create a file called ",Object(a.b)("inlineCode",{parentName:"p"},".env")," in the root of your project:"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{}),"REACT_APP_NOT_SECRET_CODE=abcdef\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Note: You must create custom environment variables beginning with ",Object(a.b)("inlineCode",{parentName:"p"},"REACT_APP_"),". Any other variables except ",Object(a.b)("inlineCode",{parentName:"p"},"NODE_ENV")," will be ignored to avoid ",Object(a.b)("a",i({parentName:"p"},{href:"https://github.com/facebook/create-react-app/issues/865#issuecomment-252199527"}),"accidentally exposing a private key on the machine that could have the same name"),". Changing any environment variables will require you to restart the development server if it is running.")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Note: You need to restart the development server after changing ",Object(a.b)("inlineCode",{parentName:"p"},".env")," files.")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},".env")," files ",Object(a.b)("strong",{parentName:"p"},"should be")," checked into source control (with the exclusion of ",Object(a.b)("inlineCode",{parentName:"p"},".env*.local"),")."),Object(a.b)("h3",{id:"what-other-env-files-can-be-used"},"What other ",Object(a.b)("inlineCode",{parentName:"h3"},".env")," files can be used?"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Note: this feature is ",Object(a.b)("strong",{parentName:"p"},"available with ",Object(a.b)("inlineCode",{parentName:"strong"},"react-scripts@1.0.0")," and higher"),".")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},".env"),": Default."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},".env.local"),": Local overrides. ",Object(a.b)("strong",{parentName:"li"},"This file is loaded for all environments except test.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},".env.development"),", ",Object(a.b)("inlineCode",{parentName:"li"},".env.test"),", ",Object(a.b)("inlineCode",{parentName:"li"},".env.production"),": Environment-specific settings."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},".env.development.local"),", ",Object(a.b)("inlineCode",{parentName:"li"},".env.test.local"),", ",Object(a.b)("inlineCode",{parentName:"li"},".env.production.local"),": Local overrides of environment-specific settings.")),Object(a.b)("p",null,"Files on the left have more priority than files on the right:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"npm start"),": ",Object(a.b)("inlineCode",{parentName:"li"},".env.development.local"),", ",Object(a.b)("inlineCode",{parentName:"li"},".env.development"),", ",Object(a.b)("inlineCode",{parentName:"li"},".env.local"),", ",Object(a.b)("inlineCode",{parentName:"li"},".env")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"npm run build"),": ",Object(a.b)("inlineCode",{parentName:"li"},".env.production.local"),", ",Object(a.b)("inlineCode",{parentName:"li"},".env.production"),", ",Object(a.b)("inlineCode",{parentName:"li"},".env.local"),", ",Object(a.b)("inlineCode",{parentName:"li"},".env")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"npm test"),": ",Object(a.b)("inlineCode",{parentName:"li"},".env.test.local"),", ",Object(a.b)("inlineCode",{parentName:"li"},".env.test"),", ",Object(a.b)("inlineCode",{parentName:"li"},".env")," (note ",Object(a.b)("inlineCode",{parentName:"li"},".env.local")," is missing)")),Object(a.b)("p",null,"These variables will act as the defaults if the machine does not explicitly set them."),Object(a.b)("p",null,"Please refer to the ",Object(a.b)("a",i({parentName:"p"},{href:"https://github.com/motdotla/dotenv"}),"dotenv documentation")," for more details."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Note: If you are defining environment variables for development, your CI and/or hosting platform will most likely need\nthese defined as well. Consult their documentation how to do this. For example, see the documentation for ",Object(a.b)("a",i({parentName:"p"},{href:"https://docs.travis-ci.com/user/environment-variables/"}),"Travis CI")," or ",Object(a.b)("a",i({parentName:"p"},{href:"https://devcenter.heroku.com/articles/config-vars"}),"Heroku"),".")),Object(a.b)("h3",{id:"expanding-environment-variables-in-env"},"Expanding Environment Variables In ",Object(a.b)("inlineCode",{parentName:"h3"},".env")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Note: this feature is available with ",Object(a.b)("inlineCode",{parentName:"p"},"react-scripts@1.1.0")," and higher.")),Object(a.b)("p",null,"Expand variables already on your machine for use in your ",Object(a.b)("inlineCode",{parentName:"p"},".env")," file (using ",Object(a.b)("a",i({parentName:"p"},{href:"https://github.com/motdotla/dotenv-expand"}),"dotenv-expand"),")."),Object(a.b)("p",null,"For example, to get the environment variable ",Object(a.b)("inlineCode",{parentName:"p"},"npm_package_version"),":"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{}),"REACT_APP_VERSION=$npm_package_version\n# also works:\n# REACT_APP_VERSION=${npm_package_version}\n")),Object(a.b)("p",null,"Or expand variables local to the current ",Object(a.b)("inlineCode",{parentName:"p"},".env")," file:"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{}),"DOMAIN=www.example.com\nREACT_APP_FOO=$DOMAIN/foo\nREACT_APP_BAR=$DOMAIN/bar\n")))}c.isMDXComponent=!0},228:function(e,n,t){"use strict";t.d(n,"a",(function(){return o})),t.d(n,"b",(function(){return s}));var a=t(0),i=t.n(a),r=i.a.createContext({}),l=function(e){var n=i.a.useContext(r),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},o=function(e){var n=l(e.components);return i.a.createElement(r.Provider,{value:n},e.children)};var b="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},p=Object(a.forwardRef)((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,b=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===n.indexOf(a)&&(t[a]=e[a]);return t}(e,["components","mdxType","originalType","parentName"]),p=l(t),s=a,d=p[o+"."+s]||p[s]||c[s]||r;return t?i.a.createElement(d,Object.assign({},{ref:n},b,{components:t})):i.a.createElement(d,Object.assign({},{ref:n},b))}));function s(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=p;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o[b]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<r;s++)l[s]=t[s];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);