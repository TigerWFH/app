import * as React from 'react';
import * as css from './index.less';


class FlexLayout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className={css['flexLayout']}>
            <div className={css['item']}>
                flex item
            </div>
            <div className={css['item']}>
                flex item
            </div>
            <div className={css['item']}>
                flex item
            </div>
        </div>
    }
}

export default FlexLayout;