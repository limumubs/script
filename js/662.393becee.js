"use strict";(self["webpackChunkmumu"]=self["webpackChunkmumu"]||[]).push([[662],{8662:function(e,t,s){s.r(t),s.d(t,{default:function(){return C}});var n=function(){var e=this,t=e._self._c;return t("div",[t("PeerConnection")],1)},o=[],i=function(){var e=this,t=e._self._c;return t("div",{staticClass:"webrtc-app"},[t("header",{staticClass:"header-bar"},[t("button",{staticClass:"back-btn",on:{click:e.goBack}},[t("svg",{attrs:{viewBox:"0 0 24 24"}},[t("path",{attrs:{d:"M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"}})])]),t("h1",{staticClass:"header-title"},[e._v(e._s(e.pageTitle))]),t("div",{staticClass:"header-placeholder"})]),t("main",{staticClass:"app-main"},[t("div",{staticClass:"connection-status"},[t("div",{staticClass:"status-indicator",class:e.connectionStatusClass},[e._v(" "+e._s(e.connectionStatusText)+" ")]),t("div",{staticClass:"peer-id-display"},[t("span",[e._v("你的ID: "),t("strong",[e._v(e._s(e.peerId))])]),t("button",{staticClass:"copy-btn",on:{click:e.copyPeerId}},[t("svg",{staticClass:"copy-icon",attrs:{viewBox:"0 0 24 24"}},[t("path",{attrs:{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"}})]),e._v(" 复制 ")])])]),t("div",{staticClass:"connection-controls"},[t("div",{staticClass:"connect-input"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.remotePeerId,expression:"remotePeerId"}],attrs:{placeholder:"输入对方ID",disabled:e.isConnected},domProps:{value:e.remotePeerId},on:{input:function(t){t.target.composing||(e.remotePeerId=t.target.value)}}}),t("button",{staticClass:"connect-btn",attrs:{disabled:!e.remotePeerId||e.isConnected},on:{click:e.connectToPeer}},[e._v(" 连接 ")])]),t("button",{staticClass:"disconnect-btn",attrs:{disabled:!e.isConnected},on:{click:e.disconnect}},[e._v(" 断开连接 ")])]),t("div",{staticClass:"message-area"},[t("div",{ref:"messageContainer",staticClass:"message-container"},e._l(e.messages,(function(s,n){return t("div",{key:n,class:["message",s.type],style:{marginBottom:n<e.messages.length-1?"1rem":"0"}},[t("div",{staticClass:"message-content"},[t("span",{staticClass:"message-sender"},[e._v(e._s(s.sender))]),t("span",{staticClass:"message-text"},[e._v(e._s(s.text))]),t("span",{staticClass:"message-time"},[e._v(e._s(s.time))])])])})),0)]),t("div",{staticClass:"message-input-area"},[t("button",{staticClass:"send-btn",attrs:{disabled:!e.isConnected||!e.newMessage},on:{click:e.sendMessage}},[e._v(" 发送 ")])])]),e._m(0),t("transition",{attrs:{name:"fade"}},[e.showToast?t("div",{staticClass:"toast",class:e.toastType},[t("svg",{staticClass:"toast-icon",attrs:{viewBox:"0 0 24 24"}},["success"===e.toastType?t("path",{attrs:{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}}):e._e(),"error"===e.toastType?t("path",{attrs:{d:"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}}):e._e()]),t("span",{staticClass:"toast-message"},[e._v(e._s(e.toastMessage))])]):e._e()])],1)},a=[function(){var e=this,t=e._self._c;return t("footer",{staticClass:"app-footer"},[t("div",{staticClass:"footer-note"},[t("p",[e._v("© 沐沐同步工具")])])])}],c=(s(4114),s(5575)),r={name:"WebRTCApp",data(){return{peer:null,peerId:"",remotePeerId:"",connection:null,messages:[],newMessage:"",connectionStatus:"disconnected",showToast:!1,toastMessage:"",toastType:"success",pageTitle:""}},created(){this.pageTitle=this.$route.query.name},computed:{isConnected(){return"connected"===this.connectionStatus},connectionStatusText(){const e={disconnected:"未连接",connecting:"连接中...",connected:"已连接"};return e[this.connectionStatus]},connectionStatusClass(){return this.connectionStatus}},mounted(){this.initializePeer()},methods:{goBack(){this.$goBackOrHome()},initializePeer(){this.peer=new c.Ay({host:"0.peerjs.com",port:443,secure:!0,debug:3}),this.peer.on("open",(e=>{this.peerId=e,this.showNotification("已准备好连接","success")})),this.peer.on("connection",(e=>{this.handleIncomingConnection(e)})),this.peer.on("error",(e=>{console.error("Peer error:",e),this.showNotification("连接错误","error"),this.connectionStatus="disconnected"}))},connectToPeer(){if(!this.remotePeerId)return;this.connectionStatus="connecting",this.addSystemMessage(`正在连接 ${this.remotePeerId}...`);const e=this.peer.connect(this.remotePeerId);this.handleOutgoingConnection(e)},handleIncomingConnection(e){this.connection=e,this.setupConnectionHandlers(),this.connectionStatus="connected",this.addSystemMessage(`${e.peer} 已连接`)},handleOutgoingConnection(e){this.connection=e,this.setupConnectionHandlers(),e.on("open",(()=>{this.connectionStatus="connected",this.addSystemMessage(`已连接到 ${e.peer}`)}))},setupConnectionHandlers(){this.connection.on("data",(e=>{this.addMessage("对方",e,"remote")})),this.connection.on("close",(()=>{this.addSystemMessage("连接已关闭"),this.connectionStatus="disconnected",this.connection=null})),this.connection.on("error",(e=>{console.error("Connection error:",e),this.addSystemMessage(`连接错误: ${e.message}`),this.connectionStatus="disconnected"}))},disconnect(){this.connection&&this.connection.close(),this.connectionStatus="disconnected",this.connection=null},sendMessage(){if(this.newMessage.trim()&&this.connection)try{this.connection.send(this.newMessage),this.addMessage("我",this.newMessage,"local"),this.newMessage=""}catch(e){this.showNotification("发送失败","error")}},addMessage(e,t,s){this.messages.push({sender:e,text:t,type:s,time:(new Date).toLocaleTimeString()}),this.scrollToBottom()},addSystemMessage(e){this.addMessage("系统",e,"system")},scrollToBottom(){this.$nextTick((()=>{const e=this.$el.querySelector(".message-container");e.scrollTop=e.scrollHeight}))},copyPeerId(){this.copyToClipboard(this.peerId)?this.showNotification("ID已复制到剪贴板","success"):this.showNotification("复制失败","error")},copyToClipboard(e){return navigator.clipboard?navigator.clipboard.writeText(e).then((()=>!0)).catch((()=>!1)):new Promise((t=>{const s=document.createElement("textarea");s.value=e,s.style.position="fixed",document.body.appendChild(s),s.select();try{const e=document.execCommand("copy");t(e)}catch(n){t(!1)}document.body.removeChild(s)}))},showNotification(e,t="success"){this.toastMessage=e,this.toastType=t,this.showToast=!0,setTimeout((()=>{this.showToast=!1}),3e3)}},beforeDestroy(){this.connection&&this.connection.close(),this.peer&&this.peer.destroy()}},d=r,l=s(1656),h=(0,l.A)(d,i,a,!1,null,"1c6d408c",null),u=h.exports,p={name:"App",components:{PeerConnection:u}},m=p,g=(0,l.A)(m,n,o,!1,null,null,null),C=g.exports}}]);
//# sourceMappingURL=662.393becee.js.map