import * as React from 'react';
import PropTypes from 'prop-types';
import * as css from './index.less';

class CaskLayout extends React.Component {
    constructor(props) {
        super(props);
        this.initialHeight = 200;
        this.random = [];
        for (let i = 0; i < 10; i++) {
            this.random.push(Math.random() + 1);
        }
        // this.grow = this.random.map(value => {
        //     let sum = this.random.reduce((pre, cur) => {
        //         return pre + cur;
        //     });
        //     return value / sum;
        // });
    }

    _renderImages = (imgList = []) => {
        let flexItemStyle = {

        }

    }
    _renderCaskLayout = () => {
        let elemList = [];
        for (let i = 0; i < 10; i++) {
            let style = {
                flexBasis: this.initialHeight * this.random[i] + 'px',
                flexGrow: 1
            };
            let childStyle = {
                paddingBottom: this.initialHeight,
            };
            let elem = <div className={css['flexItem2']}
                style={style}
                key={'flexItem-' + i}>
                <i className={css['flexItemChild2']}
                    style={childStyle}>
                </i>
            </div>
            elemList.push(elem);
        }
        /*添加占位符*/
        for (let i = 0; i < 10; i++) {
            let elem
        }

        return elemList;
    }
    render() {
        return (
            <div className={css['caskLayout']}>
                <section className={css['container']}>
                    <div className={css['flexItem']}>
                        <i className={css['flexItemChild']}></i>
                        <div className={css['flexContent']}>1</div>
                    </div>
                    <div className={css['flexItem']}>
                        <i className={css['flexItemChild']}></i>
                        <div className={css['flexContent']}>2</div>
                    </div>
                    <div className={css['flexItem']}>
                        <i className={css['flexItemChild']}></i>
                        <div className={css['flexContent']}>3</div>
                    </div>
                </section>
                <section className={css['container']}>
                    {this._renderCaskLayout()}
                </section>
            </div>
        )
    }
}

CaskLayout.propTypes = {
    imgList: PropTypes.array.isRequired
};

export default CaskLayout