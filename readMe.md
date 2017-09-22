* 版权声明： 所有内容-自由转载-非商用-非衍生-保持署名[创意共享3.0许可证](https://creativecommons.org/licenses/by-nc-nd/3.0/deed.zh)-代码遵循[MIT许可协议](https://mit-license.org/)
* 邮箱：334080374@qq.com
* 创建日期：2017-8-23
* 社交媒体：[![twitter](./src/common/res/images/twitter.png)twitter](https://twitter.com)[![weobo](./src/common/res/images/weibo.png)weibo](http://weibo.com/2630232391/profile?topnav=1&wvr=6)
# js前端自动化工程

## react-router 4.0

* Router(low-level)
* HashRouter(high-level)
* BrowserRouter(high-level)
* MemoryRouter(high-level)
* NativeRouter(high-level)
* StaticRouter(high-level)
## react-loadable(高阶组件，用于动态载入组件，会处理大部分极端情况)   
## [redux](http://redux.js.org/docs/api/index.html)
* Top-level api

        createStore(reducer, [preloadedState], [enhancer]);
        combineReducers(reducers);
        applyMiddleware(...middlewares);
        bindActionCreators(actionCreators, dispatch);
        compose(...functions);
* Store API

        getState()
        dispatch(action)
        subscribe(listener)
        replaceReducer(nextReducer)
## [开源协议](http://www.oschina.net/news/74999/how-to-choose-a-license)
* LGPL,Lesser General Public License（较宽松公共许可证）,
        Library General Public License（函数库公共许可证）,适用自由软件基金会（FSF，Free Software Foundation）
* GPL
* MPL,The Mozilla Public License,是Netscape的Mozilla小组为其开源软件项目设计的软件许可证。
* BSD
* MIT
* Apache
## 组件化

        写在前面的话，技术的改革是为了提高生产效率。
        提高效率面临的问题：
        1、解决协同开发的问题，提高代码的内聚性，降低耦合性。（模块化、组件化、文档化、版本控制、代码合并）
        2、合理的组织代码结构，提高代码的可读性和维护性。
        3、独立发布，降低项目之间的依赖
* [Web Component是什么？它为什么对我们这么重要？](http://www.html-js.com/article/2779)

        文章里面有一句话：
        WebComponents是通过一种标准化的非侵入的方式封装一个组件，每个组件能组织好它自身的HTML结构、
        CSS样式、JavaScript代码，并且不会干扰页面上的其他代码。

        我的理解：组件化就是为了更好更安全的使用已存在的代码。
* 什么是组件？---把图形、非图形的各种逻辑均抽象为一个统一的概念（组件）__[知乎，张立理](https://www.zhihu.com/question/29735633)
        
        我的疑问：
                1、组件化是为了重用代码吗？
                  http://www.html-js.com/article/2779这篇文章佐证了web component就是为了提高代码的可重用行。
                  如果要重用代码，真正的组件会封装各种业务逻辑吗？如果封装了业务逻辑，还能重用嘛？
                2、组件主要是为了提高代码的内聚性，降低代码耦合性吗？
                  如果是提高内聚性，降低耦合行，js的模块化不是已经解决了该问题（即解决了协作的问题）吗？

        我的理解：组件就是一组可重用代码。
* 为什么要组件?
        
![component](./src/common/res/images/component.png)

        统一组件引入标准、减少轮子、降低引入风险

* 什么是组件化开发？---把图形、非图形的各种逻辑抽象为一个统一的概念（组件）来实现开发的模式。__[知乎，张立理](https://www.zhihu.com/question/29735633)

* [组件、控件、插件](http://blog.csdn.net/haiross/article/details/22662635)
## 第一次异步数据接通的思考：

    reducers直接配置到rootReducer，并未进行code splitting，只有UI部分进行了 code splitting。
    
    思考：如何将对应的reducers进行code splitting。
# test for git log
# 建立新分支monkey_mm
# test for git rebase
# feature-addlog
# feature-add1
# feature-add2
# feature-add3
# feature-add4

        二十加冠，
        三十而立，
        四十不惑，
        五十知天命，
        六十耳顺，
        七十古稀，
        八十、九十耄耋，
        一百期颐
