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
import View from '../../../common/widgets/view';

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
    this.demos = new Map([['demo1', true]]);
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
  render() {
    let { data } = this.props;
    let demos = this.demos;
    return (
      <View>
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