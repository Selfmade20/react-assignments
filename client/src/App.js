import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {NavigationBar} from './components/NavigationBar';
import Home from './components/Home';

class App extends React.Component {

    render() {
      return (
        <React.Fragment>
          <NavigationBar/>
          <Router>
            <Switch>
              <Route exact path='/' component={Home} />
            </Switch>
          </Router>
        </React.Fragment>
      )
    }
  }

export default App;