"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[2838],{9726:function(e,t,r){r.r(t),r.d(t,{_frontmatter:function(){return c},default:function(){return m}});var a=r(3366),n=(r(7294),r(4983)),p=r(4295),o=["components"],c={},i={_frontmatter:c},s=p.Z;function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,n.kt)(s,Object.assign({},i,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",null,"Purpose"),(0,n.kt)("p",null,"Prefetchers view shows the usage and performance of prefetchers."),(0,n.kt)("p",null,"The purpose of ",(0,n.kt)("a",{parentName:"p",href:"https://www.ibm.com/support/pages/db2-prefetching-understanding-configuring-monitoring-tuning"},"prefetching system")," is to retrieve data from physical storage to have it available at the time it is required by tasks running in the database. It depends on prefetchers to read data from the I/O subsystem. "),(0,n.kt)("h1",null,"Screenshot"),(0,n.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"52.43055555555556%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAA1ElEQVQoz+WSy07DMBBFHT8TT4iSlE26oUqqUpLiLFD//9NO5SIeQrBAZcfiasbS6MzV+KrtsEVEaPuedH7hMT0zr4ljShzXxNO6clgWDsvMvJ6QukZrjbX2XS54fHBUdz1qGifGcWSzuWf3sCOEQFVFYhS6rqftOpqmwYeASI0xBqXUtypcRO2n/RX409BvpL2ghmHAGH3dXBTFbUAnqHyP/LDG3u4wA99c/ROg/wQ0f+IwfgDLYJFoKEuN9xrnXmtOQP64nIIc4tx/lbEW7yyltFwANbLSkjcZmqgAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"image",title:"image",src:"/dmctop-wiki/static/76f6dd70fd51e155b4ea6902093ca095/3cbba/prefetchers.png",srcSet:["/dmctop-wiki/static/76f6dd70fd51e155b4ea6902093ca095/7fc1e/prefetchers.png 288w","/dmctop-wiki/static/76f6dd70fd51e155b4ea6902093ca095/a5df1/prefetchers.png 576w","/dmctop-wiki/static/76f6dd70fd51e155b4ea6902093ca095/3cbba/prefetchers.png 1152w","/dmctop-wiki/static/76f6dd70fd51e155b4ea6902093ca095/0b124/prefetchers.png 1728w","/dmctop-wiki/static/76f6dd70fd51e155b4ea6902093ca095/4ea3d/prefetchers.png 1918w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,n.kt)("h1",null,"Metric shown"),(0,n.kt)("hr",null),(0,n.kt)("h3",null,"Bufferpool name"),(0,n.kt)("p",null," The buffer pool identifier for the buffer pool that is being monitored."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Source:")," ",(0,n.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=functions-mon-get-bufferpool-get-buffer-pool-metrics"},"MON_GET_BUFFERPOOL"),"(”, #MEMBER#).",(0,n.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-b#r0002256"},"BP_NAME")),(0,n.kt)("hr",null),(0,n.kt)("h3",null,"Prefetch ratio %"),(0,n.kt)("p",null,"The percentage of pages which have been asynchronously read from the table space containers (physical)."),(0,n.kt)("p",null,"= ASYNC_READS / P_READS "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Source:")),(0,n.kt)("p",null,"ASYNC_READS = ",(0,n.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=functions-mon-get-bufferpool-get-buffer-pool-metrics"},"MON_GET_BUFFERPOOL"),"(”, #MEMBER#).(SUM(",(0,n.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-p#r0001244"},"POOL_ASYNC_DATA_READS"),") + SUM(",(0,n.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-p#r0001247"},"POOL_ASYNC_INDEX_READS"),") + SUM(",(0,n.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-p#r0022733"},"POOL_ASYNC_XDA_READS"),") + SUM(",(0,n.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-p#r0060851"},"POOL_ASYNC_COL_READS"),"))"),(0,n.kt)("p",null,"P_READS = ",(0,n.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=functions-mon-get-bufferpool-get-buffer-pool-metrics"},"MON_GET_BUFFERPOOL"),"(”, #MEMBER#).(SUM(",(0,n.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-p#r0001236"},"POOL_DATA_P_READS"),") + SUM(",(0,n.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-p#r0001239"},"POOL_INDEX_P_READS"),") + SUM(",(0,n.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-p#r0022730"},"POOL_XDA_P_READS"),") + SUM(",(0,n.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-p#r0060858"},"POOL_COL_P_READS"),") + SUM(",(0,n.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-p#r0011300"},"POOL_TEMP_DATA_P_READS"),") + SUM(",(0,n.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-p#r0011301"},"POOL_TEMP_INDEX_P_READS"),") + SUM(",(0,n.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-p#r0022739"},"POOL_TEMP_XDA_P_READS"),") + SUM(",(0,n.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-p#r0060874"},"POOL_TEMP_COL_P_READS"),"))"),(0,n.kt)("hr",null),(0,n.kt)("h3",null,"Cleaner ratio %"),(0,n.kt)("p",null,"The percentage of times a page was physically written to disk by either an asynchronous page cleaner, or a prefetcher. "),(0,n.kt)("p",null,"= ASYNC_WRITES / POOL_WRITES "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Source:")),(0,n.kt)("p",null,"ASYNC_WRITES = ",(0,n.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=functions-mon-get-bufferpool-get-buffer-pool-metrics"},"MON_GET_BUFFERPOOL"),"(”, #MEMBER#).(SUM(",(0,n.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-p#r0001245"},"POOL_ASYNC_DATA_WRITES"),") + SUM(",(0,n.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-p#r0001246"},"POOL_ASYNC_INDEX_WRITES"),") + SUM(",(0,n.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-p#r0022734"},"POOL_ASYNC_XDA_WRITES"),") + SUM(",(0,n.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-p#r0060893"},"POOL_ASYNC_COL_WRITES"),"))"),(0,n.kt)("p",null,"POOL_WRITES = ",(0,n.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=functions-mon-get-bufferpool-get-buffer-pool-metrics"},"MON_GET_BUFFERPOOL"),"(”, #MEMBER#).(SUM(",(0,n.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-p#r0001237"},"POOL_DATA_WRITES"),") + SUM(",(0,n.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-p#r0001240"},"POOL_INDEX_WRITES"),") + SUM(",(0,n.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-p#r0022732"},"POOL_XDA_WRITES"),") + SUM(",(0,n.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-p#r0060859"},"POOL_COL_WRITES"),"))"),(0,n.kt)("hr",null),(0,n.kt)("h3",null,"Physical reads"),(0,n.kt)("p",null,"The number of pages read in from the table space containers (physical)."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Source:"),"  ",(0,n.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=functions-mon-get-bufferpool-get-buffer-pool-metrics"},"MON_GET_BUFFERPOOL"),"(NULL, #MEMBER#).(SUM(",(0,n.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-p#r0001236"},"POOL_DATA_P_READS"),") + SUM(",(0,n.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-p#r0001239"},"POOL_INDEX_P_READS"),") + SUM(",(0,n.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-p#r0022730"},"POOL_XDA_P_READS"),") + SUM(",(0,n.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-p#r0060858"},"POOL_COL_P_READS"),") + SUM(",(0,n.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-p#r0011300"},"POOL_TEMP_DATA_P_READS"),") + SUM(",(0,n.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-p#r0011301"},"POOL_TEMP_INDEX_P_READS"),") + SUM(",(0,n.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-p#r0022739"},"POOL_TEMP_XDA_P_READS"),") + SUM(",(0,n.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-p#r0060874"},"POOL_TEMP_COL_P_READS"),"))"),(0,n.kt)("hr",null),(0,n.kt)("h3",null,"Asynchronous reads"),(0,n.kt)("p",null,"The number of pages which have been asynchronously read from the table space containers (physical)."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Source:"),"  ",(0,n.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=functions-mon-get-bufferpool-get-buffer-pool-metrics"},"MON_GET_BUFFERPOOL"),"(”, #MEMBER#).(SUM(",(0,n.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-p#r0001244"},"POOL_ASYNC_DATA_READS"),") + SUM(",(0,n.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-p#r0001247"},"POOL_ASYNC_INDEX_READS"),") + SUM(",(0,n.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-p#r0022733"},"POOL_ASYNC_XDA_READS"),") + SUM(",(0,n.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-p#r0060851"},"POOL_ASYNC_COL_READS"),"))"),(0,n.kt)("hr",null),(0,n.kt)("h3",null,"Prefetch waits time"),(0,n.kt)("p",null,"The average time an application spent waiting for an I/O server (prefetcher) to finish loading pages into the buffer pool."),(0,n.kt)("p",null,"= PREFETCH_WAIT_TIME / PREFETCH_WAITS "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Source:")),(0,n.kt)("p",null,"PREFETCH_WAIT_TIME = ",(0,n.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=functions-mon-get-bufferpool-get-buffer-pool-metrics"},"MON_GET_BUFFERPOOL"),"(”, #MEMBER#).SUM(",(0,n.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-p#r0001255"},"PREFETCH_WAIT_TIME"),")"),(0,n.kt)("p",null,"PREFETCH_WAITS = ",(0,n.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=functions-mon-get-bufferpool-get-buffer-pool-metrics"},"MON_GET_BUFFERPOOL"),"(”, #MEMBER#).SUM(",(0,n.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-p#r0059565"},"PREFETCH_WAITS"),")"),(0,n.kt)("hr",null),(0,n.kt)("h3",null,"Unread pref pages"),(0,n.kt)("p",null,"The number of pages that the prefetcher read into the bufferpool that were never used."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Source:")," ",(0,n.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=functions-mon-get-bufferpool-get-buffer-pool-metrics"},"MON_GET_BUFFERPOOL"),"(”, #MEMBER#).SUM(",(0,n.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-u#r0010414"},"UNREAD_PREFETCH_PAGES"),")"))}m.isMDXComponent=!0},4295:function(e,t,r){r.d(t,{Z:function(){return k}});var a=r(7294),n=r(8650),p=r.n(n),o=r(5444),c=r(6127),i=r(3321),s=r(5900),m=r.n(s),l=function(e){var t,r=e.title,n=e.theme,p=e.tabs,o=void 0===p?[]:p;return a.createElement("div",{className:m()("PageHeader-module--page-header--NqfPe",(t={},t["PageHeader-module--with-tabs--vbQ-W"]=o.length,t["PageHeader-module--dark-mode--WCeH8"]="dark"===n,t))},a.createElement("div",{className:"bx--grid"},a.createElement("div",{className:"bx--row"},a.createElement("div",{className:"bx--col-lg-12"},a.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},r)))))},f=function(e){var t=e.relativePagePath,r=e.repository,n=(0,o.useStaticQuery)("1364590287").site.siteMetadata.repository,p=r||n,c=p.baseUrl,i=p.subDirectory,s=c+"/edit/"+p.branch+i+"/src/pages"+t;return c?a.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},a.createElement("div",{className:"bx--col"},a.createElement("a",{className:"EditLink-module--link--IDrl1",href:s},"Edit this page on GitHub"))):null},d=r(4275),h=r(1721),b=function(e){function t(){return e.apply(this,arguments)||this}return(0,h.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,r=e.tabs,n=e.slug,c=n.split("/").filter(Boolean).slice(-1)[0],i=r.map((function(e){var t,r=p()(e,{lower:!0,strict:!0}),i=r===c,s=new RegExp(c+"/?(#.*)?$"),l=n.replace(s,r);return a.createElement("li",{key:e,className:m()((t={},t["PageTabs-module--selected-item--aBB0K"]=i,t),"PageTabs-module--list-item--024o6")},a.createElement(o.Link,{className:"PageTabs-module--link--Kz-7R",to:""+l},e))}));return a.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},a.createElement("div",{className:"bx--grid"},a.createElement("div",{className:"bx--row"},a.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},a.createElement("nav",{"aria-label":t},a.createElement("ul",{className:"PageTabs-module--list--xLqxG"},i))))))},t}(a.Component),w=b,u=r(2881),E=r(6958),_=r(36),g=function(e){var t=e.date,r=new Date(t);return t?a.createElement(_.X2,{className:"last-modified-date-module--row--XJoYQ"},a.createElement(_.sg,null,a.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",r.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},k=function(e){var t=e.pageContext,r=e.children,n=e.location,s=e.Title,m=t.frontmatter,h=void 0===m?{}:m,b=t.relativePagePath,_=t.titleType,k=h.tabs,S=h.title,O=h.theme,A=h.description,N=h.keywords,P=h.date,M=(0,E.Z)().interiorTheme,T=(0,o.useStaticQuery)("2456312558").site.pathPrefix,R=T?n.pathname.replace(T,""):n.pathname,L=k?R.split("/").filter(Boolean).slice(-1)[0]||p()(k[0],{lower:!0}):"",D=O||M;return a.createElement(i.Z,{tabs:k,homepage:!1,theme:D,pageTitle:S,pageDescription:A,pageKeywords:N,titleType:_},a.createElement(l,{title:s?a.createElement(s,null):S,label:"label",tabs:k,theme:D}),k&&a.createElement(w,{title:S,slug:R,tabs:k,currentTab:L}),a.createElement(u.Z,{padded:!0},r,a.createElement(f,{relativePagePath:b}),a.createElement(g,{date:P})),a.createElement(d.Z,{pageContext:t,location:n,slug:R,tabs:k,currentTab:L}),a.createElement(c.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-io-prefetchers-mdx-7f5e1abe984b50b0041e.js.map