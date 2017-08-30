# js前端自动化工程
# react-router 4.0

* Router(low-level)
* HashRouter(high-level)
* BrowserRouter(high-level)
* MemoryRouter(high-level)
* NativeRouter(high-level)
* StaticRouter(high-level)

## react-loadable(高阶组件，用于动态载入组件，会处理大部分极端情况)   

## 第一次异步数据接通的思考：

    reducers直接配置到rootReducer，并未进行code splitting，只有UI部分进行了 code splitting。
    
    思考：如何将对应的reducers进行code splitting。
## 元素的宽高
* client***系列：`content+padding+css width(标准盒模型情况下)`

        clientWidth：
        clientHeight：
        clientTop：
        clientLeft：the width of the left border of an element in pixels
* offset***系列：`content+padding+scrollbar+css width（标准盒模型情况下）`

        offsetWidth：HTMLElement.offWidth read-only property is a measurement which includes the element borders,horizontal padding,the element vertical scrollbar(if present,if rendered) and the css width.
        offsetHeight：HTMLElement.offsetHeight read-only property is the height of the element including vertical padding,borders and the element horizontal scrollbar(if present,if rendered), as an integer.
        offsetParent：positioned：返回最近定位元素的引用；non-positioned： 返回table,table-cell,html(标准模式),body(怪异模式),null(display:none)
        offsetTop：返回当前元素相对于offsetParent顶部的距离
        offsetLeft：返回当前元素相对于offsetParent左边的距离
* scroll***系列：`is a measurement of the height of an elements content including content not visible on the screen due to overflow`

        scrollWidth：
        scrollHeight：
        scrollTop：
        scrollLeft：
* getBoundingClientRect()
* getClientRect()