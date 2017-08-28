/**
 * @title:      Image
 * @author:     Monkey
 * @email:      334080374@qq.com
 * @date:       2017-8-23
 * @modify Date: 
 */

//  libs
import * as React from 'react';
import PropTypes from 'prop-types';

function Image(props = {}) {
  let { img } = props;
  return (
    <img src={img} />
  )
}
Image.propTypes = {
  img: PropTypes.string.isRequired
};

export default Image;