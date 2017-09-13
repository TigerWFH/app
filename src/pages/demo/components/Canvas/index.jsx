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
            context.fillRect(10, 10, 100, 100);
            context.clearRect(20, 20, 60, 60);
            context.strokeRect(30, 30, 40, 40);
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
    _renderCircle(context) {
        if (context instanceof CanvasRenderingContext2D) {
            context.beginPath();
            context.arc(30, 100, 20, 0, 2 * Math.PI, false);
            context.stroke();
            context.closePath();
            context.beginPath();
            context.arc(80, 100, 20, 0, 3 / 2 * Math.PI, true);
            context.stroke();
            context.closePath();
            context.beginPath();
            context.arc(130, 100, 20, 0, 3 / 2 * Math.PI, false);
            context.stroke();
            context.fillText('y正向朝下的，所以下面是Math.PI/2', 30, 30);
            context.closePath();
        }
        else {
            console.warn('the browser do not support canvas!')
        }
    }
    _renderArc(context) {
        if (context instanceof CanvasRenderingContext2D) {
            context.beginPath();
            context.moveTo(50, 50);
            context.arcTo(50, 60, 100, 60, 60);
            context.stroke();
            context.fillRect(50, 60, 5, 5);
            context.fillRect(100, 60, 5, 5);
            context.closePath();
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
            // this._renderCircle(context);
            this._renderArc(context);
            // this._renderSmailFace(context);
        }
        else {
            console.error('the browser do not support canvas!');
        }
    }

    render() {
        return <canvas ref={(canvas) => { this.canvas = canvas; }}
            width={this.props.width || '800px'}
            height={this.props.height || '600px'} >
        </canvas>
    }
}

Canvas.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string
};

export default Canvas;