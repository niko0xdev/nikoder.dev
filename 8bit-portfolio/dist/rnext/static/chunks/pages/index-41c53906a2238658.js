(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(949)}])},3740:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return y}});let n=i(4788),r=i(8754),l=i(1757),s=i(224),a=l._(i(7294)),o=r._(i(2636)),c=i(7757),d=i(3735),u=i(3341);i(4210);let m=r._(i(7746)),f={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/rnext/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function h(e){return void 0!==e.default}function g(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function p(e,t,i,r,l,s,a){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let o="decode"in e?e.decode():Promise.resolve();o.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("blur"===i&&s(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let i=!1,l=!1;r.current(n._({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>i,isPropagationStopped:()=>l,persist:()=>{},preventDefault:()=>{i=!0,t.preventDefault()},stopPropagation:()=>{l=!0,t.stopPropagation()}}))}(null==l?void 0:l.current)&&l.current(e)}})}function v(e){let[t,i]=a.version.split("."),n=parseInt(t,10),r=parseInt(i,10);return n>18||18===n&&r>=3?{fetchPriority:e}:{fetchpriority:e}}let x=(0,a.forwardRef)((e,t)=>{var{imgAttributes:i,heightInt:r,widthInt:l,qualityInt:o,className:c,imgStyle:d,blurStyle:u,isLazy:m,fetchPriority:f,fill:h,placeholder:g,loading:x,srcString:j,config:y,unoptimized:w,loader:b,onLoadRef:_,onLoadingCompleteRef:N,setBlurComplete:E,setShowAltText:S,onLoad:C,onError:k}=e,z=s._(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fetchPriority","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return x=m?"lazy":x,a.default.createElement(a.default.Fragment,null,a.default.createElement("img",n._({},z,v(f),{loading:x,width:l,height:r,decoding:"async","data-nimg":h?"fill":"1",className:c,style:n._({},d,u)},i,{ref:(0,a.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(k&&(e.src=e.src),e.complete&&p(e,j,g,_,N,E,w))},[j,g,_,N,E,k,w,t]),onLoad:e=>{let t=e.currentTarget;p(t,j,g,_,N,E,w)},onError:e=>{S(!0),"blur"===g&&E(!0),k&&k(e)}})))}),j=(0,a.forwardRef)((e,t)=>{let i,r;var l,{src:p,sizes:j,unoptimized:y=!1,priority:w=!1,loading:b,className:_,quality:N,width:E,height:S,fill:C,style:k,onLoad:z,onLoadingComplete:P,placeholder:O="empty",blurDataURL:R,fetchPriority:I,layout:M,objectFit:A,objectPosition:L,lazyBoundary:D,lazyRoot:F}=e,B=s._(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","fetchPriority","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let T=(0,a.useContext)(u.ImageConfigContext),W=(0,a.useMemo)(()=>{let e=f||T||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),i=e.deviceSizes.sort((e,t)=>e-t);return n._({},e,{allSizes:t,deviceSizes:i})},[T]),G=B,q=G.loader||m.default;delete G.loader;let U="__next_img_default"in q;if(U){if("custom"===W.loader)throw Error('Image with src "'.concat(p,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let e=q;q=t=>{let{config:i}=t,n=s._(t,["config"]);return e(n)}}if(M){"fill"===M&&(C=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[M];e&&(k=n._({},k,e));let t={responsive:"100vw",fill:"100vw"}[M];t&&!j&&(j=t)}let V="",H=g(E),J=g(S);if("object"==typeof(l=p)&&(h(l)||void 0!==l.src)){let e=h(p)?p.default:p;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(e)));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(e)));if(i=e.blurWidth,r=e.blurHeight,R=R||e.blurDataURL,V=e.src,!C){if(H||J){if(H&&!J){let t=H/e.width;J=Math.round(e.height*t)}else if(!H&&J){let t=J/e.height;H=Math.round(e.width*t)}}else H=e.width,J=e.height}}let X=!w&&("lazy"===b||void 0===b);(!(p="string"==typeof p?p:V)||p.startsWith("data:")||p.startsWith("blob:"))&&(y=!0,X=!1),W.unoptimized&&(y=!0),U&&p.endsWith(".svg")&&!W.dangerouslyAllowSVG&&(y=!0),w&&(I="high");let[Y,$]=(0,a.useState)(!1),[K,Q]=(0,a.useState)(!1),Z=g(N),ee=Object.assign(C?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:A,objectPosition:L}:{},K?{}:{color:"transparent"},k),et="blur"===O&&R&&!Y?{backgroundSize:ee.objectFit||"cover",backgroundPosition:ee.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat((0,c.getImageBlurSvg)({widthInt:H,heightInt:J,blurWidth:i,blurHeight:r,blurDataURL:R,objectFit:ee.objectFit}),'")')}:{},ei=function(e){let{config:t,src:i,unoptimized:n,width:r,quality:l,sizes:s,loader:a}=e;if(n)return{src:i,srcSet:void 0,sizes:void 0};let{widths:o,kind:c}=function(e,t,i){let{deviceSizes:n,allSizes:r}=e;if(i){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(i);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:r.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:r,kind:"w"}}if("number"!=typeof t)return{widths:n,kind:"w"};let l=[...new Set([t,2*t].map(e=>r.find(t=>t>=e)||r[r.length-1]))];return{widths:l,kind:"x"}}(t,r,s),d=o.length-1;return{sizes:s||"w"!==c?s:"100vw",srcSet:o.map((e,n)=>"".concat(a({config:t,src:i,quality:l,width:e})," ").concat("w"===c?e:n+1).concat(c)).join(", "),src:a({config:t,src:i,quality:l,width:o[d]})}}({config:W,src:p,unoptimized:y,width:H,quality:Z,sizes:j,loader:q}),en=p,er=(0,a.useRef)(z);(0,a.useEffect)(()=>{er.current=z},[z]);let el=(0,a.useRef)(P);(0,a.useEffect)(()=>{el.current=P},[P]);let es=n._({isLazy:X,imgAttributes:ei,heightInt:J,widthInt:H,qualityInt:Z,className:_,imgStyle:ee,blurStyle:et,loading:b,config:W,fetchPriority:I,fill:C,unoptimized:y,placeholder:O,loader:q,srcString:en,onLoadRef:er,onLoadingCompleteRef:el,setBlurComplete:$,setShowAltText:Q},G);return a.default.createElement(a.default.Fragment,null,a.default.createElement(x,n._({},es,{ref:t})),w?a.default.createElement(o.default,null,a.default.createElement("link",n._({key:"__nimg-"+ei.src+ei.srcSet+ei.sizes,rel:"preload",as:"image",href:ei.srcSet?void 0:ei.src,imageSrcSet:ei.srcSet,imageSizes:ei.sizes,crossOrigin:G.crossOrigin},v(I)))):null)}),y=j;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7757:function(e,t){"use strict";function i(e){let{widthInt:t,heightInt:i,blurWidth:n,blurHeight:r,blurDataURL:l,objectFit:s}=e,a=n||t,o=r||i,c=l.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return a&&o?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(a," ").concat(o,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(n&&r?"1":"20","'/%3E").concat(c,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(l,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='".concat("contain"===s?"xMidYMid":"cover"===s?"xMidYMid slice":"none","' x='0' y='0' height='100%25' width='100%25' href='").concat(l,"'/%3E%3C/svg%3E")}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return i}})},7746:function(e,t){"use strict";function i(e){let{config:t,src:i,width:n,quality:r}=e;return"".concat(t.path,"?url=").concat(encodeURIComponent(i),"&w=").concat(n,"&q=").concat(r||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),i.__next_img_default=!0;let n=i},949:function(e,t,i){"use strict";i.r(t),i.d(t,{__N_SSG:function(){return u},default:function(){return m}});var n=i(5893),r=i(5675),l=i.n(r);i(7294);let s=e=>{let{className:t,contact:i}=e,{name:r,title:s,profileImg:a,intro:o,social:c}=i,d=Object.keys(c),u=o.split("\n");return(0,n.jsxs)("div",{className:"flex flex-col items-center justify-between summary ".concat(t||""),children:[(0,n.jsx)(l(),{src:a,alt:r,width:180,height:37,priority:!0,className:"summary-profile-img"}),(0,n.jsx)("h2",{className:"summary-name",children:r}),(0,n.jsx)("h4",{className:"summary-title",children:s}),u.map((e,t)=>(0,n.jsx)("p",{className:"summary-intro",children:e},t)),(0,n.jsx)("div",{className:"summary-links",children:d.map(e=>{var t,i,r;return(0,n.jsx)("a",{href:(null===(t=c[e])||void 0===t?void 0:t.url)||"",target:"_blank",rel:"noreferrer",className:"summary-link",children:(0,n.jsx)(l(),{src:(null===(i=c[e])||void 0===i?void 0:i.icon)||"",alt:e,width:24,height:24,title:null===(r=c[e])||void 0===r?void 0:r.label})},e)})})]})},a=e=>{let{className:t,items:i=[]}=e,r=i.slice(0,i.length-1),s=i[i.length-1];return(0,n.jsxs)("div",{className:"flex flex-col items-center justify-between timeline ".concat(t||""),children:[(0,n.jsx)("h3",{className:"timeline-big",children:"Work experience"}),(0,n.jsx)("p",{className:"timeline-small",children:"A small selection about my working experiences."}),(0,n.jsx)("ol",{className:"timeline-items",children:r.map((e,t)=>(0,n.jsx)("li",{children:(0,n.jsxs)("div",{className:"flex-start",children:[(0,n.jsx)("div",{className:"timeline-item-img",children:(0,n.jsx)(l(),{src:e.logo||"",alt:e.company,width:100,height:100,className:"timeline-img"})}),(0,n.jsxs)("div",{className:"timeline-item-content",children:[(0,n.jsxs)("div",{className:"mb-4 flex flex-col justify-between",children:[(0,n.jsxs)("h3",{className:"timeline-company",children:[e.company," "]}),(0,n.jsxs)("h4",{className:"timeline-title",children:["(",e.title,")"]}),(0,n.jsx)("div",{className:"timeline-date",children:(0,n.jsxs)("p",{children:[e.from," - ",e.to]})})]}),(0,n.jsx)("p",{className:"timeline-content",children:e.description})]})]})},t))}),s&&(0,n.jsx)("div",{children:(0,n.jsxs)("div",{className:"flex-start",children:[(0,n.jsx)("div",{className:"timeline-item-img",children:(0,n.jsx)(l(),{src:s.logo||"",alt:s.company,width:100,height:100,className:"timeline-img"})}),(0,n.jsxs)("div",{className:"timeline-item-content",children:[(0,n.jsxs)("div",{className:"mb-4 flex flex-col justify-between",children:[(0,n.jsxs)("h3",{className:"timeline-company",children:[s.company," "]}),(0,n.jsxs)("h4",{className:"timeline-title",children:["(",s.title,")"]}),(0,n.jsxs)("div",{className:"timeline-date",children:[(0,n.jsx)(l(),{src:"/images/calendar-event.png",alt:"calendar",width:14,height:14}),(0,n.jsxs)("p",{children:[s.from," - ",s.to]})]})]}),(0,n.jsx)("p",{className:"timeline-content",children:s.description})]})]})},i.length)]})};var o=i(9008),c=i.n(o);let d=e=>{let{contact:t,timelines:i}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(c(),{children:(0,n.jsx)("title",{children:"Niko Home | Senior Software Engineering, DevOps Engineer"})}),(0,n.jsxs)("main",{className:"flex min-h-screen flex-col items-center justify-between p-24",children:[(0,n.jsx)(s,{contact:t||{}}),(0,n.jsx)(a,{items:i||[]})]})]})};var u=!0,m=d},9008:function(e,t,i){e.exports=i(2636)},5675:function(e,t,i){e.exports=i(3740)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);