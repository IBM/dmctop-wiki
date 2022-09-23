import React from 'react';
import ResourceLinks from 'gatsby-theme-carbon/src/components/LeftNav/ResourceLinks';

const links = [
  {
    title: 'Db2 Product Hub',
    href: 'https://www.ibm.com/support/producthub/db2',
  },
  {
    title: 'Github',
    href: 'https://github.com/IBM/dmctop-wiki',
  },
  {
    title: 'Db2 Data Management Console',
    href: 'https://www.ibm.com/docs/en/db2-data-mgr-console/3.1.x?topic=monitoring-utility-dmctop',
  },
];

// shouldOpenNewTabs: true if outbound links should open in a new tab
const CustomResources = () => <ResourceLinks shouldOpenNewTabs links={links} />;

export default CustomResources;
