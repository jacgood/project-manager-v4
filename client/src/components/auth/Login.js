import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';

import Image from 'react-bootstrap/Image';

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    login(email, password);
  };

  if (isAuthenticated) {
    return <Redirect to="/projects" />;
  }

  return (
    <Fragment>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-9 col-lg-12 col-xl-10">
            <div className="card shadow-lg o-hidden border-0 my-5">
              <div className="card-body p-0">
                <div className="row">
                  <div className="col-lg-6 d-none d-lg-flex">
                    <Image className="flex-grow-1 bg-login-image" src='/_resources/bootstrapstudio/assets/img/dogs/image3.jpeg' fluid />
                    {/* <div className="flex-grow-1 bg-login-image" style={{backgroundImage: "../../../../_resources/bootstrapstudio/assets/img/dogs/image3.jpeg"}} /> */}
                  </div>
                  <div className="col-lg-6">
                    <div className="p-5">
                      <div className="text-center">
                        <h4 className="text-dark mb-4">Welcome Back!</h4>
                      </div>
                      <form className="user" onSubmit={onSubmit}>
                        <div className="form-group"><input className="form-control form-control-user" type="email" placeholder="Email Address" name="email" value={email} onChange={onChange} required/></div>
                        <div className="form-group"><input className="form-control form-control-user" type="password" placeholder="Password" name="password" value={password} onChange={onChange} minLength="6"/></div>
                        <div className="form-group">
                          <div className="custom-control custom-checkbox small">
                            <div className="form-check"><input className="form-check-input custom-control-input" type="checkbox" id="formCheck-1" /><label className="form-check-label custom-control-label" htmlFor="formCheck-1">Remember Me</label></div>
                          </div>
                        </div><button className="btn btn-primary btn-block text-white btn-user" value="Login" type="submit">Login</button>
                        <hr />
                        <hr />
                      </form>
                      <div className="text-center"><a className="small" href="forgot-password.html">Forgot Password?</a></div>
                      <div className="text-center"><a className="small" href="register.html">Create an Account!</a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);
