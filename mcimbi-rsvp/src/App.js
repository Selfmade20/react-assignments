import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import  Home  from './container/Home';
import Bookings from './container/Bookings'
import {NavigationBar} from './components/NavigationBar';
import './App.css'

class App extends React.Component {

    render() {
      return (
        <React.Fragment>
          <NavigationBar/>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/bookings" component={Bookings} />
            </Switch>
          </Router>
        </React.Fragment>
      )
    }
  }








export default App;