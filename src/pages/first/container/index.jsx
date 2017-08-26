import * as React from 'react';
import { connect } from 'react-redux';
import * as Actions from '../actions';

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
    _onGetData = () => {
        let { getFirstData } = this.props;
        getFirstData();
    }
    render() {
        let { data } = this.props;
        return (
            <div>
                <button onClick={this._onGetData}>
                    getFirstData
                </button>
                {'this is First World!' + data}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps, null)(First);