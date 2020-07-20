import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NavigationBar } from './components/NavigationBar';
import Home from './components/Home';
import registerForm from './components/Register';
import Login from './components/Login';

class App extends React.Component {

  render() {
    return (
      <React.Fragment>
        <NavigationBar />
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/logIn' component={Login} />
            <Route path='/register' component={registerForm} />
          </Switch>
        </Router>
      </React.Fragment>
    )
  }
}

export default App;