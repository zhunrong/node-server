(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{151:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=m(n(68)),a=m(n(63)),o=m(n(64)),r=m(n(65)),u=m(n(66)),d=n(1),i=m(d),c=n(164),f=n(69),p=m(n(500)),h=m(n(501));function m(e){return e&&e.__esModule?e:{default:e}}var s=function(e){function t(e){(0,a.default)(this,t);var n=(0,r.default)(this,(t.__proto__||(0,l.default)(t)).call(this,e));return console.log("routes",p.default),n}return(0,u.default)(t,e),(0,o.default)(t,[{key:"componentWillMount",value:function(){console.log("will mount")}},{key:"componentWillReceiveProps",value:function(e){console.log("receive props",e.location.pathname)}},{key:"shouldComponentUpdate",value:function(e,t){return console.log("should",e.location.pathname),!0}},{key:"render",value:function(){console.log("render");var e=p.default.find(function(e){return"home"===e.name}),t=this.props.location.pathname,n=/\/home\/[^/]+/.exec(t),l="";n?l=n[0]:(l=e.children[0].path,this.props.history.push(l));var a=e.children.find(function(e){return e.path===l});return a||(a=e.children[0],this.props.history.push(a.path)),i.default.createElement("div",{className:h.default.home},i.default.createElement("header",null,i.default.createElement(c.Menu,{mode:"horizontal",defaultActive:l},e.children.map(function(e){var t=e.path;return i.default.createElement(c.Menu.Item,{index:t,key:t},i.default.createElement(f.Link,{to:t},e.name))}))),i.default.createElement("div",{className:"body"},i.default.createElement("aside",null,i.default.createElement(c.Menu,{theme:"dark",defaultActive:t},a.children.map(function(e){var t=e.path;return e.name&&i.default.createElement(c.Menu.Item,{index:t,key:t},i.default.createElement(f.Link,{to:t},e.name))}))),i.default.createElement("div",{className:"content better-scroll"},i.default.createElement(f.Switch,null,a.children.map(function(e){var t=e.path;return i.default.createElement(f.Route,{path:t,key:t,component:e.component})}),i.default.createElement(f.Redirect,{to:a.children[0].path})))))}}]),t}(d.Component);t.default=(0,f.withRouter)(s)},500:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=r(n(75)),a=r(n(76)),o=r(n(77));function r(e){return e&&e.__esModule?e:{default:e}}(0,a.default)({loader:function(){return Promise.all([n.e(0),n.e(7),n.e(1)]).then(n.t.bind(null,256,7))},loading:o.default}),(0,a.default)({loader:function(){return Promise.all([n.e(0),n.e(2)]).then(n.t.bind(null,265,7))},loading:o.default}),(0,a.default)({loader:function(){return Promise.all([n.e(0),n.e(3)]).then(n.t.bind(null,266,7))},loading:o.default}),(0,a.default)({loader:function(){return Promise.all([n.e(0),n.e(4)]).then(n.t.bind(null,267,7))},loading:o.default}),(0,a.default)({loader:function(){return n.e(5).then(n.t.bind(null,268,7))},loading:o.default});var u=[{path:"/home",name:"home",children:[{path:"/system",name:"system",children:[{path:"/explorer",name:"explorer",component:(0,a.default)({loader:function(){return Promise.all([n.e(0),n.e(7),n.e(1)]).then(n.t.bind(null,256,7))},loading:o.default})},{path:"/articles",name:"articles",component:(0,a.default)({loader:function(){return Promise.all([n.e(0),n.e(2)]).then(n.t.bind(null,265,7))},loading:o.default})},{path:"/article/:id",component:(0,a.default)({loader:function(){return Promise.all([n.e(0),n.e(3)]).then(n.t.bind(null,266,7))},loading:o.default})},{path:"/editor",name:"editor",component:(0,a.default)({loader:function(){return Promise.all([n.e(0),n.e(4)]).then(n.t.bind(null,267,7))},loading:o.default})}]},{path:"/yeba",name:"yeba",children:[{path:"/order",name:"order",component:(0,a.default)({loader:function(){return n.e(5).then(n.t.bind(null,268,7))},loading:o.default})}]}]}];t.default=function e(t,n){var a=[];return t.forEach(function(t){var o=(0,l.default)({},t,{path:n?n.path+t.path:t.path});a.push(o),o.children=t.children&&e(t.children,o)}),a}(u)},501:function(e,t,n){var l=n(502);"string"==typeof l&&(l=[[e.i,l,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(42)(l,a);l.locals&&(e.exports=l.locals)},502:function(e,t,n){(t=e.exports=n(41)(!1)).push([e.i,"._2QdSXrMpcttKCZufl62Ye .el-menu-item {\n  padding: 0; }\n  ._2QdSXrMpcttKCZufl62Ye .el-menu-item a {\n    display: block;\n    height: 100%;\n    color: inherit;\n    padding: 0 20px; }\n\n._2QdSXrMpcttKCZufl62Ye .body {\n  width: 100%;\n  position: fixed;\n  top: 60px;\n  bottom: 0;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: flex; }\n  ._2QdSXrMpcttKCZufl62Ye .body aside {\n    width: 200px;\n    background-color: #324157; }\n  ._2QdSXrMpcttKCZufl62Ye .body .content {\n    -webkit-flex: 1;\n       -moz-box-flex: 1;\n            flex: 1;\n    overflow: auto; }\n",""]),t.locals={home:"_2QdSXrMpcttKCZufl62Ye"}}}]);