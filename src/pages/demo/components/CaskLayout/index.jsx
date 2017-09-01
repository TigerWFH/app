import * as React from 'react';
import PropTypes from 'prop-types';
import * as css from './index.less';

class CaskLayout extends React.Component {
    constructor(props) {
        super(props);
        this.initialHeight = 200;
    }

    _renderImages = (imgList = []) => {
        let flexItemStyle = {

        }

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
                    <div className={css['flexItem2']}
                        style={{
                            flexBasis: this.initialHeight * (Math.random() + 1) + 'px'
                        }}>
                        <i style={{
                            display: 'block',
                            width: '100%',
                            paddingBottom: this.initialHeight,
                            backgroundColor: 'yellow'
                        }}></i>
                    </div>
                    <div className={css['flexItem2']}
                        style={{
                            flexBasis: this.initialHeight * (Math.random() + 1) + 'px'
                        }}>
                        <i style={{
                            display: 'block',
                            width: '100%',
                            paddingBottom: this.initialHeight,
                            backgroundColor: 'yellow'
                        }}></i>
                    </div>
                    <div className={css['flexItem2']}
                        style={{
                            flexBasis: this.initialHeight * (Math.random() + 1) + 'px'
                        }}>
                        <i style={{
                            display: 'block',
                            width: '100%',
                            paddingBottom: this.initialHeight,
                            backgroundColor: 'yellow'
                        }}></i>
                    </div>
                    <div className={css['flexItem2']}
                        style={{
                            flexBasis: this.initialHeight * (Math.random() + 1) + 'px'
                        }}>
                        <i style={{
                            display: 'block',
                            width: '100%',
                            paddingBottom: this.initialHeight,
                            backgroundColor: 'yellow'
                        }}></i>
                    </div>
                    <div className={css['flexItem2']}
                        style={{
                            flexBasis: this.initialHeight * (Math.random() + 1) + 'px'
                        }}>
                        <i style={{
                            display: 'block',
                            width: '100%',
                            paddingBottom: this.initialHeight,
                            backgroundColor: 'yellow'
                        }}></i>
                    </div>
                    <div className={css['flexItem2']}
                        style={{
                            flexBasis: this.initialHeight * (Math.random() + 1) + 'px'
                        }}>
                        <i style={{
                            display: 'block',
                            width: '100%',
                            paddingBottom: this.initialHeight,
                            backgroundColor: 'yellow'
                        }}></i>
                    </div>
                </section>
            </div>
        )
    }
}

CaskLayout.propTypes = {
    imgList: PropTypes.array.isRequired
};

export default CaskLayout