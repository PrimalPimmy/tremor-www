"use strict";(self.webpackChunknew_tremor_website=self.webpackChunknew_tremor_website||[]).push([[5953],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return m}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=l(t),m=o,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return t?n.createElement(f,a(a({ref:r},p),{},{components:t})):n.createElement(f,a({ref:r},p))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var u={};for(var s in r)hasOwnProperty.call(r,s)&&(u[s]=r[s]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var l=2;l<i;l++)a[l]=t[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4247:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return u},metadata:function(){return s},toc:function(){return l},default:function(){return c}});var n=t(87462),o=t(63366),i=(t(67294),t(3905)),a=["components"],u={},s={unversionedId:"recipes/README",id:"version-0.11/recipes/README",isDocsHomePage:!1,title:"Tremor Workshop",description:"[tremor workshop]: #tremor-workshop",source:"@site/versioned_docs/version-0.11/recipes/README.md",sourceDirName:"recipes",slug:"/recipes/README",permalink:"/docs/recipes/README",editUrl:"https://github.com/tremor-rs/tremor-new-website/tree/main/versioned_docs/version-0.11/recipes/README.md",version:"0.11",frontMatter:{},sidebar:"version-0.11/tutorialSidebar",previous:{title:"CNCF OpenTelemetry Elastic APM Interworking",permalink:"/docs/recipes/otel_elastic_apm/README"},next:{title:"Tremor cli v0.11",permalink:"/docs/operations/cli"}},l=[{value:"Table of Contents",id:"table-of-contents",children:[]},{value:"Download and environment setup",id:"download-and-environment-setup",children:[{value:"Download and build quick start",id:"download-and-build-quick-start",children:[]},{value:"Setup support for your IDE",id:"setup-support-for-your-ide",children:[]},{value:"Make sure tremor binary is on your PATH",id:"make-sure-tremor-binary-is-on-your-path",children:[]}]}],p={toc:l};function c(e){var r=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This workshop serves as a getting started laboratory for downloading,\ncompiling and running tremor on development machines and developing\ntremor-based solutions."),(0,i.kt)("h2",{id:"table-of-contents"},"Table of Contents"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#tremor-dev-env"},"Development Environment"))),(0,i.kt)("h2",{id:"download-and-environment-setup"},"Download and environment setup"),(0,i.kt)("h3",{id:"download-and-build-quick-start"},"Download and build quick start"),(0,i.kt)("p",null,"Make sure your environment is setup for building tremor:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/community/development/quick-start"},"Tremor Development Quick Start")),(0,i.kt)("h3",{id:"setup-support-for-your-ide"},"Setup support for your IDE"),(0,i.kt)("p",null,"Tremor supports language server extensions for VS Code and VIM text editors/IDEs:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/tremor-rs/tremor-language-server"},"Tremor Language Server")),(0,i.kt)("h3",{id:"make-sure-tremor-binary-is-on-your-path"},"Make sure tremor binary is on your PATH"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ export PATH=/Path/to/tremor-src-repo/target/debug/:$PATH\n$ tremor --version\ntremor 0.9.0\n")))}c.isMDXComponent=!0}}]);