(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{212:function(e,t,r){var i=r(213);"string"==typeof i&&(i=[[e.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};r(18)(i,o);i.locals&&(e.exports=i.locals)},213:function(e,t,r){(t=e.exports=r(17)(!1)).push([e.i,".pictures-x3P3v{padding-bottom:24px}.pictures-x3P3v .btn{font-size:40px;color:#333;display:-webkit-box;display:flex;width:100px;height:100px;line-height:30px;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;border:1px solid #999}.pictures-x3P3v .btn span{font-size:18px}.pictures-x3P3v .waterfall-layout{position:relative}.pictures-x3P3v .waterfall-layout .waterfall-item{position:absolute;top:0;left:0;width:244px;float:left;box-sizing:border-box;padding:10px;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;background:white;box-shadow:0 0 8px #ccc}.pictures-x3P3v .waterfall-layout .waterfall-item img{width:100%}\n",""]),t.locals={className:"pictures-x3P3v"}},223:function(e,t,r){"use strict";r.r(t);var i=r(30),o=r.n(i),a=r(0),n=r.n(a),s=r(45),c=r(11),p=r(32);var l=r(212),d=r.n(l);function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}let m=[],u=[-10,-10,-10,-10];class b extends a.Component{constructor(e){super(e),o()(this,"state",{photos:[]}),o()(this,"handleUploaded",async e=>{const{directory:t,filename:r}=e,{status:i,message:o}=await function(e,t){return Object(p.a)({url:"/picture",method:"post",data:{directory:e,filename:t}})}(t,r);"success"===i?(c.message.success("上传成功"),this.getPictures()):c.message.error(o)}),o()(this,"getPictures",async()=>{const{status:e,message:t,data:r}=await Object(p.a)({url:"/picture"});"success"===e?this.setState({photos:r.map(e=>g({},e,{width:244,height:0,visible:!1}))}):c.message.error(t)}),o()(this,"handleImgLoad",(e,t)=>{const r=[...this.state.photos],i=r[t];i&&(i.height=e.currentTarget.clientHeight+20,i.visible=!0),this.setState({photos:r})}),this.getPictures(),m=[],u=[-10,-10,-10,-10]}render(){const{photos:e}=this.state;return n.a.createElement("div",{className:d.a.className},n.a.createElement(x,null,n.a.createElement(A,{width:244,height:120,visible:!0},n.a.createElement(s.a,{bucketType:"user",onUploaded:this.handleUploaded},n.a.createElement("div",{className:"btn"},n.a.createElement(c.Icon,{type:"plus"}),n.a.createElement("span",null,"上传")))),e.map((e,t)=>{const{id:r,url:i,filename:o,width:a,height:s,visible:c}=e;return n.a.createElement(A,{key:r,width:a,height:s,visible:c},n.a.createElement("img",{src:i,alt:o,onLoad:e=>this.handleImgLoad(e,t)}))})))}}function x(e){const{children:t}=e,[r,i]=Object(a.useState)(0);return Object(a.useEffect)(()=>{console.log("e",u);const e=Math.max(...u,0);e!==r&&i(e)}),n.a.createElement("div",{className:"waterfall-layout",style:{height:r}},t)}function A(e){const{children:t,width:r,height:i,visible:o}=e,[s,c]=Object(a.useState)({transform:"translate3d(0,0,0)",opacity:0,width:r,height:i});if(o&&0===s.opacity){m.push([r,i]);const e=Math.min(...u),t=u.findIndex(t=>t===e),o=e+10,a=g({},s,{transform:`translate3d(${252*t}px,${o}px,0)`,opacity:1,height:i});u[t]=o+i,c(a)}return n.a.createElement("div",{className:"waterfall-item",style:s},t)}t.default=b},43:function(e,t,r){var i=r(44);"string"==typeof i&&(i=[[e.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};r(18)(i,o);i.locals&&(e.exports=i.locals)},44:function(e,t,r){(t=e.exports=r(17)(!1)).push([e.i,".ReactCrop{position:relative;display:inline-block;cursor:crosshair;overflow:hidden;max-width:100%;background-color:#000}.ReactCrop:focus{outline:none}.ReactCrop--disabled,.ReactCrop--locked{cursor:inherit}.ReactCrop__image{display:block;max-width:100%;max-height:-webkit-fill-available;max-height:-moz-available;max-height:fill-available}.ReactCrop--crop-invisible .ReactCrop__image{opacity:0.5}.ReactCrop__crop-selection{position:absolute;top:0;left:0;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);box-sizing:border-box;cursor:move;box-shadow:0 0 0 9999em rgba(0,0,0,0.5);border:1px solid;border-image-source:url(\"data:image/gif;base64,R0lGODlhCgAKAJECAAAAAP///////wAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OEI5RDc5MTFDNkE2MTFFM0JCMDZEODI2QTI4MzJBOTIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OEI5RDc5MTBDNkE2MTFFM0JCMDZEODI2QTI4MzJBOTIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuZGlkOjAyODAxMTc0MDcyMDY4MTE4MDgzQzNDMjA5MzREQ0ZDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjAyODAxMTc0MDcyMDY4MTE4MDgzQzNDMjA5MzREQ0ZDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Af/+/fz7+vn49/b19PPy8fDv7u3s6+rp6Ofm5eTj4uHg397d3Nva2djX1tXU09LR0M/OzczLysnIx8bFxMPCwcC/vr28u7q5uLe2tbSzsrGwr66trKuqqainpqWko6KhoJ+enZybmpmYl5aVlJOSkZCPjo2Mi4qJiIeGhYSDgoGAf359fHt6eXh3dnV0c3JxcG9ubWxramloZ2ZlZGNiYWBfXl1cW1pZWFdWVVRTUlFQT05NTEtKSUhHRkVEQ0JBQD8+PTw7Ojk4NzY1NDMyMTAvLi0sKyopKCcmJSQjIiEgHx4dHBsaGRgXFhUUExIREA8ODQwLCgkIBwYFBAMCAQAAIfkEBQoAAgAsAAAAAAoACgAAAhWEERkn7W3ei7KlagMWF/dKgYeyGAUAIfkEBQoAAgAsAAAAAAoACgAAAg+UYwLJ7RnQm7QmsCyVKhUAIfkEBQoAAgAsAAAAAAoACgAAAhCUYgLJHdiinNSAVfOEKoUCACH5BAUKAAIALAAAAAAKAAoAAAIRVISAdusPo3RAzYtjaMIaUQAAIfkEBQoAAgAsAAAAAAoACgAAAg+MDiem7Q8bSLFaG5il6xQAIfkEBQoAAgAsAAAAAAoACgAAAg+UYRLJ7QnQm7SmsCyVKhUAIfkEBQoAAgAsAAAAAAoACgAAAhCUYBLJDdiinNSEVfOEKoECACH5BAUKAAIALAAAAAAKAAoAAAIRFISBdusPo3RBzYsjaMIaUQAAOw==\");border-image-slice:1;border-image-repeat:repeat}.ReactCrop--disabled .ReactCrop__crop-selection{cursor:inherit}.ReactCrop__drag-handle{position:absolute;width:9px;height:9px;background-color:rgba(0,0,0,0.2);border:1px solid rgba(255,255,255,0.7);box-sizing:border-box;outline:1px solid transparent}.ReactCrop .ord-nw{top:0;left:0;margin-top:-5px;margin-left:-5px;cursor:nw-resize}.ReactCrop .ord-n{top:0;left:50%;margin-top:-5px;margin-left:-5px;cursor:n-resize}.ReactCrop .ord-ne{top:0;right:0;margin-top:-5px;margin-right:-5px;cursor:ne-resize}.ReactCrop .ord-e{top:50%;right:0;margin-top:-5px;margin-right:-5px;cursor:e-resize}.ReactCrop .ord-se{bottom:0;right:0;margin-bottom:-5px;margin-right:-5px;cursor:se-resize}.ReactCrop .ord-s{bottom:0;left:50%;margin-bottom:-5px;margin-left:-5px;cursor:s-resize}.ReactCrop .ord-sw{bottom:0;left:0;margin-bottom:-5px;margin-left:-5px;cursor:sw-resize}.ReactCrop .ord-w{top:50%;left:0;margin-top:-5px;margin-left:-5px;cursor:w-resize}.ReactCrop__disabled .ReactCrop__drag-handle{cursor:inherit}.ReactCrop__drag-bar{position:absolute}.ReactCrop__drag-bar.ord-n{top:0;left:0;width:100%;height:6px;margin-top:-3px}.ReactCrop__drag-bar.ord-e{right:0;top:0;width:6px;height:100%;margin-right:-3px}.ReactCrop__drag-bar.ord-s{bottom:0;left:0;width:100%;height:6px;margin-bottom:-3px}.ReactCrop__drag-bar.ord-w{top:0;left:0;width:6px;height:100%;margin-left:-3px}.ReactCrop--new-crop .ReactCrop__drag-bar,.ReactCrop--new-crop .ReactCrop__drag-handle,.ReactCrop--fixed-aspect .ReactCrop__drag-bar{display:none}.ReactCrop--fixed-aspect .ReactCrop__drag-handle.ord-n,.ReactCrop--fixed-aspect .ReactCrop__drag-handle.ord-e,.ReactCrop--fixed-aspect .ReactCrop__drag-handle.ord-s,.ReactCrop--fixed-aspect .ReactCrop__drag-handle.ord-w{display:none}@media (max-width: 768px), (pointer: coarse){.ReactCrop__drag-handle{width:17px;height:17px}.ReactCrop .ord-nw{margin-top:-9px;margin-left:-9px}.ReactCrop .ord-n{margin-top:-9px;margin-left:-9px}.ReactCrop .ord-ne{margin-top:-9px;margin-right:-9px}.ReactCrop .ord-e{margin-top:-9px;margin-right:-9px}.ReactCrop .ord-se{margin-bottom:-9px;margin-right:-9px}.ReactCrop .ord-s{margin-bottom:-9px;margin-left:-9px}.ReactCrop .ord-sw{margin-bottom:-9px;margin-left:-9px}.ReactCrop .ord-w{margin-top:-9px;margin-left:-9px}.ReactCrop__drag-bar.ord-n{height:14px;margin-top:-7px}.ReactCrop__drag-bar.ord-e{width:14px;margin-right:-7px}.ReactCrop__drag-bar.ord-s{height:14px;margin-bottom:-7px}.ReactCrop__drag-bar.ord-w{width:14px;margin-left:-7px}}.imageCropper-38CPD{display:inline-block;font-size:0;line-height:0}.imageCropper-38CPD.active::before{content:'';position:fixed;top:0;bottom:0;left:0;right:0;z-index:9998;background:rgba(255,255,255,0.5)}.imageCropper-38CPD .selector{position:relative;display:inline-block;cursor:pointer}.imageCropper-38CPD .selector input{position:absolute;top:0;left:0;opacity:0;z-index:1;width:100%;height:100%;display:block;cursor:pointer}.imageCropper-38CPD .selector .default-select{width:50px;height:50px;border-radius:3px;border:1px dashed #333333;display:block;position:relative;cursor:pointer}.imageCropper-38CPD .selector .default-select::before{content:'';position:absolute;width:2px;margin-left:-1px;height:50%;background-color:#333333;left:50%;top:25%;z-index:0;border-radius:1px}.imageCropper-38CPD .selector .default-select::after{content:'';position:absolute;height:2px;margin-top:-1px;width:50%;background-color:#333333;top:50%;left:25%;z-index:0;border-radius:1px}.crop-wrapper{position:fixed;top:50%;left:50%;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);box-shadow:0px 5px 16px 0px rgba(0,0,0,0.95);z-index:9999}.crop-wrapper .ReactCrop{display:block}.crop-wrapper .tools{position:absolute;bottom:10px;right:10px;color:white}.crop-wrapper .tools button{cursor:pointer;border:1px dashed #ccc;margin:0 3px;font-size:12px;line-height:20px}\n",""]),t.locals={cropper:"imageCropper-38CPD"}},45:function(e,t,r){"use strict";var i=r(30),o=r.n(i),a=r(0),n=r.n(a),s=r(14),c=r.n(s),p=r(57),l=r.n(p),d=r(43),h=r.n(d);class g extends a.PureComponent{constructor(e){super(e),o()(this,"state",{originalSrc:"",crop:{x:0,y:0}}),o()(this,"originalFileName",""),o()(this,"image",void 0),o()(this,"pixelCrop",void 0),o()(this,"inputRef",n.a.createRef()),o()(this,"handleFileInput",e=>{const t=e.target.files&&e.target.files[0];if(!t)return;this.originalFileName=t.name;const r=new FileReader;r.readAsDataURL(t),r.onload=()=>{this.setState({originalSrc:r.result})}}),o()(this,"handleCropChange",(e,t)=>{this.setState({crop:e}),this.pixelCrop=t}),o()(this,"handleImageloaded",(e,t)=>{this.image=e,this.pixelCrop=t}),o()(this,"getCroppedImg",(e,t,r)=>{const i=document.createElement("canvas");i.width=t.width,i.height=t.height;const o=i.getContext("2d");return o&&o.drawImage(e,t.x,t.y,t.width,t.height,0,0,t.width,t.height),new Promise((e,t)=>{i.toBlob(t=>{t.name=r,e(t)},"image/jpeg")})}),o()(this,"confirm",async()=>{const{onConfirm:e}=this.props;if(this.image&&this.pixelCrop&&e){e(await this.getCroppedImg(this.image,this.pixelCrop,this.originalFileName))}this.cancel()}),o()(this,"cancel",()=>{this.setState({originalSrc:""}),this.inputRef.current&&(this.inputRef.current.value="")}),e.crop&&(this.state.crop=e.crop)}render(){const{originalSrc:e,crop:t}=this.state,{children:r}=this.props;let i;return e&&(i=n.a.createElement("div",{className:"crop-wrapper"},n.a.createElement(l.a,{src:e,crop:t,onImageLoaded:this.handleImageloaded,onChange:this.handleCropChange}),n.a.createElement("div",{className:"tools"},n.a.createElement("button",{type:"button",onClick:this.confirm},"确定"),n.a.createElement("button",{type:"button",onClick:this.cancel},"取消")))),n.a.createElement("div",{className:`${h.a.cropper} ${e?"active":""}`},n.a.createElement("div",{className:"selector"},r||n.a.createElement("span",{className:"default-select"}),n.a.createElement("input",{ref:this.inputRef,type:"file",onInput:this.handleFileInput,accept:"image/*"})),c.a.createPortal(i,document.body))}}var m=g,u=r(58),b=r.n(u),x=r(33),A=r(11);class f extends a.PureComponent{constructor(e){super(e),o()(this,"cos",void 0),o()(this,"file",void 0),o()(this,"credential",{TmpSecretId:"",TmpSecretKey:"",XCosSecurityToken:"",ExpiredTime:0}),o()(this,"region",""),o()(this,"bucket",""),o()(this,"directory",""),o()(this,"domain",""),o()(this,"upload",()=>{const{onUploaded:e,uploadDir:t,bucketType:r}=this.props;if("user"!==r&&!t)return console.warn("上传目录未指定");const i=this.directory||t,o=`${Date.now()}_${this.file.name}`;this.cos.putObject({Bucket:this.bucket,Region:this.region,Key:`${i}/${o}`,Body:this.file,onProgress(e){const{loaded:t,total:r,speed:i,percent:o}=e;console.log("percent ::",o)}},(t,r)=>{if(t)return console.log(t);const{Location:i}=r;e&&e({key:i,directory:this.directory,filename:o,domain:this.domain})})}),o()(this,"handleConfirm",e=>{this.file=e,this.upload()}),this.cos=new b.a({getAuthorization:async(e,t)=>{t(await this.getCredential())}}),this.getCredential()}async getCredential(){const{bucketType:e}=this.props;if(this.credential.ExpiredTime<Date.now()){const{status:t,message:r,data:i}=await Object(x.f)(e);return"success"===t?(this.credential={TmpSecretId:i.credentials&&i.credentials.tmpSecretId,TmpSecretKey:i.credentials&&i.credentials.tmpSecretKey,XCosSecurityToken:i.credentials&&i.credentials.sessionToken,ExpiredTime:1e3*i.expiredTime},this.region=i.region,this.bucket=i.bucket,this.directory=i.directory,this.domain=i.domain,this.credential):(A.message.error(r),{})}return this.credential}render(){const{children:e,crop:t}=this.props;return n.a.createElement(m,{onConfirm:this.handleConfirm,crop:t},e)}}t.a=f}}]);