"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[6840],{1784:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return s},default:function(){return d}});var n,r=a(3366),l=(a(7294),a(4983)),i=a(4295),o=["components"],s={},c=(n="PageDescription",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",e)}),m={_frontmatter:s},p=i.Z;function d(e){var t=e.components,a=(0,r.Z)(e,o);return(0,l.kt)(p,Object.assign({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(c,{mdxType:"PageDescription"},(0,l.kt)("p",null,"This is a ",(0,l.kt)("inlineCode",{parentName:"p"},"<PageDescription>")," component. It is generally used for intro text at\nthe top of the page using the\n",(0,l.kt)("a",{parentName:"p",href:"https://www.carbondesignsystem.com/guidelines/typography/expressive"},"type token"),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"expressive-heading-03"),".")),(0,l.kt)("h2",null,"Notes"),(0,l.kt)("p",null,"For most pages, we recommend starting with a ",(0,l.kt)("inlineCode",{parentName:"p"},"PageDescription")," followed by\n",(0,l.kt)("inlineCode",{parentName:"p"},"AnchorLinks")," if the content is long enough. Please note that this component,\nlike all MDX components, is picky about white space, the line break above and\nbelow your content is required, and if you even have an extra space on the empty\nlines above/below it won’t render correctly."),(0,l.kt)("h2",null,"Code"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-markup",metastring:"path=components/PageDescription/PageDescription.js src=https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/PageDescription",path:"components/PageDescription/PageDescription.js",src:"https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/PageDescription"},"<PageDescription>\n\nLorem ipsum dolor sit amet, **consectetur adipiscing elit**, sed do eiusmod tempor _incididunt_ ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\n</PageDescription>\n")),(0,l.kt)("h3",null,"Props"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"property"),(0,l.kt)("th",{parentName:"tr",align:null},"propType"),(0,l.kt)("th",{parentName:"tr",align:null},"required"),(0,l.kt)("th",{parentName:"tr",align:null},"default"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"children"),(0,l.kt)("td",{parentName:"tr",align:null},"node"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))))}d.isMDXComponent=!0},4295:function(e,t,a){a.d(t,{Z:function(){return f}});var n=a(7294),r=a(8650),l=a.n(r),i=a(5444),o=a(6127),s=a(3321),c=a(5900),m=a.n(c),p=function(e){var t,a=e.title,r=e.theme,l=e.tabs,i=void 0===l?[]:l;return n.createElement("div",{className:m()("PageHeader-module--page-header--NqfPe",(t={},t["PageHeader-module--with-tabs--vbQ-W"]=i.length,t["PageHeader-module--dark-mode--WCeH8"]="dark"===r,t))},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},a)))))},d=function(e){var t=e.relativePagePath,a=e.repository,r=(0,i.useStaticQuery)("1364590287").site.siteMetadata.repository,l=a||r,o=l.baseUrl,s=l.subDirectory,c=o+"/edit/"+l.branch+s+"/src/pages"+t;return o?n.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"bx--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:c},"Edit this page on GitHub"))):null},u=a(4275),g=a(1721),h=function(e){function t(){return e.apply(this,arguments)||this}return(0,g.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,r=e.slug,o=r.split("/").filter(Boolean).slice(-1)[0],s=a.map((function(e){var t,a=l()(e,{lower:!0,strict:!0}),s=a===o,c=new RegExp(o+"/?(#.*)?$"),p=r.replace(c,a);return n.createElement("li",{key:e,className:m()((t={},t["PageTabs-module--selected-item--aBB0K"]=s,t),"PageTabs-module--list-item--024o6")},n.createElement(i.Link,{className:"PageTabs-module--link--Kz-7R",to:""+p},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},n.createElement("nav",{"aria-label":t},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},s))))))},t}(n.Component),b=h,k=a(2881),N=a(6958),y=a(36),v=function(e){var t=e.date,a=new Date(t);return t?n.createElement(y.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(y.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},f=function(e){var t=e.pageContext,a=e.children,r=e.location,c=e.Title,m=t.frontmatter,g=void 0===m?{}:m,h=t.relativePagePath,y=t.titleType,f=g.tabs,E=g.title,P=g.theme,x=g.description,w=g.keywords,D=g.date,T=(0,N.Z)().interiorTheme,C=(0,i.useStaticQuery)("2456312558").site.pathPrefix,Z=C?r.pathname.replace(C,""):r.pathname,q=f?Z.split("/").filter(Boolean).slice(-1)[0]||l()(f[0],{lower:!0}):"",L=P||T;return n.createElement(s.Z,{tabs:f,homepage:!1,theme:L,pageTitle:E,pageDescription:x,pageKeywords:w,titleType:y},n.createElement(p,{title:c?n.createElement(c,null):E,label:"label",tabs:f,theme:L}),f&&n.createElement(b,{title:E,slug:Z,tabs:f,currentTab:q}),n.createElement(k.Z,{padded:!0},a,n.createElement(d,{relativePagePath:h}),n.createElement(v,{date:D})),n.createElement(u.Z,{pageContext:t,location:r,slug:Z,tabs:f,currentTab:q}),n.createElement(o.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-components-page-description-mdx-3fd3b1c26ddf61df5487.js.map