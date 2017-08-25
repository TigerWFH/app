import React, { Component } from 'react';

export default (getComponent) => {
    return class AsyncRoute extends Component {
        static Component = null;
        state = {
            Component: AsyncRoute.Component
        };

        componentWillMount() {
            const { Component } = this.state;
            if (!Component) {
                getComponent()
                    .then(mod => (mod.default || mod))
                    .then(Component => {
                        AsyncRoute.Component = Component;
                        if (this._mounted) {
                            this.setState({
                                Component
                            });
                        }
                        else {
                            this.state.Component = Component;
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