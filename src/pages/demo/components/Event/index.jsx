import * as React from 'react';

class EventCase extends React.Component {
    constructor(props) {
        super(props);
    }
    _onKeyDown = (event) => {
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
    render() {
        return <div>
            <input onKeyPress={this._onKeyPress}
                onKeyDown={this._onKeyDown}
                onKeyUp={this._onKeyUp} />
        </div>
    }
}

export default EventCase;