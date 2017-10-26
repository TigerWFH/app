/**
 * 在touch事件中获取鼠标（点击）位置坐标：event.changedTouchs[0].clientX;
 * 且在react中的响应处理函数中，显式传入的event，是react的合成事件（一个代理对象）；
 * 内置的event也是一个对象，但不是react的合成事件。
 */ 
import * as React from 'react';

let isDebug = true;
class TouchTest extends React.Component{
  constructor(props){
    super(props);
  }

  _onTouchStart = (event)=>{
    this.touchStartX = event.changedTouches[0].clientX;
    if (isDebug){
      console.group('TouchStart:');
      console.log('event--->', event)
      console.log('event--->', event.changedTouches[0].clientX)
      console.log('event--->', event.nativeEvent.pageY)
    }
  }

  _onTouchMove = (event)=>{
    let result = event.changedTouches[0].clientX - this.touchStartX;
    if (result > 0){
      if (isDebug){
        console.group('TouchMove:');
        console.log('to right');
      }
    }
    else{
      console.log('to left');
    }

  }

  render(){
    return <div>
      <div onTouchStart={this._onTouchStart}
      onTouchMove={this._onTouchMove}>
      测试TouchMove
      <img src="http://10.0.76.101:9000/v1/beacon" 
      width={0}
      height={0} />
      </div>
    </div>
  }
}

export default TouchTest;