"use strict";(self.webpackChunknew_tremor_website=self.webpackChunknew_tremor_website||[]).push([[9077],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),m=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=m(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=m(t),d=o,f=s["".concat(u,".").concat(d)]||s[d]||p[d]||a;return t?r.createElement(f,i(i({ref:n},c),{},{components:t})):r.createElement(f,i({ref:n},c))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=s;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var m=2;m<a;m++)i[m]=t[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},65685:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},metadata:function(){return u},toc:function(){return m},default:function(){return p}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],l={},u={unversionedId:"tremor-script/stdlib/std/math",id:"version-0.11/tremor-script/stdlib/std/math",isDocsHomePage:!1,title:"math",description:"The math module contains functions for common mathematical operations.",source:"@site/versioned_docs/version-0.11/tremor-script/stdlib/std/math.md",sourceDirName:"tremor-script/stdlib/std",slug:"/tremor-script/stdlib/std/math",permalink:"/docs/tremor-script/stdlib/std/math",editUrl:"https://github.com/tremor-rs/tremor-new-website/tree/main/versioned_docs/version-0.11/tremor-script/stdlib/std/math.md",version:"0.11",frontMatter:{},sidebar:"version-0.11/tutorialSidebar",previous:{title:"json",permalink:"/docs/tremor-script/stdlib/std/json"},next:{title:"random",permalink:"/docs/tremor-script/stdlib/std/random"}},m=[{value:"Functions",id:"functions",children:[{value:"floor(n)",id:"floorn",children:[]},{value:"ceil(n)",id:"ceiln",children:[]},{value:"round(n)",id:"roundn",children:[]},{value:"trunc(n)",id:"truncn",children:[]},{value:"max(n1, n2)",id:"maxn1-n2",children:[]},{value:"min(n1, n2)",id:"minn1-n2",children:[]}]}],c={toc:m};function p(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The math module contains functions for common mathematical operations."),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("h3",{id:"floorn"},"floor(n)"),(0,a.kt)("p",null,"Returns the smallest integer value less than or equal to n."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tremor"},"math::floor(42.9) == 42\n")),(0,a.kt)("p",null,"Returns an ",(0,a.kt)("inlineCode",{parentName:"p"},"integer")),(0,a.kt)("h3",{id:"ceiln"},"ceil(n)"),(0,a.kt)("p",null,"Returns the largest ",(0,a.kt)("inlineCode",{parentName:"p"},"integer")," value greater than or equal to n."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tremor"},"math::ceil(41.1) == 42\n")),(0,a.kt)("p",null,"Returns an ",(0,a.kt)("inlineCode",{parentName:"p"},"integer")),(0,a.kt)("h3",{id:"roundn"},"round(n)"),(0,a.kt)("p",null,"Returns the ",(0,a.kt)("inlineCode",{parentName:"p"},"integer")," nearest to."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tremor"},"math::round(41.4) == 41\nmath::round(41.5) == 42\n")),(0,a.kt)("p",null,"Returns an ",(0,a.kt)("inlineCode",{parentName:"p"},"integer")),(0,a.kt)("h3",{id:"truncn"},"trunc(n)"),(0,a.kt)("p",null,"Returns the ",(0,a.kt)("inlineCode",{parentName:"p"},"integer")," part of ",(0,a.kt)("inlineCode",{parentName:"p"},"n"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tremor"},"math::trunc(41.4) == 41\nmath::trunc(41.5) == 41\n")),(0,a.kt)("p",null,"Returns an ",(0,a.kt)("inlineCode",{parentName:"p"},"integer")),(0,a.kt)("h3",{id:"maxn1-n2"},"max(n1, n2)"),(0,a.kt)("p",null,"Returns the maximum of two numbers."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tremor"},"math::max(41, 42) == 42\n")),(0,a.kt)("p",null,"Returns a ",(0,a.kt)("inlineCode",{parentName:"p"},"number")," (",(0,a.kt)("inlineCode",{parentName:"p"},"integer")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"float"),")"),(0,a.kt)("h3",{id:"minn1-n2"},"min(n1, n2)"),(0,a.kt)("p",null,"Returns the minimum of two numbers."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tremor"},"math::min(41, 42) == 41\n")),(0,a.kt)("p",null,"Returns a ",(0,a.kt)("inlineCode",{parentName:"p"},"number")," (",(0,a.kt)("inlineCode",{parentName:"p"},"integer")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"float"),")"))}p.isMDXComponent=!0}}]);