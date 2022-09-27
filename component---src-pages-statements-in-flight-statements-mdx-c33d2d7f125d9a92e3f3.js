"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[2801],{1843:function(t,e,n){n.r(e),n.d(e,{_frontmatter:function(){return c},default:function(){return p}});var a=n(3366),i=(n(7294),n(4983)),r=n(4295),o=["components"],c={},l={_frontmatter:c},s=r.Z;function p(t){var e=t.components,n=(0,a.Z)(t,o);return(0,i.kt)(s,Object.assign({},l,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",null,"Purpose"),(0,i.kt)("p",null,"In-flight statements view shows a list of SQL statements that are currently running. This is useful for identifying statemnts that are costly or long running."),(0,i.kt)("p",null,"Drill down is provided to see the full SQL text or run explain on a statement."),(0,i.kt)("h1",null,"Screenshot"),(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"52.43055555555556%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAvUlEQVQoz+WSQQuDMAyFk6aNFhWGzqrgYbJd5v//f2+kMiZzN487fLwmfTwCCS23BetzRVXV6McJ/Tii7RO6NGTSNOE6DLgOY8Y81jPMu+mELqWs9Lg/MM8zvPcgovPEMuaHcy5zMDAf618QQXww3YwiAiY+NZ0Tb+H8CeS/Czy7YXbyCbSzEbFNc0Zkw/7f2BXs633fBlItQdtkjLpSpKS4XAK6NqBpAmIMUA0IwVRRFEV+f6NaIMaIqm7wArUi0Gv3udbAAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"image",title:"image",src:"/dmctop-wiki/static/8611e0193343cfce43a94aa6bb13c25d/3cbba/in-flight_stmts.png",srcSet:["/dmctop-wiki/static/8611e0193343cfce43a94aa6bb13c25d/7fc1e/in-flight_stmts.png 288w","/dmctop-wiki/static/8611e0193343cfce43a94aa6bb13c25d/a5df1/in-flight_stmts.png 576w","/dmctop-wiki/static/8611e0193343cfce43a94aa6bb13c25d/3cbba/in-flight_stmts.png 1152w","/dmctop-wiki/static/8611e0193343cfce43a94aa6bb13c25d/0b124/in-flight_stmts.png 1728w","/dmctop-wiki/static/8611e0193343cfce43a94aa6bb13c25d/e957c/in-flight_stmts.png 1920w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,i.kt)("h1",null,"Metric shown"),(0,i.kt)("hr",null),(0,i.kt)("h3",null,"Application handle"),(0,i.kt)("p",null,"A system-wide unique ID for the application."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Source:")," ",(0,i.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=functions-mon-get-connection-get-connection-metrics"},"MON_GET_CONNECTION"),"(NULL, #MEMBER#, 1).",(0,i.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-#r0054410"},"APPLICATION_HANDLE")),(0,i.kt)("hr",null),(0,i.kt)("h3",null,"Stmt num"),(0,i.kt)("p",null,"Statement number within a package for a static SQL statement."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Source:")," ",(0,i.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2oc?topic=functions-mon-get-activity-return-list-activities"},"MON_GET_ACTIVITY"),"(NULL, #MEMBER#).",(0,i.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2oc?topic=reference-s#r0060716"},"STMTNO")),(0,i.kt)("hr",null),(0,i.kt)("h3",null,"Cpu time"),(0,i.kt)("p",null,"The total amount of CPU time used while within the database system."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Source:")," ",(0,i.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2oc?topic=functions-mon-get-activity-return-list-activities"},"MON_GET_ACTIVITY"),"(NULL, #MEMBER#).SUM(",(0,i.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2oc?topic=reference-t#r0054057"},"TOTAL_CPU_TIME"),")"),(0,i.kt)("hr",null),(0,i.kt)("h3",null,"Application name"),(0,i.kt)("p",null,"The name of the application running at the client."),(0,i.kt)("p",null,"*Source:** ",(0,i.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=functions-mon-get-connection-get-connection-metrics"},"MON_GET_CONNECTION"),"(NULL, #MEMBER#, 1).",(0,i.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-#r0001165"},"APPLICATION_NAME")),(0,i.kt)("hr",null),(0,i.kt)("h3",null,"Activity state"),(0,i.kt)("p",null,"The current state of the activity or workload occurrence."),(0,i.kt)("p",null,"If there is no ACTIVITY_STATE from  MON_GET_ACTIVITY, WORKLOAD_OCCURRENCE_STATE in MON_GET_CONNECTION will be used instead."),(0,i.kt)("p",null,"*Source:** "),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=functions-mon-get-connection-get-connection-metrics"},"MON_GET_CONNECTION"),"(NULL, #MEMBER#, 1).",(0,i.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-w#r0054064"},"WORKLOAD_OCCURRENCE_STATE")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2oc?topic=functions-mon-get-activity-return-list-activities"},"MON_GET_ACTIVITY"),"(NULL, #MEMBER#).",(0,i.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2oc?topic=reference-#r0054138"},"ACTIVITY_STATE")),(0,i.kt)("hr",null),(0,i.kt)("h3",null,"Elapsed time"),(0,i.kt)("p",null,"The elapsed time from the activity began doing work on the member."),(0,i.kt)("p",null,"*Source:** "),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2-for-zos/11?topic=registers-current-timestamp"},"CURRENT TIMESTAMP")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2oc?topic=functions-mon-get-activity-return-list-activities"},"MON_GET_ACTIVITY"),"(NULL, #MEMBER#).",(0,i.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2oc?topic=reference-l#r0054194"},"LOCAL_START_TIME")),(0,i.kt)("hr",null),(0,i.kt)("h3",null,"Last request type"),(0,i.kt)("p",null,"The type of the last request completed by the application."),(0,i.kt)("p",null,"*Source:** ",(0,i.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=functions-mon-get-connection-get-connection-metrics"},"MON_GET_CONNECTION"),"(NULL, #MEMBER#, 1).",(0,i.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-l#r0056665"},"LAST_REQUEST_TYPE")),(0,i.kt)("hr",null),(0,i.kt)("h3",null,"Activity type"),(0,i.kt)("p",null,"Possible values are as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"CALL"),(0,i.kt)("li",{parentName:"ul"},"DDL"),(0,i.kt)("li",{parentName:"ul"},"LOAD"),(0,i.kt)("li",{parentName:"ul"},"OTHER"),(0,i.kt)("li",{parentName:"ul"},"READ_DML"),(0,i.kt)("li",{parentName:"ul"},"WRITE_DML")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Source:")," ",(0,i.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2oc?topic=functions-mon-get-activity-return-list-activities"},"MON_GET_ACTIVITY"),"(NULL, #MEMBER#).",(0,i.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2oc?topic=functions-mon-get-activity-return-list-activities"},"ACTIVITY_TYPE")),(0,i.kt)("hr",null),(0,i.kt)("h3",null,"Rows read"),(0,i.kt)("p",null,"The number of rows read from the table."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Source:")," ",(0,i.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2oc?topic=functions-mon-get-activity-return-list-activities"},"MON_GET_ACTIVITY"),"(NULL, #MEMBER#).SUM(",(0,i.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2oc?topic=reference-r#r0001317"},"ROWS_READ"),")"),(0,i.kt)("hr",null),(0,i.kt)("h3",null,"Rows returned"),(0,i.kt)("p",null,"The number of rows that have been selected and returned to the application. "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Source:")," ",(0,i.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2oc?topic=functions-mon-get-activity-return-list-activities"},"MON_GET_ACTIVITY"),"(NULL, #MEMBER#).SUM(",(0,i.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2oc?topic=reference-r#r0051569"},"ROWS_RETURNED"),")"),(0,i.kt)("hr",null),(0,i.kt)("h3",null,"Direct reads"),(0,i.kt)("p",null,"The number of read operations that do not use the buffer pool."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Source:")," ",(0,i.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2oc?topic=functions-mon-get-activity-return-list-activities"},"MON_GET_ACTIVITY"),"(NULL, #MEMBER#).SUM(",(0,i.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2oc?topic=reference-d#r0001260"},"DIRECT_READS"),")"),(0,i.kt)("hr",null),(0,i.kt)("h3",null,"Direct writes"),(0,i.kt)("p",null,"The number of write operations that do not use the buffer pool."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Source:")," ",(0,i.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2oc?topic=functions-mon-get-activity-return-list-activities"},"MON_GET_ACTIVITY"),"(NULL, #MEMBER#).SUM(",(0,i.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2oc?topic=reference-d#r0001261"},"DIRECT_WRITES"),")"),(0,i.kt)("hr",null),(0,i.kt)("h3",null,"Sec num"),(0,i.kt)("p",null,"The internal section number in the package for a static SQL statement."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Source:")," ",(0,i.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2oc?topic=functions-mon-get-activity-return-list-activities"},"MON_GET_ACTIVITY"),"(NULL, #MEMBER#).",(0,i.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2oc?topic=reference-s#r0001347"},"SECTION_NUMBER")),(0,i.kt)("hr",null),(0,i.kt)("h3",null,"Cost estimate"),(0,i.kt)("p",null,"Estimated cost for a query, as determined by the SQL compiler."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Source:")," ",(0,i.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2oc?topic=functions-mon-get-activity-return-list-activities"},"MON_GET_ACTIVITY"),"(NULL, #MEMBER#).",(0,i.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2oc?topic=reference-q#r0001357"},"QUERY_COST_ESTIMATE")),(0,i.kt)("hr",null),(0,i.kt)("h3",null,"Card estimate"),(0,i.kt)("p",null,"An estimate of the number of rows that will be returned by a query."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Source:")," ",(0,i.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2oc?topic=functions-mon-get-activity-return-list-activities"},"MON_GET_ACTIVITY"),"(NULL, #MEMBER#).",(0,i.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2oc?topic=reference-q#r0001356"},"QUERY_CARD_ESTIMATE")),(0,i.kt)("hr",null),(0,i.kt)("h3",null,"Db user"),(0,i.kt)("p",null,"The current authorization ID for the session being used by this application."),(0,i.kt)("p",null,"*Source:** ",(0,i.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=functions-mon-get-connection-get-connection-metrics"},"MON_GET_CONNECTION"),"(NULL, #MEMBER#, 1).",(0,i.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-s#r0010880"},"SESSION_AUTH_ID")),(0,i.kt)("hr",null),(0,i.kt)("h3",null,"Uow ID"),(0,i.kt)("p",null,"The unit of work identifier. The unit of work ID is unique within an application handle."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Source:")," ",(0,i.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2oc?topic=functions-mon-get-activity-return-list-activities"},"MON_GET_ACTIVITY"),"(NULL, #MEMBER#).",(0,i.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2oc?topic=reference-u#r0051592"},"UOW_ID")),(0,i.kt)("hr",null),(0,i.kt)("h3",null,"Activity ID"),(0,i.kt)("p",null,"Counter which uniquely identifies an activity for an application within a given unit of work."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Source:")," ",(0,i.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2oc?topic=functions-mon-get-activity-return-list-activities"},"MON_GET_ACTIVITY"),"(NULL, #MEMBER#).",(0,i.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2oc?topic=reference-#r0051533"},"ACTIVITY_ID")),(0,i.kt)("hr",null),(0,i.kt)("h3",null,"Stmt text"),(0,i.kt)("p",null,"The first 18 character of SQL statement."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Source:")," ",(0,i.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2oc?topic=functions-mon-get-activity-return-list-activities"},"MON_GET_ACTIVITY"),"(NULL, #MEMBER#).",(0,i.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2oc?topic=reference-s#r0001352"},"STMT_TEXT")),(0,i.kt)("hr",null),(0,i.kt)("h3",null,"Complete text"),(0,i.kt)("p",null,"Complete text if SQL statement."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Source:")," ",(0,i.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2oc?topic=functions-mon-get-activity-return-list-activities"},"MON_GET_ACTIVITY"),"(NULL, #MEMBER#).",(0,i.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2oc?topic=reference-s#r0001352"},"STMT_TEXT")))}p.isMDXComponent=!0},4295:function(t,e,n){n.d(e,{Z:function(){return T}});var a=n(7294),i=n(8650),r=n.n(i),o=n(5444),c=n(6127),l=n(3321),s=n(5900),p=n.n(s),m=function(t){var e,n=t.title,i=t.theme,r=t.tabs,o=void 0===r?[]:r;return a.createElement("div",{className:p()("PageHeader-module--page-header--NqfPe",(e={},e["PageHeader-module--with-tabs--vbQ-W"]=o.length,e["PageHeader-module--dark-mode--WCeH8"]="dark"===i,e))},a.createElement("div",{className:"bx--grid"},a.createElement("div",{className:"bx--row"},a.createElement("div",{className:"bx--col-lg-12"},a.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},n)))))},u=function(t){var e=t.relativePagePath,n=t.repository,i=(0,o.useStaticQuery)("1364590287").site.siteMetadata.repository,r=n||i,c=r.baseUrl,l=r.subDirectory,s=c+"/edit/"+r.branch+l+"/src/pages"+e;return c?a.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},a.createElement("div",{className:"bx--col"},a.createElement("a",{className:"EditLink-module--link--IDrl1",href:s},"Edit this page on GitHub"))):null},h=n(4275),d=n(1721),w=function(t){function e(){return t.apply(this,arguments)||this}return(0,d.Z)(e,t),e.prototype.render=function(){var t=this.props,e=t.title,n=t.tabs,i=t.slug,c=i.split("/").filter(Boolean).slice(-1)[0],l=n.map((function(t){var e,n=r()(t,{lower:!0,strict:!0}),l=n===c,s=new RegExp(c+"/?(#.*)?$"),m=i.replace(s,n);return a.createElement("li",{key:t,className:p()((e={},e["PageTabs-module--selected-item--aBB0K"]=l,e),"PageTabs-module--list-item--024o6")},a.createElement(o.Link,{className:"PageTabs-module--link--Kz-7R",to:""+m},t))}));return a.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},a.createElement("div",{className:"bx--grid"},a.createElement("div",{className:"bx--row"},a.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},a.createElement("nav",{"aria-label":e},a.createElement("ul",{className:"PageTabs-module--list--xLqxG"},l))))))},e}(a.Component),k=w,b=n(2881),f=n(6958),N=n(36),E=function(t){var e=t.date,n=new Date(e);return e?a.createElement(N.X2,{className:"last-modified-date-module--row--XJoYQ"},a.createElement(N.sg,null,a.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",n.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},T=function(t){var e=t.pageContext,n=t.children,i=t.location,s=t.Title,p=e.frontmatter,d=void 0===p?{}:p,w=e.relativePagePath,N=e.titleType,T=d.tabs,g=d.title,M=d.theme,A=d.description,_=d.keywords,v=d.date,I=(0,f.Z)().interiorTheme,L=(0,o.useStaticQuery)("2456312558").site.pathPrefix,C=L?i.pathname.replace(L,""):i.pathname,S=T?C.split("/").filter(Boolean).slice(-1)[0]||r()(T[0],{lower:!0}):"",y=M||I;return a.createElement(l.Z,{tabs:T,homepage:!1,theme:y,pageTitle:g,pageDescription:A,pageKeywords:_,titleType:N},a.createElement(m,{title:s?a.createElement(s,null):g,label:"label",tabs:T,theme:y}),T&&a.createElement(k,{title:g,slug:C,tabs:T,currentTab:S}),a.createElement(b.Z,{padded:!0},n,a.createElement(u,{relativePagePath:w}),a.createElement(E,{date:v})),a.createElement(h.Z,{pageContext:e,location:i,slug:C,tabs:T,currentTab:S}),a.createElement(c.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-statements-in-flight-statements-mdx-c33d2d7f125d9a92e3f3.js.map