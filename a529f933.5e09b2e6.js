(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{153:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(8),o=(r(0),r(210)),c=r(213),i={id:"start05",title:"\u0422\u043e\u0447\u043a\u0430 \u0432\u0445\u043e\u0434\u0430",sidebar_label:"\u0422\u043e\u0447\u043a\u0430 \u0432\u0445\u043e\u0434\u0430"},s={unversionedId:"start05",id:"start05",isDocsHomePage:!1,title:"\u0422\u043e\u0447\u043a\u0430 \u0432\u0445\u043e\u0434\u0430",description:"\u0424\u0430\u0439\u043b, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u0435\u0440\u0432\u044b\u0439 \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u0442\u0441\u044f \u0432 \u043d\u0430\u0448\u0435\u043c \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0438 \u043d\u0430\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f index.js \u0441 \u043d\u0438\u043c \u043c\u044b \u0438 \u043f\u043e\u0437\u043d\u0430\u043a\u043e\u043c\u0438\u043c\u0441\u044f \u0432 \u044d\u0442\u043e\u043c \u0443\u0440\u043e\u043a\u0435.",source:"@site/docs/start05.md",slug:"/start05",permalink:"/docs/start05",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/start05.md",version:"current",sidebar_label:"\u0422\u043e\u0447\u043a\u0430 \u0432\u0445\u043e\u0434\u0430",sidebar:"someSidebar",previous:{title:"Hello world",permalink:"/docs/start04"},next:{title:"AppRegistry",permalink:"/docs/start06"}},p=[],l={toc:p};function u(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"\u0424\u0430\u0439\u043b, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u0435\u0440\u0432\u044b\u0439 \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u0442\u0441\u044f \u0432 \u043d\u0430\u0448\u0435\u043c \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0438 \u043d\u0430\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f index.js \u0441 \u043d\u0438\u043c \u043c\u044b \u0438 \u043f\u043e\u0437\u043d\u0430\u043a\u043e\u043c\u0438\u043c\u0441\u044f \u0432 \u044d\u0442\u043e\u043c \u0443\u0440\u043e\u043a\u0435."),Object(o.b)(c.a,{videoId:"Iw8tKp0ALkA",mdxType:"YouTube"}),Object(o.b)("p",null,"index.js \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043d\u0430\u043c \u0441\u0442\u0438\u043b\u0438\u0437\u043e\u0432\u0430\u0442\u044c \u043d\u0430\u0448\u0443 \u0438\u043a\u043e\u043d\u043a\u0443 \u043f\u0440\u043b\u043e\u0436\u0435\u043d\u0438\u044f:"),Object(o.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useEffect%2C%20useState%20%7D%20from%20'react'%3B%0Aimport%20%7B%20ActivityIndicator%2C%20FlatList%2C%20Text%2C%20View%20%7D%20from%20'react-native'%3B%0A%0Aexport%20default%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20%5BisLoading%2C%20setLoading%5D%20%3D%20useState(true)%3B%0A%20%20const%20%5Bdata%2C%20setData%5D%20%3D%20useState(%5B%5D)%3B%0A%0A%20%20useEffect(()%20%3D%3E%20%7B%0A%20%20%20%20fetch('https%3A%2F%2Freactnative.dev%2Fmovies.json')%0A%20%20%20%20%20%20.then((response)%20%3D%3E%20response.json())%0A%20%20%20%20%20%20.then((json)%20%3D%3E%20setData(json.movies))%0A%20%20%20%20%20%20.catch((error)%20%3D%3E%20console.error(error))%0A%20%20%20%20%20%20.finally(()%20%3D%3E%20setLoading(false))%3B%0A%20%20%7D%2C%20%5B%5D)%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7B%7B%20flex%3A%201%2C%20padding%3A%2024%20%7D%7D%3E%0A%20%20%20%20%20%20%7BisLoading%20%3F%20%3CActivityIndicator%2F%3E%20%3A%20(%0A%20%20%20%20%20%20%20%20%3CFlatList%0A%20%20%20%20%20%20%20%20%20%20data%3D%7Bdata%7D%0A%20%20%20%20%20%20%20%20%20%20keyExtractor%3D%7B(%7B%20id%20%7D%2C%20index)%20%3D%3E%20id%7D%0A%20%20%20%20%20%20%20%20%20%20renderItem%3D%7B(%7B%20item%20%7D)%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CText%3E%7Bitem.title%7D%2C%20%7Bitem.releaseYear%7D%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20)%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20)%7D%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%3B%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true"}),Object(o.b)("p",null,"\u0412 \u043f\u044f\u0442\u043e\u0439 \u0441\u0442\u0440\u043e\u0447\u043a\u0435 app.json - \u044d\u0442\u043e \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f. name - \u041a\u0430\u043a \u043d\u0430\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435, displayName - \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043f\u043e\u0434 \u0438\u043a\u043e\u043d\u043a\u043e\u0439 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'{\n    "name": "stargate",\n    "displayName": "stargate"\n}\n')),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.patreon.com/bePatron?u=31769291"}),Object(o.b)("img",{alt:"Become a Patron!",src:r(211).default}))))}u.isMDXComponent=!0},210:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),f=n,b=u["".concat(c,".").concat(f)]||u[f]||d[f]||o;return r?a.a.createElement(b,i(i({ref:t},p),{},{components:r})):a.a.createElement(b,i({ref:t},p))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var p=2;p<o;p++)c[p]=r[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},211:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/patreon-15b4e66595efdb2e079faf18b89cff7c.png"}}]);