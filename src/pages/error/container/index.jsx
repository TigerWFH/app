// libs
import * as React from 'react';

import * as css from './index.less';

function Error(props) {
  return <div className={css['error']}>
    <button className={css['btn']}>BUTTON</button>
  </div>
}

export default Error;