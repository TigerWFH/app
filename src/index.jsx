// libs
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import * as css from './index.less';

import { Provide } from 'react-redux';
import { Route, HashRouter as Router, HashHistory } from 'react-router-dom';

// pages
import Demo from './pages/demo';
import First from './pages/first';

function App(props) {
  return (
    <div className={css["app"]}>
      {props.children}
    </div>
  )
}

let elem = <Router>
  <App>
    <Route exact strict path="/" component={Demo}></Route>
    <Route exact strict path="/first" component={First}></Route>
  </App>
</Router>

ReactDOM.render(elem, document.getElementById('main'));