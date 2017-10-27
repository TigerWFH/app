# flex layout
        该属性指出了flex item如何伸(grow)缩(shrink)以撑满flex容器。flex是flex-grow,flex-shrink,flex-basis的缩写。
* 弹性容器属性(flex container)6个：

        1、justify-content：弹性盒子对齐方式，将弹性元素沿容器主轴方向对齐。flex-start|flex-end|enter|space-between|space-around

        2、align-items：弹性元素对齐方式。设置弹性元素在容器侧轴的对齐方式。设置弹性盒子的所有子元素的对你方式，包括匿名弹性元素。元素可以单独设置align-self覆盖该元素。flex-start|flex-end|center|baseline|stretch

        3、flex-direction：设定主轴方向，决定了弹性元素排列的方向。row|row-reverse|column|column-reverse

        5、flex-wrap：控制容器是单行还是多行且定义侧轴方向。nowrap|wrap|wrap-reverse

        flex-flow：flex-direction和flex-wrap的简写。
        
        
        align-content：设置容器内每行沿侧轴对齐方式。对单行无效。flex-start|flex-end|center|space-between|space-around|stretch
* 弹性元素属性(flex item)6个：

        order：定义项目的排列顺序，integer
        align-self：单独设置弹性元素在侧轴的对齐方式。auto|flex-start|flex-end|center|baseline|stretch
        flex-grow：增加因素
        flex-shrink：收缩因素
        flex-basis：设定弹性框伸缩的基准值，子元素的宽度？
        flex：flex-grow,flex-shrink,flex-basis缩写。
# 兼容性
## flex
```
display: -webkit-box; /* OLD - iOS 6-, Safari 3.1-6 */ 
display: -moz-box; /* OLD - Firefox 19- (buggy but mostly works) */ 
display: -ms-flexbox; /* TWEENER - IE 10 */ 
display: -webkit-flex; /* NEW - Chrome */ 
display: flex; /* NEW, Spec - Opera 12.1, Firefox 20+ */著作权归作者所有。
商业转载请联系作者获得授权,非商业转载请注明出处。
原文: http://www.w3cplus.com/css3/using-flexbox.html © w3cplus.com
```
## 旧语法，容器属性（5）
* 1、box-pack属性，定义子元素主轴对齐方式，start | end | center | justify
```
-webkit-box-pack:
-moz-box-pack:
```
* 2、box-align属性，定义子元素交叉轴对齐方式，start | end | center | baseline | stretch
```
-webkit-box-align:
-moz-box-align:
```
* 3、box-direction属性，定义子元素的显示方向，normal | reverse | inherit
```
-moz-box-direction:
-webkit-box-direction:
```
* 4、box-orient属性，定义了子元素是否应水平或垂直排列，horizontal | vertical | inline-axis | block-axis | inherit
```
-moz-box-orient:
-webkit-box-orient:
```
* 5、box-lines属性，定义当子元素超出了容器时，是否允许子元素换行，single | multiple
```
-moz-box-lines:
-webkit-box-lines:
```
## 旧语法、元素属性
* box-flex
```
```
* box-ordinal-group 定义子元素的显示次序，数值越小越排前
# 注意：
* 设置为flex之后，子元素的float,clear,vertical-align属性失效。

[兼容性处理参考资料](http://www.cnblogs.com/yangjie-space/p/4856109.html)
# float layout 浮动布局的问题
* 