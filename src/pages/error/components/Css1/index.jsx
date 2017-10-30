/**
 * @name:       Css1
 * @author:     Monkey
 * @email:      334080374@qq.com
 * @date:       2017-10-30
 * @modify Date:
 * @function:  float样式问题 
 */
import * as React from 'react';

import * as css from './index.less';

class Css1 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className={css['container']}>
      <div className={css['first']}>
        <p>home</p>
        <span>time</span>
      </div>
      <div className={css['second']}>
        <div className={css['float']}>
          float
    </div>
      </div>
    </div>
  }
}

export default Css1;