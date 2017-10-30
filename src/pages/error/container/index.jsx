// libs
import * as React from 'react';

import Error1 from '../components/Error1';
import Css1 from '../components/Css1';

import * as css from './index.less';

class Error extends React.Component {
  constructor(props) {
    super(props);
  }

  _onClick1 = () => {
    Error1.show();
  }

  render() {
    return <div className={css['error']}>
      <filedset>
        <legend style={{color: '#fff'}}>Error1</legend>
        <button onClick={this._onClick1}>
          show
        </button>
      </filedset>
      <fieldset>
        <legend style={{color: '#fff'}}>Css1</legend>
        <Css1 />
      </fieldset>
    </div>
  }
}

export default Error;