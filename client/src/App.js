import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar'; // sorta done...
import Landing from './components/layout/Landing'; // need to change photo.. but doneish
import Routes from './components/routing/Routes';

// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

// Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './styles/sidebar.css';

const App = () => {
  useEffect(() => {
    setAuthToken(localStorage.token);
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Container fluid>
            <Switch>
              <Route exact path="/" component={Landing} />{' '}
              <Route component={Routes} />{' '}
            </Switch>{' '}
          </Container>{' '}
        </Fragment>{' '}
      </Router>{' '}
    </Provider>
  );
};

export default App;
