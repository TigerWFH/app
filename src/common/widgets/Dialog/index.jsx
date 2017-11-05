/**
 * @name:       Dialog
 * @author:     Monkey
 * @email:      334080374@qq.com
 * @date:       2017-10-27
 * @modify Date:
 * @function:   
 */

import * as React from 'react';
import PropTypes from 'prop-types';
import * as css from './index.less';


class Dialog extends React.Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        className: PropTypes.string,
        style: PropTypes.object,
        content: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    };

    render() {
        return (
            <div className={css['dialog']}>
                <div className={css['content']}>
                    Dialog
                </div>
            </div>
        )
    }
}

export default Dialog;