import React from 'react';
import ResourceLinks from 'gatsby-theme-carbon/src/components/LeftNav/ResourceLinks';

const links = [
  {
    title: 'Db2 Product Hub',
    href: 'https://www.ibm.com/support/producthub/db2',
  },
  {
    title: 'Github',
    href: 'https://github.com/carbon-design-system/gatsby-theme-carbon',
  }
];

// shouldOpenNewTabs: true if outbound links should open in a new tab
const CustomResources = () => <ResourceLinks shouldOpenNewTabs links={links} />;

export default CustomResources;
