webpackJsonp([0x67ef26645b2a,60335399758886],{"./node_modules/json-loader/index.js!./.cache/json/layout-index.json":function(e,t){e.exports={layoutContext:{}}},'./node_modules/babel-loader/lib/index.js?{"plugins":["/home/i4md34th/Desktop/projects/NOOBS/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/home/i4md34th/Desktop/projects/NOOBS/node_modules/babel-plugin-add-module-exports/lib/index.js","/home/i4md34th/Desktop/projects/NOOBS/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/home/i4md34th/Desktop/projects/NOOBS/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/home/i4md34th/Desktop/projects/NOOBS/node_modules/babel-preset-stage-0/lib/index.js","/home/i4md34th/Desktop/projects/NOOBS/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./.cache/layouts/index.js':function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n("./node_modules/react/index.js"),i=r(a),s=n("./src/layouts/index.js"),l=r(s),c=n("./node_modules/json-loader/index.js!./.cache/json/layout-index.json"),u=r(c);t.default=function(e){return i.default.createElement(l.default,o({},e,u.default))},e.exports=t.default},"./firebase.js":function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}var o=n("./node_modules/firebase/index.js"),a=r(o),i={apiKey:"AIzaSyC7TEjW_DaBTWIWxVsOZIXbPC0rBej-g9c",authDomain:"starting-firebase-7cff0.firebaseapp.com",databaseURL:"https://starting-firebase-7cff0.firebaseio.com",projectId:"starting-firebase-7cff0",storageBucket:"starting-firebase-7cff0.appspot.com",messagingSenderId:"317371861792"};a.initializeApp(i)},"./node_modules/babel-runtime/core-js/object/keys.js":function(e,t,n){e.exports={default:n("./node_modules/core-js/library/fn/object/keys.js"),__esModule:!0}},"./node_modules/core-js/library/fn/object/keys.js":function(e,t,n){n("./node_modules/core-js/library/modules/es6.object.keys.js"),e.exports=n("./node_modules/core-js/library/modules/_core.js").Object.keys},"./node_modules/core-js/library/modules/_object-sap.js":function(e,t,n){var r=n("./node_modules/core-js/library/modules/_export.js"),o=n("./node_modules/core-js/library/modules/_core.js"),a=n("./node_modules/core-js/library/modules/_fails.js");e.exports=function(e,t){var n=(o.Object||{})[e]||Object[e],i={};i[e]=t(n),r(r.S+r.F*a(function(){n(1)}),"Object",i)}},"./node_modules/core-js/library/modules/es6.object.keys.js":function(e,t,n){var r=n("./node_modules/core-js/library/modules/_to-object.js"),o=n("./node_modules/core-js/library/modules/_object-keys.js");n("./node_modules/core-js/library/modules/_object-sap.js")("keys",function(){return function(e){return o(r(e))}})},"./node_modules/deep-equal/index.js":function(e,t,n){function r(e){return null===e||void 0===e}function o(e){return!(!e||"object"!=typeof e||"number"!=typeof e.length)&&("function"==typeof e.copy&&"function"==typeof e.slice&&!(e.length>0&&"number"!=typeof e[0]))}function a(e,t,n){var a,u;if(r(e)||r(t))return!1;if(e.prototype!==t.prototype)return!1;if(l(e))return!!l(t)&&(e=i.call(e),t=i.call(t),c(e,t,n));if(o(e)){if(!o(t))return!1;if(e.length!==t.length)return!1;for(a=0;a<e.length;a++)if(e[a]!==t[a])return!1;return!0}try{var d=s(e),f=s(t)}catch(e){return!1}if(d.length!=f.length)return!1;for(d.sort(),f.sort(),a=d.length-1;a>=0;a--)if(d[a]!=f[a])return!1;for(a=d.length-1;a>=0;a--)if(u=d[a],!c(e[u],t[u],n))return!1;return typeof e==typeof t}var i=Array.prototype.slice,s=n("./node_modules/deep-equal/lib/keys.js"),l=n("./node_modules/deep-equal/lib/is_arguments.js"),c=e.exports=function(e,t,n){return n||(n={}),e===t||(e instanceof Date&&t instanceof Date?e.getTime()===t.getTime():!e||!t||"object"!=typeof e&&"object"!=typeof t?n.strict?e===t:e==t:a(e,t,n))}},"./node_modules/deep-equal/lib/is_arguments.js":function(e,t){function n(e){return"[object Arguments]"==Object.prototype.toString.call(e)}function r(e){return e&&"object"==typeof e&&"number"==typeof e.length&&Object.prototype.hasOwnProperty.call(e,"callee")&&!Object.prototype.propertyIsEnumerable.call(e,"callee")||!1}var o="[object Arguments]"==function(){return Object.prototype.toString.call(arguments)}();t=e.exports=o?n:r,t.supported=n,t.unsupported=r},"./node_modules/deep-equal/lib/keys.js":function(e,t){function n(e){var t=[];for(var n in e)t.push(n);return t}t=e.exports="function"==typeof Object.keys?Object.keys:n,t.shim=n},"./node_modules/exenv/index.js":function(e,t,n){var r;!function(){"use strict";var o=!("undefined"==typeof window||!window.document||!window.document.createElement),a={canUseDOM:o,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:o&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:o&&!!window.screen};r=function(){return a}.call(t,n,t,e),!(void 0!==r&&(e.exports=r))}()},"./node_modules/gatsby-link/index.js":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){return e.replace(/^\/\//g,"/")}t.__esModule=!0,t.navigateTo=void 0;var a=n("./node_modules/babel-runtime/helpers/extends.js"),i=r(a),s=n("./node_modules/babel-runtime/core-js/object/keys.js"),l=r(s),c=n("./node_modules/babel-runtime/helpers/objectWithoutProperties.js"),u=r(c),d=n("./node_modules/babel-runtime/helpers/classCallCheck.js"),f=r(d),p=n("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),m=r(p),T=n("./node_modules/babel-runtime/helpers/inherits.js"),E=r(T),h=n("./node_modules/react/index.js"),y=r(h),b=n("./node_modules/react-router-dom/index.js"),_=n("./node_modules/prop-types/index.js"),A=r(_),g="/",j={activeClassName:A.default.string,activeStyle:A.default.object,exact:A.default.bool,strict:A.default.bool,isActive:A.default.func,location:A.default.object},S=function(e){function t(n){(0,f.default)(this,t);var r=(0,m.default)(this,e.call(this));return r.state={to:o(g+n.to)},r}return(0,E.default)(t,e),t.prototype.componentWillReceiveProps=function(e){this.props.to!==e.to&&(this.setState({to:o(g+e.to)}),___loader.enqueue(this.state.to))},t.prototype.componentDidMount=function(){___loader.enqueue(this.state.to)},t.prototype.render=function(){var e=this,t=this.props,n=t.onClick,r=(0,u.default)(t,["onClick"]),o=void 0;return o=(0,l.default)(j).some(function(t){return e.props[t]})?b.NavLink:b.Link,y.default.createElement(o,(0,i.default)({onClick:function(t){if(n&&n(t),!(0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)){var r=e.state.to;if(r.split("#").length>1&&(r=r.split("#").slice(0,-1).join("")),r===window.location.pathname){var o=e.state.to.split("#").slice(1).join("#"),a=document.getElementById(o);if(null!==a)return a.scrollIntoView(),!0}t.preventDefault(),window.___navigateTo(e.state.to)}return!0}},r,{to:this.state.to}))},t}(y.default.Component);S.propTypes=(0,i.default)({},j,{to:A.default.string.isRequired,onClick:A.default.func}),S.contextTypes={router:A.default.object},t.default=S;t.navigateTo=function(e){window.___navigateTo(o(g+e))}},"./node_modules/react-helmet/lib/Helmet.js":function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.Helmet=void 0;var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n("./node_modules/react/index.js"),d=r(u),f=n("./node_modules/prop-types/index.js"),p=r(f),m=n("./node_modules/react-side-effect/lib/index.js"),T=r(m),E=n("./node_modules/deep-equal/index.js"),h=r(E),y=n("./node_modules/react-helmet/lib/HelmetUtils.js"),b=n("./node_modules/react-helmet/lib/HelmetConstants.js"),_=function(e){var t,n;return n=t=function(t){function n(){return a(this,n),i(this,t.apply(this,arguments))}return s(n,t),n.prototype.shouldComponentUpdate=function(e){return!(0,h.default)(this.props,e)},n.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case b.TAG_NAMES.SCRIPT:case b.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case b.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},n.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,a=e.nestedChildren;return l({},r,(t={},t[n.type]=[].concat(r[n.type]||[],[l({},o,this.mapNestedChildrenToProps(n,a))]),t))},n.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,a=e.newChildProps,i=e.nestedChildren;switch(r.type){case b.TAG_NAMES.TITLE:return l({},o,(t={},t[r.type]=i,t.titleAttributes=l({},a),t));case b.TAG_NAMES.BODY:return l({},o,{bodyAttributes:l({},a)});case b.TAG_NAMES.HTML:return l({},o,{htmlAttributes:l({},a)})}return l({},o,(n={},n[r.type]=l({},a),n))},n.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=l({},t);return Object.keys(e).forEach(function(t){var r;n=l({},n,(r={},r[t]=e[t],r))}),n},n.prototype.warnOnInvalidChildren=function(e,t){return!0},n.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return d.default.Children.forEach(e,function(e){if(e&&e.props){var a=e.props,i=a.children,s=o(a,["children"]),l=(0,y.convertReactPropstoHtmlAttributes)(s);switch(n.warnOnInvalidChildren(e,i),e.type){case b.TAG_NAMES.LINK:case b.TAG_NAMES.META:case b.TAG_NAMES.NOSCRIPT:case b.TAG_NAMES.SCRIPT:case b.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:l,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:l,nestedChildren:i})}}}),t=this.mapArrayTypeChildrenToProps(r,t)},n.prototype.render=function(){var t=this.props,n=t.children,r=o(t,["children"]),a=l({},r);return n&&(a=this.mapChildrenToProps(n,a)),d.default.createElement(e,a)},c(n,null,[{key:"canUseDOM",set:function(t){e.canUseDOM=t}}]),n}(d.default.Component),t.propTypes={base:p.default.object,bodyAttributes:p.default.object,children:p.default.oneOfType([p.default.arrayOf(p.default.node),p.default.node]),defaultTitle:p.default.string,defer:p.default.bool,encodeSpecialCharacters:p.default.bool,htmlAttributes:p.default.object,link:p.default.arrayOf(p.default.object),meta:p.default.arrayOf(p.default.object),noscript:p.default.arrayOf(p.default.object),onChangeClientState:p.default.func,script:p.default.arrayOf(p.default.object),style:p.default.arrayOf(p.default.object),title:p.default.string,titleAttributes:p.default.object,titleTemplate:p.default.string},t.defaultProps={defer:!0,encodeSpecialCharacters:!0},t.peek=e.peek,t.rewind=function(){var t=e.rewind();return t||(t=(0,y.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},n},A=function(){return null},g=(0,T.default)(y.reducePropsToState,y.handleClientStateChange,y.mapStateOnServer)(A),j=_(g);j.renderStatic=j.rewind,t.Helmet=j,t.default=j},"./node_modules/react-helmet/lib/HelmetConstants.js":function(e,t){t.__esModule=!0;var n=(t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"}),r=(t.VALID_TAG_NAMES=Object.keys(n).map(function(e){return n[e]}),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(r).reduce(function(e,t){return e[r[t]]=t,e},{}),t.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},"./node_modules/react-helmet/lib/HelmetUtils.js":function(e,t,n){(function(e){function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=n("./node_modules/react/index.js"),s=r(i),l=n("./node_modules/object-assign/index.js"),c=r(l),u=n("./node_modules/react-helmet/lib/HelmetConstants.js"),d=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},f=function(e){var t=h(e,u.TAG_NAMES.TITLE),n=h(e,u.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,function(){return t});var r=h(e,u.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},p=function(e){return h(e,u.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},m=function(e,t){return t.filter(function(t){return"undefined"!=typeof t[e]}).map(function(t){return t[e]}).reduce(function(e,t){return a({},e,t)},{})},T=function(e,t){return t.filter(function(e){return"undefined"!=typeof e[u.TAG_NAMES.BASE]}).map(function(e){return e[u.TAG_NAMES.BASE]}).reverse().reduce(function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var a=r[o],i=a.toLowerCase();if(e.indexOf(i)!==-1&&n[i])return t.concat(n)}return t},[])},E=function(e,t,n){var r={};return n.filter(function(t){return!!Array.isArray(t[e])||("undefined"!=typeof t[e]&&j("Helmet: "+e+' should be of type "Array". Instead found type "'+o(t[e])+'"'),!1)}).map(function(t){return t[e]}).reverse().reduce(function(e,n){var o={};n.filter(function(e){for(var n=void 0,a=Object.keys(e),i=0;i<a.length;i++){var s=a[i],l=s.toLowerCase();t.indexOf(l)===-1||n===u.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||l===u.TAG_PROPERTIES.REL&&"stylesheet"===e[l].toLowerCase()||(n=l),t.indexOf(s)===-1||s!==u.TAG_PROPERTIES.INNER_HTML&&s!==u.TAG_PROPERTIES.CSS_TEXT&&s!==u.TAG_PROPERTIES.ITEM_PROP||(n=s)}if(!n||!e[n])return!1;var c=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][c]&&(o[n][c]=!0,!0)}).reverse().forEach(function(t){return e.push(t)});for(var a=Object.keys(o),i=0;i<a.length;i++){var s=a[i],l=(0,c.default)({},r[s],o[s]);r[s]=l}return e},[]).reverse()},h=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},y=function(e){return{baseTag:T([u.TAG_PROPERTIES.HREF],e),bodyAttributes:m(u.ATTRIBUTE_NAMES.BODY,e),defer:h(e,u.HELMET_PROPS.DEFER),encode:h(e,u.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:m(u.ATTRIBUTE_NAMES.HTML,e),linkTags:E(u.TAG_NAMES.LINK,[u.TAG_PROPERTIES.REL,u.TAG_PROPERTIES.HREF],e),metaTags:E(u.TAG_NAMES.META,[u.TAG_PROPERTIES.NAME,u.TAG_PROPERTIES.CHARSET,u.TAG_PROPERTIES.HTTPEQUIV,u.TAG_PROPERTIES.PROPERTY,u.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:E(u.TAG_NAMES.NOSCRIPT,[u.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:p(e),scriptTags:E(u.TAG_NAMES.SCRIPT,[u.TAG_PROPERTIES.SRC,u.TAG_PROPERTIES.INNER_HTML],e),styleTags:E(u.TAG_NAMES.STYLE,[u.TAG_PROPERTIES.CSS_TEXT],e),title:f(e),titleAttributes:m(u.ATTRIBUTE_NAMES.TITLE,e)}},b=function(){var e=Date.now();return function(t){var n=Date.now();n-e>16?(e=n,t(n)):setTimeout(function(){b(t)},0)}}(),_=function(e){return clearTimeout(e)},A="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||b:e.requestAnimationFrame||b,g="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||_:e.cancelAnimationFrame||_,j=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},S=null,v=function(e){S&&g(S),e.defer?S=A(function(){O(e,function(){S=null})}):(O(e),S=null)},O=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,s=e.noscriptTags,l=e.onChangeClientState,c=e.scriptTags,d=e.styleTags,f=e.title,p=e.titleAttributes;P(u.TAG_NAMES.BODY,r),P(u.TAG_NAMES.HTML,o),R(f,p);var m={baseTag:x(u.TAG_NAMES.BASE,n),linkTags:x(u.TAG_NAMES.LINK,a),metaTags:x(u.TAG_NAMES.META,i),noscriptTags:x(u.TAG_NAMES.NOSCRIPT,s),scriptTags:x(u.TAG_NAMES.SCRIPT,c),styleTags:x(u.TAG_NAMES.STYLE,d)},T={},E={};Object.keys(m).forEach(function(e){var t=m[e],n=t.newTags,r=t.oldTags;n.length&&(T[e]=n),r.length&&(E[e]=m[e].oldTags)}),t&&t(),l(e,T,E)},w=function(e){return Array.isArray(e)?e.join(""):e},R=function(e,t){"undefined"!=typeof e&&document.title!==e&&(document.title=w(e)),P(u.TAG_NAMES.TITLE,t)},P=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(u.HELMET_ATTRIBUTE),o=r?r.split(","):[],a=[].concat(o),i=Object.keys(t),s=0;s<i.length;s++){var l=i[s],c=t[l]||"";n.getAttribute(l)!==c&&n.setAttribute(l,c),o.indexOf(l)===-1&&o.push(l);var d=a.indexOf(l);d!==-1&&a.splice(d,1)}for(var f=a.length-1;f>=0;f--)n.removeAttribute(a[f]);o.length===a.length?n.removeAttribute(u.HELMET_ATTRIBUTE):n.getAttribute(u.HELMET_ATTRIBUTE)!==i.join(",")&&n.setAttribute(u.HELMET_ATTRIBUTE,i.join(","))}},x=function(e,t){var n=document.head||document.querySelector(u.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+u.HELMET_ATTRIBUTE+"]"),o=Array.prototype.slice.call(r),a=[],i=void 0;return t&&t.length&&t.forEach(function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===u.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===u.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var s="undefined"==typeof t[r]?"":t[r];n.setAttribute(r,s)}n.setAttribute(u.HELMET_ATTRIBUTE,"true"),o.some(function(e,t){return i=t,n.isEqualNode(e)})?o.splice(i,1):a.push(n)}),o.forEach(function(e){return e.parentNode.removeChild(e)}),a.forEach(function(e){return n.appendChild(e)}),{oldTags:o,newTags:a}},C=function(e){return Object.keys(e).reduce(function(t,n){var r="undefined"!=typeof e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r},"")},M=function(e,t,n,r){var o=C(n),a=w(t);return o?"<"+e+" "+u.HELMET_ATTRIBUTE+'="true" '+o+">"+d(a,r)+"</"+e+">":"<"+e+" "+u.HELMET_ATTRIBUTE+'="true">'+d(a,r)+"</"+e+">"},N=function(e,t,n){return t.reduce(function(t,r){var o=Object.keys(r).filter(function(e){return!(e===u.TAG_PROPERTIES.INNER_HTML||e===u.TAG_PROPERTIES.CSS_TEXT)}).reduce(function(e,t){var o="undefined"==typeof r[t]?t:t+'="'+d(r[t],n)+'"';return e?e+" "+o:o},""),a=r.innerHTML||r.cssText||"",i=u.SELF_CLOSING_TAGS.indexOf(e)===-1;return t+"<"+e+" "+u.HELMET_ATTRIBUTE+'="true" '+o+(i?"/>":">"+a+"</"+e+">")},"")},I=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[u.REACT_TAG_MAP[n]||n]=e[n],t},t)},L=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[u.HTML_TAG_MAP[n]||n]=e[n],t},t)},k=function(e,t,n){var r,o=(r={key:t},r[u.HELMET_ATTRIBUTE]=!0,r),a=I(n,o);return[s.default.createElement(u.TAG_NAMES.TITLE,a,t)]},G=function(e,t){return t.map(function(t,n){var r,o=(r={key:n},r[u.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach(function(e){var n=u.REACT_TAG_MAP[e]||e;if(n===u.TAG_PROPERTIES.INNER_HTML||n===u.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]}),s.default.createElement(e,o)})},H=function(e,t,n){switch(e){case u.TAG_NAMES.TITLE:return{toComponent:function(){return k(e,t.title,t.titleAttributes,n)},toString:function(){return M(e,t.title,t.titleAttributes,n)}};case u.ATTRIBUTE_NAMES.BODY:case u.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return I(t)},toString:function(){return C(t)}};default:return{toComponent:function(){return G(e,t)},toString:function(){return N(e,t,n)}}}},B=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,s=e.noscriptTags,l=e.scriptTags,c=e.styleTags,d=e.title,f=void 0===d?"":d,p=e.titleAttributes;return{base:H(u.TAG_NAMES.BASE,t,r),bodyAttributes:H(u.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:H(u.ATTRIBUTE_NAMES.HTML,o,r),link:H(u.TAG_NAMES.LINK,a,r),meta:H(u.TAG_NAMES.META,i,r),noscript:H(u.TAG_NAMES.NOSCRIPT,s,r),script:H(u.TAG_NAMES.SCRIPT,l,r),style:H(u.TAG_NAMES.STYLE,c,r),title:H(u.TAG_NAMES.TITLE,{title:f,titleAttributes:p},r)}};t.convertReactPropstoHtmlAttributes=L,t.handleClientStateChange=v,t.mapStateOnServer=B,t.reducePropsToState=y,t.requestAnimationFrame=A,t.warn=j}).call(t,function(){return this}())},"./node_modules/react-side-effect/lib/index.js":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=n("./node_modules/react/index.js"),l=r(s),c=n("./node_modules/exenv/index.js"),u=r(c),d=n("./node_modules/shallowequal/index.js"),f=r(d);e.exports=function(e,t,n){function r(e){return e.displayName||e.name||"Component"}if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if("undefined"!=typeof n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(c){function d(){m=e(p.map(function(e){return e.props})),T.canUseDOM?t(m):n&&(m=n(m))}if("function"!=typeof c)throw new Error("Expected WrappedComponent to be a React component.");var p=[],m=void 0,T=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return i(t,e),t.peek=function(){return m},t.rewind=function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=m;return m=void 0,p=[],e},t.prototype.shouldComponentUpdate=function(e){return!(0,f.default)(e,this.props)},t.prototype.componentWillMount=function(){p.push(this),d()},t.prototype.componentDidUpdate=function(){d()},t.prototype.componentWillUnmount=function(){var e=p.indexOf(this);p.splice(e,1),d()},t.prototype.render=function(){return l.default.createElement(c,this.props)},t}(s.Component);return T.displayName="SideEffect("+r(c)+")",T.canUseDOM=u.default.canUseDOM,T}}},"./node_modules/shallowequal/index.js":function(e,t){e.exports=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var a=Object.keys(e),i=Object.keys(t);if(a.length!==i.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(t),l=0;l<a.length;l++){var c=a[l];if(!s(c))return!1;var u=e[c],d=t[c];if(o=n?n.call(r,u,d,c):void 0,o===!1||void 0===o&&u!==d)return!1}return!0}},"./src/layouts/index.css":function(e,t){},"./src/layouts/index.js":function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=n("./node_modules/react/index.js"),c=o(l),u=n("./node_modules/prop-types/index.js"),d=o(u),f=n("./node_modules/gatsby-link/index.js"),p=(o(f),n("./node_modules/react-helmet/lib/Helmet.js")),m=o(p),T=n("./node_modules/react-bootstrap/lib/index.js"),E=n("./node_modules/react-scrollchor/lib/scrollchor.js"),h=o(E),y=n("./firebase.js");r(y);n("./src/layouts/index.css");var b=function(e){function t(){var n,r,o;a(this,t);for(var s=arguments.length,l=Array(s),c=0;c<s;c++)l[c]=arguments[c];return n=r=i(this,e.call.apply(e,[this].concat(l))),r.navigate=function(){window.location="../page-2"},r.navigatehome=function(){window.location="../"},r.navigateListings=function(){window.location="../PropertyListings"},o=n,i(r,o)}return s(t,e),t.prototype.render=function(){return c.default.createElement("section",{className:"footer",style:{"background-color":"#444444",color:"white"}},c.default.createElement(T.Grid,{fluid:!0},c.default.createElement(T.Row,{style:{width:"90%","margin-left":"auto","margin-right":"auto",padding:"50px 0px 30px 0px"}},c.default.createElement(T.Col,{xs:"6",md:"4"},c.default.createElement("img",{onClick:this.navigatehome,className:"footer-logo",src:"../images/footer-logo.png",style:{cursor:"pointer"}}),c.default.createElement("p",{className:"col-sm-12 footer-para",style:{"font-size":"16px",color:"#ccc"}},"Agency21 is the leading real estate brand of Pakistan and aims to revolutionise the real estate sector of Pakistan.")),c.default.createElement(T.Col,{xs:"3",md:"2"},c.default.createElement("h3",{style:{"margin-bottom":"20px"}},"Agency 21"),c.default.createElement(h.default,{to:"#AboutUs",className:"short-footer-links"},"About Us"),c.default.createElement("br",null),c.default.createElement("a",{className:"short-footer-links",onClick:this.navigateListings},"Property Listings"),c.default.createElement("br",null),c.default.createElement(h.default,{to:"#HowItWorks",className:"short-footer-links"},"How it works"),c.default.createElement("br",null),c.default.createElement("a",{className:"short-footer-links",onClick:this.navigate,s:!0},"Contact")),c.default.createElement(T.Col,{xs:"4",md:"3",className:"office"},c.default.createElement("h3",{style:{"margin-bottom":"20px"}},"Head Office"),c.default.createElement(T.Row,null,c.default.createElement("img",{className:"col-sm-2",src:"../images/mail-icon.png",style:{width:"50px","margin-top":"5px"}}),c.default.createElement("p",{className:"col-sm-6",style:{"line-height":"170%"}},"info@agency21.com")),c.default.createElement(T.Row,null,c.default.createElement("img",{className:"col-sm-2",src:"../images/map-icon.png",style:{width:"50px","margin-top":"5px"}}),c.default.createElement("p",{className:"col-sm-6",style:{"line-height":"170%"}},"4th Floor, 44 East Plaza, Fazal-e-Haq Road, Blue Area, Islamabad")),c.default.createElement(T.Row,null,c.default.createElement("img",{className:"col-sm-2",src:"../images/phone-icon.png",style:{width:"50px","margin-top":"5px"}}),c.default.createElement("p",{className:"col-sm-6",style:{"line-height":"170%"}},"+92-51-8737777")),c.default.createElement(T.Row,null,c.default.createElement("img",{className:"col-sm-2",src:"../images/phone-icon.png",style:{width:"50px","margin-top":"5px"}}),c.default.createElement("p",{className:"col-sm-6",style:{"line-height":"170%"}},c.default.createElement("strong",null,"UAN: 111-021-111")))),c.default.createElement(T.Col,{xs:"4",md:"3",className:"office"},c.default.createElement("h3",{style:{"margin-bottom":"20px"}},"Regional Offices"),c.default.createElement(T.Row,null,c.default.createElement("img",{className:"col-sm-2",src:"../images/map-icon.png",style:{width:"50px","margin-top":"5px"}}),c.default.createElement("p",{className:"col-sm-6",style:{"line-height":"170%"}},"Near DHA-2, Gate-1, Main G.T. Road, Islamabad")),c.default.createElement(T.Row,null,c.default.createElement("img",{className:"col-sm-2",src:"../images/map-icon.png",style:{width:"50px","margin-top":"5px"}}),c.default.createElement("p",{className:"col-sm-6",style:{"line-height":"170%"}},"Plaza-91, Main Civic Center, Phase 1-4, Bahria Town")),c.default.createElement(T.Row,null,c.default.createElement("img",{className:"col-sm-2",src:"../images/map-icon.png",style:{width:"50px","margin-top":"5px"}}),c.default.createElement("p",{className:"col-sm-6",style:{"line-height":"170%"}},"Office-1, Midway Commercial, Bahria Phase-7, Rawalpindi")))),c.default.createElement(T.Row,{className:"copy-right",style:{width:"89%","margin-right":"auto","margin-left":"auto",padding:"30px 0px 30px 0px",color:"#a0a0a0"}},c.default.createElement(T.Col,{xs:9,md:6},c.default.createElement("footer",null,"Copyright © Agency21Pvt Ltd. All rights reserved.")),c.default.createElement(T.Col,{xs:9,md:6,className:"social text-right",style:{"padding-right":"20px"}},c.default.createElement("a",{href:"https://www.facebook.com/Agency21pk/",target:"_blank"},c.default.createElement("img",{src:"../images/fb-icon.png",style:{height:"22px","padding-right":"15px"}})),c.default.createElement("a",{href:"https://twitter.com/Agency21Pk?lang=en",target:"_blank"},c.default.createElement("img",{src:"../images/twitter-icon.png",style:{height:"20px","padding-right":"15px"}})),c.default.createElement("a",{href:"https://www.instagram.com/agency21pk/",target:"_blank"},c.default.createElement("img",{src:"../images/instagram-icon.png",style:{height:"20px"}}))))))},t}(c.default.Component),_=function(e){var t=e.children;return c.default.createElement("div",{style:{position:"relative","z-index":"1"}},c.default.createElement(m.default,{title:"Agency 21",meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},c.default.createElement("link",{rel:"stylesheet",href:"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css",integrity:"sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u",crossorigin:"anonymous"}),c.default.createElement("link",{rel:"stylesheet",type:"text/css",href:"https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"}),c.default.createElement("link",{rel:"stylesheet",type:"text/css",
href:"https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"}),c.default.createElement("script",{src:"https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"}),c.default.createElement("script",{src:"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js",integrity:"sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa",crossorigin:"anonymous"}),c.default.createElement("script",{src:"https://www.gstatic.com/firebasejs/4.6.0/firebase.js"}),c.default.createElement("link",{href:"https://fonts.googleapis.com/css?family=Open+Sans:400,600,700",rel:"stylesheet"})),c.default.createElement("div",{style:{"font-family":"'Open Sans', sans-serif"}},t()),c.default.createElement(b,null))};_.propTypes={children:d.default.func},t.default=_,e.exports=t.default}});
//# sourceMappingURL=component---src-layouts-index-js-47ef5ee4237e7f2a08bd.js.map