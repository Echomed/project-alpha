import React from 'react';
import PropTypes from 'prop-types';
import { Tile } from 'carbon-components-react';

export const Header = ({ description, links, title }) => (
  <Tile className="header">
    <div className="title-container">
      <h2 className="header-title">{title}</h2>
    </div>
  </Tile>
);

Header.propTypes = {
  description: PropTypes.string,
  links: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
};

Header.defaultProps = {
  description: '',
  links: [],
  title: '',
};

export default Header;
