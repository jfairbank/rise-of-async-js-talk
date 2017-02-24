import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';

const NavItem = ({ to, children }) => (
  <li>
    <Link to={to}>
      {children}
    </Link>
  </li>
);

NavItem.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default NavItem;
