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
  let { img, className, style } = props;
  return (
    <img className={className}
      style={style}
      src={img} />
  )
}
Image.propTypes = {
  img: PropTypes.string.isRequired,
  style: PropTypes.object,
  className: PropTypes.string
};

export default Image;