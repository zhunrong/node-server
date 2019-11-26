(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{221:function(e,t,r){"use strict";r.r(t);var i=r(30),a=r.n(i),n=r(0),o=r.n(n),s=r(1),l=r(13),c=r(11),u=r(97),d=r.n(u),m=r(29),p=r.n(m),f=r(33),g=r(12);class h extends n.Component{constructor(...e){super(...e),a()(this,"state",{remainTime:0}),a()(this,"timer",null),a()(this,"checkTime",()=>{const e=g.c(),t=Date.now();this.setState({remainTime:60-Math.floor((t-e)/1e3)},()=>{this.runCountdown()})}),a()(this,"runCountdown",()=>{const{remainTime:e}=this.state;this.timer&&clearTimeout(this.timer),this.timer=null,e<=0||(this.timer=setTimeout(()=>{this.setState({remainTime:e-1}),this.runCountdown()},1e3))})}componentDidMount(){this.checkTime()}componentWillReceiveProps(){this.timer||this.checkTime()}componentWillUnmount(){this.timer&&clearTimeout(this.timer),this.timer=null}render(){const{remainTime:e}=this.state,{onClick:t,loading:r}=this.props;return o.a.createElement(c.Button,{size:"large",onClick:t,disabled:e>0||r,loading:r,style:{minWidth:"120px"}},e>0?`${e}s`:"获取验证码")}}var b=h,v=r(38);class y extends n.Component{constructor(...e){super(...e),a()(this,"state",{registerLoading:!1,verifyCodeLoading:!1}),a()(this,"getVerifyCode",()=>{this.props.form.validateFields(["email"],async(e,t)=>{if(e)return;this.verifyCodeLoading=!0;const{status:r,message:i}=await Object(f.e)(t.email);"success"===r?(g.f(Date.now()),c.message.success(i)):c.message.error(i),this.verifyCodeLoading=!1})}),a()(this,"handleSubmit",e=>{e.preventDefault(),this.props.form.validateFields(async(e,t)=>{if(e)return;const{email:r,password:i,verifyCode:a}=t;this.registerLoading=!0;const{status:n,message:o,authorization:s}=await Object(f.h)(r,p()(i),a);this.registerLoading=!1,"success"===n?(g.e(s.token,s.maxAge),this.props.updateLoginStatus(!0),this.props.history.replace("/")):c.message.error(o)})})}get registerLoading(){return this.state.registerLoading}set registerLoading(e){this.setState({registerLoading:e})}get verifyCodeLoading(){return this.state.verifyCodeLoading}set verifyCodeLoading(e){this.setState({verifyCodeLoading:e})}render(){const{getFieldDecorator:e}=this.props.form,{registerLoading:t}=this,{verifyCodeLoading:r}=this.state;return o.a.createElement("div",{className:d.a.register},o.a.createElement("div",{className:"form-box"},o.a.createElement(c.Form,{onSubmit:this.handleSubmit},o.a.createElement(c.Form.Item,null,e("email",{validateTrigger:"onBlur",validateFirst:!0,rules:[{required:!0,message:"请输入邮箱",whitespace:!0},{type:"email",message:"请输入有效邮箱"}]})(o.a.createElement(c.Input,{placeholder:"邮箱",prefix:o.a.createElement(c.Icon,{type:"mail"}),size:"large",allowClear:!0}))),o.a.createElement(c.Form.Item,null,e("password",{validateTrigger:"onBlur",validateFirst:!0,rules:[{required:!0,message:"请输入密码",whitespace:!0},{min:8,message:"密码长度最小为8位"}]})(o.a.createElement(c.Input,{placeholder:"输入密码",prefix:o.a.createElement(c.Icon,{type:"lock"}),size:"large",type:"password",allowClear:!0}))),o.a.createElement(c.Form.Item,null,e("repeat",{validateTrigger:"onBlur",validateFirst:!0,rules:[{required:!0,message:"请确认密码",whitespace:!0},{validator:(e,t,r)=>{this.props.form.getFieldValue("password")!==t?r(new Error("两次输入密码不一致")):r()}}]})(o.a.createElement(c.Input,{placeholder:"确认密码",prefix:o.a.createElement(c.Icon,{type:"lock"}),size:"large",type:"password",allowClear:!0}))),o.a.createElement(c.Form.Item,{className:"verify-code"},e("verifyCode",{validateTrigger:"onBlur",validateFirst:!0,rules:[{required:!0,message:"请输入验证码",whitespace:!0}]})(o.a.createElement(c.Input,{placeholder:"邮箱验证码",prefix:o.a.createElement(c.Icon,{type:"qrcode"}),size:"large",allowClear:!0})),o.a.createElement(b,{onClick:this.getVerifyCode,loading:r})),o.a.createElement(c.Form.Item,null,o.a.createElement(c.Button,{block:!0,type:"primary",htmlType:"submit",size:"large",loading:t},"注册"))),o.a.createElement("div",{className:"links"},o.a.createElement(s.Link,{to:"/login"},"使用已有账户登录"))))}}t.default=Object(s.withRouter)(Object(l.b)(null,(function(e){return{updateLoginStatus:t=>{e(Object(v.a)(t))}}}))(c.Form.create()(y)))},31:function(e,t,r){"use strict";r.d(t,"b",(function(){return a})),r.d(t,"c",(function(){return n})),r.d(t,"d",(function(){return o})),r.d(t,"e",(function(){return s})),r.d(t,"a",(function(){return l}));var i=r(32);function a(e,t){return Object(i.a)({url:"/article",method:"post",data:{title:e,markdown:t}})}function n(e,t,r){return Object(i.a)({url:`/article/${e}`,method:"put",data:{title:t,markdown:r}})}function o(e,t){return Object(i.a)({url:"/allArticle",params:{pageSize:e,page:t}})}function s(e){return Object(i.a)({url:`/article/${e}`})}function l(e,t){return Object(i.a)({url:"/articleVisit",method:"post",data:{articleId:e,userId:t}})}},32:function(e,t,r){"use strict";var i=r(41),a=r.n(i),n=r(3),o=r(11),s=r(12),l=r(42);const c=a.a.create({baseURL:n.a.HTTP_BASE_URL,validateStatus:e=>e>=200&&e<500});t.a=async function(e){const t=Object(s.b)(),r=t?Object(l.merge)({headers:{Authorization:`Bearer ${t}`}},e):e,{data:i,status:a}=await c(r);if(401===a){const e="401";o.notification.error({message:"您未登录或者登录已失效",description:"点我重新登录",duration:null,style:{cursor:"pointer"},key:e,onClick(){location.replace("#/login"),o.notification.close(e)}})}return Promise.resolve(i)}},33:function(e,t,r){"use strict";r.d(t,"g",(function(){return n})),r.d(t,"d",(function(){return o})),r.d(t,"i",(function(){return s})),r.d(t,"e",(function(){return l})),r.d(t,"h",(function(){return c})),r.d(t,"f",(function(){return u}));var i=r(32),a=r(31);function n(e,t){return Object(i.a)({url:"/login",method:"post",data:{email:e,password:t}})}function o(){return Object(i.a)({url:"/user"})}function s(e,t){return Object(i.a)({url:"/user",method:"put",data:{avatar:t,nickname:e}})}function l(e){return Object(i.a)({url:"/mailVerifyCode",method:"post",data:{email:e}})}function c(e,t,r){return Object(i.a)({url:"/register",method:"post",data:{email:e,password:t,verifyCode:r}})}function u(e){return Object(i.a)({url:"/qcloud/uploadCredential",params:{type:e}})}r.d(t,"a",(function(){return a.b})),r.d(t,"b",(function(){return a.c})),r.d(t,"c",(function(){return a.e}))},38:function(e,t,r){"use strict";r.d(t,"b",(function(){return a})),r.d(t,"a",(function(){return n}));var i=r(7);function a(e){return{type:i.b,userInfo:e}}function n(e){return{type:i.a,login:e}}},97:function(e,t,r){var i=r(98);"string"==typeof i&&(i=[[e.i,i,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};r(18)(i,a);i.locals&&(e.exports=i.locals)},98:function(e,t,r){(t=e.exports=r(17)(!1)).push([e.i,".register-3dFsS{color:white;background:#f0f2f5;min-height:100vh;padding-top:200px}.register-3dFsS .form-box{width:388px;margin:0 auto}.register-3dFsS .verify-code .ant-form-item-children{display:-webkit-box;display:flex}.register-3dFsS .verify-code .ant-form-item-children button{margin-left:10px}.register-3dFsS .links{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:reverse;flex-direction:row-reverse}.register-3dFsS .links a{color:#1890ff}.register-3dFsS .links a:hover{color:rgba(24,144,255,0.5)}\n",""]),t.locals={register:"register-3dFsS"}}}]);