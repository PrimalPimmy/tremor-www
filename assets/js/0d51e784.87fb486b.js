"use strict";(self.webpackChunknew_tremor_website=self.webpackChunknew_tremor_website||[]).push([[2027],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=l(n),h=r,u=m["".concat(c,".").concat(h)]||m[h]||d[h]||i;return n?a.createElement(u,s(s({ref:t},p),{},{components:n})):a.createElement(u,s({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var l=2;l<i;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},55766:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return c},toc:function(){return l},default:function(){return d}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),s=["components"],o={},c={unversionedId:"recipes/logstash/README",id:"recipes/logstash/README",isDocsHomePage:!1,title:"Transform",description:"This example shows how handling apache logs with a tremor and elastic search could work. The example is a lot more complex than the initial showcases and combines three components.",source:"@site/docs/recipes/10_logstash/README.md",sourceDirName:"recipes/10_logstash",slug:"/recipes/logstash/README",permalink:"/docs/next/recipes/logstash/README",editUrl:"https://github.com/tremor-rs/tremor-new-website/tree/main/docs/recipes/10_logstash/README.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Transform",permalink:"/docs/next/recipes/validate/README"},next:{title:"Transform",permalink:"/docs/next/recipes/influx/README"}},l=[{value:"Environment",id:"environment",children:[]},{value:"Business Logic",id:"business-logic",children:[]},{value:"Command line testing during logic development",id:"command-line-testing-during-logic-development",children:[{value:"Discussion",id:"discussion",children:[]}]}],p={toc:l};function d(e){var t=e.components,o=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This example shows how handling apache logs with a tremor and elastic search could work. The example is a lot more complex than the initial showcases and combines three components."),(0,i.kt)("p",null,"Kibana, which once started with docker-compose can be reached ",(0,i.kt)("a",{parentName:"p",href:"http://localhost:5601"},"locally"),". It allows browsing through the logs. If you have never used Kibana before you can get started by clicking on ",(0,i.kt)("strong",{parentName:"p"},"Management")," then in the ",(0,i.kt)("strong",{parentName:"p"},"Elasticsearch")," section on ",(0,i.kt)("strong",{parentName:"p"},"Index Management"),"."),(0,i.kt)("p",null,"Elastic Search, which stores the logs submitted."),(0,i.kt)("p",null,"Tremor, which takes the apache logs, parses and classifies them then submits them to indexes in elastic search."),(0,i.kt)("p",null,"In addition the file ",(0,i.kt)("inlineCode",{parentName:"p"},"demo/data/apache_access_logs.xz")," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tremor-rs/tremor-runtime/tree/main/demo/data"},"Link")," is used as example payload."),(0,i.kt)("h2",{id:"environment"},"Environment"),(0,i.kt)("p",null,"In the ",(0,i.kt)("a",{target:"_blank",href:n(51054).Z},(0,i.kt)("code",null,"example.trickle"))," we define scripts that ",(0,i.kt)("inlineCode",{parentName:"p"},"extract")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"categorize")," apache logs. Any log that is not conforming ther predefined format will be dropped. All other configuration is the same as per the previous example and is elided here for brevity."),(0,i.kt)("h2",{id:"business-logic"},"Business Logic"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-trickle"},'define script extract                                                          # define the script that parses our apache logs\nscript\n  match {"raw": event} of                                                      # we use the dissect extractor to parse the apache log\n    case r = %{ raw ~= dissect|%{ip} %{} %{} [%{timestamp}] "%{method} %{path} %{proto}" %{code:int} %{cost:int}\\\\n| }\n            => r.raw                                                           # this first case is hit if the log includes an execution time (cost) for the request\n    case r = %{ raw ~= dissect|%{ip} %{} %{} [%{timestamp}] "%{method} %{path} %{proto}" %{code:int} %{}\\\\n| }\n            => r.raw\n    default => emit => "bad"\n  end\nend;\n\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-trickle"},'define script categorize                                                       # define the script that classifies the logs\nwith\n  user_error_index = "errors",                                                 # we use "with" here to default some configuration for\n  server_error_index = "errors",                                               # the script, we could then re-use this script in multiple\n  ok_index = "requests",                                                       # places with different indexes\n  other_index = "requests"\nscript\n  let $doc_type = "log";                                                      # doc_type is used by the offramp, the $ denotes this is stored in event metadata\n  let $index = match event of\n    case e = %{present code} when e.code >= 200 and e.code < 400              # for http codes between 200 and 400 (exclusive) - those are success codes\n      => args.ok_index\n    case e = %{present code} when e.code >= 400 and e.code < 500              # 400 to 500 (exclusive) are client side errors\n      => args.user_error_index\n    case e = %{present code} when e.code >= 500 and e.code < 600\n      => args.server_error_index                                              # 500 to 500 (exclusive) are server side errors\n    default => args.other_index                                               # if we get any other code we just use a default index\n  end;\n  event                                                                       # emit the event with it\'s new metadata\nend;\n')),(0,i.kt)("h2",{id:"command-line-testing-during-logic-development"},"Command line testing during logic development"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ docker-compose up\n  ... lots of logs ...\n")),(0,i.kt)("p",null,"Inject test messages via ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/vi/websocat"},"websocat")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Can be installed via ",(0,i.kt)("inlineCode",{parentName:"p"},"cargo install websocat")," for the lazy/impatient amongst us"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ xzcat logs.xz | websocat ws://localhost:4242\n...\n")),(0,i.kt)("p",null,"Open the ",(0,i.kt)("a",{parentName:"p",href:"http://localhost:5601/app/kibana#/management/kibana/indices/"},"Kibana index management")," and create indexes to view the data."),(0,i.kt)("h3",{id:"discussion"},"Discussion"),(0,i.kt)("p",null,"This is a fairly complex example that combines everything we've seen in the prior examples and a bit more. It should serve as a starting point of how to use tremor to ingest, process, filter and classify data with tremor into an upstream system."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"When using this as a baseline be aware that around things like batching tuning will be involved to make the numbers fit with the infrastructure it is pointed at. Also since it is not an ongoing data stream we omitted backpressure or classification based rate limiting from the example."))))}d.isMDXComponent=!0},51054:function(e,t,n){t.Z=n.p+"assets/files/example-5e9e4c6571f63302b4ea5365f6200347.trickle"}}]);