"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[3008],{3116:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return c},default:function(){return s}});var a=n(3366),l=(n(7294),n(4983)),o=n(4295),r=["components"],c={},i={_frontmatter:c},p=o.Z;function s(e){var t=e.components,n=(0,a.Z)(e,r);return(0,l.kt)(p,Object.assign({},i,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",null,"Purpose"),(0,l.kt)("h1",null,"Screenshot"),(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"52.43055555555556%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAA30lEQVQoz82SzW6DMBCEd/2HAjQiBWyMbQLn9v1fbyobJVHKqeLSwyePV9Zo7DGlmOCdQ93dMH19Y1oXuBAwzgE2RLgYMaUEOwdMMRU93+8YvYcQAswMwQJMBKU0yE8e3ns0dQ07DOj7HsMwvDGOY5lba4t2zpU9Eb0hpQJt64ZtXcHEhwN/RWTDJS1omqbEzlc4bZjfYI8rT6c8GvJ/NzxdipAvQyUVpMzF8BMpuKR+8Ph3R/ZCjalAezJG2xg4Z9B1Gv2nxq3TuF41jNHQOq8GVVUV/Zs8ry8XtO0HfgCBmNOFVUshgwAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"image",title:"image",src:"/dmctop-wiki/static/287b28f2b3b217f19903d14861a8e682/3cbba/locks.png",srcSet:["/dmctop-wiki/static/287b28f2b3b217f19903d14861a8e682/7fc1e/locks.png 288w","/dmctop-wiki/static/287b28f2b3b217f19903d14861a8e682/a5df1/locks.png 576w","/dmctop-wiki/static/287b28f2b3b217f19903d14861a8e682/3cbba/locks.png 1152w","/dmctop-wiki/static/287b28f2b3b217f19903d14861a8e682/0b124/locks.png 1728w","/dmctop-wiki/static/287b28f2b3b217f19903d14861a8e682/e957c/locks.png 1920w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,l.kt)("h1",null,"Metric shown"),(0,l.kt)("h2",null,"Grid"),(0,l.kt)("hr",null),(0,l.kt)("h3",null,"Locks held"),(0,l.kt)("p",null,"The number of locks in the currently connected database."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"SELECT COUNT(*) AS LOCKS_HELD \nFROM   TABLE(MON_GET_LOCKS(NULL, #MEMBER#))\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Source:")," ",(0,l.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=mpf-mon-get-locks-table-function-list-all-locks-in-currently-connected-database"},"MON_GET_LOCKS")),(0,l.kt)("hr",null),(0,l.kt)("h3",null,"Agents waiting"),(0,l.kt)("p",null,"The number of locks that each application’s agents (that are connected to the current database) are waiting to acquire."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"SELECT COUNT(*) AS LOCKS_WAIT \nFROM   TABLE(MON_GET_APPL_LOCKWAIT(NULL, #MEMBER#))\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Source:")," ",(0,l.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2woc?topic=mpf-mon-get-appl-lockwait-table-function-get-information-about-locks-which-application-is-waiting"},"MON_GET_APPL_LOCKWAIT")),(0,l.kt)("hr",null),(0,l.kt)("h3",null,"Lock list storage %"),(0,l.kt)("p",null,"The average number of locks per byte."),(0,l.kt)("p",null,"= LOCKS_HELD / LOCK_LIST_IN_USE_BYTES "),(0,l.kt)("p",null,"LOCKS_HELD = "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"SELECT COUNT(*) AS LOCKS_HELD \nFROM   TABLE(MON_GET_LOCKS(NULL, #MEMBER#))\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Source:")," "),(0,l.kt)("p",null,"LOCK_LIST_IN_USE_BYTES = ",(0,l.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=functions-mon-get-database-get-database-metrics"},"MON_GET_DATABASE"),"(#MEMBER#).SUM(",(0,l.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-l#r0001282"},"LOCK_LIST_IN_USE"),")"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=mpf-mon-get-locks-table-function-list-all-locks-in-currently-connected-database"},"MON_GET_LOCKS")),(0,l.kt)("hr",null),(0,l.kt)("h3",null,"Applications connected"),(0,l.kt)("p",null,"The number of connections from the given database member."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"SELECT COUNT(*) AS APPL_CONNECTED \nFROM   TABLE(MON_GET_CONNECTION(NULL, #MEMBER#))\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Source:")," ",(0,l.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=functions-mon-get-connection-get-connection-metrics"},"MON_GET_CONNECTION")),(0,l.kt)("h2",null,"Table"),(0,l.kt)("hr",null),(0,l.kt)("h3",null,"Application handle"),(0,l.kt)("p",null,"A system-wide unique ID for the application. "),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Source:")," ",(0,l.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=mpf-mon-get-locks-table-function-list-all-locks-in-currently-connected-database"},"MON_GET_LOCKS"),"(NULL,#MEMBER#).",(0,l.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-#r0054410"},"APPLICATION_HANDLE")),(0,l.kt)("hr",null),(0,l.kt)("h3",null,"Application name"),(0,l.kt)("p",null,"The name of the application running at the client."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Source:")," ",(0,l.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/10.5?topic=mpf-mon-get-agent-list-agents-running-in-service-class"},"MON_GET_AGENT"),"(NULL,NULL,NULL,#MEMBER#).",(0,l.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/10.5?topic=reference-#r0001165"},"APPLICATION_NAME")),(0,l.kt)("hr",null),(0,l.kt)("h3",null,"Event state"),(0,l.kt)("p",null,"State of the event last processed by this agent. The possible values are as follows:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"EXECUTING"),(0,l.kt)("li",{parentName:"ul"},"IDLE")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Source:")," ",(0,l.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/10.5?topic=mpf-mon-get-agent-list-agents-running-in-service-class"},"MON_GET_AGENT"),"(NULL,NULL,NULL,#MEMBER#).",(0,l.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/10.5?topic=mpf-mon-get-agent-list-agents-running-in-service-class"},"EVENT_STATE")),(0,l.kt)("hr",null),(0,l.kt)("h3",null,"Event type"),(0,l.kt)("p",null,"Type of event last processed by this agent. The possible values are as follows:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"ACQUIRE"),(0,l.kt)("li",{parentName:"ul"},"PROCESS"),(0,l.kt)("li",{parentName:"ul"},"WAIT")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Source:")," ",(0,l.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/10.5?topic=mpf-mon-get-agent-list-agents-running-in-service-class"},"MON_GET_AGENT"),"(NULL,NULL,NULL,#MEMBER#).",(0,l.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/10.5?topic=mpf-mon-get-agent-list-agents-running-in-service-class"},"EVENT_TYPE")),(0,l.kt)("hr",null),(0,l.kt)("h3",null,"Event object"),(0,l.kt)("p",null,"Object of the event last processed by this agent. The possible values are as follows:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"COMPRESSION_DICTIONARY_BUILD"),(0,l.kt)("li",{parentName:"ul"},"IMPLICIT_REBIND"),(0,l.kt)("li",{parentName:"ul"},"INDEX_RECREATE"),(0,l.kt)("li",{parentName:"ul"},"LOCK"),(0,l.kt)("li",{parentName:"ul"},"LOCK_ESCALATION"),(0,l.kt)("li",{parentName:"ul"},"QP_QUEUE"),(0,l.kt)("li",{parentName:"ul"},"REMOTE_REQUEST"),(0,l.kt)("li",{parentName:"ul"},"REQUEST"),(0,l.kt)("li",{parentName:"ul"},"ROUTINE"),(0,l.kt)("li",{parentName:"ul"},"WLM_QUEUE")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Source:")," ",(0,l.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/10.5?topic=mpf-mon-get-agent-list-agents-running-in-service-class"},"MON_GET_AGENT"),"(NULL,NULL,NULL,#MEMBER#).",(0,l.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/10.5?topic=mpf-mon-get-agent-list-agents-running-in-service-class"},"EVENT_OBJECT")),(0,l.kt)("hr",null),(0,l.kt)("h3",null,"Object name"),(0,l.kt)("p",null,"The name of event object."),(0,l.kt)("p",null,"= ",(0,l.kt)("inlineCode",{parentName:"p"},"<TABSCHEMA>.<TABNAME>")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Source:")," "),(0,l.kt)("p",null,"TABSCHEMA = ",(0,l.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=functions-mon-get-table-get-table-metrics"},"MON_GET_TABLE"),"(NULL,NULL, #MEMBER#).",(0,l.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-t#r0001311"},"TABSCHEMA")),(0,l.kt)("p",null,"TABNAME = ",(0,l.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=functions-mon-get-table-get-table-metrics"},"MON_GET_TABLE"),"(NULL,NULL, #MEMBER#).",(0,l.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-t#r0001310"},"TABNAME")),(0,l.kt)("hr",null),(0,l.kt)("h3",null,"Lock mode"),(0,l.kt)("p",null,"The type of lock being held."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Source:")," ",(0,l.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=mpf-mon-get-locks-table-function-list-all-locks-in-currently-connected-database"},"MON_GET_LOCKS"),"(NULL,#MEMBER#).",(0,l.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-l#r0001286"},"LOCK_MODE")),(0,l.kt)("hr",null),(0,l.kt)("h3",null,"Object type"),(0,l.kt)("p",null,"The type of object against which the application holds a lock (for object-lock-level information), or the type of object for which the application is waiting to obtain a lock (for application-level and deadlock-level information)."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Source:")," ",(0,l.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=mpf-mon-get-locks-table-function-list-all-locks-in-currently-connected-database"},"MON_GET_LOCKS"),"(NULL,#MEMBER#).",(0,l.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-l#r0001288"},"LOCK_OBJECT_TYPE")),(0,l.kt)("hr",null),(0,l.kt)("h3",null,"Lock status"),(0,l.kt)("p",null,"The internal status of the lock."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Source:")," ",(0,l.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=mpf-mon-get-locks-table-function-list-all-locks-in-currently-connected-database"},"MON_GET_LOCKS"),"(NULL,#MEMBER#).",(0,l.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-l#r0001287"},"LOCK_STATUS")),(0,l.kt)("hr",null),(0,l.kt)("h3",null,"Lock count"),(0,l.kt)("p",null,"The number of locks currently held."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Source:")," ",(0,l.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=mpf-mon-get-locks-table-function-list-all-locks-in-currently-connected-database"},"MON_GET_LOCKS"),"(NULL,#MEMBER#).",(0,l.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-l#r0009815"},"LOCK_COUNT")),(0,l.kt)("hr",null),(0,l.kt)("h3",null,"Is blocker"),(0,l.kt)("p",null,"Flag (Yes or No) indicating whether the transaction holding this lock is itself blocked waiting on another lock."),(0,l.kt)("hr",null),(0,l.kt)("h3",null,"Locked by"),(0,l.kt)("p",null,"The application that is holding the lock."),(0,l.kt)("p",null,"If the LOCK_STATUS column is W or C, then get the application handle id of the first object from the lock list with LOCK_STATUS equals to G with given LOCK_NAME."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Source:")),(0,l.kt)("p",null,"LOCK_STATUS  = ",(0,l.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=mpf-mon-get-locks-table-function-list-all-locks-in-currently-connected-database"},"MON_GET_LOCKS"),"(NULL,#MEMBER#).",(0,l.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-l#r0001287"},"LOCK_STATUS")),(0,l.kt)("p",null,"LOCK_NAME = ",(0,l.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=mpf-mon-get-locks-table-function-list-all-locks-in-currently-connected-database"},"MON_GET_LOCKS"),"(NULL,#MEMBER#).",(0,l.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-l#r0009819"},"LOCK_NAME")),(0,l.kt)("hr",null),(0,l.kt)("h3",null,"Tablespace name"),(0,l.kt)("p",null,"The name of a table space."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Source:")," ",(0,l.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2oc?topic=functions-mon-get-tablespace-get-table-space-metrics"},"MON_GET_TABLESPACE"),".",(0,l.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2oc?topic=reference-t#r0001295"},"TBSP_NAME")),(0,l.kt)("h6",null,"Author: Rongrong Zhu"))}s.isMDXComponent=!0},4295:function(e,t,n){n.d(t,{Z:function(){return f}});var a=n(7294),l=n(8650),o=n.n(l),r=n(5444),c=n(6127),i=n(3321),p=n(5900),s=n.n(p),m=function(e){var t,n=e.title,l=e.theme,o=e.tabs,r=void 0===o?[]:o;return a.createElement("div",{className:s()("PageHeader-module--page-header--NqfPe",(t={},t["PageHeader-module--with-tabs--vbQ-W"]=r.length,t["PageHeader-module--dark-mode--WCeH8"]="dark"===l,t))},a.createElement("div",{className:"bx--grid"},a.createElement("div",{className:"bx--row"},a.createElement("div",{className:"bx--col-lg-12"},a.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},n)))))},u=function(e){var t=e.relativePagePath,n=e.repository,l=(0,r.useStaticQuery)("1364590287").site.siteMetadata.repository,o=n||l,c=o.baseUrl,i=o.subDirectory,p=c+"/edit/"+o.branch+i+"/src/pages"+t;return c?a.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},a.createElement("div",{className:"bx--col"},a.createElement("a",{className:"EditLink-module--link--IDrl1",href:p},"Edit this page on GitHub"))):null},k=n(4275),d=n(1721),h=function(e){function t(){return e.apply(this,arguments)||this}return(0,d.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,n=e.tabs,l=e.slug,c=l.split("/").filter(Boolean).slice(-1)[0],i=n.map((function(e){var t,n=o()(e,{lower:!0,strict:!0}),i=n===c,p=new RegExp(c+"/?(#.*)?$"),m=l.replace(p,n);return a.createElement("li",{key:e,className:s()((t={},t["PageTabs-module--selected-item--aBB0K"]=i,t),"PageTabs-module--list-item--024o6")},a.createElement(r.Link,{className:"PageTabs-module--link--Kz-7R",to:""+m},e))}));return a.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},a.createElement("div",{className:"bx--grid"},a.createElement("div",{className:"bx--row"},a.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},a.createElement("nav",{"aria-label":t},a.createElement("ul",{className:"PageTabs-module--list--xLqxG"},i))))))},t}(a.Component),b=h,N=n(2881),E=n(6958),g=n(36),w=function(e){var t=e.date,n=new Date(t);return t?a.createElement(g.X2,{className:"last-modified-date-module--row--XJoYQ"},a.createElement(g.sg,null,a.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",n.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},f=function(e){var t=e.pageContext,n=e.children,l=e.location,p=e.Title,s=t.frontmatter,d=void 0===s?{}:s,h=t.relativePagePath,g=t.titleType,f=d.tabs,L=d.title,T=d.theme,A=d.description,O=d.keywords,M=d.date,_=(0,E.Z)().interiorTheme,S=(0,r.useStaticQuery)("2456312558").site.pathPrefix,C=S?l.pathname.replace(S,""):l.pathname,U=f?C.split("/").filter(Boolean).slice(-1)[0]||o()(f[0],{lower:!0}):"",v=T||_;return a.createElement(i.Z,{tabs:f,homepage:!1,theme:v,pageTitle:L,pageDescription:A,pageKeywords:O,titleType:g},a.createElement(m,{title:p?a.createElement(p,null):L,label:"label",tabs:f,theme:v}),f&&a.createElement(b,{title:L,slug:C,tabs:f,currentTab:U}),a.createElement(N.Z,{padded:!0},n,a.createElement(u,{relativePagePath:h}),a.createElement(w,{date:M})),a.createElement(k.Z,{pageContext:t,location:l,slug:C,tabs:f,currentTab:U}),a.createElement(c.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-locking-locks-mdx-6ee2e6f3ca51b451df27.js.map