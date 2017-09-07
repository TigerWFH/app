import * as React from 'react';
import * as css from './inde.less';

class Stroke extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className={css['stroke']}>
            <div className={css['borderRadius1']}>
                无box-shadow,无outline
            </div>
            <div className={css['borderRadius2']}>
                无outline，outline就是描边
            </div>
            <div className={css['borderRadius3']}>
                无box-shadow
            </div>
            <div className={css['borderRadius4']}>
                boxshadow填充空白border不填充
            </div>
        </div>
    }
}

export default Stroke;