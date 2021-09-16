"use strict";(self.webpackChunknew_tremor_website=self.webpackChunknew_tremor_website||[]).push([[3787],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),h=c(n),m=o,d=h["".concat(l,".").concat(m)]||h[m]||p[m]||s;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,i=new Array(s);i[0]=h;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var c=2;c<s;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},25921:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var r=n(87462),o=n(63366),s=(n(67294),n(3905)),i=["components"],a={},l={unversionedId:"tremor-script/stdlib/tremor/chash",id:"version-0.11/tremor-script/stdlib/tremor/chash",isDocsHomePage:!1,title:"chash",description:"The chash module contains functions for consistent hashing of values.",source:"@site/versioned_docs/version-0.11/tremor-script/stdlib/tremor/chash.md",sourceDirName:"tremor-script/stdlib/tremor",slug:"/tremor-script/stdlib/tremor/chash",permalink:"/docs/tremor-script/stdlib/tremor/chash",editUrl:"https://github.com/tremor-rs/tremor-new-website/tree/main/versioned_docs/version-0.11/tremor-script/stdlib/tremor/chash.md",version:"0.11",frontMatter:{},sidebar:"version-0.11/tutorialSidebar",previous:{title:"tremor",permalink:"/docs/tremor-script/stdlib/tremor"},next:{title:"origin",permalink:"/docs/tremor-script/stdlib/tremor/origin"}},c=[{value:"Functions",id:"functions",children:[{value:"jump(key, slot_count)",id:"jumpkey-slot_count",children:[]},{value:"jump_with_keys(k1, k2, key, slot_count)",id:"jump_with_keysk1-k2-key-slot_count",children:[]},{value:"sorted_serialize(any)",id:"sorted_serializeany",children:[]}]}],u={toc:c};function p(e){var t=e.components,n=(0,o.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"chash")," module contains functions for consistent hashing of values.\nThis can be used to achieve consistent routing over multiple outputs."),(0,s.kt)("h2",{id:"functions"},"Functions"),(0,s.kt)("h3",{id:"jumpkey-slot_count"},"jump(key, slot_count)"),(0,s.kt)("p",null,"Hashes an input key (string) and determine its placement in a slot list."),(0,s.kt)("p",null,"For example It can be used to pick a routing destination using an array of\nhosts:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tremor"},'let hosts = ["host1", "host2", "host3", "host4", "host5"];\n{\n"key1": hosts[chash::jump("key1", array::len(hosts))],\n"key1_again": hosts[chash::jump("key1", array::len(hosts))],\n"key2": hosts[chash::jump("key2", array::len(hosts))],\n"key3": hosts[chash::jump("key3", array::len(hosts))],\n"key4": hosts[chash::jump("key4", array::len(hosts))],\n}\n')),(0,s.kt)("p",null,"Returns an ",(0,s.kt)("inlineCode",{parentName:"p"},"integer"),"."),(0,s.kt)("h3",{id:"jump_with_keysk1-k2-key-slot_count"},"jump_with_keys(k1, k2, key, slot_count)"),(0,s.kt)("p",null,"The same as chash::jump but uses the integers k1 and k2 to initialise the\nhashing instead of using default values."),(0,s.kt)("p",null,"Returns an ",(0,s.kt)("inlineCode",{parentName:"p"},"integer")),(0,s.kt)("h3",{id:"sorted_serializeany"},"sorted_serialize(any)"),(0,s.kt)("p",null,"serialised the given data in a sorted and repeatable fashion no matter how\ndata is internally stored. In comparison, the normal serialisation functions\ndo not ensure order for performance reasons. Their behaviour is well suited\nfor encoding data on the wire, but in the context of consistent hashing we\nneed to guarantee that data is always encoded to the same serialisation on a\nbyte level not only on the logical level"),(0,s.kt)("p",null,"Returns an ",(0,s.kt)("inlineCode",{parentName:"p"},"string")))}p.isMDXComponent=!0}}]);