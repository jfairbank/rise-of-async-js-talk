import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import NavItem from 'components/NavItem';
import 'highlight.js/styles/atom-one-dark.css';
import './style.css';

const {
  Header: NavbarHeader,
  Brand: NavbarBrand,
} = Navbar;

const Layout = ({ children, fluid }) => (
  <div>
    <Navbar fluid={fluid}>
      <NavbarHeader className="navbar-header">
        <NavbarBrand>
          <Link to="/">
            Rise of Async JavaScript Demos
          </Link>
        </NavbarBrand>
      </NavbarHeader>

      <Nav>
        <NavItem eventKey={1} to="/">Home</NavItem>
        <NavItem eventKey={2} to="/async">Async</NavItem>

        <NavDropdown eventKey={3} title="Observables" id="observables-dropdown">
          <NavItem eventKey={3.1} to="/observable/increment">
            Increment
          </NavItem>

          <NavItem eventKey={3.2} to="/observable/counter">
            Counter
          </NavItem>
        </NavDropdown>
      </Nav>
    </Navbar>

    <Grid fluid={fluid}>
      {children}
    </Grid>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  fluid: PropTypes.bool,
};

Layout.defaultProps = {
  fluid: false,
};

export default Layout;
