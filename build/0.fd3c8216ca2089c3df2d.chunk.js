webpackJsonp([0,3],{"./app/assets/pony.json":function(e,n){e.exports=[{name:"Твайлайт",color:"Фиолетовый",kind:"Единорог",price:19.99,is_new:!1},{name:"Вкурыс",color:"Розовый",kind:"Земная пони",price:20.99,is_new:!0},{name:"Щаперут",color:"Радужный",kind:"Единорог",price:30.99,is_new:!1},{name:"Вокер",color:"Розовый",kind:"Единорог",price:40.99,is_new:!1},{name:"Зуболы",color:"Фиолетовый",kind:"Единорог",price:50.99,is_new:!0},{name:"Тракерт",color:"Радужный",kind:"Аликорн",price:60.99,is_new:!1},{name:"Цуракер",color:"Фиолетовый",kind:"Аликорн",price:61.99,is_new:!1},{name:"Домерыс",color:"Розовый",kind:"Единорог",price:44.99,is_new:!1},{name:"Зовует",color:"Радужный",kind:"Пегас",price:21.99,is_new:!1},{name:"Феруль",color:"Фиолетовый",kind:"Единорог",price:46.99,is_new:!0},{name:"Коперас",color:"Фиолетовый",kind:"Земная пони",price:12.99,is_new:!1},{name:"Лайкун",color:"Фиолетовый",kind:"Единорог",price:44.99,is_new:!1},{name:"Таркос",color:"Розовый",kind:"Пегас",price:77.99,is_new:!0},{name:"Шаблокус",color:"Фиолетовый",kind:"Аликорн",price:18.99,is_new:!1},{name:"Нирока",color:"Радужный",kind:"Аликорн",price:52.99,is_new:!1},{name:"Керсант",color:"Фиолетовый",kind:"Единорог",price:38.99,is_new:!0},{name:"Лаковиц",color:"Розовый",kind:"Единорог",price:12,is_new:!1},{name:"Кремаль",color:"Фиолетовый",kind:"Земная пони",price:55.5,is_new:!1},{name:"Журок",color:"Фиолетовый",kind:"Единорог",price:10,is_new:!1},{name:"Дорминт",color:"Фиолетовый",kind:"Единорог",price:32,is_new:!1},{name:"Выхтолп",color:"Розовый",kind:"Единорог",price:59,is_new:!1},{name:"Капольк",color:"Красный",kind:"Единорог",price:89,is_new:!0},{name:"Кернук",color:"Розовый",kind:"Пегас",price:123,is_new:!1},{name:"Рокрас",color:"Фиолетовый",kind:"Единорог",price:67.32,is_new:!1},{name:"Милокай",color:"Фиолетовый",kind:"Единорог",price:57.21,is_new:!0},{name:"Трапунч",color:"Красный",kind:"Единорог",price:12.22,is_new:!1},{name:"Криповатый",color:"Фиолетовый",kind:"Земная пони",price:821.12,is_new:!1},{name:"Фыркус",color:"Фиолетовый",kind:"Единорог",price:31.12,is_new:!1},{name:"Скорож",color:"Розовый",kind:"Земная пони",price:87.21,is_new:!1},{name:"Чамбиль",color:"Красный",kind:"Пегас",price:21.11,is_new:!0}]},"./app/containers/HomePage/actions.js":function(e,n,t){"use strict";function r(){return{type:a.a}}function o(e){return{type:a.b,list:e}}function i(e){return{type:a.c,msg:e}}Object.defineProperty(n,"__esModule",{value:!0});var a=t("./app/containers/HomePage/constants.js");n.loadPonyRequest=r,n.loadPonySuccess=o,n.loadPonyFail=i},"./app/containers/HomePage/constants.js":function(e,n,t){"use strict";t.d(n,"a",function(){return r}),t.d(n,"b",function(){return o}),t.d(n,"c",function(){return i});var r="HomePage/LOAD_PONY_REQUEST",o="HomePage/LOAD_PONY_SUCCESS",i="HomePage/LOAD_PONY_FAIL"},"./app/containers/HomePage/sagas.js":function(e,n,t){"use strict";function r(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.i(i.put)(t.i(f.loadPonySuccess)(s.a));case 3:e.next=9;break;case 5:return e.prev=5,e.t0=e.catch(0),e.next=9,t.i(i.put)(t.i(f.loadPonyFail)(e.t0));case 9:case"end":return e.stop()}},l[0],this,[[0,5]])}function o(){var e;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.i(i.takeLatest)(u.a,r);case 2:e=n.sent,t.i(i.take)(a.LOCATION_CHANGE),t.i(i.cancel)(e);case 5:case"end":return n.stop()}},l[1],this)}Object.defineProperty(n,"__esModule",{value:!0});var i=t("./node_modules/redux-saga/effects.js"),a=(t.n(i),t("./node_modules/react-router-redux/lib/index.js")),u=(t.n(a),t("./app/containers/HomePage/constants.js")),c=t("./app/assets/pony.json"),s=t.n(c),f=t("./app/containers/HomePage/actions.js");n.fetchPony=r,n.ponyWatcher=o;var l=[r,o].map(regeneratorRuntime.mark);n.default=[o]},"./node_modules/redux-saga/effects.js":function(e,n,t){e.exports=t("./node_modules/redux-saga/lib/effects.js")},"./node_modules/redux-saga/lib/effects.js":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t("./node_modules/redux-saga/lib/internal/io.js");Object.defineProperty(n,"take",{enumerable:!0,get:function(){return r.take}}),Object.defineProperty(n,"takem",{enumerable:!0,get:function(){return r.takem}}),Object.defineProperty(n,"put",{enumerable:!0,get:function(){return r.put}}),Object.defineProperty(n,"race",{enumerable:!0,get:function(){return r.race}}),Object.defineProperty(n,"call",{enumerable:!0,get:function(){return r.call}}),Object.defineProperty(n,"apply",{enumerable:!0,get:function(){return r.apply}}),Object.defineProperty(n,"cps",{enumerable:!0,get:function(){return r.cps}}),Object.defineProperty(n,"fork",{enumerable:!0,get:function(){return r.fork}}),Object.defineProperty(n,"spawn",{enumerable:!0,get:function(){return r.spawn}}),Object.defineProperty(n,"join",{enumerable:!0,get:function(){return r.join}}),Object.defineProperty(n,"cancel",{enumerable:!0,get:function(){return r.cancel}}),Object.defineProperty(n,"select",{enumerable:!0,get:function(){return r.select}}),Object.defineProperty(n,"actionChannel",{enumerable:!0,get:function(){return r.actionChannel}}),Object.defineProperty(n,"cancelled",{enumerable:!0,get:function(){return r.cancelled}}),Object.defineProperty(n,"flush",{enumerable:!0,get:function(){return r.flush}}),Object.defineProperty(n,"takeEvery",{enumerable:!0,get:function(){return r.takeEvery}}),Object.defineProperty(n,"takeLatest",{enumerable:!0,get:function(){return r.takeLatest}}),Object.defineProperty(n,"throttle",{enumerable:!0,get:function(){return r.throttle}})},"./node_modules/redux-saga/lib/internal/buffers.js":function(e,n,t){"use strict";function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,n=arguments[1],t=new Array(e),r=0,o=0,u=0,f=function(n){t[o]=n,o=(o+1)%e,r++},l=function(){if(0!=r){var n=t[u];return t[u]=null,r--,u=(u+1)%e,n}},d=function(){for(var e=[];r;)e.push(l());return e};return{isEmpty:function(){return 0==r},put:function(l){if(r<e)f(l);else{var p=void 0;switch(n){case a:throw new Error(i);case c:t[o]=l,o=(o+1)%e,u=o;break;case s:p=2*e,t=d(),r=t.length,o=t.length,u=0,t.length=p,e=p,f(l)}}},take:l,flush:d}}Object.defineProperty(n,"__esModule",{value:!0}),n.buffers=n.BUFFER_OVERFLOW=void 0;var o=t("./node_modules/redux-saga/lib/internal/utils.js"),i=n.BUFFER_OVERFLOW="Channel's Buffer overflow!",a=1,u=2,c=3,s=4,f={isEmpty:o.kTrue,put:o.noop,take:o.noop};n.buffers={none:function(){return f},fixed:function(e){return r(e,a)},dropping:function(e){return r(e,u)},sliding:function(e){return r(e,c)},expanding:function(e){return r(e,s)}}},"./node_modules/redux-saga/lib/internal/channel.js":function(e,n,t){"use strict";function r(){function e(e){return t.push(e),function(){return(0,c.remove)(t,e)}}function n(e){for(var n=t.slice(),r=0,o=n.length;r<o;r++)n[r](e)}var t=[];return{subscribe:e,emit:n}}function o(){function e(){if(a&&u.length)throw(0,c.internalErr)("Cannot have a closed channel with pending takers");if(u.length&&!i.isEmpty())throw(0,c.internalErr)("Cannot have pending takers with non empty buffer")}function n(n){if(e(),(0,c.check)(n,c.is.notUndef,v),!a){if(!u.length)return i.put(n);for(var t=0;t<u.length;t++){var r=u[t];if(!r[c.MATCH]||r[c.MATCH](n))return u.splice(t,1),r(n)}}}function t(n){e(),(0,c.check)(n,c.is.func,"channel.take's callback must be a function"),a&&i.isEmpty()?n(d):i.isEmpty()?(u.push(n),n.cancel=function(){return(0,c.remove)(u,n)}):n(i.take())}function r(n){return e(),(0,c.check)(n,c.is.func,"channel.flush' callback must be a function"),a&&i.isEmpty()?void n(d):void n(i.flush())}function o(){if(e(),!a&&(a=!0,u.length)){var n=u;u=[];for(var t=0,r=n.length;t<r;t++)n[t](d)}}var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s.buffers.fixed(),a=!1,u=[];return(0,c.check)(i,c.is.buffer,h),{take:t,put:n,flush:r,close:o,get __takers__(){return u},get __closed__(){return a}}}function i(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s.buffers.none(),t=arguments[2];arguments.length>2&&(0,c.check)(t,c.is.func,"Invalid match function passed to eventChannel");var r=o(n),i=e(function(e){return p(e)?void r.close():void(t&&!t(e)||r.put(e))});if(!c.is.func(i))throw new Error("in eventChannel: subscribe should return a function to unsubscribe");return{take:r.take,flush:r.flush,close:function(){r.__closed__||(r.close(),i())}}}function a(e){var n=i(function(n){return e(function(e){return e[c.SAGA_ACTION]?void n(e):void(0,f.asap)(function(){return n(e)})})});return u({},n,{take:function(e,t){arguments.length>1&&((0,c.check)(t,c.is.func,"channel.take's matcher argument must be a function"),e[c.MATCH]=t),n.take(e)}})}Object.defineProperty(n,"__esModule",{value:!0}),n.UNDEFINED_INPUT_ERROR=n.INVALID_BUFFER=n.isEnd=n.END=void 0;var u=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e};n.emitter=r,n.channel=o,n.eventChannel=i,n.stdChannel=a;var c=t("./node_modules/redux-saga/lib/internal/utils.js"),s=t("./node_modules/redux-saga/lib/internal/buffers.js"),f=t("./node_modules/redux-saga/lib/internal/scheduler.js"),l="@@redux-saga/CHANNEL_END",d=n.END={type:l},p=n.isEnd=function(e){return e&&e.type===l},h=n.INVALID_BUFFER="invalid buffer passed to channel factory function",v=n.UNDEFINED_INPUT_ERROR="Saga was provided with an undefined action"},"./node_modules/redux-saga/lib/internal/io.js":function(e,n,t){"use strict";function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"*";if(arguments.length&&(0,j.check)(arguments[0],j.is.notUndef,"take(patternOrChannel): patternOrChannel is undefined"),j.is.pattern(e))return D(P,{pattern:e});if(j.is.channel(e))return D(P,{channel:e});throw new Error("take(patternOrChannel): argument "+String(e)+" is not valid channel or a valid pattern")}function i(e,n){return arguments.length>1?((0,j.check)(e,j.is.notUndef,"put(channel, action): argument channel is undefined"),(0,j.check)(e,j.is.channel,"put(channel, action): argument "+e+" is not a valid channel"),(0,j.check)(n,j.is.notUndef,"put(channel, action): argument action is undefined")):((0,j.check)(e,j.is.notUndef,"put(action): argument action is undefined"),n=e,e=null),D(A,{channel:e,action:n})}function a(e){return D(x,e)}function u(e,n,t){(0,j.check)(n,j.is.notUndef,e+": argument fn is undefined");var r=null;if(j.is.array(n)){var o=n,i=w(o,2);r=i[0],n=i[1]}else if(n.fn){var a=n;r=a.context,n=a.fn}return(0,j.check)(n,j.is.func,e+": argument "+n+" is not a function"),{context:r,fn:n,args:t}}function c(e){for(var n=arguments.length,t=Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];return D(C,u("call",e,t))}function s(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return D(C,u("apply",{context:e,fn:n},t))}function f(e){for(var n=arguments.length,t=Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];return D(T,u("cps",e,t))}function l(e){for(var n=arguments.length,t=Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];return D(N,u("fork",e,t))}function d(e){for(var n=arguments.length,t=Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];var o=l.apply(void 0,[e].concat(t));return o[N].detached=!0,o}function p(e){if((0,j.check)(e,j.is.notUndef,"join(task): argument task is undefined"),!F(e))throw new Error("join(task): argument "+e+" is not a valid Task object \n(HINT: if you are getting this errors in tests, consider using createMockTask from redux-saga/utils)");return D(S,e)}function h(e){if((0,j.check)(e,j.is.notUndef,"cancel(task): argument task is undefined"),!F(e))throw new Error("cancel(task): argument "+e+" is not a valid Task object \n(HINT: if you are getting this errors in tests, consider using createMockTask from redux-saga/utils)");return D(L,e)}function v(e){for(var n=arguments.length,t=Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];return 0===arguments.length?e=j.ident:((0,j.check)(e,j.is.notUndef,"select(selector,[...]): argument selector is undefined"),(0,j.check)(e,j.is.func,"select(selector,[...]): argument "+e+" is not a function")),D(H,{selector:e,args:t})}function m(e,n){return(0,j.check)(e,j.is.notUndef,"actionChannel(pattern,...): argument pattern is undefined"),arguments.length>1&&((0,j.check)(n,j.is.notUndef,"actionChannel(pattern, buffer): argument buffer is undefined"),(0,j.check)(n,j.is.notUndef,"actionChannel(pattern, buffer): argument "+n+" is not a valid buffer")),D(U,{pattern:e,buffer:n})}function g(){return D(I,{})}function y(e){return(0,j.check)(e,j.is.channel,"flush(channel): argument "+e+" is not valid channel"),D(R,e)}function b(e,n){for(var t=arguments.length,r=Array(t>2?t-2:0),o=2;o<t;o++)r[o-2]=arguments[o];return l.apply(void 0,[E.takeEveryHelper,e,n].concat(r))}function k(e,n){for(var t=arguments.length,r=Array(t>2?t-2:0),o=2;o<t;o++)r[o-2]=arguments[o];return l.apply(void 0,[E.takeLatestHelper,e,n].concat(r))}function _(e,n,t){for(var r=arguments.length,o=Array(r>3?r-3:0),i=3;i<r;i++)o[i-3]=arguments[i];return l.apply(void 0,[E.throttleHelper,e,n,t].concat(o))}Object.defineProperty(n,"__esModule",{value:!0}),n.asEffect=n.takem=void 0;var w=function(){function e(e,n){var t=[],r=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(t.push(a.value),!n||t.length!==n);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&u.return&&u.return()}finally{if(o)throw i}}return t}return function(n,t){if(Array.isArray(n))return n;if(Symbol.iterator in Object(n))return e(n,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();n.take=o,n.put=i,n.race=a,n.call=c,n.apply=s,n.cps=f,n.fork=l,n.spawn=d,n.join=p,n.cancel=h,n.select=v,n.actionChannel=m,n.cancelled=g,n.flush=y,n.takeEvery=b,n.takeLatest=k,n.throttle=_;var j=t("./node_modules/redux-saga/lib/internal/utils.js"),E=t("./node_modules/redux-saga/lib/internal/sagaHelpers.js"),O=(0,j.sym)("IO"),P="TAKE",A="PUT",x="RACE",C="CALL",T="CPS",N="FORK",S="JOIN",L="CANCEL",H="SELECT",U="ACTION_CHANNEL",I="CANCELLED",R="FLUSH",q=function(e,n){return e+" has been deprecated in favor of "+n+", please update your code"},D=function(e,n){var t;return t={},r(t,O,!0),r(t,e,n),t};o.maybe=function(){var e=o.apply(void 0,arguments);return e[P].maybe=!0,e};n.takem=(0,j.deprecate)(o.maybe,q("takem","take.maybe"));i.resolve=function(){var e=i.apply(void 0,arguments);return e[A].resolve=!0,e},i.sync=(0,j.deprecate)(i.resolve,q("put.sync","put.resolve"));var F=function(e){return e[j.TASK]},M=function(e){return function(n){return n&&n[O]&&n[e]}};n.asEffect={take:M(P),put:M(A),race:M(x),call:M(C),cps:M(T),fork:M(N),join:M(S),cancel:M(L),select:M(H),actionChannel:M(U),cancelled:M(I),flush:M(R)}},"./node_modules/redux-saga/lib/internal/sagaHelpers.js":function(e,n,t){"use strict";function r(e,n){function t(n,t){if(i===h)return p;if(t)throw i=h,t;o&&o(n);var r=e[i](),a=c(r,3),u=a[0],s=a[1],f=a[2];return i=u,o=f,i===h?p:s}var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"iterator",o=void 0,i=n;return(0,f.makeIterator)(t,function(e){return t(null,e)},r,!0)}function o(e){return f.is.channel(e)?"channel":Array.isArray(e)?String(e.map(function(e){return String(e)})):String(e)}function i(e,n){for(var t=arguments.length,i=Array(t>2?t-2:0),a=2;a<t;a++)i[a-2]=arguments[a];var u={done:!1,value:(0,l.take)(e)},c=function(e){return{done:!1,value:l.fork.apply(void 0,[n].concat(i,[e]))}},f=void 0,d=function(e){return f=e};return r({q1:function(){return["q2",u,d]},q2:function(){return f===s.END?[h]:["q1",c(f)]}},"q1","takeEvery("+o(e)+", "+n.name+")")}function a(e,n){for(var t=arguments.length,i=Array(t>2?t-2:0),a=2;a<t;a++)i[a-2]=arguments[a];var u={done:!1,value:(0,l.take)(e)},c=function(e){return{done:!1,value:l.fork.apply(void 0,[n].concat(i,[e]))}},f=function(e){return{done:!1,value:(0,l.cancel)(e)}},d=void 0,p=void 0,v=function(e){return d=e},m=function(e){return p=e};return r({q1:function(){return["q2",u,m]},q2:function(){return p===s.END?[h]:d?["q3",f(d)]:["q1",c(p),v]},q3:function(){return["q1",c(p),v]}},"q1","takeLatest("+o(e)+", "+n.name+")")}function u(e,n,t){for(var i=arguments.length,a=Array(i>3?i-3:0),u=3;u<i;u++)a[u-3]=arguments[u];var c=void 0,p=void 0,v={done:!1,value:(0,l.actionChannel)(n,d.buffers.sliding(1))},m=function(){return{done:!1,value:(0,l.take)(p,n)}},g=function(e){return{done:!1,value:l.fork.apply(void 0,[t].concat(a,[e]))}},y={done:!1,value:(0,l.call)(f.delay,e)},b=function(e){return c=e},k=function(e){return p=e};return r({q1:function(){return["q2",v,k]},q2:function(){return["q3",m(),b]},q3:function(){return c===s.END?[h]:["q4",g(c)]},q4:function(){return["q2",y]}},"q1","throttle("+o(n)+", "+t.name+")")}Object.defineProperty(n,"__esModule",{value:!0}),n.throttle=n.takeLatest=n.takeEvery=void 0;var c=function(){function e(e,n){var t=[],r=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(t.push(a.value),!n||t.length!==n);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&u.return&&u.return()}finally{if(o)throw i}}return t}return function(n,t){if(Array.isArray(n))return n;if(Symbol.iterator in Object(n))return e(n,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();n.takeEveryHelper=i,n.takeLatestHelper=a,n.throttleHelper=u;var s=t("./node_modules/redux-saga/lib/internal/channel.js"),f=t("./node_modules/redux-saga/lib/internal/utils.js"),l=t("./node_modules/redux-saga/lib/internal/io.js"),d=t("./node_modules/redux-saga/lib/internal/buffers.js"),p={done:!0,value:void 0},h={},v=function(e){return"import "+e+" from 'redux-saga' has been deprecated in favor of import "+e+" from 'redux-saga/effects'.\nThe latter will not work with yield*, as helper effects are wrapped automatically for you in fork effect.\nTherefore yield "+e+" will return task descriptor to your saga and execute next lines of code."};n.takeEvery=(0,f.deprecate)(i,v("takeEvery")),n.takeLatest=(0,f.deprecate)(a,v("takeLatest")),n.throttle=(0,f.deprecate)(u,v("throttle"))},"./node_modules/redux-saga/lib/internal/scheduler.js":function(e,n,t){"use strict";function r(e){try{i(),e()}finally{a()}}function o(e){c?u.push(e):r(e)}function i(){c++}function a(){c--,!c&&u.length&&r(u.shift())}Object.defineProperty(n,"__esModule",{value:!0}),n.asap=o,n.suspend=i,n.flush=a;var u=[],c=0},"./node_modules/redux-saga/lib/internal/utils.js":function(e,n,t){"use strict";function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n,t){if(!n(e))throw d("error","uncaught at check",t),new Error(t)}function i(e,n){var t=e.indexOf(n);t>=0&&e.splice(t,1)}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=v({},e),t=new Promise(function(e,t){n.resolve=e,n.reject=t});return n.promise=t,n}function u(e){for(var n=[],t=0;t<e;t++)n.push(a());return n}function c(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],t=void 0,r=new Promise(function(r){t=setTimeout(function(){return r(n)},e)});return r[k]=function(){return clearTimeout(t)},r}function s(){var e,n=!0,t=void 0,o=void 0;return e={},r(e,y,!0),r(e,"isRunning",function(){return n}),r(e,"result",function(){return t}),r(e,"error",function(){return o}),r(e,"setRunning",function(e){return n=e}),r(e,"setResult",function(e){return t=e}),r(e,"setError",function(e){return o=e}),e}function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return function(){return++e}}function l(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:O,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments[3],o={name:t,next:e,throw:n,return:P};return r&&(o[b]=!0),"undefined"!=typeof Symbol&&(o[Symbol.iterator]=function(){return o}),o}function d(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";"undefined"==typeof window?console.log("redux-saga "+e+": "+n+"\n"+(t&&t.stack||t)):console[e](n,t)}function p(e,n){return function(){return j&&d("warn",n),e.apply(void 0,arguments)}}function h(e){return function(n){var t=Object.defineProperty(n,_,{value:!0});return e(t)}}Object.defineProperty(n,"__esModule",{value:!0});var v=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};n.check=o,n.remove=i,n.deferred=a,n.arrayOfDeffered=u,n.delay=c,n.createMockTask=s,n.autoInc=f,n.makeIterator=l,n.log=d,n.deprecate=p,n.wrapSagaDispatch=h;var g=n.sym=function(e){return"@@redux-saga/"+e},y=n.TASK=g("TASK"),b=n.HELPER=g("HELPER"),k=(n.MATCH=g("MATCH"),n.CANCEL=g("cancelPromise")),_=n.SAGA_ACTION=g("SAGA_ACTION"),w=n.konst=function(e){return function(){return e}},j=(n.kTrue=w(!0),n.kFalse=w(!1),n.noop=function(){},n.ident=function(e){return e},n.isDev=!1),E=n.is={undef:function(e){return null===e||void 0===e},notUndef:function(e){return null!==e&&void 0!==e},func:function(e){return"function"==typeof e},number:function(e){return"number"==typeof e},array:Array.isArray,promise:function(e){return e&&E.func(e.then)},iterator:function(e){return e&&E.func(e.next)&&E.func(e.throw)},task:function(e){return e&&e[y]},observable:function(e){return e&&E.func(e.subscribe)},buffer:function(e){return e&&E.func(e.isEmpty)&&E.func(e.take)&&E.func(e.put)},pattern:function(e){return e&&("string"==typeof e||"symbol"===("undefined"==typeof e?"undefined":m(e))||E.func(e)||E.array(e))},channel:function(e){return e&&E.func(e.take)&&E.func(e.close)},helper:function(e){return e&&e[b]}},O=(n.uid=f(),function(e){throw e}),P=function(e){return{value:e,done:!0}};n.internalErr=function(e){return new Error("\n  redux-saga: Error checking hooks detected an inconsistent state. This is likely a bug\n  in redux-saga code and not yours. Thanks for reporting this in the project's github repo.\n  Error: "+e+"\n")}}});