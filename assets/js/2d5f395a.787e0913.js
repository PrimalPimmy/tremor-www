"use strict";(self.webpackChunknew_tremor_website=self.webpackChunknew_tremor_website||[]).push([[3523],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),u=i,f=d["".concat(l,".").concat(u)]||d[u]||m[u]||a;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},12281:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return m}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=["components"],s={},l={unversionedId:"recipes/postgres_timescaledb/README",id:"version-0.11/recipes/postgres_timescaledb/README",isDocsHomePage:!1,title:"Transform",description:"This example demonstrates extracting data from a Postgres database and inserting",source:"@site/versioned_docs/version-0.11/recipes/12_postgres_timescaledb/README.md",sourceDirName:"recipes/12_postgres_timescaledb",slug:"/recipes/postgres_timescaledb/README",permalink:"/docs/recipes/postgres_timescaledb/README",editUrl:"https://github.com/tremor-rs/tremor-new-website/tree/main/versioned_docs/version-0.11/recipes/12_postgres_timescaledb/README.md",version:"0.11",frontMatter:{},sidebar:"version-0.11/tutorialSidebar",previous:{title:"Transform",permalink:"/docs/recipes/influx/README"},next:{title:"Transform",permalink:"/docs/recipes/grafana/README"}},c=[{value:"Environment",id:"environment",children:[]},{value:"Business Logic",id:"business-logic",children:[]},{value:"Command line testing during logic development",id:"command-line-testing-during-logic-development",children:[{value:"Discussion",id:"discussion",children:[]}]}],p={toc:c};function m(e){var t=e.components,s=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This example demonstrates extracting data from a Postgres database and inserting\ndata to TimescaleDB."),(0,a.kt)("p",null,"The demo starts up said PostgreSQL, TimescaleDB, Tremor and ",(0,a.kt)("inlineCode",{parentName:"p"},"pgweb"),"."),(0,a.kt)("h2",{id:"environment"},"Environment"),(0,a.kt)("p",null,"In ",(0,a.kt)("a",{target:"_blank",href:n(10267).Z},(0,a.kt)("code",null,"00_ramps.yaml"))," we pass in a\nconfiguration for an onramp of type ",(0,a.kt)("inlineCode",{parentName:"p"},"postgres")," along with typical connection\nstring requirements."),(0,a.kt)("p",null,"Additionally, we are required to specify ",(0,a.kt)("inlineCode",{parentName:"p"},"interval_ms")," which stands for\nfrequency of polling that Tremor is performing on Postgres database with the\ngiven ",(0,a.kt)("inlineCode",{parentName:"p"},"query"),". Query will be passed two parameters:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"$1")," is the ",(0,a.kt)("inlineCode",{parentName:"li"},"TIMESTAMPTZ")," that indicates the start time and date for the\nrange"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"$2")," is the ",(0,a.kt)("inlineCode",{parentName:"li"},"TIMESTAMPTZ")," that indicates the ending time and date for the\nrange")),(0,a.kt)("p",null,"The initial range is formed by taking ",(0,a.kt)("inlineCode",{parentName:"p"},"consume_from")," configuration setting and\nthe current time and date. This will effectivelly backfill data. From then on,\nTremor will poll in regular ",(0,a.kt)("inlineCode",{parentName:"p"},"interval_ms"),"."),(0,a.kt)("p",null,"In addition to a ",(0,a.kt)("inlineCode",{parentName:"p"},"postgres")," onramp, we also utilize a ",(0,a.kt)("inlineCode",{parentName:"p"},"crononome")," onramp. The\nintention is to demonstrate intermediate record format which is accepted by\n",(0,a.kt)("inlineCode",{parentName:"p"},"postgres")," offramp."),(0,a.kt)("h2",{id:"business-logic"},"Business Logic"),(0,a.kt)("p",null,"We have two pipelines."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{target:"_blank",href:n(57003).Z},(0,a.kt)("code",null,"postgres.trickle"))," for data coming from a PostgreSQL database"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{target:"_blank",href:n(66470).Z},(0,a.kt)("code",null,"crononome.trickle"))," for events coming from the ",(0,a.kt)("inlineCode",{parentName:"li"},"crononome")," onramp at a regular interval of ",(0,a.kt)("inlineCode",{parentName:"li"},"5s"),".")),(0,a.kt)("h2",{id:"command-line-testing-during-logic-development"},"Command line testing during logic development"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ docker-compose up\n  ... lots of logs ...\n")),(0,a.kt)("p",null,"Open the ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:8081"},"pgweb")," to browse through received rows in\nTimescaleDB."),(0,a.kt)("h3",{id:"discussion"},"Discussion"))}m.isMDXComponent=!0},10267:function(e,t,n){t.Z=n.p+"assets/files/00_ramps-c5f0d574f0fc74dfa0a7f9fe360f49cc.yaml"},66470:function(e,t,n){t.Z=n.p+"assets/files/crononome-4a67da5b67f44d0defe99bb0630f8f31.trickle"},57003:function(e,t,n){t.Z=n.p+"assets/files/postgres-9317f3359d6ae14e610ea840f0633d9e.trickle"}}]);