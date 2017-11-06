# flex layout
        该属性指出了flex item如何伸(grow)缩(shrink)以撑满flex容器。flex是flex-grow,flex-shrink,flex-basis的缩写。

# 对比新旧元素

* 弹性容器属性(flex container)新旧对比：
```
display: flex
justify-content：弹性盒子对齐方式，将弹性元素沿容器主轴方向对齐。flex-start|flex-end|enter|space-between|space-around
align-items：弹性元素对齐方式。设置弹性元素在容器侧轴的对齐方式。设置弹性盒子的所有子元素的对你方式，包括匿名弹性元素。元素可以单独设置align-self覆盖该元素。flex-start|flex-end|center|baseline|stretch
flex-direction：设定主轴方向，决定了弹性元素排列的方向。row|row-reverse|column|column-reverse
flex-wrap：控制容器是单行还是多行且定义侧轴方向。nowrap|wrap|wrap-reverse
flex-flow：flex-direction和flex-wrap的简写。       
align-content：设置容器内每行沿侧轴对齐方式。对单行无效。flex-start|flex-end|center|space-between|space-around|stretch

旧版语法(-webkit,-moz)
display: box,flexbox
box-pack：定义子元素主轴对齐方式，start | end | center | justify
box-align，定义子元素交叉轴对齐方式，start | end | center | baseline | stretch
box-direction，定义子元素的显示方向，normal | reverse | inherit
box-lines，定义当子元素超出了容器时，是否允许子元素换行，single | multiple
box-orient，定义了子元素是否应水平或垂直排列，horizontal | vertical | inline-axis | block-axis | inherit
```
* 弹性元素属性(flex item)：
```
新语法：
order：定义项目的排列顺序，integer
align-self：单独设置弹性元素在侧轴的对齐方式。auto|flex-start|flex-end|center|baseline|stretch
flex-grow：增加因素
flex-shrink：收缩因素
flex-basis：设定弹性框伸缩的基准值，子元素的宽度
flex：flex-grow,flex-shrink,flex-basis缩写

旧语法(-webkit,-moz)：
box-flex：定义是否允许当前子元素伸缩，--flex-grow
box-ordinal-group：定义元素的显示顺序，越小越考前，--order


```
# 兼容性写法
## flex
```
display: -webkit-box; /* OLD - iOS 6-, Safari 3.1-6 */ 
display: -moz-box; /* OLD - Firefox 19- (buggy but mostly works) */ 
display: -ms-flexbox; /* TWEENER - IE 10 */ 
display: -webkit-flex; /* NEW - Chrome */ 
display: flex; /* NEW, Spec - Opera 12.1, Firefox 20+ */
```
# box
```
box-orient: horizontal | vertical | inline-axis | block-axis;元素排列方向
box-direction: normal | reverse;

box-pack: start | end | center | justify;
box-align: start | end | center | baseline | stretch;
box-flex: flex-grow?;
box-ordinal-group: 展示位置;
box-lines:;

```
# flex
```
flex-direction: row | row-reverse | column | column-reverse;
flex-wrap: nowrap | wrap | wrap-reverse;
flex-flow: flex-direction和flex-wrap的简写;
justify-content: flex-start | flex-end | center | space-between | space-around;
align-items: flex-start | flex-end | center | baseline | stretch;
align-self: 类似align-items;
flex: 伸缩比例;
order:
```
# 注意：
* 设置为flex之后，子元素的float,clear,vertical-align属性失效。

[兼容性处理参考资料](http://www.cnblogs.com/yangjie-space/p/4856109.html)
# float layout 浮动布局的问题
* 