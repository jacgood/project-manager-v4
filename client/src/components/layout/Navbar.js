import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

// Bootstap Components
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

const navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/tasks">My Tasks</Nav.Link>
          <Nav.Link href="/goals">My Goals</Nav.Link>
          <Nav.Link href="/stats">My Stats</Nav.Link>   
        </Nav>
        <Nav>
          <NavDropdown title="Jacob Good" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/my-account">My Account</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={logout} href="/">Logout</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
  );

  const guestLinks = (
    <Navbar.Collapse id="responsive-navbar=nav">
      <Nav className="mr-auto">
      </Nav>
      <Nav>
        <Nav.Link href="/login">Login</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  );

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/projects">ProjectManager</Navbar.Brand>
        {!loading && (
          <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
        )}
      </Navbar>
    </>
  );
};

navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logout }
)(navbar);
