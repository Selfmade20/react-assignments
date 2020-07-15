import React from 'react';
import { NavigationBar } from './components/NavigationBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import Login from './components/Login';
import './App.css';

class App extends React.Component {

  render() {
    return (
      <React.Fragment>
        <NavigationBar />
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/logIn" component={Login} />
          </Switch>
        </Router>
      </React.Fragment>
    )
  }
}

export default App