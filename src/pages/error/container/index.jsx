// libs
import * as React from 'react';

import Error1 from '../components/Error1';

import * as css from './index.less';

class Error extends React.Component{
  constructor(props){
    super(props);
  }

  _onClick1 = ()=>{
    Error1.show();
  }

  render(){
    return <div>
      <button className={css['error']}>
      for test
      </button>
      <button onClick={this._onClick1}>
        show
      </button>
    </div>
  }
}

export default Error;