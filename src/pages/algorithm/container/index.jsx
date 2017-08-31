/**
 * @title:      algorithm index
 * @author:     Monkey
 * @email:      334080374@qq.com
 * @date:       2017-8-31
 * @modify Date: 
 */

import * as React from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state, ownProps) {
    return state;
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
    }
}

class Algorithm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2>Algorithm</h2>
            </div>
        )
    }
}

// export default connect(mapStateToProps, mapDispatchToProps, null)(Algorithm);
export default Algorithm;