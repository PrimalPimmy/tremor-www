"use strict";(self.webpackChunknew_tremor_website=self.webpackChunknew_tremor_website||[]).push([[642],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},62403:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},metadata:function(){return c},toc:function(){return l},default:function(){return u}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],s={},c={unversionedId:"tremor-script/extractors/cidr",id:"tremor-script/extractors/cidr",isDocsHomePage:!1,title:"CIDR",description:"Classless Inter-Domain Routing ( CIDR ) is a method of allocating IP addresses and IP routing paths. CIDR notation is a compact representation of an IP address and its associated routing prefix.",source:"@site/docs/tremor-script/extractors/cidr.md",sourceDirName:"tremor-script/extractors",slug:"/tremor-script/extractors/cidr",permalink:"/docs/next/tremor-script/extractors/cidr",editUrl:"https://github.com/tremor-rs/tremor-new-website/tree/main/docs/tremor-script/extractors/cidr.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Base64",permalink:"/docs/next/tremor-script/extractors/base64"},next:{title:"Datetime",permalink:"/docs/next/tremor-script/extractors/datetime"}},l=[{value:"Predicate",id:"predicate",children:[]},{value:"Extraction",id:"extraction",children:[]},{value:"Examples",id:"examples",children:[]}],p={toc:l};function u(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Classless Inter-Domain Routing ( CIDR ) is a method of allocating IP addresses and IP routing paths. CIDR notation is a compact representation of an IP address and its associated routing prefix."),(0,i.kt)("p",null,"The notation is constructed from a possibly incomplete IP address, followed by a slash (",(0,i.kt)("inlineCode",{parentName:"p"},"/"),") character, and then a decimal number."),(0,i.kt)("p",null,"The number is the count of leading ",(0,i.kt)("em",{parentName:"p"},"1")," bits in the subnet mask demarcating routing boundaries for the range of addresses being routed over."),(0,i.kt)("p",null,"Larger values here indicate smaller networks. The maximum size of the network is given by the number of addresses that are possible with the remaining, least-significant bits below the prefix."),(0,i.kt)("h2",{id:"predicate"},"Predicate"),(0,i.kt)("p",null,"When used as a predicate test with ",(0,i.kt)("inlineCode",{parentName:"p"},"~"),", and no arguments are provided, then any valid IP address will pass the predicate test."),(0,i.kt)("p",null,"When used as a predicate test with ",(0,i.kt)("inlineCode",{parentName:"p"},"~"),", with one or many command delimited CIDR forms, then any valid IP address must be within the specified set of CIDR patterns for the predicate to pass."),(0,i.kt)("p",null,"Pattern forms may be based on IPv4 or IPv6."),(0,i.kt)("h2",{id:"extraction"},"Extraction"),(0,i.kt)("p",null,"When used as an extraction operation with ",(0,i.kt)("inlineCode",{parentName:"p"},"~=")," the predicate test must pass for successful extraction.  If the predicate test succeeds, then the the prefix and network mask for each CIDR is provided as a key/value record with the original pattern form as key."),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tremor"},'match { "meta": "192.168.1.1"} of\n  case rp = %{ meta ~= cidr|| } => rp\n  default => "no match"\nend;\n\n')),(0,i.kt)("p",null,"This will output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'"meta":{\n  "prefix":[ 192, 168, 1, 1 ],\n  "mask": [ 255, 255, 255, 255 ]\n }\n')),(0,i.kt)("p",null,"Cidr also supports filtering the IP if it is within the CIDR specified. This errors out if the IP Address specified isn't in the range of the CIDR. Otherwise, it will return the prefix & mask as above."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tremor"},'match { "meta": "10.22.0.254" } of\n  case rp = %{ meta ~= cidr|10.22.0.0/24| } => rp\n  default => "no match"\nend;\n')),(0,i.kt)("p",null,"This will output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'"meta":{\n  "prefix":[ 10, 22, 0, 254 ],\n  "mask": [ 255, 255, 255, 255 ]\n }\n')),(0,i.kt)("p",null,"The extractor also supports multiple comma-separated ranges. This will return the prefix and mask if it belongs to any one of the CIDRs specified:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tremor"},'match { "meta": "10.22.0.254" } of\n  case rp = %{ meta ~= cidr|10.22.0.0/24, 10.21.1.0/24| } => rp\n  default => "no match"\nend;\n')),(0,i.kt)("p",null,"This will output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'"meta":{\n  "prefix":[ 10, 22, 0, 254 ],\n  "mask": [ 255, 255, 255, 255 ]\n }\n')),(0,i.kt)("p",null,"In case it doesn't belong to the CIDR:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tremor"},'match { "meta": "19.22.0.254" } of\n  case rp = %{ meta ~= cidr|10.22.0.0/24, 10.21.1.0/24| } => rp\n  default => "no match"\nend;\n## Output: "no match"\n')))}u.isMDXComponent=!0}}]);