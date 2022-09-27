"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[9257],{8985:function(e,t,r){r.r(t),r.d(t,{_frontmatter:function(){return i},default:function(){return s}});var n=r(3366),a=(r(7294),r(4983)),o=r(4295),p=["components"],i={},m={_frontmatter:i},c=o.Z;function s(e){var t=e.components,r=(0,n.Z)(e,p);return(0,a.kt)(c,Object.assign({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",null,"Purpose"),(0,a.kt)("p",null,"Units of work view shows the user which units of work are consuming the most resources.  There are some important scenarios that can be difficult to detect unless you look at metrics on transactions."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Transaction left open")),(0,a.kt)("p",null,"If an application starts a transaction, does some work, and then never commits or rolls back, it will pin the log file where it started.  Backup will be unable to free the log file, and depending on how the database is configured a number of bad things can happen, such as filling all available disk space with new log files."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Transaction holding excessive locks")),(0,a.kt)("p",null,"Applications that acquire many locks in a single transaction and are slow to release them impact other work in the database."),(0,a.kt)("h1",null,"Screenshot"),(0,a.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,a.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"52.43055555555556%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAA7DAAAOwwHHb6hkAAABDklEQVQoz8WS22rDMBBEJe3q5siBFBrLteT4IbUNSf//86ZIqQMtLW2h0IcDWtCMdrQr1mXF5XKB1hrECooUlLohhQC1LSi0aIOH3d3uWGsrRVMw1sA4g6ZpIJZ5wcPhAOscYso4xog4JHQpoxsGPM0zhmXF9HxGOk/oT2M1IyJIKW8PSwkpJJgYIsYeQgg453G9viDnjNj3yOOIISWM41g5TRNyyng8HqtZ0XyEFEGU17aiCEIItb5HJgITQTPXTj4z2iga4b2vBTOj6yL2+/39D4tZYYtVBT81/CrGb3jfIX0f6X8N/ySyVBDNm6G1GiFoeE/YNQznGNZyHVadNDOMMffzRqnLcpdtKYv9ClB/1UluRssMAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,a.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"image",title:"image",src:"/dmctop-wiki/static/01204e14b875412b980a2d2b68433de0/3cbba/units_of_work.png",srcSet:["/dmctop-wiki/static/01204e14b875412b980a2d2b68433de0/7fc1e/units_of_work.png 288w","/dmctop-wiki/static/01204e14b875412b980a2d2b68433de0/a5df1/units_of_work.png 576w","/dmctop-wiki/static/01204e14b875412b980a2d2b68433de0/3cbba/units_of_work.png 1152w","/dmctop-wiki/static/01204e14b875412b980a2d2b68433de0/0b124/units_of_work.png 1728w","/dmctop-wiki/static/01204e14b875412b980a2d2b68433de0/d2682/units_of_work.png 1923w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,a.kt)("h1",null,"Metric shown"),(0,a.kt)("h2",null,"Gauge"),(0,a.kt)("p",null,"Following is the variable used as denominator in this section:"),(0,a.kt)("p",null,"TOTAL_TIME = ",(0,a.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=functions-mon-get-database-get-database-metrics"},"MON_GET_DATABASE"),"(#MEMBER#).SUM(",(0,a.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-l#r0001294"},"LOCK_WAIT_TIME")," + ",(0,a.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-t#r0054154"},"TOTAL_SECTION_SORT_TIME")," + ",(0,a.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-p#r0001241"},"POOL_READ_TIME")," + ",(0,a.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-p#r0001242"},"POOL_WRITE_TIME")," + ",(0,a.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-p#r0001248"},"POOL_ASYNC_READ_TIME")," + ",(0,a.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-p#r0001249"},"POOL_ASYNC_WRITE_TIME")," + ",(0,a.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-p#r0001255"},"PREFETCH_WAIT_TIME")," + ",(0,a.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-d#r0001264"},"DIRECT_READ_TIME")," + ",(0,a.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-d#r0001265"},"DIRECT_WRITE_TIME"),")"),(0,a.kt)("hr",null),(0,a.kt)("h3",null,"Wait lock ms%"),(0,a.kt)("p",null,"The percentage of time spent waiting for locks."),(0,a.kt)("p",null,"= LOCK_WAIT_TIME / TOTAL_TIME "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Source:")," "),(0,a.kt)("p",null,"LOCK_WAIT_TIME = ",(0,a.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=functions-mon-get-database-get-database-metrics"},"MON_GET_DATABASE"),"(#MEMBER#).SUM(",(0,a.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-l#r0001294"},"LOCK_WAIT_TIME"),")"),(0,a.kt)("hr",null),(0,a.kt)("h3",null,"Sort ms%"),(0,a.kt)("p",null,"The percentage of time spent performing sorts while executing a section, which is the execution of the compiled query plan generated by the SQL statement that was issued by the client application."),(0,a.kt)("p",null,"= TOTAL_SECTION_SORT_TIME / TOTAL_TIME "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Source:")," "),(0,a.kt)("p",null,"TOTAL_SECTION_SORT_TIME = ",(0,a.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=functions-mon-get-database-get-database-metrics"},"MON_GET_DATABASE"),"(#MEMBER#).SUM(",(0,a.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-t#r0054154"},"TOTAL_SECTION_SORT_TIME"),")"),(0,a.kt)("hr",null),(0,a.kt)("h3",null,"BP r/w ms%"),(0,a.kt)("p",null,"The percentage of time spent reading and writing in data and index pages from the table space containers (physical) for all types of table spaces. "),(0,a.kt)("p",null,"= BP_IO_TIME / TOTAL_TIME "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Source:")," "),(0,a.kt)("p",null,"BP_IO_TIME = ",(0,a.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=functions-mon-get-database-get-database-metrics"},"MON_GET_DATABASE"),"(#MEMBER#).SUM(",(0,a.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-p#r0001241"},"POOL_READ_TIME")," + ",(0,a.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-p#r0001242"},"POOL_WRITE_TIME"),")"),(0,a.kt)("hr",null),(0,a.kt)("h3",null,"Async r/w ms%"),(0,a.kt)("p",null,"The percentage of time for asynchronous writes and reads to complete."),(0,a.kt)("p",null,"= BP_ASYNC_IO_TIME / TOTAL_TIME "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Source:")," "),(0,a.kt)("p",null,"BP_ASYNC_IO_TIME = ",(0,a.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=functions-mon-get-database-get-database-metrics"},"MON_GET_DATABASE"),"(#MEMBER#).SUM(",(0,a.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-p#r0001248"},"POOL_ASYNC_READ_TIME")," + ",(0,a.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-p#r0001249"},"POOL_ASYNC_WRITE_TIME"),")"),(0,a.kt)("hr",null),(0,a.kt)("h3",null,"Pref wait ms%"),(0,a.kt)("p",null,"The percentage of time an application spent waiting for an I/O server (prefetcher) to finish loading pages into the buffer pool. "),(0,a.kt)("p",null,"= PREFETCH_WAIT_TIME / TOTAL_TIME "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Source:")," "),(0,a.kt)("p",null,"PREFETCH_WAIT_TIME = ",(0,a.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=functions-mon-get-database-get-database-metrics"},"MON_GET_DATABASE"),"(#MEMBER#).SUM(",(0,a.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-p#r0001255"},"PREFETCH_WAIT_TIME"),")"),(0,a.kt)("hr",null),(0,a.kt)("h3",null,"Dir r/w ms%"),(0,a.kt)("p",null,"The percentage of time required to perform the direct reads and writes."),(0,a.kt)("p",null,"= DIRECT_IO_TIME / TOTAL_TIME "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Source:")," "),(0,a.kt)("p",null,"DIRECT_IO_TIME = ",(0,a.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=functions-mon-get-database-get-database-metrics"},"MON_GET_DATABASE"),"(#MEMBER#).SUM(",(0,a.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-d#r0001264"},"DIRECT_READ_TIME")," + ",(0,a.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-d#r0001265"},"DIRECT_WRITE_TIME"),")"),(0,a.kt)("h2",null,"Table"),(0,a.kt)("hr",null),(0,a.kt)("h3",null,"0 Log space used"),(0,a.kt)("p",null,"The units of work with max amount of log space used in the current unit of work."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Source:")," ",(0,a.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=mpf-mon-get-unit-work-get-unit-work-metrics"},"MON_GET_UNIT_OF_WORK"),"(NULL, #MEMBER#, 1).SUM(",(0,a.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-u#r0001280"},"UOW_LOG_SPACE_USED"),")"),(0,a.kt)("hr",null),(0,a.kt)("h3",null,"1 CPU Time"),(0,a.kt)("p",null,"The units of work with maximum amount of CPU time used while within the database system."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Source:")," ",(0,a.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=mpf-mon-get-unit-work-get-unit-work-metrics"},"MON_GET_UNIT_OF_WORK"),"(NULL, #MEMBER#, 1).SUM(",(0,a.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-t#r0054057"},"TOTAL_CPU_TIME"),")"),(0,a.kt)("hr",null),(0,a.kt)("h3",null,"2 Elapsed time"),(0,a.kt)("p",null,"The units of work with maximum elapsed time from the time it first required database resources."),(0,a.kt)("p",null,"= CURRENT TIMESTAMP - UOW_START_TIME"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Source:")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2-for-zos/11?topic=registers-current-timestamp"},"CURRENT TIMESTAMP")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=mpf-mon-get-unit-work-get-unit-work-metrics"},"MON_GET_UNIT_OF_WORK"),"(NULL, #MEMBER#, 1).",(0,a.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-u#r0001189"},"UOW_START_TIME")),(0,a.kt)("hr",null),(0,a.kt)("h3",null,"3 Rows read"),(0,a.kt)("p",null,"The units of work with maximum number of rows read from the table."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Source:")," ",(0,a.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=mpf-mon-get-unit-work-get-unit-work-metrics"},"MON_GET_UNIT_OF_WORK"),"(NULL, #MEMBER#, 1).SUM(",(0,a.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-r#r0001317"},"ROWS_READ"),")"),(0,a.kt)("hr",null),(0,a.kt)("h3",null,"4 Rows returned"),(0,a.kt)("p",null,"The units of work with maximum number of rows that have been selected and returned to the application."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Source:")," ",(0,a.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=mpf-mon-get-unit-work-get-unit-work-metrics"},"MON_GET_UNIT_OF_WORK"),"(NULL, #MEMBER#, 1).SUM(",(0,a.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-r#r0051569"},"ROWS_RETURNED"),")"),(0,a.kt)("hr",null),(0,a.kt)("h3",null,"5 Rows written"),(0,a.kt)("p",null,"The units of work with maximum number of rows inserted, updated, or deleted."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Source:")," ",(0,a.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=mpf-mon-get-unit-work-get-unit-work-metrics"},"MON_GET_UNIT_OF_WORK"),"(NULL, #MEMBER#, 1).SUM(",(0,a.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-r#r0051568"},"ROWS_MODIFIED"),")"),(0,a.kt)("hr",null),(0,a.kt)("h3",null,"6 Logical reads"),(0,a.kt)("p",null,"The units of work with maximum number of pages which have been requested from the buffer pool (logical)."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Source:")," ",(0,a.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=mpf-mon-get-unit-work-get-unit-work-metrics"},"MON_GET_UNIT_OF_WORK"),"(NULL, #MEMBER#, 1).SUM(",(0,a.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-p#r0001235"},"POOL_DATA_L_READS")," + ",(0,a.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-p#r0011302"},"POOL_TEMP_DATA_L_READS")," + ",(0,a.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-p#r0022731"},"POOL_XDA_L_READS")," + ",(0,a.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-p#r0022738"},"POOL_TEMP_XDA_L_READS")," + ",(0,a.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-p#r0001238"},"POOL_INDEX_L_READS")," + ",(0,a.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-p#r0011303"},"POOL_TEMP_INDEX_L_READS")," + ",(0,a.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-p#r0060763"},"POOL_COL_L_READS")," + ",(0,a.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-p#r0060873"},"POOL_TEMP_COL_L_READS"),")"),(0,a.kt)("hr",null),(0,a.kt)("h3",null,"7 IO r/w"),(0,a.kt)("p",null,"The units of work with maximum number of pages which have been requested from the buffer pool (logical) or been written to disk."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Source:")," ",(0,a.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=mpf-mon-get-unit-work-get-unit-work-metrics"},"MON_GET_UNIT_OF_WORK"),"(NULL, #MEMBER#, 1).SUM(",(0,a.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-p#r0001235"},"POOL_DATA_L_READS")," + ",(0,a.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-p#r0011302"},"POOL_TEMP_DATA_L_READS")," + ",(0,a.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-p#r0022731"},"POOL_XDA_L_READS")," + ",(0,a.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-p#r0022738"},"POOL_TEMP_XDA_L_READS")," + ",(0,a.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-p#r0001238"},"POOL_INDEX_L_READS")," + ",(0,a.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-p#r0011303"},"POOL_TEMP_INDEX_L_READS")," + ",(0,a.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-p#r0060763"},"POOL_COL_L_READS")," + ",(0,a.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-p#r0060873"},"POOL_TEMP_COL_L_READS")," + ",(0,a.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-p#r0001237"},"POOL_DATA_WRITES")," + ",(0,a.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-p#r0001240"},"POOL_INDEX_WRITES")," + ",(0,a.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-p#r0022732"},"POOL_XDA_WRITES")," + ",(0,a.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-p#r0060859"},"POOL_COL_WRITES"),")"),(0,a.kt)("hr",null),(0,a.kt)("h3",null,"8 Memory"),(0,a.kt)("p",null,"The units of work with maximum amount of committed memory in use by this memory pool."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Source:")," ",(0,a.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=mpf-mon-get-memory-pool-get-memory-pool-information"},"MON_GET_MEMORY_POOL"),"(NULL, ",(0,a.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2-for-zos/11?topic=registers-current-server"},"CURRENT_SERVER"),", #MEMBER#).SUM(",(0,a.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-m#r0059534"},"MEMORY_POOL_USED"),")"),(0,a.kt)("hr",null),(0,a.kt)("h3",null,"9 FCM traffic"),(0,a.kt)("p",null,"The units of work with maximum amount of data received via or distributed by the FCM communications layer"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Source:")," ",(0,a.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=mpf-mon-get-unit-work-get-unit-work-metrics"},"MON_GET_UNIT_OF_WORK"),"(NULL, #MEMBER#, 1).SUM(",(0,a.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-f#r0054029"},"FCM_SEND_VOLUME")," + ",(0,a.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-f#r0054026"},"FCM_RECV_VOLUME"),")"),(0,a.kt)("hr",null),(0,a.kt)("h3",null,"10 Num locks held"),(0,a.kt)("p",null,"The units of work with maximum number of locks currently held."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Source:")," ",(0,a.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=mpf-mon-get-unit-work-get-unit-work-metrics"},"MON_GET_UNIT_OF_WORK"),"(NULL, #MEMBER#, 1).SUM(",(0,a.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-l#r0001281"},"NUM_LOCKS_HELD"),")"),(0,a.kt)("hr",null),(0,a.kt)("h3",null,"11 Lock escalations"),(0,a.kt)("p",null,"The units of work with maximum number of times that locks have been escalated from several row locks to a table lock."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Source:")," ",(0,a.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=mpf-mon-get-unit-work-get-unit-work-metrics"},"MON_GET_UNIT_OF_WORK"),"(NULL, #MEMBER#, 1).SUM(",(0,a.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-l#r0001284"},"LOCK_ESCALS"),")"),(0,a.kt)("hr",null),(0,a.kt)("h3",null,"12 Lock timeouts"),(0,a.kt)("p",null,"The units of work with maximum number of times that a request to lock an object timed out instead of being granted."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Source:")," ",(0,a.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=mpf-mon-get-unit-work-get-unit-work-metrics"},"MON_GET_UNIT_OF_WORK"),"(NULL, #MEMBER#, 1).SUM(",(0,a.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-l#r0001290"},"LOCK_TIMEOUTS"),")"),(0,a.kt)("hr",null),(0,a.kt)("h3",null,"13 Locks waits"),(0,a.kt)("p",null,"The units of work with maximum number of times that applications or connections waited for locks."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Source:")," ",(0,a.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=mpf-mon-get-unit-work-get-unit-work-metrics"},"MON_GET_UNIT_OF_WORK"),"(NULL, #MEMBER#, 1).SUM(",(0,a.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-l#r0001293"},"LOCK_WAITS"),")"),(0,a.kt)("hr",null),(0,a.kt)("h3",null,"14 Lock wait time"),(0,a.kt)("p",null,"The units of work with maximum elapsed time spent waiting for locks. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Source:")," ",(0,a.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=mpf-mon-get-unit-work-get-unit-work-metrics"},"MON_GET_UNIT_OF_WORK"),"(NULL, #MEMBER#, 1).SUM(",(0,a.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-l#r0001294"},"LOCK_WAIT_TIME"),")"),(0,a.kt)("hr",null),(0,a.kt)("h3",null,"15 Local wait time (Global)"),(0,a.kt)("p",null,"The units of work with maximum time spent on global lock waits."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Source:")," ",(0,a.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=mpf-mon-get-unit-work-get-unit-work-metrics"},"MON_GET_UNIT_OF_WORK"),"(NULL, #MEMBER#, 1).SUM(",(0,a.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-l#r0056234"},"LOCK_WAIT_TIME_GLOBAL"),")"),(0,a.kt)("hr",null),(0,a.kt)("h3",null,"16 Lock waits (Global)"),(0,a.kt)("p",null,"The units of work with maximum number of lock waits due to the application holding the lock being on a remote member."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Source:")," ",(0,a.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=mpf-mon-get-unit-work-get-unit-work-metrics"},"MON_GET_UNIT_OF_WORK"),"(NULL, #MEMBER#, 1).SUM(",(0,a.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-l#r0056233"},"LOCK_WAITS_GLOBAL"),")"),(0,a.kt)("hr",null),(0,a.kt)("h3",null,"17 CF wait time"),(0,a.kt)("p",null,"The units of work with maximum amount of time spent communicating with the cluster caching facility. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Source:")," ",(0,a.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=mpf-mon-get-unit-work-get-unit-work-metrics"},"MON_GET_UNIT_OF_WORK"),"(NULL, #MEMBER#, 1).SUM(",(0,a.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-c#r0056240"},"CF_WAIT_TIME"),")"),(0,a.kt)("hr",null),(0,a.kt)("h3",null,"18 CF waits"),(0,a.kt)("p",null,"The units of work with maximum number of times that the database system waited while it communicated with a cluster caching facility."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Source:")," ",(0,a.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=mpf-mon-get-unit-work-get-unit-work-metrics"},"MON_GET_UNIT_OF_WORK"),"(NULL, #MEMBER#, 1).SUM(",(0,a.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-c#r0056239"},"CF_WAITS"),")"),(0,a.kt)("hr",null),(0,a.kt)("h3",null,"Application handle"),(0,a.kt)("p",null,"A system-wide unique ID for the application. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Source:")," ",(0,a.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=mpf-mon-get-unit-work-get-unit-work-metrics"},"MON_GET_UNIT_OF_WORK"),"(NULL, #MEMBER#, 1).",(0,a.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-#r0054410"},"APPLICATION_HANDLE")),(0,a.kt)("hr",null),(0,a.kt)("h3",null,"Resource usage"),(0,a.kt)("p",null,"The percentage of application resource usage."),(0,a.kt)("hr",null),(0,a.kt)("h3",null,"Resource value"),(0,a.kt)("p",null,"The corresponding resource value."),(0,a.kt)("hr",null),(0,a.kt)("h3",null,"Application name"),(0,a.kt)("p",null,"The name of the application running at the client, as known to the database or Db2 Connect server."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Source:")," ",(0,a.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=functions-mon-get-connection-get-connection-metrics"},"MON_GET_CONNECTION"),".",(0,a.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-#r0001165"},"APPLICATION_NAME")),(0,a.kt)("hr",null),(0,a.kt)("h3",null,"UOW start time"),(0,a.kt)("p",null,"The date and time that the unit of work first required database resources."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Source:")," ",(0,a.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=mpf-mon-get-unit-work-get-unit-work-metrics"},"MON_GET_UNIT_OF_WORK"),"(NULL, #MEMBER#, 1).",(0,a.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2/11.5?topic=reference-u#r0001189"},"UOW_START_TIME")),(0,a.kt)("hr",null),(0,a.kt)("h3",null,"Latest statement text"),(0,a.kt)("p",null,"NULL"))}s.isMDXComponent=!0},4295:function(e,t,r){r.d(t,{Z:function(){return T}});var n=r(7294),a=r(8650),o=r.n(a),p=r(5444),i=r(6127),m=r(3321),c=r(5900),s=r.n(c),l=function(e){var t,r=e.title,a=e.theme,o=e.tabs,p=void 0===o?[]:o;return n.createElement("div",{className:s()("PageHeader-module--page-header--NqfPe",(t={},t["PageHeader-module--with-tabs--vbQ-W"]=p.length,t["PageHeader-module--dark-mode--WCeH8"]="dark"===a,t))},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},r)))))},w=function(e){var t=e.relativePagePath,r=e.repository,a=(0,p.useStaticQuery)("1364590287").site.siteMetadata.repository,o=r||a,i=o.baseUrl,m=o.subDirectory,c=i+"/edit/"+o.branch+m+"/src/pages"+t;return i?n.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"bx--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:c},"Edit this page on GitHub"))):null},u=r(4275),h=r(1721),k=function(e){function t(){return e.apply(this,arguments)||this}return(0,h.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,r=e.tabs,a=e.slug,i=a.split("/").filter(Boolean).slice(-1)[0],m=r.map((function(e){var t,r=o()(e,{lower:!0,strict:!0}),m=r===i,c=new RegExp(i+"/?(#.*)?$"),l=a.replace(c,r);return n.createElement("li",{key:e,className:s()((t={},t["PageTabs-module--selected-item--aBB0K"]=m,t),"PageTabs-module--list-item--024o6")},n.createElement(p.Link,{className:"PageTabs-module--link--Kz-7R",to:""+l},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},n.createElement("nav",{"aria-label":t},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},m))))))},t}(n.Component),d=k,b=r(2881),f=r(6958),_=r(36),E=function(e){var t=e.date,r=new Date(t);return t?n.createElement(_.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(_.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",r.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},T=function(e){var t=e.pageContext,r=e.children,a=e.location,c=e.Title,s=t.frontmatter,h=void 0===s?{}:s,k=t.relativePagePath,_=t.titleType,T=h.tabs,N=h.title,g=h.theme,O=h.description,M=h.keywords,L=h.date,A=(0,f.Z)().interiorTheme,I=(0,p.useStaticQuery)("2456312558").site.pathPrefix,S=I?a.pathname.replace(I,""):a.pathname,R=T?S.split("/").filter(Boolean).slice(-1)[0]||o()(T[0],{lower:!0}):"",U=g||A;return n.createElement(m.Z,{tabs:T,homepage:!1,theme:U,pageTitle:N,pageDescription:O,pageKeywords:M,titleType:_},n.createElement(l,{title:c?n.createElement(c,null):N,label:"label",tabs:T,theme:U}),T&&n.createElement(d,{title:N,slug:S,tabs:T,currentTab:R}),n.createElement(b.Z,{padded:!0},r,n.createElement(w,{relativePagePath:k}),n.createElement(E,{date:L})),n.createElement(u.Z,{pageContext:t,location:a,slug:S,tabs:T,currentTab:R}),n.createElement(i.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-top-consumers-units-of-work-mdx-9403166e8bf776bb4cb1.js.map