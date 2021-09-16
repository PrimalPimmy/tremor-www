"use strict";(self.webpackChunknew_tremor_website=self.webpackChunknew_tremor_website||[]).push([[3754],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,g=u["".concat(l,".").concat(m)]||u[m]||c[m]||i;return n?a.createElement(g,o(o({ref:t},d),{},{components:n})):a.createElement(g,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},50776:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return c}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],s={},l={unversionedId:"recipes/grafana/README",id:"recipes/grafana/README",isDocsHomePage:!1,title:"Transform",description:"This example demonstrates using Tremor as a proxy and aggregator for InfluxDB data. As such it coveres three topics. Ingesting and decoding influx data is the first part. Then grouping this data and aggregating over it.",source:"@site/docs/recipes/13_grafana/README.md",sourceDirName:"recipes/13_grafana",slug:"/recipes/grafana/README",permalink:"/docs/next/recipes/grafana/README",editUrl:"https://github.com/tremor-rs/tremor-new-website/tree/main/docs/recipes/13_grafana/README.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Transform",permalink:"/docs/next/recipes/postgres_timescaledb/README"},next:{title:"syslog udp",permalink:"/docs/next/recipes/syslog_udp/README"}},p=[{value:"Environment",id:"environment",children:[]},{value:"Business Logic",id:"business-logic",children:[{value:"Grouping",id:"grouping",children:[]},{value:"Aggregation",id:"aggregation",children:[]},{value:"Normalisation to Influx Line Protocol",id:"normalisation-to-influx-line-protocol",children:[]}]},{value:"Command line testing during logic development",id:"command-line-testing-during-logic-development",children:[]},{value:"Visualization with Grafana",id:"visualization-with-grafana",children:[{value:"Discussion",id:"discussion",children:[]}]}],d={toc:p};function c(e){var t=e.components,s=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This example demonstrates using Tremor as a proxy and aggregator for InfluxDB data. As such it coveres three topics. Ingesting and decoding influx data is the first part. Then grouping this data and aggregating over it."),(0,i.kt)("p",null,"The demo starts up a ",(0,i.kt)("a",{parentName:"p",href:"http://localhost:8888"},"local Chronograf"),". This allows browsing the data stored in influxdb. When first connecting you'll be asked to specify the database to use, please change the ","*","*","Connection URL","*","*"," to ",(0,i.kt)("inlineCode",{parentName:"p"},"http://influxdb:8086"),". For all other questions select ",(0,i.kt)("inlineCode",{parentName:"p"},"Skip")," as we do not need to configure those."),(0,i.kt)("p",null,"Once in Chronograf, look at the ",(0,i.kt)("inlineCode",{parentName:"p"},"tremor")," database to see the metrics and rollups. Since rollups do roll up over time you might have to wait a few minutes untill aggregated data propagates."),(0,i.kt)("p",null,"Depending on the performance of the system the demo is run on metrics may be shed due to tremors over load protection."),(0,i.kt)("h2",{id:"environment"},"Environment"),(0,i.kt)("p",null,"In the ",(0,i.kt)("a",{target:"_blank",href:n(26919).Z},(0,i.kt)("code",null,"example.trickle"))," we process the data in multiple steps, since this is somewhat more complex then the prior examples we'll discuss each step in the Business Logic section."),(0,i.kt)("h2",{id:"business-logic"},"Business Logic"),(0,i.kt)("h3",{id:"grouping"},"Grouping"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-trickle"},'select {\n    "measurement": event.measurement,\n    "tags": event.tags,\n    "field": group[2],\n    "value": event.fields[group[2]],\n    "timestamp": event.timestamp,\n}\nfrom in\ngroup by set(event.measurement, event.tags, each(record::keys(event.fields)))\ninto aggregate\nhaving type::is_number(event.value);\n')),(0,i.kt)("p",null,"This step groups the data for aggregation. This is required since the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.influxdata.com/influxdb/v1.7/write_protocols/line_protocol_tutorial/"},"Influx Line protocol")," allows for multiple values within one message. The grouping step ensures that we do not aggregate ",(0,i.kt)("inlineCode",{parentName:"p"},"cpu_idle")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"cpu_user")," into the same value despite them being in the same result."),(0,i.kt)("p",null,"In other words we normalise an event like this"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-influx"},'measurement tag1=value1,tag2=value2 field1=42,field2="snot",field3=0.2 123587512345513\n')),(0,i.kt)("p",null,"into the three distinct series it represents, namely:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-influx"},'measurement tag1=value1,tag2=value2 field1=42 123587512345513\nmeasurement tag1=value1,tag2=value2 field2="snot" 123587512345513\nmeasurement tag1=value1,tag2=value2 field3=0.2 123587512345513\n')),(0,i.kt)("p",null,"The second part that happens in this query is removing non numeric values from our aggregated series since they are not able to be aggregated."),(0,i.kt)("h3",{id:"aggregation"},"Aggregation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-trickle"},'select\n{\n    "measurement": event.measurement,\n    "tags": patch event.tags of insert "window" => window end,\n    "stats": aggr::stats::hdr(event.value, [ "0.5", "0.9", "0.99", "0.999" ]),\n    "field": event.field,\n    "timestamp": aggr::win::first(event.timestamp), # we can\'t use min since it\'s a float\n}\nfrom aggregate[`10secs`, `1min`, ]\ngroup by set(event.measurement, event.tags, event.field)\ninto normalize;\n')),(0,i.kt)("p",null,"In this section we aggregate the different serieses we created in the previous section."),(0,i.kt)("p",null,"Most notably are the ",(0,i.kt)("inlineCode",{parentName:"p"},"aggr::stats::hdr")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"aggr::win::first")," functions which do the aggregation. ",(0,i.kt)("inlineCode",{parentName:"p"},"aggr::stats::hdr")," uses a optimized ",(0,i.kt)("a",{parentName:"p",href:"http://hdrhistogram.org/"},"HDR Histogram")," algorithm to generate the values requested of it. ",(0,i.kt)("inlineCode",{parentName:"p"},"aggr::win::first")," gives the timestamp of the first event in the window."),(0,i.kt)("h3",{id:"normalisation-to-influx-line-protocol"},"Normalisation to Influx Line Protocol"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tremor"},'select {\n  "measurement":  event.measurement,\n  "tags":  event.tags,\n  "fields":  {\n    "count_#{event.field}":  event.stats.count,\n    "min_#{event.field}":  event.stats.min,\n    "max_#{event.field}":  event.stats.max,\n    "mean_#{event.field}":  event.stats.mean,\n    "stdev_#{event.field}":  event.stats.stdev,\n    "var_#{event.field}":  event.stats.var,\n    "p50_#{event.field}":  event.stats.percentiles["0.5"],\n    "p90_#{event.field}":  event.stats.percentiles["0.9"],\n    "p99_#{event.field}":  event.stats.percentiles["0.99"],\n    "p99.9_#{event.field}":  event.stats.percentiles["0.999"]\n  },\n  "timestamp": event.timestamp,\n}\nfrom normalize\ninto batch;\n')),(0,i.kt)("p",null,"The last part normalises the data to a format that can be encoded into influx line protocol. And name the fields accordingly. This uses string interpolation for the recortd fields and simle value access for their values."),(0,i.kt)("h2",{id:"command-line-testing-during-logic-development"},"Command line testing during logic development"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ docker-compose up\n  ... lots of logs ...\n")),(0,i.kt)("p",null,"Open the ",(0,i.kt)("a",{parentName:"p",href:"http://localhost:8888"},"Chronograf")," and connect the database."),(0,i.kt)("h2",{id:"visualization-with-grafana"},"Visualization with Grafana"),(0,i.kt)("p",null,"The docker compose file deploys a ",(0,i.kt)("a",{parentName:"p",href:"http://localhost:3000"},"grafana image")," that can be used with the\ninflux data source configured to make a server connection to ",(0,i.kt)("inlineCode",{parentName:"p"},"http://influxdb:8086"),"\nand explored via the logs or metrics explorer modes."),(0,i.kt)("h3",{id:"discussion"},"Discussion"),(0,i.kt)("p",null,"It is noteworthy that in the aggregation context only ",(0,i.kt)("inlineCode",{parentName:"p"},"aggr::stats::hdr")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"aggr::win::first")," are being evaluated for events, resulting record and the associated logic is only ever evaluated on emit."),(0,i.kt)("p",null,"We are using ",(0,i.kt)("inlineCode",{parentName:"p"},"having")," in the goruping step, however this could also be done with a ",(0,i.kt)("inlineCode",{parentName:"p"},"where")," clause on the aggregation step. In this example we choose ",(0,i.kt)("inlineCode",{parentName:"p"},"having")," over were as it is worth discarding events as early as possible. If the requirement were to handle non numeric fields in a different manner routing the output of the grouping step to two different select statements we would have used ",(0,i.kt)("inlineCode",{parentName:"p"},"where")," instead."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Using ",(0,i.kt)("inlineCode",{parentName:"p"},"aggr::win::first")," over ",(0,i.kt)("inlineCode",{parentName:"p"},"aggr::stats::min")," is a debatable choice as we use the timestamp of the first event not the minimal timestamp. Inside of tremor we do not re-order events so those two would result in the same result with ",(0,i.kt)("inlineCode",{parentName:"p"},"aggr::win::first")," being cheaper to run. In addition stats functions are currently implemented to return floating point numbers so ",(0,i.kt)("inlineCode",{parentName:"p"},"aggr::stats::min")," could lead incorrect timestamps we'd rather avoid."))))}c.isMDXComponent=!0},26919:function(e,t,n){t.Z=n.p+"assets/files/example-b8bc38b297d5d23075a7f02a3c85dbee.trickle"}}]);