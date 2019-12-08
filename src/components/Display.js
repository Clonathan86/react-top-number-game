import React from  'react';
import './styles/display.css';

function Display (props) {
	return (
		<div className="display">
			{props.number}
		</div>
	);
}

Display.propTypes = {
	number: React.PropTypes.number.isRequired,
};

export default Display;
