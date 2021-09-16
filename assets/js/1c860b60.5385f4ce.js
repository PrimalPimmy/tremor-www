"use strict";(self.webpackChunknew_tremor_website=self.webpackChunknew_tremor_website||[]).push([[8473],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=l(t),m=i,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return t?r.createElement(h,s(s({ref:n},c),{},{components:t})):r.createElement(h,s({ref:n},c))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,s=new Array(o);s[0]=u;var a={};for(var p in n)hasOwnProperty.call(n,p)&&(a[p]=n[p]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var l=2;l<o;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},10072:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return a},metadata:function(){return p},toc:function(){return l},default:function(){return d}});var r=t(87462),i=t(63366),o=(t(67294),t(3905)),s=["components"],a={},p={unversionedId:"recipes/syslog_udp_dns/README",id:"version-0.11/recipes/syslog_udp_dns/README",isDocsHomePage:!1,title:"syslog udp dns",description:"This workshop is the samne as the syslogupd workship with the added component of enriching the syslog message we receive with a DNS lookup.",source:"@site/versioned_docs/version-0.11/recipes/15_syslog_udp_dns/README.md",sourceDirName:"recipes/15_syslog_udp_dns",slug:"/recipes/syslog_udp_dns/README",permalink:"/docs/recipes/syslog_udp_dns/README",editUrl:"https://github.com/tremor-rs/tremor-new-website/tree/main/versioned_docs/version-0.11/recipes/15_syslog_udp_dns/README.md",version:"0.11",frontMatter:{},sidebar:"version-0.11/tutorialSidebar",previous:{title:"syslog udp",permalink:"/docs/recipes/syslog_udp/README"},next:{title:"Transient Write-Ahead Log",permalink:"/docs/recipes/transient_gd/README"}},l=[{value:"Setup",id:"setup",children:[]},{value:"Environment",id:"environment",children:[]},{value:"Business Logic",id:"business-logic",children:[]}],c={toc:l};function d(e){var n=e.components,a=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This workshop is the samne as the ",(0,o.kt)("a",{parentName:"p",href:"../14_syslog_udp/"},"syslog_upd")," workship with the added component of enriching the syslog message we receive with a DNS lookup."),(0,o.kt)("p",null,"We will only discuss the newly introduced components, for the rest pleas refer to the ",(0,o.kt)("a",{parentName:"p",href:"../14_syslog_udp/"},"syslog_upd")," workshop."),(0,o.kt)("h2",{id:"setup"},"Setup"),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"All the code here is available in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tremor-rs/tremor-www-docs/tree/main/docs/workshop/examples/14_syslog_udp"},"git repository")," as well and can be run with ",(0,o.kt)("inlineCode",{parentName:"p"},"docker compose up"),"."))),(0,o.kt)("h2",{id:"environment"},"Environment"),(0,o.kt)("p",null,"We get a new ",(0,o.kt)("a",{target:"_blank",href:t(48983).Z},"sink"),", the ",(0,o.kt)("inlineCode",{parentName:"p"},"dns")," sink. This is what tremor calls a ",(0,o.kt)("inlineCode",{parentName:"p"},"linked transport"),", aka a ",(0,o.kt)("inlineCode",{parentName:"p"},"sink")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"source")," that can both receive and send messages."),(0,o.kt)("p",null,"In the case of the ",(0,o.kt)("inlineCode",{parentName:"p"},"dns")," sink it receives lookup requests and sends the replies."),(0,o.kt)("p",null,"This changes the ",(0,o.kt)("a",{target:"_blank",href:t(24209).Z},"binding")," the following way:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"metronome -> producer -> syslog-udp-out\n\nsyslog-udp-in -> dns -> dns\n\ndns -> consumer -> stdout-output\n")),(0,o.kt)("h2",{id:"business-logic"},"Business Logic"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"producer")," pipeline stays unchanged however we add a new ",(0,o.kt)("inlineCode",{parentName:"p"},"dns")," pipeline and the ",(0,o.kt)("inlineCode",{parentName:"p"},"consumer")," piepline now includes some logic."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"dns")," pipeline does two things. First it moves the event itself into the ",(0,o.kt)("inlineCode",{parentName:"p"},"$correlation")," metadata. Linked transports will preserve this metadata key over requests allowing to correlate the output event with the input request. Second it changes the event into a lookup of the ",(0,o.kt)("inlineCode",{parentName:"p"},"A")," record (ip address) for the hostname. Finally we do the wiering with select statments."),(0,o.kt)("p",null,":::warn\nStoring data in ",(0,o.kt)("inlineCode",{parentName:"p"},"$correlation")," will mean this data has to be kept in memory until the event is processed, depending on throughput and pending requests this can be a significant memory cost.\n:::"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-trickle"},'# dns.trickle\ndefine script dns\nscript\n let $correlation = event;\n {\n  "lookup": $correlation.hostname,\n  "type": "A"\n }\nend;\n\ncreate script dns;\n\nselect event from in into dns;\nselect event from dns into out;\n')),(0,o.kt)("p",null,"In addition the ",(0,o.kt)("inlineCode",{parentName:"p"},"consumer")," pipeline got slightly more complicated. We use ",(0,o.kt)("inlineCode",{parentName:"p"},"merge")," to replace the lookup response from the ",(0,o.kt)("inlineCode",{parentName:"p"},"dns")," sink with it's correlation (the orriginal event) and merge merge it by inserting the IP we looked up into the event. In result we now have the original event with the added ",(0,o.kt)("inlineCode",{parentName:"p"},"ip")," field containing the IP correlating to the hostname."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-trickle"},'# consumer.trickle\nselect merge $correlation of {"ip": event[0].A} end from in into out\n')))}d.isMDXComponent=!0},48983:function(e,n,t){n.Z=t.p+"assets/files/00_ramps-3aff56264bc3e23d9b0ea73cc601f6a0.yaml"},24209:function(e,n,t){n.Z=t.p+"assets/files/01_binding-80164180a5c99e2f5bd7a319de9dbad2.yaml"}}]);