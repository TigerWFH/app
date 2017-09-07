import * as React from 'react';
import * as css from './index.less';


class Background extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return <div className={css['background']}>
            <div className={css['first']}>
            </div>
            <div className={css['first1']}>
            </div>
            <div className={css['second']}>
            </div>
            <div className={css['third']}>
            </div>
            <div className={css['third1']}>
            </div>
            <div className={css['third2']}>
            </div>
            <div className={css['four']}>
            </div>
            <div className={css['four1']}>
            </div>
        </div>
    }
}

export default Background;