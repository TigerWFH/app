/**
 * @title:      demo index
 * @author:     Monkey
 * @email:      334080374@qq.com
 * @date:       2017-8-23
 * @modify Date: 
 */

//  libs
import * as React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as Actions from '../actions';
import * as css from './index.less';
import View from '../../../common/widgets/View';
import Zoom from '../../../common/widgets/Zoom';
import Toast from '../../../common/widgets/Toast';
import LazyLoad from '../../../common/widgets/LazyLoad';
import Canvas from '../components/Canvas';
import FlexLayout from '../components/FlexLayout';
import CssStyle from '../components/CssStyle';
import CaskLayout from '../components/CaskLayout';
import Stroke from '../components/Stroke';
import Background from '../components/Background';
import EventCase from '../components/Event';
import TouchTest from '../components/TouchTest';

function mapPropsToState(state, ownProps) {
  let { demo } = state;
  return { ...demo };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    sendTest: () => dispatch(Actions.sendTest())
  }
}

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.demos = new Map([['demo1', false],
    ['demo2', false],
    ['demo3', false],
    ['demo4', true],
    ['demo5', true],
    ['demo6', true],
    ['demo7', true],
    ['demo8', true]]);
  }
  static defaultProps = {//会和Provider第一次传进来的数据合并之后，进行第一次渲染：provider提供默认值，使用provider提供的默认值；否者使用class自定义的
    data: "default"
  }
  _onSendTest = (e) => {
    let { sendTest } = this.props;
    sendTest();
  }

  _onScrollF = (e) => {
    e.preventDefault();
  }

  _onScroll(e) {
    e.stopPropagation();
  }
  _onTestToast = ()=>{
    Toast.showToast('info', {content: "showToast"});
  }
  render() {
    let { data } = this.props;
    let demos = this.demos;
    return (
      <View>
        <fieldset style={{ display: demos.get('demo8') ? 'block' : 'none' }}>
          <legend className={css['legendSecond']}>
            EventCase
          </legend>
          <button onClick={this._onTestToast}>
            btn
          </button>
          <EventCase />
          <Zoom />
          <LazyLoad />
          <TouchTest></TouchTest>
        </fieldset>
        <fieldset style={{ display: demos.get('demo7') ? 'block' : 'none' }}>
          <legend className={css['legendFirst']}>
            Background
          </legend>
          <Background />
        </fieldset>
        <fieldset className={css['fieldsetSecond']}
        style={{ display: demos.get('demo6') ? 'block' : 'none' }}>
          <legend className={css['legendSecond']}>
            Stroke
          </legend>
          <Stroke />
        </fieldset>
        <fieldset className={css['fieldsetFirst']}
          style={{ display: demos.get('demo5') ? 'block' : 'none' }}>
          <legend className={css['legendFirst']}>
            CaskLayout
          </legend>
          <CaskLayout imgList={[]}/>
        </fieldset>
        <fieldset className={css['fieldsetSecond']}
          style={{ display: demos.get('demo4') ? 'block' : 'none' }}>
          <legend className={css['legendSecond']}>
            Css Style
          </legend>
          <CssStyle />
        </fieldset>
        <fieldset className={css['fieldsetFirst']}
          style={{ display: demos.get('demo3') ? 'block' : 'none' }}>
          <legend className={css['legendFirst']}>
            FlexLayout
          </legend>
          <FlexLayout />
        </fieldset>
        <fieldset className={css['fieldsetSecond']}
          style={{ display: demos.get('demo2') ? 'block' : 'none' }}>
          <legend className={css['legendSecond']}>
            Canvas
          </legend>
          <Canvas />
        </fieldset>
        <fieldset className={css['fieldsetFirst']}
          style={{ display: demos.get('demo1') ? 'block' : 'none' }}>
          <legend className={css['legendFirst']}>
            Demo1
          </legend>
          <button className={css['btn']}
            onClick={this._onSendTest}>
            sendTest
          </button>
          {'this is Demo world! +' + data}
        </fieldset>
      </View>
    )
  }
}

Demo.propTypes = {
  sendTest: PropTypes.func,
  data: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object])
};

export default connect(mapPropsToState, mapDispatchToProps, null)(Demo);