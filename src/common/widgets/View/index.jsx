// libs
import * as React from 'react';

import * as css from './index.less';

function View(props) {
    return <div className={css['view']}>
        {props.children}
    </div>
}

export default View;