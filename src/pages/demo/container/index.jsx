import * as React from 'react';
import { connect } from 'react-redux';
import * as Actions from '../actions';

function mapPropsToState(state, ownProps) {
  let { demo } = state;
  return { ...{ data: { data: "first" } }, ...demo };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    sendTest: () => dispatch(Actions.sendTest())
  }
}

class Demo extends React.Component {
  static defaultProps = {//会和Provider第一次传进来的数据合并之后，进行第一次渲染：provider提供默认值，使用provider提供的默认值；否者使用class自定义的
    data: {
      data: "default"
    }
  }
  _onSendTest = () => {
    let { sendTest } = this.props;
    sendTest();
  }

  render() {
    let { data } = this.props;
    return (
      <div>
        <button onClick={this._onSendTest}>
          sendTest
        </button>
        {'this is Demo world! +' + data.data}
      </div>
    )
  }
}

export default connect(mapPropsToState, mapDispatchToProps, null)(Demo);