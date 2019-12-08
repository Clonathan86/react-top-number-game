import React from 'react';
import PropTypes from 'prop-types';

class TopNumber extends React.Component {

    state = {
        highest: 0
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.number > this.state.highest) {
            this.setState({
                highest: nextProps.number
            });
        } else if (!this.props.game) {
            this.setState({
                highest: 0
            });
        }
    }

    render() {
        return (
            <h1>
                Top Number: {this.state.highest}
            </h1>
        );
    }
}

TopNumber.propTypes = {
    number: PropTypes.number,
    game: PropTypes.bool
}

export default TopNumber;
