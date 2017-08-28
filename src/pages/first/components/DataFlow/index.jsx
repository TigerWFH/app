/**
 * @title:      DataFlow
 * @author:     Monkey
 * @email:      334080374@qq.com
 * @date:       2017-8-23
 * @modify Date: 
 */

// libs
import * as React from 'react';
import * as css from './index.less';

function DataFlow(props = {}) {
  function _onGetData() {
    let { getFirstData } = props;
    getFirstData();
  }
  let { data } = props;
  return (
    <div className={css['dataFlow']}>
      <button onClick={_onGetData}>
        getFirstData
      </button>
      {'this is First World!' + data}
    </div>
  )
}

export default DataFlow;