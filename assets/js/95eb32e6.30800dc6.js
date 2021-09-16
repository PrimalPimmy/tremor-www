"use strict";(self.webpackChunknew_tremor_website=self.webpackChunknew_tremor_website||[]).push([[9841],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return p}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),d=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=d(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=d(t),p=o,f=c["".concat(s,".").concat(p)]||c[p]||u[p]||a;return t?r.createElement(f,i(i({ref:n},m),{},{components:t})):r.createElement(f,i({ref:n},m))}));function p(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=c;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<a;d++)i[d]=t[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},91503:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d},default:function(){return u}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],l={},s={unversionedId:"tremor-script/stdlib/std/random",id:"version-0.11/tremor-script/stdlib/std/random",isDocsHomePage:!1,title:"random",description:"The random module contains functions for generating random values of various",source:"@site/versioned_docs/version-0.11/tremor-script/stdlib/std/random.md",sourceDirName:"tremor-script/stdlib/std",slug:"/tremor-script/stdlib/std/random",permalink:"/docs/tremor-script/stdlib/std/random",editUrl:"https://github.com/tremor-rs/tremor-new-website/tree/main/versioned_docs/version-0.11/tremor-script/stdlib/std/random.md",version:"0.11",frontMatter:{},sidebar:"version-0.11/tutorialSidebar",previous:{title:"math",permalink:"/docs/tremor-script/stdlib/std/math"},next:{title:"range",permalink:"/docs/tremor-script/stdlib/std/range"}},d=[{value:"Functions",id:"functions",children:[{value:"bool()",id:"bool",children:[]},{value:"string(length)",id:"stringlength",children:[]},{value:"integer()",id:"integer",children:[]},{value:"float()",id:"float",children:[]}]}],m={toc:d};function u(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The random module contains functions for generating random values of various\ntypes."),(0,a.kt)("p",null,"The generated values are uniformly distributed over the specified type (and\nrange, where applicable). Useful for doing percentage drops of events, for\nexample."),(0,a.kt)("p",null,"The random number generator under the hood is seeded based on tremor's event\ningestion time and thus the output here is deterministic. Should we choose to\nreplay a tremor data dump (something to be added in future tremor versions),\nwe will always get the same value for an event."),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("h3",{id:"bool"},"bool()"),(0,a.kt)("p",null,"Generates a random boolean."),(0,a.kt)("p",null,"Returns an ",(0,a.kt)("inlineCode",{parentName:"p"},"bool"),";"),(0,a.kt)("h3",{id:"stringlength"},"string(length)"),(0,a.kt)("p",null,"Generates a random string of given length with ASCII letters and numbers:\n",(0,a.kt)("inlineCode",{parentName:"p"},"a"),"-",(0,a.kt)("inlineCode",{parentName:"p"},"z"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"A"),"-",(0,a.kt)("inlineCode",{parentName:"p"},"Z")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"0"),"-",(0,a.kt)("inlineCode",{parentName:"p"},"9"),". The argument must be an ",(0,a.kt)("inlineCode",{parentName:"p"},"integer")," greater than\nor equal to zero -- otherwise the function errors out."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tremor"},'random::string(16) # 16 alphanumeric characters. eg: "QuSFjpW8PBNewRml"\nrandom::string(0)  # ""\n')),(0,a.kt)("p",null,"Returns an ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h3",{id:"integer"},"integer()"),(0,a.kt)("p",null,"Generates a random ",(0,a.kt)("inlineCode",{parentName:"p"},"integer"),", with the functionality changing based on the\nnumber of arguments passed."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tremor"},"random::integer(0, 2)     # either 0 or 1\nrandom::integer(42, 43)   # always 42\nrandom::integer(0, 100)   # one of 0-99\nrandom::integer(-1, 1)    # either -1 or 0\nrandom::integer(-42, -41) # always -42\nrandom::integer(i) -> integer\nrandom::integer(100) # one of 0-99. same as random::integer(0, 100)\nrandom::integer() -> integer\n")),(0,a.kt)("h3",{id:"float"},"float()"),(0,a.kt)("p",null,"Generates a random float, with the functionality changing based on the\nnumber of arguments passed."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tremor"},"random::float(0.0, 100.0) # >= 0.0 and < 100.0\nrandom::float(-1.0, 1.0)  # >= -1.0 and < 1.0\nrandom::float(-3.0, -2.0) # >= -3.0 and < -2.0\nrandom::float(100.0) # same as random::float(0.0, 100.0)\nrandom::float() -> float\n")))}u.isMDXComponent=!0}}]);