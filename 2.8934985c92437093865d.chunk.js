webpackJsonp([2],{"./app/containers/HomePage/constants.js":function(e,t,n){"use strict";n.d(t,"a",function(){return o}),n.d(t,"b",function(){return a}),n.d(t,"c",function(){return r});var o="HomePage/LOAD_PONY_REQUEST",a="HomePage/LOAD_PONY_SUCCESS",r="HomePage/LOAD_PONY_FAIL"},"./app/containers/HomePage/reducer.js":function(e,t,n){"use strict";function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments[1];switch(t.type){case r.b:return e.set("pony",n.i(a.fromJS)(t.list));default:return e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n("./node_modules/immutable/dist/immutable.js"),r=(n.n(a),n("./app/containers/HomePage/constants.js")),s=n.i(a.fromJS)({pony:n.i(a.List)([])});t.default=o}});