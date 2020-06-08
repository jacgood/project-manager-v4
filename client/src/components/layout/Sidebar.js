import React  from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
// import { Link } from 'react-router-dom';

import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/sidebar.css'


const sidebar = ({ auth: { isAuthenticated, loading }, logout }) => {
    return (
     <Nav className="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0">
      <div className="container-fluid d-flex flex-column p-0">
        <hr className="sidebar-divider my-0" />
        <Nav.Link href="/tasks">My Tasks</Nav.Link>
        <Nav.Link href="/goals">My Goals</Nav.Link>
        <Nav.Link href="/stats">My Stats</Nav.Link>
      </div>
    </Nav>
  );
};

sidebar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logout }
)(sidebar);
