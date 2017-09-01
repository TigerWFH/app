import * as React from 'react';
import * as css from './index.less';


class FlexLayout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <div style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
                <h3>flex布局默认值</h3>
                <div className={css['flexLayoutDefault']}>
                    <div className={css['itemDefault']}>
                        flex item1-row测试
                    </div>
                    <div className={css['itemDefault']}>
                        flex item2-row阿三库萨克拉上来看
                    </div>
                    <div className={css['itemDefault']}>
                        flex item3-row啊水电费
                    </div>
                    <div className={css['itemDefault']}>
                        flex item4-row啊是大事范德萨发撒发撒发撒辐射大范德萨
                    </div>
                    <div className={css['itemDefault']}>
                        flex item5-row阿三发送发送发
                    </div>
                    <div className={css['itemDefault']}>
                        flex item6-rowas
                    </div>
                    <div className={css['itemDefault']}>
                        flex item7-rowas安师大发水电费
                    </div>
                    <div className={css['itemDefault']}>
                        flex item8-row
                    </div>
                    <div className={css['itemDefault']}>
                        flex item9-row啊沙发舒服撒疯疯傻傻发发撒发舒服撒发顺丰
                    </div>
                </div>
            </div>
            <div style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
                <h3>flex-direction属性</h3>
                {/* row-reverse */}
                <div className={css['flexLayout1']}>
                    <div className={css['itemDefault']}>
                        flex item1-rowReverse
                    </div>
                    <div className={css['itemDefault']}>
                        flex item2-rowReverse
                    </div>
                    <div className={css['itemDefault']}>
                        flex item3-rowReverse
                    </div>
                </div>
                {/* column */}
                <div className={css['flexLayout2']}>
                    <div className={css['itemDefault']}>
                        flex item1-rowReverse
                    </div>
                    <div className={css['itemDefault']}>
                        flex item2-rowReverse
                    </div>
                    <div className={css['itemDefault']}>
                        flex item3-rowReverse
                    </div>
                </div>
                {/* column-reverse */}
                <div className={css['flexLayout3']}>
                    <div className={css['itemDefault']}>
                        flex item1-rowReverse
                    </div>
                    <div className={css['itemDefault']}>
                        flex item2-rowReverse
                    </div>
                    <div className={css['itemDefault']}>
                        flex item3-rowReverse
                    </div>
                </div>
            </div>
        </div>
    }
}

export default FlexLayout;