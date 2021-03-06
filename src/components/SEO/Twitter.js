import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import { userTwitter } from '../../../config/website';

const Twitter = ({ siteTitle, description, image }) => (
  <Helmet>
    <meta name="twitter:card" content="summary_large_image" />
    {userTwitter && <meta name="twitter:creator" content={userTwitter} />}
    <meta name="twitter:title" content={siteTitle} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image} />
  </Helmet>
);

Twitter.propTypes = {
  siteTitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Twitter;
