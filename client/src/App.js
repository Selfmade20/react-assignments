import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NavigationBar } from './components/NavigationBar';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Profile from './components/Profile';
import { ProtectedRoute } from './components/Protected.route';

class App extends React.Component {

  render() {
    return (
      <React.Fragment>
        <NavigationBar />
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <ProtectedRoute path='/login' component={Login} />
            <ProtectedRoute path='/register' component={Register} />
            <ProtectedRoute path='/profile' component={Profile} />
            <Route path="*" component={() => "<h1>404 NOT FOUND</h1>"} /> 
          </Switch>
        </Router>
      </React.Fragment>
    )
  }
}

export default App;