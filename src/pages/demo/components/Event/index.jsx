import * as React from 'react';

class EventCase extends React.Component {
    constructor(props) {
        super(props);
    }
    _onKeyDown = (event) => {
        console.log(Array.from(arguments))
        console.log('keyDown');
        console.log('keyCode:', event.keyCode);
    }
    _onKeyPress = (event) => {
        event.persist();
        console.log('keyPress');
        console.log('e--->', event.nativeEvent.keyCode);
        console.log('e.keyCode--->', event.key);
    }
    _onKeyUp = (event) => {
        console.log('keyUp');
        console.log('keyCode:', event.keyCode);
    }
    componentDidMount() {
        this.input.addEventListener('keydown', this._onKeyDown.bind("test"), false);
        this.input.addEventListener('keyup', this._onKeyUp, false);
        this.button.addEventListener('click', () => {
            console.log('change state');
            this.setState({
                s: false
            });
        });
    }

    shouldComponentUpdate(nextProps, nextState) {
        this.input.removeEventListener('keydown', null, false);
        this.button.removeEventListener('click', () => {

        }, false);
        return true;
    }

    componentWillUnmount() {
        this.input.removeEventListener('keydowm', () => {
        }, false);
    }
    render() {
        return <div>
            <button ref={button => this.button = button}>change</button>
            <input ref={input => this.input = input} />
            <iframe ref={iframe => this.iframe = iframe}></iframe>
        </div>
    }
}

export default EventCase;