import * as React from 'react';
import * as css from './index.less';

class ElemPosition extends React.Component{
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.div) {
      let size = this._getElemPosition(this.div);
      console.log('size--->', size);
      console.log("rect--->", this.div.getBoundingClientRect());
      console.log("clientTop--->", document.documentElement.clientTop);
      console.log("clientLeft--->", document.documentElement.clientLeft);
      console.log("clientWidth--->", document.documentElement.clientWidth);
      console.log("clientHeight--->", document.documentElement.clientHeight);
    }
    if (this.div1) {
      let size = this._getElemPosition(this.div1);
      console.log('size--->', size);
      console.log("rect--->", this.div1.getBoundingClientRect());
      console.log("clientTop--->", document.documentElement.clientTop);
      console.log("clientLeft--->", document.documentElement.clientLeft);
      console.log("clientWidth--->", document.documentElement.clientWidth);
      console.log("clientHeight--->", document.documentElement.clientHeight);
    }
  }
  _onScroll = () => {
    this.componentDidMount()
  }
  _getElemPosition = (dom) => {
    let size = {
    };
    if (dom) {
      let offsetParent = dom.offsetParent;
      let top = dom.offsetTop;
      let left = dom.offsetLeft;
      while (offsetParent) {
        top += offsetParent.offsetTop;
        left += offsetParent.offsetLeft;
        offsetParent = offsetParent.offsetParent;
      }
      size = {
        top,
        left
      };
    }

    return size;
  }
  render() {
    return (
      <div ref={div => { this.div = div; }}
        onClick={this._onScroll}>
        get element position
        <div ref={div => { this.div1 = div; }}
          style={{position: 'absolute',top: '0'}}>
          position: absolute
        </div>
      </div>
    )
  }
}

export default ElemPosition;