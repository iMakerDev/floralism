(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[666,991],{6473:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ContactPage",function(){return n(2960)}])},5677:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{noSSR:function(){return s},default:function(){return r}});let a=n(260),i=(n(7294),a._(n(8976)));function l(e){return{default:(null==e?void 0:e.default)||e}}function s(e,t){return delete t.webpack,delete t.modules,e(t)}function r(e,t){let n=i.default,a={loading:e=>{let{error:t,isLoading:n,pastDelay:a}=e;return null}};e instanceof Promise?a.loader=()=>e:"function"==typeof e?a.loader=e:"object"==typeof e&&(a={...a,...e}),a={...a,...t};let r=a.loader,d=()=>null!=r?r().then(l):Promise.resolve(l(()=>null));return(a.loadableGenerated&&(a={...a,...a.loadableGenerated},delete a.loadableGenerated),"boolean"!=typeof a.ssr||a.ssr)?n({...a,loader:d}):(delete a.webpack,delete a.modules,s(n,a))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2254:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"LoadableContext",{enumerable:!0,get:function(){return l}});let a=n(260),i=a._(n(7294)),l=i.default.createContext(null)},8976:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return h}});let a=n(260),i=a._(n(7294)),l=n(2254),s=[],r=[],d=!1;function o(e){let t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then(e=>(n.loading=!1,n.loaded=e,e)).catch(e=>{throw n.loading=!1,n.error=e,e}),n}class c{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state={...this._state,error:this._res.error,loaded:this._res.loaded,loading:this._res.loading,...e},this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function u(e){return function(e,t){let n=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t),a=null;function s(){if(!a){let t=new c(e,n);a={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return a.promise()}if(!d){let e=n.webpack?n.webpack():n.modules;e&&r.push(t=>{for(let n of e)if(t.includes(n))return s()})}function o(e,t){!function(){s();let e=i.default.useContext(l.LoadableContext);e&&Array.isArray(n.modules)&&n.modules.forEach(t=>{e(t)})}();let r=i.default.useSyncExternalStore(a.subscribe,a.getCurrentValue,a.getCurrentValue);return i.default.useImperativeHandle(t,()=>({retry:a.retry}),[]),i.default.useMemo(()=>{var t;return r.loading||r.error?i.default.createElement(n.loading,{isLoading:r.loading,pastDelay:r.pastDelay,timedOut:r.timedOut,error:r.error,retry:a.retry}):r.loaded?i.default.createElement((t=r.loaded)&&t.default?t.default:t,e):null},[e,r])}return o.preload=()=>s(),o.displayName="LoadableComponent",i.default.forwardRef(o)}(o,e)}function _(e,t){let n=[];for(;e.length;){let a=e.pop();n.push(a(t))}return Promise.all(n).then(()=>{if(e.length)return _(e,t)})}u.preloadAll=()=>new Promise((e,t)=>{_(s).then(e,t)}),u.preloadReady=e=>(void 0===e&&(e=[]),new Promise(t=>{let n=()=>(d=!0,t());_(r,e).then(n,n)})),window.__NEXT_PRELOADREADY=u.preloadReady;let h=u},2960:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return g},default:function(){return f}});var a=n(5893);n(6991);var i=n(7602),l=n(9854),s=n.n(l),r=n(5058),d=n.n(r),o=n(6739);n(8890);var c=n(7294),u=n(3903),_=n(8992),h=n(6600),m=n(3736),p=n(8932),g=!0;function f(e){let{cateList:t,allcate:n}=e,[l,r]=(0,c.useState)(!1),[g,f]=(0,c.useState)(!1),[x,v]=(0,c.useState)(!1),[y,j]=(0,c.useState)(1),[b,w]=(0,c.useState)([]),[N,P]=(0,c.useState)(1),S=e=>{e.target.innerWidth<=675?j(0):e.target.innerWidth<=1100?j(1):j(2)};return(0,c.useEffect)(()=>(window.addEventListener("resize",S),window.innerWidth<=675?j(0):window.innerWidth<=1100?j(1):j(2),()=>{window.removeEventListener("resize",S)}),[]),(0,c.useEffect)(()=>{w((0,u.e)(n,y?1===y?6:2===y&&8:4,"cat")),P(1)},[y]),(0,c.useEffect)(()=>(window.addEventListener("resize",S),window.innerWidth<1100?y||j(!0):y&&j(!1),()=>{window.removeEventListener("resize",S)}),[]),(0,a.jsxs)("div",{style:{position:"relative"},children:[(0,a.jsx)(p.default,{cateList:t,setLogin:r}),(0,a.jsx)(_.default,{flag:y,imgTiny:"/contact-banner-m.png",img:"/contactus-banner.png",title:"FLORALISM | 關於我們",desc1:"在FLORALISM，我們重視花材的品質和選擇，堅持采用最新鮮，最優質的花材，注重花束的藝術性和創意性",desc2:"運用不同的創意和技巧，讓花材的形狀和質地在空間中產生獨特的視覺效果，讓每一朵花都散發出自己獨有的魅力"}),(0,a.jsx)("div",{className:d().main_layout,children:(0,a.jsxs)("div",{className:d().main_background,children:[(0,a.jsxs)("div",{className:d().main_contain,style:{marginBottom:24},children:[(0,a.jsx)("div",{className:d().contact_title,children:"歡迎查詢"}),(0,a.jsx)("div",{className:d().contact_distance,style:{lineHeight:"200%",letterSpacing:2},children:"如果你有任何花藝需求或疑問，歡迎聯係我們的專業花藝師團隊，我們會仔細聆聽您的需求，並根據不同場合和用途，提供最適合的花藝設計方案，您可以通過以下方式聯係我們"}),(0,a.jsx)("div",{className:"".concat(d().contact_title),style:{marginTop:"15%"},children:"客戶熱綫"}),(0,a.jsxs)("div",{className:d().contact_distance,style:{display:"flex",alignItems:"center"},children:[(0,a.jsx)("img",{src:"/圖標-電話.png"}),(0,a.jsx)("div",{style:{marginLeft:16},children:"65818053"})]}),(0,a.jsxs)("div",{className:d().contact_distance,style:{display:"flex",alignItems:"center"},children:[(0,a.jsx)("img",{src:"/圖標-郵件.png"}),(0,a.jsx)("div",{style:{marginLeft:16},children:"info@floralismhk.com"})]})]}),(0,a.jsx)("div",{className:d().main_contain,style:{display:"flex",alignItems:"flex-end"},children:(0,a.jsx)("img",{style:{width:"100%"},src:"/contactus-background.png"})})]})}),(0,a.jsx)("div",{className:s().goods_list,style:{},children:(0,a.jsx)(h.default,{title:"【FLORALISM】 全部分类",list:b,page:N,type:"category",perPage:y?1===y?6:2===y&&8:4,setPage:P,animation:!0})}),(0,a.jsx)("div",{className:d().ContactusLayout,children:(0,a.jsx)(o.default,{})}),(0,a.jsx)(i.default,{}),(0,a.jsx)(m.default,{login:l,close:()=>r(!1),toRegister:()=>{r(!1),f(!0)},toForget:()=>{r(!1),v(!0)}})]})}},8992:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var a=n(5893),i=n(5650),l=n.n(i),s=n(9854),r=n.n(s);function d(e){return(0,a.jsxs)("div",{style:{width:"100%",position:"relative"},children:[(0,a.jsx)("img",{src:0===e.flag?e.imgTiny:e.img,style:{width:"100%",height:"100%",display:"block"}}),(0,a.jsx)("div",{className:l().banner_desc,style:{},children:(0,a.jsxs)("div",{style:{overflow:"hidden",textOverflow:"ellipsis"},children:[(0,a.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:[(0,a.jsx)("div",{className:r().distance,style:{borderBottomWidth:1,borderBottomColor:"white"}}),(0,a.jsx)("div",{className:r().title,style:{color:"white",marginRight:16,marginLeft:16},children:e.title}),(0,a.jsx)("div",{className:r().distance,style:{borderBottomWidth:1,borderBottomColor:"white"}})]}),(0,a.jsxs)("div",{style:{},className:l().desc_layout,children:[(0,a.jsx)("div",{children:e.desc1}),(0,a.jsx)("div",{style:{marginTop:12},children:e.desc2})]})]})})]})}},6739:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return r}});var a=n(5893),i=n(5018),l=n.n(i),s=n(7294);function r(e){let[t,n]=(0,s.useState)("");return(0,a.jsxs)("div",{className:l().contact_total,style:{display:"flex",flex:1,backgroundColor:"black",alignItems:"center",...e.topStyle},children:[(0,a.jsxs)("div",{style:{flex:1,padding:"5%",alignItems:"center"},className:l().contactus_border,children:[(0,a.jsx)("div",{className:l().contact_img,style:{},children:(0,a.jsx)("img",{src:"/訂製服務.png",width:"100%"})}),(0,a.jsxs)("div",{className:l().max_screen,style:{flex:1,flexDirection:"column",padding:16,alignItems:"flex-start"},children:[(0,a.jsx)("div",{style:{color:"white",fontSize:16,letterSpacing:2,width:"100%",textAlign:"left"},children:"接收最新信息和優惠"}),(0,a.jsx)("input",{style:{marginTop:24,outline:"none",border:"none",width:"100%",paddingTop:16,paddingBottom:16,fontSize:12,borderRadius:8,paddingLeft:8},placeholder:"請輸入您的電郵地址",onInput:e=>n(e.target.value)}),(0,a.jsx)("div",{style:{width:"100%",cursor:"pointer"},children:(0,a.jsx)("input",{type:"button",value:"發送",onClick:()=>{t?alert("發送成功"):alert("請填寫郵箱")},className:l().submit_btn})})]})]}),(0,a.jsxs)("div",{className:l().contact_min_border,style:{width:"100%"},children:[(0,a.jsx)("div",{style:{flex:1,padding:"5%",alignItems:"center"},className:l().contactus_min_border,children:(0,a.jsx)("div",{className:l().contact_img,style:{},children:(0,a.jsx)("img",{src:"/訂製服務.png",width:"100%"})})}),(0,a.jsxs)("div",{className:l().max_screen,style:{flex:1,flexDirection:"column",padding:16,alignItems:"flex-start"},children:[(0,a.jsx)("div",{style:{color:"white",fontSize:16,letterSpacing:2,width:"100%",textAlign:"left"},children:"接收最新信息和優惠"}),(0,a.jsx)("input",{style:{marginTop:24,outline:"none",width:"100%",paddingTop:16,paddingBottom:16,fontSize:12,borderRadius:8,paddingLeft:8},placeholder:"請輸入您的電郵地址"}),(0,a.jsx)("div",{style:{width:"100%"},children:(0,a.jsx)("input",{type:"button",value:"發送",className:l().submit_btn})})]})]})]})}},8890:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return _}});var a=n(5893),i=n(9854),l=n.n(i),s=n(9392),r=n.n(s),d=n(751),o=n(7294),c=n(8228),u=n(5829);function _(e){var t;let[n,i]=(0,o.useState)(e.list),s=(0,c.D)({mutationKey:["PageFetchGoods",e.perPage],mutationFn:e=>u.Z.fetchGoods(e)}),_=t=>{s.mutate({keyword:"",flower_category_id:e.id,listRows:e.perPage,page:t},{onSuccess:async t=>{let n=await t.json();e.setList(n.data.data)},onError:e=>{Toast.show("獲取失敗")}})};return(0,a.jsxs)("div",{style:{...e.top_style},children:[(0,a.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,a.jsx)("div",{className:l().distance}),(0,a.jsx)("div",{className:l().title,children:e.title}),(0,a.jsx)("div",{className:l().distance})]}),(0,a.jsx)("section",{children:(0,a.jsx)("div",{style:{display:"flex",flexWrap:"wrap",marginTop:32},children:(null==e?void 0:null===(t=e.list)||void 0===t?void 0:t.length)?e.list.map((t,n)=>(0,a.jsx)(d.default,{top_style:{marginTop:12},src:t.src,item:t,title:t.categoryname,price:t.price,type:e.type,animation:e.animation},n)):(0,a.jsx)("div",{style:{width:"100%",textAlign:"center"},children:"商品列表为空"})})}),(0,a.jsx)("div",{className:r().btn_list,children:e.maxPage>1&&(0,a.jsxs)("div",{style:{display:"flex",...e.ButtonGroupStyle},children:[e.page>3&&(0,a.jsx)("div",{children:"...."}),(()=>{switch(e.page){case 1:if(3===e.maxPage)return[1,2,3];if(2===e.maxPage)return[1,2];if(1===e.maxPage)return[];case 2:if(3===e.maxPage)return[1,2,3];if(2===e.maxPage)return[1,2];return[1,2,3,4];case e.maxPage-1:return[e.page-2,e.page-1,e.page,e.maxPage];case e.maxPage:return[e.page-2,e.page-1,e.page];default:return[e.page-2,e.page-1,e.page,e.page+1,e.page+2]}})().map((t,n)=>(0,a.jsx)("div",{onClick:()=>{e.setPage(t),_(t)},className:t===e.page?r().select:"common",style:{marginLeft:8,cursor:"pointer",marginRight:4,paddingLeft:e.page>=10?5:12,paddingRight:e.page>=10?5:12,paddingTop:4,paddingBottom:4,borderRadius:50},children:t},n)),e.maxPage-e.page>2&&(0,a.jsx)("div",{children:"...."})]})})]})}},6991:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var a=n(5893),i=n(7440),l=n.n(i),s=n(1955),r=n(1664),d=n.n(r),o=n(1163),c=n(7294);function u(e){var t,n;let i=(0,o.useRouter)(),[r,u]=(0,c.useState)(!1);return(0,a.jsxs)("div",{className:"".concat(l().header_background),children:[(0,a.jsxs)("div",{className:"".concat(l().header_layout),children:[(0,a.jsx)("div",{className:"".concat(l().logo),children:(0,a.jsx)(d(),{href:"/",children:(0,a.jsx)("img",{src:"/logo.png",style:{},className:l().logo_pic})})}),(0,a.jsxs)("div",{className:"".concat(l().header_center),children:[(null==e?void 0:null===(t=e.list)||void 0===t?void 0:t.length)&&e.list.map((e,t)=>{var n,i;return t>2?null:(0,a.jsxs)("div",{className:"".concat(l().header_center_label),children:[(0,a.jsxs)("div",{className:"".concat(l().header_center_parent),children:[e.categoryname,!!(null===(n=e.get_child)||void 0===n?void 0:n.length)&&(0,a.jsx)("span",{className:"iconfont ".concat(l().dropdown_btn),style:{fontSize:10},children:""})]}),!!(null===(i=e.get_child)||void 0===i?void 0:i.length)&&(0,a.jsx)("div",{className:"".concat(l().header_center_dropdown),children:e.get_child.map((e,n)=>(0,a.jsx)("div",{children:(0,a.jsx)("a",{href:"/category/".concat(e.id),children:e.categoryname})},t.toString()+n.toString()))})]},e.id)}),(0,a.jsx)("div",{className:"".concat(l().header_center_label),children:(0,a.jsx)(d(),{href:"/ContactPage",children:(0,a.jsx)("div",{className:"".concat(l().header_center_parent),children:"聯係我們"})})}),(0,a.jsx)("div",{className:"".concat(l().header_center_label),children:(0,a.jsx)(d(),{href:"/Aboutus",children:(0,a.jsx)("div",{className:"".concat(l().header_center_parent),children:"關於我們"})})})]}),(0,a.jsx)("div",{className:"".concat(l().header_right),style:{marginLeft:10},children:(0,a.jsxs)("div",{onClick:()=>{s.Z.get("token")?i.push("/User"):e.login()},style:{display:"flex",alignItems:"center",cursor:"pointer"},children:[(0,a.jsx)("span",{style:{},className:"iconfont ".concat(l().mine_icon),children:""}),s.Z.get("token")?" 歡迎":" 登入"]})})]}),(0,a.jsxs)("div",{className:"".concat(l().header_menu),children:[(0,a.jsxs)("div",{className:"".concat(l().header_cate_layout),onClick:()=>u(!r),style:{display:"flex",justifyContent:"space-between"},children:[(0,a.jsx)("span",{children:"分類"}),(0,a.jsx)("span",{style:{display:"inline-block",rotate:r?"45deg":"0deg",fontSize:20,transition:"200ms"},children:r?"+":"≡"})]}),(0,a.jsxs)("div",{className:"".concat(l().dropdown),style:{display:r?"block":"none"},children:[(null==e?void 0:null===(n=e.list)||void 0===n?void 0:n.length)&&e.list.map((e,t)=>(0,a.jsxs)("div",{className:"".concat(l().drop_item),children:[(0,a.jsx)("div",{className:"".concat(l().drop_label),children:e.categoryname}),(0,a.jsx)("div",{className:"".concat(l().child_list),children:e.get_child&&e.get_child.map((e,n)=>(0,a.jsx)("div",{className:"".concat(l().header_center_dropdown),children:(0,a.jsx)(d(),{href:"/category/".concat(e.id),children:e.categoryname})},t.toString()+n.toString()))})]},t)),(0,a.jsxs)("div",{className:"".concat(l().drop_item),children:[(0,a.jsx)("div",{className:"".concat(l().drop_label),children:(0,a.jsx)(d(),{href:"/Aboutus",children:"關於我們"})}),(0,a.jsx)("div",{className:"".concat(l().drop_label),children:(0,a.jsx)(d(),{href:"/ContactPage",children:"聯絡我們"})}),(0,a.jsx)("div",{className:"".concat(l().child_list)})]})]})]})]})}},6600:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var a=n(5893),i=n(9854),l=n.n(i),s=n(9392),r=n.n(s),d=n(751),o=n(7294);function c(e){var t,n;let[i,s]=(0,o.useState)(e.list);return(0,a.jsxs)("div",{style:{...e.top_style},children:[(0,a.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[0!==e.flag&&(0,a.jsx)("div",{className:l().distance}),(0,a.jsx)("div",{className:l().title,style:{whiteSpace:"nowrap"},children:e.title}),0!==e.flag&&(0,a.jsx)("div",{className:l().distance})]}),(0,a.jsx)("section",{children:(0,a.jsx)("div",{style:{display:"flex",flexWrap:"wrap",marginTop:12},children:(null==e?void 0:null===(t=e.list)||void 0===t?void 0:t.length)&&e.list[e.page-1].map((t,n)=>(0,a.jsx)(d.default,{src:t.src,item:t,title:t.categoryname,price:t.price,type:e.type,animation:e.animation},n))})}),(0,a.jsx)("div",{className:r().btn_list,children:(0,a.jsxs)("div",{style:{display:"flex",...e.ButtonGroupStyle,marginTop:15},children:[e.page>3&&(0,a.jsx)("div",{children:"...."}),(()=>{var t,n,a,i,l,s,r,d;switch(e.page){case 1:if((null==e?void 0:null===(a=e.list)||void 0===a?void 0:a.length)===3)return[1,2,3];if((null==e?void 0:null===(i=e.list)||void 0===i?void 0:i.length)===2)return[1,2];if((null==e?void 0:null===(l=e.list)||void 0===l?void 0:l.length)===1)return[];case 2:if((null==e?void 0:null===(s=e.list)||void 0===s?void 0:s.length)===3)return[1,2,3];if((null==e?void 0:null===(r=e.list)||void 0===r?void 0:r.length)===2)return[1,2];return[1,2,3,4];case(null==e?void 0:null===(t=e.list)||void 0===t?void 0:t.length)-1:return[e.page-2,e.page-1,e.page,null==e?void 0:null===(d=e.list)||void 0===d?void 0:d.length];case null==e?void 0:null===(n=e.list)||void 0===n?void 0:n.length:return[e.page-2,e.page-1,e.page];default:return[e.page-2,e.page-1,e.page,e.page+1,e.page+2]}})().map((t,n)=>(0,a.jsx)("div",{onClick:()=>{e.setPage(t)},className:t===e.page?r().select:"common",style:{marginLeft:8,cursor:"pointer",marginRight:4,paddingLeft:t>=10?8:12,paddingRight:t>=10?8:12,paddingTop:4,paddingBottom:4,borderRadius:50},children:t},n)),(null==e?void 0:null===(n=e.list)||void 0===n?void 0:n.length)-e.page>2&&(0,a.jsx)("div",{children:"...."})]})})]})}},5650:function(e){e.exports={banner_desc:"banner_banner_desc__Hb0Hv",desc_layout:"banner_desc_layout__XET2j",main_background:"banner_main_background__K9Ugq",main_contain:"banner_main_contain__OurhM"}},5018:function(e){e.exports={contactus_border:"contactComponent_contactus_border__sBQko",contactus_min_border:"contactComponent_contactus_min_border__EN_IP",contact_img:"contactComponent_contact_img__mfJZc",contact_min_border:"contactComponent_contact_min_border__zApeg",submit_btn:"contactComponent_submit_btn__RF19X",contact_total:"contactComponent_contact_total__tG4cs"}},5058:function(e){e.exports={main_background:"contactPage_main_background__2FzJm",main_layout:"contactPage_main_layout__i5MSt",contact_title:"contactPage_contact_title__4ew7J",contact_distance:"contactPage_contact_distance__pm5RX",main_contain:"contactPage_main_contain__DKzWx",ContactusLayout:"contactPage_ContactusLayout__qpJCy",desc_layout:"contactPage_desc_layout__Qnh_H"}},7440:function(e){e.exports={header_background:"header_header_background__CSmzw",logo_pic:"header_logo_pic__VC6w7",logo:"header_logo__0CHou",header_layout:"header_header_layout__elmxf",drop_item:"header_drop_item__taHmv",header_center_dropdown:"header_header_center_dropdown__AdD18",header_center:"header_header_center__B_amL",header_center_label:"header_header_center_label__jp7bN",header_center_parent:"header_header_center_parent__RXp7c",mine_icon:"header_mine_icon__ExnTv",child_list:"header_child_list__n_G0u",drop_label:"header_drop_label__8aU7Y",header_menu:"header_header_menu__SpgaE",header_cate_layout:"header_header_cate_layout__gQhX3",dropdown:"header_dropdown__TG925",show:"header_show__9vWHV",dropdown_btn:"header_dropdown_btn__b7t6F",change:"header_change__Gyo7l"}},5152:function(e,t,n){e.exports=n(5677)},1163:function(e,t,n){e.exports=n(6885)}},function(e){e.O(0,[700,848,962,664,116,736,102,774,888,179],function(){return e(e.s=6473)}),_N_E=e.O()}]);