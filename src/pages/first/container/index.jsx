/**
 * @title:      First index
 * @author:     Monkey
 * @email:      334080374@qq.com
 * @date:       2017-8-23
 * @modify Date: 
 */
// libs
import * as React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as Actions from '../actions';
import * as css from './index.less';
// component
import DataFlow from '../components/DataFlow';
import Image from '../components/Image';
import ElemPosition from '../components/ElemPosition';

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
                <fieldset>
                    <legend>
                        Demo1
                    </legend>
                    <DataFlow data={data}
                        getFirstData={getFirstData} />
                </fieldset>
                <fieldset>
                    <legend>
                        Demo2
                    </legend>
                    <Image style={{ height: '720px',display: 'block' }}
                        img={require('../../../common/res/images/web.png')} />
                </fieldset>
                <fieldset>
                    <legend>
                        Demo3
                    </legend>
                    <ElemPosition />
                </fieldset>
            </div>
        )
    }
}

First.propTypes = {
    data: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
    getFirstData: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps, null)(First);