webpackJsonp([0xd2a57dc1d883],{81:function(e,n,o){"use strict";function t(e,n,o){var t=r.map(function(o){if(o.plugin[e]){var t=o.plugin[e](n,o.options);return t}});return t=t.filter(function(e){return"undefined"!=typeof e}),t.length>0?t:o?[o]:[]}function a(e,n,o){return r.reduce(function(o,t){return t.plugin[e]?o.then(function(){return t.plugin[e](n,t.options)}):o},Promise.resolve())}n.__esModule=!0,n.apiRunner=t,n.apiRunnerAsync=a;var r=[{plugin:o(372),options:{plugins:[],trackingId:"UA-73379983-2"}},{plugin:o(374),options:{plugins:[]}},{plugin:o(371),options:{plugins:[]}}]},206:function(e,n,o){"use strict";n.components={"component---node-modules-gatsby-plugin-offline-app-shell-js":o(328),"component---src-templates-page-template-jsx":o(334),"component---src-templates-post-template-jsx":o(335),"component---src-templates-category-template-jsx":o(333),"component---src-pages-404-jsx":o(330),"component---src-pages-categories-jsx":o(331),"component---src-pages-index-jsx":o(332)},n.json={"layout-index.json":o(336),"offline-plugin-app-shell-fallback.json":o(364),"about.json":o(339),"projects.json":o(367),"aplicaciones-html-5.json":o(342),"categories-desarrollo-web.json":o(345),"el-ano-de-sofia.json":o(356),"categories-pensamiento.json":o(347),"crea-tu-propia-red-de-wordpress.json":o(349),"je-suis-andreas.json":o(362),"categories-actualidad.json":o(344),"working-class-heroes.json":o(369),"categories-memorias.json":o(346),"docker-compose-y-wordpress-juntos-pero-no-revueltos.json":o(350),"gaiteira.json":o(358),"ponte-las-pilas-con-el-software-libre.json":o(366),"anadir-ssl-a-tu-aplicacion-web-dockerizada.json":o(341),"comentarios-y-compartir-en-redes-sociales-en-gatsby.json":o(348),"actualizando-educaas-rancher-nueva-version.json":o(340),"guarda-contenido-web-wallabag.json":o(359),"educaas-soberania-digital-1.json":o(352),"wordpress-ldap-docker.json":o(368),"etiquetas-facebook-gatsbyjs.json":o(357),"imagenes-docker-actualizadas-automaticamente.json":o(360),"educaas-soberania-digital-3.json":o(354),"educaas-soberania-digital-4.json":o(355),"documentar-para-compartir.json":o(351),"openedx-contenedores-docker.json":o(365),"educaas-soberania-digital-2.json":o(353),"lo-complejo-lo-emergente-lo-diferente-que-viene.json":o(363),"404.json":o(337),"categories.json":o(343),"index.json":o(361),"404-html.json":o(338)},n.layouts={"layout---index":o(329)}},207:function(e,n,o){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}function a(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function r(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function u(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}n.__esModule=!0;var s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(e[t]=o[t])}return e},i=o(3),c=t(i),l=o(8),p=t(l),f=o(138),d=t(f),m=o(57),h=t(m),g=o(81),y=o(576),x=t(y),j=function(e){var n=e.children;return c.default.createElement("div",null,n())},b=function(e){function n(o){a(this,n);var t=r(this,e.call(this)),u=o.location;return d.default.getPage(u.pathname)||(u=s({},u,{pathname:"/404.html"})),t.state={location:u,pageResources:d.default.getResourcesForPathname(u.pathname)},t}return u(n,e),n.prototype.componentWillReceiveProps=function(e){var n=this;if(this.state.location.pathname!==e.location.pathname){var o=d.default.getResourcesForPathname(e.location.pathname);if(o)this.setState({location:e.location,pageResources:o});else{var t=e.location;d.default.getPage(t.pathname)||(t=s({},t,{pathname:"/404.html"})),d.default.getResourcesForPathname(t.pathname,function(e){n.setState({location:t,pageResources:e})})}}},n.prototype.componentDidMount=function(){var e=this;h.default.on("onPostLoadPageResources",function(n){d.default.getPage(e.state.location.pathname)&&n.page.path===d.default.getPage(e.state.location.pathname).path&&e.setState({pageResources:n.pageResources})})},n.prototype.shouldComponentUpdate=function(e,n){return!n.pageResources||(!(this.state.pageResources||!n.pageResources)||(this.state.pageResources.component!==n.pageResources.component||(this.state.pageResources.json!==n.pageResources.json||(!(this.state.location.key===n.location.key||!n.pageResources.page||!n.pageResources.page.matchPath&&!n.pageResources.page.path)||(0,x.default)(this,e,n)))))},n.prototype.render=function(){var e=(0,g.apiRunner)("replaceComponentRenderer",{props:s({},this.props,{pageResources:this.state.pageResources}),loader:f.publicLoader}),n=e[0];return this.props.page?this.state.pageResources?n||(0,i.createElement)(this.state.pageResources.component,s({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null:this.props.layout?n||(0,i.createElement)(this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:j,s({key:this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:"DefaultLayout"},this.props)):null},n}(c.default.Component);b.propTypes={page:p.default.bool,layout:p.default.bool,location:p.default.object},n.default=b,e.exports=n.default},57:function(e,n,o){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}var a=o(466),r=t(a),u=(0,r.default)();e.exports=u},208:function(e,n,o){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}var a=o(80),r=o(139),u=t(r),s={};e.exports=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(o){var t=decodeURIComponent(o),r=(0,u.default)(t,n);if(r.split("#").length>1&&(r=r.split("#").slice(0,-1).join("")),r.split("?").length>1&&(r=r.split("?").slice(0,-1).join("")),s[r])return s[r];var i=void 0;return e.some(function(e){if(e.matchPath){if((0,a.matchPath)(r,{path:e.path})||(0,a.matchPath)(r,{path:e.matchPath}))return i=e,s[r]=e,!0}else{if((0,a.matchPath)(r,{path:e.path,exact:!0}))return i=e,s[r]=e,!0;if((0,a.matchPath)(r,{path:e.path+"index.html"}))return i=e,s[r]=e,!0}return!1}),i}}},209:function(e,n,o){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}var a=o(108),r=t(a),u=o(81),s=(0,u.apiRunner)("replaceHistory"),i=s[0],c=i||(0,r.default)();e.exports=c},338:function(e,n,o){o(1),e.exports=function(e){return o.e(0xa2868bfb69fc,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(380)})})}},337:function(e,n,o){o(1),e.exports=function(e){return o.e(0xe70826b53c04,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(381)})})}},339:function(e,n,o){o(1),e.exports=function(e){return o.e(0xf927f8900006,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(382)})})}},340:function(e,n,o){o(1),e.exports=function(e){return o.e(0xec08a9b98e13,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(383)})})}},341:function(e,n,o){o(1),e.exports=function(e){return o.e(0xb18cf072b4b3,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(384)})})}},342:function(e,n,o){o(1),e.exports=function(e){return o.e(0x699923363f1d,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(385)})})}},344:function(e,n,o){o(1),e.exports=function(e){return o.e(0xa97ec8d4a414,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(386)})})}},345:function(e,n,o){o(1),e.exports=function(e){return o.e(0xcbfeb534bf1a,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(387)})})}},346:function(e,n,o){o(1),e.exports=function(e){return o.e(0xe992bba782a9,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(388)})})}},347:function(e,n,o){o(1),e.exports=function(e){return o.e(0x993740810235,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(389)})})}},343:function(e,n,o){o(1),e.exports=function(e){return o.e(30875753179511,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(390)})})}},348:function(e,n,o){o(1),e.exports=function(e){return o.e(2744319813989,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(391)})})}},349:function(e,n,o){o(1),e.exports=function(e){return o.e(0x9c6b282a6736,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(392)})})}},350:function(e,n,o){o(1),e.exports=function(e){return o.e(0x895453203f98,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(393)})})}},351:function(e,n,o){o(1),e.exports=function(e){return o.e(0xb04ede3ac7b8,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(394)})})}},352:function(e,n,o){o(1),e.exports=function(e){return o.e(0x9a91225cd834,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(395)})})}},353:function(e,n,o){o(1),e.exports=function(e){return o.e(0xccf51a3ecfe6,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(396)})})}},354:function(e,n,o){o(1),e.exports=function(e){return o.e(0xc08e7e6b015d,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(397)})})}},355:function(e,n,o){o(1),e.exports=function(e){return o.e(0x85f5a8865d0b,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(398)})})}},356:function(e,n,o){o(1),e.exports=function(e){return o.e(0xd1246d5d9d39,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(399)})})}},357:function(e,n,o){o(1),e.exports=function(e){return o.e(0xe4f79d08fec2,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(400)})})}},358:function(e,n,o){o(1),e.exports=function(e){return o.e(0x9b2224f06d5e,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(401)})})}},359:function(e,n,o){o(1),e.exports=function(e){return o.e(0xe18a00bfb861,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(402)})})}},360:function(e,n,o){o(1),e.exports=function(e){return o.e(7747617219298,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(403)})})}},361:function(e,n,o){o(1),e.exports=function(e){return o.e(0x81b8806e4260,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(404)})})}},362:function(e,n,o){o(1),e.exports=function(e){return o.e(66883036354974,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(405)})})}},336:function(e,n,o){o(1),e.exports=function(e){return o.e(60335399758886,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(111)})})}},363:function(e,n,o){o(1),e.exports=function(e){return o.e(0xa5f491b4f1ca,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(406)})})}},364:function(e,n,o){o(1),e.exports=function(e){return o.e(0xbf4c176e203a,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(407)})})}},365:function(e,n,o){o(1),e.exports=function(e){return o.e(0x73e088983eee,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(408)})})}},366:function(e,n,o){o(1),e.exports=function(e){return o.e(0x8bc42cd14a10,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(409)})})}},367:function(e,n,o){o(1),e.exports=function(e){return o.e(97786326051841,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(410)})})}},368:function(e,n,o){o(1),e.exports=function(e){return o.e(0x6778f63f9eab,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(411)})})}},369:function(e,n,o){o(1),e.exports=function(e){return o.e(0xb9d42507b831,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(412)})})}},329:function(e,n,o){o(1),e.exports=function(e){return o.e(79611799117203,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(210)})})}},138:function(e,n,o){(function(e){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}n.__esModule=!0,n.publicLoader=void 0;var a=o(3),r=(t(a),o(208)),u=t(r),s=o(57),i=t(s),c=o(139),l=t(c),p=void 0,f={},d={},m={},h={},g={},y=[],x=[],j={},b="",v=[],C={},N=function(e){return e&&e.default||e},k=void 0,w=!0,R=[],_={},P={},E=5;k=o(211)({getNextQueuedResources:function(){return v.slice(-1)[0]},createResourceDownload:function(e){T(e,function(){v=v.filter(function(n){return n!==e}),k.onResourcedFinished(e)})}}),i.default.on("onPreLoadPageResources",function(e){k.onPreLoadPageResources(e)}),i.default.on("onPostLoadPageResources",function(e){k.onPostLoadPageResources(e)});var L=function(e,n){return C[e]>C[n]?1:C[e]<C[n]?-1:0},O=function(e,n){return j[e]>j[n]?1:j[e]<j[n]?-1:0},T=function(n){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(h[n])e.nextTick(function(){o(null,h[n])});else{var t=void 0;t="component---"===n.slice(0,12)?d.components[n]:"layout---"===n.slice(0,9)?d.layouts[n]:d.json[n],t(function(e,t){h[n]=t,R.push({resource:n,succeeded:!e}),P[n]||(P[n]=e),R=R.slice(-E),o(e,t)})}},S=function(n,o){g[n]?e.nextTick(function(){o(null,g[n])}):P[n]?e.nextTick(function(){o(P[n])}):T(n,function(e,t){if(e)o(e);else{var a=N(t());g[n]=a,o(e,a)}})},A=function(){var e=navigator.onLine;if("boolean"==typeof e)return e;var n=R.find(function(e){return e.succeeded});return!!n},D=function(e,n){console.log(n),_[e]||(_[e]=n),A()&&window.location.pathname.replace(/\/$/g,"")!==e.replace(/\/$/g,"")&&(window.location.pathname=e)},U=1,M={empty:function(){x=[],j={},C={},v=[],y=[],b=""},addPagesArray:function(e){y=e,b="",p=(0,u.default)(e,b)},addDevRequires:function(e){f=e},addProdRequires:function(e){d=e},dequeue:function(){return x.pop()},enqueue:function(e){var n=(0,l.default)(e,b);if(!y.some(function(e){return e.path===n}))return!1;var o=1/U;U+=1,j[n]?j[n]+=1:j[n]=1,M.has(n)||x.unshift(n),x.sort(O);var t=p(n);return t.jsonName&&(C[t.jsonName]?C[t.jsonName]+=1+o:C[t.jsonName]=1+o,v.indexOf(t.jsonName)!==-1||h[t.jsonName]||v.unshift(t.jsonName)),t.componentChunkName&&(C[t.componentChunkName]?C[t.componentChunkName]+=1+o:C[t.componentChunkName]=1+o,v.indexOf(t.componentChunkName)!==-1||h[t.jsonName]||v.unshift(t.componentChunkName)),v.sort(L),k.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:v,resourcesCount:C}},getPages:function(){return{pathArray:x,pathCount:j}},getPage:function(e){return p(e)},has:function(e){return x.some(function(n){return n===e})},getResourcesForPathname:function(n){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};w&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(p(n)||navigator.serviceWorker.getRegistrations().then(function(e){if(e.length){for(var n=e,o=Array.isArray(n),t=0,n=o?n:n[Symbol.iterator]();;){var a;if(o){if(t>=n.length)break;a=n[t++]}else{if(t=n.next(),t.done)break;a=t.value}var r=a;r.unregister()}window.location.reload()}})),w=!1;if(_[n])return D(n,'Previously detected load failure for "'+n+'"'),o();var t=p(n);if(!t)return D(n,"A page wasn't found for \""+n+'"'),o();if(n=t.path,m[n])return e.nextTick(function(){o(m[n]),i.default.emit("onPostLoadPageResources",{page:t,pageResources:m[n]})}),m[n];i.default.emit("onPreLoadPageResources",{path:n});var a=void 0,r=void 0,u=void 0,s=function(){if(a&&r&&(!t.layoutComponentChunkName||u)){m[n]={component:a,json:r,layout:u,page:t};var e={component:a,json:r,layout:u,page:t};o(e),i.default.emit("onPostLoadPageResources",{page:t,pageResources:e})}};return S(t.componentChunkName,function(e,n){e&&D(t.path,"Loading the component for "+t.path+" failed"),a=n,s()}),S(t.jsonName,function(e,n){e&&D(t.path,"Loading the JSON for "+t.path+" failed"),r=n,s()}),void(t.layoutComponentChunkName&&S(t.layout,function(e,n){e&&D(t.path,"Loading the Layout for "+t.path+" failed"),u=n,s()}))},peek:function(e){return x.slice(-1)[0]},length:function(){return x.length},indexOf:function(e){return x.length-x.indexOf(e)-1}};n.publicLoader={getResourcesForPathname:M.getResourcesForPathname};n.default=M}).call(n,o(118))},413:function(e,n){e.exports=[{componentChunkName:"component---node-modules-gatsby-plugin-offline-app-shell-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"offline-plugin-app-shell-fallback.json",path:"/offline-plugin-app-shell-fallback/"},{componentChunkName:"component---src-templates-page-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"about.json",path:"/about"},{componentChunkName:"component---src-templates-page-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"projects.json",path:"/projects"},{componentChunkName:"component---src-templates-post-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"aplicaciones-html-5.json",path:"/aplicaciones-html5/"},{componentChunkName:"component---src-templates-category-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"categories-desarrollo-web.json",path:"/categories/desarrollo-web/"},{componentChunkName:"component---src-templates-post-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"el-ano-de-sofia.json",path:"/el-año-de-sofia/"},{componentChunkName:"component---src-templates-category-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"categories-pensamiento.json",path:"/categories/pensamiento/"},{componentChunkName:"component---src-templates-post-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"crea-tu-propia-red-de-wordpress.json",path:"/crea-tu-propia-red-de-wordpress/"},{componentChunkName:"component---src-templates-post-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"je-suis-andreas.json",path:"/je-suis-andreas/"},{componentChunkName:"component---src-templates-category-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"categories-actualidad.json",path:"/categories/actualidad/"},{componentChunkName:"component---src-templates-post-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"working-class-heroes.json",path:"/working-class-heroes/"},{componentChunkName:"component---src-templates-category-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"categories-memorias.json",path:"/categories/memorias/"},{componentChunkName:"component---src-templates-post-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"docker-compose-y-wordpress-juntos-pero-no-revueltos.json",path:"/docker-compose-y-wordpress-juntos-pero-no-revueltos/"},{componentChunkName:"component---src-templates-post-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"gaiteira.json",path:"/gaiteira/"},{componentChunkName:"component---src-templates-post-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"ponte-las-pilas-con-el-software-libre.json",path:"/ponte-las-pilas-con-el-software-libre/"},{componentChunkName:"component---src-templates-post-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"anadir-ssl-a-tu-aplicacion-web-dockerizada.json",path:"/anadir-SSL-a-tu-aplicacion-web-dockerizada/"},{componentChunkName:"component---src-templates-post-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"comentarios-y-compartir-en-redes-sociales-en-gatsby.json",path:"/comentarios-y-compartir-en-redes-sociales-en-gatsby/"},{componentChunkName:"component---src-templates-post-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"actualizando-educaas-rancher-nueva-version.json",path:"/actualizando-educaas-rancher-nueva-version/"},{componentChunkName:"component---src-templates-post-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"guarda-contenido-web-wallabag.json",path:"/guarda-contenido-web-wallabag/"},{componentChunkName:"component---src-templates-post-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"educaas-soberania-digital-1.json",path:"/educaas-soberania-digital-1/"},{componentChunkName:"component---src-templates-post-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"wordpress-ldap-docker.json",path:"/wordpress-ldap-docker/"},{componentChunkName:"component---src-templates-post-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"etiquetas-facebook-gatsbyjs.json",path:"/etiquetas-facebook-gatsbyjs/"},{componentChunkName:"component---src-templates-post-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"imagenes-docker-actualizadas-automaticamente.json",path:"/imagenes-docker-actualizadas-automaticamente/"},{componentChunkName:"component---src-templates-post-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"educaas-soberania-digital-3.json",path:"/educaas-soberania-digital-3/"},{componentChunkName:"component---src-templates-post-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"educaas-soberania-digital-4.json",path:"/educaas-soberania-digital-4/"},{componentChunkName:"component---src-templates-post-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"documentar-para-compartir.json",path:"/documentar-para-compartir/"},{componentChunkName:"component---src-templates-post-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"openedx-contenedores-docker.json",path:"/openedx-contenedores-docker/"},{componentChunkName:"component---src-templates-post-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"educaas-soberania-digital-2.json",path:"/educaas-soberania-digital-2/"},{componentChunkName:"component---src-templates-post-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"lo-complejo-lo-emergente-lo-diferente-que-viene.json",path:"/lo-complejo-lo-emergente-lo-diferente-que-viene/"},{componentChunkName:"component---src-pages-404-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"404.json",path:"/404/"},{componentChunkName:"component---src-pages-categories-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"categories.json",path:"/categories/"},{componentChunkName:"component---src-pages-index-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"index.json",path:"/"},{componentChunkName:"component---src-pages-404-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"404-html.json",path:"/404.html"}]},211:function(e,n){"use strict";e.exports=function(e){var n=e.getNextQueuedResources,o=e.createResourceDownload,t=[],a=[],r=function(){var e=n();e&&(a.push(e),o(e))},u=function(e){switch(e.type){case"RESOURCE_FINISHED":a=a.filter(function(n){return n!==e.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":t.push(e.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":t=t.filter(function(n){return n!==e.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===a.length&&0===t.length&&r()},0)};return{onResourcedFinished:function(e){u({type:"RESOURCE_FINISHED",payload:e})},onPreLoadPageResources:function(e){u({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:e})},onPostLoadPageResources:function(e){u({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:e})},onNewResourcesAdded:function(){u({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:t,resourcesDownloading:a}},empty:function(){t=[],a=[]}}}},0:function(e,n,o){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}var a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(e[t]=o[t])}return e},r=o(81),u=o(3),s=t(u),i=o(175),c=t(i),l=o(80),p=o(378),f=o(313),d=t(f),m=o(110),h=o(209),g=t(h),y=o(57),x=t(y),j=o(413),b=t(j),v=o(414),C=t(v),N=o(207),k=t(N),w=o(206),R=t(w),_=o(138),P=t(_);o(235),window.___history=g.default,window.___emitter=x.default,P.default.addPagesArray(b.default),P.default.addProdRequires(R.default),window.asyncRequires=R.default,window.___loader=P.default,window.matchPath=l.matchPath;var E=C.default.reduce(function(e,n){return e[n.fromPath]=n,e},{}),L=function(e){var n=E[e];return null!=n&&(g.default.replace(n.toPath),!0)};L(window.location.pathname),(0,r.apiRunnerAsync)("onClientEntry").then(function(){function e(e){window.___history&&i!==!1||(window.___history=e,i=!0,e.listen(function(e,n){L(e.pathname)||setTimeout(function(){(0,r.apiRunner)("onRouteUpdate",{location:e,action:n})},0)}))}function n(e,n){var o=n.location.pathname,t=(0,r.apiRunner)("shouldUpdateScroll",{prevRouterProps:e,pathname:o});if(t.length>0)return t[0];if(e){var a=e.location.pathname;if(a===o)return!1}return!0}(0,r.apiRunner)("registerServiceWorker").length>0&&o(212);var t=function(e){function n(e){e.page.path===P.default.getPage(t).path&&(x.default.off("onPostLoadPageResources",n),clearTimeout(u),window.___history.push(o))}var o=(0,m.createLocation)(e,null,null,g.default.location),t=o.pathname,a=E[t];a&&(t=a.toPath);var r=window.location;if(r.pathname!==o.pathname||r.search!==o.search||r.hash!==o.hash){var u=setTimeout(function(){x.default.off("onPostLoadPageResources",n),x.default.emit("onDelayedLoadPageResources",{pathname:t}),window.___history.push(o)},1e3);P.default.getResourcesForPathname(t)?(clearTimeout(u),window.___history.push(o)):x.default.on("onPostLoadPageResources",n)}};window.___navigateTo=t,(0,r.apiRunner)("onRouteUpdate",{location:g.default.location,action:g.default.action});var i=!1,f=(0,r.apiRunner)("replaceRouterComponent",{history:g.default})[0],h=function(e){var n=e.children;return s.default.createElement(l.Router,{history:g.default},n)},y=(0,l.withRouter)(k.default);P.default.getResourcesForPathname(window.location.pathname,function(){var o=function(){return(0,u.createElement)(f?f:h,null,(0,u.createElement)(p.ScrollContext,{shouldUpdateScroll:n},(0,u.createElement)(y,{layout:!0,children:function(n){return(0,u.createElement)(l.Route,{render:function(o){e(o.history);var t=n?n:o;return P.default.getPage(t.location.pathname)?(0,u.createElement)(k.default,a({page:!0},t)):(0,u.createElement)(k.default,{page:!0,location:{pathname:"/404.html"}})}})}})))},t=(0,r.apiRunner)("wrapRootComponent",{Root:o},o)[0],i=(0,r.apiRunner)("replaceHydrateFunction",void 0,c.default.render)[0];(0,d.default)(function(){return i(s.default.createElement(t,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0,function(){(0,r.apiRunner)("onInitialClientRender")})})})})},414:function(e,n){e.exports=[]},212:function(e,n,o){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}var a=o(57),r=t(a),u="/";u="/","serviceWorker"in navigator&&navigator.serviceWorker.register(u+"sw.js").then(function(e){e.addEventListener("updatefound",function(){var n=e.installing;console.log("installingWorker",n),n.addEventListener("statechange",function(){switch(n.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),r.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(e){console.error("Error during service worker registration:",e)})},139:function(e,n){"use strict";n.__esModule=!0,n.default=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return e.substr(0,n.length)===n?e.slice(n.length):e},e.exports=n.default},313:function(e,n,o){!function(n,o){e.exports=o()}("domready",function(){var e,n=[],o=document,t=o.documentElement.doScroll,a="DOMContentLoaded",r=(t?/^loaded|^c/:/^loaded|^i|^c/).test(o.readyState);return r||o.addEventListener(a,e=function(){for(o.removeEventListener(a,e),r=1;e=n.shift();)e()}),function(e){r?setTimeout(e,0):n.push(e)}})},1:function(e,n,o){"use strict";function t(){function e(e){var n=t.lastChild;return"SCRIPT"!==n.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",n)):void(n.onload=n.onerror=function(){n.onload=n.onerror=null,setTimeout(e,0)})}var n,t=document.querySelector("head"),a=o.e,r=o.s;o.e=function(t,u){var s=!1,i=!0,c=function(e){u&&(u(o,e),u=null)};return!r&&n&&n[t]?void c(!0):(a(t,function(){s||(s=!0,i?setTimeout(function(){c()}):c())}),void(s||(i=!1,e(function(){s||(s=!0,r?r[t]=void 0:(n||(n={}),n[t]=!0),c(!0))}))))}}t()},370:function(e,n,o){"use strict";var t=o(21);e.exports=function(e,n){e.addEventListener("click",function(e){if(0!==e.button||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey||e.defaultPrevented)return!0;for(var o=null,a=e.target;a.parentNode;a=a.parentNode)if("A"===a.nodeName){o=a;break}if(!o)return!0;if(o.target&&"_self"!==o.target.toLowerCase())return!0;if(o.pathname===window.location.pathname&&""!==o.hash)return!0;if(""===o.pathname)return!0;if(o.pathname.search(/^.*\.((?!htm)[a-z0-9]{1,5})$/i)!==-1)return!0;var r=document.createElement("a");r.href=o.href;var u=document.createElement("a");if(u.href=window.location.href,r.host!==u.host)return!0;var s=new RegExp("^"+u.host+(0,t.withPrefix)("/"));return!s.test(""+r.host+r.pathname)||(e.preventDefault(),n(o.getAttribute("href")),!1)})}},371:function(e,n,o){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}var a=o(21),r=o(370),u=t(r);n.onClientEntry=function(){(0,u.default)(window,function(e){(0,a.navigateTo)(e)})}},372:function(e,n,o){"use strict";n.onRouteUpdate=function(e){var n=e.location;if("function"==typeof ga){if(n&&"undefined"!=typeof window.excludeGAPaths&&window.excludeGAPaths.some(function(e){return e.test(n.pathname)}))return;window.ga("set","page",n?n.pathname+n.search+n.hash:void 0),window.ga("send","pageview")}}},328:function(e,n,o){o(1),e.exports=function(e){return o.e(99219681209289,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(373)})})}},374:function(e,n){"use strict";n.registerServiceWorker=function(){return!0}},466:function(e,n){function o(e){return e=e||Object.create(null),{on:function(n,o){(e[n]||(e[n]=[])).push(o)},off:function(n,o){e[n]&&e[n].splice(e[n].indexOf(o)>>>0,1)},emit:function(n,o){(e[n]||[]).slice().map(function(e){e(o)}),(e["*"]||[]).slice().map(function(e){e(n,o)})}}}
e.exports=o},118:function(e,n){function o(){throw new Error("setTimeout has not been defined")}function t(){throw new Error("clearTimeout has not been defined")}function a(e){if(l===setTimeout)return setTimeout(e,0);if((l===o||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(n){try{return l.call(null,e,0)}catch(n){return l.call(this,e,0)}}}function r(e){if(p===clearTimeout)return clearTimeout(e);if((p===t||!p)&&clearTimeout)return p=clearTimeout,clearTimeout(e);try{return p(e)}catch(n){try{return p.call(null,e)}catch(n){return p.call(this,e)}}}function u(){h&&d&&(h=!1,d.length?m=d.concat(m):g=-1,m.length&&s())}function s(){if(!h){var e=a(u);h=!0;for(var n=m.length;n;){for(d=m,m=[];++g<n;)d&&d[g].run();g=-1,n=m.length}d=null,h=!1,r(e)}}function i(e,n){this.fun=e,this.array=n}function c(){}var l,p,f=e.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:o}catch(e){l=o}try{p="function"==typeof clearTimeout?clearTimeout:t}catch(e){p=t}}();var d,m=[],h=!1,g=-1;f.nextTick=function(e){var n=new Array(arguments.length-1);if(arguments.length>1)for(var o=1;o<arguments.length;o++)n[o-1]=arguments[o];m.push(new i(e,n)),1!==m.length||h||a(s)},i.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=c,f.addListener=c,f.once=c,f.off=c,f.removeListener=c,f.removeAllListeners=c,f.emit=c,f.prependListener=c,f.prependOnceListener=c,f.listeners=function(e){return[]},f.binding=function(e){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(e){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}},576:function(e,n){"use strict";function o(e,n){for(var o in e)if(!(o in n))return!0;for(var t in n)if(e[t]!==n[t])return!0;return!1}n.__esModule=!0,n.default=function(e,n,t){return o(e.props,n)||o(e.state,t)},e.exports=n.default},330:function(e,n,o){o(1),e.exports=function(e){return o.e(0xa6bc690a59e9,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(220)})})}},331:function(e,n,o){o(1),e.exports=function(e){return o.e(0x81a450a7cd7a,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(221)})})}},332:function(e,n,o){o(1),e.exports=function(e){return o.e(0xc23565d713b7,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(222)})})}},333:function(e,n,o){o(1),e.exports=function(e){return o.e(90179704293519,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(223)})})}},334:function(e,n,o){o(1),e.exports=function(e){return o.e(0xa485d5bf544,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(224)})})}},335:function(e,n,o){o(1),e.exports=function(e){return o.e(0x623bdfc73907,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(225)})})}}});
//# sourceMappingURL=app-62149855fcc703de6904.js.map