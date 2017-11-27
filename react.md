# react中的context
* 什么是context

    react众所周知的传递数据方式就是单向的数据流，通过props和state组织数据从父容器一层一层的流向subtree；而context则是react的另一中数据流动方式，跨层传递数据，比如大部分页面都要用到的用户信息，就可以通过该属性传递。
* react库已经提供了context属性，可以通过this.context直接访问，但默认是空对象
```
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('react-default-context:', this.context);
    return (
      <div className={css["app"]}>
        {this.props.children}
      </div>
    )
  }
}
```
输出结果:

    1、react-default-context: {}
* `getChildContext`可以更新context内容，供子组件使用
```
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  getChildContext() {
    console.log('getChildContext: update context');
    return {
      router: {
        monkey: 'monkey'
      },
      monkey: 123
    }
  }

  render() {
    console.log('router-context:', this.context);
    return (
      <div className={css["app"]}>
        {this.props.children}
      </div>
    )
  }
}
```
输出结果：

    1、Uncaught Error: App.getChildContext(): childContextTypes must be defined in order to use getChildContext()

* 对你没看错`getChildContext`必须配合`childContextTypes`属性一起使用，react库才会调用`getChildContex`函数更新Context
`childContextTypes`定义了对应属性的类型，个人理解就是告诉react需要定义那些属性以及对应属性的类型
```
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  static childContextTypes = {
    router: PropTypes.object.isRequired,
    monkey: PropTypes.number.isRequired
  };
  getChildContext() {
    console.log('getChildContext: update context');
    return {
      router: {
        monkey: 'monkey'
      },
      monkey: 123
    }
  }

  render() {
    console.log('router-context:', this.context);
    return (
      <div className={css["app"]}>
        {this.props.children}
      </div>
    )
  }
}
```
输出结果就是：

    1、router-default-context: {}

    2、getChildContext: update context
* `getChildContext`函数会随着App组件state的更新而被多次调用，`getChildContext`改变的是子组件获取的context的值，而不是App自身获取的值
```
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  static childContextTypes = {
    router: PropTypes.object.isRequired,
    monkey: PropTypes.number.isRequired
  };
  getChildContext() {
    console.log('update context------------');
    return {
      router: {
        monkey: 'monkey'
      },
      monkey: 123
    }
  }

    componentDidMount(){
    this.setState({
      test: 1
    })
  }

  render() {
    console.log('router-context:', this.context);
    return (
      <div className={css["app"]}>
        {this.props.children}
      </div>
    )
  }
}
```
输出结果：

    1、router-default-context: {}

    2、getChildContext: update context

    3、 update state...

    4、router-default-context: {}

    5、getChildContext: update context

* subtree获取context值，直接定义子组件的`contextTypes`属性，即可通过this.context获取父级组件设定的context值，`注意：`类型要和父组件中的定义保持一致，否者会输出警告信息；如果没有`contextTypes`，则context是一个空对象
```
<!-- 一般组件 -->
class Child extends React.Component {
    constructor(props){
        super(props);
    }

    static contextTypes = {
        router: PropTypes.object.isRequired,
        monkey: PropTypes.number.isRequired
    }
    render(){
        console.log('child context: ', this.context);
        return (
            <div>
            Child
            </div>
        )
    }
}
<!-- 无状态组件 -->
function App1(props, context) {
  console.log('child context-->', context)
  return (
    <div className={css["app"]}>
      {props.children}
    </div>
  )
}

App1.contextTypes = {
  router: PropTypes.object,
  monkey: PropTypes.number
};
```
输出结果：

一般组件：

    1、router-default-context: {}

    2、getChildContext: update context

    3、child context: {
        monkey: 123,
        router: {
            monkey: "monkey"
        }
    }

    4、 update state...

    5、router-default-context: {}

    6、getChildContext: update context

    7、child context: {
        monkey: 123,
        router: {
            monkey: "monkey"
        }
    }

无状态组件：

    1、router-default-context: {}

    2、getChildContext: update context

    3、child context: {
        monkey: 123,
        router: {
            monkey: "monkey"
        }
    }

    4、 update state...

    5、router-default-context: {}

    6、getChildContext: update context

    7、child context: {
        monkey: 123,
        router: {
            monkey: "monkey"
        }
    }
* 总结：

    1、react库默认提供了一个空的context对象

    2、容器组件通过`getChildContext`配合`childContextTypes`属性可以修改context对象；

    而且随着容器组件state的更新，`getChildContext`会被多次调用。

    `问题`：state的更新和context的更新可能产生的逻辑问题，需要优化的点
    
    3、组件(准确的说是对应容器的subtree)只有定义了对应的`contextTypes`属性，才能通过this.context访问对应的context值。
* 测试代码
```
import * as React from 'react';
import PropTypes from 'prop-types';
import * as ReactDOM from 'react-dom';


function Child(props, context) {
  console.log('child context-->', context)
  return (
    <div className={css["app"]}>
      {props.children}
    </div>
  )
}

Child.contextTypes = {
  router: PropTypes.object,
  monkey: PropTypes.number
};

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  static childContextTypes = {
    router: PropTypes.object.isRequired,
    monkey: PropTypes.number.isRequired
  };

  getChildContext() {
    console.log('getChildContext: update context');
    return {
      router: {
        monkey: 'monkey'
      },
      monkey: 123
    }
  }

  componentDidMount(){
    console.log('update state...');
    this.setState({
      test: 1
    })
  }

  render() {
    console.log('router-default-context: ', this.context);
    return (
      <div className={css["app"]}>
        {this.props.children}
      </div>
    )
  }
}

let elem =
  <App>
    <Child></Child>
    div
  </App>


ReactDOM.render(elem, document.getElementById('main'));
```

[官网资料](https://reactjs.org/docs/context.html)
# react的生命周期
```
class MyApp extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      test: 0
    };
  }
  state = {
    test: 1
  };

  componentWillMount(){
    console.group('声明周期:');
    console.log('componentWillMount');
  }
  componentDidMount(){
    console.log('componentDidMount');
  }
  componentWillReceiveProps(nextProps){
    console.log('componentWillReceiveProps');
  }

  shouldComponentUpdate(nextprops, nextstate){
    console.log('shouldComponentUpdate');
    return true;
  }

  componentWillUpdate(){
    console.log('componentWillComponent');
  }
  componentDidUpdate(){
    console.log('componentDidComponent');
  }
  componentWillUnmount(){
    console.log('componentWillUnmount');
  }

  onClick = ()=>{
    this.setState({
      test: 1
    });
  }

  render(){
    return (
      <div>
        <button onClick={this.onClick}>
          setState
        </button>
        {'MyApp:' + this.state.test}
      </div>
    )
  }
}

let elem = <MyApp></MyApp>

ReactDOM.render(elem, document.getElementById('main'));
```

`总结：`

  1、首次触发顺序：constructor-->componentWillMount-->render-->componentDidMount-->componentWillUnmount

  2、父组件传递props：componentWillReceiveProps(容器组件传递props触发)-->shouldComponentUpdate(setState触发)-->componentWillUpdate-->render-->componentDidUpdate-->componentWillUnmount

  3、Provider(包括初始化的store)并未触发componentWillReceiveProps和shouldComponentUpdate
  
  4、Router并未触发componentWillReceiveProps和shouldComponentUpdate

  5、只有注入的props属性发生变化，才会触发componentWillReceiveProps

  6、setState会触发shouldComponentUpdate
  
  `注意`：constructor函数中的this.state的优先级低于class中的state赋值，个人感觉：这现象和对象初始化时，constructor是第一个被调用的函数有点小冲突即
  ```
  class App extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        name: 'monkey'
      };
    }
    state = {
      name: 'cat'
    }
    render(){
      return (
        <div>
        {this.state.name}
        </div>
      )
    }
  }
  结果输出是:monkey
  ```
