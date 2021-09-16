"use strict";(self.webpackChunknew_tremor_website=self.webpackChunknew_tremor_website||[]).push([[6644],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},74778:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],s={},l={unversionedId:"recipes/otel_prometheus/README",id:"recipes/otel_prometheus/README",isDocsHomePage:!1,title:"CNCF OpenTelemetry Prometheus Interworking",description:"!! note",source:"@site/docs/recipes/43_otel_prometheus/README.md",sourceDirName:"recipes/43_otel_prometheus",slug:"/recipes/otel_prometheus/README",permalink:"/docs/next/recipes/otel_prometheus/README",editUrl:"https://github.com/tremor-rs/tremor-new-website/tree/main/docs/recipes/43_otel_prometheus/README.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CNCF OpenTelemetry Jaeger Interworking",permalink:"/docs/next/recipes/otel_jaeger/README"},next:{title:"CNCF OpenTelemetry Elastic APM Interworking",permalink:"/docs/next/recipes/otel_elastic_apm/README"}},p=[{value:"Environment",id:"environment",children:[]},{value:"Business Logic",id:"business-logic",children:[]},{value:"Command line testing during logic development",id:"command-line-testing-during-logic-development",children:[]},{value:"Docker",id:"docker",children:[]},{value:"Prometheus client",id:"prometheus-client",children:[]}],c={toc:p};function u(e){var t=e.components,s=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"!! note\nAll the application code here is available from the docs ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/tremor-rs/tremor-www-docs/tree/main/docs/workshop/examples/43_otel_prometheus"},"git repository"),"."),(0,a.kt)("p",null,"This example builds on the  passthrough CNCF OpenTelemetry\nconfiguration but configures Prometheus as a receiver and exporter in the\nOpenTelemetry Collector."),(0,a.kt)("p",null,"It shows how legacy observability frameworks such as Prometheus can be\ningested into OpenTelemetry based services directly, or via the\nOpenTelemetry collector into tremor for specialized processing."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Prometheus service and the Prometheus Push Gateway"),(0,a.kt)("li",{parentName:"ul"},"CNCF OpenTelemetry Collector service"),(0,a.kt)("li",{parentName:"ul"},"CNCF OpenTelemetry Onramp deployed into tremor"),(0,a.kt)("li",{parentName:"ul"},"Deployment configuration file")),(0,a.kt)("p",null,"External OpenTelemetry clients can use port ",(0,a.kt)("inlineCode",{parentName:"p"},"4316")," to send OpenTelemetry logs, traces and metrics\nthrough tremor. Tremor prints the json mapping to standard out and forwards the events to the\nOpenTelemetry collector."),(0,a.kt)("h2",{id:"environment"},"Environment"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{target:"_blank",href:n(14024).Z},"onramp")," we use is the ",(0,a.kt)("inlineCode",{parentName:"p"},"otel")," CNCF OpenTelemetry onramp listening on a non-standard CNCF OpenTelemetry port ",(0,a.kt)("inlineCode",{parentName:"p"},"4316"),", it receives protocol buffer messages over gRPC on this port. The log, metric and trace events received are converted to tremor's value system and passed through a passthrough pipeline to the CNCF OpenTelemetry sink. The sink will try to connect to a downstream CNCF OpenTelemetry endpoint. In this workshop we will use the well known OpenTelemetry port of ",(0,a.kt)("inlineCode",{parentName:"p"},"4317")," for our sink and run the standard OpenTelemetry collector on this port using its a ",(0,a.kt)("a",{target:"_blank",href:n(56312).Z},"collector configuration"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'onramp:\n  - id: otlp\n    type: otel # Use the OpenTelemetry gRPC listener source\n    codec: json # Json is the only supported value\n    config:\n      port: 4316 # The TCP port to listen on\n      host: "0.0.0.0" # The IP address to bind on ( all interfaces in this case )\n')),(0,a.kt)("p",null,"It connects to a passthrough pipeline. This pipeline forwards any received\nobservability events downstream unchanged."),(0,a.kt)("p",null,"We connect the passthrough output events into a standard output sink.\nThe ",(0,a.kt)("a",{target:"_blank",href:n(81352).Z},"binding")," expresses these relations and gives deployment connectivity graph."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"binding:\n  - id: example\n    links:\n      '/onramp/otlp/{instance}/out':\n       - '/pipeline/example/{instance}/in'\n      '/pipeline/example/{instance}/out':\n       - '/offramp/stdout/{instance}/in'\n")),(0,a.kt)("p",null,"Finally the ",(0,a.kt)("a",{target:"_blank",href:n(68594).Z},"mapping")," instanciates the binding with the given name and instance variable to activate the elements of the binding."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'mapping:\n  /binding/example/passthrough:\n    instance: "passthrough"\n')),(0,a.kt)("h2",{id:"business-logic"},"Business Logic"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-trickle"},"select event from in into out\n")),(0,a.kt)("h2",{id:"command-line-testing-during-logic-development"},"Command line testing during logic development"),(0,a.kt)("p",null,"Use any compliant OpenTelemetry instrumented application and configure the\nserver to our source on port ",(0,a.kt)("inlineCode",{parentName:"p"},"4316")," instead of the default ",(0,a.kt)("inlineCode",{parentName:"p"},"4317"),"."),(0,a.kt)("h2",{id:"docker"},"Docker"),(0,a.kt)("p",null,"For convenience, use the provided ",(0,a.kt)("a",{target:"_blank",href:n(36865).Z},"docker-compose.yaml")," to\nstart and stop tremor and the OpenTelemetry collector as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Start\n$ docker compose up\n\n# Stop\n$ docker compose down\n")),(0,a.kt)("h2",{id:"prometheus-client"},"Prometheus client"),(0,a.kt)("p",null,"We provide a prometheus client implemented in rust"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'use device_query::{DeviceState, Keycode};\nuse prometheus::{labels, register_counter};\nuse std::{error::Error, thread, time};\n\nfn main() -> Result<(), Box<dyn Error>> {\n    let ten_ms = time::Duration::from_millis(100);\n    let johnny_five = DeviceState::new();\n    let counter = register_counter!("iterations", "Number of badgers in snot green situations")?;\n    let mut done = false;\n\n    thread::sleep(time::Duration::from_secs(1)); // Delay at start in case user still has keys pressed\n    println!("Press any key to stop ...");\n\n    \'main: loop {\n        if done {\n            println!("Done");\n            break;\n        }\n\n        // Terminate if any input on stdin\n        let keymap = johnny_five.query_keymap();\n        for keycode in keymap {\n            match keycode {\n                Keycode::Right | Keycode::Left | Keycode::Up | Keycode::Down => (),\n                _any_other_key => {\n                    done = true;\n                    continue \'main;\n                }\n            }\n        }\n\n        let metric_families = prometheus::gather();\n        println!("Sending metrics: {}", counter.get());\n\n        prometheus::push_metrics(\n            "example_push",\n            labels! {"instance".to_owned() => "HAL-9000".to_owned(),},\n            "0.0.0.0:9091", // This refers to our prometheus push gateway in the docker-compose\n            metric_families,\n            None, // No authentication\n        )?;\n        counter.inc();\n\n        thread::sleep(ten_ms);\n    }\n\n    Ok(())\n}\n')),(0,a.kt)("p",null,"Build and run the rust prometheus client:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ cd prometheus-rust-client\n$ cargo build\n$ cargo run\n")),(0,a.kt)("p",null,"Hit any non-cursor key to stop the client from injecting spans ( 10 per second )."),(0,a.kt)("p",null,"Verify our metrics reached the Prometheus UI deployed in docker via pointing our browser to ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:9090")," by searching for metrics:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"screenshot.png",src:n(76863).Z})),(0,a.kt)("p",null,"Verify that the OpenTelemetry Collector and tremor have processed our trace spans.\nIn this configuration we use the OpenTelemetry Collector to forward to Prometheus and to\nforward to tremor."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"screenshot.png",src:n(71934).Z})))}u.isMDXComponent=!0},36865:function(e,t,n){t.Z=n.p+"assets/files/docker-compose-075f842bd0b81aa5c47933845803c364.yaml"},56312:function(e,t,n){t.Z=n.p+"assets/files/collector-5a53eb953573cd6bc89934c89e5d4f86.yaml"},14024:function(e,t,n){t.Z=n.p+"assets/files/00_ramps-d99bc9baaf87684119bc801da9f7d12a.yaml"},81352:function(e,t,n){t.Z=n.p+"assets/files/01_binding-2aa18844f0acf1b23539352449e0641d.yaml"},68594:function(e,t,n){t.Z=n.p+"assets/files/02_mapping-9c81a0870131ab67e86b0f001460a101.yaml"},71934:function(e,t,n){t.Z=n.p+"assets/images/docker-snap-115a88f9ace846ff2a913c7d61c82ce0.png"},76863:function(e,t,n){t.Z=n.p+"assets/images/prometheus-ui-c23d29f7477cc647300e5959be64fae3.png"}}]);