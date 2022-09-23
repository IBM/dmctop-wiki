"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[5643],{2917:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return l},default:function(){return s}});var a=n(3366),r=(n(7294),n(4983)),o=n(4295),p=["components"],l={},c={_frontmatter:l},m=o.Z;function s(e){var t=e.components,n=(0,a.Z)(e,p);return(0,r.kt)(m,Object.assign({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",null,"Purpose"),(0,r.kt)("h1",null,"Metric shown"),(0,r.kt)("h2",null,"Gauge"),(0,r.kt)("hr",null),(0,r.kt)("h3",null,"Rows r+w/s"),(0,r.kt)("p",null,"The percentage of rows read from the table."),(0,r.kt)("p",null,"= ROWS_READ / ROWS_TOTAL "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Source:")," "),(0,r.kt)("p",null,"ROWS_READ = ",(0,r.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=functions-mon-get-table-get-table-metrics"},"MON_GET_TABLE"),"(NULL, NULL, #MEMBER#).SUM(",(0,r.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-r#r0001317"},"ROWS_READ"),")"),(0,r.kt)("p",null,"ROWS_TOTAL = ",(0,r.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=functions-mon-get-table-get-table-metrics"},"MON_GET_TABLE"),"(NULL, NULL, #MEMBER#).(SUM(",(0,r.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-r#r0001317"},"ROWS_READ"),") + SUM(",(0,r.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-r#r0001313"},"ROWS_INSERTED"),") + SUM(",(0,r.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-r#r0001314"},"ROWS_UPDATED"),") + SUM(",(0,r.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-r#r0001312"},"ROWS_DELETED"),"))"),(0,r.kt)("h2",null,"Grid"),(0,r.kt)("hr",null),(0,r.kt)("h3",null,"Rows read"),(0,r.kt)("p",null,"The number of rows read from the table."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Source:"),"  ",(0,r.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=functions-mon-get-table-get-table-metrics"},"MON_GET_TABLE"),"(NULL, NULL, #MEMBER#).SUM(",(0,r.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-r#r0001317"},"ROWS_READ"),")"),(0,r.kt)("hr",null),(0,r.kt)("h3",null,"Rows written"),(0,r.kt)("p",null,"The number of rows insertions, updates, and deletions attempted."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Source:"),"  ",(0,r.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=functions-mon-get-table-get-table-metrics"},"MON_GET_TABLE"),"(NULL, NULL, #MEMBER#).(SUM(",(0,r.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-r#r0001313"},"ROWS_INSERTED"),") + SUM(",(0,r.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-r#r0001314"},"ROWS_UPDATED"),") + SUM(",(0,r.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-r#r0001312"},"ROWS_DELETED"),"))"),(0,r.kt)("hr",null),(0,r.kt)("h3",null,"Temp space"),(0,r.kt)("p",null,"The total page size of system temporary data used on disk where ",(0,r.kt)("inlineCode",{parentName:"p"},"TBSP_CONTENT_TYPE")," of table space equals to ‘SYSTEMP’."),(0,r.kt)("p",null,"= (DATA_OBJECT_L_PAGES + INDEX_OBJECT_L_PAGES) * TBSP_PAGE_SIZE "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Source:")," "),(0,r.kt)("p",null,"DATA_OBJECT_L_PAGES = ",(0,r.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=functions-mon-get-table-get-table-metrics"},"MON_GET_TABLE"),"(NULL, NULL, #MEMBER#).SUM(",(0,r.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-d#r0059958"},"DATA_OBJECT_L_PAGES"),")"),(0,r.kt)("p",null,"INDEX_OBJECT_L_PAGES = ",(0,r.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=functions-mon-get-table-get-table-metrics"},"MON_GET_TABLE"),"(NULL, NULL, #MEMBER#).SUM(",(0,r.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-i#r0059961"},"INDEX_OBJECT_L_PAGES"),")"),(0,r.kt)("p",null,"TBSP_PAGE_SIZE = ",(0,r.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=functions-mon-get-tablespace-get-table-space-metrics"},"MON_GET_TABLESPACE"),".",(0,r.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-t#r0007534"},"TBSP_PAGE_SIZE")),(0,r.kt)("p",null,"TBSP_CONTENT_TYPE = ",(0,r.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=functions-mon-get-tablespace-get-table-space-metrics"},"MON_GET_TABLESPACE"),".",(0,r.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=functions-mon-get-tablespace-get-table-space-metrics"},"TBSP_CONTENT_TYPE")),(0,r.kt)("hr",null),(0,r.kt)("h3",null,"Active usr space"),(0,r.kt)("p",null,"The total page size of non-system-temporary data used on disk where ",(0,r.kt)("inlineCode",{parentName:"p"},"TBSP_CONTENT_TYPE")," of table space does not equal to ‘SYSTEMP’."),(0,r.kt)("p",null,"= (DATA_OBJECT_L_PAGES + INDEX_OBJECT_L_PAGES) * TBSP_PAGE_SIZE "),(0,r.kt)("p",null,"DATA_OBJECT_L_PAGES = ",(0,r.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=functions-mon-get-table-get-table-metrics"},"MON_GET_TABLE"),"(NULL, NULL, #MEMBER#).SUM(",(0,r.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-d#r0059958"},"DATA_OBJECT_L_PAGES"),")"),(0,r.kt)("p",null,"INDEX_OBJECT_L_PAGES = ",(0,r.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=functions-mon-get-table-get-table-metrics"},"MON_GET_TABLE"),"(NULL, NULL, #MEMBER#).SUM(",(0,r.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-i#r0059961"},"INDEX_OBJECT_L_PAGES"),")"),(0,r.kt)("p",null,"TBSP_PAGE_SIZE = ",(0,r.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=functions-mon-get-tablespace-get-table-space-metrics"},"MON_GET_TABLESPACE"),".",(0,r.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-t#r0007534"},"TBSP_PAGE_SIZE")),(0,r.kt)("p",null,"TBSP_CONTENT_TYPE = ",(0,r.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=functions-mon-get-tablespace-get-table-space-metrics"},"MON_GET_TABLESPACE"),".",(0,r.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=functions-mon-get-tablespace-get-table-space-metrics"},"TBSP_CONTENT_TYPE")),(0,r.kt)("h2",null,"Table"),(0,r.kt)("hr",null),(0,r.kt)("h3",null,"Table name"),(0,r.kt)("p",null,"The name of the table."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Source:")," ",(0,r.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=functions-mon-get-table-get-table-metrics"},"MON_GET_TABLE"),"(NULL, NULL, #MEMBER#).",(0,r.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-t#r0001310"},"TABNAME")),(0,r.kt)("hr",null),(0,r.kt)("h3",null,"Table type"),(0,r.kt)("p",null,"The type of table for which information is returned."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Source:")," ",(0,r.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=functions-mon-get-table-get-table-metrics"},"MON_GET_TABLE"),"(NULL, NULL, #MEMBER#).",(0,r.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-t#r0001309"},"TAB_TYPE")),(0,r.kt)("hr",null),(0,r.kt)("h3",null,"Table scans"),(0,r.kt)("p",null,"The number of scans on this table."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Source:")," ",(0,r.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=functions-mon-get-table-get-table-metrics"},"MON_GET_TABLE"),"(NULL, NULL, #MEMBER#).SUM(",(0,r.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-t#r0054222"},"TABLE_SCANS"),")"),(0,r.kt)("hr",null),(0,r.kt)("h3",null,"Rows read"),(0,r.kt)("p",null,"The number of rows read from the table."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Source:")," ",(0,r.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=functions-mon-get-table-get-table-metrics"},"MON_GET_TABLE"),"(NULL, NULL, #MEMBER#).SUM(",(0,r.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-r#r0001317"},"ROWS_READ"),")"),(0,r.kt)("hr",null),(0,r.kt)("h3",null,"Rows inserted"),(0,r.kt)("p",null,"The number of row insertions attempted."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Source:")," ",(0,r.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=functions-mon-get-table-get-table-metrics"},"MON_GET_TABLE"),"(NULL, NULL, #MEMBER#).SUM(",(0,r.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-r#r0001313"},"ROWS_INSERTED"),")"),(0,r.kt)("hr",null),(0,r.kt)("h3",null,"Rows updated"),(0,r.kt)("p",null,"This is the number of row updates attempted."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Source:")," ",(0,r.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=functions-mon-get-table-get-table-metrics"},"MON_GET_TABLE"),"(NULL, NULL, #MEMBER#).SUM(",(0,r.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-r#r0001314"},"ROWS_UPDATED"),")"),(0,r.kt)("hr",null),(0,r.kt)("h3",null,"Rows deleted"),(0,r.kt)("p",null,"This is the number of row deletions attempted."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Source:")," ",(0,r.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=functions-mon-get-table-get-table-metrics"},"MON_GET_TABLE"),"(NULL, NULL, #MEMBER#).SUM(",(0,r.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-r#r0001312"},"ROWS_DELETED"),")"),(0,r.kt)("hr",null),(0,r.kt)("h3",null,"Page reorgs"),(0,r.kt)("p",null,"The number of page reorganizations executed for a table."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Source:")," ",(0,r.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=functions-mon-get-table-get-table-metrics"},"MON_GET_TABLE"),"(NULL, NULL, #MEMBER#).SUM(",(0,r.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-p#r0002288"},"PAGE_REORGS"),")"),(0,r.kt)("hr",null),(0,r.kt)("h3",null,"Rows overflows"),(0,r.kt)("p",null,"The number of accesses (reads and writes) to overflowed rows of this table."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Source:")," ",(0,r.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=functions-mon-get-table-get-table-metrics"},"MON_GET_TABLE"),"(NULL, NULL, #MEMBER#).SUM(",(0,r.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-o#r0001318"},"OVERFLOW_ACCESSES"),")"),(0,r.kt)("hr",null),(0,r.kt)("h3",null,"Appl handle"),(0,r.kt)("p",null,"The identifier for application."),(0,r.kt)("p",null,"If ",(0,r.kt)("inlineCode",{parentName:"p"},"TAB_TYPE")," is ‘TEMP_TABLE’ and ",(0,r.kt)("inlineCode",{parentName:"p"},"TABSCHEMA")," has ’.’,  then the value is the string before ’.‘."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Source:")),(0,r.kt)("p",null,"TAB_TYPE = ",(0,r.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=functions-mon-get-table-get-table-metrics"},"MON_GET_TABLE"),"(NULL, NULL, #MEMBER#).",(0,r.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-t#r0001309"},"TAB_TYPE")),(0,r.kt)("p",null,"TABSCHEMA = ",(0,r.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=functions-mon-get-table-get-table-metrics"},"MON_GET_TABLE"),"(NULL, NULL, #MEMBER#).",(0,r.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-t#r0001311"},"TABSCHEMA")),(0,r.kt)("hr",null),(0,r.kt)("h3",null,"Db user"),(0,r.kt)("p",null,"The db user."),(0,r.kt)("p",null,"If ",(0,r.kt)("inlineCode",{parentName:"p"},"TAB_TYPE")," is ‘TEMP_TABLE’ and ",(0,r.kt)("inlineCode",{parentName:"p"},"TABSCHEMA")," has ’.’,  then the value is the string after ’.‘."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Source:")),(0,r.kt)("p",null,"TAB_TYPE = ",(0,r.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=functions-mon-get-table-get-table-metrics"},"MON_GET_TABLE"),"(NULL, NULL, #MEMBER#).",(0,r.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-t#r0001309"},"TAB_TYPE")),(0,r.kt)("p",null,"TABSCHEMA = ",(0,r.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=functions-mon-get-table-get-table-metrics"},"MON_GET_TABLE"),"(NULL, NULL, #MEMBER#).",(0,r.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-t#r0001311"},"TABSCHEMA")),(0,r.kt)("hr",null),(0,r.kt)("h3",null,"# of member"),(0,r.kt)("p",null,"The number of distinct MEMBER in ",(0,r.kt)("inlineCode",{parentName:"p"},"MON_GET_TABLE"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Source:")," ",(0,r.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=functions-mon-get-table-get-table-metrics"},"MON_GET_TABLE"),"(NULL, NULL, #MEMBER#).",(0,r.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-m#r0054432"},"MEMBER")),(0,r.kt)("hr",null),(0,r.kt)("h3",null,"Rows read skew"),(0,r.kt)("p",null,"The maximum number of rows read from the table skewed from average."),(0,r.kt)("p",null,"= 1 - AVG(ROWS_READ)/MAX(ROWS_READ)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Source:")),(0,r.kt)("p",null,"ROWS_READ = ",(0,r.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=functions-mon-get-table-get-table-metrics"},"MON_GET_TABLE"),"(NULL, NULL, #MEMBER#).SUM(",(0,r.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-r#r0001317"},"ROWS_READ"),")"))}s.isMDXComponent=!0},4295:function(e,t,n){n.d(t,{Z:function(){return T}});var a=n(7294),r=n(8650),o=n.n(r),p=n(5444),l=n(6127),c=n(3321),m=n(5900),s=n.n(m),i=function(e){var t,n=e.title,r=e.theme,o=e.tabs,p=void 0===o?[]:o;return a.createElement("div",{className:s()("PageHeader-module--page-header--NqfPe",(t={},t["PageHeader-module--with-tabs--vbQ-W"]=p.length,t["PageHeader-module--dark-mode--WCeH8"]="dark"===r,t))},a.createElement("div",{className:"bx--grid"},a.createElement("div",{className:"bx--row"},a.createElement("div",{className:"bx--col-lg-12"},a.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},n)))))},E=function(e){var t=e.relativePagePath,n=e.repository,r=(0,p.useStaticQuery)("1364590287").site.siteMetadata.repository,o=n||r,l=o.baseUrl,c=o.subDirectory,m=l+"/edit/"+o.branch+c+"/src/pages"+t;return l?a.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},a.createElement("div",{className:"bx--col"},a.createElement("a",{className:"EditLink-module--link--IDrl1",href:m},"Edit this page on GitHub"))):null},b=n(4275),d=n(1721),u=function(e){function t(){return e.apply(this,arguments)||this}return(0,d.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,n=e.tabs,r=e.slug,l=r.split("/").filter(Boolean).slice(-1)[0],c=n.map((function(e){var t,n=o()(e,{lower:!0,strict:!0}),c=n===l,m=new RegExp(l+"/?(#.*)?$"),i=r.replace(m,n);return a.createElement("li",{key:e,className:s()((t={},t["PageTabs-module--selected-item--aBB0K"]=c,t),"PageTabs-module--list-item--024o6")},a.createElement(p.Link,{className:"PageTabs-module--link--Kz-7R",to:""+i},e))}));return a.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},a.createElement("div",{className:"bx--grid"},a.createElement("div",{className:"bx--row"},a.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},a.createElement("nav",{"aria-label":t},a.createElement("ul",{className:"PageTabs-module--list--xLqxG"},c))))))},t}(a.Component),h=u,w=n(2881),k=n(6958),N=n(36),f=function(e){var t=e.date,n=new Date(t);return t?a.createElement(N.X2,{className:"last-modified-date-module--row--XJoYQ"},a.createElement(N.sg,null,a.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",n.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},T=function(e){var t=e.pageContext,n=e.children,r=e.location,m=e.Title,s=t.frontmatter,d=void 0===s?{}:s,u=t.relativePagePath,N=t.titleType,T=d.tabs,_=d.title,L=d.theme,g=d.description,S=d.keywords,M=d.date,A=(0,k.Z)().interiorTheme,B=(0,p.useStaticQuery)("2456312558").site.pathPrefix,P=B?r.pathname.replace(B,""):r.pathname,O=T?P.split("/").filter(Boolean).slice(-1)[0]||o()(T[0],{lower:!0}):"",R=L||A;return a.createElement(c.Z,{tabs:T,homepage:!1,theme:R,pageTitle:_,pageDescription:g,pageKeywords:S,titleType:N},a.createElement(i,{title:m?a.createElement(m,null):_,label:"label",tabs:T,theme:R}),T&&a.createElement(h,{title:_,slug:P,tabs:T,currentTab:O}),a.createElement(w.Z,{padded:!0},n,a.createElement(E,{relativePagePath:u}),a.createElement(f,{date:M})),a.createElement(b.Z,{pageContext:t,location:r,slug:P,tabs:T,currentTab:O}),a.createElement(l.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-io-table-mdx-ea4e1010c3121c89fcca.js.map