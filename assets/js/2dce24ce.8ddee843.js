"use strict";(self.webpackChunknew_tremor_website=self.webpackChunknew_tremor_website||[]).push([[653],{3905:function(e,r,t){t.d(r,{Zo:function(){return d},kt:function(){return m}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},d=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=s(t),m=a,k=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return t?n.createElement(k,c(c({ref:r},d),{},{components:t})):n.createElement(k,c({ref:r},d))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=p;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=t[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},4978:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s},default:function(){return u}});var n=t(87462),a=t(63366),o=(t(67294),t(3905)),c=["components"],i={},l={unversionedId:"tremor-script/stdlib/std/record",id:"tremor-script/stdlib/std/record",isDocsHomePage:!1,title:"record",description:"The record module contains functions to work with records.",source:"@site/docs/tremor-script/stdlib/std/record.md",sourceDirName:"tremor-script/stdlib/std",slug:"/tremor-script/stdlib/std/record",permalink:"/docs/next/tremor-script/stdlib/std/record",editUrl:"https://github.com/tremor-rs/tremor-new-website/tree/main/docs/tremor-script/stdlib/std/record.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"re",permalink:"/docs/next/tremor-script/stdlib/std/re"},next:{title:"string",permalink:"/docs/next/tremor-script/stdlib/std/string"}},s=[{value:"Functions",id:"functions",children:[{value:"len(record)",id:"lenrecord",children:[]},{value:"is_empty(record)",id:"is_emptyrecord",children:[]},{value:"contains(record, key)",id:"containsrecord-key",children:[]},{value:"keys(record)",id:"keysrecord",children:[]},{value:"values(record)",id:"valuesrecord",children:[]},{value:"to_array(record)",id:"to_arrayrecord",children:[]},{value:"from_array(array)",id:"from_arrayarray",children:[]},{value:"select(record, array)",id:"selectrecord-array",children:[]},{value:"merge(left, right)",id:"mergeleft-right",children:[]},{value:"rename(target, changes)",id:"renametarget-changes",children:[]}]}],d={toc:s};function u(e){var r=e.components,t=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The record module contains functions to work with records."),(0,o.kt)("h2",{id:"functions"},"Functions"),(0,o.kt)("h3",{id:"lenrecord"},"len(record)"),(0,o.kt)("p",null,"Returns the length of an record (number of key value pairs)."),(0,o.kt)("p",null,"Returns an ",(0,o.kt)("inlineCode",{parentName:"p"},"integer")),(0,o.kt)("h3",{id:"is_emptyrecord"},"is_empty(record)"),(0,o.kt)("p",null,"Returns if an record is empty."),(0,o.kt)("p",null,"Returns a ",(0,o.kt)("inlineCode",{parentName:"p"},"bool")),(0,o.kt)("h3",{id:"containsrecord-key"},"contains(record, key)"),(0,o.kt)("p",null,"Returns if an record contains a given key."),(0,o.kt)("p",null,"Returns a ",(0,o.kt)("inlineCode",{parentName:"p"},"bool")),(0,o.kt)("h3",{id:"keysrecord"},"keys(record)"),(0,o.kt)("p",null,"Returns an array of record keys."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tremor"},'record::keys({"a": 1, "b": 2}) == ["a", "b"]\n')),(0,o.kt)("p",null,"Returns a ",(0,o.kt)("inlineCode",{parentName:"p"},"[string]")),(0,o.kt)("h3",{id:"valuesrecord"},"values(record)"),(0,o.kt)("p",null,"Returns an array of record values."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tremor"},'record::values({"a": 1, "b": 2}) == [1, 2]\n')),(0,o.kt)("p",null,"Returns a ",(0,o.kt)("inlineCode",{parentName:"p"},"[any]")),(0,o.kt)("h3",{id:"to_arrayrecord"},"to_array(record)"),(0,o.kt)("p",null,"Turns the record into an array of key value pairs."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tremor"},'record::to_array({"a": 1, "b": 2}) == [["a", 1], ["b", 2]]\n')),(0,o.kt)("p",null,"Returns a ",(0,o.kt)("inlineCode",{parentName:"p"},"[(string, any)]")),(0,o.kt)("h3",{id:"from_arrayarray"},"from_array(array)"),(0,o.kt)("p",null,"Turns an array of key value pairs into an record."),(0,o.kt)("p",null,"Note: array's elements need to be arrays of two elements with the first\nelement being a string."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tremor"},'record::from_array([["a", 1], ["b", 2]]) == {"a": 1, "b": 2}\n')),(0,o.kt)("p",null,"Returns a ",(0,o.kt)("inlineCode",{parentName:"p"},"record")),(0,o.kt)("h3",{id:"selectrecord-array"},"select(record, array)"),(0,o.kt)("p",null,"'Selects' a given set of field from an record, removing all others."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tremor"},'record::select({"a": 1, "b": 2, "c": 3}, ["a", "c"]) == {"a": 1, "c": 3}\n')),(0,o.kt)("p",null,"Returns a ",(0,o.kt)("inlineCode",{parentName:"p"},"record")),(0,o.kt)("h3",{id:"mergeleft-right"},"merge(left, right)"),(0,o.kt)("p",null,"Merges the two records left and right overwriting existing values in left\nwith those provided in right"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tremor"},'record::merge({"a": 1, "b": 2, "c": 4}, {"c": 3, "d": 4})\n== {"a": 1, "b": 2, "c": 3, "d": 4}\n')),(0,o.kt)("p",null,"Returns a ",(0,o.kt)("inlineCode",{parentName:"p"},"record")),(0,o.kt)("h3",{id:"renametarget-changes"},"rename(target, changes)"),(0,o.kt)("p",null,"Renames the keys in the record target based on the key value pairs in the\nrecord changes where the key is the current name and the value is the new\nname."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tremor"},'record::rename({"a": 1, "b": 2, "c": 4}, {"a": "A", "b": "B"})\n== {"A": 1, "B": 2, "c": 4}\n')),(0,o.kt)("p",null,"Returns a ",(0,o.kt)("inlineCode",{parentName:"p"},"record")))}u.isMDXComponent=!0}}]);