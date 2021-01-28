/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDom from 'react-dom';
import {
  HashRouter, Route, Router, Switch,
} from 'react-router-dom';
import App from './components/App';

ReactDom.render(

  <HashRouter>
    <Switch>
      <Route path="/homes/:id" component={App} />
    </Switch>
  </HashRouter>,

  document.getElementById('Paula'),
);
