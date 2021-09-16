"use strict";(self.webpackChunknew_tremor_website=self.webpackChunknew_tremor_website||[]).push([[7064],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=s(n),d=r,h=c["".concat(p,".").concat(d)]||c[d]||u[d]||a;return n?i.createElement(h,o(o({ref:t},m),{},{components:n})):i.createElement(h,o({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},36221:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return p},toc:function(){return s},default:function(){return u}});var i=n(87462),r=n(63366),a=(n(67294),n(3905)),o=["components"],l={},p={unversionedId:"operations/monitoring",id:"version-0.11/operations/monitoring",isDocsHomePage:!1,title:"Monitoring",description:"Monitoring tremor is done using tremor itself. This has some interesting implications.",source:"@site/versioned_docs/version-0.11/operations/monitoring.md",sourceDirName:"operations",slug:"/operations/monitoring",permalink:"/docs/operations/monitoring",editUrl:"https://github.com/tremor-rs/tremor-new-website/tree/main/versioned_docs/version-0.11/operations/monitoring.md",version:"0.11",frontMatter:{},sidebar:"version-0.11/tutorialSidebar",previous:{title:"Linked Transports",permalink:"/docs/operations/linked-transports"},next:{title:"Codecs",permalink:"/docs/artefacts/codecs"}},s=[{value:"Pipeline metrics",id:"pipeline-metrics",children:[]},{value:"Ramp metrics",id:"ramp-metrics",children:[]},{value:"Operator level metrics",id:"operator-level-metrics",children:[]},{value:"Enriching",id:"enriching",children:[]},{value:"Example",id:"example",children:[]}],m={toc:s};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Monitoring tremor is done using tremor itself. This has some interesting implications."),(0,a.kt)("p",null,"Each onramp, pipeline and offramp emits metrics on its operations into a pipeline called ",(0,a.kt)("inlineCode",{parentName:"p"},"/pipeline/system::metrics/system"),". This allows to both write these messages to a destination system such as InfluxDB, as well as to a message queue such as Kafka."),(0,a.kt)("p",null,"Metrics are published to the ",(0,a.kt)("inlineCode",{parentName:"p"},"system::metrics")," pipeline every 10 second or if an event was received by the pipeline (whatever happened later)."),(0,a.kt)("p",null,"To enable monitoring, the ",(0,a.kt)("inlineCode",{parentName:"p"},"metrics_interval_s")," key must be specified as part of onramp, pipeline and offramp config (depending on which metrics you want to capture), followed by the amount of seconds that should pass between emits."),(0,a.kt)("p",null,"Metrics are formatted following the same structure as the ",(0,a.kt)("a",{parentName:"p",href:"/docs/artefacts/codecs#influx"},"Influx Codec"),"."),(0,a.kt)("h2",{id:"pipeline-metrics"},"Pipeline metrics"),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "measurement": "events",\n  "tags": {\n    "direction": "output",\n    "node": "in",\n    "pipeline": "tremor:///pipeline/main/01",\n    "port": "out"\n  },\n  "fields": { "count": 20 },\n  "timestamp": 1553077007898214000\n}\n')),(0,a.kt)("p",null,"In influx format:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-influx"},"events,port=out,direction=output,node=in,pipeline=tremor:///pipeline/main/01 count=20 1553077007898214000\n")),(0,a.kt)("p",null,"In this structure ",(0,a.kt)("inlineCode",{parentName:"p"},"measurement")," is always ",(0,a.kt)("inlineCode",{parentName:"p"},"events")," as that is what this is measuring. The number of events is always in the field ",(0,a.kt)("inlineCode",{parentName:"p"},"count")," as we are counting them."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"tags")," section explains where this measurement was taken:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"direction")," means if this event came into the node ",(0,a.kt)("inlineCode",{parentName:"li"},'"input"')," or came out of the node ",(0,a.kt)("inlineCode",{parentName:"li"},'"output"')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"node")," is the ",(0,a.kt)("inlineCode",{parentName:"li"},"id")," of the node in a given pipeline"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pipeline")," is the ",(0,a.kt)("inlineCode",{parentName:"li"},"id")," of the pipeline"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"port")," is the point the event was received or send from")),(0,a.kt)("p",null,"The example above measures all events that left the ",(0,a.kt)("inlineCode",{parentName:"p"},"in")," of pipeline ",(0,a.kt)("inlineCode",{parentName:"p"},"main"),"."),(0,a.kt)("p",null,"In addition to the general pipeline metrics, some operators do generate their own metrics, for details please check on the documentation for the operator in question."),(0,a.kt)("h2",{id:"ramp-metrics"},"Ramp metrics"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "measurement": "ramp_events",\n  "tags": {\n    "port": "out",\n    "ramp": "tremor:///offramp/main/01/in"\n  },\n  "fields": { "count": 42 },\n  "timestamp": 1576215344378248634\n}\n')),(0,a.kt)("p",null,"In influx format:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-influx"},"ramp_events,port=out,ramp=tremor:///offramp/main/01 count=42 1576215344378248634\n")),(0,a.kt)("p",null,"In this structure ",(0,a.kt)("inlineCode",{parentName:"p"},"measurement")," is always ",(0,a.kt)("inlineCode",{parentName:"p"},"ramp_events")," as that is what this is measuring. The number of events is always in the field ",(0,a.kt)("inlineCode",{parentName:"p"},"count")," as we are counting them."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"tags")," section explains where this measurement was taken:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ramp")," is the ",(0,a.kt)("inlineCode",{parentName:"li"},"id")," of the onramp/offramp"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"port")," is one of ",(0,a.kt)("inlineCode",{parentName:"li"},"in"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"out")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"error"))),(0,a.kt)("p",null,"The example above measures all events that were emitted out by the offramp ",(0,a.kt)("inlineCode",{parentName:"p"},"main"),"."),(0,a.kt)("p",null,"Notes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Preprocessor and codec level errors count as errors for onramp metrics."),(0,a.kt)("li",{parentName:"ul"},"For onramps, count for ",(0,a.kt)("inlineCode",{parentName:"li"},"in")," port is always zero since an event in tremor is something concrete only after the initial onramp processing. Furthermore, for stream-based onramps like tcp, the idea of counting ",(0,a.kt)("inlineCode",{parentName:"li"},"in")," events does not make sense."),(0,a.kt)("li",{parentName:"ul"},"If your pipeline is using the ",(0,a.kt)("a",{parentName:"li",href:"/docs/tremor-query/operators#genericbatch"},"batch operator")," and offramp is receiving events from it, no of events tracked at offramp is going to be dictated by the batching config.")),(0,a.kt)("h2",{id:"operator-level-metrics"},"Operator level metrics"),(0,a.kt)("p",null,"In addition to the metrics provided by the pipeline itself, some operators can generate additional metrics."),(0,a.kt)("p",null,"The details are documented on a per operator level. Currently the following operators provide custom metrics:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/tremor-query/operators#grouperbucket"},"grouper::bucket"))),(0,a.kt)("h2",{id:"enriching"},"Enriching"),(0,a.kt)("p",null,"The metrics event holds the minimum required data to identify the event inside the instance. This has the purpose of allowing enrichment using tremors existing facilities. An example of enriching the metrics with the hostname would be the configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'pipeline:\n  - id: enrich\n    interface:\n      inputs:\n        - in\n      outputs:\n        - out\n    nodes:\n      - id: enrich\n        op: runtime::tremor\n        config:\n          script: |\n            let event.tags.host = system::hostname();\n            event;\n    links:\n      in: [enrich]\n      enrich: [out]\n\nbinding:\n  - id: enrich\n    links:\n      "/pipeline/system::metrics/system/out": ["/pipeline/enrich/system/in"]\n      "/pipeline/enrich/system/out": ["/offramp/system::stdout/system/in"]\n')),(0,a.kt)("p",null,"This will take the metrics from the metrics pipeline and run a tremor script to add the ",(0,a.kt)("inlineCode",{parentName:"p"},"host")," tag to each event."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"Lets walk through a example to see how where and why metrics are generated. Lets configure the following configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'onramp:\n  - id: kafka-in-stores\n    type: kafka\n    codec: json\n    config:\n      # abbirivated\nofframp:\n  - id: elastic-out-stores\n    type: elastic\n    config:\n      # abbirivated\n\npipeline:\n  - id: main\n    metrics_interval_s: 10\n    interface:\n      inputs:\n        - in\n      outputs:\n        - out\n    nodes:\n      - id: runtime\n        op: runtime::tremor\n        config:\n          script: |\n            export class, rate, index, doc_type;\n            _ { $index := string::format("{}_tremor", index_type); $doc_type := "_doc"; }\n            logger_name="log_info_level" { $class := "logger_info"; $rate := 1875; return; }\n            logger_name { $class := "logger"; $rate := 250; return; }\n            index_type { $class := "default"; $rate := 25; return; }\n      - id: bucket\n        op: grouper::bucket\n      - id: bp\n        op: generic::backpressure\n        config:\n          timeout: 100\n      - id: batch\n        op: generic::batch\n        config:\n          count: 20\n    links:\n      in: [runtime]\n      runtime: [bucket]\n      bucket: [bp]\n      bp: [batch]\n      batch: [out]\n\nbinding:\n  - id: stores-test\n    links:\n      "/onramp/kafka-in-stores/{instance}/out": ["/pipeline/main/{instance}/in"]\n      "/pipeline/main/{instance}/out":\n        ["/offramp/elastic-out-stores/{instance}/in"]\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"+---------+                                        +---------+\n|  Kafka  |                                        | elastic |\n+---------+                                        +---------+\n     |                                                  ^\n     v                                                  |\n+---------+                                        +---------+\n|   in    |                                        |   out   |\n+----a----+                                        +----l----+\n     |                                                  ^\n     v                                                  |\n+----b----+      +---------+      +---------+      +----k----+\n| runtime c-----\x3ed bucket  f-----\x3eg   bp    i-----\x3ej  batch  |\n+---------+      +----e----+      +----h----+      +---------+\n                      |                |\n                      |                |\n                      v                v\n")),(0,a.kt)("p",null,"Tremor instruments this pipeline on the points ",(0,a.kt)("inlineCode",{parentName:"p"},"a")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"l"),". As follows (timestamp abbreviated by ",(0,a.kt)("inlineCode",{parentName:"p"},"\u2026"),", assuming ",(0,a.kt)("inlineCode",{parentName:"p"},"40")," events were passed in):"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"a")," as ",(0,a.kt)("inlineCode",{parentName:"li"},"events,node=in,port=out,direction=output,pipeline=tremor:///pipeline/main/01 count=40 \u2026")," counting the events entering the pipeline"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"b")," as ",(0,a.kt)("inlineCode",{parentName:"li"},"events,node=runtime,port=in,direction=input,pipeline=tremor:///pipeline/main/01 count=40 \u2026")," as the events that make it to the runtime (should be equal to ",(0,a.kt)("inlineCode",{parentName:"li"},"a"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"c")," as ",(0,a.kt)("inlineCode",{parentName:"li"},"events,node=runtime,port=out,direction=output,pipeline=tremor:///pipeline/main/01 count=40 \u2026")," as the events that make it out of the runtime (should be equal to ",(0,a.kt)("inlineCode",{parentName:"li"},"b"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"d")," as ",(0,a.kt)("inlineCode",{parentName:"li"},"events,node=bucket,port=in,direction=input,pipeline=tremor:///pipeline/main/01 count=40 \u2026")," as the events that make it to the bucketer (should be equal to ",(0,a.kt)("inlineCode",{parentName:"li"},"c"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"e")," as ",(0,a.kt)("inlineCode",{parentName:"li"},"events,node=bucket,port=overflow,direction=output,pipeline=tremor:///pipeline/main/01 count=10 \u2026")," as the events that the overflowed from the bucketer (aka they exceeded the limits in ",(0,a.kt)("inlineCode",{parentName:"li"},"$rate"),") - we assume 10 of the 40 messages hit this criteria"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"f")," as ",(0,a.kt)("inlineCode",{parentName:"li"},"events,node=bucket,port=out,direction=output,pipeline=tremor:///pipeline/main/01 count=30 \u2026")," as the events that make it out of the bucketer (we assume 30 here since in ",(0,a.kt)("inlineCode",{parentName:"li"},"e")," we had 10 events overflow)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"d")," as ",(0,a.kt)("inlineCode",{parentName:"li"},"events,node=bp,port=in,direction=input,pipeline=tremor:///pipeline/main/01 count=30 \u2026")," as the events that make it to the back-pressure (",(0,a.kt)("inlineCode",{parentName:"li"},"bp"),") step (should be equal to ",(0,a.kt)("inlineCode",{parentName:"li"},"f"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"h")," as ",(0,a.kt)("inlineCode",{parentName:"li"},"events,node=bp,port=overflow,direction=output,pipeline=tremor:///pipeline/main/01 count=5 \u2026")," as the events that the overflowed from the back-pressure step (aka the offramp asked is to back off a bit) - we assume 5 events fell into the back-pressure period."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"i")," as ",(0,a.kt)("inlineCode",{parentName:"li"},"events,node=bp,port=out,direction=output,pipeline=tremor:///pipeline/main/01 count=25 \u2026")," as the events that make it out of the back pressure step (we assume 25 here since in ",(0,a.kt)("inlineCode",{parentName:"li"},"h")," we had 5 events overflow)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"j")," as ",(0,a.kt)("inlineCode",{parentName:"li"},"events,node=batch,port=in,direction=input,pipeline=tremor:///pipeline/main/01 count=25 \u2026")," as the events that make it to the batch step (should be equal to ",(0,a.kt)("inlineCode",{parentName:"li"},"i"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"k")," as ",(0,a.kt)("inlineCode",{parentName:"li"},"events,node=batch,port=out,direction=output,pipeline=tremor:///pipeline/main/01 count=1 \u2026")," this is a tricky one, we got 25 events into this, however we batch by 20 events, so the first 20 events that come in get send out as a batch so we have ",(0,a.kt)("inlineCode",{parentName:"li"},"1")," as a count - it should be noted that at the time of this snapshot ",(0,a.kt)("inlineCode",{parentName:"li"},"5")," more events are currently held by the batch step but not send out. If we had a batch size of 30 defined we would see no output events here."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"b")," as ",(0,a.kt)("inlineCode",{parentName:"li"},"events,node=out,port=in,direction=input,pipeline=tremor:///pipeline/main/01 count=1 \u2026")," the events that make it to the output to be written, since we wrote only a single batch we get a count of ",(0,a.kt)("inlineCode",{parentName:"li"},"1")," here as in ",(0,a.kt)("inlineCode",{parentName:"li"},"k"))))}u.isMDXComponent=!0}}]);