import React  from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
// import { Link } from 'react-router-dom';
import styles from '../../styles/sidebar.css';

// import MenuItem from 'react-bootstrap/MenuItem';
// import Glyphicon from 'react-bootstrap/Glyphicon';



const sidebar = ({ auth: { isAuthenticated, loading }, logout }) => {
    return (
      <>
        <styles.SideBar>
          <ul>
            <li>Hello</li>
          </ul>
        </styles.SideBar>
      </>
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
