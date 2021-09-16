"use strict";(self.webpackChunknew_tremor_website=self.webpackChunknew_tremor_website||[]).push([[9064],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return p}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(t),p=o,f=m["".concat(l,".").concat(p)]||m[p]||d[p]||i;return t?r.createElement(f,a(a({ref:n},u),{},{components:t})):r.createElement(f,a({ref:n},u))}));function p(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},20218:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var r=t(87462),o=t(63366),i=(t(67294),t(3905)),a=["components"],s={},l={unversionedId:"recipes/roundrobin/README",id:"version-0.11/recipes/roundrobin/README",isDocsHomePage:!1,title:"Round Robin",description:"The roundrobin distribution demo builds from the best-effort transient guaranteed",source:"@site/versioned_docs/version-0.11/recipes/22_roundrobin/README.md",sourceDirName:"recipes/22_roundrobin",slug:"/recipes/roundrobin/README",permalink:"/docs/recipes/roundrobin/README",editUrl:"https://github.com/tremor-rs/tremor-new-website/tree/main/versioned_docs/version-0.11/recipes/22_roundrobin/README.md",version:"0.11",frontMatter:{},sidebar:"version-0.11/tutorialSidebar",previous:{title:"Persistent Write-Ahead Log",permalink:"/docs/recipes/persistent_gd/README"},next:{title:"Kafka delivery guarantees",permalink:"/docs/recipes/kafka_gd/README"}},c=[{value:"Environment",id:"environment",children:[]},{value:"Insights",id:"insights",children:[]}],u={toc:c};function d(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The roundrobin distribution demo builds from the best-effort transient guaranteed\ndelivery demo and adds round-robin load balancing to a fixed number of downstream\nconsumers."),(0,i.kt)("p",null,"In this configuration we build a transient in-memory WAL with round-robin load-balancing\ndispatch to three downstream distribution endpoints."),(0,i.kt)("h2",{id:"environment"},"Environment"),(0,i.kt)("p",null,"We configure a metronome as a source of data."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"# File: etc/tremor/config/metronome.yaml\nonramp:\n  - id: metronome\n    type: metronome\n    config:\n      interval: 1000 # Every second\n")),(0,i.kt)("p",null,"We configure a straight forward passthrough query to distribute\nthe data to connected downstream sinks."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-trickle"},'use tremor::system;\n\ndefine qos::wal operator in_memory_wal with\n  read_count = 20,\n  max_elements = 1000, # Capacity limit of 1000 stored events\n  max_bytes = 10485760 # Capacity limit of 1MB of events\nend;\n\ndefine qos::roundrobin operator roundrobin\nwith\n  outputs = [  "ws0", "ws1", "ws2" ]\nend;\n\n# create operator in_memory_wal;\ncreate operator roundrobin;\n\nselect merge event of\n  { "hostname" : system::hostname() }\nend\nfrom in into in_memory_wal;\n\nselect event from in_memory_wal into roundrobin;\n\nselect event from roundrobin/ws0 into out/ws0;\nselect event from roundrobin/ws1 into out/ws1;\nselect event from roundrobin/ws2 into out/ws2;\n')),(0,i.kt)("p",null,"We then distribute the metronome events downstream to three\ndownstream websocket servers and round robin load balance\nacross them"),(0,i.kt)("p",null,"Server 1, in first shell"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ websocat -s 8080\nListening on ws://127.0.0.1:8080/\n")),(0,i.kt)("p",null,"Server 2, in second shell"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ websocat -s 8081\nListening on ws://127.0.0.1:8081/\n")),(0,i.kt)("p",null,"Server 3, in third shell"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ websocat -s 8082\nListening on ws://127.0.0.1:8082/\n")),(0,i.kt)("p",null,"We configure the sink/offramp instances as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"offramp:\n  - id: ws0\n    type: ws\n    config:\n      url: ws://localhost:8080/\n  - id: ws1\n    type: ws\n    config:\n      url: ws://localhost:8081/\n  - id: ws2\n    type: ws\n    config:\n      url: ws://localhost:8082/\n")),(0,i.kt)("p",null,"Finally, we interconnect the source, sink and pipeline logic into\nan active flow:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'binding:\n  - id: default\n    links:\n      "/onramp/metronome/{instance}/out": ["/pipeline/roundrobin/{instance}/in"]\n      "/pipeline/roundrobin/{instance}/ws0": [ "/offramp/ws0/{instance}/in"]\n      "/pipeline/roundrobin/{instance}/ws1": [ "/offramp/ws1/{instance}/in"]\n      "/pipeline/roundrobin/{instance}/ws2": [ "/offramp/ws2/{instance}/in"]\n\nmapping:\n  /binding/default/01:\n    instance: "01"\n')),(0,i.kt)("p",null,"Running the example via the tremor client as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ tremor server run -f etc/tremor/config/*\n")),(0,i.kt)("h2",{id:"insights"},"Insights"),(0,i.kt)("p",null,"If the tremor process restarts we sequence from the beginning."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'$ websocat -s 8080\nListening on ws://127.0.0.1:8080/\n{"onramp":"metronome","id":0,"hostname":"ALT01827",  "ingest_ns":1600689100122526000}\n{"onramp":"metronome","id":3,"hostname":"ALT01827","ingest_ns":1600689101122912000}\n{"onramp":"metronome","id":6,"hostname":"ALT01827", "ingest_ns":1600689102124688000}\n...\n')),(0,i.kt)("p",null,"Otherwise, we should see sequences distribute across our downstream\nround-robin distribution set"),(0,i.kt)("p",null,"If we lose a downstream instance we load-balance across the remainder"),(0,i.kt)("p",null,"If we lose all downstream instances, we buffer up to our rentention limit of 1000 events or 1MB of event data."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Notice that we recover ",(0,i.kt)("strong",{parentName:"p"},"most")," but now all of the data. As the downstream websocket connection is not a guaranteed delivery connection the recovery and protection against data loss is best effort in this case"))),(0,i.kt)("p",null,"In short, the transient in memory wal can assist with partial recovery and\nwill actively reduce data loss to within the configured retention but it is\nnot lossless. We can also use redundant downstream distribution endpoints to\nfurther insulate against catastrophic unrecoverable errors by adding the round\nrobin dispatch strategy and configuring multiple downstream endpoints."))}d.isMDXComponent=!0}}]);