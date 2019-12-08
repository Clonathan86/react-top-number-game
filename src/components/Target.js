var React = require('react');
var random = require('./Helper').random;

class Target extends React.Component {

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.number !== nextProps.number;
    }

    render() {
        var visibility = this.props.number ? 'visible' : 'hidden';

        var style = {
            left: random(100) + '%',
            top:  random(100) + '%',
            'backgroundColor': this.props.color,
            visibility: visibility
        };

        return <span style={style} className="target" >{this.props.number}</span>
    }
}

module.exports = Target;
