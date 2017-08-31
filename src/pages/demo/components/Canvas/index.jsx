import * as React from 'react';
import PropTypes from 'prop-types';

class Canvas extends React.Component {
    constructor(props) {
        super(props);
        this.canvas = '';
    }
    _renderRect(context) {
        if (context instanceof CanvasRenderingContext2D) {
            context.fillStyle = 'rgb(200, 0, 0)';
            context.fillRect(10, 10, 55, 50);
            context.fillStyle = "rgba(0, 0, 200, 0.5)";
            context.fillRect(30, 30, 55, 50);
        }
        else {
            console.warn('the browser do not support canvas!')
        }
    }
    _renderTrangle(context) {
        if (context instanceof CanvasRenderingContext2D) {
            context.beginPath();
            context.moveTo(75, 50);
            context.lineTo(100, 75);
            context.lineTo(100, 25);
            context.fill();
        }
        else {
            console.warn('the browser do not support canvas!')
        }
    }
    _renderSmailFace(context) {
        if (context instanceof CanvasRenderingContext2D) {
            context.beginPath();
            context.arc(75, 75, 50, 0, Math.PI * 2, true);
            context.moveTo(110, 75);
            context.arc(75, 75, 35, 0, Math.PI, false);
            context.moveTo(65, 65);
            context.arc(60, 65, 5, 0, Math.PI * 2, false);
            context.moveTo(95, 65);
            context.arc(90, 65, 5, 0, Math.PI * 2, true);
            context.stroke();
        }
        else {
            console.warn('the browser do not support canvas!')
        }
    }
    componentDidMount() {
        if (this.canvas !== '' && this.canvas.getContext) {
            let context = this.canvas.getContext('2d');
            // this._renderRect(context);
            // this._renderTrangle(context);
            this._renderSmailFace(context);
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