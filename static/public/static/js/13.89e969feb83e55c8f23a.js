(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{210:function(e,t,i){var a=i(211);"string"==typeof a&&(a=[[e.i,a,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};i(18)(a,s);a.locals&&(e.exports=a.locals)},211:function(e,t,i){(t=e.exports=i(17)(!1)).push([e.i,".article-1HGRv{color:black;border-radius:3px}.article-1HGRv .not-found{font-size:100px;font-weight:bold;text-align:center;color:#999;height:400px;line-height:400px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.article-1HGRv .title{background:white;padding:15px;border-radius:3px;color:#909090}.article-1HGRv .title h1{margin-bottom:10px;color:black}.article-1HGRv .title .user{display:-webkit-box;display:flex}.article-1HGRv .title .user .avatar{width:60px;height:60px;margin-right:10px}.article-1HGRv .title .user .name{height:30px;line-height:30px}.article-1HGRv .title .user .detail{height:30px;line-height:30px}.article-1HGRv .title .user .date{letter-spacing:1px;margin-right:10px}.article-1HGRv .title .user .read-count{margin:0 5px}.article-1HGRv .title .user .edit{margin:0 5px;color:#1264b6;cursor:pointer}.article-1HGRv .title .user .edit:hover{text-decoration:underline}.article-1HGRv .markdown-style{margin-top:24px;background:white;padding:15px;border-radius:3px}\n",""]),t.locals={article:"article-1HGRv"}},218:function(e,t,i){"use strict";i.r(t);var a=i(30),s=i.n(a),r=i(0),n=i.n(r),l=i(1),c=i(13),o=i(66),d=i.n(o),u=i(210),m=i.n(u),p=i(31),h=i(12),v=i(40),g=i(28),x=i.n(g);class b extends r.PureComponent{constructor(e){super(e),s()(this,"state",{articleId:"",title:"",source:"",updateTime:"",uid:0,nickname:"",avatar:"",visitCount:0,notFound:!1}),s()(this,"visitCalled",!1),s()(this,"editArticle",()=>{const{articleId:e}=this.state;Object(h.d)(e),this.props.history.push("/editor/")});const{match:t}=e;this.state.articleId=t.params.id,this.state.articleId?this.init():this.props.history.replace("/blog")}componentWillReceiveProps(e){this.addArticleVisitRecord(e)}async init(){await this.getArticleDetail(),this.addArticleVisitRecord(this.props)}async getArticleDetail(){const{articleId:e}=this.state,{status:t,data:i}=await Object(p.e)(e);"success"===t?this.setState({title:i.title,source:i.markdown,uid:i.uid,updateTime:x()(i.updateTime).format("YYYY年MM月DD日"),nickname:i.nickname,avatar:i.avatar,visitCount:i.visitCount}):this.setState({notFound:!0})}async addArticleVisitRecord(e){const{articleId:t}=this.state,{login:i,userInfo:a}=e;!t||i&&!a||this.visitCalled||(this.visitCalled=!0,await Object(p.a)(t,(a||{}).id))}render(){const{source:e,title:t,updateTime:i,uid:a,nickname:s,avatar:r,visitCount:l,notFound:c}=this.state,{userInfo:o}=this.props;let u=null;return c?u=n.a.createElement("div",{className:"not-found"},"404 - Not Found"):a&&(u=n.a.createElement("div",{className:"title"},n.a.createElement("h1",null,t),n.a.createElement("div",{className:"user"},n.a.createElement("div",{className:"avatar"},n.a.createElement(v.a,{src:r})),n.a.createElement("div",{className:"info"},n.a.createElement("div",{className:"name"},s||"匿名"),n.a.createElement("div",{className:"detail"},n.a.createElement("span",{className:"date"},i)," 浏览",n.a.createElement("span",{className:"read-count"},l),o&&o.id===a&&n.a.createElement("span",{className:"edit",onClick:this.editArticle},"编辑")))))),n.a.createElement("div",{className:m.a.article},u,e&&n.a.createElement(d.a,{className:"markdown-style",source:e}))}}t.default=Object(l.withRouter)(Object(c.b)((function(e){return{userInfo:e.common.userInfo,login:e.common.login}}))(b))}}]);