import * as React from 'react';
import { connect } from 'react-redux';
import * as Actions from '../actions';
import * as css from './index.less';

import DataFlow from '../components/DataFlow';
import Image from '../components/Image';
import img from '../../../common/res/images/web.png'
function mapStateToProps(state, ownProps) {
    let { first } = state;
    return first || {};
}
function mapDispatchToProps(dispatch, ownProps) {
    return {
        getFirstData: () => dispatch(Actions.getFirstData())
    };
}
class First extends React.Component {
    render() {
        let { data, getFirstData } = this.props;
        return (
            <div className={css["first"]}>
                <DataFlow data={data}
                    getFirstData={getFirstData} />
                <Image img={require('../../../common/res/images/web.png')} />
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps, null)(First);