import React from  'react';
import PropTypes from 'prop-types';
import './styles/display.css';

function Display (props) {
	return (
		<div className="display">
			{props.number}
		</div>
	);
}

Display.propTypes = {
	number: PropTypes.number.isRequired,
};

export default Display;
