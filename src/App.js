import React, { Component } from 'react';
import { HashRouter as Router  } from "react-router-dom";
import './App.css';
import Components from './components/index.jsx';
import ScrollToTop from './components/helpers/scroll.js';


class App extends Component {
  constructor() {
      super();
      this.state = {
        base_url: window.location.pathname,
        api_url: '' // The api url
      }
  }

  render() {
    return (
        <Router>
          <ScrollToTop>
            <Components base_url={this.state.base_url} api_url={this.state.api_url} />
          </ScrollToTop>
        </Router>
    );
  }
}

export default App;
