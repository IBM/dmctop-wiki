"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[2660],{2634:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return l},default:function(){return p}});var a=n(3366),o=(n(7294),n(4983)),r=n(4295),c=["components"],l={},s={_frontmatter:l},i=r.Z;function p(e){var t=e.components,n=(0,a.Z)(e,c);return(0,o.kt)(i,Object.assign({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",null,"Purpose"),(0,o.kt)("p",null,"Show what workload each connection is mapped to, and the client info fields.  This is useful for debugging connections that are not being mapped as expected.  This view also shows some WLM specific metrics related to connections."),(0,o.kt)("p",null,"The primary fields shown are the application handle (identifies the connection), the workload it is currently mapped to and the connection attributes (aka client info fields) for the connection."),(0,o.kt)("h1",null,"Screenshot"),(0,o.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,o.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"52.43055555555556%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAIAAAA7N+mxAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAs0lEQVQoz8WO3QrCMAxG0580yaYP4AYVFWzXdt3e/+lkHYLeCHrjIbkIfCcJXC+3OtfTMMQ6p3VNyxJrDSXfpynkMtWc1jLVEspe8z3lEEMsOaYMZ3/23iMiE4uIMBORiHRdtw3MzpF7gRt7AMZhRESttVIKvkFrDWgRAKyxTVbQVqjGZ9kYA3voKX/BJm/Xf5fV3+T2tvlB1qY1ABMeDyhi+94yWyK7g4jOOfsOIhJR3/UPihEOg773O5QAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,o.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"image",title:"image",src:"/dmctop-wiki/static/32884a8a3f5d9fc450182b2789d5041b/3cbba/workload_assignment.png",srcSet:["/dmctop-wiki/static/32884a8a3f5d9fc450182b2789d5041b/7fc1e/workload_assignment.png 288w","/dmctop-wiki/static/32884a8a3f5d9fc450182b2789d5041b/a5df1/workload_assignment.png 576w","/dmctop-wiki/static/32884a8a3f5d9fc450182b2789d5041b/3cbba/workload_assignment.png 1152w","/dmctop-wiki/static/32884a8a3f5d9fc450182b2789d5041b/0b124/workload_assignment.png 1728w","/dmctop-wiki/static/32884a8a3f5d9fc450182b2789d5041b/ae642/workload_assignment.png 1924w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,o.kt)("h1",null,"Metrics Shown"),(0,o.kt)("hr",null),(0,o.kt)("h3",null,"Application handle"),(0,o.kt)("p",null,"A system-wide unique ID for the application."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Source:")," ",(0,o.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2woc?topic=wmr-wlm-get-service-class-workload-occurrences-table-function-list-workload-occurrences"},"WLM_GET_SERVICE_CLASS_WORKLOAD_OCCURRENCES"),"(”, ”, #MEMBER#).",(0,o.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-#r0054410"},"APPLICATION_HANDLE")),(0,o.kt)("hr",null),(0,o.kt)("h3",null,"Event state"),(0,o.kt)("p",null,"State of the event last processed by this agent. The possible values are as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"EXECUTING"),(0,o.kt)("li",{parentName:"ul"},"IDLE")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Source:")," ",(0,o.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=mpf-mon-get-agent-list-agents-fenced-mode-processes-system-entities-database"},"MON_GET_AGENT"),"(NULL,NULL,NULL,#MEMBER#).",(0,o.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=mpf-mon-get-agent-list-agents-fenced-mode-processes-system-entities-database"},"EVENT_STATE")),(0,o.kt)("hr",null),(0,o.kt)("h3",null,"Event type"),(0,o.kt)("p",null,"Type of event last processed by this agent. The possible values are as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"ACQUIRE"),(0,o.kt)("li",{parentName:"ul"},"PROCESS"),(0,o.kt)("li",{parentName:"ul"},"WAIT")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Source:")," ",(0,o.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=mpf-mon-get-agent-list-agents-fenced-mode-processes-system-entities-database"},"MON_GET_AGENT"),"(NULL,NULL,NULL,#MEMBER#).",(0,o.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=mpf-mon-get-agent-list-agents-fenced-mode-processes-system-entities-database"},"EVENT_TYPE")),(0,o.kt)("hr",null),(0,o.kt)("h3",null,"Event object"),(0,o.kt)("p",null,"Object of the event last processed by this agent. The possible values are as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"COMPRESSION_DICTIONARY_BUILD"),(0,o.kt)("li",{parentName:"ul"},"IMPLICIT_REBIND"),(0,o.kt)("li",{parentName:"ul"},"INDEX_RECREATE"),(0,o.kt)("li",{parentName:"ul"},"LOCK"),(0,o.kt)("li",{parentName:"ul"},"LOCK_ESCALATION"),(0,o.kt)("li",{parentName:"ul"},"QP_QUEUE"),(0,o.kt)("li",{parentName:"ul"},"REMOTE_REQUEST"),(0,o.kt)("li",{parentName:"ul"},"REQUEST"),(0,o.kt)("li",{parentName:"ul"},"ROUTINE"),(0,o.kt)("li",{parentName:"ul"},"WLM_QUEUE")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Source:")," ",(0,o.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=mpf-mon-get-agent-list-agents-fenced-mode-processes-system-entities-database"},"MON_GET_AGENT"),"(NULL,NULL,NULL,#MEMBER#).",(0,o.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=mpf-mon-get-agent-list-agents-fenced-mode-processes-system-entities-database"},"EVENT_OBJECT")),(0,o.kt)("hr",null),(0,o.kt)("h3",null,"Workload name"),(0,o.kt)("p",null,"Name of the workload."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Source:")," ",(0,o.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2woc?topic=wmr-wlm-get-service-class-workload-occurrences-table-function-list-workload-occurrences"},"WLM_GET_SERVICE_CLASS_WORKLOAD_OCCURRENCES"),".",(0,o.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2woc?topic=reference-w#r0051600"},"WORKLOAD_NAME")),(0,o.kt)("hr",null),(0,o.kt)("h3",null,"User ID"),(0,o.kt)("p",null,"The system authorization id for the connection."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Source:")," ",(0,o.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2woc?topic=wmr-wlm-get-service-class-workload-occurrences-table-function-list-workload-occurrences"},"WLM_GET_SERVICE_CLASS_WORKLOAD_OCCURRENCES"),"(”, ”, #MEMBER#).",(0,o.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2woc?topic=reference-s#r0056526"},"SYSTEM_AUTH_ID")),(0,o.kt)("hr",null),(0,o.kt)("h3",null,"Session user ID"),(0,o.kt)("p",null,"The current authorization ID for the session being used by this application."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Source:")," ",(0,o.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2woc?topic=wmr-wlm-get-service-class-workload-occurrences-table-function-list-workload-occurrences"},"WLM_GET_SERVICE_CLASS_WORKLOAD_OCCURRENCES"),"(”, ”, #MEMBER#).",(0,o.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2woc?topic=reference-s#r0010880"},"SESSION_AUTH_ID")),(0,o.kt)("hr",null),(0,o.kt)("h3",null,"Client workstation"),(0,o.kt)("p",null,"Client workstation name"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Source:")," ",(0,o.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2woc?topic=wmr-wlm-get-service-class-workload-occurrences-table-function-list-workload-occurrences"},"WLM_GET_SERVICE_CLASS_WORKLOAD_OCCURRENCES"),"(”, ”, #MEMBER#).",(0,o.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2woc?topic=reference-c#r0055513"},"CLIENT_WRKSTNNAME")),(0,o.kt)("hr",null),(0,o.kt)("h3",null,"Client accounting string"),(0,o.kt)("p",null,"The data passed to the target database for logging and diagnostic purposes."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Source:")," ",(0,o.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2woc?topic=wmr-wlm-get-service-class-workload-occurrences-table-function-list-workload-occurrences"},"WLM_GET_SERVICE_CLASS_WORKLOAD_OCCURRENCES"),"(”, ”, #MEMBER#).",(0,o.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2woc?topic=reference-c#r0055510"},"CLIENT_ACCTNG")),(0,o.kt)("hr",null),(0,o.kt)("h3",null,"Client user ID"),(0,o.kt)("p",null,"Current value of the CLIENT_USERID special register for this workload occurrence."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Source:")," ",(0,o.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2woc?topic=wmr-wlm-get-service-class-workload-occurrences-table-function-list-workload-occurrences"},"WLM_GET_SERVICE_CLASS_WORKLOAD_OCCURRENCES"),"(”, ”, #MEMBER#).",(0,o.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2woc?topic=wmr-wlm-get-service-class-workload-occurrences-table-function-list-workload-occurrences"},"CLIENT_USER")),(0,o.kt)("hr",null),(0,o.kt)("h3",null,"Client application name"),(0,o.kt)("p",null,"Identifies the server transaction program performing the transaction."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Source:")," ",(0,o.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2woc?topic=wmr-wlm-get-service-class-workload-occurrences-table-function-list-workload-occurrences"},"WLM_GET_SERVICE_CLASS_WORKLOAD_OCCURRENCES"),"(”, ”, #MEMBER#).",(0,o.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2woc?topic=reference-c#r0055512"},"CLIENT_APPLNAME")),(0,o.kt)("hr",null),(0,o.kt)("h3",null,"Role ID"),(0,o.kt)("p",null,"All rolename’s where the GRANTEE matches WLM_GET_SERVICE_CLASS_WORKLOAD_OCCURRENCES.SYSTEM_AUTH_ID and present them as a comma separated list. "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Source:")," "),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=views-syscatroleauth"},"SYSCAT.ROLEAUTH"),".",(0,o.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=views-syscatroleauth"},"ROLENAME")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=views-syscatroleauth"},"SYSCAT.ROLEAUTH"),".",(0,o.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=views-syscatroleauth"},"GRANTEE")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2woc?topic=wmr-wlm-get-service-class-workload-occurrences-table-function-list-workload-occurrences"},"WLM_GET_SERVICE_CLASS_WORKLOAD_OCCURRENCES"),"(”, ”, #MEMBER#).",(0,o.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2woc?topic=reference-s#r0056526"},"SYSTEM_AUTH_ID")),(0,o.kt)("hr",null),(0,o.kt)("h3",null,"Group ID"),(0,o.kt)("p",null,"The group for the connection."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Source:"),"  ",(0,o.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2oc?topic=srv-auth-list-groups-authid-group-membership-authorization-ids"},"AUTH_LIST_GROUPS_FOR_AUTHID"),"(",(0,o.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2woc?topic=reference-s#r0056526"},"SYSTEM_AUTH_ID"),").",(0,o.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2oc?topic=srv-auth-list-groups-authid-group-membership-authorization-ids"},"GROUP")),(0,o.kt)("hr",null),(0,o.kt)("h3",null,"Activities completed"),(0,o.kt)("p",null,"The total number of coordinator activities that completed successfully."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Source:")," ",(0,o.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=functions-mon-get-connection-get-connection-metrics"},"MON_GET_CONNECTION"),"(NULL, #MEMBER#, 1).SUM(",(0,o.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-#r0054007"},"ACT_COMPLETED_TOTAL"),")"),(0,o.kt)("hr",null),(0,o.kt)("h3",null,"Wlm queue assignment"),(0,o.kt)("p",null,"The total number of times that activities or connections have been queued by a WLM threshold."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Source:")," ",(0,o.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=functions-mon-get-connection-get-connection-metrics"},"MON_GET_CONNECTION"),"(NULL, #MEMBER#, 1).SUM(",(0,o.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-w#r0054062"},"WLM_QUEUE_ASSIGNMENTS_TOTAL"),")"),(0,o.kt)("hr",null),(0,o.kt)("h3",null,"Threshold violations"),(0,o.kt)("p",null,"The total number of times a threshold was violated."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Source:")," ",(0,o.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=functions-mon-get-connection-get-connection-metrics"},"MON_GET_CONNECTION"),"(NULL, #MEMBER#, 1).SUM(",(0,o.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-t#r0056501"},"THRESH_VIOLATIONS"),")"),(0,o.kt)("hr",null),(0,o.kt)("h3",null,"Activities aborted"),(0,o.kt)("p",null,"The total number of coordinator activities that completed with errors."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Source:")," ",(0,o.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=functions-mon-get-connection-get-connection-metrics"},"MON_GET_CONNECTION"),"(NULL, #MEMBER#, 1).SUM(",(0,o.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-#r0054006"},"ACT_ABORTED_TOTAL"),")"),(0,o.kt)("hr",null),(0,o.kt)("h3",null,"Activities rejected"),(0,o.kt)("p",null,"The total number of coordinator activities that were rejected instead of being allowed to execute."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Source:")," ",(0,o.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=functions-mon-get-connection-get-connection-metrics"},"MON_GET_CONNECTION"),"(NULL, #MEMBER#, 1).SUM(",(0,o.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-#r0054008"},"ACT_REJECTED_TOTAL"),")"),(0,o.kt)("hr",null),(0,o.kt)("h3",null,"Recent sql"),(0,o.kt)("p",null,"It takes long time to get all the sql text, so it only returns ",(0,o.kt)("inlineCode",{parentName:"p"},"-")," currently."),(0,o.kt)("hr",null),(0,o.kt)("h3",null,"Address"),(0,o.kt)("p",null,"The IP address from which the activity connection was initiated."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Source:")," ",(0,o.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2woc?topic=wmr-wlm-get-service-class-workload-occurrences-table-function-list-workload-occurrences"},"WLM_GET_SERVICE_CLASS_WORKLOAD_OCCURRENCES"),"(”, ”, #MEMBER#).",(0,o.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2woc?topic=reference-#r0054686"},"ADDRESS")),(0,o.kt)("hr",null),(0,o.kt)("h3",null,"Internal application"),(0,o.kt)("p",null,"Indicates whether the application is a system application."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"SELECT CASE \n          WHEN IS_SYSTEM_APPL = 0 THEN VARCHAR('NO', 3) \n          ELSE                         VARCHAR('YES', 3) \n       END AS INTERNAL_APPL\nFROM   TABLE(MON_GET_AGENT(NULL,NULL,NULL,#MEMBER#)\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Source:")," ",(0,o.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=mpf-mon-get-agent-list-agents-fenced-mode-processes-system-entities-database"},"MON_GET_AGENT"),"(NULL,NULL,NULL,#MEMBER#).",(0,o.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-i#r0051792"},"IS_SYSTEM_APPL")),(0,o.kt)("hr",null),(0,o.kt)("h3",null,"Coordinator member"),(0,o.kt)("p",null,"Coordinating member for an application."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Source:")," ",(0,o.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2woc?topic=wmr-wlm-get-service-class-workload-occurrences-table-function-list-workload-occurrences"},"WLM_GET_SERVICE_CLASS_WORKLOAD_OCCURRENCES"),"(”, ”, #MEMBER#).",(0,o.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2woc?topic=reference-c#r0055426"},"COORD_MEMBER")),(0,o.kt)("hr",null),(0,o.kt)("h3",null,"Connection start time"),(0,o.kt)("p",null,"The time at which the connection was established with the database server. "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Source:")," ",(0,o.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=functions-mon-get-connection-get-connection-metrics"},"MON_GET_CONNECTION"),"(NULL, #MEMBER#, 1).MIN(",(0,o.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-c#r0056524"},"CONNECTION_START_TIME"),")"),(0,o.kt)("h6",null,"Author: Rongrong Zhu"))}p.isMDXComponent=!0},4295:function(e,t,n){n.d(t,{Z:function(){return g}});var a=n(7294),o=n(8650),r=n.n(o),c=n(5444),l=n(6127),s=n(3321),i=n(5900),p=n.n(i),m=function(e){var t,n=e.title,o=e.theme,r=e.tabs,c=void 0===r?[]:r;return a.createElement("div",{className:p()("PageHeader-module--page-header--NqfPe",(t={},t["PageHeader-module--with-tabs--vbQ-W"]=c.length,t["PageHeader-module--dark-mode--WCeH8"]="dark"===o,t))},a.createElement("div",{className:"bx--grid"},a.createElement("div",{className:"bx--row"},a.createElement("div",{className:"bx--col-lg-12"},a.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},n)))))},d=function(e){var t=e.relativePagePath,n=e.repository,o=(0,c.useStaticQuery)("1364590287").site.siteMetadata.repository,r=n||o,l=r.baseUrl,s=r.subDirectory,i=l+"/edit/"+r.branch+s+"/src/pages"+t;return l?a.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},a.createElement("div",{className:"bx--col"},a.createElement("a",{className:"EditLink-module--link--IDrl1",href:i},"Edit this page on GitHub"))):null},u=n(4275),w=n(1721),h=function(e){function t(){return e.apply(this,arguments)||this}return(0,w.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,n=e.tabs,o=e.slug,l=o.split("/").filter(Boolean).slice(-1)[0],s=n.map((function(e){var t,n=r()(e,{lower:!0,strict:!0}),s=n===l,i=new RegExp(l+"/?(#.*)?$"),m=o.replace(i,n);return a.createElement("li",{key:e,className:p()((t={},t["PageTabs-module--selected-item--aBB0K"]=s,t),"PageTabs-module--list-item--024o6")},a.createElement(c.Link,{className:"PageTabs-module--link--Kz-7R",to:""+m},e))}));return a.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},a.createElement("div",{className:"bx--grid"},a.createElement("div",{className:"bx--row"},a.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},a.createElement("nav",{"aria-label":t},a.createElement("ul",{className:"PageTabs-module--list--xLqxG"},s))))))},t}(a.Component),k=h,E=n(2881),N=n(6958),b=n(36),f=function(e){var t=e.date,n=new Date(t);return t?a.createElement(b.X2,{className:"last-modified-date-module--row--XJoYQ"},a.createElement(b.sg,null,a.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",n.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},g=function(e){var t=e.pageContext,n=e.children,o=e.location,i=e.Title,p=t.frontmatter,w=void 0===p?{}:p,h=t.relativePagePath,b=t.titleType,g=w.tabs,_=w.title,T=w.theme,S=w.description,A=w.keywords,C=w.date,L=(0,N.Z)().interiorTheme,R=(0,c.useStaticQuery)("2456312558").site.pathPrefix,M=R?o.pathname.replace(R,""):o.pathname,O=g?M.split("/").filter(Boolean).slice(-1)[0]||r()(g[0],{lower:!0}):"",I=T||L;return a.createElement(s.Z,{tabs:g,homepage:!1,theme:I,pageTitle:_,pageDescription:S,pageKeywords:A,titleType:b},a.createElement(m,{title:i?a.createElement(i,null):_,label:"label",tabs:g,theme:I}),g&&a.createElement(k,{title:_,slug:M,tabs:g,currentTab:O}),a.createElement(E.Z,{padded:!0},n,a.createElement(d,{relativePagePath:h}),a.createElement(f,{date:C})),a.createElement(u.Z,{pageContext:t,location:o,slug:M,tabs:g,currentTab:O}),a.createElement(l.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-throughput-workload-assignment-mdx-86094450238b1b9ae9b9.js.map