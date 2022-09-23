import React from 'react';
import Footer from 'gatsby-theme-carbon/src/components/Footer';

const Content = ({ buildTime }) => (
  <>
  </>
);

const links = {
  firstCol: [
    { href: 'https://www.ibm.com/support/producthub/db2', linkText: 'Db2 Product Hub' }
  ],
  secondCol: [
    { href: 'https://www.ibm.com/docs/en/db2/11.5', linkText: 'IBM Knowledge Center' }
  ],
};

const CustomFooter = () => <Footer links={links} Content={Content} />;

export default CustomFooter;