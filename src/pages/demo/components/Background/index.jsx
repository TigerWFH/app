import * as React from 'react';
import * as css from './index.less';


class Background extends React.Component {
    constructor(props) {
        super(props);
    }

    setTest(name){
        this.testRef = name;
    }

    get test(){
        return this.testRef
    }

    componentDidMount(){
        this.test.name = 'monkey';
        console.log('test: %s', this.test);
        console.log('test.name: %s', this.test.name);
    }

    render() {
        return <div className={css['background']}>
            <div ref={ref => this.testRef = ref}>
                refrefreferf
            </div>
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
            <div className={css['five']}>
            </div>
            <div className={css['five1']}>
            </div>
            <div className={css['five2']}>
            </div>
            <div className={css['five3']}>
            </div>
        </div>
    }
}

export default Background;