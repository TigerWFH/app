/**
 * @name:       Toast
 * @author:     Monkey
 * @email:      334080374@qq.com
 * @date:       2017-10-27
 * @modify Date:
 * @function: 暴露四个接口:
 *          Toast.success(),Toast.info(),Toast.warn(),Toast.error()
 */

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import * as css from './index.less';

let _time = 2000;//toast展示时间

class Toast extends React.Component {
  constructor(props) {
    super(props);
  }
  static propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    content: PropTypes.string.isRequired
  };
  /**
   * @desc 根据type，展示不同的toast
   * @type {string} 取值是{info, success, warn, error}
   * @options {object} 取值有{content,className, style}
   */
  static showToast = (type = 'info', options = {}) => {
    if (typeof type !== 'string') {
      let error = new TypeError('参数类型错误');
      throw error;
    }

    if (Object.prototype.toString.call(options) !== '[object Object]') {
      let error = new TypeError('参数类型错误');
      throw error;
    }

    let _options = {
      content: options.content || '',
      style: options.style || null,
      className: options.className || css[type]
    }

    _getInstance(_options);
    setTimeout(_closeToast, _time);
  }

  render() {
    let { content, className, style } = this.props;
    return <div className={className}
      style={style}>
      {this.props.content}
    </div>
  }
}

export default Toast;

let _instance = null;
let _container = null;

function _getInstance(options) {
  if (!_instance) {
    if (!_container) {
      _container = document.createElement('div');
      document.body.appendChild(_container);
    }
    _instance = ReactDOM.render(<Toast {...options} />, _container);
  }

  return _instance;
}

function _closeToast() {
  if (_container) {
    ReactDOM.unmountComponentAtNode(_container);
    _instance = null;
  }
}