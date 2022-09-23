import React from 'react';
import { HomepageBanner, HomepageCallout } from 'gatsby-theme-carbon';
import HomepageTemplate from 'gatsby-theme-carbon/src/templates/Homepage';
import { calloutLink } from './Homepage.module.scss';

import Carbon from './carbon.jpg'

const FirstLeftText = () => <p>What is <strong>dmctop</strong>?</p>;

const FirstRightText = () => (
  <p>
    The <strong>dmctop</strong> utility is a simple text-based tool for monitoring, similar to the dsmtop. The <strong>dmctop</strong> utility can monitor Db2® version 11.1.0 and later fix packs. It is intended primarily for use on Linux® and Windows systems. Beginning with IBM® Db2 Data Management Console v3.1.5, the monitoring utility <strong>dmctop v1.0.2</strong> is bundled with Db2 v11.5.6.
  </p>
);

const BannerText = () => <h1>Welcome to the IBM dmctop Wiki!</h1>;

const customProps = {
  Banner: <HomepageBanner renderText={BannerText} image={Carbon} />,
  FirstCallout: (
    <HomepageCallout
      backgroundColor="#030303"
      color="white"
      leftText={FirstLeftText}
      rightText={FirstRightText}
    />
  )
};

// spreading the original props gives us props.children (mdx content)
function ShadowedHomepage(props) {
  return <HomepageTemplate {...props} {...customProps} />;
}

export default ShadowedHomepage;