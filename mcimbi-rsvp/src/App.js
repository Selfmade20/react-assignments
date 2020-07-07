import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import  Home  from './container/Home';
import {NavigationBar} from './components/NavigationBar';

class App extends React.Component {

    render() {
      return (
        <React.Fragment>
          <NavigationBar/>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
            </Switch>
          </Router>
        </React.Fragment>
      )
    }
  }








export default App;