// libs
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, HashRouter as Router } from 'react-router-dom';

import * as css from './index.less';
import store from './store';

// pages
import AsyncRoute from './common/asyncUtils';
import Demo from './pages/demo';
let First = AsyncRoute(() => import('./pages/first'), 'first', ()=>import('./pages/first/reducers'));

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
      <Route exact strict path="/first" component={First}></Route>
    </App>
  </Router>
</Provider >


ReactDOM.render(elem, document.getElementById('main'));