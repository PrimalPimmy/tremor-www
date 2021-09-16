"use strict";(self.webpackChunknew_tremor_website=self.webpackChunknew_tremor_website||[]).push([[9327],{3905:function(e,t,r){r.d(t,{Zo:function(){return f},kt:function(){return m}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},f=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),u=s(r),m=i,d=u["".concat(c,".").concat(m)]||u[m]||p[m]||a;return r?n.createElement(d,o(o({ref:t},f),{},{components:r})):n.createElement(d,o({ref:t},f))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},4518:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s},default:function(){return p}});var n=r(87462),i=r(63366),a=(r(67294),r(3905)),o=["components"],l={},c={unversionedId:"tremor-script/stdlib/cncf/otel/logs/traceflags",id:"version-0.11/tremor-script/stdlib/cncf/otel/logs/traceflags",isDocsHomePage:!1,title:"traceflags",description:"The severity module defines severity_number values",source:"@site/versioned_docs/version-0.11/tremor-script/stdlib/cncf/otel/logs/traceflags.md",sourceDirName:"tremor-script/stdlib/cncf/otel/logs",slug:"/tremor-script/stdlib/cncf/otel/logs/traceflags",permalink:"/docs/tremor-script/stdlib/cncf/otel/logs/traceflags",editUrl:"https://github.com/tremor-rs/tremor-new-website/tree/main/versioned_docs/version-0.11/tremor-script/stdlib/cncf/otel/logs/traceflags.md",version:"0.11",frontMatter:{},sidebar:"version-0.11/tutorialSidebar",previous:{title:"severity",permalink:"/docs/tremor-script/stdlib/cncf/otel/logs/severity"},next:{title:"metrics",permalink:"/docs/tremor-script/stdlib/cncf/otel/metrics"}},s=[{value:"Functions",id:"functions",children:[{value:"from_int(trace_flags)",id:"from_inttrace_flags",children:[]},{value:"is_valid(trace_flags)",id:"is_validtrace_flags",children:[]},{value:"make_default()",id:"make_default",children:[]}]}],f={toc:s};function p(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"severity")," module defines ",(0,a.kt)("inlineCode",{parentName:"p"},"severity_number")," values\nand associated utility functions"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/logs/data-model.md#field-traceflags"},"OpenTelemetry Log Data Model - Trace Flags")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/trace-context/#trace-flags"},"W3C Trace Context - Trace Flags")),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("h3",{id:"from_inttrace_flags"},"from_int(trace_flags)"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"from_int")," function interprets a ",(0,a.kt)("inlineCode",{parentName:"p"},"trace_flags")," integer value argument\nto see if it is ",(0,a.kt)("inlineCode",{parentName:"p"},"sampled-flag")," ( decimal ",(0,a.kt)("inlineCode",{parentName:"p"},"128")," ) is set. All other flags are\ncurrently unused and SHOULD be ",(0,a.kt)("inlineCode",{parentName:"p"},"0")," ( unset ) in conforming ",(0,a.kt)("inlineCode",{parentName:"p"},"W3C Trace Context"),"\nand conformant ",(0,a.kt)("inlineCode",{parentName:"p"},"OpenTelemetry")," implementations"),(0,a.kt)("h3",{id:"is_validtrace_flags"},"is_valid(trace_flags)"),(0,a.kt)("p",null,"Checks if a ",(0,a.kt)("inlineCode",{parentName:"p"},"trace_flags")," instance is correct and valid"),(0,a.kt)("h3",{id:"make_default"},"make_default()"),(0,a.kt)("p",null,"Returns the default configuration of traceflags"))}p.isMDXComponent=!0}}]);