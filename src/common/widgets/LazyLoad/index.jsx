/**
 * @title:      less
 * @author:     Monkey
 * @email:      334080374@qq.com
 * @date:       2017-10-18
 * @modify Date: 
 * @more:      
 *          1、window.getComputedStyle
 *          2、IntersectionObserver API:用来监控DOM元素是否进入可视区域
 */
import * as React from 'react';

let isDbug = true;

class LazyLoad extends React.Component{
  constructor(props){
    super(props);
    this.scrollParent = null;
    this.scrollTop = 0;
  }
  componentDidMount(){
    this.scrollParent = window.document;
    if (this.scrollParent !== null){
      this.scrollParent.addEventListener('scroll', this._onHandleScroll);
      if (isDbug){
        console.log('add scroll event...');
      }
    }
  }
  componentWillUnmount(){
    if (isDbug){
      console.log('willUnmount');
    }
    if (this.scrollParent){
      this.scrollParent.removeEventListener('scroll', this._onHandleScroll);
      this.scrollParent = null;
    }
  }
  _onHandleScroll(){
    if (isDbug){
      console.log('--->handlescroll');
    }
  }
  /**
   * @desc 获取最近的具有overflow:scroll/auto属性的父容器
   * @elem DOM元素
   */ 
  _getScrollParent(elem){

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