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
      console.log("viewportTop--->", document.documentElement.clientTop);
      console.log("viewportLeft--->", document.documentElement.clientLeft);
      console.log("viewportWidth--->", document.documentElement.clientWidth);
      console.log("viewportHeight--->", document.documentElement.clientHeight);
    }
  }

  _getElemPosition = (dom) => {
    let size = {};
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
      <div ref={div => { this.div = div; }}>
        get element position
      </div>
    )
  }
}

export default ElemPosition;