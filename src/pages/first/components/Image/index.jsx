/**
 * @title:      Image
 * @author:     Monkey
 * @email:      334080374@qq.com
 * @date:       2017-8-23
 * @modify Date: 
 */

//  libs
import * as React from 'react';

function Image(props = {}) {
  let { img } = props;
  console.log("img--->", img);
  return (
    <div>
      <img src={img} />
    </div>
  )
}

export default Image;