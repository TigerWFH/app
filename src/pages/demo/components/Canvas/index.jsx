import * as React from 'react';
import PropTypes from 'prop-types';

class Canvas extends React.Component {
    constructor(props) {
        super(props);
        this.canvas = '';
    }

    componentDidMount() {
        if (this.canvas !== '' && this.canvas.getContext) {
            let context = this.canvas.getContext('2d');
            context.fillStyle = 'rgb(200, 0, 0)';
            context.fillRect(10, 10, 55, 50);
            context.fillStyle = "rgba(0, 0, 200, 0.5)";
            context.fillRect(30, 30, 55, 50);
        }
        else {
            console.error('the browser do not support canvas!');
        }
    }

    render() {
        return <canvas ref={(canvas) => { this.canvas = canvas; }}
            width={this.props.width || '500px'}
            height={this.props.height || '300px'} >
        </canvas>
    }
}

Canvas.PropTypes = {
    width: PropTypes.string,
    height: PropTypes.string
};

export default Canvas;