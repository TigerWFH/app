import * as React from 'react';
import * as css from './index.less';


class CssStyle extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={css['cssStyle']}>
                <div style={{ border: "1px solid yellow" }}>
                    <h3>css实现</h3>
                    <div className={css['tangle']}>
                    </div>
                    <div className={css['tangle1']}>
                    </div>
                    <div className={css['tangle2']}>
                    </div>
                    <div className={css['tangle3']}>
                    </div>
                </div>
            </div>
        )
    }
}

export default CssStyle;