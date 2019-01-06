import React, { Component } from 'react';
import Home from './components/home';
import Portfolio from './components/portfolio';
import './styles/css/main.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/portfolio" component={Portfolio} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
