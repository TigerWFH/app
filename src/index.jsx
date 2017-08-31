/**
 * @title:      app index
 * @author:     Monkey
 * @email:      334080374@qq.com
 * @date:       2017-8-23
 * @modify Date: 
 */

// libs
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, HashRouter as Router } from 'react-router-dom';

import * as css from './index.less';
import store from './store';
// utils
import AsyncRoute from './common/asyncUtils';
// pages
import Demo from './pages/demo';
import Error from './pages/error';
import Algorithm from './pages/algorithm';
let First = AsyncRoute(() => import('./pages/first'), 'first', () => import('./pages/first/reducers'));

function App(props) {
  return (
    <div className={css["app"]}>
      {props.children}
    </div>
  )
}

let elem = <Provider store={store} >
  <Router>
    <App>
      <Route exact strict path="/" component={Demo}></Route>
      <Route exact strict path="/algorithm" component={Algorithm}></Route>
      <Route exact strict path="/error" component={Error}></Route>
      <Route exact strict path="/first" component={First}></Route>
    </App>
  </Router>
</Provider >


ReactDOM.render(elem, document.getElementById('main'));