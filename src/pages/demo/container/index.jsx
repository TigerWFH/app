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
  static defaultProps = {//会和Provider第一次传进来的数据合并之后，进行第一次渲染：provider提供默认值，使用provider提供的默认值；否者使用class自定义的
    data: "default"
  }
  _onSendTest = (e) => {
    let { sendTest } = this.props;
    e.stopPropagation();
    alert('button')
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
    return (
      <View>
        <div onScroll={this._onScrollF}
          className={css["scrollWrapper"]}>
          滚动askadfkafkaskllkfjlsafjlsakflsadkfsakfksafjasd
          <div onScroll={this._onScroll}
            className={css["scroll"]}>
            child contentaasfdsadfasfasfasfasfdsaf
          </div>
        </div>
        <div onClick={() => {
          alert(); 123
        }}>
          <button onClick={this._onSendTest}>
            sendTest
          </button>
          {'this is Demo world! +' + data}
        </div>
      </View>
    )
  }
}

Demo.propTypes = {
  sendTest: PropTypes.func,
  data: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object])
};

export default connect(mapPropsToState, mapDispatchToProps, null)(Demo);