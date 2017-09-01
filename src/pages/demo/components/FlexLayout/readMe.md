# flex layout
        该属性指出了flex item如何伸(grow)缩(shrink)以撑满flex容器。flex是flex-grow,flex-shrink,flex-basis的缩写。
* 弹性容器属性(flex container)6个：

        flex-direction：设定主轴方向，决定了弹性元素排列的方向。row|row-reverse|column|column-reverse
        flex-wrap：控制容器是单行还是多行且定义侧轴方向。nowrap|wrap|wrap-reverse
        flex-flow：flex-direction和flex-wrap的简写。
        justify-content：弹性盒子对齐方式，将弹性元素沿容器主轴方向对齐。flex-start|flex-end|enter|space-between|space-around
        align-items：弹性元素对齐方式。设置弹性元素在容器侧轴的对齐方式。设置弹性盒子的所有子元素的对你方式，包括匿名弹性元素。元素可以单独设置align-self覆盖该元素。flex-start|flex-end|center|baseline|stretch
        align-content：设置容器内每行沿侧轴对齐方式。对单行无效。flex-start|flex-end|center|space-between|space-around|stretch
* 弹性元素属性(flex item)6个：

        order：定义项目的排列顺序，integer
        align-self：单独设置弹性元素在侧轴的对齐方式。auto|flex-start|flex-end|center|baseline|stretch
        flex-grow：增加因素
        flex-shrink：收缩因素
        flex-basis：设定弹性框伸缩的基准值，子元素的宽度？
        flex：flex-grow,flex-shrink,flex-basis缩写。
# 注意：
* 设置为flex之后，子元素的float,clear,vertical-align属性失效。
# float layout 浮动布局的问题
* 