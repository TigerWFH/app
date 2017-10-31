/**
 * @name:      Error1
 * @author:     Monkey
 * @email:      334080374@qq.com
 * @date:       2017-10-30
 * @modify Date:
 * @function:   
 */

/**
 * isSoluted: true，解决方案；false，重现问题
 */
let isSoluted = true;

import * as React from 'react';
import * as ReactDOM from 'react-dom';

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'DemoDefault'
    };
  }

  changeText = () => {
    console.log('Demo:%s', this.state.text);
    this.setState({
      text: 'changeDemoText'
    });
  }

  render() {
    return <div>
      {this.state.text}
    </div>
  }
}


class Error1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      demo: 'defaultDemo'
    };
  }
  static show() {
    let instance = _getInstance();
    let timer = setTimeout(() => {
      _close();
    }, 2000);
  }
  componentDidMount() {
    if (isSoluted) {
      this._isMounted = true;
    }
  }
  componentWillUnmount() {
    this.demo.changeText();
    setTimeout(()=>{
      this.demo.changeText();
    }, 300);
    if (isSoluted) {
      this._isMounted = false;
      let timer = setTimeout(() => {
        if (this._isMounted) {
          this.setState({
            demo: 'Unmount'
          });
        }
      }, 3000)
    }
    else {
      let timer = setTimeout(() => {
        this.setState({
          demo: 'Unmount'
        });
      }, 3000)
    }
  }
  render() {
    let style = {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(255, 255, 255, 0.5)',
      textAlign: 'center'
    }
    return <div style={style}>
      <Demo ref={demo => this.demo = demo} />
      {this.state.demo}
    </div>
  }
}

export default Error1;

let _container = null;
let _instance = null;

function _getInstance() {
  if (_instance === null) {
    if (_container === null) {
      _container = document.createElement('div');
      document.body.appendChild(_container);
    }
    _instance = ReactDOM.render(<Error1 />, _container);
  }

  return _instance;
}

function _close() {
  if (_instance) {
    let result = ReactDOM.unmountComponentAtNode(_container);
    if (result) {
      _instance = null;
    }
  }
}