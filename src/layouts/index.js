import React from 'react';
import PropTypes from 'prop-types';
import Header from '../modules/header';
import Footer from '../modules/footer';
import SocialLink from '../modules/socialLink';

import './index.scss';
import '../styles/container.scss';

const TemplateWrapper = ({ children }) => (
  <div>
    <Header />
    <div>{children()}</div>
    <Footer />
    <SocialLink />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
