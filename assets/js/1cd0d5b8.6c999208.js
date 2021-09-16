"use strict";(self.webpackChunknew_tremor_website=self.webpackChunknew_tremor_website||[]).push([[9166],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=u(r),m=l,k=s["".concat(p,".").concat(m)]||s[m]||d[m]||a;return r?n.createElement(k,i(i({ref:t},c),{},{components:r})):n.createElement(k,i({ref:t},c))}));function m(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,i=new Array(a);i[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},70479:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var n=r(87462),l=r(63366),a=(r(67294),r(3905)),i=["components"],o={},p={unversionedId:"tremor-script/stdlib/cncf/otel/logs/severity",id:"version-0.11/tremor-script/stdlib/cncf/otel/logs/severity",isDocsHomePage:!1,title:"severity",description:"The severity module defines severity_number values",source:"@site/versioned_docs/version-0.11/tremor-script/stdlib/cncf/otel/logs/severity.md",sourceDirName:"tremor-script/stdlib/cncf/otel/logs",slug:"/tremor-script/stdlib/cncf/otel/logs/severity",permalink:"/docs/tremor-script/stdlib/cncf/otel/logs/severity",editUrl:"https://github.com/tremor-rs/tremor-new-website/tree/main/versioned_docs/version-0.11/tremor-script/stdlib/cncf/otel/logs/severity.md",version:"0.11",frontMatter:{},sidebar:"version-0.11/tutorialSidebar",previous:{title:"logs",permalink:"/docs/tremor-script/stdlib/cncf/otel/logs"},next:{title:"traceflags",permalink:"/docs/tremor-script/stdlib/cncf/otel/logs/traceflags"}},u=[{value:"Constants",id:"constants",children:[{value:"unspecified",id:"unspecified",children:[]},{value:"trace",id:"trace",children:[]},{value:"trace2",id:"trace2",children:[]},{value:"trace3",id:"trace3",children:[]},{value:"trace4",id:"trace4",children:[]},{value:"debug",id:"debug",children:[]},{value:"debug2",id:"debug2",children:[]},{value:"debug3",id:"debug3",children:[]},{value:"debug4",id:"debug4",children:[]},{value:"info",id:"info",children:[]},{value:"info2",id:"info2",children:[]},{value:"info3",id:"info3",children:[]},{value:"info4",id:"info4",children:[]},{value:"warn",id:"warn",children:[]},{value:"warn2",id:"warn2",children:[]},{value:"warn3",id:"warn3",children:[]},{value:"warn4",id:"warn4",children:[]},{value:"error",id:"error",children:[]},{value:"error2",id:"error2",children:[]},{value:"error3",id:"error3",children:[]},{value:"error4",id:"error4",children:[]},{value:"fatal",id:"fatal",children:[]},{value:"fatal2",id:"fatal2",children:[]},{value:"fatal3",id:"fatal3",children:[]},{value:"fatal4",id:"fatal4",children:[]}]},{value:"Functions",id:"functions",children:[{value:"to_string(severity_number)",id:"to_stringseverity_number",children:[]},{value:"indicates_error(severity_number)",id:"indicates_errorseverity_number",children:[]},{value:"make_default()",id:"make_default",children:[]}]}],c={toc:u};function d(e){var t=e.components,r=(0,l.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"severity")," module defines ",(0,a.kt)("inlineCode",{parentName:"p"},"severity_number")," values\nand associated utility functions"),(0,a.kt)("h2",{id:"constants"},"Constants"),(0,a.kt)("h3",{id:"unspecified"},"unspecified"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"type"),": I64"),(0,a.kt)("p",null,"The severity wasn't specified"),(0,a.kt)("h3",{id:"trace"},"trace"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"type"),": I64"),(0,a.kt)("p",null,"Trace - default level"),(0,a.kt)("h3",{id:"trace2"},"trace2"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"type"),": I64"),(0,a.kt)("p",null,"Trace - level 2"),(0,a.kt)("h3",{id:"trace3"},"trace3"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"type"),": I64"),(0,a.kt)("p",null,"Trace - level 3"),(0,a.kt)("h3",{id:"trace4"},"trace4"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"type"),": I64"),(0,a.kt)("p",null,"Trace - level 4"),(0,a.kt)("h3",{id:"debug"},"debug"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"type"),": I64"),(0,a.kt)("p",null,"Debug - default level"),(0,a.kt)("h3",{id:"debug2"},"debug2"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"type"),": I64"),(0,a.kt)("p",null,"Debug - level 2"),(0,a.kt)("h3",{id:"debug3"},"debug3"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"type"),": I64"),(0,a.kt)("p",null,"Debug - level 3"),(0,a.kt)("h3",{id:"debug4"},"debug4"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"type"),": I64"),(0,a.kt)("p",null,"Debug - level 4"),(0,a.kt)("h3",{id:"info"},"info"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"type"),": I64"),(0,a.kt)("p",null,"Informational - default level"),(0,a.kt)("h3",{id:"info2"},"info2"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"type"),": I64"),(0,a.kt)("p",null,"Informational - level 2"),(0,a.kt)("h3",{id:"info3"},"info3"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"type"),": I64"),(0,a.kt)("p",null,"Informational - level 3"),(0,a.kt)("h3",{id:"info4"},"info4"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"type"),": I64"),(0,a.kt)("p",null,"Informational - level 4"),(0,a.kt)("h3",{id:"warn"},"warn"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"type"),": I64"),(0,a.kt)("p",null,"Warning - default level"),(0,a.kt)("h3",{id:"warn2"},"warn2"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"type"),": I64"),(0,a.kt)("p",null,"Warning - level 2"),(0,a.kt)("h3",{id:"warn3"},"warn3"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"type"),": I64"),(0,a.kt)("p",null,"Warning - level 3"),(0,a.kt)("h3",{id:"warn4"},"warn4"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"type"),": I64"),(0,a.kt)("p",null,"Warning - level 4"),(0,a.kt)("h3",{id:"error"},"error"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"type"),": I64"),(0,a.kt)("p",null,"Non-fatal ( recoverable ) Error - default level"),(0,a.kt)("h3",{id:"error2"},"error2"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"type"),": I64"),(0,a.kt)("p",null,"Non-fatal ( recoverable ) Error - level 2"),(0,a.kt)("h3",{id:"error3"},"error3"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"type"),": I64"),(0,a.kt)("p",null,"Non-fatal ( recoverable ) Error - level 3"),(0,a.kt)("h3",{id:"error4"},"error4"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"type"),": I64"),(0,a.kt)("p",null,"Non-fatal ( recoverable ) Error - level 4"),(0,a.kt)("h3",{id:"fatal"},"fatal"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"type"),": I64"),(0,a.kt)("p",null,"Fatal ( recoverable ) Error - default level"),(0,a.kt)("h3",{id:"fatal2"},"fatal2"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"type"),": I64"),(0,a.kt)("p",null,"Fatal ( recoverable ) Error - level 2"),(0,a.kt)("h3",{id:"fatal3"},"fatal3"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"type"),": I64"),(0,a.kt)("p",null,"Fatal ( recoverable ) Error - level 3"),(0,a.kt)("h3",{id:"fatal4"},"fatal4"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"type"),": I64"),(0,a.kt)("p",null,"Fatal ( recoverable ) Error - level 4"),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("h3",{id:"to_stringseverity_number"},"to_string(severity_number)"),(0,a.kt)("p",null,"Given a ",(0,a.kt)("inlineCode",{parentName:"p"},"severity_number")," returns its normative string representation"),(0,a.kt)("p",null,"Returns a ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h3",{id:"indicates_errorseverity_number"},"indicates_error(severity_number)"),(0,a.kt)("p",null,"Given a ",(0,a.kt)("inlineCode",{parentName:"p"},"severity_number")," is it indicative of a non-fatal or fatal error"),(0,a.kt)("p",null,"Returns a ",(0,a.kt)("inlineCode",{parentName:"p"},"bool")),(0,a.kt)("h3",{id:"make_default"},"make_default()"),(0,a.kt)("p",null,"Returns the default severity_number"),(0,a.kt)("p",null,"The default severity_number"))}d.isMDXComponent=!0}}]);