import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NavigationBar } from './components/NavigationBar';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Profile from './components/Profile';
import { ProtectedRoute } from './components/Protected.route';
import history from './history/index'

class App extends React.Component {

  render() {
    return (
      <React.Fragment>
        <NavigationBar />
        <Router history={history}>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Route path='/profile' component={Profile} />
            <Route path="*" component={() => "404 NOT FOUND"} />
          </Switch>
        </Router>
      </React.Fragment>
    )
  }
}

export default App;