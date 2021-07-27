(this["webpackJsonpsimple-react-app"]=this["webpackJsonpsimple-react-app"]||[]).push([[0],{30:function(e,t,n){},31:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(20),r=n.n(s),i=(n(30),n(31),n(13)),l=n(6),o=n(2),u=n(17),d={logo:{src:"images/logo.png",url:"#"},menu:[{id:1,name:"Home",url:"/",class:"active"}],banner:[{image:"images/banner_1.jpg",title:"Banner 1 title",desc:"Banner 1 desc"},{image:"images/banner_2.jpg",title:"Banner 2 title",desc:"Banner 2 desc"}],content:{title:"Welcome Title here",sub_title:"Sub Title here",content:"<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>"},footer:{copyright:"Footer copyright text here"}},j=Object(u.b)({name:"counter",initialState:{value:{numbers:[],data:d}},reducers:{add_number:function(e){e.value.numbers.push(e.value.numbers.length+1)},default_list:function(e){e.value.numbers=[1,2,3,4]},add_default_data:function(e){e.value.data=d},update_logo:function(e,t){e.value.data.logo.src=t.payload},add_menu:function(e,t){e.value.data.menu.push(t.payload)},update_menu:function(e,t){var n=t.payload.index,a=t.payload.data;e.value.data.menu[n]=a},delete_menu:function(e,t){e.value.data.menu.splice(t.payload,1)},update_footer_content:function(e,t){e.value.data.footer.copyright=t.payload},update_page_content:function(e,t){e.value.data.content.title=t.payload.title,e.value.data.content.sub_title=t.payload.sub_title,e.value.data.content.content=t.payload.content}}}),b=j.actions,m=(b.add_number,b.default_list,b.add_default_data),p=b.update_logo,h=b.add_menu,O=b.delete_menu,x=b.update_menu,f=b.update_footer_content,v=b.update_page_content,g=j.reducer,N=Object(u.b)({name:"admin",initialState:{value:{isAdmin:!1,isPopupLogin:!1,isPopupMenu:!1,isAddMenuPopup:!1,isUpdateMenuPopup:!1,isFooterPopup:!1,isPagePopup:!1,isBannerPopup:!1,isBannerAddPopup:!1,updateMenuIndex:null}},reducers:{onLoginSuccess:function(e){e.value.isAdmin=!0,localStorage.setItem("islogin","login")},onLogout:function(e){e.value.isAdmin=!1,localStorage.setItem("islogin","")},openLoginPopup:function(e){e.value.isPopupLogin=!0},closeLoginPopup:function(e){e.value.isPopupLogin=!1},openMenuPopup:function(e){e.value.isPopupMenu=!0},closeMenuPopup:function(e){e.value.isPopupMenu=!1},openAddMenuPopup:function(e){e.value.isAddMenuPopup=!0},closeAddMenuPopup:function(e){e.value.isAddMenuPopup=!1},openUpdateMenuPopup:function(e,t){e.value.updateMenuIndex=t.payload,e.value.updateMenuIndex>-1?e.value.isUpdateMenuPopup=!0:e.value.isUpdateMenuPopup=!1},closeUpdateMenuPopup:function(e){e.value.isUpdateMenuPopup=!1},openFooterPopup:function(e){e.value.isFooterPopup=!0},closeFooterPopup:function(e){e.value.isFooterPopup=!1},openPagePopup:function(e){e.value.isPagePopup=!0},closePagePopup:function(e){e.value.isPagePopup=!1},openBannerPopup:function(e){e.value.isBannerPopup=!0},closeBannerPopup:function(e){e.value.isBannerPopup=!1},addBannerItemPopup:function(e){e.value.isBannerAddPopup=!0},closeAddBannerItemPopup:function(e){e.value.isBannerAddPopup=!1}}}),P=N.actions,y=P.onLoginSuccess,_=P.onLogout,w=P.openLoginPopup,M=P.closeLoginPopup,S=P.openMenuPopup,L=P.closeMenuPopup,A=P.openAddMenuPopup,B=P.closeAddMenuPopup,C=P.openUpdateMenuPopup,k=P.closeUpdateMenuPopup,I=P.openFooterPopup,U=P.closeFooterPopup,q=P.openPagePopup,T=P.closePagePopup,V=P.openBannerPopup,z=P.closeBannerPopup,F=P.addBannerItemPopup,E=P.closeAddBannerItemPopup,H=N.reducer,R=n(7),D=n(0);function J(){var e=Object(o.c)((function(e){return e.counter.value.data.logo})),t=Object(o.c)((function(e){return e.admin.value.isAdmin})),n=Object(a.useState)(""),c=Object(R.a)(n,2),s=c[0],r=c[1],i=Object(a.useState)(""),l=Object(R.a)(i,2),u=l[0],d=l[1],j=Object(o.b)();return Object(a.useEffect)((function(){void 0!==e&&(r(e.src),d(e.url))}),[e]),Object(D.jsxs)("div",{className:"brand_logo",children:[Object(D.jsx)("a",{href:u,children:Object(D.jsx)("img",{src:s,alt:""})}),t&&Object(D.jsx)("span",{className:"btn rounded-edit-btn",onClick:function(){return j(w())},children:Object(D.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-pencil-fill",viewBox:"0 0 16 16",children:Object(D.jsx)("path",{d:"M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"})})})]})}function W(){var e=Object(o.c)((function(e){return e.counter.value.data.menu})),t=Object(o.c)((function(e){return e.admin.value.isAdmin})),n=Object(o.b)(),c=Object(a.useState)([]),s=Object(R.a)(c,2),r=s[0],l=s[1],u=r.map((function(e,t){return Object(D.jsx)("li",{children:Object(D.jsx)(i.b,{to:e.url,children:e.name})},t)}));return Object(a.useEffect)((function(){void 0!==e&&l(e)}),[e]),Object(D.jsxs)("nav",{className:"main-navigation",children:[t&&Object(D.jsx)("span",{className:"btn rounded-edit-btn",onClick:function(){return n(S())},children:Object(D.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-pencil-fill",viewBox:"0 0 16 16",children:Object(D.jsx)("path",{d:"M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"})})}),Object(D.jsxs)("ul",{children:[u,!t&&Object(D.jsx)("li",{children:Object(D.jsx)(i.b,{to:"/login",children:"Log In"})}),t&&Object(D.jsx)("li",{children:Object(D.jsx)(i.b,{to:"/logout",children:"Logout"})})]})]})}function G(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.admin.value.isAdmin})),n=Object(o.c)((function(e){return e.counter.value.data.banner})).map((function(e,t){return Object(D.jsx)("div",{className:"carousel-item "+(0===t?"active":""),style:{backgroundImage:"url("+e.image+")"},children:Object(D.jsxs)("div",{className:"banner-caption",children:[Object(D.jsx)("h1",{className:"banner-title",children:e.title}),Object(D.jsx)("div",{className:"banner-desc",children:e.desc})]})},t+"_banner")}));return Object(D.jsxs)("div",{className:"home_banner_wrap",children:[t&&Object(D.jsx)("span",{className:"btn rounded-edit-btn",onClick:function(){return e(V())},children:Object(D.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-pencil-fill",viewBox:"0 0 16 16",children:Object(D.jsx)("path",{d:"M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"})})}),Object(D.jsxs)("div",{id:"mainBanner",className:"carousel slide home-banner-sec","data-bs-ride":"carousel",children:[Object(D.jsx)("div",{className:"carousel-inner",children:n}),Object(D.jsxs)("button",{className:"carousel-control-prev",type:"button","data-bs-target":"#mainBanner","data-bs-slide":"prev",children:[Object(D.jsx)("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),Object(D.jsx)("span",{className:"visually-hidden",children:"Previous"})]}),Object(D.jsxs)("button",{className:"carousel-control-next",type:"button","data-bs-target":"#mainBanner","data-bs-slide":"next",children:[Object(D.jsx)("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),Object(D.jsx)("span",{className:"visually-hidden",children:"Next"})]})]})]})}function K(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.admin.value.isAdmin})),n=Object(o.c)((function(e){return e.counter.value.data.content.title})),a=Object(o.c)((function(e){return e.counter.value.data.content.sub_title})),c=Object(o.c)((function(e){return e.counter.value.data.content.content}));return Object(D.jsxs)("div",{className:"main-page-contents",children:[Object(D.jsx)("h2",{className:"primary-title",children:n}),Object(D.jsx)("p",{className:"text-center",children:a}),Object(D.jsx)("div",{className:"main-cms-part",dangerouslySetInnerHTML:{__html:c}}),t&&Object(D.jsx)("span",{className:"btn rounded-edit-btn",onClick:function(){return e(q())},children:Object(D.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-pencil-fill",viewBox:"0 0 16 16",children:Object(D.jsx)("path",{d:"M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"})})})]})}function Q(){return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(G,{}),Object(D.jsx)(K,{})]})}var X=n(4),Y=n(11);function Z(){var e=Object(o.c)((function(e){return e.admin.value.isAdmin})),t=Object(o.b)(),n=Object(Y.a)(),a=n.register,c=n.handleSubmit,s=n.formState.errors;return e?Object(D.jsx)(l.a,{to:"/"}):Object(D.jsx)("div",{className:"login-form-wrap mt-3 mb-5",children:Object(D.jsxs)("form",{className:"login-form-container",onSubmit:c((function(e){if(console.log(e),"admin"===e.username&&"admin123"===e.password)return t(y()),Object(D.jsx)(l.a,{to:"/"});alert("Please enter your correct username and password")})),children:[Object(D.jsx)("h2",{className:"text-center",children:"Signup"}),Object(D.jsxs)("div",{className:"form-group mb-3",children:[Object(D.jsx)("label",{className:"form-label",children:"Username"}),Object(D.jsx)("input",Object(X.a)({type:"text",className:"form-control"},a("username",{required:!0}))),s.username&&Object(D.jsx)("span",{className:"error_txt",children:"This field is required"})]}),Object(D.jsxs)("div",{className:"form-group mb-3",children:[Object(D.jsx)("label",{className:"form-label",children:"Password"}),Object(D.jsx)("input",Object(X.a)({type:"password",className:"form-control"},a("password",{required:!0}))),s.password&&Object(D.jsx)("span",{className:"error_txt",children:"This field is required"})]}),Object(D.jsx)("div",{className:"form-group mb-3 text-center",children:Object(D.jsx)("input",{type:"submit",value:"Login",className:"btn btn-primary"})})]})})}function $(){return Object(o.b)()(_()),Object(D.jsx)("div",{className:"text-center main-cms-part",children:"Successfully logout"})}function ee(){var e=Object(l.g)().page;return Object(D.jsx)("div",{className:"main-cms-part",children:Object(D.jsxs)("h3",{children:["Page is : ",e]})})}function te(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.admin.value.isAdmin})),n=Object(o.c)((function(e){return e.counter.value.data.footer.copyright}));return Object(D.jsxs)("footer",{className:"site-footer",children:[Object(D.jsx)("div",{className:"footer-copyright-text",dangerouslySetInnerHTML:{__html:n}}),t&&Object(D.jsx)("span",{className:"btn rounded-edit-btn",onClick:function(){return e(I())},children:Object(D.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-pencil-fill",viewBox:"0 0 16 16",children:Object(D.jsx)("path",{d:"M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"})})})]})}function ne(){var e=Object(o.c)((function(e){return e.counter.value.data.logo.src})),t=Object(o.b)(),n=Object(Y.a)(),c=n.register,s=n.handleSubmit,r=n.formState.errors,i=Object(a.useState)(""),l=Object(R.a)(i,2),u=l[0],d=l[1];return Object(a.useEffect)((function(){d(e)}),[e]),Object(D.jsx)("div",{className:"form-edit-container",children:Object(D.jsxs)("form",{onSubmit:s((function(e){t(p(URL.createObjectURL(e.logo[0]))),t(M())})),children:[Object(D.jsxs)("div",{className:"update_fields",children:[Object(D.jsx)("div",{className:"update_fields_preview mb-3",children:Object(D.jsx)("img",{src:u,alt:"",style:{maxWidth:"100%"}})}),Object(D.jsxs)("div",{className:"update_field_container mb-3",children:[Object(D.jsxs)("div",{className:"mb-3",children:[Object(D.jsx)("label",{className:"mb-2",children:"Update Logo"}),Object(D.jsx)("input",Object(X.a)(Object(X.a)({type:"file",className:"form-control"},c("logo",{required:!0})),{},{onChange:function(e){var t=e.target.files[0];console.log(t),console.log(URL.createObjectURL(t)),d(URL.createObjectURL(t))}})),r.logo&&Object(D.jsx)("span",{children:"This field is required"})]}),Object(D.jsx)("button",{className:"btn btn-primary btn-small",children:"Background Size Cover"})]})]}),Object(D.jsx)("div",{className:"form-fields mb-3",children:Object(D.jsx)("input",{type:"submit",className:"btn btn-secondary",value:"Submit"})})]})})}function ae(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.counter.value.data.menu})).map((function(t,n){return Object(D.jsxs)("li",{className:t.class,children:[Object(D.jsx)("div",{className:"form-list-title",children:t.name}),Object(D.jsxs)("div",{className:"option_buttons",children:[Object(D.jsx)("span",{className:"btn",onClick:function(){e(C(n))},children:"\u270e"}),Object(D.jsx)("span",{className:"btn",children:"\u21e7"}),Object(D.jsx)("span",{className:"btn",children:"\u21e9"}),Object(D.jsx)("span",{className:"btn",onClick:function(){e(O(n))},children:"\u2715"})]})]},n)}));return Object(D.jsxs)("div",{className:"form-edit-container",children:[Object(D.jsx)("div",{className:"edit-form-controls",children:Object(D.jsx)("span",{className:"btn btn-primary",onClick:function(){return e(A())},children:"Add"})}),Object(D.jsx)("ul",{className:"form-list-display",children:t}),Object(D.jsx)("div",{className:"form-group mb-3 text-right",children:Object(D.jsx)("input",{type:"submit",className:"btn btn-secondary",value:"Save",onClick:function(){return e(L())}})})]})}function ce(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.admin.value.updateMenuIndex})),n=Object(o.c)((function(e){return e.counter.value.data.menu[t]})),a=Object(Y.a)(),c=a.register,s=a.handleSubmit,r=a.formState.errors;return Object(D.jsx)("div",{className:"edit-form-container",children:Object(D.jsxs)("form",{onSubmit:s((function(n){var a={index:t,data:{name:n.menuname,url:n.menuurl,class:n.menuclass}};e(x(a)),e(k())})),children:[Object(D.jsxs)("div",{className:"form-group mb-3",children:[Object(D.jsx)("label",{className:"form-label",children:"Manu Name"}),Object(D.jsx)("input",Object(X.a)({type:"text",className:"form-control"},c("menuname",{required:!0,value:n.name}))),r.menuname&&Object(D.jsx)("span",{className:"error_txt",children:"This field is required"})]}),Object(D.jsxs)("div",{className:"form-group mb-3",children:[Object(D.jsx)("label",{className:"form-label",children:"Manu Url"}),Object(D.jsx)("input",Object(X.a)({type:"text",className:"form-control"},c("menuurl",{required:!0,value:n.url}))),r.menuurl&&Object(D.jsx)("span",{className:"error_txt",children:"This field is required"})]}),Object(D.jsxs)("div",{className:"form-group mb-3",children:[Object(D.jsx)("label",{className:"form-label",children:"Manu Class"}),Object(D.jsx)("input",Object(X.a)({type:"text",className:"form-control"},c("menuclass",{value:n.class})))]}),Object(D.jsx)("div",{className:"form-group mb-3",children:Object(D.jsx)("input",{type:"submit",className:"btn btn-secondary",value:"Save"})})]})})}function se(){var e=Object(o.b)(),t=Object(Y.a)(),n=t.register,a=t.handleSubmit,c=t.formState.errors,s=Object(o.c)((function(e){return e.counter.value.data.content.title})),r=Object(o.c)((function(e){return e.counter.value.data.content.sub_title})),i=Object(o.c)((function(e){return e.counter.value.data.content.content}));return Object(D.jsx)("div",{className:"edit-form-container",children:Object(D.jsxs)("form",{onSubmit:a((function(t){console.log("test",t);var n={title:t.pagetitle,sub_title:t.pagesmalldesc,content:t.pagecontent};e(v(n)),e(T())})),children:[Object(D.jsxs)("div",{className:"form-group mb-3",children:[Object(D.jsx)("label",{className:"form-label",children:"Page Title"}),Object(D.jsx)("input",Object(X.a)({type:"text",className:"form-control"},n("pagetitle",{required:!0,value:s}))),c.pagetitle&&Object(D.jsx)("span",{className:"error_txt",children:"This field is required"})]}),Object(D.jsxs)("div",{className:"form-group mb-3",children:[Object(D.jsx)("label",{className:"form-label",children:"Page Samll Description"}),Object(D.jsx)("textarea",Object(X.a)({type:"text",className:"form-control"},n("pagesmalldesc",{required:!0,value:r}))),c.pagesmalldesc&&Object(D.jsx)("span",{className:"error_txt",children:"This field is required"})]}),Object(D.jsxs)("div",{className:"form-group mb-3",children:[Object(D.jsx)("label",{className:"form-label",children:"Page Content"}),Object(D.jsx)("textarea",Object(X.a)({className:"form-control"},n("pagecontent",{required:!0,value:i}))),c.pagecontent&&Object(D.jsx)("span",{className:"error_txt",children:"This field is required"})]}),Object(D.jsx)("div",{className:"form-group mb-3",children:Object(D.jsx)("input",{type:"submit",className:"btn btn-primary",value:"Save"})})]})})}function re(){var e=Object(o.b)(),t=Object(Y.a)(),n=t.register,a=t.handleSubmit,c=t.formState.errors,s=Object(o.c)((function(e){return e.counter.value.data.footer.copyright}));return Object(D.jsx)("div",{className:"edit-form-container",children:Object(D.jsxs)("form",{onSubmit:a((function(t){console.log(t),e(f(t.footer_content)),e(U())})),children:[Object(D.jsxs)("div",{className:"form-group mb-3",children:[Object(D.jsx)("label",{className:"form-label",children:"Update Content"}),Object(D.jsx)("textarea",Object(X.a)({type:"text",className:"form-control"},n("footer_content",{required:!0,value:s}))),c.footer_content&&Object(D.jsx)("span",{className:"error_txt",children:"This field is required"})]}),Object(D.jsx)("div",{className:"form-group mb-3",children:Object(D.jsx)("input",{type:"submit",className:"btn btn-secondary",value:"Save"})})]})})}n(43);function ie(e){var t=Object(a.useState)(""),n=Object(R.a)(t,2),c=n[0],s=n[1];return Object(a.useEffect)((function(){e.show&&setTimeout((function(){s("on")}),200)}),[e]),Object(D.jsx)(D.Fragment,{children:e.show&&Object(D.jsx)("div",{className:"react-modal-wrap "+c,children:Object(D.jsxs)("div",{className:"react-modal-inner",children:[Object(D.jsxs)("div",{className:"react-modal-titlebar",children:[e.title,Object(D.jsx)("span",{className:"react-modal-titlebar-close",onClick:function(){s(" "),setTimeout((function(){e.close(!1)}),200)},children:"\xd7"})]}),Object(D.jsx)("div",{className:"react-modal-body",children:e.children})]})})})}function le(){var e=Object(o.b)(),t=Object(Y.a)(),n=t.register,a=t.handleSubmit,c=t.formState.errors;return Object(D.jsx)("div",{className:"edit-form-container",children:Object(D.jsxs)("form",{onSubmit:a((function(t){console.log(t);var n={name:t.menuname,url:t.menuurl,class:t.menuclass};e(h(n)),e(B())})),children:[Object(D.jsxs)("div",{className:"form-group mb-3",children:[Object(D.jsx)("label",{className:"form-label",children:"Manu Name"}),Object(D.jsx)("input",Object(X.a)({type:"text",className:"form-control"},n("menuname",{required:!0}))),c.menuname&&Object(D.jsx)("span",{className:"error_txt",children:"This field is required"})]}),Object(D.jsxs)("div",{className:"form-group mb-3",children:[Object(D.jsx)("label",{className:"form-label",children:"Manu Url"}),Object(D.jsx)("input",Object(X.a)({type:"text",className:"form-control"},n("menuurl",{required:!0}))),c.menuurl&&Object(D.jsx)("span",{className:"error_txt",children:"This field is required"})]}),Object(D.jsxs)("div",{className:"form-group mb-3",children:[Object(D.jsx)("label",{className:"form-label",children:"Manu Class"}),Object(D.jsx)("input",Object(X.a)({type:"text",className:"form-control"},n("menuclass")))]}),Object(D.jsx)("div",{className:"form-group mb-3",children:Object(D.jsx)("input",{type:"submit",className:"btn btn-secondary",value:"Save"})})]})})}function oe(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.counter.value.data.banner})).map((function(t,n){return Object(D.jsxs)("li",{className:t.class,children:[Object(D.jsxs)("div",{className:"form-list-title banner-edit-lists",children:[Object(D.jsx)("div",{className:"graphic",style:{backgroundImage:"URL("+t.image+")"}}),Object(D.jsxs)("div",{className:"banner-conts",children:[Object(D.jsx)("div",{className:"banner_title",children:t.title}),Object(D.jsx)("div",{className:"banner_desc",children:t.desc})]})]}),Object(D.jsxs)("div",{className:"option_buttons",children:[Object(D.jsx)("span",{className:"btn",onClick:function(){alert("ok")},children:"\u270e"}),Object(D.jsx)("span",{className:"btn",children:"\u21e7"}),Object(D.jsx)("span",{className:"btn",children:"\u21e9"}),Object(D.jsx)("span",{className:"btn",onClick:function(){e(O(n))},children:"\u2715"})]})]},n)}));return Object(D.jsxs)("div",{className:"form-edit-container",children:[Object(D.jsx)("div",{className:"edit-form-controls",children:Object(D.jsx)("span",{className:"btn btn-primary",onClick:function(){return e(F())},children:"Add"})}),Object(D.jsx)("ul",{className:"form-list-display",children:t}),Object(D.jsx)("div",{className:"form-group mb-3 text-right",children:Object(D.jsx)("input",{type:"submit",className:"btn btn-secondary",value:"Save"})})]})}function ue(){return Object(D.jsx)("div",{children:Object(D.jsx)("h1",{children:"Add banner item"})})}function de(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.admin.value.isPopupLogin})),n=Object(o.c)((function(e){return e.admin.value.isPopupMenu})),a=Object(o.c)((function(e){return e.admin.value.isAddMenuPopup})),c=Object(o.c)((function(e){return e.admin.value.isUpdateMenuPopup})),s=Object(o.c)((function(e){return e.admin.value.isFooterPopup})),r=Object(o.c)((function(e){return e.admin.value.isPagePopup})),i=Object(o.c)((function(e){return e.admin.value.isBannerPopup})),l=Object(o.c)((function(e){return e.admin.value.isBannerAddPopup}));return Object(D.jsxs)("div",{className:"site-admin-sec",children:[Object(D.jsx)(ie,{title:"Logo Update",show:t,close:function(){return e(M())},children:Object(D.jsx)(ne,{})}),Object(D.jsx)(ie,{title:"Banner Lists",show:i,close:function(){return e(z())},children:Object(D.jsx)(oe,{})}),Object(D.jsx)(ie,{title:"Banner Add Item",show:l,close:function(){return e(E())},children:Object(D.jsx)(ue,{})}),Object(D.jsx)(ie,{title:"Edit Menu List",show:n,close:function(){return e(L())},children:Object(D.jsx)(ae,{})}),Object(D.jsx)(ie,{title:"Update Menu",show:c,close:function(){return e(k())},children:Object(D.jsx)(ce,{})}),Object(D.jsx)(ie,{title:"Add Menu",show:a,close:function(){return e(B())},children:Object(D.jsx)(le,{})}),Object(D.jsx)(ie,{title:"Update Menu",show:r,close:function(){return e(T())},children:Object(D.jsx)(se,{})}),Object(D.jsx)(ie,{title:"Footer Content Edit",show:s,close:function(){return e(U())},children:Object(D.jsx)(re,{})})]})}var je=function(){var e=Object(o.b)();Object(a.useEffect)((function(){e(m()),"login"===localStorage.getItem("islogin")&&e(y())}),[e]);var t=Object(o.c)((function(e){return e.admin.value.isAdmin}));return Object(D.jsx)(i.a,{children:Object(D.jsxs)("div",{className:"App",children:[Object(D.jsxs)("header",{className:"site-header",children:[Object(D.jsx)(J,{}),Object(D.jsx)(W,{})]}),Object(D.jsxs)(l.d,{children:[Object(D.jsx)(l.b,{path:"/login",children:Object(D.jsx)(Z,{})}),Object(D.jsx)(l.b,{path:"/logout",children:Object(D.jsx)($,{})}),Object(D.jsx)(l.b,{path:"/home",exact:!0,children:Object(D.jsx)(Q,{})}),Object(D.jsx)(l.b,{path:"/",exact:!0,children:Object(D.jsx)(Q,{})}),Object(D.jsx)(l.b,{path:"/:page",children:Object(D.jsx)(ee,{})})]}),Object(D.jsx)(te,{}),t&&Object(D.jsx)(de,{})]})})},be=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))},me=Object(u.a)({reducer:{admin:H,counter:g}});r.a.render(Object(D.jsx)(c.a.StrictMode,{children:Object(D.jsx)(o.a,{store:me,children:Object(D.jsx)(je,{})})}),document.getElementById("root")),be()}},[[44,1,2]]]);
//# sourceMappingURL=main.91bdae65.chunk.js.map