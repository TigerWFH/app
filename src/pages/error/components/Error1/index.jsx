import * as React from 'react';
import * as ReactDOM from 'react-dom';
class Error1 extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      demo: 'defaultDemo'
    };
  }
  static show(){
    let instance = _getInstance();
    let timer = setTimeout(()=>{
      _close();
    }, 2000);
  }
  componentDidMount(){
  }
  componentWillUnmount(){
    let timer = setTimeout(()=>{
      this.setState({
        demo: 'Unmount'
      });
    }, 3000)
  }
  render(){
    let style = {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0, 0, 0, 0.5)',
      textAlign: 'center'
    }
    return <div style={style}>
      {this.state.demo}
    </div>
  }
}

export default Error1;

let _container = null;
let _instance = null;

function _getInstance(){
  if (_instance === null){
    if (_container === null){
      _container = document.createElement('div');
      document.body.appendChild(_container);
    }
    _instance = ReactDOM.render(<Error1 />, _container);
  }

  return _instance;
}

function _close(){
  if (_instance){
    let result = ReactDOM.unmountComponentAtNode(_container);
    if (result){
      _instance = null;
    }
  }
}