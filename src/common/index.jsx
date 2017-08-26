import React, { Component } from 'react';
import store, { injectAsyncReducer } from '../store';

export default (getComponent, getReducers) => {
    return class AsyncRoute extends Component {
        static Component = null;
        static ReducersLoaded = false;
        state = {
            Component: AsyncRoute.Component,
            ReducersLoaded: AsyncRoute.ReducersLoaded
        };

        componentWillMount() {
            const { Component, ReducersLoaded } = this.state;
            let shouldLoadReducers = !ReducersLoaded && getReducers;
            // if (!Component) {
            //     getComponent()
            //         .then(mod => (mod.default || mod))
            //         .then(Component => {
            //             AsyncRoute.Component = Component;
            //             if (this._mounted) {
            //                 this.setState({
            //                     Component
            //                 });
            //             }
            //             else {
            //                 this.state.Component = Component;
            //             }
            //         });
            // }
            if (shouldLoadReducers || !Component) {
                let component = getComponent();
                let reducer = getReducers();
                Promise.all([reducer, component]).then(res => {
                    injectAsyncReducer(store, 'first', res[0].default || res[0]);
                    if (this._mounted) {
                        this.setState({
                            Component: res[1].default || res[1],
                            ReducersLoaded: res[0].default || res[0]
                        });
                    }
                    else {
                        this.state.ReducersLoaded = res[0];
                        this.state.Component = res[1];
                    }
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