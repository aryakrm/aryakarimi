"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[935],{2935:function(e,s,a){a.d(s,{Z:function(){return x}});var l=a(5893),i=a(7294);let t=()=>{let e=document.querySelectorAll(".scroll-animate"),s=window.innerHeight/5*5-20;e.forEach(e=>{let a=e.getBoundingClientRect().top;a<s&&(e.style.visibility="visible",e.classList.add("animate__active"))})},n=()=>{let e=window.scrollY,s=document.querySelectorAll(".header");s.forEach(s=>{s&&(e>100?s.classList.add("animate-in","sticky"):s.classList.remove("animate-in","sticky"))})},c=e=>{e.preventDefault();let s=document.querySelector(".menu-btn");return s.classList.contains("active")?(s.classList.remove("active"),s.classList.add("no-touch"),document.body.classList.remove("no-scroll"),document.querySelector(".menu-full-overlay").classList.remove("is-open"),document.querySelector(".menu-full-overlay").classList.remove("has-scroll"),document.querySelector(".menu-full-overlay").classList.remove("animate-active"),setTimeout(function(){document.querySelector(".menu-full-overlay").classList.remove("visible"),s.classList.remove("no-touch")},1e3)):(s.classList.add("active","no-touch"),document.body.classList.add("no-scroll"),document.querySelector(".menu-full-overlay").classList.add("is-open","visible"),setTimeout(function(){document.querySelector(".menu-full-overlay").classList.add("has-scroll","animate-active"),s.classList.remove("no-touch")},1e3)),!1},r=()=>{let e=document.querySelector(".menu-btn");return e.classList.contains("active")?(e.classList.remove("active"),e.classList.add("no-touch"),document.body.classList.remove("no-scroll"),document.querySelector(".menu-full-overlay").classList.remove("is-open"),document.querySelector(".menu-full-overlay").classList.remove("has-scroll"),document.querySelector(".menu-full-overlay").classList.remove("animate-active"),setTimeout(function(){document.querySelector(".menu-full-overlay").classList.remove("visible"),e.classList.remove("no-touch")},1e3)):(e.classList.add("active","no-touch"),document.body.classList.add("no-scroll"),document.querySelector(".menu-full-overlay").classList.add("is-open","visible"),setTimeout(function(){document.querySelector(".menu-full-overlay").classList.add("has-scroll","animate-active"),e.classList.remove("no-touch")},1e3)),!1},o=()=>{let{jarallax:e,jarallaxVideo:s}=a(1014);e(document.querySelectorAll(".js-parallax"),{speed:.65,type:"scroll"})},m=()=>(0,l.jsx)("div",{className:"footer",children:(0,l.jsx)("div",{className:"footer__builder",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsxs)("div",{className:"row",children:[(0,l.jsx)("div",{className:"col-xs-12 col-sm-12 col-md-4 col-lg-4",children:(0,l.jsxs)("div",{className:"social-links scrolla-element-anim-1 scroll-animate","data-animate":"active",children:[(0,l.jsx)("a",{target:"_blank",rel:"nofollow",href:"https://github.com/aryakrm",children:(0,l.jsx)("i",{"aria-hidden":"true",className:"fab fa-github"})}),(0,l.jsx)("a",{target:"_blank",rel:"nofollow",href:"https://www.instagram.com/aryakarimmi/",children:(0,l.jsx)("i",{"aria-hidden":"true",className:"fab fa-instagram"})}),(0,l.jsx)("a",{target:"_blank",rel:"nofollow",href:"https://www.linkedin.com/in/arya-karimi-590508189/",children:(0,l.jsx)("i",{"aria-hidden":"true",className:"fab fa-linkedin"})}),(0,l.jsx)("a",{target:"_blank",rel:"nofollow",href:"https://twitter.com/devAryaKarimi",children:(0,l.jsx)("i",{"aria-hidden":"true",className:"fab fa-twitter"})})]})}),(0,l.jsx)("div",{className:"col-xs-12 col-sm-12 col-md-4 col-lg-4",children:(0,l.jsxs)("div",{className:"copyright-text align-center scrolla-element-anim-1 scroll-animate","data-animate":"active",children:["\xa9 2020 ",(0,l.jsx)("strong",{children:"Arya Karimi"}),". All rights reserved"]})}),(0,l.jsx)("div",{className:"col-xs-12 col-sm-12 col-md-4 col-lg-4",children:(0,l.jsxs)("div",{className:"copyright-text align-right scrolla-element-anim-1 scroll-animate","data-animate":"active",children:["Developed by ",(0,l.jsx)("strong",{children:"Arya Karimi"})]})})]})})})});var d=a(1664),h=a.n(d);let u=()=>{let[e,s]=(0,i.useState)(!0);(0,i.useEffect)(()=>{e?(document.querySelector("body").classList.add("light-skin"),document.querySelector("body").classList.remove("dark-skin")):document.querySelector("body").classList.add("dark-skin")},[e]);let[a,t]=(0,i.useState)(!1);return(0,l.jsx)(i.Fragment,{children:(0,l.jsx)("header",{className:"header",children:(0,l.jsx)("div",{className:"header__builder",children:(0,l.jsxs)("div",{className:"row",children:[(0,l.jsx)("div",{className:"col-xs-4 col-sm-4 col-md-4 col-lg-4",children:(0,l.jsx)("div",{className:"logo",children:(0,l.jsx)(h(),{href:"/",legacyBehavior:!0,children:(0,l.jsx)("a",{children:(0,l.jsx)("img",{width:228,height:38,src:"assets/images/AryaKarimiLogo.png",alt:""})})})})}),(0,l.jsxs)("div",{className:"col-xs-8 col-sm-8 col-md-8 col-lg-8 align-right",children:[(0,l.jsxs)("a",{href:"#",className:"switcher-btn ".concat(e?"":"active"),onClick:a=>{a.preventDefault(),s(!e)},children:[(0,l.jsx)("span",{className:"sw-before",children:(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:23,height:23,viewBox:"0 0 23 23",children:(0,l.jsx)("path",{id:"Dark_Theme","data-name":"Dark Theme",fill:"#000",d:"M1759.46,111.076a0.819,0.819,0,0,0-.68.147,8.553,8.553,0,0,1-2.62,1.537,8.167,8.167,0,0,1-2.96.531,8.655,8.655,0,0,1-8.65-8.682,9.247,9.247,0,0,1,.47-2.864,8.038,8.038,0,0,1,1.42-2.54,0.764,0.764,0,0,0-.12-1.063,0.813,0.813,0,0,0-.68-0.148,11.856,11.856,0,0,0-6.23,4.193,11.724,11.724,0,0,0,1,15.387,11.63,11.63,0,0,0,19.55-5.553A0.707,0.707,0,0,0,1759.46,111.076Zm-4.5,6.172a10.137,10.137,0,0,1-14.29-14.145,10.245,10.245,0,0,1,3.38-2.836c-0.14.327-.29,0.651-0.41,1.006a9.908,9.908,0,0,0-.56,3.365,10.162,10.162,0,0,0,10.15,10.189,9.776,9.776,0,0,0,3.49-.62,11.659,11.659,0,0,0,1.12-.473A10.858,10.858,0,0,1,1754.96,117.248Z",transform:"translate(-1737 -98)"})})}),(0,l.jsx)("span",{className:"sw-after",children:(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"22.22",height:"22.313",viewBox:"0 0 22.22 22.313",children:(0,l.jsx)("path",{id:"Light_Theme","data-name":"Light Theme",fill:"#fff",d:"M1752.49,105.511a5.589,5.589,0,0,0-3.94-1.655,5.466,5.466,0,0,0-3.94,1.655,5.61,5.61,0,0,0,3.94,9.566,5.473,5.473,0,0,0,3.94-1.653,5.643,5.643,0,0,0,1.65-3.957A5.516,5.516,0,0,0,1752.49,105.511Zm-1.06,6.85a4.1,4.1,0,0,1-5.76,0,4.164,4.164,0,0,1,0-5.788A4.083,4.083,0,0,1,1751.43,112.361Zm7.47-3.662h-2.27a0.768,0.768,0,0,0,0,1.536h2.27A0.768,0.768,0,0,0,1758.9,108.7Zm-10.35,8.12a0.777,0.777,0,0,0-.76.769v2.274a0.777,0.777,0,0,0,.76.767,0.786,0.786,0,0,0,.77-0.767v-2.274A0.786,0.786,0,0,0,1748.55,116.819Zm7.85-.531-1.62-1.624a0.745,0.745,0,0,0-1.06,0,0.758,0.758,0,0,0,0,1.063l1.62,1.625a0.747,0.747,0,0,0,1.06,0A0.759,0.759,0,0,0,1756.4,116.288ZM1748.55,98.3a0.777,0.777,0,0,0-.76.768v2.273a0.778,0.778,0,0,0,.76.768,0.787,0.787,0,0,0,.77-0.768V99.073A0.786,0.786,0,0,0,1748.55,98.3Zm7.88,3.278a0.744,0.744,0,0,0-1.06,0l-1.62,1.624a0.758,0.758,0,0,0,0,1.063,0.745,0.745,0,0,0,1.06,0l1.62-1.624A0.758,0.758,0,0,0,1756.43,101.583Zm-15.96,7.116h-2.26a0.78,0.78,0,0,0-.77.768,0.76,0.76,0,0,0,.77.768h2.26A0.768,0.768,0,0,0,1740.47,108.7Zm2.88,5.965a0.745,0.745,0,0,0-1.06,0l-1.62,1.624a0.759,0.759,0,0,0,0,1.064,0.747,0.747,0,0,0,1.06,0l1.62-1.625A0.758,0.758,0,0,0,1743.35,114.664Zm0-11.457-1.62-1.624a0.744,0.744,0,0,0-1.06,0,0.758,0.758,0,0,0,0,1.063l1.62,1.624a0.745,0.745,0,0,0,1.06,0A0.758,0.758,0,0,0,1743.35,103.207Z",transform:"translate(-1737.44 -98.313)"})})})]}),(0,l.jsxs)("a",{href:"#",className:"menu-btn",onClick:e=>c(e),children:[(0,l.jsx)("span",{}),(0,l.jsx)("span",{})]}),(0,l.jsxs)("div",{className:"menu-full-overlay",children:[(0,l.jsx)("div",{className:"menu-full-container",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsx)("div",{className:"row",children:(0,l.jsxs)("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-12",children:[(0,l.jsx)("div",{className:"menu-full",children:(0,l.jsxs)("ul",{className:"menu-full",children:[(0,l.jsx)("li",{className:"menu-item",children:(0,l.jsx)(h(),{legacyBehavior:!0,href:"/",children:(0,l.jsx)("a",{className:"splitting-text-anim-2","data-splitting":"chars",children:"Home"})})}),(0,l.jsx)("li",{className:"menu-item",children:(0,l.jsx)("a",{className:"splitting-text-anim-2","data-splitting":"chars",href:"/#services-section",onClick:()=>r(),children:"Services"})}),(0,l.jsx)("li",{className:"menu-item",children:(0,l.jsx)("a",{className:"splitting-text-anim-2","data-splitting":"chars",href:"/#skills-section",onClick:()=>r(),children:"Skills"})}),(0,l.jsx)("li",{className:"menu-item",children:(0,l.jsx)("a",{className:"splitting-text-anim-2","data-splitting":"chars",href:"/#works-section",onClick:()=>r(),children:"Works"})}),(0,l.jsx)("li",{className:"menu-item",children:(0,l.jsx)("a",{className:"splitting-text-anim-2","data-splitting":"chars",href:"/#resume-section",onClick:()=>r(),children:"Resume"})}),(0,l.jsx)("li",{className:"menu-item",children:(0,l.jsx)("a",{className:"splitting-text-anim-2","data-splitting":"chars",href:"/#testimonials-sec onClick={() => linkClick()}tion",children:"Testimonials"})}),(0,l.jsx)("li",{className:"menu-item",children:(0,l.jsx)("a",{className:"splitting-text-anim-2","data-splitting":"chars",href:"/#pricing-section",onClick:()=>r(),children:"Pricing"})}),(0,l.jsx)("li",{className:"menu-item",children:(0,l.jsx)("a",{className:"splitting-text-anim-2","data-splitting":"chars",href:"/#contact-section",onClick:()=>r(),children:"Contact"})})]})}),(0,l.jsxs)("div",{className:"menu-social-links",children:[(0,l.jsx)("a",{href:"http://github.com/aryakrm",target:"blank",className:"scrolla-element-anim-1",title:"Github",children:(0,l.jsx)("i",{className:"fab fa-github"})}),(0,l.jsx)("a",{href:"https://www.instagram.com/aryakarimmi/",target:"blank",className:"scrolla-element-anim-1",title:"instagram",children:(0,l.jsx)("i",{className:"fab fa-instagram"})}),(0,l.jsx)("a",{href:"https://www.linkedin.com/in/arya-karimi-590508189/",target:"blank",className:"scrolla-element-anim-1",title:"linkedin",children:(0,l.jsx)("i",{className:"fab fa-linkedin"})}),(0,l.jsx)("a",{href:"https://twitter.com/devAryaKarimi",target:"blank",className:"scrolla-element-anim-1",title:"twitter",children:(0,l.jsx)("i",{className:"fab fa-twitter"})})]}),(0,l.jsx)("div",{className:"v-line-block",children:(0,l.jsx)("span",{})})]})})})}),(0,l.jsx)("div",{className:"menu-overlay"})]})]})]})})})})},v=e=>{let{children:s,pageClassName:c}=e;return(0,i.useEffect)(()=>{t(),function(){let e=window.innerWidth/2,s=window.innerHeight/2,a={el:document.querySelector(".cursor"),x:window.innerWidth/2,y:window.innerHeight/2,w:30,h:30,update:function(){let e=this.x-this.w/2,s=this.y-this.h/2;this.el.style.transform="translate3d("+e+"px,"+s+"px, 0)"}};window.addEventListener("mousemove",a=>{e=a.clientX,s=a.clientY});let l=document.querySelectorAll("a, .swiper-pagination, .swiper-button-prev, .swiper-button-next, button, .button, .btn, .lnk");l.forEach(e=>{e.addEventListener("mouseenter",()=>{a.el.classList.add("cursor-zoom")}),e.addEventListener("mouseleave",()=>{a.el.classList.remove("cursor-zoom")})}),setInterval(function(){var l,i;a.x=.9*a.x+.1*e,a.y=.9*a.y+.1*s,a.update()},1e3/60)}(),window.addEventListener("scroll",t),window.addEventListener("scroll",n)},[]),(0,i.useEffect)(()=>{window.Splitting=a(8041),Splitting(),o(),document.querySelector("body").className=c||""}),(0,l.jsxs)(i.Fragment,{children:[(0,l.jsx)("noscript",{children:(0,l.jsx)("iframe",{src:"https://www.googletagmanager.com/ns.html?id=GTM-WN6732R",height:"0",width:"0",style:"display:none;visibility:hidden"})}),(0,l.jsxs)("div",{className:"container-page",children:[(0,l.jsx)(u,{}),(0,l.jsx)("div",{className:"wrapper",children:s}),(0,l.jsx)(m,{})]}),(0,l.jsx)("div",{className:"cursor"})]})};var x=v}}]);