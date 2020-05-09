import React, { Component } from 'react';
import {  Route, Link, Switch, Redirect } from "react-router-dom";
import $ from 'jquery';

import NoMatch from './helpers/no-match.js';

import Header from './includes/header.jsx';
import Footer from './includes/footer.jsx';

import Home from './pages/home.jsx';
import Blank from './pages/blank.jsx';

class Components extends Component {
  constructor(props) {
    super(props);
    this.state = {
      base_url: this.props.base_url,
      api_url: this.props.api_url
    }
  }

  render() {
    return [
        <Header key="header" />,
        <Switch key="switch">
            <Route exact path="/" render={(props) => 
              <Home {...props}
                base_url={this.state.base_url} 
                api_url={this.state.api_url} 
              />} 
            />
            <Route path="/blank" render={(props) => 
              <Blank {...props} 
                base_url={this.state.base_url} 
                api_url={this.state.api_url} 
              />} 
            />
            <Route render={(props) =>
              <NoMatch
                base_url={this.state.base_url} 
                api_url={this.state.api_url} 
              />}
            />
        </Switch>,
        <Footer key="footer" />
    ];
  }
}

export default Components;
