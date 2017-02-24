import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Layout from 'components/Layout';
import Home from 'pages/Home';
import Async from 'pages/Async';
import ObservableIncrement from 'pages/ObservableIncrement';
import ObservableCounter from 'pages/ObservableCounter';

const App = () => (
  <Router>
    <Layout fluid>
      <Route exact path="/" component={Home} />
      <Route exact path="/async" component={Async} />
      <Route exact path="/observable/increment" component={ObservableIncrement} />
      <Route exact path="/observable/counter" component={ObservableCounter} />
    </Layout>
  </Router>
);

export default App;
