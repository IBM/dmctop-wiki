"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[7378],{5152:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return i},default:function(){return u}});var l=n(3366),a=(n(7294),n(4983)),r=n(4295),o=["components"],i={},s={_frontmatter:i},p=r.Z;function u(e){var t=e.components,n=(0,l.Z)(e,o);return(0,a.kt)(p,Object.assign({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",null,"Run dmctop"),(0,a.kt)("h2",null,"Run dmctop from Db2 Server"),(0,a.kt)("p",null,"When running on DB server, dmctop connects to local database without requiring credentials. dmctop uses existing ODBC driver on the server hence installation of separate ODBC driver is not required. "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Copy dmctop on server under desire location")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Run dmctop"))),(0,a.kt)("p",null,"Linux/AIX:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"dmctop  -d SAMPLE\n")),(0,a.kt)("p",null,"Windows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"dmctop.exe  -d SAMPLE\n")),(0,a.kt)("p",null,"Now, ",(0,a.kt)("inlineCode",{parentName:"p"},"dmctop v1.0.0.0")," is bundled with Db2 v11.5.5. Without copying dmctop on server, you can directly do ",(0,a.kt)("inlineCode",{parentName:"p"},"Run dmctop")," step to start the tool."),(0,a.kt)("h2",null,"Run dmctop remotely"),(0,a.kt)("p",null,"The easiest way to run dmctop is to fully specify the database and user credentials. The dmctop will use the CLI driver. "),(0,a.kt)("p",null,"Linux/AIX:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"./dmctop  -d <database_name>  -n <host_name>  -r <port_number>  -u <user_id> [-cert-path Root-CA certificate absolute path]\n")),(0,a.kt)("p",null,"Windows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"dmctop.exe  -d <database_name>  -n <host_name>  -r <port_number>  -u <user_id> [-cert-path Root-CA certificate absolute path]\n")),(0,a.kt)("p",null,"For example:"),(0,a.kt)("p",null,"Linux/AIX:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"dmctop  -d SAMPLE  -n localhost  -r 50000  -u db2inst1\n")),(0,a.kt)("p",null,"Windows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"dmctop.exe  -d SAMPLE  -n localhost  -r 50000  -u db2inst1\n")),(0,a.kt)("p",null,"By default dmctop uses secure connection, if databases is configured with internal CA signed certificate then it needs to be provided with specified option."),(0,a.kt)("p",null,"For example:"),(0,a.kt)("p",null,"Linux/AIX:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"dmctop  -d SAMPLE  -n localhost  -r 50000  -u db2inst1 -cert-path \\home\\db2inst1\\ssl\\inernal-CA.arm\n")),(0,a.kt)("p",null,"Windows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"dmctop.exe  -d SAMPLE  -n localhost  -r 50000  -u db2inst1 -cert-path C:/ssl/inernal-CA.arm\n")),(0,a.kt)("p",null,"If SSL is not configured for databases then ",(0,a.kt)("inlineCode",{parentName:"p"},"-insecure")," option can be used to disable default secure connection."),(0,a.kt)("p",null,"For example:"),(0,a.kt)("p",null,"Linux/AIX:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"dmctop  -d SAMPLE  -n localhost  -r 50000  -u db2inst1 -insecure\n")),(0,a.kt)("p",null,"Windows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"dmctop.exe  -d SAMPLE  -n localhost  -r 50000  -u db2inst1 -insecure\n")),(0,a.kt)("p",null,"dmctop requires a password. You can specify the password on the command line with -p. However, this is not recommended as the password will then be visible to other users running similar commands. "),(0,a.kt)("p",null,"For example:"),(0,a.kt)("p",null,"Linux/AIX:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"dmctop  -d SAMPLE  -n localhost  -r 50000  -u db2inst1 -p <password>\n")),(0,a.kt)("p",null,"Windows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"dmctop.exe  -d SAMPLE  -n localhost  -r 50000  -u db2inst1 -p <password>\n")),(0,a.kt)("h2",null,"Run dmctop in background mode"),(0,a.kt)("p",null," When using the -b parameter, dmctop saves information to file in CSV format. Issuing multiple sub-options for background mode (-b) is not supported. "),(0,a.kt)("p",null,"The -b parameter takes one of the following single character sub-option values"),(0,a.kt)("p",null,"d - overview"),(0,a.kt)("p",null,"l - connections "),(0,a.kt)("p",null,"a - top consumer activities"),(0,a.kt)("p",null,"J - Skew monitor"),(0,a.kt)("p",null,"s - in-flight statements "),(0,a.kt)("p",null,"D - Package cache"),(0,a.kt)("p",null,"L - Lock statistics"),(0,a.kt)("p",null,"m - DB memory "),(0,a.kt)("p",null,"I - Instance memory"),(0,a.kt)("p",null,"F - Federation"),(0,a.kt)("p",null,"A - HADR"),(0,a.kt)("p",null,"For example:"),(0,a.kt)("p",null,"Using default file name"),(0,a.kt)("p",null,"Linux/AIX:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"dmctop  -d SAMPLE  -n localhost  -r 50000  -u db2inst1 -insecure -b d\n")),(0,a.kt)("p",null,"Windows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"dmctop.exe  -d SAMPLE  -n localhost  -r 50000  -u db2inst1 -insecure -b d\n")),(0,a.kt)("p",null,"Specifying output file name"),(0,a.kt)("p",null,"Linux/AIX:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"dmctop  -d SAMPLE  -n localhost  -r 50000  -u db2inst1 -insecure -b d -f <outputFile>.csv\n")),(0,a.kt)("p",null,"Windows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"dmctop.exe  -d SAMPLE  -n localhost  -r 50000  -u db2inst1 -insecure -b d -f <outputFile>.csv\n")))}u.isMDXComponent=!0},4295:function(e,t,n){n.d(t,{Z:function(){return x}});var l=n(7294),a=n(8650),r=n.n(a),o=n(5444),i=n(6127),s=n(3321),p=n(5900),u=n.n(p),c=function(e){var t,n=e.title,a=e.theme,r=e.tabs,o=void 0===r?[]:r;return l.createElement("div",{className:u()("PageHeader-module--page-header--NqfPe",(t={},t["PageHeader-module--with-tabs--vbQ-W"]=o.length,t["PageHeader-module--dark-mode--WCeH8"]="dark"===a,t))},l.createElement("div",{className:"bx--grid"},l.createElement("div",{className:"bx--row"},l.createElement("div",{className:"bx--col-lg-12"},l.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},n)))))},d=function(e){var t=e.relativePagePath,n=e.repository,a=(0,o.useStaticQuery)("1364590287").site.siteMetadata.repository,r=n||a,i=r.baseUrl,s=r.subDirectory,p=i+"/edit/"+r.branch+s+"/src/pages"+t;return i?l.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},l.createElement("div",{className:"bx--col"},l.createElement("a",{className:"EditLink-module--link--IDrl1",href:p},"Edit this page on GitHub"))):null},m=n(4275),k=n(1721),h=function(e){function t(){return e.apply(this,arguments)||this}return(0,k.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,n=e.tabs,a=e.slug,i=a.split("/").filter(Boolean).slice(-1)[0],s=n.map((function(e){var t,n=r()(e,{lower:!0,strict:!0}),s=n===i,p=new RegExp(i+"/?(#.*)?$"),c=a.replace(p,n);return l.createElement("li",{key:e,className:u()((t={},t["PageTabs-module--selected-item--aBB0K"]=s,t),"PageTabs-module--list-item--024o6")},l.createElement(o.Link,{className:"PageTabs-module--link--Kz-7R",to:""+c},e))}));return l.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},l.createElement("div",{className:"bx--grid"},l.createElement("div",{className:"bx--row"},l.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},l.createElement("nav",{"aria-label":t},l.createElement("ul",{className:"PageTabs-module--list--xLqxG"},s))))))},t}(l.Component),b=h,f=n(2881),g=n(6958),E=n(36),v=function(e){var t=e.date,n=new Date(t);return t?l.createElement(E.X2,{className:"last-modified-date-module--row--XJoYQ"},l.createElement(E.sg,null,l.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",n.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},x=function(e){var t=e.pageContext,n=e.children,a=e.location,p=e.Title,u=t.frontmatter,k=void 0===u?{}:u,h=t.relativePagePath,E=t.titleType,x=k.tabs,N=k.title,w=k.theme,P=k.description,L=k.keywords,y=k.date,A=(0,g.Z)().interiorTheme,S=(0,o.useStaticQuery)("2456312558").site.pathPrefix,C=S?a.pathname.replace(S,""):a.pathname,M=x?C.split("/").filter(Boolean).slice(-1)[0]||r()(x[0],{lower:!0}):"",T=w||A;return l.createElement(s.Z,{tabs:x,homepage:!1,theme:T,pageTitle:N,pageDescription:P,pageKeywords:L,titleType:E},l.createElement(c,{title:p?l.createElement(p,null):N,label:"label",tabs:x,theme:T}),x&&l.createElement(b,{title:N,slug:C,tabs:x,currentTab:M}),l.createElement(f.Z,{padded:!0},n,l.createElement(d,{relativePagePath:h}),l.createElement(v,{date:y})),l.createElement(m.Z,{pageContext:t,location:a,slug:C,tabs:x,currentTab:M}),l.createElement(i.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-general-getting-started-mdx-d1df9877e580b9fba21d.js.map