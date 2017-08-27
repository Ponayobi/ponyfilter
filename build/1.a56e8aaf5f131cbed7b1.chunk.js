webpackJsonp([1],{"./app/containers/HomePage/index.js":function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function s(e){return{dispatch:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n("./node_modules/react/react.js"),c=n.n(u),f=n("./node_modules/react-redux/lib/index.js"),d=(n.n(f),n("./node_modules/react-helmet/lib/Helmet.js")),p=n.n(d),h=n("./node_modules/reselect/es/index.js"),m=n("./node_modules/styled-components/dist/styled-components.es.js"),v=n("./node_modules/immutable/dist/immutable.js"),g=(n.n(v),n("./node_modules/material-ui/svg-icons/av/fiber-new.js")),y=n.n(g),b=n("./node_modules/material-ui/svg-icons/content/filter-list.js"),_=n.n(b),j=n("./node_modules/material-ui/index.es.js"),w=n("./app/containers/HomePage/selectors.js"),x=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,o){var i=t&&t.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var l in i)void 0===n[l]&&(n[l]=i[l]);else n||(n=i||{});if(1===a)n.children=o;else if(a>1){for(var s=Array(a),u=0;u<a;u++)s[u]=arguments[u+3];n.children=s}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),C=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),P=l(["float: right"],["float: right"]),S=l(["\n  margin: 0 auto;\n  max-width: 900px;\n"],["\n  margin: 0 auto;\n  max-width: 900px;\n"]),M=l(["\n  text-align: center;\n"],["\n  text-align: center;\n"]),A=m.a.div(P),O=m.a.div(S),k=m.a.div(M),H=x(j.b,{tooltip:"Pony filter"},void 0,x(_.a,{})),T=x(y.a,{}),z=x("br",{}),E=x("br",{}),F=x(j.c,{},void 0,x(k,{},void 0,"Nothing to show")),I=function(e){function t(){var e,r,a,l;o(this,t);for(var s=arguments.length,u=Array(s),c=0;c<s;c++)u[c]=arguments[c];return r=a=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),a.state={open:!1,results:a.props.pony.slice(0,20)||n.i(v.List)([]),filter:{}},a.openModal=function(){a.setState({open:!0})},a.closeModal=function(){a.setState({open:!1})},a.applyFilters=function(){var e=a.props.pony,t=Object.keys(a.state.filter);t.forEach(function(t){var n=a.state.filter[t];"price_from"===t||"price_to"===t?!function(){var t=a.props.pony.map(function(e){return e.get("price")}),n=a.state.filter.price_from||t.min(),r=a.state.filter.price_to||t.max();e=e.filter(function(e){var t=e.get("price");return t>=n&&t<=r})}():e=e.filter(function(e){return e.get(t)===n})}),a.setState({results:e.slice(0,20)}),a.closeModal()},a.resetFilters=function(){a.setState({results:a.props.pony.slice(0,20),filter:{}}),a.closeModal()},a.handleChangeColor=function(e,t,n){var r=a.state.filter;r.color=n,a.setState({filter:r})},a.handleChangeKind=function(e,t,n){var r=a.state.filter;r.kind=n,a.setState({filter:r})},a.handleChangePriceFrom=function(e,t){var n=a.state.filter;n.price_from=t,a.setState({filter:n})},a.handleChangePriceTo=function(e,t){var n=a.state.filter;n.price_to=t,a.setState({filter:n})},a.handleChangeIsNew=function(e,t){var n=a.state.filter;n.is_new=t,t||delete n.is_new,a.setState({filter:n})},a.renderMenuItems=function(e){return e.map(function(e,t){return x(j.d,{value:e,primaryText:e},t)})},l=r,i(a,l)}return a(t,e),C(t,[{key:"render",value:function(){var e=this.props.pony,t=e.map(function(e){return e.get("price")}),n=e.reduce(function(e,t){return e.includes(t.get("color"))?e:[].concat(r(e),[t.get("color")])},[]),o=e.reduce(function(e,t){return e.includes(t.get("kind"))?e:[].concat(r(e),[t.get("kind")])},[]),i=[x(j.e,{label:"Close",primary:!0,onClick:this.closeModal}),x(j.e,{label:"Reset",primary:!0,disabled:!Object.keys(this.state.filter).length,onClick:this.resetFilters}),x(j.e,{label:"Find",primary:!0,onClick:this.applyFilters})];return x("div",{},void 0,x(p.a,{title:"Home",meta:[{name:"description",content:"list of pony"}]}),x(j.f,{title:"Filter",actions:i,open:this.state.open},void 0,x(j.g,{floatingLabelText:"Color",value:this.state.filter.color,onChange:this.handleChangeColor},void 0,this.renderMenuItems(n)),x(j.g,{floatingLabelText:"Kind",value:this.state.filter.kind,onChange:this.handleChangeKind},void 0,this.renderMenuItems(o)),x(j.h,{floatingLabelText:"Price from",min:t.min(),value:this.state.filter.price_from,max:this.state.filter.price_to,onChange:this.handleChangePriceFrom}),x(j.h,{floatingLabelText:"Price to",value:this.state.filter.price_to,min:this.state.filter.price_from,max:t.max(),onChange:this.handleChangePriceTo}),x(j.i,{label:"New",toggled:this.state.filter.is_new,onToggle:this.handleChangeIsNew})),x(j.j,{title:"Pony store",showMenuIconButton:!1,onRightIconButtonTouchTap:this.openModal,iconElementRight:H}),x(O,{},void 0,x(j.k,{cellHeight:"auto",cols:4},void 0,x(j.c,{},void 0,"Results: ",this.state.results.size),this.state.results.size>0?this.state.results.map(function(e,t){return x(j.l,{},t,x(j.m,{},void 0,x(j.n,{title:e.get("name")},void 0,x(A,{},void 0,e.get("is_new")?T:null)),x(j.o,{},void 0,"Price: ",e.get("price"),"$ ",z,"Kind: ",e.get("kind")," ",E,"Color: ",e.get("color"))))}):F)))}}]),t}(c.a.Component),V=n.i(h.a)({pony:n.i(w.a)()});t.default=n.i(f.connect)(V,s)(I)},"./app/containers/HomePage/selectors.js":function(e,t,n){"use strict";var r=n("./node_modules/reselect/es/index.js");n.d(t,"a",function(){return i});var o=function(){return function(e){return e.get("home")}},i=function(){return n.i(r.b)(o(),function(e){return e.get("pony")})}},"./node_modules/material-ui/svg-icons/av/fiber-new.js":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n("./node_modules/react/react.js"),i=r(o),a=n("./node_modules/recompose/pure.js"),l=r(a),s=n("./node_modules/material-ui/SvgIcon/index.js"),u=r(s),c=function(e){return i.default.createElement(u.default,e,i.default.createElement("path",{d:"M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zM8.5 15H7.3l-2.55-3.5V15H3.5V9h1.25l2.5 3.5V9H8.5v6zm5-4.74H11v1.12h2.5v1.26H11v1.11h2.5V15h-4V9h4v1.26zm7 3.74c0 .55-.45 1-1 1h-4c-.55 0-1-.45-1-1V9h1.25v4.51h1.13V9.99h1.25v3.51h1.12V9h1.25v5z"}))};c=(0,l.default)(c),c.displayName="AvFiberNew",c.muiName="SvgIcon",t.default=c},"./node_modules/material-ui/svg-icons/content/filter-list.js":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n("./node_modules/react/react.js"),i=r(o),a=n("./node_modules/recompose/pure.js"),l=r(a),s=n("./node_modules/material-ui/SvgIcon/index.js"),u=r(s),c=function(e){return i.default.createElement(u.default,e,i.default.createElement("path",{d:"M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"}))};c=(0,l.default)(c),c.displayName="ContentFilterList",c.muiName="SvgIcon",t.default=c},"./node_modules/reselect/es/index.js":function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function o(e,t){return e===t}function i(e){var t=arguments.length<=1||void 0===arguments[1]?o:arguments[1],n=null,r=null;return function(){for(var o=arguments.length,i=Array(o),a=0;a<o;a++)i[a]=arguments[a];return null!==n&&n.length===i.length&&i.every(function(e,r){return t(e,n[r])})||(r=e.apply(void 0,i)),n=i,r}}function a(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every(function(e){return"function"==typeof e})){var n=t.map(function(e){return typeof e}).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, "+("instead received the following types: ["+n+"]"))}return t}function l(e){for(var t=arguments.length,n=Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];return function(){for(var t=arguments.length,o=Array(t),i=0;i<t;i++)o[i]=arguments[i];var l=0,s=o.pop(),u=a(o),c=e.apply(void 0,[function(){return l++,s.apply(void 0,arguments)}].concat(n)),f=function(e,t){for(var n=arguments.length,o=Array(n>2?n-2:0),i=2;i<n;i++)o[i-2]=arguments[i];var a=u.map(function(n){return n.apply(void 0,[e,t].concat(o))});return c.apply(void 0,r(a))};return f.resultFunc=s,f.recomputations=function(){return l},f.resetRecomputations=function(){return l=0},f}}function s(e){var t=arguments.length<=1||void 0===arguments[1]?u:arguments[1];if("object"!=typeof e)throw new Error("createStructuredSelector expects first argument to be an object where each property is a selector, instead received a "+typeof e);var n=Object.keys(e);return t(n.map(function(t){return e[t]}),function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.reduce(function(e,t,r){return e[n[r]]=t,e},{})})}n.d(t,"b",function(){return u}),t.a=s;var u=l(i)}});