import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// COMPONENTS
import Header from './Header'
import Footer from './Footer'

// CONTAINERS
import Home from '../containers/Home'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header/>
          <br/><br/>
          <Switch>
            <Route exact path="/" component={Home}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
