/**
 * @name:      LazyLoad
 * @author:     Monkey
 * @email:      334080374@qq.com
 * @date:       2017-10-18
 * @modify Date:2017-10-27
 * @more:      
 *          1、window.getComputedStyle
 *          2、IntersectionObserver API:用来监控DOM元素是否进入可视区域
 */
import * as React from 'react';

let isDbug = true;

class LazyLoad extends React.Component{
  constructor(props){
    super(props);
    this.window = null;
    this.scrollTop = 0;
  }
  componentDidMount(){
    this.window = window;
    if (this.window !== null){
      this.window.addEventListener('scroll', this._onHandleScroll);
      // let this.window.clientInformation();
      if (isDbug){
        console.log('add scroll event...');
        console.log('scrollTop--->', this.scrollTop);
      }
    }
  }
  componentWillUnmount(){
    if (isDbug){
      console.log('willUnmount');
    }
    if (this.window){
      this.window.removeEventListener('scroll', this._onHandleScroll);
      this.window = null;
    }
  }
  _onHandleScroll(){
    let currScrollTop = this.window.screenTop;
    if (isDbug){
      console.log('--->handlescroll');
      console.log('scroll--->', currScrollTop);
    }
  }
  render(){
    return <div id="test"
    style={{height: "10px", overflowY: 'scroll'}}>
      lazyload
      lazyload
      lazyload
      lazyload
      lazyload
      lazyload
      lazyload
      lazyload
      lazyload
      lazyload
      lazyload
      lazyload
    </div>
  }
}

export default LazyLoad;