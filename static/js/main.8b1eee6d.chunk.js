(this.webpackJsonpnotepad=this.webpackJsonpnotepad||[]).push([[0],{52:function(e,t,n){},54:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},75:function(e,t,n){},83:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),a=n(14),s=n.n(a),o=(n(52),n(24)),r=n(15),l=n(27),d=n.n(l),j=n(32),u=(n(54),n(7)),b=n(1);function h(){window.open("http://localhost:3000")}function p(){var e=document.querySelector("#w3review"),t=document.querySelector("#count");null!=e.innerText?t.innerHTML=e.innerText.length:t.innerHTML="0"}var O=function(e){function t(t){t.preventDefault();var n=new FileReader,c=t.target.files[0];e.fName(c.name),n.onload=function(){var e=Object(j.a)(d.a.mark((function e(t){var n,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.target.result,(c=document.querySelector("#w3review")).innerHTML="",c.innerHTML=n,p();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.readAsText(t.target.files[0])}return Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{id:"sidebar",children:[Object(b.jsxs)("div",{className:"Menu",children:[Object(b.jsxs)("a",{href:"#",onClick:h,children:[Object(b.jsx)(u.f,{color:"white",className:"ico",size:"25px"}),Object(b.jsx)("span",{className:"apn",children:" New Page"})]}),Object(b.jsx)("a",{href:"#",children:Object(b.jsxs)("label",{htmlFor:"fileViewer",children:[Object(b.jsx)(u.h,{color:"white",className:"ico",size:"25px"}),Object(b.jsx)("input",{type:"file",id:"fileViewer",accept:"text/*",onChange:function(e){return t(e)}}),Object(b.jsx)("span",{className:"apn",children:" Open"})]})}),Object(b.jsxs)("a",{href:"#",onClick:e.savebtn,children:[Object(b.jsx)(u.o,{color:"white",className:"ico",size:"25px"}),Object(b.jsx)("span",{className:"apn",children:" Save"})]}),Object(b.jsxs)("a",{href:"#",onClick:e.print,children:[Object(b.jsx)(u.m,{color:"white",className:"ico",size:"25px"}),Object(b.jsx)("span",{className:"apn",children:" Print"})]}),Object(b.jsxs)("a",{href:"#",onClick:e.about,children:[Object(b.jsx)(u.n,{color:"white",className:"ico",size:"25px"}),Object(b.jsx)("span",{className:"apn",children:" Contact Us"})]}),Object(b.jsxs)("a",{href:"#",onClick:e.clear,children:[Object(b.jsx)(u.q,{color:"white",className:"ico",size:"25px"}),Object(b.jsx)("span",{className:"apn",children:" Clear"})]})]}),Object(b.jsxs)("div",{class:"footer1",children:[Object(b.jsx)("a",{href:"https://www.instagram.com/__patel_saab___/",className:"social",children:Object(b.jsx)(u.j,{color:"#19b3d3",className:"ico",size:"25px"})}),Object(b.jsx)("a",{href:"https://www.facebook.com/satin.patel.108",className:"social",children:Object(b.jsx)(u.g,{color:"#19b3d3",className:"ico",size:"20px"})}),Object(b.jsx)("a",{href:"https://www.linkedin.com/in/satin-patel-07967a150/",className:"social",children:Object(b.jsx)(u.l,{color:"#19b3d3",className:"ico",size:"30px"})})]})]}),Object(b.jsxs)("div",{id:"MobNav",children:[Object(b.jsx)("a",{href:"#",onClick:h,children:Object(b.jsx)(u.f,{color:"white",className:"ico",size:"25px"})}),Object(b.jsx)("a",{href:"#",children:Object(b.jsxs)("label",{htmlFor:"fileViewer",children:[Object(b.jsx)(u.h,{color:"white",className:"ico",size:"25px"}),Object(b.jsx)("input",{type:"file",id:"fileViewer",accept:"text/*",onChange:function(e){return t(e)}})]})}),Object(b.jsx)("a",{href:"#",onClick:e.savebtn,children:Object(b.jsx)(u.o,{color:"white",className:"ico",size:"25px"})}),Object(b.jsx)("a",{href:"#",onClick:e.print,children:Object(b.jsx)(u.m,{color:"white",className:"ico",size:"25px"})}),Object(b.jsx)("a",{onClick:e.about,children:Object(b.jsx)(u.n,{color:"white",className:"ico",size:"25px"})}),Object(b.jsx)("a",{href:"#",onClick:e.clear,children:Object(b.jsx)(u.q,{color:"white",className:"ico",size:"25px"})})]})]})},m=(n(56),n(33)),x=n(43),f=n(29),v=n(47),g=n(46),y=n(6),w=(n(57),n(44)),S=n.n(w),C="https://www.googleapis.com/auth/drive",N=function(e){Object(v.a)(n,e);var t=Object(g.a)(n);function n(e){var c;return Object(m.a)(this,n),(c=t.call(this,e)).state={show:!1,name:"",googleAuth:"",fileName:"NotePadFile",fileValue:""},c.initClient=function(){try{window.gapi.client.init({apiKey:"AIzaSyB4Gtr-knEfvBqchJjNfoY7NolUIhHYvnM",clientId:"965913890358-sd2i2tuj5d8itpkbjv1v1q1nhu8rk0qf.apps.googleusercontent.com",scope:C,discoveryDocs:["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"]}).then((function(){c.setState({googleAuth:window.gapi.auth2.getAuthInstance()}),c.state.googleAuth.isSignedIn.listen(c.updateSigninStatus),document.getElementById("signin-btn").addEventListener("click",c.signInFunction),document.getElementById("signout-btn").addEventListener("click",c.signOutFunction)}))}catch(e){window.alert("Notepad is facing some issue please contact to admin or you can restart"),console.log(e)}},c.signInFunction=function(){var e=document.querySelector("#fileName").value;0!=e.length?(c.setState({fileName:e,fileValue:c.props.value}),c.setState({fileName:e}),c.state.googleAuth.signIn(),c.updateSigninStatus()):document.querySelector("#errormsg").style.display="block"},c.signOutFunction=function(){c.state.googleAuth.signOut(),window.alert("sign out perfect")},c.updateSigninStatus=function(){c.setSigninStatus()},c.setSigninStatus=Object(j.a)(d.a.mark((function e(){var t,n,i,a,s,o,r,l;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(t=c.state.googleAuth.currentUser.get()).isSignedIn?t.hasGrantedScopes(C)&&(n="foo_bar_baz",i="\r\n--foo_bar_baz\r\n","\r\n--foo_bar_baz--",a=c.state.fileName,s=c.state.fileValue,o={name:a,mimeType:"text/plain"},r=i+"Content-Type: application/json; charset=UTF-8\r\n\r\n"+JSON.stringify(o)+i+"Content-Type: "+"text/plain\r\n\r\n"+s+"\r\n\r\n--foo_bar_baz--",console.log(r),l=window.gapi.client.request({path:"https://www.googleapis.com/upload/drive/v3/files",method:"POST",params:{uploadType:"multipart"},headers:{"Content-Type":"multipart/related; boundary="+n},body:r}),c.closeModal(),c.setState({show:!0}),l.execute((function(e){console.log(e)}))):(window.alert("user is null"),c.setState({name:""}));case 2:case"end":return e.stop()}}),e)}))),c.handleClientLoad=function(){window.gapi.load("client:auth2",c.initClient)},c.closeModal=c.closeModal.bind(Object(f.a)(c)),c.closeSaveModal=c.closeSaveModal.bind(Object(f.a)(c)),c}return Object(x.a)(n,[{key:"componentDidMount",value:function(){this.props.setIsOpen(!1);var e=document.createElement("script");e.onload=this.handleClientLoad,e.src="https://apis.google.com/js/api.js",document.body.appendChild(e)}},{key:"closeModal",value:function(){this.props.setOpen(),document.querySelector("#drivemodal").style.display="none"}},{key:"closeSaveModal",value:function(){this.props.setOpen(),this.setState({show:!1})}},{key:"render",value:function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsxs)(y.a.Dialog,{id:"drivemodal",centered:!0,children:[Object(b.jsx)(y.a.Header,{closeButton:!0,onClick:this.closeModal,children:Object(b.jsx)(y.a.Title,{children:"File Name:"})}),Object(b.jsx)(y.a.Body,{children:Object(b.jsxs)("form",{onSubmit:this.signInFunction,children:[Object(b.jsx)("input",{type:"text",id:"fileName",placeholder:"Enter file Name",required:!0}),Object(b.jsx)("span",{id:"errormsg",children:"Enter File Name first"}),Object(b.jsx)("button",{type:"submit",class:"btn btn-sm animated-button thar-one",children:"Save"})]})}),Object(b.jsx)(y.a.Footer,{})]}),Object(b.jsx)(S.a,{show:this.state.show,success:!0,title:"Save Successful",onConfirm:this.closeSaveModal,onCancel:this.closeSaveModal,children:"Your data has been successfuly saved in your google drive"})]})}}]),n}(c.Component),k=n(45),_=n(31),T=n(10);n(75);var q=function(e){var t=Object(c.useState)(["Arial","Courier New","Gill Sans","sans-serif","Times New Roman","Courier New","Courier","Lucidatypewriter","monospace","Comic Sans"," Comic Sans MS"," Zapf Chancery"," cursive","Impact"," Arnoldboecklin"," fantasy"]),n=Object(r.a)(t,2),i=n[0],a=(n[1],Object(c.useState)([14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72])),s=Object(r.a)(a,2),o=s[0],l=(s[1],Object(c.useState)("Arial")),d=Object(r.a)(l,2),j=d[0],h=d[1],p=Object(c.useState)("14px"),O=Object(r.a)(p,2),m=O[0],x=O[1];return Object(b.jsx)("div",{id:"head",children:Object(b.jsxs)(_.a,{className:"navbar-fixed-top head navbar-dark",collapseOnSelect:!0,expand:"lg",fixed:"top",children:[Object(b.jsxs)(_.a.Brand,{id:"brand",href:"#home",children:["Note",Object(b.jsx)("span",{children:"Pad"})]}),Object(b.jsx)(_.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(b.jsxs)(_.a.Collapse,{id:"responsive-navbar-nav",children:[Object(b.jsxs)(T.a,{className:"mr-auto custom",children:[Object(b.jsxs)(T.a.Link,{href:"#features",children:[Object(b.jsx)("input",{type:"checkbox",id:"check",defaultValue:"true",onChange:function(){return function(){var e=document.querySelector("#check"),t=document.querySelector("#sidebar"),n=document.querySelector("#MobNav"),c=document.querySelector("#content");e.checked?(t.style.display="none",n.style.display="block",c.style.marginLeft="60px"):(n.style.display="none",t.style.display="block",c.style.marginLeft="250px")}()}}),Object(b.jsx)("label",{htmlFor:"check",children:Object(b.jsx)(u.d,{color:"white",id:"sidebar_btn",className:"ico"})})]}),Object(b.jsx)(T.a.Link,{onClick:function(){return e.updateDetails("font-weight:bolder")},children:Object(b.jsx)(u.e,{id:"bold",value:"bold",className:"ico"})}),Object(b.jsx)(T.a.Link,{onClick:function(){return e.updateDetails("font-style:italic")},children:Object(b.jsx)(u.k,{id:"italic",className:"ico"})}),Object(b.jsx)(T.a.Link,{onClick:function(){return e.updateDetails("text-decoration:underline")},children:Object(b.jsx)(u.p,{id:"underline",className:"ico"})}),Object(b.jsx)(T.a.Link,{onClick:function(){return e.updateDetails("background-color:yellow")},children:Object(b.jsx)(u.i,{id:"highlight",className:"ico"})}),Object(b.jsxs)(T.a.Link,{href:"#",onClick:function(){return e.align("text-align:left")},children:[" ",Object(b.jsx)(u.b,{id:"left",className:"ico"})]}),Object(b.jsxs)(T.a.Link,{href:"#",onClick:function(){return e.align("text-align:center")},children:[" ",Object(b.jsx)(u.a,{id:"center",className:"ico"})]}),Object(b.jsx)(T.a.Link,{href:"#",onClick:function(){return e.align("text-align:right")},children:Object(b.jsx)(u.c,{id:"right",className:"ico"})}),Object(b.jsx)(T.a.Link,{href:"#pricing",children:Object(b.jsx)("input",{type:"color",id:"color",className:"ico",defaultValue:"#ff0000",onChange:function(){return function(e){var t=document.querySelector("#color").value;e.updateDetails("color: "+t)}(e)}})}),Object(b.jsxs)(T.a.Link,{href:"#",children:[" ",Object(b.jsxs)("select",{id:"font-family",onChange:function(){return function(e){var t=document.querySelector("#font-family"),n=[t.value,m];e.font(n),h(t.value)}(e)},children:[Object(b.jsx)("option",{disabled:!0,defaultValue:!0,children:"Arial"}),i.map((function(e,t){return Object(b.jsx)("option",{children:e},t)}))]})]}),Object(b.jsx)(T.a.Link,{href:"#",children:Object(b.jsxs)("select",{id:"font-size",onChange:function(){return function(e){var t=document.querySelector("#font-size"),n=[j,t.value];e.font(n),x(t.value)}(e)},children:[Object(b.jsx)("option",{disabled:!0,defaultValue:!0,children:"font-size"}),o.map((function(e,t){return Object(b.jsxs)("option",{children:[e,"px"]},t)}))]})})]}),Object(b.jsx)(T.a,{children:Object(b.jsx)(T.a.Link,{children:Object(b.jsx)("span",{id:"count",children:"0"})})})]})]})})},E=n(23),A=n(40),L=function(e){var t=document.querySelector("#w3review"),n=document.querySelector("#count");null!=t.innerText?n.innerHTML=t.innerText.length:n.innerHTML="0"};function I(e){document.querySelector("#w3review").style=e}function P(e){if(window.getSelection){var t=window.getSelection();if(0!=t.toString().length){if(t.rangeCount){var n=document.createElement("span");s.a.render(Object(b.jsx)("span",{}),n);var c={"font-family":e[0],"font-size":e[1]};Object.assign(n.style,c),n.innerHTML=t.toString();var i=t.getRangeAt(0);i.deleteContents(),i.insertNode(n)}}else{var a=document.querySelector("#w3review");c={"font-family":e[0],"font-size":e[1]};Object.assign(a.style,c)}}else window.alert("Please restart the server or use updated browser")}function M(e){if(window.getSelection){var t=window.getSelection();if(0!=t.toString().length)if(t.rangeCount){var n=document.createElement("span");s.a.render(Object(b.jsx)("span",{}),n),n.style.display="inline",n.style=e,n.innerHTML=t.toString();var c=t.getRangeAt(0);c.deleteContents(),c.insertNode(n)}else window.alert("Please use the latest version of browser....");else document.querySelector("#w3review").style=e}else window.alert("Please restart the server....")}function D(){var e=document.querySelector("#modal"),t=document.querySelector("#savemodal"),n=document.querySelector("#aboutmodal"),c=document.querySelector("#printmodal");e.style="display:none",t.style.display="none",n.style.display="none",c.style.display="none"}function F(){document.querySelector("#w3review").innerHTML="",L(),D()}function z(){D(),document.querySelector("#modal").style.display="none",document.querySelector("#savemodal").style.display="block"}var H=function(e){var t,n=Object(c.useState)(""),i=Object(r.a)(n,2),a=i[0],s=i[1],l=Object(c.useState)(""),d=Object(r.a)(l,2),j=d[0],u=d[1],h=Object(c.useState)(!0),p=Object(r.a)(h,2),m=p[0],x=p[1],f=Object(c.useState)(""),v=Object(r.a)(f,2),g=v[0],w=v[1];function S(){if(D(),0!=g.length){document.querySelector("#filename").innerHTML=g;var e=new Date,t=e.getDate()+"-"+(e.getMonth()+1)+"-"+e.getFullYear()+" "+(e.getHours()+":"+e.getMinutes());document.querySelector("#footertext").innerHTML="Last edited-"+t,window.print()}else{if(1==m)document.querySelector("#printmodal").style.display="block"}}return Object(b.jsxs)("div",{children:[Object(b.jsx)(q,{updateDetails:M,align:I,font:P}),Object(b.jsx)(O,{clear:function(){D(),document.querySelector("#savemodal").style.display="none",1==m&&(document.querySelector("#modal").style="display:block")},savebtn:z,print:S,about:function(){D(),1==m&&(document.querySelector("#aboutmodal").style="display:block")},fName:w}),Object(b.jsx)("div",{children:Object(b.jsxs)("div",{id:"content",children:[Object(b.jsxs)("div",{class:"col-12 bg-primary py-3",id:"HeaderForPrint",children:[Object(b.jsx)("span",{id:"lfp",children:" Notepad "}),Object(b.jsx)("span",{id:"filename",children:"FileName.txt"})]}),Object(b.jsx)("div",{id:"w3review",className:"w31review",contentEditable:"true",onKeyUp:L}),Object(b.jsx)("div",{class:"footer",children:Object(b.jsx)("p",{id:"footertext",children:"*****"})})]})}),Object(b.jsxs)(y.a.Dialog,{id:"modal",centered:!0,className:"dialog",children:[Object(b.jsx)(y.a.Header,{closeButton:!0,onClick:D,children:Object(b.jsx)(y.a.Title,{children:"Warning...."})}),Object(b.jsx)(y.a.Body,{children:Object(b.jsx)("p",{children:"Do you want to clear the data"})}),Object(b.jsxs)(y.a.Footer,{children:[Object(b.jsx)(E.a,{variant:"danger",onClick:D,children:"No"}),Object(b.jsx)(E.a,{variant:"primary",onClick:F,children:"Yes"})]})]}),Object(b.jsxs)(y.a.Dialog,{id:"savemodal",centered:!0,className:"dialog",children:[Object(b.jsx)(y.a.Header,{closeButton:!0,onClick:D,children:Object(b.jsx)(y.a.Title,{children:"Alert...."})}),Object(b.jsx)(y.a.Body,{children:Object(b.jsx)("p",{children:"Where do you want to save.."})}),Object(b.jsxs)(y.a.Footer,{children:[Object(b.jsx)(E.a,{variant:"danger",onClick:function(){s("file"),D();var e=document.querySelector("#w3review"),t="data:text/plain;base64,"+Object(A.a)(e.innerText);Object(A.b)(t,"document.txt")},children:"File"}),Object(b.jsx)(E.a,{variant:"primary",onClick:function(){D();var e=document.querySelector("#w3review");u(e.innerText),s("drive")},children:"GDrive"})]})]}),Object(b.jsxs)(y.a.Dialog,{id:"aboutmodal",children:[Object(b.jsx)(y.a.Header,{children:Object(b.jsx)(y.a.Title,{children:"Contact Us"})}),Object(b.jsx)(y.a.Body,{children:Object(b.jsx)("div",{class:"container",children:Object(b.jsx)("div",{class:"row",children:Object(b.jsx)("div",{class:"col-md-12",children:Object(b.jsx)("div",{class:"well well-sm",children:Object(b.jsx)("form",{onSubmit:function(e){e.preventDefault(),console.log(Object({NODE_ENV:"production",PUBLIC_URL:"/notepad",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_KEY:"AIzaSyB4Gtr-knEfvBqchJjNfoY7NolUIhHYvnM",REACT_APP_CLIENT_ID:"965913890358-sd2i2tuj5d8itpkbjv1v1q1nhu8rk0qf.apps.googleusercontent.com",REACT_APP_SERVICE_ID:"user_IRjLYkTWqs54wIQqeoUbQ",REACT_APP_TEMP_ID:"template_ixl83dp"})),k.a.sendForm("service_6182awz","template_ixl83dp",e.target,"user_IRjLYkTWqs54wIQqeoUbQ").then((function(t){window.alert("We will get back to you shortly..."),e.target.reset(),D()}),(function(e){window.alert("OOPS...try again later or send a mail to notepadx@xxx.com"),console.log(e.text)}))},children:Object(b.jsxs)("div",{class:"row",children:[Object(b.jsxs)("div",{class:"col-md-6",children:[Object(b.jsxs)("div",{class:"form-group",children:[Object(b.jsx)("label",{for:"name",children:"Name"}),Object(b.jsx)("input",{type:"text",class:"form-control",id:"name",name:"name",placeholder:"Enter name",required:"required"})]}),Object(b.jsxs)("div",{class:"form-group",children:[Object(b.jsx)("label",{for:"email",children:"Email Address"}),Object(b.jsxs)("div",{class:"input-group",children:[Object(b.jsx)("span",{class:"input-group-addon",children:Object(b.jsx)("span",{class:"glyphicon glyphicon-envelope"})}),Object(b.jsx)("input",{type:"email",class:"form-control",id:"email",name:"email",placeholder:"Enter email",required:"required"})]})]}),Object(b.jsxs)("div",{class:"form-group",children:[Object(b.jsx)("label",{for:"subject",children:"Subject"}),Object(b.jsxs)("select",{id:"subject",name:"subject",class:"form-control",required:"required",children:[Object(b.jsx)("option",{value:"na",selected:"",children:"Choose One:"}),Object(b.jsx)("option",{value:"service",children:"General Customer Service"}),Object(b.jsx)("option",{value:"suggestions",children:"Suggestions"}),Object(b.jsx)("option",{value:"product",children:"Product Support"})]})]})]}),Object(b.jsx)("div",{class:"col-md-6",children:Object(b.jsxs)("div",{class:"form-group",children:[Object(b.jsx)("label",{for:"name",children:"Message"}),Object(b.jsx)("textarea",(t={name:"message",id:"message"},Object(o.a)(t,"name","message"),Object(o.a)(t,"class","form-control"),Object(o.a)(t,"rows","9"),Object(o.a)(t,"cols","10"),Object(o.a)(t,"required","required"),Object(o.a)(t,"placeholder","Message"),t))]})}),Object(b.jsx)("div",{class:"col-md-12",children:Object(b.jsx)("button",{type:"submit",class:"btn btn-primary pull-right",id:"btnContactUs",children:"Send Message"})})]})})})})})})}),Object(b.jsx)(y.a.Footer,{children:Object(b.jsx)(E.a,{variant:"info",onClick:D,children:"Close"})})]}),Object(b.jsxs)(y.a.Dialog,{id:"printmodal",centered:!0,children:[Object(b.jsx)(y.a.Header,{closeButton:!0,onClick:D,children:Object(b.jsx)(y.a.Title,{children:"File Name:"})}),Object(b.jsxs)(y.a.Body,{children:[Object(b.jsx)("input",{type:"text",id:"fileName1",placeholder:"Enter file Name"}),Object(b.jsx)("span",{id:"errormsg1",children:"Enter File Name first"})]}),Object(b.jsx)(y.a.Footer,{children:Object(b.jsx)(E.a,{variant:"primary",onClick:function(){var e=document.querySelector("#fileName1").value;0!=e.length?(w(e+".txt"),S()):document.querySelector("#errormsg1").style.display="block"},children:"Save"})})]}),"drive"===a&&Object(b.jsx)(N,{value:j,isOpen:m,setOpen:function(){x(!0)},setIsOpen:x})]})};var R=function(){return Object(b.jsx)("div",{children:Object(b.jsx)(H,{})})},B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,85)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),a(e),s(e)}))};n(78),n(79);n(80).config(),console.log(Object({NODE_ENV:"production",PUBLIC_URL:"/notepad",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_KEY:"AIzaSyB4Gtr-knEfvBqchJjNfoY7NolUIhHYvnM",REACT_APP_CLIENT_ID:"965913890358-sd2i2tuj5d8itpkbjv1v1q1nhu8rk0qf.apps.googleusercontent.com",REACT_APP_SERVICE_ID:"user_IRjLYkTWqs54wIQqeoUbQ",REACT_APP_TEMP_ID:"template_ixl83dp"})),s.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(R,{})}),document.getElementById("root")),B()}},[[83,1,2]]]);
//# sourceMappingURL=main.8b1eee6d.chunk.js.map