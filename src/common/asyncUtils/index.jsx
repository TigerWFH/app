import React, { Component } from 'react';
import store from '../../store';
import createReducers from '../../reducer';


/**
 * @desc 为延迟加载的module注入reducer
 * @param {*} store 全局store
 * @param {*} name reducer名或reducer map
 * @param {*} asyncReducer reducer
 */
export function injectAsyncReducer(store, name, asyncReducer) {
    if (typeof name === 'string' && typeof asyncReducer === 'function') {
        store.asyncReducers[name] = asyncReducer;
    }
    if (Object.prototype.toString.call(name) === '[object Object]') {
        store.asyncReducers = name;
    }
    store.replaceReducer(createReducers(store.asyncReducers));
}

/**
 * @desc 创建动态路由
 * @getComponent {function} 获取组件
 * @reducerName  {string | object} reducer名字或者是一个reducermap
 * @getReducers  {function} 异步加载的reducers
 */ 
export default (getComponent, reducerName, getReducers) => {
    return class AsyncRoute extends Component {
        static Component = null;
        static ReducersLoaded = false;
        state = {
            Component: AsyncRoute.Component,
            ReducersLoaded: AsyncRoute.ReducersLoaded
        };
        _module(mod) {
            if (!mod) {
                return null;
            }
            return mod.default || mod;
        }
        componentWillMount() {
            const { Component, ReducersLoaded } = this.state;
            let shouldLoadReducers = !ReducersLoaded && getReducers;
            if (shouldLoadReducers || !Component) {
                let component = getComponent && getComponent();
                let reducers = getReducers && getReducers();
                Promise.all([component, reducers]).then(res => {
                    if (Object.prototype.toString.call(reducerName) === '[object Object]') {
                        injectAsyncReducer(store, reducerName);
                    }
                    else if (this._module(res[1])) {
                        injectAsyncReducer(store, reducerName, this._module(res[1]));
                    }

                    if (this._mounted) {
                        if (this._module(res[1]) && this._module(res[0])) {
                            this.setState({
                                Component: this._module(res[0]),
                                ReducersLoaded: true
                            });
                        }
                        else {
                            this.setState({
                                Component: this._module(res[0]),
                            });
                        }
                    }
                    else {
                        if (this._module(res[1]) && this._module(res[0])) {
                            this.state.ReducersLoaded = true;
                            this.state.Component = this._module(res[0]);
                        }
                        else {
                            this.state.Component = this._module(res[0]);
                        }
                        
                    }
                }).catch(err => {
                    console.log("aysncRouter--->", err);
                });
            }
        }
        componentDidMount() {
            this._mounted = true;
        }
        
        render() {
            const { Component } = this.state;
            return Component ? <Component {...this.props} /> : null;
        }
    }
}